import React from 'react';
import './Benefits.css';

const BENEFITS = [
  {
    id: 'custom-stitching',
    title: 'Custom Stitching',
    desc: 'Perfect fit for every occasion',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    id: 'personalized-designs',
    title: 'Personalized Designs',
    desc: 'As per your style & preference',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="benefits" aria-label="Why choose us">
      <div className="container">
        <div className="benefits__grid">
          {BENEFITS.map(({ id, title, desc, icon }) => (
            <div className="benefit-item" key={id}>
              <div className="benefit-item__icon" aria-hidden="true">{icon}</div>
              <div className="benefit-item__text">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
