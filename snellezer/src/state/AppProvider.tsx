import React,{createContext,useContext,useEffect,useMemo,useRef,useState,ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {AppState,Exercise,Profile,ReadingSettings,SavedText,SessionResult} from '../types';
import {getExercise} from '../data/content';
import {initialState,deriveStats,appendSession,hydrate,dateKey} from './model';
import {pathProgress,lessonPlanIds,effectiveWpm} from './rules';
import {finishLab} from './leeslab';
import {lessonForDay,type Lesson} from '../data/lessons';
export {dateKey,shiftDay} from './model';
const STORAGE='snellezer.v1';
export const createId=()=>`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;
function useStore(){
 const [state,setState]=useState<AppState>(initialState);const [ready,setReady]=useState(false);const [storageError,setStorageError]=useState('');const queue=useRef(Promise.resolve());
 useEffect(()=>{AsyncStorage.getItem(STORAGE).then(raw=>{try{setState(hydrate(raw));}catch{setStorageError('Opgeslagen gegevens konden niet worden gelezen. Je kunt opnieuw beginnen.');}}).catch(()=>setStorageError('Lokale opslag is niet beschikbaar. Je voortgang blijft alleen tijdens deze sessie bewaard.')).finally(()=>setReady(true));},[]);
 useEffect(()=>{if(!ready)return;queue.current=queue.current.then(()=>AsyncStorage.setItem(STORAGE,JSON.stringify(state))).catch(()=>setStorageError('Opslaan is niet gelukt. Houd de app open en controleer je vrije opslagruimte.'));},[state,ready]);
 const stats=useMemo(()=>deriveStats(state),[state]);const stateRef=useRef(state);stateRef.current=state;
 return {state,ready,storageError,stats,
 updateProfile:(partial:Partial<Profile>)=>setState(s=>({...s,profile:{...s.profile,...partial}})),
 updateSettings:(partial:Partial<ReadingSettings>)=>setState(s=>({...s,settings:{...s.settings,...partial}})),
 setKidsMode:(kidsMode:boolean)=>setState(s=>({...s,kidsMode,targetWpm:kidsMode?Math.min(s.targetWpm,130):s.targetWpm})),
 setTargetWpm:(targetWpm:number)=>setState(s=>({...s,targetWpm:Math.max(60,Math.min(800,targetWpm))})),
 setBaseline:(baseline:{wpm:number;comprehension:number})=>setState(s=>({...s,baseline,targetWpm:Math.max(s.kidsMode?60:80,Math.min(600,Math.round(baseline.wpm)))})),
 addSession:(result:SessionResult)=>setState(s=>appendSession(s,result)),
 saveText:({title,text,questions}:{title:string;text:string;questions?:SavedText['questions']})=>{const entry:SavedText={id:createId(),title:title.trim()||'Mijn tekst',text:text.trim(),createdAt:new Date().toISOString(),...(questions&&questions.length?{questions}:{})};setState(s=>({...s,texts:[...s.texts,entry]}));return entry;},
 deleteText:(id:string)=>setState(s=>({...s,texts:s.texts.filter(t=>t.id!==id)})),
 setReminder:(reminder:AppState['reminder'])=>setState(s=>({...s,reminder})),
 setTopTechniques:(topTechniques:string[])=>setState(s=>({...s,topTechniques:topTechniques.slice(0,3)})),
 dismissInstallHint:()=>setState(s=>({...s,installHintDismissed:true})),
 /** Rondt een Leeslab-les af: voortgang, herhaalset en één keer XP bij de eerste beheersing. */
 finishLabLesson:(lessonId:string,results:{key:string;correct:boolean}[],durationSeconds:number)=>{const outcome=finishLab(stateRef.current.leeslab,lessonId,results);const session:SessionResult={id:createId(),exerciseId:'leeslab',skill:'focus',wpm:0,comprehension:null,words:results.length,durationSeconds,date:new Date().toISOString(),xp:outcome.firstMastery?30:5};setState(s=>appendSession({...s,leeslab:finishLab(s.leeslab,lessonId,results).progress},session));return outcome;},
 resetProgress:()=>setState(s=>({...s,sessions:[],baseline:null,tempoStreak:0,targetWpm:s.kidsMode?130:200})),
 };
}
const Context=createContext<ReturnType<typeof useStore>|null>(null);
export function AppProvider({children}:{children:ReactNode}){return <Context.Provider value={useStore()}>{children}</Context.Provider>;}
export function useApp(){const c=useContext(Context);if(!c)throw new Error('AppProvider missing');return c;}
/** Vandaag in de leerweg: de les, de drie oefeningen en of de les al gehaald is. Kinderen krijgen een eigen, speelse dagtraining. */
export function dailyLesson(state:AppState,now=new Date()):{lesson:Lesson|null;plan:Exercise[];day:number;doneToday:boolean;finished:boolean}{
 const progress=pathProgress(state.sessions,now);
 if(state.kidsMode)return {lesson:null,plan:['sprint','wordflash','relax'].map(getExercise),day:progress.day,doneToday:progress.doneToday,finished:progress.finished};
 // Na dag 28 herhaal je de lessen, zodat er altijd een les van vandaag is.
 const reviewDay=2+(new Set(state.sessions.map(s=>dateKey(s.date))).size%27);
 const lesson=lessonForDay(progress.finished&&!progress.doneToday?reviewDay:progress.day);
 return {lesson,plan:lessonPlanIds(lesson).map(getExercise),day:lesson.day,doneToday:progress.doneToday,finished:progress.finished};
}
export function buildDailyPlan(state:AppState){return dailyLesson(state).plan;}
export function getBadges(state:AppState){const s=deriveStats(state);const path=pathProgress(state.sessions);return [
 {id:'first',title:'Eerste stap',description:'Rond je eerste oefening af',icon:'flag',unlocked:state.sessions.length>=1},
 {id:'three',title:'Op dreef',description:'Oefen op 3 verschillende dagen',icon:'flame',unlocked:s.completedDays>=3},
 {id:'understood',title:'Goed begrepen',description:'Behaal 100% op een begripstest',icon:'book',unlocked:state.sessions.some(x=>x.comprehension===100)},
 {id:'week',title:'Leesritme',description:'Oefen 7 dagen achter elkaar',icon:'calendar',unlocked:s.streak>=7},
 {id:'words',title:'Boekenwurm',description:'Lees 1.000 woorden',icon:'text',unlocked:s.totalWords>=1000},
 {id:'all',title:'Ontdekker',description:'Train alle vier de vaardigheden',icon:'search',unlocked:new Set(state.sessions.map(x=>x.skill)).size>=4},
 {id:'xp',title:'Volhouder',description:'Verzamel 500 XP',icon:'star',unlocked:s.totalXP>=500},
 {id:'month',title:'Eigen ritme',description:'Oefen op 28 verschillende dagen',icon:'trophy',unlocked:s.completedDays>=28},
 {id:'regression',title:'Niet meer terug',description:'Rond de les over terugspringen af',icon:'arrow',unlocked:path.completed.includes(3)},
 {id:'chunk3',title:'Drie in één blik',description:'Rond de les met drie woorden per blik af',icon:'eye',unlocked:path.completed.includes(9)},
 {id:'sharper',title:'Scherper dan dag 1',description:'Haal bij een hermeting een hoger effectief leestempo dan bij je begintest',icon:'chart',unlocked:!!state.baseline&&state.sessions.some(x=>x.exerciseId==='retest'&&effectiveWpm(x.wpm,x.comprehension)>s.baselineEffective)},
 {id:'path',title:'Leerweg voltooid',description:'Rond alle 28 lessen af',icon:'flag',unlocked:path.finished},
 ];}
