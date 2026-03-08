# Lalitha Lahari Karri — Portfolio

Personal portfolio website for Lalitha Lahari Karri, Business Analyst & BI Engineer.

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## 📦 Build

```bash
npm run build
```

Output goes to the `dist/` folder.

## 🌐 Deploy to GitHub Pages

This repo auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

**One-time setup:**
1. Go to your repo → **Settings → Pages**
2. Under *Source*, select **GitHub Actions**
3. Push to `main` — the site will be live at `https://<your-username>.github.io/<repo-name>/`

> **Note:** If deploying to a subdirectory (not a root domain), add `base: '/<repo-name>/'` to `vite.config.ts`.

## 🖼️ Images

Place your images in the `public/` folder with these exact filenames:

| File | Used for |
|------|----------|
| `lalitha.jpg` | Hero photo |
| `uiuc.jpg` | UIUC logo |
| `accenture.jpg` | Accenture logo |
| `housing.jpg` | Housing Reviews project card |
| `blockchain.jpg` | Blockchain project card |
| `cherie.webp` | Cherie AI project card |
| `giese.jpg` | ISSS / Outside Work card |
| `beacons.jpg` | Instagram community card |
| `travel.jpg` | Travel card |
| `resume.pdf` | Downloadable resume |

## 🛠 Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Framer Motion (motion/react)
- Lucide React icons
