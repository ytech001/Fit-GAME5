import type { Story } from "./types";

export const marketHeist: Story = {
  id: "market-heist",
  title: "The Great Balogun Fabric Adventure",
  tagline: "Haggling with market aunties, hunting for matching couple Ankara, and laughing until your stomach aches.",
  emoji: "🛍️",
  category: "our-love",
  synopsis:
    "Armed with mission focus, designer sunglasses, and unmatched couple banter, {A} and {B} dive into the labyrinth of Balogun Market to find the holy grail of matching royal Ankara fabric. Negotiating with seasoned market aunties and feasting on golden puff-puff, they turn shopping into an epic love story.",
  estimatedMinutes: 14,
  palette: ["#ea580c", "#fbbf24"],
  chapters: [
    "I. Into the Heart of Balogun",
    "II. The Ankara Negotiations",
    "III. Puff-Puff & Street Smarts",
    "IV. The Royal Tailor's Debut",
  ],
  start: "market-entrance",
  nodes: {
    "market-entrance": {
      chapter: 0,
      scene: "market",
      text: [
        "The noise of Balogun Market hits them like a joyful tidal wave: the rhythmic calls of *'Fine girl, come look my shop!'*, horns blaring from yellow Danfo buses, and the colorful kaleidoscope of umbrellas stretching into the distance.",
        "{B} has her designer sunglasses perched on her nose, holding a screenshot on her phone with absolute mission focus.",
        "\"Okay {A}, here is the assignment,\" {B} says with faux seriousness. \"We need matching royal blue and emerald silk-blend Ankara for our couple outfit. No compromises!\"",
        "{A} adjusts his sneakers with a grin. \"I am your chief bodyguard and lead negotiator today, babe. Lead the way!\"",
      ],
      choices: [
        { label: "Dive straight into the narrow textile alley of Martins Street", to: "martins-textiles" },
        { label: "Stop first by the famous roasted plantain & groundnut stand", to: "boli-stand" },
      ],
    },
    "boli-stand": {
      chapter: 0,
      scene: "market",
      text: [
        "Before entering the fabric warzone, {A} buys two hot, charred roasted plantains (boli) wrapped in newspaper, served with crispy salted groundnuts.",
        "{B} takes a bite, eyes closing in pure bliss. \"Mmm! Okay, my energy is restored. Now I can face any market aunty in West Africa!\"",
        "{A} wipes a stray speck of peanut dust from her cheek, chuckling. \"That's my fierce queen.\"",
        "Armed with fuel, they march into the maze of textile stalls.",
      ],
      choices: [
        { label: "Enter the textile corridor", to: "martins-textiles" },
      ],
    },
    "martins-textiles": {
      chapter: 0,
      scene: "market",
      text: [
        "Bolts of wax fabric are stacked ten feet high—dazzling patterns of peacock feathers, geometric gold filigree, and royal damask.",
        "A fierce, charismatic market woman with a towering headwrap spots them instantly. \"Ah! Brother, see your fine wife o! Madam, come and see Hollandis original!\"",
        "{B} points to a bolt of shimmering emerald and royal sapphire fabric patterned with interlocking crown motifs.",
        "\"Aunty, this is exactly what I've been dreaming of!\" {B} whispers excitedly to {A}.",
      ],
      choices: [
        { label: "Let {B} deploy her charm and negotiation mastery", to: "madam-negotiate" },
        { label: "Play good-cop bad-cop with {A} pretending they might walk away", to: "good-cop-routine" },
      ],
    },
    "madam-negotiate": {
      chapter: 1,
      scene: "market",
      text: [
        "{B} leans in with a dazzling smile. \"Aunty, my sweet mummy, how much for six yards of this crown fabric?\"",
        "The seller names an astronomical tourist price. {B} clutches her chest theatrically as if she has been wounded in battle. \"Aunty, do you want my handsome husband to go broke before our wedding anniversary?\"",
        "The seller bursts out laughing, clapping her hands. \"Ah, you this sweet girl! You know how to talk!\"",
        "Within three minutes, {B} has negotiated the price down to half, plus two yards of complimentary silk lining.",
      ],
      choices: [
        { label: "Pay the bill with proud admiration and claim the treasure", to: "celebrate-fabric" },
      ],
    },
    "good-cop-routine": {
      chapter: 1,
      scene: "market",
      text: [
        "{A} taps his watch. \"Babe, it's nice, but maybe we should check the other shop around the corner...\"",
        "The seller immediately grabs {A}'s arm with maternal urgency. \"My son, wait! Don't carry your wife go anywhere! In this market, only my shop has this original grade from Holland!\"",
        "{B} bites her lip, trying desperately not to laugh at {A}'s stone-cold poker face.",
        "The aunty slashes the price and throws in a packet of golden embroidery threads.",
      ],
      choices: [
        { label: "Shake hands and finalize the deal", to: "celebrate-fabric" },
      ],
    },
    "celebrate-fabric": {
      chapter: 1,
      scene: "market",
      text: [
        "With six yards of glorious, shimmering Ankara tucked safely under {A}'s arm in a crisp bag, they high-five triumphantly in the alley.",
        "\"Look at us! Elite market operators!\" {B} laughs, linking her arm tightly around {A}'s.",
        "The midday sun is blazing now, and the irresistible smell of sizzling street food wafts from an open-air courtyard.",
        "\"Now for the most important ritual of Balogun,\" {A} announces: \"hot snacks!\"",
      ],
      choices: [
        { label: "Follow the aroma of fresh golden puff-puff fried in giant woks", to: "puff-puff-feast" },
        { label: "Head to the legendary Suya master smoking spicy beef skewers", to: "suya-skewer" },
      ],
    },
    "puff-puff-feast": {
      chapter: 2,
      scene: "kitchen",
      text: [
        "A street vendor drops scoops of sweet dough into boiling golden oil. They puff up into airy, crispy spheres dusted with cinnamon sugar.",
        "{A} buys a brown paper bag overflowing with piping hot puff-puff.",
        "They duck into a quiet, shaded archway away from the crowd. {A} blows gently on one and feeds it to {B}.",
        "{B} chews, eyes dancing. \"Oh my goodness... this is so good it should be illegal.\"",
        "She feeds {A} the next one, sugar dusting their fingertips.",
      ],
      choices: [
        { label: "Head to the tailor's studio to measure the designs", to: "tailor-studio" },
      ],
    },
    "suya-skewer": {
      chapter: 2,
      scene: "kitchen",
      text: [
        "The master grillman sprinkles spicy yaji pepper and sliced sweet red onions over thinly sliced char-grilled beef.",
        "{A} and {B} share skewers, laughing as {B} fans her tongue at the heat of the pepper.",
        "{A} immediately hands her a cold bottle of freshly pressed sugarcane juice.",
        "\"You are the only person who can make hot market dust feel like a luxury holiday,\" {B} beams, wiping her hands.",
      ],
      choices: [
        { label: "Head to the tailor's studio to measure the designs", to: "tailor-studio" },
      ],
    },
    "tailor-studio": {
      chapter: 2,
      scene: "home",
      text: [
        "They arrive at their friend's boutique studio just off the marina. Soft afro-jazz plays as the designer rolls out their new fabric across the cutting table.",
        "{B} stands on the measuring podium. As the measuring tape wraps around her waist, {A} watches with completely unmasked reverence.",
        "\"What style are we making, my brother?\" the tailor asks {A}.",
        "\"A fitted mermaid gown for the Queen,\" {A} says without blinking, \"and a matching tailored agbada with gold embroidery for me.\"",
        "{B}'s reflection in the three-way mirror glows with pride.",
      ],
      choices: [
        { label: "Step onto the podium together to test the matching silhouettes", to: "podium-test" },
      ],
    },
    "podium-test": {
      chapter: 3,
      scene: "castle",
      text: [
        "{A} steps onto the wooden podium beside {B}. The tailor drapes the emerald and sapphire fabric across both of their shoulders.",
        "In the mirror, they look breathtaking—a magnificent modern power couple radiating unity, elegance, and deep affection.",
        "{B} looks at their reflection, resting her head gently on {A}'s shoulder.",
        "\"Look at us, {A}. We really look like royalty together.\"",
        "\"That's because you are my queen, everywhere we go.\"",
      ],
      choices: [
        { label: "Seal the outfit with a sunset rooftop toast by the marina", to: "ending-rooftop-toast" },
        { label: "Take a funny Polaroid photo together on the tailor's sofa", to: "ending-polaroid-wall" },
        { label: "Walk hand-in-hand along the waterfront with the fabric bag", to: "ending-waterfront-walk" },
      ],
    },
    "ending-rooftop-toast": {
      chapter: 3,
      scene: "city-night",
      text: [
        "On the rooftop terrace above the tailor's studio, the sun is setting over the Lagos marina in vibrant orange and magenta streaks.",
        "Clinking cold glasses of passionfruit mocktails, {B} laughs about their bargaining escapades.",
        "\"When we wear these matching outfits,\" {B} smiles, \"every single person at the event is going to ask where our kingdom is.\"",
        "\"And I will tell them my kingdom is wherever you are,\" {A} replies with a warm kiss.",
      ],
      ending: {
        id: "market-rooftop-toast",
        title: "The Sunset Marina Toast",
        mood: "sweet",
      },
    },
    "ending-polaroid-wall": {
      chapter: 3,
      scene: "home",
      text: [
        "They grab the tailor's vintage Polaroid camera and snap three photos: one serious, one laughing hysterically, and one sharing a sweet kiss wrapped in the uncut fabric.",
        "The photos develop into timeless souvenirs.",
        "{B} tucks the kissing photo into her phone case. \"This was the best market day in the history of the world.\"",
      ],
      ending: {
        id: "market-polaroid-memory",
        title: "The Polaroid on the Wall",
        mood: "funny",
      },
    },
    "ending-waterfront-walk": {
      chapter: 3,
      scene: "beach",
      text: [
        "Leaving the studio, they stroll along the waterfront promenade as the evening breeze cools the city.",
        "{A} carries both bags in one hand, keeping the other hand locked tight in {B}'s fingers.",
        "The laughter, the shared bites of food, and the thrill of their adventure linger in the air—proof that true love makes even the simplest moments pure gold.",
      ],
      ending: {
        id: "market-waterfront-stroll",
        title: "The Evening Promenade",
        mood: "sweet",
      },
    },
  },
};
