import React, { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextProps, View, ViewStyle, StyleProp } from 'react-native';
import * as Icons from 'lucide-react-native';
import { colors, fonts, metrics, radius, textStyles, ui ,themed} from '../design';
import { feel } from '../state/feedback';
/** Tekst schaalt mee met de lettergrootte van het apparaat; grote koppen iets minder, zodat de indeling heel blijft. */
const maxScale:Partial<Record<keyof typeof textStyles,number>>={display:1.25,title:1.35,stat:1.3,heading:1.5};
export function T({variant='body',color,style,...props}: TextProps & {variant?: keyof typeof textStyles;color?:string}) { return <Text maxFontSizeMultiplier={maxScale[variant]??1.8} {...props} style={[textStyles[variant],color?{color}:null,style]} />; }
const iconMap:Record<string, keyof typeof Icons>={home:'House',sun:'Sun',path:'Route',train:'Shapes',chart:'ChartNoAxesCombined',arrow:'ArrowRight',back:'ArrowLeft',close:'X',play:'Play',pause:'Pause',plus:'Plus',minus:'Minus',check:'Check',chevron:'ChevronRight',book:'BookOpen',flame:'Flame',settings:'SlidersHorizontal',user:'UserRound',clock:'Clock3',sparkles:'Sparkles',target:'Target',eye:'Eye',leaf:'Leaf',upload:'Upload',trash:'Trash2',lock:'LockKeyhole',trophy:'Trophy',help:'CircleHelp',text:'AlignLeft',refresh:'RotateCcw',volume:'Volume2',calendar:'CalendarDays',star:'Star',headphones:'Headphones',search:'Search',heart:'Heart',info:'Info',download:'Download',shield:'ShieldCheck',moon:'Moon',zap:'Zap',flag:'Flag',flower:'Flower2',grid:'Grid2X2',checkcircle:'CircleCheck',external:'ExternalLink',bookmark:'Bookmark',library:'Library'};
export function Icon({name,size=22,color=colors.ink,strokeWidth=1.8}:{name:string;size?:number;color?:string;strokeWidth?:number}) {const Comp=(Icons[iconMap[name] || name as keyof typeof Icons] || Icons.Circle) as React.ComponentType<any>;return <Comp size={size} color={color} strokeWidth={strokeWidth}/>;}
export function Button({title,onPress,secondary=false,icon,disabled,style,testID}:{title:string;onPress:()=>void;secondary?:boolean;icon?:string;disabled?:boolean;style?:StyleProp<ViewStyle>;testID?:string}) {return <Pressable testID={testID} accessibilityRole="button" accessibilityLabel={title} accessibilityState={{disabled:!!disabled}} disabled={disabled} onPress={onPress} style={({pressed})=>[s.button,{backgroundColor:secondary?colors.surface:colors.accent,opacity:disabled?.4:pressed?.8:1},style]}><T variant="label" color={secondary?colors.ink:colors.onAccent} style={{fontSize:16}}>{title}</T>{icon&&<Icon name={icon} size={19} color={secondary?colors.ink:colors.onAccent}/>}</Pressable>;}
export function IconButton({name,onPress,label,style}:{name:string;onPress:()=>void;label:string;style?:StyleProp<ViewStyle>}) {return <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={({pressed})=>[s.iconButton,{opacity:pressed?.5:1},style]}><Icon name={name}/></Pressable>;}
export function Card({children,style,onPress,accessibilityLabel}:{children:ReactNode;style?:StyleProp<ViewStyle>;onPress?:()=>void;accessibilityLabel?:string}){return onPress?<Pressable accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} style={({pressed})=>[s.card,style,{opacity:pressed?.8:1}]}>{children}</Pressable>:<View style={[s.card,style]}>{children}</View>;}
export function SectionHeading({title,action,onPress}:{title:string;action?:string;onPress?:()=>void}){return <View style={s.row}><T variant="heading" style={{fontSize:22,flex:1}}>{title}</T>{action&&<Pressable accessibilityRole="button" onPress={onPress} style={{minHeight:44,justifyContent:'center'}}><T variant="label" color={colors.accent} style={{fontSize:13}}>{action}  →</T></Pressable>}</View>;}
export function ProgressBar({value,color=colors.accent,style,label='Voortgang'}:{value:number;color?:string;style?:StyleProp<ViewStyle>;label?:string}){return <View accessibilityRole="progressbar" accessibilityLabel={label} accessibilityValue={{min:0,max:100,now:Math.round(value*100)}} style={[s.track,style]}><View style={{height:'100%',width:`${Math.max(0,Math.min(1,value))*100}%`,backgroundColor:color,borderRadius:99}}/></View>;}
/** Een scherm. Met `footer` staat de hoofdactie vast onderaan, zodat je er nooit voor hoeft te scrollen. */
export function Screen({children,style,scroll=true,footer}:{children:ReactNode;style?:StyleProp<ViewStyle>;scroll?:boolean;footer?:ReactNode}){const inner=<View style={[s.screen,style]}>{children}</View>;const body=scroll?<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled">{inner}</ScrollView>:inner;if(!footer)return body;return <View style={{flex:1}}>{body}<View style={s.footer}><View style={[s.footerInner,style&&StyleSheet.flatten(style).maxWidth?{maxWidth:StyleSheet.flatten(style).maxWidth}:null]}>{footer}</View></View></View>;}
export function Pill({label,icon,color=colors.accent,background=ui.forestSoft}:{label:string;icon?:string;color?:string;background?:string}){return <View style={[s.pill,{backgroundColor:background}]}>{icon&&<Icon name={icon} color={color} size={14}/>}<T variant="caption" color={color} style={{fontFamily:fonts.strong,fontSize:12}}>{label}</T></View>;}
export function BackHeader({title,onBack,right}:{title:string;onBack:()=>void;right?:ReactNode}){return <View style={[s.row,{marginBottom:24}]}><IconButton name="back" onPress={onBack} label="Terug"/><T variant="heading" style={{flex:1,marginLeft:10,fontSize:22}}>{title}</T>{right}</View>;}
export function Row({children,style}:{children:ReactNode;style?:StyleProp<ViewStyle>}){return <View style={[s.row,style]}>{children}</View>;}
const s=themed(()=>({button:{minHeight:metrics.buttonHeight,borderRadius:radius.pill,paddingHorizontal:24,paddingVertical:14,flexDirection:'row',gap:12,alignItems:'center',justifyContent:'center'},iconButton:{width:44,height:44,borderRadius:22,backgroundColor:colors.surface,alignItems:'center',justifyContent:'center'},card:{backgroundColor:colors.bg,borderWidth:1,borderColor:ui.line,borderRadius:radius.hero,padding:metrics.cardPadding},row:{flexDirection:'row',alignItems:'center',gap:10},track:{height:6,backgroundColor:ui.track,borderRadius:99,overflow:'hidden'},screen:{width:'100%',maxWidth:metrics.maxWidth,alignSelf:'center',padding:metrics.padding,paddingBottom:40,gap:24},footer:{borderTopWidth:1,borderTopColor:ui.line,backgroundColor:ui.page,paddingHorizontal:metrics.padding,paddingTop:12,paddingBottom:14},footerInner:{width:'100%',maxWidth:metrics.maxWidth,alignSelf:'center',gap:8},pill:{alignSelf:'flex-start',flexDirection:'row',alignItems:'center',gap:6,borderRadius:99,paddingHorizontal:11,paddingVertical:6}}));

/** Instelbare waarde met − en +, in de stijl van de tempokiezer. */
export function Stepper({label,value,unit,min,max,step,onChange,format,icon}:{label:string;value:number;unit:string;min:number;max:number;step:number;onChange:(v:number)=>void;format?:(v:number)=>string;icon?:string}){
  const shown=format?format(value):String(value);
  return (
    <View style={{gap:12}}>
      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
        <T variant="label" style={{flex:1}}>{label}</T>
        {icon&&<Icon name={icon} size={19} color={colors.accent}/>}
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:28}}>
        <IconButton name="minus" label={`${label} verlagen`} onPress={()=>onChange(Math.max(min,value-step))}/>
        <View style={{alignItems:'center',minWidth:110}}>
          <T variant="stat">{shown}</T>
          <T variant="caption">{unit}</T>
        </View>
        <IconButton name="plus" label={`${label} verhogen`} onPress={()=>onChange(Math.min(max,value+step))}/>
      </View>
    </View>
  );
}

/** Keuze uit een paar opties, als rij pillen. */
export function Choice<V extends string>({label,value,options,onChange}:{label:string;value:V;options:{value:V;label:string}[];onChange:(v:V)=>void}){
  return (
    <View style={{gap:12}}>
      <T variant="label">{label}</T>
      <View style={{flexDirection:'row',flexWrap:'wrap',gap:8}}>
        {options.map(o=>{
          const active=o.value===value;
          return (
            <Pressable key={o.value} accessibilityRole="button" accessibilityState={{selected:active}} accessibilityLabel={o.label} onPress={()=>{feel.tap();onChange(o.value);}}
              style={({pressed})=>[{paddingHorizontal:16,paddingVertical:10,borderRadius:radius.pill,minHeight:44,justifyContent:'center',backgroundColor:active?colors.accent:colors.surface,opacity:pressed?.8:1}]}>
              <T variant="caption" color={active?colors.onAccent:ui.muted} style={{fontFamily:fonts.strong,fontSize:13}}>{o.label}</T>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
