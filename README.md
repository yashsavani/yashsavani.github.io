# Yash Savani - Personal Website

Academic portfolio built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/    # Reusable Astro components
│   ├── layouts/       # Page layouts
│   ├── pages/         # Routes (index.astro = homepage)
│   ├── styles/        # Global CSS with Tailwind v4
│   └── data/          # YAML data files for content
├── public/            # Static assets (images, PDFs, etc.)
└── dist/              # Build output (generated)
```

## 🛠️ Tech Stack

- **Framework:** Astro 5.14.1
- **Styling:** Tailwind CSS 4.1.14
- **Build Tool:** Vite (bundled with Astro)
- **Node:** v22 (LTS)
- **TypeScript:** Strict mode enabled

## 📝 Updating Content

All content is managed through YAML files in `src/data/`:
- `hero.yaml` - Name, position, contact links
- `about_me.yaml` - Bio statement
- `education.yaml` - Degrees and institutions
- `conference_publications.yaml` - Published papers
- `workshop_publications.yaml` - Workshop papers
- `teaching.yaml` - Talks and presentations
- `experience.yaml` - Work history
- `skills.yaml` - Technical skills

## 🎨 Styling

Tailwind CSS v4 is configured in `src/styles/global.css`. Custom theme variables:
- Custom fonts: Lustria (headings), Lato (body)
- Custom utility: `.shadow-underline` for link styling

## 🚢 Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main` branch.

Build output from `dist/` is published to the `gh-pages` branch with CNAME `yashsavani.com`.
