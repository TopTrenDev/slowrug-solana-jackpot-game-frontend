# 🎰 SlowRug — Solana Jackpot (Frontend)

A neon-soaked **Solana jackpot** web experience: cyberpunk UI, particle effects, live chat chrome, and multiple game surfaces — built as a fast **Vite + React** single-page app.

> 🌐 **UI-first** — polished visuals and flows; chain logic / real wallets can be wired in later.

[![Telegram](https://img.shields.io/badge/Telegram-@toptrendev_66-2CA5E0?style=for-the-badge&logo=telegram)](https://t.me/TopTrenDev_66)
[![Twitter](https://img.shields.io/badge/Twitter-@toptrendev-1DA1F2?style=for-the-badge&logo=x)](https://x.com/intent/follow?screen_name=toptrendev)

---

## ✨ Highlights

- 🎨 **Cyberpunk design system** — neon lime, cyan, gold, and chrome; glows, scanlines, gradient borders
- 🗺️ **Multi-page routing** — Home, Tower, Infinite Rug, Operators hub (`react-router-dom`)
- 🧩 **Radix + shadcn-style primitives** — accessible components with **Tailwind CSS**
- ⚡ **TanStack Query** ready for data fetching when you plug in APIs
- 🧪 **Vitest** for unit tests and **Playwright** scaffold for E2E (`e2e/`)

---

## 🚀 Quick start

```bash
cd slowrug-solana-jackpot-frontend
npm install
npm run dev
```

Clone or download the repo first if you do not already have this folder locally.

Open **http://localhost:8080** — the dev server is configured for that port.

---

## 📜 Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (port **8080**) |
| `npm run build` | Production build → `dist/` |
| `npm run build:dev` | Build with `development` mode |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Vitest in watch mode |
| `npx playwright test` | E2E tests (add specs under `e2e/`) |

---

## 🛣️ Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/tower` | Tower |
| `/infinite-rug` | Infinite Rug |
| `/operators` | Operators |
| `*` | Not found |

---

## 🧰 Tech stack

- **React 18** + **TypeScript**
- **Vite 5** + `@vitejs/plugin-react-swc`
- **Tailwind CSS** + **tailwindcss-animate**
- **Radix UI** primitives, **lucide-react** icons
- **React Hook Form** + **Zod** (+ resolvers)
- **TanStack Query**
- **Vitest** + Testing Library · **Playwright**

---

## 📁 Project layout (overview)

```
src/
├── components/     # UI, layout, effects
├── pages/          # Route screens
├── hooks/          # Shared hooks
├── lib/            # Utilities
├── assets/         # Images & static art
├── App.tsx         # Router + providers
└── main.tsx        # Entry
public/             # Favicon & public assets
e2e/                # Playwright tests (add `*.spec.ts` here)
```

---

## 🖼️ Fonts & styling

Google Fonts (**Bebas Neue**, **Space Grotesk**, **IBM Plex Mono**) are loaded from `src/index.css`. Theme tokens live in CSS variables under `@layer base` — prefer semantic classes (`bg-card`, `text-primary`, etc.) over raw `hsl(...)` in components.

---

## 🏗️ Production build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (CDN, Vercel, Netlify, S3, etc.). Set your host’s SPA fallback to `index.html` so client-side routes work.
