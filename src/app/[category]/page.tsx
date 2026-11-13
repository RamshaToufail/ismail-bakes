import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Instagram, MessageCircle } from 'lucide-react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

type CategoryMeta = {
  dbCategory: string;
  title: string;
  tagline: string;
  description: string;
  consultationTip: string;
};

const categoryMap: Record<string, CategoryMeta> = {
  cakes: {
    dbCategory: 'Custom cakes',
    title: 'Celebration Cakes',
    tagline: 'Handcrafted floral piping & bespoke celebration tiers',
    description:
      'From delicate vintage Lambeth piping to hand-crafted buttercream florals, every cake is baked fresh to order in our Rawalpindi kitchen.',
    consultationTip:
      'We customize sponge flavours, fillings, colour palettes, and hand-piped inscription plaques for your celebration date.',
  },
  cupcakes: {
    dbCategory: 'Cupcakes',
    title: 'Gourmet Cupcakes',
    tagline: 'Soft, tender crumb crowned with whipped buttercream',
    description:
      'Available in artisanal gift boxes of 6 and 12, our cupcakes are perfect for tea parties, birthdays, and celebration dessert spreads.',
    consultationTip:
      'Mix and match flavours or request custom color themes to match your party aesthetic.',
  },
  'cake-pops': {
    dbCategory: 'Cake pops',
    title: 'Midnight Cake Pops',
    tagline: 'Decadent chocolate cake truffles on sticks',
    description:
      'Handcrafted cake truffles dipped in delicate chocolate shells with artisanal drizzles and toppings. Fun, elegant, and party-ready.',
    consultationTip:
      'Custom bulk boxes and individual packaging are available for event hampers and party dessert tables.',
  },
  sundaes: {
    dbCategory: 'Sundaes',
    title: 'Dessert Sundaes',
    tagline: 'Layered crumbles, berries & velvety fresh cream',
    description:
      'Gourmet chilled dessert cups featuring golden shortbread crumbs, seasonal fruit compotes, and silky fresh cream mousse.',
    consultationTip:
      'Individual cups ready to serve chilled. Multi-cup party assortments available upon advance request.',
  },
};

const allCategories = [
  { slug: '/shop', label: 'All treats' },
  { slug: '/cakes', label: 'Cakes' },
  { slug: '/cupcakes', label: 'Cupcakes' },
  { slug: '/cake-pops', label: 'Cake pops' },
  { slug: '/sundaes', label: 'Sundaes' },
];

export function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categoryMap[category];
  if (!meta) notFound();

  const list = products.filter(
    (p) => p.category.toLowerCase() === meta.dbCategory.toLowerCase()
  );

  return (
    <main className="container category-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/shop">Our Creations</Link>
        <span>/</span>
        <span aria-current="page">{meta.title}</span>
      </nav>

      {/* Category Header */}
      <div className="category-header">
        <div className="eyebrow">Small-Batch Collection · Rawalpindi</div>
        <h1>
          {meta.title}
        </h1>
        <p className="category-tagline">{meta.tagline}</p>
        <p className="category-desc">{meta.description}</p>

        {/* Filter Navigation */}
        <div className="filters-bar" role="navigation" aria-label="Category switch">
          {allCategories.map((item) => (
            <Link
              key={item.label}
              href={item.slug}
              className={`filter-pill ${item.slug === `/${category}` ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Consultation Box */}
      <section className="category-consultation">
        <div className="consultation-copy">
          <span className="eyebrow">Bespoke Enquiries</span>
          <h2>
            Interested in a custom <em>{meta.title.toLowerCase()}</em> order?
          </h2>
          <p>{meta.consultationTip}</p>
          <div className="consultation-actions">
            <a
              href="https://www.instagram.com/ismail.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Instagram size={15} /> Message on Instagram ↗
            </a>
            {category === 'cakes' && (
              <Link href="/custom-cakes" className="btn btn-outline">
                Bespoke Cake Guide ↗
              </Link>
            )}
            <Link href="/contact" className="btn btn-outline">
              <MessageCircle size={15} /> Contact us ↗
            </Link>
          </div>
        </div>
        <div className="consultation-back">
          <Link href="/shop" className="back-link">
            <ArrowLeft size={14} /> Back to all creations
          </Link>
        </div>
      </section>

      <style>{`
        .category-page {
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
        .category-header h1 {
          font-size: clamp(38px, 4.2vw, 52px);
          font-weight: 500;
          line-height: 1.2;
          margin: 10px 0 6px;
        }
        .category-tagline {
          font-size: 16px;
          color: var(--gold);
          font-style: italic;
          margin: 0 0 14px;
          font-family: var(--font-serif);
        }
        .category-desc {
          color: #796b61;
          font-size: 14px;
          line-height: 1.8;
          max-width: 660px;
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
        .category-consultation {
          margin-top: 70px;
          padding: 42px;
          background: #f2ece2;
          border: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }
        .consultation-copy h2 {
          font-size: clamp(26px, 3vw, 34px);
          font-weight: 500;
          line-height: 1.25;
          margin: 10px 0 12px;
        }
        .consultation-copy h2 em {
          color: var(--gold);
          font-style: italic;
        }
        .consultation-copy p {
          font-size: 13px;
          line-height: 1.8;
          color: #796b61;
          margin: 0 0 22px;
          max-width: 580px;
        }
        .consultation-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
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
          white-space: nowrap;
        }
        @media(max-width: 860px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .category-consultation {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 24px;
          }
        }
        @media(max-width: 580px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .category-page {
            padding-top: 35px;
          }
          .consultation-actions {
            flex-direction: column;
            width: 100%;
          }
          .consultation-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
