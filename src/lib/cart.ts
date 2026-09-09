/**
 * RIVÂRE cart — tiny client-side store backed by localStorage.
 * No framework. Components subscribe via `onCartChange`.
 *
 * A line only stores { slug, qty }. Product details (name, image, inspiredBy,
 * price) are resolved from the static catalog at render time.
 */

export interface CartLine {
  slug: string;
  qty: number;
}

const KEY = 'rivare.cart.v1';
const EVT = 'rivare:cart';
const MAX_QTY = 20;

const isBrowser = typeof window !== 'undefined';

export function readCart(): CartLine[] {
  if (!isBrowser) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((l): l is CartLine => l && typeof l.slug === 'string' && Number.isFinite(l.qty))
      .map((l) => ({ slug: l.slug, qty: clampQty(l.qty) }))
      .filter((l) => l.qty > 0);
  } catch {
    return [];
  }
}

function writeCart(lines: CartLine[]): void {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* storage unavailable (private mode, quota) — cart is best-effort */
  }
  window.dispatchEvent(new CustomEvent<CartLine[]>(EVT, { detail: lines }));
}

function clampQty(n: number): number {
  return Math.max(0, Math.min(MAX_QTY, Math.round(n)));
}

export function cartCount(lines = readCart()): number {
  return lines.reduce((sum, l) => sum + l.qty, 0);
}

export function addToCart(slug: string, qty = 1): CartLine[] {
  const lines = readCart();
  const existing = lines.find((l) => l.slug === slug);
  if (existing) {
    existing.qty = clampQty(existing.qty + qty);
  } else {
    lines.push({ slug, qty: clampQty(qty) });
  }
  const next = lines.filter((l) => l.qty > 0);
  writeCart(next);
  return next;
}

export function setQty(slug: string, qty: number): CartLine[] {
  let lines = readCart();
  const clamped = clampQty(qty);
  if (clamped <= 0) {
    lines = lines.filter((l) => l.slug !== slug);
  } else {
    const existing = lines.find((l) => l.slug === slug);
    if (existing) existing.qty = clamped;
    else lines.push({ slug, qty: clamped });
  }
  writeCart(lines);
  return lines;
}

export function removeFromCart(slug: string): CartLine[] {
  const next = readCart().filter((l) => l.slug !== slug);
  writeCart(next);
  return next;
}

export function clearCart(): void {
  writeCart([]);
}

/** Subscribe to cart changes (same tab + cross-tab). Returns an unsubscribe fn. */
export function onCartChange(cb: (lines: CartLine[]) => void): () => void {
  if (!isBrowser) return () => {};
  const local = (e: Event) => cb((e as CustomEvent<CartLine[]>).detail ?? readCart());
  const cross = (e: StorageEvent) => {
    if (e.key === KEY) cb(readCart());
  };
  window.addEventListener(EVT, local);
  window.addEventListener('storage', cross);
  return () => {
    window.removeEventListener(EVT, local);
    window.removeEventListener('storage', cross);
  };
}

export const CART_EVENT = EVT;
export const MAX_LINE_QTY = MAX_QTY;
