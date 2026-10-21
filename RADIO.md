# ASS2ROID: Ex Profundo — Radio

*Working document for the in-game radio: stations, songs, DJ voices and licences.*

The rover has a radio. Each station is a small gameplay modifier and a piece of world-building in the Korova Rock Tourist Guide's voice: dry, official, and completely serious about absurd things.

**Status:** songs in progress in Suno. Not yet in the game (Prototypes 1 and 2 have no sound). Planned for Prototype 3.

---

## Design principles

- **Every station has a fixed DNA.** The DNA is the station's sound and attitude. Every song on the station shares it.
- **Every song has a role:** **signature**, **driver**, **contrast** or **wildcard**. The roles keep each station varied without it feeling scattered.

  | Role | What it does |
  |------|--------------|
  | Signature | The station's hit. The song players remember the station by. |
  | Driver | Faster and more energetic. Keeps the digging going. |
  | Contrast | Slower or quieter. A breather. |
  | Wildcard | Bends the DNA furthest, e.g. instrumental or more electronic. |

- **All lyrics are about mining,** in three emotional registers:

  | Station | Register |
  |---------|----------|
  | The Pump Zone | **Body** |
  | Disco Gravitas | **Heart** |
  | Void FM | **Consciousness** |

## Rules (from the GDD)

- Music is **original**, or **AI-generated or royalty-free under licences that allow it**. No real tracks.
- Songs are generated in **Suno**. Before release, check that the Suno plan used when each song was made allows commercial use.
- DJ voices are made with **ElevenLabs**.
- Every song and voice clip gets a row in the [licence log](#licence-log) before it goes into the game.

---

## Method: lyrics with bracketed directions

The first prompts sounded flat. It worked when the lyrics included **directions for each section in brackets**: voice, energy and sound. It's like directing a performance.

**Template:**

```
[Intro: <sound>, <energy>]

[Verse 1: <voice>, <energy>]
<lyrics>

[Pre-Chorus: <voice>, <how the energy changes>]
<lyrics>

[Chorus: <voice>, <energy>, <what the band does>]
<lyrics>

[Verse 2: <voice>, <energy>]
<lyrics>

[Bridge: <voice>, <energy>, <sound change>]
<lyrics>

[Chorus: <variation, e.g. bigger, half-time, a cappella>]
<lyrics>

[Outro: <how it ends>]
```

**Example directions:**
- `[Verse 1: low gravelly voice, restrained, palm-muted guitar]`
- `[Chorus: gang vocals, full energy, drums open up]`
- `[Bridge: whispered, almost silent, only pads]`
- `[Chorus: falsetto, vocoder doubling, arpeggios return]`

**Tips:**
- One direction per section, kept short. The style prompt sets the station's DNA; the brackets direct the performance inside it.
- For songs that loop on the radio, end with a clean `[Outro]` or `[End]` rather than a long fade.

---

## Stations

### The Pump Zone

- **Concept:** the **body**. Gym meets the mine: sweat, reps, heavy lifting and heavier digging.
- **In-game effect:** digging goes slightly faster.
- **DNA:** 80s metal and gym, distorted guitars, mining lyrics, sweat and innuendo.
- **DJ: Coach Rocky.** An overly positive aerobics instructor and gym coach in one. Loud, encouraging, counts reps, and takes everything completely seriously. *"You know what you want, and if you don't, Rocky does."*
- **Example lines:**
  - *"Good morning, Korova Rock! Are you warm? Are you hydrated? Are you digging? Let's GO!"*
  - *"Four more! Three more! Two more! The rock does not respect hesitation!"*
  - *"Remember, prospectors: all documented side effects are also features. Feel the burn!"*
  - *"Never leave a bro hanging. Coming up next on The Pump Zone!"*
  - *"That frenzy you're feeling? That's not a problem. That's PROGRESS."*
- **Suno style prompt (draft):**
  > 80s heavy metal gym anthem, distorted guitars, gated reverb drums, pounding bass, gang vocals, shouted call-and-response, sweaty, cheeky innuendo, arena energy

| Role | Song | What varies |
|------|------|-------------|
| Signature | **Down in the Shaft** | Arena-sized, 150 BPM, gang vocals |
| Driver | **Heavy Ore** | Faster and tighter, more workout and shouting |
| Contrast | **Hard Hat, Hard Body** | Slower, sultry power ballad, breathy vocals |
| Wildcard | **Jackhammer Heart** | Synth metal, sequenced bass, more electronic |

### Disco Gravitas

- **Concept:** the **heart**. Love songs about mining, broadcast late at night to lonely prospectors.
- **In-game effect:** calms the frenzy meter a little.
- **DNA:** Italo and space disco, arpeggios, vocoder, love songs about mining.
- **DJ:** an over-enthusiastic host who mixes Italian and English and dedicates songs to the player.
- **Example lines:**
  - *"This one goes out to the prospector in Crater 5. Digging alone? Not tonight. Disco Gravitas!"*
  - *"Bellissimo, prospectors! It's late, the drill is warm, and this one is sweet like your mamma's Milk+. Dolce de Leche+, only on Disco Gravitas!"*
- **Suno style prompt (draft):**
  > Italo disco, space disco, arpeggiated synths, vocoder, warm analog bass, gated snare, dreamy pads, falsetto vocals, romantic, 80s

| Role | Song | What varies |
|------|------|-------------|
| Signature | **Amore Orbitale** | Mid-tempo, romantic, big chorus, falsetto |
| Driver | **I Dig You (All Night Long)** | Faster dance track, 125 BPM, playful |
| Contrast | **Dolce de Leche+** | Slow and sticky, a duet, sweet and cheesy |
| Wildcard | **Asteroid Belt Boulevard** | Instrumental space disco, lasers and vocoder |

### Void FM

- **Concept:** **consciousness**. Gazing out and falling in: the deeper you dig, the further away everyone else is.
- **In-game effect:** _not decided._
- **DNA:** melancholy futurepop, wide pads, longing and vastness, depth as loneliness.
- **DJ (draft):** a calm, slow late-night voice who talks about depth and distance as if they were the same thing. Never in a hurry.
- **Example lines (draft):**
  - *"You are three hundred metres down. Everyone you know is above you. This is Void FM."*
  - *"If you can hear this, you are deeper than the signal was designed to reach."*
- **Suno style prompt (draft):**
  > melancholy futurepop, wide lush pads, pulsing synth bass, emotional vocals, longing, vast and spacious, reverb-drenched, 80s-inspired synths

| Role | Song | What varies |
|------|------|-------------|
| Signature | **Falling Forwards Backwards Into Dimension** | Anthemic, 130 BPM, builds to an uplifting chorus |
| Driver | **Parallax for Two Prospectors** | More driving, a duet between two distant voices |
| Contrast | **No Ground Beneath, No Ceiling** | Sparse and intimate, almost whispered, slow |
| Wildcard | **Kármán Line (Extended Longing Mix)** | Long instrumental, ambient, made for drifting |

### Näsa – Big Space™ *(commercial breaks)*

- **Concept:** not a station. Every few minutes Näsa cuts into whatever is playing, which matches the pop-up ad gag in the GDD.
- **Voice:** ElevenLabs, bright and fake.
- **Example lines:**
  - *"Näsa. Big Space™."*
  - *"Tired of rock? Try less rock."*
  - *"Näsa Premium Void™. Void, but better."*
  - *"Näsa is not liable for frenzy."*
- **In-game feel:** duck the music, show a chrome pop-up, and make the close button slightly annoying to hit.

---

## Licence log

| # | Title | Station | Source (tool / composer / library) | Licence / plan | Commercial use OK? | Attribution needed | File | Date added |
|---|-------|---------|-------------------------------------|----------------|--------------------|--------------------|------|------------|
|   |       |         |                                     |                |                    |                    |      |            |

## DJ voice log

| # | Station | Line | ElevenLabs voice | Settings | File | Date added |
|---|---------|------|------------------|----------|------|------------|
|   |         |      |                  |          |      |            |

---

## Technical notes (for later)

- **Format:** `.ogg` (with `.mp3` fallback) for browser support. Keep files small enough for itch.io load times.
- **File naming:** `audio/<station>/<nn>-<slug>.ogg`, e.g. `audio/pump-zone/01-down-in-the-shaft.ogg`.
- **Browser autoplay:** sound can only start after the player's first key press or click. "Begin shift (Enter)" is a natural moment to switch the radio on.
- **Controls:** one key to change station (not yet chosen; 1–4 are taken by the shakes, P by pause).
- **Effects in `CONFIG`:** each station's gameplay modifier should live in the config object, like every other tunable number.

---

## Open questions

- Does the station effect stack with Milk+ (e.g. Disco Gravitas + Calm)?
- Should Näsa breaks be a pure joke, or a real cost (e.g. a few seconds of slower digging)?
- What does Void FM do in the game? (A thought: it fits frenzy and the deeper layers, e.g. less drift, or the hidden seam glows a moment earlier.)
- How many songs per station is enough for a 10–15 minute game? Four each gives about 12 songs in total.
