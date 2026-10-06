import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Abonnement en aankopen: een aparte gegevenslaag, los van je leesgegevens (snellezer.v1).
 *
 * Productrichting: een laag abonnement van ongeveer € 2 per maand via de App Store en Google Play.
 * Je teksten, boeken en voortgang blijven altijd lokaal en blijven werken, wat de abonnementsstatus ook is.
 * Wissen van je voortgang raakt je abonnement niet, en andersom.
 *
 * Nog niet actief: de koppeling met de stores (aankopen en "aankopen herstellen") kan pas worden gebouwd
 * als de ontwikkelaarsaccounts en abonnementsproducten bestaan. Tot die tijd toont de app hier niets van,
 * zodat de interface niets belooft wat nog niet werkt. Zie RELEASE.md, onderdeel Abonnement.
 */
export const SUBSCRIPTION = {pricePerMonthEur: 1.99, productIds: {apple: 'snellezer.maand', google: 'snellezer_maand'}} as const;
export type Entitlement = {status: 'free' | 'premium'; source: 'none' | 'apple' | 'google'; expiresAt: string | null; checkedAt: string | null};
const KEY = 'snellezer.entitlement';
export const FREE: Entitlement = {status: 'free', source: 'none', expiresAt: null, checkedAt: null};

/** Leest de laatst bekende abonnementsstatus. Onbekend of beschadigd betekent: gratis. */
export async function loadEntitlement(): Promise<Entitlement> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    const x = raw ? JSON.parse(raw) : null;
    if (!x || (x.status !== 'free' && x.status !== 'premium')) return FREE;
    const expired = x.expiresAt && Date.parse(x.expiresAt) < Date.now();
    return expired ? {...FREE, checkedAt: x.checkedAt ?? null} : {status: x.status, source: ['apple', 'google'].includes(x.source) ? x.source : 'none', expiresAt: x.expiresAt ?? null, checkedAt: x.checkedAt ?? null};
  } catch { return FREE; }
}
export async function saveEntitlement(e: Entitlement) { await AsyncStorage.setItem(KEY, JSON.stringify(e)); }

/** Aankopen herstellen. Geeft 'niet-beschikbaar' zolang er geen store-koppeling is. */
export async function restorePurchases(): Promise<'hersteld' | 'geen-aankopen' | 'niet-beschikbaar'> {
  return 'niet-beschikbaar';
}
