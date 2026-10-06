import React,{useState} from 'react';
import {View,Pressable,useWindowDimensions} from 'react-native';
import {T,Card,Row,Icon,Pill,ProgressBar,Slider} from './UI';
import {colors,ui,fonts} from '../design';
import {useApp} from '../state/AppProvider';
import {pathProgress,TEMPO} from '../state/rules';
import {levelFor,streakTier,records,goalFor,STRETCH_GOAL,eyeWeek} from '../state/progress';

/** Level, reeksniveau, records met begrip en de vijf voortgangsbalken: leerweg, tempo, begrip, oogtraining en reeks. */
export function GrowthPanel(){
  const {state,stats,updatePrefs}=useApp();const wide=useWindowDimensions().width>=760;
  const level=levelFor(stats.totalXP),tier=streakTier(stats.streak),rec=records(state.sessions);
  const lessons=pathProgress(state.sessions).completed.length;
  const goal=goalFor(state);const [editGoal,setEditGoal]=useState(false);
  const now=stats.effectiveNow||0,start=stats.baselineEffective||0;
  const toGoal=goal>start?Math.max(0,Math.min(1,(now-start)/(goal-start))):now>=goal?1:0;
  const bar=(label:string,value:number,text:string,icon:string)=><View style={{gap:7}}><Row><Icon name={icon} size={16} color={colors.accent}/><T variant="label" style={{flex:1,fontSize:14}}>{label}</T><T variant="caption">{text}</T></Row><ProgressBar value={value} label={label}/></View>;
  return <View style={{gap:16}}>
    <View style={{flexDirection:wide?'row':'column',gap:16}}>
      <Card style={{flex:1,gap:12}}>
        <Row><View style={{width:48,height:48,borderRadius:24,backgroundColor:colors.tintSun,alignItems:'center',justifyContent:'center'}}><T variant="stat" style={{fontSize:22,lineHeight:28}}>{level.level}</T></View><View style={{flex:1,gap:2}}><T variant="eyebrow">LEVEL {level.level}</T><T variant="heading" style={{fontSize:21}}>{level.title}</T></View></Row>
        <ProgressBar value={level.share} label="Op weg naar het volgende level"/>
        <T variant="caption">{level.to?`${stats.totalXP} XP · nog ${level.to-stats.totalXP} tot ${level.nextTitle}`:`${stats.totalXP} XP · hoogste level bereikt`}</T>
        <T variant="caption">XP verdien je met afgeronde oefeningen, goed begrip, gehaalde lessen, uitdagingen en elke dag oefenen. Niet met alleen snel klikken.</T>
      </Card>
      <Card style={{flex:1,gap:12}}>
        <Row><View style={{width:48,height:48,borderRadius:24,backgroundColor:tier.color,alignItems:'center',justifyContent:'center'}}><Icon name={tier.icon} size={24} color="#FFFFFF"/></View><View style={{flex:1,gap:2}}><T variant="eyebrow">REEKS · {tier.title.toLocaleUpperCase('nl')}</T><T variant="heading" style={{fontSize:21}}>{stats.streak} {stats.streak===1?'dag':'dagen'} op rij</T></View></Row>
        <ProgressBar value={tier.share} color={tier.next?.color??tier.color} label="Op weg naar het volgende reeksniveau"/>
        <T variant="caption">{tier.next?`Nog ${tier.toNext} ${tier.toNext===1?'dag':'dagen'} tot ${tier.next.title}.`:'Het hoogste reeksniveau. Indrukwekkend.'} Per zeven dagen mag je één rustdag nemen.</T>
      </Card>
    </View>
    <Card style={{gap:16}}>
      <T variant="heading" style={{fontSize:22}}>Jouw voortgang</T>
      {bar('Leerweg',lessons/28,`${lessons} van 28 lessen`,'path')}
      {bar('Effectief tempo',toGoal,now?`${now} van ${goal}`:`doel ${goal}`,'zap')}
      {bar('Begrip',(stats.comprehension??0)/100,stats.comprehension===null?'nog niet gemeten':`${stats.comprehension}% · grens ${TEMPO.gate}%`,'book')}
      {bar('Oogtraining deze week',Math.min(1,eyeWeek(state.sessions)/5),`${eyeWeek(state.sessions)} van 5`,'eye')}
      {bar('Reeks',tier.share,tier.next?`${stats.streak} van ${tier.next.days} dagen`:`${stats.streak} dagen`,'flame')}
      <Pressable accessibilityRole="button" accessibilityState={{expanded:editGoal}} onPress={()=>setEditGoal(!editGoal)} style={{minHeight:44,justifyContent:'center'}}><T variant="label" color={colors.accent} style={{fontSize:13}}>{editGoal?'Klaar':'Pas je streefdoel aan'}  →</T></Pressable>
      {editGoal&&<View style={{gap:10}}>
        <Slider label="Streefdoel" value={goal} min={100} max={STRETCH_GOAL} step={10} unit="begrepen wpm" onChange={v=>updatePrefs({goalWpm:v})}/>
        <Row style={{gap:8,flexWrap:'wrap'}}>{[{l:'+30% van je start',v:Math.round(start*1.3/10)*10},{l:'+50%',v:Math.round(start*1.5/10)*10},{l:`Uitdaging: ${STRETCH_GOAL}`,v:STRETCH_GOAL}].filter(o=>o.v>=100).map(o=><Pressable key={o.l} accessibilityRole="button" onPress={()=>updatePrefs({goalWpm:o.v})} style={{paddingHorizontal:12,paddingVertical:8,minHeight:36,borderRadius:16,backgroundColor:goal===o.v?ui.forestSoft:colors.surface}}><T variant="caption" color={goal===o.v?colors.accent:ui.muted} style={{fontFamily:fonts.strong,fontSize:12}}>{o.l}</T></Pressable>)}</Row>
        <T variant="caption">Een streefdoel is een uitdaging, geen belofte. Iedereen groeit in zijn eigen tempo, en begrip gaat altijd voor: het doel telt in begrepen woorden per minuut.</T>
      </View>}
    </Card>
    <Card style={{gap:12}}>
      <T variant="heading" style={{fontSize:22}}>Persoonlijke records</T>
      {rec.effective?<Row><Icon name="trophy" color={colors.accent}/><View style={{flex:1}}><T variant="label">{rec.effective.value} begrepen woorden per minuut</T><T variant="caption">{rec.effective.wpm} wpm bij {rec.effective.comprehension}% begrip · {new Date(rec.effective.date).toLocaleDateString('nl-NL',{day:'numeric',month:'long'})}</T></View></Row>:<T variant="caption">Je eerste record komt na een meting met minstens {TEMPO.gate}% begrip.</T>}
      {rec.speed&&rec.effective&&rec.speed.value!==rec.effective.wpm&&<Row><Icon name="zap" color={colors.accent}/><View style={{flex:1}}><T variant="label">Hoogste tempo: {rec.speed.value} wpm</T><T variant="caption">bij {rec.speed.comprehension}% begrip</T></View></Row>}
      <Row style={{gap:8,flexWrap:'wrap'}}><Pill label={`langste reeks ${rec.streak} ${rec.streak===1?'dag':'dagen'}`} icon="flame" background={colors.surface} color={ui.muted}/>{rec.focus&&<Pill label={`focuswissel ${rec.focus}%`} icon="Crosshair" background={colors.surface} color={ui.muted}/>}<Pill label={`${state.answerStreak.best} vragen goed op rij`} icon="checkcircle" background={colors.surface} color={ui.muted}/></Row>
      <T variant="caption">Een record telt alleen met minstens {TEMPO.gate}% begrip. Zo blijft snelheid gekoppeld aan kwaliteit.</T>
    </Card>
  </View>;
}
