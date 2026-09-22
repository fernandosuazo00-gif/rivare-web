/**
 * RIVÂRE — global site configuration.
 *
 * Business data we do NOT have yet (prices, envíos, cobertura, horarios,
 * políticas de cambio, Instagram, métodos de pago, stock) is intentionally
 * left as `null` / TODO. Fill these in here when RIVÂRE provides them.
 */

export const SITE = {
  name: 'RIVÂRE',
  legalName: 'RIVÂRE',
  tagline: 'Una perfumería hecha en Honduras.',
  brandLine: 'Fragancias · inspiradas en los grandes · creadas para quedarse.',
  /** Shorter variant for tight spaces (mobile announcement bar). */
  brandLineShort: 'Eau de Parfum · Hecho en Honduras',
  description:
    'RIVÂRE es una perfumería hondureña de Eau de Parfum inspirada en las fragancias más reconocidas del mundo. Hecho en Honduras, en tu ciudad, a tu precio.',
  locality: 'Tegucigalpa',
  region: 'Francisco Morazán',
  country: 'HN',
  countryName: 'Honduras',
  locale: 'es_HN',
  lang: 'es',

  // Primary conversion channel.
  whatsapp: {
    // E.164 without the plus sign — used to build wa.me links.
    number: '50495696840',
    display: '+504 9569-6840',
  },

  // --- Business data still pending from RIVÂRE (do not invent) ---
  instagramUrl: null as string | null, // TODO: RIVÂRE Instagram
  email: null as string | null,
  addressLine: null as string | null, // TODO: dirección exacta / punto de entrega
  hours: null as string | null, // TODO: horario de atención
  shipping: null as string | null, // TODO: cobertura y costo de envío
  paymentMethods: null as string | null, // TODO: métodos de pago
  returnPolicy: null as string | null, // TODO: política de cambios

  // Currency for when prices are added.
  currency: 'HNL',
  currencySymbol: 'L',
} as const;

/** Gender / assortment slug used by product data, routes and filters. */
export type CategorySlug = 'hombre' | 'mujer' | 'unisex';

export const CATEGORY_LABEL: Record<CategorySlug, string> = {
  hombre: 'Hombre',
  mujer: 'Mujer',
  unisex: 'Unisex',
};

/** Every shoppable collection, gender-based or curated. */
export type CollectionSlug = 'all' | 'bestsellers' | 'novedades' | CategorySlug;

export const COLLECTIONS: Record<CollectionSlug, { label: string; href: string }> = {
  all: { label: 'Ver todo', href: '/perfumes' },
  bestsellers: { label: 'Bestsellers', href: '/perfumes/bestsellers' },
  novedades: { label: 'Novedades', href: '/perfumes/novedades' },
  hombre: { label: 'Hombre', href: '/perfumes/hombre' },
  mujer: { label: 'Mujer', href: '/perfumes/mujer' },
  unisex: { label: 'Unisex', href: '/perfumes/unisex' },
};

/** Quick filter/tab order used on collection pages and the bundle picker. */
export const COLLECTION_TABS: CollectionSlug[] = ['all', 'bestsellers', 'hombre', 'mujer', 'unisex'];

export interface NavLink {
  label: string;
  href: string;
}
export interface NavGroup {
  label: string;
  href?: string;
  items: NavLink[];
}

/** Header + mobile drawer navigation, grouped per the site IA. */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Perfumes',
    href: '/perfumes',
    items: [
      { label: 'Ver todo el catálogo', href: '/perfumes' },
      { label: 'Bestsellers', href: '/perfumes/bestsellers' },
      { label: 'Novedades', href: '/perfumes/novedades' },
    ],
  },
  {
    label: 'Comprar por género',
    items: [
      { label: 'Mujer', href: '/perfumes/mujer' },
      { label: 'Hombre', href: '/perfumes/hombre' },
      { label: 'Unisex', href: '/perfumes/unisex' },
    ],
  },
  {
    label: 'Más formas de comprar',
    items: [{ label: 'Armá tu bundle', href: '/bundle' }],
  },
  {
    label: 'RIVÂRE',
    items: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Fragancias a medida', href: '/fragancias-a-medida' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Preguntas frecuentes', href: '/faq' },
    ],
  },
];

/** Flat link list for the footer's "RIVÂRE" column. */
export const FOOTER_ABOUT_LINKS: NavLink[] = NAV_GROUPS[3].items;
