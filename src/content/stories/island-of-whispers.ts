import type { Story } from "./types";

export const islandOfWhispers: Story = {
  id: "island-of-whispers",
  title: "The Enchanted Lagoon of Whispers",
  tagline: "An uncharted island, glowing bioluminescent waters, hidden caves of carved ancient poetry, and sailing under shooting stars.",
  emoji: "🏝️",
  category: "adventure-fantasy",
  synopsis:
    "Steering a wooden sailing ketch beyond the familiar shipping channels, {A} and {B} stumble upon an uncharted tropical atoll surrounded by electric-blue bioluminescent waters. Venturing into sea caves illuminated by glowing crystals and carved with ancient lover's poetry, they embark on a wondrous journey that awakens the magic in their own hearts.",
  estimatedMinutes: 20,
  palette: ["#0284c7", "#38bdf8"],
  chapters: [
    "I. The Charted Unknown",
    "II. The Bioluminescent Tide",
    "III. The Cave of Thousand Vows",
    "IV. Midnight Lagoon Surrender",
    "V. Dawn on the Silver Sands",
  ],
  start: "open-sea-helm",
  nodes: {
    "open-sea-helm": {
      chapter: 0,
      scene: "beach",
      text: [
        "The sun sits low on the horizon, casting a molten gold highway across the calm swell of the tropical sea. White sails billow gently overhead, catching the evening tradewinds as the wooden ketch cuts smoothly through the sapphire water.",
        "{A} stands at the brass helm, salt spray in their hair, one arm resting over the polished mahogany wheel. Across the teak deck, {B} sits cross-legged on a pile of cushions, studying a weathered nautical chart with a magnifying glass.",
        "\"According to the old maritime map we found at that antique shop in Praia,\" {B} looks up with bright, adventurous eyes, \"there is an island two nautical miles past the reef that isn't on any modern GPS chart. The locals call it the *Isle of Whispers*.\"",
        "{A} smiles, turning the wheel three points to starboard. \"Then that is exactly where we are sailing, Captain.\"",
      ],
      choices: [
        { label: "Navigate through the coral pass into the hidden atoll", to: "atoll-entrance" },
        { label: "Climb up to the bow to scout the approaching shoreline together", to: "atoll-entrance" },
      ],
    },
    "atoll-entrance": {
      chapter: 0,
      scene: "island",
      text: [
        "As the yacht slips through a narrow opening in the outer barrier reef, the open sea swells drop away into glass-like stillness.",
        "They enter a concealed lagoon encircled by towering limestone cliffs draped in emerald jungle vines, wild purple orchids, and whispering bamboo groves. White sand beaches curve around the water like crescent moons.",
        "Then, as twilight deepens into violet dusk, something magical happens beneath the hull.",
        "A faint turquoise glow begins to shimmer in the water where the rudder turns. Within minutes, the entire lagoon awakens with electric bioluminescence—millions of microscopic organisms glowing in shades of neon cyan, sapphire, and emerald starlight.",
      ],
      choices: [
        { label: "Drop the heavy bronze anchor into the glowing water", to: "bioluminescent-tide" },
      ],
    },
    "bioluminescent-tide": {
      chapter: 1,
      scene: "island",
      text: [
        "The anchor splashes into the lagoon, sending ripples of liquid neon light cascading across the bay like underwater fireworks.",
        "{B} leans over the teak railing, gasping in pure delight as a pair of dolphins glides past the boat, their bodies traced in swirling ribbons of electric blue light.",
        "\"Look at that! It's like swimming in liquid stars!\" {B} laughs, turning to {A} with eyes full of adventurous daring. \"We have to get in. Right now!\"",
        "Before {A} can answer, {B} kicks off their sandals, steps up onto the stern ladder, and dives headfirst into the glowing water.",
      ],
      choices: [
        { label: "Dive in after {B} and swim through the glowing waves", to: "swim-in-stars" },
        { label: "Lower the wooden dinghy with warm towels and lanterns first", to: "swim-in-stars" },
      ],
    },
    "swim-in-stars": {
      chapter: 1,
      scene: "beach",
      text: [
        "{A} plunges into the warm lagoon. The water is silky, buoyant, and with every stroke of their arms, trails of shimmering blue light illuminate their skin like glowing stardust.",
        "{B} surfaces beside them, shaking water from their hair in laughing, sparkling droplets. \"Isn't it the most incredible thing you've ever felt?\"",
        "{A} swims close, treading water until their chests touch. In the glowing turquoise luminescence, {B}'s face is radiant, ethereal, and unimaginably lovely.",
        "\"You are the most incredible thing I've ever felt,\" {A} murmurs, taking {B}'s waist and lifting them gently in the water. {B} wraps their arms around {A}'s neck, floating effortlessly together in the warm sea.",
      ],
      choices: [
        { label: "Spot an illuminated sea cave entrance glowing in the cliff face", to: "sea-cave-discovery" },
      ],
    },
    "sea-cave-discovery": {
      chapter: 2,
      scene: "forest",
      text: [
        "Further along the limestone cliff, a natural archway opens into a sheltered sea cavern. Unlike the darkness of normal caves, this cavern glows with thousands of luminous crystals embedded in the vaulted ceiling, reflecting like constellations upon the calm interior pool.",
        "They swim their way onto a smooth, dry interior beach of pink sand inside the cave.",
        "As their eyes adjust to the soft crystal light, {B} notices markings on the smooth limestone walls: ancient inscriptions carved deep into the rock.",
        "{A} traces the carvings with gentle fingers. \"It's ancient poetry... left by sailors and lovers who found this sanctuary centuries ago.\"",
      ],
      choices: [
        { label: "Read the translated inscriptions aloud to {B}", to: "read-inscriptions" },
        { label: "Carve your own initials and permanent vow into the crystal wall", to: "carve-initials" },
      ],
    },
    "read-inscriptions": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} reads the carved words aloud, voice echoing softly against the limestone vault: *'He who crosses the ocean seeks glory; he who finds his beloved finds the world. We entered this cave as two; we leave as one.'*",
        "{B} stands close, listening with shining eyes, their head resting against {A}'s shoulder as the crystal light casts patterns of violet and turquoise across their damp skin.",
        "\"They felt the exact same thing we feel,\" {B} whispers softly. \"Centuries apart, but the same love.\"",
      ],
      choices: [
        { label: "Carve your own sacred initials into the stone beside the poem", to: "carve-initials" },
      ],
    },
    "carve-initials": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "Using a smooth, sharp piece of quartz, {A} carefully carves their initials linked by an infinity sign: *{A} & {B} — Together in Every Realm.*",
        "{B} reaches out, pressing their palm over the fresh carving, sealing the mark with a tender breath.",
        "\"Now this island belongs to us,\" {B} smiles, turning to look up at {A}. \"Centuries from now, other lovers will find this cave and know that two people loved each other without limits right here.\"",
      ],
      choices: [
        { label: "Return to the yacht's deck for a midnight stargazing feast", to: "midnight-deck-feast" },
      ],
    },
    "midnight-deck-feast": {
      chapter: 3,
      scene: "balcony",
      text: [
        "Back aboard the yacht, wrapped in dry cashmere robes, they lay out a feast on the teak forward deck: fresh sliced tropical mango, artisan cheeses, warm toasted flatbreads, and chilled sweet coconut water.",
        "Above them, miles away from any artificial city lights, the Milky Way arches across the sky in an explosion of powdered diamonds, nebulae, and shooting stars.",
        "The yacht sways in a gentle, hypnotic rocking motion on the glowing lagoon.",
        "{B} reclines against {A}'s chest on a nest of pillows, pointing toward a brilliant shooting star that streaks across the constellation of Orion.",
      ],
      choices: [
        { label: "Ask what wish {B} made on the shooting star", to: "wish-dialogue" },
      ],
    },
    "wish-dialogue": {
      chapter: 3,
      scene: "stars",
      text: [
        "\"What did you wish for, my love?\" {A} asks, stroking {B}'s hair.",
        "{B} turns in their arms, smiling with quiet, complete peace. \"I didn't make a wish. For the first time in my entire life, I don't have anything left to wish for. I have you. Everything else is just bonus.\"",
        "{A}'s chest swells with an emotion so deep it borders on reverence. Leaning down, {A} kisses {B}'s forehead, then their eyelids, and finally their lips in a slow, breathtaking rhythm that matches the gentle ocean swell.",
      ],
      choices: [
        { label: "Carry the romance through the night as dawn approaches", to: "dawn-arrival-island" },
      ],
    },
    "dawn-arrival-island": {
      chapter: 4,
      scene: "island",
      text: [
        "5:45 A.M. The bioluminescence slowly yields to the magnificent arrival of dawn. The sky blooms in delicate pastel ribbons of peach, coral, and pale turquoise.",
        "The lagoon transforms from a glowing nighttime wonder into a crystal-clear natural aquarium, where colorful tropical fish dart over white sand shallows.",
        "They stand together at the bow of the yacht, warm mugs of coffee in hand, looking out at the virgin beach waiting for their footprints.",
      ],
      choices: [
        { label: "Take the dinghy ashore to explore the virgin white sand beach together", to: "ending-beach-footprints" },
        { label: "Hoist the mainsail and continue sailing toward new uncharted horizons", to: "ending-endless-voyage" },
        { label: "Declare this island your secret annual sanctuary forever", to: "ending-annual-sanctuary" },
      ],
    },
    "ending-beach-footprints": {
      chapter: 4,
      scene: "beach",
      text: [
        "They wade ashore through warm, knee-deep turquoise shallows onto the untouched white sand beach. With intertwined fingers, they walk the perimeter of the island, leaving the very first footprints of the new day.",
        "{A} sweeps {B} into their arms, spinning them on the sand as sea birds call out from the palms.",
        "\"Best adventure of my life,\" {B} laughs against their lips.",
        "\"The first of a million more, my queen,\" {A} replies, holding them tight under the golden morning sun.",
      ],
      ending: {
        id: "first-footprints-paradise",
        title: "First Footprints in Paradise",
        mood: "sweet",
      },
    },
    "ending-endless-voyage": {
      chapter: 4,
      scene: "island",
      text: [
        "With the morning breeze filling the white sails, they haul up the anchor and glide back through the coral pass into the vast, glittering ocean.",
        "Standing at the helm side by side, hands sharing the wheel, they look out toward the open horizon.",
        "With {B} as the navigator and {A} at the helm, there is no sea too wide and no storm too fierce. Their love is an endless, unconquerable voyage.",
      ],
      ending: {
        id: "the-endless-voyage",
        title: "The Endless Voyage",
        mood: "epic",
      },
    },
    "ending-annual-sanctuary": {
      chapter: 4,
      scene: "stars",
      text: [
        "Before departing, they record the exact GPS coordinates in their private leather journal, marking it with a drawn heart: *'Our Secret Sanctuary'*. They promise to return to this lagoon every single year to renew their vows under the glowing tide.",
        "{B} presses a warm kiss to {A}'s cheek. \"No matter where life takes us, we always have our island.\"",
        "\"And we always have each other,\" {A} whispers back, holding {B} close as the morning breeze carries them forward.",
      ],
      ending: {
        id: "our-secret-sanctuary",
        title: "Our Secret Sanctuary",
        mood: "sweet",
      },
    },
  },
};
