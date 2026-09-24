import React from 'react';
import {Image, Text, type TextStyle} from 'react-native';
import {brand, fonts} from '../design';

const TILE = require('../../assets/brand/tegel.png');

/** Het beeldmerk: de groene tegel met de S. */
export function LogoTile({size}: {size: number}) {
  return <Image source={TILE} style={{width: size, height: size}} accessibilityIgnoresInvertColors/>;
}

/** Het woordmerk: snellezer met de gele punt. */
export function Wordmark({size, style}: {size: number; style?: TextStyle}) {
  return <Text style={[{fontFamily: fonts.heading, fontSize: size, letterSpacing: -size * .03, color: brand.ink}, style]}>snellezer<Text style={{color: brand.dot}}>.</Text></Text>;
}
