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

**A nod to OutRun:** the rover has a cassette called **Testarocco**. Pondered the fact that design comes from game history, and isn't just decoration.
