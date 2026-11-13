import { ArrowUpRight, CheckCircle2, Instagram, MapPin, Sparkles, Star } from 'lucide-react';
import { CustomerReview, verifiedReviews } from '@/lib/reviews';

export function ReviewsSection({
  title = 'Words From Sweet Celebrations',
  subtitle = 'Every bake is crafted to be savoured and remembered. Here is what our customers share from their special days.',
  reviews = verifiedReviews,
}: {
  title?: string;
  subtitle?: string;
  reviews?: CustomerReview[];
}) {
  return (
    <section className="reviews-block">
      <div className="reviews-header text-center">
        <span className="eyebrow">
          <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
          Customer Stories
        </span>
        <h2 className="reviews-title">{title}</h2>
        <p className="reviews-subtitle">{subtitle}</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <article key={r.id} className="review-card">
            <div className="stars" aria-label={`${r.rating} out of 5 stars`}>
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} size={15} fill="var(--gold)" color="var(--gold)" />
              ))}
            </div>
            <p className="review-quote">“{r.quote}”</p>
            <div className="review-meta">
              <div className="review-author">
                <strong>{r.author}</strong>
                <span className="review-occasion">{r.occasion}</span>
              </div>
              <div className="review-location">
                <MapPin size={12} />
                <span>{r.location}</span>
              </div>
            </div>
            {r.creation && (
              <div className="review-creation">
                <span>Ordered: </span>
                <em>{r.creation}</em>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="reviews-footer">
        <div className="trust-strip">
          <div className="trust-item">
            <CheckCircle2 size={15} />
            <span>100% Baked to Order</span>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={15} />
            <span>Pure Dairy Butter &amp; Farm Eggs</span>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={15} />
            <span>Rawalpindi Pickup &amp; Delivery</span>
          </div>
        </div>
        <div className="reviews-cta">
          <span>Celebrated with us recently?</span>
          <a
            href="https://www.instagram.com/ismail.bakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <Instagram size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            Share your celebration photos with @ismail.bakes <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: '-2px' }} />
          </a>
        </div>
      </div>

      <style>{`
        .reviews-block {
          margin: 60px 0;
        }
        .reviews-header {
          max-width: 680px;
          margin: 0 auto 36px;
        }
        .reviews-title {
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 10px;
        }
        .reviews-subtitle {
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .review-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 14px;
        }
        .review-quote {
          font-family: var(--font-serif);
          font-size: 15px;
          line-height: 1.7;
          color: var(--brown);
          margin: 0 0 20px;
          flex-grow: 1;
          font-style: italic;
        }
        .review-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid var(--line);
          padding-top: 14px;
          margin-top: auto;
        }
        .review-author strong {
          display: block;
          font-size: 13px;
          color: var(--brown);
        }
        .review-occasion {
          font-size: 11px;
          color: var(--gold);
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .review-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--muted);
        }
        .review-creation {
          margin-top: 10px;
          font-size: 11px;
          color: #8c7c72;
          background: #faf6ef;
          padding: 6px 10px;
          border-radius: 4px;
        }
        .review-creation em {
          color: var(--brown);
          font-style: normal;
          font-weight: 500;
        }

        .reviews-footer {
          margin-top: 36px;
          background: #fbf9f4;
          border: 1px solid var(--line);
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
        }
        .trust-strip {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--brown);
          font-weight: 500;
        }
        .trust-item svg {
          color: var(--gold);
        }
        .reviews-cta {
          font-size: 12px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        @media(max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
          .reviews-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
