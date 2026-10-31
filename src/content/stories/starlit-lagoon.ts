import type { Story } from "./types";

export const starlitLagoon: Story = {
  id: "starlit-lagoon",
  title: "Whispers Across the Lagoon",
  tagline: "A silent wooden boat, glowing paper lanterns, and promises written upon the water.",
  emoji: "🛶",
  category: "sensual-romance",
  synopsis:
    "A private midnight boat drifting across glass waters under starlight. Glowing paper lanterns carrying whispered dreams, hands brushing in the cool water, and an intimate shoreline surrender where time stands still for two lovers.",
  estimatedMinutes: 16,
  palette: ["#022c22", "#34d399"],
  chapters: [
    "I. The Jetty at Midnight",
    "II. Out on Glass Waters",
    "III. Floating Wishes",
    "IV. The Shoreline Vow",
  ],
  start: "jetty-rendezvous",
  nodes: {
    "jetty-rendezvous": {
      chapter: 0,
      scene: "bridge",
      text: [
        "The private wooden jetty at Ikoyi creaks softly beneath their footsteps. Midnight has arrived, bringing with it a cool breeze that ripples across the dark waters of the lagoon.",
        "Waiting at the dock is a handcrafted wooden canoe, draped in velvet cushions, warm wool throws, and surrounded by small amber hurricane lanterns.",
        "{B} gasps softly, turning to {A} with shining eyes. \"{A}... did you organize all of this for us?\"",
        "The city skyline glitters in the distance like scattered diamonds on black velvet.",
      ],
      choices: [
        { label: "Take {B}'s hand and guide her safely aboard the boat", to: "step-aboard" },
        { label: "Hand her a warm woven shawl and whisper a sweet secret", to: "warm-shawl" },
      ],
    },
    "warm-shawl": {
      chapter: 0,
      scene: "bridge",
      text: [
        "{A} takes a soft cashmere shawl and drapes it around {B}'s shoulders, fingers lingering tenderly at the curve of her neck.",
        "\"The lagoon breeze can be chilly tonight, and I promised myself I would keep my favorite person warm all night long.\"",
        "{B} blushes in the lantern light, pressing {A}'s hand to her cheek. \"You think of every single little thing, don't you?\"",
        "Together, they step toward the gently bobbing boat.",
      ],
      choices: [
        { label: "Step onto the cushions and help {B} settle in", to: "step-aboard" },
      ],
    },
    "step-aboard": {
      chapter: 0,
      scene: "beach",
      text: [
        "{A} steps onto the boat first, offering both hands with steady reassurance. {B} steps lightly into {A}'s embrace as the boat rocks gently.",
        "They sink into the nest of cushions at the bow. {A} takes up the smooth wooden oar, unhooking the mooring rope with a quiet splash.",
        "With one effortless glide, the boat pushes away from the wooden dock and slips out into the vast, mirror-smooth waters.",
        "Behind them, the noisy hustle of the mainland fades into complete, breathtaking silence.",
      ],
      choices: [
        { label: "Paddle quietly toward the middle of the lagoon under the open sky", to: "open-waters" },
        { label: "Guide the boat toward the mangrove cove where fireflies dance", to: "firefly-cove" },
      ],
    },
    "firefly-cove": {
      chapter: 1,
      scene: "forest",
      text: [
        "The boat glides along the edge of the quiet mangrove cove where the waters are still as polished glass.",
        "Suddenly, tiny pinpricks of emerald light begin to twinkle among the hanging branches. Dozens—then hundreds—of fireflies rise into the night air.",
        "{B} leans forward, cupping her hands as a glowing firefly hovers near her fingers. Her face is illuminated by a gentle green glow.",
        "\"Look at this... it feels like we just entered a fairy tale!\" she whispers in awe.",
      ],
      choices: [
        { label: "Paddle out into the open starlit expanse to release lanterns", to: "open-waters" },
      ],
    },
    "open-waters": {
      chapter: 1,
      scene: "stars",
      text: [
        "Out in the center of the lagoon, the water is so calm that the stars are mirrored perfectly on the surface. It feels as though they are floating in the heart of the cosmos itself.",
        "{A} rests the oar inside the boat. The gentle current lulls them in place.",
        "{B} leans back against {A}'s chest, wrapping {A}'s arms around her waist as they both look up at the infinite expanse of constellations.",
        "\"In a city of twenty million people,\" {B} whispers softly, \"it feels like it's just you and me existing in the entire universe.\"",
      ],
      choices: [
        { label: "Unpack the basket of paper lanterns and writing brushes", to: "lantern-basket" },
        { label: "Share a thermos of hot cocoa and talk about your favorite memories", to: "hot-cocoa-talk" },
      ],
    },
    "hot-cocoa-talk": {
      chapter: 1,
      scene: "beach",
      text: [
        "{A} pours rich, velvety hot chocolate into two enamel mugs, topping them with tiny marshmallows that melt instantly into sweet cream.",
        "They sip the warmth, recalling the earliest days of their connection—the nervous first messages, the flutter of heartbeats, the moment they both realized this was forever.",
        "\"I knew you were the one from the very first laugh we shared,\" {B} says, her eyes glowing with honesty.",
        "{A} smiles, lifting the lantern basket to center stage.",
      ],
      choices: [
        { label: "Open the lantern basket and prepare your wishes", to: "lantern-basket" },
      ],
    },
    "lantern-basket": {
      chapter: 2,
      scene: "sky",
      text: [
        "Inside the woven wicker basket are delicate rice-paper water lanterns, each fitted with a small beeswax candle in the center.",
        "{A} hands {B} a fine-tip brush and a bottle of gold ink. \"Whatever we write on these lanterns, the lagoon will carry to heaven.\"",
        "{B} takes the brush, her fingers brushing against {A}'s with a spark of anticipation.",
        "\"What will you write on yours, {A}?\" she asks with a curious, affectionate tilt of her head.",
      ],
      choices: [
        { label: "Write a vow of eternal devotion and protection", to: "vow-lantern" },
        { label: "Write a wish for all our future adventures and travels together", to: "adventure-lantern" },
      ],
    },
    "vow-lantern": {
      chapter: 2,
      scene: "stars",
      text: [
        "In elegant strokes of gold ink, {A} writes: *'To {B}: My home, my north star, my forever love. Every beat of my heart belongs to you.'*",
        "{B} reads it over {A}'s shoulder, her breath catching. Her eyes glisten in the lantern light as she touches the still-wet ink.",
        "On her own lantern, she writes in careful, heartfelt script: *'To {A}: With you, I am fearlessly myself. You are my dream come true.'*",
        "They light the tiny beeswax candles. The golden flames cast a warm, dancing glow on their faces.",
      ],
      choices: [
        { label: "Place the lanterns together onto the still water", to: "release-lanterns" },
      ],
    },
    "adventure-lantern": {
      chapter: 2,
      scene: "city-night",
      text: [
        "{A} writes a joyful, ambitious wish: *'To our future: Sunrises across ten countries, a home full of laughter, and dancing together when we are old and gray.'*",
        "{B} laughs with delight, adding a tiny doodle of two stick figures holding hands beneath a coconut tree.",
        "On hers, she pens: *'To {A}: Every sunrise is brighter with your hand in mine. Let's conquer the world together.'*",
        "The candles are lit, filling the boat with the sweet, honeyed scent of burning beeswax.",
      ],
      choices: [
        { label: "Place the lanterns together onto the still water", to: "release-lanterns" },
      ],
    },
    "release-lanterns": {
      chapter: 2,
      scene: "bridge",
      text: [
        "Leaning side by side over the gunwale of the boat, their shoulders pressed together, {A} and {B} lower both lanterns into the dark water.",
        "The gentle wake of their fingertips sends the lanterns drifting outward. Two glowing pools of amber light glide across the surface, side by side, perfectly synchronized.",
        "The water reflects the flames like golden ribbons stretching into the darkness.",
        "{B} rests her cheek against {A}'s chest, watching them go. \"They look like they're dancing together, just like us.\"",
      ],
      choices: [
        { label: "Kiss {B} softly while the lanterns drift into the starlight", to: "water-kiss" },
        { label: "Slip a velvet jewelry box from your pocket", to: "surprise-gift" },
      ],
    },
    "water-kiss": {
      chapter: 3,
      scene: "stars",
      text: [
        "{A} turns to face {B}, cupping the curve of her jaw with one hand. The reflection of a thousand stars dances in her eyes.",
        "When {A}'s lips touch hers, the world stops spinning. The kiss is deep, tender, and unhurried—charged with all the unspoken depth of their bond.",
        "{B}'s fingers thread through {A}'s hair, holding on as if they are the only two souls on earth.",
        "As they part, their foreheads remain resting together, breath mingling in the cool night breeze.",
      ],
      choices: [
        { label: "Guide the boat toward the secluded sandbank for the final vow", to: "ending-sandbank-vow" },
        { label: "Paddle back slowly under the bridge lights with hands held tight", to: "ending-bridge-lights" },
      ],
    },
    "surprise-gift": {
      chapter: 3,
      scene: "castle",
      text: [
        "From inside his coat, {A} produces a small, elegant velvet box tied with an emerald ribbon.",
        "{B} presses her hand to her mouth in shock. \"{A}... what is this?\"",
        "{A} opens the box to reveal a delicate silver pendant shaped like a constellation with two small sapphires interlocking.",
        "\"One sapphire is you, one is me. No matter how many miles or years lie ahead, we are always locked in the same sky.\"",
        "Tears spill softly down {B}'s cheeks. She turns so {A} can fasten the cool silver chain around her neck.",
      ],
      choices: [
        { label: "Seal the gift with a promise on the quiet waters", to: "ending-forever-constellation" },
      ],
    },
    "ending-sandbank-vow": {
      chapter: 3,
      scene: "beach",
      text: [
        "The boat gently touches down on a hidden sandy bank near the edge of the lagoon.",
        "They step out onto the cool white sand. In the silence of the night, surrounded by rippling water and glowing lanterns in the distance, {A} takes both of {B}'s hands.",
        "\"I choose you today, tomorrow, and every day that follows. You are my queen, {B}.\"",
        "{B} smiles through happy tears, stepping forward into {A}'s arms. Under the open sky, their future feels unshakeable and eternal.",
      ],
      ending: {
        id: "lagoon-sandbank-vow",
        title: "The Island of Eternal Promises",
        mood: "epic",
      },
    },
    "ending-bridge-lights": {
      chapter: 3,
      scene: "city-night",
      text: [
        "Rowing back toward the jetty, the grand bridge above them blazes with golden illumination, arching across the lagoon like a majestic gateway.",
        "{B} sits between {A}'s knees, leaning back and resting her head right against {A}'s heartbeat.",
        "Every stroke of the oar carries them closer to home, but the magic of this midnight lagoon will stay locked in their hearts forever.",
        "\"Best night of my life,\" {B} whispers softly. \"And I get to love you forever.\"",
      ],
      ending: {
        id: "lagoon-bridge-glow",
        title: "Golden Reflections in the Lagoon",
        mood: "sweet",
      },
    },
    "ending-forever-constellation": {
      chapter: 3,
      scene: "stars",
      text: [
        "{B} touches the silver sapphire pendant resting against her collarbone, feeling its cool reassurance.",
        "She pulls {A} into the tightest, warmest embrace, burying her face into his neck as the boat rocks gently in the midnight breeze.",
        "The lanterns on the water have drifted into a single shimmering star, carrying their wishes all the way to heaven.",
        "\"I will wear this every single day,\" she whispers. \"And my heart will always know the way back to you.\"",
      ],
      ending: {
        id: "lagoon-sapphire-pendant",
        title: "The Starlit Sapphire Pendant",
        mood: "sweet",
      },
    },
  },
};
