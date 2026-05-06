# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript frontend starter. Keep app code in `src/` and static public assets in `public/`. Use `src/components/layout` for shared shells like headers and footers, `src/components/ui` for reusable UI primitives, `src/pages` for page-level screens, `src/lib` for utilities, and `src/assets` for imported images. Treat `dist/` as generated build output and do not edit it manually.

## Build, Test, and Development Commands
Run `npm install` to install dependencies. Use `npm run dev` for the local Vite dev server and `npm run preview` to serve the production build locally. Run `npm run build` to type-check with the build config and produce `dist/`. Use `npm run typecheck` for a fast TypeScript check, `npm run lint` to enforce ESLint rules, `npm run lint:fix` to auto-fix safe issues, `npm run format` to rewrite files with Prettier, and `npm run format:check` to verify formatting in CI-style runs.

## Coding Style & Naming Conventions
Follow `.editorconfig`: UTF-8, LF endings, final newline, and 2-space indentation. Prettier enforces no semicolons, single quotes, trailing commas, and Tailwind class sorting. ESLint enforces sorted imports; prefer grouped imports over ad hoc ordering. Use the `@/` alias for `src` imports, for example `import App from '@/App'`. Keep React components in PascalCase, utility functions in camelCase, and file names in kebab-case like `home-page.tsx`.

## Testing Guidelines
There is no test framework configured yet. Until one is added, treat `npm run typecheck`, `npm run lint`, and `npm run build` as the required verification set before opening a PR. If you add tests later, keep them close to the source file or in a dedicated test folder and use `*.test.ts` or `*.test.tsx` naming.

## Commit & Pull Request Guidelines
The current history is minimal, so use short imperative commit messages such as `Add hero section layout` or `Refactor button variants`. Keep commits focused on one logical change. Pull requests should include a brief summary, list of verification commands run, and screenshots for visible UI changes. Link related issues when applicable and call out any follow-up work or known limitations.

## Configuration Notes
Tailwind is configured through `tailwind.config.ts`, `postcss.config.js`, and `src/index.css`. The project is also prepared for shadcn-style components via `components.json`, so keep shared primitives aligned with that structure instead of scattering one-off UI code.
