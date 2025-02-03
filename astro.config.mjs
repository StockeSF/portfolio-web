// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon'

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://frankcff.netlify.app',

  redirects: {
    '/': '/es/'
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
	},

  integrations: [
    tailwind(),
    icon({
      iconDir: 'src/assets/icons/'
    })
	],

  experimental: {
    svg: {
      mode: 'sprite'
    }
	},

  adapter: netlify()
})