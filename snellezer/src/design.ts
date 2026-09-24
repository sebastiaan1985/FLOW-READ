import { colors, spacing, radius, typography } from './theme';
export { colors, spacing, radius };
/** Kleuren uit het logo (assets/brand): de tegel, het woordmerk en de gele punt. */
export const brand = { green: '#086961', ink: '#094B49', dot: '#FDC64B' };
export const fonts = { heading: 'Outfit_600SemiBold', body: 'Figtree_400Regular', strong: 'Figtree_600SemiBold', comic: 'ComicNeue_400Regular', dyslexic: 'OpenDyslexic' };
export const ui = { page: '#FCFCF9', forest: '#143E35', forestSoft: '#E7F0EB', cream: '#F7F2E8', subtle: '#FAFAF7', white: colors.bg, line: '#E8ECE6', muted: '#5E6A64', dim: '#68736D', yellow: colors.sun, track: '#DBE7DF', error: '#963E32' };
export const metrics = { maxWidth: 1080, padding: 24, gap: 20, sectionGap: 32, headerHeight: 76, tabHeight: 78, buttonHeight: 56, borderWidth: 1, iconButton: 44, cardPadding: 24 };
export const textStyles = {
 display: {...typography.display, fontSize: 46, lineHeight: 51, color: colors.ink},
 title: {...typography.screenTitle, fontSize: 34, lineHeight: 40, color: colors.ink},
 heading: {...typography.heroTitle, fontSize: 24, lineHeight: 30, color: colors.ink},
 body: {...typography.body, fontSize: 16, lineHeight: 24, color: colors.ink},
 label: {...typography.cardTitle, fontSize: 15, lineHeight: 22, color: colors.ink},
 caption: {...typography.caption, fontSize: 13, lineHeight: 19, color: ui.muted},
 eyebrow: {...typography.sectionLabel, fontSize: 11, lineHeight: 16, color: ui.muted},
 stat: {...typography.statNumber, fontSize: 32, lineHeight: 38, color: colors.ink},
};
