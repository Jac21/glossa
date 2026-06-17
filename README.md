# 📚 Glossa

Personal glossary of self-coined terms.

[![Node.js CI](https://github.com/Jac21/glossa/actions/workflows/node.js.yml/badge.svg)](https://github.com/Jac21/glossa/actions/workflows/node.js.yml)
[![Deploy to GitHub Pages](https://github.com/Jac21/glossa/actions/workflows/deploy.yml/badge.svg)](https://github.com/Jac21/glossa/actions/workflows/deploy.yml)

## Overview

**Glossa** is a curated collection of self-coined terminology built with [Astro](https://astro.build). It serves as a personal reference for unique concepts and definitions.

## 🚀 Project Structure

```text
/
├── public/                 # Static assets (images, etc.)
├── src/
│   ├── pages/             # Astro pages & glossary entries
│   └── components/        # Reusable Astro/UI components
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

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

## 🛠 Built With

- **Astro** - Static site generation
- **JavaScript** - Core logic
- **CSS** - Styling

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Community Discord](https://astro.build/chat)
