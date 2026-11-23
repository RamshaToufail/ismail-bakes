import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Camera, Instagram, Sparkles } from 'lucide-react';
import { GalleryLightbox } from '@/components/gallery-lightbox';
import { galleryItems } from '@/lib/gallery';

export const metadata: Metadata = {
  title: 'Artisanal Gallery | Ismail Bakes',
  description:
    'Browse our visual portfolio of bespoke celebration cakes, vintage Lambeth piping, cupcake bouquets, and dessert cups handcrafted in Rawalpindi.',
};

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="gallery-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">Artisanal Gallery</span>
        </nav>

        {/* Header Hero */}
        <header className="gallery-header">
          <div className="eyebrow">
            <Camera size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
            Visual Portfolio
          </div>
          <h1 className="display-title">Our Past Creations &amp; Celebration Showcase</h1>
          <p className="gallery-lead">
            Every celebration cake, artisan cupcake assortment, and layered dessert cup from
            Ismail Bakes is baked fresh in Rawalpindi. Click any creation to view high-resolution
            details, occasion inspiration, and direct consultation options.
          </p>
        </header>

        {/* Interactive Lightbox & Filter Gallery */}
        <GalleryLightbox items={galleryItems} />

        {/* Commission Callout Banner */}
        <section className="bespoke-callout">
          <div className="bespoke-callout-inner">
            <div className="bespoke-text">
              <span className="eyebrow">
                <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
                Have a unique vision?
              </span>
              <h2>Ready to Design Your Custom Centrepiece?</h2>
              <p>
                From vintage Lambeth heart cakes and delicate botanical tiers to custom
                themed birthday spreads, we work closely with you on flavours, sizes, and styling.
              </p>
            </div>
            <div className="bespoke-buttons">
              <Link href="/custom-cakes" className="btn">
                Bespoke Cake Guide ↗
              </Link>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Instagram size={15} /> DM on Instagram <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .gallery-page {
          padding: 40px 0 90px;
        }
        .gallery-breadcrumb {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gallery-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
        }
        .gallery-breadcrumb .sep {
          color: var(--gold);
        }
        .gallery-breadcrumb .current {
          color: var(--muted);
        }

        .gallery-header {
          max-width: 760px;
          margin-bottom: 40px;
        }
        .gallery-lead {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin-top: 14px;
        }

        .bespoke-callout {
          margin-top: 80px;
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 48px;
          position: relative;
        }
        .bespoke-callout::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(197, 160, 89, 0.25);
          pointer-events: none;
        }
        .bespoke-callout-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        .bespoke-text {
          max-width: 600px;
        }
        .bespoke-text h2 {
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 10px;
        }
        .bespoke-text p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }
        .bespoke-buttons {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        @media(max-width: 820px) {
          .bespoke-callout-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .bespoke-callout {
            padding: 32px 24px;
          }
          .bespoke-buttons {
            width: 100%;
          }
          .bespoke-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
