// JustUs server: Next.js + a members-only WebSocket for realtime.
//   - database changes arrive via Postgres LISTEN/NOTIFY and go only to that world's sockets
//   - broadcasts (typing, call signalling, Lagos positions, bursts) are relayed to the partner
//   - presence (who's online and what they're doing) is tracked in memory
// Run: node server.mjs (dev) · NODE_ENV=production node server.mjs (prod)
import { createHash, randomUUID } from "node:crypto";
import { createServer } from "node:http";
import next from "next";
import pg from "pg";
import { WebSocketServer } from "ws";
import nextEnv from "@next/env";

// Loads .env, .env.local, etc. the same way Next.js does.
nextEnv.loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

const dev = process.env.NODE_ENV !== "production";
const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOST || (dev ? "localhost" : "0.0.0.0");
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set. See .env.example.");
  process.exit(1);
}
const ssl = /sslmode=require/.test(DATABASE_URL) ? { rejectUnauthorized: false } : undefined;
pg.types.setTypeParser(1082, (v) => v);
pg.types.setTypeParser(20, (v) => Number(v));

const db = new pg.Pool({ connectionString: DATABASE_URL, max: 3, ssl });
const STREAMED = new Set(["messages", "message_reads", "calls", "story_sessions", "game_sessions", "room_state", "world_members", "daily_rewards", "world_rewards", "activity", "worlds", "love_notes", "cash_transfers", "owned_vehicles", "sleep_sessions", "profiles"]);
const MAX_MESSAGE_BYTES = 64 * 1024;
const MAX_PER_SECOND = 80;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
await app.prepare();
const nextUpgrade = app.getUpgradeHandler();

/** @type {Map<string, Set<import("ws").WebSocket>>} */
const rooms = new Map();
// Game state the server is authoritative for, per world: who sits where in which
// vehicle, and each vehicle's last pose (so a parked car is where its driver left it).
/** @type {Map<string, { seats: Record<string, { driver?: string, passenger?: string }>, poses: Record<string, unknown> }>} */
const games = new Map();
const VEHICLE_ID = /^(car-\d{1,2}|jet-1)$/;
function game(worldId) {
  let g = games.get(worldId);
  if (!g) games.set(worldId, (g = { seats: {}, poses: {} }));
  return g;
}
function publishSeats(worldId) {
  const out = JSON.stringify({ type: "seats", seats: game(worldId).seats });
  for (const ws of rooms.get(worldId) ?? []) send(ws, out);
}
// Seats are held by a connection ("userId|conn"), so the same account on two
// devices can't both drive; clients compare against their own conn id.
function releaseSeatsOf(worldId, holder) {
  const g = game(worldId);
  let changed = false;
  for (const seat of Object.values(g.seats))
    for (const k of ["driver", "passenger"]) if (seat[k] === holder) (delete seat[k], (changed = true));
  if (changed) publishSeats(worldId);
}
const wss = new WebSocketServer({ noServer: true, maxPayload: MAX_MESSAGE_BYTES });

const sha256 = (s) => createHash("sha256").update(s).digest("hex");
function cookie(header, name) {
  for (const part of (header || "").split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return null;
}

async function authenticate(req) {
  const token = cookie(req.headers.cookie, "ju_session");
  if (!token) return null;
  const { rows } = await db.query(
    `select s.user_id, m.world_id from auth.sessions s
       join public.world_members m on m.user_id = s.user_id
      where s.token_hash = $1 and s.expires_at > now()`,
    [sha256(token)],
  );
  return rows[0] ? { userId: rows[0].user_id, worldId: rows[0].world_id, tokenHash: sha256(token) } : null;
}

function send(ws, msg) {
  if (ws.readyState === ws.OPEN) ws.send(typeof msg === "string" ? msg : JSON.stringify(msg));
}

function presenceOf(worldId) {
  const users = {};
  for (const ws of rooms.get(worldId) ?? []) {
    const cur = users[ws.meta.userId];
    if (!cur || ws.meta.at > cur.at) users[ws.meta.userId] = { activity: ws.meta.activity, at: ws.meta.at };
  }
  return users;
}

function publishPresence(worldId) {
  const msg = JSON.stringify({ type: "presence", users: presenceOf(worldId) });
  for (const ws of rooms.get(worldId) ?? []) send(ws, msg);
}

wss.on("connection", (ws, req, meta) => {
  ws.meta = { ...meta, activity: "Just arrived", at: Date.now(), conn: randomUUID().slice(0, 8) };
  ws.alive = true;
  ws.budget = { second: 0, count: 0 };
  let room = rooms.get(meta.worldId);
  if (!room) rooms.set(meta.worldId, (room = new Set()));
  room.add(ws);
  const g = game(meta.worldId);
  send(ws, { type: "ready", userId: meta.userId, conn: ws.meta.conn, now: Date.now(), seats: g.seats, poses: g.poses });
  publishPresence(meta.worldId);

  ws.on("pong", () => (ws.alive = true));
  ws.on("message", (raw) => {
    const second = Math.floor(Date.now() / 1000);
    if (ws.budget.second !== second) ws.budget = { second, count: 0 };
    if (++ws.budget.count > MAX_PER_SECOND) return; // drop floods quietly
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return;
    }
    if (msg.type === "broadcast" && typeof msg.event === "string" && msg.event.length <= 40) {
      // "from" is always set by the server so it can't be spoofed.
      const out = JSON.stringify({ type: "broadcast", event: msg.event, payload: { ...(msg.payload ?? {}), from: ws.meta.userId } });
      for (const peer of rooms.get(ws.meta.worldId) ?? []) if (peer !== ws) send(peer, out);
    } else if (msg.type === "track") {
      ws.meta.activity = String(msg.activity ?? "").slice(0, 100);
      ws.meta.at = Date.now();
      publishPresence(ws.meta.worldId);
    } else if (msg.type === "seat" && VEHICLE_ID.test(String(msg.vehicle)) && ["driver", "passenger"].includes(msg.seat)) {
      // Seat claims are validated here so two people can never drive the same vehicle.
      const g = game(ws.meta.worldId);
      const v = (g.seats[msg.vehicle] ??= {});
      const me = `${ws.meta.userId}|${ws.meta.conn}`;
      const mine = (h) => typeof h === "string" && h.startsWith(ws.meta.userId + "|");
      if (msg.action === "claim") {
        const taken = v[msg.seat] && v[msg.seat] !== me;
        // One seat per person at a time (across all their devices).
        const busyElsewhere = Object.entries(g.seats).some(([id, st]) => (id !== msg.vehicle && (mine(st.driver) || mine(st.passenger))) || (id === msg.vehicle && [st.driver, st.passenger].some((h) => mine(h) && h !== me)));
        const passengerNeedsDriver = msg.seat === "passenger" && !v.driver && !msg.vehicle.startsWith("car");
        if (taken || busyElsewhere || passengerNeedsDriver) send(ws, { type: "seat-denied", vehicle: msg.vehicle, seat: msg.seat });
        else {
          for (const k of ["driver", "passenger"]) if (v[k] === me) delete v[k];
          v[msg.seat] = me;
        }
      } else if (msg.action === "release") {
        if (v[msg.seat] === me) delete v[msg.seat];
      }
      publishSeats(ws.meta.worldId);
    } else if (msg.type === "pose" && VEHICLE_ID.test(String(msg.vehicle)) && Array.isArray(msg.p) && msg.p.length <= 12) {
      // Only the current driver may move a vehicle.
      const g = game(ws.meta.worldId);
      if (g.seats[msg.vehicle]?.driver !== `${ws.meta.userId}|${ws.meta.conn}`) return;
      const p = msg.p.map(Number);
      if (p.some((n) => !Number.isFinite(n) || Math.abs(n) > 1e5)) return;
      g.poses[msg.vehicle] = p;
      const out = JSON.stringify({ type: "pose", vehicle: msg.vehicle, p, t: Date.now() });
      for (const peer of rooms.get(ws.meta.worldId) ?? []) if (peer !== ws) send(peer, out);
    } else if (msg.type === "sync") {
      const g = game(ws.meta.worldId);
      send(ws, { type: "ready", userId: ws.meta.userId, conn: ws.meta.conn, now: Date.now(), seats: g.seats, poses: g.poses });
    } else if (msg.type === "ping") {
      send(ws, { type: "pong" });
    }
  });
  ws.on("close", () => {
    const r = rooms.get(ws.meta.worldId);
    r?.delete(ws);
    // Free any seats if this was the user's last open connection.
    releaseSeatsOf(ws.meta.worldId, `${ws.meta.userId}|${ws.meta.conn}`);
    if (r && !r.size) rooms.delete(ws.meta.worldId);
    else publishPresence(ws.meta.worldId);
  });
});

// Drop dead connections; re-check sessions so signed-out devices are disconnected.
let tick = 0;
setInterval(async () => {
  tick++;
  for (const ws of wss.clients) {
    if (!ws.alive) {
      ws.terminate();
      continue;
    }
    ws.alive = false;
    ws.ping();
    if (tick % 12 === 0) {
      const { rowCount } = await db.query("select 1 from auth.sessions where token_hash = $1 and expires_at > now()", [ws.meta.tokenHash]).catch(() => ({ rowCount: 1 }));
      if (!rowCount) ws.close(4001, "session ended");
    }
  }
}, 25_000);

// Database change feed
let listenRetry;
function retryListen(client) {
  if (listenRetry) return;
  listenRetry = setTimeout(() => {
    listenRetry = undefined;
    listen().catch((e) => {
      console.error("[realtime] could not listen:", e.message);
      retryListen();
    });
  }, 2000);
  client?.end().catch(() => {});
}

async function listen() {
  const client = new pg.Client({ connectionString: DATABASE_URL, ssl });
  client.on("error", (e) => {
    console.error("[realtime] listener error:", e.message);
    retryListen(client);
  });
  client.on("end", () => retryListen());
  await client.connect();
  await client.query("listen justus_changes");
  client.on("notification", async (n) => {
    try {
      const evt = JSON.parse(n.payload);
      if (!STREAMED.has(evt.table) || !evt.world || !rooms.has(evt.world)) return;
      let row = evt.row;
      if (!row && evt.id) row = (await db.query(`select * from public."${evt.table}" where id = $1`, [evt.id])).rows[0];
      if (!row) return;
      const out = JSON.stringify({ type: "change", table: evt.table, eventType: evt.op, new: evt.op === "DELETE" ? {} : row, old: evt.op === "DELETE" ? row : {} });
      for (const ws of rooms.get(evt.world) ?? []) send(ws, out);
    } catch (e) {
      console.error("[realtime] bad notification:", e.message);
    }
  });
  console.log("[realtime] listening for database changes");
}
await listen().catch((e) => {
  console.error("[realtime] could not listen:", e.message);
  retryListen();
});

const server = createServer((req, res) => handle(req, res));
server.on("upgrade", async (req, socket, head) => {
  if (!req.url?.startsWith("/ws")) return nextUpgrade(req, socket, head);
  // Block cross-site WebSocket hijacking: the browser always sends Origin.
  const origin = req.headers.origin;
  const host = req.headers["x-forwarded-host"] ?? req.headers.host;
  try {
    if (!origin || new URL(origin).host !== host) throw new Error("origin");
  } catch {
    socket.write("HTTP/1.1 403 Forbidden\r\n\r\n");
    return socket.destroy();
  }
  const meta = await authenticate(req).catch(() => null);
  if (!meta) {
    socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
    return socket.destroy();
  }
  wss.handleUpgrade(req, socket, head, (ws) => wss.emit("connection", ws, req, meta));
});
server.listen(port, hostname, () => console.log(`> JustUs ready on http://${hostname}:${port} (${dev ? "development" : "production"})`));
