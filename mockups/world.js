// The world, shared by the Prototype 4 mockups: the tile lab's rock (the user's settings per layer),
// the overlay plates, and the prospector. Classic script: everything here is global.
const T = 40;
const C = { ink: '#0b0c0e', concrete: '#c9ccc9', steel: '#b4bac0',   /* steel lifted for plates on busy rock (was #969da4) */ fluo: '#00ff73', amber: '#ffb43c', text: '#e1e4e6' };
// ── The rock: the tile lab's engine ──
const STANDARD = { grout: 4, bevel: 1, tileBevel: 1 };   // from Regolith: the standard for every layer
const LAYERS = {
  regolith: { name: 'Regolith Prime', P: {"cells":6,"grout":4,"scale":20,"angle":66,"stretch":4.1,"detail":0.5,"base":115,"contrast":200,"levels":16,"jitter":40,"cool":12,"streaks":0,"veins":0.66,"bands":0,"bandSize":34,"bevel":1,"tileBevel":1} },
  strata:   { name: 'The Shaker Strata', P: {"cells":8,"grout":2,"scale":20,"angle":151,"stretch":1,"detail":0,"base":94,"contrast":160,"levels":16,"jitter":40,"cool":0,"streaks":0.24,"veins":1,"bands":0.38,"bandSize":4,"bevel":1,"tileBevel":1,"dim":0.72} },   /* dimmed to 72%: texture untouched, the plates read */
  chrome:   { name: 'The Chrome Vein', P: {"cells":9,"grout":4,"scale":20,"angle":145,"stretch":8,"detail":1,"base":110,"contrast":200,"levels":16,"jitter":40,"cool":12,"streaks":0.92,"veins":0,"bands":0,"bandSize":30,"bevel":1,"tileBevel":1} },
  crack:    { name: 'The Crack', P: {"cells":20,"grout":4,"scale":20,"angle":91,"stretch":8,"detail":1,"base":32,"contrast":200,"levels":16,"jitter":40,"cool":5,"streaks":1,"veins":1,"bands":0,"bandSize":4,"bevel":1,"tileBevel":1} },
};
for (const k in LAYERS) Object.assign(LAYERS[k].P, STANDARD);
let P, seed = 7;
const vhash = (x, y, k) => { let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(k + seed, 2147483647); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
function vnoise(x, y, k) { const ix = Math.floor(x), iy = Math.floor(y), tx = x - ix, ty = y - iy, sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
  const a = vhash(ix, iy, k), b = vhash(ix + 1, iy, k), c = vhash(ix, iy + 1, k), d = vhash(ix + 1, iy + 1, k); return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy; }
function fbm(x, y, k, oct, gain) { let v = 0, a = 1, n = 0, f = 1; for (let o = 0; o < oct; o++) { v += vnoise(x * f, y * f, k + o * 11) * a; n += a; a *= gain; f *= 2.03; } return v / n; }
function flowXY(wx, wy) { const a = P.angle * Math.PI / 180, c = Math.cos(a), s = Math.sin(a); return [(wx * c + wy * s) / (P.scale * P.stretch), (-wx * s + wy * c) / P.scale]; }
function rockTone(wx, wy) { const [u, v] = flowXY(wx, wy); let t = fbm(u, v, 1, 4, P.detail);
  if (P.bands > 0) { const b = vhash(0, Math.floor(wy / P.bandSize), 9); t = t * (1 - P.bands) + b * P.bands; }
  let tone = P.base + (t - .5) * 2 * P.contrast; const ridge = 1 - Math.abs(fbm(u * 1.7 + 5, v * 1.7, 3, 3, .5) * 2 - 1);
  if (P.streaks > 0 && ridge > 1 - P.streaks * .18) tone -= 34 + P.contrast * .25; const vein = 1 - Math.abs(fbm(u * 3.1 + 17, v * 3.1, 5, 2, .5) * 2 - 1);
  if (P.veins > 0 && vein > 1 - P.veins * .06) tone += 70; return tone; }
const quant = v => { const L = P.levels - 1, hi = 230; const q = Math.round(Math.max(0, Math.min(hi, v)) / hi * L) / L; return q * hi; };
const rgb = v => { v = Math.max(0, Math.min(255, v)) * (P.dim ?? 1); /* dim: the whole tone range, texture untouched */ const k = P.cool; return `rgb(${v - k * .4 | 0},${v | 0},${v + k | 0})`; };
function rock(c, gx, gy) { const x = gx * T, y = gy * T, n = P.cells, cs = T / n, g = P.grout;
  c.fillStyle = '#060708'; c.fillRect(x, y, T, T); c.save(); c.beginPath(); c.rect(x + g / 2, y + g / 2, T - g, T - g); c.clip();
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { const wx = x + (i + .5) * cs, wy = y + (j + .5) * cs;
    c.fillStyle = rgb(quant(rockTone(wx, wy) + (vhash(gx * 97 + i, gy * 89 + j, 4) - .5) * P.jitter)); c.fillRect(x + i * cs, y + j * cs, cs + .05, cs + .05);
    if (cs >= 3) { c.fillStyle = `rgba(255,255,255,${.16 * P.bevel})`; c.fillRect(x + i * cs, y + j * cs, cs, 1); c.fillStyle = `rgba(0,0,0,${.4 * P.bevel})`; c.fillRect(x + i * cs, y + (j + 1) * cs - 1, cs, 1); } }
  c.fillStyle = `rgba(255,255,255,${.12 * P.tileBevel})`; c.fillRect(x, y + g / 2, T, 1.5); c.fillStyle = `rgba(0,0,0,${.5 * P.tileBevel})`; c.fillRect(x, y + T - g / 2 - 2, T, 2); c.restore(); }

// ── Overlays: one plate, the role's colour ──
let SPORE = '#34e6ff';
const hexA = (h, a) => `rgba(${parseInt(h.slice(1, 3), 16)},${parseInt(h.slice(3, 5), 16)},${parseInt(h.slice(5, 7), 16)},${a})`;
// Contrast: a dark gap cut round the plate separates it from the rock; the plate is near-solid ink; the border is bright and 1.5 px.
function plate(c, gx, gy, col, { glow = false, dashed = false, tint = .1 } = {}) { const x = gx * T + 5, y = gy * T + 5, s = T - 10;
  c.fillStyle = hexA('#000000', .7); c.fillRect(x - 2, y - 2, s + 4, s + 4);
  c.fillStyle = hexA(C.ink, .92); c.fillRect(x, y, s, s); c.fillStyle = hexA(col, glow ? .2 : tint); c.fillRect(x, y, s, s);
  c.save(); if (dashed) c.setLineDash([3, 2]); if (glow) { c.shadowColor = col; c.shadowBlur = 6; } c.strokeStyle = hexA(col, .95); c.lineWidth = 1.5; c.strokeRect(x + .75, y + .75, s - 1.5, s - 1.5); c.restore(); }
const label = (c, gx, gy, t, col, glow, size = 17) => { c.save(); c.font = `700 ${size}px "Chakra Petch"`; c.textAlign = 'center'; c.textBaseline = 'middle'; if (glow) { c.shadowColor = col; c.shadowBlur = 8; } c.fillStyle = col; c.fillText(t, gx * T + T / 2, gy * T + T / 2 + 1); c.restore(); };
const diamond = (c, gx, gy, s, col, outline) => { const x = gx * T + T / 2, y = gy * T + T / 2; c.beginPath(); c.moveTo(x, y - s); c.lineTo(x + s, y); c.lineTo(x, y + s); c.lineTo(x - s, y); c.closePath(); if (outline) { c.strokeStyle = col; c.lineWidth = 1.5; c.stroke(); } else { c.fillStyle = col; c.fill(); } };
const hatch = (c, gx, gy, col, step, cross) => { const x = gx * T, y = gy * T; c.save(); c.beginPath(); c.rect(x + 6, y + 6, T - 12, T - 12); c.clip(); c.strokeStyle = col; c.lineWidth = 1.5;
  for (let i = -T; i < T; i += step) { c.beginPath(); c.moveTo(x + i, y + T); c.lineTo(x + i + T * .6, y); c.stroke(); if (cross) { c.beginPath(); c.moveTo(x + i, y); c.lineTo(x + i + T * .6, y + T); c.stroke(); } } c.restore(); };
// Spray paint: a soft overspray under a hard core, round ends, a drip or two.
function spray(c, gx, gy, col, path, drops = []) { const X = gx * T, Y = gy * T; c.save(); c.translate(X, Y); c.lineCap = 'round'; c.lineJoin = 'round';
  c.strokeStyle = hexA(col, .28); c.lineWidth = 4; c.beginPath(); path(c); c.stroke();
  c.strokeStyle = col; c.lineWidth = 1.8; c.beginPath(); path(c); c.stroke();
  c.fillStyle = col; for (const [x, y, r] of drops) { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill(); } c.restore(); }
const FIND = {
  whey: (c, x, y) => { plate(c, x, y, C.concrete); label(c, x, y, 'W', C.concrete); },
  powder: (c, x, y) => { plate(c, x, y, C.concrete); label(c, x, y, 'P', C.concrete); },
  chromeI: (c, x, y) => { plate(c, x, y, C.concrete); label(c, x, y, 'C', C.concrete); },
  sample: (c, x, y) => { plate(c, x, y, C.concrete); diamond(c, x, y, 7, C.concrete); },
  shaker: (c, x, y) => { plate(c, x, y, C.concrete); const X = x * T, Y = y * T; c.fillStyle = C.concrete; c.beginPath(); c.moveTo(X + 18.5, Y + 10); c.lineTo(X + 21.5, Y + 10); c.lineTo(X + 21.5, Y + 14); c.lineTo(X + 24, Y + 17); c.lineTo(X + 24, Y + 31); c.lineTo(X + 16, Y + 31); c.lineTo(X + 16, Y + 17); c.lineTo(X + 18.5, Y + 14); c.closePath(); c.fill(); },
  spores: (c, x, y) => { plate(c, x, y, SPORE, { glow: true }); label(c, x, y, 'S', SPORE, true); },
  band: (c, x, y) => { plate(c, x, y, C.steel, { tint: .06 }); hatch(c, x, y, hexA(C.steel, .75), 6); },
  crust: (c, x, y) => { plate(c, x, y, C.steel); hatch(c, x, y, hexA(C.steel, .55), 8, true); },
  seam: (c, x, y) => { plate(c, x, y, C.steel, { dashed: true }); label(c, x, y, '?', C.steel); },
  seamOpen: (c, x, y) => { plate(c, x, y, C.fluo, { glow: true }); label(c, x, y, '?', C.fluo, true); },
  sealed: (c, x, y) => { plate(c, x, y, C.steel, { dashed: true }); diamond(c, x, y, 10, C.steel, true); diamond(c, x, y, 4.5, C.steel); },
  sealedOpen: (c, x, y) => { plate(c, x, y, C.fluo, { glow: true }); c.save(); c.shadowColor = C.fluo; c.shadowBlur = 8; diamond(c, x, y, 10, C.fluo, true); diamond(c, x, y, 4.5, C.fluo); c.restore(); },
  // A tag: a loopy scrawl, an underline with a flick, a drip and a dot.
  graffiti: (c, x, y) => { plate(c, x, y, C.steel); spray(c, x, y, C.concrete, c => {
      c.moveTo(8.5, 24); c.lineTo(10.5, 14); c.lineTo(13, 23.5); c.lineTo(15.5, 13); c.lineTo(17.5, 22.5);
      c.quadraticCurveTo(19, 16.5, 22.5, 17); c.quadraticCurveTo(26.5, 17.5, 24.5, 21.5); c.quadraticCurveTo(22, 24.5, 20.5, 21.5);
      c.lineTo(27, 11.5); c.quadraticCurveTo(32.5, 10, 29.5, 16);
      c.moveTo(8, 29.5); c.quadraticCurveTo(20, 26.5, 32, 27.5); c.lineTo(29.5, 30.5);
      c.moveTo(13, 23.5); c.lineTo(13, 31); }, [[13, 32, 1.3], [31.5, 22.5, 1.4]]); },
  // The second piece: a star, scrawled, dripping.
  graffiti2: (c, x, y) => { plate(c, x, y, C.steel); const pts = [0, 1, 2, 3, 4, 5].map(k => { const a = (-90 + 144 * k) * Math.PI / 180; return [20 + 10.5 * Math.cos(a), 20 + 10.5 * Math.sin(a)]; });
    spray(c, x, y, C.concrete, c => { c.moveTo(pts[0][0], pts[0][1]); for (let k = 1; k < 6; k++) c.lineTo(pts[k][0], pts[k][1]); c.lineTo(pts[1][0] + 2, pts[1][1] + 1.5);
      c.moveTo(pts[2][0], pts[2][1]); c.lineTo(pts[2][0], pts[2][1] + 4); c.moveTo(pts[3][0], pts[3][1]); c.lineTo(pts[3][0], pts[3][1] + 2.5); }, [[pts[2][0], pts[2][1] + 5, 1.2], [pts[3][0], pts[3][1] + 3.5, 1.1]]); },
  charge: (c, x, y) => { plate(c, x, y, C.concrete); const X = x * T, Y = y * T; c.strokeStyle = C.concrete; c.lineWidth = 1.5; c.strokeRect(X + 13.75, Y + 17.75, 12.5, 12.5); c.beginPath(); c.moveTo(X + 20, Y + 17); c.lineTo(X + 20, Y + 12); c.lineTo(X + 24, Y + 9.5); c.stroke(); c.fillStyle = C.amber; c.fillRect(X + 23, Y + 7.5, 3, 3); },
};

// ── The prospector: five suggestions ──
function cham(c, x, y, w, h, k) { c.moveTo(x + k, y); c.lineTo(x + w - k, y); c.lineTo(x + w, y + k); c.lineTo(x + w, y + h - k); c.lineTo(x + w - k, y + h); c.lineTo(x + k, y + h); c.lineTo(x, y + h - k); c.lineTo(x, y + k); c.closePath(); }
function body(c, shape, fill) { c.beginPath(); shape(c); c.lineJoin = 'miter'; c.strokeStyle = C.ink; c.lineWidth = 3; c.stroke(); c.fillStyle = fill; c.fill(); }
const AVATAR = {
  block: { name: 'The block, outlined', why: 'Chosen. Today’s prospector, cut to the grid: chamfered, an ink outline, a glint on the visor. In The Crack, a headlamp on the brow.',
    draw(c, X, Y, o) { body(c, c => cham(c, X + 8, Y + 6, 24, 30, 4), o.fill); c.fillStyle = C.ink; c.fillRect(X + 13, Y + 12, 14, 6); c.fillStyle = C.steel; c.fillRect(X + 15, Y + 13, 5, 1);
      if (o.dark) {   // in The Crack: a headlamp on the brow. No outline: a halo of light says it glows.
        // On the crown, so the light shows against the dark.
        const lx = X + 20, ly = Y + 5, R = 13, h = c.createRadialGradient(lx, ly, 0, lx, ly, R);
        h.addColorStop(0, 'rgba(255,255,255,.95)'); h.addColorStop(.3, 'rgba(255,255,255,.4)'); h.addColorStop(1, 'rgba(255,255,255,0)');
        c.fillStyle = h; c.fillRect(lx - R, ly - R, R * 2, R * 2); c.save(); c.shadowColor = '#fff'; c.shadowBlur = 6; c.fillStyle = '#fff'; c.fillRect(lx - 2.5, ly - 1.5, 5, 3); c.restore(); } } },
  lamp: { name: 'Helmet and lamp', why: 'A helmet over a narrower suit, a headlamp on the brow. The lamp is the light in The Crack: the dark pool has a source.',
    draw(c, X, Y, o) { body(c, c => { cham(c, X + 11, Y + 19, 18, 17, 3); cham(c, X + 8, Y + 4, 24, 17, 6); }, o.fill); c.fillStyle = C.ink; c.fillRect(X + 12, Y + 11, 16, 6);
      c.save(); c.shadowColor = '#fff'; c.shadowBlur = o.dark ? 12 : 5; c.fillStyle = '#fff'; c.fillRect(X + 18, Y + 5, 4, 3); c.restore(); } },
  suit: { name: 'The suit', why: 'A small figure: helmet, shoulders, arms, boots. Reads as a person at once; busier at 40 px.',
    draw(c, X, Y, o) { body(c, c => { cham(c, X + 12, Y + 3, 16, 14, 5); c.rect(X + 10, Y + 17, 20, 11); c.rect(X + 6.5, Y + 18, 4, 10); c.rect(X + 29.5, Y + 18, 4, 10); c.rect(X + 12, Y + 28, 6, 9); c.rect(X + 22, Y + 28, 6, 9); }, o.fill);
      c.fillStyle = C.ink; c.fillRect(X + 15, Y + 8, 10, 5); c.fillRect(X + 18, Y + 28, 4, 9); } },
  visor: { name: 'The visor', why: 'The same block, the visor grown and chromed. It reflects, like the Näsa slab: the prospector as the Foundation’s product.',
    draw(c, X, Y, o) { body(c, c => cham(c, X + 8, Y + 6, 24, 30, 4), o.fill); const g = c.createLinearGradient(0, Y + 10, 0, Y + 21); [[0, '#f6f7fb'], [.35, '#8d90a0'], [.55, '#e9eaf2'], [1, '#5d606c']].forEach(([s, col]) => g.addColorStop(s, col));
      c.beginPath(); cham(c, X + 11, Y + 10, 18, 11, 3); c.fillStyle = g; c.fill(); c.strokeStyle = C.ink; c.lineWidth = 1.5; c.stroke(); } },
  rig: { name: 'Backpack rig', why: 'Side on: a tank on the back, an antenna, the visor looking where you dig. Has a facing, so it can turn with your moves.',
    draw(c, X, Y, o) { c.strokeStyle = C.ink; c.lineWidth = 3; c.beginPath(); c.moveTo(X + 10, Y + 12); c.lineTo(X + 8, Y + 3); c.stroke(); c.strokeStyle = C.steel; c.lineWidth = 1.2; c.beginPath(); c.moveTo(X + 10, Y + 12); c.lineTo(X + 8, Y + 3); c.stroke();
      c.fillStyle = o.fill; c.fillRect(X + 6.5, Y + 1.5, 3, 3);
      body(c, c => cham(c, X + 5, Y + 11, 9, 19, 2), C.steel); body(c, c => cham(c, X + 12, Y + 7, 20, 29, 4), o.fill); c.fillStyle = C.ink; c.fillRect(X + 21, Y + 13, 11, 6); } },
};
function prospector(c, gx, gy, kind, o = {}) { const X = gx * T, Y = gy * T, s = 1 + (o.str || 0) * .09, fill = o.frenzy ? '#ffffff' : C.concrete;
  c.save(); c.translate(X + T / 2, Y + T - 3); c.scale(s, s); c.translate(-(X + T / 2), -(Y + T - 3)); AVATAR[kind].draw(c, X, Y, { ...o, fill });
  if (o.pick) { const mx = X + T / 2 + (kind === 'rig' ? 2 : 0); c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(mx, Y + 21); c.lineTo(mx, Y + 32); c.moveTo(mx - 7, Y + 23); c.quadraticCurveTo(mx, Y + 18, mx + 7, Y + 23); c.stroke(); }
  c.restore(); }
let YOU = 'block';
const SOLID = {
  air: (c, x, y) => { c.fillStyle = '#08090a'; c.fillRect(x * T, y * T, T, T); },
  you: (c, x, y) => { SOLID.air(c, x, y); prospector(c, x, y, YOU, { dark: P === LAYERS.crack.P }); },
  slab: (c, x, y) => { const g = c.createLinearGradient(0, y * T, 0, y * T + T); [[0, '#f6f7fb'], [.22, '#c9cbd6'], [.48, '#8d90a0'], [.62, '#e9eaf2'], [.8, '#a7aab8'], [1, '#d8d9e3']].forEach(([o, s]) => g.addColorStop(o, s)); c.fillStyle = g; c.fillRect(x * T, y * T, T, T); c.fillStyle = '#0000dd'; c.font = '700 8px "IBM Plex Sans"'; c.fillText('™', x * T + T - 10, y * T + 9); },
};
function tile(c, kind, gx, gy) { if (SOLID[kind]) return SOLID[kind](c, gx, gy); rock(c, gx, gy); if (FIND[kind]) FIND[kind](c, gx, gy); }
