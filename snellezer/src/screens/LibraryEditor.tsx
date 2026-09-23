import React, {useRef, useState} from 'react';
import {Platform, Pressable, StyleSheet, TextInput, View, useWindowDimensions} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import {File} from 'expo-file-system';
import {BackHeader, Button, Card, Icon, IconButton, Pill, ProgressBar, Row, Screen, SectionHeading, T} from '../components/UI';
import {Illustration} from '../components/Illustration';
import {colors, fonts, ui} from '../design';
import {useApp} from '../state/AppProvider';
import type {AppActions, Question} from '../types';
import {articleUrlProblem} from '../state/url';
import {BookError, buildBook, bookProgress, MAX_BOOK_BYTES, parseEpub} from '../state/books';
import {saveBookContent} from '../state/bookStore';
import {parsePdf} from '../state/pdfWeb';
import {MAX_NATIVE_PDF_BYTES,useNativePdf} from '../state/pdfNative';
import {createId} from '../state/AppProvider';

export const READING_MODES = [
  {id:'chunks',title:'Woordgroepen',description:'Meerdere woorden in één blik',icon:'text'},
  {id:'rsvp',title:'Woord voor woord',description:'Eén vaste plek voor je blik',icon:'zap'},
  {id:'forward',title:'Vooruit lezen',description:'Volg de gemarkeerde woorden',icon:'arrow'},
  {id:'fixation',title:'Fixatie',description:'Lees rond een vast middelpunt',icon:'target'},
  {id:'reading',title:'Leestest',description:'Meet je eigen leestempo',icon:'book'},
  {id:'paper',title:'Leesgids',description:'Een gids langs elke regel',icon:'eye'},
] as const;
const emptyQuestion = ():Question => ({question:'',options:['','',''],answer:0});

function extractArticle(html:string) {
  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(html,'text/html');
    const pageTitle = doc.querySelector('h1')?.textContent || doc.title;
    doc.querySelectorAll('script,style,nav,header,footer,aside,form,noscript,svg,iframe,button').forEach(node=>node.remove());
    const article = doc.querySelector('article') || doc.querySelector('main') || doc.body;
    const blocks = Array.from(article.querySelectorAll('h1,h2,h3,p,li,blockquote')).map(node=>node.textContent?.trim()).filter(Boolean);
    return {title:pageTitle.trim(),text:(blocks.length?blocks.join('\n\n'):article.textContent||'').trim()};
  }
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '';
  const body = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] || html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
  const text = body.replace(/<(script|style|nav|header|footer|aside|noscript)[^>]*>[\s\S]*?<\/\1>/gi,'').replace(/<\/(p|div|h[1-6]|li|blockquote)>|<br\s*\/?\s*>/gi,'\n\n').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Math.min(0x10ffff,Number(n)))).replace(/[ \t]+/g,' ').replace(/\n\s*\n+/g,'\n\n').trim();
  return {title,text};
}

export function LibraryEditor({actions,initial,onBack=()=>actions.onTab('today')}:{actions:AppActions;initial?:{title:string;text:string;url:string};onBack?:()=>void}) {
  const {state,saveText,deleteText,addBook} = useApp();
  const nativePdf = useNativePdf();
  const [bookStatus,setBookStatus] = useState('');
  const wide = useWindowDimensions().width>=760;
  // Een gedeeld artikel: genoeg tekst wordt meteen ingevuld, anders staat de link klaar om op te halen.
  const sharedText = initial ? initial.text.replace(initial.url, '').trim() : '';
  const sharedIsArticle = sharedText.split(/\s+/).filter(Boolean).length >= 20;
  const sharedUrl = initial ? (initial.url || initial.text.match(/https:\/\/\S+/)?.[0] || '') : '';
  const [title,setTitle] = useState(initial?.title ?? '');
  const [text,setText] = useState(sharedIsArticle ? sharedText : '');
  const [url,setUrl] = useState(sharedUrl);
  const [questions,setQuestions] = useState<Question[]>([]);
  const [mode,setMode] = useState<string>('chunks');
  const [source,setSource] = useState<'paste'|'url'>(initial && !sharedIsArticle && sharedUrl ? 'url' : 'paste');
  const [error,setError] = useState('');
  const [notice,setNotice] = useState(initial ? (sharedIsArticle ? 'Gedeelde tekst staat klaar. Controleer hem en kies je leesvorm.' : sharedUrl ? 'De gedeelde link staat klaar. Haal het artikel op, of plak de tekst zelf.' : '') : '');
  const [busy,setBusy] = useState<'file'|'url'|null>(null);
  const [confirm,setConfirm] = useState<string|null>(null);
  const importing = useRef(false);
  const count = text.trim().split(/\s+/).filter(Boolean).length;
  const selected = READING_MODES.find(x=>x.id===mode)!;
  const changeQuestion = (index:number,patch:Partial<Question>) => setQuestions(previous=>previous.map((q,i)=>i===index?{...q,...patch}:q));
  const save = (start:boolean) => {
    setError('');setNotice('');
    if(count<10){setError('Voeg minimaal 10 woorden toe om te kunnen oefenen.');return;}
    if(text.length>100000){setError('Kies een tekst van maximaal 100.000 tekens.');return;}
    if(questions.some(q=>!q.question.trim()||q.options.some(o=>!o.trim()))){setError('Vul bij iedere vraag de vraag en alle drie de antwoorden in, of verwijder de vraag.');return;}
    if(questions.some(q=>new Set(q.options.map(o=>o.trim().toLocaleLowerCase('nl'))).size!==q.options.length)){setError('Gebruik bij iedere vraag drie verschillende antwoorden.');return;}
    const saved = saveText({title:title.trim(),text:text.trim(),questions:questions.map(q=>({...q,question:q.question.trim(),options:q.options.map(o=>o.trim())}))});
    setTitle('');setText('');setQuestions([]);setUrl('');
    if(start)actions.onStart({exerciseId:mode,text:saved});
    else setNotice(`“${saved.title}” staat in je bibliotheek.`);
  };
  const importFile = async() => {
    if(importing.current)return;
    importing.current=true;setBusy('file');setError('');setNotice('');
    try {
      const result = await DocumentPicker.getDocumentAsync({type:Platform.OS==='web'?['text/plain','application/pdf','application/epub+zip','.epub','.pdf','.txt']:['text/plain','application/pdf','application/epub+zip'],copyToCacheDirectory:true});
      if(!result.canceled){
        const asset=result.assets[0];
        const kind=/\.epub$/i.test(asset.name)||asset.mimeType==='application/epub+zip'?'epub':/\.pdf$/i.test(asset.name)||asset.mimeType==='application/pdf'?'pdf':'txt';
        if(kind!=='txt'){await importBook(asset,kind);return;}
        if((asset.size||0)>400000){setError('Kies een tekstbestand kleiner dan 400 KB.');return;}
        const contents=Platform.OS==='web'&&asset.file?await asset.file.text():await new File(asset.uri).text();
        if(contents.length>100000){setError('Dit bestand bevat meer dan 100.000 tekens. Plak een korter deel hieronder.');return;}
        setText(contents);setTitle(asset.name.replace(/\.txt$/i,''));setQuestions([]);setSource('paste');
        setNotice('Tekst geladen. Controleer de inhoud en kies je leesvorm.');
      }
    }catch{setError('Het bestand kon niet worden geopend. Je kunt de tekst ook hieronder plakken.');}
    finally{importing.current=false;setBusy(null);}
  };
  /** E-book of PDF: tekst eruit halen, als boek bewaren en meteen openen. */
  const importBook = async(asset:DocumentPicker.DocumentPickerAsset,kind:'epub'|'pdf') => {
    if((asset.size||0)>MAX_BOOK_BYTES){setError('Kies een bestand kleiner dan 60 MB.');return;}
    try {
      setBookStatus(kind==='pdf'?'PDF openen…':'E-book openen…');
      const progress=(page:number,pages:number)=>setBookStatus(`Pagina ${page} van ${pages} lezen…`);
      let parsed;
      if(kind==='pdf'&&Platform.OS!=='web'){
        if((asset.size||0)>MAX_NATIVE_PDF_BYTES){setBookStatus('');setError('In de app lezen we PDF’s tot 30 MB. Grotere bestanden kun je in de webversie openen.');return;}
        parsed=await nativePdf.parse(await new File(asset.uri).base64(),asset.name,progress);
      }else{
        const bytes=Platform.OS==='web'&&asset.file?new Uint8Array(await asset.file.arrayBuffer()):await new File(asset.uri).bytes();
        // Even ademruimte geven, zodat de melding in beeld komt voor het zware werk begint.
        await new Promise(r=>setTimeout(r,30));
        parsed=kind==='epub'?parseEpub(bytes):await parsePdf(bytes,asset.name,progress);
      }
      const {meta,content}=buildBook(parsed,kind,createId());
      setBookStatus('Bewaren…');
      await saveBookContent(meta.id,content);
      addBook(meta);
      setBookStatus('');
      actions.onBook(meta.id);
    } catch(e){
      setBookStatus('');
      setError(e instanceof BookError?e.message:'Dit bestand kon niet worden gelezen. Probeer een ander bestand, of plak de tekst hieronder.');
    }
  };
  const importUrl = async() => {
    if(importing.current)return;
    setError('');setNotice('');
    const problem=articleUrlProblem(url);
    if(problem){setError(problem);return;}
    const address=new URL(url.trim());
    importing.current=true;setBusy('url');
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),15000);
    try {
      const response=await fetch(address.href,{signal:controller.signal,credentials:'omit',redirect:'follow'});
      if(response.url&&articleUrlProblem(response.url)){setError('Deze link stuurt door naar een adres dat niet wordt opgehaald.');return;}
      if(!response.ok)throw new Error('fetch');
      const type=response.headers.get('content-type')||'';
      if(!/text\/(html|plain)|application\/xhtml\+xml/i.test(type)){setError('Deze link levert geen leesbare webpagina of tekst op. Kopieer de tekst en plak hem hieronder.');return;}
      if(Number(response.headers.get('content-length')||0)>2000000){setError('Deze pagina is te groot om te importeren. Plak alleen het artikel hieronder.');return;}
      const content=await response.text();
      if(content.length>2000000){setError('Deze pagina is te groot om te importeren. Plak alleen het artikel hieronder.');return;}
      const article=/text\/plain/i.test(type)?{title:address.hostname,text:content}:extractArticle(content);
      if(article.text.trim().split(/\s+/).length<10){setError('Op deze pagina is te weinig artikeltekst gevonden. Kopieer het artikel en plak het hieronder.');return;}
      if(article.text.length>100000){setError('Het artikel is te lang. Plak een deel van maximaal 100.000 tekens hieronder.');return;}
      setTitle(article.title.slice(0,100));setText(article.text);setQuestions([]);
      setNotice('Artikel geladen. Controleer de tekst: menu’s of bijschriften kunnen zijn meegekomen.');
    }catch{setError(Platform.OS==='web'?'Deze website laat direct ophalen mogelijk niet toe (CORS), is niet bereikbaar of reageert te langzaam. Kopieer de artikeltekst en plak die hieronder.':'Deze pagina kon niet worden opgehaald. Kopieer de artikeltekst en plak die hieronder.');}
    finally{clearTimeout(timeout);importing.current=false;setBusy(null);}
  };

  return <Screen style={{maxWidth:900}}>{nativePdf.element}
    <BackHeader title="Jouw bibliotheek" onBack={onBack}/>
    <Row style={{gap:20}}><Illustration name="eigen-tekst" size={wide?112:85}/><View style={{flex:1,gap:8}}><T variant="title" style={{fontSize:wide?38:29}}>Jouw tekst. Meer eruit halen.</T><T color={ui.muted}>Train met een artikel, studietekst of je eigen verhaal. Ook e-books en PDF's. Alles wat je bewaart blijft op dit apparaat.</T></View></Row>
    <Card style={{gap:16}}><SectionHeading title="Kies je leesvorm"/><View style={styles.modeGrid}>{READING_MODES.map(option=><Pressable key={option.id} accessibilityRole="button" accessibilityLabel={option.title} accessibilityState={{selected:mode===option.id}} onPress={()=>setMode(option.id)} style={[styles.mode,{width:wide?'31.8%':'48%',borderColor:mode===option.id?colors.accent:ui.line,backgroundColor:mode===option.id?ui.forestSoft:colors.bg}]}><Row style={{justifyContent:'space-between'}}><Icon name={option.icon} color={colors.accent} size={20}/>{mode===option.id&&<Icon name="checkcircle" color={colors.accent} size={17}/>}</Row><T variant="label">{option.title}</T><T variant="caption" style={{fontSize:12}}>{option.description}</T></Pressable>)}</View><T variant="caption">Deze leesvorm gebruik je voor je nieuwe én bewaarde teksten. Je tempo stel je in voor je begint.</T></Card>
    <Card style={{gap:18}}>
      <SectionHeading title="Nieuwe tekst toevoegen"/>
      <Row style={{flexWrap:'wrap',gap:8}}>{[{id:'paste',title:'Plakken',icon:'text'},{id:'url',title:'Via een link',icon:'external'}].map(item=><Pressable key={item.id} accessibilityRole="button" accessibilityState={{selected:source===item.id}} onPress={()=>setSource(item.id as 'paste'|'url')} style={[styles.source,{backgroundColor:source===item.id?ui.forestSoft:colors.surface}]}><Icon name={item.icon} size={17} color={colors.accent}/><T variant="caption" color={colors.accent}>{item.title}</T></Pressable>)}<Pressable onPress={importFile} disabled={!!busy} accessibilityRole="button" accessibilityState={{disabled:!!busy}} style={styles.source}><Icon name="upload" size={17} color={colors.accent}/><T variant="caption" color={colors.accent}>{busy==='file'?'Openen…':'Boek, PDF of .txt'}</T></Pressable></Row>
      {source==='url'&&<View style={styles.urlBox}><T variant="label">Link naar het artikel</T><TextInput accessibilityLabel="Link naar het artikel" placeholder="https://…" placeholderTextColor={ui.dim} value={url} onChangeText={setUrl} autoCapitalize="none" autoCorrect={false} keyboardType="url" style={styles.input}/><Button title={busy==='url'?'Artikel ophalen…':'Haal artikel op'} onPress={importUrl} disabled={!!busy||!url.trim()} secondary icon="download"/><T variant="caption">De app haalt de pagina rechtstreeks op. Als de website dat blokkeert, kun je de tekst zelf kopiëren en hieronder plakken.</T></View>}
      <TextInput accessibilityLabel="Titel van je tekst" placeholder="Geef je tekst een titel" placeholderTextColor={ui.dim} value={title} onChangeText={setTitle} maxLength={100} style={styles.input}/>
      <TextInput accessibilityLabel="Jouw leestekst" placeholder="Plak hier je tekst…" placeholderTextColor={ui.dim} value={text} onChangeText={setText} multiline textAlignVertical="top" style={[styles.input,{height:240,lineHeight:26}]} maxLength={100001}/>
      <Row style={{justifyContent:'space-between'}}><Pill label={`${count.toLocaleString('nl-NL')} woorden`} icon="text"/><T variant="caption">{count?`circa ${Math.max(1,Math.round(count/200))} min lezen`:'Minimaal 10 woorden'}</T></Row>
      <View style={{height:1,backgroundColor:ui.line}}/>
      <View style={{gap:7}}><Row style={{justifyContent:'space-between'}}><T variant="label">Begripsvragen</T><Pill label="OPTIONEEL"/></Row><T variant="caption">Voeg je eigen vragen toe om na het lezen tekstbegrip te oefenen. Markeer bij elke vraag het juiste antwoord.</T></View>
      {questions.map((question,index)=><View key={index} style={styles.question}><Row><T variant="label" style={{flex:1}}>Vraag {index+1}</T><IconButton name="trash" label={`Verwijder vraag ${index+1}`} onPress={()=>setQuestions(previous=>previous.filter((_,i)=>i!==index))}/></Row><TextInput accessibilityLabel={`Vraag ${index+1}`} placeholder="Wat wil je over deze tekst vragen?" placeholderTextColor={ui.dim} value={question.question} onChangeText={value=>changeQuestion(index,{question:value})} style={styles.input} multiline maxLength={300}/>{question.options.map((option,answerIndex)=><Row key={answerIndex} style={{alignItems:'center'}}><Pressable accessibilityRole="radio" accessibilityState={{checked:question.answer===answerIndex}} accessibilityLabel={`Antwoord ${answerIndex+1} is juist voor vraag ${index+1}`} onPress={()=>changeQuestion(index,{answer:answerIndex})} style={[styles.answerMark,{backgroundColor:question.answer===answerIndex?colors.accent:colors.bg}]}>{question.answer===answerIndex?<Icon name="check" size={19} color={colors.bg}/>:<T variant="caption">{String.fromCharCode(65+answerIndex)}</T>}</Pressable><TextInput accessibilityLabel={`Vraag ${index+1}, antwoord ${answerIndex+1}`} placeholder={`Antwoord ${String.fromCharCode(65+answerIndex)}`} placeholderTextColor={ui.dim} value={option} onChangeText={value=>changeQuestion(index,{options:question.options.map((existing,i)=>i===answerIndex?value:existing)})} maxLength={200} style={[styles.input,{flex:1}]}/></Row>)}</View>)}
      {questions.length<8&&<Button title={questions.length?'Nog een vraag toevoegen':'Begripsvraag toevoegen'} secondary icon="plus" onPress={()=>setQuestions(previous=>[...previous,emptyQuestion()])}/>}
      <T variant="caption">{questions.length?'Zelfgemaakte vragen helpen bij het oefenen. Je kunt de antwoorden natuurlijk al kennen.':'Zonder vragen tonen we na deze tekst geen begripsscore.'}</T>
      {!!error&&<View style={styles.feedback}><Icon name="info" size={18} color={ui.error}/><T color={ui.error} variant="caption" accessibilityRole="alert" style={{flex:1}}>{error}</T></View>}
      {!!notice&&<View style={[styles.feedback,{backgroundColor:ui.forestSoft}]}><Icon name="checkcircle" color={colors.accent} size={18}/><T variant="caption" accessibilityLiveRegion="polite" style={{flex:1}}>{notice}</T></View>}
      <Button title={`Bewaar & start ${selected.title.toLocaleLowerCase('nl')}`} icon="arrow" onPress={()=>save(true)} disabled={!text.trim()||!!busy}/>
      <Button title="Alleen bewaren" secondary onPress={()=>save(false)} disabled={!text.trim()||!!busy}/>
    </Card>
    {!!bookStatus&&<View style={[styles.feedback,{backgroundColor:ui.forestSoft}]} accessibilityLiveRegion="polite"><Icon name="book" color={colors.accent} size={18}/><T variant="caption" style={{flex:1}}>{bookStatus}</T></View>}
    <SectionHeading title={`Mijn boeken${state.books.length?' · '+state.books.length:''}`}/>
    {state.books.length===0?<Card style={{gap:10,padding:24}}><Row><Icon name="book" color={colors.accent}/><T variant="label" style={{flex:1}}>Snellees je eigen boeken</T></Row><T variant="caption">Importeer een e-book (EPUB) of een PDF via Boek, PDF of .txt hierboven. Je leest het in porties van een paar minuten, met een bladwijzer die onthoudt waar je was. E-books met DRM en gescande PDF's kunnen niet worden gelezen.</T></Card>
    :[...state.books].sort((a,b)=>(b.lastReadAt??b.addedAt).localeCompare(a.lastReadAt??a.addedAt)).map(book=><Card key={book.id} onPress={()=>actions.onBook(book.id)} accessibilityLabel={`Open ${book.title}`} style={{gap:12}}><Row><View style={styles.bookIcon}><Icon name="book" color={colors.accent} size={20}/></View><View style={{flex:1,gap:3}}><T variant="label" numberOfLines={2}>{book.title}</T><T variant="caption">{[book.author,book.format==='pdf'?'PDF':'E-book'].filter(Boolean).join(' · ')}</T></View><T variant="label" color={colors.accent}>{Math.round(bookProgress(book)*100)}%</T></Row><ProgressBar value={bookProgress(book)}/></Card>)}
    <SectionHeading title={`Mijn teksten${state.texts.length?' · '+state.texts.length:''}`}/>
    {state.texts.length===0?<Card style={{alignItems:'center',gap:12,padding:32}}><Icon name="book" size={34} color={colors.accent}/><T variant="heading" style={{fontSize:23}}>Je volgende goede tekst begint hier.</T><T variant="caption" style={{textAlign:'center'}}>Bewaar een tekst hierboven en lees hem later opnieuw, in elke leesvorm.</T></Card>:state.texts.map(saved=><Card key={saved.id} style={{gap:17}}><Row><View style={{flex:1,gap:7}}><T variant="heading" style={{fontSize:23}}>{saved.title}</T><T variant="caption">{saved.text.trim().split(/\s+/).length.toLocaleString('nl-NL')} woorden · {saved.questions?.length?`${saved.questions.length} begripsvragen`:'Zonder begripsvragen'}</T></View><IconButton name="trash" label={`Verwijder ${saved.title}`} onPress={()=>setConfirm(saved.id)}/></Row><T numberOfLines={3} color={ui.muted}>{saved.text}</T>{confirm===saved.id?<View style={styles.urlBox}><T variant="label">Deze tekst definitief verwijderen?</T><T variant="caption">Je afgeronde leessessies blijven bewaard.</T><Row style={{flexWrap:'wrap'}}><Button title="Toch bewaren" onPress={()=>setConfirm(null)} style={{flexGrow:1}}/><Button title="Verwijder tekst" secondary onPress={()=>{deleteText(saved.id);setConfirm(null);}} style={{flexGrow:1}}/></Row></View>:<Button title={`Lees met ${selected.title.toLocaleLowerCase('nl')}`} icon="play" secondary onPress={()=>actions.onStart({exerciseId:mode,text:saved})}/>}</Card>)}
  </Screen>;
}
const styles=StyleSheet.create({
  modeGrid:{flexDirection:'row',flexWrap:'wrap',gap:10},mode:{minHeight:132,borderRadius:19,borderWidth:1,padding:15,gap:9},
  input:{fontFamily:fonts.body,fontSize:16,padding:16,borderRadius:16,borderWidth:1,borderColor:ui.line,backgroundColor:ui.subtle,color:colors.ink,minHeight:54},
  source:{minHeight:44,paddingHorizontal:15,paddingVertical:10,borderRadius:20,flexDirection:'row',alignItems:'center',gap:7,backgroundColor:colors.surface},
  urlBox:{padding:17,gap:12,borderRadius:20,backgroundColor:colors.surface},question:{padding:15,gap:12,borderRadius:20,backgroundColor:colors.surface},
  answerMark:{width:44,height:44,borderRadius:22,borderWidth:1,borderColor:ui.line,alignItems:'center',justifyContent:'center'},
  bookIcon:{width:42,height:42,borderRadius:14,backgroundColor:ui.forestSoft,alignItems:'center',justifyContent:'center'},
  feedback:{padding:15,backgroundColor:'#FFF1EA',borderRadius:16,flexDirection:'row',gap:10,alignItems:'flex-start'},
});
