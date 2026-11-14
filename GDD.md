# ASS2ROID: Ex Profundo
*Game design document, v0.2*

## Concept
**Pitch:** a browser game about digging deep into Korova Rock, getting stronger on Milk+, and risking your sanity for the secrets in the strata.
**Player fantasy:** you are a Korova Rock prospector. The rock makes you stronger, and it changes you.
**Tone:** the Korova Rock Tourist Guide's voice: dry, official, and completely serious about absurd things.
**Platform:** browser (HTML/JavaScript), published on itch.io.
**Length:** 10–15 minutes to the core, with a clear ending.
**Goal:** reach the core, and experience all the peak and altered states along the way.
**Ground rule:** it is always discoverable and clear what to do to go where. Every screen and state shows its way on and its way out (a key, a button, a quiet hint).
**Currency:** the **A$$ coin**. Drill samples are traded for A$$ coins.

## Core loop
**Music first.** Nothing on Korova Rock runs without a soundtrack: the drill only works while music plays. The shift opens with the radio off and the drill dead; pressing R tunes in, and the drill catches the beat. The radio panel itself explains the stations ("Each station does something: R for the next") until another station is tried. The blank tape stops the drill too. **Keep:** the radio already works on the start screen, so a player who spots "Press R to tune in" can start the music before the shift begins; the shift then opens straight on the radio lesson. **One step at a time:** the Milk+ menu stays hidden until the radio is on, and the hint bar carries one important thing at a time: first the radio, then the shake (which stays until the first drink, even if the player digs first). Nothing freezes the player.

**Dig → collect ingredients → mix Milk+ → drink → get stronger → handle bigger tools → dig deeper.**

- **Every few seconds:** dig and collect ore and ingredients.
- **Every minute:** mix and drink Milk+, and upgrade tools that need more strength.
- **Every few minutes:** break through to a new layer, unlock Field Guide cards, and choose the next crater with the rover.

## Milk+ variants
Mixed from ingredients found in the layers. Each one is a temporary effect:

- **Strength:** more digging power, for harder layers
- **Stamina:** drink it any time: everything already in your system (other Milk+, Frenzy or Stillness) lasts 50% longer
- **Energy (cut, 2026-11-14):** was "faster digging for a while". Too close to Strength (more rock per hit) and Frenzy (double power, mashing). The menu stays at five; new things happen on the secret menu.
- **Hyperfocus:** a steady hand: drinks don't stack (the dose window counts ×1), the balance meter holds still, and so does an open seam: if a Frenzy or Stillness ends while Hyperfocus lasts, its seam stays open until the Hyperfocus wears off
- **Calm:** pushes the balance meter toward Stillness
- **Recovery:** repairs the drill after a Frenzy, at once, and the pick axe goes back on its hook (1 Regolith Whey + 1 Legacy Powder)
- **Sleep:** ends the shift and saves progress

**Secret menu:** Jizz+, Candygirl, XXX. **Secret-menu recipes are hidden in songs (2026-11-13):** each secret Milk+ has its recipe sung in a song on the radio, so players who listen know it and nobody else does. No Frenzy unlock: the ingredients gate it. This is a rule for the whole game: **the radio teaches you things** (see The radio).
- **Candygirl = CC: 1 Crack Spores + 1 Chrome Filings** ("crack 'n' chrome"). The recipe, one Chrome Filings and one Crack Spores, is chanted in the song of the same name: **Candygirl (Asylum Mix)**, acid techno on The Pump Zone (2026-11-14). It stays out of the Pump Zone's rotation and turns up at random: 1 time in 5 when the station picks a song (2026-11-14).
  - **Hidden:** it isn't on the menu, with no row or placeholder.
  - **Key 0 (built 2026-11-14):** when you hold Crack Spores and Chrome Filings, pressing 0 shakes it (*"Shaking something that is not on the menu…"*), and it goes down as soon as it is ready. Without the ingredients, 0 does nothing: it's a secret.
  - **First time:** a discovery, with confetti: *"Secret menu: Candygirl. C&C: Crack and chrome. For 45 seconds, ↑ runs you up the tunnel."*
  - **What it does: you can run upwards (2026-11-13; built 2026-11-14).** For 45 seconds (2026-11-14; was 15), ↑ takes you up through open tunnel, and you hold on instead of falling; the effects line counts it down. Then gravity takes over again. Up: back for a missed W, a seam, or a sealed find you passed. This is where climbing lives: not everyday movement, but a secret you earn, so going down stays a commitment the rest of the time.
  - **Can't be made early:** Crack Spores only exist in The Crack.
- **Jizz+ (idea, 2026-11-14):** Disco Gravitas, sung by a saucy bartender or barista. **It lets you shake two bottles at the same time.** Proposed: for a while, one shake makes two bottles of the Milk+ you choose; you pay the ingredients for both, but shake only once. It saves time, and two bottles at hand tempt you to drink them in quick succession: the dose window does the rest. **Recipe (proposed): W + W + P**, two Regolith Whey and one Legacy Powder: the milkiest thing on the menu, and the first three-ingredient recipe. It works from layer 2, so it lasts three layers (a two-ingredient recipe would have needed The Crack, too close to the end). Unless the song decides otherwise.
- **XXX (2026-11-14): the uncensored version.** Void FM, the station of consciousness. **Recipe: S + S**, two Crack Spores: pure Crack, so only at the bottom. For a while:
  - **X-ray:** the rock goes see-through. Seams, sealed finds and artefacts show across the whole layer, even in the dark. The last chance to fill the archive cabinet before the Core.
  - **Uncensored:** everything the Belt Authority blacked out reads in full: the Crack Spores' nutrition facts, what The Crack really is, why numbers were withdrawn. Reach the Core under XXX, and the Core card is uncensored too: the Core's compound is *Solanum tuberosum*, the potato.
  - **To write:** the uncensored texts. Lots of work, but hilarious.
  - **How it looks:** the black bars stay but go see-through, so you read through them; a small XXX stamp on the card. You can tell what was hidden.
  - **Checklist: the essentials** (redacted outright, and the archive's gaps):
    1. The Core card (KR-1 E): `█████ ███…` *Redacted by the Belt Authority.* Under XXX: the potato (decided).
    2. The Core end screen: *What you found here is redacted by the Belt Authority.*
    3. Crack Spores card, Nutrition Facts: *redacted*.
    4. Crack Spores card, Fun fact: *…The Crack, which the Belt Authority says is closed.*
    5. Withdrawn numbers 10, 11, 15 and 18: *Withdrawn by the Foundation. No further comment.* Each reveals what it was (No. 10 was the straw).
  - **Checklist: extras** (evasive, for more laughs):
    - VHS cassette: *The Foundation has viewed season six… No further comment.*
    - Striped sweatband: *Sweat of undetermined origin. The Foundation has declined to test it.*
    - Moon boot: *Size undisclosed… The Foundation considers the matter closed.*
    - The Crack's layer card: *…home of the Jacked Asses. The Foundation has not met them. Yet.*
    - The Shaker Strata's layer card: *…The Foundation has stopped asking.*
    - Regolith Whey card: *it was milk once, according to the label.*
    - The first drink: *The Foundation does not endorse them. The Foundation has noted their usefulness.*
    - The footer on every artefact card: *Recovered under conditions the Kroeber Foundation does not endorse.* Under XXX: what the conditions were.
  - **Places to add redactions,** so XXX has more to reveal: the six pending archive cards (the inspection record and the signet ring suit it best), a blacked-out line now and then in the Belt Authority Public Service log, and Näsa's fine print (*"Terms: █████"*).
- **The recipe slots:** four ingredients give ten two-ingredient recipes. Taken: WW Strength, PP Calm, WC Stamina, PS Hyperfocus, WP Recovery, CS Candygirl, SS XXX. Free: CC and WS. Jizz+ takes three (WWP).

## Frenzy and Stillness (push your luck)
- **Rule:** *Double check any possible interactions.* The Foundation measures how fast, not just how much.
- **The balance meter** runs from −100 (Stillness) through 0 (balanced) to +100 (Frenzy), and drifts slowly back toward 0.
- **Every Milk+ has a direction and a weight:** Strength +30, Calm −30, Stamina and Hyperfocus +10 each, Recovery 0.
- **The dose window does the damage.** Each drink's push is multiplied by the number of drinks in the last 20 seconds: ×1, ×1.5, ×2, ×3. Drinking slowly is safe; several in quick succession tips you over. The window is shown on the meter ("next drink ×1.5"), so players learn the rule by watching it.
- **Reaching the edge tips you into a state:** Frenzy at the top, Stillness at the bottom. In Regolith Prime the edge is ±80: two quick drinks reach *Hell yeah*, and a third (or a nudge from another Milk+) tips you over. The Shaker Strata needs ±100; the Chrome Vein ±90, so two quick Strengths and a Stamina tip you over (its rock is the toughest, and Artefact 2 is only found there).
- **The meter** uses the guide's dosage scale across both sides: *Get out of our sight → Coward → Meh → We see you → Hell yeah* (Stillness → balanced → Frenzy). Calling Calm "Coward" is the Tourist Guide's tone, and hides that Stillness is a reward too.
- **In Frenzy:** the screen tilts, the drill digs sideways, digging power doubles, and the drill rattles so hard that drill samples shake loose (the hint says so, and the hint bar flashes with every one lost). **Frenzy wears the drill**, about 4% for every second you keep digging, so a full Frenzy of mashing costs about 40%. The drill digs at full speed until it **breaks** at 0%; then the prospector switches to the **pick axe**, which always works but is twice as slow. Strength still counts on the pick axe. **Recovery** repairs the drill.
- **You can't lose.** The game has a **soft failure** instead: you can mess up (a broken drill, lost samples), but the run is never lost: the pick axe always works. **A broken drill takes the radio with it (2026-11-14):** only the rover's tape, Testarocca, still plays, on its own battery, so you never dig in silence. Recovery brings the radio back. The stakes are in what you find, and in how well you dig.
- **States end with the layer.** Breaking through a crust gives a clean slate: Frenzy or Stillness ends and the scale is back to balanced. Milk+ already in your system keeps counting down.
- **In Stillness:** everything slows, colours drain to violet and grey, and the drill goes exactly where you point it. **The mirror of Frenzy:** Frenzy rattles drill samples loose; in Stillness the drill is so precise that every drill sample and ingredient comes out whole, **twice over**. Frenzy to go deep, Stillness to come out rich. (Prototype 3.) Because everything is twice as slow, Stillness lasts longer than a Frenzy: 20 seconds against 12.
- **Drift (Stillness overload):** drink a Calm *while in Stillness* and you go past it: the shaft lets go, and the prospector drifts out into the vast nothingness of space while The You Show plays (Space oddities). No controls, nothing to do, just watch. It is an ending of its own: *"CONTACT LOST. You let go of the Rock and drifted out into the vast nothingness of space. It was very quiet. It was not unpleasant."* Never by accident: a Calm from a fossil shaker doesn't trigger it, and the Stillness hint warns: *"One more Calm, and you will drift."* Mood: sublime, existential, calm; a soft death.
- **The reward:** each state opens a seam beside you that only answers to that state: **frenzy artefacts** and **Stillness artefacts**, logged as *"Recovered under conditions the Kroeber Foundation does not endorse."*

## The layers
1. **Regolith Prime:** surface dust. *Its own thing:* the learning layer. The game opens with the first shake.
2. **The Shaker Strata:** fossilised protein shakers. *Its own thing:* **fossil shakers** in the rock. Break one and you drink it on the spot, contents unknown: a little gamble with the balance meter.
3. **The Chrome Vein:** metallic, and coveted by Näsa. *Its own thing:* **Näsa chrome slabs™** that can't be dug. Each has a gap to find, so the way down becomes a route, not a straight line. Hitting one brings a Näsa pop-up in Y2K chrome.
4. **The Crack:** bioluminescent; home of the Jacked Asses. *Its own thing (built in Prototype 3):* **darkness.** You only see about three tiles around the prospector, and the Crack Spores glow green through the dark. The toughest rock; the crust needs digging power 7. **Void FM gives night vision here:** while it plays, the light reaches about twice as far (only when you choose Void FM: Stillness no longer switches to it). The Jacked Asses come later.
5. **The Core:** redacted by the Belt Authority. Not a layer: breaking through The Crack's crust is the arrival, and the ending.

Each layer needs more strength, yields new ingredients, has its own Kroeber Fact, and **plays differently**: one thing of its own, so deeper isn't just slower and harder.

## Ingredients (fictional)
Korova minerals in the menu's format (Nutrition Facts, Caution, Fun fact). One signature compound per layer:

1. Regolith Prime: **Regolith Whey**
2. The Shaker Strata: **Legacy Powder**
3. The Chrome Vein: **Chrome Filings**
4. The Crack: **Crack Spores**
5. The Core: **[REDACTED COMPOUND]**. Decided (2026-11-14): *Solanum tuberosum*, the potato. Only revealed under XXX; everywhere else it stays [REDACTED COMPOUND].

In Prototype 1, Regolith Whey mixes Strength, and Legacy Powder (seeping up from the Shaker Strata) mixes Calm.

**Drill samples** are what you collect and count while digging (the score).

## Field Guide (collectible)
*Published by the Kroeber Foundation.*
- One card per layer, ingredient and artefact. Artefacts are shown in museum style: *"Artefact 1, Site KR-1, Crater 5, Quadrant 3."*
- Empty slots with question marks show the player that something is hidden.
- Separate sections for Frenzy finds and Stillness finds.

### Artefacts (plan, 2026-11-13)
**Rules:**
- **Artefacts reward altered states.** Every artefact comes from a Frenzy, a Stillness, or something only a Frenzy can do, never from plain digging.
- **Sealed finds.** Most artefacts sit sealed in the rock: you can see one, but it only gives way in the right state (Frenzy or Stillness), the way seams answer only to their state.
- **Each layer's own thing** decides where and how: the fossil shakers, the Näsa chrome, the dark.
- **Catalogue number:** *KR-1*, the layer letter (A Regolith Prime, B Shaker Strata, C Chrome Vein, D The Crack, E the Core), then the find's number. An artefact that can turn up in any layer takes the letter of the layer it was found in.
- **Gaps are kept.** Unused numbers are *withdrawn* entries in the Field Guide: the gaps tell a story.
- **Every card** ends: *Recovered under conditions the Kroeber Foundation does not endorse.*
- **Scope:** about 17 finds is enough. Players find a few per run; the Field Guide is a reason to play again.
- **The archive cabinet (built):** the Field Guide's artefacts live in a drawer, *"Archive cabinet · 4 of 15 recovered"*. It opens into small numbered tiles, 1–18 and E: found ones lit, the rest dashed, withdrawn numbers struck through (*"Withdrawn by the Foundation. No further comment."*). A new find opens the drawer on its card.
- **Sealed finds (built):** a framed ◈ in the rock, like a specimen box, bright when its state can open it. Hitting one in the wrong state: *"Sealed in the rock. It only gives way in a Frenzy."* Standing near one, the hint bar says so too. **Always clear which state, said at the right time (2026-11-14).** No label on the box (tried, too small to read); the hint does the work, in steps:
  - **First sight,** as one comes within 5 tiles: announced once, *"A sealed artefact ahead (◈). It waits for Stillness."*
  - **Near it (3 tiles),** ahead of rumours and announcements, the hint reads what you have: a bottle ready (*"Your Calm is ready: drink it (2), then another, quickly, to tip over."*), the ingredients to shake one, the recipe if you know it, or *"You haven't found its ingredient yet: keep digging, and come back."*
  - **About to tip,** both at once: *"One more quick Calm tips you into Stillness, and the sealed artefact (◈) gives way."*
  - **In its state:** *"STILLNESS. The sealed artefact (◈) gives way now. Dig into it: 20s left."* In the other state: *"…waits for a Frenzy, not this. Leave it for now."*
  - **Hitting it in the wrong state** gives the same how, not just the which.
- **Finder's fee (built):** the Foundation pays +10 drill samples for every recovered artefact: *"Finder's fee from the Kroeber Foundation: +10 drill samples."* The hint near a sealed find says so: *"An artefact is sealed in the rock here (◈): one for the archive cabinet, and a finder's fee."* Later: a teaser line per locked find, to pull with curiosity.
- **Card texts still to write** show *"Documentation pending. The Foundation is still writing this card."*

| No. | Find | Where, and in which state | Status |
|---|---|---|---|
| 1 | Dolph’s shaker (was the fossilised protein shaker; renamed 2026-11-14 so it isn't one of the Shaker Strata's own) | Frenzy seam, any layer | Built |
| 2 | Chrome dumbbell | Frenzy seam, C | Built |
| 3 | Molten chrome™ | Melting a Näsa slab, C (Frenzy, stacked Strength) | Built |
| 4 | Glass of Milk+ | Stillness seam, any layer | Built |
| 5 | VHS cassette | Sealed, B, Stillness | Built |
| 6 | Hand stencils | Sealed, D, Stillness (seen first with night vision) | Built |
| 7 | Striped sweatband | Sealed, A, Frenzy | Built |
| 8 | Bottle of jungle juice | Sealed, D, Frenzy | Built |
| 9 | Moon boot | Stillness seam, any layer | Built |
| 10 | _Withdrawn_ (was the straw) | | Gap |
| 11 | _Withdrawn_ | | Gap |
| 12 | Inspection record | Sealed, A, Stillness | Built |
| 13 | Rubber duck | Sealed, B, Frenzy | Built |
| 14 | Parmesan | Sealed, B, Stillness | Built |
| 15 | _Withdrawn_ | | Gap |
| 16 | Signet ring (the villain item) | Sealed, C, Frenzy | Built |
| 17 | Polaroid (it has "roid" in it) | Sealed, D, Frenzy | Built |
| 18 | _Withdrawn_ | | Gap |
| E | The Core: redacted | Reaching the Core | Built |

**Out:** the straw (its number is withdrawn), the Tamagotchi, the hockey card, and the stack of Polaroids (one Polaroid stays, as No. 17). The states are decided: 8 Frenzy finds, 6 Stillness finds.

**The Core card (redacted):** catalogue number *KR-1 E*, and a black bar over everything else. *Redacted by the Belt Authority.* Shown on the end screen beside the challenge coin, and in the Field Guide.

**Draft texts (tone checked: no repeated "The Foundation has stopped asking"; the Stillness finds don't share a joke):**
- **Striped sweatband:** A striped terrycloth sweatband, still damp. The stripes match no known team. Sweat of undetermined origin. The Foundation has declined to test it.
- **Bottle of jungle juice:** A small amber glass bottle, hand-labelled "JUNGLE JUICE". Empty. The bottle has no straw. The Foundation asks: is this really for drinking?!
- **Moon boot:** A single moon boot, upright and laced, perfectly still. Size undisclosed. The other boot has not been found. The Foundation considers the matter closed.
- _To come:_ hand stencils, inspection record, rubber duck, Parmesan, signet ring, Polaroid.

**Photos:** museum archive style, neutral grey backdrop, flat lighting, an image of the object and possibly a close-up. The scale bar and any label text are added in Canva, not generated (image models mangle small print and numbers). For the moon boot, check every batch for a second boot.

**Image licence log.** Every artefact photo gets a row before it goes into the game, like the songs in RADIO.md.

| Artefact | Tool and plan | Licence terms (link, date read) | Commercial use | Notes |
|---|---|---|---|---|
| | FLUX.2 Pro | _to check_ | _to check_ | |

## The rover
Used as a **crater picker** between digging sites: a drawn map of Korova Rock, a short animation, and you arrive. No driving.

## The radio
- **The Pump Zone** (body: 80s metal and gym, DJ Coach Rocky, with a German accent, on air since 2026-11-14: he talks between songs, greets the shift, cheers the Frenzy, knows when you've been on Void FM, and once in a while lets slip that a song isn't on the menu): digging goes slightly faster
- **Disco Gravitas** (heart: Italo and space disco): calms the balance meter a little
- **Void FM** (consciousness: futurepop at the edge of emptiness): a mood, not a tactic. Except in the dark: in The Crack it gives night vision. The Broadcaster, on air since 2026-11-14, welcomes you to the never-ending show, tells you facts about the dark between songs, and calms Stillness: space is not scary, it is restful
- **Näsa – Big Space™:** commercial breaks that cut into whatever is playing
- **Space oddities:** not a station; a folder of songs for special occasions, such as The You Show on Stillness overload

**Rule: the radio teaches you things (2026-11-14).** The radio is not only a soundtrack and a set of station effects: it carries knowledge. Secret-menu recipes are hidden in songs (Candygirl's is chanted in Candygirl (Asylum Mix)), and the DJs' slogans and lines can carry more. Listening is a way to play.

Details, music prompts and licence log: [RADIO.md](RADIO.md).

Music: original, or AI-generated or royalty-free under licences that allow it. No real tracks. DJ voices made with ElevenLabs.

## Visual direction
- **Comic ink** (black, white, blue-grey wash) for the Rock, the prospectors and the world: the base.
- **Y2K chrome** for **Näsa** only: it intrudes like pop-up ads.
- **Bioluminescence** (#00FF9F, #9B5DE5, amber #FFB347) for the compound and the Crack, taking over as you go deeper.
- **Interface:** a drawn version of the real rover's control panel (diegetic UI).
- **Fonts and colours** from the year-one identity, shifting toward year two.

## Ending
**Two ways out.** Drift (Stillness overload) is itself an ending, and can end the game early; in the prototype it is a grey-box placeholder of the space sequence (see *Ideas for later*). Otherwise:

You reach the core: *"THE CORE. You are now further down than anyone asked you to be. What you found here is redacted by the Belt Authority."* The end screen shows the challenge coin, drawn in the game's ink: *EX PROFUNDO, NOVA* around the top, *1 A$* in the middle with the depth reached, *KOROVA ROCK* along the bottom. "Save the coin" downloads it as an image to share. (Built in Prototype 3.)

## Microcopy
- Easter egg, once per run at 69 m: *"69 m. Nice. The Foundation does not endorse this observation."*
- Loading screen: *"1. Check engine light. 2. Ignore that it is on. 3. See Step 1."*
- First Milk+: *"Do not spill. Make us proud."*

## Ideas for later
- **High scores (parking lot).** Personal bests saved in the browser (fastest shift, most drill samples, most Field Guide cards, most Frenzies, most Stillnesses, with a NEW mark), or a shared leaderboard, which would need a server. For now the end screen keeps a personal summary only.
- **Blowing up Näsa's chrome (built in Prototype 3).** In a Frenzy, with Strength stacked (two drinks), each hit on a Näsa slab heats it: it glows amber, and after six or seven hits it melts, a new way down. A hit heats it at most once every half second (2026-11-14), so holding ↓ can't rush it: you watch it glow, and keep going or stop. From the third heat on, each has a one-in-five chance to blow up instead (kept: the blast has its payoff, the radio dies and Testarocca kicks in): the drill breaks and the prospector is thrown up to three rows back up the shaft; the slab cools. Out of Frenzy, with one Strength, or on the pick axe, the chrome won't take heat, and the game says so. The hint over a slab gives the recipe as a prohibition: *"Näsa™ property. Do not attempt to mine when in a Frenzy. It might melt."* Näsa pop-up on both: *"Näsa™ property damaged. An invoice has been issued."* Field Guide find, the first time: Artefact 3, a lump of molten chrome™, still warm.
- **Climbing upwards (parked; it returns as Candygirl, see the secret menu).** ↑ climbs one tile, only with solid rock beside you to grip, and slower than moving sideways. It would let you go back for a missed W or seam and make getting stuck at a crust unlikely; the cost is that going down stops being a commitment, which is part of the digging feel. Behind a setting, if tried.
- **Done in Prototype 3: the start button stands out** with the check engine light: the dashboard's engine symbol in amber after its label, slowly breathing. It pays off the start screen's joke ("1. Check engine light. 2. Ignore that it is on.").
- **Archive photos for artefacts.** Field Guide artefact cards get realistic museum-archive photos: neutral grey backdrop, flat lighting, scale bar, accession number, catalogue label. Photos appear only in the Field Guide; the rest of the game stays comic ink, so the archive reads as "real" against the drawn world.
  - **How real finds are catalogued** (archaeometry conference, 2026-10-30): a **capital letter** and a **number sequence** for the catalogue number, a **measuring tool or scale** in the picture, an **image of the object**, and possibly a **close-up**. Each artefact card follows that: catalogue number, photo with scale, and a close-up where there is a detail worth seeing.
  - **Catalogue number (decided 2026-11-12):** the letter is the layer (A Regolith Prime, B Shaker Strata, C Chrome Vein, D The Crack), then the number in sequence, e.g. *KR-1 C 0002* for the chrome dumbbell.
- **Field Guide artefact: the VHS cassette.**
  > *Artefact, Site KR-1, Crater 7, Quadrant 2.*
  > VHS cassette, handwritten label: "VICE 2–6. DO NOT TAPE OVER." Recovered from the Shaker Strata, rewound.
  > The series in question ran for five seasons. The Foundation has viewed season six, it was never released on Tellus. The Foundation has no further comment.
- **Level overview:** design it so it logically illustrates the progression from beginner at the surface to the deepest depths.
- **A sleeker default interface, with an optional overlay** for players who want the numbers: the dose window multiplier (×1.5), effect durations and tip points. The current dosage scale, with its dashed tip lines, is prototype mode and needs a proper design.
- **The radio reacts to the balance meter (built in Prototype 3, with real sound):**
  - **The state changes the sound, not the station (2026-11-14).** The station switch overrode your choice; with DJs and personalities on each station, it felt like being interrupted. Now you keep your station, and the room changes around it:
  - In **Stillness**, the music goes muffled and slower, lower like a slowed tape, as if heard through rock. As it lifts, the sound returns slowly. The Broadcaster comes through on any station: *"Space is not scary, it is restful."* (The You Show is saved for the Drift.)
  - In **Frenzy**, the music speeds up, thinner and a little distorted. Coach Rocky breaks in on any station: *"Frenzy is not a problem."*
  - The radio panel says so: *"The Frenzy speeds the signal up."* / *"Stillness: the signal sounds far away, as if through rock."*
  - *Before (Prototype 3, until 2026-11-14):* Stillness switched to Void FM, and a Frenzy cut hard to the Pump Zone.
- **Tool upgrades, paid in A$$ coins** (parked; the drill samples stay in the game until then):
  - **Version 1:** buying a stronger drill bit isn't optional. Its effect depends on how many A$$ coins the player got for the drill samples they collected.
  - **Version 2, a later stage:** a shop where the player chooses what to upgrade, e.g. depth or accuracy.
- **Stillness overload as a space sequence, and an ending** (built 2026-11-14: the full sequence over The You Show, shot by shot, see RADIO.md): the player drifts off the mining shaft and out into deep space, doing slow somersaults for the duration of The You Show (about 4 minutes). The point is to just watch: no controls, no task, a reward for buying in. Storyboard, shot by shot against the song: RADIO.md, "Stillness overload sequence". It is itself an ending: it can end the game early, before the core. Probably an interface job for later.

## Out of scope (for now)
Driving the rover, combat, multiplayer, an account or login system, real music, mobile optimisation.

## Prototype 1 (one evening)
Grey boxes and text only:
- Dig in one layer
- Two Milk+ variants: **Strength** and **Calm**
- One clashing combination that triggers frenzy
- One Field Guide card

**The question it answers:** does it feel good to dig, drink, and take the risk?

## Done when
It's playable from start to finish, published on itch.io, played by 20+ people, and documented as a case on karohall.com (idea → prototype → test → finished).
