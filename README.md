# ZENIX portfolio

A Next.js foundation for the ZENIX design portfolio.

## Current stage

Stage 1 foundation. The original, self-contained HTML prototype is served from `public/zenix-prototype.html` inside a full-viewport frame. This deliberately preserves its exact visual treatment and existing interactions while the production architecture is established. It is a compatibility bridge, not yet the final component-by-component React port.

The original reference backup remains untouched at the repository root as `zenix-prototype-backup.html`; the project handoff remains `HANDOFF.md`.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

1. Install Node.js LTS from https://nodejs.org/ if it is not already installed.
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Production build

Run `npm run build`, then `npm start`.

## Deploy to Vercel

Import this GitHub repository into Vercel and select the `build/stage-1-foundation` branch for the first preview deployment, or merge the branch into `main` after review. Vercel should detect Next.js automatically. No environment variables are required at this stage.

## Content notes

- Project names and poster artwork in the prototype are explicitly placeholders.
- The portrait Easter egg remains inactive until `public/images/nayel-face.png` is supplied.
- Do not add real contact details, biography, project credits, or artwork without the owner's material.

## Next stages

1. Replace the iframe bridge with accessible React components while preserving the prototype's styling and behavior.
2. Add `/work/[slug]` project pages and typed local content.
3. Integrate Sanity Studio and editable site/about settings.
4. Add real artwork, SEO/social imagery, accessibility and performance QA.

## Verification status

This environment can commit source files to GitHub but cannot run `npm install`, launch a browser, or execute a Vercel production build. A real deployment is still required to verify dependency installation, compilation, browser behavior, mobile layout, and accessibility.
