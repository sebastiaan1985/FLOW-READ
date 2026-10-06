import React,{useMemo,useState} from 'react';
import {View,Pressable,TextInput,Switch} from 'react-native';
import {T,Card,Icon,Button,Row,Pill} from './UI';
import {colors,fonts,ui,themed} from '../design';
import {wordCount,TOPIC_LABELS,LEVEL_LABELS} from '../data/content';
import {fetchArticle,ArticleError} from '../state/article';
import type {Passage,SavedText} from '../types';

export type PickerTab='library'|'mine'|'new';
export type PickedText={kind:'library';passage:Passage}|{kind:'own';text:SavedText};
const PAGE=25;

/**
 * Eén tekstkiezer voor elke oefening met tekst: uit de bibliotheek, uit Mijn teksten, of een eigen tekst plakken,
 * typen of via een link ophalen. Een nieuwe eigen tekst kun je meteen bewaren in Mijn teksten.
 */
export function TextPicker({current,library,texts,initialTab,onPickLibrary,onAuto,onPickOwn,onNew,minWords=30,note}:{
  current:{title:string;words:number;own:boolean;topic?:string;level?:number};
  library:readonly Passage[];texts:readonly SavedText[];initialTab?:PickerTab;
  onPickLibrary:(p:Passage)=>void;onAuto:()=>void;onPickOwn:(t:SavedText)=>void;onNew:(t:{title:string;text:string;keep:boolean})=>void;
  minWords?:number;note?:string;
}){
  const [tab,setTab]=useState<PickerTab|null>(initialTab??null);
  const [query,setQuery]=useState('');const [topic,setTopic]=useState<string|null>(null);const [level,setLevel]=useState<number|null>(null);const [shown,setShown]=useState(PAGE);
  const [title,setTitle]=useState('');const [text,setText]=useState('');const [url,setUrl]=useState('');const [keep,setKeep]=useState(true);const [busy,setBusy]=useState(false);const [error,setError]=useState('');const [fromLink,setFromLink]=useState(false);
  const topics=useMemo(()=>{const n=new Map<string,number>();library.forEach(p=>p.topic&&n.set(TOPIC_LABELS[p.topic]??p.topic,(n.get(TOPIC_LABELS[p.topic]??p.topic)||0)+1));return [...n.entries()].sort((a,b)=>b[1]-a[1]).map(([t])=>t);},[library]);
  const levels=useMemo(()=>[...new Set(library.map(p=>p.level).filter((l):l is number=>!!l))].sort(),[library]);
  const results=useMemo(()=>{const q=query.trim().toLocaleLowerCase('nl');return library.filter(p=>(!topic||(TOPIC_LABELS[p.topic??'']??p.topic)===topic)&&(!level||p.level===level)&&(!q||p.title.toLocaleLowerCase('nl').includes(q)||p.text.slice(0,400).toLocaleLowerCase('nl').includes(q)));},[library,query,topic,level]);
  const count=text.trim()?text.trim().split(/\s+/).length:0;
  const fetchLink=async()=>{setError('');setBusy(true);try{const a=await fetchArticle(url);setTitle(a.title);setText(a.text);setFromLink(false);}catch(e){setError(e instanceof ArticleError?e.message:'Deze pagina kon niet worden opgehaald. Plak de tekst hieronder.');}finally{setBusy(false);}};
  const useNew=()=>{setError('');if(count<minWords){setError(`Voeg minstens ${minWords} woorden toe om mee te oefenen.`);return;}if(text.length>100000){setError('Kies een tekst van maximaal 100.000 tekens.');return;}onNew({title:title.trim()||'Mijn tekst',text:text.trim(),keep});setTab(null);setTitle('');setText('');setUrl('');};
  const tabs:{id:PickerTab;label:string;icon:string}[]=[{id:'library',label:'Bibliotheek',icon:'library'},{id:'mine',label:`Mijn teksten${texts.length?` · ${texts.length}`:''}`,icon:'bookmark'},{id:'new',label:'Eigen tekst',icon:'plus'}];
  return <Card style={{gap:14,padding:18}}>
    <Row><View style={st.icon}><Icon name={current.own?'bookmark':'book'} size={18} color={colors.accent}/></View><View style={{flex:1,gap:2}}><T variant="caption">{current.own?'Jouw tekst':'Tekst uit de bibliotheek'}</T><T variant="label" numberOfLines={2}>{current.title}</T><T variant="caption" style={{fontSize:12}}>{[`${current.words} woorden`,current.topic&&(TOPIC_LABELS[current.topic]??current.topic),current.level&&LEVEL_LABELS[current.level]].filter(Boolean).join(' · ')}</T></View>{!current.own&&<Pressable accessibilityRole="button" accessibilityLabel="Kies automatisch een andere tekst" onPress={onAuto} style={st.small}><Icon name="refresh" size={16} color={colors.accent}/></Pressable>}</Row>
    <View style={st.tabs} accessibilityRole="tablist">{tabs.map(t=><Pressable key={t.id} accessibilityRole="tab" accessibilityState={{selected:tab===t.id}} onPress={()=>setTab(tab===t.id?null:t.id)} style={[st.tab,tab===t.id&&{backgroundColor:colors.bg,borderColor:colors.accent}]}><Icon name={t.icon} size={15} color={tab===t.id?colors.accent:ui.muted}/><T variant="caption" color={tab===t.id?colors.accent:ui.muted} style={{fontFamily:fonts.strong,fontSize:12}}>{t.label}</T></Pressable>)}</View>
    {!!note&&!tab&&<T variant="caption">{note}</T>}
    {tab==='library'&&<View style={{gap:12}}>
      <TextInput accessibilityLabel="Zoek een tekst" placeholder="Zoek op titel of onderwerp…" placeholderTextColor={ui.dim} value={query} onChangeText={v=>{setQuery(v);setShown(PAGE);}} style={st.input}/>
      <View style={st.chips}>{topics.slice(0,14).map(t=><Chip key={t} label={t} on={topic===t} onPress={()=>{setTopic(topic===t?null:t);setShown(PAGE);}}/>)}</View>
      {levels.length>1&&<View style={st.chips}>{levels.map(l=><Chip key={l} label={LEVEL_LABELS[l]||`Niveau ${l}`} on={level===l} onPress={()=>{setLevel(level===l?null:l);setShown(PAGE);}}/>)}</View>}
      <T variant="caption">{results.length} teksten</T>
      {results.slice(0,shown).map(p=><Pressable key={p.id} accessibilityRole="button" accessibilityLabel={`Kies ${p.title}`} onPress={()=>{onPickLibrary(p);setTab(null);}} style={({pressed})=>[st.item,{opacity:pressed?.7:1}]}><View style={{flex:1,gap:2}}><T variant="label" style={{fontSize:14}} numberOfLines={1}>{p.title}</T><T variant="caption" style={{fontSize:12}}>{[`${wordCount(p)} woorden`,p.topic&&(TOPIC_LABELS[p.topic]??p.topic),p.level&&LEVEL_LABELS[p.level]].filter(Boolean).join(' · ')}</T></View><Icon name="chevron" size={16} color={ui.dim}/></Pressable>)}
      {results.length>shown&&<Button title="Toon meer teksten" secondary onPress={()=>setShown(shown+PAGE)}/>}
    </View>}
    {tab==='mine'&&<View style={{gap:10}}>{texts.length===0?<T variant="caption">Je hebt nog geen eigen teksten bewaard. Voeg er een toe via Eigen tekst.</T>:[...texts].reverse().map(t=><Pressable key={t.id} accessibilityRole="button" accessibilityLabel={`Kies ${t.title}`} onPress={()=>{onPickOwn(t);setTab(null);}} style={({pressed})=>[st.item,{opacity:pressed?.7:1}]}><View style={{flex:1,gap:2}}><T variant="label" style={{fontSize:14}} numberOfLines={1}>{t.title}</T><T variant="caption" style={{fontSize:12}}>{wordCount(t)} woorden · {t.questions?.length?`${t.questions.length} eigen vragen`:'invulvragen uit je tekst'}</T></View><Icon name="chevron" size={16} color={ui.dim}/></Pressable>)}</View>}
    {tab==='new'&&<View style={{gap:12}}>
      <Row style={{gap:8}}><Chip label="Plakken of typen" on={!fromLink} onPress={()=>setFromLink(false)}/><Chip label="Via een link" on={fromLink} onPress={()=>setFromLink(true)}/></Row>
      {fromLink&&<View style={{gap:8}}><TextInput accessibilityLabel="Link naar een artikel" placeholder="https://…" placeholderTextColor={ui.dim} value={url} onChangeText={setUrl} autoCapitalize="none" autoCorrect={false} keyboardType="url" style={st.input}/><Button title={busy?'Artikel ophalen…':'Haal de tekst op'} icon="download" secondary disabled={busy||!url.trim()} onPress={fetchLink}/><T variant="caption">Alleen de lopende tekst komt mee; menu's en reclame laten we weg. Lukt het niet, plak dan de tekst zelf.</T></View>}
      <TextInput accessibilityLabel="Titel van je tekst" placeholder="Titel (mag leeg blijven)" placeholderTextColor={ui.dim} value={title} onChangeText={setTitle} maxLength={100} style={st.input}/>
      <TextInput accessibilityLabel="Jouw tekst" placeholder="Plak of typ hier je tekst…" placeholderTextColor={ui.dim} value={text} onChangeText={setText} multiline textAlignVertical="top" maxLength={100001} style={[st.input,{height:170,lineHeight:24}]}/>
      <Row style={{justifyContent:'space-between'}}><Pill label={`${count.toLocaleString('nl-NL')} woorden`} icon="text"/><Row style={{gap:8}}><T variant="caption">Bewaar in Mijn teksten</T><Switch accessibilityLabel="Bewaar in Mijn teksten" value={keep} onValueChange={setKeep} trackColor={{false:ui.track,true:colors.accent}} thumbColor={colors.bg}/></Row></Row>
      {!!error&&<T variant="caption" color={ui.error} accessibilityRole="alert">{error}</T>}
      <Button title="Oefen met deze tekst" icon="check" onPress={useNew} disabled={!text.trim()||busy}/>
      <T variant="caption">Na het lezen maakt de app een paar invulvragen uit zinnen van je tekst. Je tekst blijft op dit apparaat.</T>
    </View>}
  </Card>;
}
function Chip({label,on,onPress}:{label:string;on:boolean;onPress:()=>void}){return <Pressable accessibilityRole="button" accessibilityState={{selected:on}} onPress={onPress} style={[st.chip,on&&{backgroundColor:ui.forestSoft,borderColor:colors.accent}]}><T variant="caption" color={on?colors.accent:ui.muted} style={{fontSize:12,fontFamily:fonts.strong}}>{label}</T></Pressable>;}
const st=themed(()=>({
  icon:{width:36,height:36,borderRadius:18,backgroundColor:ui.forestSoft,alignItems:'center',justifyContent:'center'},
  small:{width:44,height:44,borderRadius:22,backgroundColor:colors.surface,alignItems:'center',justifyContent:'center'},
  tabs:{flexDirection:'row',flexWrap:'wrap',gap:6,padding:4,borderRadius:18,backgroundColor:colors.surface},
  tab:{flexGrow:1,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:6,minHeight:40,paddingHorizontal:10,borderRadius:14,borderWidth:1,borderColor:'transparent'},
  chips:{flexDirection:'row',flexWrap:'wrap',gap:6},
  chip:{paddingHorizontal:12,paddingVertical:8,minHeight:36,justifyContent:'center',borderRadius:16,borderWidth:1,borderColor:ui.line,backgroundColor:colors.bg},
  item:{flexDirection:'row',alignItems:'center',gap:10,paddingVertical:10,paddingHorizontal:12,borderRadius:14,backgroundColor:ui.subtle,minHeight:52},
  input:{fontFamily:fonts.body,fontSize:16,padding:14,borderRadius:14,borderWidth:1,borderColor:ui.line,backgroundColor:ui.subtle,color:colors.ink,minHeight:50},
}));
