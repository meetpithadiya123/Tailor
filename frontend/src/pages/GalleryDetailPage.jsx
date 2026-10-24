import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GALLERY_ITEMS } from '../data/galleryData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './GalleryDetailPage.css';

export default function GalleryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCustomizations, setSelectedCustomizations] = useState([]);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({ name: '', phone: '', date: '', notes: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('craftsmanship');

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Find item by ID or default to first
  const item = GALLERY_ITEMS.find((g) => g.id === id) || GALLERY_ITEMS[0];

  // Related items (excluding current)
  const relatedItems = GALLERY_ITEMS.filter((g) => g.id !== item.id).slice(0, 4);

  const toggleCustomization = (opt) => {
    if (selectedCustomizations.includes(opt)) {
      setSelectedCustomizations(selectedCustomizations.filter((c) => c !== opt));
    } else {
      setSelectedCustomizations([...selectedCustomizations, opt]);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sonali Ladies Tailor! I'm interested in custom stitching the "${item.title}" design from your gallery (${window.location.origin}/gallery/${item.id}). Could you please guide me on fabric requirement and appointment booking?`
  );

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setShowAppointmentModal(false);
      setAppointmentData({ name: '', phone: '', date: '', notes: '' });
    }, 2500);
  };

  return (
    <div className="gallery-detail-page">
      <Navbar />

      {/* Breadcrumb Banner */}
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <div className="detail-breadcrumb__inner">
            <Link to="/" className="detail-breadcrumb__link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Home
            </Link>
            <span className="detail-breadcrumb__separator">/</span>
            <Link to="/#gallery" className="detail-breadcrumb__link">
              Gallery
            </Link>
            <span className="detail-breadcrumb__separator">/</span>
            <span className="detail-breadcrumb__current">{item.title}</span>

            <button
              onClick={() => navigate('/#gallery')}
              className="detail-back-btn"
              aria-label="Back to Gallery"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to Gallery
            </button>
          </div>
        </div>
      </nav>

      {/* Main Product Showcase Section */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero__grid">
            
            {/* Left Column: Visual Showcase */}
            <div className="detail-visual">
              <div className="detail-visual__image-card">
                <span className="detail-badge">{item.badge}</span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="detail-visual__main-img"
                  loading="eager"
                />
                <div className="detail-visual__overlay-tag">
                  <span className="detail-tag-category">{item.category}</span>
                </div>
              </div>

              {/* Guarantees Strip */}
              <div className="detail-trust-cards">
                <div className="detail-trust-card">
                  <div className="detail-trust-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>100% Fit Guarantee</strong>
                    <p>Free trial fitting with in-house alteration until you are completely satisfied.</p>
                  </div>
                </div>

                <div className="detail-trust-card">
                  <div className="detail-trust-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Custom Paper Drafting</strong>
                    <p>Each design is drafted to your unique measurements for uncompromised posture & comfort.</p>
                  </div>
                </div>

                <div className="detail-trust-card">
                  <div className="detail-trust-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Artisan Craftsmanship</strong>
                    <p>Cut, stitched and hand-finished by senior boutique master tailors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: In-depth Details & Customization (No prices, no working days) */}
            <div className="detail-content">
              <div className="detail-meta-header">
                <span className="detail-pill-category">{item.category}</span>
                <span className="detail-rating-pill">{item.rating}</span>
              </div>

              <h1 className="detail-title">{item.title}</h1>
              <p className="detail-tagline">{item.tagline}</p>

              {/* Detailed Description */}
              <div className="detail-description">
                <h2 className="detail-subheading">Design Overview & Silhouette</h2>
                {item.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Highlights Grid */}
              <div className="detail-highlights-grid">
                {item.highlights.map((hl, i) => (
                  <div key={i} className="detail-highlight-item">
                    <span className="detail-highlight-label">{hl.label}</span>
                    <strong className="detail-highlight-val">{hl.value}</strong>
                  </div>
                ))}
              </div>

              {/* Tabs for Craftsmanship, Customization & Specs */}
              <div className="detail-tabs-container">
                <div className="detail-tabs-nav" role="tablist">
                  <button
                    className={`detail-tab-btn ${activeTab === 'craftsmanship' ? 'active' : ''}`}
                    onClick={() => setActiveTab('craftsmanship')}
                    role="tab"
                    aria-selected={activeTab === 'craftsmanship'}
                  >
                    Craftsmanship & Details
                  </button>
                  <button
                    className={`detail-tab-btn ${activeTab === 'customization' ? 'active' : ''}`}
                    onClick={() => setActiveTab('customization')}
                    role="tab"
                    aria-selected={activeTab === 'customization'}
                  >
                    Customization Options
                  </button>
                  <button
                    className={`detail-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('specs')}
                    role="tab"
                    aria-selected={activeTab === 'specs'}
                  >
                    Tailoring Specifications
                  </button>
                </div>

                <div className="detail-tab-panel">
                  {/* Tab 1: Craftsmanship */}
                  {activeTab === 'craftsmanship' && (
                    <div className="tab-pane-craftsmanship">
                      <div className="craftsmanship-cards">
                        {item.craftsmanshipDetails.map((craft, i) => (
                          <div key={i} className="craftsmanship-card">
                            <h4 className="craftsmanship-card__title">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A2E39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                              {craft.title}
                            </h4>
                            <p className="craftsmanship-card__desc">{craft.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="fabrics-section">
                        <h4 className="fabrics-title">Recommended / Used Fabrics:</h4>
                        <div className="fabric-pills">
                          {item.fabricsUsed.map((fab, i) => (
                            <span key={i} className="fabric-pill">{fab}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Customization Options */}
                  {activeTab === 'customization' && (
                    <div className="tab-pane-customization">
                      <p className="customization-intro">
                        Select the personal styling adjustments you would like for this design. We will incorporate these into your measurement appointment:
                      </p>
                      <div className="customization-checklist">
                        {item.customizationOptions.map((opt, i) => {
                          const isChecked = selectedCustomizations.includes(opt);
                          return (
                            <div
                              key={i}
                              className={`customization-option ${isChecked ? 'selected' : ''}`}
                              onClick={() => toggleCustomization(opt)}
                            >
                              <div className="customization-checkbox">
                                {isChecked && (
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"/>
                                  </svg>
                                )}
                              </div>
                              <span className="customization-text">{opt}</span>
                            </div>
                          );
                        })}
                      </div>
                      {selectedCustomizations.length > 0 && (
                        <div className="selected-summary">
                          <strong>{selectedCustomizations.length} custom adjustments selected.</strong> These will be forwarded when you contact us.
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tab 3: Specs */}
                  {activeTab === 'specs' && (
                    <div className="tab-pane-specs">
                      <table className="specs-table">
                        <tbody>
                          {Object.entries(item.specifications).map(([key, val]) => (
                            <tr key={key}>
                              <th>{key}</th>
                              <td>{val}</td>
                            </tr>
                          ))}
                          <tr>
                            <th>Care Instructions</th>
                            <td>{item.careInstructions}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="detail-actions">
                <a
                  href={`https://wa.me/917698603287?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-btn detail-btn--whatsapp"
                  id="whatsapp-enquiry-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                  <span>Enquire &amp; Order on WhatsApp (+91 76986 03287)</span>
                </a>

                <button
                  onClick={() => setShowAppointmentModal(true)}
                  className="detail-btn detail-btn--appointment"
                  id="book-appointment-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>Book Measurement Appointment</span>
                </button>

                <a
                  href="tel:+917698603287"
                  className="detail-btn detail-btn--call"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0122 16.92z"/>
                  </svg>
                  <span>Call Master Tailor: +91 76986 03287</span>
                </a>
              </div>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/eqPDtoqvgYkjsySm7"
                target="_blank"
                rel="noopener noreferrer"
                className="detail-shop-info"
                title="Click to view live location on Google Maps"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Visit us with your fabric: <strong>Sonali Ladies Tailor</strong>, Shop No-2, Ami Complex, Near Big Bazar Street, Gulab Vihar Road, 150 Feet Ring Road, Rajkot-360005, Gujarat (Mon – Sat: 9:30 AM – 8:00 PM)</span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Tailoring Process Strip */}
      <section className="detail-process-section">
        <div className="container">
          <header className="section-header-center">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Our 4-Step Custom Tailoring Process</h2>
            <p className="section-subtitle">From fabric selection to your dream outfit</p>
          </header>

          <div className="process-steps-grid">
            <div className="process-step-card">
              <div className="process-step-num">01</div>
              <h3>Consultation & Design</h3>
              <p>Bring your fabric or share your photo inspiration. We finalize necklines, sleeves, cut and embroidery patterns.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">02</div>
              <h3>Precision Measurements</h3>
              <p>Our senior lady tailor takes 18+ comprehensive body measurements to draft a personalized paper pattern.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">03</div>
              <h3>Bespoke Stitching</h3>
              <p>Tailored with reinforced seams, soft imported lining, padded cups, and handcrafted dori latkans.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">04</div>
              <h3>Trial Fitting & Delivery</h3>
              <p>Try your outfit in our private fitting room. Any micro-adjustments are completed immediately for 100% perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials for this Design */}
      {item.customerReviews?.length > 0 && (
        <section className="detail-reviews-section">
          <div className="container">
            <header className="section-header-center">
              <span className="section-label">Real Experiences</span>
              <h2 className="section-title">What Our Customers Say</h2>
              <p className="section-subtitle">Hear from clients who got this design stitched with us</p>
            </header>

            <div className="detail-reviews-grid">
              {item.customerReviews.map((rev, i) => (
                <div key={i} className="detail-review-card">
                  <div className="detail-review-stars">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p className="detail-review-quote">"{rev.comment}"</p>
                  <div className="detail-review-author">
                    <strong>{rev.name}</strong>
                    <span>{rev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Designs Section */}
      <section className="detail-related-section">
        <div className="container">
          <header className="section-header-center">
            <span className="section-label">More Handcrafted Pieces</span>
            <h2 className="section-title">Explore Other Designs in Our Gallery</h2>
            <p className="section-subtitle">Click any image to view its complete tailoring details</p>
          </header>

          <div className="related-grid">
            {relatedItems.map((rel) => (
              <Link
                key={rel.id}
                to={`/gallery/${rel.id}`}
                className="related-card"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="related-card__image-wrap">
                  <img src={rel.image} alt={rel.title} loading="lazy" />
                  <span className="related-card__badge">{rel.badge}</span>
                </div>
                <div className="related-card__info">
                  <span className="related-card__category">{rel.category}</span>
                  <h3 className="related-card__title">{rel.title}</h3>
                  <div className="related-card__footer">
                    <span className="related-card__link">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="related-cta-wrap">
            <Link to="/#gallery" className="btn-explore-all">
              ← View All Gallery Designs
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="appointment-modal-overlay" onClick={() => setShowAppointmentModal(false)}>
          <div className="appointment-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setShowAppointmentModal(false)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <span className="section-label">In-Store Fitting</span>
            <h3 className="modal-title">Book Measurement Appointment</h3>
            <p className="modal-desc">
              Schedule a private measurement session for <strong>{item.title}</strong> at our boutique studio.
            </p>

            {bookingSuccess ? (
              <div className="modal-success-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h4>Appointment Scheduled!</h4>
                <p>We look forward to seeing you. Our master tailor will keep the reference pattern ready.</p>
              </div>
            ) : (
              <form onSubmit={handleAppointmentSubmit} className="appointment-form">
                <div className="form-group">
                  <label htmlFor="apt-name">Full Name *</label>
                  <input
                    type="text"
                    id="apt-name"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={appointmentData.name}
                    onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apt-phone">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="apt-phone"
                    required
                    placeholder="e.g. 76986 03287"
                    value={appointmentData.phone}
                    onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apt-date">Preferred Date & Time *</label>
                  <input
                    type="datetime-local"
                    id="apt-date"
                    required
                    value={appointmentData.date}
                    onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apt-notes">Specific Requests / Fabric Info (Optional)</label>
                  <textarea
                    id="apt-notes"
                    rows="3"
                    placeholder="e.g. Bringing 4 meters raw silk fabric"
                    value={appointmentData.notes}
                    onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="modal-submit-btn">
                  Confirm Appointment Booking
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
