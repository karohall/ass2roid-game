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
- **Sleep:** saves to localStorage (grid, position, inventory, Field Guide). Waking up clears effects, the meter and tiredness. The start screen offers Continue.
- Fix: fast key taps are queued instead of dropped during the dig cooldown, so mashing always counts.
