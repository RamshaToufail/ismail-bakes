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

## Ordering preview status

- Product cart, localStorage persistence, PKR subtotal, checkout details, 48-hour Pakistan-time validation, and a review-only order preview are implemented.
- Checkout exposes only the bakery-approved Rawalpindi service areas listed in `.env.example`. The list is configurable with `NEXT_PUBLIC_RAWALPINDI_SERVICE_AREAS` (comma-separated); the supplied approved list is the default.
- This is frontend-only: no order is transmitted or saved, no online payment is taken, and the review screen clearly states it is not a submitted order. Delivery fees are not estimated or invented.
- Neon/Prisma schema setup remains separate and is not used by this preview flow. Admin authentication and order management are not implemented.

Vercel: import the repository, set `DATABASE_URL`, `DIRECT_URL`, and `AUTH_SECRET` in project environment settings, then configure migrations/deploy only after database setup and review.
