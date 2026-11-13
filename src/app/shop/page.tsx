import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

const filterLinks = [
  { label: 'All treats', href: '/shop', active: true },
  { label: 'Cakes', href: '/cakes', active: false },
  { label: 'Cupcakes', href: '/cupcakes', active: false },
  { label: 'Cake pops', href: '/cake-pops', active: false },
  { label: 'Sundaes', href: '/sundaes', active: false },
];

export default function Shop() {
  return (
    <main className="container listing-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span aria-current="page">Our Creations</span>
      </nav>

      <div className="listing-header">
        <div className="eyebrow">Handcrafted in Rawalpindi</div>
        <h1>
          Our <em>Creations.</em>
        </h1>
        <p className="listing-intro">
          Everything is baked fresh to order in small batches using premium ingredients.
          Browse our signature repertoire below, then connect with us on Instagram
          or WhatsApp to discuss your date and custom details.
        </p>

        {/* Filter Navigation */}
        <div className="filters-bar" role="navigation" aria-label="Category filters">
          {filterLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`filter-pill ${item.active ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Product Showcase Grid */}
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Custom Order Callout Banner */}
      <section className="bespoke-callout">
        <div className="bespoke-callout-copy">
          <span className="eyebrow">Bespoke celebration orders</span>
          <h2>
            Planning a custom cake or <em>party dessert table?</em>
          </h2>
          <p>
            Whether you envision a vintage Lambeth birthday tier, delicate floral
            scallops, or a matching dessert spread for your event, we work with you
            personally on every detail.
          </p>
          <div className="bespoke-actions">
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
            <Link href="/contact" className="btn btn-outline">
              <MessageCircle size={15} /> Contact details ↗
            </Link>
          </div>
        </div>
        <div className="bespoke-notice">
          <strong>Pre-orders only</strong>
          <span>At least 48 hours’ notice required · Rawalpindi delivery &amp; pickup</span>
        </div>
      </section>

      <style>{`
        .listing-page {
          padding-top: 55px;
          padding-bottom: 95px;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--muted);
          margin-bottom: 24px;
        }
        .breadcrumbs a {
          color: var(--muted);
          transition: color .2s ease;
        }
        .breadcrumbs a:hover {
          color: var(--brown);
        }
        .breadcrumbs span[aria-current] {
          color: var(--brown);
          font-weight: 500;
        }
        .listing-header h1 {
          font-size: clamp(40px, 4.5vw, 56px);
          font-weight: 500;
          line-height: 1.15;
          margin: 10px 0 14px;
        }
        .listing-header h1 em {
          color: var(--gold);
          font-style: italic;
          font-weight: 400;
        }
        .listing-intro {
          color: #796b61;
          font-size: 14px;
          line-height: 1.8;
          max-width: 680px;
          margin: 0 0 35px;
        }
        .filters-bar {
          display: flex;
          gap: 12px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 16px;
          margin-bottom: 40px;
          overflow-x: auto;
        }
        .filter-pill {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 20px;
          background: #fbf9f4;
          border: 1px solid var(--line);
          color: var(--muted);
          white-space: nowrap;
          transition: all .2s ease;
        }
        .filter-pill:hover {
          color: var(--brown);
          border-color: #d6caba;
        }
        .filter-pill.active {
          background: var(--brown);
          color: #fff;
          border-color: var(--brown);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .bespoke-callout {
          margin-top: 75px;
          padding: 48px;
          background: #f2ece2;
          border: 1px solid var(--line);
          display: grid;
          grid-template-columns: 1.4fr .8fr;
          gap: 36px;
          align-items: center;
        }
        .bespoke-callout-copy h2 {
          font-size: clamp(28px, 3.2vw, 38px);
          font-weight: 500;
          line-height: 1.25;
          margin: 10px 0 14px;
        }
        .bespoke-callout-copy h2 em {
          color: var(--gold);
          font-style: italic;
        }
        .bespoke-callout-copy p {
          font-size: 13px;
          line-height: 1.8;
          color: #796b61;
          margin: 0 0 24px;
          max-width: 520px;
        }
        .bespoke-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .bespoke-notice {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bespoke-notice strong {
          font-family: var(--font-serif);
          font-size: 18px;
          color: var(--brown);
        }
        .bespoke-notice span {
          font-size: 11px;
          line-height: 1.6;
          color: var(--muted);
        }
        @media(max-width: 860px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bespoke-callout {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
        }
        @media(max-width: 580px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .listing-page {
            padding-top: 35px;
          }
          .bespoke-actions {
            flex-direction: column;
            width: 100%;
          }
          .bespoke-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
