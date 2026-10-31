import type { Story } from "./types";

export const acrossOceans: Story = {
  id: "across-oceans",
  title: "A Letter Across Oceans",
  tagline: "Time zones, delayed flights, hidden letters in luggage, and the airport arrival gate where waiting ends forever.",
  emoji: "🌍",
  category: "deep-emotional",
  synopsis:
    "Long distance is a furnace that burns away superficial affection and tempers true devotion into steel. When {B} must spend months across the Atlantic for a grueling project, {A} slips a secret handwritten letter into the lining of her winter coat. As months of video calls and longing peak, an unexpected airport homecoming brings an emotional reunion that leaves no doubt about where home is.",
  estimatedMinutes: 16,
  palette: ["#172554", "#60a5fa"],
  chapters: [
    "I. The Seven-Hour Time Difference",
    "II. The Letter in the Winter Coat",
    "III. Boarding the Transatlantic Flight",
    "IV. Gate B14: The Permanent Homecoming",
  ],
  start: "time-zone-ache",
  nodes: {
    "time-zone-ache": {
      chapter: 0,
      scene: "city-night",
      text: [
        "On {A}'s phone lockscreen, two world clocks sit side by side: Lagos (11:30 P.M.) and London (10:30 P.M.). For three months, these two digital numbers have dictated the heartbeat of their relationship.",
        "They have learned the brutal math of long distance: calculating when the other wakes up, squeezing in ten-minute video calls before meetings, sending voice notes while walking through windy subway stations, and staring at small digital video squares where a human touch should be.",
        "{A} is lying in bed with the pillow hugged against their chest. The longing is not just emotional; it is a physical ache in the ribs.",
        "A notification chimes: a voice note from {B}. {A} taps play with breathless haste.",
      ],
      choices: [
        { label: "Listen to {B}'s voice note recording the rainy London street noise", to: "listen-voicenote" },
        { label: "Reply immediately with a heartfelt video message", to: "listen-voicenote" },
      ],
    },
    "listen-voicenote": {
      chapter: 0,
      scene: "rain",
      text: [
        "{B}'s voice fills the quiet room, underscored by the gentle hum of London black cabs and rain splashing on pavement.",
        "\"Hey my love... I'm walking back from the studio in South Kensington. It's freezing cold and drizzling, and all I can think about is your warm arms around me on our sofa. I saw a couple sharing an umbrella earlier and I actually had to look away because it hurt so much not having you beside me.\"",
        "A soft, wistful sigh catches in {B}'s throat. \"I reach into my coat pocket whenever my hands get cold because you always used to warm them in yours. I love you, {A}. I miss you so deeply it aches.\"",
      ],
      choices: [
        { label: "Remember the secret letter you tucked into her coat before she left", to: "remember-letter" },
      ],
    },
    "remember-letter": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "{A} sits up abruptly in bed. Back at the airport departure terminal three months ago, while {B} had stepped away to buy water, {A} had secretly slipped a thick cream envelope into the zippered interior lining of {B}'s wool trench coat.",
        "On the front of the envelope was written in black fountain pen ink: *'Open only when the distance feels completely unbearable.'*",
        "{A} quickly types a message: *'Check the inner secret zipper on the left inside of your navy coat. Right now.'*",
      ],
      choices: [
        { label: "Wait with racing heart for {B} to find the hidden letter", to: "discovering-letter" },
      ],
    },
    "discovering-letter": {
      chapter: 1,
      scene: "candlelight",
      text: [
        "In a small London flat across the ocean, {B} unzips the hidden pocket in shock. Her fingertips touch the thick, embossed paper. The wax seal is a deep crimson stamp of two interlocking rings.",
        "Her hands tremble as she breaks the seal under the warm glow of her desk lamp. The familiar, confident handwriting of {A} fills four pages with unreserved devotion:",
        "*'My dearest {B}, if you are reading this, it means the miles are feeling heavy tonight. I need you to remember this truth: oceans cannot divide two souls that have already chosen to become one. Every sunrise you watch in London is the same sun that sets over my sky in Lagos. Every breath you take, my love is wrapped around you...'*",
        "Tears stream down {B}'s face as she reads through stories of their first dates, promises for their future home, and {A}'s unbreakable vow to cross every sea to bring her back into his arms.",
      ],
      choices: [
        { label: "{A} makes an audacious secret decision: book the transatlantic flight", to: "book-flight" },
      ],
    },
    "book-flight": {
      chapter: 2,
      scene: "sky",
      text: [
        "Reading {B}'s emotional reaction message at 1 A.M., {A} realizes that waiting another month is out of the question.",
        "Within twenty minutes, {A} opens the airline portal, selects the nonstop red-eye flight departing Murtala Muhammed International at dawn, and clicks 'Confirm Booking'.",
        "At 6:15 A.M., {A} watches the tarmac fall away beneath the wings of the Boeing 777 as it climbs through morning thunderclouds into the brilliant blue stratosphere.",
        "Seven hours of cruising at 38,000 feet above the Sahara Desert, the Mediterranean Sea, and the European continent. Every nautical mile brings {A} closer to the only person who holds their heart.",
      ],
      choices: [
        { label: "Touch down at Heathrow Airport in the cold afternoon mist", to: "airport-arrival" },
      ],
    },
    "airport-arrival": {
      chapter: 3,
      scene: "city-night",
      text: [
        "Heathrow Terminal 4 at 3:30 P.M. The arrival hall is a bustling cavern of travelers with luggage trolleys, reunion hugs, and drivers holding name signs.",
        "{A} has coordinated in secret with {B}'s London flatmate. {B} thinks she is at the airport to pick up a courier package sent from the corporate office.",
        "{A} stands near the glass barrier of Gate B14, holding a single long-stemmed Ecuadorian rose and a paper sign that simply reads: *'My Forever Girl.'*",
        "Through the sliding glass doors emerges {B}, bundled in her familiar navy coat, looking around with a hurried, confused expression.",
      ],
      choices: [
        { label: "Step forward from the crowd and call her name", to: "reunion-moment" },
      ],
    },
    "reunion-moment": {
      chapter: 3,
      scene: "city-night",
      text: [
        "\"{B}!\"",
        "{B} turns. Her eyes scan the crowd, landing squarely on {A}. She freezes. Her handbag slips from her shoulder and falls to the floor.",
        "\"{A}...?\" she gasps, her voice trembling in disbelief. \"Is that... are you real?\"",
        "Before {A} can answer, {B} breaks into a full sprint through the arrival terminal, dodging luggage trolleys and confused tourists, running with everything she has straight into {A}'s waiting arms.",
      ],
      choices: [
        { label: "Catch her in midair and spin her around in the crowded terminal", to: "ending-airport-spin" },
        { label: "Pull her tight against your chest and hold her in silent tears", to: "ending-silent-hold" },
        { label: "Cup her face and kiss her before the entire cheering terminal", to: "ending-terminal-kiss" },
      ],
    },
    "ending-airport-spin": {
      chapter: 3,
      scene: "sky",
      text: [
        "{A} catches {B} around the waist as she leaps into their arms, lifting her off the floor and spinning her in a dizzying circle of pure ecstasy.",
        "{B} buries her face in {A}'s neck, sobbing with joy, fingers tangled in their hair as if making sure this is not a dream.",
        "\"I told you oceans couldn't keep me away from you,\" {A} laughs through his own tears, kissing her cheek, her temple, her lips.",
        "\"You came for me...\" {B} weeps happily against his chest. \"You really came for me.\"",
        "Around them, strangers in the terminal burst into applause, but neither of them hears a single cheer. The universe has snapped back into its rightful place.",
      ],
      ending: {
        id: "transatlantic-spin",
        title: "The Transatlantic Reunion",
        mood: "epic",
      },
    },
    "ending-silent-hold": {
      chapter: 3,
      scene: "home",
      text: [
        "{A} wraps both arms around {B}, pulling her so close their bodies seem to fuse into one. {B} clutches {A}'s jacket with white-knuckled intensity, trembling against their chest.",
        "For three full minutes, in the middle of one of the busiest international airports in the world, they do not speak. They simply stand locked in an embrace that absorbs three months of loneliness, fear, and longing.",
        "\"I'm home,\" {B} whispers into {A}'s shoulder, inhaling the scent she had dreamed of every night.",
        "\"You are home,\" {A} replies, stroking her hair. \"And we are never being separated again.\"",
      ],
      ending: {
        id: "silent-airport-sanctuary",
        title: "The Airport Sanctuary",
        mood: "sweet",
      },
    },
    "ending-terminal-kiss": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "{A} takes {B}'s tear-streaked face in both hands, wiping away the moisture with his thumbs. Her dark eyes shine with pure, unfiltered adoration.",
        "When their lips meet, three thousand miles of cold ocean dissolve into incandescent warmth. The kiss is deep, passionate, and desperate with months of restraint, leaving both breathless.",
        "{B} rests her forehead against {A}'s, her lips swollen and smiling. \"Take me home, {A}. Wherever you are, that's where I belong.\"",
      ],
      ending: {
        id: "gate-b14-kiss",
        title: "Gate B14: The Permanent Homecoming",
        mood: "sweet",
      },
    },
  },
};
