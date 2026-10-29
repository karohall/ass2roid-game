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
**Dig → collect ingredients → mix Milk+ → drink → get stronger → handle bigger tools → dig deeper.**

- **Every few seconds:** dig and collect ore and ingredients.
- **Every minute:** mix and drink Milk+, and upgrade tools that need more strength.
- **Every few minutes:** break through to a new layer, unlock Field Guide cards, and choose the next crater with the rover.

## Milk+ variants
Mixed from ingredients found in the layers. Each one is a temporary effect:

- **Strength:** more digging power, for harder layers
- **Stamina:** drink it any time: everything already in your system (other Milk+, Frenzy or Stillness) lasts 50% longer
- **Energy:** faster digging for a while
- **Hyperfocus:** a steady hand: drinks don't stack (the dose window counts ×1), the balance meter holds still, and so does an open seam: if a Frenzy or Stillness ends while Hyperfocus lasts, its seam stays open until the Hyperfocus wears off
- **Calm:** pushes the balance meter toward Stillness
- **Recovery:** repairs the drill after a Frenzy, at once, and the pick axe goes back on its hook (1 Regolith Whey + 1 Legacy Powder)
- **Sleep:** ends the shift and saves progress

**Secret menu** (unlocked through frenzy): Jizz+, Candygirl, XXX.

## Frenzy and Stillness (push your luck)
- **Rule:** *Double check any possible interactions.* The Foundation measures how fast, not just how much.
- **The balance meter** runs from −100 (Stillness) through 0 (balanced) to +100 (Frenzy), and drifts slowly back toward 0.
- **Every Milk+ has a direction and a weight:** Strength +30, Calm −30, Stamina and Hyperfocus +10 each, Recovery 0. Energy gets its own weight later.
- **The dose window does the damage.** Each drink's push is multiplied by the number of drinks in the last 20 seconds: ×1, ×1.5, ×2, ×3. Drinking slowly is safe; several in quick succession tips you over. The window is shown on the meter ("next drink ×1.5"), so players learn the rule by watching it.
- **Reaching the edge tips you into a state:** Frenzy at the top, Stillness at the bottom. In Regolith Prime the edge is ±80: two quick drinks reach *Hell yeah*, and a third (or a nudge from another Milk+) tips you over. The Shaker Strata needs ±100; the Chrome Vein ±90, so two quick Strengths and a Stamina tip you over (its rock is the toughest, and Artefact 2 is only found there).
- **The meter** uses the guide's dosage scale across both sides: *Get out of our sight → Coward → Meh → We see you → Hell yeah* (Stillness → balanced → Frenzy). Calling Calm "Coward" is the Tourist Guide's tone, and hides that Stillness is a reward too.
- **In Frenzy:** the screen tilts, the drill digs sideways, digging power doubles, and the drill rattles so hard that drill samples shake loose (the hint says so, and the hint bar flashes with every one lost). **Frenzy wears the drill**, about 4% for every second you keep digging, so a full Frenzy of mashing costs about 40%. The drill digs at full speed until it **breaks** at 0%; then the prospector switches to the **pick axe**, which always works but is twice as slow. Strength still counts on the pick axe. **Recovery** repairs the drill.
- **You can't lose.** The game has a **soft failure** instead: you can mess up (a broken drill, lost samples), but the run is never lost: the pick axe always works. The stakes are in what you find, and in how well you dig.
- **States end with the layer.** Breaking through a crust gives a clean slate: Frenzy or Stillness ends and the scale is back to balanced. Milk+ already in your system keeps counting down.
- **In Stillness:** everything slows, colours drain to violet and grey, and the drill goes exactly where you point it.
- **Drift (Stillness overload):** drink a Calm *while in Stillness* and you go past it: the shaft lets go, and the prospector drifts out into the vast nothingness of space while The You Show plays (Space oddities). No controls, nothing to do, just watch. It is an ending of its own: *"CONTACT LOST. You let go of the Rock and drifted out into the vast nothingness of space. It was very quiet. It was not unpleasant."* Never by accident: a Calm from a fossil shaker doesn't trigger it, and the Stillness hint warns: *"One more Calm, and you will drift."* Mood: sublime, existential, calm; a soft death.
- **The reward:** each state opens a seam beside you that only answers to that state: **frenzy artefacts** and **Stillness artefacts**, logged as *"Recovered under conditions the Kroeber Foundation does not endorse."*

## The layers
1. **Regolith Prime:** surface dust. *Its own thing:* the learning layer. The game opens with the first shake.
2. **The Shaker Strata:** fossilised protein shakers. *Its own thing:* **fossil shakers** in the rock. Break one and you drink it on the spot, contents unknown: a little gamble with the balance meter.
3. **The Chrome Vein:** metallic, and coveted by Näsa. *Its own thing:* **Näsa chrome slabs™** that can't be dug. Each has a gap to find, so the way down becomes a route, not a straight line. Hitting one brings a Näsa pop-up in Y2K chrome.
4. **The Crack:** bioluminescent; home of the Jacked Asses. *Its own thing (full game):* **darkness.** You only see around the prospector, and the Crack Spores glow.
5. **The Core:** redacted by the Belt Authority

Each layer needs more strength, yields new ingredients, has its own Kroeber Fact, and **plays differently**: one thing of its own, so deeper isn't just slower and harder.

## Ingredients (fictional)
Korova minerals in the menu's format (Nutrition Facts, Caution, Fun fact). One signature compound per layer:

1. Regolith Prime: **Regolith Whey**
2. The Shaker Strata: **Legacy Powder**
3. The Chrome Vein: **Chrome Filings**
4. The Crack: **Crack Spores**
5. The Core: **[REDACTED COMPOUND]**

In Prototype 1, Regolith Whey mixes Strength, and Legacy Powder (seeping up from the Shaker Strata) mixes Calm.

**Drill samples** are what you collect and count while digging (the score).

## Field Guide (collectible)
*Published by the Kroeber Foundation.*
- One card per layer, ingredient and artefact. Artefacts are shown in museum style: *"Artefact 1, Site KR-1, Crater 5, Quadrant 3."*
- Empty slots with question marks show the player that something is hidden.
- A separate section for frenzy finds.

## The rover
Used as a **crater picker** between digging sites: a drawn map of Korova Rock, a short animation, and you arrive. No driving.

## The radio
- **The Pump Zone** (body: 80s metal and gym, DJ Coach Rocky): digging goes slightly faster
- **Disco Gravitas** (heart: Italo and space disco): calms the balance meter a little
- **Void FM** (consciousness: futurepop at the edge of emptiness): no effect; choosing it is choosing a mood, not a tactic
- **Näsa – Big Space™:** commercial breaks that cut into whatever is playing
- **Space oddities:** not a station; a folder of songs for special occasions, such as The You Show on Stillness overload

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

You reach the core. The player receives the challenge coin (*Ex profundo, nova. 1 A$$*) as an image to share.

## Microcopy
- Loading screen: *"1. Check engine light. 2. Ignore that it is on. 3. See Step 1."*
- First Milk+: *"Do not spill. Make us proud."*

## Ideas for later
- **High scores (parking lot).** Personal bests saved in the browser (fastest shift, most drill samples, most Field Guide cards, most Frenzies, most Stillnesses, with a NEW mark), or a shared leaderboard, which would need a server. For now the end screen keeps a personal summary only.
- **Blowing up Näsa's chrome (Prototype 3).** In Frenzy, with Strength stacked, hitting a Näsa slab heats it up; keep going and it melts or blows open, a new way down. The risk: every hit on a hot slab may blow *you* up instead. Soft failure: the blast breaks the drill and throws the prospector back up a few rows. Näsa pop-up: *"Näsa™ property damaged. An invoice has been issued."* Field Guide find: a lump of molten chrome™.
- **Climbing upwards (parked).** ↑ climbs one tile, only with solid rock beside you to grip, and slower than moving sideways. It would let you go back for a missed W or seam and make getting stuck at a crust unlikely; the cost is that going down stops being a commitment, which is part of the digging feel. Behind a setting, if tried.
- **Done in Prototype 3: the start button stands out** with a blinking cursor ▌ after its label, echoing the typewriter hints.
- **Archive photos for artefacts.** Field Guide artefact cards get realistic museum-archive photos: neutral grey backdrop, flat lighting, scale bar, accession number, catalogue label. Photos appear only in the Field Guide; the rest of the game stays comic ink, so the archive reads as "real" against the drawn world.
- **Field Guide artefact: the VHS cassette.**
  > *Artefact, Site KR-1, Crater 7, Quadrant 2.*
  > VHS cassette, handwritten label: "VICE 2–6. DO NOT TAPE OVER." Recovered from the Shaker Strata, rewound.
  > The series in question ran for five seasons. The Foundation has viewed season six, it was never released on Tellus. The Foundation has no further comment.
- **Level overview:** design it so it logically illustrates the progression from beginner at the surface to the deepest depths.
- **A sleeker default interface, with an optional overlay** for players who want the numbers: the dose window multiplier (×1.5), effect durations and tip points. The current dosage scale, with its dashed tip lines, is prototype mode and needs a proper design.
- **The radio reacts to the balance meter** (the meter itself is now in the game, see *Frenzy and Stillness*):
  - In **Stillness**, Void FM comes through early, even near the surface, and The You Show plays.
  - In **Frenzy**, Down in the Shaft plays.
- **Tool upgrades, paid in A$$ coins** (parked; the drill samples stay in the game until then):
  - **Version 1:** buying a stronger drill bit isn't optional. Its effect depends on how many A$$ coins the player got for the drill samples they collected.
  - **Version 2, a later stage:** a shop where the player chooses what to upgrade, e.g. depth or accuracy.
- **Stillness overload as a space sequence, and an ending** (a grey-box Drift is in the game: the shaft falls away, the hint bar fades, and only the prospector and stars remain, turning slowly for 30 seconds): the player drifts off the mining shaft and out into deep space, doing slow somersaults for the duration of The You Show (about 4 minutes). The point is to just watch: no controls, no task, a reward for buying in. Storyboard, shot by shot against the song: RADIO.md, "Stillness overload sequence". It is itself an ending: it can end the game early, before the core. Probably an interface job for later.

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
