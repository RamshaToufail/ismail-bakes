import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { photo } from '@/lib/products';
import { ReviewsSection } from '@/components/reviews-section';
import { APPROVED_RAWALPINDI_AREAS } from '@/lib/service-areas';

export const metadata: Metadata = {
  title: 'Our Story | Ismail Bakes — Handcrafted in Rawalpindi',
  description:
    'Learn about Ismail Bakes, a small-batch home bakery in Rawalpindi, Pakistan, dedicated to pure dairy butter, Belgian chocolate, and unhurried artisanal piping.',
};

const pillars = [
  {
    icon: Heart,
    title: '100% Scratch Baking',
    desc: 'Every sponge, ganache, fruit compote, and buttercream is prepared from scratch with pure dairy butter, fresh farm eggs, and real vanilla. We never use artificial shortening or factory premixes.',
  },
  {
    icon: Clock,
    title: 'Baked Fresh to Order',
    desc: 'Nothing in our kitchen sits frozen in advance. Each cake is baked specifically for your milestone date, ensuring the tender crumb and delicate flavour that only fresh baking can deliver.',
  },
  {
    icon: Sparkles,
    title: 'Artisanal Hand-Piping',
    desc: 'From intricate Victorian Lambeth borders and delicate swags to soft buttercream blossoms, every decorative element is shaped by hand with patient, personal care.',
  },
  {
    icon: MapPin,
    title: 'Rooted in Rawalpindi',
    desc: 'Proudly serving our hometown community. We arrange careful local delivery and collection for families celebrating birthdays, anniversaries, and milestones across Rawalpindi.',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">Our Story</span>
        </nav>

        {/* Hero Section */}
        <header className="about-hero">
          <div className="about-hero-copy">
            <span className="eyebrow">
              <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
              A Homegrown Kind of Magic · Rawalpindi
            </span>
            <h1 className="display-title">
              Made by hand, for the tables where <em>memories are made.</em>
            </h1>
            <p className="hero-lead">
              Ismail Bakes was born out of a quiet, unhurried passion: the conviction that
              celebrations feel deeply special when the centrepiece dessert is baked with
              genuine love and thoughtful craftsmanship.
            </p>
            <p className="hero-sublead">
              From our kitchen in Rawalpindi, Pakistan, we create small-batch celebration
              cakes, delicate cupcake bouquets, and handcrafted party treats for life’s most
              treasured moments.
            </p>
            <div className="about-hero-ctas">
              <Link href="/shop" className="btn">
                Explore our creations <ArrowRight size={15} />
              </Link>
              <a
                href="https://www.instagram.com/ismail.bakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Instagram size={15} /> Follow @ismail.bakes <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div
            className="about-hero-image"
            style={{
              backgroundImage: `url(${photo('photo-1578985545062-69928b1d9587', 900)})`,
            }}
          >
            <div className="about-hero-tag">
              <strong>Rawalpindi, Pakistan</strong>
              <span>Baked fresh with pure butter</span>
            </div>
          </div>
        </header>

        {/* Narrative & Craft Section */}
        <section className="story-narrative">
          <div className="narrative-grid">
            <div className="narrative-text">
              <span className="eyebrow">The Kitchen Philosophy</span>
              <h2>Why We Do Things the Unhurried Way</h2>
              <p>
                In a world of mass-produced factory pastries and overly sweet commercial
                fondant, we choose a different rhythm. We believe you can taste the difference
                when butter is real, when eggs are fresh, and when sponge is allowed to bake
                at its own gentle pace.
              </p>
              <p>
                Every celebration cake begins with wholesome, recognizable pantry staples:
                pure dairy butter, Dutch-process cocoa, rich Belgian chocolate, and Madagascar
                vanilla bean. We balance our buttercreams so they remain silky and decadent
                without masking the delicate notes of the sponge.
              </p>
              <div className="narrative-quote">
                “A birthday cake shouldn’t just look magnificent in photographs—it should be
                the slice everyone asks for seconds of at the dining table.”
              </div>
            </div>
            <div className="narrative-visuals">
              <div
                className="visual-card visual-1"
                style={{
                  backgroundImage: `url(${photo('photo-1535141192574-5d4897c13136', 700)})`,
                }}
              >
                <span className="visual-badge">Vintage Lambeth Piping</span>
              </div>
              <div
                className="visual-card visual-2"
                style={{
                  backgroundImage: `url(${photo('photo-1486427944299-d1955d23e34d', 700)})`,
                }}
              >
                <span className="visual-badge">Small-Batch Cupcakes</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="pillars-section">
          <div className="section-head text-center">
            <span className="eyebrow">Our Guiding Promises</span>
            <h2>The Four Pillars of Ismail Bakes</h2>
            <p className="pillars-sub">
              These simple commitments guide every cake tin we grease and every piping bag we fill.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="pillar-card">
                  <div className="pillar-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Verified Neighborhood Service Areas */}
        <section className="service-areas-strip">
          <div className="service-areas-inner">
            <div className="service-areas-header">
              <MapPin size={22} className="map-icon" />
              <div>
                <h3>Fresh Pre-Orders Across Rawalpindi</h3>
                <p>
                  We coordinate careful personal delivery and collection across our owner-approved
                  Rawalpindi neighbourhoods:
                </p>
              </div>
            </div>
            <div className="areas-tag-cloud">
              {APPROVED_RAWALPINDI_AREAS.map((area) => (
                <span key={area} className="area-tag">
                  {area}
                </span>
              ))}
            </div>
            <div className="service-areas-notice">
              <Clock size={14} />
              <span>
                Standard pre-orders require at least <strong>48 hours’ notice</strong>; custom tiered
                celebration cakes require <strong>3 to 5 days</strong>.
              </span>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <ReviewsSection
          title="Celebration Memories From Rawalpindi Families"
          subtitle="Genuine words from our sweet patrons who welcomed Ismail Bakes to their celebration tables."
        />

        {/* CTA Invitation Strip */}
        <section className="about-cta-card">
          <div className="about-cta-content">
            <span className="eyebrow">Planning a Special Date?</span>
            <h2>Let’s create something sweet for your next milestone.</h2>
            <p>
              Whether you have an exact visual reference or simply a flavour in mind,
              we would love to hear all about your celebration.
            </p>
          </div>
          <div className="about-cta-buttons">
            <Link href="/custom-cakes" className="btn">
              Bespoke Cake Guide ↗
            </Link>
            <a
              href="https://www.instagram.com/ismail.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Instagram size={15} /> Message on Instagram ↗
            </a>
          </div>
        </section>
      </div>

      <style>{`
        .about-page {
          padding: 40px 0 90px;
        }
        .about-breadcrumb {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .about-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
        }
        .about-breadcrumb .sep {
          color: var(--gold);
        }
        .about-breadcrumb .current {
          color: var(--muted);
        }

        .about-hero {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 48px;
          align-items: center;
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 50px;
          margin-bottom: 70px;
        }
        .hero-lead {
          font-size: 16px;
          line-height: 1.8;
          color: #55443c;
          margin: 16px 0 12px;
          font-family: var(--font-serif);
        }
        .hero-sublead {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 26px;
        }
        .about-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .about-hero-image {
          height: 420px;
          background-size: cover;
          background-position: center;
          position: relative;
          border: 1px solid var(--line);
        }
        .about-hero-tag {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(251, 249, 242, 0.95);
          padding: 12px 18px;
          border: 1px solid var(--gold);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-hero-tag strong {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--brown);
        }
        .about-hero-tag span {
          font-size: 9px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* Narrative */
        .story-narrative {
          margin-bottom: 80px;
        }
        .narrative-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .narrative-text h2 {
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 16px;
        }
        .narrative-text p {
          font-size: 14px;
          line-height: 1.8;
          color: #68574e;
          margin: 0 0 16px;
        }
        .narrative-quote {
          margin-top: 24px;
          padding: 20px 24px;
          background: #faf6ef;
          border-left: 3px solid var(--gold);
          font-family: var(--font-serif);
          font-size: 16px;
          line-height: 1.6;
          color: var(--brown);
          font-style: italic;
        }
        .narrative-visuals {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .visual-card {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          border: 1px solid var(--line);
        }
        .visual-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(251, 249, 242, 0.92);
          padding: 6px 12px;
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--brown);
        }

        /* Pillars */
        .pillars-section {
          margin-bottom: 80px;
        }
        .pillars-sub {
          font-size: 14px;
          color: var(--muted);
          max-width: 600px;
          margin: 8px auto 0;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
        }
        .pillar-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
        }
        .pillar-icon {
          color: var(--gold);
          margin-bottom: 14px;
        }
        .pillar-card h3 {
          font: 17px var(--font-serif);
          color: var(--brown);
          margin: 0 0 10px;
        }
        .pillar-card p {
          font-size: 12px;
          line-height: 1.65;
          color: var(--muted);
          margin: 0;
        }

        /* Service Areas */
        .service-areas-strip {
          background: #faf6ef;
          border: 1px solid var(--line);
          padding: 36px 40px;
          margin-bottom: 80px;
        }
        .service-areas-inner {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .service-areas-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .service-areas-header .map-icon {
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .service-areas-header h3 {
          font: 20px var(--font-serif);
          color: var(--brown);
          margin: 0 0 6px;
        }
        .service-areas-header p {
          font-size: 13px;
          color: var(--muted);
          margin: 0;
        }
        .areas-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .area-tag {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 6px 14px;
          font-size: 11px;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: var(--brown);
          border-radius: 16px;
        }
        .service-areas-notice {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--brown);
          border-top: 1px dashed var(--line);
          padding-top: 14px;
        }
        .service-areas-notice svg {
          color: var(--gold);
        }

        /* CTA Card */
        .about-cta-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          position: relative;
        }
        .about-cta-card::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(197, 160, 89, 0.25);
          pointer-events: none;
        }
        .about-cta-content {
          max-width: 600px;
          position: relative;
          z-index: 1;
        }
        .about-cta-content h2 {
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 10px;
        }
        .about-cta-content p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }
        .about-cta-buttons {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        @media(max-width: 900px) {
          .about-hero {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .about-hero-image {
            height: 300px;
          }
          .narrative-grid {
            grid-template-columns: 1fr;
          }
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 24px;
          }
          .about-cta-buttons {
            width: 100%;
          }
          .about-cta-buttons .btn {
            width: 100%;
          }
        }
        @media(max-width: 600px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .about-hero-ctas {
            flex-direction: column;
          }
          .about-hero-ctas .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
