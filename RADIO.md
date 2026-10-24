# ASS2ROID: Ex Profundo — Radio

*Working document for the in-game radio: stations, songs, DJ voices and licences.*

The rover has a radio. Each station is a small gameplay modifier and a piece of world-building in the Korova Rock Tourist Guide's voice: dry, official, and completely serious about absurd things.

**Status:** songs in progress in Suno. Finished: Down in the Shaft, Hard Hat, Hard Body (The Pump Zone), Amore Orbitale, I Dig You (All Night Long) and Dolce de Leche+ (Disco Gravitas), Ex Profundo (Void FM) and The You Show (Space oddities). Not yet in the game (Prototypes 1 and 2 have no sound). Planned for Prototype 3.

---

## Design principles

- **Every station has a fixed DNA.** The DNA is the station's sound and attitude. Every song on the station shares it.
- **Every song has a role:** **signature**, **driver**, **contrast** or **wildcard**. The roles keep each station varied without it feeling scattered. Songs for special occasions (such as Stillness overload) live outside the stations, in [Space oddities](#space-oddities-special-occasions).

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

## Radio decisions (2026-10-23)

- **All stations are available from the start**, plus the rover cassette (Testarocca). The radio is the game's personality, not a reward.
- **Station effects:** The Pump Zone digs slightly faster. Disco Gravitas calms the meter a little. **Void FM has no effect**: choosing it is choosing a mood, not a tactic. The drift is saved for the ending.
- **Radio keeps playing between layers**; the loading screen ducks it under the engine.

## Rules (from the GDD)

- **I write the lyrics myself. AI tools help with mix and arrangement.**
- Music is **original**, or **AI-generated or royalty-free under licences that allow it**. No real tracks.
- Songs are generated in **Suno**. Before release, check that the Suno plan used when each song was made allows commercial use.
- **Suno rights**, from Suno's own [Terms of Service](https://suno.com/terms) (effective 3 September 2026, read 2026-10-23). All songs so far were made on the **Pro plan**.
  - **The songs are yours:** for Pro and Premier subscribers, Suno *assigns to you all of its right, title and interest* in the songs made from your prompts. Suno does not promise that copyright exists in AI output.
  - **Commercial use needs a download:** you may use a song commercially only once you have **downloaded** it through Suno, within your plan's monthly download allowance (shown at suno.com/account). Songs you haven't downloaded may not be used commercially.
  - **Once downloaded, it's permanent:** the rights are not affected by using up the allowance, later changes, or cancelling the subscription.
  - **No attribution is required** by the terms.
  - **Free-tier songs and Remixes** are personal and non-commercial only. Remixes stay non-commercial even on a paid plan.
  - **Suno keeps a licence to what you put in:** prompts, lyrics and other submissions can be used by Suno, including to train its models ([Privacy Notice](https://suno.com/privacy)).
  - **Before release:** download the final version of every song while subscribed.
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
- **Bilingual echo** (a line in Italian, echoed in English, or the other way round) makes Italo disco both funny and authentic. Use it as a structure, not a gimmick.
- **Phonetic spelling steers pronunciation:** write it the way it should sound, e.g. "Letche" for *leche*.

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

| Role | Song | What varies | Status |
|------|------|-------------|--------|
| Signature | **Down in the Shaft** | Arena-sized, 150 BPM, gang vocals | **Finished** |
| Driver | **Heavy Ore** | Faster and tighter, more workout and shouting | _Not yet_ |
| Contrast | **Hard Hat, Hard Body** | Slower, sultry power ballad, breathy vocals | **Finished** |
| Wildcard | **Jackhammer Heart** | Synth metal, sequenced bass, more electronic | _Not yet_ |

### Disco Gravitas

- **Concept:** the **heart**. Love songs about mining, broadcast late at night to lonely prospectors.
- **In-game effect:** calms the balance meter a little (nudges it back toward balanced).
- **DNA:** Italo and space disco, arpeggios, vocoder, love songs about mining.
- **DJ:** an over-enthusiastic host who mixes Italian and English and dedicates songs to the player.
- **Example lines:**
  - *"This one goes out to the prospector in Crater 5. Digging alone? Not tonight. Disco Gravitas!"*
  - *"Bellissimo, prospectors! It's late, the drill is warm, and this one is sweet like your mamma's Milk+. Dolce de Leche+, only on Disco Gravitas!"*
- **Suno style prompt (draft):**
  > Italo disco, space disco, arpeggiated synths, vocoder, warm analog bass, gated snare, dreamy pads, falsetto vocals, romantic, 80s

| Role | Song | What varies | Status |
|------|------|-------------|--------|
| Signature | **Amore Orbitale** | Mid-tempo, romantic, big chorus, falsetto | **Finished** |
| Driver | **I Dig You (All Night Long)** | Faster dance track, 125 BPM, playful | **Finished** |
| Contrast | **Dolce de Leche+** | Slow and sticky, a duet, sweet and cheesy | **Finished** |
| Wildcard | **Asteroid Belt Boulevard** | Instrumental space disco, lasers and vocoder | _Not yet_ |

### Void FM

- **Concept:** **consciousness**. Gazing out and falling in: the deeper you dig, the further away everyone else is.
- **In-game effect:** none. Choosing Void FM is choosing a mood, not a tactic.
- **DNA:** futurepop at the edge of emptiness. Space without an object, rather than melancholia. Wide, still, unhurried; feeling is allowed, sorrow is not the point.
- **DJ (draft):** a calm, slow late-night voice who talks about depth and distance as if they were the same thing. Never in a hurry.
- **Station ID:** *"Welcome to the never-ending show"* (spoken by the DJ when the signal first comes through)
- **Example lines (draft):**
  - *"You are three hundred metres down. Everyone you know is above you. This is Void FM."*
  - *"If you can hear this, you are deeper than the signal was designed to reach."*

| Role | Song | What varies | Status |
|------|------|-------------|--------|
| Signature | **Falling Forwards Backwards Into Dimension** | Anthemic, 130 BPM, builds to an uplifting chorus | _Not yet_ |
| Driver | **Parallax for Two Prospectors** | More driving, a duet between two distant voices | _Not yet_ |
| Contrast | **No Ground Beneath, No Ceiling** | Sparse and intimate, almost whispered, slow | _Not yet_ |
| Wildcard | **Kármán Line (Extended Longing Mix)** | Long instrumental, ambient, made for drifting | _Not yet_ |
| _To decide_ | **Ex Profundo** | Replaces one of the four planned songs (which one: to decide) | **Finished** |

### Space oddities *(special occasions)*

- **Concept:** a folder, not a station. Songs that only play on special occasions, triggered by what happens in the game, never in normal rotation.
- **Occasions so far:** Stillness overload (The You Show).

| Occasion | Song | Status |
|----------|------|--------|
| Stillness overload | **The You Show** | **Finished** |

#### The You Show

- **Folder:** Space oddities (special occasions)
- **Status:** finished.
- **Role:** Stillness track. Plays only when the balance meter tips fully toward Stillness (too much Calm). Not in normal rotation.
- **Concept:** a warm female guide leads the listener through a slow, weightless state. Halfway through, the perspective shifts and the listener becomes the traveller. In the outro the guides return together: the ones who came before are watching from below, holding the traveller in their embrace.
- **Style prompt:**
  > Experimental minimal indie, 66 BPM, detuned upright piano recorded in a large empty room, warped tape and wow-and-flutter, granular ambient drones, bowed metal and distant radio transmissions, sparse cello used as texture not melody, unpolished deadpan female vocal, half-spoken and slightly off-mic, intimate and strange, unquantized and human, long silences between phrases, lo-fi home recording character, cold and vast
- **Exclude:**
  > pop, ballad, polished, belting, big chorus, power ballad, radio-friendly, string swell, drums
- **Lyrics (final):**

```
[Intro: faint radio static, vinyl scratch, spoken older female voice, deadpan spoken-sung, room noise, old piano slightly out of time]
The opening to the wormhole is underneath but not below
I dare you to go through, it's okay to take it slow
Let's look at the pretty pictures inside your mind
Everything you were, and what you left behind
Old memories turn into cosmic soil
Take my hand, let's peak together
This is a little something I like to call
The You show

[Verse 1: cello enters as texture, female voice tender and maternal]
Let me tell you a story
It begins with a loop in the sky
Celestial cathedrals, where old voices pray
Echoing their hellos and their goodbyes
It's okay if you cry. We all need to, sometimes
Press the quick-release, and let it all go
But remember: in space, tears spiral, they don't flow

[Pre-Chorus: voices lower and conspiratorial, tape starting to warp]
Here's the thing: physics doesn't always behave
Just follow along, start floating away
Stars kissing your cheeks, moonflowers wave
You'll soon come to know the Milky Way
You're falling through time, gaze turns to grain

[Verse 2: the voice changes perspective, now singing as the traveller]
I feel a bit low, or did I learn to fly?
I know how it started, now I slip off the edge of the night
I'm sinking through the ground
I've become nothing but pure life

[Chorus: everything drops out except a bowed metal tone and the voice]
Beneath the frame you see every day
Someone has hidden a very strange game
I'm falling through time, I'm drifting off the page
I keep forgetting my name, I don't remember my age

[Bridge: tape slowing down, words stretched apart]
My hands are an aeon away
Your voice arrives a minute late
I watch myself from somewhere high
I couldn't move if I tried
(and I don't mind)

[Outro: single repeating piano note and static, the guides' voices return, singing clearly and with love]
I think you already know
The ones who came before
They are watching you from below
Nebulae holding you in their embrace
Cradling your face
```

#### Stillness overload sequence (storyboard)

What the player sees while The You Show plays (about 4 minutes). No controls, no task: the point is to just watch. **Stillness overload is itself an ending:** it can end the game early, before the core. Each shot starts as its section of the song begins.

| Song section | What we see |
|--------------|-------------|
| **Intro** | An actual wormhole opens. The prospector drifts through into deep, vast, absolute black space, with galaxies, stars, nebulae. |
| **Verse 1** | More space phenomena appear, but all is still, sublime and vast. |
| **Pre-Chorus** | *(continues)* |
| **Verse 2** | The prospector starts to dissolve into beautiful cosmic dust, trailing behind them. |
| **Chorus** | *(continues)* |
| **Bridge** | The prospector is completely dissolved. Beautiful space sparkles. |
| **Outro** | The black space meets a beautiful sunrise, a beam of light from within: cosmic love from the ancient galaxies. |

Throughout: slow somersaults.

### The rover's tape deck

- **Concept:** the rover has a tape deck as well as the radio. Tapes are physical things the prospector carries, not stations.
- **Tapes so far:**

| Tape | What it is | Contents |
|------|------------|----------|
| **Testarocca** | A nod to OutRun (1986), where you picked the music on the car radio before the drive. The name crosses that game's car with rock. | _To decide_ |

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
| 1 | Down in the Shaft | The Pump Zone | Suno | Pro: song assigned to you | Yes, once downloaded | Not required | | |
| 2 | Hard Hat, Hard Body | The Pump Zone | Suno | Pro: song assigned to you | Yes, once downloaded | Not required | | |
| 3 | Ex Profundo | Void FM | Suno | Pro: song assigned to you | Yes, once downloaded | Not required | | |
| 4 | The You Show | Space oddities | Suno | Pro: song assigned to you | Yes, once downloaded | Not required | | |
| 5 | I Dig You (All Night Long) | Disco Gravitas | Suno | Pro: song assigned to you | Yes, once downloaded | Not required | | |
| 6 | Amore Orbitale | Disco Gravitas | Suno | Pro: song assigned to you | Yes, once downloaded | Not required | | |
| 7 | Dolce de Leche+ | Disco Gravitas | Suno | Pro: song assigned to you | Yes, once downloaded | Not required | | |

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
- How many songs per station is enough for a 10–15 minute game? Four each gives about 12 songs in total.
