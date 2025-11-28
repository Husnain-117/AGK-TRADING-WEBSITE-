## AK Traders / AGK Industrial Services Website

A modern, responsive marketing website for **AK Traders / AGK Industrial Services**. The application showcases products, engineering services, after‑sales support, company values, and contact/quote flows using a consistent AGK visual theme (deep green, gold/brown accents, and professional card layouts).

---

## 1. Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler/Dev server**: Vite
- **Routing**: `react-router-dom`
- **UI Library**: shadcn/ui (Radix UI primitives + Tailwind)
- **Styling**: Tailwind CSS + custom brand colors (AGK green, gold/brown, warm neutrals)
- **Icons**: `lucide-react`

---

## 2. Main Features & Pages

- **Home**
  - Hero, product highlights, services showcase, testimonials, and CTA.
- **Products & Product Detail**
  - Product grid using shared image set.
  - Detail pages with technical descriptions and gold band CTAs.
- **Services**
  - Hero + overview of main services.
  - Engineering Services & After Sales Services sections.
  - Additional services cards with brown/gold accent chips.
  - Process section with warm beige background and step badges.
- **Engineering Services**
  - Dedicated page for engineering offerings: steam boilers, thermal oil heaters, waste heat recovery, fuel conversion, upgrades, overhauling, spares, etc.
  - Professional cards and process steps in AGK theme.
- **After Sales Services**
  - Benefits, service pillars, and process for maintenance/after‑sales support.
- **Our Values**
  - Core values, guiding principles, achievements, and “Why choose us” content.
- **Blog & Resources**
  - Brand‑consistent hero.
  - Featured article card + grid of latest posts.
  - Newsletter CTA band.
- **Get a Quote**
  - Multi‑step quote wizard (services → project details → contact info → review).
  - Progress indicator and premium form card design.
- **Contact**
  - Hero + contact form.
  - Real world contact information:
    - Head Office (Faisal Colony, Arifwala Road, Sahiwal)
    - Engineering Works (06 km Sahiwal Arifwala Road)
    - CEO & Director phone numbers and official email.

All pages share a consistent **Navbar, Footer, typography, color palette, and CTA styles**.

---

## 3. Project Structure (high level)

```text
aktraders/
  package.json
  README.md
  .gitignore
  vite.config.*
  tsconfig.*
  tailwind.config.*
  postcss.config.*
  src/
    main.tsx           # Vite/React entry point
    App.tsx            # Routes and top‑level layout
    assets/            # Images (e.g. about-team, product photos)
    components/        # Reusable UI (Navbar, Footer, shared UI wrappers)
    components/ui/     # shadcn/ui generated components
    pages/             # Route pages (Home, Products, Services, Values, Blog, Quote, Contact, etc.)
    lib/               # Any shared helpers (if present)
```

Individual page components live in `src/pages` and follow the same design system: responsive sections, Tailwind utility classes, and shared product images where appropriate.

---

## 4. Scripts

From `package.json`:

- `npm run dev` – Start development server with Vite.
- `npm run build` – Production build.
- `npm run build:dev` – Development‑mode build (useful for certain debugging/deploy scenarios).
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint on the project.

---

## 5. Getting Started (Local Development)

### Prerequisites

- **Node.js**: Recommended Node 18+ (LTS).
- **npm** (or `pnpm`/`yarn` if you prefer—commands below assume npm).

### Installation

```bash
# Install dependencies
npm install
```

### Run the Dev Server

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`). Open it in your browser to view the site.

### Build for Production

```bash
npm run build
```

This outputs an optimized production build to the `dist` directory.

### Preview the Production Build

```bash
npm run preview
```

This serves the contents of `dist` so you can verify the production build locally.

---

## 6. Styling & Design System

- **Tailwind CSS** provides utility‑first classes for spacing, layout, and typography.
- The **AGK brand palette** is used consistently:
  - Deep greens for primary backgrounds and CTAs (`#123326`, `#1f5a45`).
  - Gold/brown for accents and badges (`#b8892e`, `#c9a04a`, `#a57926`).
  - Warm neutrals for section backgrounds (`#faf8f3`, `#f5f0e8`).
- **shadcn/ui** components are wrapped with Tailwind classes for a clean, professional look.
- Responsive design: All key sections use responsive grid/flex layouts so the site works well on desktop, tablet, and mobile.

---

## 7. Routing

Routing is handled by `react-router-dom` in `src/App.tsx`.

You’ll find routes for pages such as:

- `/` – Home
- `/products` – Products listing
- `/products/:id` – Product detail view
- `/services` – Services overview
- `/services/engineering` – Engineering Services detail page
- `/services/after-sales` – After Sales Services detail page
- `/values` – Our Values
- `/blog` – Blog & Resources
- `/quote` – Get a Quote (multi‑step form)
- `/contact` – Contact page

---

## 8. Deployment Notes

This is a standard **Vite + React** SPA, so it can be deployed to any static hosting provider that supports client‑side routing (with a catch‑all route / fallback to `index.html`). Examples include:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Basic deployment steps (generic):

1. Run `npm run build`.
2. Deploy the contents of the `dist` folder to your hosting provider.
3. Ensure SPA routing is configured (redirect all unknown paths to `/index.html`).

---

## 9. Contact Information

Official contact information included in the site:

- **Head Office**  
  Faisal Colony Street #01, Plot #01, Arifwala Road, Sahiwal

- **Engineering Works**  
  06 km Sahiwal Arifwala Road, Sahiwal

- **C.E.O**  
  Mr. Amir Saeed – `+92 300 8690691`

- **Director**  
  Mr. Mian Ammar Usama – `+92 300 4493333`, `+92 316 4044444`

- **Email**  
  `agktrading365@gmail.com`

Use this README as the main reference for developers working on the AK Traders / AGK Industrial Services website.
