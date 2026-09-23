// Kopieert pdf.js (de legacy-build, die ook in oudere Safari-versies werkt) naar public/pdfjs, zodat de webapp het pas laadt als iemand een PDF kiest.
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const src = path.join(root, 'node_modules', 'pdfjs-dist');
const out = path.join(root, 'public', 'pdfjs');
if (!fs.existsSync(src)) { console.warn('pdfjs-dist ontbreekt; PDF-import werkt niet in deze build.'); process.exit(0); }
fs.mkdirSync(out, {recursive: true});
for (const f of ['pdf.min.mjs', 'pdf.worker.min.mjs']) fs.copyFileSync(path.join(src, 'legacy', 'build', f), path.join(out, f));
fs.cpSync(path.join(src, 'cmaps'), path.join(out, 'cmaps'), {recursive: true});
fs.writeFileSync(path.join(out, 'loader.mjs'), `import * as pdfjsLib from './pdf.min.mjs';\npdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';\nwindow.pdfjsLib = pdfjsLib;\nwindow.dispatchEvent(new Event('pdfjs-ready'));\n`);
console.log('pdf.js gekopieerd naar public/pdfjs');
