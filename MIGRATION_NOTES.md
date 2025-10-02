# Migration from Hugo to Astro

## Summary
Successfully migrated personal academic website from Hugo to Astro with Tailwind CSS v4.

## Infrastructure Updates

### Framework
- **From:** Hugo (static site generator written in Go)
- **To:** Astro v5.14.1 (modern JavaScript framework)

### Styling
- **From:** Tailwind CSS v2.0.4
- **To:** Tailwind CSS v4.1.14
- Uses new Tailwind v4 features: `@import "tailwindcss"` and `@theme`

### Build System
- **Node.js:** v22 (LTS)
- **Package Manager:** npm v11.6.0
- **Build Tool:** Vite (bundled with Astro)

### CI/CD
- **From:** GitHub Actions with Hugo workflow
- **To:** Modern GitHub Actions workflow
  - `actions/checkout@v5`
  - `actions/setup-node@v5`
  - `peaceiris/actions-gh-pages@v4`

## Project Structure

```
astro-site/
├── src/
│   ├── components/        # Migrated from Hugo partials
│   │   ├── Hero.astro
│   │   ├── AboutMe.astro
│   │   ├── Education.astro
│   │   ├── ConferencePublications.astro
│   │   ├── WorkshopPublications.astro
│   │   ├── Talks.astro
│   │   ├── Experience.astro
│   │   └── Skills.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css     # Tailwind v4 config
│   └── data/              # Copied from Hugo data/
├── public/                # Static assets
│   ├── avatar.jpg
│   ├── favicon.ico
│   └── Resume.pdf
└── dist/                  # Build output
```

## Key Features

1. **Zero-JavaScript by default** - Astro only ships HTML/CSS for this static site
2. **Faster build times** - Vite-powered development and builds
3. **Modern CSS** - Tailwind v4 with custom theme configuration
4. **Component-based** - Reusable Astro components instead of Hugo partials
5. **Type-safe** - TypeScript support enabled

## Development Commands

```bash
cd astro-site

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is configured to deploy to GitHub Pages via the workflow at `.github/workflows/gh-pages.yml`.

Build output is in `astro-site/dist/` and deployed to the `gh-pages` branch with CNAME `yashsavani.com`.

## Next Steps

To complete the migration:
1. Test the site locally: `npm run dev` in the astro-site directory
2. Commit the astro-site directory
3. Push to GitHub to trigger automated deployment
4. (Optional) Clean up old Hugo files after verifying the new site works
