import type { Story } from "./types";

export const lanternRealm: Story = {
  id: "lantern-realm",
  title: "The Lantern Realm",
  tagline: "A door in an ancient baobab, an ocean of floating islands, and a quest of eternal devotion.",
  emoji: "🏮",
  category: "adventure-fantasy",
  synopsis:
    "When a sudden storm drives {A} and {B} toward an ancient baobab, they discover a carved brass door that opens into a magical realm floating among the clouds. To restore the fading sky lanterns that protect this world, the two lovers must navigate fantastical sky markets, face the dragon of forgotten promises, and learn what their love is truly made of.",
  estimatedMinutes: 15,
  palette: ["#e2bd78", "#4b3fa8"],
  chapters: [
    "I. The Door in the Baobab",
    "II. The Sky Market Across the Whales",
    "III. The Garden of Unlived Memories",
    "IV. The Heart of the Eternal Lantern",
  ],
  start: "start",
  nodes: {
    start: {
      chapter: 0,
      scene: "forest",
      text: [
        "A sudden tropical deluge catches {A} and {B} on the edge of the savannah, lightning splintering across purple thunderclouds. Soaked and laughing, they dash beneath the shelter of a colossal baobab tree whose roots form arching wooden caves.",
        "As {A} gently wrings the rainwater from {B}'s jacket, a faint harmonic vibration travels through the wood. Trees do not hum—and yet the trunk vibrates like a plucked cello string.",
        "Deep within the silvery bark, where a moment ago there was only moss, a round archway shimmers into existence. Mounted in its center is a polished brass handle forged in the shape of two hands clasped in an unbroken vow.",
        "From the keyhole, a warm golden light spills across their feet, accompanied by the distant, enchanting sound of silver chimes.",
      ],
      choices: [
        { label: "Turn the brass clasp together, fingers intertwined", to: "open-together" },
        { label: "Knock three polite times upon the ancient wood", to: "knock-politely" },
      ],
    },
    "knock-politely": {
      chapter: 0,
      scene: "forest",
      text: [
        "{A} steps forward and knocks three crisp times. For a heartbeat, the wind holds its breath.",
        "With a soft click, the door swings inward an inch. An enormous tortoise wearing tiny golden spectacles and a velvet waistcoat peers out. \"Well, well,\" he murmurs in a voice like rustling dry leaves. \"Call me Old Shell. Mortals haven't knocked on my door in four centuries. Most simply kick it down.\"",
        "The tortoise looks closely at {A} and {B}, his ancient eyes twinkling. \"Before you enter the Sky Archipelago, you must answer one riddle: What is heavier than iron, lighter than a feather, and only exists when two hearts share it in the dark?\"",
      ],
      choices: [
        { label: "\"A sacred vow.\"", to: "riddle-vow" },
        { label: "\"The courage to love someone completely.\"", to: "riddle-courage" },
      ],
    },
    "riddle-vow": {
      chapter: 0,
      scene: "forest",
      text: [
        "Old Shell nods slowly, an appreciative smile wrinkling his ancient face. \"Precisely. A vow made freely carries the weight of kingdoms, yet lifts the soul toward the clouds.\"",
        "He reaches into his velvet pocket and presents {A} and {B} with a pair of delicate amber glass talismans. \"Take these. In the realm above, the shadows are hungry for broken promises. Keep your light close.\"",
        "The tortoise steps aside. Beyond the threshold, the laws of gravity dissolve into pure starlight.",
      ],
      choices: [
        { label: "Step through the portal hand in hand", to: "sky-ascent" },
      ],
    },
    "riddle-courage": {
      chapter: 0,
      scene: "forest",
      text: [
        "Old Shell stands silent for several seconds, his spectacles sliding slightly down his nose. \"That is far deeper than the answer written in my ancient ledger,\" he whispers, genuinely moved.",
        "\"The courage to be vulnerable, to lay down your armor before another human being... that is the greatest magic of all.\"",
        "He blesses them with a gentle touch upon their joined hands, and the brass door swings wide open to reveal a staircase made of spun moonbeams.",
      ],
      choices: [
        { label: "Step through the portal hand in hand", to: "sky-ascent" },
      ],
    },
    "open-together": {
      chapter: 0,
      scene: "sky",
      text: [
        "Together, {A} and {B} take the brass hands and turn them with a shared breath. The ancient wood yields with a golden sigh, and a rush of warm, jasmine-scented air pulls them gently across the threshold.",
        "They do not fall; they float upwards like autumn leaves caught in a sunlit updraft.",
      ],
      choices: [
        { label: "Look out across the floating islands", to: "sky-ascent" },
      ],
    },
    "sky-ascent": {
      chapter: 0,
      scene: "sky",
      text: [
        "They emerge into an impossible, breathtaking world. Floating islands drift gently over an endless sea of lavender mist, tethered to one another by bridges of woven starlight.",
        "Above them, tens of thousands of glowing lanterns float in slow, majestic constellations. But as {B} watches closely, a shadow ripples across the sky: dozens of lanterns flicker and dim to ash.",
        "Descending from a floating palace of white marble comes a winged figure glowing with radiant warmth—the Lantern Queen. Her gown is woven of twilight silk, and her crown is a ring of dancing fireflies.",
        "\"Welcome, travelers of the mortal earth,\" she says, her voice echoing like a crystal glass. \"Our realm is illuminated only by genuine devotion and kindness. But the shadow of forgetfulness is creeping in. The Great Lantern at our realm's core is freezing. Will you brave the journey to rekindle it?\"",
      ],
      choices: [
        { label: "\"We will stand with you. What must we gather?\"", to: "queen-instructions" },
        { label: "\"Only if we face every trial together, side by side.\"", to: "queen-devotion" },
      ],
    },
    "queen-devotion": {
      chapter: 0,
      scene: "sky",
      text: [
        "The Queen smiles, and twenty nearby lanterns flare back to brilliant life in response to {A}'s fierce loyalty.",
        "\"It is only together that you could ever hope to survive the heart of this realm,\" the Queen acknowledges. \"A solitary traveler would be swallowed by the cold. Your bond is the catalyst.\"",
      ],
      choices: [
        { label: "Receive the Vessel of Starlight", to: "queen-instructions" },
      ],
    },
    "queen-instructions": {
      chapter: 0,
      scene: "sky",
      text: [
        "The Queen hands {B} a blown-glass amphora that hums with quiet potential. \"This is the Vessel of True Radiance. To re-ignite the Great Lantern, it must be filled with three essences: a song sung from the soul, an unburdened memory of love, and an offering of ultimate trust.\"",
        "\"First, journey to the Sky Market across the three great leviathans. Seek the Weaver of Melodies.\"",
        "She points her scepter toward the east, where the silhouettes of three gigantic flying whales glide through the violet clouds.",
      ],
      choices: [
        { label: "Set forth toward the Sky Market", to: "sky-market" },
      ],
    },
    "sky-market": {
      chapter: 1,
      scene: "market",
      text: [
        "The Sky Market is an explosion of color, music, and wonder perched across the moss-covered backs of three benevolent flying whales. Stalls with striped silk canopies offer bottled starlight, candied clouds, and compasses that point directly toward whoever you are missing most.",
        "{A} and {B} weave through crowds of friendly creatures: blue-feathered bards, clockwork owls, and traveling star-nomads.",
        "At the center of the middle whale stands the Weaver of Melodies—an elegant grey heron in embroidered robes who listens to the heartbeats of visitors using a silver tuning fork.",
        "\"To fill your vessel with song,\" the Heron declares, \"you cannot offer rehearsed vanity. You must sing something raw, honest, and shared between only the two of you.\"",
      ],
      choices: [
        { label: "Sing the slow melody you both whisper in each other's arms at night", to: "sing-slow-romance" },
        { label: "Perform your silly, private inside-joke song that always makes {B} laugh", to: "sing-playful-laugh" },
      ],
    },
    "sing-slow-romance": {
      chapter: 1,
      scene: "market",
      text: [
        "{A} takes {B}'s hands, drawing them close until their foreheads touch. Under the gaze of the crowded market, {A} begins to hum the sweet acoustic ballad that played on their very first quiet evening together.",
        "{B}'s eyes soften, and their voice joins in—sweet, velvet, harmonizing effortlessly with {A}'s lower timbre.",
        "As their voices rise, the glass amphora begins to glow with an intense, warm rose-gold light. The crowd falls completely silent; a little fox merchant dabs a tear from her furry cheek.",
        "The Heron bows deeply. \"The melody of two souls bound in unconditional tenderness. The first essence is sealed.\"",
      ],
      choices: [
        { label: "Journey onward toward the Garden of Memories", to: "garden-entrance" },
      ],
    },
    "sing-playful-laugh": {
      chapter: 1,
      scene: "market",
      text: [
        "{B} catches {A}'s eye with a mischievous grin and starts chanting the ridiculous rhyming song they made up while stuck in traffic on Third Mainland Bridge.",
        "{A} bursts out laughing, but immediately joins in on the chorus, complete with exaggerated hand gestures and dramatic vocal vibrato.",
        "The pure, unrestrained joy between them is infectious. Merchants begin clapping to the beat, fairy lights flash, and a flock of baby sparrows swoops in circles around them in celebration.",
        "The vessel erupts with sparkling golden sunshine! The Heron chuckles warmly: \"Laughter born of deep affection is the purest music in any world. The first essence is yours.\"",
      ],
      choices: [
        { label: "Journey onward toward the Garden of Memories", to: "garden-entrance" },
      ],
    },
    "garden-entrance": {
      chapter: 2,
      scene: "forest",
      text: [
        "Leaving the leviathans behind, they cross a rope bridge of woven vines onto an isolated island suspended within a ring of luminous mist: the Garden of Unlived Memories.",
        "Here, crystalline flowers with petals of spun glass bloom upon silver trees. Each blossom does not reflect sunlight; it reflects glimpses of human lives.",
        "As {A} and {B} walk along the mossy path, flowers open on either side. In one blossom, they see themselves on the day they first met—nervous, smiling shyly, hearts pounding behind cautious ribs.",
        "In another blossom, they see a rainy Sunday morning in their apartment: messy hair, warm tea mugs, and quiet kisses.",
      ],
      choices: [
        { label: "Reach for a brilliant sapphire flower glowing in the garden's center", to: "future-vision" },
        { label: "Share a private, intimate reflection on how far you've come together", to: "past-gratitude" },
      ],
    },
    "past-gratitude": {
      chapter: 2,
      scene: "stars",
      text: [
        "{A} stops beside a quiet pool of starlit water, turning {B} to face them. \"Look at all those memories. We started with nothing but hope and a nervous smile, {B}. Now, there is no version of my world where you aren't the center.\"",
        "{B} touches {A}'s jaw, their thumb brushing gently across their cheekbone. \"Every storm we survived made us softer to each other, not harder. That's why we're here.\"",
        "From their joined touch, a brilliant silver tear of gratitude falls into the vessel. The glass fills half-way with shimmering liquid moonlight.",
      ],
      choices: [
        { label: "Look into the deepest blossom: the future that awaits you both", to: "future-vision" },
      ],
    },
    "future-vision": {
      chapter: 2,
      scene: "stars",
      text: [
        "In the center of the garden, an enormous crystalline lotus unfurls. Inside its petals is an unlived memory: a future still waiting to be written.",
        "They see themselves decades from now. Their hair is touched with silver, their hands are weathered by time, and they sit on a porch overlooking a sunset sea, still holding hands with the exact same fierce tenderness.",
        "A quiet gasp escapes {B}'s lips. Tears of profound emotion fill their eyes. \"Look at us, {A}. We stayed. We kept choosing each other.\"",
        "{A} wraps their arms around {B} from behind, kissing their neck. \"Every single day. I will choose you until the stars burn out.\"",
        "The vessel flares with radiant, blinding warmth. The second essence is complete.",
      ],
      choices: [
        { label: "Advance into the shadowy Citadel of the Great Lantern", to: "citadel-approach" },
      ],
    },
    "citadel-approach": {
      chapter: 3,
      scene: "dragon",
      text: [
        "At the summit of the floating archipelago stands the Citadel of the Great Lantern. Unlike the beauty of the gardens, the citadel is cold, desolate, and shrouded in howling black fog.",
        "In the center of the grand rotunda hangs the Great Lantern—a cage of iron the size of a cathedral, completely frozen in blue permafrost.",
        "Coiled protectively around the frozen lantern is an immense dragon whose scales are formed of obsidian shadows and jagged ice. Its eyes are smoldering coals of sorrow.",
        "\"Turn back, mortal wanderers,\" the dragon's voice thunders, vibrating the cold stone beneath their boots. \"This lantern went cold because lovers make promises they cannot keep. They swear forever, and then they leave. Why rekindle a flame that only burns with deception?\"",
      ],
      choices: [
        { label: "Step forward and offer your own heart's vulnerabilities to the beast", to: "dragon-truth" },
        { label: "Raise the vessel and ignite the chamber with unconditional light", to: "dragon-confront" },
        { label: "Sit down at the dragon's massive claws and listen to its ancient grief", to: "dragon-sanctuary" },
      ],
    },
    "dragon-truth": {
      chapter: 3,
      scene: "dragon",
      text: [
        "{A} takes {B}'s hand and takes three fearless steps forward into the freezing aura of the beast. \"You're right about one thing: people fail, people stumble, and fear makes mortals cruel.\"",
        "{B} steps forward beside {A}, their gaze unbroken. \"But love is not the absence of mistakes, dragon. Love is the decision to stay in the room when it's hard. Love is forgiving, returning, and fighting for each other every dawn.\"",
        "The dragon blinks in stunned silence. For the first time in millennia, an answer without pride or defiance is offered to its pain.",
        "Slowly, the icy frost around the dragon's obsidian chest begins to melt into glowing golden dew.",
      ],
      choices: [
        { label: "Pour the Vessel of Starlight into the Great Lantern", to: "ending-rekindle" },
      ],
    },
    "dragon-confront": {
      chapter: 3,
      scene: "castle",
      text: [
        "{A} and {B} lift the Vessel together, pressing their palms against the glass. Channelling every memory of their bond—their laughter, their quiet mornings, their fierce devotion—they release the stored light.",
        "A shockwave of golden sunrise erupts across the citadel! The shadow mist is vaporized in an instant, and the dragon roars as its obsidian scales are transformed into gleaming, radiant gold.",
        "The Great Lantern catches fire with a roar of pure warmth, sending millions of brilliant lanterns cascading across the sky like fireworks over the archipelago.",
      ],
      choices: [
        { label: "Witness the coronation of the Lantern-Bearers", to: "ending-bearers" },
      ],
    },
    "dragon-sanctuary": {
      chapter: 3,
      scene: "stars",
      text: [
        "{A} and {B} sit down on the cold floor directly before the dragon's face, completely defenseless. {B} reaches out and gently places a warm palm against the dragon's icy snout.",
        "\"Who hurt you so deeply that you thought darkness was safer?\" {B} whispers softly.",
        "The beast shivers. A single colossal tear of ice falls from its eye and shatters. \"I was the guardian of the first lovers... and when they parted, they forgot I was still waiting.\"",
        "{A} smiles gently. \"You will never wait alone again. Come with us to the light.\"",
      ],
      choices: [
        { label: "Invite the dragon to become the eternal wick of the Great Lantern", to: "ending-sanctuary" },
      ],
    },
    "ending-bearers": {
      chapter: 3,
      scene: "sky",
      text: [
        "The Lantern Queen appears in a corona of glory, surrounded by thousands of rejoicing sky denizens. The Great Lantern blazes with eternal dawn, casting away every cold shadow from the archipelago.",
        "She places crowns of spun golden starlight upon {A} and {B}. \"You did not just save our realm; you proved that true devotion is an indomitable fortress against time.\"",
        "When they step back through the baobab tree onto the mortal earth, the rain has cleared, revealing a night sky blazing with more stars than they have ever seen.",
        "In their coat pockets, they each find a tiny lantern that glows whenever the other thinks of them—and both are burning with infinite, blinding brightness.",
      ],
      ending: {
        id: "lantern-bearers-epic",
        title: "The Eternal Lantern-Bearers",
        mood: "epic",
      },
    },
    "ending-sanctuary": {
      chapter: 3,
      scene: "stars",
      text: [
        "The dragon coils gently around the Great Lantern, not as an angry jailor, but as its warm, protective guardian. As the vessel's light enters the cage, the dragon begins to purr—a deep, resonant sound that reverberates peace across all the floating islands.",
        "{A} and {B} stand on the edge of the terrace, watching the sky bloom with ten thousand golden lanterns. {B} leans into {A}'s chest, arms wrapped tight around their waist.",
        "\"We saved a whole world today,\" {B} whispers with a quiet, blissful smile.",
        "\"We saved each other first,\" {A} replies, turning {B}'s chin upward to seal their adventure with a slow, tender kiss beneath the celestial lights.",
      ],
      ending: {
        id: "dragon-sanctuary-sweet",
        title: "The Dragon's Sanctuary",
        mood: "sweet",
      },
    },
    "ending-rekindle": {
      chapter: 3,
      scene: "balcony",
      text: [
        "The light from the vessel surges into the Great Lantern. As the flame ignites, the dragon dissolves into millions of golden butterflies that swirl in a whirlwind around {A} and {B}.",
        "The doorway back to the mortal world appears, glowing softly beneath an archway of starlight roses. The Queen hands them two matching rings forged from the lantern's pure flame.",
        "\"Wear these in your world,\" she whispers. \"May they remind you that the greatest adventures are not found in distant skies, but in the hands you hold each night.\"",
        "Stepping back onto the earth, {A} pulls {B} into a breathless embrace. The storm has passed, and their love has conquered realms.",
      ],
      ending: {
        id: "flame-of-two-worlds",
        title: "The Flame of Two Worlds",
        mood: "sweet",
      },
    },
  },
};
