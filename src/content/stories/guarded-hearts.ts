import type { Story } from "./types";

export const guardedHearts: Story = {
  id: "guarded-hearts",
  title: "The Cold Heart's Defeat",
  tagline: "A fortress built around a wounded heart, an intense attraction that dismantles every defense, and a dangerous secret.",
  emoji: "🖤",
  category: "dark-romance",
  synopsis:
    "{A} has survived betrayal by building an impenetrable fortress around his life and heart, trusting no one. But when {B}, a fiercely intelligent and observant investigator, uncovers the dangerous secret threatening his legacy, an intense battle of wills ignites into an all-consuming, seductive romance where surrendering control is the ultimate victory.",
  estimatedMinutes: 16,
  palette: ["#020617", "#475569"],
  chapters: [
    "I. The Penthouse at Midnight",
    "II. The Cold Interrogation",
    "III. When the Armor Cracks",
    "IV. The Defeat of Solitude",
  ],
  start: "penthouse-shadows",
  nodes: {
    "penthouse-shadows": {
      chapter: 0,
      scene: "city-night",
      text: [
        "From the top floor of a black glass skyscraper, the rain-swept metropolis spreads out like a circuit board of neon and amber. The penthouse is an altar of minimalism—dark Italian marble, floor-to-ceiling glass, and shadow.",
        "{A} stands by the glass with a tumbler of neat whiskey. Feared in the boardroom and untouchable in his private life, {A} has lived by one rule: never give anyone a weapon to use against you.",
        "A quiet click sounds from the private elevator foyer. Standing in the entrance, raindrops glistening on her dark leather trench coat, is {B}. In her hand is a black flash drive—and in her eyes is an unnerving, fearless composure.",
        "\"You have five seconds to explain how you bypassed my security, {B},\" {A}'s voice is low, smooth, and laced with quiet menace.",
      ],
      choices: [
        { label: "Step closer into the light, setting your glass down on the marble", to: "interrogation-start" },
        { label: "Demand she surrender the drive and reveal who sent her", to: "interrogation-start" },
      ],
    },
    "interrogation-start": {
      chapter: 0,
      scene: "city-night",
      text: [
        "{B} takes three calm, deliberate steps into the penthouse. The click of her heels on the marble echoes in the cavernous room.",
        "\"Your security is good, {A},\" she says, her voice steady and laced with an intriguing, smoky calm. \"But I didn't come to steal from you. I came to warn you. The board is orchestrating a takeover, and they've hired people who play far dirtier than you do.\"",
        "She holds up the drive. \"Everything you need to crush them is on here.\"",
        "{A} narrows his eyes. He is used to extortion, manipulation, and power games; he has never encountered someone who holds his fate in her hand and offers it freely.",
      ],
      choices: [
        { label: "Close the distance and confront her motives inches from her face", to: "close-interrogation" },
      ],
    },
    "close-interrogation": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A} crosses the room with silent, predatory grace, stopping so close {B} can feel the radiant heat radiating from his chest. He towers over her, searching her eyes for deception.",
        "\"Nobody does anything for free in this city,\" {A} murmurs, his gaze dipping to her mouth before locking onto her dark irises. \"What is your price, {B}? Money? Power?\"",
        "{B} doesn't blink, doesn't retreat. Instead, she looks into the wounded, calculating soul behind his icy exterior. \"My price is your trust. A full partnership. No secrets, no ghosting, no fortress.\"",
        "{A} lets out a dark, breathless chuckle. \"You're asking for the only thing I cannot give.\"",
        "\"Then you've already lost,\" she whispers, stepping past him toward the lounge.",
      ],
      choices: [
        { label: "Follow her to the marble bar and analyze the encrypted files together", to: "desk-conspiracy" },
      ],
    },
    "desk-conspiracy": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "For three hours, the penthouse becomes a command war-room. Leaning over the wide ebony desk, their shoulders brushing with every motion, they dissect the plot against his empire.",
        "{A} watches her mind work—brilliant, incisive, anticipating every counter-move. For years, {A} had operated as a lone wolf, trusting only his own instincts.",
        "Now, watching her push hair behind her ear, eyes focused, he feels a terrifying sensation: a sudden, desperate urge to shield her from every danger in the world.",
        "Suddenly, the building's exterior power grid flickers and cuts out. The floor-to-ceiling glass falls into total darkness as the backup emergency candles automatically ignite.",
      ],
      choices: [
        { label: "Pull her behind the reinforced stone pillar into your protective embrace", to: "protective-hold" },
      ],
    },
    "protective-hold": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "Without thinking, {A}'s instinct takes over. He grabs {B} around the waist, pulling her securely behind the heavy black granite column, pressing his back against the stone while shielding her entire body with his own.",
        "Outside, thunder rumbles over the skyline. It was just a storm outage, not a raid.",
        "In the shadowed alcove, their breathing is loud and shallow. {B}'s hands rest against the muscular planes of {A}'s chest. She looks up, her face inches from his in the flickering candle glow.",
        "\"You protected me,\" {B} whispers softly, her fingers sliding up to touch the tension in his shoulder.",
        "\"I had to,\" {A}'s voice is rough, strained with emotions he has buried for a decade. \"If anything happened to you, this city wouldn't be big enough for the rage I would unleash.\"",
      ],
      choices: [
        { label: "Cup her jaw and let the hunger take control", to: "armor-cracks" },
      ],
    },
    "armor-cracks": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A}'s fingers tangle in her dark hair, his grip firm yet trembling with restraint. \"You walked into my life and tore down everything I built to keep people out.\"",
        "\"Good,\" {B} breathes, her lips brushing his chin as she speaks. \"You were suffocating behind those walls, {A}. Let me in.\"",
        "The dam breaks. {A}'s mouth captures hers with a possessive, devastating intensity. {B} lets out a soft, breathless gasp, her hands gripping his shoulders as he lifts her slightly, pressing her against the cool marble.",
        "The kiss is hungry, deep, and electric with months of pent-up tension. In the shadows of the candlelit penthouse, {A}'s legendary cold heart surrenders completely to her fire.",
      ],
      choices: [
        { label: "Carry her to the panoramic bedroom overlooking the rain", to: "bedroom-surrender" },
      ],
    },
    "bedroom-surrender": {
      chapter: 3,
      scene: "home",
      text: [
        "In the master suite, rain streams down the glass walls like silver curtains. The bed is turned down, illuminated only by the distant neon glow of the sleeping city.",
        "{A} undresses her with unhurried reverence, shedding his own armor along with his clothes. Every touch is a confession: fierce, tender, and deeply sacred.",
        "In the warmth of the sheets, {B} traces the scars on {A}'s back with gentle fingertips. He buries his face in her neck, holding her so securely that neither could ever be lost again.",
        "The cold, untouchable king has found his queen, and the throne will never be solitary again.",
      ],
      choices: [
        { label: "Wake up together at sunrise to crush the conspiracy as a team", to: "ending-united-victory" },
        { label: "Give her the private keys and access to your entire empire", to: "ending-empire-keys" },
        { label: "Whisper your unconditional surrender in the morning light", to: "ending-unconditional-defeat" },
      ],
    },
    "ending-united-victory": {
      chapter: 3,
      scene: "city-night",
      text: [
        "By 9 A.M., {A} and {B} walk side by side into the corporate boardroom. Dressed in matching immaculate tailored black, their presence is commanding and lethal.",
        "With {B}'s evidence and {A}'s power, the corrupt board members are dismantled in thirty minutes. As the defeated rivals exit the room, {A} turns to {B}, taking her hand in front of the entire company.",
        "\"Partners,\" {A} announces with a rare, devastating smile.",
        "\"Forever,\" {B} answers, her eyes shining with triumphant love.",
      ],
      ending: {
        id: "the-united-boardroom",
        title: "The United Boardroom",
        mood: "epic",
      },
    },
    "ending-empire-keys": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "Over morning espresso on the terrace, {A} places a heavy black titanium card on the table before {B}—unrestricted clearance to his private accounts, estates, and security networks.",
        "\"I swore I would never put my life in anyone's hands,\" {A} says softly, holding her gaze. \"Take it. It was meaningless until you were in it.\"",
        "{B} smiles, sliding her fingers into his across the table. \"I don't need your empire, {A}. I just need you.\"",
      ],
      ending: {
        id: "the-keys-to-the-empire",
        title: "The Keys to the Empire",
        mood: "sweet",
      },
    },
    "ending-unconditional-defeat": {
      chapter: 3,
      scene: "stars",
      text: [
        "Standing at the glass wall watching the clouds part to reveal a golden sunrise, {A} wraps his arms around {B} from behind, kissing her neck.",
        "\"I fought the whole world and won,\" {A} whispers against her ear. \"And you defeated me without firing a single shot.\"",
        "{B} turns in his arms, smiling up at him with endless adoration. \"It wasn't a defeat, my love. It was a liberation.\"",
      ],
      ending: {
        id: "the-sweet-liberation",
        title: "The Sweet Liberation",
        mood: "sweet",
      },
    },
  },
};
