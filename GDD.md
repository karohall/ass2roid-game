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
- **Recovery:** repairs the drill after a Frenzy, at once, and the pickaxe goes back on its hook (1 Regolith Whey + 1 Legacy Powder)
- **Sleep:** ends the shift and saves progress

**Secret menu:** Doppio+ and Candygirl (XXX dropped 2026-11-16). **Secret-menu recipes are hidden in songs (2026-11-13):** each secret Milk+ has its recipe sung in a song on the radio, so players who listen know it and nobody else does. No Frenzy unlock: the ingredients gate it. This is a rule for the whole game: **the radio teaches you things** (see The radio).
- **Candygirl = CC: 1 Crack Spores + 1 Chrome Filings** ("crack 'n' chrome"). The recipe, one Chrome Filings and one Crack Spores, is chanted in the song of the same name: **Candygirl (Asylum Mix)**, acid techno on The Pump Zone (2026-11-14). **Exclusive to the drink (2026-11-15):** the song plays only while Candygirl lasts, never in the Pump Zone's rotation. *Before:* **Hidden (2026-11-14):** the song only plays once you've found Candygirl on the secret menu. Then it turns up on the Pump Zone now and then, 1 time in 5 when the station picks a song, and the radio keeps it between shifts. It's a reward, not the clue. (Before: it played at random from the start, and taught the recipe.)
  - **Hidden:** it isn't on the menu, with no row or placeholder.
  - **Key 0 (built 2026-11-14):** when you hold Crack Spores and Chrome Filings, pressing 0 shakes it (*"Shaking something that is not on the menu…"*), and it goes down as soon as it is ready. Without the ingredients, 0 does nothing: it's a secret.
  - **First time:** a discovery, with confetti: *"Secret menu: Candygirl. C&C: Crack and chrome. For 45 seconds, ↑ runs you up the tunnel."*
  - **What it does: you can run upwards (2026-11-13; built 2026-11-14).** For 45 seconds (2026-11-14; was 15), ↑ takes you up through open tunnel, and you hold on instead of falling; the effects line counts it down. Then gravity takes over again. Up: back for a missed W, a seam, or a sealed find you passed. This is where climbing lives: not everyday movement, but a secret you earn, so going down stays a commitment the rest of the time.
  - **In The Crack: an underground rave (2026-11-15).** Candygirl takes over the radio, so Void FM's night vision stops; instead the dark lifts a little and four saturated lights (pink, green, blue, yellow) drift slowly through the cave over the pastel rock, with the acid techno playing. No strobes: the lights move slowly, fade in and out with the drink, and stand still with "reduce motion".
  - **Safe for photosensitive players (2026-11-14).** Checked against the WCAG flash guideline: the first version stepped every tile every 0.3 s, and two of its colour changes crossed the 10% brightness line. Now the four pastels lie within 7% brightness of each other, so no change counts as a flash; the stripes glide, about one tile a second, instead of stepping; the colour fades in and out over a second; and with the system's "reduce motion" setting the stripes stand still. To do: a photosensitivity note on the itch.io page, and a look at the Drift's single white flash through the wormhole (one flash, within the guideline).
  - **On the menu once found (2026-11-14).** After you have found Candygirl, it joins the bottom of the Milk+ menu: *"[0] Candygirl · 1× Chrome Filings + 1× Crack Spores"*, with a Shake button. No description line: "Not on the menu" felt harsh, and the row was crowding the dosage meter (2026-11-15). Before that it shows nowhere: a reward for finding it, and a reminder of how.
  - **It plays its song, and the rock goes acid (2026-11-14).** Like the broken drill and Testarocca: drinking Candygirl cuts the radio to *Candygirl (Asylum Mix)*, from the top, on any station, for as long as the drink lasts; then your station comes back. Meanwhile the rock turns pastel pink, green, blue and yellow, in diagonal stripes that move with the beat. Samples, ingredients, shakers, sealed finds and graffiti keep their own colours, so they can still be found.
  - **Can't be made early:** Crack Spores only exist in The Crack.
- **Doppio+** (renamed from Jizz+ on 2026-11-16: too vulgar. Italian for a double, beside *Dolce de Leche+* on Disco Gravitas.) **Clues like Candygirl's (2026-11-16):** two graffiti in the Shaker Strata, in Italian, from the user's line *“Duo di Whey, una di powder”*: *“DUO DI WHEY…”* and *“…UNA DI POWDER.”* (the card translates); a redacted Secret menu card that fills in a word per clue; the rumour gives the key (*ask for 9*).
- **Doppio+ (built 2026-11-15; its song, *Latte acidico, doppio+*, plays while it lasts since 2026-11-18).** Key **9**. Recipe **2 Regolith Whey + 1 Legacy Powder**, from the Shaker Strata down. For 45 seconds every shake makes two bottles, and you pay for both (if you can only pay for one, you get one). Until the song can teach the recipe, a rumour does, on Disco Gravitas only, from the Shaker Strata, when you hold the makings: *"Rumour: the bartender at the Milk+ bar pours doubles. Two whey and a powder, and ask for 9."* Found: *"Secret menu: Doppio+. Two whey and a powder, poured by the bartender."* It then joins the Milk+ menu as [9] and gets a Secret menu card. When the song is unlocked, set CONFIG.jizz.song and the drink plays it, like Candygirl. **The original idea (2026-11-14):** Disco Gravitas, sung by a saucy bartender or barista. **It lets you shake two bottles at the same time.** Proposed: for a while, one shake makes two bottles of the Milk+ you choose; you pay the ingredients for both, but shake only once. It saves time, and two bottles at hand tempt you to drink them in quick succession: the dose window does the rest. **Recipe (proposed): W + W + P**, two Regolith Whey and one Legacy Powder: the milkiest thing on the menu, and the first three-ingredient recipe. It works from layer 2, so it lasts three layers (a two-ingredient recipe would have needed The Crack, too close to the end). Unless the song decides otherwise.
  - **The rumour, the same way as Candygirl's (2026-11-16).** It used to need Disco Gravitas playing *and* the ingredients in hand at the same moment; a 14-minute run never saw it. Now, like Candygirl: once, the first time you hold 2 Whey and 1 Powder (from the Shaker Strata on, so the opening stays one thing at a time), on any station; and once more in the last layer, louder, with the whole recipe, if you still have not had it. Its line, *Doubles, darling*, stays.
- **XXX: dropped (2026-11-16; parked 2026-11-15).** A lot of new content for quite a small addition. The redactions stay, for good: the Belt Authority benefits from being CIA, and nothing in the game uncovers them. What follows is the old idea, kept as history only.
- **XXX (2026-11-14): the uncensored version.** Void FM, the station of consciousness. **Recipe: S + S**, two Crack Spores: pure Crack, so only at the bottom. For a while:
  - **Proposed (2026-11-15): XXX as Chrome + Chrome, with blasting instead of X-ray.** Blasting feels more fun than seeing through rock: under XXX, every dig blasts the rock around you, like a charge you don't pay for. The uncensoring stays. Would free S + S. To decide.
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
    - ~~Striped sweatband~~ (withdrawn 2026-11-14; as a withdrawn number, XXX can reveal what it was).
    - Moon boot: *Size undisclosed… The Foundation considers the matter closed.*
    - The Crack's layer card: *…home of the Jacked Asses. The Foundation has not met them. Yet.*
    - The Shaker Strata's layer card: *…The Foundation has stopped asking.*
    - Regolith Whey card: *it was milk once, according to the label.*
    - The first drink: *The Foundation does not endorse them. The Foundation has noted their usefulness.*
    - The footer on every artefact card: *Recovered under conditions the Kroeber Foundation does not endorse.* Under XXX: what the conditions were.
  - **Places to add redactions,** so XXX has more to reveal: the six pending archive cards (the inspection record and the signet ring suit it best), a blacked-out line now and then in the Belt Authority Public Service log, and Näsa's fine print (*"Terms: █████"*).
- **The secret menu is found in pieces (2026-11-14).** Things you find hint at it:
  - **Graffiti:** a few scratches in the rock, both in the Chrome Vein (2026-11-15; CRACK was in The Crack, too late to use Candygirl), near the middle of the layer, where Crack Spores first turn up. The tile shows only the scratches (no tiny writing); you read it by digging it out, and the words come up in the hint bar: *"Scratched into the rock: '…AND CHROME.' The rest is scraped away."* / *"'CRACK AND…' The rest runs under the Näsa chrome."* Coming within 4 tiles: *"Scratches in the rock nearby. Someone left a message. Dig it out to read it."*
  - **The rumour:** the first time you hold both a Chrome Filings and a Crack Spores, the Belt Authority log passes on *"Rumour: the Milk+ bar serves one drink that isn't on the menu. You order it with 0."* It gives the key, not the recipe; the recipe is in the rock. **And once more in The Crack (2026-11-15),** if you still haven't had Candygirl, the whole recipe this time, and the card fills in: *"Rumour, louder down here: one Crack Spores and one Chrome Filings, shaken with 0. You have both."*
  - **A redacted card** in the Field Guide, *Secret menu*, appears with the first graffiti you dig out (no empty ? slot before that): *"█████ and ██████, shaken with █."* Each piece you find fills in a word, until it reads *"Crack and chrome, shaken with 0."* Drinking Candygirl, even by chance, completes it and names it.
  - Later recipes can work the same way: Doppio+ and XXX get their own redacted cards and their own clues. Tried and dropped first: a *"[0] Secret menu"* line in the Milk+ menu.
- **The recipe slots:** four ingredients give ten two-ingredient recipes. Taken: WW Strength, PP Calm, WC Stamina, PS Hyperfocus, PC Recovery, CS Candygirl. Free: CC, SS, WS and WP (SS was XXX, dropped 2026-11-16). **Recovery moved from WP to PC (2026-11-14):** Chrome Filings, metal to mend the drill, and no Whey, which three everyday drinks already wanted. It also uses up the Legacy Powder that piles up in the Shaker Strata. Chrome is only found from the Shaker Strata down; before that, the hint says Recovery needs *"something metal, from deeper down"*. So the drill wears half as fast in Regolith Prime: about five Frenzies' digging to break it, instead of two or three. Doppio+ takes three (WWP).

## Frenzy and Stillness (push your luck)
- **Rule:** *Double check any possible interactions.* The Foundation measures how fast, not just how much.
- **The balance meter** runs from −100 (Stillness) through 0 (balanced) to +100 (Frenzy), and drifts slowly back toward 0.
- **Every Milk+ has a direction and a weight:** Strength +30, Calm −30, Stamina and Hyperfocus +10 each, Recovery 0.
- **The dose window does the damage.** Each drink's push is multiplied by the number of drinks in the last 20 seconds: ×1, ×1.5, ×2, ×3. Drinking slowly is safe; several in quick succession tips you over. The window is shown on the meter ("next drink ×1.5"), so players learn the rule by watching it.
- **Reaching the edge tips you into a state:** Frenzy at the top, Stillness at the bottom. In Regolith Prime the edge is ±80: two quick drinks reach *Hell yeah*, and a third (or a nudge from another Milk+) tips you over. The Shaker Strata needs ±100; the Chrome Vein ±90, so two quick Strengths and a Stamina tip you over (its rock is the toughest, and Artefact 2 is only found there).
- **The meter** uses the guide's dosage scale across both sides: *Get out of our sight → Coward → Meh → We see you → Hell yeah* (Stillness → balanced → Frenzy). Calling Calm "Coward" is the Tourist Guide's tone, and hides that Stillness is a reward too.
- **In Frenzy:** the screen tilts, the drill digs sideways, digging power doubles, and the drill rattles so hard that drill samples shake loose (the hint says so, and the hint bar flashes with every one lost). **Frenzy wears the drill**, about 4% for every second you keep digging, so a full Frenzy of mashing costs about 40%. The drill digs at full speed until it **breaks** at 0%; then the prospector switches to the **pickaxe**, which always works but is twice as slow. Strength still counts on the pickaxe. **Recovery** repairs the drill.
- **You can't lose.** The game has a **soft failure** instead: you can mess up (a broken drill, lost samples), but the run is never lost: the pickaxe always works. **A broken drill takes the radio with it (2026-11-14):** only the rover's tape, Testarocca, still plays, on its own battery, so you never dig in silence. Recovery brings the radio back. The stakes are in what you find, and in how well you dig.
- **States end with the layer.** Breaking through a crust gives a clean slate: Frenzy or Stillness ends and the scale is back to balanced. Milk+ already in your system keeps counting down.
- **In Stillness:** everything slows, colours drain to violet and grey, and the drill goes exactly where you point it. **The mirror of Frenzy:** Frenzy rattles drill samples loose; in Stillness the drill is so precise that every drill sample and ingredient comes out whole, **twice over**. Frenzy to go deep, Stillness to come out rich. (Prototype 3.) Because everything is twice as slow, Stillness lasts longer than a Frenzy: 20 seconds against 12.
- **Drift (Stillness overload):** drink a Calm *while in Stillness* and you go past it: the shaft lets go, and the prospector drifts out into the vast nothingness of space while The You Show plays (Space oddities). No controls, nothing to do, just watch. It is an ending of its own: *"CONTACT LOST. You let go of the Rock and drifted out into the vast nothingness of space. It was very quiet. It was not unpleasant."* Never by accident: a Calm from a fossil shaker doesn't trigger it, and the Stillness hint warns: *"One more Calm, and you will drift."* Mood: sublime, existential, calm; a soft death.
  - **A signposted secret (2026-11-18):** never missed, still a surprise. As the first Stillness of a shift lifts, a rumour: *"Past Stillness there is somewhere else. A Calm, drunk while everything is still, and the shaft lets go."* The Field Guide's **States** row (Frenzy, Stillness, The Drift, Candygirl) shows each state as **?** with a hint until reached (the Drift's hint: *Past Stillness, there is somewhere else*; Candygirl's also tells that shaken in The Crack it lights up the dark), then as a card. The row starts empty every game (2026-11-18). The sunrise starts at 2:30 in Stella's Show, the glitter at 1:40.
- **The reward:** each state opens a seam beside you that only answers to that state: **frenzy artefacts** and **Stillness artefacts**, logged as *"Recovered under conditions the Kroeber Foundation does not endorse."*

## The layers
1. **Regolith Prime:** surface dust. *Its own thing:* the learning layer. The game opens with the first shake.
2. **The Shaker Strata:** fossilised protein shakers. *Its own thing:* **fossil shakers** in the rock. Break one and you drink it on the spot, contents unknown: a little gamble with the balance meter. **They lean Strength (2026-11-14):** half of them are Strength, the rest Calm and Recovery (15% each), Stamina and Hyperfocus (10% each). The layer is short on Whey (half of Regolith Prime's) just as its crust starts asking for stacked Strength; the shakers make up for it.
3. **The Chrome Vein:** metallic, and coveted by Näsa. *Its own thing:* **Näsa chrome slabs™** that can't be dug. Each has a gap to find, so the way down becomes a route, not a straight line. Hitting one brings a Näsa pop-up in Y2K chrome.
4. **The Crack:** bioluminescent. (The Jacked Asses were dropped on 2026-11-15: another storyline. The layer card now says *the Belt Authority has closed it twice. It keeps opening.*) *Its own thing (built in Prototype 3):* **darkness.** You only see about three tiles around the prospector, and the Crack Spores glow green through the dark. The toughest rock; the crust needs digging power 7. **Void FM gives night vision here:** while it plays, the light reaches about twice as far (only when you choose Void FM: Stillness no longer switches to it).
5. **The Core:** redacted by the Belt Authority. Not a layer: breaking through The Crack's crust is the arrival, and the ending.

Each layer needs more strength, yields new ingredients, has its own Kroeber Fact, and **plays differently**: one thing of its own, so deeper isn't just slower and harder.

## Ingredients (fictional)
Korova minerals in the menu's format (Nutrition Facts, Caution, Fun fact). One signature compound per layer:

1. Regolith Prime: **Regolith Whey**
2. The Shaker Strata: **Legacy Powder**
3. The Chrome Vein: **Chrome Filings**
4. The Crack: **Crack Spores**
5. The Core: **[REDACTED COMPOUND]**. Decided (2026-11-14): *Solanum tuberosum*, the potato. It stays [REDACTED COMPOUND] in the game: with XXX dropped (2026-11-16), nothing reveals it. The potato is the designer's secret.

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
- **Seams give way to sealed finds (2026-11-14).** Tipping within 6 tiles of a sealed find of the same state opens no seam: the sealed find is what you came for, and a seam lighting up beside you pulled me away from it until the Stillness ran out. The seam's artefact waits for the next time you tip somewhere else. Seams are the state's gift; sealed finds use the state as a key.
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
| 6 | Hand stencils | Sealed, D, Stillness (seen first with night vision) | Built; card written 2026-11-14 |
| 7 | _Withdrawn_ (was the striped sweatband, 2026-11-14) | | Gap |
| 8 | Bottle of jungle juice | Sealed, D, Frenzy | Built |
| 9 | Moon boot | Stillness seam, any layer | Built |
| 10 | _Withdrawn_ (was the straw) | | Gap |
| 11 | _Withdrawn_ | | Gap |
| 12 | Inspection record | Sealed, A, Stillness | Built; card written 2026-11-14 (redacted: reason, inspector, additional findings) |
| 13 | Rubber duck | Sealed, B, Frenzy | Built; card written 2026-11-14 |
| 14 | Parmesan | Sealed, B, Stillness | Built; card written 2026-11-14 (the bartender at the Milk+ bar: plants Doppio+'s bartender) |
| 15 | _Withdrawn_ | | Gap |
| 16 | Signet ring (the villain item) | Sealed, C, Frenzy | Built; card written 2026-11-14 (redacted: the initials, the person behind Näsa) |
| 17 | Polaroid (it has "roid" in it) | Sealed, D, Frenzy | Built; card written 2026-11-14 |
| 18 | _Withdrawn_ | | Gap |
| E | The Core: redacted | Reaching the Core | Built |

**Every find has a photo (2026-11-14).** A thumbnail beside the card text; a click shows it large (Esc or a click closes). The photos are WebP, 1024 × 768, about 120–420 KB each, with a museum ruler (2026-11-14, from Canva); the game uses copies in `archive/<number>-<id>.webp`, the originals are in `images/Archive images/`. Same framing for all: the object centred on a plain grey background. The inspection record shows its redacted copy (`12a-record-redacted`); the uncovered one (`12-record`) is for XXX. The striped sweatband has no photo for now.

**All archive cards are written (2026-11-14).** Stillness finds (6, 12, 14) are quieter and stranger, found in a slow, cold state; Frenzy finds (13, 16, 17) a little wilder, found while the screen tilts. The redactions (No. 12's reason, inspector and additional findings; No. 16's initials) stay blacked out until XXX; the hidden texts are the user's to write.

**Real-world background** (not in the game; where the cards come from):
- **Hand stencils:** real cave art was made the same way, pigment blown around a hand pressed to the rock (Cueva de las Manos in Argentina, the caves of Sulawesi). Some rock art shows six-fingered or six-toed prints.
- **Rubber duck:** the Friendly Floatees, about 29,000 bath toys lost from a container ship in the North Pacific in 1992. Oceanographers tracked where they washed up to study ocean currents.
- **Parmesan:** an Italian bank, Credito Emiliano, accepts wheels of Parmigiano Reggiano as collateral for loans, and ages them in its own warehouses.
- **Polaroid:** shaking an instant photo doesn't help it develop; Polaroid itself has advised against it.

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
| 1. Dolph's shaker | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/01-art1.webp, added 2026-11-14 |
| 2. Chrome dumbbell | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/02-art2.webp, added 2026-11-14 |
| 3. Molten chrome™ | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/03-chrome1.webp, added 2026-11-14 |
| 4. Glass of Milk+ | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/04-still1.webp, added 2026-11-14 |
| 5. VHS cassette | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/05-vhs.webp, added 2026-11-14 |
| 6. Hand stencils | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/06-stencils.webp, added 2026-11-14 |
| 8. Bottle of jungle juice | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/08-juice.webp, added 2026-11-14 |
| 9. Moon boot | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/09-boot.webp, added 2026-11-14 |
| 12. Inspection record | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/12-record.webp, archive/12a-record-redacted.webp, added 2026-11-14 |
| 13. Rubber duck | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/13-duck.webp, added 2026-11-14 |
| 14. Parmesan | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/14-parmesan.webp, added 2026-11-14 |
| 16. Signet ring | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/16-villain.webp, added 2026-11-14 |
| 17. Polaroid | FLUX.2 Pro on Leonardo.ai (AI-generated); ruler and label added in Canva | [Leonardo.ai: commercial usage](https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage), [terms](https://leonardo.ai/terms), read 2026-11-14 | Yes (Leonardo allows commercial use on the free plan). **Free plan:** Leonardo owns the images, and they are public on Leonardo | archive/17-polaroid.webp, added 2026-11-14 |

The photos are in the repository (`archive/`), unlike the audio. **Platform: Leonardo.ai (2026-11-14).** Leonardo's help pages say images may be used commercially on every plan; on a paid plan you own them, on the free plan Leonardo owns them and they are public. **Made on the free plan (2026-11-14).** So: commercial use is allowed, but Leonardo owns the images, they are public on Leonardo, and Leonardo may use them (including for training). For a commercial release, consider regenerating them on a paid plan (then they are yours and private), or keep them as they are, knowing anyone could reuse them.

## The rover
Used as a **crater picker** between digging sites: a drawn map of Korova Rock, a short animation, and you arrive. No driving.

## The radio
- **The Pump Zone** (body: 80s metal and gym, DJ Coach Rocky, with a German accent, on air since 2026-11-14: he talks between songs, greets the shift, cheers the Frenzy, knows when you've been on Void FM, and once in a while lets slip that a song isn't on the menu): digging goes slightly faster
- **Disco Gravitas** (heart: Italo and space disco): you shake to the beat, so mixing a Milk+ takes a third less time (its perk since 2026-11-17); it also calms the balance meter a little. DJ **Rocky Giovanni** (Italian, warm, *amore*), on air since 2026-11-17: he says buonasera when you tune in, talks over the ends of songs, now and then hints at Doppio+, speaks for Stillness on his own station (instead of the Broadcaster), notices a second Strength, a Näsa ad and melted chrome, and knows when you have been on Void FM
- **Void FM** (consciousness: futurepop at the edge of emptiness): a mood, not a tactic. Except in the dark: in The Crack it gives night vision. The Broadcaster, on air since 2026-11-14, welcomes you to the never-ending show, tells you facts about the dark between songs, and calms Stillness: space is not scary, it is restful
- **Näsa – Big Space™:** commercial breaks that cut into whatever is playing
- **The Drift** (renamed from Space oddities, 2026-11-18): not a station; a folder of songs for special occasions, such as Stella's Show on Stillness overload (since 2026-11-18; The You Show before)

**Rule: the radio teaches you things (2026-11-14).** The radio is not only a soundtrack and a set of station effects: it carries knowledge. Secret-menu recipes are hidden in songs (Candygirl's is chanted in Candygirl (Asylum Mix)), and the DJs' slogans and lines can carry more. Listening is a way to play.

Details, music prompts and licence log: [RADIO.md](RADIO.md).

Music: original, or AI-generated or royalty-free under licences that allow it. No real tracks. DJ voices were made with ElevenLabs; **off since 2026-11-17** (they read as cringe). The clips and code stay (CONFIG.radio.voices), and the audio effects (Stillness muffled and slow, Frenzy fast and driven) carry the mood on their own.

## Visual direction
**As built in Prototype 4 (2026-11-15 to 11-17; mockups in [mockups/](mockups/index.html)).** The plan before it (comic ink, Y2K chrome for Näsa, bioluminescence, a drawn rover panel, the year-one identity) led here; Näsa's chrome and the rover's control panel survived as planned.
- **Gunmetal:** neutral cold steel, one concrete surface (the hint bar), one glow colour for *act now* (bioluminescent blue #34e6ff), amber for warnings and for the guide, cool pastels for the secret menu (Candygirl pink, Doppio+ blue; Candygirl's rock a slowly gliding pastel mosaic in the system's own colours: candy pink, lilac, Doppio+ blue, ice, mint). The user likes cool tones.
- **Type:** Chakra Petch for titles and numbers, Inter for text, IBM Plex Sans for small print. No text under 11 px; the itch.io frame is 1280 × 960.
- **The world:** the user's tile-lab rock, one material per layer, every find on a plate in its role's colour, the prospector as a block with a headlamp in The Crack.
- **The deck:** one polished gunmetal housing with screws and seams, wider than tall like the frame. The mining window has a column of its own for the full height and grows to fill it; the Milk+ menu and the instrument cluster in the middle; the rover panel, Field Guide and Belt Authority log on the right; the radio a long glass strip under both. Panels are bays with steel edges and engraved name plates with a lamp; panels still to come are faint ghost frames.
- **Instruments:** the rover panel as counters behind glass, digging power as pips, the drill as a segmented bar, indicator lamps (Radio, Drill, Focus, Charge); the shake keys as cockpit push-buttons (SHAKE above DRINK); the dosage meter as a cluster: the word top-left, a dial with the five milestones, and one small gauge, Next drink, in the corner under the step. Less is more here: denser clusters read as crowded.
- **The guide:** an amber pulse walks a new player's eye through the first steps, one at a time (hint bar, radio, the first Strength, the first dig); Begin shift glows amber.
- **Näsa:** Y2K chrome, the one rounded thing, barging in at the top edge.
- **The Drift (2026-11-17, from the user's moodboards; no hard edges, everything blending; then darker and more muted, fewer layers: watercolour and celestial glow but not naive, the avatar easy to follow, the sense of actual vastness is what makes it lovely):** the night itself one painted navy-teal wash (mottled, backruns, salt blooms, spatter stars of every size, a few soft flares); planets wet-in-wet with feathered edges and halos; soft painted galaxies; near veils drifting over everything for depth; the sunrise a dawn wash of blended strata with a pure glow. Earlier in the day: sheer washes layer on layer with dried rims, blooms and granulation for the nebulae; bodies at every depth (far dots to a great cratered moon rising at the bottom edge; tilted, ringed, banded, cratered; far ones hazy and nearly still, near ones moving more as you steer); a painted comet, falling stars and a meteor shower; an aurora; a star cluster; a little mint flying saucer; a nebula exploding in the bridge; shimmer and grain. The wormhole painted too, impressionist dabs on receding rings, the prospector falling backwards into it; the sunrise pure glow with a fine lens flare.
- **Wordmark:** ASS2ROID with the 2 as ink on a concrete block, Ex Profundo underneath; logo files in .

## Ending
**Two ways out.** Drift (Stillness overload) is itself an ending, and can end the game early; in the prototype it is a grey-box placeholder of the space sequence (see *Ideas for later*). Otherwise:

You reach the core: *"THE CORE. You are now further down than anyone asked you to be. What you found here is redacted by the Belt Authority."* The end screen shows the challenge coin, drawn in the game's ink: *EX PROFUNDO, NOVA* around the top, *1 A$* in the middle with the depth reached, *KOROVA ROCK* along the bottom. "Save the coin" downloads it as an image to share. (Built in Prototype 3.)

## Lore
**Never explained, only overheard (decided 2026-11-17).** There is no briefing, no codex, no narrator. The story of Korova Rock comes in pieces from four voices, each with its own channel and its own bias, and the player puts it together, or doesn't. Chaotic, and on brand.
- **The Kroeber Foundation** (the Field Guide and the archive cards): dry, museum-like, confused, never endorsing anything.
- **The Belt Authority** (its Public Service log): official, curt, redacted. It benefits from being CIA; the black bars stay for good.
- **The radio** (Coach Rocky, Rocky Giovanni, the Broadcaster, Näsa's ads): loud, commercial, sincere about the wrong things. The radio teaches you things.
- **Whoever was here before** (graffiti and rumours): the secret menu, in pieces, in the rock and at the bar.

**Rule for new copy:** say it in one of the four voices, never in the game's own. If a fact needs a fifth voice, it probably doesn't belong in the game.

## Microcopy
- Easter egg, once per run at 69 m: *"69 m. Nice. The Foundation does not endorse this observation."*
- Loading screen: *"1. Check engine light. 2. Ignore that it is on. 3. See Step 1."*
- First Milk+: *"Do not spill. Make us proud."*

## Ideas for later
- **High scores (parking lot).** Personal bests saved in the browser (fastest shift, most drill samples, most Field Guide cards, most Frenzies, most Stillnesses, with a NEW mark), or a shared leaderboard, which would need a server. For now the end screen keeps a personal summary only.
- **Blowing up Näsa's chrome (built in Prototype 3).** In a Frenzy, with Strength stacked (two drinks), each hit on a Näsa slab heats it: it glows amber, and after six or seven hits it melts, a new way down. A hit heats it at most once every half second (2026-11-14), so holding ↓ can't rush it: you watch it glow, and keep going or stop. It only cools once you stop hitting it, and the Frenzy doesn't rock you off a slab you're melting (both 2026-11-14: melting had become very hard). Holding ↓, it melts in about 3.5 seconds, 4 times in 10 without a blast. From the third heat on, each has a one-in-five chance to blow up instead (kept: the blast has its payoff, the radio dies and Testarocca kicks in): the drill breaks and the prospector is thrown up to three rows back up the shaft; the slab cools. Out of Frenzy, with one Strength, or on the pickaxe, the chrome won't take heat, and the game says so. The hint over a slab gives the recipe as a prohibition: *"Näsa™ property. Do not attempt to mine when in a Frenzy. It might melt."* Näsa pop-up on both: *"Näsa™ property damaged. An invoice has been issued."* Field Guide find, the first time: Artefact 3, a lump of molten chrome™, still warm.
- **Climbing upwards (parked; it returns as Candygirl, see the secret menu).** ↑ climbs one tile, only with solid rock beside you to grip, and slower than moving sideways. It would let you go back for a missed W or seam and make getting stuck at a crust unlikely; the cost is that going down stops being a commitment, which is part of the digging feel. Behind a setting, if tried.
- **Done in Prototype 3: the start button stands out** with the check engine light: the dashboard's engine symbol in amber after its label, slowly breathing. It pays off the start screen's joke ("1. Check engine light. 2. Ignore that it is on.").
- **Archive photos for artefacts.** Field Guide artefact cards get realistic museum-archive photos: neutral grey backdrop, flat lighting, scale bar, accession number, catalogue label. Photos appear only in the Field Guide; the rest of the game stays comic ink, so the archive reads as "real" against the drawn world.
  - **How real finds are catalogued** (archaeometry conference, 2026-10-30): a **capital letter** and a **number sequence** for the catalogue number, a **measuring tool or scale** in the picture, an **image of the object**, and possibly a **close-up**. Each artefact card follows that: catalogue number, photo with scale, and a close-up where there is a detail worth seeing.
  - **Catalogue number (decided 2026-11-12):** the letter is the layer (A Regolith Prime, B Shaker Strata, C Chrome Vein, D The Crack), then the number in sequence, e.g. *KR-1 C 0002* for the chrome dumbbell.
- **Field Guide artefact: the VHS cassette.**
  > *Artefact, Site KR-1, Crater 7, Quadrant 2.*
  > VHS cassette, handwritten label: "VICE 2–6. DO NOT TAPE OVER." Recovered from the Shaker Strata, rewound.
  > The series in question ran for five seasons. The Foundation has viewed season six, it was never released on Terra. The Foundation has no further comment.
- **Level overview:** design it so it logically illustrates the progression from beginner at the surface to the deepest depths.
- ~~**A sleeker default interface, with an optional overlay** for the numbers~~ Done differently in Prototype 4 (2026-11-16): the dosage meter is a car cluster, and its **Next drink** gauge shows the dose window (×1.5, ×2, ×3 and its seconds), so no overlay. Less on the meter, not more: the dial has no scale words, the word under it says where you are.
- **The radio reacts to the balance meter (built in Prototype 3, with real sound):**
  - **The state changes the sound, not the station (2026-11-14).** The station switch overrode your choice; with DJs and personalities on each station, it felt like being interrupted. Now you keep your station, and the room changes around it:
  - In **Stillness**, the music goes muffled and slower, lower like a slowed tape, as if heard through rock. As it lifts, the sound returns slowly. The Broadcaster comes through on any station: *"Space is not scary, it is restful."* (The You Show is saved for the Drift.)
  - In **Frenzy**, the music speeds up, thinner and a little distorted. Coach Rocky breaks in on any station: *"Frenzy is not a problem."*
  - The radio panel says so: *"The Frenzy speeds the signal up."* / *"Stillness: the signal sounds far away, as if through rock."*
  - *Before (Prototype 3, until 2026-11-14):* Stillness switched to Void FM, and a Frenzy cut hard to the Pump Zone.
- **Blasting charges, paid in drill samples (built 2026-11-15).** Digging gets slow in the deep layers, and drill samples piled up with nothing to spend them on. **B** sets a Belt Authority blasting charge under you: 15 drill samples, a 1.5 s fuse with a sparking fuse, then the 3×3 around it goes, and whatever was in it is collected. In a Frenzy the blast is 5×5, and it rattles the drill (−15%). Näsa chrome is blast-rated (it only melts; *"Näsa™ chrome is blast-rated. An invoice has been issued anyway."*). Seams, sealed finds and graffiti are left for you. The crust cracks but holds, so its digging power still counts. One charge at a time. Taught by a rumour once you are in the Shaker Strata with 30 samples: *"Rumour: the Belt Authority sells blasting charges. 15 drill samples each. Press B. Blasting permit: pending."* The Rover panel then shows *B: blast the rock below · 15 drill samples*. **Taught better (2026-11-15):** the rumour went over my head, so it is now news (confetti): *"New: blasting charges… Press B to set one under you; it clears the rock around it."* And the hint bar offers it where it helps, until the first charge: *"Slow going? Press B to set a blasting charge under you…"*, and at a hard band: *"…Or blast it: press B."*
- **Tool upgrades, paid in A$ coins** (parked; the drill samples stay in the game until then):
  - **Version 1:** buying a stronger drill bit isn't optional. Its effect depends on how many A$$ coins the player got for the drill samples they collected.
  - **Version 2, a later stage:** a shop where the player chooses what to upgrade, e.g. depth or accuracy.
- **Stillness overload as a space sequence, and an ending** (built 2026-11-14: the full sequence over The You Show, shot by shot, see RADIO.md; since 2026-11-18 over Stella's Show, 3:13, retimed to its shape): the player drifts off the mining shaft and out into deep space, doing slow somersaults for the duration of The You Show (about 4 minutes). The point is to just watch: no controls, no task, a reward for buying in. Storyboard, shot by shot against the song: RADIO.md, "Stillness overload sequence". It is itself an ending: it can end the game early, before the core.
  - **The sky grows (2026-11-14).** After the shaft falls away, the night sky spreads past the mining window into the space the Milk+ column and the dosage meter leave as they melt away. The Field Guide stays: the Drift turned out to be an excellent moment to read the archive cards. The radio stays too.
  - **You can steer, a little (2026-11-14).** After the wormhole, the arrow keys give small pushes: you keep drifting, slowly easing off, and never leave the sky. Holding a key never flings you. The way-out line says so: *"Arrows: drift · Esc: end the drift."* (It was "no controls"; now almost none.)
  - **The prospector stays longer (2026-11-14).** The dissolve into cosmic dust runs from the chorus to the outro (it was verse 2 to the bridge, too quick).
  - **One sun, rising from below (2026-11-14).** The outro had a glow below and a second sun in the middle; now one sun rises from below the frame, its rays turning.

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
