import type {ParsedBook} from './books';

/** Op het web leest pdfWeb.ts de PDF; de webview-variant (en pdf.js in de bundel) is hier niet nodig. */
export const MAX_NATIVE_PDF_BYTES = Infinity;
export function useNativePdf() {
  return {element: null, parse: (_base64: string, _fileName: string, _onProgress?: (page: number, pages: number) => void): Promise<ParsedBook> => Promise.reject(new Error('Alleen in de app'))};
}
