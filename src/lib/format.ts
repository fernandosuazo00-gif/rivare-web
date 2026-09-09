import { SITE } from '@/data/site';

/** Format a Lempira price, or a graceful placeholder while prices are pending. */
export function formatPrice(hnl: number | null): string {
  if (hnl == null) return 'Precio a consultar';
  return new Intl.NumberFormat('es-HN', {
    style: 'currency',
    currency: SITE.currency,
    maximumFractionDigits: 0,
  }).format(hnl);
}

export const PRICE_PENDING_NOTE = 'Confirmá el precio y la disponibilidad por WhatsApp.';
