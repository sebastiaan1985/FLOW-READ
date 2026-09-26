import {useState} from 'react';
import {Appearance as SystemAppearance, Platform, useColorScheme} from 'react-native';
import {applyTheme, colors, isDark, ui} from '../design';
import type {Appearance} from '../types';

const KEY = 'snellezer.appearance';

/** Een kopie van de keuze buiten de gewone opslag, zodat de webapp meteen in het juiste thema opent. */
export function rememberAppearance(value: Appearance) {
  if (Platform.OS === 'web' && typeof localStorage !== 'undefined') try { localStorage.setItem(KEY, value); } catch {}
}
function remembered(): Appearance {
  if (Platform.OS === 'web' && typeof localStorage !== 'undefined') try { const v = localStorage.getItem(KEY); if (v === 'light' || v === 'dark') return v; } catch {}
  return 'auto';
}

export const wantsDark = (choice: Appearance, system: string | null | undefined) => choice === 'dark' || (choice === 'auto' && system === 'dark');

/** Zet het thema vóór de eerste render, zodat er geen witte flits is. */
export function applyInitialTheme() { applyTheme(wantsDark(remembered(), SystemAppearance.getColorScheme())); paintPage(); }

function paintPage() {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  document.documentElement.style.backgroundColor = ui.page;
  document.body.style.backgroundColor = ui.page;
  document.documentElement.style.colorScheme = isDark() ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colors.bg);
}

/**
 * Volgt de keuze in de app en het systeem. Geeft een versienummer terug dat verandert als het thema wisselt;
 * de app bouwt dan opnieuw op met de nieuwe kleuren.
 */
export function useThemeVersion(choice: Appearance) {
  const system = useColorScheme();
  const [version, setVersion] = useState(0);
  const dark = wantsDark(choice, system);
  if (dark !== isDark()) { applyTheme(dark); paintPage(); setVersion(v => v + 1); }
  return version;
}
