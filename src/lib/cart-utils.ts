import type { CartLine } from '@/lib/cart-context';

export type NewCartLine = Omit<CartLine, 'key' | 'quantity'> & { quantity?: number };

export function calculateSubtotal(items: Pick<CartLine, 'unitPrice' | 'quantity'>[]): number {
  return items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
}

export function clampQuantity(quantity: number): number {
  return Math.max(1, Math.min(99, Math.floor(quantity) || 1));
}

export function addCartLine(items: CartLine[], item: NewCartLine): CartLine[] {
  const key = `${item.productId}::${item.flavour}::${item.customisation?.trim() ?? ''}`;
  const found = items.find(line => line.key === key);
  if (found) return items.map(line => line.key === key ? { ...line, quantity: clampQuantity(line.quantity + (item.quantity ?? 1)) } : line);
  return [...items, { ...item, key, quantity: clampQuantity(item.quantity ?? 1) }];
}

export function parseCartStorage(raw: string | null): CartLine[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isCartLine) : [];
  } catch {
    return [];
  }
}

export function isCartLine(value: unknown): value is CartLine {
  if (!value || typeof value !== 'object') return false;
  const line = value as Partial<CartLine>;
  return typeof line.key === 'string' && typeof line.productId === 'string' && typeof line.name === 'string'
    && typeof line.category === 'string' && typeof line.image === 'string' && Number.isFinite(line.unitPrice)
    && Number.isInteger(line.quantity) && (line.quantity ?? 0) > 0 && typeof line.flavour === 'string';
}
