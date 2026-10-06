import React,{useEffect,useRef} from 'react';
import {View} from 'react-native';
import * as Speech from 'expo-speech';
import Svg,{Circle} from 'react-native-svg';
import {T,Icon} from './UI';
import {colors,ui} from '../design';
import {feel} from '../state/feedback';

export type RelaxVariant='farnear'|'palming';
type Step={from:number;to:number;title:string;body:string;icon:string;say:string};
/** Ver – dichtbij – ver: elk 20 seconden. */
export const FAR_NEAR:Step[]=[
  {from:0,to:20,title:'Kijk in de verte',body:'Zoek een punt zo ver mogelijk weg: buiten, of aan de andere kant van de kamer.',icon:'Mountain',say:'Kijk in de verte.'},
  {from:20,to:40,title:'Kijk dichtbij',body:'Kijk naar je vingertop of je duim, een armlengte voor je gezicht.',icon:'Hand',say:'Kijk nu dichtbij, naar je vingertop.'},
  {from:40,to:60,title:'Weer in de verte',body:'Laat je blik weer ver weg rusten. Knipper gewoon.',icon:'Mountain',say:'En weer in de verte.'},
];
/** Palming: ogen dicht onder warme handen. Een rustmoment, geen behandeling. */
export const PALMING:Step[]=[
  {from:0,to:10,title:'Wrijf je handen warm',body:'Wrijf je handpalmen een paar tellen tegen elkaar.',icon:'Hand',say:'Wrijf je handen warm.'},
  {from:10,to:50,title:'Handen over je ogen',body:'Sluit je ogen en leg je holle handen eroverheen, zonder te drukken. Adem rustig. Je hoort het als je mag stoppen.',icon:'EyeOff',say:'Sluit je ogen en leg je handen eroverheen. Adem rustig.'},
  {from:50,to:60,title:'Rustig terug',body:'Haal je handen langzaam weg en open je ogen.',icon:'Eye',say:'Haal je handen langzaam weg en open je ogen.'},
];
export const relaxSteps=(v:RelaxVariant)=>v==='palming'?PALMING:FAR_NEAR;

/**
 * Een begeleid rustmoment in stappen. Bij elke wissel trilt de telefoon kort en, als je dat wilt, zegt een stem
 * wat je moet doen. Bij palming staat de stem standaard aan, want je ogen zijn dicht.
 */
export function RelaxStage({variant,seconds,paused,voice,ink}:{variant:RelaxVariant;seconds:number;paused:boolean;voice:boolean;ink:string}){
  const steps=relaxSteps(variant);
  const index=Math.max(0,steps.findIndex(s=>seconds<s.to));const step=steps[index]??steps[steps.length-1];
  const last=useRef(-1);
  useEffect(()=>{if(paused||index===last.current)return;last.current=index;if(index>0||seconds<1)feel.done();if(voice){Speech.stop();Speech.speak(step.say,{language:'nl-NL',rate:.95});}},[index,paused,voice]);
  useEffect(()=>()=>{Speech.stop();},[]);
  const left=Math.max(0,Math.ceil(step.to-seconds)),share=Math.min(1,(seconds-step.from)/(step.to-step.from));
  const size=200,stroke=10,r=(size-stroke)/2,length=2*Math.PI*r;
  return <View style={{alignItems:'center',gap:20,width:'100%'}}>
    <View style={{flexDirection:'row',gap:6}} accessibilityLabel={`Stap ${index+1} van ${steps.length}`}>{steps.map((_,i)=><View key={i} style={{width:i===index?28:10,height:10,borderRadius:5,backgroundColor:i<=index?colors.accent:ui.track}}/>)}</View>
    <View style={{width:size,height:size,alignItems:'center',justifyContent:'center'}}>
      <Svg width={size} height={size} style={{position:'absolute',transform:[{rotate:'-90deg'}]}}><Circle cx={size/2} cy={size/2} r={r} stroke={ui.track} strokeWidth={stroke} fill="none"/><Circle cx={size/2} cy={size/2} r={r} stroke={colors.accent} strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={`${length} ${length}`} strokeDashoffset={length*(1-share)}/></Svg>
      <Icon name={step.icon} size={46} color={colors.accent}/>
      <T variant="stat" style={{marginTop:6}} color={ink}>{left}</T>
    </View>
    <T variant="heading" style={{textAlign:'center'}} color={ink} accessibilityLiveRegion="polite">{step.title}</T>
    <T color={ui.muted} style={{textAlign:'center',maxWidth:420}}>{step.body}</T>
  </View>;
}
