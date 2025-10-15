# Liam Duncan Resume

Type-safe resume website built with React, TypeScript, and YAML-driven content.

## Quick Start

```sh
npm install
npm run dev      # http://localhost:8080
```

## Stack

React 18 • TypeScript • Vite • Tailwind CSS • React Query • Zod validation

## Architecture

Service layer pattern with clean separation:

- **Data**: YAML files → Zod schemas → Type-safe services
- **State**: React Query for caching/loading
- **UI**: Presentation components with custom hooks

## Content Editing

- **Resume**: Edit YAML in `src/content/data/`
- **Blog/Articles**: Add markdown in `src/content/blog/` or `src/content/experience/`

See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for details.

## Deploy

```sh
npm run deploy   # Deploy to GitHub Pages
```

Live: <https://lmdncn.github.io/liam-duncan-development/>
