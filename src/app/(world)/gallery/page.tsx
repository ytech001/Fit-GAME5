"use client";
import { useCallback, useEffect, useState } from "react";
import { VoicePlayer } from "@/components/chat/voice";
import { PrivateImage } from "@/components/media/private-image";
import { IconDownload } from "@/components/ui/icons";
import { Button, EmptyState, ErrorNote, PageHeader, Tabs } from "@/components/ui/primitives";
import { downloadMedia } from "@/lib/download";
import { useSignedUrl } from "@/lib/signed-urls";
import { db } from "@/lib/db/client";
import { errorMessage, relativeTime } from "@/lib/utils";
import { useActivity, useWorld } from "@/lib/world-context";

type MediaRow = { id: string; path: string; kind: "image" | "video" | "voice"; uploader_id: string; duration_ms: number | null; created_at: string };
const PAGE = 36;

export default function GalleryPage() {
  useActivity("Browsing the gallery 🖼️");
  const { world, nameOf } = useWorld();
  const [tab, setTab] = useState<"image" | "video" | "voice">("image");
  const [items, setItems] = useState<MediaRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [more, setMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewing, setViewing] = useState<{ path: string; isVideo?: boolean } | null>(null);

  const load = useCallback(
    async (before?: string) => {
      setLoading(true);
      setError(null);
      let q = db().from("media").select("id, path, kind, uploader_id, duration_ms, created_at").eq("world_id", world.id).eq("kind", tab).order("created_at", { ascending: false }).limit(PAGE);
      if (before) q = q.lt("created_at", before);
      const { data, error } = await q;
      setLoading(false);
      if (error) return setError(errorMessage(error));
      setItems((cur) => (before ? [...cur, ...(data as MediaRow[])] : (data as MediaRow[])));
      setMore((data ?? []).length === PAGE);
    },
    [world.id, tab],
  );

  useEffect(() => {
    setItems([]);
    load();
  }, [load]);

  return (
    <>
      <PageHeader title="Shared gallery" subtitle="Every photo, video, and voice note you've shared, kept private to you two." />
      <Tabs
        value={tab}
        onChange={setTab}
        items={[
          { id: "image", label: "Photos" },
          { id: "video", label: "Videos" },
          { id: "voice", label: "Voice notes" },
        ]}
      />
      {error && <ErrorNote onRetry={() => load()}>{error}</ErrorNote>}
      {!loading && !error && items.length === 0 && (
        <EmptyState
          emoji={tab === "image" ? "📷" : tab === "video" ? "📹" : "🎙️"}
          title={tab === "image" ? "No photos yet" : tab === "video" ? "No videos yet" : "No voice notes yet"}
        >
          Share them in the chat and they&apos;ll gather here.
        </EmptyState>
      )}
      {tab === "image" ? (
        <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
          {items.map((m) => (
            <button key={m.id} onClick={() => setViewing({ path: m.path, isVideo: false })} className="aspect-square overflow-hidden rounded-xl" aria-label={`Photo from ${nameOf(m.uploader_id)}`}>
              <PrivateImage path={m.path} alt="" className="h-full w-full transition hover:scale-105" />
            </button>
          ))}
          {loading && Array.from({ length: 9 }, (_, i) => <div key={i} className="skeleton aspect-square" />)}
        </div>
      ) : tab === "video" ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {items.map((m) => (
            <VideoThumbnail
              key={m.id}
              path={m.path}
              uploaderName={nameOf(m.uploader_id)}
              createdAt={m.created_at}
              onClick={() => setViewing({ path: m.path, isVideo: true })}
            />
          ))}
          {loading && Array.from({ length: 6 }, (_, i) => <div key={i} className="skeleton aspect-video rounded-xl" />)}
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((m) => (
            <div key={m.id} className="card flex items-center justify-between gap-3 px-4 py-2">
              <VoicePlayer path={m.path} durationMs={m.duration_ms ?? 0} />
              <span className="text-right text-xs text-ink-faint">
                {nameOf(m.uploader_id)}
                <br />
                {relativeTime(m.created_at)}
              </span>
            </div>
          ))}
          {loading && Array.from({ length: 4 }, (_, i) => <div key={i} className="skeleton h-16" />)}
        </div>
      )}
      {more && !loading && (
        <div className="mt-6 text-center">
          <Button variant="soft" onClick={() => load(items[items.length - 1]?.created_at)}>
            Load more
          </Button>
        </div>
      )}
      {viewing && <Viewer path={viewing.path} isVideo={viewing.isVideo} onClose={() => setViewing(null)} />}
    </>
  );
}

function VideoThumbnail({ path, uploaderName, createdAt, onClick }: { path: string; uploaderName: string; createdAt: string; onClick: () => void }) {
  const { url } = useSignedUrl(path);
  return (
    <button
      onClick={onClick}
      className="group relative aspect-video w-full overflow-hidden rounded-xl bg-black/40 text-left transition hover:ring-2 hover:ring-rose"
      aria-label={`Video from ${uploaderName}`}
    >
      {url ? (
        <video src={url} preload="metadata" className="h-full w-full object-cover" />
      ) : (
        <div className="skeleton h-full w-full" />
      )}
      <div className="absolute inset-0 grid place-items-center bg-black/25 transition group-hover:bg-black/40">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-black shadow transition group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-[11px] text-white">
        <p className="truncate font-medium">{uploaderName}</p>
        <p className="text-white/70 text-[10px]">{relativeTime(createdAt)}</p>
      </div>
    </button>
  );
}


function Viewer({ path, isVideo, onClose }: { path: string; isVideo?: boolean; onClose: () => void }) {
  const { url } = useSignedUrl(path);
  const isVid = isVideo || /\.(mp4|webm|mov)$/i.test(path);
  const ext = isVid ? "mp4" : "jpg";
  const filename = path.split("/").pop() || `justus-${isVid ? "video" : "photo"}-${Date.now()}.${ext}`;

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-black/95 p-4" onClick={onClose} role="dialog" aria-label="Media preview">
      <div className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex items-center gap-2 z-10" onClick={(e) => e.stopPropagation()}>
        {url && (
          <button
            type="button"
            onClick={() => downloadMedia(url, filename)}
            className="flex h-11 items-center gap-2 rounded-full bg-white/20 px-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/30 active:scale-95 transition"
            aria-label="Download to phone"
          >
            <IconDownload size={18} />
            <span>Download</span>
          </button>
        )}
        <button
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white backdrop-blur hover:bg-white/30 active:scale-95 transition"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      {url && (isVid ? (
        <div className="relative max-h-full max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
          <video src={url} controls autoPlay playsInline className="max-h-[85vh] w-full rounded-xl object-contain bg-black shadow-2xl" />
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={url} alt="Shared photo, full size" className="max-h-full max-w-full rounded-xl object-contain" />
      ))}
    </div>
  );
}

