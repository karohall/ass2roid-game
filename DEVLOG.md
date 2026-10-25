# ASS2ROID: Ex Profundo — Dev Log

---

## 2026-10-20 — Prototype 1

**GDD v0.2 written.** Concept locked: dig, mix Milk+, risk frenzy, find hidden strata. Five layers planned; Prototype 1 covers one. Platform: browser, itch.io.

**Two prototypes built in one session:**

**P1-A (canvas, arrow keys):** Grid-based game. Player character moves and digs through a procedurally laid-out layer. Frenzy meter with five dosage labels. Two ingredients (Shaker Dust, Chalk Whey), two Milk+ variants, one clash interaction (Strength + Calm active simultaneously). Hidden seam that only opens in frenzy; artefact inside. Hint bar and symbol key in the UI.

**Playtest 1 — P1-A:** Played solo on laptop (arrow keys). Got stuck at the surface without the hint bar — hints were essential to know about mixing. Once mixing clicked, kept going back for more; frenzy drove the loop. The risk-reward worked. Mouse-click digging went unnoticed; removed. Verdict: the core feel is there.

**P1-B (click button, DOM):** Rebuilt as a click-based single-page game per spec — grey boxes, plain text, one CONFIG object at the top, no canvas. Dig button, depth bar, three mix buttons (Strength / Calm / Blend), frenzy meter, Field Guide with two collectible cards. Clash triggers when Blend is mixed twice in a row (Shaker Dust + Chrome Filings).

**Open questions after today:**
- Which version to carry forward — movement-based or click-based?
- Hint system vs. pure discovery: do players need to be told about mixing, or can ingredient names + the "double check interactions" warning carry it?
- Frenzy duration (10 s) may be too short to reliably find the artefact; test with more players.

**Decision: carry forward P1-A.** Digging through actual rock with Strength and Calm is what held attention in the playtest; P1-B reduces digging to a button. P1-A is now `index.html`; P1-B is kept as `prototype-1-click.html` for comparison. Settled open question 1. Note: P1-A's frenzy lasts 12 s, not 10 s (that figure was P1-B's).

**Iteration after playtest:**
- *"Why drink Calm when everything is about irony and frenzy?"* Calm was only a brake, and nobody brakes. A timing-based redesign was too meta: players go into rabid clicking. Simplified to one rule: **Strength + Calm = instant frenzy**, and frenzy opens the hidden seam right next to you.
- Frenzy now only turns downward digs sideways (before, it also sent sideways digs down and you fell past the seam).
- Outside feedback: explain frenzy *before* it happens, as invitation rather than warning. Added all three: a Belt Authority announcement on first mix (also in the hint bar), a caution line in the Milk+ menu, and a locked Field Guide card that says what unlocks it.
- Dosage scale moved under the hint bar, full width and much bigger. The hint bar is a keeper.
- Naming: ore → **drill samples**; ingredients → **Regolith Whey** (Strength) and **Legacy Powder** (Calm). Full compound list per layer added to the GDD.

Tagged as `prototype-1`.

---

## 2026-10-21 — Prototype 2

Built on P1-A. Still grey boxes, no images, no sound. Every tunable number is in one `CONFIG` object at the top of the script.

- **Three layers**, each its own shaft: Regolith Prime → The Shaker Strata → The Chrome Vein. Rock gets harder, and each layer ends in a **crust** that needs a minimum digging power (1 / 4 / 7). Power 7 means drinking Strength twice, which pushes the dosage meter: the strength requirement and the frenzy risk are now the same decision.
- **Ingredients follow the GDD**, not the old brief: Regolith Whey, Legacy Powder, Chrome Filings, plus Crack Spores seeping up from The Crack. Each new layer brings a new ingredient and unlocks a new recipe.
- **Four Milk+ variants with recipes:** Strength (2 Whey), Calm (2 Powder), Stamina (Whey + Chrome), Focus (Powder + Spores). Unknown ingredients show as `?` in the recipes until found.
- **Tiredness:** every hit adds a little. Tired digging is slower and drifts sideways. Stops recovering while you keep digging. Stamina knocks it down and slows it.
- **Focus:** less drift, and broken rock sometimes yields the layer's rare ingredient.
- **Two clashes:** Strength × Calm = instant frenzy (as in P1). Stamina × Focus = +55 on the meter.
- **Field Guide:** 9 slots: 3 layers, 4 ingredients, 2 frenzy artefacts. Locked slots show `?`. Artefact 1 can turn up in any layer; Artefact 2 only in The Chrome Vein, after Artefact 1.
- **Crater picker:** after each breakthrough, a two-choice text menu. Each crater shifts ingredient yields.
- **Sleep:** saved to localStorage, with Continue on the start screen. (Removed the same day, see below.)
- Fix: fast key taps are queued instead of dropped during the dig cooldown, so mashing always counts.
- Renamed Focus → **Hyperfocus**.
- **Fast commands:** keys 1–4 mix *and* drink in one press when you have no bottle. No mouse needed while digging.
- **Crater picker parked.** Choosing a crater between layers is too soon in the dev process. Replaced with a short loading screen (rover en route, random crater). The picker still works and can be switched back on with `CONFIG.craterPicker = true`.
- **Sleep and save removed.** A 10–15 minute game doesn't need them. Replaced with **Pause** (P, Esc or the panel button). Pausing freezes every timer, so drinks and frenzy don't run out while you're away.
- **Loading screen slowed down and made readable.** It now shows what the next layer brings (new compound, new recipe, the crust's power requirement). The bar fills over 4 seconds, then the screen waits for ↓, so nobody is rushed past the text.
- **Progress marker.** A journey strip on the start screen, loading screen and pause screen: Regolith Prime → Shaker Strata → Chrome Vein → The end, with cleared layers ticked and the next one highlighted ("Layer 2 of 3"). The player always knows how long the game is.
- **Enter begins the shift.**
- **Mix vs Drink.** *"There needs to be a difference between Mix and Drink."* Mixing now takes time: **shaking a Milk+ takes 2 s and you can't dig meanwhile**. Drinking is instant. A small progress bar and a "Shaking…" label appear over the prospector's head (kept small on purpose: cute and on brand). The delay works well.
- **One button per shake.** With drinking instant, separate Mix and Drink buttons were pointless. Now each shake has one button (and key 1–4) that cycles **Shake → Shaking… → Drink**: first press shakes a bottle, second press drinks it. You can shake in a quiet moment and keep the bottle for when it counts. One bottle per shake at a time. The frenzy announcement moved from the first shake to the first drink so it doesn't hide the "press again to drink" hint.

**Reflection:** *I understand how it can be beneficial for UX to build a game, as you have to work out recurring solutions for how to teach the player the rules of the game.*

---

## 2026-10-21 — Radio

**Did:** designed the four radio stations (The Pump Zone, Disco Gravitas, Void FM, Näsa Radio) and generated the first songs in Suno.

**Decided:** every station has a fixed DNA, and each song gets a role (signature, driver, contrast, wildcard), so the radio is varied without feeling scattered. All lyrics are about mining, in three emotional registers: body (Pump Zone), heart (Disco Gravitas) and consciousness (Void FM).

**Surprised me:** the first prompts sounded flat. It worked when the lyrics included directions for each section (voice, energy, sound). It's like directing a performance.

**Next:** generate the remaining songs, then build the radio into Prototype 3.

---

## 2026-10-22 — Void FM and Stillness

**Did:** wrote The You Show, Void FM's Stillness track, and made it into a song in Suno. Iterated the lyrics over several rounds, from a sad time-dilation story to a guided, weightless experience told by an older female guide.

**Decided:** the sad story was reduced to metaphor; the song describes a state rather than explaining one. Calm now has its own overdose state, Stillness, as the mirror of Frenzy, on one shared balance meter. A woman's voice for the lonely astronaut, to break the trope.

**Surprised me:** How easy it is to write song lyrics about the things that lie close to my heart. The first piano version sounded finished but conventional. Removing the signals for polish (excluding "big chorus", adding detuned piano, warped tape and a deadpan vocal) made it sound like mine. Also: describing the arrangement and mix, not just the genre, is what makes Suno sound produced.

**Next:** generate The You Show, then the remaining Void FM songs.

**Update:** The You Show is finished. Final lyrics are in RADIO.md. Turning up Suno's Weirdness setting is beneficial to the kind of sound I make.

---

## 2026-10-22 — Balance meter: Frenzy and Stillness

**Did:** replaced the frenzy meter and the clashes with a signed balance meter, from −100 (Stillness) through 0 to +100 (Frenzy). Every Milk+ pushes it in a direction (Strength +30, Calm −30, Stamina and Hyperfocus +10), and a **dose window** multiplies each push by the number of drinks in the last 20 seconds (×1, ×1.5, ×2, ×3). Stillness is now a state of its own: everything slows, colours drain to violet and grey, the drill stops drifting, and a quiet seam opens with a **Stillness artefact** inside.

**Decided:**
- **Calm stops being a pure brake.** One Calm brings you back toward balanced; several in a row send you into Stillness, which has its own reward. This fixes "nobody brakes" for real.
- **The clashes go.** "Strength + Calm = instant frenzy" was the first playtest's secret. The new secret is the window: *"Rumour: the Foundation measures how fast, not just how much."*
- **Show the window** on the meter ("next drink ×1.5 · 14s"), so players learn the rule by watching it rather than by being told. Same idea as the effect countdown.
- **A cheaper cost in layer 1, rather than a steeper multiplier.** Under the new rule, Frenzy in Regolith Prime would need three quick Strengths: six Regolith Whey in 20 seconds, too much for a new player, and Artefact 1 would drift out of reach. The two options were a steeper window (`[1, 1.75, 2.5, 3]`) or a lower price in the first layer. I chose the lower price: Regolith Prime tips at ±70 instead of ±100, so two quick drinks reach either state, while the window stays simple and the same everywhere. Deeper layers keep the full ±100.
- **Keep the dosage labels** across both sides: *Get out of our sight · Coward · Meh · We see you · Hell yeah*. Calm being called "Coward" is exactly the guide's tone, and hides that Stillness pays off.

**Fix along the way:** tipping into both states without moving made the second seam overwrite the first, artefact included. Seams now find a free spot beside you.

**Also changed:** the caution line is down to *"Caution: quick drinks push harder. Double check any possible interactions."* The word "Shaking…" now appears only on the first shake; after that, the little progress bar says it all.

**Noticed:** there is now a lot for the player to take in at once when the browser tab opens: the rock, the hint bar, the dosage scale with its window and tip markers, the key, the rover panel, ingredients, four recipes, the caution, the Field Guide and the feed. Every piece earns its place, but together they're a wall. It's a difficult balance to manage: each rule needs teaching, and each bit of teaching adds to the screen.

**Reflection:** *The design of the interface feels daunting, since it is my first game interface.*

**For later:**
- **Level overview:** design it so it logically illustrates the progression from beginner at the surface to the deepest depths.
- **The scale:** I don't like the dashed tip lines. Fine for prototype mode, but the scale needs a proper look.
- **An optional overlay** for players who want the numbers (the ×1.5, the durations, the tip points), so the default interface can be sleeker.

**Next:** playtest the window. Is ×1.5 felt? Is two quick drinks in layer 1 too easy?

**After playing it out:**
- **Layer 1 tip point lowered from ±70 to ±60.** With the 2-second shake between drinks, the meter drifts back a little, so two quick Strengths landed just under +70. "Two quick drinks" has to work every time, so it's ±60 now.
- **The Frenzy artefact stays easy** (three presses at doubled power). That's on purpose: the player needs a carrot to stay in the game, and to learn that interesting things happen if they buy in.

---

## 2026-10-22 — Tiredness out, Stamina as a buffer

**Did:** removed tiredness completely (the bar, the slowdown, the tired drift and its hints). Gave Stamina a new job: it's a **buffer**. Drinking it stretches whatever is already counting down by 50% (other Milk+, Frenzy, Stillness), and every other Milk+ drunk while it lasts runs 50% longer.

**Decided:**
- **Why tiredness went:** it existed mainly so Stamina had something to do. It braked fast mashing, which is the fun part, while the dose window already makes drinking fast the risk. In play you hardly felt it, and it was one more bar on a screen that already asks a lot of the player.
- **Why the buffer:** it builds on the countdowns, which work well, and gives Stamina a clear use: stretching a Strength over the hard band or crust, or keeping Stillness going while you dig the quiet seam. One rule and one bar fewer.

**Radio:** finished songs so far: Ex Profundo (Void FM; it replaces one of the four planned songs), Down in the Shaft and Hard Hat, Hard Body (The Pump Zone), and The You Show, which moved to a new folder, **Space oddities**, for songs that play on special occasions such as Stillness overload.

**Also:** the space bar pauses and resumes (P and Esc still work). Space no longer scrolls the page.

**Hyperfocus gets a new job: a steady hand.** With tiredness gone, its old jobs had faded: "less drift" only helped during Frenzy, where the drift is the fun, and "more rare finds" mostly found Crack Spores, the ingredient for Hyperfocus itself. Now, while it lasts, drinks don't stack (the dose window counts ×1, and those drinks leave no trace in the window afterwards), and the balance meter holds still. Stamina buys time; Hyperfocus gives control. It unlocks in the Chrome Vein, exactly where the crust needs two quick Strengths: with Hyperfocus first, that's 10 + 30 + 30 = 70, safely under the edge. Other ideas considered: showing the hidden numbers while hyperfocused (a diegetic version of the optional overlay), and holding a sealed seam open.

---

## 2026-10-22 — Goal, A$$ coin, and parked ideas

**Decided:**
- **The goal of the game:** reach the core, and experience all the peak and altered states along the way.
- **The A$$ coin is the currency.** Very on brand. The ending line *"What we ended up mining was A$$"* is out: too vulgar, even for me.
- **The shift clock is hidden from the player.** It added pressure that doesn't fit the game. It's still measured, and the end screen tells you: *"Shift length: 12 minutes. The Foundation has logged your overtime."*
- **Drill samples stay for now.** Today they're a score with no meaning, but they'll be traded for A$$ coins once tool upgrades exist.

**Parked for later:**
- **Tool upgrades.** First version: a stronger drill bit isn't optional, and how strong it gets depends on how many A$$ coins your drill samples were worth. Later: a shop where you choose between depth, accuracy and so on.
- **Stillness overload as a space sequence:** you drift off the mining shaft into deep space, doing slow somersaults for the length of The You Show (about 4 minutes). The point is to just watch.

---

## 2026-10-23 — I Dig You (All Night Long)

**Did:** finished I Dig You (All Night Long), the driver track on Disco Gravitas.

**Surprised me:** the lyrics only came alive once they were less correct. The radio countdown carries the story, less so the words.

**For the case study:** the process across the songs (Ex Profundo on Void FM, The You Show in Space oddities, Amore Orbitale and I Dig You on Disco Gravitas) makes good material: genre research, the too-clean problem, and imperfection on purpose.

**Reflection:** *This confirms a lot of the earlier work with ASS2ROID: there needs to exist a core personality, and the human behind the gears needs to know the feeling to aim for.*

**Dolce de Leche+ is finished** (the contrast track on Disco Gravitas). Italo disco becomes hilarious and feels authentic when the bilingual echo is used as a structure. Overall, phonetic spelling works for steering pronunciation ("Letche").

**A nod to OutRun:** the rover has a cassette called **Testarocca**. Pondered the fact that design comes from game history, and isn't just decoration.

**Reflection:** *Speaking of decoration: AI tools are great to help you see. They put words on qualities, but you are the one providing the actual quality.*

**Radio decisions:** all stations are available from the start, plus the rover cassette. The radio is the game's personality, not a reward. The Pump Zone digs slightly faster, Disco Gravitas calms the meter a little, and Void FM has no effect: choosing it is choosing a mood, not a tactic. The radio keeps playing between layers, ducked under the engine on the loading screen. Details in RADIO.md.

**Stillness overload is itself an ending.** It can end the game early, before the core: the prospector dissolves into space during The You Show, and that's the end of the shift. "The drift is saved for the ending" means exactly this.

---

## 2026-10-23 — Slower, longer, and an opening shake

**Problem:** the shakes were too easy to get. I got through three layers in about two minutes, and a minute and a half of it was me shaking roids.

**Measured:** a small bot that plays like me (digs straight down, shakes whenever it can) confirmed it: about a minute per run, 15–20 seconds per layer. The digging was far too quick, so shaking was all that was left to do.

**Did:**
- **Ingredients halved,** double portions down from 40% to 10%.
- **Strength lasts 45 seconds** instead of 25, so one shake covers more digging.
- **Layers are 60 rows deep, and the rock is about three times tougher.** Strength now makes digging roughly twice as fast instead of one-hit.
- **A supply cache** of Regolith Whey above every crust that needs Strength. With scarcer ingredients, the bot found it could reach the Chrome Vein crust without enough Whey, and you can't climb back up. Now you can always get through.
- **Result:** a run takes about 3.5 minutes playing greedily, about 8.5 saving Strength for the crusts. Shaking is about 12 seconds of it.

**Loved it:** the slowness, and the long layers. It gives a cool graphic effect.

**The opening shake:** the game now begins with the player shaking a drink. A starter ration of 2 Regolith Whey, and the first hint is "press 1 to shake a Strength", then "press 1 again to drink", then "press ↓ to dig". The player learns to shake, and what it looks like, by doing it. So the "Shaking…" label over the progress bar is gone. It also fixes the slow start.

**Worry:** the levels feel too similar. Possibly just the prototype stage, but a layer probably needs to *play* differently, not just look different: one mechanic of its own per layer.

**The interface arrives bit by bit (pö om pö).** The opening screen is just the prospector, the hint and the Strength button, and the first hint carries the joke: *"Starter ration: 2 Regolith Whey, courtesy of the Foundation."* Everything else appears when it first matters: the dosage scale, the caution and the feed with the first drink; the rover panel, the key and pause with the first dig; ingredients with the first pickup; each recipe when its ingredient turns up; the Field Guide with its second card. Each part fades in. It tells the story to the player.

**The rumour moved.** *"The Foundation measures how fast, not just how much"* was too far-fetched and vague on its own, with no direct connection to the shaking. Now it shows right after the first drink, while "next drink ×1.5" is on screen, and says what it means: drink again while that shows, and it pushes harder.

---

## 2026-10-24 — Each layer gets its own thing

**Problem:** layer 3 had too few new features. It felt like the only thing that changed was that it was slower and harder.

**Decided:** every layer gets one thing of its own, so it *plays* differently, built from what the GDD already says about it.
- **The Shaker Strata: fossil shakers.** Little sealed bottles in the rock. Break one for a ready Milk+, already shaken, contents unknown. A small gamble with the balance meter.
- **The Chrome Vein: Näsa chrome slabs™.** Bars of chrome that can't be dug, each with a gap. The way down becomes a route instead of a straight line. Hitting one brings a Näsa pop-up in Y2K chrome: *"This chrome is the property of Näsa. Big Space™."* The first chrome in the game, as the GDD intended: Näsa intrudes like an ad.
- **The Crack (full game): darkness.** Only the area around the prospector is visible, and the Crack Spores glow.

**Fix along the way:** an altered-state seam could have opened inside a slab's gap and blocked the only way down. Seams now keep clear of slab rows and the supply cache.

**Also:** in Stillness, the dosage scale now reads *GET OUT INTO THE VAST NOTHINGNESS OF SPACE*.

---

## 2026-10-24 — Playtest feedback

**What came up:**
- **Unclear what the different shakes do.** What each one did was only in a tooltip, and nobody hovers while digging.
- *"What's the point with Stamina?"* Unclear whether Stamina should be drunk first, or whether it acts on what's already in your system. I like the idea of always being able to take it, to prolong what's already in your system.
- **The pillar of information on the right** was a problem: you shouldn't have to scroll to reach the bottom half of the screen.
- *"Can it go wrong somehow? Can you lose?"*

**Changed:**
- **Each shake says what it does,** in one line under its name in the Milk+ menu.
- **Stamina does one thing:** drink it any time, and everything already in your system lasts 50% longer. No countdown of its own. Drink it with nothing in your system and *"The Foundation notes the waste."*
- **The side panel is now two columns** (rover, ingredients and Milk+; then the Field Guide, the feed and pause), and **the whole game scales to fit the window,** so nothing needs scrolling, even on a small laptop.

**Open:** can you lose? To decide.

**Decided: soft failure, and Recovery! <3** You can't lose the run, but you can mess up. Every hit in Frenzy wears the drill, a full Frenzy of mashing costs about half its condition, and a worn drill digs slower. It never breaks. **Recovery** (key 5: 1 Regolith Whey + 1 Legacy Powder) repairs it at once. It competes with Strength for Regolith Whey, so repairing has a price. Frenzy finally has a real downside to weigh against its reward. Taught bit by bit: the drill's condition and the Recovery row only appear the first time the drill takes damage, with a hint.

**The drill and the pick axe.** The prospector carries both. The drill is the powerful one and it can break: Frenzy wears it, about 4% for every second you keep digging, so it takes two or three Frenzies to break it. The pick axe always works, at half speed, so you can never get stuck. Recovery repairs the drill. It's a clearer rule than a drill that gradually slows down: the drill works fully until it doesn't, and the panel shows its condition as a warning.

**Found while playing it out:** wear counted per hit barely registered, because in Frenzy (doubled power) most blocks break in one hit and a lot of the time goes to falling. Wear now counts the time between hits, which also makes it the same on any computer.

**Fix: the clock stops on the loading screen.** Playing it out showed that a Frenzy which carries you through a crust kept ticking while you read the loading screen, and was gone by the time you pressed ↓. Now the loading screen freezes every timer, the same way pause does, and you arrive in the next layer still in Frenzy.

**From my own play:**
- **The interface was hard to take in, and the shakes disappeared** among everything else. Hidden parts kept their place on screen, so the Milk+ menu floated halfway down with gaps above it, and a faint Pause button showed on the start screen. Now hidden parts take no space, the **Milk+ menu sits at the top of the first column, right next to the game**, with the ingredients that feed it underneath, and the rover panel moved to the second column with the Field Guide and the feed. The "press once to shake, press again to drink" line disappears after the first few drinks.
- **Frenzy lay very close at hand;** stacking Strength was too easy. Regolith Prime now tips at ±80 instead of ±60: two quick Strengths reach *Hell yeah*, and Frenzy takes a third, or a nudge from another Milk+.

**Reflection:** *The challenge of making UX for games is all the moving parts. It is a living interface that changes as the game teaches the player the rules, and as the player explores the construct.*

**The pacing works.** I like it much more now. Layer 1 has some resistance, both in digging power and mentally: a little frustration, which makes me look around and explore the other panels. Whey is the scarce resource: it goes into Strength, Recovery and Stamina, so every Whey block is a small decision. Kept as is for now. To watch in playtests: the point where "a little frustrating" turns into "nothing to do". If that happens, the gentlest fixes are a bit more Whey in layer 1 only, or a fossil shaker or two there.

**Tried and reverted: a Mission log left of the game.** The hint bar moved into its own column to the left of the rock, the current hint on top and the last three faded underneath. On paper it helped: shorter, so it scaled bigger on laptops. In practice it felt **claustrophobic and off proportion**: four columns packed edge to edge, and a tall box that stood mostly empty. Back to the hint under the rock and three columns, the layout I enjoy. Lesson: the numbers said yes, the feeling said no.

**We go deeper: a map and a depth gauge, in the walls.** It was hard to know how deep it goes. Instead of adding panels (lesson learned), the empty rock walls on each side of the shaft took the job. The left wall is a map of the whole layer: your tunnel, the hard band, the chrome slabs with their gaps, the crust, and a frame for what is on screen. The right wall is a depth gauge for the whole game, layer by layer, filling up as you go deeper. Both appear after the first dig.

**Radio placeholder.** No sound yet, but the radio has a place and keys. It plays the rover's tape, **Testarocca**, from the start screen, by default: the radio is the game's personality, so it's there before the shift begins. **R** steps through The Pump Zone, Disco Gravitas and Void FM, **T** always returns to the tape, and both work on every screen. The effects are on: The Pump Zone digs about 10% faster, Disco Gravitas calms the meter 50% faster, Void FM and the tape have none. "Now playing" cycles through the song titles.

**Fix: the screen zoomed out and back in mid-run.** The fit-to-window scaling reacted every time the feed or a Field Guide card got longer or shorter, so the whole game pumped in and out. Now the feed and the card text have fixed heights, the hint bar is at least three lines, and during play the scaling only ever shrinks. It rescales freshly on a window resize or a new shift.

**Keys reordered:** Recovery moved from 5 to **3**, so Stamina is now 4 and Hyperfocus 5. Recovery can be needed from the first layer, so it belongs with the early shakes.

**The loading screen sets the mood; the hint bar teaches.** The loading screens had grown into paragraphs of rules (fossil shakers, a new compound, a new recipe, the crust's power). Now they only give the layer's character, like *"The Shaker Strata. Fossilised protein shakers, lids still on."*, and each practical piece arrives in the hint bar when it matters: the fossil shaker hint when the first bottle comes into view, a new compound's recipe when you first pick it up, and the crust's power when you near the crust. Also tried centring the hint text vertically; top-aligned looked better (centred made the box look too wide).

**States end with the layer, and fossil shakers are drunk at once.** A Frenzy no longer carries over into the next layer: breaking through a crust gives a clean slate (the state ends, the dosage scale is back to balanced; Milk+ already in your system keeps going). And a fossil shaker is drunk the moment you break it: *"Contents: Stamina. Down it goes."* You only find out what it was once it's in you, which makes the gamble real.

**Fix, properly this time: no more resizing.** The bit-by-bit reveal kept making the layout taller, so the game shrank a step every time a new panel appeared. Now the size is measured once, as if everything were already showing (every panel, all five recipes, the longest hint), and kept for the whole game. Only a window resize changes it.

**Typewriter hints.** Each new hint now types itself out in the hint bar, about 60 characters a second, with a block cursor while it types, like a teleprinter in the rover.

**Still a scale jump on my screen, when the hint box emptied.** Couldn't reproduce it in testing at the same size, so the game now guards against the likely culprits: it only refits when the window really changes size (by more than a few pixels), and the page has no scrollbar that could come and go. To check on my own screen.

**The first shake reads as one line.** The shaking hint had barely finished typing before the "ready" hint erased it. Now it continues on the same line: *"Shaking Strength… No digging until it is ready. Ready! Press 1 again to drink it."* In general, a hint that extends the one on screen keeps typing instead of starting over.

**The Näsa pop-up was gone in an instant** (2.6 seconds, while you're busy finding the gap). Now it stays 5 seconds and fades out over one.

**The Chrome Vein was sooooo slow, and Frenzy almost out of reach.** It had half the Regolith Whey of the first layer on the toughest rock, and Frenzy needed three quick Strengths (six Whey). Whey there is now doubled (a layer went from about 194 to 118 seconds for my bot), and the edge is ±90 instead of ±100: two quick Strengths and a Stamina tip you over. Hyperfocus first still keeps the two Strengths for the crust safe.

**Parked for Prototype 3: blowing up Näsa's chrome.** In Frenzy with stacked Strength, a slab heats up until it blows open, or blows you up: the drill breaks and you're thrown back up a few rows. *"Näsa™ property damaged. An invoice has been issued."* Love the invoice, and that only the drill breaks.

**The ending: "Congratulations. You are now further down than anyone asked you to be."** (First draft: "You went deep. So, yeah.") The end screen counts up a personal summary of the run like a tally: depth, shift length, drill samples, Milk+, Frenzies, Stillnesses, Field Guide cards, drill breaks. Personal bests were built and then parked: a summary is enough for now, and high scores go to the parking lot.

**Fix: Field Guide text cut off, Pause cropped.** The card area's fixed height was too short for the artefact cards, and found Field Guide names (Regolith Prime, Chrome Filings…) wrap to two lines, so the column grew past the screen. Now every slot has the same two-line height and the card area fits the longest card.

**Why are drill samples lost in a Frenzy?** Losing samples was in the rules, but nothing in the game said so: a quiet line in the feed, far from where the eye is. "Lost" said what happened, not why. The Frenzy hint now gives the reason up front: *"Double digging power, but the drill rattles so hard that samples shake loose."* Every sample that drops makes the hint bar flash, because that is where you look while mashing; the counter in the rover panel flashes too, but that one alone would be missed. The sealed-seam hints got drier as well: *"The ? seam has sealed. It responds to Frenzy only."*

**The Calm rumour nagged.** "Rumour: Calm, taken quickly, goes somewhere too." was the fallback hint after any Frenzy, so it sat in the hint bar most of the time. Now it shows for 8 seconds as each of the first two Frenzies ends, and never once you have found Stillness. A rumour should be overheard, not repeated.

**Hyperfocus holds a seam open.** Should Hyperfocus give more artefacts? No: it would become the drink to take every time, and artefacts are the reward for the altered states. But it already holds the meter still, so now it holds a seam still too. If a Frenzy or Stillness ends while Hyperfocus lasts, the ? seam stays open until the Hyperfocus wears off: *"Hyperfocus is holding the ? seam open. Dig in before it wears off."* Drink it during the state, and the artefact is still within reach after.

**Drift: the second Calm state.** Calm now has two states. Stillness is the chill one, where you slow down and find artefacts. Drink a Calm *while in Stillness*, and you go past it into **Drift**: the shaft falls away beneath you, the hint bar fades, and only the prospector and the stars remain, turning slowly while The You Show plays. No controls, nothing to do, just watch. Then: *"CONTACT LOST. You let go of the Rock and drifted out into the vast nothingness of space. It was very quiet. It was not unpleasant."* The mood is sublime, existential, calm: a soft death. It is the other way out of the game, and never an accident: only a Calm you chose, and the Stillness hint warns first. I love the Drift sequence.

**Fix: the seam that wasn't there.** The Frenzy hint said "A ? seam opened right next to you", and there was none. Two bugs: a new Frenzy reused an older seam still waiting further up the shaft, and near the crust the seam could open a few rows *above* you, out of reach since you can't climb. Now a new state closes the old seam back into rock and opens a fresh one beside you, level with you or below. This was probably also why Artefact 2 never turned up in the Chrome Vein, even with seven Frenzies.

**Leaving the window pauses the shift.** Switching tab or clicking outside the game now pauses it.

## 2026-10-25 — A balanced interface

**A ground rule: always clear what to do to go where.** I got stuck twice: floating in space with no idea how to get out, and on the end screen, where only a mouse click on "New game" worked. Now the end screen also takes Enter, and the Drift shows a quiet "Esc: end the drift" at the bottom of space, fading in after the hint bar has gone. The rule for the whole game: every screen and state shows its way on and its way out.

**Line breaks in the hints.** The welcome and the first shake read better broken into lines: *"Welcome, prospector. / Starter ration: 2 Regolith Whey, courtesy of the Foundation. / Press 1 to shake a Strength."*

**Hints stay longer.** They disappeared before I could read them. Announcements now stay long enough to be typed out and read in full: 9 seconds at least, and the longest about 18 (it was 8 for all of them).

**Milk+ keys stay put, gaps show.** The menu went [1], [2], [4]: Recovery (key 3) only appears once the drill is worn, so the gap looked like a mistake. Each Milk+ keeps its key, and now a dim "[3] ? ? ?" holds the place of one still to find, like the unknown ingredients. The placeholders appear once the menu is more than Strength, so the opening stays sparse.

**A full playthrough: 5:57.** 30 drill samples, 26 Milk+, 3 Frenzies, 0 Stillnesses, 8 of 10 Field Guide cards. Shorter than the 10–15 minute target, with three of five layers. Again no Stillness: 32 Legacy Powder left over, enough for 16 Calms. Calm seems to be the drink nobody reaches for. And again no Artefact 2, with nothing telling me there was more to find. So the end screen now says what is still out there: *"Still unrecovered: a Frenzy find in the Chrome Vein; a Stillness find anywhere."* A quiet reason to play again.

**A taller mining window.** It was 13 rows; now 18, about as tall as the Milk+ column beside it, so you see further down the shaft. The dosage meter is taller too. The order stays: window, hint bar (closest to the action), meter. The right-hand column is still the tallest, so the game does not shrink on a laptop.

**The radio moves under the meter.** Long and slim: one row for the station and keys, one for what is playing. The right-hand column moves up by the radio's height. The mining window settles at 17½ rows, so its bottom lines up with the Milk+ column.

**The Frenzy warning was hidden.** My third quick Strength tipped me over with no warning. "One more quick Strength tips you into Frenzy" was there, but it ranked below the announcements and the dose-window rumour, and around the first drinks one of those always covered it (announcements now stay up to 18 seconds). The tipping warnings now outrank both.

**A slimmer, wider meter and a radio banner.** The meter is half as tall and stretches out under the Milk+ column. The radio's station and song roll by like a banner, on every screen, the start screen included.

**Alignment and the cut-off bottom.** The game measures its size once, at the start, for the fullest layout. But the legend under the meter is empty then and fills up during play, so the bottom of the game was cut off. The legend now has room for two lines from the start. The meter keeps its place before the first drink, so the radio below it never jumps. And everything lines up: the hint bar is flush with the mining window; the meter, radio and legend all reach across to the right edge of the Milk+ column.

**Pause only when the tab is hidden.** Pausing whenever the window lost focus was inconsistent: some screenshot tools take focus and paused the game, others did not. Now only a hidden tab pauses it (switching tab, minimising, locking the screen). Screenshots and clicking into another window leave it running.

**Reflection: moving things draws attention.** Moving features around is a very effective way to draw attention, and to show what is important. On the start screen the radio now sits alone in the middle, under the mining window, before anything else has arrived. I appreciate that: the radio is the game's personality, and the tape is already playing before the shift begins. Where something sits says how much it matters, and when it moves, you notice it.

**Reflection: one white surface.** The layout now feels nice and balanced. And the white is efficient: in a grey interface, the hint bar is the only light surface, so the eye goes there first. That is where the game tells you what to do next.

**Pause moves down beside the radio.** It sat just under the Public Service box, level with the meter, crowding its right end. Now Pause lines up with the radio, so the meter has space to the right, and the Public Service box stays where it was.

**Reflection: an interface that grows with you.** Today I landed in an interface that feels balanced and rewarding. As the player keeps discovering the game and learning the different stats, more input is added: the Milk+ menu, the meter, the rover panel, the Field Guide. Nothing arrives before it means something.
