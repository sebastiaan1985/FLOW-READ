import React,{useState} from 'react';
import {View,LayoutChangeEvent,Text} from 'react-native';
import {colors,fonts,themed} from '../design';

const STAGE=300; // hoogte van het speelveld
const FONT=26;
/** Ruwe breedte van een woord, om het binnen het scherm te houden. */
const wordWidth=(w:string)=>w.length*FONT*.58+8;

/**
 * Perifeer zien: twee woorden staan op gelijke afstand links en rechts van een vast fixatiepunt.
 * `spread` is de afstand tussen de binnenkanten van de woorden, als percentage van de breedte van het speelveld.
 *
 * Tegen spooktekst: de woorden van de volgende ronde staan al klaar (onzichtbaar) tijdens het fixeren.
 * Bij de flits verandert alleen de zichtbaarheid, niet de tekst of de plek. Zo verschijnt er nooit eerst
 * een ander woord, een leeg vak of het vorige woord.
 */
export function PeripheralStage({left,right,spread,visible,dark,lift=0}:{left:string;right:string;spread:number;visible:boolean;dark?:boolean;lift?:number}){
  const [width,setWidth]=useState(0);
  const onLayout=(e:LayoutChangeEvent)=>setWidth(e.nativeEvent.layout.width);
  const room=Math.max(0,width/2-8-Math.max(wordWidth(left),wordWidth(right)));
  const offset=Math.min(room,Math.max(18,width*(spread/100)/2));
  const ink=dark?'#EEF3F1':colors.ink;
  const word=(text:string,side:'left'|'right')=>(
    <View pointerEvents="none" style={[st.slot,side==='left'?{right:width/2+offset,alignItems:'flex-end'}:{left:width/2+offset,alignItems:'flex-start'},{top:STAGE/2-FONT+lift}]}>
      <Text maxFontSizeMultiplier={1} style={{fontFamily:fonts.strong,fontSize:FONT,lineHeight:FONT*1.3,color:ink,opacity:visible?1:0}}>{text}</Text>
    </View>
  );
  return (
    <View style={st.stage} onLayout={onLayout} accessibilityLabel={visible?`${left} en ${right}`:'Kijk naar het fixatiepunt'}>
      {width>0&&word(left,'left')}
      <View style={st.fixation}><View style={[st.dot,{backgroundColor:colors.accent}]}/></View>
      {width>0&&word(right,'right')}
    </View>
  );
}

const st=themed(()=>({
  stage:{height:STAGE,width:'100%',alignItems:'center',justifyContent:'center'},
  slot:{position:'absolute'},
  fixation:{width:44,height:44,alignItems:'center',justifyContent:'center'},
  dot:{width:12,height:12,borderRadius:6},
}));
