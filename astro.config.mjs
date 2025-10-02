import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://evolvenord.com',
  output: 'static',
  
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          da: 'da',
          ja: 'ja',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
