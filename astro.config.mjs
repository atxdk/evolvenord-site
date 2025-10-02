import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind";
// REMOVED: import { storyblok } from '@storyblok/astro'
// REMOVED: import { loadEnv } from 'vite'
import mkcert from 'vite-plugin-mkcert'
// REMOVED: import netlify from '@astrojs/netlify'

// All the conditional logic based on Storyblok's environment has been removed.

export default defineConfig({
  // We are setting the output to 'static' for a fast, simple build.
  // This is ideal for your JAMstack goal and for deploying to Coolify.
  output: 'static',
  adapter: undefined, // No adapter is needed for a static build.

  // The 'storyblok' integration has been removed from this array.
  // For now, it's empty. We might add other integrations like 'sitemap' later.
  integrations: [tailwind({
    // This disables Astro's default base styles
    applyBaseStyles: false,
  })],

  image: {
    // UPDATED: We've changed the allowed hostname to your Strapi CMS.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.evolvenord.com',
      },
    ],
  },

  vite: {
    // The tailwindcss vite plugin is removed as the Astro integration handles it.
    plugins: [
      mkcert(),
    ],
    server: {
      https: true,
    },
  }
})