/**
 * Scent-family taxonomy for the catalog badges + filter drawer.
 *
 * Each RIVÂRE product's `scentFamily` (see `products.ts`) is assigned from the
 * REAL, publicly documented olfactory family of the fragrance it's inspired
 * by (e.g. Bleu de Chanel → Woody, Sauvage → Fresh) — it is not invented.
 * Only families actually present on at least one product should be surfaced
 * in filter UI; components derive that list from the product data rather
 * than hard-coding it.
 */

export type ScentFamily =
  | 'fresh'
  | 'citrus'
  | 'floral'
  | 'woody'
  | 'warm'
  | 'sweet'
  | 'fruity'
  | 'aromatic'
  | 'spicy'
  | 'amber'
  | 'leather'
  | 'powdery';

/** Canonical display order — also the order options appear in the filter drawer. */
export const SCENT_FAMILY_ORDER: ScentFamily[] = [
  'fresh',
  'citrus',
  'floral',
  'woody',
  'warm',
  'sweet',
  'fruity',
  'aromatic',
  'spicy',
  'amber',
  'leather',
  'powdery',
];

export const SCENT_FAMILY_LABEL: Record<ScentFamily, string> = {
  fresh: 'Fresh',
  citrus: 'Citrus',
  floral: 'Floral',
  woody: 'Woody',
  warm: 'Warm',
  sweet: 'Sweet',
  fruity: 'Fruity',
  aromatic: 'Aromatic',
  spicy: 'Spicy',
  amber: 'Amber',
  leather: 'Leather',
  powdery: 'Powdery',
};

/**
 * Subtle pill colors per family — muted tints only, kept inside RIVÂRE's warm
 * neutral range so the catalog reads as elegant rather than a color wheel.
 */
export const SCENT_FAMILY_BADGE: Record<ScentFamily, string> = {
  fresh: 'bg-[#E3ECE6] text-[#3F5D45]',
  citrus: 'bg-[#F0ECC7] text-[#6B5E1E]',
  floral: 'bg-[#F3E3E8] text-[#6B3A50]',
  woody: 'bg-[#E8DED1] text-[#4A3A28]',
  warm: 'bg-[#F1E2C7] text-[#6B4A1E]',
  sweet: 'bg-[#F5E4EA] text-[#7A3A55]',
  fruity: 'bg-[#F5E2D8] text-[#7A4430]',
  aromatic: 'bg-[#E1E9E6] text-[#3A5C52]',
  spicy: 'bg-[#F0DEC7] text-[#7A3E1E]',
  amber: 'bg-[#F1E3C7] text-[#6B4A1E]',
  leather: 'bg-[#E9D8CA] text-[#5A3A22]',
  powdery: 'bg-[#EFE6EB] text-[#5A4A5E]',
};

/** English labels for the gender filter drawer (mirrors the homepage Women/Men/Unisex cards). */
export const GENDER_FILTER_LABEL: Record<'mujer' | 'hombre' | 'unisex', string> = {
  mujer: 'Women',
  hombre: 'Men',
  unisex: 'Unisex',
};
