# ASS2ROID: Ex Profundo — Playtest guide

*For testing Prototype 3 (tag `prototype-3`) with 3–5 people who have not played it. Run every test the same way, so the results can be compared. A run to the Core takes roughly 15–25 minutes; let them stop whenever they like.*

*(The Prototype 2.2 guide is in git history, at tag `prototype-2.2`.)*

---

## What we want to learn

Prototype 3 added a lot. These are the questions that matter most, in roughly the order a player meets them:

1. **The radio first:** the drill won't start without music. Do they find R? Do they try other stations, and do they notice a station's effect (the Pump Zone digs faster, Disco Gravitas calms the meter, Void FM gives night vision in The Crack)? What do they make of the DJs, Coach Rocky and the Broadcaster?
2. **The interface arriving bit by bit:** do they notice new parts appearing? Does the screen feel like a place ("a room"), or like too much? Where do they look first?
3. **Shake, drink, and the dose window:** do they shake ahead and keep bottles? Do they ever drink quickly on purpose?
4. **Frenzy and Stillness:** do they reach them, and do they want to go back? Do they notice the music changing (faster and rougher in a Frenzy, muffled in Stillness)?
5. **Seams and sealed finds:** do they understand that a sealed find (◈) only gives way in the right state? Do they plan for one (save bottles, tip over beside it)? Does the hint help, or do they ignore it?
6. **The drill, the pick axe and the tape:** when the drill breaks, the radio dies and the tape plays. Do they get it? Do they find Recovery (now Legacy Powder + Chrome Filings)?
7. **Näsa chrome:** do they find the gap? Does anyone try to melt it in a Frenzy (and what happens when it blows)?
8. **Blasting charges:** after the rumour, do they use B? Does it change how they play the slow deep layers?
9. **The secret menu:** does anyone notice the graffiti, the redacted card, the rumours? Does anyone find Candygirl (0) or Jizz+ (9)? How long does it take, and what do they say?
10. **The Crack:** how does the darkness feel? Do they find night vision on Void FM? If they have Candygirl, what do they make of the rave?
11. **The two endings:** does anyone drift off (Calm on top of Stillness)? Do they steer? Do they stay to the end of the song, or press Esc? Does anyone reach the Core?
12. **The archive:** do they open the archive cabinet and read cards? Do they click the photos? Does the end screen's list of finds still in the rock make them want to play again?
13. **Pace:** the deeper layers are slow on purpose. Where, if anywhere, do they get bored?

---

## Before the test

- **Setup:** a laptop with a keyboard, the game open in a fresh browser tab on the itch.io link (see [Putting it on itch.io](#putting-it-on-itchio)). **Sound on, with headphones or speakers:** the radio is part of the game now.
- **Photosensitivity:** the game avoids flashing, but ask before you start whether the tester is sensitive to flashing lights or moving patterns. The page should carry a short note too.
- **Recording (optional):** a screen recording helps, but only with the tester's permission.
- **You need:** this guide, a copy of the [notes sheet](#notes-sheet) per tester, and a clock.

## What to say

Keep it short, and say the same thing every time:

> "This is an early version of a game I'm making. I'm testing the game, not you. Please think out loud while you play: what you're looking at, what you think things do, what surprises you. I won't help you, because I want to see where the game fails to explain itself. Play for as long as you like, and stop whenever you want."

## During the test

- **Don't help.** Not with words, not by pointing. If they ask, say: *"What do you think it does?"*
- **If they're stuck for more than 2 minutes,** give one small nudge, and write down exactly where and what you said. A nudge is a finding.
- **Write down times** for the moments on the notes sheet. Rough is fine.
- **Write down their words,** especially surprise, confusion and laughter. The radio, the Belt Authority and the archive cards are meant to be funny: note what lands.

## After the test

Ask these, in this order, and write down the answers:

1. What was the game about?
2. What did the drinks do? Did any of them surprise you?
3. What did the radio do? Did you have a favourite station, or a DJ you remember?
4. What happened when the screen tilted, or went quiet and violet? What did you make of it?
5. Was there anything you didn't understand, or didn't notice until late?
6. Did you find anything that wasn't on the menu? How?
7. How did the pace feel in the deeper layers?
8. Would you play again? Why, or why not?

---

## Notes sheet

Copy this block once per tester.

```
TESTER: ______________   DATE: __________   PLAYED FOR: ____ min

MOMENTS (time from start)
  Found R / radio on .............. ____
  First dig ....................... ____
  Opening shake + drink ........... ____   (understood / confused)
  Switched station ................ ____   (which: ________ / noticed its effect? yes / no)
  Reacted to a DJ ................. ____   (said: "_______")
  First Frenzy .................... ____   (on purpose / by accident / noticed the sound? yes / no)
  First Stillness ................. ____   (on purpose / by accident)
  First artefact .................. ____   (which: ________ / seam or sealed?)
  Planned for a sealed find ....... ____   (yes / no)
  Layer 1 cleared ................. ____
  Layer 2 cleared ................. ____
  Drill broke ..................... ____   (noticed the tape? used Recovery? yes / no)
  Näsa chrome: found the gap ...... ____   (tried to melt it? blew up? yes / no)
  First blasting charge (B) ....... ____   (after the rumour? yes / no)
  Layer 3 cleared ................. ____
  Noticed graffiti / secret card .. ____
  Found Candygirl (0) ............. ____   (how: ________)
  Found Jizz+ (9) ................. ____   (how: ________)
  Night vision on Void FM ......... ____   (yes / no)
  Drift ........................... ____   (steered? stayed to the end? yes / no)
  Reached the Core ................ ____
  Opened the archive / a photo .... ____
  First sign of boredom ........... ____   (where: ________)
  Finished / stopped .............. ____   (end screen shift length: ____ min, finds: __ of 14)

WHERE THEY LOOKED FIRST

STUCK (where, how long, nudge given)

THEIR WORDS (quotes; what made them laugh)

TOO MUCH AT ONCE? (what they ignored, what they said)

AFTER-TEST ANSWERS
  1.
  2.
  3.
  4.
  5.
  6.
  7.
  8.

MY OBSERVATIONS
```

---

## After all tests

- **Look for patterns,** not single opinions. Something two or more testers struggle with is a finding; one tester's taste is a data point.
- **Write a playtest entry in [DEVLOG.md](DEVLOG.md):** what you tested, what you saw, what surprised you, and what changes for Prototype 4 (the interface: the rover's control panel). It becomes the "test" chapter of the case study: idea → prototype → **test** → finished.

---

## Putting it on itch.io

The game is `index.html` plus its songs (`audio/Radio/`) and archive photos (`archive/`), so it uploads as an HTML game in one zip.

1. **Build the zip** with `.claude/build-itch.ps1`. It writes `itch/ass2roid-prototype-3.zip` (about 65 MB) with `index.html` at the top level, the audio and the photos, using forward slashes and UTF-8 file names so names like *Kármán Lines* survive.
2. On itch.io, **upload the zip** to the existing project (or create one with the kind of project set to **HTML**) and mark it to be played in the browser.
3. **Embed size:** the game is about 1,100 × 1,030 pixels at full size and scales itself down to fit any smaller window, so it never scrolls. Set the embed close to that size, or turn on the option to launch the game in fullscreen or a new window.
4. **Add a photosensitivity note** to the page, for example: *"Contains moving colours and patterns, and a brief bright moment in the Drift. No strobing. Respects your system's reduce-motion setting."*
5. **Visibility:** keep the page **restricted** (or a draft) while testing, and share the link only with your testers.
6. **Before sending the link,** open it yourself on a laptop with sound, and play the first minutes: the radio should come on with R.
