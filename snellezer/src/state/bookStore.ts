import {Platform} from 'react-native';
import {File, Paths} from 'expo-file-system';
import type {BookContent} from './books';

/**
 * De tekst van een boek is te groot voor de gewone app-opslag. Op de telefoon staat hij als bestand
 * in de documentenmap, in de browser in IndexedDB. Alleen de metadata (titel, bladwijzer) zit in de app-staat.
 */
const DB = 'snellezer-boeken', STORE = 'boeken';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idb<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const req = run(tx.objectStore(STORE));
    tx.oncomplete = () => { db.close(); resolve(req.result); };
    tx.onerror = tx.onabort = () => { db.close(); reject(tx.error); };
  });
}
const fileFor = (id: string) => new File(Paths.document, `boek-${id.replace(/[^a-z0-9-]/gi, '')}.json`);

export async function saveBookContent(id: string, content: BookContent): Promise<void> {
  if (Platform.OS === 'web') { await idb('readwrite', s => s.put(content, id)); return; }
  const file = fileFor(id);
  if (!file.exists) file.create();
  file.write(JSON.stringify(content));
}

export async function loadBookContent(id: string): Promise<BookContent | null> {
  try {
    if (Platform.OS === 'web') return (await idb<BookContent | undefined>('readonly', s => s.get(id))) ?? null;
    const file = fileFor(id);
    if (!file.exists) return null;
    return JSON.parse(await file.text()) as BookContent;
  } catch { return null; }
}

export async function deleteBookContent(id: string): Promise<void> {
  try {
    if (Platform.OS === 'web') { await idb('readwrite', s => s.delete(id)); return; }
    const file = fileFor(id);
    if (file.exists) file.delete();
  } catch {}
}
