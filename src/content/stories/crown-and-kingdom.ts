import type { Story } from "./types";

export const crownAndKingdom: Story = {
  id: "crown-and-kingdom",
  title: "The King & Queen of the Seven Islands",
  tagline: "An emerald dragon soaring above sunset clouds, starlight crowns, and an empire ruled by love.",
  emoji: "👑",
  category: "adventure-fantasy",
  synopsis:
    "Above sunset clouds and emerald ocean islands, {A} and {B} rule an enchanted sky kingdom. Upon dragon wings and amidst crystalline throne rooms, they discover that their greatest sovereignty is not land or jewels, but the unwavering devotion they offer one another.",
  estimatedMinutes: 14,
  palette: ["#854d0e", "#facc15"],
  chapters: [
    "I. The Floating Citadel",
    "II. Flight Upon Dragon Wings",
    "III. The Crystal Throne Room",
    "IV. Coronation of the Sky",
  ],
  start: "citadel-balcony",
  nodes: {
    "citadel-balcony": {
      chapter: 0,
      scene: "castle",
      text: [
        "High above the earthly realm, suspended among oceans of golden clouds, stands the Citadel of the Seven Islands.",
        "Spires of polished white marble and emerald crystal catch the perpetual dawn. Banners of gold and royal violet billow in the celestial wind.",
        "{B} steps onto the balcony in a gown woven from moonlit silk and gold thread, looking out at floating islands drifting like green gems across the sky.",
        "{A} stands beside her, wearing a cloak pinned with the royal crest. \"Welcome home, my Queen. All of this belongs to us.\"",
      ],
      choices: [
        { label: "Summon the great emerald dragon from the sky clouds", to: "summon-dragon" },
        { label: "Walk the grand colonnade to inspect the royal gardens", to: "sky-gardens" },
      ],
    },
    "sky-gardens": {
      chapter: 0,
      scene: "forest",
      text: [
        "In the sky gardens, trees blossom with petals that shimmer like diamonds. Floating waterfalls spill crystal water into pools that vanish into the clouds below.",
        "{A} picks a celestial blossom that blooms once every century, placing it gently behind {B}'s ear.",
        "\"The kingdom called this the Flower of Eternity,\" {A} whispers. \"It only blooms in the presence of true sovereignty and true love.\"",
        "{B} smiles, leaning against {A}'s chest. A low, musical rumble echoes through the clouds above.",
      ],
      choices: [
        { label: "Look up as the emerald dragon descends from the heavens", to: "summon-dragon" },
      ],
    },
    "summon-dragon": {
      chapter: 0,
      scene: "dragon",
      text: [
        "With a majestic sweep of wings that stir the golden clouds, a dragon scales gleaming like polished jade descends and lands gently before them.",
        "Its eyes glow with ancient wisdom and absolute loyalty. It bows its crowned head to {B}, recognizing its rightful sovereign.",
        "{B} extends a fearless, gentle hand, stroking the warm scales of its snout. \"He's magnificent!\"",
        "\"His name is Zephyr,\" {A} says, offering a hand to help {B} mount the jeweled leather saddle. \"And he wants to take us across the realm.\"",
      ],
      choices: [
        { label: "Mount the dragon and leap into the endless sky", to: "dragon-flight" },
      ],
    },
    "dragon-flight": {
      chapter: 1,
      scene: "sky",
      text: [
        "With a single powerful beat of wings, Zephyr launches into the azure heavens. The wind rushes through their hair as they soar through banks of pearlescent mist.",
        "{B} sits in front of {A}, laughing with exhilarating joy as they bank gracefully over floating sapphire waterfalls and ancient sky-forests.",
        "{A} holds her waist securely, his chest pressed to her back, whispering: \"You have no fear in you, do you, my love?\"",
        "\"Not when you are holding me!\" she calls out over the wind.",
      ],
      choices: [
        { label: "Dive through the rainbow veil beneath the Sun Island", to: "rainbow-veil" },
        { label: "Ascend toward the Starry Zenith where starlight can be touched", to: "starry-zenith" },
      ],
    },
    "rainbow-veil": {
      chapter: 1,
      scene: "bridge",
      text: [
        "Zephyr dives smoothly beneath a floating archipelago, passing through a veil of perpetual mist that diffracts sunlight into a dazzling double rainbow.",
        "Droplets of liquid light sparkle on their skin like powdered gold.",
        "{B} reaches out with one hand, trailing her fingers through the rainbow stream, her eyes wide with childlike wonder.",
        "\"I wish we could fly forever,\" she sighs happily.",
      ],
      choices: [
        { label: "Bank toward the ancestral Crystal Throne Room", to: "throne-entrance" },
      ],
    },
    "starry-zenith": {
      chapter: 1,
      scene: "stars",
      text: [
        "Zephyr climbs higher until the sky turns deep twilight indigo, and stars become close enough to touch like floating fireflies.",
        "{A} catches a wandering wisp of cosmic starlight and places it into {B}'s open palm. It hums with warmth, pulsing in time with her heartbeat.",
        "\"Even among all these celestial wonders,\" {A} murmurs in her ear, \"none shines half as brightly as you.\"",
        "{B} turns her face to kiss {A}'s cheek, her heart overflowing.",
      ],
      choices: [
        { label: "Guide the dragon down toward the grand citadel palace", to: "throne-entrance" },
      ],
    },
    "throne-entrance": {
      chapter: 2,
      scene: "castle",
      text: [
        "Zephyr touches down upon the grand marble plaza of the palace. Royal guards in polished silver armor strike their spears against shields in thunderous salute.",
        "\"Long live the King! Long live the Queen!\" their voices boom across the open plaza.",
        "They walk hand-in-hand up the grand flight of stairs into the Crystal Throne Room, where two thrones carved from pure starlight await.",
        "Above the dais floats the Ancient Anvil, where the sacred crowns of the realm are waiting to be bonded.",
      ],
      choices: [
        { label: "Approach the twin thrones together", to: "twin-thrones" },
        { label: "Forge your crowns from the starlight wisp", to: "forge-crowns" },
      ],
    },
    "twin-thrones": {
      chapter: 2,
      scene: "castle",
      text: [
        "The twin thrones sit side-by-side on an equal level, symbolizing that in this kingdom, neither rules alone.",
        "{A} leads {B} to her seat, bowing low with princely grace before taking his place right beside her.",
        "Their fingers interlock across the armrests, their royal rings chiming together.",
        "\"Every decree we write will be for love, kindness, and eternal peace,\" {B} declares with queenly grace.",
      ],
      choices: [
        { label: "Begin the coronation ritual", to: "coronation-ritual" },
      ],
    },
    "forge-crowns": {
      chapter: 2,
      scene: "stars",
      text: [
        "{A} places the cosmic starlight wisp upon the celestial altar. It blazes with brilliance, shaping itself into two twin tiaras of pure celestial gold and diamond fire.",
        "They radiate warmth and an ancient aura of protection.",
        "{B} gasps at the beauty of the craftsmanship. \"It's the most magnificent thing I've ever seen.\"",
        "\"Only fitting for the one who commands my soul,\" {A} answers gently.",
      ],
      choices: [
        { label: "Step up to the dais for the coronation", to: "coronation-ritual" },
      ],
    },
    "coronation-ritual": {
      chapter: 3,
      scene: "castle",
      text: [
        "The high priest steps back as {A} lifts the Queen's crown with steady, reverent hands.",
        "{B} kneels lightly on a velvet cushion. {A} crowns her with the words: *'With this crown, I name you Queen of my heart, Sovereign of my soul, and ruler of every tomorrow.'*",
        "Then {B} rises, takes the King's crown, and sets it upon {A}'s head: *'With this crown, I name you my protector, my equal, and my eternal love.'*",
        "The entire great hall erupts into celebratory cheers and soaring fanfares.",
      ],
      choices: [
        { label: "Lead the royal waltz across the grand hall", to: "ending-royal-waltz" },
        { label: "Take flight on the dragon into the twilight fireworks", to: "ending-dragon-fireworks" },
        { label: "Retire to the sky terrace for a private celestial feast", to: "ending-sky-terrace" },
      ],
    },
    "ending-royal-waltz": {
      chapter: 3,
      scene: "castle",
      text: [
        "In the center of the grand ballroom, surrounded by nobles and cheering subjects, King {A} and Queen {B} dance.",
        "Every spin is effortless; every glance is filled with pure adoration. The hall spins around them in a blur of gold, but they only have eyes for each other.",
        "An empire united not by force or politics, but by a love so strong it holds the sky itself in balance.",
      ],
      ending: {
        id: "crown-royal-waltz",
        title: "The Royal Waltz of Eternity",
        mood: "epic",
      },
    },
    "ending-dragon-fireworks": {
      chapter: 3,
      scene: "sky",
      text: [
        "Mounted upon Zephyr once more, the newly crowned King and Queen soar into the night sky as hundreds of magical fireworks burst around them in cascades of ruby and gold.",
        "From high above, their floating kingdom shines like a constellation of joy.",
        "{B} leans back against {A}, laughing as the wind carries their crowns' starlight trails through the heavens.",
      ],
      ending: {
        id: "crown-dragon-fireworks",
        title: "Fireworks Over the Seven Islands",
        mood: "epic",
      },
    },
    "ending-sky-terrace": {
      chapter: 3,
      scene: "stars",
      text: [
        "Away from the pomp and the crowd, they step out onto the quiet, private sky terrace.",
        "A banquet of honeyed celestial fruits and sweet nectar awaits them. They take off their heavy crowns, setting them side by side on a marble table.",
        "\"King and Queen to the world,\" {B} whispers, wrapping her arms around {A}'s neck. \"But to me, you're just my {A}.\"",
        "\"And that is the only title I will ever need,\" {A} smiles, holding her beneath the stars.",
      ],
      ending: {
        id: "crown-private-terrace",
        title: "The Crowns Set Aside",
        mood: "sweet",
      },
    },
  },
};
