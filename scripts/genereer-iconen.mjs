#!/usr/bin/env node
/**
 * genereer-iconen.mjs — SnelLees Trainer app-iconen
 *
 * Genereert alle PWA-iconen als PNG, zonder dependencies:
 * de PNG-encoding gebeurt met Node's ingebouwde zlib (deflate + CRC32).
 *
 * Ontwerp: afgeronde rechthoek in het app-paars (#7c6ff7 → #6a5ce0 verloop)
 * met een gestileerd wit open boek + twee "snelheidsstrepen".
 *
 * Gebruik:  node scripts/genereer-iconen.mjs
 * Output:   icons/icon-192.png, icon-512.png, icon-maskable-512.png,
 *           apple-touch-icon.png (180), favicon-32.png
 */

import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const UIT = join(ROOT, 'icons');
mkdirSync(UIT, { recursive: true });

// ── PNG-ENCODER ──────────────────────────────────────────────
const CRC_TABEL = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABEL[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** rgba: Uint8Array van breedte*hoogte*4 */
function maakPng(breedte, hoogte, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(breedte, 0);
  ihdr.writeUInt32BE(hoogte, 4);
  ihdr[8] = 8;   // bitdiepte
  ihdr[9] = 6;   // kleurtype RGBA
  // 10-12: compressie/filter/interlace = 0

  // Scanlines met filterbyte 0
  const rij = breedte * 4;
  const raw = Buffer.alloc((rij + 1) * hoogte);
  for (let y = 0; y < hoogte; y++) {
    raw[y * (rij + 1)] = 0;
    rgba.subarray(y * rij, (y + 1) * rij).forEach((v, i) => { raw[y * (rij + 1) + 1 + i] = v; });
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ── TEKENEN (per-pixel shapetests in 512-ontwerpruimte) ─────
// Kleuren
const PAARS_BOVEN = [0x8b, 0x7f, 0xf8];
const PAARS_ONDER = [0x66, 0x58, 0xdd];
const WIT = [0xff, 0xff, 0xff];

function inAfgerondeRect(x, y, r) {
  // 512×512 met hoekradius r
  const b = 512;
  if (x < 0 || y < 0 || x >= b || y >= b) return false;
  const cx = Math.min(Math.max(x, r), b - r);
  const cy = Math.min(Math.max(y, r), b - r);
  return (x - cx) ** 2 + (y - cy) ** 2 <= r * r;
}

/** Convexe vierhoek: punten met de klok mee */
function inQuad(x, y, p) {
  for (let i = 0; i < 4; i++) {
    const [ax, ay] = p[i], [bx, by] = p[(i + 1) % 4];
    if ((bx - ax) * (y - ay) - (by - ay) * (x - ax) < 0) return false;
  }
  return true;
}

function inBalk(x, y, bx, by, bw, bh) {
  // Rechthoek met volledig ronde uiteinden (capsule)
  const r = bh / 2;
  const cx = Math.min(Math.max(x, bx + r), bx + bw - r);
  return (x - cx) ** 2 + (y - (by + r)) ** 2 <= r * r;
}

// Open boek: linker- en rechterpagina (V-vorm), spleet als rug
const LINKS  = [[84, 176], [246, 214], [246, 388], [84, 350]];
const RECHTS = [[266, 214], [428, 176], [428, 350], [266, 388]];
// Snelheidsstrepen boven het boek
const STREPEN = [
  [150, 104, 212, 26],
  [206, 148, 156, 22],
];

/**
 * Kleur van ontwerppunt (x,y) in 512-ruimte.
 * maskable: volle achtergrond (geen ronde hoeken), tekening op 80%.
 * volVlak: volle achtergrond, tekening op 100% (apple-touch-icon).
 */
function kleurOp(x, y, { maskable = false, volVlak = false } = {}) {
  let dx = x, dy = y;
  if (maskable) { dx = (x - 256) / 0.72 + 256; dy = (y - 256) / 0.72 + 256; }

  const inBg = (maskable || volVlak) ? true : inAfgerondeRect(x, y, 100);
  if (!inBg) return [0, 0, 0, 0];

  // Verticaal verloop
  const t = y / 512;
  const bg = [
    Math.round(PAARS_BOVEN[0] + (PAARS_ONDER[0] - PAARS_BOVEN[0]) * t),
    Math.round(PAARS_BOVEN[1] + (PAARS_ONDER[1] - PAARS_BOVEN[1]) * t),
    Math.round(PAARS_BOVEN[2] + (PAARS_ONDER[2] - PAARS_BOVEN[2]) * t),
  ];

  // Boek (wit)
  if (inQuad(dx, dy, LINKS) || inQuad(dx, dy, RECHTS)) return [...WIT, 255];
  // Snelheidsstrepen (wit, iets doorzichtig → meng met bg)
  for (const [sx, sy, sw, sh] of STREPEN) {
    if (inBalk(dx, dy, sx, sy, sw, sh)) {
      const a = 0.82;
      return [
        Math.round(WIT[0] * a + bg[0] * (1 - a)),
        Math.round(WIT[1] * a + bg[1] * (1 - a)),
        Math.round(WIT[2] * a + bg[2] * (1 - a)),
        255,
      ];
    }
  }
  return [...bg, 255];
}

/** Render met 3×3 supersampling voor gladde randen */
function render(maat, opties) {
  const rgba = new Uint8Array(maat * maat * 4);
  const schaal = 512 / maat;
  const SUB = 3;
  for (let py = 0; py < maat; py++) {
    for (let px = 0; px < maat; px++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < SUB; sy++) {
        for (let sx = 0; sx < SUB; sx++) {
          const x = (px + (sx + 0.5) / SUB) * schaal;
          const y = (py + (sy + 0.5) / SUB) * schaal;
          const [cr, cg, cb, ca] = kleurOp(x, y, opties);
          r += cr * ca; g += cg * ca; b += cb * ca; a += ca;
        }
      }
      const n = SUB * SUB;
      const i = (py * maat + px) * 4;
      rgba[i]     = a ? Math.round(r / a) : 0;
      rgba[i + 1] = a ? Math.round(g / a) : 0;
      rgba[i + 2] = a ? Math.round(b / a) : 0;
      rgba[i + 3] = Math.round(a / n);
    }
  }
  return rgba;
}

function schrijf(naam, maat, opties) {
  const png = maakPng(maat, maat, render(maat, opties));
  writeFileSync(join(UIT, naam), png);
  console.log(`✓ icons/${naam} (${maat}×${maat}, ${(png.length / 1024).toFixed(1)} kB)`);
}

schrijf('icon-192.png', 192, {});
schrijf('icon-512.png', 512, {});
schrijf('icon-maskable-512.png', 512, { maskable: true });
schrijf('apple-touch-icon.png', 180, { volVlak: true });
schrijf('favicon-32.png', 32, {});

console.log('\nKlaar! Alle iconen staan in /icons.');
