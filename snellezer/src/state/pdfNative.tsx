import React, {useCallback, useRef, useState} from 'react';
import {Platform} from 'react-native';
import {BookError, type ParsedBook} from './books';
import PdfExtractor from '../components/PdfExtractor';

/** In de app gaat een PDF naar een onzichtbare webview met pdf.js. Hooguit 30 MB, omdat het bestand als tekst wordt doorgegeven. */
export const MAX_NATIVE_PDF_BYTES = 30 * 1024 * 1024;
const TIMEOUT_MS = 180000;

type Job = {data: string; fileName: string; onProgress?: (page: number, pages: number) => void; resolve: (book: ParsedBook) => void; reject: (e: Error) => void};

/** Geeft een element om in het scherm te zetten en een functie die een PDF uitleest. */
export function useNativePdf() {
  const [job, setJob] = useState<Job | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finish = useCallback(() => { if (timer.current) clearTimeout(timer.current); setJob(null); }, []);
  const parse = useCallback((base64: string, fileName: string, onProgress?: (page: number, pages: number) => void) => new Promise<ParsedBook>((resolve, reject) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => { setJob(null); reject(new BookError('Het lezen van deze PDF duurde te lang. Probeer een kleiner bestand.')); }, TIMEOUT_MS);
    setJob({data: base64, fileName, onProgress, resolve, reject});
  }), []);
  const element = Platform.OS !== 'web' && job ? <PdfExtractor
    key={job.fileName + job.data.length}
    data={job.data}
    fileName={job.fileName}
    onProgress={async (page, pages) => job.onProgress?.(page, pages)}
    onDone={async json => { finish(); try { job.resolve(JSON.parse(json)); } catch { job.reject(new BookError('Deze PDF kon niet worden gelezen.')); } }}
    onFail={async (message, known) => { finish(); job.reject(known ? new BookError(message) : new BookError('Deze PDF kon niet worden geopend.')); }}
    dom={{style: {width: 1, height: 1, opacity: 0, position: 'absolute'}, containerStyle: {width: 1, height: 1, opacity: 0, position: 'absolute'}}}
  /> : null;
  return {element, parse};
}
