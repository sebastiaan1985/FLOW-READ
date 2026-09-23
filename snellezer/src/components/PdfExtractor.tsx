'use dom';
// Draait in een onzichtbare webview in de iPhone- en Android-app, zodat de app dezelfde PDF-lezer (pdf.js) gebruikt als de webversie.
import {useEffect} from 'react';
import type {DOMProps} from 'expo/dom';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import * as pdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.mjs';
import {readPdf} from '../state/pdfParse';

// Zonder aparte worker-file: pdf.js draait dan in dezelfde webview.
(globalThis as any).pdfjsWorker = pdfWorker;

function fromBase64(data: string) {
  const bin = atob(data), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export default function PdfExtractor({data, fileName, onProgress, onDone, onFail}: {
  data: string; fileName: string;
  onProgress: (page: number, pages: number) => Promise<void>;
  onDone: (book: string) => Promise<void>;
  onFail: (message: string, known: boolean) => Promise<void>;
  dom?: DOMProps;
}) {
  useEffect(() => {
    let cancelled = false;
    readPdf(pdfjs, fromBase64(data), fileName, (page, pages) => { if (!cancelled) onProgress(page, pages); })
      .then(book => { if (!cancelled) onDone(JSON.stringify(book)); })
      .catch((e: any) => { if (!cancelled) onFail(String(e?.message || e), e?.name === 'BookError'); });
    return () => { cancelled = true; };
  }, [data]);
  return null;
}
