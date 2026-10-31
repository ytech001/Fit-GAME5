import type { Story } from "./types";

export const thirdMainland: Story = {
  id: "third-mainland",
  title: "Third Mainland Hearts",
  tagline: "Two strangers, one yellow danfo, broken engines, and a city that refuses to stop beating.",
  emoji: "🌆",
  category: "our-love",
  synopsis:
    "Rush hour at Obalende is a whirlwind of hawkers and blaring horns. When {A} lunges to save {B}'s towering cake box in a crowded bus, a finger lands in the red velvet frosting—sparking a serendipitous journey across Third Mainland Bridge, an island pop-up stall, and a romance as resilient as Lagos itself.",
  estimatedMinutes: 14,
  palette: ["#f08a5d", "#6f63d9"],
  chapters: [
    "I. The Danfo & The Red Velvet",
    "II. Sunset on the Long Bridge",
    "III. The Mango Tree Pop-Up",
    "IV. Midnight by the Lagoon",
  ],
  start: "start",
  nodes: {
    start: {
      chapter: 0,
      scene: "city-night",
      text: [
        "Obalende at six on a Friday evening is a symphony of raw, electric human energy. Yellow danfo buses roar in plumes of diesel, hawkers balance towering glass trays of plantain chips on their heads, and conductors lean half out of sliding doors shouting: *'Lekki-Ajah straight! One chance enter with your fifty naira change!'*",
        "{A} squeezes through the clamoring crowd and grabs the last open seat on a bus heading to the Island. The seat is beside {B}, who is sitting with rigid posture, guarding an enormous white pastry box tied with a satin rose-gold ribbon as if it contains the crown jewels.",
        "Without warning, a reckless okada cuts in front of the bus. The driver slams the brakes with a screech that shakes the chassis. The danfo lurches forward violently—and the cake box slips from {B}'s hands, tumbling straight toward the grimy floor!",
      ],
      choices: [
        { label: "Dive forward with both hands and catch the box in midair", to: "catch-box" },
        { label: "Shield {B} with your arm and steady the box against your chest", to: "shield-box" },
      ],
    },
    "catch-box": {
      chapter: 0,
      scene: "city-night",
      text: [
        "{A} reacts with lightning reflexes, scooping both hands beneath the falling box just inches before impact. But momentum carries {A}'s right thumb straight through the decorative cardboard opening—landing squarely into a swirl of velvety cream cheese frosting.",
        "{B} freezes, eyes wide. For three unbearable seconds, silence hangs between them. Then, looking at {A}'s bewildered face and frosting-coated thumb, {B} bursts into a laugh so bright and musical that half the passengers turn around to smile.",
        "\"That was a signature Red Velvet with vanilla bean cream you just fingerprinted!\" {B} laughs, reaching into a tote bag to produce a packet of wipes and a warm, golden puff-puff from a paper bag. \"Here—hazard compensation for our emergency rescue officer.\"",
      ],
      choices: [
        { label: "Lick the frosting off your thumb with a playful grin and accept the puff-puff", to: "danfo-banter" },
        { label: "Wipe your hand and ask what grand occasion requires such an elaborate cake", to: "danfo-banter" },
      ],
    },
    "shield-box": {
      chapter: 0,
      scene: "city-night",
      text: [
        "{A} throws an arm around the box and braces against the front seat, trapping the pastry safely against {B}'s lap while cushioning them from the sudden jolt.",
        "{B} lets out a long breath of relief, clutching the box tight. \"Oh thank heaven! If that cake fell, my entire career would have been cancelled before it even started.\"",
        "\"My reflexes are at your service,\" {A} grins, checking that {B} is unharmed. \"What is inside this top-secret package that requires presidential-level protection?\"",
      ],
      choices: [
        { label: "Listen to the story of {B}'s big dream pop-up stall", to: "danfo-banter" },
      ],
    },
    "danfo-banter": {
      chapter: 0,
      scene: "city-night",
      text: [
        "\"I'm a baker,\" {B} explains, their cheeks flushed with excitement and nervous adrenaline. \"Tonight is my very first solo dessert pop-up at a night market in Victoria Island. Six tables, fairy lights, and twelve cakes baked from my late grandmother's secret recipes.\"",
        "{B}'s hands tremble slightly as they adjust the ribbon. \"I've been preparing for this for six months. I feel like my heart is running a marathon.\"",
        "{A} looks at {B}—the passion burning in their eyes, the flour smudge on the cuff of their denim jacket, the earnest vulnerability in their voice. A spark ignites between them that has nothing to do with Lagos traffic.",
        "\"You're going to amaze them,\" {A} says softly, with a certainty that catches {B} off guard.",
      ],
      choices: [
        { label: "The engine sputters: prepare for the Long Bridge surprise", to: "bridge-breakdown" },
      ],
    },
    "bridge-breakdown": {
      chapter: 1,
      scene: "bridge",
      text: [
        "Right in the center of Third Mainland Bridge, surrounded by miles of shimmering lagoon water, the bus engine gives one long, shuddering metallic sigh and dies completely.",
        "The driver pumps the pedal. Silence. The conductor slaps the dashboard. Nothing. A collective groan rises from the passengers: *'Ah! Danfo don cast!'*",
        "Outside, the evening sky is transforming into a blazing canvas of liquid gold, fiery orange, and deep purple. The cool sea breeze sweeps through the open windows, smelling of salty water and freedom.",
        "{B} checks their watch with a quiet gasp of panic: \"The market opens in an hour!\"",
      ],
      choices: [
        { label: "\"Come on—let's step outside and walk the bridge together\"", to: "bridge-walk" },
        { label: "\"Don't worry, I'm calling an island dispatch ride right now\"", to: "dispatch-ride" },
      ],
    },
    "bridge-walk": {
      chapter: 1,
      scene: "bridge",
      text: [
        "They step out of the stalled bus onto the pedestrian walk of the bridge. Above them, seagulls swoop through the glowing golden hour; below, local fishing canoes glide silently across water that looks like melted bronze.",
        "{A} takes the heaviest boxes from {B}, carrying them with ease. As they walk side by side along the endless bridge, the noise of the traffic jams fades into a distant hum.",
        "They start talking—really talking. About where they grew up, the songs that make them cry, the ambitions that keep them awake at night. {B} tells {A} about wanting to open a real storefront with blue French doors; {A} shares a secret goal they've never told another living soul.",
        "{B} pauses by the railing, the golden sunset illuminating their face like an angel in a painting. \"I'm glad the bus broke down,\" {B} whispers softly.",
      ],
      choices: [
        { label: "Take a sunset portrait together with the lagoon behind you", to: "bridge-photo" },
        { label: "Look into {B}'s eyes and tell them they look breathtaking", to: "bridge-compliment" },
      ],
    },
    "dispatch-ride": {
      chapter: 1,
      scene: "bridge",
      text: [
        "Within ten minutes, {A} manages to hail a friendly private van whose driver agrees to take them straight across the bridge to Victoria Island.",
        "Inside the air-conditioned van, the atmosphere is quiet and intimate. As the bridge glides past the window, {B} leans over and offers {A} a taste of a homemade passionfruit tart from a small container.",
        "\"Open your mouth,\" {B} commands playfully.",
        "The pastry is crisp, sweet, and bursting with citrus warmth. As {A} closes their eyes in genuine delight, {B} smiles with deep pride, their knee brushing against {A}'s in the quiet backseat.",
      ],
      choices: [
        { label: "Arrive at the night market in Victoria Island", to: "market-arrival" },
      ],
    },
    "bridge-photo": {
      chapter: 1,
      scene: "bridge",
      text: [
        "{A} pulls out their phone. They lean in shoulder to shoulder, {B}'s soft curls brushing against {A}'s cheek, smiling into the lens with the vast, glorious lagoon glowing behind them.",
        "In that photo, they don't look like two strangers who met forty minutes ago. They look like two people who have been searching for each other their entire lives.",
      ],
      choices: [
        { label: "Catch a ride to the Victoria Island night market", to: "market-arrival" },
      ],
    },
    "bridge-compliment": {
      chapter: 1,
      scene: "bridge",
      text: [
        "{A} stops, turning to face {B}. \"The sunset is fighting for second place right now. You are stunning, {B}.\"",
        "{B}'s breath catches. A flush of pink creeps across their cheekbones, and for a moment, neither of them moves. The wind ruffles their clothes, and the space between their hands feels electric.",
      ],
      choices: [
        { label: "Walk on together with intertwined fingers", to: "market-arrival" },
      ],
    },
    "market-arrival": {
      chapter: 2,
      scene: "market",
      text: [
        "They arrive at the outdoor night market in Victoria Island just as twilight deepens to indigo. The market is nestled beneath ancient mango trees strung with hundreds of warm Edison fairy lights.",
        "Live jazz guitar floats through the warm air, and crowds of chic Lagosians are already strolling along the paved pathways.",
        "When they reach {B}'s assigned corner, {B} gasps in horror: the display table is bare, the fairy lights are a tangled nest on the ground, and the chalkboard menu is blank. \"My assistant had an emergency and couldn't make it! How am I going to do this alone?\"",
        "{A} calmly rolls up their sleeves with a confident grin. \"Who said you're alone? You have your Chief Operations Officer right here.\"",
      ],
      choices: [
        { label: "Untangle the lights and set up the cake display with artistic flair", to: "market-setup" },
        { label: "Grab the chalk and write poetic, mouthwatering descriptions for every cake", to: "market-setup" },
      ],
    },
    "market-setup": {
      chapter: 2,
      scene: "market",
      text: [
        "For thirty minutes, they move in complete harmony. {A} untangles the warm lights and drapes them around the wooden canopy, while {B} arranges the cakes on tiered ceramic stands.",
        "{A} writes the menu board in bold lettering: *'Grandma's Secret Recipes — Baked with Love & A Pinch of Lagos Magic.'*",
        "When the clock strikes eight, the stall looks like a dream from a storybook. The red velvet cake with {A}'s thumbprint is christened the *'Hero's Velvet'*, and within ten minutes, a line of eager customers begins to form.",
        "Throughout the evening, {A} handles the box-tying and payments while {B} serves slices with radiant, glowing charm. Every time their hands brush while exchanging boxes, a jolt of warmth shoots through them.",
      ],
      choices: [
        { label: "Celebrate the final sold-out cake as the market winds down", to: "market-success" },
      ],
    },
    "market-success": {
      chapter: 2,
      scene: "market",
      text: [
        "By 11:30 P.M., every single crumb has been sold. The cake platters are clean, and {B}'s cash box and digital transfers are overflowing.",
        "{B} stands behind the empty counter, exhausted, glowing, and looking at {A} with an expression of pure, unadulterated gratitude.",
        "\"I couldn't have done this without you,\" {B} says, stepping out from behind the stall. \"You turned what could have been a disaster into the best night of my life.\"",
        "\"I just wanted to see you shine,\" {A} replies honestly. \"And you outshone the whole city.\"",
      ],
      choices: [
        { label: "Escape to the quiet waterfront promenade for midnight air", to: "lagoon-midnight" },
      ],
    },
    "lagoon-midnight": {
      chapter: 3,
      scene: "city-night",
      text: [
        "With the stall packed away, they walk out toward the quiet waterfront promenade overlooking the calm waters of Five Cowries Creek.",
        "The city's skyscrapers shimmer in shades of amber and neon across the water. A cool midnight breeze rustles the palms, and the only sound is the gentle lap of the tide against the seawall.",
        "They sit on a stone bench under a lamppost, sharing the very last single slice of Red Velvet cake with two wooden forks.",
        "{B} takes a bite, then looks at {A}. \"You know... at Obalende, when you caught that box, I thought you were just a kind stranger. Now I don't think you're a stranger at all.\"",
      ],
      choices: [
        { label: "Take {B}'s hand and ask to see them again tomorrow", to: "ending-tomorrow" },
        { label: "Lean in and kiss {B} beneath the city lights", to: "ending-first-kiss" },
        { label: "Make a pinky promise to be each other's forever teammate", to: "ending-teammates" },
      ],
    },
    "ending-tomorrow": {
      chapter: 3,
      scene: "city-night",
      text: [
        "{A} takes {B}'s hand, lacing their fingers together. \"I don't believe in coincidences anymore, {B}. Danfo breakdown, Third Mainland sunset, mango trees... I was meant to find you today.\"",
        "{B} smiles, leaning their head against {A}'s shoulder. \"So what happens next?\"",
        "\"Tomorrow morning. Breakfast. I'll pick you up, and this time, no broken buses—just you and me.\"",
        "\"Deal,\" {B} whispers softly. \"You have a date with the baker every day from now on.\"",
      ],
      ending: {
        id: "date-with-the-baker",
        title: "A Date with the Baker",
        mood: "sweet",
      },
    },
    "ending-first-kiss": {
      chapter: 3,
      scene: "city-night",
      text: [
        "{A} sets the cake container down, turns to {B}, and gently cradles their face with both hands. {B}'s eyes flutter shut in quiet anticipation.",
        "When their lips meet, the entire bustling city of twenty million people disappears into pure, breathless silence. The kiss is sweet, slow, and filled with the promise of everything yet to come.",
        "When they finally part, {B} rests their forehead against {A}'s, laughing softly against their lips. \"Best red velvet frosting ever.\"",
        "\"The best everything,\" {A} whispers back, holding {B} tight against the night breeze.",
      ],
      ending: {
        id: "midnight-creek-kiss",
        title: "Midnight on Five Cowries Creek",
        mood: "sweet",
      },
    },
    "ending-teammates": {
      chapter: 3,
      scene: "stars",
      text: [
        "{B} holds up their pinky finger with a playful, solemn look. \"Promise me that whenever one of our cakes falls, the other will always be there to catch it.\"",
        "{A} links their pinky firmly around {B}'s, pulling their hands to their chest. \"I promise. In traffic, in success, in storms, and in peace. We are a team now.\"",
        "They sit together under the stars until 2 A.M., planning recipes, sharing dreams, and knowing with absolute certainty that their story had just begun.",
      ],
      ending: {
        id: "unbreakable-team",
        title: "The Unbreakable Team",
        mood: "sweet",
      },
    },
  },
};
