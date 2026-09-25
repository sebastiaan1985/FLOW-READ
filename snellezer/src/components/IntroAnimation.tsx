import React, {useEffect, useRef, useState} from 'react';
import {AccessibilityInfo, Animated, Easing, Platform, Pressable, StyleSheet, View} from 'react-native';
import {brand, fonts, ui,themed} from '../design';

const native = Platform.OS !== 'web';
const SIZE = 112; // even groot als het beeldmerk op het opstartscherm (app.json: imageWidth)
const EMPTY_TILE = require('../../assets/brand/tegel-leeg.png');
const MARK = require('../../assets/brand/s.png');

/** Speelt één keer per keer dat de app opstart. */
let played = false;

/**
 * De opening: de S draait als een lint de tegel in, er glijdt een glans over en het woordmerk komt eronder,
 * met de gele punt als laatste. In de app staat het logo al op het opstartscherm; daar maakt de S vanuit
 * rust één draai, zodat de overgang naadloos is. Tikken slaat over; met "beweging verminderen" blijft er
 * alleen een korte overgang over. De app laadt er gewoon onder door.
 */
export function IntroAnimation({ready}: {ready: boolean}) {
  const [visible, setVisible] = useState(!played);
  const fromSplash = native;
  const tile = useRef(new Animated.Value(fromSplash ? 1 : 0)).current;   // tegel verschijnt
  const twist = useRef(new Animated.Value(fromSplash ? 1 : 0)).current;  // S draait in
  const spin = useRef(new Animated.Value(0)).current;                    // extra draai vanaf het opstartscherm
  const shine = useRef(new Animated.Value(0)).current;
  const word = useRef(new Animated.Value(0)).current;
  const dot = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(1)).current;
  const running = useRef<Animated.CompositeAnimation | null>(null);

  const finish = () => { played = true; setVisible(false); };
  const skip = () => { running.current?.stop(); Animated.timing(fade, {toValue: 0, duration: 160, useNativeDriver: native}).start(finish); };

  useEffect(() => {
    if (!visible || !ready) return;
    let cancelled = false;
    AccessibilityInfo.isReduceMotionEnabled().catch(() => false).then(reduce => {
      if (cancelled) return;
      const t = (v: Animated.Value, duration: number, easing = Easing.out(Easing.cubic), toValue = 1) => Animated.timing(v, {toValue, duration, easing, useNativeDriver: native});
      if (reduce) {
        [tile, twist, word, dot].forEach(v => v.setValue(1));
        running.current = Animated.sequence([Animated.delay(400), t(fade, 250, Easing.linear, 0)]);
      } else {
        running.current = Animated.sequence([
          fromSplash
            ? t(spin, 720, Easing.inOut(Easing.cubic))
            : Animated.parallel([t(tile, 420, Easing.out(Easing.back(1.5))), Animated.sequence([Animated.delay(140), t(twist, 520)])]),
          Animated.parallel([t(shine, 460, Easing.inOut(Easing.quad)), Animated.sequence([Animated.delay(60), t(word, 320)])]),
          t(dot, 240, Easing.out(Easing.back(2.5))),
          Animated.delay(170),
          t(fade, 280, Easing.in(Easing.quad), 0),
        ]);
      }
      running.current.start(({finished}) => { if (finished) finish(); });
    });
    return () => { cancelled = true; running.current?.stop(); };
  }, [ready, visible]);

  if (!visible) return null;
  const range = (v: Animated.Value, out: [number, number] | [string, string]) => v.interpolate({inputRange: [0, 1], outputRange: out as any});
  return (
    <Animated.View style={[st.overlay, {opacity: fade}]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Pressable onPress={skip} accessibilityLabel="Sla de opening over" style={st.fill}>
        <Animated.View style={{width: SIZE, height: SIZE, opacity: tile.interpolate({inputRange: [0, .4, 1], outputRange: [0, 1, 1]}), transform: [{scale: range(tile, [.55, 1])}]}}>
          <Animated.Image source={EMPTY_TILE} style={st.layer}/>
          <Animated.Image source={MARK} style={[st.layer, {
            opacity: twist.interpolate({inputRange: [0, .35, 1], outputRange: [0, 1, 1]}),
            transform: [{perspective: 700}, {rotateY: range(twist, ['-100deg', '0deg'])}, {rotateY: range(spin, ['0deg', '360deg'])}, {rotate: range(twist, ['-22deg', '0deg'])}, {scale: range(twist, [.6, 1])}],
          }]}/>
          <View style={st.shineClip} pointerEvents="none">
            <Animated.View style={[st.shine, {opacity: shine.interpolate({inputRange: [0, .15, .85, 1], outputRange: [0, 1, 1, 0]}), transform: [{translateX: range(shine, [-SIZE, SIZE * 1.2])}, {rotate: '20deg'}]}]}/>
          </View>
        </Animated.View>
        <Animated.View style={[st.wordRow, {opacity: word, transform: [{translateY: range(word, [12, 0])}]}]}>
          <Animated.Text style={st.word}>snellezer</Animated.Text>
          <Animated.Text style={[st.word, {color: brand.dot, opacity: dot, transform: [{translateY: range(dot, [-16, 0])}, {scale: range(dot, [.4, 1])}]}]}>.</Animated.Text>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

const st = themed(()=>({
  overlay: {position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: ui.page, zIndex: 100},
  fill: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  layer: {position: 'absolute', top: 0, left: 0, width: SIZE, height: SIZE},
  shineClip: {position: 'absolute', top: 0, left: 0, width: SIZE, height: SIZE, borderRadius: SIZE * .24, overflow: 'hidden'},
  shine: {position: 'absolute', top: -SIZE * .3, left: 0, width: SIZE * .28, height: SIZE * 1.6, backgroundColor: 'rgba(255,255,255,.22)'},
  // Het woordmerk hangt onder de tegel, zodat de tegel precies in het midden blijft (net als op het opstartscherm).
  wordRow: {position: 'absolute', top: '50%', marginTop: SIZE / 2 + 22, flexDirection: 'row'},
  word: {fontFamily: fonts.heading, fontSize: 40, letterSpacing: -1.2, color: brand.ink},
}));
