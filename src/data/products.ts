import type { ImageMetadata } from 'astro';
import type { CategorySlug } from './site';

import amber from '@/assets/products/amber.jpeg';
import azure from '@/assets/products/azure.jpeg';
import bianco from '@/assets/products/bianco.jpeg';
import bloom from '@/assets/products/bloom.jpeg';
import cielo from '@/assets/products/cielo.jpeg';
import diva from '@/assets/products/diva.jpeg';
import donna from '@/assets/products/donna.jpeg';
import libre from '@/assets/products/libre.jpeg';
import lumen from '@/assets/products/lumen.jpeg';
import nomada from '@/assets/products/nomada.jpeg';
import ombre from '@/assets/products/ombre.jpeg';
import rose from '@/assets/products/rose.jpeg';
import royale from '@/assets/products/royale.jpeg';
import terra from '@/assets/products/terra.jpeg';
import uomo from '@/assets/products/uomo.jpeg';

export interface Product {
  slug: string;
  name: string;
  /** Nombre de la fragancia que inspira este perfume. */
  inspiredBy: string;
  /** Casa original de esa fragancia (solo referencia — RIVÂRE es independiente). */
  house: string;
  category: CategorySlug;
  /** Familia olfativa de la fragancia que inspira. */
  family: string;
  /** Frase editorial breve del carácter del aroma. */
  character: string;
  /** Momento / uso sugerido. */
  use: string;
  /** Pirámide de la fragancia que INSPIRA (no es la fórmula de RIVÂRE). */
  notes: { top: string[]; heart: string[]; base: string[] };
  image: ImageMetadata;
  /** Precio en Lempiras (L.). Toda la línea: 600. `null` = "Precio a consultar". */
  priceHnl: number | null;
}

export const SIZE_ML = 50;
export const SIZE_LABEL = 'Eau de Parfum · 50 ml / 1.7 fl oz';

/**
 * Las notas listadas describen la fragancia que inspira cada perfume.
 * RIVÂRE es una interpretación independiente en Eau de Parfum y no está
 * afiliada, asociada ni respaldada por las casas mencionadas.
 */
export const NOTES_DISCLAIMER =
  'Las notas corresponden a la fragancia que inspira este perfume. RIVÂRE es una interpretación independiente y no está afiliada a las casas originales.';

export const products: Product[] = [
  {
    slug: 'amber',
    name: 'Amber',
    inspiredBy: 'Baccarat Rouge 540',
    house: 'Maison Francis Kurkdjian',
    category: 'unisex',
    family: 'Ambarada floral',
    character: 'Luminoso y mineral, con un dulzor de azafrán y madera ámbar que se queda en la piel.',
    use: 'Firma diaria · de día a noche',
    notes: {
      top: ['Azafrán', 'Jazmín'],
      heart: ['Madera de ámbar', 'Ambargris'],
      base: ['Cedro', 'Resina de abeto'],
    },
    image: amber,
    priceHnl: 600,
  },
  {
    slug: 'azure',
    name: 'Azure',
    inspiredBy: 'Sauvage',
    house: 'Dior',
    category: 'para-hombre',
    family: 'Aromática fresca',
    character: 'Bergamota radiante y pimienta sobre un fondo de ambroxan mineral. Limpio y expansivo.',
    use: 'Diario · oficina · clima cálido',
    notes: {
      top: ['Bergamota', 'Pimienta de Sichuan'],
      heart: ['Lavanda', 'Geranio'],
      base: ['Ambroxan', 'Cedro'],
    },
    image: azure,
    priceHnl: 600,
  },
  {
    slug: 'bianco',
    name: 'Bianco',
    inspiredBy: 'Silver Mountain Water',
    house: 'Creed',
    category: 'para-hombre',
    family: 'Cítrica verde almizclada',
    character: 'Aire de montaña: té verde, grosella y un almizcle transparente. Fresco y elegante.',
    use: 'Diario · primavera y verano',
    notes: {
      top: ['Bergamota', 'Mandarina'],
      heart: ['Té verde', 'Grosella negra'],
      base: ['Almizcle', 'Sándalo'],
    },
    image: bianco,
    priceHnl: 600,
  },
  {
    slug: 'bloom',
    name: 'Bloom',
    inspiredBy: 'Flowerbomb',
    house: 'Viktor & Rolf',
    category: 'para-mujer',
    family: 'Floral oriental',
    character: 'Un ramo que explota en dulce: jazmín, orquídea y rosa sobre pachulí y almizcle.',
    use: 'Noche · ocasión',
    notes: {
      top: ['Té', 'Bergamota'],
      heart: ['Jazmín', 'Orquídea', 'Rosa'],
      base: ['Pachulí', 'Almizcle'],
    },
    image: bloom,
    priceHnl: 600,
  },
  {
    slug: 'cielo',
    name: 'Cielo',
    inspiredBy: 'Erba Pura',
    house: 'Xerjoff',
    category: 'unisex',
    family: 'Frutal cítrica ambarada',
    character: 'Naranja de Sicilia y frutas jugosas sobre un fondo de ámbar y vainilla. Adictivo y solar.',
    use: 'Diario · todo el año',
    notes: {
      top: ['Naranja de Sicilia', 'Bergamota', 'Limón'],
      heart: ['Notas frutales'],
      base: ['Almizcle blanco', 'Ámbar', 'Vainilla'],
    },
    image: cielo,
    priceHnl: 600,
  },
  {
    slug: 'diva',
    name: 'Diva',
    inspiredBy: 'Good Girl',
    house: 'Carolina Herrera',
    category: 'para-mujer',
    family: 'Floral oriental amaderada',
    character: 'El contraste entre café y almendra con nardo y cacao. Sensual y con carácter.',
    use: 'Noche · otoño e invierno',
    notes: {
      top: ['Almendra', 'Café'],
      heart: ['Nardo', 'Jazmín'],
      base: ['Haba tonka', 'Cacao'],
    },
    image: diva,
    priceHnl: 600,
  },
  {
    slug: 'donna',
    name: 'Donna',
    inspiredBy: 'Born in Roma Donna',
    house: 'Valentino',
    category: 'para-mujer',
    family: 'Floral ambarada',
    character: 'Jazmín grandiflorum envuelto en vainilla bourbon y madera guayaco. Moderno y cálido.',
    use: 'Diario · noche',
    notes: {
      top: ['Grosella negra', 'Bergamota'],
      heart: ['Jazmín grandiflorum'],
      base: ['Vainilla bourbon', 'Madera guayaco'],
    },
    image: donna,
    priceHnl: 600,
  },
  {
    slug: 'libre',
    name: 'Libre',
    inspiredBy: 'Libre',
    house: 'Yves Saint Laurent',
    category: 'para-mujer',
    family: 'Floral aromática',
    character: 'La tensión entre lavanda y flor de azahar, resuelta en vainilla y almizcle.',
    use: 'Diario · noche',
    notes: {
      top: ['Mandarina', 'Grosella negra', 'Lavanda'],
      heart: ['Flor de azahar', 'Jazmín'],
      base: ['Vainilla', 'Almizcle', 'Cedro'],
    },
    image: libre,
    priceHnl: 600,
  },
  {
    slug: 'lumen',
    name: 'Lumen',
    inspiredBy: 'Imagination',
    house: 'Louis Vuitton',
    category: 'para-hombre',
    family: 'Cítrica aromática amaderada',
    character: 'Bergamota y jengibre sobre té negro y maderas claras. Nítido, brillante, energético.',
    use: 'Diario · oficina',
    notes: {
      top: ['Bergamota', 'Jengibre'],
      heart: ['Té negro'],
      base: ['Maderas', 'Ambrox'],
    },
    image: lumen,
    priceHnl: 600,
  },
  {
    slug: 'nomada',
    name: 'Nomada',
    inspiredBy: 'Ombre Nomade',
    house: 'Louis Vuitton',
    category: 'para-hombre',
    family: 'Amaderada oriental (oud)',
    character: 'Oud, incienso y abedul ahumado con un toque de frambuesa. Resinoso e intenso.',
    use: 'Noche · ocasión · invierno',
    notes: {
      top: ['Frambuesa', 'Bergamota'],
      heart: ['Oud', 'Incienso', 'Abedul'],
      base: ['Benjuí', 'Pachulí', 'Vainilla'],
    },
    image: nomada,
    priceHnl: 600,
  },
  {
    slug: 'ombre',
    name: 'Ombre',
    inspiredBy: 'Ombré Leather',
    house: 'Tom Ford',
    category: 'unisex',
    family: 'Cuero ambarada',
    character: 'Cuero crudo y ante con jazmín sambac sobre ámbar y pachulí. Terroso y cálido.',
    use: 'Noche · todo el año',
    notes: {
      top: ['Cardamomo'],
      heart: ['Cuero', 'Jazmín sambac'],
      base: ['Ámbar', 'Pachulí', 'Musgo'],
    },
    image: ombre,
    priceHnl: 600,
  },
  {
    slug: 'rose',
    name: 'Rosé',
    inspiredBy: 'Delina',
    house: 'Parfums de Marly',
    category: 'para-mujer',
    family: 'Floral frutal',
    character: 'Rosa turca con lichi y ruibarbo sobre vainilla e incienso. Como champagne rosado.',
    use: 'Diario · ocasión',
    notes: {
      top: ['Lichi', 'Ruibarbo', 'Bergamota'],
      heart: ['Rosa turca', 'Peonía', 'Muguete'],
      base: ['Vainilla', 'Almizcle', 'Incienso'],
    },
    image: rose,
    priceHnl: 600,
  },
  {
    slug: 'royale',
    name: 'Royale',
    inspiredBy: 'Layton',
    house: 'Parfums de Marly',
    category: 'para-hombre',
    family: 'Aromática ambarada',
    character: 'Manzana y lavanda con un corazón floral especiado sobre vainilla y sándalo. Muy versátil.',
    use: 'Diario · noche · todo el año',
    notes: {
      top: ['Manzana', 'Bergamota', 'Lavanda'],
      heart: ['Geranio', 'Violeta', 'Jazmín'],
      base: ['Vainilla', 'Madera guayaco', 'Sándalo'],
    },
    image: royale,
    priceHnl: 600,
  },
  {
    slug: 'terra',
    name: 'Terra',
    inspiredBy: 'Santal 33',
    house: 'Le Labo',
    category: 'unisex',
    family: 'Amaderada aromática',
    character: 'Sándalo seco, papiro y un cuero ahumado con iris y violeta. Una firma unisex reconocible.',
    use: 'Firma diaria · todo el año',
    notes: {
      top: ['Cardamomo', 'Iris', 'Violeta'],
      heart: ['Sándalo', 'Papiro'],
      base: ['Cuero', 'Cedro', 'Ámbar'],
    },
    image: terra,
    priceHnl: 600,
  },
  {
    slug: 'uomo',
    name: 'Uomo',
    inspiredBy: 'Born in Roma Uomo',
    house: 'Valentino',
    category: 'para-hombre',
    family: 'Aromática amaderada',
    character: 'Frescor de enebro y salvia sobre vetiver mineral y un fondo de vainilla bourbon.',
    use: 'Diario · oficina · noche',
    notes: {
      top: ['Enebro', 'Bergamota'],
      heart: ['Salvia', 'Vetiver'],
      base: ['Maderas', 'Vainilla bourbon'],
    },
    image: uomo,
    priceHnl: 600,
  },
];

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (category: CategorySlug): Product[] =>
  products.filter((p) => p.category === category);

export const categoryCounts = {
  all: products.length,
  'para-hombre': productsByCategory('para-hombre').length,
  'para-mujer': productsByCategory('para-mujer').length,
  unisex: productsByCategory('unisex').length,
};
