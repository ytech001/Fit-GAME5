"use client";
import { AnimatePresence, m } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MicButton, VoicePlayer, VoiceRecorder } from "@/components/chat/voice";
import { Avatar } from "@/components/ui/avatar";
import { useSendBurst } from "@/components/ui/bursts";
import { IconDownload, IconEdit, IconGift, IconImage, IconReply, IconRetry, IconSend, IconStar, IconTrash } from "@/components/ui/icons";
import { EmptyState, ErrorNote, Sheet, Spinner } from "@/components/ui/primitives";
import { toast } from "@/components/ui/toast";
import { BURSTS, GIFTS } from "@/content/gifts";
import { compressImage, validateMedia } from "@/lib/media";
import { downloadMedia } from "@/lib/download";
import { signedUrl, useSignedUrl } from "@/lib/signed-urls";
import { sfx } from "@/lib/sound";
import { db, deleteMedia } from "@/lib/db/client";
import type { Message } from "@/lib/types";
import { uploadMedia } from "@/lib/upload";
import { cn, dayLabel, errorMessage, formatDuration, timeLabel, uuid } from "@/lib/utils";
import { useActivity, useWorld } from "@/lib/world-context";

const PAGE = 30;
const QUICK_REACTIONS = ["❤️", "😂", "🥹", "🔥", "😮", "👍"];

type Local = Message & {
  _status?: "sending" | "uploading" | "failed";
  _progress?: number;
  _blob?: Blob;
  _localUrl?: string;
  _error?: string;
};

export function ChatView() {
  useActivity("In the chat 💬");
  const { world, me, partner, onChange, onBroadcast, onResync, broadcast } = useWorld();
  const api = db();
  const [messages, setMessages] = useState<Local[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [partnerRead, setPartnerRead] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const [replyTo, setReplyTo] = useState<Local | null>(null);
  const [editingMessage, setEditingMessage] = useState<Local | null>(null);
  const [actionFor, setActionFor] = useState<Local | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const topSentinel = useRef<HTMLDivElement>(null);
  const stickToBottom = useRef(true);
  const prevHeight = useRef<number | null>(null);

  const upsert = useCallback((incoming: Local[]) => {
    setMessages((cur) => {
      const map = new Map(cur.map((x) => [x.client_id, x]));
      for (const msg of incoming) map.set(msg.client_id, { ...map.get(msg.client_id), ...msg, _status: msg._status, _progress: msg._progress });
      return [...map.values()].sort((a, b) => a.created_at.localeCompare(b.created_at));
    });
  }, []);

  const load = useCallback(async () => {
    setLoadError(null);
    setLoading(true);
    const [{ data, error }, { data: read }] = await Promise.all([
      api.from("messages").select("*").eq("world_id", world.id).order("created_at", { ascending: false }).limit(PAGE),
      partner ? api.from("message_reads").select("last_read_at").eq("world_id", world.id).eq("user_id", partner.id).maybeSingle() : Promise.resolve({ data: null }),
    ]);
    setLoading(false);
    if (error) return setLoadError(errorMessage(error));
    setHasMore((data ?? []).length === PAGE);
    upsert((data ?? []) as Local[]);
    setPartnerRead(read?.last_read_at ?? null);
  }, [api, world.id, partner, upsert]);

  useEffect(() => {
    load();
  }, [load]);
  useEffect(() => onResync(load), [onResync, load]);

  // Older history: loads when the top sentinel scrolls into view, keeping scroll position.
  const loadOlder = useCallback(async () => {
    if (loadingOlder || !hasMore) return;
    const oldest = messages.find((x) => !x._status);
    if (!oldest) return;
    setLoadingOlder(true);
    prevHeight.current = scroller.current?.scrollHeight ?? null;
    const { data } = await api.from("messages").select("*").eq("world_id", world.id).lt("created_at", oldest.created_at).order("created_at", { ascending: false }).limit(PAGE);
    setHasMore((data ?? []).length === PAGE);
    stickToBottom.current = false;
    upsert((data ?? []) as Local[]);
    setLoadingOlder(false);
  }, [loadingOlder, hasMore, messages, api, world.id, upsert]);

  useEffect(() => {
    const el = topSentinel.current;
    if (!el || loading) return;
    const io = new IntersectionObserver((e) => e[0].isIntersecting && loadOlder(), { root: scroller.current, rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, [loadOlder, loading]);

  useLayoutEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (prevHeight.current !== null) {
      el.scrollTop += el.scrollHeight - prevHeight.current;
      prevHeight.current = null;
    } else if (stickToBottom.current) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typing]);

  // Realtime: new/updated messages, partner read receipts, typing.
  useEffect(() => {
    const offMsg = onChange("messages", (p) => {
      if (p.eventType === "DELETE") return;
      const row = p.new as Message;
      if (p.eventType === "INSERT" && row.sender_id !== me.id) {
        setTyping(false);
        stickToBottom.current = isNearBottom(scroller.current);
      }
      upsert([row]);
    });
    const offRead = onChange("message_reads", (p) => {
      const row = p.new as { user_id: string; last_read_at: string };
      if (row?.user_id === partner?.id) setPartnerRead(row.last_read_at);
    });
    let typingTimer: ReturnType<typeof setTimeout>;
    const offTyping = onBroadcast("typing", () => {
      setTyping(true);
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => setTyping(false), 3500);
    });
    return () => {
      offMsg();
      offRead();
      offTyping();
      clearTimeout(typingTimer);
    };
  }, [onChange, onBroadcast, upsert, me.id, partner?.id]);

  // Read receipts: mark read while the chat is visible.
  const latestPartnerMsg = useMemo(() => [...messages].reverse().find((x) => x.sender_id !== me.id && !x._status), [messages, me.id]);
  useEffect(() => {
    if (!latestPartnerMsg) return;
    const mark = () => {
      if (document.visibilityState !== "visible") return;
      api.from("message_reads").upsert({ world_id: world.id, user_id: me.id, last_read_at: new Date().toISOString() }).then(() => {});
    };
    mark();
    document.addEventListener("visibilitychange", mark);
    return () => document.removeEventListener("visibilitychange", mark);
  }, [latestPartnerMsg, api, world.id, me.id]);

  // ── sending ──
  const insertMessage = useCallback(
    async (local: Local) => {
      const row = {
        world_id: local.world_id,
        sender_id: local.sender_id,
        client_id: local.client_id,
        kind: local.kind,
        body: local.body,
        reply_to: local.reply_to,
        media_path: local.media_path,
        media_meta: local.media_meta,
      };
      const { data, error } = await api.from("messages").insert(row).select().single();
      if (error) {
        // Duplicate client_id means a previous attempt actually succeeded.
        if (error.code === "23505") {
          const { data: existing } = await api.from("messages").select("*").eq("client_id", local.client_id).single();
          if (existing) return upsert([{ ...(existing as Local), _status: undefined }]);
        }
        upsert([{ ...local, _status: "failed", _error: errorMessage(error) }]);
        return;
      }
      sfx.sent();
      upsert([{ ...(data as Local), _status: undefined, _localUrl: local._localUrl }]);
    },
    [api, upsert],
  );

  const sendMedia = useCallback(
    async (local: Local) => {
      if (!local._blob) return;
      upsert([{ ...local, _status: "uploading", _progress: 0 }]);
      try {
        const kind = local.kind === "voice" ? "voice" : local.kind === "video" ? "video" : "image";
        const { path } = await uploadMedia({
          worldId: world.id,
          userId: me.id,
          blob: local._blob,
          kind,
          meta: local.media_meta,
          onProgress: (f) => upsert([{ ...local, _status: "uploading", _progress: f }]),
        });
        await insertMessage({ ...local, media_path: path, _status: "sending" });
      } catch (e) {
        upsert([{ ...local, _status: "failed", _error: errorMessage(e) }]);
      }
    },
    [upsert, insertMessage, world.id, me.id],
  );

  const makeLocal = useCallback(
    (p: Partial<Local>): Local => ({
      id: uuid(),
      world_id: world.id,
      sender_id: me.id,
      client_id: uuid(),
      kind: "text",
      body: null,
      reply_to: replyTo?.id ?? null,
      media_path: null,
      media_meta: {},
      reactions: {},
      starred_by: [],
      created_at: new Date().toISOString(),
      deleted_at: null,
      _status: "sending",
      ...p,
    }),
    [world.id, me.id, replyTo],
  );

  const send = useCallback(
    (p: Partial<Local>) => {
      const local = makeLocal(p);
      stickToBottom.current = true;
      setReplyTo(null);
      upsert([local]);
      if (local._blob) sendMedia(local);
      else insertMessage(local);
    },
    [makeLocal, upsert, sendMedia, insertMessage],
  );

  const retry = (msg: Local) => (msg._blob && !msg.media_path ? sendMedia(msg) : insertMessage({ ...msg, _status: "sending" }));

  const onPickMedia = async (file: File) => {
    if (file.type.startsWith("video/")) {
      const invalid = validateMedia(file, "video");
      if (invalid) return toast(invalid, "error");
      send({ kind: "video", _blob: file, _localUrl: URL.createObjectURL(file), media_meta: {} });
      return;
    }
    const invalid = validateMedia(file, "image");
    if (invalid && !/50 MB/.test(invalid)) return toast(invalid, "error");
    const { blob, width, height } = await compressImage(file);
    const stillInvalid = validateMedia({ type: blob.type || file.type, size: blob.size }, "image");
    if (stillInvalid) return toast(stillInvalid, "error");
    send({ kind: "image", _blob: blob, _localUrl: URL.createObjectURL(blob), media_meta: { width, height } });
  };

  const saveEdit = useCallback(
    async (id: string, newBody: string) => {
      const trimmed = newBody.trim();
      if (!trimmed) return;
      setEditingMessage(null);
      const { error } = await api.from("messages").update({ body: trimmed }).eq("id", id);
      if (error) {
        toast("Couldn't update message — try again.", "error");
      } else {
        setMessages((cur) => cur.map((m) => (m.id === id ? { ...m, body: trimmed } : m)));
        toast("Message edited", "ok");
      }
    },
    [api],
  );

  const byId = useMemo(() => new Map(messages.map((x) => [x.id, x])), [messages]);

  return (
    <div className="flex h-[calc(100dvh-3.5rem-4rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] flex-col md:h-[calc(100dvh-3.5rem)]">
      <div ref={scroller} onScroll={(e) => (stickToBottom.current = isNearBottom(e.currentTarget))} className="scrollbar-thin flex-1 overflow-y-auto px-3 pb-4 pt-2 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div ref={topSentinel} />
          {loadingOlder && (
            <div className="flex justify-center py-3 text-ink-faint">
              <Spinner />
            </div>
          )}
          {!hasMore && messages.length > 0 && <p className="py-4 text-center text-xs text-ink-faint">The very beginning of your story ✨</p>}
          {loading && messages.length === 0 && <ChatSkeleton />}
          {loadError && <ErrorNote onRetry={load}>{loadError}</ErrorNote>}
          {!loading && !loadError && messages.length === 0 && (
            <EmptyState emoji="💌" title="Say the first hello">
              {partner ? `Everything you send here is only ever seen by you and ${partner.display_name}.` : "Your partner will see these once they join."}
            </EmptyState>
          )}
          {messages.map((msg, i) => {
            const prev = messages[i - 1];
            const newDay = !prev || new Date(prev.created_at).toDateString() !== new Date(msg.created_at).toDateString();
            const grouped = prev && !newDay && prev.sender_id === msg.sender_id && +new Date(msg.created_at) - +new Date(prev.created_at) < 5 * 60 * 1000;
            return (
              <div key={msg.client_id}>
                {newDay && <div className="my-4 text-center text-xs font-semibold text-ink-faint">{dayLabel(msg.created_at)}</div>}
                <Bubble
                  msg={msg}
                  mine={msg.sender_id === me.id}
                  grouped={Boolean(grouped)}
                  replied={msg.reply_to ? byId.get(msg.reply_to) : undefined}
                  seen={Boolean(partnerRead && partnerRead >= msg.created_at)}
                  onActions={() => !msg._status && setActionFor(msg)}
                  onReply={() => !msg._status && setReplyTo(msg)}
                  onRetry={() => retry(msg)}
                  onReact={(emoji) => api.rpc("toggle_reaction", { p_message: msg.id, p_emoji: emoji }).then(({ error }) => error && toast("Couldn't react — try again.", "error"))}
                />
              </div>
            );
          })}
          <AnimatePresence>
            {typing && (
              <m.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-2 flex items-center gap-2 text-xs text-ink-faint" aria-live="polite">
                <Avatar look={partner?.avatar} size={24} />
                <span className="flex gap-1 rounded-full bg-surface-2 px-3 py-2">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 rounded-full bg-ink-soft animate-bob" style={{ animationDelay: `${d * 0.15}s`, animationDuration: "1s" }} />
                  ))}
                </span>
                {partner?.display_name} is typing
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Composer
        worldId={world.id}
        replyTo={replyTo}
        replyName={replyTo ? (replyTo.sender_id === me.id ? "yourself" : partner?.display_name ?? "") : ""}
        onCancelReply={() => setReplyTo(null)}
        editingMessage={editingMessage}
        onCancelEdit={() => setEditingMessage(null)}
        onSaveEdit={saveEdit}
        onSendText={(body) => send({ kind: "text", body })}
        onSendVoice={(blob, ms) => send({ kind: "voice", _blob: blob, media_meta: { duration_ms: ms } })}
        onPickMedia={onPickMedia}
        onGift={(id) => send({ kind: "gift", body: id })}
        onTyping={() => broadcast("typing", {})}
      />

      <Sheet open={Boolean(actionFor)} onClose={() => setActionFor(null)} title="Message">
        {actionFor && (
          <div className="space-y-4">
            <div className="flex justify-between gap-1">
              {QUICK_REACTIONS.map((e) => (
                <button
                  key={e}
                  onClick={() => {
                    api.rpc("toggle_reaction", { p_message: actionFor.id, p_emoji: e }).then(() => {});
                    setActionFor(null);
                  }}
                  className="grid h-12 w-12 place-items-center rounded-full bg-surface-2 text-2xl transition hover:scale-110"
                  aria-label={`React ${e}`}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className="grid gap-1">
              <SheetAction icon={<IconReply />} onClick={() => (setReplyTo(actionFor), setEditingMessage(null), setActionFor(null))}>
                Reply
              </SheetAction>
              {actionFor.sender_id === me.id && actionFor.kind === "text" && !actionFor.deleted_at && (
                <SheetAction
                  icon={<IconEdit />}
                  onClick={() => {
                    setEditingMessage(actionFor);
                    setReplyTo(null);
                    setActionFor(null);
                  }}
                >
                  Edit message
                </SheetAction>
              )}
              {(actionFor.kind === "image" || actionFor.kind === "video") && !actionFor.deleted_at && (
                <SheetAction
                  icon={<IconDownload />}
                  onClick={async () => {
                    const target = actionFor;
                    setActionFor(null);
                    const path = target.media_path;
                    const targetUrl = path ? await signedUrl(path) : target._localUrl;
                    if (!targetUrl) return toast("Media link unavailable", "error");
                    const ext = target.kind === "video" ? "mp4" : "jpg";
                    await downloadMedia(targetUrl, `justus-${target.kind}-${Date.now()}.${ext}`);
                  }}
                >
                  Download {actionFor.kind === "video" ? "video" : "photo"}
                </SheetAction>
              )}
              <SheetAction
                icon={<IconStar />}
                onClick={() => {
                  api.rpc("toggle_star", { p_message: actionFor.id }).then(({ error }) => toast(error ? "Couldn't save." : actionFor.starred_by.includes(me.id) ? "Removed from favourites" : "Saved to favourites ⭐", error ? "error" : "ok"));
                  setActionFor(null);
                }}
              >
                {actionFor.starred_by.includes(me.id) ? "Remove from favourites" : "Save to favourites"}
              </SheetAction>
              {actionFor.kind === "text" && actionFor.body && (
                <SheetAction icon={<span className="text-lg">📋</span>} onClick={() => (navigator.clipboard?.writeText(actionFor.body!), setActionFor(null), toast("Copied"))}>
                  Copy text
                </SheetAction>
              )}
              {actionFor.sender_id === me.id && !actionFor.deleted_at && (
                <SheetAction
                  icon={<IconTrash />}
                  danger
                  onClick={async () => {
                    const target = actionFor;
                    setActionFor(null);
                    const { error } = await api.from("messages").update({ deleted_at: new Date().toISOString(), body: null }).eq("id", target.id);
                    if (error) toast("Couldn't delete — try again.", "error");
                    else {
                      if (target.media_path) await deleteMedia([target.media_path]);
                      upsert([{ ...target, deleted_at: new Date().toISOString(), body: null }]);
                    }
                  }}
                >
                  Unsend
                </SheetAction>
              )}
            </div>
          </div>
        )}
      </Sheet>
    </div>
  );
}

function isNearBottom(el: HTMLElement | null) {
  return !el || el.scrollHeight - el.scrollTop - el.clientHeight < 120;
}

function SheetAction({ icon, children, onClick, danger }: { icon: React.ReactNode; children: React.ReactNode; onClick: () => void; danger?: boolean }) {
  return (
    <button onClick={onClick} className={cn("flex min-h-12 items-center gap-3 rounded-2xl px-3 text-left font-medium hover:bg-surface-2", danger && "text-danger")}>
      {icon}
      {children}
    </button>
  );
}

function ChatSkeleton() {
  return (
    <div className="space-y-3 py-4">
      {[60, 40, 72, 30, 55].map((w, i) => (
        <div key={i} className={cn("flex", i % 2 ? "justify-end" : "justify-start")}>
          <div className="skeleton h-10" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  );
}

function Bubble({
  msg,
  mine,
  grouped,
  replied,
  seen,
  onActions,
  onReply,
  onRetry,
  onReact,
}: {
  msg: Local;
  mine: boolean;
  grouped: boolean;
  replied?: Local;
  seen: boolean;
  onActions: () => void;
  onReply: () => void;
  onRetry: () => void;
  onReact: (emoji: string) => void;
}) {
  const { me } = useWorld();
  const [offsetX, setOffsetX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const wasSwipedRef = useRef(false);
  const didHapticRef = useRef(false);
  const reactions = Object.entries(msg.reactions ?? {}).filter(([, users]) => users.length);
  const deleted = Boolean(msg.deleted_at);

  const SWIPE_THRESHOLD = 48;

  const onTouchStart = (e: React.TouchEvent) => {
    if (deleted || msg._status) return;
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
    wasSwipedRef.current = false;
    didHapticRef.current = false;
    setIsSwiping(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || deleted || msg._status) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStartRef.current.x;
    const dy = t.clientY - touchStartRef.current.y;

    // Forward swipe (swiping right)
    if (dx > 6 && Math.abs(dx) > Math.abs(dy)) {
      wasSwipedRef.current = true;
      setIsSwiping(true);
      const clamped = Math.min(Math.max(dx * 0.65, 0), 80);
      setOffsetX(clamped);

      if (clamped >= SWIPE_THRESHOLD && !didHapticRef.current) {
        didHapticRef.current = true;
        if (typeof navigator !== "undefined" && navigator.vibrate) {
          navigator.vibrate(15);
        }
      }
    }
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current) return;
    touchStartRef.current = null;
    setIsSwiping(false);

    if (offsetX >= SWIPE_THRESHOLD) {
      sfx.pop();
      onReply();
    }
    setOffsetX(0);
    setTimeout(() => {
      wasSwipedRef.current = false;
    }, 120);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (wasSwipedRef.current || deleted || msg._status) return;
    // Tapping on the message opens the reactions and options sheet!
    onActions();
  };

  if (msg.kind === "call") {
    const info = safeJson<{ kind: string; status: string; secs: number }>(msg.body);
    const label =
      info?.status === "missed" ? `Missed ${info.kind} call` : info?.status === "declined" ? `Declined ${info.kind} call` : info?.status === "failed" ? `${info?.kind} call couldn't connect` : `${info?.kind === "video" ? "Video" : "Voice"} call · ${formatDuration((info?.secs ?? 0) * 1000)}`;
    return (
      <div className="my-3 flex justify-center">
        <span className={cn("rounded-full px-3 py-1.5 text-xs font-medium", info?.status === "missed" ? "bg-danger/10 text-danger" : "bg-surface-2 text-ink-soft")}>
          {info?.kind === "video" ? "📹" : "📞"} {label} · {timeLabel(msg.created_at)}
        </span>
      </div>
    );
  }

  if (msg.kind === "gift") {
    const gift = GIFTS.find((g) => g.id === msg.body);
    return (
      <div className={cn("my-3 flex", mine ? "justify-end" : "justify-start")}>
        <div className="rounded-3xl border border-gold/30 bg-gold/10 px-5 py-3 text-center">
          <div className="text-4xl animate-bob">{gift?.emoji ?? "🎁"}</div>
          <div className="mt-1 text-xs text-gold">{mine ? `You sent ${gift?.name}` : `Sent you ${gift?.name}`}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", mine ? "items-end" : "items-start", grouped ? "mt-0.5" : "mt-3")}>
      <div className="group relative flex max-w-[82%] items-end gap-1.5 sm:max-w-[70%]">
        {/* Forward-swipe reply icon indicator */}
        <div
          style={{
            opacity: Math.min(offsetX / (SWIPE_THRESHOLD * 0.7), 1),
            transform: `scale(${Math.min(0.4 + (offsetX / SWIPE_THRESHOLD) * 0.65, 1.15)})`,
            transition: isSwiping ? "none" : "all 0.22s ease-out",
          }}
          className={cn(
            "pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-xs transition-colors",
            offsetX >= SWIPE_THRESHOLD ? "bg-rose text-white shadow-sm" : "bg-surface-2 text-ink-faint"
          )}
          aria-hidden="true"
        >
          <IconReply size={13} />
        </div>

        <button
          type="button"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          onClick={handleClick}
          onDoubleClick={() => !deleted && onReact("❤️")}
          onContextMenu={(e) => {
            e.preventDefault();
            onActions();
          }}
          aria-label="Message options (tap to react or swipe forward to reply)"
          style={{
            transform: `translate3d(${offsetX}px, 0, 0)`,
            transition: isSwiping ? "none" : "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
          className={cn(
            "relative select-text overflow-hidden text-left text-[15px] leading-snug transition-transform active:scale-[0.98]",
            msg.kind === "image" || msg.kind === "video" ? "rounded-2xl p-1" : "rounded-[20px] px-3.5 py-2",
            mine ? "rounded-br-md bg-[var(--bubble-me)] text-[var(--bubble-me-ink)]" : "rounded-bl-md bg-[var(--bubble-them)] text-ink",
            deleted && "bg-transparent italic text-ink-faint ring-1 ring-line",
          )}
        >
          {replied && !deleted && (
            <span className={cn("mb-1.5 block truncate rounded-xl border-l-2 px-2 py-1 text-xs", mine ? "border-black/30 bg-black/10" : "border-rose bg-white/5")}>
              {replied.deleted_at ? "Unsent message" : replied.kind === "image" ? "📷 Photo" : replied.kind === "video" ? "📹 Video" : replied.kind === "voice" ? "🎙️ Voice note" : replied.body}
            </span>
          )}
          {deleted ? (
            "Message unsent"
          ) : msg.kind === "image" ? (
            <ChatImage msg={msg} />
          ) : msg.kind === "video" ? (
            <ChatVideo msg={msg} />
          ) : msg.kind === "voice" ? (
            <VoicePlayer path={msg.media_path} durationMs={msg.media_meta?.duration_ms} mine={mine} />
          ) : (
            <span className="whitespace-pre-wrap break-words">{msg.body}</span>
          )}
          {msg._status === "uploading" && (
            <span className="absolute inset-x-3 bottom-1.5 h-1 overflow-hidden rounded-full bg-black/25">
              <span className="block h-full bg-white transition-[width]" style={{ width: `${Math.round((msg._progress ?? 0) * 100)}%` }} />
            </span>
          )}
        </button>
        <button onClick={onActions} aria-label="More options" className="mb-1 hidden h-8 w-8 shrink-0 place-items-center rounded-full text-ink-faint hover:bg-surface-2 group-hover:grid">
          ⋯
        </button>
      </div>
      {reactions.length > 0 && (
        <div className={cn("-mt-1.5 flex gap-1", mine ? "mr-2" : "ml-2")}>
          {reactions.map(([emoji, users]) => (
            <button
              key={emoji}
              onClick={() => onReact(emoji)}
              className={cn("rounded-full border px-1.5 text-sm leading-6", users.includes(me.id) ? "border-rose bg-surface-2" : "border-line bg-raised")}
              aria-label={`${emoji} ${users.length}`}
            >
              {emoji}
              {users.length > 1 && <span className="ml-0.5 text-[11px]">{users.length}</span>}
            </button>
          ))}
        </div>
      )}
      <div className="mt-0.5 flex items-center gap-1.5 px-1 text-[11px] text-ink-faint">
        {msg._status === "failed" ? (
          <button onClick={onRetry} className="flex items-center gap-1 font-semibold text-danger">
            <IconRetry size={13} /> {msg._error ? `${msg._error} ` : "Not sent. "}Tap to retry
          </button>
        ) : msg._status === "uploading" ? (
          `Uploading ${Math.round((msg._progress ?? 0) * 100)}%`
        ) : msg._status === "sending" ? (
          "Sending…"
        ) : (
          <>
            {msg.starred_by?.length > 0 && "⭐"}
            <span>{timeLabel(msg.created_at)}</span>
            {mine && <Ticks read={seen} />}
          </>
        )}
      </div>
    </div>
  );
}

function Ticks({ read }: { read: boolean }) {
  if (read) {
    return (
      <span className="inline-flex items-center text-[#38bdf8]" title="Read" aria-label="Read">
        <svg viewBox="0 0 16 11" className="h-3 w-3.5 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          <path d="M1 5.5l3.5 3.5L11 1" />
          <path d="M5 5.5l3.5 3.5L15 1" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center text-ink-faint" title="Delivered" aria-label="Delivered">
      <svg viewBox="0 0 12 11" className="h-3 w-2.5 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
        <path d="M1 5.5l3.5 3.5L11 1" />
      </svg>
    </span>
  );
}

function ChatImage({ msg }: { msg: Local }) {
  const { url, failed } = useSignedUrl(msg._localUrl ? null : msg.media_path);
  const src = msg._localUrl ?? url;
  const [open, setOpen] = useState(false);
  const ratio = msg.media_meta?.width && msg.media_meta?.height ? msg.media_meta.width / msg.media_meta.height : 4 / 3;
  return (
    <>
      <span className="block w-60 max-w-full overflow-hidden rounded-xl bg-black/20 sm:w-72" style={{ aspectRatio: Math.min(Math.max(ratio, 0.6), 1.8) }}>
        {src ? (
          <img
            src={src}
            alt="Shared photo"
            loading="lazy"
            decoding="async"
            className="h-full w-full cursor-zoom-in object-cover"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          />
        ) : (
          <span className="grid h-full w-full place-items-center text-xs opacity-70">{failed ? "Photo unavailable" : <Spinner />}</span>
        )}
      </span>
      {open && src && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/95 p-4" onClick={() => setOpen(false)} role="dialog" aria-label="Photo preview">
          <div className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex items-center gap-2 z-10" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => downloadMedia(src, `justus-photo-${Date.now()}.jpg`)}
              className="flex h-10 items-center gap-1.5 rounded-full bg-white/20 px-3.5 text-xs font-semibold text-white backdrop-blur hover:bg-white/30 active:scale-95 transition"
              aria-label="Download photo"
            >
              <IconDownload size={16} />
              <span>Download</span>
            </button>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-base font-bold text-white backdrop-blur hover:bg-white/30 active:scale-95 transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Shared photo, full size" className="max-h-full max-w-full rounded-xl object-contain" />
        </div>
      )}
    </>
  );
}

function ChatVideo({ msg }: { msg: Local }) {
  const { url, failed } = useSignedUrl(msg._localUrl ? null : msg.media_path);
  const src = msg._localUrl ?? url;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative w-64 max-w-full overflow-hidden rounded-xl bg-black/40 sm:w-72 aspect-video">
        {src ? (
          <div className="group/vid relative h-full w-full">
            <video
              src={src}
              playsInline
              preload="metadata"
              controls
              className="h-full w-full rounded-xl object-contain bg-black"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
              aria-label="Expand video"
              className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/60 text-white opacity-0 transition group-hover/vid:opacity-100 hover:bg-black/80"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="grid h-full w-full place-items-center text-xs opacity-70">
            {failed ? "Video unavailable" : <Spinner />}
          </div>
        )}
      </div>

      {open && src && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-label="Video player"
        >
          <div className="relative max-h-full max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="absolute -top-12 right-0 flex items-center gap-2">
              <button
                type="button"
                onClick={() => downloadMedia(src, `justus-video-${Date.now()}.mp4`)}
                className="flex h-9 items-center gap-1.5 rounded-full bg-white/20 px-3 text-xs font-semibold text-white backdrop-blur hover:bg-white/30 active:scale-95 transition"
                aria-label="Download video"
              >
                <IconDownload size={14} />
                <span>Download</span>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30 text-base font-bold transition active:scale-95"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="max-h-[80vh] w-full rounded-xl bg-black object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

function safeJson<T>(s: string | null): T | null {
  try {
    return s ? (JSON.parse(s) as T) : null;
  } catch {
    return null;
  }
}

function Composer(props: {
  worldId: string;
  replyTo: Local | null;
  replyName: string;
  onCancelReply: () => void;
  editingMessage: Local | null;
  onCancelEdit: () => void;
  onSaveEdit: (id: string, body: string) => void;
  onSendText: (body: string) => void;
  onSendVoice: (blob: Blob, ms: number) => void;
  onPickMedia: (file: File) => void;
  onGift: (id: string) => void;
  onTyping: () => void;
}) {
  const draftKey = `justus:draft:${props.worldId}`;
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const [gifts, setGifts] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const area = useRef<HTMLTextAreaElement>(null);
  const lastTyping = useRef(0);
  const sendBurst = useSendBurst();
  const savedDraft = useRef<string | null>(null);

  // Unsent drafts survive refreshes and flaky connections.
  useEffect(() => {
    try {
      setText(localStorage.getItem(draftKey) ?? "");
    } catch {}
  }, [draftKey]);

  useEffect(() => {
    if (props.editingMessage) {
      if (savedDraft.current === null) {
        savedDraft.current = text;
      }
      setText(props.editingMessage.body || "");
      area.current?.focus();
    } else if (savedDraft.current !== null) {
      setText(savedDraft.current);
      savedDraft.current = null;
    }
  }, [props.editingMessage]);

  useEffect(() => {
    if (!props.editingMessage) {
      try {
        if (text) localStorage.setItem(draftKey, text);
        else localStorage.removeItem(draftKey);
      } catch {}
    }
  }, [text, draftKey, props.editingMessage]);

  useEffect(() => {
    const el = area.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  }, [text]);

  useEffect(() => {
    if (props.replyTo) area.current?.focus();
  }, [props.replyTo]);

  const submit = () => {
    const body = text.trim();
    if (!body) return;
    if (props.editingMessage) {
      props.onSaveEdit(props.editingMessage.id, body.slice(0, 4000));
      savedDraft.current = null;
      setText("");
    } else {
      props.onSendText(body.slice(0, 4000));
      setText("");
    }
  };

  return (
    <div className="border-t border-line bg-raised/95 px-3 pb-2 pt-2 md:pb-3">
      <div className="mx-auto max-w-2xl">
        {props.editingMessage ? (
          <div className="mb-2 flex items-center justify-between rounded-2xl bg-surface px-3 py-2 text-sm border border-rose/30">
            <div className="flex items-center gap-2 min-w-0">
              <IconEdit size={16} className="text-rose shrink-0" />
              <div className="min-w-0">
                <span className="font-semibold text-rose text-xs block">Editing your message</span>
                <span className="truncate text-ink-soft text-xs block">{props.editingMessage.body}</span>
              </div>
            </div>
            <button
              onClick={() => {
                props.onCancelEdit();
              }}
              aria-label="Cancel editing"
              className="h-7 w-7 rounded-full hover:bg-surface-2 flex items-center justify-center text-ink-faint hover:text-ink transition"
            >
              ✕
            </button>
          </div>
        ) : props.replyTo ? (
          <div className="mb-2 flex items-center gap-2 rounded-2xl bg-surface px-3 py-2 text-sm">
            <IconReply size={16} className="text-rose" />
            <span className="min-w-0 flex-1 truncate text-ink-soft">
              Replying to {props.replyName}: {props.replyTo.kind === "text" ? props.replyTo.body : props.replyTo.kind === "image" ? "📷 Photo" : props.replyTo.kind === "video" ? "📹 Video" : "🎙️ Voice note"}
            </span>
            <button onClick={props.onCancelReply} aria-label="Cancel reply" className="h-8 w-8 rounded-full hover:bg-surface-2">
              ✕
            </button>
          </div>
        ) : null}

        <div className="flex items-end gap-1">
          {recording ? (
            <VoiceRecorder
              onCancel={() => setRecording(false)}
              onError={(msg) => (toast(msg, "error"), setRecording(false))}
              onDone={(blob, ms) => {
                setRecording(false);
                props.onSendVoice(blob, ms);
              }}
            />
          ) : (
            <>
              <button aria-label="Send photo or video" onClick={() => fileInput.current?.click()} className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-surface-2 hover:text-ink">
                <IconImage />
              </button>
              <button aria-label="Send a gift" onClick={() => setGifts(true)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-surface-2 hover:text-ink">
                <IconGift />
              </button>
              <input
                ref={fileInput}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/quicktime"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) props.onPickMedia(f);
                  e.target.value = "";
                }}
              />
              <textarea
                ref={area}
                rows={1}
                value={text}
                maxLength={4000}
                placeholder={props.editingMessage ? "Edit your message…" : "Write something sweet…"}
                aria-label="Message"
                onChange={(e) => {
                  setText(e.target.value);
                  if (Date.now() - lastTyping.current > 2000) {
                    lastTyping.current = Date.now();
                    props.onTyping();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && !("ontouchstart" in window)) {
                    e.preventDefault();
                    submit();
                  }
                }}
                className="scrollbar-thin min-h-11 flex-1 resize-none rounded-3xl border border-line bg-surface px-4 py-2.5 text-[15px] placeholder:text-ink-faint focus:border-rose focus:outline-none"
              />
              {text.trim() ? (
                <button
                  aria-label={props.editingMessage ? "Save edit" : "Send"}
                  title={props.editingMessage ? "Save edit" : "Send"}
                  onClick={submit}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose-strong text-[var(--bubble-me-ink)] active:scale-95 transition"
                >
                  {props.editingMessage ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <IconSend size={20} />
                  )}
                </button>
              ) : (
                <MicButton onClick={() => setRecording(true)} />
              )}
            </>
          )}
        </div>
      </div>
      <Sheet open={gifts} onClose={() => setGifts(false)} title="Send a little something">
        <p className="mb-3 text-sm text-ink-soft">Gifts appear in the chat with a little celebration.</p>
        <div className="grid grid-cols-4 gap-2">
          {GIFTS.map((g) => (
            <button key={g.id} onClick={() => (props.onGift(g.id), setGifts(false))} className="card flex flex-col items-center gap-1 p-3 text-xs hover:border-gold">
              <span className="text-3xl">{g.emoji}</span>
              <span className="text-center text-ink-soft">{g.name.replace(/^an? /, "")}</span>
            </button>
          ))}
        </div>
        <p className="mb-2 mt-5 text-sm text-ink-soft">Or send a quick burst to their screen</p>
        <div className="flex gap-2">
          {BURSTS.map((b) => (
            <button key={b} onClick={() => (sendBurst(b), setGifts(false))} className="grid h-12 w-12 place-items-center rounded-full bg-surface-2 text-2xl hover:scale-110" aria-label={`Send ${b} burst`}>
              {b}
            </button>
          ))}
        </div>
      </Sheet>
    </div>
  );
}

