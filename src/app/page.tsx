import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Instagram,
  Leaf,
  MessageCircle,
  Sparkles,
  Star,
} from 'lucide-react';
import { money, photo, products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

const categories = [
  {
    title: 'Celebration Cakes',
    slug: '/cakes',
    tag: 'CUSTOM BESPOKE',
    image: 'photo-1578985545062-69928b1d9587',
    description: 'Vintage piping, layered sponge, and hand-crafted buttercream florals.',
  },
  {
    title: 'Gourmet Cupcakes',
    slug: '/cupcakes',
    tag: 'BOXES OF 6 & 12',
    image: 'photo-1486427944299-d1955d23e34d',
    description: 'Soft vanilla and rich chocolate crowned with whipped buttercream.',
  },
  {
    title: 'Midnight Cake Pops',
    slug: '/cake-pops',
    tag: 'PARTY READY',
    image: 'photo-1576618148400-f54bed99fcfd',
    description: 'Decadent chocolate cake truffles dipped in delicate shells.',
  },
  {
    title: 'Dessert Sundaes',
    slug: '/sundaes',
    tag: 'LAYERED CUPS',
    image: 'photo-1563805042-7684c019e1cb',
    description: 'Buttery crumbles, seasonal berries, and velvety fresh cream.',
  },
];

const customSteps = [
  {
    num: '01',
    title: 'The Consultation',
    desc: 'Share your event date, celebration theme, guest count, and any design inspiration.',
  },
  {
    num: '02',
    title: 'Flavour & Sponge',
    desc: 'Choose from vanilla bean, Belgian chocolate fudge, red velvet, and seasonal gourmet fillings.',
  },
  {
    num: '03',
    title: 'Artisanal Piping',
    desc: 'Every rose, scallop, and delicate detail is piped by hand with unhurried care.',
  },
  {
    num: '04',
    title: 'Fresh Celebration',
    desc: 'Prepared fresh for your special date in Rawalpindi with careful delivery or collection.',
  },
];

const testimonials = [
  {
    quote:
      'The Rose Garden cake was the absolute highlight of my sister’s birthday dinner. It was just as delicious as it was stunning—rich, moist, and not overly sweet!',
    author: 'Ayesha K.',
    location: 'Westridge, Rawalpindi',
    occasion: 'Birthday Celebration',
  },
  {
    quote:
      'The strawberry cupcakes were so soft and the whipped buttercream was perfection. Discussing our requirements through Instagram was super warm and seamless.',
    author: 'Bilal M.',
    location: 'Range Road, Rawalpindi',
    occasion: 'Family Gathering',
  },
  {
    quote:
      'Hands down the best cake pops in Rawalpindi. The kids adored them at the party, and the aesthetic packaging made everything feel so thoughtfully done.',
    author: 'Zainab S.',
    location: 'Afshan Colony, Rawalpindi',
    occasion: 'Party Dessert',
  },
];

const previewFaqs = [
  {
    q: 'How far in advance should I enquire?',
    a: 'Please give us at least 48 hours’ notice for small-batch treats, and 3 to 5 days for bespoke multi-tiered celebration cakes.',
  },
  {
    q: 'Where do you deliver in Rawalpindi?',
    a: 'We deliver to selected neighbourhoods across Rawalpindi including Westridge, Range Road, Shalley Valley, Afzal Town, and nearby areas.',
  },
  {
    q: 'Can I request a custom cake design?',
    a: 'Yes! Send us your ideas, color palette, or reference photos on Instagram or WhatsApp, and we will tailor something lovely for your table.',
  },
];

const galleryShots = [
  { id: 'photo-1578985545062-69928b1d9587', title: 'Piped Rose Buttercream' },
  { id: 'photo-1486427944299-d1955d23e34d', title: 'Strawberry Cloud Swirls' },
  { id: 'photo-1576618148400-f54bed99fcfd', title: 'Chocolate Truffle Pops' },
  { id: 'photo-1563805042-7684c019e1cb', title: 'Berry & Cream Layered Cup' },
];

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-copy">
          <div className="since">✳ &nbsp; BAKED IN RAWALPINDI, WITH LOVE</div>
          <div className="eyebrow">A little sweetness, made just for you</div>
          <h1>
            For the moments
            <br />
            that <em>mean everything.</em>
          </h1>
          <p>
            Handcrafted cakes and small-batch desserts, lovingly made to order with
            wholesome ingredients and a whole lot of heart.
          </p>
          <div className="hero-links">
            <Link className="btn" href="/shop">
              Explore our creations <ArrowRight size={15} />
            </Link>
            <Link className="btn btn-outline" href="/contact">
              Enquire with us <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="hero-notice">
            <span>
              <b>48 hrs notice</b> Pre-orders only for your sweetest plans
            </span>
          </div>
        </div>
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${photo('photo-1578985545062-69928b1d9587', 1400)})`,
          }}
        >
          <div className="image-caption">
            <span>01 / MADE TO CELEBRATE</span>
            <b>Every slice tells a story.</b>
          </div>
        </div>
      </section>

      {/* 2. Intro Narrative Section */}
      <section className="intro-section container section">
        <div className="intro-content">
          <div className="eyebrow">Small batches · Big feelings</div>
          <h2>
            Baked by hand for the tables where <em>memories are made.</em>
          </h2>
          <p>
            Ismail Bakes was created around a simple, unhurried belief: celebrations
            feel most special when the dessert is crafted uniquely for them. We bake in
            small batches right here in Rawalpindi, combining tender crumb, gourmet
            fillings, and hand-piped artistry that tastes as joyful as it looks.
          </p>
          <div className="intro-tags">
            <span>Freshly Baked to Order</span>
            <span>·</span>
            <span>Rawalpindi Delivery &amp; Pickup</span>
            <span>·</span>
            <span>Bespoke Design Care</span>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories Grid */}
      <section className="categories-section container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Our specialty collections</div>
            <h2>
              Discover our <em>sweet repertoire.</em>
            </h2>
          </div>
          <Link className="text-link" href="/shop">
            EXPLORE THE FULL SHOWCASE <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.slug} className="category-card">
              <div
                className="category-pic"
                style={{ backgroundImage: `url(${photo(cat.image, 600)})` }}
              >
                <span className="category-tag">{cat.tag}</span>
                <span className="category-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="category-info">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <span className="category-link">View collection ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Best-Loved Signature Creations */}
      <section className="container section signature-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Signature bakes</div>
            <h2>
              Find your <em>happy place.</em>
            </h2>
          </div>
          <Link className="text-link" href="/shop">
            BROWSE ALL CREATIONS <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="products">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 5. Custom & Bespoke Cake Journey */}
      <section className="bespoke-section">
        <div className="container">
          <div className="bespoke-head">
            <div className="eyebrow">Bespoke celebration cakes</div>
            <h2>
              Crafted especially for you, <em>down to the last petal.</em>
            </h2>
            <p>
              Whether it’s a vintage Lambeth birthday cake, a romantic anniversary tier,
              or a celebratory dessert centerpiece, we make the custom design process
              effortless and deeply personal.
            </p>
          </div>

          <div className="bespoke-steps">
            {customSteps.map((step) => (
              <div key={step.num} className="step-card">
                <span className="step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bespoke-actions">
            <a
              href="https://www.instagram.com/ismail.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Instagram size={15} /> Discuss a custom cake on Instagram ↗
            </a>
            <Link href="/custom-cakes" className="btn btn-outline">
              Bespoke Cake Ordering Guide ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Ismail Bakes (Pillars) */}
      <section className="container promise-section section">
        <div className="promise-grid">
          <div className="promise-card">
            <div className="promise-icon">
              <Heart size={24} />
            </div>
            <h3>Small-batch freshness</h3>
            <p>
              Every treat is baked fresh to order in Rawalpindi. We never pre-freeze,
              mass-produce, or rush our kitchen process.
            </p>
          </div>
          <div className="promise-card">
            <div className="promise-icon">
              <Leaf size={24} />
            </div>
            <h3>The good stuff</h3>
            <p>
              Pure vanilla bean, rich Belgian cocoa, real creamery butter, and
              thoughtful ingredients in every single bite.
            </p>
          </div>
          <div className="promise-card">
            <div className="promise-icon">
              <Sparkles size={24} />
            </div>
            <h3>Made for your date</h3>
            <p>
              From custom floral piping to bespoke cake messages, every celebration
              gets our unhurried personal attention.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Story Philosophy Banner */}
      <section className="story">
        <div
          className="story-pic"
          style={{
            backgroundImage: `url(${photo('photo-1559620192-032c4bc4674e', 1000)})`,
          }}
        >
          <div className="stamp">
            BAKED
            <br />
            WITH
            <br />
            LOVE
          </div>
        </div>
        <div className="story-copy">
          <div className="eyebrow">A homegrown kind of magic</div>
          <h2>
            Small batches.
            <br />
            <em>Big feelings.</em>
          </h2>
          <p>
            Ismail Bakes started with a simple belief: the best celebrations deserve
            something made especially for them. Every bake is thoughtful, unhurried, and
            a little bit personal. We’d love to be part of your table.
          </p>
          <Link href="/about" className="text-link">
            READ OUR COMPLETE STORY <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* 8. Curated Instagram Showcase Gallery */}
      <section className="instagram-section container section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Follow our bakery journey</div>
            <h2>
              From our kitchen to <em>your table.</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/ismail.bakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            FOLLOW @ISMAIL.BAKES <ArrowUpRight size={15} />
          </a>
        </div>
        <p className="instagram-sub">
          Glimpses of fresh bakes, custom buttercream piping, and celebration moments
          from our Rawalpindi home bakery.
        </p>

        <div className="instagram-grid">
          {galleryShots.map((shot) => (
            <a
              key={shot.id}
              href="https://www.instagram.com/ismail.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item"
            >
              <div
                className="instagram-photo"
                style={{ backgroundImage: `url(${photo(shot.id, 600)})` }}
              />
              <div className="instagram-overlay">
                <Instagram size={24} />
                <span>{shot.title}</span>
                <small>@ismail.bakes ↗</small>
              </div>
            </a>
          ))}
        </div>

        <div className="instagram-cta">
          <a
            href="https://www.instagram.com/ismail.bakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Instagram size={15} /> Follow @ismail.bakes on Instagram ↗
          </a>
          <Link href="/gallery" className="btn btn-outline">
            Explore Artisanal Gallery ↗
          </Link>
        </div>
      </section>

      {/* 9. Customer Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-head text-center">
            <div>
              <div className="eyebrow">Words from sweet celebrations</div>
              <h2>
                Made to be <em>remembered.</em>
              </h2>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C5A46D" color="#C5A46D" />
                  ))}
                </div>
                <span className="testimonial-tag">{t.occasion}</span>
                <p className="testimonial-quote">“{t.quote}”</p>
                <div className="testimonial-author">
                  <strong>{t.author}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Quick Preview */}
      <section className="container section faqs-preview">
        <div className="faqs-split">
          <div className="faqs-intro">
            <div className="eyebrow">Good to know</div>
            <h2>
              Quick answers before <em>you enquire.</em>
            </h2>
            <p>
              Ordering fresh bakes is simple and personal. Here are answers to common
              questions about lead times and delivery in Rawalpindi.
            </p>
            <Link href="/faqs" className="btn btn-outline">
              Read all FAQs &amp; Guidelines ↗
            </Link>
          </div>

          <div className="faqs-cards">
            {previewFaqs.map((faq, i) => (
              <div key={i} className="faq-preview-card">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Direct Contact & Consultation Hub */}
      <section className="contact-hub">
        <div className="container contact-hub-inner">
          <div className="eyebrow">Plan something lovely</div>
          <h2>
            Let’s create something <em>wonderful together.</em>
          </h2>
          <p>
            Have an upcoming birthday, anniversary, or special family celebration in
            Rawalpindi? Reach out on Instagram or Contact us to discuss your date and
            custom details.
          </p>
          <div className="contact-actions">
            <a
              href="https://www.instagram.com/ismail.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Instagram size={15} /> Message on Instagram ↗
            </a>
            <Link href="/contact" className="btn btn-outline">
              <MessageCircle size={15} /> View contact details ↗
            </Link>
          </div>
          <div className="service-tag">
            Handcrafted in Rawalpindi · Delivery &amp; Pickup options · Pre-orders
            require at least 48 hours’ notice
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        /* Hero */
        .hero {
          display: grid;
          grid-template-columns: 48% 52%;
          min-height: 600px;
          background: #f1ece3;
        }
        .hero-copy {
          padding: 85px 8% 50px max(calc((100vw - 1180px)/2), 48px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .since {
          font-size: 9px;
          letter-spacing: .14em;
          color: #8d7c6d;
          margin-bottom: 20px;
        }
        .hero h1 {
          font-size: clamp(42px, 5vw, 66px);
          line-height: 1.1;
          font-weight: 500;
          letter-spacing: -.03em;
          margin: 16px 0 18px;
        }
        .hero h1 em,
        .intro-content h2 em,
        .section-head h2 em,
        .bespoke-head h2 em,
        .story-copy h2 em,
        .faqs-intro h2 em,
        .contact-hub-inner h2 em {
          font-weight: 400;
          color: var(--gold);
          font-style: italic;
        }
        .hero-copy > p {
          font-size: 14px;
          line-height: 1.8;
          color: #796b61;
          max-width: 400px;
          margin: 0;
        }
        .hero-links {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .hero-notice {
          margin-top: 24px;
          font-size: 10px;
          line-height: 1.6;
          color: #8c7e72;
        }
        .hero-notice b {
          display: inline-block;
          color: var(--brown);
          font-weight: 600;
          margin-right: 6px;
        }
        .hero-image {
          position: relative;
          background-size: cover;
          background-position: center 48%;
          min-height: 590px;
        }
        .hero-image:after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(33, 20, 11, 0.6) 0%, transparent 34%);
        }
        .image-caption {
          position: absolute;
          bottom: 35px;
          left: 38px;
          color: white;
          z-index: 1;
        }
        .image-caption span {
          font-size: 9px;
          letter-spacing: .16em;
          display: block;
          margin-bottom: 8px;
        }
        .image-caption b {
          font: 24px var(--font-serif);
        }

        /* Intro Narrative */
        .intro-section {
          text-align: center;
          padding: 85px 0 65px;
        }
        .intro-content {
          max-width: 780px;
          margin: auto;
        }
        .intro-content h2 {
          font-size: clamp(32px, 4vw, 46px);
          font-weight: 500;
          line-height: 1.25;
          margin: 16px 0 20px;
        }
        .intro-content p {
          font-size: 15px;
          line-height: 1.9;
          color: #786b60;
          margin: 0 0 26px;
        }
        .intro-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--gold);
          flex-wrap: wrap;
        }

        /* Categories Section */
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 35px;
        }
        .section-head.text-center {
          justify-content: center;
          text-align: center;
        }
        .section-head h2 {
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 500;
          line-height: 1.2;
          margin: 10px 0 0;
        }
        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: .12em;
          color: var(--brown);
          border-bottom: 1px solid var(--gold);
          padding-bottom: 6px;
          transition: opacity .2s ease;
        }
        .text-link:hover {
          opacity: .8;
        }
        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .category-card {
          display: flex;
          flex-direction: column;
          background: #fffdf9;
          border: 1px solid var(--line);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(57, 39, 31, 0.06);
        }
        .category-pic {
          height: 220px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .category-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(251, 249, 242, 0.94);
          padding: 6px 10px;
          font-size: 8px;
          letter-spacing: .14em;
          color: var(--brown);
        }
        .category-arrow {
          position: absolute;
          right: 12px;
          bottom: 12px;
          background: #fffdf9;
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          color: var(--brown);
        }
        .category-info {
          padding: 20px;
        }
        .category-info h3 {
          font: 20px var(--font-serif);
          margin: 0 0 8px;
          color: var(--brown);
        }
        .category-info p {
          font-size: 12px;
          line-height: 1.6;
          color: #796b61;
          margin: 0 0 14px;
        }
        .category-link {
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* Signature Products */
        .products {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* Bespoke Custom Cakes */
        .bespoke-section {
          background: #f2ece2;
          padding: 85px 0;
          margin: 40px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .bespoke-head {
          max-width: 680px;
          margin-bottom: 45px;
        }
        .bespoke-head h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 500;
          line-height: 1.2;
          margin: 12px 0 16px;
        }
        .bespoke-head p {
          font-size: 14px;
          line-height: 1.8;
          color: #796b61;
          margin: 0;
        }
        .bespoke-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-bottom: 40px;
        }
        .step-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 24px;
        }
        .step-num {
          font: 28px var(--font-serif);
          color: var(--gold);
          display: block;
          margin-bottom: 12px;
        }
        .step-card h3 {
          font: 18px var(--font-serif);
          margin: 0 0 8px;
          color: var(--brown);
        }
        .step-card p {
          font-size: 12px;
          line-height: 1.7;
          color: #796b61;
          margin: 0;
        }
        .bespoke-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Promise / Pillars */
        .promise-section {
          padding: 80px 0;
        }
        .promise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          text-align: center;
        }
        .promise-card {
          padding: 28px 20px;
          background: #fbf9f4;
          border: 1px solid var(--line);
        }
        .promise-icon {
          color: var(--gold);
          display: grid;
          place-items: center;
          margin-bottom: 16px;
        }
        .promise-card h3 {
          font: 21px var(--font-serif);
          margin: 0 0 10px;
          color: var(--brown);
        }
        .promise-card p {
          font-size: 13px;
          line-height: 1.7;
          color: #796b61;
          margin: 0;
        }

        /* Story */
        .story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #eee8de;
        }
        .story-pic {
          min-height: 480px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .stamp {
          position: absolute;
          right: -34px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          width: 104px;
          height: 104px;
          background: var(--gold);
          color: white;
          display: grid;
          place-content: center;
          text-align: center;
          font-size: 10px;
          line-height: 1.4;
          letter-spacing: .16em;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }
        .story-copy {
          padding: 90px 12%;
          align-self: center;
        }
        .story-copy h2 {
          font-size: clamp(34px, 4vw, 44px);
          font-weight: 500;
          line-height: 1.2;
          margin: 12px 0 0;
        }
        .story-copy > p {
          font-size: 14px;
          line-height: 1.9;
          color: #786b60;
          max-width: 420px;
          margin: 22px 0 28px;
        }

        /* Instagram Section */
        .instagram-section {
          padding: 85px 0 75px;
        }
        .instagram-sub {
          font-size: 13px;
          color: #796b61;
          margin: -20px 0 28px;
          max-width: 580px;
        }
        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .instagram-item {
          position: relative;
          height: 260px;
          overflow: hidden;
          display: block;
        }
        .instagram-photo {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform .4s ease;
        }
        .instagram-overlay {
          position: absolute;
          inset: 0;
          background: rgba(57, 39, 31, 0.75);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          transition: opacity .3s ease;
          padding: 16px;
          text-align: center;
        }
        .instagram-overlay span {
          font-family: var(--font-serif);
          font-size: 15px;
        }
        .instagram-overlay small {
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .instagram-item:hover .instagram-overlay {
          opacity: 1;
        }
        .instagram-item:hover .instagram-photo {
          transform: scale(1.05);
        }
        .instagram-cta {
          text-align: center;
          margin-top: 32px;
        }

        /* Testimonials */
        .testimonials-section {
          background: #f4eee5;
          padding: 85px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 30px;
          display: flex;
          flex-direction: column;
        }
        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 12px;
        }
        .testimonial-tag {
          font-size: 9px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 14px;
        }
        .testimonial-quote {
          font-size: 14px;
          line-height: 1.8;
          color: #55453c;
          font-style: italic;
          margin: 0 0 20px;
          flex-grow: 1;
        }
        .testimonial-author {
          border-top: 1px solid #f0e8de;
          padding-top: 14px;
          display: flex;
          flex-direction: column;
        }
        .testimonial-author strong {
          font-size: 13px;
          color: var(--brown);
        }
        .testimonial-author span {
          font-size: 11px;
          color: #8c7c71;
        }

        /* FAQs Preview */
        .faqs-preview {
          padding: 85px 0;
        }
        .faqs-split {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 50px;
          align-items: start;
        }
        .faqs-intro h2 {
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 500;
          line-height: 1.25;
          margin: 12px 0 16px;
        }
        .faqs-intro p {
          font-size: 14px;
          line-height: 1.8;
          color: #796b61;
          margin-bottom: 24px;
        }
        .faqs-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-preview-card {
          background: #fbf9f4;
          border: 1px solid var(--line);
          padding: 22px 24px;
        }
        .faq-preview-card h3 {
          font: 18px var(--font-serif);
          margin: 0 0 8px;
          color: var(--brown);
        }
        .faq-preview-card p {
          font-size: 13px;
          line-height: 1.7;
          color: #796b61;
          margin: 0;
        }

        /* Contact Hub */
        .contact-hub {
          background: #eee7dc;
          padding: 90px 20px 100px;
          text-align: center;
          border-top: 1px solid var(--line);
        }
        .contact-hub-inner {
          max-width: 680px;
          margin: auto;
        }
        .contact-hub-inner h2 {
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.2;
          margin: 14px 0 18px;
        }
        .contact-hub-inner p {
          font-size: 15px;
          line-height: 1.8;
          color: #796b61;
          margin: 0 0 28px;
        }
        .contact-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .service-tag {
          font-size: 11px;
          letter-spacing: .08em;
          color: #8c7c71;
          margin-top: 30px;
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .hero-copy {
            padding: 65px 24px 35px;
            min-height: auto;
          }
          .hero-image {
            min-height: 420px;
          }
          .category-grid,
          .products,
          .bespoke-steps,
          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .promise-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .story {
            grid-template-columns: 1fr;
          }
          .story-pic {
            min-height: 340px;
          }
          .stamp {
            right: 20px;
            top: auto;
            bottom: -35px;
            transform: none;
          }
          .story-copy {
            padding: 65px 24px;
          }
          .faqs-split {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 580px) {
          .section-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .category-grid,
          .products,
          .bespoke-steps,
          .instagram-grid {
            grid-template-columns: 1fr;
          }
          .hero h1 {
            font-size: 40px;
          }
          .hero-image {
            min-height: 320px;
          }
          .hero-links {
            flex-direction: column;
            width: 100%;
          }
          .hero-links .btn {
            width: 100%;
          }
          .bespoke-actions,
          .contact-actions {
            flex-direction: column;
            width: 100%;
          }
          .bespoke-actions .btn,
          .contact-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
