# RIVÂRE — sitio web

Catálogo premium, shopping-first (referencia de UX: Dossier.eu), + funnel de
WhatsApp para **RIVÂRE**, una perfumería hecha en Honduras (Tegucigalpa).
17 fragancias, Eau de Parfum 50 ml, L.600 cada una, inspiradas en las
fragancias más reconocidas del mundo.

No es un e-commerce con pago en línea: el cliente **arma su selección** (o su
bundle) y hace el pedido por **WhatsApp** (`+504 9569-6840`).

## Stack

- **Astro 5** (salida estática) + **Tailwind** con tokens de diseño
- Fuentes self-hosted (`@fontsource-variable/fraunces` + `jost`)
- JavaScript mínimo (sin framework): carrito, bundle builder y búsqueda son
  módulos TS + `localStorage`, sin librerías de UI
- Imágenes optimizadas con `astro:assets` (WebP, `srcset`, lazy)
- Video (hero + editorial) servido desde `public/videos/`, sin audio,
  `faststart`, cargado perezosamente vía `IntersectionObserver`

## Comandos

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ localmente
```

## Estructura

```
src/
  data/
    site.ts          # WhatsApp, navegación agrupada (NAV_GROUPS), colecciones
                       # y DATOS DE NEGOCIO PENDIENTES
    products.ts       # las 17 fragancias (slug, género, bestseller/isNew, notas)
    testimonials.ts   # testimonios reales de clientes (Instagram)
  lib/
    cart.ts           # store del carrito (localStorage + eventos)
    bundle.ts          # motor de precios + selección del bundle (localStorage)
    whatsapp.ts        # generadores de mensajes wa.me (producto/carrito/bundle)
    format.ts          # formato de precio (L.600)
  components/          # Header, CartDrawer, SearchOverlay, ProductCarousel,
                       # GenderTiles, ProductCard, Testimonials, ...
  layouts/Base.astro   # <head>, SEO/JSON-LD, header, footer, reveals
  pages/
    index.astro           # hero (video) + bestsellers + género + novedades +
                          # editorial + testimonios + bundle teaser
    bundle.astro           # Armá tu bundle: 9 slots, milestones, resumen
    perfumes/               # /perfumes + /perfumes/[bestsellers|novedades|hombre|mujer|unisex]
    perfume/[slug].astro    # ficha de producto (17 rutas)
    fragancias-a-medida.astro
    nosotros.astro · contacto.astro · faq.astro
design-system/MASTER.md  # sistema de diseño (fuente de verdad)
```

### Navegación / colecciones

La IA vive en `src/data/site.ts`:
- `NAV_GROUPS` — Perfumes · Comprar por género · Más formas de comprar · RIVÂRE
  (usado por el header desktop con dropdowns y por el drawer mobile con acordeones nativos `<details>`).
- `COLLECTIONS` / `COLLECTION_TABS` — las 6 colecciones filtrables:
  `all`, `bestsellers`, `novedades`, `hombre`, `mujer`, `unisex`.
- Rutas viejas `/perfumes/para-hombre` y `/perfumes/para-mujer` redirigen
  (ver `redirects` en `astro.config.mjs`) a `/perfumes/hombre` y `/perfumes/mujer`.

### Armá tu bundle (`/bundle`)

Reglas fijas en `src/lib/bundle.ts` (L.600 por perfume, 1 unidad c/u, máx. 9):

| Perfumes | Descuento | Envío |
|---|---|---|
| 1 | — | normal (se coordina por WhatsApp) |
| 2 | — | GRATIS |
| 3 | 10% | GRATIS |
| 4 | 15% | GRATIS |
| 5–9 | 20% | GRATIS |

El resumen de precio y el mensaje de WhatsApp se generan dinámicamente desde la
selección real (nunca hay envío "gratis" fabricado por debajo de 2 perfumes).

## Datos de negocio pendientes (NO inventados)

Editar en `src/data/site.ts` cuando RIVÂRE los confirme:

| Campo | Estado |
|---|---|
| Precios de las fragancias | **L.600** por perfume (`priceHnl: 600` en `products.ts`). El subtotal del carrito es 600 × cantidad. |
| Instagram | `instagramUrl: null` |
| Dirección / punto de entrega | `addressLine: null` |
| Horario de atención | `hours: null` |
| Envío (cobertura y costo) | `shipping: null` |
| Métodos de pago | `paymentMethods: null` |
| Política de cambios | `returnPolicy: null` |
| Perfumes vendidos / reseñas (grid de valores del home) | **Placeholder** — `SITE.valueStats` en `site.ts` (`5,000+` / `10,000+`). No son datos reales de ventas ni reseñas (no los tenemos). Actualizar ahí, y revisar el texto de apoyo en `ValueGrid.astro` si el número cambia de forma importante. |
| Calificación (★) y conteo de reseñas por perfume (catálogo) | **Placeholder, confirmado explícitamente por el cliente** — `rating`/`reviewCount` en cada producto de `products.ts` (4.7–5.0, 39–214 reseñas). No son reseñas reales; no existen todavía. A diferencia de otros datos pendientes de esta tabla, **esto sí se pidió inventar a propósito** para la maqueta del catálogo estilo Dossier — reemplazar por datos reales en cuanto RIVÂRE tenga reseñas verificables. |

Cuando haya dominio de producción, actualizar `SITE_URL` en `astro.config.mjs`.

## Supuestos de este rediseño (Dossier-inspired)

- **Género por producto:** se tomó de los gráficos oficiales nuevos
  `Images/men.JPG`, `women.JPG`, `unisex.JPG` ("FOR HIM/HER/THEM"), que son más
  recientes que la categorización original. Esto **reclasificó** Ombre
  (unisex → hombre), Bianco (hombre → unisex) y Cielo (unisex → mujer).
- **Blue** (nuevo): inspirado en *Bleu de Chanel* (Chanel) — confirmado por la
  etiqueta del frasco. **Forte** (nuevo): inspirado en *Aventus* (Creed) —
  confirmado por la etiqueta y por `Images/rivare#1.png`.
- **Bestsellers** (8): Amber, Azure, Blue, Bloom, Diva, Forte, Rosé, Terra —
  subset balanceado por género para mercadeo. No representa datos reales de
  ventas ni rankings (no los tenemos).
- **Novedades:** Blue y Forte — son, literalmente, las últimas incorporaciones
  al catálogo (assets nuevos). No se marcó ningún producto viejo como "nuevo".
- Precios, envío, horarios, dirección, métodos de pago y política de cambios
  siguen sin inventarse — ver tabla abajo.
- **"Our latest drops"** (`src/components/OurLatestDrops.astro`): las 5 fotos
  de estilo de vida (`Images/rivare#2.png`, `rivare#3.png`, `rivare_imagen3.png`,
  `rivare#5.png`, `RIVAREIMAGEN8.jpeg`) se identificaron leyendo la etiqueta del
  frasco en cada imagen → Diva, Ombre, Libre, Donna y Bloom, en ese orden. El
  nombre y precio de cada card se resuelven de `products.ts` por slug (no están
  hardcodeados), así que quedan sincronizados si el catálogo cambia.
- **Categorías Women/Men/Unisex** (`src/components/CategoryShowcase.astro`,
  `src/assets/category/`): 3 fotos editoriales de moda (sin frascos de
  perfume) bajo Unsplash License, elegidas en blanco y negro para que las tres
  se sientan de una misma campaña. Enlazan a las colecciones de género que ya
  existían (`/perfumes/mujer|hombre|unisex`) — no se crearon rutas nuevas.
- **Catálogo rediseñado** (`FilterBar.astro`, `CatalogProductCard.astro`,
  `ScentBadge.astro`, `scentFamilies.ts`): la `scentFamily` de cada perfume se
  asignó a partir de la familia olfativa REAL y documentada de la fragancia
  que lo inspira (p. ej. Bleu de Chanel → Woody, Sauvage → Fresh) — no es
  arbitraria. El filtro "Scent Family" solo muestra las familias que de hecho
  aparecen en el catálogo (o en la colección/género actual), nunca la lista
  completa. Los tres botones (FILTER, Gender, Scent Family) abren el mismo
  panel inferior — es una simplificación intencional frente a tener tres
  paneles separados. Esto solo aplica al catálogo (`/perfumes` y sus
  colecciones); el carrusel de bestsellers del home y el rail de "también te
  puede interesar" en la ficha de producto siguen usando la tarjeta anterior
  sin cambios.
- **Fotografía decorativa del grid de valores** (`src/assets/ingredients/`):
  4 fotos de stock (hoja, flor, rosa, listón) bajo Unsplash License (uso
  comercial libre, sin atribución requerida), descargadas y optimizadas
  localmente — no son fotografía propia de RIVÂRE ni de sus productos.

## Notas legales

RIVÂRE elabora fragancias **inspiradas** en aromas reconocidos. El sitio no
implica fabricación, distribución, afiliación ni asociación con las casas
originales. Las notas olfativas mostradas describen la fragancia que **inspira**
cada perfume, no la fórmula de RIVÂRE.
