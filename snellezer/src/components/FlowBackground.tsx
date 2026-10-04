import React, {useEffect, useMemo, useRef, useState} from 'react';
import {AccessibilityInfo, Animated, Easing, Platform, StyleSheet, View, useWindowDimensions} from 'react-native';
import {brand, fonts} from '../design';

const native = Platform.OS !== 'web';
const WORDS = ['lezen', 'focus', 'ritme', 'begrip', 'rust', 'tempo', 'verhaal', 'woorden', 'blik', 'flow', 'groei', 'zinnen', 'aandacht', 'boek', 'ontdek', 'nieuwsgierig'];

/** Vaste "willekeur", zodat de achtergrond elke keer hetzelfde rustige patroon heeft. */
const seeded = (i: number, salt: number) => {const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453; return x - Math.floor(x);};

/** Laat een waarde eindeloos van 0 naar 1 lopen, beginnend bij `from`, zodat niet alles tegelijk start. */
function drift(v: Animated.Value, duration: number, from: number) {
  let stopped = false;
  const run = (start: number) => {
    v.setValue(start);
    Animated.timing(v, {toValue: 1, duration: duration * (1 - start), easing: Easing.linear, useNativeDriver: native}).start(({finished}) => {if (finished && !stopped) run(0);});
  };
  run(from);
  return () => {stopped = true; v.stopAnimation();};
}

function breathe(v: Animated.Value, duration: number) {
  const loop = Animated.loop(Animated.sequence([
    Animated.timing(v, {toValue: 1, duration, easing: Easing.inOut(Easing.sin), useNativeDriver: native}),
    Animated.timing(v, {toValue: 0, duration, easing: Easing.inOut(Easing.sin), useNativeDriver: native}),
  ]));
  loop.start();
  return () => loop.stop();
}

/**
 * De achtergrond van het inlogscherm: woorden die langzaam omhoog zweven, twee zachte lichtvlekken
 * die ademen en een gele leesgids die over een regel glijdt. Alles loopt eindeloos door.
 * Met "beweging verminderen" staat alles stil.
 */
export function FlowBackground() {
  const {width, height} = useWindowDimensions();
  const [reduce, setReduce] = useState(false);
  const words = useMemo(() => WORDS.map((word, i) => ({
    word,
    x: 0.04 + seeded(i, 1) * 0.78,
    size: 15 + Math.round(seeded(i, 2) * 17),
    opacity: 0.08 + seeded(i, 3) * 0.12,
    duration: 18000 + seeded(i, 4) * 16000,
    from: seeded(i, 5),
    value: new Animated.Value(seeded(i, 5)),
  })), []);
  const glowA = useRef(new Animated.Value(0)).current;
  const glowB = useRef(new Animated.Value(0)).current;
  const guide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduce).catch(() => {});
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduce);
    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (reduce) return;
    const stops = [
      ...words.map(w => drift(w.value, w.duration, w.from)),
      breathe(glowA, 6000),
      breathe(glowB, 8000),
      drift(guide, 4200, 0),
    ];
    return () => stops.forEach(stop => stop());
  }, [reduce, words]);

  const glow = Math.max(width, height) * 0.75;
  const lineWidth = Math.min(width * 0.62, 340);
  const lineTop = Math.min(height * 0.14, 128);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none" importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
      <View style={[StyleSheet.absoluteFill, {backgroundColor: '#07403B'}]}/>
      <Animated.View style={[s.glow, {width: glow, height: glow, borderRadius: glow / 2, left: -glow * 0.35, top: -glow * 0.3, backgroundColor: brand.green,
        opacity: glowA.interpolate({inputRange: [0, 1], outputRange: [0.55, 0.9]}),
        transform: [{scale: glowA.interpolate({inputRange: [0, 1], outputRange: [0.9, 1.08]})}]}]}/>
      <Animated.View style={[s.glow, {width: glow * 0.8, height: glow * 0.8, borderRadius: glow * 0.4, right: -glow * 0.35, top: height * 0.35, backgroundColor: '#0E8A7C',
        opacity: glowB.interpolate({inputRange: [0, 1], outputRange: [0.25, 0.5]}),
        transform: [{translateY: glowB.interpolate({inputRange: [0, 1], outputRange: [0, -40]})}]}]}/>
      {words.map(w => (
        <Animated.Text key={w.word} style={[s.word, {left: w.x * width, fontSize: w.size, opacity: w.opacity,
          transform: [{translateY: w.value.interpolate({inputRange: [0, 1], outputRange: [height + 40, -60]})}]}]}>{w.word}</Animated.Text>
      ))}
      <View style={{position: 'absolute', top: lineTop, left: (width - lineWidth) / 2, width: lineWidth, gap: 12, opacity: 0.5}}>
        {[1, 0.86, 0.94].map((part, i) => <View key={i} style={{height: 6, width: lineWidth * part, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.14)'}}/>)}
        <Animated.View style={{position: 'absolute', top: 18 - 4, height: 14, width: 64, borderRadius: 7, backgroundColor: brand.dot, opacity: 0.55,
          transform: [{translateX: guide.interpolate({inputRange: [0, 0.85, 1], outputRange: [-10, lineWidth * 0.86 - 54, lineWidth * 0.86 - 54]})}]}}/>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  glow: {position: 'absolute'},
  word: {position: 'absolute', top: 0, color: '#FFFFFF', fontFamily: fonts.heading},
});
