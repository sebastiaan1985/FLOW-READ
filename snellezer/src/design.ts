import { StyleSheet } from 'react-native';
import type { ReadingSettings } from './types';
import { colors, darkColors, lightColors, skills, spacing, radius, typography } from './theme';
export { colors, spacing, radius };
/** Kleuren uit het logo (assets/brand): de tegel, het woordmerk en de gele punt. */
export const brand = { green: '#086961', ink: '#094B49', dot: '#FDC64B' };
export const fonts = { heading: 'Outfit_600SemiBold', body: 'Figtree_400Regular', strong: 'Figtree_600SemiBold', comic: 'ComicNeue_400Regular', dyslexic: 'OpenDyslexic' };
const lightUi = { page: '#FCFCF9', forest: '#143E35', forestSoft: '#E7F0EB', cream: '#F7F2E8', subtle: '#FAFAF7', white: '#FFFFFF', line: '#E8ECE6', muted: '#5E6A64', dim: '#68736D', yellow: '#FFC861', track: '#DBE7DF', error: '#963E32',
 /** Tekst en lijnen op het diepgroene vlak van de les van vandaag; dat vlak blijft in beide thema's donker. */
 onForest: '#FFFFFF', onForestMuted: '#C7D9CE', onForestDim: '#B8D0C3', forestPill: '#2A574B', onForestPill: '#DCE9DE', welcomePill: '#ECEBDD', forestInk: '#143E35' };
const darkUi: typeof lightUi = { page: '#0E1518', forest: '#15433A', forestSoft: '#1A302A', cream: '#2A2620', subtle: '#161F22', white: '#131C1F', line: '#243034', muted: '#A6B3AE', dim: '#8C9893', yellow: '#FFC861', track: '#26363A', error: '#F2907F',
 onForest: '#FFFFFF', onForestMuted: '#C7D9CE', onForestDim: '#B8D0C3', forestPill: '#2A574B', onForestPill: '#DCE9DE', welcomePill: '#34372C', forestInk: '#BFE3D6' };
export const ui = { ...lightUi };
export const metrics = { maxWidth: 1080, padding: 24, gap: 20, sectionGap: 32, headerHeight: 76, tabHeight: 78, buttonHeight: 56, borderWidth: 1, iconButton: 44, cardPadding: 24 };
const makeTextStyles = () => ({
 display: {...typography.display, fontSize: 46, lineHeight: 51, color: colors.ink},
 title: {...typography.screenTitle, fontSize: 34, lineHeight: 40, color: colors.ink},
 heading: {...typography.heroTitle, fontSize: 24, lineHeight: 30, color: colors.ink},
 body: {...typography.body, fontSize: 16, lineHeight: 24, color: colors.ink},
 label: {...typography.cardTitle, fontSize: 15, lineHeight: 22, color: colors.ink},
 caption: {...typography.caption, fontSize: 13, lineHeight: 19, color: ui.muted},
 eyebrow: {...typography.sectionLabel, fontSize: 11, lineHeight: 16, color: ui.muted},
 stat: {...typography.statNumber, fontSize: 32, lineHeight: 38, color: colors.ink},
});
export const textStyles = makeTextStyles();

let dark = false;
let version = 0;
export const isDark = () => dark;
/** Zet het hele palet om. Schermen die daarna renderen, lezen de nieuwe kleuren. */
export function applyTheme(next: boolean) {
 if (next === dark) return;
 dark = next; version++;
 Object.assign(colors as Record<string, string>, next ? darkColors : lightColors);
 Object.assign(ui, next ? darkUi : lightUi);
 Object.assign(textStyles, makeTextStyles());
 skills.snelheid.tint = colors.tintSun; skills.begrip.tint = colors.tintSage; skills.blikveld.tint = colors.tintSky; skills.focus.tint = colors.tintLilac;
}
/** Een stylesheet die opnieuw wordt opgebouwd als het thema wisselt. */
export function themed<S extends StyleSheet.NamedStyles<S>>(make: () => S): S {
 let built = -1, cache = {} as S;
 return new Proxy({} as S, { get(_, key) { if (built !== version) { cache = StyleSheet.create(make()); built = version; } return (cache as any)[key]; } });
}

/** Is het leesvlak donker? Door de eigen leesachtergrond, of door het donkere thema bij een witte achtergrond. */
export const readingIsDark = (x: ReadingSettings) => (x.enabled && x.background === 'dark') || (dark && (!x.enabled || x.background === 'white'));
/** Tekstkleur op het leesvlak: altijd leesbaar, ook bij een crème of grijze achtergrond in het donkere thema. */
export const readingInk = (x: ReadingSettings) => readingIsDark(x) ? '#EEF3F1' : '#0F1A20';
/** Accent op het leesvlak. */
export const readingAccent = (x: ReadingSettings) => readingIsDark(x) ? '#8FD9C8' : '#0B6E63';
