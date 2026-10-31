import type { Story } from "./types";

export const midnightLekki: Story = {
  id: "midnight-lekki",
  title: "Midnight on Admiralty Way",
  tagline: "The windows down, warm Atlantic wind, and the whole city sleeping beneath us.",
  emoji: "🏎️",
  category: "just-you-and-me",
  synopsis:
    "Midnight in Lekki: warm Atlantic breeze rushing through open car windows, favorite afro-soul playlists humming from the speakers, spicy midnight suya by the waterfront, and slow dancing on the empty sands of Tarkwa Bay while the city sleeps.",
  estimatedMinutes: 15,
  palette: ["#10b981", "#f59e0b"],
  chapters: [
    "The Late-Night Escape",
    "Glow of the Expressway",
    "Suya by the Water",
    "Dancing at Tarkwa Bay",
  ],
  start: "start",
  nodes: {
    start: {
      chapter: 0,
      scene: "city-night",
      text: [
        "It was 11:45 P.M. on a Friday night in Lekki Phase 1. The city's legendary daytime madness had softened into a cool, glittering calm.",
        "{A} twirled the Ferrari car keys around one finger and looked across the balcony at {B}, who was sprawled on the couch in oversized sweatpants, scrolling endlessly on their phone.",
        "\"Shoes on,\" {A} commanded with a mischievous grin. \"We're leaving.\"",
      ],
      choices: [
        { label: "Pull {B} up by both hands", to: "convince_leave" },
        { label: "Dangle the car keys with a dare", to: "car_keys_dare" },
      ],
    },
    convince_leave: {
      chapter: 0,
      scene: "home",
      text: [
        "\"At this hour?\" {B} protested playfully, not putting up any real resistance as {A} pulled them upward into an embrace.",
        "\"The best hours are the ones no one else is using,\" {A} whispered against {B}'s ear, stealing a quick kiss on the collarbone. \"Trust me.\"",
        "{B} rolled their eyes with a fond smile, kicked on white sneakers, and grabbed a denim jacket.",
      ],
      choices: [
        { label: "Head down to the underground garage", to: "garage" },
      ],
    },
    car_keys_dare: {
      chapter: 0,
      scene: "home",
      text: [
        "The Ferrari horse crest jingled in {A}'s hand. \"Admiralty Way is completely empty. Top down. Your playlist.\"",
        "{B}'s eyes sparked with excitement. \"If we get cold, you give me your jacket.\" \"Deal.\"",
      ],
      choices: [
        { label: "Run down the stairs together", to: "garage" },
      ],
    },
    garage: {
      chapter: 0,
      scene: "city-night",
      text: [
        "The Ferrari 458 was parked under the amber garage lamp, its Rosso Corsa red paint gleaming like liquid cherry.",
        "{A} held the door open like an old-fashioned gentleman. {B} sank into the tan leather passenger seat with a satisfied sigh.",
        "When {A} pushed the red start button, the 4.5-litre V8 erupted into life with a deep, throat-clearing roar that echoed off the concrete walls.",
      ],
      choices: [
        { label: "Roll out onto the empty avenue", to: "cruising_lekki" },
        { label: "Pair {B}'s phone to Audiomack first", to: "music_setup" },
      ],
    },
    music_setup: {
      chapter: 0,
      scene: "city-night",
      text: [
        "Bluetooth connected. A warm bassline filled the cabin, kicking into a sultry mid-tempo Afrobeats rhythm that made the rearview mirror tremble gently.",
        "{B} leaned their head back against the headrest, closing their eyes as the car eased up the ramp and into the night air.",
      ],
      choices: [
        { label: "Hit Admiralty Way with the wind in your hair", to: "cruising_lekki" },
      ],
    },
    cruising_lekki: {
      chapter: 1,
      scene: "city-night",
      text: [
        "The boulevard was a runway of smooth asphalt and amber streetlamps. With the windows down, the salty Atlantic breeze flooded the cabin, carrying faint scents of night jasmine and rain.",
        "{B} reached across the carbon-fiber center console, resting their left hand palm-up on {A}'s knee. {A} intertwined fingers without looking away from the road, thumb tracing circles over {B}'s knuckles.",
      ],
      choices: [
        { label: "Accelerate smoothly over the Lekki–Ikoyi Link Bridge", to: "bridge_run" },
        { label: "Take the scenic route toward the toll gate", to: "toll_route" },
      ],
    },
    bridge_run: {
      chapter: 1,
      scene: "bridge",
      text: [
        "The Lekki–Ikoyi Link Bridge soared ahead, its massive white pylon illuminated in brilliant royal blue and violet against the dark water of the creek.",
        "The stay cables fanned overhead like celestial harp strings. {A} nudged the throttle into third gear; the engine sang a high, intoxicating crescendo, pressing them both back into the leather seats.",
        "\"Look at the water!\" {B} shouted over the wind, laughing with unrestrained joy, hair whipping wildly across their cheeks.",
      ],
      choices: [
        { label: "Pull over at the lookout deck", to: "bridge_view" },
        { label: "Keep the momentum going toward the coast", to: "suya_spot" },
      ],
    },
    bridge_view: {
      chapter: 1,
      scene: "bridge",
      text: [
        "They pulled into the scenic turnout bay near the bridge apex. The car idled with a rhythmic, contented purr.",
        "Leaning against the warm hood of the car, looking out over the silent, moonlit lagoon where distant fishing boat lanterns bobbed like fallen stars.",
        "{A} wrapped both arms around {B} from behind, tucking chin over {B}'s shoulder. \"Are you glad I made you put your shoes on?\" \"I'm glad you're mine,\" {B} whispered back.",
      ],
      choices: [
        { label: "Go find midnight suya by the waterfront", to: "suya_spot" },
      ],
    },
    toll_route: {
      chapter: 1,
      scene: "bridge",
      text: [
        "They took the open highway sweeping toward the toll gate, the yellow cat's-eye reflectors flashing in rhythmic pairs beneath the tires.",
        "The city felt vast and peaceful, stripped of all its horns and hustle, leaving only the two of them alone on an endless road.",
      ],
      choices: [
        { label: "Follow the smell of grilled spices toward the shore", to: "suya_spot" },
      ],
    },
    suya_spot: {
      chapter: 2,
      scene: "market",
      text: [
        "Tucked just off Ahmadu Bello Way was a legendary midnight suya spot, where coals glowed crimson in the dark, smoking with beef skewers seasoned in yaji and roasted peanuts.",
        "The mai suya wrapped a massive parcel in greasy brown paper with sliced red onions and fresh tomatoes. The smell was pure heaven.",
      ],
      choices: [
        { label: "Eat on the hood of the car right there", to: "eat_on_hood" },
        { label: "Drive the parcel all the way to Tarkwa Bay beach", to: "tarkwa_beach" },
      ],
    },
    eat_on_hood: {
      chapter: 2,
      scene: "city-night",
      text: [
        "Sitting on the warm bonnet of the car, sharing pieces of spicy beef. Every time the yaji pepper got too hot, {B} gasped and laughed, stealing sips from {A}'s cold bottle of malt drink.",
        "\"You have pepper on your lip,\" {A} pointed out softly.",
        "\"Clean it for me then,\" {B} dared with hooded eyes. {A} leaned in and kissed it away gently.",
      ],
      choices: [
        { label: "Finish the night under the beach stars", to: "tarkwa_beach" },
      ],
    },
    tarkwa_beach: {
      chapter: 2,
      scene: "beach",
      text: [
        "They parked where the road ended and sand began, near the quiet waters of Tarkwa Bay. The engine finally clicked into silence.",
        "Shoes off. Barefoot in the cool, powdery sand, walking down to where the foam from the gentle night waves glowed under a full, pearlescent moon.",
      ],
      choices: [
        { label: "Turn the car doors open and play music toward the sea", to: "beach_dance" },
        { label: "Sit shoulder to shoulder watching the cargo ships", to: "beach_talk" },
      ],
    },
    beach_talk: {
      chapter: 3,
      scene: "beach",
      text: [
        "Far on the dark Atlantic horizon, the lights of container ships waited patiently for morning berth, looking like a quiet floating city of lanterns.",
        "{B} rested their head on {A}'s shoulder, both pairs of feet buried ankle-deep in the wet sand as the cool foam lapped their toes.",
        "\"Do you ever feel like this is all a dream?\" {B} asked softly.",
        "\"If it is,\" {A} murmured, pressing a kiss into {B}'s hair, \"I'm never waking up.\"",
      ],
      choices: [
        { label: "Pull {B} up for a slow dance", to: "beach_dance" },
        { label: "Lie back on the sand and trace the constellations", to: "ending_starlight" },
      ],
    },
    beach_dance: {
      chapter: 3,
      scene: "beach",
      text: [
        "A slow, tender song carried across the sand from the car's speakers. {A} took {B}'s right hand in one, resting the other firmly against the small of their back.",
        "There were no lights except the moon, no audience except the tide. They swayed in slow, effortless circles, matching steps to the hush of the water.",
      ],
      choices: [
        { label: "Pull {B} closer and whisper a promise", to: "ending_eternal_dance" },
        { label: "Spin {B} into a breathless midnight kiss", to: "ending_kiss_by_waves" },
      ],
    },
    ending_eternal_dance: {
      chapter: 3,
      scene: "beach",
      text: [
        "{B} buried their face against {A}'s neck as they swayed, arms wrapped entirely around {A}'s chest.",
        "\"No matter how loud Lagos gets,\" {A} whispered against their ear, \"no matter how busy the world becomes, I will always find a way to bring you here. Just you, me, and the quiet.\"",
        "{B} tightened their grip with a soft, shuddering breath of pure happiness. The tide came and went, but neither of them moved for an hour.",
      ],
      ending: {
        id: "eternal_midnight",
        title: "The Midnight Waltz",
        mood: "sweet",
      },
    },
    ending_kiss_by_waves: {
      chapter: 3,
      scene: "beach",
      text: [
        "{A} spun {B} under one arm, caught them by the waist as they turned, and dipped them gently over the frothing surf.",
        "{B} gasped, eyes bright with laughter, before their lips met in a deep, electric kiss that made the entire ocean seem to fade into background noise.",
        "When they pulled apart, breathing hard, {B} was grinning ear to ear. \"Best Friday night of my life. Ten out of ten, driver.\"",
      ],
      ending: {
        id: "ocean_kiss",
        title: "Kiss Over the Surf",
        mood: "epic",
      },
    },
    ending_starlight: {
      chapter: 3,
      scene: "stars",
      text: [
        "They lay side by side on the sand, fingers tightly intertwined, staring up into a velvet sky dusted with silver powder.",
        "The warmth of {B}'s skin through their jacket, the slow rhythm of their synchronized breathing, the scent of sea salt and night air.",
        "Some nights change your life in grand, dramatic ways. Some nights do it simply by making you realize that you'll never need to look for happiness anywhere else.",
      ],
      ending: {
        id: "starlit_beach",
        title: "Under Lagos Stars",
        mood: "sweet",
      },
    },
  },
};
