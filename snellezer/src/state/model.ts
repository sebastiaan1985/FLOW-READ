import type { AppState, Question, SessionResult } from '../types';
import { cleanAccount } from './auth.ts';
import { clampWpm, decideTempo, effectiveWpm, MEASURED_EXERCISES, TEMPO, type TempoDecision } from './rules.ts';
/** Een profielfoto is een klein data-adres van een afbeelding; alles wat daar niet op lijkt, of te groot is, laten we weg. */
export function validPhoto(value:unknown):value is string{return typeof value==='string'&&value.startsWith('data:image/')&&value.length<200_000;}
export const initialState:AppState = {
 account:null,accountChoiceMade:false,testMode:false,
 profile:{name:'',ageGroup:'adult',goal:'pleasure',onboardingComplete:false},
 settings:{enabled:false,font:'standard',fontSize:20,letterSpacing:0,wordSpacing:0,lineHeight:1.7,overlay:'none',overlayOpacity:20,background:'white',bionic:false,syllables:false,lineGuide:false},
 sessions:[],texts:[],targetWpm:200,kidsMode:false,baseline:null,tempoStreak:0,reminder:{enabled:false,hour:19,minute:0},topTechniques:[],installHintDismissed:false,appearance:'auto',books:[],
 prefs:{flashMs:null,spread:null,readMinutes:10,eyeSpeed:null,goalWpm:null},celebrated:[],answerStreak:{current:0,best:0},
};
export const dateKey=(date:Date|string=new Date())=>{const d=typeof date==='string'?new Date(date):date;return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
export function shiftDay(offset:number,now=new Date()){const d=new Date(now);d.setDate(d.getDate()+offset);return dateKey(d);}
/** Reeks met een rustdag: per zeven geoefende dagen mag je één dag overslaan. Vandaag telt pas mee als je hebt geoefend. */
export function streakWithRest(days:Set<string>,now=new Date()){
 let streak=0,rest=0,offset=days.has(dateKey(now))?0:-1;
 for(let guard=0;guard<4000;guard++){
  if(days.has(shiftDay(offset,now))){streak++;offset--;continue;}
  const allowed=Math.floor(streak/7)+1;
  if(rest<allowed&&days.has(shiftDay(offset-1,now))){rest++;offset--;continue;}
  break;
 }
 return streak;
}
export function deriveStats(state:AppState,now=new Date()) {
 const all=state.sessions, measured=all.filter(s=>s.wpm>0 && MEASURED_EXERCISES.includes(s.exerciseId));
 const reading=measured.length?measured:all.filter(s=>s.wpm>0);
 const recent=reading.slice(-7), checks=all.filter(s=>s.comprehension!==null).slice(-7);
 const days=new Set(all.map(s=>dateKey(s.date)));
 const streak=streakWithRest(days,now);
 const averageWpm=recent.length?Math.round(recent.reduce((n,s)=>n+s.wpm,0)/recent.length):0;
 const effective=measured.filter(s=>s.comprehension!==null).map(s=>effectiveWpm(s.wpm,s.comprehension));
 const recentEffective=effective.slice(-3);
 const effectiveNow=recentEffective.length?Math.round(recentEffective.reduce((n,v)=>n+v,0)/recentEffective.length):0;
 const baselineEffective=state.baseline?effectiveWpm(state.baseline.wpm,state.baseline.comprehension):0;
 return {averageWpm,hasMeasured:measured.length>0,comprehension:checks.length?Math.round(checks.reduce((n,s)=>n+(s.comprehension||0),0)/checks.length):null,totalXP:all.reduce((n,s)=>n+s.xp,0),streak,totalWords:all.reduce((n,s)=>n+s.words,0),totalMinutes:Math.round(all.reduce((n,s)=>n+s.durationSeconds,0)/60),todaySessions:all.filter(s=>dateKey(s.date)===dateKey(now)),completedDays:days.size,improvement:state.baseline&&state.baseline.wpm?Math.round((averageWpm-state.baseline.wpm)/state.baseline.wpm*100):0,baselineWpm:state.baseline?.wpm||0,effectiveNow,baselineEffective,effectiveImprovement:baselineEffective&&effectiveNow?Math.round((effectiveNow-baselineEffective)/baselineEffective*100):0};
}
/**
 * Voegt een sessie toe en zet het oefentempo. Geef het tempobesluit mee dat ook in de melding staat;
 * zonder besluit rekenen we het hier uit met dezelfde regel.
 */
export function appendSession(state:AppState,session:SessionResult,decision?:TempoDecision):AppState {
 if(state.sessions.some(s=>s.id===session.id))return state;
 const clean={...session,wpm:Math.max(0,Math.round(session.wpm)),words:Math.max(0,Math.round(session.words)),durationSeconds:Math.max(0,session.durationSeconds),xp:Math.max(0,Math.round(session.xp))};
 const d=decision??decideTempo(state,clean.comprehension,clean.probes?{asked:clean.probes,wandered:clean.wandered??0}:undefined);
 return {...state,sessions:[...state.sessions,clean],targetWpm:clampWpm(d.to),tempoStreak:Math.max(0,Math.min(d.tempoStreak,TEMPO.riseAfter-1))};
}
const num=(v:any,lo:number,hi:number)=>Number.isFinite(v)?Math.max(lo,Math.min(hi,Math.round(v))):null;
/** Bewaarde oefenvoorkeuren, binnen veilige grenzen. */
export function cleanPrefs(p:any):AppState['prefs']{const x=p&&typeof p==='object'?p:{};return {flashMs:num(x.flashMs,60,1500),spread:num(x.spread,20,95),readMinutes:num(x.readMinutes,1,100)??10,eyeSpeed:num(x.eyeSpeed,1,10),goalWpm:num(x.goalWpm,60,1500)};}
const validQuestion=(q:any):q is Question=>q&&typeof q.question==='string'&&Array.isArray(q.options)&&q.options.length>=2&&q.options.every((o:any)=>typeof o==='string')&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length;
export function hydrate(raw:string|null):AppState {
 if(!raw)return initialState;
 const x=JSON.parse(raw);
 if(!x||typeof x!=='object')throw new Error('Invalid state');
 const sessions=Array.isArray(x.sessions)?x.sessions.filter((s:any)=>s&&typeof s.id==='string'&&typeof s.exerciseId==='string'&&Number.isFinite(s.wpm)&&Number.isFinite(s.words)&&Number.isFinite(s.xp)&&Number.isFinite(s.durationSeconds)&&!isNaN(Date.parse(s.date))&&(s.comprehension===null||Number.isFinite(s.comprehension))&&(s.lessonDay===undefined||Number.isInteger(s.lessonDay))&&(s.probes===undefined||Number.isInteger(s.probes))):[];
 const texts=Array.isArray(x.texts)?x.texts.filter((t:any)=>t&&typeof t.id==='string'&&typeof t.title==='string'&&typeof t.text==='string').map((t:any)=>{const questions=Array.isArray(t.questions)?t.questions.filter(validQuestion):[];const {questions:_,...rest}=t;return questions.length?{...rest,questions}:rest;}):[];
 const reminder=x.reminder&&typeof x.reminder==='object'&&Number.isInteger(x.reminder.hour)&&x.reminder.hour>=0&&x.reminder.hour<24&&Number.isInteger(x.reminder.minute)&&x.reminder.minute>=0&&x.reminder.minute<60?{enabled:!!x.reminder.enabled,hour:x.reminder.hour,minute:x.reminder.minute}:initialState.reminder;
 const topTechniques=Array.isArray(x.topTechniques)?x.topTechniques.filter((k:any)=>typeof k==='string').slice(0,3):[];
 const books=Array.isArray(x.books)?x.books.filter((b:any)=>b&&typeof b.id==='string'&&typeof b.title==='string'&&(b.format==='epub'||b.format==='pdf')&&Number.isInteger(b.paragraphs)&&Number.isInteger(b.position)&&Number.isFinite(b.words)&&Array.isArray(b.chapters)).map((b:any)=>({...b,author:typeof b.author==='string'?b.author:'',readWords:Number.isFinite(b.readWords)?b.readWords:0,chapters:b.chapters.filter((c:any)=>c&&typeof c.title==='string'&&Number.isInteger(c.para))})):[];
 return {...initialState,account:cleanAccount(x.account),accountChoiceMade:!!x.accountChoiceMade,testMode:!!x.testMode,books,topTechniques,installHintDismissed:!!x.installHintDismissed,appearance:x.appearance==='light'||x.appearance==='dark'?x.appearance:'auto',profile:(({photo,...rest})=>({...initialState.profile,...rest,...(validPhoto(photo)?{photo}:{})}))(x.profile&&typeof x.profile==='object'?x.profile:{}),settings:{...initialState.settings,...x.settings},sessions,texts,targetWpm:Number.isFinite(x.targetWpm)?Math.max(60,Math.min(800,x.targetWpm)):200,kidsMode:!!x.kidsMode,baseline:x.baseline&&Number.isFinite(x.baseline.wpm)&&Number.isFinite(x.baseline.comprehension)?x.baseline:null,tempoStreak:Number.isInteger(x.tempoStreak)&&x.tempoStreak>=0?Math.min(x.tempoStreak,1):0,reminder,prefs:cleanPrefs(x.prefs),celebrated:Array.isArray(x.celebrated)?x.celebrated.filter((k:any)=>typeof k==='string').slice(0,200):[],answerStreak:{current:num(x.answerStreak?.current,0,100000)??0,best:num(x.answerStreak?.best,0,100000)??0}};
}
