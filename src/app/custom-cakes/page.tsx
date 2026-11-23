import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Award,
  Calendar,
  Check,
  Clock,
  Heart,
  Instagram,
  Layers,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
} from 'lucide-react';
import { photo } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Custom Cakes & Bespoke Celebrations | Ismail Bakes',
  description:
    'Plan your bespoke celebration cake in Rawalpindi & Islamabad. Explore portion guides, flavour profiles, Lambeth and floral aesthetics, and consultation steps.',
};

const styles = [
  {
    title: 'Vintage Lambeth & Over-Piping',
    badge: 'Trending & Timeless',
    desc: 'Victorian-inspired scrollwork, intricate shell borders, delicate swags, and bespoke piped messaging for romantic birthdays and anniversaries.',
    photoId: 'photo-1535141192574-5d4897c13136',
  },
  {
    title: 'Lush Hand-Piped Florals',
    badge: 'Boutique Botanical',
    desc: 'Individually piped buttercream roses, blossoms, and botanical wreaths crafted with silky, smooth Swiss and Italian-style buttercreams.',
    photoId: 'photo-1578985545062-69928b1d9587',
  },
  {
    title: 'Minimalist Textured Elegance',
    badge: 'Modern Sophistication',
    desc: 'Clean horizontal or palette-knife textures accented with edible gold leaf, subtle marbling, and delicate monochrome colour stories.',
    photoId: 'photo-1606890737304-57a1ca8a5b62',
  },
  {
    title: 'Celebration Spreads & Favours',
    badge: 'Party Tables',
    desc: 'Coordinating cupcake towers, chocolate truffle cake pops, and layered dessert cups curated to match your primary cake palette.',
    photoId: 'photo-1486427944299-d1955d23e34d',
  },
];

const portionGuide = [
  {
    tier: 'Small Petite Tier',
    weight: '1.0 – 1.5 lbs',
    servings: '6 – 8 portions',
    diameter: '6" round',
    recommended: 'Intimate birthdays, small family dinners, photo moments',
  },
  {
    tier: 'Signature Celebration',
    weight: '2.0 – 2.5 lbs',
    servings: '10 – 14 portions',
    diameter: '7"–8" round',
    recommended: 'Standard birthday parties, baby showers, dinner gatherings',
  },
  {
    tier: 'Grand Party Tier',
    weight: '3.0 – 3.5 lbs',
    servings: '16 – 22 portions',
    diameter: '8" deep round',
    recommended: 'Larger family gatherings, milestone celebrations, office events',
  },
  {
    tier: 'Two-Tier Centrepiece',
    weight: '4.5 – 5.5 lbs',
    servings: '25 – 35 portions',
    diameter: '6" + 8" stacked',
    recommended: 'Engagements, bridal showers, milestone jubilees',
  },
];

const steps = [
  {
    number: '01',
    title: 'Share Your Inspiration',
    desc: 'Send us reference photos, your event colour palette, desired date, and approximate guest count via Instagram direct message.',
  },
  {
    number: '02',
    title: 'Flavour & Sizing Consultation',
    desc: 'We will confirm weight recommendations, discuss sponge and filling profiles, and quote pricing based on structural complexity.',
  },
  {
    number: '03',
    title: 'Handcrafted With Care',
    desc: 'Your cake is baked fresh from scratch in Rawalpindi with pure butter, rich cocoa, and farm-fresh ingredients right before your event.',
  },
  {
    number: '04',
    title: 'Pickup or Local Delivery',
    desc: 'Collect from our Rawalpindi kitchen or coordinate careful local delivery across Rawalpindi and Islamabad.',
  },
];

export default function CustomCakesPage() {
  return (
    <div className="custom-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="custom-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">Custom Cakes &amp; Bespoke Orders</span>
        </nav>

        {/* Hero Banner */}
        <header className="custom-hero">
          <div className="custom-hero-content">
            <span className="eyebrow">
              <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
              Bespoke Patisserie
            </span>
            <h1 className="display-title">Custom Cakes Handcrafted for Your Most Cherished Milestones</h1>
            <p className="hero-lead">
              At Ismail Bakes, every custom cake is an edible work of art. Baked to order in
              Rawalpindi using pure dairy butter, rich Belgian chocolate, and meticulous hand-piped
              florals or vintage Lambeth borders, we bring your sweet celebrations to life.
            </p>
            <div className="hero-ctas">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Instagram size={16} /> Consult on Instagram <ArrowUpRight size={14} />
              </a>
              <Link href="/gallery" className="btn btn-outline">
                View Past Creations Gallery
              </Link>
            </div>
          </div>
          <div
            className="custom-hero-visual"
            style={{
              backgroundImage: `url(${photo('photo-1578985545062-69928b1d9587', 900)})`,
            }}
          >
            <div className="hero-badge">
              <strong>100% Fresh</strong>
              <span>Baked to order</span>
            </div>
          </div>
        </header>

        {/* Aesthetic Styles Grid */}
        <section className="section-block">
          <div className="section-header">
            <span className="eyebrow">
              <Palette size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
              Aesthetic Directions
            </span>
            <h2 className="section-title">Signature Design Styles</h2>
            <p className="section-subtitle">
              Choose from our most requested visual styles or combine elements for a custom
              aesthetic tailored specifically to your event.
            </p>
          </div>

          <div className="styles-grid">
            {styles.map((item) => (
              <div key={item.title} className="style-card">
                <div
                  className="style-photo"
                  style={{ backgroundImage: `url(${photo(item.photoId, 600)})` }}
                >
                  <span className="card-badge">{item.badge}</span>
                </div>
                <div className="style-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portion and Sizing Guide */}
        <section className="section-block portion-section">
          <div className="section-header">
            <span className="eyebrow">
              <Users size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
              Portion &amp; Sizing Matrix
            </span>
            <h2 className="section-title">How to Choose the Right Size</h2>
            <p className="section-subtitle">
              Portion estimates depend on whether cake is served as a dessert portion or coffee/party portion.
              Use our standard guide below as a helpful starting point.
            </p>
          </div>

          <div className="portion-grid">
            {portionGuide.map((tier) => (
              <div key={tier.tier} className="portion-card">
                <div className="portion-tier-header">
                  <Layers size={18} />
                  <h3>{tier.tier}</h3>
                </div>
                <div className="portion-weight">{tier.weight}</div>
                <div className="portion-meta">
                  <div className="meta-row">
                    <span className="label">Estimated Servings</span>
                    <span className="val">{tier.servings}</span>
                  </div>
                  <div className="meta-row">
                    <span className="label">Approx. Diameter</span>
                    <span className="val">{tier.diameter}</span>
                  </div>
                </div>
                <p className="portion-rec">{tier.recommended}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Flavour & Sponge Palette */}
        <section className="section-block flavour-section">
          <div className="flavour-grid">
            <div className="flavour-column">
              <span className="eyebrow">Signature Sponges</span>
              <h3>Sponge Bases</h3>
              <ul className="flavour-list">
                <li>
                  <strong>Madagascar Vanilla Bean</strong>
                  <span>Tender, fragrant sponge infused with real vanilla bean pods.</span>
                </li>
                <li>
                  <strong>Belgian Chocolate Fudge</strong>
                  <span>Moist, deeply rich dark chocolate sponge crafted with Dutch cocoa.</span>
                </li>
                <li>
                  <strong>Classic Red Velvet</strong>
                  <span>Velvety crumb with subtle cocoa undertones and rich ruby tone.</span>
                </li>
                <li>
                  <strong>Golden Salted Caramel</strong>
                  <span>Caramelised brown butter sponge with a warm roasted finish.</span>
                </li>
              </ul>
            </div>

            <div className="flavour-column">
              <span className="eyebrow">Frostings &amp; Fillings</span>
              <h3>Buttercreams &amp; Fillings</h3>
              <ul className="flavour-list">
                <li>
                  <strong>Whipped Vanilla Buttercream</strong>
                  <span>Light, silky, perfectly balanced sweetness made with pure dairy butter.</span>
                </li>
                <li>
                  <strong>Belgian Chocolate Ganache</strong>
                  <span>Decadent melted Belgian chocolate whipped to smooth spreadable perfection.</span>
                </li>
                <li>
                  <strong>Strawberry Compote Swirl</strong>
                  <span>Tangy-sweet fruit reduction layered between fluffy sponge tiers.</span>
                </li>
                <li>
                  <strong>Rich Butterscotch Drizzle</strong>
                  <span>Slow-cooked brown sugar and salted butter ribbon.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="section-block">
          <div className="section-header">
            <span className="eyebrow">
              <Clock size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
              The Commission Journey
            </span>
            <h2 className="section-title">How Bespoke Ordering Works</h2>
            <p className="section-subtitle">
              We keep the ordering process personal, straightforward, and conversational.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((st) => (
              <div key={st.number} className="step-card">
                <span className="step-num">{st.number}</span>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Checklist and Consultation CTA */}
        <section className="consultation-section">
          <div className="consultation-box">
            <div className="consultation-text">
              <span className="eyebrow">
                <Heart size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
                Ready to Order?
              </span>
              <h2>What to Include in Your Instagram DM</h2>
              <p>
                To help us provide an accurate quotation and availability check quickly,
                please mention:
              </p>
              <ul className="checklist">
                <li>
                  <Check size={16} /> <strong>Date of celebration</strong> &amp; delivery / pickup preference
                </li>
                <li>
                  <Check size={16} /> <strong>Approximate guest count</strong> or cake weight (e.g. 2 lbs)
                </li>
                <li>
                  <Check size={16} /> <strong>Reference photo</strong> or aesthetic inspiration
                </li>
                <li>
                  <Check size={16} /> <strong>Flavour preferences</strong> for sponge &amp; buttercream
                </li>
                <li>
                  <Check size={16} /> <strong>Custom message or name</strong> to be piped or placed
                </li>
              </ul>

              <div className="consultation-cta-group">
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <Instagram size={16} /> Send Instagram DM (@ismail.bakes) <ArrowUpRight size={14} />
                </a>
                <Link href="/contact" className="btn btn-outline">
                  <MessageCircle size={16} /> View Contact Details
                </Link>
              </div>
            </div>

            <div className="consultation-sidebar">
              <div className="sidebar-card">
                <Calendar size={20} />
                <h4>Lead Times &amp; Slots</h4>
                <p>
                  We recommend reserving celebration cakes at least <strong>3 to 5 days in advance</strong>.
                  For elaborate 2-tier designs and weekend dates, <strong>1 to 2 weeks</strong> notice is advised.
                </p>
              </div>
              <div className="sidebar-card">
                <Award size={20} />
                <h4>Artisanal Integrity</h4>
                <p>
                  Baked exclusively with pure dairy butter and farm eggs. We do not use commercial premixes
                  or artificial shortening.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .custom-page {
          padding: 40px 0 90px;
        }
        .custom-breadcrumb {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .custom-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
        }
        .custom-breadcrumb .sep {
          color: var(--gold);
        }
        .custom-breadcrumb .current {
          color: var(--muted);
        }

        .custom-hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 80px;
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 48px;
        }
        .hero-lead {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin: 16px 0 28px;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .custom-hero-visual {
          height: 380px;
          background-size: cover;
          background-position: center;
          position: relative;
          border: 1px solid var(--line);
        }
        .hero-badge {
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
        .hero-badge strong {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--brown);
        }
        .hero-badge span {
          font-size: 9px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .section-block {
          margin-bottom: 80px;
        }
        .section-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 40px;
        }
        .section-title {
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 10px;
        }
        .section-subtitle {
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
        }

        /* Styles Grid */
        .styles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .style-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
        }
        .style-photo {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .style-content {
          padding: 20px;
        }
        .style-content h3 {
          font: 17px var(--font-serif);
          color: var(--brown);
          margin: 0 0 8px;
        }
        .style-content p {
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        /* Portion Grid */
        .portion-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .portion-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 24px;
          display: flex;
          flex-direction: column;
        }
        .portion-tier-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--gold);
          margin-bottom: 12px;
        }
        .portion-tier-header h3 {
          font: 15px var(--font-serif);
          color: var(--brown);
          margin: 0;
        }
        .portion-weight {
          font: 26px var(--font-serif);
          color: var(--brown);
          margin-bottom: 16px;
        }
        .portion-meta {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 12px 0;
          margin-bottom: 14px;
        }
        .meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-bottom: 6px;
        }
        .meta-row:last-child {
          margin-bottom: 0;
        }
        .meta-row .label {
          color: var(--muted);
        }
        .meta-row .val {
          font-weight: 600;
          color: var(--brown);
        }
        .portion-rec {
          font-size: 11px;
          line-height: 1.5;
          color: var(--muted);
          margin: 0;
        }

        /* Flavour Section */
        .flavour-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .flavour-column {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 36px;
        }
        .flavour-column h3 {
          font-size: 24px;
          color: var(--brown);
          margin: 8px 0 20px;
        }
        .flavour-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .flavour-list li {
          border-bottom: 1px dashed var(--line);
          padding-bottom: 14px;
        }
        .flavour-list li:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .flavour-list strong {
          display: block;
          font-size: 14px;
          color: var(--brown);
          margin-bottom: 4px;
        }
        .flavour-list span {
          font-size: 12px;
          line-height: 1.5;
          color: var(--muted);
        }

        /* Steps */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .step-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 28px 24px;
        }
        .step-num {
          font: 32px var(--font-serif);
          color: var(--gold);
          display: block;
          margin-bottom: 10px;
          line-height: 1;
        }
        .step-card h3 {
          font: 16px var(--font-serif);
          color: var(--brown);
          margin: 0 0 10px;
        }
        .step-card p {
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        /* Consultation Box */
        .consultation-box {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 44px;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          position: relative;
        }
        .consultation-text h2 {
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 12px;
        }
        .consultation-text p {
          font-size: 13px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0 0 18px;
        }
        .checklist {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #4f3f37;
        }
        .checklist svg {
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .consultation-cta-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .consultation-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .sidebar-card {
          background: #faf6ef;
          border: 1px solid var(--line);
          padding: 24px;
        }
        .sidebar-card svg {
          color: var(--gold);
          margin-bottom: 10px;
        }
        .sidebar-card h4 {
          font: 16px var(--font-serif);
          color: var(--brown);
          margin: 0 0 8px;
        }
        .sidebar-card p {
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        @media(max-width: 960px) {
          .custom-hero {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .custom-hero-visual {
            height: 280px;
          }
          .styles-grid,
          .portion-grid,
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .consultation-box {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
        }
        @media(max-width: 600px) {
          .styles-grid,
          .portion-grid,
          .steps-grid,
          .flavour-grid {
            grid-template-columns: 1fr;
          }
          .hero-ctas,
          .consultation-cta-group {
            flex-direction: column;
          }
          .hero-ctas .btn,
          .consultation-cta-group .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
