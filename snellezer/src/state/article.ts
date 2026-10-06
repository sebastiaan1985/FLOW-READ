import {Platform} from 'react-native';
import {articleUrlProblem} from './url';

/** Een fout met een melding die je zo aan de gebruiker kunt laten zien. */
export class ArticleError extends Error {}

const ENTITIES: Record<string, string> = {nbsp: ' ', amp: '&', quot: '"', '#39': "'", apos: "'", lt: '<', gt: '>', hellip: '…', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“'};
const decode = (s: string) => s.replace(/&(#\d+|[a-z]+|#39);/gi, (m, e) => e.startsWith('#') && e !== '#39' ? String.fromCodePoint(Math.min(0x10ffff, Number(e.slice(1)) || 32)) : ENTITIES[e.toLowerCase()] ?? m);

/**
 * Haalt de leesbare hoofdtekst uit een webpagina: navigatie, menu's, reclame, formulieren en scripts gaan eruit.
 * Alleen platte tekst blijft over; er wordt niets van de pagina uitgevoerd of ingevoegd.
 */
export function extractArticle(html: string): {title: string; text: string} {
  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const pageTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || doc.querySelector('h1')?.textContent || doc.title;
    doc.querySelectorAll('script,style,nav,header,footer,aside,form,noscript,svg,iframe,button,figure,figcaption,[role=navigation],[role=banner],[role=complementary],[aria-hidden=true],.ad,.ads,.advert,.advertisement,.cookie,.newsletter,.share,.social,.related,.comments').forEach(node => node.remove());
    const article = doc.querySelector('article') || doc.querySelector('main') || doc.querySelector('[role=main]') || doc.body;
    const blocks = Array.from(article.querySelectorAll('h1,h2,h3,p,li,blockquote')).map(node => node.textContent?.replace(/\s+/g, ' ').trim() || '').filter(t => t.length > 1);
    // Losse korte regels zijn meestal menu-items of knoppen, geen lopende tekst.
    const body = blocks.filter(t => t.split(' ').length >= 4 || /[.!?]$/.test(t));
    return {title: (pageTitle || '').trim(), text: (body.length ? body.join('\n\n') : article.textContent || '').trim()};
  }
  const title = decode(html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)/i)?.[1] || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
  const body = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] || html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
  const text = decode(body.replace(/<(script|style|nav|header|footer|aside|noscript|form|figure|button)[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<\/(p|div|h[1-6]|li|blockquote)>|<br\s*\/?\s*>/gi, '\n\n').replace(/<[^>]+>/g, ' '))
    .replace(/[ \t]+/g, ' ').split(/\n\s*\n+/).map(t => t.trim()).filter(t => t.split(' ').length >= 4 || /[.!?]$/.test(t)).join('\n\n').trim();
  return {title: title.trim(), text};
}

/** Haalt een artikel op via een https-link. Gooit een ArticleError met een begrijpelijke melding als het niet lukt. */
export async function fetchArticle(input: string): Promise<{title: string; text: string}> {
  const problem = articleUrlProblem(input);
  if (problem) throw new ArticleError(problem);
  const address = new URL(input.trim());
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    let response: Response;
    try { response = await fetch(address.href, {signal: controller.signal, credentials: 'omit', redirect: 'follow'}); }
    catch { throw new ArticleError(Platform.OS === 'web' ? 'Deze website laat direct ophalen mogelijk niet toe, is niet bereikbaar of reageert te langzaam. Kopieer de artikeltekst en plak die hieronder.' : 'Deze pagina kon niet worden opgehaald. Kopieer de artikeltekst en plak die hieronder.'); }
    if (response.url && articleUrlProblem(response.url)) throw new ArticleError('Deze link stuurt door naar een adres dat niet wordt opgehaald.');
    if (!response.ok) throw new ArticleError('Deze pagina kon niet worden opgehaald. Kopieer de artikeltekst en plak die hieronder.');
    const type = response.headers.get('content-type') || '';
    if (!/text\/(html|plain)|application\/xhtml\+xml/i.test(type)) throw new ArticleError('Deze link levert geen leesbare webpagina of tekst op. Kopieer de tekst en plak hem hieronder.');
    if (Number(response.headers.get('content-length') || 0) > 2000000) throw new ArticleError('Deze pagina is te groot om te importeren. Plak alleen het artikel hieronder.');
    const content = await response.text();
    if (content.length > 2000000) throw new ArticleError('Deze pagina is te groot om te importeren. Plak alleen het artikel hieronder.');
    const article = /text\/plain/i.test(type) ? {title: address.hostname, text: content} : extractArticle(content);
    if (article.text.trim().split(/\s+/).length < 10) throw new ArticleError('Op deze pagina is te weinig artikeltekst gevonden. Kopieer het artikel en plak het hieronder.');
    if (article.text.length > 100000) throw new ArticleError('Het artikel is te lang. Plak een deel van maximaal 100.000 tekens hieronder.');
    return {title: article.title.slice(0, 100), text: article.text};
  } finally { clearTimeout(timeout); }
}
