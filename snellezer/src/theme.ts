/**
 * Snellezer — design tokens
 * Richting: "Wit & Rust". Wit draagt alles, één diepgroen accent,
 * kleur bestaat alleen in illustraties — nooit in knoppen of tekst.
 *
 * Hardcode nooit een kleur in een component. Alles via deze file.
 */

export const colors = {
  // Interface — dit zijn de enige kleuren die de UI gebruikt
  bg: '#FFFFFF',
  bgReading: '#FBFCFC',      // leesscherm, net iets zachter dan wit
  surface: '#F5F8F9',        // rustige vlakken, secundaire knop
  border: '#EDF1F3',         // kaartrand, 1.5px
  borderStrong: '#E6ECEF',
  ink: '#0F1A20',            // primaire tekst
  inkMuted: '#5C6B75',       // bijschriften
  inkDim: '#8A99A3',         // inactieve tabs, metadata
  accent: '#0B6E63',         // primaire actie, actieve tab
  accentPressed: '#095A51',
  onAccent: '#FFFFFF',
  progress: '#34B98B',       // voortgangsbalken

  // Illustratiepalet — UITSLUITEND binnen illustraties
  coral: '#FF8A6B',
  sun: '#FFC861',
  sunDeep: '#FFB43D',
  sky: '#8EC5F5',
  sage: '#9BD4B8',
  lilac: '#B9A8F2',

  // Lichte tinten — achtergrond van een illustratie of gekleurde kaart
  tintCoral: '#FFEDE8',
  tintSun: '#FFF4DF',
  tintSky: '#E8F2FD',
  tintSage: '#E9F6EF',
  tintLilac: '#F1EDFD',
} as const;

/** Donker thema: dezelfde rollen, rustig en warm-donker. Het accent wordt lichter, zodat het ook als tekst leesbaar blijft. */
export const darkColors: Record<keyof typeof colors, string> = {
  bg: '#131C1F',
  bgReading: '#0F1719',
  surface: '#1B2629',
  border: '#253236',
  borderStrong: '#2C3A3E',
  ink: '#EEF3F1',
  inkMuted: '#A6B3AE',
  inkDim: '#7F8C87',
  accent: '#57C7B3',
  accentPressed: '#46B3A0',
  onAccent: '#06221E',
  progress: '#57C7B3',
  coral: '#FF8A6B',
  sun: '#FFC861',
  sunDeep: '#FFB43D',
  sky: '#8EC5F5',
  sage: '#9BD4B8',
  lilac: '#B9A8F2',
  tintCoral: '#3A2824',
  tintSun: '#342C1D',
  tintSky: '#1C2A37',
  tintSage: '#1B2E27',
  tintLilac: '#27233A',
};
export const lightColors: Record<keyof typeof colors, string> = {...colors};

export const spacing = {
  xs: 5,
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 28,
} as const;

export const radius = {
  sm: 14,     // kleine icoontegel
  card: 22,   // standaard kaart
  hero: 28,   // herokaart, grote vlakken
  pill: 999,  // knoppen, chips, balken
} as const;

export const layout = {
  screenPadding: 24,
  topInset: 60,       // ruimte voor de echte statusbalk — nooit zelf tekenen
  tabBarHeight: 88,
  minTouchTarget: 44,
  cardBorderWidth: 1.5,
} as const;

/**
 * Outfit  — cijfers en koppen (geometrisch, vriendelijk)
 * Figtree — al het overige (rustig in kleine maten)
 * Beide via Google Fonts / expo-font.
 */
export const typography = {
  display: { fontFamily: 'Outfit_600SemiBold', fontSize: 42, letterSpacing: -0.8 },
  screenTitle: { fontFamily: 'Outfit_600SemiBold', fontSize: 28, letterSpacing: -0.56 },
  heroTitle: { fontFamily: 'Outfit_600SemiBold', fontSize: 24, letterSpacing: -0.48 },
  statNumber: { fontFamily: 'Outfit_600SemiBold', fontSize: 27 },
  button: { fontFamily: 'Figtree_600SemiBold', fontSize: 16 },
  cardTitle: { fontFamily: 'Figtree_600SemiBold', fontSize: 15 },
  body: { fontFamily: 'Figtree_400Regular', fontSize: 14, lineHeight: 21 },
  caption: { fontFamily: 'Figtree_400Regular', fontSize: 12 },
  sectionLabel: {
    fontFamily: 'Figtree_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.1,
    textTransform: 'uppercase' as const,
  },
  tabLabel: { fontFamily: 'Figtree_400Regular', fontSize: 10 },
} as const;

export const motion = {
  duration: 180,
  easing: 'ease-out',
} as const;

/** De vier vaardigheidsgroepen en hun vaste kleur + illustratie. */
export const skills = {
  snelheid: { tint: colors.tintSun, illustration: 'snelheid', label: 'Snelheid' },
  begrip: { tint: colors.tintSage, illustration: 'begrip', label: 'Begrip' },
  blikveld: { tint: colors.tintSky, illustration: 'blikveld', label: 'Blikveld' },
  focus: { tint: colors.tintLilac, illustration: 'focus', label: 'Focus & rust' },
};
