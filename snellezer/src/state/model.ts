import type { AppState, SessionResult } from '../types';
export const initialState:AppState = {
 profile:{name:'',ageGroup:'adult',goal:'pleasure',onboardingComplete:false},
 settings:{enabled:false,font:'standard',fontSize:20,letterSpacing:0,wordSpacing:0,lineHeight:1.7,overlay:'none',overlayOpacity:20,background:'white',bionic:false,syllables:false,lineGuide:false},
 sessions:[],texts:[],targetWpm:200,kidsMode:false,baseline:null,
};
export const dateKey=(date:Date|string=new Date())=>{const d=typeof date==='string'?new Date(date):date;return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
export function shiftDay(offset:number,now=new Date()){const d=new Date(now);d.setDate(d.getDate()+offset);return dateKey(d);}
export function deriveStats(state:AppState,now=new Date()) {
 const all=state.sessions, measured=all.filter(s=>s.wpm>0 && ['baseline','reading','long'].includes(s.exerciseId));
 const reading=measured.length?measured:all.filter(s=>s.wpm>0);
 const recent=reading.slice(-7), checks=all.filter(s=>s.comprehension!==null).slice(-7);
 const days=new Set(all.map(s=>dateKey(s.date)));let streak=0;let offset=days.has(dateKey(now))?0:-1;
 while(days.has(shiftDay(offset,now))){streak++;offset--;}
 const averageWpm=recent.length?Math.round(recent.reduce((n,s)=>n+s.wpm,0)/recent.length):0;
 return {averageWpm,hasMeasured:measured.length>0,comprehension:checks.length?Math.round(checks.reduce((n,s)=>n+(s.comprehension||0),0)/checks.length):null,totalXP:all.reduce((n,s)=>n+s.xp,0),streak,totalWords:all.reduce((n,s)=>n+s.words,0),totalMinutes:Math.round(all.reduce((n,s)=>n+s.durationSeconds,0)/60),todaySessions:all.filter(s=>dateKey(s.date)===dateKey(now)),completedDays:days.size,improvement:state.baseline&&state.baseline.wpm?Math.round((averageWpm-state.baseline.wpm)/state.baseline.wpm*100):0,baselineWpm:state.baseline?.wpm||0};
}
export function appendSession(state:AppState,session:SessionResult):AppState {
 if(state.sessions.some(s=>s.id===session.id))return state;
 const clean={...session,wpm:Math.max(0,Math.round(session.wpm)),words:Math.max(0,Math.round(session.words)),durationSeconds:Math.max(0,session.durationSeconds),xp:Math.max(0,Math.round(session.xp))};
 const low=clean.comprehension!==null&&clean.comprehension<70;
 return {...state,sessions:[...state.sessions,clean],targetWpm:low?Math.max(state.kidsMode?60:80,Math.round(state.targetWpm*.9)):state.targetWpm};
}
export function hydrate(raw:string|null):AppState {
 if(!raw)return initialState;
 const x=JSON.parse(raw);
 if(!x||typeof x!=='object')throw new Error('Invalid state');
 const sessions=Array.isArray(x.sessions)?x.sessions.filter((s:any)=>s&&typeof s.id==='string'&&typeof s.exerciseId==='string'&&Number.isFinite(s.wpm)&&Number.isFinite(s.words)&&Number.isFinite(s.xp)&&Number.isFinite(s.durationSeconds)&&!isNaN(Date.parse(s.date))&&(s.comprehension===null||Number.isFinite(s.comprehension))):[];
 return {...initialState,profile:{...initialState.profile,...x.profile},settings:{...initialState.settings,...x.settings},sessions,texts:Array.isArray(x.texts)?x.texts.filter((t:any)=>t&&typeof t.id==='string'&&typeof t.title==='string'&&typeof t.text==='string'):[],targetWpm:Number.isFinite(x.targetWpm)?Math.max(60,Math.min(800,x.targetWpm)):200,kidsMode:!!x.kidsMode,baseline:x.baseline&&Number.isFinite(x.baseline.wpm)&&Number.isFinite(x.baseline.comprehension)?x.baseline:null};
}
