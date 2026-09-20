import React,{useState} from 'react';
import {View,StyleSheet,LayoutChangeEvent} from 'react-native';
import {T} from './UI';
import {colors,fonts,ui} from '../design';

const BOX=150;   // breedte van het vak waarin een woord gecentreerd staat
const STAGE=300; // hoogte van het speelveld

/**
 * Perifeer zien: twee woorden staan op gelijke afstand links en rechts van een
 * vast fixatiepunt. De afstand (spread) is een percentage van de beschikbare
 * breedte, zodat de oefening meegroeit met wat je aankan.
 */
export function PeripheralStage({left,right,spread,visible,dark}:{left:string;right:string;spread:number;visible:boolean;dark?:boolean}){
  const [width,setWidth]=useState(0);
  const onLayout=(e:LayoutChangeEvent)=>setWidth(e.nativeEvent.layout.width);
  // Houd de woorden binnen het scherm: het vak mag er niet half afvallen.
  const max=Math.max(0,width/2-BOX/2);
  const offset=Math.min(max,width*(spread/100)/2);
  const ink=dark?colors.bg:colors.ink;
  const word=(text:string,side:-1|1)=>(
    <View pointerEvents="none" style={[st.slot,{transform:[{translateX:side*offset-BOX/2},{translateY:-22}]}]}>
      <T style={{fontFamily:fonts.strong,fontSize:26,lineHeight:34,textAlign:'center',color:ink,opacity:visible?1:0}}>{text}</T>
    </View>
  );
  return (
    <View style={st.stage} onLayout={onLayout} accessibilityLabel={visible?`${left} en ${right}`:'Kijk naar het fixatiepunt'}>
      {width>0&&word(left,-1)}
      <View style={st.fixation}>
        <View style={[st.dot,{backgroundColor:colors.accent}]}/>
      </View>
      {width>0&&word(right,1)}
    </View>
  );
}

const st=StyleSheet.create({
  stage:{height:STAGE,width:'100%',alignItems:'center',justifyContent:'center'},
  slot:{position:'absolute',left:'50%',top:'50%',width:BOX,alignItems:'center'},
  fixation:{width:44,height:44,alignItems:'center',justifyContent:'center'},
  dot:{width:10,height:10,borderRadius:5},
});
