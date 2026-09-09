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

export const NAV: { label: string; href: string }[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Perfumes', href: '/perfumes' },
  { label: 'Fragancias a medida', href: '/fragancias-a-medida' },
  { label: 'Nosotros', href: '/nosotros' },
];

/** The shop / collection menu required by the brief. */
export const COLLECTION_NAV: { label: string; href: string; slug: CategorySlug | 'all' }[] = [
  { label: 'Ver todos', href: '/perfumes', slug: 'all' },
  { label: 'Para hombre', href: '/perfumes/para-hombre', slug: 'para-hombre' },
  { label: 'Para mujer', href: '/perfumes/para-mujer', slug: 'para-mujer' },
  { label: 'Unisex', href: '/perfumes/unisex', slug: 'unisex' },
];

export type CategorySlug = 'para-hombre' | 'para-mujer' | 'unisex';

export const CATEGORY_LABEL: Record<CategorySlug, string> = {
  'para-hombre': 'Para hombre',
  'para-mujer': 'Para mujer',
  unisex: 'Unisex',
};
