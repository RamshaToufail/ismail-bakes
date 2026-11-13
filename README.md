# Ismail Bakes

Premium pre-order bakery storefront and digital showcase for Rawalpindi, Pakistan, built with Next.js 15 App Router, TypeScript, and modern CSS.

## Architecture & Showcase Model

Ismail Bakes operates as a luxury showcase and bespoke order consultation platform:
- **Showcase Catalogue**: Browse small-batch celebration cakes, gourmet cupcakes, chocolate truffle cake pops, and layered dessert cups with serving estimates, flavour profiles, and craftsmanship highlights.
- **Dedicated Bespoke Ordering Guide (`/custom-cakes`)**: Complete portion & sizing matrix, Lambeth and botanical design directions, sponge & buttercream menus, and 4-step commission process.
- **Artisanal Gallery & Lightbox (`/gallery`)**: Client-side interactive photo lightbox with category filtering and keyboard navigation.
- **Direct Consultation Integration**: Customers order directly through official Instagram direct messaging ([@ismail.bakes](https://www.instagram.com/ismail.bakes/)), ensuring unhurried, personalized customer service.
- **Pre-Order Notice**: Built around owner-specified 48-hour minimum lead times for standard treats and 3–5 days for bespoke tiered cakes.
- **Service Areas**: Pre-order delivery and pickup serving owner-approved Rawalpindi neighbourhoods (Westridge, Range Road, Shalley Valley, Afzal Town, Afshan Colony, Babu Market, Chur Chowk, Misrial Road, Qasim Market).

## Local Development

```bash
npm install
npm test
npm run build
npm run dev
```

Run test suite:
```bash
npm test
```

## Commercial Hosting Assessment

For commercial operations without ongoing hosting costs, see [HOSTING_ASSESSMENT.md](./HOSTING_ASSESSMENT.md).
- **Vercel Hobby**: Terms of Service restrict free accounts to non-commercial personal projects.
- **Recommended Free Commercial Alternative**: **Cloudflare Pages** or **Netlify Starter** (100% free commercial use, unlimited/generous bandwidth, automated GitHub deployments, free custom domain SSL).
