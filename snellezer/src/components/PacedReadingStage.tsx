import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {T} from './UI';
import {ReadingText} from './ReadingText';
import {colors,fonts,ui,themed,readingIsDark,readingInk,readingAccent} from '../design';
import type {ReadingSettings,ExerciseMode} from '../types';
import {fixationWindow,recognitionIndex} from './trainingModel';

export function PacedReadingStage({mode,words,cursor,chunk,settings,wide}:{mode:ExerciseMode;words:string[];cursor:number;chunk:number;settings:ReadingSettings;wide:boolean}) {
  const dark=readingIsDark(settings);
  const ink=readingInk(settings);
  const accent=readingAccent(settings);
  const size=settings.enabled?settings.fontSize+8:wide?42:30;
  const current=words.slice(cursor,cursor+chunk);
  if(mode==='fixation') {
    const row=fixationWindow(words,cursor,chunk);
    return <View style={{width:'100%',gap:26}}>
      <T variant="caption" style={{textAlign:'center'}}>Twee blikken per regel · volg het gemarkeerde punt</T>
      <View style={{flexDirection:'row',gap:12}}>{row.groups.map((group,i)=><View key={i} style={{flex:1,gap:18,alignItems:'center',paddingVertical:28,paddingHorizontal:4,borderRadius:20,backgroundColor:i===row.active?ui.forestSoft:'transparent',borderWidth:1,borderColor:i===row.active?colors.accent:'transparent'}}>
        <View style={{width:8,height:8,borderRadius:4,backgroundColor:i===row.active?colors.accent:ui.track}}/>
        <ReadingText text={group.join(' ')||' '} settings={settings} style={{fontSize:Math.min(size,wide?31:23),lineHeight:wide?48:36,textAlign:'center',color:i===row.active?colors.accent:ink}}/>
      </View>)}</View>
      <T variant="caption" style={{textAlign:'center'}}>Regel {Math.floor(row.rowStart/(chunk*2))+1} van {Math.ceil(words.length/(chunk*2))}</T>
    </View>;
  }
  if(mode==='forward') {
    const pageSize=chunk*8,pageStart=Math.floor(cursor/pageSize)*pageSize;
    const page=words.slice(pageStart,pageStart+pageSize);
    return <View style={{width:'100%',gap:20}}><T variant="caption" style={{textAlign:'center'}}>Blijf bij de markering. Gelezen woorden verdwijnen.</T><Text style={{fontFamily:fonts.body,fontSize:wide?27:22,lineHeight:wide?52:42,color:ink}}>{page.map((word,i)=>{
      const index=pageStart+i,active=index>=cursor&&index<cursor+chunk;
      return <Text key={index} style={{color:index<cursor?'transparent':active?accent:ink,backgroundColor:active?(dark?'#253C30':'#E7F0EB'):'transparent',fontFamily:active?fonts.strong:fonts.body}}>{word} </Text>;
    })}</Text></View>;
  }
  if(mode==='chunks')return <View style={{width:'100%',alignItems:'center',gap:28}}><T variant="caption">Neem de hele woordgroep in één blik op.</T><Text style={{fontFamily:fonts.body,fontSize:size,lineHeight:size*1.6,textAlign:'center',color:ink}}>{current.map((word,i)=><Text key={i} style={i===Math.floor(current.length/2)?{color:accent,fontFamily:fonts.strong}:undefined}>{i?' ':''}{word}</Text>)}</Text><View style={styles.marker}/></View>;
  // A fixed center column keeps the recognition letter still as words change.
  const word=current[0]||'',letters=Array.from(word),pivot=recognitionIndex(word);
  return <View style={{width:'100%',gap:22,alignItems:'center'}}><View style={styles.marker}/>{chunk===1?<View style={{flexDirection:'row',width:'100%',alignItems:'center',minHeight:80}}>
    <Text numberOfLines={1} adjustsFontSizeToFit style={{flex:1,textAlign:'right',fontFamily:fonts.body,fontSize:size,color:ink}}>{letters.slice(0,pivot).join('')}</Text>
    <Text style={{fontFamily:fonts.strong,fontSize:size,color:accent}}>{letters[pivot]||''}</Text>
    <Text numberOfLines={1} adjustsFontSizeToFit style={{flex:1,textAlign:'left',fontFamily:fonts.body,fontSize:size,color:ink}}>{letters.slice(pivot+1).join('')}</Text>
  </View>:<ReadingText text={current.join(' ')} settings={settings} style={{fontSize:size,lineHeight:size*1.6,textAlign:'center',color:accent}}/>}<View style={styles.marker}/><T variant="caption">{chunk===1?'Houd je blik bij de gekleurde letter.':'Houd je blik in het midden van de woordgroep.'}</T></View>;
}
const styles=themed(()=>({marker:{width:2,height:16,borderRadius:2,backgroundColor:'#9AAA9F'}}));
