import React,{createContext,useContext,useEffect,useMemo,useRef,useState,ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {Account,AppState,Exercise,Profile,ReadingSettings,SavedText,SessionResult} from '../types';
import {getExercise} from '../data/content';
import {initialState,deriveStats,appendSession,hydrate,dateKey} from './model';
import {pathProgress,lessonPlanIds,effectiveWpm,baselineTarget,MEASURED_EXERCISES,type TempoDecision} from './rules';
import type {BookMeta} from './books';
import {deleteBookContent} from './bookStore';
import {rememberAppearance} from './appearance';
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
 /** Inloggen: het account blijft op dit apparaat. Een lege naam vullen we met de voornaam van het account. */
 signIn:(account:Account)=>setState(s=>({...s,account,accountChoiceMade:true,profile:{...s.profile,name:s.profile.name||account.name?.split(' ')[0]||''}})),
 skipSignIn:()=>setState(s=>({...s,accountChoiceMade:true})),
 signOut:()=>setState(s=>({...s,account:null,accountChoiceMade:true})),
 showSignIn:()=>setState(s=>({...s,accountChoiceMade:false})),
 setTestMode:(testMode:boolean)=>setState(s=>({...s,testMode})),
 updateSettings:(partial:Partial<ReadingSettings>)=>setState(s=>({...s,settings:{...s.settings,...partial}})),
 setKidsMode:(kidsMode:boolean)=>setState(s=>({...s,kidsMode,targetWpm:kidsMode?Math.min(s.targetWpm,130):s.targetWpm})),
 setTargetWpm:(targetWpm:number)=>setState(s=>({...s,targetWpm:Math.max(60,Math.min(800,targetWpm))})),
 setBaseline:(baseline:{wpm:number;comprehension:number})=>setState(s=>({...s,baseline,targetWpm:baselineTarget(baseline.wpm,s.kidsMode)})),
 /** Bewaart een sessie. Met `decision` krijgt de volgende oefening precies het tempo dat in de melding stond. */
 addSession:(result:SessionResult,decision?:TempoDecision)=>setState(s=>appendSession(s,result,decision)),
 saveText:({title,text,questions}:{title:string;text:string;questions?:SavedText['questions']})=>{const entry:SavedText={id:createId(),title:title.trim()||'Mijn tekst',text:text.trim(),createdAt:new Date().toISOString(),...(questions&&questions.length?{questions}:{})};setState(s=>({...s,texts:[...s.texts,entry]}));return entry;},
 deleteText:(id:string)=>setState(s=>({...s,texts:s.texts.filter(t=>t.id!==id)})),
 setReminder:(reminder:AppState['reminder'])=>setState(s=>({...s,reminder})),
 setTopTechniques:(topTechniques:string[])=>setState(s=>({...s,topTechniques:topTechniques.slice(0,3)})),
 dismissInstallHint:()=>setState(s=>({...s,installHintDismissed:true})),
 setAppearance:(appearance:AppState['appearance'])=>{rememberAppearance(appearance);setState(s=>({...s,appearance}));},
 addBook:(meta:BookMeta)=>setState(s=>({...s,books:[...s.books.filter(b=>b.id!==meta.id),meta]})),
 /** Zet de bladwijzer: na het lezen vooruit, of naar een gekozen hoofdstuk. */
 setBookPosition:(id:string,position:number,readWords:number)=>setState(s=>({...s,books:s.books.map(b=>b.id===id?{...b,position:Math.max(0,Math.min(b.paragraphs,position)),readWords:Math.max(0,Math.min(b.words,readWords)),lastReadAt:new Date().toISOString()}:b)})),
 deleteBook:(id:string)=>{setState(s=>({...s,books:s.books.filter(b=>b.id!==id)}));deleteBookContent(id);},
 resetProgress:()=>setState(s=>({...s,sessions:[],baseline:null,tempoStreak:0,targetWpm:s.kidsMode?130:200,celebrated:[]})),
 /** Een oefenvoorkeur bewaren, zoals de flitstijd bij Perifeer zien. */
 updatePrefs:(partial:Partial<AppState['prefs']>)=>setState(s=>({...s,prefs:{...s.prefs,...partial}})),
 /** Een mijlpaal is gevierd; hij speelt daarna niet opnieuw. */
 /** Een begripsvraag beantwoord: goede antwoorden op rij tellen door, ook over oefeningen heen. */
 answerQuestion:(correct:boolean)=>setState(s=>{const current=correct?s.answerStreak.current+1:0;return {...s,answerStreak:{current,best:Math.max(s.answerStreak.best,current)}};}),
 markCelebrated:(key:string)=>setState(s=>s.celebrated.includes(key)?s:{...s,celebrated:[...s.celebrated,key]}),
 };
}
const Context=createContext<ReturnType<typeof useStore>|null>(null);
export function AppProvider({children}:{children:ReactNode}){return <Context.Provider value={useStore()}>{children}</Context.Provider>;}
export function useApp(){const c=useContext(Context);if(!c)throw new Error('AppProvider missing');return c;}
/** Vandaag in de leerweg: de les, de drie oefeningen en of de les al gehaald is. Kinderen krijgen een eigen, speelse dagtraining. */
export function dailyLesson(state:AppState,now=new Date(),dayOverride?:number):{lesson:Lesson|null;plan:Exercise[];day:number;doneToday:boolean;finished:boolean}{
 const progress=pathProgress(state.sessions,now);
 // Testmodus: een gekozen lesdag openen, los van de kalender.
 if(dayOverride){const l=lessonForDay(dayOverride);return {lesson:l,plan:lessonPlanIds(l,state.sessions).map(getExercise),day:l.day,doneToday:false,finished:progress.finished};}
 if(state.kidsMode)return {lesson:null,plan:['sprint','wordflash','relax'].map(getExercise),day:progress.day,doneToday:progress.doneToday,finished:progress.finished};
 // Na dag 28 herhaal je de lessen, zodat er altijd een les van vandaag is.
 const reviewDay=2+(new Set(state.sessions.map(s=>dateKey(s.date))).size%27);
 const lesson=lessonForDay(progress.finished&&!progress.doneToday?reviewDay:progress.day);
 return {lesson,plan:lessonPlanIds(lesson,state.sessions).map(getExercise),day:lesson.day,doneToday:progress.doneToday,finished:progress.finished};
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
 {id:'week1',title:'Week 1',description:'Rond de eerste week van de leerweg af',icon:'Medal',unlocked:path.completed.includes(7)},
 {id:'week2',title:'Halverwege',description:'Rond week 2 van de leerweg af',icon:'Award',unlocked:path.completed.includes(14)},
 {id:'week3',title:'Week 3',description:'Rond week 3 van de leerweg af',icon:'Crown',unlocked:path.completed.includes(21)},
 {id:'path',title:'Leerweg voltooid',description:'Rond alle 28 lessen af',icon:'flag',unlocked:path.finished},
 {id:'fastgrip',title:'Sneller én begrepen',description:'Lees sneller dan je begintest met minstens 80% begrip',icon:'zap',unlocked:!!state.baseline&&state.sessions.some(x=>MEASURED_EXERCISES.includes(x.exerciseId)&&x.wpm>state.baseline!.wpm&&(x.comprehension??0)>=80)},
 {id:'record',title:'Recordhouder',description:'Verbeter je record met minstens 70% begrip',icon:'trophy',unlocked:state.sessions.filter(x=>MEASURED_EXERCISES.includes(x.exerciseId)&&(x.comprehension??0)>=70).length>=2&&(()=>{const ok=state.sessions.filter(x=>MEASURED_EXERCISES.includes(x.exerciseId)&&(x.comprehension??0)>=70);const first=effectiveWpm(ok[0].wpm,ok[0].comprehension);return ok.slice(1).some(x=>effectiveWpm(x.wpm,x.comprehension)>first);})()},
 {id:'eyes',title:'Scherpe ogen',description:'Doe 10 oogtrainingen',icon:'eye',unlocked:state.sessions.filter(x=>['eye','eight','focusswitch','peripheral'].includes(x.exerciseId)).length>=10},
 {id:'answers',title:'Op dreef',description:'Beantwoord 10 begripsvragen op rij goed',icon:'checkcircle',unlocked:state.answerStreak.best>=10},
 ];}
