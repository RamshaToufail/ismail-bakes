import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Instagram, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ismail Bakes — Rawalpindi',
  description:
    'Information and privacy guidelines for customer enquiries and pre-orders at Ismail Bakes in Rawalpindi, Pakistan.',
};

export default function PrivacyPage() {
  return (
    <div className="policy-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="policy-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">Privacy Policy</span>
        </nav>

        {/* Content Box */}
        <article className="policy-box">
          <div className="eyebrow">
            <ShieldCheck size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
            The Important Bits
          </div>
          <h1>Privacy Policy &amp; Customer Information</h1>
          <p className="policy-lead">
            At Ismail Bakes, we value your trust and treat your personal information with the same
            thoughtful care that goes into our handcrafted baking.
          </p>

          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              When you enquire about a pre-order or consult with us through our official Instagram
              profile (
              <a
                href="https://www.instagram.com/ismail.bakes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ismail.bakes
              </a>
              ) or WhatsApp, we collect only the information necessary to fulfill your celebration:
            </p>
            <ul>
              <li>Your name and contact phone number.</li>
              <li>Your celebration date and event timing.</li>
              <li>Delivery address or pickup preference within Rawalpindi.</li>
              <li>Flavour, dietary allergies, and custom cake design preferences.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>
              Your information is used strictly to respond to inquiries, confirm ingredient sourcing,
              bake and package your order, and coordinate careful delivery or pickup in Rawalpindi.
              We do not sell, rent, or trade your personal information with any third parties or
              advertising networks.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Digital Portfolio &amp; No Online Payment Storage</h2>
            <p>
              This website serves exclusively as a digital showcase and portfolio of our bakery
              creations. We do not process online credit card transactions, collect banking details,
              or store payment credentials on this website.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Your Rights &amp; Choices</h2>
            <p>
              You may contact us at any time via Instagram direct message to review, update, or
              request the deletion of any contact information you have previously provided to us.
            </p>
          </section>

          <div className="policy-footer">
            <span>Last reviewed: November 2026 · Ismail Bakes, Rawalpindi, Pakistan</span>
          </div>
        </article>
      </div>

      <style>{`
        .policy-page {
          padding: 40px 0 90px;
        }
        .policy-breadcrumb {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .policy-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
        }
        .policy-breadcrumb .sep {
          color: var(--gold);
        }
        .policy-breadcrumb .current {
          color: var(--muted);
        }

        .policy-box {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 50px;
          max-width: 820px;
          margin: 0 auto;
        }
        .policy-box h1 {
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 14px;
        }
        .policy-lead {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin-bottom: 32px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 24px;
        }

        .policy-section {
          margin-bottom: 28px;
        }
        .policy-section h2 {
          font: 20px var(--font-serif);
          color: var(--brown);
          margin: 0 0 10px;
        }
        .policy-section p {
          font-size: 13px;
          line-height: 1.8;
          color: #68574e;
          margin: 0 0 10px;
        }
        .policy-section ul {
          margin: 8px 0 14px 20px;
          padding: 0;
          font-size: 13px;
          line-height: 1.8;
          color: #68574e;
        }
        .policy-section a {
          color: var(--gold);
          text-decoration: underline;
        }

        .policy-footer {
          margin-top: 36px;
          border-top: 1px dashed var(--line);
          padding-top: 16px;
          font-size: 11px;
          color: var(--muted);
        }

        @media(max-width: 600px) {
          .policy-box {
            padding: 28px 20px;
          }
        }
      `}</style>
    </div>
  );
}
