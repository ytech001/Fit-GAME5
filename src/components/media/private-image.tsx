"use client";
import { useState } from "react";
import { useSignedUrl } from "@/lib/signed-urls";
import { cn } from "@/lib/utils";

/** Image from private storage, fetched through a short-lived signed URL. */
export function PrivateImage({ path, alt, className, onClick }: { path: string | null; alt: string; className?: string; onClick?: () => void }) {
  const { url, failed } = useSignedUrl(path);
  const [errored, setErrored] = useState(false);

  if (!url || failed || errored) {
    return (
      <span className={cn("grid place-items-center bg-surface-2 p-2 text-center text-xs text-ink-faint select-none", className)}>
        {failed || errored ? (
          <span className="flex flex-col items-center gap-1 opacity-75">
            <span className="text-xl">📷</span>
            <span className="text-[10px]">Photo missing</span>
          </span>
        ) : (
          <span className="skeleton h-full w-full" />
        )}
      </span>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      onClick={onClick}
      className={cn("object-cover", onClick && "cursor-zoom-in", className)}
    />
  );
}
