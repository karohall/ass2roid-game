# ASS2ROID: Ex Profundo
*Game design document, v0.2*

## Concept
**Pitch:** a browser game about digging deep into Korova Rock, getting stronger on Milk+, and risking your sanity for the secrets in the strata.
**Player fantasy:** you are a Korova Rock prospector. The rock makes you stronger, and it changes you.
**Tone:** the Korova Rock Tourist Guide's voice: dry, official, and completely serious about absurd things.
**Platform:** browser (HTML/JavaScript), published on itch.io.
**Length:** 10–15 minutes to the core, with a clear ending.

## Core loop
**Dig → collect ingredients → mix Milk+ → drink → get stronger → handle bigger tools → dig deeper.**

- **Every few seconds:** dig and collect ore and ingredients.
- **Every minute:** mix and drink Milk+, and upgrade tools that need more strength.
- **Every few minutes:** break through to a new layer, unlock Field Guide cards, and choose the next crater with the rover.

## Milk+ variants
Mixed from ingredients found in the layers. Each one is a temporary effect:

- **Strength:** more digging power, for harder layers
- **Stamina:** dig longer before tiring
- **Energy:** faster digging for a while
- **Focus:** less drill drift, more rare finds
- **Calm:** lowers the frenzy meter
- **Recovery:** repairs tools and body after frenzy
- **Sleep:** ends the shift and saves progress

**Secret menu** (unlocked through frenzy): Jizz+, Candygirl, XXX.

## Frenzy (push your luck)
- **Rule:** *Double check any possible interactions.* Some combinations clash, and drinking too much too fast fills the meter.
- **The meter** uses the guide's dosage scale: *Hell yeah → We see you → Meh → Coward → Get out of our sight.*
- **In frenzy:** the screen tilts, the drill digs sideways, and you can lose ore or damage tools.
- **The reward:** only frenzy reaches **hidden strata** and **frenzy artefacts**, logged as *"Recovered under conditions the Kroeber Foundation does not endorse."*

## The layers
1. **Regolith Prime:** surface dust
2. **The Shaker Strata:** fossilised protein shakers
3. **The Chrome Vein:** metallic, and coveted by Näsa
4. **The Crack:** bioluminescent; home of the Jacked Asses
5. **The Core:** redacted by the Belt Authority

Each layer needs more strength, yields new ingredients, and has its own Kroeber Fact.

## Ingredients (fictional)
Korova minerals in the menu's format (Nutrition Facts, Caution, Fun fact). For example: **Shaker Dust, Chrome Filings, Crack Spores, Core Lactate.**

## Field Guide (collectible)
*Published by the Kroeber Foundation.*
- One card per layer, ingredient and artefact. Artefacts are shown in museum style: *"Artefact 1, Site KR-1, Crater 5, Quadrant 3."*
- Empty slots with question marks show the player that something is hidden.
- A separate section for frenzy finds.

## The rover
Used as a **crater picker** between digging sites: a drawn map of Korova Rock, a short animation, and you arrive. No driving.

## The radio
- **Italo Korova:** calms the frenzy meter a little
- **Pump FM** (80s workout): digging goes slightly faster
- **Belt Authority Public Service:** dry announcements and hints
- **Näsa Radio:** Big Space™ ads interrupting the music

Music: original, or AI-generated or royalty-free under licences that allow it. No real tracks. DJ voices made with ElevenLabs.

## Visual direction
- **Comic ink** (black, white, blue-grey wash) for the Rock, the prospectors and the world: the base.
- **Y2K chrome** for **Näsa** only: it intrudes like pop-up ads.
- **Bioluminescence** (#00FF9F, #9B5DE5, amber #FFB347) for the compound and the Crack, taking over as you go deeper.
- **Interface:** a drawn version of the real rover's control panel (diegetic UI).
- **Fonts and colours** from the year-one identity, shifting toward year two.

## Ending
You reach the core. *"We went to Korova Rock to mine. What we ended up mining was $A$$."* The player receives the challenge coin (*Ex profundo, nova. 1 A$$*) as an image to share.

## Microcopy
- Loading screen: *"1. Check engine light. 2. Ignore that it is on. 3. See Step 1."*
- First Milk+: *"Do not spill. Make us proud."*

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
