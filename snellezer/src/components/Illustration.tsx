import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Circle, Ellipse, G, Path, Rect, Line } from 'react-native-svg';
import { colors as c, ui } from '../design';
export function Illustration({name,size=100,style}:{name:string;size?:number;style?:ViewStyle}) {
 if(name==='hero') return <View style={[{width:size,height:size*.78},style]}><Svg width="100%" height="100%" viewBox="0 0 400 312">
  <Path d="M45 271V152C45 70 103 23 184 23s146 59 146 144v104Z" fill="#E5EBD6"/>
  <Circle cx="289" cy="71" r="36" fill={c.sun}/><Path d="M270 108c-36 5-59 30-71 68" stroke={ui.cream} strokeWidth="3" fill="none"/>
  <Ellipse cx="197" cy="280" rx="172" ry="14" fill="#D7E2CE"/>
  <Path d="M61 274c-1-37 3-65 14-94 13 19 12 40 7 59 9-23 23-35 41-40-1 34-21 57-43 75Z" fill={c.accent}/>
  <Path d="M329 274c-2-27 3-57 14-79 11 21 13 40 6 58 10-13 22-23 40-26-8 26-28 43-47 48Z" fill="#93BBA1"/>
  <Path d="M121 249c-13 0-20 9-20 19 0 9 8 15 20 15h128c11 0 21-5 21-15 0-11-10-19-22-19Z" fill={c.coral}/>
  <Path d="M159 178c-12 17-19 42-17 66l-27 8c-9 4-9 16 4 17l66-5 6-46 9 40 44 8c14 1 17-12 5-18l-17-11c2-27-5-48-19-59Z" fill={ui.forest}/>
  <Path d="M146 123c-14 9-25 22-24 37l6 55c1 6 6 9 13 8l22-14 55 3 13-37c3-21-7-44-24-53Z" fill={c.sky}/>
  <Path d="M157 123c-5 12 9 19 23 18 14-1 26-9 23-20l-5-23-34 2Z" fill={c.coral}/>
  <Circle cx="180" cy="89" r="27" fill={c.coral}/>
  <Path d="M155 93c-13-17-4-42 14-47 18-6 38 7 39 21-15 0-20-3-28-11-2 18-10 25-25 25Z" fill={ui.forest}/>
  <Path d="M173 180c-13-10-34-14-55-13l10 43c21-2 34 2 49 10l-4-40Z" fill={c.sun}/><Path d="M173 180c14-10 32-13 53-11l-8 42c-17-2-27 0-41 9Z" fill="#FFE1A0"/>
  <Path d="m134 181 25 6m-22 3 22 6m30-10 22-6m-23 14 19-6" stroke="#CBA154" strokeWidth="2.4" strokeLinecap="round"/>
  <Path d="M126 178c-9-6-17 3-13 10l14 12 8-4-9-18Zm93 3c11-4 17 6 11 12l-15 10-7-5 11-17Z" fill={c.coral}/>
  <Path d="m89 92 6-10m-3 19-13-2m246 56 8-8m-1 22 11 1" stroke={c.accent} strokeWidth="3" strokeLinecap="round"/>
  <Circle cx="107" cy="57" r="5" fill={c.sage}/><Circle cx="344" cy="114" r="4" fill={c.coral}/>
 </Svg></View>;
 const bg= ['snelheid','werk'].includes(name)?c.tintSun:['begrip','leerweg','resultaat-hero','studie'].includes(name)?c.tintSage:['blikveld','eigen-tekst'].includes(name)?c.tintSky:c.tintLilac;
 return <View style={[{width:size,height:size},style]}><Svg width="100%" height="100%" viewBox="0 0 120 120"><Circle cx="60" cy="60" r="55" fill={bg}/>
 {['begrip','studie','resultaat-hero'].includes(name)?<G><Path d="M60 41c-12-11-25-13-39-9v55c15-3 29 1 39 10Z" fill={c.sage}/><Path d="M60 41c12-11 25-13 39-9v55c-15-3-29 1-39 10Z" fill={c.accent}/><Path d="M30 46c9-1 15 1 22 5m-22 9c9-1 15 1 22 5m17-14c8-5 13-6 21-5m-21 18c8-5 13-6 21-5" stroke={c.bg} strokeWidth="3" strokeLinecap="round" opacity=".7"/><Circle cx="91" cy="22" r="10" fill={c.sun}/><Circle cx="25" cy="21" r="4" fill={c.coral}/></G>:
 name==='snelheid'?<G><Path d="m67 18-35 49h27l-6 37 38-53H64Z" fill={c.sun}/><Path d="M22 44h20M14 60h20m-13 17h17" stroke={c.coral} strokeWidth="6" strokeLinecap="round"/></G>:
 name==='blikveld'?<G><Path d="M13 60c22-34 72-34 94 0-22 34-72 34-94 0Z" fill={c.sky}/><Circle cx="60" cy="60" r="23" fill={c.bg}/><Circle cx="60" cy="60" r="13" fill={c.accent}/><Circle cx="65" cy="55" r="4" fill={c.bg}/><Path d="M60 24v-9m-28 17-6-6m62 6 6-6" stroke={c.sky} strokeWidth="5" strokeLinecap="round"/></G>:
 ['focus','rest'].includes(name)?<G><Path d="M60 87C22 90 11 56 25 43c18-1 32 18 35 34 4-27 18-43 38-44 9 25-7 49-38 54Z" fill={c.lilac}/><Path d="M60 85c-22-21-24-46 0-65 23 20 22 46 0 65Z" fill={c.accent}/><Path d="M60 85V43" stroke={c.sage} strokeWidth="3" strokeLinecap="round"/><Ellipse cx="60" cy="99" rx="29" ry="5" fill={c.lilac}/></G>:
 name==='leerweg'?<G><Path d="M29 99c0-25 66-15 64-40-1-19-58-3-58-24 0-10 14-16 25-16" stroke={c.sage} strokeWidth="15" fill="none" strokeLinecap="round"/><Circle cx="29" cy="97" r="12" fill={c.accent}/><Circle cx="80" cy="59" r="10" fill={c.sun}/><Path d="M57 34V9l25 9-25 9Z" fill={c.accent}/></G>:
 ['eigen-tekst','werk'].includes(name)?<G><Rect x="28" y="23" width="63" height="80" rx="9" fill={c.bg}/><Rect x="28" y="23" width="63" height="17" rx="7" fill={name==='werk'?c.sun:c.sky}/><Path d="M41 55h36M41 67h30M41 79h20" stroke={name==='werk'?c.coral:c.sky} strokeWidth="5" strokeLinecap="round"/><Path d="m74 91 17-41 8 3-17 42-10 7Z" fill={c.accent}/></G>:
 name==='plezier'?<G><Circle cx="60" cy="59" r="31" fill={c.sun}/><Path d="M60 10v9m0 82v9M10 60h9m82 0h9M25 25l6 6m58 58 6 6M25 95l6-6m58-58 6-6" stroke={c.coral} strokeWidth="6" strokeLinecap="round"/></G>:
 <G><Rect x="21" y="35" width="78" height="54" rx="18" fill={c.lilac}/><Path d="m35 73 11-26 12 26m-19-8h15M69 47v26m0-13c21-13 25 22 0 13" stroke={c.bg} strokeWidth="5" strokeLinecap="round" fill="none"/><Circle cx="95" cy="30" r="12" fill={c.sun}/></G>}
 </Svg></View>;
}
