import {Platform} from 'react-native';
import {BookError, type ParsedBook} from './books';
import {readPdf} from './pdfParse';

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

export async function parsePdf(bytes: Uint8Array, fileName: string, onProgress?: (page: number, pages: number) => void): Promise<ParsedBook> {
  if (!pdfSupported) throw new BookError('PDF’s importeren kan nu nog alleen in de webversie. E-books (EPUB) werken wel in de app.');
  return readPdf(await loadPdfjs(), bytes, fileName, onProgress, '/pdfjs/cmaps/');
}
