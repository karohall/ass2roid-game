# ASS2ROID: Ex Profundo — Playtest guide

*For testing Prototype 2.1 (tag `prototype-2.1`) with 3–5 people who have not played it. Run every test the same way, so the results can be compared. A run takes roughly 4–9 minutes.*

---

## What we want to learn

1. **First impression:** the game opens with only the prospector, the hint and one button, and the rest of the interface arrives bit by bit. Do they notice new parts appearing? Does it feel calm, or confusing? Where do they look, and where do they get stuck? Do they scroll down to the Field Guide and the feed? On a laptop they sit below the fold.
2. **Shake and drink:** the game opens by asking them to shake a Strength. Do they understand what shaking is? Later, do they shake again on their own, and do they ever shake ahead and keep a bottle?
3. **The dose window:** right after the first drink, the hint explains "next drink ×1.5". Do they read it, and do they ever drink quickly on purpose?
4. **Altered states:** do they reach Frenzy and Stillness, and do they want to go back for more?
5. **Pace:** the layers are long and slow on purpose. Does that feel good ("a cool graphic effect"), or does it drag? When do they start to get bored, if at all?

---

## Before the test

- **Setup:** a laptop with a keyboard, the game open in a fresh browser tab on the itch.io link (see [Putting it on itch.io](#putting-it-on-itchio)). Sound doesn't matter yet: the game has none.
- **Recording (optional):** a screen recording helps, but only with the tester's permission.
- **You need:** this guide, a copy of the [notes sheet](#notes-sheet) per tester, and a clock.

## What to say

Keep it short, and say the same thing every time:

> "This is an early version of a game I'm making. I'm testing the game, not you. Please think out loud while you play: what you're looking at, what you think things do, what surprises you. I won't help you, because I want to see where the game fails to explain itself. Play for as long as you like, and stop whenever you want."

## During the test

- **Don't help.** Not with words, not by pointing. If they ask, say: *"What do you think it does?"*
- **If they're stuck for more than 2 minutes,** give one small nudge, and write down exactly where and what you said. A nudge is a finding.
- **Write down times** for the moments on the notes sheet. Rough is fine.
- **Write down their words,** especially surprise, confusion and laughter.

## After the test

Ask these, in this order, and write down the answers:

1. What was the game about?
2. What did the drinks do? Did any of them surprise you?
3. What happened when the screen tilted / turned violet? What did you make of it?
4. Was there anything you didn't understand, or didn't notice until late?
5. How did the pace feel: the long layers, the slow rock?
6. Would you play again? Why, or why not?

---

## Notes sheet

Copy this block once per tester.

```
TESTER: ______________   DATE: __________   PLAYED FOR: ____ min

MOMENTS (time from start)
  First dig ....................... ____
  First ingredient ................ ____
  Opening shake + drink ........... ____   (understood / confused)
  First shake on their own ........ ____   (after the opening one)
  Noticed parts appearing ......... ____   (yes / no / said: "_______")
  Noticed the dose window ......... ____   (yes / no / said: "_______")
  First Frenzy .................... ____   (on purpose / by accident)
  First Stillness ................. ____   (on purpose / by accident)
  Artefact found .................. ____   (which: ________)
  Layer 1 cleared ................. ____
  Layer 2 cleared ................. ____
  First sign of boredom ........... ____   (where: ________)
  Finished / stopped .............. ____   (end screen shift length: ____ min)

WHERE THEY LOOKED FIRST

STUCK (where, how long, nudge given)

THEIR WORDS (quotes)

TOO MUCH AT ONCE? (what they ignored, what they said)

AFTER-TEST ANSWERS
  1.
  2.
  3.
  4.
  5.
  6.

MY OBSERVATIONS
```

---

## After all tests

- **Look for patterns,** not single opinions. Something two or more testers struggle with is a finding; one tester's taste is a data point.
- **Write a playtest entry in [DEVLOG.md](DEVLOG.md):** what you tested, what you saw, what surprised you, and what changes for Prototype 3. It becomes the "test" chapter of the case study: idea → prototype → **test** → finished.

---

## Putting it on itch.io

The whole game is one file, `index.html`, so it uploads as an HTML game.

1. **Make a zip** with `index.html` at the top level of the zip (not inside a folder).
2. On itch.io, **create a new project.** Set the kind of project to **HTML**.
3. **Upload the zip** and mark it to be played in the browser.
4. **Embed size:** the game is about 850 pixels wide and 1150 pixels tall, because the side panel is long. That is taller than most laptop screens, so the page scrolls. Turn on the option to launch the game in fullscreen or a new window rather than squeezing it into a small embed.
5. **Visibility:** keep the page **restricted** (or a draft) while testing, and share the link only with your testers.
6. **Before sending the link,** open it yourself on a laptop and play the first minute.
