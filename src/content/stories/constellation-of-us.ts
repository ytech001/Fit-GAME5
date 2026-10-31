import type { Story } from "./types";

export const constellationOfUs: Story = {
  id: "constellation-of-us",
  title: "A Constellation Named After You",
  tagline: "3 A.M. rooftop breeze, an astronomical telescope, and an eternal star registered in her honor.",
  emoji: "✨",
  category: "deep-emotional",
  synopsis:
    "At 3 A.M. when the world is quiet and still, {A} wakes {B} for an astronomical surprise on the rooftop. Beneath a brass telescope and vintage celestial charts, an eternal star registered in her name becomes a testament to a love that outshines galaxies.",
  estimatedMinutes: 14,
  palette: ["#1e1b4b", "#818cf8"],
  chapters: [
    "I. The 3 A.M. Escape",
    "II. The Brass Telescope",
    "III. Chart of the Cosmos",
    "IV. The Star of {B}",
  ],
  start: "rooftop-escape",
  nodes: {
    "rooftop-escape": {
      chapter: 0,
      scene: "city-night",
      text: [
        "It is 3:15 A.M. The city below is peaceful, bathed in sleeping indigo shadows. The air is cool, carrying that quiet, sacred stillness that only exists when the world is asleep.",
        "On the high rooftop garden, {A} has laid out thick sheepskin rugs, plush velvet floor cushions, and a brass astronomical telescope pointed up toward the northern heavens.",
        "{B} emerges onto the roof wrapped in a cozy knitted cardigan, her eyes blinking against the ambient starlight.",
        "\"What is this mystery, {A}? You woke me up in the middle of the night!\" she asks with a curious, sleepy smile.",
      ],
      choices: [
        { label: "Pull her down into the plush cushions and hand her a cup of hot spiced mint tea", to: "mint-tea-nook" },
        { label: "Lead her straight to the brass telescope to show her what's in the sky", to: "telescope-intro" },
      ],
    },
    "mint-tea-nook": {
      chapter: 0,
      scene: "stars",
      text: [
        "{A} wraps {B} in a thick cashmere blanket and places a steaming enamel mug of sweet Moroccan mint tea into her hands.",
        "{B} takes a grateful sip, leaning back against {A}'s chest. The warmth of his body shields her from the rooftop breeze.",
        "Above them, free from city glare, millions of stars sparkle like powdered diamonds across deep velvet indigo.",
        "\"I've been planning this for weeks,\" {A} murmurs into her ear. \"Tonight, the clearest astronomical window of the year opens.\"",
      ],
      choices: [
        { label: "Step up to the telescope together", to: "telescope-intro" },
      ],
    },
    "telescope-intro": {
      chapter: 0,
      scene: "stars",
      text: [
        "The brass telescope gleams softly under the starlight.",
        "{A} adjusts the fine-focus brass dial, aligning the crosshairs with a radiant celestial cluster near the constellation Cassiopeia.",
        "\"Come look through the eyepiece, {B},\" {A} invites softly.",
        "{B} bends down, placing one eye against the optical glass. Her breath catches instantly in her throat.",
      ],
      choices: [
        { label: "Let her marvel at the sparkling celestial nebula", to: "nebula-view" },
      ],
    },
    "nebula-view": {
      chapter: 1,
      scene: "stars",
      text: [
        "Through the lens, a swirling vortex of deep violet, turquoise, and rose-gold stardust glows with unimaginable brilliance.",
        "Thousands of newborn stars twinkle inside the cosmic cloud like jewels floating in an ocean of light.",
        "\"It's breathtaking...\" {B} whispers, completely spellbound. \"I feel like I'm looking right into the heart of creation.\"",
        "\"That's what looking into your eyes feels like to me every single day,\" {A} answers gently.",
      ],
      choices: [
        { label: "Bring out the vintage astronomical leather star chart", to: "star-chart" },
      ],
    },
    "star-chart": {
      chapter: 1,
      scene: "sky",
      text: [
        "On a low wooden table lit by a tiny red reading lantern, {A} unrolls a vintage parchment celestial map.",
        "The map shows constellations from ancient history: Orion, Ursa Major, Pegasus...",
        "\"Did you know that for thousands of years, sailors used the stars to find their way home across pitch-black oceans?\" {A} asks, tracing a constellation line with his finger.",
        "{B} looks from the map to {A}'s face. \"And what is your star, {A}?\"",
        "\"You are. You're the only north star I will ever need.\"",
      ],
      choices: [
        { label: "Take {B}'s hand and trace your own custom constellation in the sky", to: "trace-constellation" },
        { label: "Present the sealed parchment of celestial registry", to: "registry-parchment" },
      ],
    },
    "trace-constellation": {
      chapter: 2,
      scene: "stars",
      text: [
        "{A} stands behind {B}, taking her right hand and gently lifting her index finger toward the heavens.",
        "Guiding her finger from one brilliant point of light to the next: \"From here... to there... down to that golden star, and back to this one.\"",
        "\"What constellation is that?\" {B} asks, fascinated.",
        "\"It's a crown,\" {A} smiles against her temple. \"The Queen's Crown. Officially registered in the International Star Registry under your exact name.\"",
      ],
      choices: [
        { label: "Present the official star certificate and registry deed", to: "registry-parchment" },
      ],
    },
    "registry-parchment": {
      chapter: 2,
      scene: "castle",
      text: [
        "From an engraved leather cylinder, {A} draws an official illuminated parchment adorned with gold foil seals.",
        "It reads: *'Coordinates: RA 00h 56m 42s, Dec +60° 43′ 00″ — Star Name: {B}. Dedicated forever with the words: You are my eternity.'*",
        "{B}'s hands tremble slightly as she reads the words. A single tear tracks down her cheek, reflecting the starlight.",
        "\"You bought a star in the sky... named after me?\"",
        "\"As long as the universe exists, your name is written in the heavens. Nothing can ever erase it.\"",
      ],
      choices: [
        { label: "Hold {B} tight as emotion sweeps through her heart", to: "rooftop-embrace" },
      ],
    },
    "rooftop-embrace": {
      chapter: 2,
      scene: "stars",
      text: [
        "{B} turns around and wraps her arms around {A} with fierce, overwhelming tenderness.",
        "She presses her forehead against his chest, listening to his steady heartbeat.",
        "\"I don't know what I did to deserve you, {A},\" she whispers, her voice thick with emotion. \"You make me feel so deeply loved, so seen, so cherished.\"",
        "\"You didn't have to do anything, my heart. You just had to exist.\"",
      ],
      choices: [
        { label: "Wait together on the cushions for the first light of dawn", to: "dawn-arrival" },
      ],
    },
    "dawn-arrival": {
      chapter: 3,
      scene: "sky",
      text: [
        "The deep blue of night gradually yields to soft coral, violet, and pale gold along the eastern horizon.",
        "The stars begin to fade into the dawn, but the star named {B} remains glowing in their hearts.",
        "The city below stirs awake with distant morning birds and gentle breezes.",
        "Sitting together on the rooftop, wrapped in the blanket, the whole day lies before them.",
      ],
      choices: [
        { label: "Kiss her in the first rays of the golden morning sun", to: "ending-golden-dawn" },
        { label: "Whisper your morning vow as the city wakes below", to: "ending-morning-vow" },
        { label: "Head back downstairs to cook a celebratory sunrise breakfast", to: "ending-sunrise-breakfast" },
      ],
    },
    "ending-golden-dawn": {
      chapter: 3,
      scene: "stars",
      text: [
        "The first golden ray of sunlight crests the horizon and illuminates {B}'s face with divine radiance.",
        "{A} leans in and kisses her lips—a kiss that greets a brand new day of endless love.",
        "Under the sky that now carries her name, their story continues with joy, passion, and peace that will never end.",
      ],
      ending: {
        id: "constellation-golden-dawn",
        title: "The Golden Dawn of Us",
        mood: "epic",
      },
    },
    "ending-morning-vow": {
      chapter: 3,
      scene: "city-night",
      text: [
        "\"Every morning the sun rises,\" {A} whispers, holding {B}'s hand against his heart, \"and every morning I will fall in love with you all over again.\"",
        "{B} smiles, leaning her head on his shoulder, watching the colors of morning paint the sky.",
        "A peaceful, unbreakable certainty fills their souls.",
      ],
      ending: {
        id: "constellation-morning-vow",
        title: "The Vow Written in the Sky",
        mood: "sweet",
      },
    },
    "ending-sunrise-breakfast": {
      chapter: 3,
      scene: "kitchen",
      text: [
        "Hand-in-hand, they head downstairs to the warm kitchen.",
        "With fresh mango juice, warm toasted brioche, and the star certificate framed proudly on the counter, they laugh and celebrate the star that will shine over them forever.",
      ],
      ending: {
        id: "constellation-sunrise-kitchen",
        title: "Breakfast Under Our Star",
        mood: "sweet",
      },
    },
  },
};
