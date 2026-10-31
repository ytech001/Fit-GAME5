// ─── Story authoring format ───────────────────────────────────────────
// A story is a graph of nodes. Each node belongs to a chapter, has paragraphs
// of text, and either choices (edges to other nodes) or an ending.
// Text placeholders: {A} = the world's creator, {B} = their partner.
// To add a story: create a file exporting a `Story`, then add it to ./index.ts.
// `npm test` validates every story (no broken links, every node reachable,
// every path ends, at least two distinct endings).

export type StoryCategory =
  | "just-you-and-me"
  | "our-love"
  | "deep-emotional"
  | "dark-romance"
  | "sensual-romance"
  | "adventure-fantasy";

export type SceneKey =
  | "city-night"
  | "bridge"
  | "market"
  | "rain"
  | "beach"
  | "forest"
  | "sky"
  | "castle"
  | "dragon"
  | "kitchen"
  | "home"
  | "stars"
  | "train"
  | "candlelight"
  | "island"
  | "manor"
  | "rooftop"
  | "balcony";

export type StoryChoice = { label: string; to: string };

export type StoryNode = {
  chapter: number;
  scene: SceneKey;
  text: string[];
  choices?: StoryChoice[];
  ending?: { id: string; title: string; mood: "sweet" | "bittersweet" | "funny" | "epic" };
};

export type Story = {
  id: string;
  title: string;
  tagline: string;
  emoji: string;
  category?: StoryCategory;
  synopsis?: string;
  estimatedMinutes?: number;
  palette: [string, string];
  chapters: string[];
  start: string;
  nodes: Record<string, StoryNode>;
};
