import React from 'react';
import {Image, View} from 'react-native';
import {Icon} from './UI';
import {colors, ui} from '../design';

/** Een ronde profielfoto, of een poppetje als er (nog) geen foto is. */
export function Avatar({photo, size}: {photo?: string; size: number}) {
  return <View style={{width: size, height: size, borderRadius: size / 2, overflow: 'hidden', backgroundColor: ui.forestSoft, alignItems: 'center', justifyContent: 'center'}}>
    {photo ? <Image source={{uri: photo}} style={{width: size, height: size}} accessibilityIgnoresInvertColors/> : <Icon name="user" size={Math.round(size * .45)} color={colors.accent}/>}
  </View>;
}
