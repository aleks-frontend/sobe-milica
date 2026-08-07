// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sobamilica.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sr',
        locales: { sr: 'sr-RS', en: 'en-US' },
      },
      // The root `/` is just a client/edge redirect stub to /sr/, not real content — keep it out of the sitemap.
      filter: (page) => page !== 'https://sobamilica.com/',
    }),
  ],
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
