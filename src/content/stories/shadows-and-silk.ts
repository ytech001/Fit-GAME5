import type { Story } from "./types";

export const shadowsAndSilk: Story = {
  id: "shadows-and-silk",
  title: "Shadows in the Velvet Room",
  tagline: "A gothic estate in the mist, dangerous secrets, an intense attraction that refuses to be tamed, and a vow sealed in the dark.",
  emoji: "🥀",
  category: "dark-romance",
  synopsis:
    "Behind the wrought-iron gates of a secluded coastal estate, a high-stakes midnight masquerade conceals a lethal game of betrayal. When {A}, a man haunted by a dangerous past, crosses paths with {B}, a woman whose sharp intellect and intoxicating presence disarm his every defense, mutual suspicion ignites into an all-consuming, fierce romance where choosing love means burning every bridge behind them.",
  estimatedMinutes: 20,
  palette: ["#020617", "#991b1b"],
  chapters: [
    "I. The Masquerade at Blackwood Manor",
    "II. The Library Behind the Tapestry",
    "III. Danger in the Shadows",
    "IV. A Surrender of Guarded Hearts",
    "V. Through the Fire Together",
  ],
  start: "masquerade-arrival",
  nodes: {
    "masquerade-arrival": {
      chapter: 0,
      scene: "manor",
      text: [
        "A heavy sea fog crawls across the jagged black cliffs surrounding Blackwood Manor, an imposing gothic estate of dark stone and towering arched windows. Rain taps against the leaded glass like nervous fingernails.",
        "Inside, the grand ballroom is a decadent labyrinth of black velvet, crystal chandeliers, and classical cello music. The guests wear filigree masks of silver and raven feathers, hiding identities behind practiced smiles and poisoned whispers.",
        "{A} stands in the shadows of the mezzanine, sharp eyes scanning the ballroom. Cloaked in tailored black, {A} carries the lethal grace of a man who has lived through wars and expects treachery from every corner.",
        "Then the double oak doors swing open. The chatter in the ballroom noticeably softens. {B} enters—wearing an emerald silk gown with a corseted waist and a delicate Venetian lace mask that conceals only her eyes, leaving her porcelain neck and sculpted collarbone breathtakingly exposed.",
      ],
      choices: [
        { label: "Step out from the shadows and intercept her by the grand marble staircase", to: "staircase-encounter" },
        { label: "Watch her movements from above, intrigued by her fearless poise", to: "observe-from-above" },
      ],
    },
    "observe-from-above": {
      chapter: 0,
      scene: "manor",
      text: [
        "{A} observes with narrow eyes as several wealthy suitors approach her; with a single razor-sharp smile and two icy words, {B} dismantles their arrogance and leaves them looking foolish.",
        "She is not a victim in this nest of vipers; she is a queen navigating a chessboard.",
        "Suddenly, {B} lifts her chin. As if feeling the burning intensity of {A}'s gaze through the mask, her eyes lock directly onto his across the crowded ballroom. A slow, knowing smirk curves her crimson lips.",
      ],
      choices: [
        { label: "Descend the stairs to meet her gaze directly", to: "staircase-encounter" },
      ],
    },
    "staircase-encounter": {
      chapter: 0,
      scene: "manor",
      text: [
        "{A} steps into her path at the foot of the sweeping staircase. The proximity is immediate and intoxicating; she smells of black orchids, rain, and expensive champagne.",
        "\"You shouldn't be here tonight,\" {A} murmurs in a voice low, gravelly, and laced with warning. \"This house is full of wolves, little bird.\"",
        "{B} tilts her head, stepping so close her silk skirt brushes against {A}'s trousers. She looks up through her dark lashes, completely fearless.",
        "\"And what makes you think I didn't come to hunt the wolves, mister?\" she whispers, her gaze tracing the sharp line of {A}'s jaw. \"Besides... you are the only dangerous thing in this room that actually interests me.\"",
      ],
      choices: [
        { label: "Take her gloved hand and lead her away from prying eyes", to: "hidden-library" },
        { label: "Warn her that getting close to you is playing with fire", to: "fire-warning" },
      ],
    },
    "fire-warning": {
      chapter: 0,
      scene: "manor",
      text: [
        "\"I don't play games, {B},\" {A} whispers, taking a half-step closer until his chest is inches from hers. \"Everyone who steps into my orbit either ends up compromised or burned to ash.\"",
        "{B}'s eyes darken with an intense, seductive challenge. \"Then let it burn. I've never been afraid of the dark, especially when the darkness looks at me the way you do.\"",
      ],
      choices: [
        { label: "Guide her through the secret corridor into the private library", to: "hidden-library" },
      ],
    },
    "hidden-library": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A} pulls aside a heavy velvet tapestry on the second floor, revealing a concealed oak door. Slipping through, they enter the manor's private library—a two-story cavern of leather-bound grimoires, a roaring stone hearth, and plush chesterfield sofas.",
        "{A} locks the heavy brass bolt with a solid click. The ballroom's distant violin music becomes a muffled hum.",
        "{B} slowly reaches behind her head and unknots the silk ribbons of her mask, letting it fall to the mahogany table. Her dark eyes are piercing, fierce, and entirely bare.",
        "\"Now,\" {B} breathes, stepping into the golden light of the crackling fireplace. \"No masks. What are you really doing here, {A}?\"",
      ],
      choices: [
        { label: "Reveal the truth of the dangerous syndicate you are dismantling", to: "reveal-truth" },
        { label: "Demand to know why she risked her life to enter Blackwood Manor tonight", to: "demand-motives" },
      ],
    },
    "demand-motives": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A} steps forward, trapping her gently between his body and the towering bookshelf, his arm braced against the dark mahogany. The tension between them crackles like a live wire.",
        "\"I ask the questions in this room,\" {A} whispers, gaze dropping to her parted lips before rising back to her defiant eyes. \"Who sent you?\"",
        "{B} doesn't flinch. Instead, she places a cool, bare hand flat against {A}'s chest, feeling the heavy, thunderous beat of his heart. \"Nobody sent me. I came for the ledger hidden in the host's safe—the one that contains the names of the people who framed my family.\"",
        "She looks into {A}'s soul: \"And the rumors said a ghost in black was coming to tear this house down tonight. I wanted to see if the ghost was real.\"",
      ],
      choices: [
        { label: "Realize you are fighting the same enemy—and surrender to the alliance", to: "reveal-truth" },
      ],
    },
    "reveal-truth": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A} stares at her, the rigid armor around his heart cracking under her unwavering gaze. \"We are hunting the same men. But once midnight strikes, their armed guards will lock the gates. We have twenty minutes before this room becomes an execution ground.\"",
        "{B} steps closer, her fingers sliding up {A}'s lapel, gripping the fabric. \"Then we work together. No secrets, no hesitation. But first...\"",
        "She pauses, breath hot against {A}'s throat. \"Promise me that if everything goes to hell tonight, you won't sacrifice yourself for me. We leave together, or neither of us does.\"",
        "{A}'s fingers tangle in the silk ribbons of her hair, pulling her face upward. \"I would burn down this entire continent before I let a single scratch touch you, {B}.\"",
      ],
      choices: [
        { label: "Infiltrate the host's private vault in the west wing", to: "vault-breakin" },
      ],
    },
    "vault-breakin": {
      chapter: 2,
      scene: "manor",
      text: [
        "They move through the shadows of the manor like twin phantoms. {A}'s tactical precision and {B}'s razor-sharp intuition make them an unstoppable unit.",
        "In the master study, {B} uses a customized decoding device to crack the biometric safe while {A} keeps watch at the double doors, silenced pistol ready in hand.",
        "A soft chime sounds. The heavy titanium door swings open, revealing the black ledger that contains every corrupt secret of Blackwood Manor.",
        "Suddenly, footsteps echo heavily in the corridor outside. Flashlights sweep beneath the door gap. The host's voice cuts through the silence: *'Check the study! Nobody leaves Blackwood alive!'*",
      ],
      choices: [
        { label: "Barricade the study door and trigger the manor's fire alarms", to: "escape-chaos" },
        { label: "Slip out through the rooftop storm terrace into the rain", to: "escape-rooftop" },
      ],
    },
    "escape-chaos": {
      chapter: 2,
      scene: "manor",
      text: [
        "{A} kicks a heavy oak armoire across the door frame, wedging it shut just as bullets splinter through the wood. He pulls the emergency fire valve, drenching the entire study in a deluge of pressurized water and setting off piercing alarms.",
        "{A} grabs {B}'s hand, pulling her toward the secret servants' staircase. Smoke and flashing red emergency lights disorient the guards as they sprint through the grand foyer.",
      ],
      choices: [
        { label: "Reach the cliffside boathouse where your speedboat waits", to: "boathouse-sanctuary" },
      ],
    },
    "escape-rooftop": {
      chapter: 2,
      scene: "rooftop",
      text: [
        "They kick open the French doors onto the rain-slicked slate terrace. Rain batters them mercilessly, soaking {B}'s emerald gown and plastering {A}'s hair to his forehead.",
        "Above the crashing waves below, {A} guides {B} across a narrow stone balustrade, shielding her body with his own as gunfire echoes behind them.",
        "With one daring leap onto the lower garden wall, they drop into the shadows of the cliffside gardens, vanishing into the midnight storm.",
      ],
      choices: [
        { label: "Reach the cliffside boathouse where your speedboat waits", to: "boathouse-sanctuary" },
      ],
    },
    "boathouse-sanctuary": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "Inside the secure stone boathouse carved directly into the cliff base, the heavy iron bolt locks into place. Outside, the storm rages against the rocky sea caves, but inside, they are completely safe.",
        "They are drenched, breathless, and trembling with adrenaline. The black ledger sits safely on a wooden barrel.",
        "{B} backs against the rough stone wall, chest heaving. Rain droplets trace paths down her throat, catching the amber light of a single storm lantern on the wall.",
        "{A} stands before her, towering and dark, his eyes burning with an intensity so raw and dangerous it makes her pulse roar in her ears.",
      ],
      choices: [
        { label: "Step into her space and trap her against the stone wall", to: "wall-confrontation" },
      ],
    },
    "wall-confrontation": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "{A} places both palms flat against the stone wall on either side of {B}'s head, caging her in his shadow. Their wet clothes cling to skin, their breaths mingling in hot, ragged gasps.",
        "\"You could have been killed tonight,\" {A} rumbles, his voice rough with suppressed fury and fierce possessiveness. \"Do you have any idea what it did to me, watching bullets fly near you?\"",
        "{B} tilts her chin up, her chest pressing against his with every breath. Her hands come up, gripping the wet lapels of his coat, pulling him down toward her lips.",
        "\"I wasn't afraid,\" she whispers, her gaze searing into his. \"Not for a single second. Because I knew you would protect me. And because I'm not letting you go, {A}. You're mine now.\"",
      ],
      choices: [
        { label: "Crash your lips onto hers in a fierce, breathless surrender", to: "passionate-surrender" },
      ],
    },
    "passionate-surrender": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "Every shred of restraint shatters. {A}'s mouth crashes down onto hers with fierce, intoxicating hunger. {B} lets out a soft, breathless gasp into his mouth, her arms winding tightly around his neck.",
        "The kiss is wild, possessive, and electric with months of denial. His hands grip her waist, lifting her effortlessly until her feet leave the stone floor, pressing her against the wall.",
        "They kiss as if the world is ending tomorrow, tasting of cold rain, salt, and fire. When they finally part for air, their foreheads rest together, their eyes locked in complete, mutual obsession.",
        "\"You ruined me, {B},\" {A} whispers against her swollen lips. \"I have never answered to anyone in my life. But I would kneel at your feet if you asked it.\"",
      ],
      choices: [
        { label: "Ignite the speedboat engine and escape into the dawn", to: "dawn-escape" },
      ],
    },
    "dawn-escape": {
      chapter: 4,
      scene: "island",
      text: [
        "Dawn breaks over the open ocean in hues of slate grey, lavender, and silver. Behind them, the towers of Blackwood Manor fade into the distant mist, their power permanently broken.",
        "Aboard the sleek yacht gliding across the calm morning swell, {B} sits on the sun deck wrapped in {A}'s dry cashmere sweater, holding a steaming mug of black coffee.",
        "{A} steps out from the helm, coming to stand behind her, wrapping his strong arms around her shoulders and resting his chin against her hair.",
        "The black ledger has been encrypted and sent to international authorities. Their old enemies are finished, but the road ahead is a blank map.",
      ],
      choices: [
        { label: "Offer her a life of luxury and freedom in a private Mediterranean hideaway", to: "ending-mediterranean" },
        { label: "Give her the black signet ring that marks her as your eternal equal", to: "ending-signet-ring" },
        { label: "Whisper your real name and the sacred vow of unconditional surrender", to: "ending-sacred-vow" },
      ],
    },
    "ending-mediterranean": {
      chapter: 4,
      scene: "island",
      text: [
        "\"I have a villa on a cliff in Amalfi,\" {A} murmurs into her ear, kissing the soft skin beneath her earlobe. \"High stone walls, olive groves, and no ghosts from our past. Come with me. Build an empire of our own.\"",
        "{B} turns in his embrace, wrapping her arms around his neck with a radiant, wicked smile. \"Only if you promise I get to run the empire, darling.\"",
        "\"The empire is already yours,\" {A} smiles, sealing their escape with a deep, triumphant kiss beneath the sunrise.",
      ],
      ending: {
        id: "amalfi-empire-escape",
        title: "The Amalfi Empire",
        mood: "epic",
      },
    },
    "ending-signet-ring": {
      chapter: 4,
      scene: "candlelight",
      text: [
        "{A} pulls a heavy platinum signet ring from his pinky finger—the heirloom of his lineage that carries absolute authority. He slides it onto {B}'s thumb.",
        "\"You are the only person on earth I trust with my life, my secrets, and my soul,\" {A} says with solemn reverence. \"We are partners in the dark, and sovereigns in the light.\"",
        "{B} looks at the heavy ring, then up into his eyes, her heart swelling with devotion. \"Until death, my love. And even after.\"",
      ],
      ending: {
        id: "sovereigns-in-the-dark",
        title: "Sovereigns of the Dark",
        mood: "epic",
      },
    },
    "ending-sacred-vow": {
      chapter: 4,
      scene: "stars",
      text: [
        "For the first time in ten years, {A} leans down and whispers his true birth name into her ear—the name no enemy or friend has ever heard.",
        "{B}'s eyes soften with tears of profound reverence. She frames his jaw with both hands, kissing him with a tenderness that washes away every scar of his past.",
        "\"I've got you now, {A},\" she whispers against his lips. \"You don't have to fight the world alone anymore. I am your fortress.\"",
        "Tangled together on the open sea beneath the emerging sun, their dark world finds its eternal, golden dawn.",
      ],
      ending: {
        id: "vow-in-the-dawn",
        title: "The Vow in the Dawn",
        mood: "sweet",
      },
    },
  },
};
