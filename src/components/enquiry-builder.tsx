'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Instagram, MessageSquareQuote, Sparkles } from 'lucide-react';

const occasions = [
  'Birthday Celebration',
  'Milestone Anniversary',
  'Bridal / Baby Shower',
  'Family Dinner / Gathering',
  'Children’s Party',
  'Just-Because Celebration',
];

const sizeOptions = [
  'Small Petite Tier (1.0 – 1.5 lbs / 6–8 guests)',
  'Signature Celebration (2.0 – 2.5 lbs / 10–14 guests)',
  'Grand Party Tier (3.0 – 3.5 lbs / 16–22 guests)',
  'Two-Tier Centrepiece (4.5 – 5.5 lbs / 25–35 guests)',
  'Gourmet Cupcake Box (6 or 12 cupcakes)',
  'Chocolate Truffle Cake Pops (Party Box)',
  'Layered Dessert Cups (Party Set)',
];

const flavours = [
  'Madagascar Vanilla Bean with Whipped Buttercream',
  'Belgian Chocolate Fudge with Dark Ganache',
  'Classic Red Velvet with Silky Buttercream',
  'Golden Salted Caramel with Brown Butter',
  'Strawberry Cloud with Whipped Buttercream',
  'Surprise me / Need recommendation',
];

export function EnquiryBuilder() {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [date, setDate] = useState('');
  const [size, setSize] = useState(sizeOptions[1]);
  const [flavour, setFlavour] = useState(flavours[0]);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const formattedMessage = `Hello Ismail Bakes! I would love to enquire about a pre-order for my upcoming celebration:

• Occasion: ${occasion}
• Event Date: ${date || '[Date / 48h+ in advance]'}
• Desired Size / Count: ${size}
• Flavour Preference: ${flavour}
${notes ? `• Custom Details: ${notes}\n` : ''}• Location: Rawalpindi / Delivery or Pickup

Could you please confirm your date availability and pricing? Thank you!`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="builder-card">
      <div className="builder-header">
        <span className="eyebrow">
          <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '6px' }} />
          Enquiry Helper
        </span>
        <h3>Compose Your Instagram DM</h3>
        <p>
          Fill in your celebration details below to create a neat, ready-to-send enquiry
          message for our Instagram direct messages.
        </p>
      </div>

      <div className="builder-grid">
        <div className="builder-inputs">
          <div className="field-group">
            <label htmlFor="builder-occasion">Occasion</label>
            <select
              id="builder-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              {occasions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="builder-date">Celebration Date (48h+ Notice)</label>
            <input
              id="builder-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date(Date.now() + 48 * 3600 * 1000).toISOString().split('T')[0]}
            />
          </div>

          <div className="field-group">
            <label htmlFor="builder-size">Size / Portion Recommendation</label>
            <select
              id="builder-size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {sizeOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="builder-flavour">Sponge &amp; Flavour</label>
            <select
              id="builder-flavour"
              value={flavour}
              onChange={(e) => setFlavour(e.target.value)}
            >
              {flavours.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="builder-notes">Custom Message / Aesthetic Theme (Optional)</label>
            <input
              id="builder-notes"
              type="text"
              placeholder="e.g. Vintage Lambeth pink piping, message: Happy 25th Sara!"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="builder-preview">
          <div className="preview-label">
            <MessageSquareQuote size={14} />
            <span>Ready-to-Send Message Preview:</span>
          </div>
          <pre className="message-box">{formattedMessage}</pre>
          <div className="builder-actions">
            <button
              type="button"
              className={`btn ${copied ? 'btn-copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check size={14} /> Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy Message
                </>
              )}
            </button>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Instagram size={15} /> Open Instagram DM <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .builder-card {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 36px;
          margin-top: 50px;
        }
        .builder-header h3 {
          font: 24px var(--font-serif);
          color: var(--brown);
          margin: 6px 0 8px;
        }
        .builder-header p {
          font-size: 13px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0 0 28px;
        }
        .builder-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 32px;
        }
        .builder-inputs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .field-group label {
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--brown);
          font-weight: 500;
        }
        .field-group select,
        .field-group input {
          background: #fbf9f4;
          border: 1px solid var(--line);
          padding: 10px 14px;
          font-size: 13px;
          color: var(--brown);
          border-radius: 4px;
          font-family: inherit;
        }
        .field-group select:focus,
        .field-group input:focus {
          outline: none;
          border-color: var(--gold);
        }

        .builder-preview {
          background: #faf6ef;
          border: 1px solid var(--line);
          padding: 22px;
          display: flex;
          flex-direction: column;
        }
        .preview-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }
        .message-box {
          background: #fffdf9;
          border: 1px solid var(--line);
          padding: 16px;
          font-family: var(--font-sans);
          font-size: 12px;
          line-height: 1.6;
          color: #4b3d35;
          white-space: pre-wrap;
          word-break: break-word;
          margin: 0 0 16px;
          flex-grow: 1;
          border-radius: 4px;
        }
        .builder-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn-copied {
          background: #396342 !important;
          border-color: #396342 !important;
          color: #fff !important;
        }

        @media(max-width: 850px) {
          .builder-grid {
            grid-template-columns: 1fr;
          }
          .builder-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
}
