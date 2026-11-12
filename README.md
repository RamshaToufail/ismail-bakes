# Ismail Bakes

Premium pre-order bakery storefront for Rawalpindi, Pakistan, built with Next.js App Router, TypeScript, Tailwind CSS and Prisma/PostgreSQL.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

The Neon CLI is configured for the requested production project. It writes secrets to `.env.local` (git-ignored); use `DATABASE_URL` (pooled runtime URL) and `DIRECT_URL` (direct migrations URL). Prisma scripts load `.env.local` with `dotenv-cli`. Never commit environment files.

```bash
npm run db:generate
npm run db:push
npm run build
```

## Current delivery state

Phase 1: Responsive branded frontend and primary storefront routes implemented.
Phase 2: Prisma relational schema and environment template prepared; Neon credentials and connectivity are not configured, and schema has not been deployed.
Phases 3–5: Product/cart/checkout persistence, admin authentication/dashboard, and live order workflow are not implemented. The storefront currently uses editorial catalogue data and clearly labels the request/approval requirement. Do not represent checkout, order submission, admin access, image upload, or payment as operational.
Phase 6: Build verification in progress. Vercel deployment is not performed.

Vercel: import the repository, set `DATABASE_URL`, `DIRECT_URL`, and `AUTH_SECRET` in project environment settings, then configure migrations/deploy only after database setup and review.
