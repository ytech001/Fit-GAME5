"use client";
import { toast } from "@/components/ui/toast";

/**
 * Downloads a photo, video, or audio file directly to the user's phone or desktop.
 * Uses blob download with fallback to direct link trigger.
 */
export async function downloadMedia(url: string, filename?: string) {
  if (!url) {
    toast("No download link available", "error");
    return;
  }

  const defaultName = filename || url.split("/").pop()?.split("?")[0] || `media-${Date.now()}`;

  try {
    toast("Starting download…", "info");
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = defaultName;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
    toast("Saved to your downloads 📥", "ok");
  } catch {
    // Fallback if fetch was blocked by CORS: open directly with download attribute
    const a = document.createElement("a");
    a.href = url;
    a.download = defaultName;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast("Opening file to save…", "info");
  }
}
