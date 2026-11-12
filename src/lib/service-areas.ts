/**
 * Approved delivery areas are intentionally supplied by the bakery owner,
 * not guessed in code. Set NEXT_PUBLIC_RAWALPINDI_SERVICE_AREAS to a comma-
 * separated allowlist before enabling checkout (for example via Vercel env).
 */
export function getServiceAreas(): string[] {
  const source = process.env.NEXT_PUBLIC_RAWALPINDI_SERVICE_AREAS ?? '';
  const unique = new Map<string, string>();
  for (const entry of source.split(',')) {
    const name = entry.trim().replace(/\s+/g, ' ');
    if (name.length > 1 && name.length <= 80) unique.set(name.toLocaleLowerCase('en'), name);
  }
  return [...unique.values()].sort((a, b) => a.localeCompare(b));
}
