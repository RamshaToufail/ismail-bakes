'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Instagram,
  Maximize2,
  MessageCircle,
  Users,
  X,
} from 'lucide-react';
import { GalleryItem, galleryPhoto } from '@/lib/gallery';

const categoryFilters = [
  { id: 'all', label: 'All creations' },
  { id: 'cakes', label: 'Celebration Cakes' },
  { id: 'cupcakes', label: 'Gourmet Cupcakes' },
  { id: 'cake-pops', label: 'Cake Pops' },
  { id: 'desserts', label: 'Dessert Cups' },
] as const;

type FilterId = (typeof categoryFilters)[number]['id'];

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? items
      : items.filter((item) => item.category === activeFilter);

  const activeItem =
    selectedIndex !== null ? filteredItems[selectedIndex] ?? null : null;

  // Body scroll lock
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((curr) =>
          curr !== null ? (curr + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((curr) =>
          curr !== null
            ? (curr - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <>
      {/* Category Filter Pills */}
      <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
        {categoryFilters.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === tab.id}
            className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(tab.id);
              setSelectedIndex(null);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item, idx) => (
          <article
            key={item.id}
            className="gallery-card"
            onClick={() => setSelectedIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedIndex(idx);
              }
            }}
            aria-label={`View ${item.title}`}
          >
            <div
              className="gallery-thumb"
              style={{ backgroundImage: `url(${galleryPhoto(item.image, 700)})` }}
            >
              <span className="card-badge">{item.categoryLabel}</span>
              <div className="card-overlay">
                <Maximize2 size={24} />
                <span>Click to view details</span>
              </div>
            </div>
            <div className="card-caption">
              <span className="card-occasion">{item.occasion}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="view-link">View in lightbox ↗</span>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Lightbox */}
      {activeItem && selectedIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${activeItem.title}`}
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close preview"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={22} />
            </button>

            {/* Navigation Arrows */}
            {filteredItems.length > 1 && (
              <>
                <button
                  className="nav-arrow nav-prev"
                  type="button"
                  aria-label="Previous image"
                  onClick={goPrev}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="nav-arrow nav-next"
                  type="button"
                  aria-label="Next image"
                  onClick={goNext}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Dialog Content Grid */}
            <div className="dialog-grid">
              <div
                className="dialog-photo"
                style={{
                  backgroundImage: `url(${galleryPhoto(activeItem.image, 1200)})`,
                }}
              />
              <div className="dialog-info">
                <div className="dialog-counter">
                  {selectedIndex + 1} of {filteredItems.length}
                </div>
                <div className="eyebrow">{activeItem.categoryLabel}</div>
                <h2>{activeItem.title}</h2>
                <span className="dialog-occasion">{activeItem.occasion}</span>
                <p className="dialog-desc">{activeItem.description}</p>

                {activeItem.servings && (
                  <div className="dialog-meta-item">
                    <Users size={16} />
                    <span>{activeItem.servings}</span>
                  </div>
                )}

                {activeItem.leadTime && (
                  <div className="dialog-meta-item">
                    <Clock size={16} />
                    <span>{activeItem.leadTime}</span>
                  </div>
                )}

                <div className="dialog-consultation">
                  <h4>Enquire about this creation</h4>
                  <p>
                    Each bake is handcrafted fresh to order in Rawalpindi. Connect with
                    us directly to discuss your date and custom requirements.
                  </p>
                  <div className="dialog-actions">
                    <a
                      href="/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      <Instagram size={15} /> Message on Instagram ↗
                    </a>
                    <Link
                      href="/contact"
                      className="btn btn-outline"
                      onClick={() => setSelectedIndex(null)}
                    >
                      <MessageCircle size={15} /> Contact details ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-filters {
          display: flex;
          gap: 10px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 16px;
          margin-bottom: 35px;
          overflow-x: auto;
        }
        .filter-btn {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 20px;
          background: #fffdf9;
          border: 1px solid var(--line);
          color: var(--muted);
          white-space: nowrap;
          cursor: pointer;
          transition: all .2s ease;
        }
        .filter-btn:hover {
          color: var(--brown);
          border-color: #d8cbbc;
        }
        .filter-btn.active {
          background: var(--brown);
          color: #fff;
          border-color: var(--brown);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .gallery-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(57, 39, 31, 0.08);
        }
        .gallery-thumb {
          height: 240px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(251, 249, 242, 0.95);
          padding: 6px 10px;
          font-size: 8px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--brown);
          z-index: 1;
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(57, 39, 31, 0.72);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          transition: opacity .25s ease;
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .gallery-card:hover .card-overlay {
          opacity: 1;
        }
        .card-caption {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-occasion {
          font-size: 10px;
          color: var(--gold);
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .card-caption h3 {
          font: 18px var(--font-serif);
          color: var(--brown);
          margin: 0 0 8px;
          line-height: 1.3;
        }
        .card-caption p {
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0 0 14px;
          flex-grow: 1;
        }
        .view-link {
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--brown);
          border-bottom: 1px solid var(--gold);
          padding-bottom: 3px;
          width: max-content;
        }

        /* Lightbox Modal */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(30, 20, 15, 0.82);
          backdrop-filter: blur(6px);
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 24px;
          animation: lbFadeIn .25s ease forwards;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-dialog {
          background: var(--cream);
          border: 1px solid var(--line);
          width: min(980px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          animation: lbScaleUp .25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes lbScaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .lightbox-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #fffdf9;
          border: 1px solid var(--line);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          color: var(--brown);
          z-index: 10;
          transition: background .2s ease;
        }
        .lightbox-close:hover {
          background: #f2e9dc;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #fffdf9;
          border: 1px solid var(--line);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          color: var(--brown);
          z-index: 10;
          transition: background .2s ease;
        }
        .nav-arrow:hover {
          background: #f2e9dc;
        }
        .nav-prev {
          left: 14px;
        }
        .nav-next {
          right: 14px;
        }

        .dialog-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          min-height: 520px;
        }
        .dialog-photo {
          background-size: cover;
          background-position: center;
          min-height: 420px;
        }
        .dialog-info {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
        }
        .dialog-counter {
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 8px;
        }
        .dialog-info h2 {
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 500;
          line-height: 1.25;
          margin: 8px 0 6px;
          color: var(--brown);
        }
        .dialog-occasion {
          font-size: 12px;
          color: var(--gold);
          font-style: italic;
          margin-bottom: 14px;
          display: block;
        }
        .dialog-desc {
          font-size: 14px;
          line-height: 1.8;
          color: #68574e;
          margin: 0 0 20px;
        }
        .dialog-meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: var(--brown);
          margin-bottom: 10px;
        }
        .dialog-meta-item svg {
          color: var(--gold);
        }
        .dialog-consultation {
          margin-top: auto;
          padding: 22px;
          background: #fffdf9;
          border: 1px solid var(--line);
        }
        .dialog-consultation h4 {
          font: 17px var(--font-serif);
          margin: 0 0 6px;
          color: var(--brown);
        }
        .dialog-consultation p {
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0 0 16px;
        }
        .dialog-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .dialog-actions .btn {
          font-size: 9px;
          padding: 11px 14px;
        }

        @media(max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dialog-grid {
            grid-template-columns: 1fr;
          }
          .dialog-photo {
            min-height: 320px;
          }
          .nav-arrow {
            display: none;
          }
        }
        @media(max-width: 580px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .dialog-info {
            padding: 24px 20px;
          }
          .dialog-actions {
            flex-direction: column;
            width: 100%;
          }
          .dialog-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
