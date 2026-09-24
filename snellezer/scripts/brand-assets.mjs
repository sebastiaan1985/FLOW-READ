// Maakt alle logo- en icoonbestanden uit het bronlogo (assets/brand/logo-bron.webp).
// Gebruik: node scripts/brand-assets.mjs  (daarna npm run web:extras voor de webiconen)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = f => path.join(root, 'assets', f);
export const GREEN = '#086961';
const GREEN_RGB = [8, 105, 97];

// De groene tegel in het bronbestand (gemeten): links 240, boven 123, 773 x 773 pixels.
const TILE = {left: 240, top: 123, width: 773, height: 773};
const tile = await sharp(path.join(root, 'assets/brand/logo-bron.webp')).extract(TILE).resize(1024, 1024).ensureAlpha().raw().toBuffer({resolveWithObject: true});
const {width: W, height: H} = tile.info;

// De S los van de tegel: groen wordt doorzichtig, met zachte randen (de kleur wordt "ontmengd").
const s = Buffer.from(tile.data);
for (let i = 0; i < s.length; i += 4) {
  const [r, g, b, a] = [s[i], s[i + 1], s[i + 2], s[i + 3]];
  const dist = Math.hypot(r - GREEN_RGB[0], g - GREEN_RGB[1], b - GREEN_RGB[2]);
  const alpha = Math.min(1, Math.max(0, (dist - 18) / 110)) * (a / 255);
  if (alpha <= 0) { s[i + 3] = 0; continue; }
  for (let c = 0; c < 3; c++) s[i + c] = Math.max(0, Math.min(255, Math.round((s[i + c] - (1 - alpha) * GREEN_RGB[c]) / alpha)));
  s[i + 3] = Math.round(alpha * 255);
}
const tilePng = await sharp(tile.data, {raw: {width: W, height: H, channels: 4}}).png().toBuffer();
const sPng = await sharp(s, {raw: {width: W, height: H, channels: 4}}).png().toBuffer();

fs.writeFileSync(out('brand/tegel.png'), tilePng);          // de tegel met ronde hoeken, doorzichtige achtergrond
fs.writeFileSync(out('brand/s.png'), sPng);                 // alleen de S, even groot als de tegel (voor de openingsanimatie)
// De lege tegel: dezelfde vorm, helemaal groen. De openingsanimatie laat de S daarop verschijnen.
const empty = Buffer.from(tile.data);
for (let i = 0; i < empty.length; i += 4) { empty[i] = GREEN_RGB[0]; empty[i + 1] = GREEN_RGB[1]; empty[i + 2] = GREEN_RGB[2]; }
await sharp(empty, {raw: {width: W, height: H, channels: 4}}).png().toFile(out('brand/tegel-leeg.png'));

// iOS en de webversie: vol vierkant (het systeem rondt zelf af).
// Zonder alfakanaal: de App Store weigert iconen met transparantie.
const iconBuf = await sharp({create: {width: 1024, height: 1024, channels: 4, background: GREEN}}).composite([{input: sPng}]).png().toBuffer();
await sharp(iconBuf).flatten({background: GREEN}).removeAlpha().png().toFile(out('icon.png'));

// Android: de S op doorzichtig, binnen de veilige zone (Android snijdt het icoon rond of druppelvormig bij).
const safe = async (size, scale) => {
  const inner = Math.round(size * scale);
  const mark = await sharp(sPng).resize(inner, inner).toBuffer();
  const pad = Math.round((size - inner) / 2);
  return sharp({create: {width: size, height: size, channels: 4, background: {r: 0, g: 0, b: 0, alpha: 0}}}).composite([{input: mark, left: pad, top: pad}]);
};
await (await safe(1024, .78)).png().toFile(out('adaptive-icon.png'));
await (await safe(512, .78)).png().toFile(out('android-icon-foreground.png'));
await sharp({create: {width: 512, height: 512, channels: 4, background: GREEN}}).png().toFile(out('android-icon-background.png'));
const mono = await (await safe(432, .78)).raw().toBuffer({resolveWithObject: true});
for (let i = 0; i < mono.data.length; i += 4) { mono.data[i] = mono.data[i + 1] = mono.data[i + 2] = 255; }
await sharp(mono.data, {raw: {width: 432, height: 432, channels: 4}}).png().toFile(out('android-icon-monochrome.png'));

// Opstartscherm en favicon: de tegel zelf.
await sharp(tilePng).resize(512, 512).png().toFile(out('splash-icon.png'));
await sharp(tilePng).resize(64, 64).png().toFile(out('favicon.png'));
console.log('Logo-bestanden bijgewerkt in assets/');
