import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Check,
  Clock,
  Heart,
  Instagram,
  MessageCircle,
  Sparkles,
  Users,
} from 'lucide-react';
import { money, photo, products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = products.find((x) => x.id === id);
  if (!p) notFound();

  const related = products.filter((x) => x.id !== p.id);

  return (
    <main className="container product-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/shop">Our Creations</Link>
        <span>/</span>
        <span aria-current="page">{p.name}</span>
      </nav>

      {/* Main Product Showcase Layout */}
      <div className="product-layout">
        {/* Left Column: Visual Media & Badges */}
        <div className="photo-column">
          <div
            className="photo-main"
            style={{ backgroundImage: `url(${photo(p.image, 1200)})` }}
          >
            <span className="photo-tag">{p.tag}</span>
          </div>
          <div className="quality-strip">
            <div className="quality-item">
              <Heart size={16} />
              <span>Small-batch baked</span>
            </div>
            <div className="quality-item">
              <Clock size={16} />
              <span>48h notice</span>
            </div>
            <div className="quality-item">
              <Sparkles size={16} />
              <span>Made to order</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Consultation */}
        <div className="info-column">
          <div className="eyebrow">{p.category} · Handcrafted in Rawalpindi</div>
          <h1>{p.name}</h1>

          <div className="price-tag">
            <span>Price guidance</span>
            <strong>{money(p.price)}</strong>
            <small>Final price depends on custom size and design elements</small>
          </div>

          <p className="description">{p.description}</p>

          {/* Servings Guidance */}
          {p.servings && (
            <div className="spec-row">
              <div className="spec-icon">
                <Users size={16} />
              </div>
              <div className="spec-text">
                <span className="spec-label">Portion &amp; Servings</span>
                <span className="spec-value">{p.servings}</span>
              </div>
            </div>
          )}

          {/* Flavour Highlights */}
          {p.flavours && p.flavours.length > 0 && (
            <div className="flavours-block">
              <span className="spec-label">Signature Flavour Profile</span>
              <div className="flavour-pills">
                {p.flavours.map((flavour) => (
                  <span key={flavour} className="flavour-pill">
                    {flavour}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Craftsmanship Highlights */}
          {p.highlights && p.highlights.length > 0 && (
            <div className="highlights-block">
              <span className="spec-label">Craftsmanship &amp; Ingredients</span>
              <ul className="highlights-list">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <Check size={14} className="check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Enquiry & Consultation Action Box */}
          <div className="enquiry-card">
            <div className="enquiry-card-head">
              <span className="eyebrow">Personal Consultation</span>
              <h3>How to order this creation</h3>
              <p>
                Every bake is handcrafted fresh for your celebration date. Reach out
                directly to confirm date availability, custom flavours, and delivery or
                collection in Rawalpindi.
              </p>
            </div>
            <div className="enquiry-actions">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Instagram size={15} /> Enquire on Instagram ↗
              </a>
              <Link href="/contact" className="btn btn-outline">
                <MessageCircle size={15} /> Contact details ↗
              </Link>
            </div>
            <div className="lead-time-note">
              <Clock size={13} />
              <span>
                {p.leadTime || 'Pre-orders require at least 48 hours’ notice.'}
              </span>
            </div>
          </div>

          <div className="faqs-prompt">
            <span>Questions about delivery or customising?</span>{' '}
            <Link href="/faqs" className="text-link">
              Read our FAQs ↗
            </Link>
          </div>
        </div>
      </div>

      {/* You May Also Love (Related Creations) */}
      <section className="related-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">More from our kitchen</div>
            <h2>
              You may also <em>love.</em>
            </h2>
          </div>
          <Link href="/shop" className="back-link">
            <ArrowLeft size={14} /> Back to all creations
          </Link>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <style>{`
        .product-page {
          padding-top: 50px;
          padding-bottom: 95px;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--muted);
          margin-bottom: 30px;
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
        .product-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: start;
        }

        /* Left Column */
        .photo-column {
          position: sticky;
          top: 110px;
        }
        .photo-main {
          height: 580px;
          background-size: cover;
          background-position: center;
          position: relative;
          border: 1px solid var(--line);
        }
        .photo-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(251, 249, 242, 0.95);
          padding: 8px 12px;
          font-size: 8px;
          letter-spacing: .14em;
          color: var(--brown);
        }
        .quality-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 14px 12px;
          text-align: center;
        }
        .quality-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--brown);
        }
        .quality-item svg {
          color: var(--gold);
        }
        .quality-item span {
          font-size: 10px;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* Right Column */
        .info-column h1 {
          font-size: clamp(38px, 4vw, 50px);
          font-weight: 500;
          line-height: 1.15;
          margin: 12px 0 16px;
          color: var(--brown);
        }
        .price-tag {
          padding: 14px 18px;
          background: #fbf9f4;
          border-left: 2px solid var(--gold);
          border-top: 1px solid var(--line);
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          margin-bottom: 24px;
        }
        .price-tag span {
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--muted);
          display: block;
          margin-bottom: 4px;
        }
        .price-tag strong {
          font-size: 20px;
          font-family: var(--font-serif);
          color: var(--brown);
          display: block;
        }
        .price-tag small {
          font-size: 10px;
          color: #8c7c71;
          display: block;
          margin-top: 4px;
        }
        .description {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin-bottom: 24px;
        }
        .spec-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #fffdf9;
          border: 1px solid var(--line);
          margin-bottom: 20px;
        }
        .spec-icon {
          color: var(--gold);
          display: grid;
          place-items: center;
        }
        .spec-text {
          display: flex;
          flex-direction: column;
        }
        .spec-label {
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
          display: block;
        }
        .spec-value {
          font-size: 13px;
          color: var(--brown);
          font-weight: 500;
        }
        .flavours-block {
          margin-bottom: 24px;
        }
        .flavour-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .flavour-pill {
          font-size: 11px;
          padding: 6px 12px;
          background: #f7f1e7;
          border: 1px solid var(--line);
          color: var(--brown);
        }
        .highlights-block {
          margin-bottom: 28px;
        }
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 8px 0 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .highlights-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #68574e;
        }
        .check-icon {
          color: var(--gold);
          flex-shrink: 0;
        }

        /* Enquiry Action Box */
        .enquiry-card {
          background: #f2ece2;
          border: 1px solid var(--line);
          padding: 28px;
          margin-bottom: 24px;
        }
        .enquiry-card-head h3 {
          font: 22px var(--font-serif);
          margin: 6px 0 10px;
          color: var(--brown);
        }
        .enquiry-card-head p {
          font-size: 13px;
          line-height: 1.7;
          color: #796b61;
          margin: 0 0 20px;
        }
        .enquiry-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .enquiry-actions .btn {
          font-size: 10px;
          padding: 13px 18px;
        }
        .lead-time-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--muted);
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid #e1d6c8;
        }
        .lead-time-note svg {
          color: var(--gold);
        }
        .faqs-prompt {
          font-size: 12px;
          color: var(--muted);
        }
        .text-link {
          color: var(--brown);
          border-bottom: 1px solid var(--gold);
          padding-bottom: 2px;
        }

        /* Related Creations */
        .related-section {
          margin-top: 90px;
          padding-top: 60px;
          border-top: 1px solid var(--line);
        }
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 35px;
        }
        .section-head h2 {
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 500;
          line-height: 1.2;
          margin: 8px 0 0;
        }
        .section-head h2 em {
          color: var(--gold);
          font-style: italic;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--brown);
          border-bottom: 1px solid var(--gold);
          padding-bottom: 4px;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        /* Responsive */
        @media(max-width: 920px) {
          .product-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          .photo-column {
            position: static;
          }
          .photo-main {
            height: 420px;
          }
          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media(max-width: 600px) {
          .photo-main {
            height: 320px;
          }
          .product-page {
            padding-top: 30px;
          }
          .quality-strip {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .enquiry-actions {
            flex-direction: column;
            width: 100%;
          }
          .enquiry-actions .btn {
            width: 100%;
          }
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
