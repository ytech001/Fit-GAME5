"use client";
// Tiny synthesized sound effects (no audio files to download). Respect the mute preference.
let ctx: AudioContext | null = null;
let enabled = true;
let ringTimer: ReturnType<typeof setInterval> | null = null;

export function setSoundEnabled(on: boolean) {
  enabled = on;
  if (!on) stopRing();
}

export const isSoundEnabled = () => enabled;

function audio() {
  if (typeof window === "undefined") return null;
  ctx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

function tone(freq: number, start: number, dur: number, gain = 0.06, type: OscillatorType = "sine") {
  const a = audio();
  if (!a) return;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, a.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, a.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
  o.connect(g).connect(a.destination);
  o.start(a.currentTime + start);
  o.stop(a.currentTime + start + dur + 0.05);
}

export const sfx = {
  pop() {
    if (enabled) tone(660, 0, 0.12, 0.05);
  },
  sent() {
    if (enabled) tone(880, 0, 0.08, 0.03);
  },
  chime() {
    if (!enabled) return;
    [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.09, 0.4, 0.04, "triangle"));
  },
  reward() {
    if (!enabled) return;
    [784, 988, 1175].forEach((f, i) => tone(f, i * 0.07, 0.3, 0.05, "triangle"));
  },
  /** Two short beeps; small vehicles (okada/keke) have a higher, thinner horn. */
  horn(small = false) {
    if (!enabled) return;
    const f = small ? 620 : 410;
    tone(f, 0, 0.18, 0.035, "square");
    tone(f * 1.26, 0, 0.18, 0.02, "square");
    tone(f, 0.24, 0.32, 0.035, "square");
    tone(f * 1.26, 0.24, 0.32, 0.02, "square");
  },
  /** Boom and crackle of a firework; vol 0..1 for distance. */
  firework(vol = 1) {
    if (!enabled) return;
    tone(70, 0, 0.45, 0.07 * vol, "sine");
    tone(110, 0, 0.25, 0.04 * vol, "triangle");
    for (let i = 0; i < 9; i++) tone(2600 + Math.random() * 2600, 0.25 + Math.random() * 0.9, 0.03, 0.012 * vol, "square");
  },
  /** A few bars of a gentle love-song melody. */
  piano() {
    if (!enabled) return;
    const notes = [72, 76, 79, 76, 74, 72, 71, 72, 76, 74, 72, 67];
    notes.forEach((n, i) => {
      tone(440 * 2 ** ((n - 69) / 12), i * 0.32, 0.9, 0.04, "triangle");
      if (i % 3 === 0) tone(440 * 2 ** ((n - 81) / 12), i * 0.32, 1.2, 0.03, "sine");
    });
  },
  romance() {
    if (!enabled) return;
    // Sweet rising melody
    [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.1, 0.5, 0.035, "triangle"));
    tone(1047, 0.5, 0.7, 0.02, "sine");
  },
};

// Gentle looping arpeggios for date spots. Chords are MIDI note lists.
const PROGRESSIONS = {
  sunset: { bar: 2.4, chords: [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 67]] },
  dinner: { bar: 2.8, chords: [[62, 65, 69, 72], [55, 59, 62, 65], [60, 64, 67, 71], [57, 61, 64, 67]] },
  bonfire: { bar: 3.2, chords: [[57, 60, 64], [53, 57, 60], [60, 64, 67], [55, 59, 62]] },
} as const;
const midi = (n: number) => 440 * 2 ** ((n - 69) / 12);
let musicTimer: ReturnType<typeof setInterval> | null = null;

export const dateMusic = {
  start(kind: keyof typeof PROGRESSIONS) {
    this.stop();
    if (!enabled) return;
    const p = PROGRESSIONS[kind];
    let i = 0;
    const bar = () => {
      if (!enabled) return dateMusic.stop();
      const chord = p.chords[i++ % p.chords.length];
      tone(midi(chord[0] - 12), 0, p.bar, 0.025, "sine");
      const step = p.bar / 8;
      for (let k = 0; k < 8; k++) tone(midi(chord[[0, 1, 2, 3, 2, 1, 2, 3][k] % chord.length] + 12), k * step, step * 2.2, 0.018, "triangle");
    };
    bar();
    musicTimer = setInterval(bar, p.bar * 1000);
  },
  stop() {
    if (musicTimer) clearInterval(musicTimer);
    musicTimer = null;
  },
};

export function startRing() {
  if (!enabled || ringTimer) return;
  const ring = () => {
    tone(740, 0, 0.35, 0.05);
    tone(587, 0.4, 0.5, 0.05);
  };
  ring();
  ringTimer = setInterval(ring, 2200);
}

export function stopRing() {
  if (ringTimer) clearInterval(ringTimer);
  ringTimer = null;
}

export type StoryAmbienceKind = "piano" | "rain" | "starlight" | "candlelight";

let ambientTimer: ReturnType<typeof setInterval> | null = null;
let currentAmbient: StoryAmbienceKind | null = null;
let ambientGain = 0.035;

export const storyAmbient = {
  get current() {
    return currentAmbient;
  },
  isPlaying() {
    return Boolean(currentAmbient && ambientTimer);
  },
  setVolume(vol: number) {
    ambientGain = Math.max(0, Math.min(1, vol)) * 0.05;
  },
  start(kind: StoryAmbienceKind) {
    this.stop();
    if (!enabled) return;
    currentAmbient = kind;
    const a = audio();
    if (!a) return;

    if (kind === "piano") {
      const chords = [
        [60, 64, 67, 71],
        [57, 60, 64, 67],
        [53, 57, 60, 64],
        [55, 59, 62, 67],
      ];
      let step = 0;
      const playBar = () => {
        if (!enabled || currentAmbient !== "piano") return storyAmbient.stop();
        const ch = chords[step++ % chords.length];
        tone(midi(ch[0] - 12), 0, 3.2, ambientGain * 0.8, "sine");
        tone(midi(ch[1]), 0.4, 2.4, ambientGain * 0.6, "triangle");
        tone(midi(ch[2]), 0.8, 2.2, ambientGain * 0.5, "triangle");
        tone(midi(ch[3] + 12), 1.2, 2.8, ambientGain * 0.45, "triangle");
      };
      playBar();
      ambientTimer = setInterval(playBar, 3200);
    } else if (kind === "rain") {
      const playRain = () => {
        if (!enabled || currentAmbient !== "rain") return storyAmbient.stop();
        // Soft pitter-patter of drops
        for (let i = 0; i < 6; i++) {
          const delay = Math.random() * 0.9;
          tone(2200 + Math.random() * 1200, delay, 0.04, ambientGain * 0.15, "square");
        }
        // Low distant rumble occasionally
        if (Math.random() < 0.25) {
          tone(55 + Math.random() * 20, 0, 1.4, ambientGain * 0.4, "sine");
        }
      };
      playRain();
      ambientTimer = setInterval(playRain, 900);
    } else if (kind === "starlight") {
      const notes = [72, 76, 79, 83, 84, 88, 91];
      let idx = 0;
      const playStars = () => {
        if (!enabled || currentAmbient !== "starlight") return storyAmbient.stop();
        const n = notes[idx++ % notes.length];
        tone(midi(n), 0, 1.8, ambientGain * 0.4, "triangle");
        tone(midi(n + 7), 0.35, 1.5, ambientGain * 0.25, "sine");
      };
      playStars();
      ambientTimer = setInterval(playStars, 1200);
    } else if (kind === "candlelight") {
      const chords = [
        [62, 65, 69, 72],
        [60, 64, 67, 71],
        [58, 62, 65, 69],
        [57, 61, 64, 67],
      ];
      let step = 0;
      const playCandle = () => {
        if (!enabled || currentAmbient !== "candlelight") return storyAmbient.stop();
        const ch = chords[step++ % chords.length];
        tone(midi(ch[0] - 12), 0, 3.6, ambientGain * 0.85, "sine");
        tone(midi(ch[1]), 0.6, 2.8, ambientGain * 0.5, "triangle");
        tone(midi(ch[2]), 1.2, 2.4, ambientGain * 0.5, "triangle");
        tone(midi(ch[3]), 1.8, 2.6, ambientGain * 0.45, "sine");
      };
      playCandle();
      ambientTimer = setInterval(playCandle, 3600);
    }
  },
  stop() {
    if (ambientTimer) clearInterval(ambientTimer);
    ambientTimer = null;
    currentAmbient = null;
  },
};
