# ASS2ROID: Ex Profundo — Radio

*Working document for the in-game radio: stations, music, DJ voices and licences.*

The rover has a radio. Each station is a small gameplay modifier and a piece of world-building in the Korova Rock Tourist Guide's voice: dry, official, and completely serious about absurd things.

**Status:** not started in the game. Prototypes 1 and 2 have no sound.

---

## Rules (from the GDD)

- Music is **original**, or **AI-generated or royalty-free under licences that allow it**. No real tracks.
- DJ voices are made with **ElevenLabs**.
- Every track and voice clip gets a row in the [licence log](#licence-log) before it goes into the game.

---

## Stations

### Italo Korova *(suave cruising)*: on air as **Disco Gravitas**
- **Effect:** calms the frenzy meter a little.
- **Generation prompt:**
  > instrumental sleazy 80s sci-fi thriller soundtrack, smooth night cruise, 100 bpm, warm analog bass, gated reverb snare, soft saxophone lead, dreamy pads, steady groove, no big build, no outro, no vocals
- **DJ:** an over-enthusiastic host who mixes Italian and English and dedicates songs to the player.
- **DJ lines:**
  - *"This one goes out to the prospector in Crater 5. Digging alone? Not tonight. Disco Gravitas!"*
  - *"Bellissimo, prospectors! It's late, the drill is warm, and this one is sweet like your mamma's Milk+. Dolce de Leche+, only on Disco Gravitas!"*
- **Songs:**
  1. **Amore Orbitale**: the station's signature hit
  2. **I Dig You (All Night Long)**
  3. **Asteroid Belt Boulevard**
  4. **Dolce de Leche+**

### The Pump Zone *(gym)*
- **Effect:** digging goes slightly faster.
- **Style prompt** (base; instrumental, no lyrics: Coach Rocky does the talking between tracks):
  > instrumental 1980s aerobics workout track, 128 BPM, gated reverb drums, slap bass, punchy synth brass, call-and-response between brass and synth, high energy, VHS fitness video, cheesy and euphoric, no vocals
- **DJ: Coach Rocky.** An overly positive aerobics instructor and gym coach in one. Loud, encouraging, counts reps, and takes everything completely seriously. *"You know what you want, and if you don't, Rocky does."*
- **DJ lines:**
  - *"Good morning, Korova Rock! Are you warm? Are you hydrated? Are you digging? Let's GO!"*
  - *"Four more! Three more! Two more! The rock does not respect hesitation!"*
  - *"Remember, prospectors: all documented side effects are also features. Feel the burn!"*
  - *"Never leave a bro hanging. Coming up next on The Pump Zone!"*
  - *"That frenzy you're feeling? That's not a problem. That's PROGRESS."*
- **Songs** (a workout arc: warm-up, strength, peak, cool-down; all instrumental, looping):
  1. **Loading Dose** *(the warm-up; first dose of the shift)*
     > instrumental 1980s aerobics warm-up track, 124 BPM, gated reverb drums, bouncy slap bass, punchy synth brass, call-and-response between brass and synth, energy rising step by step, VHS fitness video opening, cheesy and euphoric, steady groove, no outro, no vocals
  2. **Body Mass** *(the heavy one; power and bulk)*
     > instrumental 1980s aerobics strength workout track, 128 BPM, stomping gated reverb drums, heavy distorted slap bass, massive synth brass stabs, call-and-response between brass and synth, powerful and swaggering, VHS fitness video, cheesy and euphoric, steady groove, no outro, no vocals
  3. **Feel the Burn (In the Crater)** *(peak cardio; the fastest)*
     > instrumental 1980s high-intensity aerobics track, 132 BPM, driving gated reverb drums, fast slap bass, screaming synth brass, call-and-response between brass and synth, echoing cavernous reverb, sweaty and relentless, VHS fitness video, cheesy and euphoric, steady groove, no outro, no vocals
  4. **Arnold j'adore** *(the cool-down pose-down; Euro camp)*
     > instrumental 1980s Euro disco bodybuilding posing routine, 120 BPM, gated reverb drums, rubbery slap bass, glossy synth brass, call-and-response between brass and synth, flexing and admiring, sultry and over the top, VHS fitness video, cheesy and euphoric, steady groove, no outro, no vocals
- **Tempo note:** if the game needs one fixed tempo for the digging-speed effect, set all four to 128 BPM.

### Void FM *(gazing out and falling in)*
- **Effect:** _not decided._
- **Generation prompt:**
  > instrumental dark ambient, vast and weightless, slow descending pads, deep sub drone, long reverb tails, sparse glassy pings, feeling of falling inward, no melody, no drums, slow steady pulse, no big build, no outro, no vocals, endlessly descending tone
- **Tracks:** _none yet_

### Näsa – Big Space™ *(commercial breaks)*
Not a station. Every few minutes it cuts into whatever is playing, which matches the pop-up ad gag in the GDD.
- **Voice lines** (ElevenLabs, bright and fake):
  - *"Näsa. Big Space™."*
  - *"Tired of rock? Try less rock."*
  - *"Näsa Premium Void™. Void, but better."*
  - *"Näsa is not liable for frenzy."*
- **In-game feel:** duck the music, show a chrome pop-up, and make the close button slightly annoying to hit.

---

## Licence log

| # | Title | Station | Source (tool / composer / library) | Licence | Commercial use OK? | Attribution needed | File | Date added |
|---|-------|---------|-------------------------------------|---------|--------------------|--------------------|------|------------|
|   |       |         |                                     |         |                    |                    |      |            |

## DJ voice log

| # | Station | Line | ElevenLabs voice | Settings | File | Date added |
|---|---------|------|------------------|----------|------|------------|
|   |         |      |                  |          |      |            |

---

## Technical notes (for later)

- **Format:** `.ogg` (with `.mp3` fallback) for browser support. Keep each music loop small enough for itch.io load times.
- **File naming:** `audio/<station>/<nn>-<slug>.ogg`, e.g. `audio/pump-zone/01-loading-dose.ogg`.
- **Browser autoplay:** sound can only start after the player's first key press or click. "Begin shift (Enter)" is a natural moment to switch the radio on.
- **Controls:** one key to change station (not yet chosen; 1–4 are taken by the shakes, P by pause).
- **Effects in `CONFIG`:** each station's gameplay modifier should live in the config object, like every other tunable number.

---

## Open questions

- Is the radio part of Prototype 3, or later?
- Does the station effect stack with Milk+ (e.g. Italo Korova + Calm)?
- Should Näsa ads be a pure joke, or a real cost (e.g. a few seconds of slower digging)?
- What does Void FM do in the game? (A thought: it fits frenzy and the deeper layers, e.g. less drift, or the hidden seam glows a moment earlier.)- How many tracks per station is enough for a 10–15 minute game? One loop each may be plenty.
