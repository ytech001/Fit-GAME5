"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { StoryScene } from "@/components/stories/scene";
import { CATEGORY_META } from "@/components/stories/story-detail";
import { IconHeart, IconClock, IconBook } from "@/components/ui/icons";
import { STORIES, type StoryCategory } from "@/content/stories";
import { db } from "@/lib/db/client";
import { useStoryFavorites } from "@/lib/story-storage";
import type { StorySession } from "@/lib/types";
import { useActivity, useWorld } from "@/lib/world-context";

export default function StoriesPage() {
  useActivity("Browsing our romantic storybook 📖");
  const { world } = useWorld();
  const [sessions, setSessions] = useState<Record<string, StorySession>>({});
  const [selectedCategory, setSelectedCategory] = useState<StoryCategory | "all" | "favorites">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { isFavorite, toggleFavorite, favorites } = useStoryFavorites();

  useEffect(() => {
    db()
      .from("story_sessions")
      .select("*")
      .eq("world_id", world.id)
      .then(({ data }) => setSessions(Object.fromEntries(((data ?? []) as StorySession[]).map((s) => [s.story_id, s]))));
  }, [world.id]);

  // Find in-progress stories for Continue Reading shelf
  const inProgressStories = useMemo(() => {
    return STORIES.filter((story) => {
      const s = sessions[story.id];
      if (!s) return false;
      const node = story.nodes[s.node_id];
      return node && !node.ending;
    });
  }, [sessions]);

  // Filter stories based on category, favorites, and search
  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      // Category / Favorite filter
      if (selectedCategory === "favorites") {
        if (!isFavorite(story.id)) return false;
      } else if (selectedCategory !== "all") {
        if (story.category !== selectedCategory) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = story.title.toLowerCase().includes(q);
        const matchesTagline = story.tagline.toLowerCase().includes(q);
        const matchesSynopsis = story.synopsis?.toLowerCase().includes(q) ?? false;
        const matchesCategory = story.category?.toLowerCase().includes(q) ?? false;
        if (!matchesTitle && !matchesTagline && !matchesSynopsis && !matchesCategory) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, isFavorite]);

  const categoriesList: { id: StoryCategory | "all" | "favorites"; label: string; emoji: string }[] = [
    { id: "all", label: "All Stories", emoji: "📚" },
    { id: "just-you-and-me", label: "Just You & Me", emoji: "💞" },
    { id: "our-love", label: "Our Love Stories", emoji: "✨" },
    { id: "deep-emotional", label: "Deep Emotional", emoji: "🤍" },
    { id: "dark-romance", label: "Dark Romance", emoji: "🥀" },
    { id: "sensual-romance", label: "Sensual Romance", emoji: "🕯️" },
    { id: "adventure-fantasy", label: "Adventure & Fantasy", emoji: "🏝️" },
    { id: "favorites", label: `Favourites (${favorites.length})`, emoji: "❤️" },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl border border-line/60 bg-gradient-to-b from-surface via-surface to-surface-2 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/10 px-3.5 py-1 text-xs font-semibold text-rose mb-2">
              <span>💖</span> 26 Complete Romantic Stories
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Our Storybook
            </h1>
            <p className="mt-1.5 text-sm sm:text-base text-ink-soft max-w-xl">
              An immersive world of complete romantic stories written for two lovers. Choose your path together, unlock multiple endings, and make memories.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories, themes..."
              className="w-full rounded-full border border-line bg-surface-2 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-rose focus:outline-none transition shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                selectedCategory === cat.id
                  ? "bg-rose text-white shadow-md scale-[1.02]"
                  : "bg-surface-2 text-ink-soft hover:bg-surface-3 hover:text-ink border border-line/40"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Continue Reading Shelf (if in-progress stories exist) */}
      {inProgressStories.length > 0 && selectedCategory === "all" && !searchQuery.trim() && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-gold uppercase tracking-wider flex items-center gap-2">
              <span>⏳</span> Continue Reading
            </h2>
            <span className="text-xs text-ink-faint">Your active adventures</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {inProgressStories.map((story) => {
              const s = sessions[story.id];
              const node = s ? story.nodes[s.node_id] : null;
              if (!node) return null;
              const progressPct = ((node.chapter + 0.5) / story.chapters.length) * 100;
              return (
                <div
                  key={story.id}
                  className="card p-4 sm:p-5 flex flex-col justify-between border-rose/40 bg-gradient-to-br from-rose/10 via-surface to-surface"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold text-rose uppercase tracking-wider">
                        In Progress · Chapter {node.chapter + 1} of {story.chapters.length}
                      </span>
                      <h3 className="font-display text-xl font-bold mt-1 text-ink">
                        {story.emoji} {story.title}
                      </h3>
                      <p className="text-xs text-ink-soft mt-1 font-medium">
                        Current: {story.chapters[node.chapter]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="h-1.5 w-full rounded-full bg-surface-3 overflow-hidden">
                      <div className="h-full bg-rose rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={`/stories/${story.id}?read=1`}
                        className="inline-flex items-center justify-center rounded-full bg-rose px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-rose/90 shadow-sm"
                      >
                        Resume Reading →
                      </Link>
                      <Link
                        href={`/stories/${story.id}`}
                        className="text-xs font-medium text-ink-faint hover:text-ink"
                      >
                        Overview
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Stories Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-faint">
            Showing {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"}
          </p>
          {selectedCategory !== "all" && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-xs text-gold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredStories.length === 0 ? (
          <div className="card p-12 text-center space-y-3">
            <span className="text-4xl">📖</span>
            <h3 className="font-display text-xl font-bold">No stories found</h3>
            <p className="text-sm text-ink-soft max-w-sm mx-auto">
              We couldn&apos;t find any stories matching your current filters. Try searching for something else or reset your filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-surface-2 px-5 text-xs font-semibold text-ink hover:bg-surface-3"
            >
              Show all 26 stories
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {filteredStories.map((story) => {
              const s = sessions[story.id];
              const node = s ? story.nodes[s.node_id] : null;
              const totalEndings = new Set(Object.values(story.nodes).flatMap((n) => (n.ending ? [n.ending.id] : []))).size;
              const cat = story.category ? CATEGORY_META[story.category] : null;
              const fav = isFavorite(story.id);

              return (
                <div
                  key={story.id}
                  className="card group flex flex-col justify-between overflow-hidden border border-line/70 hover:border-rose/60 transition duration-300 hover:shadow-xl bg-surface"
                >
                  {/* Scene Illustration with Badges */}
                  <div className="relative overflow-hidden">
                    <Link href={`/stories/${story.id}`}>
                      <StoryScene
                        scene={story.nodes[story.start].scene}
                        palette={story.palette}
                        className="h-44 w-full transition duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Category pill */}
                    {cat && (
                      <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${cat.color}`}>
                        <span>{cat.emoji}</span> {cat.label}
                      </span>
                    )}

                    {/* Reading time */}
                    <span className="absolute left-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
                      <IconClock size={12} /> {story.estimatedMinutes ?? 15}m
                    </span>

                    {/* Favourite button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(story.id);
                      }}
                      className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur-md transition ${
                        fav ? "bg-rose text-white" : "bg-black/50 text-white/70 hover:text-white"
                      }`}
                      aria-label="Toggle favourite"
                    >
                      <IconHeart size={16} />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/stories/${story.id}`}>
                        <h2 className="font-display text-xl font-bold group-hover:text-rose transition">
                          {story.emoji} {story.title}
                        </h2>
                      </Link>
                      <p className="mt-1.5 text-sm text-gold italic font-medium line-clamp-2">
                        “{story.tagline}”
                      </p>
                      {story.synopsis && (
                        <p className="mt-2 text-xs text-ink-soft line-clamp-2 leading-relaxed">
                          {story.synopsis}
                        </p>
                      )}
                    </div>

                    {/* Status & Footer */}
                    <div className="mt-5 pt-3 border-t border-line/40 flex items-center justify-between text-xs text-ink-faint">
                      <span className="font-medium">
                        {node ? (
                          node.ending ? (
                            <span className="text-gold font-semibold">✓ Completed</span>
                          ) : (
                            `Ch. ${node.chapter + 1}: ${story.chapters[node.chapter]}`
                          )
                        ) : (
                          `${story.chapters.length} chapters`
                        )}
                      </span>
                      <span className="font-semibold text-gold">
                        {s?.endings_seen.length ?? 0}/{totalEndings} endings
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <p className="mt-12 text-center text-xs text-ink-faint">
        Every story crafted with boundless love, deep romance, and forever in mind 💞
      </p>
    </div>
  );
}
