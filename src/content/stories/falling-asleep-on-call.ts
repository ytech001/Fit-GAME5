import type { Story } from "./types";

export const fallingAsleepOnCall: Story = {
  id: "falling-asleep-on-call",
  title: "Midnight Whispers: Falling Asleep on Call",
  tagline: "Two phones resting on pillows, quiet laughter in the dark, and breathing together across the miles.",
  emoji: "🌙",
  category: "just-you-and-me",
  synopsis:
    "When distance keeps {A} and {B} in separate rooms, a late-night phone call becomes an intimate sanctuary. Pillows propped up, voices lowered to soft whispers, confessions shared in the dark, and the irreplaceable comfort of falling asleep to the steady sound of each other's breathing.",
  estimatedMinutes: 16,
  palette: ["#1e1b4b", "#c084fc"],
  chapters: [
    "I. The 11 P.M. Notification",
    "II. Pillow Talk & Unfiltered Truths",
    "III. Soft Breaths in the Quiet Hours",
    "IV. Waking Up to Your Voice",
  ],
  start: "phone-rings",
  nodes: {
    "phone-rings": {
      chapter: 0,
      scene: "city-night",
      text: [
        "It is 11:14 P.M. The bedroom is dim, lit only by the ambient amber glow of the city streetlights filtering through the blinds. Outside, the night is quiet, the kind of stillness that makes an empty bed feel twice as wide.",
        "{A} is lying on their side, thumb scrolling aimlessly through the screen. Just as a heavy sigh escapes their chest, the screen illuminates with an incoming call: '{B} 💞' with the little picture of {B} laughing in an oversized sweater.",
        "{A} swipes to answer before the second ring even finishes.",
        "\"Hey you,\" {B}'s voice comes through the speaker—soft, slightly raspy with tiredness, and filled with an immediate, breathtaking warmth. \"Are you already asleep?\"",
      ],
      choices: [
        { label: "\"Never too tired for you. I was just staring at the ceiling wishing you were here.\"", to: "honest-longing" },
        { label: "\"I was waiting for my favorite notification of the day.\"", to: "sweet-flirt" },
      ],
    },
    "honest-longing": {
      chapter: 0,
      scene: "city-night",
      text: [
        "{B} lets out a quiet, tender exhale on the other end. In the background, the rustle of bedsheets and the soft patter of night rain against glass can be heard.",
        "\"I know the feeling,\" {B} whispers softly. \"My apartment feels way too quiet tonight. I tried reading, but every single line reminded me of you. So I put on my softest pajamas, tucked under the heavy blanket, and decided I wasn't going to sleep without hearing your voice.\"",
        "{A} smiles into the dark, resting their phone on the pillow beside their ear so it feels like {B} is lying right there.",
      ],
      choices: [
        { label: "Prop the phone against the lamp and settle in for pillow talk", to: "pillow-talk-start" },
      ],
    },
    "sweet-flirt": {
      chapter: 0,
      scene: "city-night",
      text: [
        "{B} giggles, that soft, melodic sound that always makes {A}'s chest tighten with affection. \"Is that so? Am I your favorite notification, or just the only person awake at midnight willing to tolerate your nonsense?\"",
        "\"You are my favorite everything,\" {A} replies without hesitation, voice low and steady. \"And you know it.\"",
        "\"I do know it,\" {B} concedes softly. \"And don't you dare stop reminding me.\"",
        "The gentle rustle of a duvet shifting sounds through the speaker as {B} pulls the blanket up to their chin.",
      ],
      choices: [
        { label: "Prop the phone against the lamp and settle in for pillow talk", to: "pillow-talk-start" },
      ],
    },
    "pillow-talk-start": {
      chapter: 1,
      scene: "home",
      text: [
        "The conversation drifts easily from the trivial chaos of the day into deeper, quieter waters. They talk about the small things: the silly email {B}'s coworker sent, the stubborn song that got stuck in {A}'s head all afternoon, the dinner that didn't turn out quite right.",
        "Then, as the clock slips past midnight, the tone shifts into that sacred, unguarded honesty that only exists in the early hours of the morning.",
        "\"Tell me something you've never told anyone else,\" {B} murmurs. The microphone captures the faint sound of {B}'s breathing, slow and rhythmic.",
      ],
      choices: [
        { label: "Confess the exact moment you realized you were irrevocably in love", to: "confess-moment" },
        { label: "Share your secret fear of the world and how {B} makes you feel safe", to: "confess-vulnerability" },
        { label: "Describe the home and future you dream of building together", to: "confess-future" },
      ],
    },
    "confess-moment": {
      chapter: 1,
      scene: "home",
      text: [
        "{A} closes their eyes, letting the memory flood their chest. \"It was that Tuesday three months after we met. It was pouring rain, and we were running under that small bus shelter. You were shivering, but you reached out and wiped raindrops from my forehead and smiled like we were in the middle of a five-star ballroom.\"",
        "{A}'s voice drops to a near whisper: \"I looked at your smile and I thought: if I don't spend the rest of my life keeping this person warm and safe, I will have wasted my time on earth.\"",
        "Over the speaker, {B} goes completely still. A soft, breathless sniffle breaks the quiet. \"{A}... you're going to make me cry into my pillow.\"",
        "\"Only happy tears allowed on this call, my love.\"",
      ],
      choices: [
        { label: "Listen as the silence becomes warm and full of peace", to: "sleep-approaches" },
      ],
    },
    "confess-vulnerability": {
      chapter: 1,
      scene: "home",
      text: [
        "{A} takes a slow, steady breath. \"Sometimes the world feels so overwhelming—the pressure, the speed, the feeling that you have to prove yourself to everyone. But the second I hear your voice, the static in my head just... stops.\"",
        "\"You are the only place in this entire universe where I feel completely, entirely at peace. Like I don't have to carry armor. Like I am already enough.\"",
        "{B} shifts closer to their phone, voice thick with emotion. \"You are more than enough, {A}. You are my anchor. Whenever the storm gets too loud, you are the person I look for.\"",
      ],
      choices: [
        { label: "Listen as the silence becomes warm and full of peace", to: "sleep-approaches" },
      ],
    },
    "confess-future": {
      chapter: 1,
      scene: "home",
      text: [
        "\"I think about our future all the time,\" {A} confesses with a tender smile. \"A bedroom with big windows that catch the sunrise. A kitchen where we trip over each other making morning coffee. A porch where we can sit in silence and just hold hands after a long day.\"",
        "\"No screens between us. Just rolling over and pulling you into my arms whenever I want.\"",
        "{B} sighs contentedly against their pillow. \"That is my favorite dream in the world. And we're going to build it, {A}. Every single piece of it.\"",
      ],
      choices: [
        { label: "Listen as the silence becomes warm and full of peace", to: "sleep-approaches" },
      ],
    },
    "sleep-approaches": {
      chapter: 2,
      scene: "candlelight",
      text: [
        "1:45 A.M. The pauses between their sentences grow longer, softer. Neither wants to hang up. The red 'end call' button on their screens feels like an enemy.",
        "\"Don't hang up,\" {B} mumbles drowsily, their words starting to slur with the sweet heaviness of sleep. \"Just... stay on the line until I drift off.\"",
        "\"I'm not going anywhere,\" {A} replies gently. \"I'm right here with you. Close your eyes, babe.\"",
        "\"Promise you won't leave?\"",
        "\"I promise. Sleep well, my beautiful queen.\"",
      ],
      choices: [
        { label: "Hum a gentle, quiet melody into the receiver", to: "hum-melody" },
        { label: "Whisper gentle words of love until their breathing deepens", to: "whisper-love" },
      ],
    },
    "hum-melody": {
      chapter: 2,
      scene: "stars",
      text: [
        "{A} begins to hum a slow, soothing acoustic lullaby—the rhythm of a heartbeat, steady and warm. Through the phone, {B}'s faint movements quiet down.",
        "The soft rustle of hair against cotton slows. Then comes a deep, peaceful sigh. {B}'s breathing levels into that slow, steady rhythm of deep, safe sleep.",
        "{A} lies in the dark, listening to that quiet breath. Distance has stolen the physical warmth of their skin tonight, but it cannot touch the closeness woven through the phone line.",
      ],
      choices: [
        { label: "Rest your head on the pillow and let yourself drift to sleep beside them", to: "dawn-arrival" },
      ],
    },
    "whisper-love": {
      chapter: 2,
      scene: "stars",
      text: [
        "\"You are safe. You are loved. Tomorrow is going to be beautiful,\" {A} whispers softly, pacing each word with the rhythm of {B}'s breaths. \"I love the way your eyes crinkle when you laugh. I love how deeply you care for people. I love you, {B}. So very much.\"",
        "A faint, sleepy murmur comes through the line: \"...love you more, {A}...\"",
        "And then, quiet. Just the gentle, rhythmic cadence of slumber.",
      ],
      choices: [
        { label: "Rest your head on the pillow and let yourself drift to sleep beside them", to: "dawn-arrival" },
      ],
    },
    "dawn-arrival": {
      chapter: 3,
      scene: "sky",
      text: [
        "6:30 A.M. The first pale golden rays of dawn slant through the window, painting the bedroom wall in warm honey. Outside, morning birds begin to chirp in the garden trees.",
        "{A} stirs awake, blinking against the new light. The phone screen on the pillow is still softly lit. The timer reads: 'Call duration: 7 hours, 18 minutes, 42 seconds.'",
        "From the speaker comes a soft, sleepy yawn, followed by the sound of someone stretching beneath a heavy blanket.",
        "\"Good morning, sleepyhead,\" {B}'s morning voice murmurs, thick and raspy and unimaginably sweet.",
      ],
      choices: [
        { label: "\"Good morning, my love. Did you sleep peacefully?\"", to: "ending-peaceful" },
        { label: "\"Best seven hours of sleep I've had all week.\"", to: "ending-sweet-morning" },
        { label: "\"Pack your bags—I'm not doing another night without you.\"", to: "ending-spontaneous" },
      ],
    },
    "ending-peaceful": {
      chapter: 3,
      scene: "home",
      text: [
        "\"I slept like I was in your arms,\" {B} whispers softly. \"Waking up and hearing you breathe was the best start to my day.\"",
        "They stay on the line for another twenty minutes, listening to the morning wake up around them, drinking their respective cups of tea while sharing the first smile of the day.",
        "Miles may separate their pillows, but their hearts had never spent a single second apart.",
      ],
      ending: {
        id: "peaceful-dawn-reunion",
        title: "Peaceful Dawn Across the Miles",
        mood: "sweet",
      },
    },
    "ending-sweet-morning": {
      chapter: 3,
      scene: "kitchen",
      text: [
        "{B} giggles into the receiver, the sound bubbling like fresh coffee. \"Seven hours on the phone! Our battery health is probably crying, but my heart has never been fuller.\"",
        "{A} walks into the kitchen with the phone propped on the counter, brewing tea while {B} does the same hundreds of miles away.",
        "\"To our permanent morning routine,\" {A} toasts with their mug.",
        "\"To us,\" {B} replies. \"Always and forever.\"",
      ],
      ending: {
        id: "seven-hour-call",
        title: "Seven Hours, Zero Distance",
        mood: "sweet",
      },
    },
    "ending-spontaneous": {
      chapter: 3,
      scene: "city-night",
      text: [
        "{B} pauses on the other line, surprised. \"Wait... are you serious?\"",
        "\"Dead serious,\" {A} smiles, already pulling open their travel bag. \"I'm booking the early flight right now. I'll be at your front door before lunch.\"",
        "{B} lets out a joyful squeal that echoes through the room. \"Then I'm making your favorite breakfast, {A}! Hurry—I'm already counting down the minutes!\"",
        "Some calls put you to sleep. The best calls wake up your courage to go get the person you love.",
      ],
      ending: {
        id: "midnight-to-morning-flight",
        title: "From Midnight Whispers to Your Doorstep",
        mood: "epic",
      },
    },
  },
};
