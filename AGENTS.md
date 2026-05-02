# AGENTS.md

## Commands
- **Dev:** `npm run dev`
    - Uses `next dev --turbo` (Turbo features; does not require extra config)
- **Build:** `npm run build`
- **Start:** `npm run start`
- There are no test or lint scripts defined.

## App structure
- **Framework:** Next.js (App Router, not Pages Router)
    - Entry: `src/app/page.js`, layout in `src/app/layout.js`
    - Main children are implemented as React Client Components using function components.
    - All routing is file-system based under `src/app/`
- **No backend/serverless functions** in this repo.
- **Aliases:** Use `@/` for `src/` (see `jsconfig.json`).

## Styling & Theme
- **TailwindCSS custom config**: see `tailwind.config.mjs`, uses CSS variables for all theme colors and font families (see `globals.css`).
- **Dynamic Theme:**
    - Theme toggle is managed by `ThemeSwitcher.jsx`
    - Component sets CSS variables and `data-theme` attr at runtime; dark mode enabled by `[data-theme="dark"]` or `class="dark"`
    - Theme color palettes are hardcoded in `ThemeSwitcher`
- **Global styles:** All base variables (spacing, color, etc) defined in `src/app/globals.css`

## Animation/Effects
- **Heavy use of framer-motion** for animation.
- **Custom floating effect utilities:** `FloatingShapes.jsx`, `AnimatedDots.jsx`, and `CursorTrail.jsx` are client-side animated effects dependent on global CSS vars and may consume significant resources. Use caution on low-power devices.

## Artifacts & Ignored Paths
- **Next.js build output:** `.next/`
- **Dist folder:** `dist/` contains pure static sample HTML for pages, but this is not updated by Next.js build.
- **Other ignored:** All env files, coverage, node_modules, logs, and Vercel/production/TypeScript cache by default (see `.gitignore`).

## Testing
- **No test scripts, suites, or setup found.**

## References
- Key config: `package.json` (scripts), `tailwind.config.mjs`, `postcss.config.mjs`, `jsconfig.json`
- All framework/routing code: under `src/app/`
- All styling: `globals.css`, dynamic in components

## Conventions/Workflows
- No non-obvious codegen, migration, or pre-commit tasks.
- No special requirements for running, theme switching, or resource loading as of this snapshot.

---
_If adding tests or CI later, indicate single-test and full suite invocation commands explicitly here._
