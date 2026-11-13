import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  HelpCircle,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { EnquiryBuilder } from '@/components/enquiry-builder';
import { APPROVED_RAWALPINDI_AREAS } from '@/lib/service-areas';

export const metadata: Metadata = {
  title: 'Contact & Enquiries | Ismail Bakes — Rawalpindi, Pakistan',
  description:
    'Enquire about bespoke celebration cakes, cupcakes, and party dessert orders in Rawalpindi. Connect directly with Ismail Bakes on Instagram (@ismail.bakes).',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="contact-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">Contact &amp; Enquiries</span>
        </nav>

        {/* Hero Header */}
        <header className="contact-header">
          <span className="eyebrow">
            <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
            Personal Consultations · Rawalpindi
          </span>
          <h1 className="display-title">
            Let’s make your celebration <em>unforgettable.</em>
          </h1>
          <p className="contact-lead">
            Because every cake and treat is baked fresh to order in small batches, we handle
            every customer enquiry with personal care. Connect with us on Instagram to discuss
            your event date, portion needs, and custom decorative details.
          </p>
        </header>

        {/* Info Cards Grid */}
        <div className="contact-cards-grid">
          {/* Card 1 */}
          <div className="contact-card highlight-card">
            <div className="card-icon">
              <Instagram size={24} />
            </div>
            <span className="card-label">Primary Order Channel</span>
            <h3>Direct Message on Instagram</h3>
            <p>
              Send us a direct message with your date and inspiration. We respond promptly with
              availability, design recommendations, and custom pricing.
            </p>
            <a
              href="https://www.instagram.com/ismail.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Message @ismail.bakes <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Card 2 */}
          <div className="contact-card">
            <div className="card-icon">
              <Clock size={24} />
            </div>
            <span className="card-label">Booking Timeline</span>
            <h3>Notice &amp; Lead Times</h3>
            <p>
              Small-batch bakes require at least <strong>48 hours’ notice</strong>. Custom tiered
              celebration cakes require <strong>3 to 5 days</strong> to ensure careful sourcing and
              artisan preparation.
            </p>
            <div className="card-badge-line">
              <span>Fresh scratch baking</span>
              <span>·</span>
              <span>No pre-freezing</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="contact-card">
            <div className="card-icon">
              <MapPin size={24} />
            </div>
            <span className="card-label">Service Territory</span>
            <h3>Rawalpindi, Pakistan</h3>
            <p>
              Careful local delivery is available across approved Rawalpindi neighbourhoods.
              Pre-arranged kitchen pickup is also warmly welcomed for all confirmed orders.
            </p>
            <Link href="#service-areas" className="text-link">
              View approved delivery areas <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Interactive DM Enquiry Builder */}
        <EnquiryBuilder />

        {/* Service Areas Section */}
        <section id="service-areas" className="service-areas-section">
          <div className="areas-header">
            <span className="eyebrow">Coverage Confirmation</span>
            <h2>Approved Rawalpindi Delivery Areas</h2>
            <p>
              To ensure all delicate buttercream tiers and cake pops arrive in pristine condition,
              we deliver to the following owner-approved Rawalpindi neighbourhoods:
            </p>
          </div>

          <div className="areas-pills">
            {APPROVED_RAWALPINDI_AREAS.map((area) => (
              <div key={area} className="area-pill">
                <ShieldCheck size={14} />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="islamabad-note">
            <strong>Inquiring from Islamabad?</strong>
            <span>
              Orders for Islamabad or surrounding areas can be arranged via customer pickup or
              special courier consultation depending on temperature and cake architecture.
            </span>
          </div>
        </section>

        {/* FAQs Callout */}
        <section className="faq-bridge">
          <div className="faq-bridge-copy">
            <HelpCircle size={22} className="bridge-icon" />
            <div>
              <h3>Have Questions Before Messaging?</h3>
              <p>
                Learn more about our minimum order notice, ingredient sourcing, cake storage, and
                serving recommendations on our complete FAQ page.
              </p>
            </div>
          </div>
          <Link href="/faqs" className="btn btn-outline">
            Browse All FAQs ↗
          </Link>
        </section>
      </div>

      <style>{`
        .contact-page {
          padding: 40px 0 90px;
        }
        .contact-breadcrumb {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .contact-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
        }
        .contact-breadcrumb .sep {
          color: var(--gold);
        }
        .contact-breadcrumb .current {
          color: var(--muted);
        }

        .contact-header {
          max-width: 740px;
          margin-bottom: 50px;
        }
        .contact-lead {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin-top: 14px;
        }

        /* Cards Grid */
        .contact-cards-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 22px;
        }
        .contact-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
        }
        .highlight-card {
          background: #faf6ef;
          border-color: #d8cbbc;
        }
        .card-icon {
          color: var(--gold);
          margin-bottom: 14px;
        }
        .card-label {
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .contact-card h3 {
          font: 20px var(--font-serif);
          color: var(--brown);
          margin: 0 0 10px;
        }
        .contact-card p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 20px;
          flex-grow: 1;
        }
        .card-badge-line {
          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--brown);
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .card-badge-line span:nth-child(2) {
          color: var(--gold);
        }

        /* Service Areas */
        .service-areas-section {
          margin-top: 70px;
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 44px;
        }
        .areas-header h2 {
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 500;
          color: var(--brown);
          margin: 6px 0 10px;
        }
        .areas-header p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 24px;
          max-width: 680px;
        }
        .areas-pills {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }
        .area-pill {
          background: #faf6ef;
          border: 1px solid var(--line);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: var(--brown);
          font-weight: 500;
        }
        .area-pill svg {
          color: var(--gold);
          flex-shrink: 0;
        }
        .islamabad-note {
          border-top: 1px solid var(--line);
          padding-top: 16px;
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .islamabad-note strong {
          color: var(--brown);
        }

        /* FAQ Bridge */
        .faq-bridge {
          margin-top: 40px;
          background: #faf6ef;
          border: 1px solid var(--line);
          padding: 28px 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .faq-bridge-copy {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          max-width: 620px;
        }
        .bridge-icon {
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .faq-bridge-copy h3 {
          font: 18px var(--font-serif);
          color: var(--brown);
          margin: 0 0 4px;
        }
        .faq-bridge-copy p {
          font-size: 13px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        @media(max-width: 900px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
          .areas-pills {
            grid-template-columns: repeat(2, 1fr);
          }
          .service-areas-section {
            padding: 32px 24px;
          }
        }
        @media(max-width: 600px) {
          .areas-pills {
            grid-template-columns: 1fr;
          }
          .faq-bridge {
            flex-direction: column;
            align-items: flex-start;
          }
          .faq-bridge .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
