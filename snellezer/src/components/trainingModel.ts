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
