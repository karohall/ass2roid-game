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
