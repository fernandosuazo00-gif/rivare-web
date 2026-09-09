import { SITE } from '@/data/site';

/** Build a wa.me deep link with a correctly-encoded prefilled message. */
export function waLink(text: string): string {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/** Message for "Ordenar por WhatsApp" from a single product page. */
export function productOrderText(p: { name: string; inspiredBy: string }): string {
  return [
    'Hola RIVÂRE 👋 Quiero pedir esta fragancia:',
    '',
    `• 1x ${p.name} — inspirado en ${p.inspiredBy} — Eau de Parfum 50 ml`,
    '',
    '¿Me pueden confirmar disponibilidad y precio?',
  ].join('\n');
}

/** Message for the "Fragancias a medida" service. */
export function customFragranceText(reference?: string): string {
  const ref = reference?.trim();
  if (ref) {
    return `Hola RIVÂRE 👋 Me gustaría solicitar una fragancia a medida inspirada en ${ref}. ¿Me pueden ayudar?`;
  }
  return 'Hola RIVÂRE 👋 Tengo una fragancia en mente que me gustaría solicitar a medida. ¿Me pueden ayudar?';
}

export interface CartOrderLine {
  name: string;
  inspiredBy: string;
  qty: number;
}

/** Message for "Ordenar por WhatsApp" from the cart. */
export function cartOrderText(lines: CartOrderLine[]): string {
  if (lines.length === 0) {
    return 'Hola RIVÂRE 👋 Quisiera hacer un pedido.';
  }
  const items = lines.map(
    (l) => `• ${l.qty}x ${l.name} — inspirado en ${l.inspiredBy} — 50 ml`,
  );
  return [
    'Hola RIVÂRE 👋 Quiero realizar el siguiente pedido:',
    '',
    ...items,
    '',
    '¿Me pueden confirmar disponibilidad y el total?',
  ].join('\n');
}

export const GENERIC_WA_TEXT = 'Hola RIVÂRE 👋 Quisiera más información sobre sus fragancias.';
