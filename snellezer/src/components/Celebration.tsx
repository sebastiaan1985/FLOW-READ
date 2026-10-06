import React,{useEffect,useMemo,useRef} from 'react';
import {Animated,Easing,Platform,StyleSheet,View,useWindowDimensions} from 'react-native';
import {Icon} from './UI';
import {brand,colors} from '../design';
import {useReduceMotion} from '../state/feedback';

export type CelebrationSize='small'|'medium'|'large'|'huge'|'grand';
const native=Platform.OS!=='web';
const PALETTE=[brand.dot,'#2BB3A0','#F28C6B','#7DB8F2','#B79CF2','#9BD36A'];
/** Hoe groot een viering is: klein bij een goed antwoord, groot bij een record of mijlpaal, het grootst na 28 dagen. */
const PLAN:Record<CelebrationSize,{confetti:number;stars:number;balloons:number;bursts:number;ms:number}>={
  small:{confetti:0,stars:10,balloons:0,bursts:0,ms:900},
  medium:{confetti:36,stars:12,balloons:0,bursts:0,ms:1900},
  large:{confetti:60,stars:16,balloons:6,bursts:1,ms:2600},
  huge:{confetti:75,stars:18,balloons:8,bursts:2,ms:3000},
  grand:{confetti:90,stars:20,balloons:10,bursts:4,ms:3400},
};
type Particle={kind:'confetti'|'star'|'balloon'|'spark';x:number[];y:number[];rotate:number;color:string;size:number;delay:number;fade:boolean};
function seeded(n:number){let h=Math.imul(n+7,2654435761)>>>0;return ()=>{h^=h<<13;h^=h>>>17;h^=h<<5;return ((h>>>0)%10000)/10000;};}

function build(size:CelebrationSize,w:number,h:number,origin:{x:number;y:number}):Particle[]{
  const p=PLAN[size],r=seeded(w+h+p.confetti),out:Particle[]=[];
  for(let i=0;i<p.confetti;i++){const x0=w*(.15+.7*r());const drift=(r()-.5)*w*.35;out.push({kind:'confetti',x:[x0,x0+drift*.5,x0+drift],y:[-20-r()*80,h*.45,h+40],rotate:(r()-.5)*900,color:PALETTE[i%PALETTE.length],size:6+r()*6,delay:r()*.35,fade:false});}
  for(let i=0;i<p.stars;i++){const a=i/p.stars*Math.PI*2+r()*.4,d=60+r()*(size==='small'?70:140);out.push({kind:'star',x:[origin.x,origin.x+Math.cos(a)*d*.7,origin.x+Math.cos(a)*d],y:[origin.y,origin.y+Math.sin(a)*d*.7,origin.y+Math.sin(a)*d+20],rotate:(r()-.5)*180,color:i%2?brand.dot:'#2BB3A0',size:size==='small'?14:16+r()*8,delay:r()*.1,fade:true});}
  for(let i=0;i<p.balloons;i++){const x0=w*(.1+.8*r());out.push({kind:'balloon',x:[x0,x0+(r()-.5)*40,x0+(r()-.5)*70],y:[h+60,h*.45,-120],rotate:(r()-.5)*20,color:PALETTE[(i+2)%PALETTE.length],size:30+r()*14,delay:r()*.3,fade:false});}
  for(let b=0;b<p.bursts;b++){const cx=w*(.2+.6*r()),cy=h*(.18+.3*r());for(let i=0;i<18;i++){const a=i/18*Math.PI*2,d=70+r()*50;out.push({kind:'spark',x:[cx,cx+Math.cos(a)*d*.8,cx+Math.cos(a)*d],y:[cy,cy+Math.sin(a)*d*.8,cy+Math.sin(a)*d+30],rotate:0,color:PALETTE[(b+i)%PALETTE.length],size:6,delay:.1+b*.18,fade:true});}}
  return out;
}

/**
 * Een korte viering over het scherm heen. Hij blokkeert niets: je kunt gewoon doortikken.
 * Met "beweging verminderen" aan speelt hij niet; dan blijft alleen de tekstmelding over.
 */
export function Celebration({size,origin,onDone}:{size:CelebrationSize;origin?:{x:number;y:number};onDone?:()=>void}){
  const reduce=useReduceMotion();
  const {width:w,height:h}=useWindowDimensions();
  const t=useRef(new Animated.Value(0)).current;
  const parts=useMemo(()=>build(size,w,h,origin??{x:w/2,y:h*.38}),[size,w,h]);
  useEffect(()=>{
    if(reduce){onDone?.();return;}
    const anim=Animated.timing(t,{toValue:1,duration:PLAN[size].ms,easing:Easing.linear,useNativeDriver:native});
    anim.start(()=>onDone?.());
    return()=>anim.stop();
  },[reduce]);
  if(reduce)return null;
  return <View pointerEvents="none" style={[StyleSheet.absoluteFill,{zIndex:60}]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
    {parts.map((p,i)=>{
      const start=p.delay,mid=start+(1-start)*.45;
      const range=[start,mid,1];
      const tx=t.interpolate({inputRange:[0,...range],outputRange:[p.x[0],...p.x],extrapolate:'clamp'});
      const ty=t.interpolate({inputRange:[0,...range],outputRange:[p.y[0],...p.y],extrapolate:'clamp'});
      const rot=t.interpolate({inputRange:[0,1],outputRange:['0deg',`${p.rotate}deg`]});
      const opacity=t.interpolate({inputRange:[0,start,Math.min(1,start+.02),p.fade?Math.min(1,mid+.15):.92,1],outputRange:[0,0,1,p.fade?.9:1,0],extrapolate:'clamp'});
      const scale=p.kind==='star'||p.kind==='spark'?t.interpolate({inputRange:[0,start,mid,1],outputRange:[.3,.3,1.15,.7],extrapolate:'clamp'}):1;
      const body=p.kind==='star'?<Icon name="Star" size={p.size} color={p.color} strokeWidth={2.2}/>
        :p.kind==='balloon'?<View style={{alignItems:'center'}}><View style={{width:p.size,height:p.size*1.2,borderRadius:p.size/2,backgroundColor:p.color,opacity:.92}}/><View style={{width:1.5,height:p.size*.9,backgroundColor:colors.ink,opacity:.25}}/></View>
        :<View style={{width:p.size,height:p.kind==='spark'?p.size:p.size*.55,borderRadius:p.kind==='spark'?p.size:1.5,backgroundColor:p.color}}/>;
      return <Animated.View key={i} style={{position:'absolute',left:0,top:0,opacity,transform:[{translateX:tx},{translateY:ty},{rotate:rot},{scale}]}}>{body}</Animated.View>;
    })}
  </View>;
}
