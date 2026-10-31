import type { Story } from "./types";

export const cityAfterMidnight: Story = {
  id: "city-after-midnight",
  title: "Neon Rain & Midnight Highway",
  tagline: "Empty expressways, windows down, warm dashboard glow, and hand in hand across the sleeping city.",
  emoji: "🌃",
  category: "just-you-and-me",
  synopsis:
    "When neither can sleep on a warm Saturday midnight, {A} grabs the car keys with a devilish grin. With {B} riding shotgun, windows rolled down to the fragrant petrichor air, and retro synth-pop reverberating through the cabin, they embark on an unscripted night drive that leads to secret confessions above the city lights.",
  estimatedMinutes: 15,
  palette: ["#09090b", "#06b6d4"],
  chapters: [
    "I. The Midnight Impulse",
    "II. The Tollgate & The Rain",
    "III. Stop on the Cable Bridge",
    "IV. 3 A.M. Coffee & Forever",
  ],
  start: "car-keys",
  nodes: {
    "car-keys": {
      chapter: 0,
      scene: "city-night",
      text: [
        "It is 12:45 A.M. The apartment is bathed in dim blue television glow. Both {A} and {B} are lying upside down on the sofa, pillows strewn across the rug, trying in vain to fall asleep.",
        "A sudden rumble of distant thunder vibrates the balcony glass. The smell of fresh rain against hot asphalt drifts through the balcony door.",
        "{A} sits up, looks at {B}, and jingles the car keys with an eyebrow arched in unspoken mischief. \"Put your sneakers on. We're going for a drive.\"",
        "{B} smiles slowly, eyes flashing with instant excitement. \"At one in the morning? In the rain?\"",
        "\"Especially at one in the morning. Especially in the rain.\"",
      ],
      choices: [
        { label: "Grab your oversized denim jacket and sprint to the elevator", to: "car-cabin" },
        { label: "Steal two mugs of hot cocoa in travel flasks before heading out", to: "car-cabin" },
      ],
    },
    "car-cabin": {
      chapter: 0,
      scene: "city-night",
      text: [
        "Inside the car, the world shrinks to an intimate capsule of comfort. The dashboard glows in amber and cyan; the climate control hums a warm, gentle breeze.",
        "{B} plugs their phone into the aux cord. The first chords of a dreamy R&B ballad fill the speakers, accompanied by the hypnotic thrum of windshield wipers clearing rhythmic arcs of water.",
        "{A} shifts into gear and glides out of the gated estate onto the wide, empty expressway. The city is unrecognizable at this hour—no traffic jams, no blaring horns, just glistening asphalt stretching beneath towering streetlamps like a neon runway.",
        "{A} rests their left hand on the steering wheel and reaches over with their right, palm upturned on the center console. Without looking away from the road, {B} slides their fingers in, interlocking them tightly.",
      ],
      choices: [
        { label: "Hit the highway toward the Lekki-Ikoyi Link Bridge", to: "bridge-cruise" },
        { label: "Take the scenic coastal road toward the private beaches", to: "coastal-cruise" },
      ],
    },
    "bridge-cruise": {
      chapter: 1,
      scene: "bridge",
      text: [
        "The car sweeps onto the sweeping curve of the Lekki-Ikoyi Link Bridge. The massive suspension cables glow in dazzling geometric patterns of purple and cobalt blue, reflecting like fractured glass on the lagoon below.",
        "Rain streams across the panoramic glass roof. {B} leans their head back against the leather headrest, singing along softly to the chorus, their thumb idly tracing small circles over {A}'s knuckles.",
        "\"Do you know why I love night drives with you?\" {B} asks, turning their head to watch {A}'s profile outlined in purple neon.",
        "\"Why, babe?\"",
        "\"Because during the day, the whole world wants a piece of us. But out here, at 1 A.M., you belong only to me.\"",
      ],
      choices: [
        { label: "Pull over at the designated overlook vista to watch the rain", to: "bridge-overlook" },
        { label: "Keep driving into the heart of the sleeping Island", to: "island-streets" },
      ],
    },
    "coastal-cruise": {
      chapter: 1,
      scene: "beach",
      text: [
        "They turn toward the coastal road, where the roar of the Atlantic ocean joins the rhythm of the engine. The salty ocean breeze mixes with the sweet smell of tropical rain.",
        "{B} rolls their window halfway down, letting the cool mist spray against their face, laughing with wild, childlike abandon.",
        "\"Stick your hand out!\" {B} urges, catching the wind with their palm like an airplane wing. {A} rolls their window down too, feeling the rush of freedom.",
        "For ten miles, they race alongside the crashing surf, untethered from responsibilities, clocks, and the weight of the everyday world.",
      ],
      choices: [
        { label: "Pull into a quiet shoreline overlook beneath the palm trees", to: "bridge-overlook" },
      ],
    },
    "island-streets": {
      chapter: 1,
      scene: "city-night",
      text: [
        "They cruise through the quiet, tree-lined boulevards of Ikoyi. Giant ancient flame trees arch over the road like a cathedral canopy, their leaves catching the golden glow of colonial street lamps.",
        "It feels like they are the only two people left alive in a private metropolis constructed solely for their romance.",
      ],
      choices: [
        { label: "Pull over by the waterfront overlook", to: "bridge-overlook" },
      ],
    },
    "bridge-overlook": {
      chapter: 2,
      scene: "balcony",
      text: [
        "{A} pulls the car into a quiet overlook perched high above the marina. He puts the car in park, turns off the headlights, and kills the engine.",
        "Silence envelops them, punctuated only by the gentle patter of raindrops on the roof and the soft hum of the Bluetooth speaker playing a slow acoustic guitar solo.",
        "The skyline of Lagos sparkles across the dark water in amber, ruby, and diamond lights.",
        "{B} unbuckles their seatbelt, swivels in the passenger seat, and pulls their knees up to their chest, facing {A} completely.",
      ],
      choices: [
        { label: "Reach out and tuck a stray damp lock of hair behind {B}'s ear", to: "tender-moment" },
        { label: "Ask {B} what they are thinking about right now in this exact second", to: "deep-inquiry" },
      ],
    },
    "tender-moment": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} reaches across the center console, gently cupping {B}'s cheek with warm fingers. {B} leans into the touch, closing their eyes for a long, quiet second.",
        "\"You are so beautiful, {B}. Especially right now, with rain on your eyelashes and messy midnight hair.\"",
        "{B} opens their eyes, their gaze so steady, dark, and filled with affection that it takes {A}'s breath away.",
        "\"I was just thinking about how lucky I am,\" {B} whispers softly. \"Of all the cars on all the roads in this massive, chaotic city, I am sitting next to my favorite human being in the universe.\"",
      ],
      choices: [
        { label: "Lean in across the console and kiss {B} in the warm dark", to: "car-kiss" },
      ],
    },
    "deep-inquiry": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "\"What's going through your mind, {B}?\" {A} asks gently.",
        "{B} looks out at the shimmering rain on the windshield, then back to {A}. \"I'm thinking about how terrified I used to be of the future before I met you. Everything felt uncertain, like building a house on shifting sand.\"",
        "\"And now?\"",
        "\"Now, as long as you're in the passenger seat—or behind the wheel—I don't care where the road goes. I feel home wherever you are.\"",
      ],
      choices: [
        { label: "Lean in across the console and kiss {B} in the warm dark", to: "car-kiss" },
      ],
    },
    "car-kiss": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} leans across the console, fingers tangling gently into the hair at the nape of {B}'s neck. {B} meets them halfway, hands resting against {A}'s chest right over the rapid thud of their heart.",
        "The kiss begins soft, tasting of cold rain and warm breath, and deepens into a slow, intoxicating rhythm that makes the entire world outside the fogged-up windows vanish.",
        "When they finally pull apart, their foreheads rest together, their breaths mingling in the quiet sanctuary of the car.",
      ],
      choices: [
        { label: "Head to the 24-hour midnight diner for hot coffee and warm meat pies", to: "diner-stop" },
      ],
    },
    "diner-stop": {
      chapter: 3,
      scene: "city-night",
      text: [
        "At 2:45 A.M., they pull up to an all-night retro diner glowing with warm neon yellow light. The rain has softened to a fine, misty drizzle.",
        "They slide into a corner booth by the steamed-up window. The server brings two steaming mugs of black coffee with condensed milk, a plate of fresh hot meat pies with flaky golden crusts, and two slices of warm cinnamon cake.",
        "They sit close on the same side of the booth, thighs touching, sharing bites from the same fork and laughing in hushed whispers so as not to wake the sleepy couple two tables away.",
      ],
      choices: [
        { label: "Make a vow to do midnight road trips whenever life gets too heavy", to: "ending-road-vow" },
        { label: "Step back out into the misty street and dance under the diner neon", to: "ending-street-dance" },
        { label: "Drive home at 4 A.M. and fall asleep tangled in warm sheets", to: "ending-home-sleep" },
      ],
    },
    "ending-road-vow": {
      chapter: 3,
      scene: "city-night",
      text: [
        "{A} takes {B}'s hands over the diner table, linking their thumbs. \"Whenever the city gets too loud, or work gets too stressful, or we just miss each other... we grab the keys and hit the highway.\"",
        "{B} smiles, eyes glowing in the amber diner light. \"Agreed. The midnight road belongs to us.\"",
        "They drive back through the quiet streets as the first hint of morning twilight tinges the eastern horizon in indigo, hearts full of unforgettable peace.",
      ],
      ending: {
        id: "midnight-highway-vow",
        title: "The Midnight Highway Vow",
        mood: "sweet",
      },
    },
    "ending-street-dance": {
      chapter: 3,
      scene: "city-night",
      text: [
        "Stepping out into the empty, rain-washed parking lot beneath the buzzing pink neon sign, {A} takes {B} by the hand and spins them into a gentle turn on the wet tarmac.",
        "With no music except the quiet hum of the night, they sway together on the empty street. {B} laughs softly, resting their forehead on {A}'s shoulder.",
        "\"People will think we're crazy,\" {B} whispers with a smile.",
        "\"Let them,\" {A} answers, lifting {B}'s chin for a soft kiss. \"We're crazy in love, and that's the only thing that matters.\"",
      ],
      ending: {
        id: "neon-street-dance",
        title: "Dancing Under Neon Rain",
        mood: "sweet",
      },
    },
    "ending-home-sleep": {
      chapter: 3,
      scene: "home",
      text: [
        "They return to the apartment at 4:15 A.M., kicked off their shoes by the door, and collapsed into bed in their cozy clothes without even turning on the lights.",
        "{B} curls against {A}'s chest, burying their face in the crook of their neck with a deep, blissful sigh. {A} wraps both arms securely around {B}, holding them tight against the cool morning draft.",
        "Outside, the rain has stopped. Inside, two souls drift into the sweetest, most restful sleep of their lives, safe in the harbor of each other's arms.",
      ],
      ending: {
        id: "four-am-sanctuary",
        title: "4 A.M. Sanctuary",
        mood: "sweet",
      },
    },
  },
};
