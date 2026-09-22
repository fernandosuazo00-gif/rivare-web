/**
 * RIVÂRE "Armá tu bundle" — pricing engine + client-side selection store.
 *
 * Rules (fixed, all perfumes L.600 / 50 ml, one unit per perfume, up to 9):
 *   1 perfume   → sin descuento, envío normal (se coordina por WhatsApp)
 *   2 perfumes  → envío GRATIS
 *   3 perfumes  → 10% OFF + envío GRATIS
 *   4 perfumes  → 15% OFF + envío GRATIS
 *   5–9 perfumes→ 20% OFF + envío GRATIS
 */

export const UNIT_PRICE_HNL = 600;
export const MAX_BUNDLE_SLOTS = 9;

export interface BundleTier {
  /** Perfume count that unlocks this milestone. */
  count: number;
  discountPct: number;
  freeShipping: boolean;
  /** Short label shown on the slot / milestone chip. */
  label: string;
}

/** Milestones shown under slots 2–5 of the 9-slot row. */
export const BUNDLE_MILESTONES: BundleTier[] = [
  { count: 2, discountPct: 0, freeShipping: true, label: 'Envío gratis' },
  { count: 3, discountPct: 10, freeShipping: true, label: '10% OFF' },
  { count: 4, discountPct: 15, freeShipping: true, label: '15% OFF' },
  { count: 5, discountPct: 20, freeShipping: true, label: '20% OFF' },
];

export interface BundlePricing {
  count: number;
  unitPrice: number;
  subtotal: number;
  discountPct: number;
  discountAmount: number;
  freeShipping: boolean;
  total: number;
  /** The milestone still ahead, if any (null once 20% is reached). */
  nextMilestone: BundleTier | null;
  /** How many more perfumes unlock the next milestone. */
  remainingToNext: number;
}

/** Pure pricing calculation — the single source of truth for the whole bundle UI. */
export function getBundlePricing(count: number): BundlePricing {
  const n = Math.max(0, Math.min(MAX_BUNDLE_SLOTS, Math.round(count)));
  const subtotal = n * UNIT_PRICE_HNL;

  let discountPct = 0;
  let freeShipping = false;
  if (n >= 5) {
    discountPct = 20;
    freeShipping = true;
  } else if (n === 4) {
    discountPct = 15;
    freeShipping = true;
  } else if (n === 3) {
    discountPct = 10;
    freeShipping = true;
  } else if (n === 2) {
    discountPct = 0;
    freeShipping = true;
  }

  const discountAmount = Math.round((subtotal * discountPct) / 100);
  const total = subtotal - discountAmount;

  const nextMilestone = BUNDLE_MILESTONES.find((m) => m.count > n) ?? null;
  const remainingToNext = nextMilestone ? nextMilestone.count - n : 0;

  return { count: n, unitPrice: UNIT_PRICE_HNL, subtotal, discountPct, discountAmount, freeShipping, total, nextMilestone, remainingToNext };
}

// --- Selection store (localStorage, tab-scoped events) --------------------

const KEY = 'rivare.bundle.v1';
const EVT = 'rivare:bundle';
const isBrowser = typeof window !== 'undefined';

export function readBundle(): string[] {
  if (!isBrowser) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter((s): s is string => typeof s === 'string'))].slice(0, MAX_BUNDLE_SLOTS);
  } catch {
    return [];
  }
}

function writeBundle(slugs: string[]): string[] {
  const next = [...new Set(slugs)].slice(0, MAX_BUNDLE_SLOTS);
  if (isBrowser) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* best-effort */
    }
    window.dispatchEvent(new CustomEvent<string[]>(EVT, { detail: next }));
  }
  return next;
}

export function addToBundle(slug: string): string[] {
  const cur = readBundle();
  if (cur.includes(slug) || cur.length >= MAX_BUNDLE_SLOTS) return cur;
  return writeBundle([...cur, slug]);
}

export function removeFromBundle(slug: string): string[] {
  return writeBundle(readBundle().filter((s) => s !== slug));
}

export function toggleBundle(slug: string): string[] {
  const cur = readBundle();
  return cur.includes(slug) ? removeFromBundle(slug) : addToBundle(slug);
}

export function clearBundle(): string[] {
  return writeBundle([]);
}

export function onBundleChange(cb: (slugs: string[]) => void): () => void {
  if (!isBrowser) return () => {};
  const local = (e: Event) => cb((e as CustomEvent<string[]>).detail ?? readBundle());
  const cross = (e: StorageEvent) => {
    if (e.key === KEY) cb(readBundle());
  };
  window.addEventListener(EVT, local);
  window.addEventListener('storage', cross);
  return () => {
    window.removeEventListener(EVT, local);
    window.removeEventListener('storage', cross);
  };
}

export const BUNDLE_EVENT = EVT;
