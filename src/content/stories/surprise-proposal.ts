import type { Story } from "./types";

export const surpriseProposal: Story = {
  id: "surprise-proposal",
  title: "Under an Endless Sky: The Surprise Proposal",
  tagline: "Months of secret preparations, a velvet box hidden in a coat pocket, and the four words that change everything.",
  emoji: "💍",
  category: "our-love",
  synopsis:
    "For six meticulous months, {A} has guarded the most precious secret of their life: a bespoke emerald-cut diamond ring and a private sunset setup on the cliffs overlooking the Atlantic. With {B} completely unaware, an ordinary weekend getaway transforms into an unforgettable emotional climax where two souls seal a forever promise.",
  estimatedMinutes: 20,
  palette: ["#1e1b4b", "#fbbf24"],
  chapters: [
    "I. The Secret in the Coat Pocket",
    "II. The Cliffside Sanctuary",
    "III. Sunset Over the Waves",
    "IV. Down on One Knee",
    "V. The Forever Celebration",
  ],
  start: "coat-pocket-secret",
  nodes: {
    "coat-pocket-secret": {
      chapter: 0,
      scene: "city-night",
      text: [
        "Every few minutes, {A}'s right hand involuntarily drifts to the inner left breast pocket of their coat. There, nestled securely against their chest, is a small, heavy cube of dark navy velvet.",
        "Inside that box is an emerald-cut diamond ring, custom-forged with subtle filigree engraving inside the band: *'My today, my tomorrow, my always.'*",
        "Across the passenger seat, {B} is cheerfully singing along to the radio, completely oblivious. {B} thinks this is just a spontaneous weekend escape to a boutique villa on the coastal cliffs.",
        "\"You're quiet today, babe,\" {B} remarks playfully, nudging {A}'s arm. \"Are you plotting something, or is the road captivating your soul?\"",
      ],
      choices: [
        { label: "\"I'm just admiring how beautiful you look in this afternoon light.\"", to: "deflect-romance" },
        { label: "\"Just thinking about how blessed I am to be heading into the sunset with you.\"", to: "deflect-gratitude" },
      ],
    },
    "deflect-romance": {
      chapter: 0,
      scene: "city-night",
      text: [
        "{B} smiles radiantly, turning slightly pink as they swat {A}'s shoulder. \"Smooth talker. Keep your eyes on the road! But don't stop complimenting me.\"",
        "{A} lets out a quiet, nervous chuckle, fingers brushing the velvet box one more time. The weight of the moment is thrilling, terrifying, and utterly beautiful.",
      ],
      choices: [
        { label: "Arrive at the secluded coastal villa atop the cliffs", to: "villa-arrival" },
      ],
    },
    "deflect-gratitude": {
      chapter: 0,
      scene: "city-night",
      text: [
        "{B}'s expression softens into that tender, warm look that has always felt like home. {B} reaches across and places a warm hand over {A}'s on the gearshift.",
        "\"Me too, {A}. There's nowhere else I'd rather be.\"",
        "The car turns up the private cliffside path, gravel crunching under tires as the vast expanse of the Atlantic Ocean appears in breathtaking majesty.",
      ],
      choices: [
        { label: "Arrive at the secluded coastal villa atop the cliffs", to: "villa-arrival" },
      ],
    },
    "villa-arrival": {
      chapter: 1,
      scene: "island",
      text: [
        "The villa is perched high upon a dramatic rocky promontory where emerald cliffs plunge into the sapphire ocean. White linen curtains flutter from wide open glass terraces, and the roar of the surf sounds like timeless poetry.",
        "While {B} steps into the bedroom to freshen up and marvel at the ocean view, {A} slips outside to coordinate with the villa staff.",
        "At the edge of the private grassy bluff overlooking the sea, a path of cream and blush rose petals leads to a circle of flickering glass lanterns. A chilled bucket of vintage champagne sits beside a low table decorated with fresh white lilies.",
        "The golden hour is beginning: the sun has dipped to twenty degrees above the horizon, painting the clouds in melted peach, gold, and crimson.",
      ],
      choices: [
        { label: "Take a deep breath, center your heart, and invite {B} out to the bluff", to: "invite-to-bluff" },
      ],
    },
    "invite-to-bluff": {
      chapter: 1,
      scene: "balcony",
      text: [
        "{A} walks back into the suite. {B} is standing by the French doors in a breathtaking flowing silk dress, hair catching the ocean breeze.",
        "\"Come with me for a minute, my love,\" {A} says softly, extending a hand. \"There's something I want to show you before the sun goes down.\"",
        "{B} takes {A}'s hand, noticing for the first time the slight tremor in their fingers. \"{A}? Is everything okay? Your hands are warm, but you look so serious.\"",
        "\"Everything is better than okay,\" {A} smiles, leading {B} out onto the stone steps toward the cliff path.",
      ],
      choices: [
        { label: "Lead {B} down the rose-petal pathway toward the lanterns", to: "sunset-over-waves" },
      ],
    },
    "sunset-over-waves": {
      chapter: 2,
      scene: "beach",
      text: [
        "As they round the flowering bougainvillea hedge, {B} freezes. Their hand flies to their mouth, eyes widening in pure astonishment.",
        "The entire cliff edge is glowing in the warm light of fifty lanterns. The rose petals form a gentle path leading right to the edge of the world, where the ocean waves break into foam beneath a sky ablaze with liquid gold.",
        "Soft instrumental music begins playing from concealed speakers—the very melody that played the first night they danced together in their living room.",
        "\"Oh my goodness...\" {B} whispers, tears instantly gathering in their dark, shining eyes. \"{A}... what is this?\"",
      ],
      choices: [
        { label: "Take both of {B}'s hands and look directly into their soul", to: "speech-moment" },
      ],
    },
    "speech-moment": {
      chapter: 2,
      scene: "rooftop",
      text: [
        "{A} leads {B} into the center of the lantern circle, turning to face them completely. The ocean wind tugs at their clothes, but the world between them is absolute, sacred silence.",
        "{A}'s voice is thick with emotion, steady yet trembling with love: \"{B}, from the day you walked into my life, you didn't just change my world—you became my world.\"",
        "\"You have seen me at my strongest and held me at my weakest. You make me laugh until my stomach hurts, you challenge me to be a better human being, and you love me with a kindness that I never knew existed before you.\"",
        "Tears are streaming freely down {B}'s cheeks now, hands clutching {A}'s wrists as they hang on every single word.",
      ],
      choices: [
        { label: "Reach into your coat pocket and drop down onto one knee", to: "down-on-one-knee" },
      ],
    },
    "down-on-one-knee": {
      chapter: 3,
      scene: "candlelight",
      text: [
        "{A} takes a slow, reverent breath, reaches into their breast pocket, and pulls out the velvet box.",
        "Sinking gracefully onto one knee on the grassy bluff beneath the glowing sunset, {A} flips the lid open. The diamond catches the last rays of the golden sun, flashing with brilliant fire.",
        "\"{B}, I don't want to live a single day on this earth that doesn't start and end with you. I want to build a life with you. I want to weather every storm and celebrate every victory with you.\"",
        "{A} looks up into {B}'s tear-streaked, glowing face: \"Will you marry me, my queen? Will you make me the happiest person in the universe and be my wife?\"",
      ],
      choices: [
        { label: "Listen to {B}'s breathless, joyful answer", to: "the-joyful-yes" },
      ],
    },
    "the-joyful-yes": {
      chapter: 3,
      scene: "stars",
      text: [
        "For a split second, {B} can hardly breathe. Then, with a tearful, triumphant sob of pure joy, {B} falls forward onto their knees beside {A}, wrapping both arms tightly around {A}'s neck.",
        "\"Yes! Yes! A thousand million times, YES!\" {B} cries out, kissing {A}'s cheek, their forehead, their lips in breathless, ecstatic succession.",
        "{A} laughs through tears of relief and bliss, sliding the shimmering diamond ring onto {B}'s finger. It slides on with effortless perfection.",
        "{B} holds up their hand against the sunset sky, looking at the ring through tears. \"It's the most gorgeous thing I have ever seen in my life.\"",
        "\"It looks even better on you,\" {A} whispers, lifting {B} straight into the air in a triumphant spin.",
      ],
      choices: [
        { label: "Pop the vintage champagne and toast to forever", to: "forever-celebration" },
      ],
    },
    "forever-celebration": {
      chapter: 4,
      scene: "candlelight",
      text: [
        "The champagne cork pops toward the twilight sky with a joyful sound. The golden bubbles froth into crystal flutes as twilight settles over the ocean.",
        "They sit together on the cliffside lounge, wrapped in a single cashmere throw, calling their closest family and friends to share the monumental news. Squeals of joy and congratulations echo from speakerphones across time zones.",
        "When the phone calls finally end and the night falls completely, the stars emerge overhead in their millions, reflecting across the calm, dark ocean.",
      ],
      choices: [
        { label: "Slow dance under the starlight as newly betrothed partners", to: "ending-starlight-fiance" },
        { label: "Whisper private vows of what your future marriage will be", to: "ending-vow-exchange" },
        { label: "Carry your fiancé inside into the warm, candlelit villa", to: "ending-villa-intimacy" },
      ],
    },
    "ending-starlight-fiance": {
      chapter: 4,
      scene: "stars",
      text: [
        "They sway barefoot on the cliff grass to the gentle sound of the waves. {B} rests their ear against {A}'s chest, listening to the steady, victorious beat of their heart.",
        "{B} lifts their left hand, the diamond twinkling under the starlight. \"Fiancé,\" {B} tests the word out loud, smiling into {A}'s shoulder. \"I think I could get used to saying that.\"",
        "\"Get used to it,\" {A} smiles, kissing {B}'s temple. \"Because next year, the word becomes 'my wife'.\"",
      ],
      ending: {
        id: "starlight-fiance",
        title: "Under an Endless Sky",
        mood: "sweet",
      },
    },
    "ending-vow-exchange": {
      chapter: 4,
      scene: "candlelight",
      text: [
        "By candlelight, they share their personal promises for the marriage ahead: to never stop dating, to never go to bed angry without talking it through, and to always put their bond before the noise of the world.",
        "{B} takes {A}'s face in both hands, their thumb tracing {A}'s lower lip. \"I have loved you from the start, {A}. But tonight, I feel like my heart has expanded into something infinite.\"",
        "They seal their private vows with a kiss that carries the weight of a lifetime of devotion.",
      ],
      ending: {
        id: "private-vows-sealed",
        title: "Vows Written on the Ocean",
        mood: "sweet",
      },
    },
    "ending-villa-intimacy": {
      chapter: 4,
      scene: "candlelight",
      text: [
        "{A} lifts {B} into their arms and carries them through the French doors into the master suite, where hundreds of tea lights illuminate petals scattered across the bed.",
        "They laugh softly as {A} sets {B} down onto the soft silk sheets. In the warm, flickering shadows, their kisses become slow, passionate, and deeply sacred—the beginning of a lifetime that belongs only to the two of them.",
      ],
      ending: {
        id: "forever-begins-tonight",
        title: "Forever Begins Tonight",
        mood: "sweet",
      },
    },
  },
};
