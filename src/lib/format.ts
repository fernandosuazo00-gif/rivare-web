/** Format a Lempira amount as "L.600" / "L.1,200". */
export function formatPrice(hnl: number | null): string {
  if (hnl == null) return 'Precio a consultar';
  return `L.${new Intl.NumberFormat('es-HN', { maximumFractionDigits: 0 }).format(hnl)}`;
}

export const PRICE_PENDING_NOTE = 'Confirmá el precio y la disponibilidad por WhatsApp.';
