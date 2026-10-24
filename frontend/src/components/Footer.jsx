import React from 'react';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#specialities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const addressText = "Shop No-2, Ami Complex, Near Big Bazar Street, Gulab Vihar Road, 150 Feet Ring Road, Rajkot-360005, Gujarat";
  const phoneNumber = "7698603287";
  const displayPhone = "+91 76986 03287";
  const liveLocationUrl = "https://maps.app.goo.gl/eqPDtoqvgYkjsySm7";
  const mapEmbedUrl = "https://maps.google.com/maps?q=SONALI%20LADIES%20TAILOR,%20Rajkot&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand with round logo */}
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img
                src="/logo.png"
                alt="Sonali Ladies Tailor Logo"
                className="footer__logo-img"
              />
              <div>
                <div className="footer__brand-name">Sonali</div>
                <div className="footer__brand-sub">Ladies Tailor</div>
              </div>
            </div>
            <p className="footer__tagline">
              Stitching Your Dreams, One Outfit at a Time. Custom ladies' wear crafted with love, dedication, and precision fit.
            </p>

            <div className="footer__social-actions">
              <a
                href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent('Hi Sonali Ladies Tailor! I would like to enquire about custom stitching.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__wa-badge"
                aria-label="Chat on WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
                WhatsApp: {displayPhone}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer__col-title">Quick Links</p>
            <nav className="footer__links" aria-label="Footer navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <p className="footer__col-title">Contact & Studio</p>
            <div className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <a
                href={liveLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__address-link"
                title="Click to open live location on Google Maps"
              >
                {addressText}
              </a>
            </div>
            <div className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0122 16.92z"/>
              </svg>
              <a href={`tel:+91${phoneNumber}`} className="footer__phone-link">
                {displayPhone}
              </a>
            </div>
            <div className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Mon – Sat: 9:30 AM – 8:00 PM</span>
            </div>
          </div>

          {/* Real Live Google Map */}
          <div className="footer__map-col">
            <p className="footer__col-title">Studio Live Location</p>
            <div className="footer__map-wrapper">
              <iframe
                title="Sonali Ladies Tailor Live Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="190"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={liveLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__map-btn"
                id="footer-live-location-btn"
                title="Open live location in Google Maps"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Open Live Location on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__bottom">
          <span>© {year} Sonali Ladies Tailor. All rights reserved.</span>
          <a
            href={liveLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__bottom-link"
            title="Open live location in Google Maps"
          >
            Shop No-2, Ami Complex, 150 Feet Ring Road, Rajkot
          </a>
          <span>Made with ♥ for beautiful Indian fashion</span>
        </div>
      </div>
    </footer>
  );
}
