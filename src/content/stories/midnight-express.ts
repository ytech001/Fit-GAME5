import type { Story } from "./types";

export const midnightExpress: Story = {
  id: "midnight-express",
  title: "The Midnight Express Across the Alps",
  tagline: "A private luxury sleeper train through snowy mountain passes, mahogany carriages, crystal flutes, and love letters in the library car.",
  emoji: "🚂",
  category: "adventure-fantasy",
  synopsis:
    "Boarding an antique luxury sleeper train in the midnight winter fog, {A} and {B} embark on a journey through high alpine snowfields and frozen pine forests. Inside their private mahogany compartment with a crackling vintage stove and velvet berths, discovering an old secret hidden in the library car turns the journey into a spellbinding romantic odyssey.",
  estimatedMinutes: 16,
  palette: ["#1e293b", "#e2bd78"],
  chapters: [
    "I. The Brass Whistle at Platform 9",
    "II. The Private Sleeper Compartment",
    "III. The Vintage Library Car",
    "IV. Sunrise Over the Snowy Peaks",
  ],
  start: "platform-steam",
  nodes: {
    "platform-steam": {
      chapter: 0,
      scene: "train",
      text: [
        "Thick winter steam billows across the cobblestones of the high-altitude alpine station at 11:45 P.M. Snowflakes drift lazily through the amber glow of the platform lamps.",
        "Resting on the gleaming iron rails is the legendary Midnight Express—a vintage luxury train with midnight-blue carriages, polished brass trim, and frosted glass windows glowing with warm interior lamps.",
        "{A} stands in an overcoat, holding {B}'s gloved hand tight to keep her warm. {B} is bundled in a white faux-fur coat with a knitted cashmere beret, her breath misting in the crisp mountain air like spun sugar.",
        "The train's brass bell clangs three ceremonial times, and the conductor in an embroidered cap tips his hat: *'All aboard for the Alpine Transcontinental Express.'*",
      ],
      choices: [
        { label: "Step up the brass steps into the warm mahogany carriage together", to: "carriage-entry" },
      ],
    },
    "carriage-entry": {
      chapter: 0,
      scene: "train",
      text: [
        "Stepping aboard, the freezing mountain air vanishes instantly, replaced by the rich aroma of polished mahogany, roasting chestnuts, and warm spiced mulled wine.",
        "Their private suite, Compartment 7, is a masterclass in vintage luxury: walls of polished walnut, a brass vintage fireplace stove with safe glowing embers, plush velvet bench seating that converts to a double berth, and panoramic curved windows facing the snowy night.",
        "{A} hangs their coats by the brass hooks. {B} lets out a sigh of pure wonder, running her fingers over the silk-fringed curtains and the chilled bottle of champagne waiting in a silver bucket.",
        "With a deep, resonant lurch and a rhythmic *chug-clack, chug-clack*, the train begins to roll out into the darkness.",
      ],
      choices: [
        { label: "Pop the champagne and toast to the romantic journey ahead", to: "toast-in-compartment" },
        { label: "Pull {B} to the window to watch the snowy pines glide by", to: "window-gaze" },
      ],
    },
    "toast-in-compartment": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A} pops the cork with a quiet, practiced motion, pouring two crystal flutes of golden bubbles.",
        "They clink glasses as the train accelerates into the mountain gorge. Outside, towering evergreen trees laden with heavy white snow sweep past the window beneath a full winter moon.",
        "\"To escaping the noise of the world,\" {A} toasts softly, eyes locked on hers.",
        "\"To finding the world in your arms,\" {B} replies, taking a sip and stepping into his space until her velvet sweater touches his chest.",
      ],
      choices: [
        { label: "Explore the train's famous vintage library observation car", to: "library-car" },
      ],
    },
    "window-gaze": {
      chapter: 1,
      scene: "train",
      text: [
        "{A} stands behind {B} by the wide curved window, arms wrapped securely around her waist. {B} leans back against his chest, watching the moonlight illuminate jagged snow-capped peaks rising into the starlit sky.",
        "The rhythmic rocking of the train on the rails creates a hypnotic, soothing cadence. {A} kisses her shoulder through the soft knit fabric.",
        "\"It feels like we're traveling through an old fairy tale,\" {B} whispers softly.",
        "\"That's because you're the queen of it,\" {A} smiles.",
      ],
      choices: [
        { label: "Explore the train's famous vintage library observation car", to: "library-car" },
      ],
    },
    "library-car": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "They walk down the narrow wood-paneled corridor toward the rear of the train, where Car 12 houses the antique library and lounge. Here, floor-to-ceiling glass reveals the night sky and the winding tracks trailing behind them.",
        "Leather armchairs sit beside small green banker's lamps. Bookshelves are lined with vintage travelogues from the 1920s.",
        "While browsing a shelf of poetry, {B} pulls out a heavy leather-bound volume of Elizabeth Barrett Browning. As she opens the yellowed pages, a folded parchment letter slips out and falls to the carpet.",
        "{A} bends down and retrieves it. The ink is faded sepia, dated December 1934: a private love letter written between two travelers who rode this very train across the Alps ninety years ago.",
      ],
      choices: [
        { label: "Read the vintage letter together by the green reading lamp", to: "read-vintage-letter" },
      ],
    },
    "read-vintage-letter": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "Huddled together in a velvet wingback armchair, {B} reads the faded script aloud, her voice soft and reverent: *'My darling Clara, as these mountains pass in the dark, I know with certainty that time cannot diminish what we have found. Some people live lifetimes without touching this truth. I will love you beyond the mountains, beyond the snow, and beyond this mortal life.'*",
        "{B} looks up from the parchment, eyes glowing with profound emotion. \"They were sitting right where we are sitting, {A}. Looking at the same snow. Loving each other just like this.\"",
        "{A} takes her hand, lifting her knuckles to his lips. \"And ninety years from now, our love will still be echoing in the universe.\"",
      ],
      choices: [
        { label: "Return to your private sleeper suite as the blizzard begins outside", to: "sleeper-blizzard" },
      ],
    },
    "sleeper-blizzard": {
      chapter: 3,
      scene: "train",
      text: [
        "Back in Compartment 7, the steward has turned down the double berth with warm down duvets, crisp linen sheets, and extra wool blankets.",
        "Outside, a blizzard whips snow against the glass, but inside, the brass stove radiates comforting, crackling warmth. The train enters a series of high stone tunnels, the rhythmic clatter echoing with cozy security.",
        "{B} changes into silk sleepwear and curls into bed against the pillows. {A} joins her, pulling the heavy duvet over both of them.",
        "She rolls into his arms instantly, her face tucked against his collarbone, breathing in his warmth as the storm rages harmlessly outside the double-paned glass.",
      ],
      choices: [
        { label: "Whisper your deepest commitments as the train climbs the pass", to: "commitments-in-dark" },
      ],
    },
    "commitments-in-dark": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "\"I love you, {A},\" she whispers in the dark, fingers tracing the line of his jaw. \"I love how safe you make me feel, even on a mountain pass in a blizzard.\"",
        "\"You are my home, {B},\" {A} replies, holding her tight against his heart. \"No matter what storm life brings, you will always be warm in my arms.\"",
        "They share a slow, deep kiss that seals the promises of the night, before drifting off to the hypnotic lullaby of the iron wheels on the rails.",
      ],
      choices: [
        { label: "Wake up as the train breaks through the mountain pass at sunrise", to: "sunrise-peaks" },
      ],
    },
    "sunrise-peaks": {
      chapter: 3,
      scene: "sky",
      text: [
        "7:15 A.M. The train emerges from the mountain tunnel onto the highest viaduct of the journey. The blizzard has completely cleared.",
        "Outside, the world is a dazzling, blinding paradise of pure white snow. The morning sun explodes over the razor-sharp alpine peaks in brilliant bands of rose-gold, amber, and violet light.",
        "The steward taps softly on the compartment door, delivering a silver tray with warm buttery croissants, strawberry preserves, and two cups of rich, steaming dark hot chocolate.",
        "{B} sits up in the berth, wrapped in the white duvet, gazing out the panoramic window in breathless awe.",
      ],
      choices: [
        { label: "Feed each other warm croissants while watching the sunlit peaks", to: "ending-croissant-peaks" },
        { label: "Write a new love letter to leave hidden in the train for future lovers", to: "ending-hidden-letter" },
        { label: "Hold each other close at the window as the train descends into the valley", to: "ending-valley-descent" },
      ],
    },
    "ending-croissant-peaks": {
      chapter: 3,
      scene: "train",
      text: [
        "Sitting cross-legged on the warm berth, they share breakfast as the train glides through the golden morning mountains. {B} feeds {A} a warm, flaky croissant with a sweet smile, laughing as a tiny flake of pastry lands on his cheek.",
        "{A} kisses her with chocolate-sweet lips, the snowy world reflecting in their eyes.",
        "There are no meetings, no deadlines, and no worries. Just two lovers high above the world, living inside their own breathtaking story.",
      ],
      ending: {
        id: "alpine-breakfast-peaks",
        title: "Alpine Peaks & Golden Dawn",
        mood: "sweet",
      },
    },
    "ending-hidden-letter": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "{A} takes out a piece of the Midnight Express stationery and writes in bold, loving pen: *'Written in Compartment 7 by {A} for {B}. We rode this train through a blizzard and woke up in the clouds. To whoever finds this: love fiercely, forgive quickly, and never let go of the person beside you.'*",
        "{B} kisses the corner of the paper with red lipstick, and together they slip it into the secret walnut panel beside the mirror for the next lovers to find decades from now.",
      ],
      ending: {
        id: "the-compartment-7-legacy",
        title: "The Legacy of Compartment 7",
        mood: "sweet",
      },
    },
    "ending-valley-descent": {
      chapter: 3,
      scene: "sky",
      text: [
        "As the train begins its gentle descent toward the sunlit green valleys of Italy, they stand together at the window, wrapped in each other's arms.",
        "{B} turns in his embrace, resting her forehead on his chin. \"I never want this journey to end.\"",
        "\"The train ride may end today, my love,\" {A} smiles softly, kissing her lips with boundless tenderness. \"But our journey together is just getting started.\"",
      ],
      ending: {
        id: "descent-into-the-valley",
        title: "Descent Into the Sunlit Valley",
        mood: "sweet",
      },
    },
  },
};
