# Vercel Deployment Guide — SLEEK & SHARP Unisex Salon

## Project Info
- **Framework:** React + Vite
- **Build output:** `dist/`
- **Build command:** `npm run build`
- **No environment variables required**

---

## Step 1 — Download the Project

### Option A: From Replit
1. Open the Replit project
2. Click the **three-dot menu (⋯)** in the top-right corner
3. Select **"Download as ZIP"**
4. Extract the ZIP on your computer
5. Navigate into the folder: `artifacts/sleek-sharp-salon/`
6. This folder is your standalone deployable project

### Option B: Clone via Git
```bash
git clone <your-replit-git-url>
cd <project>/artifacts/sleek-sharp-salon
```

---

## Step 2 — Upload to GitHub

1. Create a new repository at [github.com/new](https://github.com/new)
   - Name it: `sleek-sharp-salon` (or any name you like)
   - Set to **Public** or **Private**
   - Do **not** initialize with README (you already have files)

2. Open a terminal inside the `artifacts/sleek-sharp-salon/` folder and run:

```bash
git init
git add .
git commit -m "Initial commit — SLEEK & SHARP Salon website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sleek-sharp-salon.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 3 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create a free account)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"** and select your `sleek-sharp-salon` repo
4. Configure the project:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite |
| **Root Directory** | `.` (leave as-is — you're importing just the salon folder) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

5. **No environment variables are needed** — leave that section empty
6. Click **"Deploy"**

Vercel will build and deploy your site in ~60 seconds.

---

## Step 4 — Your Live URL

After deployment, Vercel gives you a URL like:
```
https://sleek-sharp-salon.vercel.app
```

You can also add a **custom domain** (e.g. `sleekandsharp.in`) from the Vercel dashboard → Project Settings → Domains.

---

## Build Details

| Detail | Value |
|---|---|
| Build tool | Vite 7 |
| Output folder | `dist/` |
| JS bundle | ~540 KB (gzip: ~170 KB) |
| CSS bundle | ~108 KB (gzip: ~17 KB) |
| Build time | ~15 seconds |
| SPA routing | Configured in `vercel.json` |
| Assets cached | 1 year (immutable) |

---

## Project Structure (Deployment-Ready)

```
sleek-sharp-salon/
├── public/
│   ├── favicon.svg          ← Gold "S" favicon
│   ├── opengraph.jpg        ← Social share image
│   └── robots.txt           ← SEO robots file
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Booking.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── FloatingElements.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html               ← SEO-optimized with JSON-LD schema
├── vite.config.ts           ← Works on both Replit & Vercel
├── vercel.json              ← SPA routing + cache headers
├── tsconfig.json            ← Standalone (no monorepo deps)
├── package.json             ← All versions pinned, no workspace deps
└── .gitignore
```

---

## Checklist

- ✅ **Vercel Compatible** — `vercel.json` configured, SPA rewrites set up
- ✅ **Production Ready** — Clean Vite build, zero TypeScript errors
- ✅ **Mobile Responsive** — Tested on 390px (iPhone), 768px (tablet), 1280px (desktop)
- ✅ **SEO Friendly** — Full meta tags, Open Graph, Twitter Card, JSON-LD structured data
- ✅ **No Deployment Errors Expected** — Build verified locally: `✓ built in 15.29s`
- ✅ **No Replit Dependencies** — Replit plugins only load when `REPL_ID` env var is present
- ✅ **No Localhost References** — All images from Unsplash CDN, fonts from Google CDN
- ✅ **Assets Optimized** — 1-year cache headers on `/assets/*`
- ✅ **Security Headers** — X-Content-Type-Options, X-Frame-Options, XSS Protection set
- ✅ **Custom Favicon** — Gold "S" on black background matching brand

---

## Optional: Add a Custom Domain on Vercel

1. In Vercel Dashboard → Your Project → **Settings → Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g. `sleekandsharp.in`)
4. Follow the DNS instructions (add a CNAME or A record at your domain registrar)
5. Vercel auto-provisions HTTPS (SSL certificate) for free

---

## Support

For questions about the website, contact the developer.  
Salon: **+91 8005887169** | Bank Colony, Murlipura, Jaipur 302039
