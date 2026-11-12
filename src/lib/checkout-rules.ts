export const MIN_ADVANCE_HOURS = 48;
const HOUR_MS = 60 * 60 * 1000;
const PAKISTAN_OFFSET_MS = 5 * HOUR_MS;

/** Earliest calendar day in Pakistan time that can contain a delivery 48 hours from now. */
export function earliestDeliveryDate(now = Date.now()): string {
  const pkt = new Date(now + MIN_ADVANCE_HOURS * HOUR_MS + PAKISTAN_OFFSET_MS);
  return `${pkt.getUTCFullYear()}-${String(pkt.getUTCMonth() + 1).padStart(2, '0')}-${String(pkt.getUTCDate()).padStart(2, '0')}`;
}

/** Interpret a date and time selected in checkout as Pakistan Standard Time (UTC+05:00). */
export function deliveryInstant(date: string, time: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) return null;
  const timestamp = new Date(`${date}T${time}:00+05:00`).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
}

export function hasRequiredNotice(date: string, time: string, now = Date.now()): boolean {
  const selected = deliveryInstant(date, time);
  return selected !== null && selected >= now + MIN_ADVANCE_HOURS * HOUR_MS;
}
