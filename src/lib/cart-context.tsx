'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { addCartLine, calculateSubtotal, clampQuantity, parseCartStorage, type NewCartLine } from '@/lib/cart-utils';

export type CartLine = {
  key: string;
  productId: string;
  name: string;
  category: string;
  image: string;
  unitPrice: number;
  quantity: number;
  flavour: string;
  customisation?: string;
};

type CartApi = {
  items: CartLine[];
  hydrated: boolean;
  addItem: (item: NewCartLine) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
  subtotal: number;
};
const STORAGE_KEY = 'ismail-bakes-cart-v1';
const CartContext = createContext<CartApi | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setItems(parseCartStorage(localStorage.getItem(STORAGE_KEY)));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const addItem = useCallback((item: NewCartLine) => setItems(current => addCartLine(current, item)), []);
  const updateQuantity = useCallback((key: string, quantity: number) => setItems(current => current.map(line => line.key === key ? { ...line, quantity: clampQuantity(quantity) } : line)), []);
  const removeItem = useCallback((key: string) => setItems(current => current.filter(line => line.key !== key)), []);
  const clearCart = useCallback(() => setItems([]), []);
  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const value = useMemo(() => ({ items, hydrated, addItem, updateQuantity, removeItem, clearCart, subtotal }), [items, hydrated, addItem, updateQuantity, removeItem, clearCart, subtotal]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
