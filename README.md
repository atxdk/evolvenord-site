# Evolvenord - Digital Marketing Agency & Venture Studio

A high-performance corporate website built with Astro, showcasing digital marketing services and venture projects.

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd evolvenord-site

# Install dependencies
bun install

# Start development server
bun run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build the site
bun run build

# Preview the production build
bun run preview
```

## 📁 Project Structure

```
/
├── public/               # Static assets (fonts, images, favicon)
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components (Button, Heading)
│   │   └── sections/    # Page sections (Hero, Features, etc.)
│   ├── content/         # MDX content collections
│   │   ├── blog/        # Blog posts
│   │   ├── case-studies/# Case studies
│   │   └── ventures/    # Venture projects
│   │   └── config.ts    # Content collection schemas
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── lib/             # Utility functions
│   │   ├── i18n.js      # Internationalization
│   │   └── siteConfig.js# Site configuration
│   ├── locales/         # Translation files
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── blog/
│   │   ├── case-studies/
│   │   └── ventures/
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## 🎨 Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.12.9
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 + [DaisyUI](https://daisyui.com/)
- **Content**: MDX with Astro Content Collections
- **Animations**: Motion One, Lottie, Lenis, Swiper (configured, ready to use)
- **Package Manager**: Bun

## 📝 Content Management

Content is managed through MDX files in the `src/content/` directory.

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'Brief description'
publishDate: '2025-01-15T09:00:00Z'
tags: ['tag1', 'tag2']
coverImage: '/images/blog/your-image.jpg'
draft: false
---

Your content here in Markdown/MDX format...
```

### Adding a Case Study

Create a new `.mdx` file in `src/content/case-studies/`:

```mdx
---
title: 'Project Title'
description: 'Project description'
publishDate: '2024-09-15T09:00:00Z'
client: 'Client Name'
industry: 'Industry'
services: ['Service 1', 'Service 2']
results: 'Key results achieved'
coverImage: '/images/case-studies/project.jpg'
draft: false
---

Your case study content...
```

### Adding a Venture

Create a new `.mdx` file in `src/content/ventures/`:

```mdx
---
title: 'Venture Name'
description: 'Venture description'
publishDate: '2024-08-01T09:00:00Z'
status: 'active' # active | beta | sunset
website: 'https://venture.com'
category: 'SaaS'
stack: ['Tech 1', 'Tech 2']
coverImage: '/images/ventures/logo.jpg'
draft: false
---

Your venture details...
```

## 🌐 Internationalization

The site supports multiple languages (English, Danish, Japanese). Translations are managed in `src/locales/`.

- Default language: English (`en`)
- Add translations in respective JSON files
- Update `src/lib/i18n.js` for language configuration

## 🎨 Customization

### Site Configuration

Edit `src/lib/siteConfig.js` to update:
- Company information
- Navigation menu
- Contact details

### Styling

- Global styles: `src/styles/global.css`
- Theme variables defined in `@theme` block
- Tailwind CSS v4 with CSS-based configuration

## 📦 Deployment

The project is configured for deployment with Coolify using Nixpacks.

### Build Command
```bash
bun run build
```

### Output Directory
```
dist/
```

## 🔧 Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run astro` - Run Astro CLI commands

## 📄 License

© 2025 Evolvenord. All rights reserved.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

---

Built with ❤️ using [Astro](https://astro.build/)
