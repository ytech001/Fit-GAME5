import type { Story } from "./types";

export const thousandLetters: Story = {
  id: "thousand-letters",
  title: "The Book of 100 Love Letters",
  tagline: "A trail of wax-sealed envelopes, handwritten memories, and a hidden treasure meant only for her.",
  emoji: "💌",
  category: "deep-emotional",
  synopsis:
    "{B} wakes up to a crimson wax-sealed envelope resting on her pillow. What follows is a romantic scavenger hunt across secret corners of their life, each envelope containing a handwritten memory, culminating in a locked vintage chest holding Letter Number 100.",
  estimatedMinutes: 15,
  palette: ["#701a75", "#f472b6"],
  chapters: [
    "I. The First Envelope",
    "II. The Scavenger Trail",
    "III. The Memory Archive",
    "IV. Letter Number 100",
  ],
  start: "envelope-on-pillow",
  nodes: {
    "envelope-on-pillow": {
      chapter: 0,
      scene: "home",
      text: [
        "{B} wakes up to find a heavy cream envelope resting on the empty side of the bed. It is sealed with crimson wax bearing a delicate rose stamp.",
        "On the front, in {A}'s unmistakable handwriting, is written: *'For my heart, {B}. Envelope #1 of 100.'*",
        "Curious and smiling, {B} breaks the wax seal and unfolds the parchment.",
        "*'Good morning, beautiful. Today isn't an ordinary day. Scattered across our world are letters I've written for you over months. Find Envelope #2 where we first shared a warm brew.'*",
      ],
      choices: [
        { label: "Head to the kitchen espresso machine where the aroma of coffee is brewing", to: "kitchen-clue" },
        { label: "Check the cozy reading nook where they share late-night tea", to: "reading-nook-clue" },
      ],
    },
    "kitchen-clue": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "In the kitchen, a freshly poured mug of hazelnut coffee is steaming beside a small card tucked under the coaster.",
        "*'Envelope #12: I still remember the first coffee we drank together. You laughed so hard at my joke you almost choked, and in that split second, I knew I was in serious trouble because I was falling for you.'*",
        "Taped underneath the mug is the next clue: *'Look inside your favorite leather handbag.'*",
      ],
      choices: [
        { label: "Rush to the wardrobe to check the handbag", to: "handbag-clue" },
      ],
    },
    "reading-nook-clue": {
      chapter: 0,
      scene: "home",
      text: [
        "In the armchair nook, tucked between the pages of her favorite poetry collection, is a crimson envelope: *Envelope #18*.",
        "*'You read books with such intensity that you forget the world exists. Watching you get lost in words is one of my greatest joys in this life.'*",
        "At the bottom of the card is a tiny key tied to a satin ribbon.",
      ],
      choices: [
        { label: "Head toward the vanity drawer that matches the key", to: "handbag-clue" },
      ],
    },
    "handbag-clue": {
      chapter: 1,
      scene: "market",
      text: [
        "Inside the bag, {B} finds an envelope accompanied by two vintage cinema tickets.",
        "*'Envelope #34: You looked like an angel that night under the marquee lights. We didn't even watch half the movie because we couldn't stop whispering in the dark.'*",
        "The note continues: *'Get dressed in your favorite dress, my queen. A driver is waiting downstairs to take you to our next destination.'*",
      ],
      choices: [
        { label: "Slip into the emerald silk sundress and head downstairs", to: "car-ride" },
        { label: "Put on the soft blush-pink outfit and hurry to the car", to: "car-ride" },
      ],
    },
    "car-ride": {
      chapter: 1,
      scene: "city-night",
      text: [
        "The car glides through the palm-lined avenues of the city. Waiting on the leather back seat is a small velvet pouch containing Envelopes #50 through #65.",
        "Each card is a tiny masterpiece: memories of rainy days, silly debates about who loves who more, and confessions {A} had secretly penned in airport departure lounges.",
        "As {B} reads through them, tears of warmth well in her eyes. The driver pulls up to the entrance of an oceanfront botanical greenhouse.",
        "Waiting by the glass conservatory doors is {A}, dressed impeccably, holding a single blush gardenia.",
      ],
      choices: [
        { label: "Jump out of the car and throw your arms around {A}'s neck", to: "conservatory-meet" },
      ],
    },
    "conservatory-meet": {
      chapter: 1,
      scene: "forest",
      text: [
        "{B} practically runs across the paved path into {A}'s open arms. {A} catches her effortlessly, spinning her around as she laughs against his shoulder.",
        "\"You crazy, romantic man,\" {B} whispers into {A}'s ear, eyes shimmering. \"How long did you spend writing all these?\"",
        "\"Every moment I spent writing them was another reminder of how lucky I am,\" {A} smiles, pinning the gardenia gently in her hair.",
        "He gestures inside the glass conservatory, where thousands of rare orchids and tropical ferns glow under sunlight.",
      ],
      choices: [
        { label: "Walk hand-in-hand down the orchid pathway", to: "orchid-path" },
        { label: "Head toward the stone fountain in the center courtyard", to: "stone-fountain" },
      ],
    },
    "orchid-path": {
      chapter: 2,
      scene: "forest",
      text: [
        "Along the winding brick path beneath cascades of violet and white blooms, tiny wooden pegs hold envelopes dangling from flowering branches: #70, #75, #80...",
        "{B} unclips one: *'Envelope #77: When you fall asleep on long phone calls, I listen to you breathe for a few minutes before hanging up. It's the most calming sound on this earth.'*",
        "She looks at {A}, touched to the core. \"You really remember every little detail.\"",
        "\"Every second with you is etched into my soul, {B}.\"",
      ],
      choices: [
        { label: "Approach the center courtyard pavilion", to: "pavilion-archive" },
      ],
    },
    "stone-fountain": {
      chapter: 2,
      scene: "bridge",
      text: [
        "The stone fountain ripples gently with water lilies. Floating on the surface are miniature waterproof floating envelopes: #85, #90, #95.",
        "{A} retrieves #92 and hands it to {B}. *'I knew what love was before I met you, but you gave it color, music, and an anchor. Without you, I'm just wandering; with you, I'm home.'*",
        "{B} takes a trembling breath, her fingers clasping {A}'s hand tightly.",
      ],
      choices: [
        { label: "Step inside the private glass pavilion", to: "pavilion-archive" },
      ],
    },
    "pavilion-archive": {
      chapter: 2,
      scene: "castle",
      text: [
        "Inside the octagonal glass pavilion, the sunlight filters through stained-glass rose motifs.",
        "On a central oak pedestal rests a handcrafted leather-bound volume titled: *The Chronicle of Us: Volume I*.",
        "Surrounding the pedestal are ninety-nine opened envelopes arranged in the shape of a heart.",
        "\"You have read ninety-nine letters, my love,\" {A} says softly, his voice trembling with emotion. \"Only Letter Number 100 remains.\"",
      ],
      choices: [
        { label: "Ask {A} to read Letter Number 100 out loud to you", to: "letter-100-read" },
        { label: "Open the heavy leather album to read the final page together", to: "letter-100-together" },
      ],
    },
    "letter-100-read": {
      chapter: 3,
      scene: "stars",
      text: [
        "{A} takes the final parchment from inside the leather album. He turns to face {B}, holding her hands in his.",
        "\"'Letter 100: To my wife-to-be, my partner in all crimes, my greatest blessing. The first ninety-nine letters were about our yesterday and today. But this final letter is about forever.'\"",
        "{A} drops to one knee. From his pocket, he produces a ring box lined in midnight-blue velvet.",
        "\"'{B}, will you allow me to write the next thousand letters of my life by your side?'\"",
        "{B} covers her face as tears of overwhelming joy spill over. \"Yes! Yes, a million times yes!\"",
      ],
      choices: [
        { label: "Slip the brilliant diamond ring onto her finger", to: "ending-ring-proposal" },
      ],
    },
    "letter-100-together": {
      chapter: 3,
      scene: "home",
      text: [
        "Side by side at the pedestal, they open the final page.",
        "Handwritten across both pages are their shared dreams: the houses they will build, the children they will raise, the laughter that will echo through their halls.",
        "At the bottom, {A} has left a blank signature line beneath: *'Partners in Eternity'*.",
        "{A} hands {B} the gold fountain pen. She signs her name, and {A} signs his right beside hers, their names joined forever.",
      ],
      choices: [
        { label: "Seal the eternal pact with a deep, passionate kiss", to: "ending-signed-album" },
        { label: "Walk outside into the conservatory garden under golden hour light", to: "ending-golden-hour" },
      ],
    },
    "ending-ring-proposal": {
      chapter: 3,
      scene: "castle",
      text: [
        "The sparkling ring slides onto {B}'s left finger in a perfect fit. {A} stands and lifts her off her feet, holding her close as their hearts beat against each other.",
        "Surrounded by orchids and ninety-nine love letters, their promise is sealed under heaven.",
        "\"This is just the first volume,\" {A} whispers against her lips. \"We have our whole lives to write the rest.\"",
      ],
      ending: {
        id: "letters-ring-proposal",
        title: "The 100th Letter Proposal",
        mood: "epic",
      },
    },
    "ending-signed-album": {
      chapter: 3,
      scene: "home",
      text: [
        "Closing the heavy leather album, {B} traces the embossed gold lettering of their names.",
        "\"Every single word you wrote today will be something our grandchildren will read,\" she says softly, smiling through happy tears.",
        "Entwined in the glass pavilion, they know that no distance, no time, and no trial could ever weaken what they share.",
      ],
      ending: {
        id: "letters-signed-album",
        title: "The Book of Our Forever",
        mood: "sweet",
      },
    },
    "ending-golden-hour": {
      chapter: 3,
      scene: "stars",
      text: [
        "They step out into the botanical gardens just as the sun dips below the horizon, painting the sky in streaks of magenta, gold, and violet.",
        "Walking hand-in-hand, {B} holding the leather album against her chest, they feel the quiet certainty of true love.",
        "\"I love you, {A},\" she says, looking into his eyes under the golden dusk. \"More than all 100 letters could ever hold.\"",
      ],
      ending: {
        id: "letters-golden-dusk",
        title: "Golden Hour Promises",
        mood: "sweet",
      },
    },
  },
};
