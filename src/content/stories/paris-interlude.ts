import type { Story } from "./types";

export const parisInterlude: Story = {
  id: "paris-interlude",
  title: "Our Little Apartment in Paris",
  tagline: "Montmartre cobblestones, warm buttery croissants, and kissing under a shared umbrella near the Seine.",
  emoji: "🥐",
  category: "sensual-romance",
  synopsis:
    "An intimate Parisian holiday in a sun-drenched Montmartre apartment: warm buttery croissants in bed, antique flower markets by the Seine, stolen kisses under a shared umbrella in the rain, and late-night jazz in a candlelit stone cellar.",
  estimatedMinutes: 15,
  palette: ["#831843", "#f43f5e"],
  chapters: [
    "I. Morning in Montmartre",
    "II. The Flower Market by the River",
    "III. Rain by the Iron Lady",
    "IV. The Velvet Jazz Cellar",
  ],
  start: "montmartre-morning",
  nodes: {
    "montmartre-morning": {
      chapter: 0,
      scene: "city-night",
      text: [
        "Sunlight filters through wrought-iron Juliet balconies, warming the herringbone parquet floor of their fifth-floor Parisian apartment.",
        "From the street below, the unmistakable scent of freshly baked sourdough baguettes and buttery pain au chocolat drifts upward on the crisp autumn morning breeze.",
        "{B} is wrapped in an oversized knit sweater, leaning over the balcony railing to watch the street sweepers and painters setting up easels in Place du Tertre.",
        "{A} steps up behind her, wrapping his arms around her waist and resting his chin on her shoulder. \"Bonjour, mon amour.\"",
      ],
      choices: [
        { label: "Head down to the corner boulangerie for warm croissants and café au lait", to: "boulangerie-visit" },
        { label: "Stay on the balcony and share a quiet morning kiss overlooking Paris", to: "balcony-morning-kiss" },
      ],
    },
    "balcony-morning-kiss": {
      chapter: 0,
      scene: "sky",
      text: [
        "{B} turns in {A}'s embrace, her hands sliding up his chest to rest around his neck. The morning breeze carries a faint whisper of roasted coffee beans.",
        "\"Sometimes I still pinch myself,\" she says softly. \"Waking up in Paris with you feels like a dream I never want to end.\"",
        "{A} kisses her lips—slow and deep—while the bells of Sacré-Cœur chime eight gentle rings in the distance.",
        "\"Every city on earth is just a background for you, {B}. But Paris suits you like haute couture.\"",
      ],
      choices: [
        { label: "Take her hand and walk down the spiral stairs to the bakery", to: "boulangerie-visit" },
      ],
    },
    "boulangerie-visit": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "They walk down the spiral staircase into the cobblestone street. The bell above the boulangerie door jingles merrily.",
        "Behind the glass counter are golden croissants, glistening raspberry tarts, and warm baguettes with crackling crusts.",
        "The elderly baker greets them with a warm smile: *'Pour les amoureux!'*",
        "{A} orders in charmingly practiced French, handing {B} a warm paper bag that smells like pure heaven.",
      ],
      choices: [
        { label: "Stroll down toward the Seine and the open-air flower market", to: "flower-market" },
      ],
    },
    "flower-market": {
      chapter: 1,
      scene: "market",
      text: [
        "They wander along the Quai de la Tournelle where green wooden bouquiniste stalls sell vintage fashion sketches and antique books.",
        "At the flower market, buckets overflow with fragrant pink peonies, white hydrangeas, and deep red French roses.",
        "{A} browses with intense focus before choosing a lush bouquet of velvet peonies tied with a raw silk ribbon.",
        "He presents them to {B} with a theatrical bow. \"For the only flower in Paris that matters.\"",
      ],
      choices: [
        { label: "Bury your face in the fragrant blooms and pull {A} in for a kiss", to: "bouquiniste-browsing" },
        { label: "Look for a vintage postcard to mail to your future selves", to: "vintage-postcard" },
      ],
    },
    "vintage-postcard": {
      chapter: 1,
      scene: "bridge",
      text: [
        "At an antique book stall, {B} finds a 1950s postcard of two lovers sharing an umbrella on the Pont des Arts.",
        "Using a vintage fountain pen from the seller, they take turns writing notes to each other on the back.",
        "{A} writes: *'Paris, with the love of my life. Ten years from now, I will love you even more than I do right now.'*",
        "{B} holds the postcard against her heart, treasuring every stroke.",
      ],
      choices: [
        { label: "Walk toward the Champ de Mars as autumn rain begins to fall", to: "eiffel-rain" },
      ],
    },
    "bouquiniste-browsing": {
      chapter: 1,
      scene: "bridge",
      text: [
        "{B} takes the bouquet, her smile outshining the midday sun. Passersby turn to admire the radiant couple.",
        "A street violinist on the bridge catches sight of them and begins playing a romantic rendition of Édith Piaf's *La Vie en Rose*.",
        "{A} takes {B}'s hand, guiding her through a playful impromptu twirl right there on the stone bridge.",
        "Clouds begin to gather over the Seine, dark and romantic.",
      ],
      choices: [
        { label: "Open the large black umbrella as soft rain starts to sprinkle", to: "eiffel-rain" },
      ],
    },
    "eiffel-rain": {
      chapter: 2,
      scene: "rain",
      text: [
        "A sudden, gentle Parisian rain shower begins to patter against the pavements.",
        "{A} unfurls a large black umbrella, pulling {B} tight against his side. The mist catches the lights of the city, making every lamppost glow like a halo.",
        "Ahead of them, the majestic Eiffel Tower pierces the gray mist, monumental and timeless.",
        "Under the single umbrella, their bodies are pressed together, steps synchronized in the soft drizzle.",
      ],
      choices: [
        { label: "Stop in the middle of the empty gravel path for a cinematic rain kiss", to: "cinematic-kiss" },
        { label: "Duck beneath the awning of a classic corner bistro for hot wine", to: "corner-bistro" },
      ],
    },
    "cinematic-kiss": {
      chapter: 2,
      scene: "city-night",
      text: [
        "{A} tilts the umbrella back just enough to look into {B}'s eyes. Raindrops drum on the taut fabric above their heads.",
        "\"I don't think there has ever been a woman as beautiful as you standing in this city,\" {A} whispers.",
        "{B} smiles, her breath misting in the cool air, and reaches up on tiptoes. Their kiss is electric, warm against the chilly rain, unforgettable.",
        "Behind them, precisely at that second, the Eiffel Tower erupts into its hourly sparkle of twenty thousand flashing golden lights.",
      ],
      choices: [
        { label: "Hold each other tightly while the tower sparkles in the rain", to: "jazz-cellar-descent" },
      ],
    },
    "corner-bistro": {
      chapter: 2,
      scene: "home",
      text: [
        "They slip into a tiny bistro with red velvet banquettes and warm brass fixtures.",
        "Two glasses of steaming vin chaud spiced with cinnamon, orange peel, and star anise warm their chilled hands.",
        "Watching the rain wash over the cobblestones through the steamy windowpane, {B} traces the outline of {A}'s fingers on the marble table.",
        "\"Let's spend our whole lives traveling like this, {A}. Just you and me taking on the globe.\"",
      ],
      choices: [
        { label: "Head out into the evening toward the hidden Saint-Germain jazz club", to: "jazz-cellar-descent" },
      ],
    },
    "jazz-cellar-descent": {
      chapter: 2,
      scene: "city-night",
      text: [
        "Twilight envelops Paris in a cloak of deep navy and amber. In Saint-Germain-des-Prés, {A} leads {B} down a narrow flight of stone steps into a historic underground vault.",
        "The air inside is warm, smelling of wax candles, old books, and aged wine.",
        "On a tiny wooden stage, a trio—upright bass, brushed snare, and muted trumpet—is playing smooth, seductive jazz.",
        "A low candlelit booth in the corner awaits them.",
      ],
      choices: [
        { label: "Slide into the corner booth and order two coupes of champagne", to: "champagne-toast" },
      ],
    },
    "champagne-toast": {
      chapter: 3,
      scene: "castle",
      text: [
        "The champagne flutes bubble with pale golden effervescence. {A} raises his glass to {B}.",
        "\"To the woman who turned my life into poetry. Here's to Paris, here's to us, and here's to every tomorrow we will ever share.\"",
        "The crystal glasses clink with a musical chime. {B}'s eyes are radiant with unspeakable adoration.",
        "The jazz band transitions into a slow, breathless ballad.",
      ],
      choices: [
        { label: "Take her hand and dance in the shadows of the candlelit cellar", to: "ending-cellar-dance" },
        { label: "Step out onto the Pont des Arts to lock your eternal padlock", to: "ending-pont-des-arts" },
        { label: "Walk back to your Montmartre apartment beneath the moonlit streetlamps", to: "ending-montmartre-walk" },
      ],
    },
    "ending-cellar-dance": {
      chapter: 3,
      scene: "city-night",
      text: [
        "In the dim, romantic corner of the vaulted stone cellar, they sway to the muted trumpet.",
        "{B} rests her cheek on {A}'s shoulder, eyes closed, humming along with the sweet melody.",
        "In this hidden Parisian room, surrounded by history and music, they write their own chapter of timeless romance.",
      ],
      ending: {
        id: "paris-jazz-cellar",
        title: "Slow Jazz in the Saint-Germain Cellar",
        mood: "sweet",
      },
    },
    "ending-pont-des-arts": {
      chapter: 3,
      scene: "bridge",
      text: [
        "Standing over the Seine on the wooden bridge, {A} produces an engraved brass padlock bearing: *'{A} & {B} — Toujours et Pour Toujours'*. (Always and Forever).",
        "Together, they clasp the lock shut and throw the tiny key into the dark waters of the river below.",
        "The lock remains bonded forever, just like their souls.",
      ],
      ending: {
        id: "paris-pont-des-arts",
        title: "The Golden Lock Over the Seine",
        mood: "epic",
      },
    },
    "ending-montmartre-walk": {
      chapter: 3,
      scene: "stars",
      text: [
        "Arm-in-arm, they climb the quiet cobblestone stairways of Montmartre under the yellow glow of gas lamps.",
        "Paris sleeps below them like a sea of light. Reaching their apartment door, {B} turns and kisses {A} with unhurried, breathless tenderness.",
        "\"Tomorrow, let's wake up and fall in love with Paris all over again,\" she whispers.",
      ],
      ending: {
        id: "paris-montmartre-night",
        title: "Midnight Steps of Montmartre",
        mood: "sweet",
      },
    },
  },
};
