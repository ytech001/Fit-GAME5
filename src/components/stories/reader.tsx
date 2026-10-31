"use client";

import { AnimatePresence, m } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StoryScene } from "@/components/stories/scene";
import { StoryDetail } from "@/components/stories/story-detail";
import { Avatar } from "@/components/ui/avatar";
import { IconBack, IconHeart, IconBook, IconMusic, IconPlayTri, IconPause } from "@/components/ui/icons";
import { Button, ErrorNote } from "@/components/ui/primitives";
import { toast } from "@/components/ui/toast";
import { fillNames, getStory } from "@/content/stories";
import { sfx, storyAmbient, type StoryAmbienceKind } from "@/lib/sound";
import { db } from "@/lib/db/client";
import { useReaderPreferences, useStoryBookmarks, useStoryFavorites, useStoryNotes } from "@/lib/story-storage";
import type { StorySession } from "@/lib/types";
import { cn, errorMessage } from "@/lib/utils";
import { useActivity, useWorld } from "@/lib/world-context";

const MOOD_LABEL = {
  sweet: "A sweet, heartfelt ending 💞",
  bittersweet: "A bittersweet, tender ending 🍂",
  funny: "A joyful, hilarious ending 😄",
  epic: "An epic, unforgettable ending 👑",
};

const THEME_CLASSES = {
  "romantic-dark": "bg-background text-ink",
  "warm-sepia": "bg-[#1f1917] text-[#fef3c7] border-[#78350f]/30",
  "midnight-slate": "bg-[#090d16] text-[#e2e8f0] border-[#1e293b]",
};

const FONT_SIZE_CLASSES = {
  sm: "text-[16px] leading-relaxed",
  md: "text-[18px] leading-relaxed",
  lg: "text-[21px] leading-loose",
};

export function StoryReader({ storyId, initialMode = "overview" }: { storyId: string; initialMode?: "overview" | "reading" }) {
  const story = getStory(storyId)!;
  useActivity(`Reading “${story.title}” 📖`);
  const { world, me, partner, onChange, onResync, role, nameOf } = useWorld();
  const api = db();
  const [session, setSession] = useState<StorySession | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [resolved, setResolved] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"overview" | "reading">(initialMode);
  const [showAmbientMenu, setShowAmbientMenu] = useState(false);
  const [completedNote, setCompletedNote] = useState("");
  const advancing = useRef<string | null>(null);

  const { isFavorite, toggleFavorite } = useStoryFavorites();
  const { bookmarks, addBookmark, isBookmarked } = useStoryBookmarks(storyId);
  const { prefs, updatePrefs } = useReaderPreferences();
  const { saveNote } = useStoryNotes(storyId);

  const creatorName = role === "creator" ? me.display_name : partner?.display_name ?? "your love";
  const partnerName = role === "creator" ? partner?.display_name ?? "your love" : me.display_name;
  const fill = useCallback((t: string) => fillNames(t, creatorName, partnerName), [creatorName, partnerName]);

  const load = useCallback(async () => {
    setError(null);
    const { data, error } = await api
      .from("story_sessions")
      .select("*")
      .eq("world_id", world.id)
      .eq("story_id", storyId)
      .maybeSingle();
    if (error) return setError(errorMessage(error));
    setSession((data as StorySession) ?? null);
  }, [api, world.id, storyId]);

  useEffect(() => {
    load();
    return onChange("story_sessions", (p) => {
      const row = p.new as StorySession;
      if (row?.story_id === storyId) setSession(row);
    });
  }, [load, onChange, storyId]);

  useEffect(() => onResync(load), [onResync, load]);

  // Clean up ambient music when unmounting
  useEffect(() => {
    return () => {
      storyAmbient.stop();
    };
  }, []);

  const node = session ? story.nodes[session.node_id] ?? story.nodes[story.start] : null;
  const together = session?.mode === "together" && Boolean(partner);
  const myVote = session?.votes?.[me.id];
  const partnerVote = partner ? session?.votes?.[partner.id] : undefined;

  const advance = useCallback(
    async (s: StorySession, choice: number) => {
      const from = s.node_id;
      if (advancing.current === from) return;
      advancing.current = from;
      const to = story.nodes[from]?.choices?.[choice]?.to;
      if (!to) return;
      const ending = story.nodes[to]?.ending?.title ?? null;
      const { data, error } = await api.rpc("story_advance", {
        p_session: s.id,
        p_from: from,
        p_to: to,
        p_choice: choice,
        p_ending: ending,
      });
      if (error) {
        advancing.current = null;
        return toast(errorMessage(error), "error");
      }
      setSession(data as StorySession);
      if (ending) sfx.chime();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [api, story.nodes],
  );

  // When both have voted, resolve the choice
  useEffect(() => {
    if (!session || !together || myVote === undefined || partnerVote === undefined) return;
    let pick = myVote;
    let label: string;
    if (myVote === partnerVote) {
      label = "You both chose the same path 💞";
    } else {
      const creatorTurn = session.history.length % 2 === 0;
      const iDecide = (role === "creator") === creatorTurn;
      pick = iDecide ? myVote : partnerVote;
      label = `${iDecide ? "Your" : `${partner?.display_name}'s`} choice wins this time — you take turns when you disagree.`;
    }
    setResolved(label);
    const t = setTimeout(() => {
      setResolved(null);
      advance(session, pick);
    }, 1600);
    return () => clearTimeout(t);
  }, [session, together, myVote, partnerVote, role, partner?.display_name, advance]);

  async function begin() {
    setBusy(true);
    const { data, error } = await api.rpc("story_start", { p_story: storyId, p_start: story.start });
    setBusy(false);
    if (error) return toast(errorMessage(error), "error");
    setSession(data as StorySession);
    setViewMode("reading");
  }

  async function choose(i: number) {
    if (!session || busy) return;
    if (!together) return advance(session, i);
    setBusy(true);
    const { data, error } = await api.rpc("story_vote", {
      p_session: session.id,
      p_node: session.node_id,
      p_choice: i,
    });
    setBusy(false);
    if (error) return toast(errorMessage(error), "error");
    setSession(data as StorySession);
  }

  async function restart() {
    if (!session) return;
    advancing.current = null;
    const { data, error } = await api.rpc("story_reset", {
      p_session: session.id,
      p_start: story.start,
      p_mode: session.mode,
    });
    if (error) return toast(errorMessage(error), "error");
    setSession(data as StorySession);
  }

  async function toggleMode() {
    if (!session) return;
    const { data, error } = await api.rpc("story_set_mode", {
      p_session: session.id,
      p_mode: session.mode === "together" ? "solo" : "together",
    });
    if (error) return toast(errorMessage(error), "error");
    setSession(data as StorySession);
  }

  const handleToggleAmbient = (kind: StoryAmbienceKind) => {
    if (prefs.ambient === kind) {
      storyAmbient.stop();
      updatePrefs({ ambient: "none" });
    } else {
      storyAmbient.start(kind);
      updatePrefs({ ambient: kind });
    }
  };

  const handleSaveCompletionNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!completedNote.trim() || !node?.ending) return;
    saveNote(me.display_name, completedNote.trim(), node.ending.title);
    setCompletedNote("");
    toast("Your reflection has been saved to the story journal! 💌", "gold");
  };

  const progress = useMemo(
    () => (node ? (node.ending ? 1 : (node.chapter + 0.5) / story.chapters.length) : 0),
    [node, story.chapters.length],
  );

  const bookmarked = node && session ? isBookmarked(storyId, session.node_id) : false;

  const handleBookmarkToggle = () => {
    if (!session || !node) return;
    addBookmark({
      storyId,
      nodeId: session.node_id,
      chapterIndex: node.chapter,
      chapterTitle: story.chapters[node.chapter] ?? `Chapter ${node.chapter + 1}`,
      snippet: node.text[0] ? fill(node.text[0]).substring(0, 100) + "..." : "Bookmark",
    });
    toast(bookmarked ? "Bookmark removed" : "Passage bookmarked! 🔖", "gold");
  };

  // If in overview mode, show the dedicated Story Detail view
  if (viewMode === "overview") {
    return (
      <StoryDetail
        story={story}
        session={session}
        onStartReading={() => {
          if (!session) {
            begin();
          } else {
            setViewMode("reading");
          }
        }}
      />
    );
  }

  return (
    <article className={cn("-mx-4 -mt-4 sm:mx-0 sm:mt-0 transition-colors duration-500", THEME_CLASSES[prefs.theme])}>
      {/* Cover / Scene Header with Controls */}
      <div className="relative overflow-hidden sm:rounded-3xl border border-line">
        <StoryScene
          scene={node?.scene ?? story.nodes[story.start].scene}
          palette={story.palette}
          className="h-48 w-full sm:h-64 transition-transform duration-700"
        />

        {/* Top Control Bar */}
        <div className="absolute left-3 top-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("overview")}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/60"
              aria-label="Story overview"
              title="Story Overview"
            >
              <IconBook size={18} />
            </button>
            <Link
              href="/stories"
              className="grid h-10 w-10 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/60"
              aria-label="Back to library"
              title="Story Library"
            >
              <IconBack size={18} />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {/* Ambient Music Button */}
            <div className="relative">
              <button
                onClick={() => setShowAmbientMenu((v) => !v)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur transition",
                  prefs.ambient !== "none"
                    ? "bg-gold text-black shadow-lg"
                    : "bg-black/45 text-white hover:bg-black/60",
                )}
                title="Ambient Soundscape"
              >
                <IconMusic size={14} />
                <span className="hidden sm:inline">
                  {prefs.ambient !== "none" ? prefs.ambient : "Music"}
                </span>
              </button>

              {/* Ambient Music Modal Dropdown */}
              {showAmbientMenu && (
                <div className="absolute right-0 top-12 z-30 w-56 rounded-2xl border border-line bg-surface p-3 shadow-2xl backdrop-blur-xl">
                  <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                    Romantic Ambience
                  </p>
                  <div className="grid gap-1.5">
                    {(["piano", "rain", "starlight", "candlelight"] as StoryAmbienceKind[]).map((kind) => (
                      <button
                        key={kind}
                        onClick={() => handleToggleAmbient(kind)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition",
                          prefs.ambient === kind
                            ? "bg-rose text-white"
                            : "hover:bg-surface-2 text-ink-soft",
                        )}
                      >
                        <span className="capitalize">{kind}</span>
                        {prefs.ambient === kind ? <IconPause size={14} /> : <IconPlayTri size={14} />}
                      </button>
                    ))}
                    {prefs.ambient !== "none" && (
                      <button
                        onClick={() => handleToggleAmbient(prefs.ambient as StoryAmbienceKind)}
                        className="mt-1 text-center text-xs text-ink-faint hover:text-ink py-1"
                      >
                        Mute Ambience
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bookmark Button */}
            <button
              onClick={handleBookmarkToggle}
              disabled={!session || !node}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full backdrop-blur transition",
                bookmarked ? "bg-gold text-black" : "bg-black/45 text-white hover:bg-black/60",
              )}
              title={bookmarked ? "Remove Bookmark" : "Bookmark this passage"}
            >
              <span className="text-sm">🔖</span>
            </button>

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(storyId)}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full backdrop-blur transition",
                isFavorite(storyId) ? "bg-rose text-white" : "bg-black/45 text-white hover:bg-black/60",
              )}
              title="Favourite Story"
            >
              <IconHeart size={18} />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-black/40">
          <div
            className="h-full bg-gold transition-[width] duration-700 shadow-sm"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Reader Controls Bar: Theme & Typography */}
      <div className="px-4 pt-4 sm:px-2 flex flex-wrap items-center justify-between gap-3 border-b border-line/40 pb-3">
        <div className="flex items-center gap-2">
          {/* Chapter badge */}
          <p className="text-xs font-bold uppercase tracking-wider text-gold">
            {node
              ? `Chapter ${node.chapter + 1} of ${story.chapters.length} · ${story.chapters[node.chapter]}`
              : `${story.emoji} ${story.chapters.length} chapters`}
          </p>
        </div>

        {/* Reading Settings */}
        <div className="flex items-center gap-2">
          {/* Font size toggle */}
          <div className="flex items-center rounded-full bg-surface-2 p-0.5 border border-line/40">
            {(["sm", "md", "lg"] as const).map((s) => (
              <button
                key={s}
                onClick={() => updatePrefs({ fontSize: s })}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-semibold transition",
                  prefs.fontSize === s ? "bg-surface text-ink shadow-sm" : "text-ink-faint hover:text-ink",
                )}
              >
                {s === "sm" ? "A-" : s === "md" ? "A" : "A+"}
              </button>
            ))}
          </div>

          {/* Theme palette toggle */}
          <div className="flex items-center rounded-full bg-surface-2 p-0.5 border border-line/40">
            <button
              onClick={() => updatePrefs({ theme: "romantic-dark" })}
              className={cn(
                "h-6 w-6 rounded-full border transition",
                prefs.theme === "romantic-dark" ? "border-gold scale-110" : "border-transparent",
              )}
              style={{ backgroundColor: "#0f0d15" }}
              title="Romantic Dark"
            />
            <button
              onClick={() => updatePrefs({ theme: "warm-sepia" })}
              className={cn(
                "h-6 w-6 rounded-full border transition",
                prefs.theme === "warm-sepia" ? "border-gold scale-110" : "border-transparent",
              )}
              style={{ backgroundColor: "#2d231f" }}
              title="Warm Sepia"
            />
            <button
              onClick={() => updatePrefs({ theme: "midnight-slate" })}
              className={cn(
                "h-6 w-6 rounded-full border transition",
                prefs.theme === "midnight-slate" ? "border-gold scale-110" : "border-transparent",
              )}
              style={{ backgroundColor: "#090d16" }}
              title="Midnight Slate"
            />
          </div>

          {/* Solo vs Together switch */}
          {session && partner && !node?.ending && (
            <button
              onClick={toggleMode}
              className="rounded-full bg-surface-2 px-3 py-1.5 text-xs font-semibold text-ink-soft hover:text-ink border border-line/40"
            >
              {session.mode === "together" ? "👫 Together" : "👤 Solo"} · switch
            </button>
          )}
        </div>
      </div>

      <div className="px-4 pt-4 sm:px-2 pb-16">
        <h1 className="font-display text-2xl sm:text-3xl font-bold">{story.title}</h1>

        {error && (
          <div className="mt-4">
            <ErrorNote onRetry={load}>{error}</ErrorNote>
          </div>
        )}

        {session === undefined && !error && (
          <div className="mt-6 space-y-3">
            {[90, 100, 80, 95].map((w, i) => (
              <div key={i} className="skeleton h-4" style={{ width: `${w}%` }} />
            ))}
          </div>
        )}

        {session === null && (
          <div className="mt-6 card p-6 text-center space-y-4">
            <p className="text-lg text-gold italic font-display">“{story.tagline}”</p>
            <p className="text-sm text-ink-soft max-w-md mx-auto">
              {partner
                ? `When you read together, you and ${partner.display_name} each pick a choice. Agree, and the story follows. Disagree, and you take turns deciding.`
                : "Open the book now — your partner can join you anytime."}
            </p>
            <Button size="lg" onClick={begin} loading={busy}>
              Open the Book
            </Button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {session && node && (
            <m.div
              key={session.node_id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Story Narrative Paragraphs */}
              <div
                className={cn(
                  "prose-story mt-6 max-w-prose font-display space-y-5 text-ink",
                  FONT_SIZE_CLASSES[prefs.fontSize],
                )}
              >
                {node.text.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {fill(p)}
                  </p>
                ))}
              </div>

              {/* Story Ending Celebration Screen */}
              {node.ending ? (
                <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-b from-gold/15 to-gold/5 p-6 sm:p-8 text-center shadow-xl">
                  <div className="text-3xl mb-2">✨ 🥂 ✨</div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">
                    {MOOD_LABEL[node.ending.mood]}
                  </p>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink">
                    {node.ending.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    You have unlocked {session.endings_seen.length} of{" "}
                    {new Set(Object.values(story.nodes).flatMap((n) => (n.ending ? [n.ending.id] : []))).size}{" "}
                    endings in this story.
                  </p>

                  {/* Reflection Form */}
                  <div className="mt-6 max-w-md mx-auto text-left card p-4 bg-surface/80 border-line">
                    <p className="text-xs font-semibold text-gold mb-1">
                      Leave a Reflection / Reaction:
                    </p>
                    <form onSubmit={handleSaveCompletionNote} className="space-y-2">
                      <input
                        type="text"
                        value={completedNote}
                        onChange={(e) => setCompletedNote(e.target.value)}
                        placeholder="Write a sweet note or reaction for your love..."
                        className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-xs text-ink focus:border-rose focus:outline-none"
                      />
                      <div className="flex justify-end">
                        <Button type="submit" size="sm" disabled={!completedNote.trim()}>
                          Save Reflection 💌
                        </Button>
                      </div>
                    </form>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button onClick={restart}>Read Again & Choose Differently</Button>
                    <button
                      onClick={() => setViewMode("overview")}
                      className="inline-flex min-h-11 items-center rounded-full bg-surface-2 px-5 font-semibold text-sm hover:text-ink text-ink-soft"
                    >
                      Story Overview
                    </button>
                    <Link
                      href="/stories"
                      className="inline-flex min-h-11 items-center rounded-full bg-surface-2 px-5 font-semibold text-sm hover:text-ink text-ink-soft"
                    >
                      All Stories
                    </Link>
                  </div>
                </div>
              ) : (
                /* Choice Branching Section */
                <div className="mt-10 space-y-3 pb-8">
                  <p className="text-sm font-bold text-gold uppercase tracking-wider">
                    {together ? "What do you both choose?" : "What happens next?"}
                  </p>
                  {node.choices!.map((c, i) => (
                    <button
                      key={c.to + i}
                      onClick={() => choose(i)}
                      disabled={busy || Boolean(resolved)}
                      className={cn(
                        "flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left font-medium transition duration-200",
                        myVote === i
                          ? "border-rose bg-rose/15 shadow-md scale-[1.01]"
                          : "border-line bg-surface hover:border-rose/60 hover:bg-surface-2",
                      )}
                    >
                      <span className="text-sm sm:text-base">{fill(c.label)}</span>
                      <span className="flex shrink-0 -space-x-2">
                        {myVote === i && <Avatar look={me.avatar} size={28} label="Your choice" />}
                        {together && myVote !== undefined && partnerVote === i && (
                          <Avatar look={partner?.avatar} size={28} label={`${nameOf(partner?.id)}'s choice`} />
                        )}
                      </span>
                    </button>
                  ))}
                  {together && (
                    <p className="pt-2 text-center text-xs text-ink-faint" aria-live="polite">
                      {resolved ??
                        (myVote === undefined && partnerVote !== undefined
                          ? `${partner?.display_name} has chosen — your turn.`
                          : myVote !== undefined && partnerVote === undefined
                          ? `Waiting for ${partner?.display_name} to choose…`
                          : "Both partners choose. Picks stay hidden until you've both decided.")}
                    </p>
                  )}
                </div>
              )}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
