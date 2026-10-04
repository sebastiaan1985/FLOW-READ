/** Inloggen met Apple of Google. Het account blijft op dit apparaat: er is geen server die iets bewaart. */
import type {Account} from '../types';

/** Client-ID's uit Google Cloud Console, via EXPO_PUBLIC_-variabelen (zie AUTH.md). */
export const GOOGLE_IDS = {
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID || undefined,
  androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID || undefined,
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || undefined,
};

/** Of Google-inloggen op dit platform is ingesteld. Zonder client-ID tonen we de knop niet als werkend. */
export function googleConfigured(os: string, ids = GOOGLE_IDS): boolean {
  return !!(os === 'ios' ? ids.iosClientId : os === 'android' ? ids.androidClientId : ids.webClientId);
}

function base64UrlDecode(part: string): string {
  const b64 = part.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(part.length / 4) * 4, '=');
  const binary = atob(b64);
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** Leest naam en e-mail uit een Google ID-token. We gebruiken het alleen lokaal, voor de begroeting. */
export function accountFromGoogleToken(idToken: string): Account | null {
  try {
    const payload = JSON.parse(base64UrlDecode(idToken.split('.')[1] ?? ''));
    if (typeof payload.sub !== 'string' || !payload.sub) return null;
    return cleanAccount({provider: 'google', id: payload.sub, name: payload.given_name || payload.name, email: payload.email});
  } catch {
    return null;
  }
}

/** Houdt alleen wat we nodig hebben en valideert het (ook bij het inladen van opgeslagen data). */
export function cleanAccount(x: any): Account | null {
  if (!x || typeof x !== 'object' || (x.provider !== 'apple' && x.provider !== 'google') || typeof x.id !== 'string' || !x.id) return null;
  const text = (v: unknown, max: number) => typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : undefined;
  return {provider: x.provider, id: x.id.slice(0, 200), name: text(x.name, 40), email: text(x.email, 120)};
}
