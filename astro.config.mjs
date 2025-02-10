// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: 'https://frankcff.netlify.app',
  trailingSlash: 'never',
  redirects: {
    '/': '/es',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
  experimental: {
    svg: {
      mode: 'sprite',
    },
  },
  adapter: netlify(),
})
