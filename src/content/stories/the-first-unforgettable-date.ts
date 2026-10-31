import type { Story } from "./types";

export const theFirstUnforgettableDate: Story = {
  id: "the-first-unforgettable-date",
  title: "The Night Everything Changed",
  tagline: "Nervous hands, lingering eye contact across a candlelit table, and the realization that nothing would ever be the same.",
  emoji: "✨",
  category: "our-love",
  synopsis:
    "Everyone remembers the exact moment two lives collided and rearranged the universe. From pacing the floor before the doorbell rings to the electric touch of hands across a candlelit rooftop table and the lingering hesitation on the doorstep at midnight, this is the story of our first unforgettable date.",
  estimatedMinutes: 16,
  palette: ["#4c0519", "#fb7185"],
  chapters: [
    "I. The Five-Minute Warning",
    "II. The Rooftop Garden Table",
    "III. Strolling Through the Lantern Alley",
    "IV. The Doorstep Hesitation",
  ],
  start: "mirror-check",
  nodes: {
    "mirror-check": {
      chapter: 0,
      scene: "home",
      text: [
        "7:12 P.M. {A} is standing in front of the bedroom mirror adjusting a collar for the fourteenth time. The cologne has been applied, reconsidered, and re-applied with conservative caution. The heart behind their ribs is hammering at double its normal speed.",
        "Across town, {B} is holding up two different pairs of earrings against the light, asking their best friend on speakerphone which one says *'I'm effortlessly gorgeous and definitely didn't spend three hours preparing for this evening.'*",
        "This was not just another dinner. This was the date where months of friendly flirtation, late-night text messages, and unspoken tension were finally going to be put on the line.",
        "The doorbell chimes. {A} takes one deep breath, opens the door, and the entire breath is stolen away in a single second.",
      ],
      choices: [
        { label: "Stand there spellbound before finding your voice to compliment {B}", to: "doorway-greeting" },
        { label: "Smile with warm confidence and offer your arm with an old-school bow", to: "doorway-greeting" },
      ],
    },
    "doorway-greeting": {
      chapter: 0,
      scene: "home",
      text: [
        "{B} stands on the welcome mat looking so breathtaking that the hallway light seems to dim in comparison. The outfit is stunning, the perfume is intoxicating, but it is {B}'s nervous, radiant smile that completely disarms {A}.",
        "\"You... look unbelievable, {B},\" {A} manages, words quiet and completely genuine.",
        "{B}'s eyes sparkle, a delicate blush warming their cheeks. \"You don't clean up too bad yourself, {A}. Shall we? My stomach is doing acrobatic flips right now.\"",
        "\"Good. Mine has been doing flips since yesterday morning.\"",
      ],
      choices: [
        { label: "Escort {B} to the hidden rooftop garden bistro", to: "bistro-arrival" },
      ],
    },
    "bistro-arrival": {
      chapter: 1,
      scene: "rooftop",
      text: [
        "The venue is a secluded rooftop garden perched above the city, draped in hanging bougainvillea, flickering beeswax candles, and vintage string bulbs.",
        "The host leads them to an intimate corner table on the terrace overlooking the sea of twinkling city lights. A gentle jazz trio plays saxophone and acoustic bass in the courtyard below.",
        "{A} pulls out {B}'s chair with attentive care before sitting opposite them. For the first few minutes, the conversation is marked by that delicious, nervous tension of two people who want desperately to impress each other.",
        "Then {B} reaches across the linen tablecloth to examine the cocktail menu, and their fingers brush against {A}'s. Neither pulls away.",
      ],
      choices: [
        { label: "Break the ice with a hilarious story about how nervous you were getting ready", to: "hilarious-icebreaker" },
        { label: "Lock eyes across the candle and ask the question you've wondered for weeks", to: "deep-question" },
      ],
    },
    "hilarious-icebreaker": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "\"Full disclosure,\" {A} confesses, leaning forward with a conspiratorial grin. \"I tried on four different shirts, asked my mirror if I looked like an adult, and almost tripped over my own shoe on the way to the door.\"",
        "{B} throws their head back in delighted laughter, the sound cutting through all remaining formality. \"Oh thank goodness! I changed my earrings five times and made my sister swear that my mascara wasn't smudged every six minutes!\"",
        "The tension evaporates completely, replaced by that intoxicating, effortless flow of conversation where hours feel like minutes.",
      ],
      choices: [
        { label: "Share appetizers and feed each other bites across the table", to: "dinner-closeness" },
      ],
    },
    "deep-question": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A} rests their chin in their hand, looking directly into {B}'s eyes across the flickering flame. \"Can I ask you something real, {B}? What was the first thing you thought the very first day you met me?\"",
        "{B}'s smile softens, eyes turning thoughtful and unguarded. \"I thought... *there is someone with a rare soul.* Someone who actually listens when people speak. Someone I wanted to know everything about.\"",
        "The candlelight flickers, casting dancing shadows across their faces. The air between them grows thick with unspoken electricity.",
      ],
      choices: [
        { label: "Share appetizers and feed each other bites across the table", to: "dinner-closeness" },
      ],
    },
    "dinner-closeness": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "Dinner arrives—grilled tiger prawns with garlic herb butter, spiced jollof infused with smoked peppers, and chilled crisp white wine.",
        "They share plates, trading tastes from their forks. {B} gets a dab of chili butter on the tip of their finger, and before thinking, {A} takes their napkin and gently dabs it away, lingering just a second longer than necessary.",
        "When {B} looks up through their lashes, their breath is shallow. For several seconds, the music, the other diners, and the city below fade into complete obscurity.",
        "\"I don't want this dinner to end,\" {B} whispers softly.",
        "\"Then let's not end it,\" {A} replies.",
      ],
      choices: [
        { label: "Skip dessert and stroll through the historic illuminated alleyways", to: "lantern-stroll" },
      ],
    },
    "lantern-stroll": {
      chapter: 2,
      scene: "city-night",
      text: [
        "They leave the restaurant and wander into the quiet, cobblestone corridors of the old cultural district. Antique wrought-iron lanterns line the stone walls, casting golden pools of light every twenty paces.",
        "The night air is cool and fragrant with blooming jasmine. As they walk, their shoulders brush with every stride.",
        "{A} hesitates for half a second, then gently reaches out and slides their fingers through {B}'s.",
        "{B} doesn't pull away. Instead, their fingers squeeze tight, lacing together with a natural, perfect fit, as if their hands had been measured for each other in advance.",
      ],
      choices: [
        { label: "Stop beneath an archway of blooming flowers and pull {B} close", to: "archway-closeness" },
        { label: "Challenge {B} to a playful race to the old water fountain", to: "fountain-play" },
      ],
    },
    "archway-closeness": {
      chapter: 2,
      scene: "balcony",
      text: [
        "They stop beneath a stone archway draped in climbing night-blooming white orchids. The city is silent around them.",
        "{A} turns {B} gently by the hand, stepping close. {B}'s back rests lightly against the cool stone pillar, looking up into {A}'s eyes.",
        "\"I knew you were special, {B},\" {A} whispers, voice laced with reverent emotion. \"But tonight proved that you are once-in-a-lifetime.\"",
        "{B} places a trembling, warm palm against {A}'s chest, right over their pounding heart. \"{A}... you make my heart beat like it's never beaten before.\"",
      ],
      choices: [
        { label: "Walk slowly back toward {B}'s doorstep as midnight strikes", to: "doorstep-arrival" },
      ],
    },
    "fountain-play": {
      chapter: 2,
      scene: "city-night",
      text: [
        "\"Last one to the fountain buys the next date's ice cream!\" {B} laughs, suddenly breaking into a sprint across the cobblestones.",
        "{A} chases with a laugh, catching {B} by the waist right by the spraying stone fountain, lifting them and spinning them around in the starlight.",
        "{B} clings to {A}'s shoulders, breathless and laughing into the cool air, before their gaze locks and the laughter melts into pure romantic tension.",
      ],
      choices: [
        { label: "Walk slowly back toward {B}'s doorstep as midnight strikes", to: "doorstep-arrival" },
      ],
    },
    "doorstep-arrival": {
      chapter: 3,
      scene: "city-night",
      text: [
        "Midnight arrives. They stand together under the amber porch light of {B}'s front entrance. The ride home was quiet, filled with lingering glances and intertwined hands that refused to let go.",
        "Now, the moment of departure has arrived. The front door is two feet away, but neither moves toward it.",
        "{B} clutches their small handbag, looking at the ground, then up through their eyelashes with a look that melts every defense in {A}'s soul.",
        "\"I had the most wonderful night of my life, {A},\" {B} whispers softly. \"I really don't want to say goodbye yet.\"",
      ],
      choices: [
        { label: "Cup {B}'s face gently in both hands and lean in for your first kiss", to: "ending-first-kiss" },
        { label: "Pull {B} into a deep, tender embrace and whisper a promise for tomorrow", to: "ending-tender-hug" },
        { label: "Smile and ask: 'Can I come in for ten minutes of herbal tea?'", to: "ending-tea-invite" },
      ],
    },
    "ending-first-kiss": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "{A} steps forward, closing the remaining distance. With tender reverence, {A}'s hands cradle {B}'s jawline, thumbs softly stroking their cheekbones.",
        "{B}'s breath hitches, their eyes fluttering shut. When {A}'s lips touch {B}'s, the world stops spinning. The kiss is slow, gentle, and utterly consuming, carrying all the unspoken devotion that words could never hold.",
        "When they part, {B} lets out a soft, breathless laugh against {A}'s lips, their hands buried in the lapels of {A}'s jacket.",
        "\"Date number two,\" {B} whispers with shining eyes. \"Tomorrow?\"",
        "\"Tomorrow. And every day after that.\"",
      ],
      ending: {
        id: "the-first-kiss-forever",
        title: "The First Kiss of Forever",
        mood: "sweet",
      },
    },
    "ending-tender-hug": {
      chapter: 3,
      scene: "home",
      text: [
        "{A} wraps their arms around {B}, pulling them firmly against their chest. {B} melts into the embrace, arms locking around {A}'s neck, breathing in the scent of their cologne and the night air.",
        "They stand on the porch in that silent, unbroken embrace for a full minute, listening to the synchronized rhythm of their heartbeats.",
        "{A} kisses the top of {B}'s head softly. \"Get some sleep, my beautiful girl. I'm calling you the second you wake up.\"",
        "\"You better,\" {B} smiles, turning at the doorway to blow one last kiss before stepping inside.",
      ],
      ending: {
        id: "doorstep-sanctuary",
        title: "The Doorstep Sanctuary",
        mood: "sweet",
      },
    },
    "ending-tea-invite": {
      chapter: 3,
      scene: "kitchen",
      text: [
        "{B}'s eyes light up with playful delight. \"Only if you promise to take off your shoes and help me brew peppermint tea.\"",
        "Inside the cozy apartment, the date continues for three more hours on the floor cushions. They drink warm tea, play acoustic records, and talk until the first pink ribbons of dawn touch the sky.",
        "Some dates are pleasant memories; this was the night two lives became irrevocably, beautifully intertwined.",
      ],
      ending: {
        id: "ten-minutes-into-dawn",
        title: "Ten Minutes Turned into Dawn",
        mood: "sweet",
      },
    },
  },
};
