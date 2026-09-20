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

export const darkColors = {
  bg: '#0E1518',
  bgReading: '#0B1113',
  surface: '#182126',
  border: '#243036',
  borderStrong: '#2C3940',
  ink: '#F2F6F7',
  inkMuted: '#9AA7AE',
  inkDim: '#6D7A81',
  accent: '#0B6E63',
  accentPressed: '#0E8677',
  onAccent: '#FFFFFF',
  progress: '#34B98B',
} as const;

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
} as const;
