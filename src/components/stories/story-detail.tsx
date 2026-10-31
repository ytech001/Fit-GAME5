"use client";

import Link from "next/link";
import { useState } from "react";
import { StoryScene } from "@/components/stories/scene";
import { IconBack, IconHeart, IconClock, IconBook } from "@/components/ui/icons";
import { Button } from "@/components/ui/primitives";
import type { Story, StoryCategory } from "@/content/stories";
import { useStoryFavorites, useStoryNotes } from "@/lib/story-storage";
import type { StorySession } from "@/lib/types";
import { useWorld } from "@/lib/world-context";

export const CATEGORY_META: Record<StoryCategory, { label: string; emoji: string; color: string; desc: string }> = {
  "just-you-and-me": {
    label: "Just You & Me",
    emoji: "💞",
    color: "bg-rose/15 text-rose border-rose/30",
    desc: "Personal, intimate stories inspired by our real couple connection.",
  },
  "our-love": {
    label: "Our Love Stories",
    emoji: "✨",
    color: "bg-gold/15 text-gold border-gold/30",
    desc: "The milestones, memories, laughter, and anniversaries of our journey.",
  },
  "deep-emotional": {
    label: "Deep Emotional",
    emoji: "🤍",
    color: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    desc: "Vulnerability, surviving distance, overcoming misunderstandings, and choosing each other.",
  },
  "dark-romance": {
    label: "Dark Romance",
    emoji: "🥀",
    color: "bg-red-950/50 text-red-400 border-red-800/40",
    desc: "Moody suspense, high stakes, intense passion, and dangerous devotion.",
  },
  "sensual-romance": {
    label: "Sensual Romance",
    emoji: "🕯️",
    color: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    desc: "Unrushed intimacy, candlelit evenings, slow dances, and tender closeness.",
  },
  "adventure-fantasy": {
    label: "Adventure & Fantasy",
    emoji: "🏝️",
    color: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    desc: "Uncharted islands, luxury trains, flying kingdoms, and mythical realms.",
  },
};

export function StoryDetail({
  story,
  session,
  onStartReading,
}: {
  story: Story;
  session: StorySession | null | undefined;
  onStartReading: () => void;
}) {
  const { partner, me } = useWorld();
  const { isFavorite, toggleFavorite } = useStoryFavorites();
  const { notes, saveNote } = useStoryNotes(story.id);
  const [newNote, setNewNote] = useState("");
  const [savingNote, setSavingNote] = useState(false);

  const fav = isFavorite(story.id);
  const cat = story.category ? CATEGORY_META[story.category] : null;

  // Extract all endings in story
  const allEndings = Object.values(story.nodes)
    .filter((n) => n.ending)
    .map((n) => n.ending!);

  const uniqueEndings = Array.from(new Map(allEndings.map((e) => [e.id, e])).values());
  const endingsSeenSet = new Set(session?.endings_seen ?? []);
  const currentNode = session ? story.nodes[session.node_id] : null;
  const isFinished = currentNode?.ending !== undefined;
  const inProgress = session && !isFinished;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setSavingNote(true);
    saveNote(me.display_name, newNote.trim(), isFinished ? currentNode?.ending?.title : undefined);
    setNewNote("");
    setSavingNote(false);
  };

  return (
    <article className="max-w-3xl mx-auto pb-12">
      {/* Cover Artwork Header */}
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl">
        <StoryScene
          scene={story.nodes[story.start].scene}
          palette={story.palette}
          className="h-64 w-full sm:h-80 transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Top Floating Controls */}
        <div className="absolute left-4 top-4 right-4 flex items-center justify-between">
          <Link
            href="/stories"
            className="grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/60"
            aria-label="Back to library"
          >
            <IconBack />
          </Link>
          <button
            onClick={() => toggleFavorite(story.id)}
            className={`grid h-11 w-11 place-items-center rounded-full backdrop-blur-md transition ${
              fav ? "bg-rose text-white" : "bg-black/45 text-white/80 hover:text-white"
            }`}
            aria-label={fav ? "Remove from favourites" : "Add to favourites"}
          >
            <IconHeart />
          </button>
        </div>

        {/* Title & Metadata Overlay */}
        <div className="absolute bottom-5 inset-x-5 sm:inset-x-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {cat && (
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${cat.color}`}>
                <span>{cat.emoji}</span> {cat.label}
              </span>
            )}
            <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
              <IconClock size={14} /> {story.estimatedMinutes ?? 15} min read
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
              <IconBook size={14} /> {story.chapters.length} chapters
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
            {story.emoji} {story.title}
          </h1>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="mt-6 space-y-8 px-1">
        {/* Synopsis & Tagline */}
        <div className="card p-6 sm:p-8 space-y-4">
          <p className="text-lg font-medium text-gold leading-relaxed italic">
            “{story.tagline}”
          </p>
          {story.synopsis && (
            <p className="text-ink-soft leading-relaxed text-base">
              {story.synopsis}
            </p>
          )}

          {/* Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button size="lg" className="w-full sm:w-auto px-8" onClick={onStartReading}>
              {inProgress && currentNode
                ? `Continue: Chapter ${currentNode.chapter + 1}`
                : isFinished
                ? "Read Again From Beginning"
                : "Open & Begin Reading"}
            </Button>
            {partner && (
              <p className="text-xs text-ink-faint text-center sm:text-left">
                👫 You can read together with {partner.display_name} in real-time or solo.
              </p>
            )}
          </div>
        </div>

        {/* Chapters Overview */}
        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>📖</span> Chapter Index
          </h2>
          <div className="grid gap-2.5">
            {story.chapters.map((chap, idx) => {
              const isCurrent = inProgress && currentNode?.chapter === idx;
              const isPassed = session && !isCurrent && currentNode && currentNode.chapter > idx;
              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                    isCurrent
                      ? "border-rose bg-rose/10 font-medium text-ink"
                      : isPassed
                      ? "border-line bg-surface-2 text-ink-soft"
                      : "border-line bg-surface text-ink-soft"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${
                        isCurrent
                          ? "bg-rose text-white"
                          : isPassed
                          ? "bg-gold/20 text-gold"
                          : "bg-surface-3 text-ink-faint"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-medium">{chap}</span>
                  </div>
                  {isCurrent && (
                    <span className="text-xs font-semibold text-rose uppercase tracking-wider">
                      Current
                    </span>
                  )}
                  {isPassed && (
                    <span className="text-xs text-gold">
                      ✓ Read
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Endings Discovered Showcase */}
        <div className="card p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold flex items-center gap-2">
              <span>🏆</span> Endings Discovered
            </h2>
            <span className="text-sm font-semibold text-gold">
              {endingsSeenSet.size} of {uniqueEndings.length} found
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {uniqueEndings.map((ending) => {
              const seen = endingsSeenSet.has(ending.id) || endingsSeenSet.has(ending.title);
              return (
                <div
                  key={ending.id}
                  className={`rounded-2xl border p-4 transition ${
                    seen
                      ? "border-gold/40 bg-gold/10 text-ink"
                      : "border-dashed border-line bg-surface-2/40 text-ink-faint"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-base font-medium">
                      {seen ? ending.title : "??? Locked Ending"}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {seen ? (
                        <span className="text-gold">Unlocked ✨</span>
                      ) : (
                        <span>Hidden</span>
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink-soft">
                    {seen
                      ? `Mood: ${ending.mood} · Discovered in your journey`
                      : "Make different choices to uncover this alternate conclusion."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Love Notes & Reactions Section */}
        <div className="card p-6 sm:p-8 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold flex items-center gap-2">
              <span>💌</span> Our Story Reflections & Notes
            </h2>
            <span className="text-xs text-ink-faint">Saved in our private memory</span>
          </div>
          <p className="text-sm text-ink-soft">
            Leave a personal thought, a reaction, or a message for {partner?.display_name ?? "your love"} after reading this story.
          </p>

          <form onSubmit={handleAddNote} className="space-y-3">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="What made you smile, blush, or think of us in this story?..."
              className="w-full rounded-2xl border border-line bg-surface-2 p-3.5 text-sm text-ink placeholder:text-ink-faint focus:border-rose focus:outline-none"
              rows={3}
            />
            <div className="flex justify-end">
              <Button type="submit" size="sm" loading={savingNote} disabled={!newNote.trim()}>
                Save Reflection
              </Button>
            </div>
          </form>

          {notes.length > 0 && (
            <div className="mt-4 space-y-3 pt-3 border-t border-line">
              {notes.map((note) => (
                <div key={note.id} className="rounded-2xl border border-line bg-surface-2/60 p-4">
                  <div className="flex items-center justify-between text-xs text-ink-faint mb-1.5">
                    <span className="font-semibold text-gold">{note.authorName}</span>
                    <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm text-ink leading-relaxed whitespace-pre-wrap">{note.text}</p>
                  {note.endingTitle && (
                    <p className="mt-2 text-xs text-ink-soft italic">
                      Re: {note.endingTitle}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
