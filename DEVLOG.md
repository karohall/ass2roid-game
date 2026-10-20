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
