import React from 'react';
import './Hero.css';

const BENEFITS = [
  {
    id: 'custom-stitching',
    title: 'Custom Stitching',
    desc: 'Perfect fit for every occasion',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    id: 'expert-tailoring',
    title: 'Expert Tailoring',
    desc: 'With years of experience',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="18" cy="18" r="3"/>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L4 4"/>
      </svg>
    ),
  },
  {
    id: 'quality-work',
    title: 'Quality Work',
    desc: 'Neat finishing & attention to detail',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    id: 'personalized-designs',
    title: 'Personalized Designs',
    desc: 'As per your style & preference',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function Hero() {
  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.querySelector('#specialities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Welcome hero section">
      {/* Top Banner Row */}
      <div className="hero__banner">
        <div className="container">
          <div className="hero__inner">

            {/* Left: Text content */}
            <div className="hero__content">
              <p className="hero__eyebrow">Welcome To</p>
              <h1 className="hero__heading">Sonali Ladies Tailor</h1>
              <p className="hero__tagline">Stitching Your Dreams, One Outfit at a Time</p>
              <p className="hero__description">
                We specialize in custom stitching for ladies wear — from beautiful blouses to elegant
                dresses, suits, kurtis and more. With care, creativity and perfect fitting, we bring
                your style to life.
              </p>
              <a href="#specialities" className="hero__btn" onClick={scrollToServices}>
                Explore Our Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

            {/* Right: Studio visual */}
            <div className="hero__image-col">
              <div className="hero__image-wrapper">
                <img
                  src="/images/sonali-shop.jpg"
                  alt="Sonali Ladies Tailor Studio — sewing workstations, colorful fabrics and designer mannequins"
                  className="hero__image"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/bridal_lehenga.jpg';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Merged Benefits Strip directly integrated at bottom of hero */}
      <div className="hero__benefits-strip" aria-label="Why choose our tailoring">
        <div className="container">
          <div className="hero__benefits-grid">
            {BENEFITS.map(({ id, title, desc, icon }) => (
              <div className="hero__benefit-item" key={id}>
                <div className="hero__benefit-icon" aria-hidden="true">
                  {icon}
                </div>
                <div className="hero__benefit-text">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
