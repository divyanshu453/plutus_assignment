# MoonEX — Trusted Multi-Chain DEX (Demo)

A small Next.js demo site built to showcase a multi-section landing page and a simple client-side news feed (crypto news) that fetches data from a third-party API. The project uses modern React, TypeScript, and CSS Modules for structured styling.

## Tech Stack & Decisions

- Next.js (app router) — See [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx).
  - App structure uses the `/app` folder and server/client split.
- React 19, TypeScript — See [tsconfig.json](tsconfig.json).
- Styling:
  - CSS Modules for components (see `components/*.module.css`), e.g. [components/Header.module.css](components/Header.module.css), [components/Hero.module.css](components/Hero.module.css).
  - `globals.css` defines theme tokens and defaults: [app/globals.css](app/globals.css).
- Client-side data fetching:
  - `app/users/page.tsx` performs client-side fetch to a public API for listing crypto news. Example: [app/users/page.tsx](app/users/page.tsx).
    - This provides immediacy and simpler UX for this demo, but there are trade-offs (see below).
- Build tooling:
  - Next.js build (`next build`) + `eslint` config from `eslint-config-next`.
  - PostCSS is configured with `@tailwindcss/postcss` (present in devDependencies), but this project currently primarily uses CSS Modules.
  - See [postcss.config.mjs](postcss.config.mjs), [eslint.config.mjs](eslint.config.mjs), [next.config.ts](next.config.ts).
- Dependencies and devDependencies: Refer to [package.json](package.json).

## How to run locally

Prerequisites:
- Node.js 18+ recommended
- NPM / Yarn / pnpm / bun

Install dependencies:
```sh
npm install
# or
yarn
# or
pnpm install
```

Start development server:
```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 and explore:
- Home and sections: implemented in [app/page.tsx](app/page.tsx) which imports components:
  - Header: [components/Header.tsx](components/Header.tsx)
  - Hero: [components/Hero.tsx](components/Hero.tsx)
  - WhyMoonEX: [components/WhyMoonEX.tsx](components/WhyMoonEX.tsx)
  - Features: [components/Features.tsx](components/Features.tsx)
  - FAQs: [components/FAQs.tsx](components/FAQs.tsx)
  - Footer: [components/Footer.tsx](components/Footer.tsx)
- Users page (crypto news feed): open `/users` which is implemented in [app/users/page.tsx](app/users/page.tsx).

Notes:
- The users page performs a client-side fetch to the public `newsdata.io` endpoint with a hard-coded API key. This is suitable for a small demo but should be secured for production (see trade‑offs & future improvements).

## How to build & run production

Build:
```sh
npm run build
```

Start a production server:
```sh
npm run start
```

Lint:
```sh
npm run lint
```

## Known trade-offs

- Client-side fetching with an exposed API key:
  - [app/users/page.tsx](app/users/page.tsx) currently fetches directly from the client. The API key is visible in the bundle if embedded — this is acceptable for demos but insecure for production.
- No server-side caching:
  - Uncached client calls can increase latency and cause rate-limit hits on the public API.
- Mixed approach re: Tailwind:
  - `@tailwindcss/postcss` is installed and configured, but the codebase uses CSS Modules extensively. Either approach is fine; mixing can cause confusion.
- Minimal accessibility and testing:
  - The project includes basic ARIA attributes (e.g., menu toggles) but lacks comprehensive accessibility checks or automated tests (unit or E2E).
- Minimal SEO and metadata:
  - Static metadata in [app/layout.tsx](app/layout.tsx) is present, but richer dynamic metadata for SEO & social sharing is limited.

## Future improvements

- Secure server-side / backend proxy:
  - Move API requests to the server (Next.js server route or server components) and keep API keys in environment variables (`process.env.NEWSDATA_API_KEY`) to avoid exposure. See [app/users/page.tsx](app/users/page.tsx) for the current client approach.
- Add caching and pagination:
  - Cache the news results server-side or via ISR/SSR to reduce requests and improve performance.
- Add tests:
  - Unit tests for components and integration/end-to-end tests (e.g., Jest + React Testing Library and Playwright) for critical flows (header, users page).
- Accessibility & i18n:
  - Add accessibility audits and ARIA improvements, and support multi-language content.
- Replace hard-coded layout with reusable components & types:
  - Move repeated patterns into shared primitives and add stronger TypeScript interfaces for API responses.
- CI/CD, linting, and pre-commit hooks:
  - Add GitHub Actions for build + lint + tests, and a pre-commit hook for formatting.
- Performance & SEO:
  - Consider SSR/SSG for the news list (if feasible), and add open graph metadata and image optimization.
- Tailwind / Design System:
  - Consolidate on either Tailwind with design tokens or CSS Modules with tokens in `globals.css`. If using Tailwind, add a `tailwind.config.cjs` and migrate styles.

## Where to look in the repo

- Project entry + layout: [app/layout.tsx](app/layout.tsx), [app/page.tsx](app/page.tsx)
- CSS variables & base styles: [app/globals.css](app/globals.css)
- Components with module CSS:
  - [components/Header.tsx](components/Header.tsx) + [components/Header.module.css](components/Header.module.css)
  - [components/Hero.tsx](components/Hero.tsx) + [components/Hero.module.css](components/Hero.module.css)
  - [components/Features.tsx](components/Features.tsx) + [components/Features.module.css](components/Features.module.css)
  - [components/WhyMoonEX.tsx](components/WhyMoonEX.tsx) + [components/WhyMoonEX.module.css](components/WhyMoonEX.module.css)
  - [components/FAQs.tsx](components/FAQs.tsx) + [components/FAQs.module.css](components/FAQs.module.css)
  - [components/CTA.tsx](components/CTA.tsx) + [components/CTA.module.css](components/CTA.module.css)
  - [components/Footer.tsx](components/Footer.tsx) + [components/Footer.module.css](components/Footer.module.css)
- Users demo page: [app/users/page.tsx](app/users/page.tsx) + [app/users/users.module.css](app/users/users.module.css)
- Tooling config:
  - [package.json](package.json)
  - [tsconfig.json](tsconfig.json)
  - [next.config.ts](next.config.ts)
  - [postcss.config.mjs](postcss.config.mjs)
  - [eslint.config.mjs](eslint.config.mjs)
