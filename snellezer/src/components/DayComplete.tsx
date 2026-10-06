import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Platform, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {T, Button, Card, Icon, Pill, Row, Screen} from './UI';
import {colors, ui} from '../design';
import {feel, useReduceMotion} from '../state/feedback';
import {effectiveWpm} from '../state/rules';
import {dateKey} from '../state/model';
import {lessonForDay, type Lesson} from '../data/lessons';
import {Celebration, type CelebrationSize} from './Celebration';
import {PathReport} from './PathReport';
import {useApp} from '../state/AppProvider';
import {consistency} from '../state/progress';
import {median, MEASURED_EXERCISES} from '../state/rules';
import type {SessionResult} from '../types';

const ARC = Animated.createAnimatedComponent(Circle);

/** Het slot van een lesdag: wat je deed, wat het opleverde en wat morgen komt. */
/** Weekmijlpalen: elke week een iets grotere viering. De eindviering na dag 28 is het grootst. */
const WEEK: Record<number, {size: CelebrationSize; title: string; body: string}> = {
  1: {size: 'medium', title: 'Week 1 voltooid', body: 'Je fundament staat: je weet hoe je leest en je hebt de eerste technieken geprobeerd.'},
  2: {size: 'large', title: 'Week 2 voltooid – je bent halverwege', body: 'Je blikveld is aan het groeien. Woordgroepen en perifeer zien worden steeds gewoner.'},
  3: {size: 'huge', title: 'Week 3 voltooid – nog één week', body: 'Snelheid mét begrip: precies wat je deze week hebt geoefend. De laatste week breng je alles samen.'},
};

export function DayComplete({day, lesson, lessonDone, sessions, streak, onClose}: {day: number; lesson: Lesson | null; lessonDone: boolean; sessions: readonly SessionResult[]; streak: number; onClose: () => void}) {
  const reduce = useReduceMotion();
  const {state, markCelebrated} = useApp();
  // Een mijlpaal viert maar één keer: bij de eerste keer dat de week rond is.
  const week = lesson && lessonDone && day % 7 === 0 ? day / 7 : 0;
  const key = week === 4 ? 'path-28' : week ? `week-${week}` : '';
  const [firstTime] = React.useState(() => !!key && !state.celebrated.includes(key));
  React.useEffect(() => { if (key && firstTime) markCelebrated(key); }, []);
  if (week === 4) return <PathComplete onClose={onClose} celebrate={firstTime} streak={streak}/>;
  const weekSessions = sessions.filter(s => Date.now() - new Date(s.date).getTime() < 7 * 86400000);
  const weekEff = weekSessions.filter(s => MEASURED_EXERCISES.includes(s.exerciseId) && s.comprehension !== null).map(s => effectiveWpm(s.wpm, s.comprehension!));
  const weekComp = weekSessions.filter(s => s.comprehension !== null).map(s => s.comprehension!);
  const weekDays = new Set(weekSessions.map(s => dateKey(s.date))).size;
  const today = sessions.filter(s => dateKey(s.date) === dateKey());
  const minutes = Math.max(1, Math.round(today.reduce((n, s) => n + s.durationSeconds, 0) / 60));
  const measured = today.filter(s => s.wpm > 0 && s.comprehension !== null).map(s => effectiveWpm(s.wpm, s.comprehension!));
  const best = measured.length ? Math.max(...measured) : null;
  const next = lesson && day < 28 ? lessonForDay(day + 1) : null;
  const size = 132, stroke = 10, r = (size - stroke) / 2, length = 2 * Math.PI * r;
  const share = lesson ? Math.min(1, day / 28) : 1;
  const fill = useRef(new Animated.Value(reduce ? share : Math.max(0, share - 1 / 28))).current;
  useEffect(() => {
    feel.done();
    if (reduce) { fill.setValue(share); return; }
    Animated.timing(fill, {toValue: share, duration: 900, delay: 250, easing: Easing.out(Easing.cubic), useNativeDriver: Platform.OS !== 'web'}).start();
  }, [reduce]);
  return <Screen style={{maxWidth:620}} footer={<Button title="Terug naar vandaag" icon="arrow" onPress={onClose}/>}>
    <View style={{alignItems:'center', gap:18, paddingTop:24}}>
      <View accessible accessibilityLabel={lesson ? `Dag ${day} van 28 gehaald` : 'Dagsessie gehaald'} style={{width:size, height:size, alignItems:'center', justifyContent:'center'}}>
        <Svg width={size} height={size} style={{position:'absolute', transform:[{rotate:'-90deg'}]}}>
          <Circle cx={size/2} cy={size/2} r={r} stroke={ui.track} strokeWidth={stroke} fill="none"/>
          <ARC cx={size/2} cy={size/2} r={r} stroke={colors.accent} strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={`${length} ${length}`} strokeDashoffset={fill.interpolate({inputRange:[0,1], outputRange:[length, 0]})}/>
        </Svg>
        {lesson ? <View style={{alignItems:'center'}}><T variant="stat" style={{fontSize:36, lineHeight:40}}>{day}</T><T variant="caption">van 28</T></View> : <Icon name="check" size={40} color={colors.accent}/>}
      </View>
      {lesson && lessonDone && <View style={{alignItems:'center'}}><Pill label={`LES ${day} GEHAALD`} icon="check"/></View>}
      <T variant="title" style={{textAlign:'center'}} accessibilityRole="header">{lesson ? (day >= 28 ? 'De leerweg zit erop.' : 'Mooi gedaan vandaag.') : 'Je dagsessie zit erop.'}</T>
    </View>
    <Row style={{gap:12}}>
      <Stat value={`${minutes}`} label={minutes === 1 ? 'minuut geoefend' : 'minuten geoefend'}/>
      {best !== null && <Stat value={`${best}`} label="effectief tempo"/>}
      <Stat value={`${streak}`} label={streak === 1 ? 'dag op rij' : 'dagen op rij'}/>
    </Row>
    {week > 0 && <Card style={{gap:12, backgroundColor:colors.tintSun, borderWidth:0}}>
      <Row><Icon name="trophy" size={20} color={colors.accent}/><T variant="label" style={{flex:1, fontSize:17}}>{WEEK[week].title}</T></Row>
      <T color={ui.muted}>{WEEK[week].body}</T>
      <Row style={{gap:10}}>
        <Stat value={weekEff.length ? `${median(weekEff)}` : '—'} label="effectief tempo deze week"/>
        <Stat value={weekComp.length ? `${Math.round(weekComp.reduce((a, b) => a + b, 0) / weekComp.length)}%` : '—'} label="begrip deze week"/>
        <Stat value={`${weekDays}/7`} label={consistency(weekEff) !== null ? `dagen · constantheid ${consistency(weekEff)}` : 'dagen geoefend'}/>
      </Row>
    </Card>}
    {lesson && <Card style={{gap:8, backgroundColor:ui.forestSoft, borderWidth:0}}>
      <T variant="eyebrow">WAT JE VANDAAG OEFENDE</T>
      <T variant="label" style={{fontSize:17}}>{lesson.title}</T>
      <T color={ui.muted}>{lesson.why}</T>
    </Card>}
    {next ? <Card style={{gap:8}}>
      <Row><Icon name="calendar" size={18} color={colors.accent}/><T variant="eyebrow">MORGEN · DAG {day + 1}</T></Row>
      <T variant="label" style={{fontSize:17}}>{next.title}</T>
      <T color={ui.muted}>{next.what}</T>
    </Card> : lesson ? <Card style={{gap:8}}><T variant="label">Je hebt alle 28 lessen gedaan.</T><T color={ui.muted}>Bekijk bij Voortgang wat de vier weken je hebben opgeleverd. De lessen blijven beschikbaar om te herhalen.</T></Card>
      : <T color={ui.muted} style={{textAlign:'center'}}>Morgen staat er weer een nieuwe voor je klaar.</T>}
    {week > 0 && firstTime && <Celebration size={WEEK[week].size}/>}
  </Screen>;
}

/** De eindviering na 28 dagen: groter dan de weekmijlpalen, met de vergelijking tussen dag 1 en dag 28. */
function PathComplete({onClose, celebrate, streak}: {onClose: () => void; celebrate: boolean; streak: number}) {
  const {state} = useApp();
  const [again, setAgain] = React.useState(0);
  return <Screen style={{maxWidth:680}} footer={<><Button title="Verder trainen en records verbeteren" icon="arrow" onPress={onClose}/></>}>
    <View style={{alignItems:'center', gap:14, paddingTop:20}}>
      <View style={{width:120, height:120, borderRadius:60, backgroundColor:colors.tintSun, alignItems:'center', justifyContent:'center'}}><Icon name="trophy" size={58} color={colors.accent}/></View>
      <Pill label="ACHIEVEMENT · 28 DAGEN VOLTOOID" icon="star" background={colors.tintSun} color={ui.forestInk}/>
      <T variant="title" style={{textAlign:'center'}} accessibilityRole="header">De leerweg zit erop.</T>
      <T color={ui.muted} style={{textAlign:'center', maxWidth:460}}>Vier weken, achtentwintig lessen. Hieronder zie je wat het je opleverde: je tempo, je begrip en hoe constant je nu leest.</T>
    </View>
    <PathReport state={state}/>
    <Row style={{gap:12}}><Stat value={`${streak}`} label={streak === 1 ? 'dag op rij' : 'dagen op rij'}/><Stat value={`${state.sessions.length}`} label="oefeningen gedaan"/></Row>
    <Card style={{gap:8}}><T variant="label">Hoe nu verder?</T><T color={ui.muted}>De lessen blijven beschikbaar om te herhalen. Probeer je records te verbeteren, met behoud van begrip. Een hoger tempo telt pas als je de inhoud meeneemt.</T></Card>
    <Button title="Speel de viering nog eens" secondary icon="sparkles" onPress={() => setAgain(n => n + 1)}/>
    {(celebrate || again > 0) && <Celebration key={again} size="grand"/>}
  </Screen>;
}

function Stat({value, label}: {value: string; label: string}) {
  return <View style={{flex:1, alignItems:'center', gap:2, paddingVertical:16, borderRadius:20, backgroundColor:ui.subtle}}><T variant="stat" style={{fontSize:26, lineHeight:32}}>{value}</T><T variant="caption" style={{textAlign:'center', fontSize:12}}>{label}</T></View>;
}
