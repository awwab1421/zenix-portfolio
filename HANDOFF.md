# ZENIX Portfolio: Handoff

Last updated: 16 November 2026. Read this whole file before touching anything.

## 0. Who and what

- **Owner:** a graphic designer in Dhaka, Bangladesh, with **zero coding experience**. Portfolio name: **ZENIX**. Instagram: **@zenix.xfx**.
- **Owner's stated name line (public, used in the hero):** "a creative alias by awwab 'nayel' bin omar".
- **Goal:** a serious, art-directed designer portfolio (not a template): one-page homepage plus individual project pages, managed through a CMS so the owner never edits code.
- **Original stack request:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide icons (only if needed), hosted on Vercel Hobby, files on GitHub.
- **Current reality:** a single-file HTML prototype (see section 1). It is **not** yet a Next.js project. Nothing is on GitHub or Vercel yet. No CMS exists yet.

### Rules the owner set (keep following them)

1. Work step by step. Never assume the owner can code, use a terminal, GitHub, or deployment tools. Give exact click-by-click instructions.
2. Write complete files, never partial snippets when a whole file is needed.
3. Explain errors in plain language and fix them.
4. Do not move to the next stage until the current one works.
5. **Never invent** portfolio projects, artwork, biography, achievements, qualifications, project details, or contact details (including an email address). Use clearly marked placeholders.
6. Visual quality over technical complexity. Keep the code organized so content can be updated without understanding the codebase.
7. Preserve all existing design and behavior. Extend, never redesign. Edit existing files, don't replace them with a template.
8. Animations stay sophisticated and intentional; they must never compete with the artwork. Respect `prefers-reduced-motion`.
9. The site must stay fast, accessible, and responsive. The hero must not make visitors wait.
10. Custom cursor only for real mouse pointers; normal touch behavior on mobile.

## 1. Current project structure

There is **one file**: `zenix-mockup.html` (about 28 KB, about 313 lines, no build step, no dependencies except Google Fonts).

A published preview exists at https://claude.ai/artifact/2MfzCcBhNFxVEhdnYMGrYF. It is not a permanent home. **The owner should keep a downloaded copy of the HTML file.** If a session can read artifacts, `Artifact action "read"` with that URL copies the files into the container.

Layout of the file:

| Part | Lines (approx.) | Contents |
|---|---|---|
| `<head>` | 1-17 | meta (viewport-fit=cover), Google Fonts link (Anybody variable wdth+wght, Instrument Serif, Space Mono) |
| `<style>` | 18-~220 | tokens, then sections in this order: nav, hero, section heads, index, collage, about, contact, shutter/overlay/cursor, media queries |
| `<body>` | ~140-225 | skip link, `.nav`, `<main>` with sections `#hero #work #collage #about #contact`, footer, `#ov` (project overlay), `#sh` (shutter), `#cu` (cursor) |
| `<script>` | 226-313 | see below |

Script blocks, in order:
- `P` array: six placeholder "projects" (name, category, year, colors, title lines, glow position, optional font variation). `art(p,i)` returns an inline SVG placeholder poster (flat color, glow circle, halftone dots, diagonal line, stretched type, "Placeholder N°0X" tag). A global counter `K` keeps SVG ids unique.
- Hero wall: `tiles()` renders five tilted posters into two layers, `.lb` (blurred) and `.ls` (sharp, revealed under the cursor by a CSS radial mask driven by `--mx/--my`).
- Index and collage built from `P` by template strings. `#pv` is the floating hover preview.
- Reveals: one `IntersectionObserver` adds `.v` to `.sh` and `.pic`.
- `go(fn)`: lime shutter wipe (Web Animations API on `#sh`, 420 ms in, run `fn`, 420 ms out). Skipped under reduced motion.
- Project overlay `#ov`: `fill(i)`, `openP(i)`, `closeP()`, arrow-key and Esc handling.
- Clock (Intl, Asia/Dhaka), pointer-only effects (cursor, index preview follow), `CONTACT` config (`email:''`), hidden name sticker, and a single `requestAnimationFrame` loop `frame()` (hero scroll-out, wordmark letter stretch, mask follow, cursor lerp, preview lerp).

## 2. Completed features (prototype level)

- **Navigation:** fixed, scattered and slightly rotated links (Work, Collage, About, Contact) that straighten and turn lime on hover; Z-bolt mark; live Dhaka clock; all four anchors work and use the shutter transition. Footer "Back to top" too.
- **Hero:** giant ZENIX wordmark (Anybody 900, letters rise in; letters near the cursor widen, others narrow; the X is lime), blurred poster wall that sharpens under the cursor (fine pointers only; static blur on touch), alias line under the wordmark, intro line, down arrow, slow ticker. Scrolling pushes the hero away and fades it.
- **Alias line:** "a creative alias by awwab 'nayel' bin omar" in Space Mono, lowercase, muted, with the nickname in lime; fades up after the wordmark.
- **Hidden sticker (Easter egg):** hovering/focusing/tapping the name pops a ~100 px image (84 px on small screens) with a tilt, outline and shadow. Inert until `/images/nayel-face.png` loads. The owner has **not** supplied this image yet. The preview cannot show it because a single-file artifact has no image folder.
- **Project index:** numbered rows, each title in a different width/weight of the same typefaces; hover dims other rows and shows a large poster that follows the cursor with a slight tilt; touch devices get thumbnails and tap-to-open.
- **Collage:** off-grid 12-column layout, large 4:5 posters, clip-path reveal, hover zoom, mono captions.
- **Project overlay:** tinted with the project's own colors; prev/next/close, arrow keys, Esc. This is a stand-in for real project pages.
- **About (layout only):** scrapbook composition with 1 to 3 degree tilts, lime "tape", three marked photo slots, intro, design philosophy, skills and software, personal details ticket. All content is placeholder except Dhaka, Bangladesh and the Instagram link.
- **Contact:** large stretched heading "HAVE A PROJECT IN MIND?", magnetic "Start a conversation" button (opens the Instagram profile), link list with Instagram live and the rest marked placeholders. Email stays a placeholder until `CONTACT.email` is set.
- **Cross-cutting:** shutter page transition, Z-bolt cursor (mouse only, morphs into "View"/"Open"/"Say hi"), film-grain overlay, responsive layouts (breakpoint 760 px plus `(hover:none)`), reduced-motion handling, keyboard focus styles.

## 3. Unfinished features

**Architecture and delivery**
- Not a Next.js/TypeScript/Tailwind project. Not on GitHub or Vercel. No CMS.
- No real project pages (own URLs, many images, process text, credits, prev/next).
- No real image pipeline (optimization, blur-up placeholders).
- No SEO basics: page description, social share image, real favicon, sitemap.
- Content is generated by JavaScript, so there is nothing in the HTML without JS.

**Design/features from the original brief not yet built**
- A separate "Skills and services" section (numbered table rows that flood lime on hover). Skills currently live inside About.
- Oversized-wordmark footer (currently a text strip).
- Smooth scrolling (the plan is the Lenis library).
- Project page structure: title, category, description, large previews, multiple images, process/context, prev/next.
- CV/bragsheet.

**Content (owner has not provided yet)**
- All artwork, project names/descriptions/credits. Current names are invented placeholders and are marked.
- About biography, philosophy, photos, cut-out, software list, name/status/languages/education.
- Email address, Behance, LinkedIn, other links. The portrait for the Easter egg.

## 4. Design system and important styling decisions

**Palette (tokens in `:root`):** `--bg #0B0D0E`, `--ac #D5FF00` (acid lime), `--tx #F2F0E9` (off-white), `--mu #85898B` (secondary), `--sf #191C1D` (surface). Lime stays under about 5% of any screen. Artwork brings the color; the site is a neutral dark stage. Each project's own palette tints its project page/overlay.

**Typefaces (exactly three, used consistently):**
- **Anybody** (variable `wdth` 50 to 150, `wght` 100 to 900): display, wordmark, headings, nav. Width and weight variation replaces extra fonts.
- **Instrument Serif** (italic mainly): editorial voice, intro line, categories, body copy in About.
- **Space Mono:** small labels, metadata, tags, clock, alias line.
- Note: the CSS `font` shorthand resets `font-variation-settings`; set variation settings after the shorthand.

**Visual rules:** hairline borders (`#ffffff1c`), zero border-radius (the only circle is the cursor), no card boxes, no glassmorphism, no generic gradients (glow circles inside placeholder posters are art, not UI), a static SVG film-grain overlay (opacity .07), 4:5 poster ratio from the owner's Instagram, placeholders marked with dashed lime borders (`#D5FF0066`) and a lime mono ".tag" label.

**Motion rules:** transform/opacity/clip-path only; one orchestrated moment (hero entrance), motion that answers an action (hover, open, navigate), clip-path reveals for images, no looping effects except the slow ticker. Shutter: 420 ms in, 420 ms out, lime. Easing used: `cubic-bezier(.2,.8,.2,1)` (out), `cubic-bezier(.7,0,.2,1)` (wipes), `cubic-bezier(.34,1.7,.5,1)` (sticker pop).

**Interaction rules:** custom cursor only when `(hover:hover) and (pointer:fine)`; it has `pointer-events:none`. Touch gets taps, thumbnails, no cursor/hover tricks. `[data-cursor]` on an element sets the cursor label.

**Responsive:** one breakpoint at 760 px (collage and About stack, overlay stacks, nav tightens) plus `(hover:none)` (no mask, thumbnails in the index).

**Visual inspiration:** the owner's reference is mikkelbo.xyz (blur-up images, scattered tilted nav, numbered project list with hover image, off-grid poster collage, scrapbook About, custom cursor, page-transition beat). Borrowed as mechanics only; do not clone its look (white, blackletter, red). ZENIX is dark, stretched grotesque, acid lime.

**Owner's visual identity (from their Instagram):** experimental typography, dark editorial, cinematic compositions, brutalist graphic design, surreal and conceptual imagery, high contrast, different palette per project.

## 5. Known bugs and risks

Nothing has been tested in a real browser by the assistant; only static checks (JS syntax, anchor targets, unique ids) were run. Treat all of the following as unverified.

1. **Nav legibility:** the fixed nav has no background, so links may be hard to read over bright posters while scrolling. Fix idea: `mix-blend-mode:difference` or a subtle dark backdrop.
2. **Nav on narrow phones:** four links plus the clock at 360 px wide may crowd. Check.
3. **Overlay:** no focus trap and the page behind is not `inert`; Tab can leave the dialog. Overlay open state is not in the URL, so Back does not close it.
4. **Shutter:** no guard against clicking during a transition; overlapping animations are possible. Reduced-motion check (`RM`) is evaluated once and does not react to live changes.
5. **Performance:** the `frame()` loop never stops, calls `getBoundingClientRect()` per letter each frame while the hero is visible, and animates `font-variation-settings` (not GPU-accelerated). The radial-mask repaint over many SVGs can be heavy. Re-test with real images; consider stopping the loop when the hero is off-screen.
6. **Fragile selectors:** `hero.firstElementChild.nextElementSibling` finds the `.in` wrapper; breaks if hero markup changes.
7. **About layout** was never viewed; the portrait slot spans two grid rows with explicit columns and may leave gaps at certain widths.
8. **Cursor "Say hi" circle** (84 px) may hide the button label while hovering the contact button.
9. **Sticker:** needs `public/images/nayel-face.png` in the real project; in the single-file preview it can never load.
10. **No-JS / SEO:** all content is injected by JavaScript.
11. About "Name" is still "Placeholder" although the owner has published the alias; confirm with the owner before filling it.
12. "Open to work" label in the ticker and Contact header is inferred from the owner's Instagram bio ("trying to get employed"); confirm wording.

## 6. Remaining roadmap

Planned architecture is **Next.js (App Router) + TypeScript + Sanity CMS + GitHub + Vercel**. Rationale and details are in the planning conversation; summary:

**Stage 0: Accounts and decisions (owner, about 1 hour).** GitHub account, Vercel account (sign in with GitHub), Sanity account (create a project and a dataset named `production` at sanity.io/manage in the browser). Decide: domain name (optional), whether the portfolio will be used to solicit paid work (affects Vercel plan, see below).

**Stage 1: Port the prototype to Next.js, 1:1, hardcoded placeholder data.** Components: Nav, Hero (wordmark, wall, alias, sticker), ProjectIndex, Collage, About, Contact, Footer, Cursor, ShutterProvider, Reveal. Keep the existing CSS almost verbatim (global CSS or CSS modules) with the tokens above; use Tailwind for simple layout utilities only, not to re-express bespoke effects. Fonts via `next/font/google` (Anybody needs `axes:['wdth']`). Client components only where needed (hero, cursor, index hover, shutter); the rest server-rendered. Deploy to Vercel. Owner checks it on a real phone. *Gate: visual parity with the prototype.*

**Stage 2: Real project pages from typed local data.** Route `/work/[slug]`: title, category, year, description, large images, process/context, credits, prev/next. Shutter transition on route change (animate in, `router.push`, animate out). Replace the overlay with these pages (the overlay can remain as a quick preview if desired). *Gate: pages work with placeholder data.*

**Stage 3: Sanity.** Embedded Studio at `/studio` (login required). Schemas below. GROQ queries in server components. Sanity image pipeline (`@sanity/image-url`, hotspot crop, LQIP blur placeholder, `auto=format`). Webhook from Sanity to `/api/revalidate` (secret in env var) so published changes appear on the site within seconds. Reordering via `@sanity/orderable-document-list`. *Gate: add, edit, reorder, delete and publish a test project from the Studio and see it live.*

**Stage 4: Singletons.** `siteSettings` (alias line, intro line, ticker items, availability text, email, social links, sticker image), `about` (intro, philosophy, photos, cut-out, skills, software, details, CV file), `homepage` options if needed. Hero wall uses featured project covers.

**Stage 5: Polish.** Lenis smooth scroll, separate Skills and Services section, oversized footer wordmark, SEO (title, description, Open Graph image, favicon, sitemap), performance and accessibility audit, fix known bugs in section 5, optional custom domain.

**Stage 6: Content.** Owner's real artwork, text, photos, CV, email, links. Remove all "Placeholder" tags.

### Proposed Sanity data model

- `project`: `title`, `slug`, `category` (string; reference type only if the owner wants filtering), `year`, `coverImage` (with `alt`, hotspot on), `gallery[]` (image + `alt` + optional `caption`), `description` (short text), `process` (portable text, optional), `credits[]` ({`role`, `name`, optional `url`}), `featured` (boolean), `accentColor` and `bgColor` (hex, optional; they tint the project page), `titleStyle` (select: wide, condensed, serif, light; maps to the index row styles so the design cannot break), `order` (managed by the orderable list). Publishing uses Sanity's built-in draft/publish.
- `siteSettings` and `about` singletons as in Stage 4. Singletons are pinned in the Studio sidebar so they cannot be duplicated.
- Constrain fields (selects, hex pickers, size limits) so that anything the owner enters cannot damage the experimental layouts.

### Costs (verified 16 November 2026; re-check before committing)

- GitHub: free. Vercel Hobby: $0, **but restricted to non-commercial personal use**; commercial use requires Pro (about $20/month). Unsure whether a job-seeking or freelance portfolio counts: ask Vercel support, or plan for Pro, or use another host.
- Sanity Free: $0, about 20 seats, about 10,000 documents, 2 public datasets; paid Growth starts around $15 per seat per month. Third-party sources disagree on bandwidth/asset limits and Sanity changes limits often: confirm at sanity.io/pricing. A portfolio will not approach document limits.
- Domain (optional): roughly the cost of a standard domain per year.

### Privacy note

The Free plan datasets are public: published content (including an uploaded CV PDF) is reachable by anyone with the URL. Do not upload a CV containing a home address or phone number unless the owner is comfortable with that.

## 7. Instructions for continuing development

1. **Read this file, then open `zenix-mockup.html`** (or re-read the artifact URL above). The prototype is the visual source of truth. Match it exactly before improving anything.
2. **Constraints of the chat environment used so far:** no internet in the sandbox, so `npm install`, `next build`, and live preview could not run there. Static checks only (`node --check` on the extracted script, id/anchor checks). If your environment can run `npm install` and `npm run build` (for example Claude Code or a local editor with Node.js), do the Next.js port there and *run the build* before handing files to the owner. If not, write conservative TypeScript, deploy to Vercel previews, and have the owner paste build logs.
3. **Edit, don't replace.** Preserve every interaction listed in section 2. After each change, re-check: four nav anchors, shutter, cursor (mouse only), index hover and touch behavior, collage, overlay/project pages, reduced motion, mobile layout.
4. **Content integrity.** Do not invent biography, achievements, project details, or contact info. Use marked placeholders. Real facts available: name line, Dhaka, Instagram @zenix.xfx, the style description in section 4.
5. **Communicate for a non-developer.** Short, exact steps ("click X, paste Y"), explain errors, never assume terminal skills, finish a stage and have the owner confirm before starting the next.
6. **Keep content editing in the CMS, not the code,** once Stage 3 lands. Anything the owner might change (text, images, links, order) must come from Sanity or one clearly commented config file.
7. **Keep this file current.** Update sections 2, 3, 5 and 6 at the end of every session.
8. **Next action:** get owner confirmation on the architecture plan and Vercel plan question (section 6), then start Stage 0/1.
