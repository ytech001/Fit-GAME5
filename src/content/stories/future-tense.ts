import type { Story } from "./types";

export const futureTense: Story = {
  id: "future-tense",
  title: "Twenty Years From Now",
  tagline: "A white veranda by the sea, rocking chairs, silver threads in our hair, and a love that outlasted time.",
  emoji: "🌅",
  category: "just-you-and-me",
  synopsis:
    "Gazing decades into the future, {A} and {B} wake on a breezy white veranda overlooking the Atlantic ocean. Through albums of old travel receipts and weathered hands intertwined, they retrace every season of building a life, growing old together, and falling in love anew every dawn.",
  estimatedMinutes: 14,
  palette: ["#0f172a", "#f59e0b"],
  chapters: [
    "I. The Ocean Veranda",
    "II. The Hall of Trophies & Laughs",
    "III. The Sunset Walk on Old Sands",
    "IV. The Unshakable Vow",
  ],
  start: "veranda-sunrise",
  nodes: {
    "veranda-sunrise": {
      chapter: 0,
      scene: "beach",
      text: [
        "The gentle roar of the Atlantic Ocean rolls across a quiet coastal bay. The sky is painted in soft peach and gold as the morning tide washes over warm white sand.",
        "On the wooden veranda of a sunlit beach house, two handcrafted mahogany rocking chairs sway in rhythm with the breeze.",
        "{B} steps out onto the deck holding two steaming mugs of lemongrass tea. Her face has fine, graceful laugh lines around her eyes, and streaks of elegant silver sparkle in her dark curls.",
        "To {A}, looking up from his reading glasses, she is even more stunningly beautiful today than the very first day they met.",
      ],
      choices: [
        { label: "Reach for her hand and pull her gently onto your lap", to: "lap-cuddle" },
        { label: "Stand up to kiss her forehead and admire the view together", to: "admire-view" },
      ],
    },
    "lap-cuddle": {
      chapter: 0,
      scene: "home",
      text: [
        "{A} takes the mugs and sets them on the cedar side table, then gently guides {B} to sit in the wide rocking chair beside him, his arm wrapping around her waist.",
        "{B} laughs that same musical laugh that has anchored his entire life, resting her head comfortably in the hollow of his shoulder.",
        "\"Twenty years later,\" {B} whispers, \"and you still won't let me sit on my own chair?\"",
        "\"Not when the greatest treasure in the universe is within arm's reach,\" {A} smiles, kissing the crown of her head.",
      ],
      choices: [
        { label: "Reflect on how far you've traveled since those early days", to: "reflect-journey" },
      ],
    },
    "admire-view": {
      chapter: 0,
      scene: "beach",
      text: [
        "{A} stands and takes her hands, lifting them to his lips. The morning wind rustles through the bougainvillea climbing the veranda pillars.",
        "\"Remember when we were just dreaming about this house?\" {A} asks, gesturing to the calm horizon.",
        "{B} smiles, leaning into his shoulder. \"Back when we were young, talking late into the night about the life we would build together. And look at us now. Every promise came true.\"",
      ],
      choices: [
        { label: "Walk back inside to revisit the photo gallery hall", to: "reflect-journey" },
      ],
    },
    "reflect-journey": {
      chapter: 1,
      scene: "home",
      text: [
        "They step inside the breezy, open-plan living room. Along the stone hallway is the Gallery Wall—hundreds of framed moments spanning two decades.",
        "There are photos of their wedding in Lagos, the flights back and forth to Delta State, their first tiny apartment, their travels across Europe and Africa, and holidays full of family and feast.",
        "{B} stops in front of an early photograph of them laughing under a stormy sky.",
        "\"Look at our faces back then,\" she says tenderly. \"We were so full of hope, so sure of each other.\"",
      ],
      choices: [
        { label: "Show {B} the old journal where you wrote down your first dream of her", to: "old-journal" },
        { label: "Reminisce about the challenges you conquered side-by-side", to: "conquered-storms" },
      ],
    },
    "old-journal": {
      chapter: 1,
      scene: "home",
      text: [
        "{A} pulls a worn, leather-bound notebook from the wooden shelf. He flips to a yellowed page dated twenty years prior.",
        "*'I don't know where life will take us, but if {B} is holding my hand, I know the destination will be paradise.'*",
        "{B} touches the ink, her eyes glistening with deep emotion. \"You kept this all these years?\"",
        "\"Every single word of it. Because every word came from my heart.\"",
      ],
      choices: [
        { label: "Invite her down to the beach for their daily morning walk", to: "beach-stroll" },
      ],
    },
    "conquered-storms": {
      chapter: 1,
      scene: "rain",
      text: [
        "They talk about the tough seasons—the late nights of hard work, the times they had to hold each other up through sickness, loss, and growing pains.",
        "\"We never let go of each other's hands, {A}. Not once,\" {B} whispers.",
        "\"Because you are my anchor, {B}. Without you, the boat drifts. With you, every storm was just weather passing through.\"",
      ],
      choices: [
        { label: "Step out onto the soft shoreline sand", to: "beach-stroll" },
      ],
    },
    "beach-stroll": {
      chapter: 2,
      scene: "beach",
      text: [
        "Barefoot, their trousers and sundress hem rolled up, they walk down the wooden staircase onto the cool, damp sand.",
        "The tide recedes, leaving shimmering mirrors of seawater reflecting the bright morning sun.",
        "Tiny sandpipers skitter along the foam. {A} and {B} walk with their fingers intertwined, their pace relaxed, unburdened by haste.",
        "Two pairs of footprints trail behind them in the sand, side by side, perfectly aligned.",
      ],
      choices: [
        { label: "Stop at the drift-log to watch the waves break", to: "drift-log-sit" },
        { label: "Pick up a pair of polished sea shells as keepsakes", to: "sea-shells" },
      ],
    },
    "drift-log-sit": {
      chapter: 2,
      scene: "beach",
      text: [
        "They sit on a bleached driftwood log smoothed by decades of ocean tides. {A} wraps an arm around {B}, pulling her close against the ocean breeze.",
        "\"If you could go back to the beginning, would you change anything?\" {B} asks, looking out over the endless blue.",
        "{A} turns to face her, brushing a silver curl from her temple.",
        "\"Not a single heartbeat. Every road, every tear, every laugh led me right here to you.\"",
      ],
      choices: [
        { label: "Share the eternal vow that has kept you anchored for two decades", to: "eternal-vow" },
      ],
    },
    "sea-shells": {
      chapter: 2,
      scene: "beach",
      text: [
        "{B} stoops down to pick up two iridescent mother-of-pearl shells washed up by the waves. She hands one to {A}.",
        "\"Two shells from the same ocean floor,\" she says with a sweet, knowing smile.",
        "\"Destined to end up together on the same shore,\" {A} completes her thought.",
      ],
      choices: [
        { label: "Walk back toward the veranda for the sunset of their dreams", to: "eternal-vow" },
      ],
    },
    "eternal-vow": {
      chapter: 3,
      scene: "stars",
      text: [
        "Evening paints the coastal horizon in deep shades of lavender, rose gold, and indigo.",
        "On their wooden veranda, lanterns are lit. A soft acoustic ballad plays from the house speakers.",
        "{A} stands in front of {B}, taking both of her hands into his. \"Twenty years ago I promised to love you for a lifetime. Today, I realize a single lifetime is not nearly enough.\"",
        "\"I love you, {A},\" {B} whispers, her voice filled with twenty years of shared laughter, quiet comfort, and unwavering devotion. \"In this lifetime, and in the next.\"",
      ],
      choices: [
        { label: "Slow dance on the veranda under the stars", to: "ending-veranda-dance" },
        { label: "Toast with vintage wine to the next forty years", to: "ending-vintage-toast" },
        { label: "Cuddle into the rocking chairs watching the moonlight on the waves", to: "ending-moonlight-waves" },
      ],
    },
    "ending-veranda-dance": {
      chapter: 3,
      scene: "beach",
      text: [
        "Barefoot on the warm wooden deck, they dance to the slow rhythm of the ocean and the music.",
        "Their movements are second nature—honed by thousands of days together.",
        "Under the starlit sky, they are living proof that true love does not fade with time; it only becomes purer, deeper, and more magnificent with every passing year.",
      ],
      ending: {
        id: "future-veranda-dance",
        title: "The Dance That Never Ended",
        mood: "sweet",
      },
    },
    "ending-vintage-toast": {
      chapter: 3,
      scene: "home",
      text: [
        "They raise crystal glasses of aged red wine against the coastal twilight.",
        "\"To the boy and girl who dreamed of this day,\" {B} toasts, \"and to the King and Queen who made it reality.\"",
        "\"To our forever,\" {A} clinks his glass. The future stretches before them as vast, peaceful, and radiant as the ocean itself.",
      ],
      ending: {
        id: "future-vintage-toast",
        title: "To the Next Forty Years",
        mood: "epic",
      },
    },
    "ending-moonlight-waves": {
      chapter: 3,
      scene: "stars",
      text: [
        "Curled together under a warm wool blanket in the wide rocking chair, they watch the silver moonlight carve a shimmering path across the water.",
        "{B} closes her eyes, breathing softly against {A}'s chest.",
        "{A} kisses her forehead, gazing at the endless horizon with a heart full of gratitude for the greatest blessing of his life.",
      ],
      ending: {
        id: "future-moonlight-rocking",
        title: "Moonlight on the Veranda",
        mood: "sweet",
      },
    },
  },
};
