"use client";

import { useEffect, useState } from "react";
import type { StoryAmbienceKind } from "./sound";

const FAV_KEY = "justus_story_favorites";
const BOOKMARK_KEY = "justus_story_bookmarks";
const NOTES_KEY = "justus_story_notes";
const PREFS_KEY = "justus_story_reader_prefs";

export type StoryBookmark = {
  storyId: string;
  nodeId: string;
  chapterIndex: number;
  chapterTitle: string;
  snippet: string;
  savedAt: string;
};

export type StoryNote = {
  id: string;
  storyId: string;
  authorName: string;
  text: string;
  endingTitle?: string;
  createdAt: string;
};

export type ReaderPreferences = {
  theme: "romantic-dark" | "warm-sepia" | "midnight-slate";
  fontSize: "sm" | "md" | "lg";
  ambient: StoryAmbienceKind | "none";
  ambientVolume: number;
};

const DEFAULT_PREFS: ReaderPreferences = {
  theme: "romantic-dark",
  fontSize: "md",
  ambient: "none",
  ambientVolume: 0.5,
};

function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function useStoryFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(safeGet<string[]>(FAV_KEY, []));
  }, []);

  const toggleFavorite = (storyId: string) => {
    setFavorites((prev) => {
      const next = prev.includes(storyId) ? prev.filter((id) => id !== storyId) : [...prev, storyId];
      safeSet(FAV_KEY, next);
      return next;
    });
  };

  const isFavorite = (storyId: string) => favorites.includes(storyId);

  return { favorites, toggleFavorite, isFavorite };
}

export function useStoryBookmarks(storyId?: string) {
  const [bookmarks, setBookmarks] = useState<StoryBookmark[]>([]);

  useEffect(() => {
    const all = safeGet<StoryBookmark[]>(BOOKMARK_KEY, []);
    setBookmarks(storyId ? all.filter((b) => b.storyId === storyId) : all);
  }, [storyId]);

  const addBookmark = (bm: Omit<StoryBookmark, "savedAt">) => {
    const all = safeGet<StoryBookmark[]>(BOOKMARK_KEY, []);
    const exists = all.some((b) => b.storyId === bm.storyId && b.nodeId === bm.nodeId);
    let next: StoryBookmark[];
    if (exists) {
      next = all.filter((b) => !(b.storyId === bm.storyId && b.nodeId === bm.nodeId));
    } else {
      next = [{ ...bm, savedAt: new Date().toISOString() }, ...all];
    }
    safeSet(BOOKMARK_KEY, next);
    setBookmarks(storyId ? next.filter((b) => b.storyId === storyId) : next);
  };

  const isBookmarked = (sId: string, nId: string) =>
    bookmarks.some((b) => b.storyId === sId && b.nodeId === nId);

  return { bookmarks, addBookmark, isBookmarked };
}

export function useStoryNotes(storyId: string) {
  const [notes, setNotes] = useState<StoryNote[]>([]);

  useEffect(() => {
    const all = safeGet<Record<string, StoryNote[]>>(NOTES_KEY, {});
    setNotes(all[storyId] ?? []);
  }, [storyId]);

  const saveNote = (authorName: string, text: string, endingTitle?: string) => {
    if (!text.trim()) return;
    const all = safeGet<Record<string, StoryNote[]>>(NOTES_KEY, {});
    const newNote: StoryNote = {
      id: Math.random().toString(36).substring(2, 9),
      storyId,
      authorName,
      text: text.trim(),
      endingTitle,
      createdAt: new Date().toISOString(),
    };
    const updated = [newNote, ...(all[storyId] ?? [])];
    all[storyId] = updated;
    safeSet(NOTES_KEY, all);
    setNotes(updated);
  };

  return { notes, saveNote };
}

export function useReaderPreferences() {
  const [prefs, setPrefs] = useState<ReaderPreferences>(DEFAULT_PREFS);

  useEffect(() => {
    setPrefs(safeGet<ReaderPreferences>(PREFS_KEY, DEFAULT_PREFS));
  }, []);

  const updatePrefs = (partial: Partial<ReaderPreferences>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...partial };
      safeSet(PREFS_KEY, next);
      return next;
    });
  };

  return { prefs, updatePrefs };
}
