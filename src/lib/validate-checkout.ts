import { hasRequiredNotice } from '@/lib/checkout-rules';

export type CheckoutFields = {
  name: string;
  phone: string;
  address: string;
  area: string;
  date: string;
  time: string;
  instructions: string;
};

export function validateCheckout(fields: CheckoutFields, approvedAreas: string[], now = Date.now()): string | null {
  if (!fields.name.trim() || !fields.address.trim()) return 'Enter your name and full street address.';
  if (!approvedAreas.length) return 'Delivery areas are not configured yet. Please contact us to confirm your neighbourhood.';
  if (!approvedAreas.includes(fields.area)) return 'Choose an approved delivery area from the list.';
  const digits = fields.phone.replace(/\D/g, '');
  if (digits.length < 9 || digits.length > 15) return 'Enter a valid phone or WhatsApp number.';
  if (!hasRequiredNotice(fields.date, fields.time, now)) return 'Choose a delivery time at least 48 hours from now (Pakistan time).';
  return null;
}
