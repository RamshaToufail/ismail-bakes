# Ismail Bakes — Commercial Hosting Assessment & Migration Guide

## Executive Summary

Ismail Bakes is a boutique bakery showcase and pre-order portfolio operating in Rawalpindi, Pakistan. Because this website functions as a digital storefront and commercial brand portfolio for a real business, hosting policy compliance is critical.

This assessment evaluates the current hosting platform (**Vercel Hobby Plan**) against commercial Terms of Service, and provides concrete, zero-cost, commercial-compliant alternatives: **Cloudflare Pages** and **Netlify Starter**.

---

## 1. Vercel Hobby Plan vs. Commercial Use

### The Restriction
Under **Vercel's Terms of Service (Fair Use Guidelines)**:
- The **Hobby (Free) Plan** is explicitly restricted to **personal, non-commercial projects**.
- Websites that promote, showcase, or generate leads for a commercial business (such as a bakery accepting customer orders, client inquiries, or brand commissions) are classified as commercial activities.
- Hosting a commercial portfolio on Vercel Hobby risks automated domain suspension or forced migration to **Vercel Pro ($20/month per member)**.

### Recommendation for Ismail Bakes
To ensure 100% policy compliance with **zero ongoing hosting costs**, Ismail Bakes should deploy its production showcase to **Cloudflare Pages** or **Netlify Starter**. Both platforms explicitly allow commercial use on their generous free tiers.

---

## 2. Platform Comparison Matrix

| Feature / Criteria | Vercel Hobby | Cloudflare Pages (Recommended) | Netlify Starter | GitHub Pages |
| :--- | :--- | :--- | :--- | :--- |
| **Commercial Use on Free Tier** | ❌ **No** (Personal/Hobby only) | ✅ **Yes** (100% allowed) | ✅ **Yes** (Commercial allowed) | ⚠️ Acceptable for static portfolios, but subject to GitHub commercial limits |
| **Monthly Hosting Cost** | $0 (Hobby) / $20/mo (Pro) | **$0 / month forever** | **$0 / month forever** | $0 / month |
| **Bandwidth Limits** | 100 GB / month | **Unlimited bandwidth** | 100 GB / month | 100 GB / month |
| **Custom Domain & SSL** | Included | **Included (Automatic SSL + DDoS)** | Included (Automatic Let's Encrypt) | Included |
| **Global Edge Network** | Fast | **330+ Global Data Centers** | Global CDN | Fastly CDN |
| **GitHub CI/CD Deployments** | Automatic on push | **Automatic on push** | **Automatic on push** | GitHub Actions |
| **Static Next.js Compatibility** | Native | **Native (`@cloudflare/next-on-pages` or static export)** | **Native (`@netlify/plugin-nextjs`)** | Static export only |

---

## 3. Recommended Choice: Cloudflare Pages

### Why Cloudflare Pages is Ideal for Ismail Bakes:
1. **100% Free Commercial Use**: Zero risk of policy violations or unexpected charges.
2. **Unlimited Bandwidth**: No monthly overage fees even during seasonal cake order spikes (Eid, wedding season, Valentine's, New Year).
3. **World-Class Performance**: Fastest CDN response times in Pakistan via Cloudflare's regional edge nodes (Karachi, Lahore, Islamabad).
4. **Built-In Enterprise Security**: Free automated SSL, DDoS mitigation, and HTTP/3 support.

---

## 4. Step-by-Step Deployment Guide

### Option A: Cloudflare Pages Deployment (Recommended)

1. **Connect GitHub Repository**:
   - Log in to your free [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select the `RamshaToufail/ismail-bakes` repository.

2. **Configure Build Settings**:
   - **Framework preset**: `Next.js (Static HTML Export)` or `Next.js`.
   - **Build command**: `npm run build`
   - **Build output directory**: `.next` (or `out` if using `output: 'export'`)
   - **Node.js version environment variable**: Set `NODE_VERSION` to `20`.

3. **Custom Domain**:
   - In the Cloudflare Pages project settings, click **Custom domains**.
   - Add your bakery domain (e.g., `ismailbakes.com` or `ismail-bakes.vercel.app` redirection).
   - Cloudflare provisions a free, auto-renewing SSL certificate within minutes.

---

### Option B: Netlify Starter Deployment

1. **Connect GitHub Repository**:
   - Log in to [Netlify](https://app.netlify.com/).
   - Click **Add new site** > **Import an existing project** > **GitHub**.
   - Select `RamshaToufail/ismail-bakes`.

2. **Configure Build Settings**:
   - Netlify automatically detects Next.js App Router and installs the official `@netlify/plugin-nextjs`.
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

3. **Deploy**:
   - Click **Deploy Site**. Every push to `main` will automatically build and deploy within 60 seconds.

---

## 5. Architectural Integrity Note

Ismail Bakes' current Next.js 15 showcase architecture produces **100% pre-rendered static HTML/React bundles (SSG)** for all 21 routes with zero server-side database bottlenecks at runtime. This makes the entire application instantaneously deployable to any static edge network without code modification.
