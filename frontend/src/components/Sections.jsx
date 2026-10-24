import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../data/galleryData';
import './Sections.css';

/* ── About Preview ────────────────────────────────────────────── */
export function AboutPreview() {
  return (
    <section id="about" className="about-preview" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-preview__inner">
          {/* Studio Image */}
          <div className="about-preview__image-wrap">
            <img
              src="/images/sonali-shop.jpg"
              alt="Sonali Ladies Tailor — Boutique Atelier"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/bridal_lehenga.jpg';
              }}
            />
          </div>

          {/* Content */}
          <div className="about-preview__content">
            <span className="section-label">Master Tailors Since 1998</span>
            <h2 id="about-heading" className="section-title">About Sonali Ladies Tailor</h2>
            <p>
              Sonali Ladies Tailor is a celebrated landmark in bespoke women’s couture and traditional garment tailoring.
              With over two decades of needlework heritage and an eye for contemporary runway cuts, we believe every woman
              deserves outfits that flatter her unique posture, proportions, and personal grace.
            </p>
            <p>
              Every single blouse, lehenga, kurti, and gown is individually drafted from a custom cardstock paper pattern.
              We use soft, sweat-absorbent linings, durable seam locks, and provide private trial fittings with complimentary
              alterations until your silhouette is 100% flawless.
            </p>

            <div className="about-stats-row">
              <div className="about-stat">
                <strong>25+</strong>
                <span>Years of Craft</span>
              </div>
              <div className="about-stat">
                <strong>15,000+</strong>
                <span>Outfits Stitched</span>
              </div>
              <div className="about-stat">
                <strong>100%</strong>
                <span>Fitting Guarantee</span>
              </div>
            </div>

            <a href="#contact" className="about-preview__link">
              Schedule Studio Visit & Fitting
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Gallery Preview with Categories & Click to Separate Page ── */
const GALLERY_CATEGORIES = [
  'All Designs',
  'Bridal Wear',
  'Blouse Designs',
  'Suits & Anarkalis',
  'Festive & Party',
  'Indo-Western'
];

export function GalleryPreview() {
  const [selectedCat, setSelectedCat] = useState('All Designs');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCat === 'All Designs') return true;
    return item.category === selectedCat;
  });

  return (
    <section id="gallery" className="gallery-preview" aria-labelledby="gallery-heading">
      <div className="container">
        <header className="gallery-preview__header">
          <span className="section-label">Our Masterpiece Gallery</span>
          <div className="divider">
            <h2 id="gallery-heading" className="section-title">A Glimpse of Our Craftsmanship</h2>
          </div>
          <p className="section-subtitle">
            Explore our handcrafted bridal lehengas, designer blouses, and festive wear.
            <strong> Click any image to open its dedicated page with complete design & tailoring details.</strong>
          </p>

          {/* Category Tabs */}
          <div className="gallery-filter-tabs" role="tablist">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCat === cat}
                className={`gallery-filter-btn ${selectedCat === cat ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Gallery Grid (No prices, No days) */}
        <div className="gallery-preview__grid" role="list">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/gallery/${item.id}`}
              className="gallery-item-card"
              role="listitem"
              aria-label={`View full details for ${item.title}`}
            >
              <div className="gallery-item-card__image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/blouse.jpg';
                  }}
                />
                <span className="gallery-item-card__badge">{item.badge}</span>
                
                {/* Hover overlay hint */}
                <div className="gallery-item-card__overlay">
                  <span className="gallery-overlay-btn">
                    View Complete Details →
                  </span>
                </div>
              </div>

              <div className="gallery-item-card__info">
                <div className="gallery-item-card__meta">
                  <span className="gallery-item-card__cat">{item.category}</span>
                  <span className="gallery-item-card__rating">★ 5.0</span>
                </div>
                <h3 className="gallery-item-card__title">{item.title}</h3>
                <p className="gallery-item-card__tagline">{item.tagline}</p>
                
                <div className="gallery-item-card__footer">
                  <span className="gallery-item-card__action">
                    Design Details & Customization →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="gallery-footer-notice">
          <p>
            Have a custom design from Pinterest, Instagram, or a bridal magazine?
            <a href="#contact"> Send us your reference image</a> and our master tailors will recreate it with a customized fit for you.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Contact Section ──────────────────────────────────────────── */
export function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-section__inner">
          <span className="section-label" style={{ color: '#F9EDE8' }}>Visit Our Studio</span>
          <h2 id="contact-heading" className="contact-section__title">
            Let's Create Your Dream Outfit
          </h2>
          <p className="contact-section__text">
            Have a design in mind or fabrics waiting to be stitched? Call our boutique master tailor
            or message us directly on WhatsApp with your design reference images.
          </p>

          <div className="contact-section__buttons">
            <a href="tel:+917698603287" className="contact-btn contact-btn--primary" aria-label="Call Sonali Ladies Tailor">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0122 16.92z"/>
              </svg>
              Call Us: +91 76986 03287
            </a>
            <a
              href="https://wa.me/917698603287?text=Hi%20Sonali%20Ladies%20Tailor!%20I%20would%20like%20to%20discuss%20a%20tailoring%20order."
              className="contact-btn contact-btn--outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              WhatsApp: +91 76986 03287
            </a>
          </div>

          <div className="contact-section__details">
            <a
              href="https://maps.app.goo.gl/eqPDtoqvgYkjsySm7"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
              title="Open live location on Google Maps"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Shop No-2, Ami Complex, Near Big Bazar Street, Gulab Vihar Road, 150 Feet Ring Road, Rajkot-360005, Gujarat</span>
            </a>
            <div className="contact-detail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Mon – Sat: 9:30 AM – 8:00 PM | Sunday by Appointment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
