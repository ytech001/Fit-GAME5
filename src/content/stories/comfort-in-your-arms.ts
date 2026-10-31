import type { Story } from "./types";

export const comfortInYourArms: Story = {
  id: "comfort-in-your-arms",
  title: "Sanctuary After a Heavy Day",
  tagline: "When the outside world is too loud and too harsh, coming home to an embrace that heals everything.",
  emoji: "🤍",
  category: "deep-emotional",
  synopsis:
    "Some days test human endurance to the breaking point. When {B} returns home drained, defeated, and on the verge of quiet tears after an exhausting battle with the outside world, {A} asks no demanding questions. Instead, {A} draws a warm lavender bath, prepares soothing food, and opens up an embrace that holds her until the world is quiet again.",
  estimatedMinutes: 15,
  palette: ["#1e293b", "#cbd5e1"],
  chapters: [
    "I. The Key in the Latch",
    "II. Laying Down the Armor",
    "III. Warm Bath & Sweet Lavender",
    "IV. Held Until the World is Quiet",
  ],
  start: "heavy-footsteps",
  nodes: {
    "heavy-footsteps": {
      chapter: 0,
      scene: "home",
      text: [
        "8:20 P.M. The sound of the key turning in the front door latch lacks its usual light, eager rhythm. It turns slowly, with the heavy, dragging weight of bone-deep exhaustion.",
        "{A} looks up from the kitchen counter as the door opens. {B} steps in, shoulders slumped, eyes shadowed with fatigue, holding her work bag like a heavy boulder. She doesn't say a word; she just stands on the entry mat, looking down at her shoes as if taking them off requires more energy than she has left.",
        "{A} needs only one look to understand. The outside world had been brutal today.",
      ],
      choices: [
        { label: "Walk over immediately, take her bag, and pull her into your arms", to: "silent-welcome" },
        { label: "Gently remove her coat and guide her to the soft sofa cushions", to: "silent-welcome" },
      ],
    },
    "silent-welcome": {
      chapter: 0,
      scene: "home",
      text: [
        "{A} doesn't ask *'How was your day?'* or *'What happened?'*. {A} simply crosses the room in three strides, takes the heavy bag from her limp fingers, sets it aside, and wraps both arms around her shoulders.",
        "For a split second, {B} stays stiff, still operating in survival mode. Then, feeling the familiar warmth of {A}'s chest and the protective circle of their arms, every ounce of resistance collapses.",
        "She buries her face into the crook of {A}'s neck with a ragged, shuddering exhale. Her hands clutch the back of {A}'s shirt tightly, trembling.",
        "\"I've got you,\" {A} whispers into her hair, kissing her temple. \"You're home now, my queen. You don't have to be strong anymore.\"",
      ],
      choices: [
        { label: "Hold her in the quiet hallway until her breathing steadies", to: "hallway-holding" },
      ],
    },
    "hallway-holding": {
      chapter: 1,
      scene: "home",
      text: [
        "They stand in the dim hallway for several uninterrupted minutes. A few quiet tears soak into {A}'s shirt, but {A} only holds her tighter, hand gently rubbing slow, comforting circles between her shoulder blades.",
        "Gradually, the tension knots in her back begin to soften. The storm inside her mind begins to quiet down.",
        "{B} lifts her head, eyes shiny with tears, looking at {A} with immense, fragile gratitude. \"I didn't think I was going to make it through today without breaking down.\"",
        "\"You made it,\" {A} smiles tenderly, wiping away a stray tear with their thumb. \"And now you get to rest.\"",
      ],
      choices: [
        { label: "Lead her to the bathroom where a warm lavender bath awaits", to: "warm-bath" },
        { label: "Wrap her in a fluffy heated blanket on the sofa with chamomile tea", to: "sofa-cocoon" },
      ],
    },
    "warm-bath": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "While {B} rests on the sofa, {A} slips into the bathroom, draws a deep tub of steaming hot water, and stirs in Epsom salts and soothing lavender and eucalyptus oils. A handful of small tea candles are lit on the marble rim.",
        "{A} gently helps {B} out of her stiff work clothes into the warm, fragrant water.",
        "As the hot water envelops her tired limbs, {B} lets out a long, blissful groan, leaning her head back against the rolled towel on the rim. \"This is heaven. You are an actual angel.\"",
        "{A} sits on the floor beside the tub, taking a soft washcloth and gently pouring warm water over her shoulders and neck.",
      ],
      choices: [
        { label: "Gently wash her hair and massage her scalp", to: "hair-massage" },
      ],
    },
    "sofa-cocoon": {
      chapter: 1,
      scene: "home",
      text: [
        "{A} bundles {B} into oversized flannel pajamas and wraps her in a heated plush throw blanket on the deep sofa.",
        "Sitting down beside her, {A} pulls her into their lap, placing a steaming mug of honey-sweetened chamomile tea between her hands.",
        "\"Drink this slowly,\" {A} murmurs, kissing her cheek. \"Nothing outside these walls matters tonight. It's just you and me.\"",
        "{B} takes a grateful sip, leaning her entire body weight against {A}'s chest.",
      ],
      choices: [
        { label: "Offer to rub her shoulders and tired feet", to: "hair-massage" },
      ],
    },
    "hair-massage": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "With slow, deliberate, loving care, {A}'s fingers massage {B}'s scalp and neck, working out every knot of stress that had accumulated throughout the exhausting week.",
        "{B}'s eyes flutter shut. The constant racing thoughts in her head finally grind to a peaceful halt. For the first time all day, she feels completely safe.",
        "\"You always know how to put me back together, {A},\" she whispers, her voice sweet and heavy with drowsiness.",
        "\"Because you are my most precious treasure, {B}. Taking care of you is the greatest privilege of my life.\"",
      ],
      choices: [
        { label: "Serve a warm, comforting bowl of homemade soup in bed", to: "bed-comfort" },
      ],
    },
    "bed-comfort": {
      chapter: 2,
      scene: "home",
      text: [
        "Later, in the clean, cool sheets of the bedroom, {A} brings a tray with warm, savory chicken pepper soup and crusty garlic bread.",
        "They eat together sitting propped against the pillows, feeding each other small bites. The color slowly returns to {B}'s cheeks, and for the first time all evening, a genuine, joyful laugh escapes her lips at one of {A}'s gentle jokes.",
        "The heavy weight of the day has been lifted, replaced by the profound, unbreakable sanctuary of their partnership.",
      ],
      choices: [
        { label: "Turn off the bedside lamp and settle into an unbroken night of sleep", to: "night-sanctuary" },
      ],
    },
    "night-sanctuary": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "10:30 P.M. The bedroom is dark, quiet, and warm. Outside, the city hums, but inside, peace reigns supreme.",
        "{B} curls tightly against {A}, head resting on their chest right above their heartbeat. Her arm is thrown over {A}'s waist, holding on tight.",
        "{A} pulls the duvet up over her shoulders, wrapping an arm around her back to shield her from every draft.",
        "{B} looks up in the dark, her eyes soft with adoration. \"Thank you, {A}. For loving me when I have nothing left to give.\"",
      ],
      choices: [
        { label: "Whisper your unconditional promise of lifelong protection", to: "ending-unconditional-vow" },
        { label: "Kiss her forehead until she drifts into the deepest sleep", to: "ending-deep-sleep" },
        { label: "Make a promise to wake up early and pamper her again tomorrow", to: "ending-tomorrow-pamper" },
      ],
    },
    "ending-unconditional-vow": {
      chapter: 3,
      scene: "stars",
      text: [
        "\"You don't have to give anything to be loved, {B},\" {A} whispers into her ear with fierce conviction. \"My love for you isn't a transaction. When you're tired, I will carry you. When you're hurting, I will hold you. Always.\"",
        "{B} lets out a contented, peaceful sigh, kissing {A}'s chest right over their heart.",
        "She falls asleep seconds later, cradled in an embrace so strong that no monster of the outside world could ever reach her.",
      ],
      ending: {
        id: "unconditional-sanctuary",
        title: "The Unconditional Sanctuary",
        mood: "sweet",
      },
    },
    "ending-deep-sleep": {
      chapter: 3,
      scene: "home",
      text: [
        "{A} presses soft, unhurried kisses to her forehead, her eyelids, and her cheek, whispering gentle affirmations into the quiet dark.",
        "Her breathing slows and deepens, slipping into the most restorative, peaceful slumber she has known in weeks.",
        "{A} stays awake for a few minutes longer, looking down at her peaceful face in the starlight, filled with quiet gratitude for the sacred honor of being her shelter.",
      ],
      ending: {
        id: "deep-restorative-sleep",
        title: "Deep Sleep in Your Arms",
        mood: "sweet",
      },
    },
    "ending-tomorrow-pamper": {
      chapter: 3,
      scene: "kitchen",
      text: [
        "\"Tomorrow is Sunday,\" {A} whispers with a gentle smile. \"You are not setting an alarm. I am making breakfast in bed, turning off your phone notifications, and we are spending the whole day recharging.\"",
        "{B} smiles sleepily against {A}'s neck. \"You spoil me so much...\"",
        "\"You deserve to be spoiled for the rest of your life,\" {A} answers, holding her close as the night carries them safely to morning.",
      ],
      ending: {
        id: "the-sunday-recharge",
        title: "The Sunday Recharge",
        mood: "sweet",
      },
    },
  },
};
