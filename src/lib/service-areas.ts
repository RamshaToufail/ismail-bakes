export const APPROVED_RAWALPINDI_AREAS = [
  'Shalley Valley',
  'Afzal Town',
  'Afshan Colony',
  'Range Road',
  'Babu Market',
  'Westridge',
  'Chur Chowk',
  'Misrial Road',
  'Qasim Market',
] as const;

/** Bakery-approved local list; an optional public env override supports later maintenance. */
export function getServiceAreas(): string[] {
  const source =
    process.env.NEXT_PUBLIC_RAWALPINDI_SERVICE_AREAS ??
    process.env.NEXT_PUBLIC_RAWALPANDI_SERVICE_AREAS ??
    APPROVED_RAWALPINDI_AREAS.join(',');
  const unique = new Map<string, string>();
  for (const entry of source.split(',')) {
    const name = entry.trim().replace(/\s+/g, ' ');
    if (name.length > 1 && name.length <= 80) unique.set(name.toLocaleLowerCase('en'), name);
  }
  return [...unique.values()];
}

export function isApprovedServiceArea(area: string, approved = getServiceAreas()): boolean {
  return approved.includes(area);
}
