import Link from 'next/link';
import { ArrowRight, Cake, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-box">
        <span className="eyebrow">
          <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
          404 · Page Not Found
        </span>
        <h1 className="not-found-title">A crumb misplaced...</h1>
        <p className="not-found-lead">
          We couldn’t find the sweet creation or page you were looking for. It may have been
          enjoyed, renamed, or moved to another corner of our kitchen showcase.
        </p>

        <div className="not-found-actions">
          <Link href="/shop" className="btn">
            Browse our creations <ArrowRight size={14} />
          </Link>
          <Link href="/custom-cakes" className="btn btn-outline">
            Bespoke Cake Guide ↗
          </Link>
          <Link href="/" className="btn btn-outline">
            <Home size={14} /> Back to Home
          </Link>
        </div>
      </div>

      <style>{`
        .not-found-page {
          padding: 80px 0 120px;
          min-height: 60vh;
          display: grid;
          place-items: center;
        }
        .not-found-box {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 60px 48px;
          max-width: 680px;
          text-align: center;
          position: relative;
        }
        .not-found-box::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(197, 160, 89, 0.25);
          pointer-events: none;
        }
        .not-found-title {
          font-size: clamp(32px, 3.8vw, 48px);
          font-weight: 500;
          color: var(--brown);
          margin: 12px 0 16px;
        }
        .not-found-lead {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin: 0 auto 32px;
          max-width: 520px;
        }
        .not-found-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        @media(max-width: 600px) {
          .not-found-box {
            padding: 36px 20px;
          }
          .not-found-actions {
            flex-direction: column;
          }
          .not-found-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
