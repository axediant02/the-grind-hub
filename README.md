# React Frontend Starter

Production-ready frontend boilerplate for new React projects with React, Vite, TypeScript, Tailwind CSS, shadcn/ui patterns, Lucide icons, ESLint, and Prettier.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible setup
- Lucide React
- ESLint
- Prettier

## Exact Setup Commands From Scratch

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm install @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge
npm install -D autoprefixer eslint-config-prettier eslint-plugin-simple-import-sort postcss prettier prettier-plugin-tailwindcss tailwindcss tailwindcss-animate
npx tailwindcss init -p
```

After that, copy the config and starter files from this template or clone this repository directly instead.

## Folder Structure Recommendation

```text
src/
  components/
    layout/
    ui/
  hooks/
  lib/
  pages/
```

- `components/layout`: shells, headers, footers, navigation, sections
- `components/ui`: reusable primitives such as button, card, input, dialog
- `hooks`: shared custom hooks
- `lib`: helpers, app config, API helpers, utilities
- `pages`: route-level screens

## Tailwind Configuration

Tailwind is configured through:

- `tailwind.config.ts`
- `postcss.config.js`
- `src/index.css`

It includes:

- semantic design tokens through CSS variables
- `darkMode: ['class']`
- container defaults
- Tailwind animation support

## shadcn/ui Initialization Steps

This repository is already prepared for `shadcn/ui`. In a fresh project:

```bash
npx shadcn@latest init
```

Recommended answers:

- Style: `New York`
- Base color: `Neutral`
- Tailwind config: `tailwind.config.ts`
- CSS file: `src/index.css`
- Components alias: `@/components`
- Utils alias: `@/lib/utils`

Then add components as needed:

```bash
npx shadcn@latest add button card dialog input sheet dropdown-menu
```

## Icon Library Setup

Lucide React is already installed:

```tsx
import { ArrowRight, LayoutTemplate } from 'lucide-react'
```

## Reusable Layout Components

Included:

- `src/components/layout/app-shell.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`

## Example Button/Card Page

See `src/pages/home-page.tsx` for an example screen using:

- `Button`
- `Card`
- Lucide icons
- the layout shell

## Recommended Default Files

- `README.md`
- `.gitignore`
- `.env.example`
- `.prettierrc.json`
- `.prettierignore`
- `eslint.config.js`
- `.editorconfig`

## GitHub Template Repository Setup

```bash
git init
git add .
git commit -m "Initial frontend starter template"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/react-frontend-starter.git
git push -u origin main
```

Then in GitHub:

1. Open the repository.
2. Go to `Settings`.
3. Enable `Template repository`.

## Starting Future Projects From This Template

Option 1:

1. Click `Use this template` on GitHub.
2. Create a new repository.
3. Clone the generated repository.

Option 2:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPOSITORY.git
cd YOUR_NEW_REPOSITORY
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Crucial Extras You Might Want

- React Router if most projects are multi-page apps
- TanStack Query for server-state heavy apps
- Zod for runtime validation
- Husky + lint-staged if you want pre-commit enforcement
- Vitest + Testing Library if you want tests in the base template
