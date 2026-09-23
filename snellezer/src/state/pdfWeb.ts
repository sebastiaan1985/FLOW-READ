import {Platform} from 'react-native';
import {BookError, pdfPagesToParagraphs, type ParsedBook, type PdfLine} from './books';

/** PDF uitlezen gebeurt met pdf.js. Dat wordt pas geladen als iemand een PDF kiest (zie scripts/copy-pdfjs.mjs). */
export const pdfSupported = Platform.OS === 'web';

let loading: Promise<any> | null = null;
function loadPdfjs(): Promise<any> {
  const w = window as any;
  if (w.pdfjsLib) return Promise.resolve(w.pdfjsLib);
  if (loading) return loading;
  loading = new Promise((resolve, reject) => {
    const timer = setTimeout(() => { loading = null; reject(new BookError('De PDF-lezer kon niet worden geladen. Controleer je verbinding en probeer het opnieuw.')); }, 20000);
    window.addEventListener('pdfjs-ready', () => { clearTimeout(timer); resolve(w.pdfjsLib); }, {once: true});
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/pdfjs/loader.mjs';
    script.onerror = () => { clearTimeout(timer); loading = null; reject(new BookError('De PDF-lezer kon niet worden geladen.')); };
    document.head.appendChild(script);
  });
  return loading;
}

type TextItem = {str: string; hasEOL?: boolean; transform: number[]; height?: number};

/** Regels per pagina, op basis van de verticale positie van de tekststukjes, met de grootste lettergrootte per regel. */
function linesOf(items: TextItem[]): PdfLine[] {
  const lines: PdfLine[] = [];
  let current = '', size = 0, lastY: number | null = null;
  const push = () => { if (current.trim()) lines.push({text: current, size}); current = ''; size = 0; };
  for (const item of items) {
    const y = Math.round(item.transform?.[5] ?? 0);
    if (lastY !== null && Math.abs(y - lastY) > 2) push();
    current += item.str;
    if (item.str.trim()) size = Math.max(size, item.height || Math.abs(item.transform?.[3] ?? 0));
    lastY = y;
    if (item.hasEOL) { push(); lastY = null; }
  }
  push();
  return lines;
}

export async function parsePdf(bytes: Uint8Array, fileName: string, onProgress?: (page: number, pages: number) => void): Promise<ParsedBook> {
  if (!pdfSupported) throw new BookError('PDF’s importeren kan nu nog alleen in de webversie. E-books (EPUB) werken wel in de app.');
  const pdfjs = await loadPdfjs();
  let pdf: any;
  try {
    pdf = await pdfjs.getDocument({data: bytes, isEvalSupported: false, disableFontFace: true, cMapUrl: '/pdfjs/cmaps/', cMapPacked: true}).promise;
  } catch (e: any) {
    if (e?.name === 'PasswordException') throw new BookError('Deze PDF is beveiligd met een wachtwoord.');
    throw new BookError('Deze PDF kon niet worden geopend.');
  }
  const pages: PdfLine[][] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const text = await page.getTextContent();
    pages.push(linesOf(text.items as TextItem[]));
    page.cleanup?.();
    onProgress?.(i, pdf.numPages);
  }
  const {paragraphs, pageStart, headings} = pdfPagesToParagraphs(pages);
  const words = paragraphs.join(' ').split(/\s+/).filter(Boolean).length;
  if (words < 50) throw new BookError('In deze PDF staat geen leesbare tekst. Waarschijnlijk bestaat hij uit gescande afbeeldingen; die kunnen we (nog) niet lezen.');
  // Hoofdstukken uit de inhoudsopgave van de PDF, anders één hoofdstuk per tien pagina's.
  const marks: {title: string; para: number}[] = [];
  try {
    const outline = await pdf.getOutline();
    for (const entry of outline ?? []) {
      let dest = entry.dest;
      if (typeof dest === 'string') dest = await pdf.getDestination(dest);
      if (!Array.isArray(dest) || !dest[0]) continue;
      const index = await pdf.getPageIndex(dest[0]);
      marks.push({title: String(entry.title || '').trim().slice(0, 120) || `Pagina ${index + 1}`, para: pageStart[index] ?? 0});
    }
  } catch {}
  // Geen inhoudsopgave? Dan de koppen in grote letters, en anders één hoofdstuk per tien pagina's.
  if (!marks.length && headings.length >= 2 && headings.length <= 400) marks.push(...headings);
  if (!marks.length) for (let p = 0; p < pageStart.length; p += 10) marks.push({title: `Pagina ${p + 1}–${Math.min(p + 10, pageStart.length)}`, para: pageStart[p]});
  marks.sort((a, b) => a.para - b.para);
  const unique = marks.filter((m, i) => i === 0 || m.para > marks[i - 1].para);
  if (unique[0]?.para !== 0) unique.unshift({title: 'Begin', para: 0});
  const chapters = unique.map((m, i) => ({title: m.title, paragraphs: paragraphs.slice(m.para, unique[i + 1]?.para ?? paragraphs.length)}));
  let title = fileName.replace(/\.pdf$/i, ''), author = '';
  try {
    const info = (await pdf.getMetadata())?.info ?? {};
    if (typeof info.Title === 'string' && info.Title.trim().length > 2) title = info.Title.trim();
    if (typeof info.Author === 'string') author = info.Author.trim();
  } catch {}
  await pdf.destroy?.();
  return {title, author, chapters};
}
