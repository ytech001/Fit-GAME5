import type { Story } from "./types";

export const perfectDay: Story = {
  id: "perfect-day",
  title: "The Perfect Day (Allegedly)",
  tagline: "A carefully planned Saturday, chaotic breakfast mishaps, and the sweetest romantic memories.",
  emoji: "🥞",
  category: "just-you-and-me",
  synopsis:
    "It begins with an ambitious handwritten sticky note titled 'THE PERFECT DAY': breakfast, an island outing, and undeniable romance. But when pancakes ignite the kitchen and the city throws its unpredictable charm in the way, {A} and {B} discover that the most unforgettable days are the ones that go gloriously off-script.",
  estimatedMinutes: 12,
  palette: ["#f3a6bd", "#e2bd78"],
  chapters: [
    "I. The Battle of Breakfast",
    "II. The Grand Outing",
    "III. The Twilight Confession",
    "IV. Midnight Starlight",
  ],
  start: "start",
  nodes: {
    start: {
      chapter: 0,
      scene: "kitchen",
      text: [
        "The plan was taped squarely to the refrigerator with a magnetic avocado: 'THE PERFECT DAY (A Comprehensive Itinerary)'. Beneath the bold title, written in {B}'s unmistakable, enthusiastic cursive, were three bullet points: 1) Five-Star Gourmet Breakfast. 2) An Elegant Island Outing. 3) Unstoppable Romance.",
        "{A} wakes up at 7:30 A.M. not to the gentle chime of an alarm, but to the high-pitched shriek of the smoke detector. In the kitchen, {B} stands enveloped in a thick, fragrant fog, armed with a silicon spatula in one hand and a pot lid held defensively like a medieval shield.",
        "\"Good morning, my sweet angel!\" {B} announces loudly over the alarm, attempting a brilliant, guilty smile. \"Before you say anything, understand that this is artisan charcoal crust. The French call it caramelization. Mostly.\"",
        "{A} rubs the sleep from their eyes, leaning against the kitchen doorway. The love of their life has flour dusting their eyelashes, a stray smear of strawberry jam on their cheek, and looks utterly breathtaking.",
      ],
      choices: [
        { label: "Step in, take the spatula, and rescue breakfast together", to: "rescue-breakfast" },
        { label: "Surrender with a laugh and pull {B} into an early morning embrace", to: "embrace-morning" },
        { label: "Propose an emergency street food run for fresh akara and warm bread", to: "akara-run" },
      ],
    },
    "rescue-breakfast": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "{A} gently takes the smoking skillet with one hand and pulls {B} close with the other, pressing a soft kiss to their flour-dusted temple. \"Step aside, MasterChef. Let me assist my royal partner.\"",
        "While {B} fans the smoke alarm frantically with a sofa cushion, {A} turns down the burner, wipes down the griddle, and whips up a fresh batch of batter with creamy buttermilk, real vanilla bean, and a pinch of cinnamon.",
        "The next pancake sizzles into a golden masterpiece. As it flips through the air and lands with perfection, {B} gasps in pure reverence. The pancake has browned in a shape that looks inexplicably, undeniably like the map of Africa.",
        "\"Look at that contour! That's Lake Victoria right there!\" {B} whispers in awe. \"It is an omen of greatness for our day.\"",
      ],
      choices: [
        { label: "Drizzle it in warm maple syrup and feed the first bite to {B}", to: "feast-kitchen" },
        { label: "Take forty commemorative photos before either of you takes a bite", to: "feast-kitchen" },
      ],
    },
    "embrace-morning": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "{A} ignores the smoking pan completely, steps right through the haze, and wraps both arms around {B}'s waist, lifting them off their feet. {B} lets out a surprised squeal of laughter, dropping the pot lid onto the counter with a loud clatter.",
        "\"The pancakes can burn to cinders for all I care,\" {A} murmurs against {B}'s neck, breathing in the scent of warm vanilla, honey, and {B}'s familiar jasmine perfume. \"You are the only view I wanted to see this morning.\"",
        "{B} softens instantly, resting their forehead against {A}'s shoulder. \"You're ridiculous. But you're lucky you're cute, because otherwise I'd hold you responsible for the smoke detector.\"",
        "Together they turn off the stove, open every window to let the fresh ocean breeze sweep the apartment clean, and decide to start fresh side by side.",
      ],
      choices: [
        { label: "Whip up fluffy scrambled eggs and cinnamon toast together", to: "feast-kitchen" },
      ],
    },
    "akara-run": {
      chapter: 0,
      scene: "home",
      text: [
        "\"Command decision,\" {A} declares with a theatrical salute. \"We are abandoning the kitchen before the fire department arrives. Shoes on—we are hunting fresh street akara.\"",
        "Ten minutes later they are walking down the sun-drenched street in oversized hoodies, sandals slapping against the pavement. The morning air is crisp, carrying the scent of roasting groundnuts and dawn dew.",
        "To their horror, the neighborhood's legendary akara stall is shuttered with a hand-painted cardboard sign: 'GONE TO AN OWAMBE IN IBADAN. RETURNING MONDAY IN POWER.'",
        "{B} groans loudly, leaning their entire body weight against {A}'s shoulder in theatrical despair. \"Our itinerary is crumbling before 9 A.M.! What kind of universe denies lovers their weekend akara?\"",
        "{A} chuckles, wrapping an arm around {B}'s waist. \"The kind of universe that wants us to raid the local bakery for warm buttered croissants instead.\"",
      ],
      choices: [
        { label: "Buy a warm box of pastries and return to feast on the living room floor", to: "feast-kitchen" },
      ],
    },
    "feast-kitchen": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "Half an hour later, breakfast is served on the low coffee table. They sit cross-legged on thick floor pillows, knees touching beneath a shared blanket.",
        "There are warm fluffy pastries, fresh sliced strawberries, scrambled eggs with sweet peppers, and steaming mugs of coffee sweetened with condensed milk. Every bite tastes ten times better because they fought the morning chaos to earn it.",
        "{B} takes the avocado magnet off the fridge and holds up the sticky note with a ceremonial grin. \"Item One: Five-Star Gourmet Breakfast. Did we achieve five stars?\"",
        "\"We achieved six stars, two near-evacuations, and one pancake shaped like a continent,\" {A} replies, leaning in to kiss a crumb from the corner of {B}'s lips. \"Now, what does Item Two say?\"",
      ],
      choices: [
        { label: "Examine the mysterious 'Island Outing' plan", to: "outing-briefing" },
      ],
    },
    "outing-briefing": {
      chapter: 1,
      scene: "city-night",
      text: [
        "Item Two on the sticky note simply reads: 'THE OUTING (Somewhere Unforgettable)'. Beneath it, {B} has scribbled three asterisks and a pair of tiny drawn sunglasses.",
        "\"I left the exact destination flexible,\" {B} explains with an air of sophisticated secrecy, \"because a true romantic mastermind reads the weather and the mood. The sky is brilliant sapphire blue, the sun is shining, and the city is waiting for us.\"",
        "{A} looks at {B}'s sparkling eyes. The energy between them is buzzing with anticipation.",
        "\"So, Captain,\" {A} asks, \"which adventure do we embark upon?\"",
      ],
      choices: [
        { label: "Head to the private beach club at Ilashe by speedboat", to: "beach-adventure" },
        { label: "Stroll through the contemporary art gallery and hidden botanical gardens", to: "gallery-gardens" },
        { label: "Build an epic indoor blanket fortress and declare today a cozy cinema marathon", to: "blanket-fortress" },
      ],
    },
    "beach-adventure": {
      chapter: 1,
      scene: "beach",
      text: [
        "They take a sleek wooden water taxi across the lagoon, spray cooling their faces as the boat cuts through the turquoise waves. The sun warms their skin, and {B}'s laughter rises over the hum of the twin outboard motors.",
        "On the white sands of the private beach, they claim a cabana with flowing cream curtains. For three hours, the world outside ceases to exist.",
        "They race into the warm ocean swell, splashing each other until they collapse laughing on their towels. While drying off, {B} decides to build an architectural marvel: a three-tiered sand fortress complete with seashell windows and a twig flag labeled 'OUR PALACE'.",
        "Just as {A} snaps a photo, a rogue foamy wave rushes up the shore, politely waiting until the camera shutter clicks before gently washing the moat away. {B} falls back onto the sand laughing into the sky, pulling {A} down by their collar.",
      ],
      choices: [
        { label: "Lie together in the sun, listening to the waves and whispering secrets", to: "twilight-setting" },
      ],
    },
    "gallery-gardens": {
      chapter: 1,
      scene: "forest",
      text: [
        "They slip into the quiet sanctuary of an old colonial garden house converted into an artisan gallery. The air smells of cedarwood, oil paints, and rain-soaked earth from the courtyard courtyard.",
        "They wander through high-ceilinged rooms, fingers intertwined. In one room, a massive canvas of deep indigo and gold leaf catches {B}'s eye. {A} watches {B}'s expression—the way {B}'s eyes reflect the golden pigments, the gentle curve of their neck, the quiet wonder on their face.",
        "\"What are you looking at?\" {B} whispers, noticing {A}'s gaze.",
        "\"The most stunning work of art in this entire building,\" {A} whispers back without missing a beat.",
        "{B} blushes a radiant, beautiful pink, hiding their face against {A}'s chest while playfully swatting {A}'s shoulder.",
      ],
      choices: [
        { label: "Walk out into the sculpture garden for sweet ice cream", to: "twilight-setting" },
      ],
    },
    "blanket-fortress": {
      chapter: 1,
      scene: "home",
      text: [
        "They decide that leaving the apartment is for amateurs. Instead, they transform the entire living room into the grandest blanket fortress known to modern engineering.",
        "Using four dining chairs, three broomsticks, two heavy books for counterweights, and every duvet and fairy light in the house, they build a glowing Moroccan tent. Inside, the carpet is buried beneath plush pillows and warm throws.",
        "Just as they crawl inside with bowls of salted caramel popcorn, the city power cuts out. Silence drops over the neighborhood—and inside their glowing fort, illuminated only by fairy lights and warm candles, time completely stops.",
        "For hours, they share stories they've never told anyone else: childhood dreams, secret fears, and the exact moment each of them realized they were irrevocably in love.",
      ],
      choices: [
        { label: "Let the hours melt away into the quiet evening", to: "twilight-setting" },
      ],
    },
    "twilight-setting": {
      chapter: 2,
      scene: "rooftop",
      text: [
        "As the afternoon surrenders to dusk, the sky over the city transforms into a breathtaking gradient of violet, fiery tangerine, and deep velvet plum.",
        "They climb the iron staircase up to the rooftop terrace. The city hums beneath them—distant traffic horns, evening breezes rustling through palm fronds, and the first street lamps flickering to life like grounded stars.",
        "{B} pulls the sticky note out of their pocket. It is creased and slightly folded at the edges. Under Item Three, the word 'ROMANCE' is underlined three times with little drawn stars.",
        "\"Well, my love,\" {B} says softly, their voice quiet against the evening breeze. \"We made it to the final item. Nothing went according to the original plan. But look at where we are.\"",
      ],
      choices: [
        { label: "Take {B}'s hands and speak the truth of what they mean to you", to: "rooftop-confession" },
        { label: "Pull out a speaker and play your couple's favorite slow melody", to: "rooftop-dance" },
        { label: "Pour two glasses of chilled wine and toast to the beauty of chaos", to: "rooftop-toast" },
      ],
    },
    "rooftop-confession": {
      chapter: 2,
      scene: "rooftop",
      text: [
        "{A} takes {B}'s hands, feeling the familiar warmth of their skin and the gentle rhythm of their pulse. \"None of it went to plan, and yet it was the most perfect day of my entire life.\"",
        "{B} gazes into {A}'s eyes, their expression softening with an emotion so deep it makes the world around them fade to black and white.",
        "\"Do you know why?\" {A} continues, lifting {B}'s knuckles to press a tender kiss to the back of their hand. \"Because with you, there is no wrong turn. A burnt kitchen with you is paradise. A canceled plan with you is an adventure. Every second by your side is where I want to spend the rest of my days.\"",
        "A tear glistens at the corner of {B}'s eye before they smile, pulling {A} into an embrace so tight their heartbeats sync through their chests.",
      ],
      choices: [
        { label: "Carry this profound closeness into the final hours of the night", to: "midnight-finale" },
      ],
    },
    "rooftop-dance": {
      chapter: 2,
      scene: "rooftop",
      text: [
        "A soft, acoustic melody begins to play from the small speaker on the ledge. The guitar strings weave through the twilight air, warm and soulful.",
        "{A} extends a hand with an elegant, old-school bow. \"May I have this dance, my queen?\"",
        "{B} smiles radiantly, stepping into {A}'s arms. With no shoes on, their bare feet glide over the cool stone tiles. {B}'s cheek rests against {A}'s chest, right over their steady heartbeat.",
        "They sway slowly under the emerging evening stars, spinning gently as the city sparkles in every direction. For several songs, neither of them speaks a word—because their closeness says everything words could never capture.",
      ],
      choices: [
        { label: "Hold each other close as midnight approaches", to: "midnight-finale" },
      ],
    },
    "rooftop-toast": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "{A} uncorks a bottle of crisp sparkling wine, pouring two glasses that catch the golden reflections of the setting sun.",
        "They clink their glasses together. \"To the burnt pancakes,\" {A} toasts with a twinkle in their eye.",
        "\"To the lost akara,\" {B} adds with a laugh.",
        "\"And to the person who makes every ordinary Saturday feel like heaven on earth,\" {A} finishes, holding {B}'s gaze.",
        "They sip together, the bubbles cold and sweet against their lips. As they set the glasses down, {B} steps forward, placing both hands against {A}'s cheeks, pulling them down into a slow, breathless kiss that tastes of sweet wine and deep devotion.",
      ],
      choices: [
        { label: "Step into the night with full hearts", to: "midnight-finale" },
      ],
    },
    "midnight-finale": {
      chapter: 3,
      scene: "stars",
      text: [
        "Midnight arrives softly. The world has grown quiet, and the rooftop is illuminated only by a constellation of small glass lanterns and the wide, starlit canopy above.",
        "They sit side by side on the cushioned bench, wrapped in a single heavy blanket against the midnight chill. {B} rests their head on {A}'s shoulder, fingers tracing idle patterns on {A}'s palm.",
        "{B} pulls out the sticky note one last time. The pen is between {A}'s fingers. The day is complete, but what will become the final line of their story?",
      ],
      choices: [
        { label: "Write 'Rule 4: Do this again tomorrow, and for every tomorrow after'", to: "ending-again-tomorrow" },
        { label: "Write 'Rating: 10/10 — Chef's Kiss & Midnight Dancing'", to: "ending-chefs-kiss" },
        { label: "Turn on the hairbrush microphones for an impromptu midnight living room duet", to: "ending-duet" },
      ],
    },
    "ending-again-tomorrow": {
      chapter: 3,
      scene: "stars",
      text: [
        "{A} takes the pen and writes in clear, deliberate strokes beneath the three original items: '4) Do this again tomorrow. And every single tomorrow for the rest of our lives.'",
        "{B} reads the line, their breath hitching. They look up from the paper into {A}'s eyes, and in that silent, starlit gaze, every unspoken promise between two soulmates is sealed.",
        "\"Promise me?\" {B} whispers, leaning their forehead against {A}'s.",
        "\"I promise you with my whole life,\" {A} replies, drawing {B} into a kiss that carries all the warmth of today and all the hope of eternity.",
      ],
      ending: {
        id: "again-tomorrow-forever",
        title: "Again Tomorrow and Forever",
        mood: "sweet",
      },
    },
    "ending-chefs-kiss": {
      chapter: 3,
      scene: "kitchen",
      text: [
        "{A} writes boldly across the sticky note: 'FINAL VERDICT: 10/10. The best burnt pancakes in human history. Certified by {A} & {B}.'",
        "They retreat downstairs to the cozy kitchen, now clean and smelling of sweet cinnamon and lavender spray. In the soft golden light of the stove lamp, {B} pulls {A} into one last slow spin across the floorboards.",
        "They eat cold leftover pancakes directly from the plate with their fingers, laughing between sweet kisses and sweet bites.",
        "There were no grand hotels, no rigid itineraries, and no flawless recipes. Just two lovers who turned a Saturday into a masterclass in romance.",
      ],
      ending: {
        id: "chefs-kiss-deluxe",
        title: "Chef's Kiss & Midnight Dancing",
        mood: "sweet",
      },
    },
    "ending-duet": {
      chapter: 3,
      scene: "home",
      text: [
        "Instead of writing, {A} grabs two hairbrushes from the vanity, hands one to {B}, and cues up an explosive 80s love ballad at full volume on the living room speakers.",
        "What follows is thirty minutes of sheer, uninhibited joy. {B} belts out high notes from atop the sofa cushions like a pop diva; {A} drops to one knee during the guitar solo, clutching their chest in mock operatic passion.",
        "By the final chorus, they are singing directly into each other's eyes, forehead to forehead, laughing so hard their ribs ache. As the last note fades, {B} collapses into {A}'s arms on the rug.",
        "\"My favorite person,\" {B} pants, looking up with eyes shining with unconditional adoration. \"My forever duet partner.\"",
      ],
      ending: {
        id: "duet-of-the-century",
        title: "Duet of the Century",
        mood: "funny",
      },
    },
  },
};
