import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
import {BackHeader, Button, Card, Choice, Icon, Pill, ProgressBar, Row, Screen, SectionHeading, T} from '../components/UI';
import {colors, ui} from '../design';
import {useApp} from '../state/AppProvider';
import {bookProgress, chapterAt, nextPortion, wordsBefore, type BookContent} from '../state/books';
import {loadBookContent} from '../state/bookStore';
import {READING_MODES} from './LibraryEditor';
import type {AppActions} from '../types';

const MINUTES = [5, 10, 15, 20];
function timeLeft(words: number, wpm: number) {
  const minutes = words / Math.max(60, wpm);
  if (minutes < 60) return `${Math.max(1, Math.round(minutes))} min`;
  return `${(Math.round(minutes / 6) / 10).toLocaleString('nl-NL')} uur`;
}

/** Een boek of PDF lezen in porties, met een bladwijzer die na elke sessie opschuift. */
export function BookScreen({bookId, initialMode, actions, onBack}: {bookId: string; initialMode?: string; actions: AppActions; onBack: () => void}) {
  const {state, setBookPosition, deleteBook} = useApp();
  const meta = state.books.find(b => b.id === bookId);
  const [content, setContent] = useState<BookContent | null | undefined>(undefined);
  const [mode, setMode] = useState<string>(initialMode ?? 'chunks');
  const [minutes, setMinutes] = useState(10);
  const [confirm, setConfirm] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  useEffect(() => { loadBookContent(bookId).then(setContent); }, [bookId]);
  const portion = useMemo(() => content && meta && meta.position < meta.paragraphs ? nextPortion(content, meta.position, state.targetWpm * minutes) : null, [content, meta?.position, minutes, state.targetWpm]);

  if (!meta) return <Screen style={{maxWidth: 760}}><BackHeader title="Jouw boek" onBack={onBack}/><T>Dit boek staat niet meer in je bibliotheek.</T></Screen>;
  const progress = bookProgress(meta);
  const chapter = chapterAt(meta, Math.min(meta.position, meta.paragraphs - 1));
  const left = Math.max(0, meta.words - meta.readWords);
  const finished = meta.position >= meta.paragraphs;
  const start = () => {
    if (!portion) return;
    const where = chapterAt(meta, portion.from);
    actions.onStart({
      exerciseId: mode,
      text: {id: `${meta.id}@${portion.from}`, title: where && where.title !== meta.title ? `${meta.title} · ${where.title}` : meta.title, text: portion.text, createdAt: new Date().toISOString()},
      book: {id: meta.id, from: portion.from, ends: portion.ends, startWords: meta.readWords},
    });
  };

  return <Screen style={{maxWidth: 760}}>
    <BackHeader title="Jouw boek" onBack={onBack}/>
    <View style={{gap: 8}}>
      <Row><Pill label={meta.format === 'pdf' ? 'PDF' : 'E-BOOK'} icon="book"/>{finished && <Pill label="UITGELEZEN" icon="check"/>}</Row>
      <T variant="title" style={{fontSize: 30, lineHeight: 36}}>{meta.title}</T>
      {!!meta.author && <T color={ui.muted}>{meta.author}</T>}
    </View>
    <Card style={{gap: 12, backgroundColor: ui.forestSoft, borderWidth: 0}}>
      <Row style={{justifyContent: 'space-between'}}><T variant="label">{Math.round(progress * 100)}% gelezen</T><T variant="caption">{meta.words.toLocaleString('nl-NL')} woorden</T></Row>
      <ProgressBar value={progress}/>
      <T variant="caption">{finished ? 'Je hebt dit boek helemaal gelezen.' : `${chapter ? chapter.title + ' · ' : ''}nog ongeveer ${timeLeft(left, state.targetWpm)} op jouw oefentempo`}</T>
    </Card>

    {content === undefined ? <Card style={{alignItems: 'center', padding: 30}}><ActivityIndicator color={colors.accent}/></Card>
    : content === null ? <Card style={{gap: 10}}><T variant="label">De tekst van dit boek is niet meer op dit apparaat.</T><T variant="caption">Dat gebeurt als de browsergegevens zijn gewist. Importeer het bestand opnieuw via je bibliotheek.</T></Card>
    : finished ? <Card style={{gap: 12}}><T variant="heading" style={{fontSize: 22}}>Uitgelezen.</T><T color={ui.muted}>Mooi werk. Wil je het nog eens lezen, bijvoorbeeld in een andere leesvorm?</T><Button title="Opnieuw beginnen" secondary icon="refresh" onPress={() => setBookPosition(meta.id, 0, 0)}/></Card>
    : <Card style={{gap: 18}}>
      <SectionHeading title="Verder lezen"/>
      <Choice label="Leesvorm" value={mode} options={READING_MODES.map(m => ({value: m.id, label: m.title}))} onChange={setMode}/>
      <Choice label="Hoe lang wil je lezen?" value={String(minutes)} options={MINUTES.map(m => ({value: String(m), label: `${m} min`}))} onChange={v => setMinutes(Number(v))}/>
      {portion && <View style={s.preview}><T variant="caption">Je begint bij</T><T numberOfLines={3} style={{fontSize: 15, lineHeight: 23}}>{content.paragraphs[portion.from]}</T><T variant="caption">{portion.ends[portion.ends.length - 1].toLocaleString('nl-NL')} woorden in deze sessie</T></View>}
      <Button title="Lees verder" icon="play" onPress={start}/>
      <T variant="caption">Je bladwijzer schuift op tot waar je bent gekomen, ook als je eerder stopt.</T>
    </Card>}

    {content && meta.chapters.length > 1 && <Card style={{gap: 8}}>
      <Pressable accessibilityRole="button" accessibilityState={{expanded: showChapters}} onPress={() => setShowChapters(!showChapters)} style={{flexDirection: 'row', alignItems: 'center', minHeight: 44}}>
        <T variant="heading" style={{fontSize: 21, flex: 1}}>Hoofdstukken · {meta.chapters.length}</T><Icon name={showChapters ? 'minus' : 'plus'} size={18} color={ui.dim}/>
      </Pressable>
      {showChapters && meta.chapters.map((c, i) => {
        const current = chapter?.para === c.para && !finished;
        return <Pressable key={i} accessibilityRole="button" accessibilityLabel={`Ga naar ${c.title}`} onPress={() => setBookPosition(meta.id, c.para, wordsBefore(content, c.para))} style={[s.chapter, current && {backgroundColor: ui.forestSoft}]}>
          <Icon name={c.para < meta.position && !current ? 'check' : current ? 'bookmark' : 'chevron'} size={16} color={colors.accent}/>
          <T style={{flex: 1, fontSize: 15}} numberOfLines={2}>{c.title}</T>
        </Pressable>;
      })}
    </Card>}

    <Card style={{gap: 12}}>
      {confirm ? <><T variant="label">Dit boek en je bladwijzer verwijderen?</T><Row><Button title="Bewaren" onPress={() => setConfirm(false)} style={{flex: 1}}/><Button title="Verwijderen" secondary onPress={() => { deleteBook(meta.id); onBack(); }} style={{flex: 1}}/></Row></>
      : <Button title="Boek verwijderen" secondary icon="trash" onPress={() => setConfirm(true)}/>}
      <T variant="caption">Je boek staat alleen op dit apparaat en wordt nergens naartoe gestuurd.</T>
    </Card>
  </Screen>;
}

const s = StyleSheet.create({
  preview: {padding: 16, gap: 8, borderRadius: 18, backgroundColor: ui.subtle},
  chapter: {flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12, borderRadius: 14, minHeight: 44},
});
