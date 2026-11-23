'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Instagram, Menu, MessageCircle, X } from 'lucide-react';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement">
        Handcrafted to order in Rawalpindi <span>·</span> Pre-orders require 48h notice
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container nav">
          <Link
            href="/"
            className="brand"
            aria-label="Ismail Bakes home"
            onClick={closeMenu}
          >
            <Image
              src="/ismail-bakes-logo.png"
              alt="Ismail Bakes — baked with love"
              width={72}
              height={72}
              priority
              className="brand-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/shop">Our Creations</Link>
            <Link href="/custom-cakes">Custom Cakes</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Header Action & Mobile Toggle */}
          <div className="nav-actions">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
              aria-label="Ismail Bakes on Instagram"
            >
              <Instagram size={18} />
            </a>
            <Link className="nav-enquire" href="/contact">
              ENQUIRE <span>↗</span>
            </Link>
            <button
              className="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Over Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="drawer-header">
          <Link href="/" className="drawer-brand" onClick={closeMenu}>
            <Image
              src="/ismail-bakes-logo.png"
              alt="Ismail Bakes"
              width={54}
              height={54}
              className="brand-logo"
            />
            <div className="drawer-brand-text">
              <span className="drawer-title">Ismail Bakes</span>
              <span className="drawer-subtitle">Rawalpindi, Pakistan</span>
            </div>
          </Link>
          <button
            className="drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
            type="button"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Mobile menu links">
          <Link href="/" onClick={closeMenu}>
            <span>Home</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/shop" onClick={closeMenu}>
            <span>Our Creations</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/custom-cakes" onClick={closeMenu}>
            <span>Custom Cakes</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/gallery" onClick={closeMenu}>
            <span>Artisanal Gallery</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/about" onClick={closeMenu}>
            <span>Our Story</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/faqs" onClick={closeMenu}>
            <span>Frequently Asked Questions</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            <span>Contact &amp; Enquiries</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        <div className="drawer-footer">
          <div className="drawer-card">
            <span className="eyebrow">Direct Consultation</span>
            <p>Ready to plan your celebration? Connect with us directly.</p>
            <div className="drawer-actions">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn drawer-btn"
                onClick={closeMenu}
              >
                <Instagram size={15} /> Message on Instagram
              </a>
              <Link
                href="/contact"
                className="btn btn-outline drawer-btn"
                onClick={closeMenu}
              >
                <MessageCircle size={15} /> Contact details
              </Link>
            </div>
          </div>
          <p className="drawer-notice">
            Pre-orders require at least 48 hours’ notice. Handcrafted in Rawalpindi.
          </p>
        </div>
      </div>

      <style>{`
        .announcement {
          background: var(--brown);
          color: #f9f4eb;
          text-align: center;
          font-size: 10px;
          letter-spacing: .12em;
          padding: 9px 12px;
        }
        .announcement span {
          color: var(--gold);
          padding: 0 8px;
        }
        .header {
          background: #fbf9f4;
          border-bottom: 1px solid var(--line);
          position: sticky;
          top: 0;
          z-index: 40;
        }
        .nav {
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: flex;
          align-items: center;
        }
        .brand-logo {
          width: 72px;
          height: 72px;
          object-fit: contain;
          border-radius: 50%;
        }
        .desktop-nav {
          display: flex;
          gap: 32px;
          font-size: 12px;
          color: #55453c;
          letter-spacing: .02em;
        }
        .desktop-nav a {
          transition: color .2s ease;
          padding: 6px 0;
        }
        .desktop-nav a:hover {
          color: var(--gold);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .nav-social {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brown);
          transition: color .2s ease;
        }
        .nav-social:hover {
          color: var(--gold);
        }
        .nav-enquire {
          font-size: 10px;
          letter-spacing: .14em;
          text-transform: uppercase;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 5px;
          color: var(--brown);
          transition: opacity .2s ease;
        }
        .nav-enquire:hover {
          opacity: .8;
        }
        .nav-enquire span {
          color: var(--gold);
          margin-left: 6px;
        }
        .mobile-menu {
          display: none;
          background: none;
          border: 0;
          color: var(--brown);
          padding: 8px;
          margin-right: -8px;
          cursor: pointer;
        }

        /* Mobile Drawer & Backdrop */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(30, 20, 15, 0.45);
          backdrop-filter: blur(4px);
          z-index: 50;
          animation: fadeIn .25s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(380px, 88vw);
          background: var(--cream);
          border-left: 1px solid var(--line);
          z-index: 51;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform .3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--line);
          background: #fffdf9;
        }
        .drawer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .drawer-brand .brand-logo {
          width: 50px;
          height: 50px;
        }
        .drawer-brand-text {
          display: flex;
          flex-direction: column;
        }
        .drawer-title {
          font-family: var(--font-serif);
          font-size: 18px;
          color: var(--brown);
        }
        .drawer-subtitle {
          font-size: 10px;
          letter-spacing: .08em;
          color: var(--muted);
          text-transform: uppercase;
        }
        .drawer-close {
          background: transparent;
          border: 0;
          color: var(--brown);
          padding: 8px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background .2s ease;
        }
        .drawer-close:hover {
          background: #f0e9df;
        }

        .drawer-nav {
          display: flex;
          flex-direction: column;
          padding: 16px 20px;
        }
        .drawer-nav a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 8px;
          font-family: var(--font-serif);
          font-size: 19px;
          color: var(--brown);
          border-bottom: 1px solid #f0e8de;
          transition: color .2s ease;
        }
        .drawer-nav a:last-child {
          border-bottom: none;
        }
        .drawer-nav a svg {
          color: var(--gold);
          opacity: .6;
          transition: transform .2s ease, opacity .2s ease;
        }
        .drawer-nav a:hover {
          color: var(--gold);
        }
        .drawer-nav a:hover svg {
          transform: translate(2px, -2px);
          opacity: 1;
        }

        .drawer-footer {
          margin-top: auto;
          padding: 20px 24px 28px;
          background: #f7f1e7;
          border-top: 1px solid var(--line);
        }
        .drawer-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 18px;
          margin-bottom: 14px;
        }
        .drawer-card p {
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
          margin: 8px 0 14px;
        }
        .drawer-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .drawer-btn {
          width: 100%;
          font-size: 10px;
          padding: 11px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .drawer-notice {
          font-size: 10px;
          color: var(--muted);
          text-align: center;
          line-height: 1.5;
          margin: 0;
        }

        @media(max-width: 820px) {
          .nav {
            height: 74px;
          }
          .brand-logo {
            width: 60px;
            height: 60px;
          }
          .desktop-nav {
            display: none;
          }
          .nav-social {
            display: none;
          }
          .nav-enquire {
            display: none;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand" aria-label="Ismail Bakes home">
            <Image
              src="/ismail-bakes-logo.png"
              alt="Ismail Bakes — baked with love"
              width={80}
              height={80}
              className="brand-logo"
            />
          </Link>
          <p className="footer-tagline">
            Small-batch sweetness, made by hand
            <br />
            for the moments worth celebrating.
          </p>
        </div>
        <div>
          <h4>EXPLORE</h4>
          <Link href="/shop">Our Creations</Link>
          <Link href="/custom-cakes">Custom Cakes</Link>
          <Link href="/gallery">Artisanal Gallery</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/faqs">FAQs</Link>
        </div>
        <div>
          <h4>GET IN TOUCH</h4>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Instagram size={14} /> Instagram ↗
          </a>
          <Link href="/contact">Contact us</Link>
          <p className="footer-city">Rawalpindi, Pakistan</p>
        </div>
        <div className="footer-note">
          <span className="eyebrow">A little note</span>
          <p>Every good thing takes time. Please order at least 48 hours ahead.</p>
          <Link href="/shop" className="btn">
            Explore our creations ↗
          </Link>
        </div>
      </div>
      <div className="container legal">
        <span>© 2026 Ismail Bakes. Baked with love in Rawalpindi.</span>
        <span>
          <Link href="/privacy">Privacy</Link>　<Link href="/terms">Notice &amp; Terms</Link>
        </span>
      </div>
      <style>{`
        .footer {
          background: var(--brown);
          color: #f8f3e9;
          padding: 66px 0 20px;
        }
        .footer .brand-logo {
          width: 84px;
          height: 84px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr .8fr .8fr 1.3fr;
          gap: 42px;
        }
        .footer p {
          font-size: 12px;
          line-height: 1.8;
          color: #c4b7a7;
        }
        .footer-tagline {
          margin-top: 14px;
        }
        .footer h4 {
          font-size: 10px;
          letter-spacing: .16em;
          margin: 8px 0 20px;
          color: var(--gold);
        }
        .footer-grid > div:not(:first-child) > a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          margin: 0 0 14px;
          color: #eee4d5;
          transition: color .2s ease;
        }
        .footer-grid > div:not(:first-child) > a:hover {
          color: var(--gold);
        }
        .footer-social-link {
          color: var(--gold) !important;
        }
        .footer-city {
          font-size: 12px;
          color: #a39587;
          margin-top: 4px;
        }
        .footer-note {
          border-left: 1px solid #5a4538;
          padding-left: 28px;
        }
        .footer-note p {
          font: 20px/1.5 var(--font-serif);
          color: #f8f3e9;
        }
        .footer-note .btn {
          margin-top: 10px;
          background: transparent;
          border-color: #786352;
          font-size: 9px;
          padding: 12px 14px;
        }
        .footer-note .btn:hover {
          background: #fffdf9;
          color: var(--brown);
          border-color: #fffdf9;
        }
        .legal {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #4a362b;
          margin-top: 54px;
          padding-top: 17px;
          font-size: 10px;
          color: #b9aa9a;
        }
        .legal a {
          color: #e5d8c7;
          transition: color .2s ease;
        }
        .legal a:hover {
          color: var(--gold);
        }
        @media(max-width: 760px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          .footer-note {
            grid-column: 1/-1;
            border-left: none;
            padding-left: 0;
            border-top: 1px solid #4a362b;
            padding-top: 24px;
          }
          .legal {
            gap: 12px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </footer>
  );
}
