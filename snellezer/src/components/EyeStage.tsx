import React,{useEffect,useRef,useState} from 'react';
import {View,StyleSheet,Animated,LayoutChangeEvent} from 'react-native';
import {colors,ui} from '../design';

export type EyeMode='lr'|'zigzag'|'expand'|'sprint';
export const EYE_MODES:{value:EyeMode;label:string}[]=[
 {value:'lr',label:'Links–rechts'},
 {value:'zigzag',label:'Zigzag'},
 {value:'expand',label:'Uitdijend'},
 {value:'sprint',label:'Sprint'},
];
const PAD=48, DOT=22, HEIGHT=220;

/** Baan van het puntje, overgenomen uit de vorige versie. */
function position(mode:EyeMode,t:number,w:number,h:number){
  const span=w-2*PAD;
  if(mode==='lr')     return {x:PAD+span*(.5+.5*Math.sin(t)), y:h/2};
  if(mode==='zigzag'){const row=Math.floor(t/Math.PI)%3;const s=row%2===0?Math.sin(t):-Math.sin(t);return {x:PAD+span*(.5+.5*s), y:h/4+row*(h/4)};}
  if(mode==='expand'){const amp=Math.min(.5,(t%(Math.PI*4))/(Math.PI*4))*.9;return {x:w/2+(w/2-PAD)*amp*Math.sin(t*3), y:h/2};}
  return {x:PAD+span*(.5+.5*Math.sin(t*2)), y:h/2+20*Math.sin(t*.7)};
}

/**
 * Oogtraining: een puntje dat een vaste baan volgt over gesimuleerde tekstregels.
 * De baan draait buiten React om, zodat hij vloeiend blijft.
 */
export function EyeStage({mode,speed,paused,reduceMotion}:{mode:EyeMode;speed:number;paused:boolean;reduceMotion:boolean}){
  const [size,setSize]=useState({w:0,h:HEIGHT});
  const x=useRef(new Animated.Value(0)).current;
  const y=useRef(new Animated.Value(HEIGHT/2)).current;
  const t=useRef(0);
  useEffect(()=>{
    if(!size.w) return;
    if(paused||reduceMotion){const p=position(mode,t.current,size.w,size.h);x.setValue(p.x-DOT/2);y.setValue(p.y-DOT/2);return;}
    let frame=0, last=Date.now();
    const step=()=>{
      const now=Date.now();
      t.current+=speed*0.008*Math.min(2,(now-last)/16.7); last=now;
      const p=position(mode,t.current,size.w,size.h);
      x.setValue(p.x-DOT/2); y.setValue(p.y-DOT/2);
      frame=requestAnimationFrame(step);
    };
    frame=requestAnimationFrame(step);
    return()=>cancelAnimationFrame(frame);
  },[mode,speed,paused,reduceMotion,size.w,size.h]);
  const onLayout=(e:LayoutChangeEvent)=>setSize({w:e.nativeEvent.layout.width,h:e.nativeEvent.layout.height});
  return (
    <View style={st.stage} onLayout={onLayout} accessibilityLabel="Oogtraining, volg het puntje">
      {[0,1,2].map(row=>(
        <View key={row} style={[st.line,{top:size.h/4+row*(size.h/4)-3}]}>
          {[68,44,92,56,76,38].map((w,i)=><View key={i} style={[st.block,{flexGrow:w,flexBasis:0}]}/>)}
        </View>
      ))}
      <Animated.View style={[st.dot,{transform:[{translateX:x},{translateY:y}]}]}/>
    </View>
  );
}

const st=StyleSheet.create({
  stage:{height:HEIGHT,width:'100%',borderRadius:24,backgroundColor:ui.subtle,overflow:'hidden'},
  line:{position:'absolute',left:PAD,right:PAD,flexDirection:'row',gap:10,alignItems:'center'},
  block:{height:7,borderRadius:4,backgroundColor:ui.track},
  dot:{position:'absolute',left:0,top:0,width:DOT,height:DOT,borderRadius:DOT/2,backgroundColor:colors.accent},
});
