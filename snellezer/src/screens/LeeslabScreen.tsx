import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import * as Speech from 'expo-speech';
import {BackHeader, Button, Card, Icon, IconButton, Pill, ProgressBar, Row, Screen, T} from '../components/UI';
import {Illustration} from '../components/Illustration';
import {ReadingText} from '../components/ReadingText';
import {colors, fonts, ui} from '../design';
import {useApp} from '../state/AppProvider';
import {buildLabRounds, huntHit, LAB_LESSONS, LAB_MASTERY, LAB_ROUNDS, type LabData} from '../state/leeslab';
import labData from '../data/leeslab.json';

const DATA = labData as LabData;
const FLASH_MS = 1200;

function speak(word: string) {
  try { Speech.stop(); Speech.speak(word, {language: 'nl-NL', rate: .85}); } catch {}
}

/** Eén Leeslab-les van tien rondes. Nauwkeurigheid telt, snelheid niet. */
export function LeeslabScreen({lessonId, onClose}: {lessonId: string; onClose: () => void}) {
  const {state, finishLabLesson} = useApp();
  const lesson = LAB_LESSONS.find(l => l.id === lessonId) ?? LAB_LESSONS[0];
  const [seed, setSeed] = useState(() => Date.now());
  const rounds = useMemo(() => buildLabRounds(lesson, DATA, state.leeslab.review, seed), [lesson, seed]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<{key: string; correct: boolean}[]>([]);
  const [feedback, setFeedback] = useState<{correct: boolean; text: string} | null>(null);
  const [used, setUsed] = useState<number[]>([]);
  const [visible, setVisible] = useState(true);
  const [outcome, setOutcome] = useState<{score: number; mastered: boolean; firstMastery: boolean} | null>(null);
  const started = useRef(Date.now());
  const round = rounds[Math.min(index, rounds.length - 1)];
  const letters = useMemo(() => round.kind === 'hunt' ? Array.from(round.wrong) : [], [round]);
  const settings = {...state.settings, enabled: true};
  const built = round.kind === 'build' ? used.map(i => round.shuffled[i]) : [];

  useEffect(() => {
    setUsed([]); setVisible(true);
    if (round.kind === 'choose' && round.speak) speak(round.speak);
    if (round.kind === 'choose' && round.flash) { const id = setTimeout(() => setVisible(false), FLASH_MS); return () => clearTimeout(id); }
  }, [index, seed]);
  useEffect(() => () => { try { Speech.stop(); } catch {} }, []);

  function answer(correct: boolean, text: string) {
    if (feedback) return;
    const next = [...results, {key: round.key, correct}];
    setResults(next);
    setFeedback({correct, text});
    if (!correct && round.kind === 'choose' && round.speak) speak(round.answer);
    setTimeout(() => {
      setFeedback(null);
      if (index + 1 >= LAB_ROUNDS) setOutcome(finishLabLesson(lesson.id, next, Math.round((Date.now() - started.current) / 1000)));
      else setIndex(index + 1);
    }, correct ? 800 : 1700);
  }
  function tapPart(at: number) {
    if (feedback || round.kind !== 'build' || used.includes(at)) return;
    const next = [...used, at];
    setUsed(next);
    if (round.shuffled[at] !== round.parts[next.length - 1]) { answer(false, `Het woord is: ${round.parts.join(' · ')}`); return; }
    if (next.length === round.parts.length) answer(true, 'Goed gebouwd.');
  }
  function restart() { setSeed(Date.now()); setIndex(0); setResults([]); setOutcome(null); started.current = Date.now(); }

  if (outcome) return <Screen style={{maxWidth:620, alignItems:'center', paddingTop:40}}>
    <Pill label={outcome.mastered ? 'LES BEHEERST' : 'NOG EVEN OEFENEN'} icon={outcome.mastered ? 'check' : 'refresh'}/>
    <Illustration name="dyslexie" size={150}/>
    <T variant="title" style={{textAlign:'center'}}>{outcome.mastered ? 'Deze stap zit erin.' : 'Je bent op weg.'}</T>
    <Card style={{alignSelf:'stretch', alignItems:'center', gap:6, backgroundColor:colors.surface, borderWidth:0}}>
      <T variant="display" style={{fontSize:60, lineHeight:68}}>{outcome.score}%</T>
      <T variant="caption">goed · {LAB_MASTERY}% is beheerst</T>
    </Card>
    <T color={ui.muted} style={{textAlign:'center'}}>{outcome.mastered ? (outcome.firstMastery ? 'De volgende les is open. Je krijgt 30 lees-XP.' : 'Je had deze les al beheerst. Herhalen houdt het scherp.') : 'Woorden die fout gingen komen de volgende keer als eerste terug. Neem je tijd: nauwkeurig gaat voor snel.'}</T>
    <Button title={outcome.mastered ? 'Terug naar het Leeslab' : 'Probeer de les opnieuw'} icon="arrow" onPress={outcome.mastered ? onClose : restart} style={{alignSelf:'stretch'}}/>
    {!outcome.mastered && <Button title="Terug naar het Leeslab" secondary onPress={onClose} style={{alignSelf:'stretch'}}/>}
  </Screen>;

  return <Screen style={{maxWidth:680}}>
    <BackHeader title={lesson.title} onBack={onClose}/>
    <ProgressBar value={index / LAB_ROUNDS}/>
    <Row style={{justifyContent:'space-between'}}><Pill label={`RONDE ${index + 1} VAN ${LAB_ROUNDS}`}/><T variant="caption">{results.filter(r => r.correct).length} goed</T></Row>
    <T color={ui.muted}>{lesson.goal}</T>
    <Card style={{alignItems:'center', gap:20, paddingVertical:34, minHeight:220, justifyContent:'center'}}>
      {feedback ? <View style={{alignItems:'center', gap:14}} accessibilityLiveRegion="polite">
        <Icon name={feedback.correct ? 'checkcircle' : 'info'} size={44} color={feedback.correct ? colors.accent : ui.error}/>
        <T variant="heading" style={{textAlign:'center'}}>{feedback.text}</T>
      </View> : round.kind === 'choose' ? (
        round.speak ? <><T variant="label">Luister en kies het woord dat je hoort.</T><Pressable accessibilityRole="button" accessibilityLabel="Laat het woord nog eens horen" onPress={() => speak(round.speak!)} style={s.listen}><Icon name="volume" size={34} color={colors.accent}/></Pressable><T variant="caption">Tik om nog eens te luisteren</T></>
        : round.flash ? (visible ? <ReadingText text={round.flash} settings={settings} style={{fontSize:40, lineHeight:56, textAlign:'center'}}/> : <T variant="label">Welk woord zag je?</T>)
        : <ReadingText text={round.sentence!} settings={settings} style={{fontSize:24, lineHeight:38, textAlign:'center'}}/>
      ) : round.kind === 'hunt' ? <>
        <T variant="label">Welke letter klopt niet?</T>
        <View style={{flexDirection:'row', gap:8, flexWrap:'wrap', justifyContent:'center'}}>{letters.map((letter, i) => <Pressable key={i} accessibilityRole="button" accessibilityLabel={`Letter ${letter}, positie ${i + 1}`} onPress={() => answer(huntHit(round, i), huntHit(round, i) ? `Goed gezien: ${round.word}` : `Het woord is: ${round.word}`)} style={({pressed}) => [s.letter, {opacity: pressed ? .6 : 1}]}><T style={{fontFamily: state.settings.font === 'dyslexic' ? fonts.dyslexic : fonts.strong, fontSize:30}}>{letter}</T></Pressable>)}</View>
      </> : <>
        <T variant="label" style={{textAlign:'center'}}>{round.hint}</T>
        <View style={{flexDirection:'row', gap:8, minHeight:56, flexWrap:'wrap', justifyContent:'center'}}>{round.parts.map((_, i) => <View key={i} style={[s.slot, built[i] ? {backgroundColor:ui.forestSoft, borderColor:colors.accent} : null]}><T style={{fontFamily:fonts.strong, fontSize:22}}>{built[i] ?? ''}</T></View>)}</View>
      </>}
    </Card>
    {!feedback && round.kind === 'choose' && (!round.flash || !visible) && <View style={{gap:12}}>{round.options.map(o => <Button key={o} title={o} secondary onPress={() => answer(o === round.answer, o === round.answer ? 'Goed.' : `Het woord is: ${round.answer}`)}/>)}</View>}
    {!feedback && round.kind === 'build' && <View style={{flexDirection:'row', gap:10, flexWrap:'wrap', justifyContent:'center'}}>{round.shuffled.map((part, i) => <Button key={i} title={part} secondary disabled={used.includes(i)} onPress={() => tapPart(i)} style={{minWidth:90}}/>)}</View>}
    <T variant="caption" style={{textAlign:'center'}}>Het Leeslab oefent leesvaardigheden. Het vervangt geen dyslexieonderzoek of begeleiding.</T>
  </Screen>;
}

const s = StyleSheet.create({
  listen:{width:88, height:88, borderRadius:44, backgroundColor:ui.forestSoft, alignItems:'center', justifyContent:'center'},
  letter:{minWidth:52, height:64, paddingHorizontal:10, borderRadius:16, borderWidth:1, borderColor:ui.line, backgroundColor:colors.surface, alignItems:'center', justifyContent:'center'},
  slot:{minWidth:72, height:56, paddingHorizontal:12, borderRadius:14, borderWidth:1, borderStyle:'dashed', borderColor:ui.line, alignItems:'center', justifyContent:'center'},
});
