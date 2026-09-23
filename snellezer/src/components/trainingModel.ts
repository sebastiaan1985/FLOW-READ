/** The next unfinished exercise, regardless of completion order or duplicates. */
export function nextDailyStep(plan: readonly {id:string}[], sessions: readonly {exerciseId:string;dailyId?:string}[], day:string) {
  const completed=new Set(sessions.filter(s=>s.dailyId===day).map(s=>s.exerciseId));
  const next=plan.findIndex(exercise=>!completed.has(exercise.id));
  return next<0?plan.length:next;
}

/** Keep the highlighted recognition letter close to the first third of a word. */
export function recognitionIndex(word:string) {
  const letters=Array.from(word);
  const first=letters.findIndex(letter=>/\p{L}|\p{N}/u.test(letter));
  if(first<0)return 0;
  const length=letters.filter(letter=>/\p{L}|\p{N}/u.test(letter)).length;
  return Math.min(letters.length-1,first+(length<=1?0:length<=5?1:length<=9?2:length<=13?3:4));
}

export function normalizeSearchWord(word:string) {
  return word.replace(/[^\p{L}\p{N}]/gu,'').toLocaleLowerCase('nl');
}

/** Two equal columns form one line; each beat lights exactly one fixation. */
export function fixationWindow(words:readonly string[],cursor:number,groupSize:number) {
  const rowStart=Math.floor(cursor/(groupSize*2))*groupSize*2;
  return {rowStart,active:Math.floor((cursor-rowStart)/groupSize),groups:[words.slice(rowStart,rowStart+groupSize),words.slice(rowStart+groupSize,rowStart+groupSize*2)]};
}

// Woorden die meestal een nieuw zinsdeel beginnen, en woorden die niet aan het eind van een groep horen.
const PHRASE_START = new Set(['in','op','aan','met','voor','naar','van','bij','uit','over','onder','door','tot','om','zonder','tegen','na','sinds','tijdens','achter','naast','tussen','langs','rond','vanaf','volgens','en','maar','of','want','dus','omdat','dat','die','als','wanneer','terwijl','hoewel','zodat','toen','waar','wie','wat','doordat','zodra','nadat','voordat','totdat']);
const NEEDS_HEAD = new Set(['de','het','een','deze','dit','die','dat','zijn','haar','hun','mijn','je','jouw','ons','onze','uw','elk','elke','ieder','iedere','geen','veel','weinig','zo','te','heel','erg','zeer','in','op','aan','met','voor','naar','van','bij','uit','over','onder','door','tot','om','en','of','maar']);
const CONJUNCTION = new Set(['en','maar','of','want','dus','omdat','terwijl','hoewel','zodat','doordat','zodra','nadat','voordat','totdat']);
const bare = (w: string) => w.toLowerCase().replace(/[^\p{L}]/gu, '');

/**
 * Hoeveel woorden de woordgroep telt die bij `cursor` begint. We knippen bij zinsdelen in plaats van per vast aantal:
 * na een leesteken, en vóór een voorzetsel of voegwoord. Een groep eindigt niet op een lidwoord of voorzetsel,
 * zodat "de oude man | liep langzaam | naar de haven" bij elkaar blijft. `target` is het gewenste aantal woorden;
 * een groep is hooguit twee woorden langer, en alleen om een zinsdeel af te maken.
 */
export function phraseLength(words: readonly string[], cursor: number, target: number) {
  const max = Math.max(1, target) + 1, left = words.length - cursor;
  if (left <= 0) return 0;
  let n = 1;
  while (n < Math.min(max + 1, left)) {
    const prev = words[cursor + n - 1], next = bare(words[cursor + n]);
    if (/[.,;:!?)]$/.test(prev)) break;
    // Een lidwoord of voorzetsel, of een bijvoeglijk naamwoord na een lidwoord (een oude ...), wacht op zijn zelfstandig naamwoord.
    const dangling = NEEDS_HEAD.has(bare(prev)) || (n >= 2 && /e$/.test(bare(prev)) && NEEDS_HEAD.has(bare(words[cursor + n - 2])));
    if (n >= max && !dangling) break;
    if (!dangling && (n >= 2 || CONJUNCTION.has(next)) && PHRASE_START.has(next)) break;
    if (n >= target && !dangling) break;
    n++;
  }
  return n;
}
