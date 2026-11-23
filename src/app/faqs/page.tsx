import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Cake,
  Clock,
  Heart,
  HelpCircle,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Ismail Bakes — Rawalpindi, Pakistan',
  description:
    'Answers to common questions about pre-ordering bespoke celebration cakes, lead times, delivery areas in Rawalpindi, ingredients, and cake care.',
};

type FaqItem = {
  q: string;
  a: string;
};

type FaqCategory = {
  category: string;
  icon: typeof Cake;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    category: 'Ordering & Consultations',
    icon: MessageCircle,
    items: [
      {
        q: 'How do I place an enquiry or pre-order?',
        a: 'Browse our creations here on our portfolio, then send us a direct message on Instagram (@ismail.bakes) with your desired event date, preferred cake size/portion count, and flavour preference. We personally review every inquiry and confirm availability promptly.',
      },
      {
        q: 'How far in advance must I place my pre-order?',
        a: 'We require at least 48 hours’ notice for small-batch treats such as cupcakes, cake pops, and dessert cups. For bespoke celebration cakes and multi-tiered designs, please enquire 3 to 5 days in advance (or 1 to 2 weeks for prime weekend milestone dates).',
      },
      {
        q: 'Can I make changes to my order after confirmation?',
        a: 'Because we bake everything fresh from scratch and procure fresh ingredients for each date, decorative or flavour adjustments must be finalized at least 48 hours prior to your scheduled celebration.',
      },
      {
        q: 'Why does Ismail Bakes require advance notice?',
        a: 'We operate as a small-batch artisan bakery. We never pre-bake or freeze sponge layers in advance. Every creation is measured, mixed, baked, chilled, and hand-piped specifically for your celebration table.',
      },
    ],
  },
  {
    category: 'Custom Cake Design & Sizing',
    icon: Cake,
    items: [
      {
        q: 'Can I request a custom cake design or send reference photos?',
        a: 'Yes, absolutely! We love bringing bespoke visions to life. You can send reference photos, colour swatches, invitation cards, or aesthetic themes (such as vintage Lambeth over-piping, hand-piped botanical roses, or minimalist textures) directly in your Instagram DM.',
      },
      {
        q: 'How do I choose the right cake size or portion weight?',
        a: 'As a general guideline: our 1.0–1.5 lb petite tier serves 6–8 guests; our signature 2.0–2.5 lb tier serves 10–14 guests; our 3.0–3.5 lb party tier serves 16–22 guests; and our stacked two-tier centrepieces (4.5–5.5 lbs) serve 25–35 guests.',
      },
      {
        q: 'Can you pipe a custom birthday message or name?',
        a: 'Yes! Hand-piped personalized messages in vintage script or clean modern lettering are included with your celebration cake. Custom cake toppers can also be coordinated upon request.',
      },
    ],
  },
  {
    category: 'Delivery, Pickups & Service Areas',
    icon: MapPin,
    items: [
      {
        q: 'Which neighbourhoods in Rawalpindi do you deliver to?',
        a: 'We offer careful local delivery across our owner-approved Rawalpindi service areas: Westridge, Range Road, Shalley Valley, Afzal Town, Afshan Colony, Babu Market, Chur Chowk, Misrial Road, and Qasim Market.',
      },
      {
        q: 'Can I collect my order in person?',
        a: 'Yes! Pre-scheduled pickup from our Rawalpindi home bakery is warmly welcomed. We provide convenient time slots to ensure your cake is freshly packaged and chilled for collection.',
      },
      {
        q: 'Do you deliver to Islamabad?',
        a: 'For orders heading to Islamabad or outside our standard Rawalpindi delivery zones, we recommend customer pickup or special courier consultation arranged in advance.',
      },
      {
        q: 'How should I transport my cake safely in a car?',
        a: 'Always keep the cake box completely flat on the floorboard of your vehicle (preferably the passenger-side floor) with the air conditioning running cold. Never place a celebration cake on an angled car seat or hold it in someone’s lap.',
      },
    ],
  },
  {
    category: 'Ingredients & Allergen Information',
    icon: ShieldCheck,
    items: [
      {
        q: 'What ingredients do you use in your bakes?',
        a: 'We use 100% pure creamery dairy butter, rich Dutch and Belgian cocoa, real Madagascar vanilla bean, fresh farm eggs, and wholesome flour. We strictly avoid industrial baking premixes, hydrogenated oils, or artificial shortening.',
      },
      {
        q: 'Are your cakes overly sweet?',
        a: 'No. A hallmark of Ismail Bakes is our balanced sweetness. Our silky whipped buttercreams and Belgian chocolate ganaches are formulated to complement the tender sponge rather than overwhelm your palate.',
      },
      {
        q: 'Do you cater to dietary restrictions or severe allergies?',
        a: 'Our kitchen actively handles dairy, wheat, eggs, and tree nuts. While we take meticulous care with cleanliness, we cannot guarantee a completely allergen-free environment for severe allergies. Please disclose any allergies during your consultation.',
      },
    ],
  },
  {
    category: 'Cake Care & Serving Recommendations',
    icon: Clock,
    items: [
      {
        q: 'How should I store my cake before the party?',
        a: 'Keep your cake refrigerated until 1 to 2 hours before serving. Because we use real dairy butter (which firms when cold and melts gently at room temperature), allowing the cake to come to cool room temperature ensures the sponge and buttercream are soft, fragrant, and luxurious.',
      },
      {
        q: 'How long do your cakes and treats stay fresh?',
        a: 'Our cakes, cupcakes, and dessert cups are best enjoyed within 2 to 3 days when stored covered in the refrigerator.',
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <div className="faqs-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="faqs-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">Frequently Asked Questions</span>
        </nav>

        {/* Hero Header */}
        <header className="faqs-header">
          <span className="eyebrow">
            <HelpCircle size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
            The Little Details &amp; Policies
          </span>
          <h1 className="display-title">
            Frequently Asked <em>Questions.</em>
          </h1>
          <p className="faqs-lead">
            Everything you need to know about our handcrafted treats, pre-order timelines,
            custom design consultations, delivery areas, and cake care in Rawalpindi.
          </p>
        </header>

        {/* Categorized FAQs */}
        <div className="faqs-categories">
          {faqCategories.map((group) => {
            const Icon = group.icon;
            return (
              <section key={group.category} className="category-block">
                <div className="category-header">
                  <Icon size={20} className="cat-icon" />
                  <h2>{group.category}</h2>
                </div>
                <div className="category-items">
                  {group.items.map((item) => (
                    <details key={item.q} className="faq-details">
                      <summary className="faq-summary">
                        <span>{item.q}</span>
                        <span className="faq-chevron" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <div className="faq-body">
                        <p>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Unanswered Question Bridge */}
        <section className="faqs-cta-card">
          <div className="cta-copy">
            <span className="eyebrow">Still Have a Question?</span>
            <h2>Planning something unique for your table?</h2>
            <p>
              We are always delighted to chat through ideas, custom sizes, or delivery
              timings with you directly.
            </p>
          </div>
          <div className="cta-actions">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Instagram size={15} /> Message on Instagram ↗
            </a>
            <Link href="/contact" className="btn btn-outline">
              <MessageCircle size={15} /> Contact details ↗
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        .faqs-page {
          padding: 40px 0 90px;
        }
        .faqs-breadcrumb {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .faqs-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
        }
        .faqs-breadcrumb .sep {
          color: var(--gold);
        }
        .faqs-breadcrumb .current {
          color: var(--muted);
        }

        .faqs-header {
          max-width: 740px;
          margin-bottom: 50px;
        }
        .faqs-lead {
          font-size: 15px;
          line-height: 1.8;
          color: #68574e;
          margin-top: 14px;
        }

        /* Categories */
        .faqs-categories {
          display: flex;
          flex-direction: column;
          gap: 48px;
          margin-bottom: 70px;
        }
        .category-block {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 36px 40px;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 16px;
        }
        .category-header .cat-icon {
          color: var(--gold);
        }
        .category-header h2 {
          font: 22px var(--font-serif);
          color: var(--brown);
          margin: 0;
        }

        .category-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-details {
          background: #fbf9f4;
          border: 1px solid var(--line);
          transition: background .2s ease;
        }
        .faq-details[open] {
          background: #faf6ef;
        }
        .faq-summary {
          padding: 18px 22px;
          font: 16px var(--font-serif);
          color: var(--brown);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
          list-style: none;
        }
        .faq-summary::-webkit-details-marker {
          display: none;
        }
        .faq-chevron {
          font-size: 20px;
          color: var(--gold);
          font-weight: 300;
          transition: transform .2s ease;
          line-height: 1;
        }
        .faq-details[open] .faq-chevron {
          transform: rotate(45deg);
        }
        .faq-body {
          padding: 0 22px 20px;
          font-size: 13px;
          line-height: 1.8;
          color: #68574e;
        }
        .faq-body p {
          margin: 0;
        }

        /* CTA Card */
        .faqs-cta-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          position: relative;
        }
        .faqs-cta-card::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(197, 160, 89, 0.25);
          pointer-events: none;
        }
        .cta-copy {
          max-width: 600px;
          position: relative;
          z-index: 1;
        }
        .cta-copy h2 {
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 500;
          color: var(--brown);
          margin: 8px 0 10px;
        }
        .cta-copy p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }
        .cta-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        @media(max-width: 850px) {
          .category-block {
            padding: 28px 20px;
          }
          .faqs-cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 24px;
          }
          .cta-actions {
            width: 100%;
          }
          .cta-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
