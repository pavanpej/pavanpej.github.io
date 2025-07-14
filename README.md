# Pavan Rao - Personal Website

My personal website built with [Astro](https://astro.build), featuring a clean, minimalist design with a focus on performance and accessibility.

## 🚀 Features

- **Fast & Lightweight**: Built with Astro for optimal performance
- **Responsive Design**: Works seamlessly across all devices
- **Accessibility First**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Modern Tech Stack**: TypeScript, Tailwind CSS, Font Awesome icons

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: Fira Sans, Glegoo
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   ├── assets/            # Images and media
│   ├── favicon.png        # Site favicon
│   └── CNAME              # Custom domain
├── src/
│   ├── components/        # Reusable Astro components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   └── styles/            # Global styles
└── .github/workflows/     # CI/CD pipelines
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/pavanpej/pavanpej.github.io.git
cd pavanpej.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Available Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run format`  | Format code with Prettier |

## 🎨 Customization

### Colors

The site uses a custom color palette defined in `tailwind.config.mjs`:

- **Minion Yellow**: `#ffe347`
- **Rich Black**: `#073b3a`
- **Vivid Blue**: `#44ccff`

### Fonts

- **Primary**: Fira Sans
- **Brand**: Glegoo

## 🌐 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing

This is a personal website, but if you find any issues or have suggestions, feel free to open an issue or submit a pull request.

---

Built with ❤️ by [Pavan Rao](https://pavanpej.com)

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
