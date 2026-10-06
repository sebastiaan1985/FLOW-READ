import React,{useEffect,useRef,useState} from 'react';
import {View,Animated,LayoutChangeEvent} from 'react-native';
import Svg,{Path} from 'react-native-svg';
import {Icon} from './UI';
import {colors,ui,themed} from '../design';

export type EyeMode='lr'|'ud'|'zigzag'|'jump'|'expand'|'sprint'|'eight'|'targets';
/** Patronen om te volgen. Het liggend achtje en de focuswissel hebben ook een eigen oefening. */
export const EYE_MODES:{value:EyeMode;label:string}[]=[
 {value:'lr',label:'Links–rechts'},
 {value:'ud',label:'Op–neer'},
 {value:'zigzag',label:'Zigzag'},
 {value:'jump',label:'Verspringen'},
 {value:'eight',label:'Liggend achtje'},
 {value:'targets',label:'Focuswissel'},
 {value:'expand',label:'Uitdijend'},
 {value:'sprint',label:'Sprint'},
];
const PAD=34, DOT=22, HEIGHT=300;
/** Hoe lang een sprongdoel blijft staan, in eenheden van de baantijd. Bij hogere snelheid springt het vaker. */
const HOLD=1.6;

/** Vaste pseudo-toevalsplek voor sprong nummer `n`: steeds een ander vak van een 3×3-raster. */
function cell(n:number){let h=Math.imul(n+1,2654435761)>>>0;h^=h>>>13;h=Math.imul(h,1274126177)>>>0;const c=h%9;return {cx:c%3,cy:Math.floor(c/3),star:(h>>>8)%4===0};}

/** Baan van het puntje. */
function position(mode:EyeMode,t:number,w:number,h:number){
  const span=w-2*PAD, high=h-2*PAD;
  switch(mode){
    case 'lr': return {x:PAD+span*(.5+.5*Math.sin(t)),y:h/2};
    case 'ud': return {x:w/2,y:PAD+high*(.5+.5*Math.sin(t))};
    case 'zigzag':{const row=Math.floor(t/Math.PI)%3;const s=row%2===0?Math.sin(t):-Math.sin(t);return {x:PAD+span*(.5+.5*s),y:h/4+row*(h/4)};}
    case 'expand':{const amp=Math.min(.5,(t%(Math.PI*4))/(Math.PI*4))*.9;return {x:w/2+(w/2-PAD)*amp*Math.sin(t*3),y:h/2};}
    case 'eight': return {x:w/2+(w/2-PAD)*Math.sin(t),y:h/2+(h/2-PAD)*Math.sin(2*t)};
    case 'jump': case 'targets':{const c=cell(Math.floor(t/HOLD));return {x:PAD+span*(c.cx/2),y:PAD+high*(c.cy/2)};}
    default: return {x:PAD+span*(.5+.5*Math.sin(t*2)),y:h/2+20*Math.sin(t*.7)};
  }
}

/**
 * Oogtraining: een puntje dat een baan volgt of verspringt. De baan draait buiten React om, zodat hij vloeiend blijft.
 * Met `ramp` versnelt het puntje geleidelijk tijdens de sessie (tot 1,8× na een minuut), zonder te schokken.
 * Bij de focuswissel is af en toe het doel een ster: `onTarget` meldt elk nieuw doel, zodat de oefening kan scoren.
 */
export function EyeStage({mode,speed,paused,reduceMotion,ramp=false,onTarget}:{mode:EyeMode;speed:number;paused:boolean;reduceMotion:boolean;ramp?:boolean;onTarget?:(index:number,star:boolean)=>void}){
  const [size,setSize]=useState({w:0,h:HEIGHT});
  const [star,setStar]=useState(false);
  const x=useRef(new Animated.Value(0)).current;
  const y=useRef(new Animated.Value(HEIGHT/2)).current;
  const t=useRef(0);const elapsed=useRef(0);const target=useRef(-1);
  const report=useRef(onTarget);report.current=onTarget;
  useEffect(()=>{
    if(!size.w) return;
    const place=()=>{const p=position(mode,t.current,size.w,size.h);x.setValue(p.x-DOT/2);y.setValue(p.y-DOT/2);
      if(mode==='jump'||mode==='targets'){const n=Math.floor(t.current/HOLD);if(n!==target.current){target.current=n;const c=cell(n);const s=mode==='targets'&&c.star;setStar(s);report.current?.(n,s);}}};
    if(paused){place();return;}
    let frame=0, last=Date.now();
    const step=()=>{
      const now=Date.now(),dt=Math.min(2,(now-last)/16.7);last=now;
      elapsed.current+=dt*16.7/1000;
      const boost=ramp?1+Math.min(.8,elapsed.current/60*.8):1;
      // Met minder beweging blijft het tempo laag en springt het puntje rustiger.
      t.current+=(reduceMotion?Math.min(speed,3):speed)*0.008*boost*dt;
      place();
      frame=requestAnimationFrame(step);
    };
    frame=requestAnimationFrame(step);
    return()=>cancelAnimationFrame(frame);
  },[mode,speed,paused,reduceMotion,ramp,size.w,size.h]);
  const onLayout=(e:LayoutChangeEvent)=>setSize({w:e.nativeEvent.layout.width,h:e.nativeEvent.layout.height});
  const lines=mode==='lr'||mode==='zigzag'||mode==='sprint'||mode==='expand';
  const grid=mode==='jump'||mode==='targets';
  const eight=mode==='eight'&&size.w>0?Array.from({length:73},(_,i)=>{const p=position('eight',i/72*Math.PI*2,size.w,size.h);return `${i?'L':'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;}).join(' '):'';
  return (
    <View style={st.stage} onLayout={onLayout} accessibilityLabel={mode==='targets'?'Focuswissel: volg het doel en tik op Ster als je een ster ziet':'Oogtraining, volg het puntje'}>
      {lines&&[0,1,2].map(row=>(
        <View key={row} style={[st.line,{top:size.h/4+row*(size.h/4)-3}]}>
          {[68,44,92,56,76,38].map((w,i)=><View key={i} style={[st.block,{flexGrow:w,flexBasis:0}]}/>)}
        </View>
      ))}
      {grid&&size.w>0&&[0,1,2].map(cy=>[0,1,2].map(cx=><View key={`${cx}${cy}`} style={[st.cell,{left:PAD+(size.w-2*PAD)*(cx/2)-14,top:PAD+(size.h-2*PAD)*(cy/2)-14}]}/>))}
      {!!eight&&<Svg width={size.w} height={size.h} style={{position:'absolute'}}><Path d={eight} stroke={ui.track} strokeWidth={6} fill="none" strokeLinecap="round"/></Svg>}
      <Animated.View style={[star?st.star:st.dot,{transform:[{translateX:x},{translateY:y}]}]}>{star&&<Icon name="Star" size={20} color={colors.onAccent} strokeWidth={2.4}/>}</Animated.View>
    </View>
  );
}

const st=themed(()=>({
  stage:{height:HEIGHT,width:'100%',borderRadius:24,backgroundColor:ui.subtle,overflow:'hidden'},
  line:{position:'absolute',left:PAD,right:PAD,flexDirection:'row',gap:10,alignItems:'center'},
  block:{height:7,borderRadius:4,backgroundColor:ui.track},
  cell:{position:'absolute',width:28,height:28,borderRadius:14,borderWidth:2,borderColor:ui.track},
  dot:{position:'absolute',left:0,top:0,width:DOT,height:DOT,borderRadius:DOT/2,backgroundColor:colors.accent},
  star:{position:'absolute',left:-6,top:-6,width:34,height:34,borderRadius:17,backgroundColor:colors.sun,alignItems:'center',justifyContent:'center'},
}));
