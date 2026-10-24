import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import './Specialities.css';

export default function Specialities() {
  const [services, setServices] = useState(SERVICES_DATA);
  const [selectedService, setSelectedService] = useState(null);

  // Fetch from backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((r) => r.json())
      .then((json) => {
        if (json.success && json.data?.length) {
          // Map backend items to service cards
          const mapped = json.data.map((item) => {
            const localMatch = SERVICES_DATA.find(
              (s) => s.name?.toLowerCase() === item.name?.toLowerCase() || s.category?.toLowerCase() === item.category?.toLowerCase()
            );
            return {
              id: item._id || item.id || item.name.toLowerCase().replace(/\s+/g, '-'),
              name: item.name,
              category: item.category || localMatch?.category || 'Custom Stitching',
              image: item.image || localMatch?.image || '/images/blouse.jpg',
              alt: item.name,
              shortDescription: item.description || item.shortDescription || localMatch?.shortDescription || '',
              fullDescription: item.fullDescription || item.description || localMatch?.fullDescription || '',
              features: item.features?.length ? item.features : localMatch?.features || [
                'Bespoke pattern drafting to individual measurements',
                'Reinforced armholes and anti-slip shoulder stay loops',
                'Soft, breathable pre-shrunk inner lining',
                'Complimentary trial fitting & alteration included'
              ],
              popularStyles: item.popularStyles?.length ? item.popularStyles : localMatch?.popularStyles || [],
              recommendedFabrics: item.recommendedFabrics?.length ? item.recommendedFabrics : localMatch?.recommendedFabrics || [
                'Silk', 'Cotton', 'Georgette', 'Velvet', 'Chanderi'
              ]
            };
          });
          setServices(mapped);
        }
      })
      .catch(() => {
        // Fall back gracefully to rich local services
      });
  }, []);

  return (
    <section id="specialities" className="specialities" aria-labelledby="specialities-heading">
      <div className="container">
        <header className="specialities__header">
          <div className="divider">
            <h2 id="specialities-heading" className="section-title">Our Specialities</h2>
          </div>
          <p className="section-subtitle">We stitch your style with care</p>
        </header>

        {/* Services Cards Grid */}
        <div className="specialities__cards-grid" role="list">
          {services.map((service) => (
            <article key={service.id} className="service-card" role="listitem">
              <div className="service-card__image-wrap">
                <img
                  src={service.image}
                  alt={service.alt || service.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/blouse.jpg';
                  }}
                />
              </div>

              <div className="service-card__content">
                <h3 className="service-card__title">{service.name}</h3>
                <p className="service-card__desc">{service.shortDescription}</p>

                {/* Key Features List */}
                {service.features?.length > 0 && (
                  <ul className="service-card__features">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A2E39" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="service-card__actions">
                  <button
                    className="service-card__btn-details"
                    onClick={() => setSelectedService(service)}
                  >
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/917698603287?text=${encodeURIComponent(
                      `Hi Sonali Ladies Tailor! I would like to enquire about custom stitching for "${service.name}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-card__btn-enquire"
                    aria-label={`Enquire about ${service.name} on WhatsApp`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                    </svg>
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Detail Modal (Zero prices and zero working days) */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close details"
            >
              ✕
            </button>

            <div className="service-modal-grid">
              <div className="service-modal-img-wrap">
                <img src={selectedService.image} alt={selectedService.name} />
              </div>

              <div className="service-modal-info">
                <span className="section-label">{selectedService.category}</span>
                <h3 className="service-modal-title">{selectedService.name}</h3>
                
                <p className="service-modal-desc">{selectedService.fullDescription || selectedService.shortDescription}</p>

                {selectedService.popularStyles?.length > 0 && (
                  <div className="service-modal-block">
                    <h4>Popular Styles & Patterns:</h4>
                    <div className="service-tags-wrap">
                      {selectedService.popularStyles.map((st, i) => (
                        <span key={i} className="service-tag">{st}</span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService.recommendedFabrics?.length > 0 && (
                  <div className="service-modal-block">
                    <h4>Recommended Fabrics:</h4>
                    <div className="service-tags-wrap">
                      {selectedService.recommendedFabrics.map((fb, i) => (
                        <span key={i} className="service-tag service-tag--fabric">{fb}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="service-modal-block">
                  <h4>What We Ensure:</h4>
                  <ul className="service-modal-bullets">
                    {selectedService.features?.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                    <li>Complimentary trial fitting & fine adjustments</li>
                    <li>Reinforced lock stitching for lasting durability</li>
                  </ul>
                </div>

                <div className="service-modal-cta">
                  <a
                    href={`https://wa.me/917698603287?text=${encodeURIComponent(
                      `Hi Sonali Tailor, I am interested in getting "${selectedService.name}" custom stitched. Please guide me on next steps!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta-btn"
                  >
                    Discuss Design on WhatsApp
                  </a>
                  <a href="tel:+917698603287" className="modal-cta-call">
                    Call: +91 76986 03287
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
