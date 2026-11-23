# Ismail Bakes — Public release checklist

This file is a working checklist, not an independent security, legal, accessibility, or launch certification. Verify each item against the current code and service configuration before release.

## Storefront and order handling

- The current site is a product and consultation showcase; it does not persist orders or process payments.
- Check all product, contact, and social links against the current business details.
- Do not describe a request, enquiry, or copied message as a submitted or confirmed order.

## Customer content and privacy

- `src/lib/reviews.ts` contains customer-style quotes with abbreviated names and neighbourhoods. This repository does not contain records proving their authenticity or customer consent.
- Obtain and retain appropriate permission before publishing those testimonials as verified. If permission cannot be confirmed, ask the owner to approve a replacement approach before changing or removing the testimonial content.
- Avoid publishing customer names, contact details, addresses, order details, or private correspondence without an appropriate basis and permission.

## Deployment and secrets

- Review current hosting-provider terms, pricing, and runtime support using official provider documentation. See `HOSTING_ASSESSMENT.md` for general evaluation criteria, not a guarantee of current plan terms.
- Store credentials in the hosting provider's secret environment settings. Do not commit `.env.local`, credentials, or private keys.
- Verify production and preview environment-variable scope separately before relying on environment-dependent features.

## Verification to record at release

- Run `npm audit`, `npm test`, `npm run lint`, and `npm run build`; record actual results and unresolved findings.
- Verify mobile and desktop rendering and check every external link.
- Confirm that metadata, sitemap, robots directives, structured data, and public business details match the current site.
- Record any manual checks that automated tests do not cover; do not label them verified unless they were performed.
