import type { Story } from "./types";

export const theDisagreement: Story = {
  id: "the-disagreement",
  title: "The Storm That Cleared the Sky",
  tagline: "Sharp words, the heavy silence that follows, sitting on the living room floor, and learning to choose each other through the pain.",
  emoji: "⛈️",
  category: "deep-emotional",
  synopsis:
    "Love is not tested when the sun is shining; it is proven when fatigue, misunderstandings, and sharp words threaten the peace. When a tense disagreement leaves {A} and {B} in separate rooms of a heavy apartment, the decision to lay down defenses and sit together on the living room floor becomes their greatest breakthrough.",
  estimatedMinutes: 16,
  palette: ["#1e293b", "#94a3b8"],
  chapters: [
    "I. The Spark of Frustration",
    "II. The Cold Silence",
    "III. Sitting on the Floor Together",
    "IV. Stronger Than the Storm",
  ],
  start: "the-tense-evening",
  nodes: {
    "the-tense-evening": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "It had been an exhausting, brutal week for both of them. Deadlines had piled up, sleep had been neglected, and nerves were worn down to raw wires.",
        "It started over something painfully trivial—a miscommunicated errand, an unwashed pan left in the sink, an exhausted sigh that landed with more hostility than intended. Before either could stop the momentum, defensive words turned into sharp barbs.",
        "\"You never listen when I tell you I'm overwhelmed!\" {B}'s voice cracked, eyes flashing with hurt and exhaustion.",
        "\"And you assume that because I'm quiet, I don't care!\" {A} snapped back, immediately regretting the sharp edge in their tone.",
        "The kitchen door swung shut with a hollow thud. {B} retreated into the dark bedroom, and {A} stood alone in the brightly lit kitchen, chest heaving, staring at their hands in sickening disbelief.",
      ],
      choices: [
        { label: "Step back, take deep breaths, and let the initial anger cool", to: "cooling-off" },
        { label: "Pace the kitchen counter, confronting your own defensiveness", to: "cooling-off" },
      ],
    },
    "cooling-off": {
      chapter: 1,
      scene: "home",
      text: [
        "The silence that followed was suffocating. It hung over the apartment like a fog so thick it felt difficult to draw a full breath.",
        "{A} sat at the kitchen table with head in hands. Winning the argument felt utterly worthless; the only reality that mattered was the sickening ache of knowing they had wounded the person they loved most in the world.",
        "In the bedroom, {B} sat curled on the edge of the mattress, arms wrapped around knees, watching tears blur the streetlights outside. The fight wasn't about the dishes or the errands; it was about the terrifying fear of not being heard by the one person whose understanding mattered above all else.",
        "Thirty minutes ticked by on the wall clock. The initial hot sting of pride dissolved into the profound, humbling clarity of love.",
      ],
      choices: [
        { label: "Brew a fresh pot of soothing chamomile tea and approach the bedroom door", to: "approach-door" },
        { label: "Walk directly to the bedroom, knock softly, and speak from the heart", to: "approach-door" },
      ],
    },
    "approach-door": {
      chapter: 1,
      scene: "home",
      text: [
        "{A} walks down the dimly lit hallway with quiet, deliberate steps. Stopping outside the closed bedroom door, {A}'s hand rests against the wood.",
        "{A} doesn't barge in. Instead, they knock three gentle, rhythmic taps.",
        "\"{B}?\" {A}'s voice is soft, completely stripped of pride, defensive anger, or ego. \"It's me. Can I come sit with you? Please?\"",
        "A long, quiet pause follows. Then the sound of socks padding across the floorboards. The door opens a few inches. {B} stands there, eyes red-rimmed, looking small, tired, and deeply guarded.",
      ],
      choices: [
        { label: "Gently ask to sit on the floor together away from all distractions", to: "sit-on-floor" },
      ],
    },
    "sit-on-floor": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "Instead of sitting on the bed or standing defensively, {A} lowers themselves down onto the hardwood floor by the hallway wall, cross-legged, leaving space between them.",
        "{B} watches {A} for a heartbeat, their shoulders dropping. Slowly, {B} sinks down onto the floor opposite {A}, knees pulled to their chest, a thick throw blanket draped over their shoulders.",
        "A single warm lamp illuminates the corridor between them. For two minutes, neither speaks. The silence is no longer icy; it has become a fragile bridge waiting to be crossed.",
        "\"I'm sorry, {B},\" {A} begins, voice cracking with genuine remorse. \"I was defensive, I raised my voice, and I let my exhaustion make me careless with your heart. You didn't deserve that. I was wrong.\"",
      ],
      choices: [
        { label: "Reach out an open palm across the floorboards", to: "open-palm" },
        { label: "Listen patiently as {B} shares what hurt them beneath the anger", to: "listen-deeply" },
      ],
    },
    "open-palm": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} rests an open hand on the floorboards between them, palm facing upward—an invitation, not an expectation.",
        "{B} looks at the open hand through shimmering tears. A trembling breath leaves their lips, and slowly, {B} reaches out and places their smaller hand into {A}'s.",
        "{A} doesn't squeeze immediately; they simply cradle {B}'s fingers with infinite gentleness, feeling the cool skin warm up against their palm.",
        "\"I felt so alone this week, {A},\" {B} whispers, tears finally spilling over. \"I was drowning in pressure, and when you snapped, it felt like my safe harbor had turned into a battlefield.\"",
      ],
      choices: [
        { label: "Pull {B} forward into a tearful, healing embrace", to: "healing-embrace" },
      ],
    },
    "listen-deeply": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{B} speaks for ten minutes without interruption. They talk about the anxiety at work, the exhaustion of feeling inadequate, and how much they crave {A}'s reassurance when the world is chaotic.",
        "{A} listens without interrupting, without justifying, without offering quick fixes. Just hearing, absorbing, and holding space for {B}'s truth.",
        "When {B} finishes, their chest rises and falls with relief. The poison has been drained from the wound.",
        "\"I hear you, my love,\" {A} says softly. \"I hear you completely. And you will never have to face that alone.\"",
      ],
      choices: [
        { label: "Pull {B} forward into a tearful, healing embrace", to: "healing-embrace" },
      ],
    },
    "healing-embrace": {
      chapter: 2,
      scene: "home",
      text: [
        "{B} shifts forward off the floor and falls directly into {A}'s arms. {A} wraps both arms around {B}'s back, burying their face in {B}'s hair, holding them so securely that neither could ever fall.",
        "{B} weeps softly against {A}'s neck—not from anger anymore, but from the immense, breathtaking relief of being forgiven, understood, and cherished despite the messiness of being human.",
        "{A} presses soft kisses to {B}'s wet temple, whispering: \"I've got you. I'm right here. We are in this together, always.\"",
      ],
      choices: [
        { label: "Transition into the calm late hours as the storm clears", to: "post-storm-clarity" },
      ],
    },
    "post-storm-clarity": {
      chapter: 3,
      scene: "balcony",
      text: [
        "1:30 A.M. They step out onto the balcony together, wrapped in a single heavy duvet. Outside, the rainstorm that battered the city has finally passed, leaving behind clean air, glistening leaves, and a sky clearing to reveal brilliant stars.",
        "They share a mug of warm honey tea, hands wrapped around the ceramic warmth.",
        "\"You know,\" {B} whispers, resting their cheek against {A}'s shoulder, \"I think I love you more right now than I did before we fought.\"",
        "\"How so?\" {A} asks, turning their head.",
        "\"Because now I know what happens when things get ugly. We don't run away. We sit on the floor, we swallow our pride, and we choose each other all over again.\"",
      ],
      choices: [
        { label: "Seal the new understanding with a tender kiss in the cool night air", to: "ending-balcony-kiss" },
        { label: "Make a pact for how you will handle hard days in the future", to: "ending-communication-pact" },
        { label: "Carry each other back to bed and fall asleep in pure peace", to: "ending-peaceful-sleep" },
      ],
    },
    "ending-balcony-kiss": {
      chapter: 3,
      scene: "stars",
      text: [
        "{A} turns to face {B}, cupping their cheeks in warm palms. The tears have dried, leaving {B}'s eyes clear and brilliant under the moonlight.",
        "The kiss they share is not rushed or hungry; it is reverent, tender, and deeply healing. It tastes of clean rain, shared forgiveness, and the unbreakable bedrock of two mature souls committed to lifelong love.",
        "\"I will choose you on the good days,\" {A} murmurs against {B}'s lips. \"And I will choose you twice as hard on the difficult ones.\"",
        "\"And I will always meet you on the floor,\" {B} promises softly.",
      ],
      ending: {
        id: "cleared-sky-kiss",
        title: "The Cleared Sky",
        mood: "sweet",
      },
    },
    "ending-communication-pact": {
      chapter: 3,
      scene: "home",
      text: [
        "They create a sacred rule right there on the balcony: *'The Safe Word Rule.'* Whenever either feels overwhelmed or defensive during a discussion, they can say the word *'Floor'*, and both must immediately stop talking, sit down, and hold hands before another word is uttered.",
        "{B} smiles, a quiet laugh bubbling in their throat. \"It's genius. You can't be an arrogant warrior when you're sitting cross-legged holding hands.\"",
        "\"Exactly,\" {A} chuckles, pulling {B} closer into the warmth of the blanket. \"Love is a team sport, my queen.\"",
      ],
      ending: {
        id: "the-safe-harbor-pact",
        title: "The Safe Harbor Pact",
        mood: "sweet",
      },
    },
    "ending-peaceful-sleep": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "They return to the bedroom, leaving the door wide open. In the clean, cool sheets, {B} curls tight against {A}'s chest, their legs tangled together.",
        "{A}'s chin rests on the crown of {B}'s head, arms wrapped around their waist with protective certainty.",
        "There is no anger left in the room; only the deep, sacred exhaustion that follows a battle fought not against each other, but for the preservation of their bond.",
        "As sleep claims them both, their heartbeats align in perfect, unbroken peace.",
      ],
      ending: {
        id: "peace-after-the-rain",
        title: "Peace After the Rain",
        mood: "sweet",
      },
    },
  },
};
