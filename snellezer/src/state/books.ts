/**
 * Boeken: EPUB en PDF omzetten naar alinea's met hoofdstukken, en een boek in leesbare porties opdelen.
 * Pure functies zonder React of opslag, zodat ze los te testen zijn.
 */
import {strFromU8, unzipSync} from 'fflate';

export type BookFormat = 'epub' | 'pdf';
export type BookChapter = {title: string; para: number};
export type BookContent = {paragraphs: string[]};
export type BookMeta = {
  id: string; title: string; author: string; format: BookFormat;
  words: number; paragraphs: number; chapters: BookChapter[];
  /** Alinea waar je verder leest. */
  position: number;
  /** Aantal gelezen woorden tot die alinea, voor de voortgang. */
  readWords: number;
  addedAt: string; lastReadAt?: string;
};
export type ParsedBook = {title: string; author: string; chapters: {title: string; paragraphs: string[]}[]};

export class BookError extends Error {}

export const MAX_BOOK_BYTES = 60 * 1024 * 1024;
const countWords = (s: string) => s.split(/\s+/).filter(Boolean).length;

const ENTITIES: Record<string, string> = {
  nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", hellip: '…', mdash: '—', ndash: '–',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', laquo: '«', raquo: '»', bull: '•', middot: '·', shy: '',
  eacute: 'é', egrave: 'è', euml: 'ë', ecirc: 'ê', aacute: 'á', agrave: 'à', auml: 'ä', acirc: 'â',
  iacute: 'í', iuml: 'ï', oacute: 'ó', ouml: 'ö', ocirc: 'ô', uacute: 'ú', uuml: 'ü', ccedil: 'ç', ntilde: 'ñ',
  Eacute: 'É', Euml: 'Ë', Iuml: 'Ï', Ouml: 'Ö', Uuml: 'Ü', szlig: 'ß', copy: '©', reg: '®', deg: '°', euro: '€',
};
export function decodeEntities(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
    if (e[0] === '#') {
      const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : '';
    }
    return ENTITIES[e] ?? m;
  });
}

const clean = (s: string) => decodeEntities(s).replace(/[­​]/g, '').replace(/\s+/g, ' ').trim();

/** HTML of XHTML naar alinea's: blokelementen worden alinea's, de rest wordt platte tekst. */
export function htmlToParagraphs(html: string): string[] {
  const body = html
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<(script|style|nav|svg|noscript|math)[\s\S]*?<\/\1>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|h[1-6]|li|blockquote|section|article|tr|dd|dt|figcaption|pre)\s*>/gi, '\n\n')
    .replace(/<(p|div|h[1-6]|li|blockquote|section|article|tr|dd|dt|pre)(\s[^>]*)?>/gi, '\n\n')
    .replace(/<[^>]+>/g, '');
  return body.split(/\n\s*\n/).map(clean).filter(p => p.length > 0);
}

function headingOf(html: string): string {
  const h = html.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i)?.[1] ?? html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '';
  return clean(h.replace(/<[^>]+>/g, ' ')).slice(0, 120);
}

function attr(tag: string, name: string): string {
  return tag.match(new RegExp(`\\s${name}\\s*=\\s*"([^"]*)"`, 'i'))?.[1] ?? tag.match(new RegExp(`\\s${name}\\s*=\\s*'([^']*)'`, 'i'))?.[1] ?? '';
}

function resolvePath(base: string, href: string): string {
  const parts = (base ? base + '/' : '').concat(href.split('#')[0]).split('/');
  const out: string[] = [];
  for (const p of parts) { if (p === '..') out.pop(); else if (p && p !== '.') out.push(p); }
  return out.join('/');
}

/** Leest een EPUB: volgorde uit de spine, titel en auteur uit de metadata. Boeken met DRM worden geweigerd. */
export function parseEpub(bytes: Uint8Array): ParsedBook {
  let files: Record<string, Uint8Array>;
  try {
    files = unzipSync(bytes, {filter: f => !/\.(jpe?g|png|gif|svg|webp|bmp|ttf|otf|woff2?|mp3|mp4|m4a)$/i.test(f.name)});
  } catch { throw new BookError('Dit bestand is geen geldig e-book (EPUB).'); }
  const read = (p: string) => files[p] ? strFromU8(files[p]) : '';
  const container = read('META-INF/container.xml');
  const opfPath = container.match(/full-path\s*=\s*"([^"]+)"/i)?.[1];
  if (!opfPath || !files[opfPath]) throw new BookError('Dit e-book mist zijn inhoudsopgave en kan niet worden gelezen.');
  const encryption = read('META-INF/encryption.xml');
  if (/<(?:\w+:)?EncryptedData/i.test(encryption) && /URI\s*=\s*"[^"]+\.x?html?"/i.test(encryption))
    throw new BookError('Dit e-book is beveiligd met DRM. Zulke boeken kunnen alleen in de app van de winkel worden gelezen. Kies een e-book zonder DRM.');
  const opf = read(opfPath);
  const base = opfPath.includes('/') ? opfPath.slice(0, opfPath.lastIndexOf('/')) : '';
  const title = clean(opf.match(/<dc:title[^>]*>([\s\S]*?)<\/dc:title>/i)?.[1] ?? '') || 'Mijn boek';
  const author = clean(opf.match(/<dc:creator[^>]*>([\s\S]*?)<\/dc:creator>/i)?.[1] ?? '');
  const manifest = new Map<string, {href: string; type: string}>();
  for (const tag of opf.match(/<item\b[^>]*>/gi) ?? []) manifest.set(attr(tag, 'id'), {href: attr(tag, 'href'), type: attr(tag, 'media-type')});
  const spine = (opf.match(/<itemref\b[^>]*>/gi) ?? []).map(tag => attr(tag, 'idref'));
  const chapters: ParsedBook['chapters'] = [];
  for (const id of spine) {
    const item = manifest.get(id);
    if (!item || !/html/i.test(item.type + item.href)) continue;
    let href = item.href;
    try { href = decodeURIComponent(href); } catch {}
    const html = read(resolvePath(base, href));
    if (!html) continue;
    const paragraphs = htmlToParagraphs(html);
    // Omslag, colofon en inhoudsopgave hebben nauwelijks lopende tekst.
    if (paragraphs.reduce((n, p) => n + countWords(p), 0) < 25) continue;
    chapters.push({title: headingOf(html) || `Hoofdstuk ${chapters.length + 1}`, paragraphs});
  }
  if (!chapters.length) throw new BookError('In dit e-book is geen leesbare tekst gevonden.');
  return {title, author, chapters};
}

/**
 * PDF-regels per pagina naar alinea's. Kop- en voetregels die op veel pagina's terugkomen en losse
 * paginanummers vallen weg; afgebroken woorden worden weer aan elkaar gezet.
 */
export type PdfLine = string | {text: string; size?: number};

export function pdfPagesToParagraphs(pages: PdfLine[][]): {paragraphs: string[]; pageStart: number[]; headings: {title: string; para: number}[]} {
  const textOf = (l: PdfLine) => typeof l === 'string' ? l : l.text;
  const sizeOf = (l: PdfLine) => typeof l === 'string' ? 0 : l.size ?? 0;
  const norm = (l: string) => l.trim().replace(/\d+/g, '#').toLowerCase();
  const repeated = new Set<string>();
  if (pages.length >= 4) {
    const seen = new Map<string, number>();
    for (const page of pages) for (const l of new Set([...page.slice(0, 2), ...page.slice(-2)].map(x => norm(textOf(x))))) seen.set(l, (seen.get(l) ?? 0) + 1);
    for (const [l, n] of seen) if (l && n >= Math.max(3, pages.length * .4)) repeated.add(l);
  }
  const all = pages.flat();
  const lengths = all.map(l => textOf(l).trim().length).filter(n => n > 20).sort((a, b) => a - b);
  const typical = lengths.length ? lengths[Math.floor(lengths.length * .6)] : 60;
  // De lettergrootte van de lopende tekst: de grootte van de meeste tekens.
  const weight = new Map<number, number>();
  for (const l of all) { const z = Math.round(sizeOf(l) * 2) / 2; if (z) weight.set(z, (weight.get(z) ?? 0) + textOf(l).length); }
  const bodySize = [...weight.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? 0;
  const isHeading = (l: PdfLine) => bodySize > 0 && sizeOf(l) >= bodySize * 1.3 && textOf(l).trim().length <= 120;
  const paragraphs: string[] = [];
  const pageStart: number[] = [];
  const headings: {title: string; para: number}[] = [];
  let current = '', heading = '';
  const flush = () => { const p = clean(current); if (p) paragraphs.push(p); current = ''; };
  const flushHeading = () => { const h = clean(heading); if (h) { headings.push({title: h.slice(0, 120), para: paragraphs.length}); paragraphs.push(h); } heading = ''; };
  for (const page of pages) {
    const lines = page.map(l => ({text: textOf(l).replace(/\s+/g, ' ').trim(), heading: isHeading(l)}))
      .filter(l => l.text && !/^\d{1,4}$/.test(l.text) && !repeated.has(norm(l.text)));
    pageStart.push(paragraphs.length + (current || heading ? 1 : 0));
    for (let i = 0; i < lines.length; i++) {
      const {text: line} = lines[i];
      if (lines[i].heading) { flush(); heading = heading ? heading + ' ' + line : line; continue; }
      if (heading) flushHeading();
      if (!current) current = line;
      else if (/[A-Za-zÀ-ÿ]-$/.test(current) && /^[a-zà-ÿ]/.test(line)) current = current.slice(0, -1) + line;
      else current += ' ' + line;
      const next = lines[i + 1];
      if (!next) continue;
      const endsSentence = /[.!?:;”"’)]$/.test(line);
      if (next.heading || (endsSentence && line.length < typical * .7) || (endsSentence && /^[A-Z0-9“"‘(•–-]/.test(next.text) && line.length < typical * .9)) flush();
    }
    // Een alinea loopt door op de volgende pagina, tenzij de zin hier eindigt met een korte regel.
    const last = lines[lines.length - 1]?.text ?? '';
    if (current && /[.!?”"’]$/.test(current) && last.length < typical * .9) flush();
  }
  flushHeading();
  flush();
  return {paragraphs, pageStart: pageStart.map(p => Math.min(p, Math.max(0, paragraphs.length - 1))), headings};
}

/** Zet een geparseerd boek om naar metadata en inhoud. */
export function buildBook(parsed: ParsedBook, format: BookFormat, id: string, now = new Date()): {meta: BookMeta; content: BookContent} {
  const paragraphs: string[] = [];
  const chapters: BookChapter[] = [];
  for (const ch of parsed.chapters) {
    if (!ch.paragraphs.length) continue;
    chapters.push({title: ch.title, para: paragraphs.length});
    paragraphs.push(...ch.paragraphs);
  }
  if (!paragraphs.length) throw new BookError('Er is geen leesbare tekst gevonden.');
  const words = paragraphs.reduce((n, p) => n + countWords(p), 0);
  return {
    meta: {id, title: parsed.title.slice(0, 140) || 'Mijn boek', author: parsed.author.slice(0, 100), format, words, paragraphs: paragraphs.length, chapters, position: 0, readWords: 0, addedAt: now.toISOString()},
    content: {paragraphs},
  };
}

/** Het volgende stuk om te lezen: hele alinea's, tot ongeveer het gewenste aantal woorden. */
export function nextPortion(content: BookContent, from: number, targetWords: number): {text: string; from: number; to: number; ends: number[]} {
  const start = Math.max(0, Math.min(from, content.paragraphs.length - 1));
  const ends: number[] = [];
  let total = 0, i = start;
  while (i < content.paragraphs.length && (total < targetWords || ends.length === 0)) {
    total += countWords(content.paragraphs[i]);
    ends.push(total);
    i++;
  }
  return {text: content.paragraphs.slice(start, i).join('\n\n'), from: start, to: i, ends};
}

/** Tot welke alinea heb je gelezen? Bij een afgebroken tempo-oefening tellen alleen hele alinea's. */
export function reachedParagraph(portion: {from: number; ends: number[]}, readWords: number, complete: boolean): {para: number; words: number} {
  if (complete) return {para: portion.from + portion.ends.length, words: portion.ends[portion.ends.length - 1] ?? 0};
  let n = 0;
  while (n < portion.ends.length && portion.ends[n] <= readWords) n++;
  return {para: portion.from + n, words: n ? portion.ends[n - 1] : 0};
}

export function chapterAt(meta: Pick<BookMeta, 'chapters'>, para: number): BookChapter | undefined {
  let found: BookChapter | undefined;
  for (const c of meta.chapters) { if (c.para <= para) found = c; else break; }
  return found;
}

export function bookProgress(meta: Pick<BookMeta, 'readWords' | 'words' | 'position' | 'paragraphs'>): number {
  if (meta.position >= meta.paragraphs) return 1;
  return meta.words ? Math.min(1, meta.readWords / meta.words) : 0;
}

export function wordsBefore(content: BookContent, para: number): number {
  let n = 0;
  for (let i = 0; i < Math.min(para, content.paragraphs.length); i++) n += countWords(content.paragraphs[i]);
  return n;
}
