import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, FileText, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Guidelines | Ismail Bakes — Rawalpindi',
  description:
    'Website guidelines, consultation notices, allergen warnings, and pre-order terms for Ismail Bakes in Rawalpindi, Pakistan.',
};

export default function TermsPage() {
  return (
    <div className="terms-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="terms-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">Terms &amp; Guidelines</span>
        </nav>

        {/* Content Box */}
        <article className="terms-box">
          <div className="eyebrow">
            <FileText size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
            A Few Ground Rules
          </div>
          <h1>Website Notice &amp; Order Guidelines</h1>
          <p className="terms-lead">
            Welcome to the online portfolio of Ismail Bakes. Please review our ordering
            policies, lead time requirements, and consultation guidelines below.
          </p>

          <section className="terms-section">
            <h2>1. Digital Showcase &amp; Non-Transaction Nature</h2>
            <p>
              This website is published as an informational showcase, visual portfolio, and flavour
              catalogue for Ismail Bakes in Rawalpindi, Pakistan. This site does not process online
              monetary transactions or provide automated checkout fulfillment.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Consultations &amp; Order Confirmation</h2>
            <p>
              All customer pre-orders and bespoke celebration cake enquiries are conducted
              externally through our official Instagram profile (
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ismail.bakes
              </a>
              ) or official WhatsApp. Pre-orders are confirmed only after direct personal review
              and agreement on date, sizing, and design specifications.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. Advance Lead Times</h2>
            <p>
              Because every bake is handcrafted fresh to order in small batches with pure dairy
              butter and fresh eggs, we enforce minimum advance booking periods:
            </p>
            <ul>
              <li>Standard cupcakes, cake pops, and dessert cups: Minimum <strong>48 hours’ notice</strong>.</li>
              <li>Bespoke celebration and tiered cakes: Minimum <strong>3 to 5 days’ notice</strong>.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Delivery &amp; Safe Transport</h2>
            <p>
              Local delivery is coordinated across our owner-approved Rawalpindi neighbourhoods. For
              customer pickups, cakes must be transported on a flat floorboard in an air-conditioned
              vehicle. Ismail Bakes is not responsible for structural damage incurred due to improper
              handling or transport after pickup.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Food Allergens &amp; Kitchen Environment</h2>
            <p>
              Our kitchen regularly processes dairy, wheat/gluten, eggs, and tree nuts. While we adhere
              to strict hygiene standards, we cannot guarantee an allergen-free environment for severe
              or life-threatening allergies. Please notify us of dietary concerns prior to confirmation.
            </p>
          </section>

          <div className="terms-footer">
            <span>Last reviewed: November 2026 · Ismail Bakes, Rawalpindi, Pakistan</span>
          </div>
        </article>
      </div>

      <style>{`
        .terms-page {
          padding: 40px 0 90px;
        }
        .terms-breadcrumb {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .terms-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
        }
        .terms-breadcrumb .sep {
          color: var(--gold);
        }
        .terms-breadcrumb .current {
          color: var(--muted);
        }

        .terms-box {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 50px;
          max-width: 820px;
          margin: 0 auto;
        }
        .terms-box h1 {
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 14px;
        }
        .terms-lead {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin-bottom: 32px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 24px;
        }

        .terms-section {
          margin-bottom: 28px;
        }
        .terms-section h2 {
          font: 20px var(--font-serif);
          color: var(--brown);
          margin: 0 0 10px;
        }
        .terms-section p {
          font-size: 13px;
          line-height: 1.8;
          color: #68574e;
          margin: 0 0 10px;
        }
        .terms-section ul {
          margin: 8px 0 14px 20px;
          padding: 0;
          font-size: 13px;
          line-height: 1.8;
          color: #68574e;
        }
        .terms-section a {
          color: var(--gold);
          text-decoration: underline;
        }

        .terms-footer {
          margin-top: 36px;
          border-top: 1px dashed var(--line);
          padding-top: 16px;
          font-size: 11px;
          color: var(--muted);
        }

        @media(max-width: 600px) {
          .terms-box {
            padding: 28px 20px;
          }
        }
      `}</style>
    </div>
  );
}
