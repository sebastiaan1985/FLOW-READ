import React, {useEffect, useRef, useState} from 'react';
import {AccessibilityInfo, Animated, Easing, Platform, Pressable, View} from 'react-native';
import {brand, fonts, ui, themed} from '../design';

const native = Platform.OS !== 'web';
const SIZE = 112; // even groot als het beeldmerk op het opstartscherm (app.json: imageWidth)
const MARK_TILE = require('../../assets/brand/tegel-leeg.png');
const MARK = require('../../assets/brand/s.png');
const PAGE_W = 78, PAGE_H = 108, PAGES = 11;
/** Elke bladzijde slaat sneller om dan de vorige: rustig, sneller, vliegensvlug. */
const flipTime = (i: number) => Math.max(42, Math.round(360 * Math.pow(.74, i)));

/** Speelt één keer per keer dat de app opstart. */
let played = false;

/**
 * De opening vertelt in twee seconden waar Snellezer over gaat: een boek slaat open, de bladzijden slaan om,
 * eerst rustig, dan sneller en tot slot vliegensvlug. Daarna verschijnt het logo. Tikken slaat over; met
 * "beweging verminderen" blijft er alleen een korte overgang over. De app laadt er gewoon onder door.
 */
export function IntroAnimation({ready}: {ready: boolean}) {
  const [visible, setVisible] = useState(!played);
  const cover = useRef(new Animated.Value(0)).current;
  const pages = useRef(Array.from({length: PAGES}, () => new Animated.Value(0))).current;
  const book = useRef(new Animated.Value(1)).current;
  const logo = useRef(new Animated.Value(0)).current;
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
        book.setValue(0); [logo, word, dot].forEach(v => v.setValue(1));
        running.current = Animated.sequence([Animated.delay(450), t(fade, 250, Easing.linear, 0)]);
      } else {
        // Elke volgende bladzijde begint als de vorige halverwege is; zo versnelt het omslaan vloeiend.
        let at = 0;
        const flips = pages.map((p, i) => { const d = flipTime(i); const start = at; at += d * .55; return Animated.sequence([Animated.delay(start), t(p, d, Easing.inOut(Easing.quad))]); });
        running.current = Animated.sequence([
          Animated.delay(120),
          t(cover, 480, Easing.inOut(Easing.cubic)),
          Animated.parallel(flips),
          Animated.delay(140),
          Animated.parallel([t(book, 260, Easing.in(Easing.quad), 0), Animated.sequence([Animated.delay(200), t(logo, 360, Easing.out(Easing.back(1.4)))])]),
          t(word, 280),
          t(dot, 220, Easing.out(Easing.back(2.5))),
          Animated.delay(220),
          t(fade, 260, Easing.in(Easing.quad), 0),
        ]);
      }
      running.current.start(({finished}) => { if (finished) finish(); });
    });
    return () => { cancelled = true; running.current?.stop(); };
  }, [ready, visible]);

  if (!visible) return null;
  // Draaien rond de rug van het boek (de linkerrand van de bladzijde) in plaats van rond het midden.
  const hinge = (v: Animated.Value) => [{perspective: 900}, {translateX: -PAGE_W / 2}, {rotateY: v.interpolate({inputRange: [0, 1], outputRange: ['0deg', '-180deg']})}, {translateX: PAGE_W / 2}];
  const shade = (v: Animated.Value) => v.interpolate({inputRange: [0, .5, 1], outputRange: [1, .78, .95]});
  return (
    <Animated.View style={[st.overlay, {opacity: fade}]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Pressable onPress={skip} accessibilityLabel="Sla de opening over" style={st.fill}>
        <Animated.View style={{width: PAGE_W * 2, height: PAGE_H, opacity: book, transform: [{scale: book.interpolate({inputRange: [0, 1], outputRange: [.8, 1]})}]}}>
          {/* Linkerkant: binnenkant van de kaft, met daarop de omgeslagen bladzijden. */}
          <Animated.View style={[st.board, {opacity: cover.interpolate({inputRange: [0, .5, .501, 1], outputRange: [0, 0, 1, 1]})}]}><View style={st.leftPage}/></Animated.View>
          {/* Rechterkant: de stapel bladzijden. */}
          <View style={st.rightStack}>{[0, 1, 2, 3, 4].map(i => <View key={i} style={[st.line, {top: 18 + i * 15, width: i === 4 ? '45%' : '70%'}]}/>)}</View>
          {pages.map((p, i) => <Animated.View key={i} style={[st.page, {zIndex: 20 - i, opacity: shade(p), transform: hinge(p)}]}>{[0, 1, 2, 3].map(l => <View key={l} style={[st.line, {top: 20 + l * 16, width: l === 3 ? '40%' : '72%'}]}/>)}</Animated.View>)}
          {/* De kaft draait open; halverwege neemt de binnenkant links het over, zodat omgeslagen bladzijden erop vallen. */}
          <Animated.View style={[st.cover, {zIndex: 40, opacity: cover.interpolate({inputRange: [0, .5, .501, 1], outputRange: [1, 1, 0, 0]}), transform: hinge(cover)}]}><View style={st.coverBand}/></Animated.View>
        </Animated.View>
        <Animated.View style={{position: 'absolute', width: SIZE, height: SIZE, opacity: logo, transform: [{scale: logo.interpolate({inputRange: [0, 1], outputRange: [.6, 1]})}]}}>
          <Animated.Image source={MARK_TILE} style={st.layer}/>
          <Animated.Image source={MARK} style={st.layer}/>
        </Animated.View>
        <Animated.View style={[st.wordRow, {opacity: word, transform: [{translateY: word.interpolate({inputRange: [0, 1], outputRange: [12, 0]})}]}]}>
          <Animated.Text style={st.word}>snellezer</Animated.Text>
          <Animated.Text style={[st.word, {color: brand.dot, opacity: dot, transform: [{translateY: dot.interpolate({inputRange: [0, 1], outputRange: [-16, 0]})}, {scale: dot.interpolate({inputRange: [0, 1], outputRange: [.4, 1]})}]}]}>.</Animated.Text>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

const st = themed(() => ({
  overlay: {position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: ui.page, zIndex: 100},
  fill: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  layer: {position: 'absolute', top: 0, left: 0, width: SIZE, height: SIZE},
  board: {position: 'absolute', left: -3, top: -3, width: PAGE_W + 3, height: PAGE_H + 6, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, backgroundColor: brand.green},
  leftPage: {position: 'absolute', left: 3, top: 3, width: PAGE_W, height: PAGE_H, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, backgroundColor: '#F4F1E8', borderWidth: 1, borderColor: '#DED8C8'},
  rightStack: {position: 'absolute', left: PAGE_W, top: 0, width: PAGE_W, height: PAGE_H, borderTopRightRadius: 6, borderBottomRightRadius: 6, backgroundColor: '#FBF9F3', borderWidth: 1, borderColor: '#DED8C8', paddingLeft: 10},
  page: {position: 'absolute', left: PAGE_W, top: 0, width: PAGE_W, height: PAGE_H, borderTopRightRadius: 6, borderBottomRightRadius: 6, backgroundColor: '#FFFDF8', borderWidth: 1, borderColor: '#E4DECF', paddingLeft: 10},
  line: {position: 'absolute', left: 10, height: 4, borderRadius: 2, backgroundColor: '#D9E3DD'},
  cover: {position: 'absolute', left: PAGE_W, top: -3, width: PAGE_W + 3, height: PAGE_H + 6, borderTopRightRadius: 8, borderBottomRightRadius: 8, backgroundColor: brand.green, justifyContent: 'center', alignItems: 'center'},
  coverBand: {width: '58%', height: 6, borderRadius: 3, backgroundColor: brand.dot},
  wordRow: {position: 'absolute', top: '50%', marginTop: SIZE / 2 + 22, flexDirection: 'row'},
  word: {fontFamily: fonts.heading, fontSize: 40, letterSpacing: -1.2, color: brand.ink},
}));
