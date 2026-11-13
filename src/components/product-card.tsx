import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { money, photo } from '@/lib/products';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  tag: string;
  image: string;
  description: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <Link
        href={`/product/${product.id}`}
        className="product-link"
        aria-label={`View ${product.name}`}
      >
        <div
          className="pic"
          style={{ backgroundImage: `url(${photo(product.image)})` }}
        >
          <span>{product.tag}</span>
          <i>
            <ArrowUpRight size={17} />
          </i>
        </div>
        <div className="detail">
          <div>
            <small>{product.category}</small>
            <h3>{product.name}</h3>
          </div>
          <strong>{money(product.price)}</strong>
        </div>
        <span className="view-details">
          View creation <span>↗</span>
        </span>
      </Link>
      <style>{`
        .card {
          display: flex;
          flex-direction: column;
        }
        .product-link {
          display: block;
        }
        .pic {
          height: 320px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .pic:after {
          content: '';
          position: absolute;
          inset: 0;
          background: #38251e0a;
          transition: .3s;
        }
        .card:hover .pic:after {
          background: #38251e20;
        }
        .pic > span {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #fbf9f2e8;
          padding: 8px 10px;
          font-size: 8px;
          letter-spacing: .13em;
          z-index: 1;
        }
        .pic i {
          position: absolute;
          right: 13px;
          bottom: 13px;
          background: #fbf9f2;
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          font-style: normal;
          z-index: 1;
          transition: transform .2s ease;
        }
        .card:hover .pic i {
          transform: translate(2px, -2px);
        }
        .detail {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 15px 1px 4px;
        }
        .detail small {
          font-size: 10px;
          color: #9b8a7e;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .detail h3 {
          font: 20px 'Playfair Display', serif;
          margin: 5px 0;
        }
        .detail strong {
          font-size: 11px;
          font-weight: 600;
          margin-top: 15px;
          white-space: nowrap;
          color: #796b61;
        }
        .view-details {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #a77e4d;
          border-bottom: 1px solid #e3d5c5;
          padding-bottom: 4px;
          margin-top: 4px;
          transition: .2s;
        }
        .view-details:hover {
          color: #38251e;
          border-color: #38251e;
        }
        @media(max-width: 640px) {
          .pic {
            height: 240px;
          }
          .detail h3 {
            font-size: 17px;
          }
          .detail {
            gap: 8px;
          }
        }
      `}</style>
    </article>
  );
}
