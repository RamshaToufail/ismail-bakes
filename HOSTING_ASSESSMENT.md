# Hosting considerations for Ismail Bakes

This document is a technical planning note, not legal, policy, or pricing advice. Hosting-provider terms, plan limits, pricing, and Next.js support change over time. Verify current official documentation and the bakery's intended use before choosing or changing a production host.

## Application requirements

- Next.js App Router with static generation for the current showcase routes.
- Image optimization and support for the project's configured Next.js features.
- HTTPS, custom-domain support if a bakery domain is selected, and deploy previews.
- Environment variables managed in the hosting provider's secret settings, never committed to Git.

## Provider evaluation checklist

Compare providers against the requirements above and verify:

1. Current commercial-use terms and applicable plan restrictions.
2. Support for this repository's Next.js version, App Router behavior, and build output.
3. Image optimization/runtime compatibility and any required adapters.
4. Build, bandwidth, function, and custom-domain limits and current pricing.
5. How secrets are scoped across production, preview, and development environments.

Do not assume a free tier permits commercial use, that a feature is unlimited, or that a static-export recipe supports every server feature. Confirm each point in the provider's current official documentation.

## Current project note

The repository contains Vercel deployment configuration. This document does not recommend changing providers or project settings; any migration should be separately approved and tested before production use.
