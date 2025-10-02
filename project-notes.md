# Project Notes

## Migration Completed (October 2, 2025)

Successfully migrated from Storyblok CMS to Astro Content Collections with MDX. All Storyblok dependencies and code have been removed.

### Key Changes

- **Content Management**: Migrated from Storyblok to Astro Content Collections using MDX files
- **Dependencies**: Removed Storyblok, Netlify, and PostHog; added @astrojs/mdx, @astrojs/sitemap, DaisyUI, Lenis, Lottie-web, Motion One, and Swiper
- **Configuration**: Updated to static output with MDX and sitemap integrations
- **Styling**: Using Tailwind CSS v4 with Vite plugin (CSS-based configuration)
- **Folder Structure**: Reorganized to match project specs with proper separation of UI components, sections, and utilities
- **Content Collections**: Implemented blog, case-studies, and ventures with Zod schemas
- **Sample Content**: Created demo content for blog posts, case studies, and ventures

### Current Structure

- `src/pages/`: Main routes (index, blog, case-studies, ventures)
- `src/layouts/`: BaseLayout with proper SEO
- `src/components/ui/`: Reusable UI components (Button, Heading)
- `src/components/sections/`: Page sections (Hero, Features, Stats, Testimonials, etc.)
- `src/content/`: MDX content organized by collection type
- `src/lib/`: Utility functions (i18n, siteConfig)
- `src/styles/`: Global CSS with Tailwind v4 theme

### Tech Stack

- Astro 5.12.9 with static output
- Tailwind CSS v4 with DaisyUI
- MDX for content authoring
- Motion libraries ready (Lenis, Motion One, Lottie, Swiper)

### Build Status

✅ Build successful
✅ All routes generating correctly
✅ Content collections working
✅ Site fully demoable

### Next Steps (Future)

- Add actual images to replace placeholders
- Implement animation libraries (AOS, GSAP, Lenis)
- Create GitHub Actions workflow for Coolify deployment
- Add more sample content
- Implement search functionality (Pagefind)

## Deployment

The project is configured for deployment using Coolify and Nixpacks. Nixpacks automatically detects the project's framework and builds the application without requiring a Dockerfile. 
NOT need a yml file in the repo for deployment given we are using Coolify’s GitHub integration. Coolify manages the pipeline itself.
