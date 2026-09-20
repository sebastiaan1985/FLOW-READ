import React,{createContext,useContext,useEffect,useMemo,useRef,useState,ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {AppState,Profile,ReadingSettings,SavedText,SessionResult,SkillId} from '../types';
import {EXERCISES,getExercise} from '../data/content';
import {initialState,deriveStats,appendSession,hydrate,dateKey} from './model';
export {dateKey,shiftDay} from './model';
const STORAGE='snellezer.v1';
export const createId=()=>`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;
function useStore(){
 const [state,setState]=useState<AppState>(initialState);const [ready,setReady]=useState(false);const [storageError,setStorageError]=useState('');const queue=useRef(Promise.resolve());
 useEffect(()=>{AsyncStorage.getItem(STORAGE).then(raw=>{try{setState(hydrate(raw));}catch{setStorageError('Opgeslagen gegevens konden niet worden gelezen. Je kunt opnieuw beginnen.');}}).catch(()=>setStorageError('Lokale opslag is niet beschikbaar. Je voortgang blijft alleen tijdens deze sessie bewaard.')).finally(()=>setReady(true));},[]);
 useEffect(()=>{if(!ready)return;queue.current=queue.current.then(()=>AsyncStorage.setItem(STORAGE,JSON.stringify(state))).catch(()=>setStorageError('Opslaan is niet gelukt. Houd de app open en controleer je vrije opslagruimte.'));},[state,ready]);
 const stats=useMemo(()=>deriveStats(state),[state]);
 return {state,ready,storageError,stats,
 updateProfile:(partial:Partial<Profile>)=>setState(s=>({...s,profile:{...s.profile,...partial}})),
 updateSettings:(partial:Partial<ReadingSettings>)=>setState(s=>({...s,settings:{...s.settings,...partial}})),
 setKidsMode:(kidsMode:boolean)=>setState(s=>({...s,kidsMode,targetWpm:kidsMode?Math.min(s.targetWpm,130):s.targetWpm})),
 setTargetWpm:(targetWpm:number)=>setState(s=>({...s,targetWpm:Math.max(60,Math.min(800,targetWpm))})),
 setBaseline:(baseline:{wpm:number;comprehension:number})=>setState(s=>({...s,baseline,targetWpm:Math.max(s.kidsMode?60:80,Math.min(600,Math.round(baseline.wpm*(baseline.comprehension<70?.9:1))))})),
 addSession:(result:SessionResult)=>setState(s=>appendSession(s,result)),
 saveText:({title,text}:{title:string;text:string})=>{const entry:SavedText={id:createId(),title:title.trim()||'Mijn tekst',text:text.trim(),createdAt:new Date().toISOString()};setState(s=>({...s,texts:[...s.texts,entry]}));return entry;},
 deleteText:(id:string)=>setState(s=>({...s,texts:s.texts.filter(t=>t.id!==id)})),
 resetProgress:()=>setState(s=>({...s,sessions:[],baseline:null,targetWpm:s.kidsMode?130:200})),
 };
}
const Context=createContext<ReturnType<typeof useStore>|null>(null);
export function AppProvider({children}:{children:ReactNode}){return <Context.Provider value={useStore()}>{children}</Context.Provider>;}
export function useApp(){const c=useContext(Context);if(!c)throw new Error('AppProvider missing');return c;}
export function buildDailyPlan(state:AppState){
 const history=state.sessions.filter(s=>dateKey(s.date)!==dateKey());
 const scores:Record<SkillId,number>={snelheid:0,begrip:0,blikveld:0,focus:0};history.forEach(s=>scores[s.skill]++);
 const weakest=(Object.keys(scores) as SkillId[]).sort((a,b)=>scores[a]-scores[b])[0];
 const lead=state.kidsMode?'sprint':({snelheid:'chunks',begrip:'reading',blikveld:'peripheral',focus:'paper'}[weakest]);
 return [getExercise(lead),getExercise(state.kidsMode?'wordflash':lead==='reading'?'chunks':'reading'),getExercise('relax')];
}
export function getBadges(state:AppState){const s=deriveStats(state);return [
 {id:'first',title:'Eerste stap',description:'Rond je eerste oefening af',icon:'flag',unlocked:state.sessions.length>=1},
 {id:'three',title:'Op dreef',description:'Oefen op 3 verschillende dagen',icon:'flame',unlocked:s.completedDays>=3},
 {id:'understood',title:'Goed begrepen',description:'Behaal 100% op een begripstest',icon:'book',unlocked:state.sessions.some(x=>x.comprehension===100)},
 {id:'week',title:'Leesritme',description:'Oefen 7 dagen achter elkaar',icon:'calendar',unlocked:s.streak>=7},
 {id:'words',title:'Boekenwurm',description:'Lees 1.000 woorden',icon:'text',unlocked:s.totalWords>=1000},
 {id:'all',title:'Ontdekker',description:'Train alle vier de vaardigheden',icon:'search',unlocked:new Set(state.sessions.map(x=>x.skill)).size>=4},
 {id:'xp',title:'Volhouder',description:'Verzamel 500 XP',icon:'star',unlocked:s.totalXP>=500},
 {id:'month',title:'Eigen ritme',description:'Oefen op 28 verschillende dagen',icon:'trophy',unlocked:s.completedDays>=28},
 ];}
