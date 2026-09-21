# Pavan Rao - Personal Website

Personal website built with [Astro](https://astro.build) by yours truly.

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 24+
- npm

### Installation

```bash
git clone https://github.com/pavanpej/pavanpej.github.io.git
cd pavanpej.github.io
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run format`  | Format code with Prettier |
| `npm run check`   | Check Astro types         |

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable components
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   └── styles/        # Global styles
└── .github/workflows/ # CI/CD pipelines
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch. The deploy workflow runs ESLint, Prettier, and `astro check` before building.

### USA map: CARTO API key

The USA map uses CARTO tiles and requires a browser API key. Keep the existing
map style by configuring the key as follows:

1. Create a key at [CARTO](https://carto.com/basemaps/apikey/) and restrict its
   allowed referrers to `pavanpej.com` and `*.pavanpej.com`.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
   Under **Repository secrets**, select **New repository secret**, name it
   `PUBLIC_CARTO_API_KEY`, and enter the key as its value. Use a repository secret,
   not an environment secret: the build job does not use the `github-pages`
   environment.
3. Push the configuration changes to `main` to deploy, or run **Actions → Deploy
   to GitHub Pages → Run workflow** after the changes are on `main`. Deployment
   stops with an error if the key is missing or blank.
4. Hard-refresh the USA map after deployment. In browser developer tools, check
   that requests to `basemaps.cartocdn.com` include a `key` query parameter and
   that the map no longer displays the watermark.

For local development, create an ignored `.env.local` file in the project root
and set `PUBLIC_CARTO_API_KEY` to your key. Restart `npm run dev` after changing
it. To view authenticated tiles locally, use a separate development key with
the appropriate localhost referrer allowed in CARTO; production restrictions
do not cover localhost or unrelated preview domains.

Astro embeds `PUBLIC_` variables in the browser bundle at build time. The key
will be visible to visitors even though it is stored as a GitHub secret; CARTO
referrer restrictions are the protection against unauthorized use. Never
commit the real key. Rebuild and deploy after changing or rotating it.
Local and pull-request builds can run without a key, but their maps will show
CARTO's watermark until a valid key is supplied.

## SEO

- **`public/robots.txt`** — allows crawlers and points to the sitemap.
- **`@astrojs/sitemap`** — emits `sitemap-index.xml` and `sitemap-0.xml` in the build output.

---

Built with ❤️ by [Pavan Rao](https://pavanpej.com)
