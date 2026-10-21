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

### Pump FM *(gym; name to be decided, see [naming](#naming-pump-fm))*
- **Effect:** digging goes slightly faster.
- **Generation prompt:**
  > instrumental 80s workout synth pop, 128 bpm, gated drums, driving bassline, bright synth stabs, motivational, steady groove, no big build, no outro, no vocals
- **Tracks:** _none yet_

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

## Naming: Pump FM

| Candidate | Why |
|-----------|-----|
| **Leg Day FM** | Already canon: the Shaker Strata card dates the fossils to "leg day". Dry, and sounds like a real station. |
| **RPM: Reps Per Minute** | Radio "RPM", and the track is 128 bpm. Reads well on a rover dial. |
| **Whey Out FM** | Ties to Regolith Whey and Milk+. A pun on "way out", fitting for a shaft. |
| **Spotter FM** | A gym spotter, and spotting things in space. |
| **The Belt** | Weightlifting belt and asteroid belt. Ironic next to the Belt Authority. |

**Decision:** _pending_

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
- **File naming:** `audio/<station>/<nn>-<slug>.ogg`, e.g. `audio/pump-fm/01-leg-day.ogg`.
- **Browser autoplay:** sound can only start after the player's first key press or click. "Begin shift (Enter)" is a natural moment to switch the radio on.
- **Controls:** one key to change station (not yet chosen; 1–4 are taken by the shakes, P by pause).
- **Effects in `CONFIG`:** each station's gameplay modifier should live in the config object, like every other tunable number.

---

## Open questions

- Is the radio part of Prototype 3, or later?
- Does the station effect stack with Milk+ (e.g. Italo Korova + Calm)?
- Should Näsa ads be a pure joke, or a real cost (e.g. a few seconds of slower digging)?
- What does Void FM do in the game? (A thought: it fits frenzy and the deeper layers, e.g. less drift, or the hidden seam glows a moment earlier.)- How many tracks per station is enough for a 10–15 minute game? One loop each may be plenty.
