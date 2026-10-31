import type { Story } from "./types";

export const candlelitReunion: Story = {
  id: "candlelit-reunion",
  title: "Candlelight & Slow Dances",
  tagline: "Soft jazz in an empty apartment, bare feet on cool floorboards, slow swaying in the shadows, and unhurried intimacy.",
  emoji: "🕯️",
  category: "sensual-romance",
  synopsis:
    "After weeks of separate schedules, travel, and crowded rooms, {A} and {B} carve out a sacred, private sanctuary. All the lights are turned off, dozens of beeswax candles flicker against the walls, and a vintage turntable spins slow, sultry jazz. With shoes kicked aside and nowhere else to be, the evening dissolves into an unhurried dance of whispered promises, tender touches, and a tasteful, deeply sensual surrender.",
  estimatedMinutes: 16,
  palette: ["#1c1917", "#f59e0b"],
  chapters: [
    "I. The Empty Living Room",
    "II. Barefoot on the Floorboards",
    "III. Whispers in the Shadows",
    "IV. Tasteful Surrender at Midnight",
  ],
  start: "candlelit-haven",
  nodes: {
    "candlelit-haven": {
      chapter: 0,
      scene: "candlelight",
      text: [
        "The apartment door clicks shut behind {B}, locking out the noisy city of twenty million people. The overhead lamps are completely dark. Instead, thirty beeswax candles flicker on every surface—the fireplace mantel, the low coffee table, the kitchen island, and the window ledges.",
        "The scent of warm vanilla, rich sandalwood, and burning honey fills the air. A turntable in the corner spins a heavy 180g vinyl record: slow, velvety jazz trumpet and double bass reverberate softly through the floorboards.",
        "{A} stands in the dining archway, dressed simply in a crisp linen shirt with sleeves rolled up, holding two crystal glasses filled with deep ruby Bordeaux.",
        "{B} lets her purse drop to the entry console, a slow, breathtaking smile spreading across her lips. \"What is all this, {A}?\"",
        "\"This,\" {A} murmurs, crossing the room with unhurried grace, \"is an evening dedicated entirely, exclusively, and unapologetically to you.\"",
      ],
      choices: [
        { label: "Hand her the wine glass and gently untie her heels", to: "take-off-heels" },
        { label: "Set the glasses down and pull her into an immediate, breathless embrace", to: "doorway-embrace" },
      ],
    },
    "doorway-embrace": {
      chapter: 0,
      scene: "candlelight",
      text: [
        "{A} sets the glasses down on the console, steps forward, and wraps both arms around her waist, lifting her off her feet. {B} sighs with pure surrender, wrapping her arms around his neck.",
        "Her head rests against his throat, inhaling the familiar, intoxicating scent of his cedar cologne and warm skin. For two full minutes, neither moves.",
        "\"I missed you so much today it made my bones ache,\" {B} whispers against his pulse.",
        "\"Then let me remind you how much you are loved,\" {A} answers softly, letting her slide down his body until her bare feet touch the floor.",
      ],
      choices: [
        { label: "Lead her to the center of the candlelit room", to: "slow-dance-start" },
      ],
    },
    "take-off-heels": {
      chapter: 0,
      scene: "candlelight",
      text: [
        "{A} hands her a glass, then kneels before her on the entry rug. With reverent care, he unclasps the delicate straps of her high heels and slides them from her feet.",
        "{B} lets out a soft moan of relief, resting a warm hand on his shoulder as he gently massages the arch of her foot with his thumb.",
        "He stands up, towering over her with warm, dark eyes that track every line of her silhouette. \"No shoes allowed tonight. Bare feet and slow tempos only.\"",
        "\"I like your rules,\" she murmurs, taking a sip of the rich, velvety wine.",
      ],
      choices: [
        { label: "Lead her to the center of the candlelit room", to: "slow-dance-start" },
      ],
    },
    "slow-dance-start": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "In the open expanse of the living room, where the furniture has been pushed back toward the walls, shadows dance in golden pools against the white plaster.",
        "{A} takes {B}'s glass and sets it on the low table. He extends his right hand with an open palm. {B} places her hand in his, and with a gentle tug, he draws her into his arms.",
        "Her left hand rests against his chest, feeling the heavy, accelerated cadence of his heartbeat; his right hand settles firmly at the small of her back, warm through the silk fabric of her dress.",
        "They begin to sway. Not with rehearsed steps or theatrical twirls, but with that slow, hypnotic intimacy where two bodies move as a single shadow to the rhythm of the saxophone.",
      ],
      choices: [
        { label: "Pull her closer until her head rests against your chest", to: "sway-together" },
        { label: "Spin her gently in the candlelight before pulling her back to your body", to: "sway-together" },
      ],
    },
    "sway-together": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A}'s arm tightens gently around her waist, drawing her flush against his chest. {B} rests her cheek over his heart, closing her eyes as they sway in small, unhurried circles.",
        "Her skin is warm, her perfume dizzying. With every breath, {A} feels the subtle rise and fall of her chest against his ribs. The world outside the candlelight simply ceases to exist.",
        "\"Do you have any idea how gorgeous you are when the light hits you like this?\" {A} whispers into her ear, his breath warm against her sensitive skin.",
        "A delicate shiver ripples across {B}'s shoulders. She tilts her head back, looking up into his eyes through dark, hooded lashes. \"Tell me.\"",
      ],
      choices: [
        { label: "Trace your fingers along her jawline and whisper your devotion", to: "whispers-in-shadows" },
      ],
    },
    "whispers-in-shadows": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} stops their sway in the center of the glowing circle. His fingers lift to her face, thumb gently tracing the soft contour of her cheekbone, then trailing down the curve of her jaw to her throat.",
        "{B}'s breath hitches. Her lips part slightly, eyes darkening with an electric, smoldering heat that mirrors his own.",
        "\"You are the only person who can disarm me with a single glance,\" {A} murmurs, his voice dropping to a low, husky register. \"Every room I walk into, I look for you. Every thought I have ends with you.\"",
        "{B} reaches up, her hands sliding into {A}'s open collar, fingers pressing into the warm skin of his collarbones. \"Then don't just tell me with words, {A}. Show me.\"",
      ],
      choices: [
        { label: "Lean down and press a slow, lingering kiss to her lips", to: "slow-kiss" },
        { label: "Trail soft, breathless kisses down the side of her neck", to: "neck-kisses" },
      ],
    },
    "slow-kiss": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} lowers his mouth to hers. The kiss begins with tantalizing restraint—soft, warm, tasting of red wine and pure adoration.",
        "Then {B} sighs into his mouth, parting her lips, her hands tangling into his hair to pull him deeper. The restraint melts into an intoxicating fire. His hands slide from her waist up the curves of her ribs, holding her firmly as the kiss deepens into an all-consuming passion.",
        "When they part, their breaths are ragged, foreheads pressed together, chests heaving in unison.",
      ],
      choices: [
        { label: "Guide her toward the bedroom where linen and shadows wait", to: "bedroom-transition" },
      ],
    },
    "neck-kisses": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} brushes his lips against her temple, then trails slow, warm kisses along her jawline down to the hollow beneath her ear. {B} lets out a soft, breathless gasp, her head falling back against his shoulder to grant him full access.",
        "His lips are tender yet deliberate, lingering against the sensitive pulse point at the base of her throat. {B}'s fingers grip the muscles of his back through the linen shirt, anchoring herself against the overwhelming wave of sensation.",
        "\"You drive me wild, {B},\" he whispers against her heated skin.",
        "\"Good,\" she breathes, turning her face to seek his mouth in the dark.",
      ],
      choices: [
        { label: "Guide her toward the bedroom where linen and shadows wait", to: "bedroom-transition" },
      ],
    },
    "bedroom-transition": {
      chapter: 3,
      scene: "home",
      text: [
        "He takes her hand and leads her into the master bedroom. Here, too, the lights are extinguished, lit only by the warm amber glow of candles dancing on the bedside tables.",
        "The heavy linen curtains are drawn against the night. The bed is turned down, layered in cool white cotton and plush pillows.",
        "{A} turns to face her, gently reaching for the zipper at the back of her dress. The slide of the zipper is a quiet, intimate sound in the still room. As the fabric falls softly to the floor, {A}'s eyes trace her form with unhurried reverence.",
        "\"You are a masterpiece, my love,\" he whispers, pulling her gently against him.",
      ],
      choices: [
        { label: "Pull back the sheets and surrender to the sacred warmth of the night", to: "ending-sacred-surrender" },
        { label: "Whisper eternal promises in the dark before letting the candle extinguish", to: "ending-whispered-vow" },
        { label: "Hold each other in the quiet afterglow until morning dawn", to: "ending-afterglow-dawn" },
      ],
    },
    "ending-sacred-surrender": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "Beneath the cool linen sheets, their bodies meet in an unbroken cadence of warmth, whispered names, and tender touches. In the soft golden candlelight, the world narrows to the sacred geography of their love.",
        "Every touch is deliberate, every kiss a renewal of devotion. As the candles slowly burn down to glowing embers, the room settles into that profound, breathless intimacy where two souls become entirely, beautifully one.",
        "Outside, the city sleeps. Inside, their love burns with an eternal, private flame.",
      ],
      ending: {
        id: "candlelight-surrender",
        title: "Surrender in the Candlelight",
        mood: "sweet",
      },
    },
    "ending-whispered-vow": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "In the quiet shadows, with her head resting on his bare chest and his fingers lazily tracing patterns down her spine, they speak of the depth of their connection.",
        "\"I never knew love could feel this peaceful and this passionate at the same time,\" {B} whispers, kissing the hollow of his shoulder.",
        "\"Because you are my sanctuary, {B},\" {A} murmurs, leaning over to gently blow out the final flickering candle.",
        "In the warm, velvety darkness, they pull the duvet over their shoulders, falling asleep in the sweet, unbroken tangle of their limbs.",
      ],
      ending: {
        id: "the-candlelit-vow",
        title: "The Candlelit Vow",
        mood: "sweet",
      },
    },
    "ending-afterglow-dawn": {
      chapter: 3,
      scene: "home",
      text: [
        "Hours later, when the candles have burned out and the first pale lavender hues of dawn filter through the edges of the curtains, {B} stirs in {A}'s arms.",
        "{A} is already awake, looking down at her with eyes overflowing with adoration, gently brushing a stray curl from her lips.",
        "\"Good morning, my everything,\" {A} whispers softly.",
        "{B} smiles, burying her face into his chest, pulling the blanket higher. \"Five more hours like this. Please.\"",
        "\"All the hours you want, my love. Forever.\"",
      ],
      ending: {
        id: "dawn-afterglow-sweet",
        title: "The Sweet Dawn Afterglow",
        mood: "sweet",
      },
    },
  },
};
