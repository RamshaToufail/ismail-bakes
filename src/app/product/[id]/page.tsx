import Link from 'next/link';
import { notFound } from 'next/navigation';
import { money, photo, products } from '@/lib/products';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = products.find((x) => x.id === id);
  if (!p) notFound();

  return (
    <main className="container product">
      <div
        className="photo"
        style={{ backgroundImage: `url(${photo(p.image, 1100)})` }}
      />
      <div className="info">
        <div className="eyebrow">{p.category} · Handcrafted to order</div>
        <h1>{p.name}</h1>
        <b className="price">{money(p.price)}</b>
        <p>
          {p.description} Lovingly prepared in our Rawalpindi kitchen using
          quality ingredients.
        </p>

        <div className="enquiry-box">
          <span className="eyebrow">How to order</span>
          <p className="enquiry-text">
            Each creation is custom-baked in small batches. Reach out via Instagram
            or Contact us to discuss your date, flavour preferences, and custom details.
          </p>
          <div className="enquiry-actions">
            <a
              href="https://www.instagram.com/ismail.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Enquire on Instagram ↗
            </a>
            <Link href="/contact" className="btn btn-outline">
              Contact details ↗
            </Link>
          </div>
        </div>

        <small className="note">
          Pre-orders require at least 48 hours’ notice. Orders are confirmed
          directly through personal consultation.
        </small>
        <Link href="/faqs" className="text">
          Questions about ordering? Read our FAQs ↗
        </Link>
      </div>
      <style>{`
        .product {
          display: grid;
          grid-template-columns: 1fr .8fr;
          gap: 70px;
          padding-top: 65px;
          padding-bottom: 95px;
        }
        .photo {
          background-size: cover;
          background-position: center;
          min-height: 580px;
        }
        .info {
          padding: 30px 0;
        }
        .info h1 {
          font: 48px 'Playfair Display', serif;
          margin: 18px 0;
        }
        .price {
          display: block;
          font-size: 14px;
          color: #796b61;
          margin-bottom: 12px;
        }
        .info > p {
          font-size: 13px;
          line-height: 1.8;
          color: #796b61;
          margin: 18px 0 24px;
        }
        .enquiry-box {
          background: #fbf9f4;
          border: 1px solid #e9e1d5;
          padding: 24px;
          margin: 24px 0;
        }
        .enquiry-text {
          font-size: 12px;
          line-height: 1.8;
          color: #68574e;
          margin: 10px 0 18px;
        }
        .enquiry-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .enquiry-actions .btn {
          font-size: 10px;
          padding: 12px 16px;
        }
        .note {
          display: block;
          font-size: 10px;
          color: #85766b;
          line-height: 1.7;
          margin-top: 14px;
        }
        .text {
          display: block;
          font-size: 11px;
          margin-top: 20px;
          border-bottom: 1px solid #b38a55;
          width: max-content;
          padding-bottom: 5px;
        }
        @media(max-width: 760px) {
          .product {
            grid-template-columns: 1fr;
            gap: 20px;
            padding-top: 20px;
          }
          .photo {
            min-height: 380px;
          }
          .info {
            padding: 18px 0;
          }
          .info h1 {
            font-size: 38px;
          }
        }
      `}</style>
    </main>
  );
}
