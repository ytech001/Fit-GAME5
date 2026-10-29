"use client";
import { useEffect, useRef, useState } from "react";
import { IconMic, IconPause, IconPlayTri, IconSend, IconTrash } from "@/components/ui/icons";
import { Spinner } from "@/components/ui/primitives";
import { pickRecorderMime } from "@/lib/media";
import { useSignedUrl } from "@/lib/signed-urls";
import { cn, formatDuration } from "@/lib/utils";

const MAX_MS = 3 * 60 * 1000;

/** Records a voice note with MediaRecorder. Calls onDone with the blob + duration. */
export function VoiceRecorder({ onDone, onCancel, onError }: { onDone: (blob: Blob, ms: number) => void; onCancel: () => void; onError: (msg: string) => void }) {
  const [elapsed, setElapsed] = useState(0);
  const [ready, setReady] = useState(false);
  const rec = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const started = useRef(0);
  const cancelled = useRef(false);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let alive = true;
    let tick: ReturnType<typeof setInterval>;
    const mime = pickRecorderMime();
    if (!mime || !navigator.mediaDevices?.getUserMedia) {
      onError("Voice notes aren't supported in this browser.");
      return;
    }
    navigator.mediaDevices
      .getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } })
      .then((s) => {
        if (!alive) return s.getTracks().forEach((t) => t.stop());
        stream = s;
        const r = new MediaRecorder(s, { mimeType: mime, audioBitsPerSecond: 32000 });
        r.ondataavailable = (e) => e.data.size && chunks.current.push(e.data);
        r.onstop = () => {
          s.getTracks().forEach((t) => t.stop());
          if (cancelled.current) return;
          const blob = new Blob(chunks.current, { type: mime.split(";")[0] });
          onDone(blob, Date.now() - started.current);
        };
        r.start(500);
        rec.current = r;
        started.current = Date.now();
        setReady(true);
        tick = setInterval(() => {
          const ms = Date.now() - started.current;
          setElapsed(ms);
          if (ms >= MAX_MS && r.state === "recording") r.stop();
        }, 250);
      })
      .catch((e) => alive && onError(e?.name === "NotAllowedError" ? "Microphone access was denied. Allow it in your browser settings to record." : "Couldn't access your microphone."));
    return () => {
      alive = false;
      clearInterval(tick);
      cancelled.current = cancelled.current || rec.current?.state === "recording";
      if (rec.current?.state === "recording") rec.current.stop();
      stream?.getTracks().forEach((t) => t.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-1 items-center gap-3 rounded-full bg-surface-2 py-1.5 pl-2 pr-1.5">
      <button
        aria-label="Discard recording"
        onClick={() => {
          cancelled.current = true;
          if (rec.current?.state === "recording") rec.current.stop();
          onCancel();
        }}
        className="grid h-10 w-10 place-items-center rounded-full text-danger hover:bg-danger/15"
      >
        <IconTrash size={20} />
      </button>
      <span className="flex flex-1 items-center gap-2 text-sm tabular-nums">
        <span className={cn("h-2.5 w-2.5 rounded-full bg-danger", ready && "animate-twinkle")} />
        {ready ? formatDuration(elapsed) : "Starting mic…"}
        <span className="text-xs text-ink-faint">/ 3:00</span>
      </span>
      <button
        aria-label="Send voice note"
        disabled={!ready || elapsed < 600}
        onClick={() => {
          if (rec.current?.state === "recording") rec.current.stop();
        }}
        className="grid h-10 w-10 place-items-center rounded-full bg-rose-strong text-[var(--bubble-me-ink)] disabled:opacity-40"
      >
        <IconSend size={18} />
      </button>
    </div>
  );
}

export function VoicePlayer({ path, durationMs, mine }: { path: string | null; durationMs?: number; mine?: boolean }) {
  const { url, failed } = useSignedUrl(path);
  const audio = useRef<HTMLAudioElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [duration, setDuration] = useState(durationMs ?? 0);
  const [speed, setSpeed] = useState<1 | 1.5 | 2>(1);
  const [scrubbing, setScrubbing] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (durationMs && durationMs > 0) {
      setDuration(durationMs);
    }
  }, [durationMs]);

  const seekTo = (clientX: number) => {
    const el = trackRef.current;
    if (!el || !duration) return;
    const rect = el.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const targetMs = frac * duration;
    setPos(targetMs);
    if (audio.current) {
      audio.current.currentTime = targetMs / 1000;
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!url || error) return;
    setScrubbing(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    seekTo(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrubbing) return;
    seekTo(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrubbing) return;
    setScrubbing(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const toggleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextSpeed: 1 | 1.5 | 2 = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1;
    setSpeed(nextSpeed);
    if (audio.current) {
      audio.current.playbackRate = nextSpeed;
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      a.playbackRate = speed;
      a.play().catch(() => setError(true));
    } else {
      a.pause();
    }
  };

  const percent = duration > 0 ? Math.min(100, Math.max(0, (pos / duration) * 100)) : 0;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      className="flex w-64 max-w-full select-none items-center gap-2.5 py-1"
    >
      <button
        type="button"
        aria-label={playing ? "Pause voice note" : "Play voice note"}
        disabled={!url || error}
        onClick={togglePlay}
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-full transition active:scale-95",
          mine ? "bg-black/15 hover:bg-black/25" : "bg-white/10 hover:bg-white/20"
        )}
      >
        {!url && !failed ? <Spinner /> : playing ? <IconPause size={16} /> : <IconPlayTri size={16} />}
      </button>

      <div className="flex-1 min-w-0">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="group/track relative flex h-6 w-full cursor-pointer touch-none items-center"
          role="slider"
          aria-label="Seek voice note"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percent)}
        >
          {/* Track background */}
          <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-current/20"
            style={{ backgroundColor: "color-mix(in oklab, currentColor 20%, transparent)" }}
          >
            <div className="h-full rounded-full bg-current" style={{ width: `${percent}%` }} />
          </div>

          {/* Scrubber thumb/dot */}
          <div
            className={cn(
              "pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current shadow transition-transform",
              scrubbing ? "h-4 w-4 scale-110" : "h-3.5 w-3.5 group-hover/track:scale-125"
            )}
            style={{ left: `${percent}%` }}
          />
        </div>

        <div className="flex justify-between text-[11px] opacity-75 tabular-nums">
          <span>{error || failed ? "Can't play this" : formatDuration(pos)}</span>
          <span>{formatDuration(duration)}</span>
        </div>
      </div>

      {/* WhatsApp-style speed badge (1x, 1.5x, 2x) */}
      <button
        type="button"
        title="Change playback speed"
        aria-label={`Playback speed ${speed}x. Tap to change.`}
        onClick={toggleSpeed}
        className={cn(
          "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums transition active:scale-95",
          mine ? "bg-black/15 hover:bg-black/25" : "bg-white/15 hover:bg-white/25"
        )}
      >
        {speed}×
      </button>

      {url && (
        <audio
          ref={audio}
          src={url}
          preload="metadata"
          onLoadedMetadata={(e) => {
            const d = e.currentTarget.duration;
            if (Number.isFinite(d) && d > 0) {
              setDuration(d * 1000);
            }
            if (audio.current) {
              audio.current.playbackRate = speed;
            }
          }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false);
            setPos(0);
            if (audio.current) audio.current.currentTime = 0;
          }}
          onTimeUpdate={(e) => {
            if (!scrubbing) {
              setPos(e.currentTarget.currentTime * 1000);
            }
          }}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

export function MicButton({ onClick }: { onClick: () => void }) {
  return (
    <button aria-label="Record voice note" onClick={onClick} className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-surface-2 hover:text-ink">
      <IconMic />
    </button>
  );
}
