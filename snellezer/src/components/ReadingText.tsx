import React from 'react';
import {Text,TextStyle} from 'react-native';
import {fonts,readingInk,readingIsDark} from '../design';
import type {ReadingSettings} from '../types';
export function splitWord(word:string){return word.split(/(?<=[aeiouáéíóú])(?=[bcdfghjklmnpqrstvwxyz][aeiouáéíóú])/i);}
export function ReadingText({text,settings,style}:{text:string;settings:ReadingSettings;style?:TextStyle}){
 const x=settings;const enabled=x.enabled;const dark=readingIsDark(x);const color=readingInk(x);
 const family=enabled?(x.font==='dyslexic'?fonts.dyslexic:x.font==='comic'?fonts.comic:fonts.body):fonts.body;
 const size=enabled?x.fontSize:20;
 return <Text selectable style={[{fontFamily:family,fontSize:size,lineHeight:size*(enabled?x.lineHeight:1.75),letterSpacing:enabled?x.letterSpacing:0,color},style]}>{text.split(/(\s+)/).map((w,i)=>{if(/^\s+$/.test(w))return w.includes('\n')?w:' '.repeat(1+(enabled?x.wordSpacing:0));const parts=enabled&&x.syllables?splitWord(w):[w];return <Text key={i}>{parts.map((part,j)=><Text key={j} style={enabled&&x.syllables&&j%2?{color:dark?'#CDBFFA':'#7554A3'}:undefined}>{enabled&&x.bionic?<><Text style={{fontWeight:'700',fontFamily:x.font==='standard'?fonts.strong:family}}>{part.slice(0,Math.ceil(part.length/2))}</Text>{part.slice(Math.ceil(part.length/2))}</>:part}</Text>)}</Text>;})}</Text>;
}
export const overlayColors:Record<string,string>={none:'transparent',cream:'#F8D45C',blue:'#72B8F2',green:'#90CCA6',pink:'#F7B1CB',lilac:'#BCA6F0'};
