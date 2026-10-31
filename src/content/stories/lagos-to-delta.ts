import type { Story } from "./types";

export const lagosToDelta: Story = {
  id: "lagos-to-delta",
  title: "Flight to Delta: 432km to You",
  tagline: "432 kilometers between Lagos and Delta State, bridged by one midnight ticket.",
  emoji: "✈️",
  category: "adventure-fantasy",
  synopsis:
    "When distance feels unbearable, {A} buys a spontaneous dawn flight from Lagos to Delta State. Through tarmac runways, country roads, and heart-pounding anticipation, the journey culminates in an unforgettable surprise reunion on {B}'s doorstep.",
  estimatedMinutes: 16,
  palette: ["#f59e0b", "#3b82f6"],
  chapters: [
    "The 2 A.M. Decision",
    "Runway 09 at Sunrise",
    "Touching Down in the South",
    "The Doorbell at Noon",
  ],
  start: "start",
  nodes: {
    start: {
      chapter: 0,
      scene: "city-night",
      text: [
        "It was 2:14 A.M. in Lagos. The ceiling fan turned in lazy, rhythmic clicks, stirring the warm night air of the bedroom.",
        "{A} held the phone an inch from their nose, listening to the soft, steady breathing on the other end of the line. In Delta State, {B} was already fast asleep, phone resting against the pillow, call clock ticking past three hours and forty minutes.",
        "\"I miss you so much,\" {A} whispered, knowing {B} couldn't hear. On the tablet screen beside the bed, the airline booking portal was open: one last seat on the 7:00 A.M. flight to Asaba.",
      ],
      choices: [
        { label: "Book the ticket without overthinking", to: "book_flight" },
        { label: "Pack a weekend duffel bag first to be sure", to: "pack_bag" },
      ],
    },
    book_flight: {
      chapter: 0,
      scene: "city-night",
      text: [
        "Click. Confirmed. Booking reference: *LUV-432*.",
        "A wave of pure adrenaline rushed through {A}'s chest. No turning back now. In less than five hours, the wheels would leave the tarmac at Murtala Muhammed Airport.",
        "{A} quietly tossed a favorite sweater, a bottle of perfume {B} loved, and two packets of the special chin-chin from Lagos Island into a canvas weekend bag.",
      ],
      choices: [
        { label: "Slip into an Uber to Ikeja under the night sky", to: "airport_drive" },
        { label: "Write a cryptic voice note before leaving", to: "voice_note" },
      ],
    },
    pack_bag: {
      chapter: 0,
      scene: "home",
      text: [
        "Every corner of the room held a reminder of them. The Polaroid of {B} laughing with ice cream on their nose was taped to the mirror. The oversized hoodie {B} had left behind still carried that distinct scent of vanilla and lavender.",
        "{A} packed it carefully at the very top of the bag. If distance was a test, {A} had decided tonight was graduation day.",
        "By 3:30 A.M., the flight was paid for, the shoes were laced, and the front door quietly locked behind.",
      ],
      choices: [
        { label: "Head straight for the airport through the quiet city", to: "airport_drive" },
      ],
    },
    voice_note: {
      chapter: 0,
      scene: "home",
      text: [
        "{A} held the record button and spoke in the softest voice: \"Good morning, sleepyhead. If you wake up and don't see my usual morning text, don't worry. Just look toward the sky around 8 A.M. I'm closer than you think.\"",
        "The message sent with a gentle whoosh into the quiet Delta night.",
      ],
      choices: [
        { label: "Catch the airport ride across Third Mainland", to: "airport_drive" },
      ],
    },
    airport_drive: {
      chapter: 1,
      scene: "bridge",
      text: [
        "Third Mainland Bridge was nearly empty. Streetlights streaked across the windshield like golden ribbons over the ink-black lagoon water.",
        "The Uber driver glanced in the rearview mirror with a knowing grin. \"Airport at 4 A.M., boss? Business or love?\"",
        "\"Love,\" {A} smiled without hesitation. \"The only kind worth racing for.\"",
      ],
      choices: [
        { label: "Check in at the domestic terminal", to: "terminal" },
        { label: "Grab hot coffee and watch the dawn break", to: "terminal_coffee" },
      ],
    },
    terminal_coffee: {
      chapter: 1,
      scene: "sky",
      text: [
        "Through the massive glass windows of Terminal 2, the horizon began to bleed from midnight indigo into soft peach and coral.",
        "The ground crew moved like miniature silhouettes around the twin-engine jet. In {A}'s pocket, the boarding pass felt like a golden ticket to the only place that mattered.",
      ],
      choices: [
        { label: "Board the morning flight", to: "terminal" },
      ],
    },
    terminal: {
      chapter: 1,
      scene: "sky",
      text: [
        "\"Now boarding Flight 312 to Asaba International Airport.\"",
        "{A} stepped down the jet bridge and took a window seat just ahead of the wing. As the engines spooled into a deep, vibrating hum, the plane rolled onto Runway 09.",
        "Lagos tilted away below: the glittering coastline, the long arc of Lekki, the winding creek. Ahead lay the lush green delta plains.",
      ],
      choices: [
        { label: "Look out the window and count the minutes", to: "cruising" },
        { label: "Listen to the shared couple playlist on Audiomack", to: "playlist_in_air" },
      ],
    },
    playlist_in_air: {
      chapter: 1,
      scene: "sky",
      text: [
        "Headphones on. Track three: *\"Active\"*. Then that slow acoustic ballad {B} always played on Sunday afternoons when washing plates together.",
        "At 28,000 feet, above cotton-wool clouds bathed in morning gold, every lyric felt tailored by hand. The distance between hearts was shrinking at 700 kilometers per hour.",
      ],
      choices: [
        { label: "Watch the descent over the River Niger", to: "cruising" },
      ],
    },
    cruising: {
      chapter: 2,
      scene: "sky",
      text: [
        "\"Cabin crew, prepare for landing.\"",
        "The clouds parted to reveal the rich, emerald landscape of Delta State, crisscrossed by shimmering brown and silver waterways. The River Niger bridge appeared like a delicate needlework thread below.",
        "The wheels touched the Asaba runway with a crisp chirp of rubber. 432 kilometers had just become zero.",
      ],
      choices: [
        { label: "Step out into the warm Delta breeze", to: "arrival_hall" },
      ],
    },
    arrival_hall: {
      chapter: 2,
      scene: "market",
      text: [
        "The air in Delta hit {A}'s skin with familiar southern warmth — rich with rain, woodsmoke, and blooming hibiscus. The terminal clock read 8:15 A.M.",
        "On the phone, three missed messages from {B} lit up the screen: *\"Babe I just woke up! Where are you?? Your voice note is scaring me!\"*",
        "{A} held back a grin and typed: *\"Just running an early errand in town. Eat your breakfast, I'll call you by 11!\"*",
      ],
      choices: [
        { label: "Stop by a local florist and bakery first", to: "gift_shopping" },
        { label: "Hail a taxi straight to {B}'s estate gate", to: "taxi_drive" },
      ],
    },
    gift_shopping: {
      chapter: 2,
      scene: "market",
      text: [
        "At a roadside stall in Asaba, a sweet old woman wrapped a bundle of fresh orange marigolds and yellow lilies in newspaper.",
        "\"Who is the lucky one, my child?\" she asked, her eyes crinkling. \"The one who makes my whole heart beat,\" {A} replied. The woman added three extra roses for free.",
      ],
      choices: [
        { label: "Jump into the taxi with flowers and bag in hand", to: "taxi_drive" },
      ],
    },
    taxi_drive: {
      chapter: 3,
      scene: "forest",
      text: [
        "The taxi wound past palm trees, bustling fruit stalls, and quiet residential lanes dappled with morning shade.",
        "Every red light felt like an eternity. {A}'s heart was tapping a faster tempo than any drum solo. At 11:42 A.M., the cab pulled up outside the familiar green-trimmed bungalow.",
        "Through the sheer front curtains, {A} could see {B}'s silhouette moving slowly in the kitchen, mug in hand.",
      ],
      choices: [
        { label: "Ring the doorbell and hide the flowers behind", to: "doorbell" },
        { label: "Call {B}'s phone and say 'Look out your window'", to: "window_call" },
      ],
    },
    doorbell: {
      chapter: 3,
      scene: "home",
      text: [
        "*Ding-dong.*",
        "From inside, {B}'s voice called out: \"Who is that? Delivery man, leave it on the porch please!\"",
        "{A} didn't move. *Ding-dong.*",
        "Soft footsteps padded toward the door. The brass deadbolt clicked once, twice, and the door swung inward.",
      ],
      choices: [
        { label: "Open your arms and say nothing", to: "ending_reunion" },
        { label: "Say: 'Your Lagos package has arrived'", to: "ending_sweet_joke" },
      ],
    },
    window_call: {
      chapter: 3,
      scene: "home",
      text: [
        "The phone rang twice before {B} picked up with a sleepy sigh. \"Hello babe? Did you finish your errand?\"",
        "\"Almost,\" {A} said softly. \"Look out the living room window to your left.\"",
        "Through the glass, {A} saw {B} freeze, pull the lace curtain aside, and drop the tea mug straight onto the counter without spilling a drop. Their eyes went round as saucers.",
      ],
      choices: [
        { label: "Wave with the flower bouquet", to: "ending_reunion" },
        { label: "Run up the veranda steps", to: "ending_passionate" },
      ],
    },
    ending_reunion: {
      chapter: 3,
      scene: "home",
      text: [
        "{B} stood frozen in the doorway for three full seconds, hand over mouth, trying to make the universe make sense.",
        "Then came the gasp — half sob, half squeal — and {B} launched forward so fast the door nearly bounced off the wall.",
        "They collided on the veranda. {B}'s arms locked around {A}'s neck like iron, burying their face in {A}'s collarbone, breathing in deep shaking breaths. \"You crazy person. You beautiful, crazy person. How are you here?\"",
        "\"Because 432 kilometers is too far when my home is right here in your arms.\"",
      ],
      ending: {
        id: "delta_forever",
        title: "Home in Your Arms",
        mood: "sweet",
      },
    },
    ending_sweet_joke: {
      chapter: 3,
      scene: "home",
      text: [
        "\"Special delivery from Lagos Island,\" {A} smiled, holding up the marigolds and the chin-chin bag.",
        "{B} dropped to their knees laughing with tears spilling down both cheeks, before pulling {A} down onto the porch tile into an overwhelming hug.",
        "\"You flew across the country for chin-chin?\" {B} teased, kissing {A}'s cheek, nose, and lips between every word.",
        "\"No,\" {A} murmured against their lips. \"I flew across the country because I couldn't spend another Saturday without looking into your eyes.\"",
      ],
      ending: {
        id: "special_delivery",
        title: "The Special Delivery",
        mood: "funny",
      },
    },
    ending_passionate: {
      chapter: 3,
      scene: "home",
      text: [
        "The front door flew open before {A} even reached the top step. {B} practically leaped into the air, wrapping legs around {A}'s waist and showering kisses over {A}'s forehead, eyelids, and jaw.",
        "The sun was bright and high over Delta State, but for the two of them, the entire world had shrunk down to the space between their chest and heartbeat.",
        "No screen, no phone call, no distance. Just touch, warmth, and the quiet promise that every mile in between would always be worth crossing.",
      ],
      ending: {
        id: "no_more_distance",
        title: "Zero Kilometers",
        mood: "epic",
      },
    },
  },
};
