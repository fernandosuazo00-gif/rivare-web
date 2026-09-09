# RIVÂRE — sitio web

Catálogo premium + funnel de WhatsApp para **RIVÂRE**, una perfumería hecha en
Honduras (Tegucigalpa). Eau de Parfum, 50 ml, inspirado en las fragancias más
reconocidas del mundo.

No es un e-commerce con pago en línea: el cliente **arma su selección** y hace el
pedido por **WhatsApp** (`+504 9569-6840`).

## Stack

- **Astro 5** (salida estática) + **Tailwind** con tokens de diseño
- Fuentes self-hosted (`@fontsource-variable/fraunces` + `jost`)
- JavaScript mínimo (sin framework): carrito en `localStorage`, drawer, reveals
- Imágenes optimizadas con `astro:assets` (AVIF/WebP, `srcset`, lazy)

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
    site.ts          # WhatsApp, navegación y DATOS DE NEGOCIO PENDIENTES
    products.ts       # las 15 fragancias (slug, categoría, inspiración, notas)
    testimonials.ts   # testimonios reales de clientes (Instagram)
  lib/
    cart.ts           # store del carrito (localStorage + eventos)
    whatsapp.ts        # generadores de mensajes wa.me
    format.ts          # formato de precio / placeholders
  components/          # Header, CartDrawer, ProductCard, Testimonials, ...
  layouts/Base.astro   # <head>, SEO/JSON-LD, header, footer, reveals
  pages/
    index.astro
    perfumes/            # /perfumes  +  /perfumes/[para-hombre|para-mujer|unisex]
    perfume/[slug].astro # ficha de producto
    fragancias-a-medida.astro
    nosotros.astro
design-system/MASTER.md  # sistema de diseño (fuente de verdad)
```

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

Cuando haya dominio de producción, actualizar `SITE_URL` en `astro.config.mjs`.

## Notas legales

RIVÂRE elabora fragancias **inspiradas** en aromas reconocidos. El sitio no
implica fabricación, distribución, afiliación ni asociación con las casas
originales. Las notas olfativas mostradas describen la fragancia que **inspira**
cada perfume, no la fórmula de RIVÂRE.
