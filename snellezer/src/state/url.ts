const PRIVATE_SUFFIXES = ['.localhost', '.local', '.internal', '.lan', '.home'];

function isPrivateName(host: string): boolean {
  if (host === 'localhost') return true;
  if (PRIVATE_SUFFIXES.some(suffix => host.endsWith(suffix))) return true;
  return !host.includes('.') && !host.includes(':');
}

function isPrivateIPv4(host: string): boolean {
  const match = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!match) return false;
  const [a, b] = [Number(match[1]), Number(match[2])];
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  return a === 100 && b >= 64 && b <= 127;
}

function isPrivateIPv6(host: string): boolean {
  if (!host.includes(':')) return false;
  if (host === '::1' || host === '::' || host.startsWith('::ffff:')) return true;
  return /^f[cd]/.test(host) || /^fe[89ab]/.test(host);
}

/** Alleen beveiligde links naar openbare websites mogen worden opgehaald. */
export function articleUrlProblem(input: string): string | null {
  let url: URL;
  try { url = new URL(input.trim()); } catch { return 'Vul een volledige link in die begint met https://.'; }
  if (url.protocol !== 'https:') return 'Alleen beveiligde links (https://) kunnen worden opgehaald.';
  if (url.username || url.password) return 'Links met een gebruikersnaam of wachtwoord worden niet opgehaald.';
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, '');
  if (isPrivateName(host) || isPrivateIPv4(host) || isPrivateIPv6(host)) return 'Links naar een lokaal of privé netwerk worden niet opgehaald.';
  return null;
}
