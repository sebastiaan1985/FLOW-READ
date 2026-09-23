// pdf.js levert geen typen voor de worker; we gebruiken alleen WorkerMessageHandler, via globalThis.pdfjsWorker.
declare module 'pdfjs-dist/legacy/build/pdf.worker.mjs';
