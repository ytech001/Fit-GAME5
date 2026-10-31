import { acrossOceans } from "./across-oceans";
import { candlelitReunion } from "./candlelit-reunion";
import { cityAfterMidnight } from "./city-after-midnight";
import { comfortInYourArms } from "./comfort-in-your-arms";
import { constellationOfUs } from "./constellation-of-us";
import { crownAndKingdom } from "./crown-and-kingdom";
import { fallingAsleepOnCall } from "./falling-asleep-on-call";
import { futureTense } from "./future-tense";
import { guardedHearts } from "./guarded-hearts";
import { islandOfWhispers } from "./island-of-whispers";
import { lagosToDelta } from "./lagos-to-delta";
import { lanternRealm } from "./lantern-realm";
import { marketHeist } from "./market-heist";
import { midnightExpress } from "./midnight-express";
import { midnightLekki } from "./midnight-lekki";
import { ourFirstAnniversary } from "./our-first-anniversary";
import { parisInterlude } from "./paris-interlude";
import { perfectDay } from "./perfect-day";
import { rainySunday } from "./rainy-sunday";
import { shadowsAndSilk } from "./shadows-and-silk";
import { starlitLagoon } from "./starlit-lagoon";
import { surpriseProposal } from "./surprise-proposal";
import { theDisagreement } from "./the-disagreement";
import { theFirstUnforgettableDate } from "./the-first-unforgettable-date";
import { thirdMainland } from "./third-mainland";
import { thousandLetters } from "./thousand-letters";
import type { Story } from "./types";

export type { Story, StoryNode, SceneKey, StoryCategory } from "./types";

// Register all couple stories here across all categories.
export const STORIES: Story[] = [
  // Just You & Me
  perfectDay,
  futureTense,
  midnightLekki,
  fallingAsleepOnCall,
  cityAfterMidnight,

  // Our Love Stories
  theFirstUnforgettableDate,
  ourFirstAnniversary,
  surpriseProposal,
  thirdMainland,
  marketHeist,

  // Deep Emotional Romance
  theDisagreement,
  acrossOceans,
  comfortInYourArms,
  thousandLetters,
  constellationOfUs,

  // Dark Romance
  shadowsAndSilk,
  guardedHearts,

  // Sensual Romance
  candlelitReunion,
  rainySunday,
  parisInterlude,
  starlitLagoon,

  // Adventure & Fantasy Romance
  islandOfWhispers,
  midnightExpress,
  lanternRealm,
  crownAndKingdom,
  lagosToDelta,
];

export function getStory(id: string) {
  return STORIES.find((s) => s.id === id) ?? null;
}

/** Replaces {A}/{B} with the partners' names. */
export function fillNames(text: string, a: string, b: string) {
  return text.replaceAll("{A}", a).replaceAll("{B}", b);
}

/** Problems with a story graph; empty array means valid. Used by tests and authoring. */
export function validateStory(story: Story): string[] {
  const problems: string[] = [];
  const ids = Object.keys(story.nodes);
  if (!story.nodes[story.start]) problems.push(`start node "${story.start}" missing`);
  for (const [id, node] of Object.entries(story.nodes)) {
    if (!node.text.length) problems.push(`${id}: no text`);
    if (node.chapter < 0 || node.chapter >= story.chapters.length) problems.push(`${id}: bad chapter ${node.chapter}`);
    if (!node.ending && !node.choices?.length) problems.push(`${id}: dead end (no choices, no ending)`);
    if (node.ending && node.choices?.length) problems.push(`${id}: has both ending and choices`);
    for (const c of node.choices ?? []) if (!story.nodes[c.to]) problems.push(`${id}: choice "${c.label}" → missing "${c.to}"`);
  }
  const seen = new Set<string>();
  const queue = [story.start];
  while (queue.length) {
    const id = queue.shift()!;
    if (seen.has(id) || !story.nodes[id]) continue;
    seen.add(id);
    story.nodes[id].choices?.forEach((c) => queue.push(c.to));
  }
  ids.filter((id) => !seen.has(id)).forEach((id) => problems.push(`${id}: unreachable`));
  const endings = new Set(Object.values(story.nodes).flatMap((n) => (n.ending ? [n.ending.id] : [])));
  if (endings.size < 2) problems.push("needs at least two distinct endings");
  return problems;
}
