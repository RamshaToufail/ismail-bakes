export default function Terms() {
  return (
    <main className="container terms-page">
      <div className="eyebrow">A few ground rules</div>
      <h1>Website notice &amp; guidelines</h1>
      <p>
        Ismail Bakes provides this website as an online showcase and digital
        portfolio of our handcrafted bakery creations in Rawalpindi, Pakistan.
        This website does not take online orders, process payments, or collect
        financial details.
      </p>

      <h2>Consultations &amp; enquiries</h2>
      <p>
        All customer enquiries, custom design consultations, and pre-orders are
        arranged externally through our official Instagram profile (
        <a
          href="https://www.instagram.com/ismail.bakes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ismail.bakes
        </a>
        ) or official WhatsApp. Pre-orders are confirmed only after direct
        personal review with our team.
      </p>

      <h2>Lead times &amp; availability</h2>
      <p>
        Because all items are handmade fresh in small batches, we require at
        least 48 hours’ notice for standard treats and 3 to 5 days for bespoke
        celebration cakes. Date availability and delivery or collection
        arrangements are confirmed during consultation.
      </p>

      <h2>Allergens &amp; ingredients</h2>
      <p>
        Please inform us of any dietary restrictions or allergies during your
        consultation. Our kitchen handles dairy, wheat, eggs, and nuts, and we
        cannot guarantee an allergen-free environment.
      </p>

      <p className="updated">Last updated: November 2026</p>

      <style>{`
        .terms-page {
          padding: 75px 0 110px;
          max-width: 820px;
        }
        .terms-page h1 {
          font: 46px 'Playfair Display', serif;
          margin: 14px 0 24px;
        }
        .terms-page h2 {
          font: 24px 'Playfair Display', serif;
          margin: 28px 0 12px;
          color: #38251e;
        }
        .terms-page p {
          color: #796b61;
          line-height: 1.9;
          font-size: 14px;
        }
        .terms-page a {
          color: #a77e4d;
          border-bottom: 1px solid #b38a55;
        }
        .updated {
          font-size: 11px;
          color: #98897d;
          margin-top: 36px;
        }
      `}</style>
    </main>
  );
}
