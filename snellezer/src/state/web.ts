import {useEffect, useState} from 'react';
import {Platform} from 'react-native';

export type LaunchIntent = {share?: {title: string; text: string; url: string}; action?: 'les'};

/**
 * Leest eenmalig wat de webapp bij het openen meekreeg: een gedeeld artikel (Android "Delen met")
 * of een snelkoppeling van het beginscherm. Daarna wordt het adres opgeschoond.
 */
export function readLaunchIntent(): LaunchIntent {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const intent: LaunchIntent = {};
  const title = params.get('share-title') || '', text = params.get('share-text') || '', url = params.get('share-url') || '';
  if (title || text || url) intent.share = {title: title.slice(0, 100), text: text.slice(0, 100000), url: url.slice(0, 2000)};
  if (params.get('actie') === 'les') intent.action = 'les';
  if (intent.share || intent.action) window.history.replaceState(null, '', window.location.pathname);
  return intent;
}

type InstallEvent = Event & {prompt: () => Promise<void>; userChoice: Promise<{outcome: string}>};

/** Of de webapp op het beginscherm gezet kan worden, en hoe. */
export function useInstallHint() {
  const web = Platform.OS === 'web' && typeof window !== 'undefined';
  const standalone = web && (window.matchMedia?.('(display-mode: standalone)').matches || (navigator as any).standalone === true);
  const ios = web && /iphone|ipad|ipod/i.test(navigator.userAgent);
  const [event, setEvent] = useState<InstallEvent | null>(null);
  useEffect(() => {
    if (!web) return;
    const handler = (e: Event) => { e.preventDefault(); setEvent(e as InstallEvent); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, [web]);
  return {
    show: web && !standalone && (ios || !!event),
    ios,
    install: event ? async () => { await event.prompt(); setEvent(null); } : null,
  };
}
