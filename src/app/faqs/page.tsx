import Link from 'next/link';

const faqs = [
  [
    'How do I place an order or enquiry?',
    'Browse our creations here, then message us on WhatsApp or Instagram with your event date, preferred flavour, and guest count. We consult with every customer directly to finalize design details and arrangements.',
  ],
  [
    'How far in advance should I place an enquiry?',
    'Please give us at least 48 hours’ notice for small-batch treats. Bespoke or multi-tiered celebration cakes require 3 to 5 days advance notice to ensure date availability and careful preparation.',
  ],
  [
    'Where do you deliver?',
    'We serve Rawalpindi and surrounding nearby neighbourhoods. Delivery availability and arrangements are confirmed personally during our consultation.',
  ],
  [
    'Can I request a custom cake design?',
    'Absolutely! Share your theme, reference photos, event date, and guest count with us via Instagram or WhatsApp, and we will tailor something lovely just for your occasion.',
  ],
  [
    'Are your treats baked fresh to order?',
    'Yes, every single bake is made to order in small batches using premium ingredients, never pre-frozen or mass-produced.',
  ],
];

export default function FAQs() {
  return (
    <main className="container faqs-page">
      <div className="eyebrow">The little details</div>
      <h1>
        Good to <em>know.</em>
      </h1>
      <p className="intro">
        Everything you need to know about our handcrafted treats and bespoke
        pre-order process in Rawalpindi.
      </p>

      <div className="faqs-list">
        {faqs.map(([q, a]) => (
          <section key={q} className="faq-item">
            <h2>{q}</h2>
            <p>{a}</p>
          </section>
        ))}
      </div>

      <div className="faq-cta">
        <p>Have another question or planning a bespoke celebration?</p>
        <Link href="/contact" className="btn">
          Get in touch with us ↗
        </Link>
      </div>

      <style>{`
        .faqs-page {
          padding: 80px 0 110px;
          max-width: 800px;
        }
        .faqs-page h1 {
          font: 48px 'Playfair Display', serif;
          margin: 12px 0 8px;
        }
        .faqs-page h1 em {
          color: #a77e4d;
          font-style: italic;
        }
        .intro {
          font-size: 14px;
          line-height: 1.8;
          color: #796b61;
          margin-bottom: 35px;
        }
        .faqs-list {
          border-top: 1px solid #e5dccf;
        }
        .faq-item {
          padding: 24px 0;
          border-bottom: 1px solid #e5dccf;
        }
        .faq-item h2 {
          font: 21px 'Playfair Display', serif;
          margin: 0 0 10px;
          color: #38251e;
        }
        .faq-item p {
          font-size: 13px;
          line-height: 1.8;
          color: #796b61;
          margin: 0;
        }
        .faq-cta {
          margin-top: 48px;
          padding: 30px;
          background: #fbf9f4;
          border: 1px solid #e9e1d5;
          text-align: center;
        }
        .faq-cta p {
          font-size: 14px;
          color: #55453c;
          margin-bottom: 16px;
        }
      `}</style>
    </main>
  );
}
