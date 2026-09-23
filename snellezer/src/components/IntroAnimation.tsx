import React, {useEffect, useRef, useState} from 'react';
import {AccessibilityInfo, Animated, Easing, Platform, Pressable, StyleSheet, View} from 'react-native';
import {colors, fonts, ui} from '../design';

const native = Platform.OS !== 'web';
// Het logo, 2,6 keer zo groot als in de kopregel: drie leesregels, de middelste geel.
const LINES = [{width: 49, color: colors.bg, opacity: .45}, {width: 52, color: colors.sun, opacity: 1}, {width: 31, color: colors.bg, opacity: .45}];
const DOT = 10;

/** Speelt één keer per keer dat de app opstart. */
let played = false;

/**
 * Het logo "leest" zichzelf: de drie regels schuiven na elkaar in beeld, zoals je ogen over een regel gaan,
 * een lichtpuntje glijdt over de gele regel en dan verschijnt het woord. Tikken slaat het over; met
 * "beweging verminderen" blijft er alleen een korte overgang over. De app laadt er gewoon onder door.
 */
export function IntroAnimation({ready}: {ready: boolean}) {
  const [visible, setVisible] = useState(!played);
  const lines = useRef(LINES.map(() => new Animated.Value(0))).current;
  const dot = useRef(new Animated.Value(0)).current;
  const word = useRef(new Animated.Value(0)).current;
  const period = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(1)).current;
  const running = useRef<Animated.CompositeAnimation | null>(null);

  const finish = () => { played = true; setVisible(false); };
  const skip = () => { running.current?.stop(); Animated.timing(fade, {toValue: 0, duration: 160, useNativeDriver: native}).start(finish); };

  useEffect(() => {
    if (!visible || !ready) return;
    let cancelled = false;
    AccessibilityInfo.isReduceMotionEnabled().catch(() => false).then(reduce => {
      if (cancelled) return;
      if (reduce) {
        [...lines, dot, word, period].forEach(v => v.setValue(1));
        running.current = Animated.sequence([Animated.delay(350), Animated.timing(fade, {toValue: 0, duration: 250, useNativeDriver: native})]);
      } else {
        const ease = Easing.out(Easing.cubic);
        running.current = Animated.sequence([
          Animated.stagger(120, lines.map(v => Animated.timing(v, {toValue: 1, duration: 280, easing: ease, useNativeDriver: native}))),
          Animated.parallel([
            Animated.timing(dot, {toValue: 1, duration: 420, easing: Easing.inOut(Easing.quad), useNativeDriver: native}),
            Animated.sequence([Animated.delay(120), Animated.timing(word, {toValue: 1, duration: 320, easing: ease, useNativeDriver: native})]),
          ]),
          Animated.timing(period, {toValue: 1, duration: 160, easing: ease, useNativeDriver: native}),
          Animated.delay(180),
          Animated.timing(fade, {toValue: 0, duration: 300, easing: Easing.in(Easing.quad), useNativeDriver: native}),
        ]);
      }
      running.current.start(({finished}) => { if (finished) finish(); });
    });
    return () => { cancelled = true; running.current?.stop(); };
  }, [ready, visible]);

  if (!visible) return null;
  // Een regel groeit vanaf links: schalen rond het midden en tegelijk opschuiven.
  const grow = (v: Animated.Value, w: number) => ({transform: [{translateX: v.interpolate({inputRange: [0, 1], outputRange: [-w / 2, 0]})}, {scaleX: v.interpolate({inputRange: [0, 1], outputRange: [0.001, 1]})}]});
  return (
    <Animated.View style={[st.overlay, {opacity: fade}]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Pressable onPress={skip} accessibilityLabel="Sla de opening over" style={st.fill}>
        <Animated.View style={[st.row, {transform: [{scale: fade.interpolate({inputRange: [0, 1], outputRange: [.96, 1]})}]}]}>
          <View style={st.logo}>
            {LINES.map((l, i) => <View key={i} style={{width: l.width, height: 8}}>
              <Animated.View style={[{width: l.width, height: 8, borderRadius: 4, backgroundColor: l.color, opacity: l.opacity}, grow(lines[i], l.width)]}/>
              {i === 1 && <Animated.View style={[st.dot, {opacity: dot.interpolate({inputRange: [0, .1, .85, 1], outputRange: [0, 1, 1, 0]}), transform: [{translateX: dot.interpolate({inputRange: [0, 1], outputRange: [-2, l.width - DOT + 2]})}]}]}/>}
            </View>)}
          </View>
          <Animated.Text style={[st.word, {opacity: word, transform: [{translateY: word.interpolate({inputRange: [0, 1], outputRange: [10, 0]})}]}]}>
            snellezer<Animated.Text style={{color: colors.accent, opacity: period}}>.</Animated.Text>
          </Animated.Text>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

const st = StyleSheet.create({
  overlay: {position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: ui.page, zIndex: 100},
  fill: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  row: {alignItems: 'center', gap: 22},
  logo: {width: 88, height: 88, borderRadius: 28, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center', gap: 10},
  dot: {position: 'absolute', top: -1, width: DOT, height: DOT, borderRadius: DOT / 2, backgroundColor: colors.bg, shadowColor: colors.sun, shadowOpacity: .9, shadowRadius: 6, shadowOffset: {width: 0, height: 0}},
  word: {fontFamily: fonts.strong, fontSize: 40, letterSpacing: -1, color: colors.ink},
});
