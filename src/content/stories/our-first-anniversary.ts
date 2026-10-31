import type { Story } from "./types";

export const ourFirstAnniversary: Story = {
  id: "our-first-anniversary",
  title: "One Year of Choosing You",
  tagline: "Twelve months, 365 mornings, hidden anniversary scavenger notes, and a private rooftop vow renewal.",
  emoji: "🥂",
  category: "our-love",
  synopsis:
    "It has been exactly 365 days since {A} and {B} declared their love. To celebrate their first anniversary, {A} sets up a scavenger hunt through the memories of their year—from the cafe where they first laughed to the private terrace where their future was sealed. A tender, joyful reflection on growing together and falling deeper in love every day.",
  estimatedMinutes: 16,
  palette: ["#831843", "#f43f5e"],
  chapters: [
    "I. The 365th Morning",
    "II. The Scavenger Hunt of Milestones",
    "III. The Sunset Terrace at Ilashe",
    "IV. Vows Renewed for the Next Hundred Years",
  ],
  start: "anniversary-morning",
  nodes: {
    "anniversary-morning": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "7:00 A.M. Exactly 365 days ago today, two lives took a leap of faith and stepped into an adventure that changed both forever.",
        "{A} has been awake since six. In the kitchen, a tray is laid out with fresh strawberries, warm pain au chocolat, freshly squeezed orange juice, and a single stem of white orchid in a crystal vase.",
        "Beside the plate sits an embossed card: *'Happy Anniversary, my soulmate. Your journey today begins where you are standing. Clue #1 is taped beneath your coffee mug.'*",
        "{B} emerges from the bedroom in an oversized silk dressing gown, hair tumbling softly over her shoulders, blinking against the morning light. When her eyes land on the kitchen island, a radiant smile lights up her entire face.",
      ],
      choices: [
        { label: "Step forward, take her face in your hands, and wish her Happy Anniversary with a kiss", to: "morning-kiss" },
        { label: "Hand her the coffee mug and tell her to check the first secret clue", to: "first-clue" },
      ],
    },
    "morning-kiss": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "{A} steps forward, wrapping both arms around her waist. {B} leans into the embrace with a joyful laugh, resting her hands against his chest.",
        "\"Happy 365 days of being the best thing that ever happened to me, {B},\" {A} whispers, pressing a slow, tender kiss to her smiling lips.",
        "\"Happy anniversary, my love,\" she breathes against his cheek. \"One whole year, and I still get butterflies every time you walk into the room.\"",
      ],
      choices: [
        { label: "Reveal the first secret clue of the anniversary adventure", to: "first-clue" },
      ],
    },
    "first-clue": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "{B} lifts the ceramic mug. Taped underneath is a small card written in {A}'s familiar script:",
        "*'Clue #1: Put on that sundress I love so much. At 11 A.M., a private driver will take you to the cafe where we spent three hours arguing about music on our second date. Ask the barista for the Special Anniversary Blend.'*",
        "{B} laughs in delight, clutching the card to her chest. \"You planned a scavenger hunt! You absolute romantic mastermind!\"",
      ],
      choices: [
        { label: "Send her off on the morning trail of nostalgic memories", to: "nostalgic-trail" },
      ],
    },
    "nostalgic-trail": {
      chapter: 1,
      scene: "city-night",
      text: [
        "At the boutique coffee shop, the barista greets {B} with a warm smile and hands her a special gift box containing two jars of artisan honey and Clue #2.",
        "The second clue leads her to the contemporary art gallery where they once hid from the rain; there, the curator hands her an envelope containing framed photographs of their travels and Clue #3.",
        "Each stop retraces a milestone of their year: the funny moments, the late-night talks, the triumphs, and the quiet Sundays that built their fortress of love.",
        "By 4 P.M., the final clue directs her to a private water taxi jetty on the marina: *'Come across the lagoon to where forever waits.'*",
      ],
      choices: [
        { label: "Arrive at the private beachfront terrace at Ilashe", to: "ilashe-terrace" },
      ],
    },
    "ilashe-terrace": {
      chapter: 2,
      scene: "island",
      text: [
        "The water taxi brings {B} to an exclusive private beach villa on the island of Ilashe. The sun is sinking into the Atlantic in a blaze of coral pink, gold, and lavender.",
        "A wooden boardwalk lined with burning tiki torches leads out onto a private dining deck perched right over the gentle waves.",
        "{A} stands waiting on the terrace in a crisp white linen shirt and tailored trousers, holding a bouquet of thirty-six blush roses—one for each ten days of their year together.",
        "As {B} steps onto the deck, the ocean breeze catches her dress. She looks at {A} through shimmering tears of happiness.",
      ],
      choices: [
        { label: "Present the bouquet and pull her into a slow, breathless embrace", to: "terrace-reunion" },
      ],
    },
    "terrace-reunion": {
      chapter: 2,
      scene: "beach",
      text: [
        "{A} hands her the roses, wrapping his other arm around her waist. She buries her face in the fragrant blooms, then looks up into his eyes.",
        "\"Every single stop brought back so many memories,\" {B} whispers, her voice thick with emotion. \"I can't believe how much we've built in just twelve months.\"",
        "\"Twelve months of laughter, twelve months of growing, and twelve months of loving you more with every single heartbeat,\" {A} replies, kissing her forehead.",
        "They sit down at a private candlelit table set right over the sand, with the sound of the ocean serenading their celebration.",
      ],
      choices: [
        { label: "Enjoy a five-course seafood dinner as twilight settles over the sea", to: "dinner-celebration" },
      ],
    },
    "dinner-celebration": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "Dinner is a feast of grilled lobster tail, spicy peppered prawns, truffle fries, and vintage champagne.",
        "They reminisce about the year: the inside jokes only they understand, the road trips where the GPS got lost, the rainy evenings spent building blanket forts, and the difficult days that only deepened their commitment.",
        "With every toast, their bond feels stronger, richer, and more deeply rooted.",
        "As dessert is served—a miniature replica of their favorite chocolate raspberry gateau—{A} stands and offers his hand for a dance under the emerging stars.",
      ],
      choices: [
        { label: "Step out onto the moonlit sand for the anniversary slow dance", to: "moonlit-dance" },
      ],
    },
    "moonlit-dance": {
      chapter: 3,
      scene: "stars",
      text: [
        "Barefoot on the warm, dry sand, they sway together under the vast canopy of stars. A portable speaker plays their couple anthem, the melody drifting softly into the ocean breeze.",
        "{B} rests her cheek against {A}'s chest, their bodies moving in that effortless, natural harmony that only comes from knowing someone's soul inside out.",
        "{A} reaches into his pocket and presents a small velvet box containing an anniversary gift: a delicate platinum pendant engraved with the exact coordinates of where they had their first date.",
        "\"So you always carry the place where our world began,\" {A} whispers softly.",
      ],
      choices: [
        { label: "Renew your vows to choose each other for the next 100 years", to: "ending-hundred-years" },
        { label: "Make a midnight anniversary wish into the crashing ocean waves", to: "ending-ocean-wish" },
        { label: "Carry each other inside the villa to celebrate until sunrise", to: "ending-villa-sunrise" },
      ],
    },
    "ending-hundred-years": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "Holding hands by the candlelit deck railing, they look into each other's eyes and renew their sacred vows:",
        "\"Year one was our foundation,\" {A} says with unwavering certainty. \"I promise you year two, year ten, year fifty, and year a hundred. I will choose you through every season of life.\"",
        "\"And I will choose you back with all my heart,\" {B} weeps happily, pulling {A} down into a deep, passionate kiss that seals their second year of love.",
      ],
      ending: {
        id: "one-hundred-more-years",
        title: "A Hundred More Years of Choosing You",
        mood: "sweet",
      },
    },
    "ending-ocean-wish": {
      chapter: 3,
      scene: "beach",
      text: [
        "Standing at the water's edge with seafoam lapping around their ankles, they toss a pair of white rose petals into the outgoing tide, making a shared wish for their future together.",
        "\"To peace, health, wild adventures, and never letting go of each other's hands,\" {B} smiles, kissing {A}'s jaw.",
        "\"To our forever,\" {A} answers, sweeping her into his arms as the waves wash their footprints clean.",
      ],
      ending: {
        id: "anniversary-ocean-wish",
        title: "The Ocean Anniversary Wish",
        mood: "sweet",
      },
    },
    "ending-villa-sunrise": {
      chapter: 3,
      scene: "home",
      text: [
        "Inside the luxurious beach villa, with French doors thrown open to the sound of the ocean, their celebration continues in private, breathless intimacy.",
        "In the quiet hours before dawn, tangled in soft linen sheets, {B} smiles with absolute contentment against {A}'s chest.",
        "\"Best anniversary of my life,\" she murmurs, drifting off to sleep.",
        "\"Best life of my life,\" {A} whispers back, holding her until the sun rises on Year Two.",
      ],
      ending: {
        id: "year-two-dawn",
        title: "Sunrise on Year Two",
        mood: "sweet",
      },
    },
  },
};
