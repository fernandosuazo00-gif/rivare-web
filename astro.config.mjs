import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update to the production domain when it is known.
export const SITE_URL = 'https://rivare.hn';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  image: {
    // Studio product shots are 1792x2400. These widths cover 1x/2x for every layout slot.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: { assetsInlineLimit: 1024 },
  },
});
