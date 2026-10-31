import type { Story } from "./types";

export const rainySunday: Story = {
  id: "rainy-sunday",
  title: "Rain on the Balcony & Warm Blankets",
  tagline: "A thunderstorm outside, soft music playing inside, and nowhere else in the world to be.",
  emoji: "🌧️",
  category: "sensual-romance",
  synopsis:
    "A thunderstorm rattles the balcony glass outside while acoustic vinyl records play softly inside. Wrapped in thick duvets, brewing spicy ginger tea, cooking breakfast in socks, and slow dancing by the rain-streaked window—a tender celebration of domestic romance.",
  estimatedMinutes: 18,
  palette: ["#1e293b", "#38bdf8"],
  chapters: [
    "I. The Storm Rolls In",
    "II. The Kitchen Symphony",
    "III. Slow Dance by the Window",
    "IV. The Forever Sunday",
  ],
  start: "morning-rain",
  nodes: {
    "morning-rain": {
      chapter: 0,
      scene: "rain",
      text: [
        "The sky over the city is a deep slate gray, heavy with thunder that rattles the glass balcony doors.",
        "A cool, sweet petrichor breeze sneaks beneath the doorway curtains. Outside, rain comes drumming down in earnest—drenching the roofs and turning the world into a quiet watercolor painting.",
        "{B} is curled under a thick duvet, hair tousled, fast asleep with one hand resting beside where {A} was sleeping just minutes ago.",
        "{A} stands by the kettle, watching the steam curl into the morning air. What is the very first thing {A} decides to do?",
      ],
      choices: [
        { label: "Brew warm spiced ginger tea and carry it back to bed", to: "spiced-tea" },
        { label: "Put on an acoustic vinyl record and crawl back under the blanket", to: "cuddle-record" },
      ],
    },
    "spiced-tea": {
      chapter: 0,
      scene: "kitchen",
      text: [
        "{A} slices fresh ginger into boiling water, stirring in wild honey and a squeeze of lime. The aroma fills the cozy kitchen with pure warmth.",
        "Carefully balancing two steaming mugs, {A} walks back into the bedroom on tiptoes. {B} stirs at the sweet fragrance, eyelids fluttering open with a sleepy, breathtaking smile.",
        "\"Is that for me, my love?\" {B}'s voice is soft and raspy, full of early morning sweetness.",
        "\"Only the best for the queen of my heart,\" {A} whispers, setting the mugs on the nightstand.",
      ],
      choices: [
        { label: "Share the warmth under the sheets and plan breakfast", to: "breakfast-plans" },
        { label: "Wrap {B} in the duvet like a burrito and kiss her forehead", to: "burrito-cuddle" },
      ],
    },
    "cuddle-record": {
      chapter: 0,
      scene: "home",
      text: [
        "The needle gently touches the groove, and Johnny Drille's warm acoustic guitar fills the quiet room.",
        "{A} slides back underneath the heavy duvet. {B} immediately sighs with contentment, shifting closer until her back rests against {A}'s chest.",
        "Her hands find {A}'s fingers and interlock tightly. Outside, lightning flashes silently behind the gray clouds, followed by a distant, gentle rumble.",
        "\"Stay like this for five more hours?\" {B} murmurs playfully.",
      ],
      choices: [
        { label: "\"Five hours? Make it the entire weekend,\" {A} replies", to: "breakfast-plans" },
        { label: "Gently kiss {B}'s neck and pull the blanket higher", to: "burrito-cuddle" },
      ],
    },
    "burrito-cuddle": {
      chapter: 0,
      scene: "home",
      text: [
        "{A} gathers the heavy blanket around {B}, bundling her into a tight, warm cocoon until only her bright eyes and smiling lips are visible.",
        "{B} giggles, struggling playfully against the fabric. \"Hey! I have rights in this relationship!\"",
        "\"You have the right to be adored, kept warm, and kissed unconditionally,\" {A} retorts, planting gentle kisses on her nose and eyelids.",
        "{B} melts completely, leaning her forehead against {A}'s cheek. \"You always know how to make every worry vanish.\"",
      ],
      choices: [
        { label: "Suggest cooking a hearty rainy day breakfast together", to: "breakfast-plans" },
      ],
    },
    "breakfast-plans": {
      chapter: 1,
      scene: "kitchen",
      text: [
        "Eventually, hunger overtakes the lazy morning warmth.",
        "They step into the kitchen together in oversized wool socks and matching sleep tees. The cold tiles feel cool underfoot, contrasting with the radiant glow of the stove.",
        "\"What's on the menu for this rainy paradise?\" {B} asks, tying her hair into a messy, gorgeous bun.",
        "{A} opens the fridge and inspects the supplies. Two mouthwatering paths reveal themselves.",
      ],
      choices: [
        { label: "Fluffy cinnamon buttermilk pancakes with maple drizzle and berries", to: "pancakes-route" },
        { label: "Spicy homemade plantain & egg scramble with toasted sourdough", to: "plantain-route" },
      ],
    },
    "pancakes-route": {
      chapter: 1,
      scene: "kitchen",
      text: [
        "Whisking eggs, buttermilk, and vanilla into flour, {A} creates a golden, silky batter. {B} stands right beside, sprinkling freshly grated cinnamon with absolute concentration.",
        "When the first pancake hits the buttered skillet, the sizzle sounds like applause. The kitchen smells like a high-end bakery in Paris.",
        "{B} sneaks a swipe of sweet batter with her finger and taps it playfully on {A}'s nose. \"Chef {A}, you passed the taste test!\"",
        "{A} laughs, trapping {B} against the kitchen counter with an arm around her waist.",
      ],
      choices: [
        { label: "Wipe it off with a kiss and flip the pancakes", to: "dining-together" },
        { label: "Feed each other warm strawberries while waiting", to: "dining-together" },
      ],
    },
    "plantain-route": {
      chapter: 1,
      scene: "kitchen",
      text: [
        "Ripe, sweet yellow plantains are diced into perfect golden cubes and fried until caramelized. Meanwhile, {B} whisks farm eggs with diced red peppers, sweet onions, and aromatic herbs.",
        "The sizzle of the pan blends harmoniously with the steady rhythm of rain striking the glass.",
        "As {A} plates the steaming scramble onto warm ceramic dishes, {B} cuts thick slices of toasted bread, butter melting into golden pools.",
        "\"Look at us, an unstoppable culinary team,\" {B} beams, admiring the colorful spread.",
      ],
      choices: [
        { label: "Carry the plates over to the living room coffee table", to: "dining-together" },
      ],
    },
    "dining-together": {
      chapter: 1,
      scene: "home",
      text: [
        "They sit side-by-side on floor cushions in front of the coffee table, wrapped together in a single oversized fleece throw.",
        "Every bite is sheer bliss. Between bites, they talk about everything: childhood memories, funny inside jokes that make them laugh until their ribs ache, and quiet plans for future travels.",
        "Rain streams down the floor-to-ceiling windows, turning the city skyline into blurred streaks of neon and amber.",
        "{B} rests her head on {A}'s shoulder with a contented sigh. \"I don't think I've ever felt this at peace.\"",
      ],
      choices: [
        { label: "Clear the table and pull {B} into a slow dance in the living room", to: "slow-dance-setup" },
        { label: "Bring out a board game and challenge each other to a duel", to: "board-game-setup" },
      ],
    },
    "board-game-setup": {
      chapter: 2,
      scene: "home",
      text: [
        "{A} brings out Scrabble, but with custom house rules: every word played must either be romantic, an inside joke, or earn a mandatory kiss from the other player.",
        "{B} takes it with deadly competitive seriousness. Her eyes sparkle as she spells out 'SWEETHEART' on a triple word score.",
        "\"Look at that score! You're going down, babe!\" {B} cheers victoriously.",
        "{A} smiles, leaning across the board. \"I'm happy to lose every game in the universe if it means looking at that victorious smile of yours.\"",
      ],
      choices: [
        { label: "Surrender with honor and invite {B} to slow dance", to: "slow-dance-setup" },
      ],
    },
    "slow-dance-setup": {
      chapter: 2,
      scene: "city-night",
      text: [
        "The afternoon slips into twilight. The rain softens into a steady, rhythmic mist that bathes the city in cool blue shadows.",
        "{A} turns off the main ceiling lamps, leaving only the amber fairy lights glowing along the bookshelf and the faint reflection of the rain.",
        "A slow, soulful ballad begins to play—warm saxophone and muted piano chords filling every corner.",
        "{A} extends a hand with an old-school gentleman's bow. \"May I have this dance, {B}?\"",
        "{B}'s smile catches the ambient light. She slips her soft palm into {A}'s.",
      ],
      choices: [
        { label: "Pull her close and sway gently to the music", to: "swaying-together" },
        { label: "Step out onto the covered balcony to dance in the cool rain breeze", to: "balcony-dance" },
      ],
    },
    "swaying-together": {
      chapter: 2,
      scene: "stars",
      text: [
        "One of {A}'s hands rests gently on {B}'s lower back; the other holds her fingers pressed against his chest where his heartbeat drums in sync.",
        "{B} rests her cheek against {A}'s collarbone, breathing in the scent of rain, sandalwood, and sweet breakfast spices.",
        "They move slowly, feet barely leaving the rug. The entire noisy world—traffic, deadlines, distance, stress—ceases to exist.",
        "\"Thank you for loving me like this,\" {B} whispers into {A}'s ear, her fingers tightening around {A}'s hand. \"You make me feel like the most cherished woman alive.\"",
      ],
      choices: [
        { label: "Tell her every reason why she is your whole world", to: "heartfelt-confession" },
        { label: "Spin her gently under your arm and pull her back into a warm dip", to: "playful-dip" },
      ],
    },
    "balcony-dance": {
      chapter: 2,
      scene: "rain",
      text: [
        "They step out onto the covered balcony. The air is cool and crisp, carrying the misty spray of raindrops on the breeze.",
        "Below, car headlights crawl through the shimmering streets, their reflections dancing like liquid gold in the puddles.",
        "{A} pulls {B} into a protective embrace, shielding her from the light mist while their bodies radiate pure heat.",
        "{B} looks up into {A}'s eyes, raindrops glistening like tiny diamonds in her eyelashes.",
      ],
      choices: [
        { label: "Kiss her softly in the cool rainy air", to: "heartfelt-confession" },
        { label: "Whisper your deepest promise into her ear", to: "playful-dip" },
      ],
    },
    "playful-dip": {
      chapter: 2,
      scene: "home",
      text: [
        "With theatrical flair, {A} spins {B} gracefully. Her laughter rings out like chimes before {A} catches her securely in a smooth, cinematic dip.",
        "{B} gasps, eyes wide with delight, hands gripping {A}'s shoulders.",
        "Suspended in the air, framed by amber fairy lights and the gray rain outside, they freeze for a heartbeat. Time itself seems to pause out of respect for their love.",
        "{A} lifts her back up effortlessly and draws her so close their foreheads touch.",
      ],
      choices: [
        { label: "Pour your heart into words that will last a lifetime", to: "heartfelt-confession" },
      ],
    },
    "heartfelt-confession": {
      chapter: 3,
      scene: "home",
      text: [
        "The storm is dying down, replaced by a soft, tranquil evening drizzle.",
        "{A} gently cups {B}'s face in both hands, thumbs smoothing over her soft cheekbones. \"No matter what storms come in life, {B}, I will always be your shelter. You are my safe harbor, my favorite song, and my greatest blessing.\"",
        "A tear of pure joy shines in the corner of {B}'s eye. She leans up on her toes and presses her lips to {A}'s—a kiss that feels like coming home after a hundred lifetimes.",
        "Night begins to fall over the city, wrapping the cozy apartment in peace.",
      ],
      choices: [
        { label: "Build a candlelit pillow fort in the living room for a movie marathon", to: "ending-cozy-fort" },
        { label: "Step out onto the balcony under the clearing stars with warm cider", to: "ending-clearing-skies" },
        { label: "Return to the duvet cocoon and whisper bedtime promises until sleep", to: "ending-duvet-cocoon" },
      ],
    },
    "ending-cozy-fort": {
      chapter: 3,
      scene: "home",
      text: [
        "They build an elaborate fortress of cushions, heavy comforters, and twinkling fairy lights across the carpet.",
        "Inside, it is a secret kingdom for two. With a laptop playing their favorite romantic classic and a bowl of buttered popcorn between them, {B} snuggles deep into {A}'s side.",
        "As the final credits roll and the candle flames flicker lazily, they fall asleep entangled in blankets—warm, safe, and completely in love.",
      ],
      ending: {
        id: "rainy-pillow-fort",
        title: "The Candlelit Kingdom for Two",
        mood: "sweet",
      },
    },
    "ending-clearing-skies": {
      chapter: 3,
      scene: "stars",
      text: [
        "The storm clouds part like velvet curtains, revealing a crisp indigo night sky studded with stars.",
        "Standing side by side on the balcony with steaming cups of warm spiced cider, they look out over the glittering city.",
        "{A} wraps a thick knitted blanket around both of their shoulders, pulling {B} tight against his side. The night air is cold, but inside their embrace, it is pure summer.",
        "\"Here's to a lifetime of rainy Sundays with you,\" {B} whispers, toasting her cup against {A}'s under the stars.",
      ],
      ending: {
        id: "rainy-clearing-stars",
        title: "Stars After the Storm",
        mood: "epic",
      },
    },
    "ending-duvet-cocoon": {
      chapter: 3,
      scene: "home",
      text: [
        "Back in bed, beneath the heavy layers of duvets, the world is quiet and dark save for the gentle hum of the city.",
        "{A} traces gentle patterns on {B}'s arm as her breathing slows into the rhythmic depth of slumber.",
        "Before she drifts off, {B} rolls over, nuzzles her nose into {A}'s neck, and whispers: \"I love you, {A}. In this world and every other.\"",
        "{A} smiles into the dark, closing his eyes with a heart overflowing with gratitude.",
      ],
      ending: {
        id: "rainy-forever-sleep",
        title: "Warm Whispers into the Night",
        mood: "sweet",
      },
    },
  },
};
