import React from 'react';
import {View,Share} from 'react-native';
import {T,Card,Row,Icon,Pill,Button} from './UI';
import {colors,ui} from '../design';
import {pathReport} from '../state/progress';
import type {AppState} from '../types';

/**
 * Dag 1 tegenover dag 28: snelheid, begrip en constantheid naast elkaar, met de trainingsdagen, je langste reeks
 * en je records. Zo zie je of je sneller bent gaan lezen zonder dat je begrip achteruitging.
 */
export function PathReport({state,compact=false}:{state:Pick<AppState,'sessions'|'baseline'>;compact?:boolean}){
  const r=pathReport(state);
  if(!r.start)return <Card style={{gap:8}}><T variant="label">Nog geen nulmeting</T><T variant="caption">Doe de begintest op dag 1. Daarmee vergelijken we straks je eindmeting.</T></Card>;
  const end=r.end;
  const row=(label:string,a:string,b:string,note?:string)=><Row style={{paddingVertical:9,borderTopWidth:1,borderTopColor:ui.line,gap:6}}><T color={ui.muted} numberOfLines={1} style={{flex:1,fontSize:14}}>{label}</T><T variant="label" style={{minWidth:40,textAlign:'right'}}>{a}</T><Icon name="arrow" size={12} color={ui.dim}/><T variant="label" style={{minWidth:40,textAlign:'right'}} color={colors.accent}>{b}</T><T variant="caption" numberOfLines={1} style={{width:50,textAlign:'right',fontSize:12}}>{note??''}</T></Row>;
  const pct=(n:number)=>`${n>=0?'+':''}${n}%`;
  const share=()=>Share.share({message:end?`In 28 dagen ging mijn leestempo van ${r.start!.wpm} naar ${end.wpm} woorden per minuut (${pct(r.wpmGainPct)}), met ${end.comprehension}% begrip. Getraind met Snellezer.`:`Ik train mijn leestempo met Snellezer.`}).catch(()=>{});
  return <Card style={{gap:6}}>
    <Row style={{justifyContent:'space-between'}}><T variant="eyebrow">DAG 1  →  {end?(end&&state.sessions.some(s=>s.exerciseId==='retest'&&s.lessonDay===28)?'DAG 28':'NU'):'NOG TE METEN'}</T>{end&&<Pill label={`${pct(r.wpmGainPct)} TEMPO`} icon="chart"/>}</Row>
    {end?<>
      {row('Leestempo',`${r.start.wpm}`,`${end.wpm}`,`${r.wpmGain>=0?'+':''}${r.wpmGain}`)}
      {row('Begrip',`${r.start.comprehension}%`,`${end.comprehension}%`,`${r.comprehensionChange>=0?'+':''}${r.comprehensionChange} pt`)}
      {row('Effectief',`${r.start.effective}`,`${end.effective}`,pct(r.effectiveGainPct))}
      {!compact&&r.sustainedEnd>0&&row('Duurzaam',`${r.sustainedStart}`,`${r.sustainedEnd}`,'mediaan')}
      {!compact&&r.consistencyEnd!==null&&row('Constantheid',r.consistencyStart===null?'—':`${r.consistencyStart}`,`${r.consistencyEnd}`,'/100')}
    </>:<T variant="caption">Je nulmeting: {r.start.wpm} woorden per minuut met {r.start.comprehension}% begrip. Op dag 7, 14, 21 en 28 meet je opnieuw.</T>}
    {!compact&&<View style={{flexDirection:'row',flexWrap:'wrap',gap:8,marginTop:10}}>
      <Pill label={`${r.daysTrained} trainingsdagen`} icon="calendar" background={colors.surface} color={ui.muted}/>
      <Pill label={`langste reeks ${r.longestStreak} ${r.longestStreak===1?'dag':'dagen'}`} icon="flame" background={colors.surface} color={ui.muted}/>
      {r.averageComprehension!==null&&<Pill label={`gemiddeld ${r.averageComprehension}% begrip`} icon="book" background={colors.surface} color={ui.muted}/>}
      {r.records.effective&&<Pill label={`record ${r.records.effective.wpm} wpm bij ${r.records.effective.comprehension}% begrip`} icon="trophy" background={colors.tintSun} color={ui.forestInk}/>}
    </View>}
    {!compact&&<T variant="caption" style={{marginTop:8}}>Duurzaam tempo is de mediaan van je eerste en laatste drie metingen, zodat één toevalstreffer geen vooruitgang lijkt. Constantheid zegt hoe dicht je metingen bij elkaar liggen.</T>}
    {!compact&&end&&<Button title="Deel je resultaat" icon="external" secondary onPress={share} style={{marginTop:10}}/>}
  </Card>;
}
