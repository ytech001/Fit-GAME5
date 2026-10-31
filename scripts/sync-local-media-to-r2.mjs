import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { AwsClient } from "aws4fetch";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } = process.env;
if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) {
  console.error("Missing R2 environment variables in .env.local");
  process.exit(1);
}

const client = new AwsClient({
  accessKeyId: R2_ACCESS_KEY_ID,
  secretAccessKey: R2_SECRET_ACCESS_KEY,
  service: "s3",
  region: "auto",
});
const base = `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET}`;

const UPLOADS_DIR = join(process.cwd(), ".data", "uploads");

async function sync() {
  console.log(`Checking ${UPLOADS_DIR}...`);
  let worldDirs = [];
  try {
    worldDirs = await readdir(UPLOADS_DIR, { withFileTypes: true });
  } catch (e) {
    console.log("No uploads dir found:", e.message);
    return;
  }

  let uploadedCount = 0;
  for (const ent of worldDirs) {
    if (!ent.isDirectory()) continue;
    const worldId = ent.name;
    const worldPath = join(UPLOADS_DIR, worldId);
    const files = await readdir(worldPath, { withFileTypes: true });

    for (const f of files) {
      if (!f.isFile() || f.name.endsWith(".type")) continue;
      const r2Key = `${worldId}/${f.name}`;
      const filePath = join(worldPath, f.name);
      const typePath = `${filePath}.type`;

      let contentType = "application/octet-stream";
      try {
        contentType = (await readFile(typePath, "utf8")).trim();
      } catch {
        if (f.name.endsWith(".jpg") || f.name.endsWith(".jpeg")) contentType = "image/jpeg";
        else if (f.name.endsWith(".png")) contentType = "image/png";
        else if (f.name.endsWith(".webp")) contentType = "image/webp";
        else if (f.name.endsWith(".webm")) contentType = "video/webm";
        else if (f.name.endsWith(".mp4")) contentType = "video/mp4";
      }

      const body = await readFile(filePath);
      console.log(`Uploading ${r2Key} (${body.length} bytes, ${contentType})...`);
      const res = await client.fetch(`${base}/${r2Key}`, {
        method: "PUT",
        headers: { "Content-Type": contentType },
        body,
      });

      if (!res.ok) {
        console.error(`Failed to upload ${r2Key}: ${res.status} ${res.statusText}`);
      } else {
        console.log(`✓ Uploaded ${r2Key}`);
        uploadedCount++;
      }
    }
  }

  console.log(`\nSync complete! Uploaded ${uploadedCount} file(s) to Cloudflare R2 bucket: ${R2_BUCKET}.`);
}

sync().catch(console.error);
