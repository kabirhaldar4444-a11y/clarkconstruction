import React from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Heart, Building, Award, ShieldAlert, HeartPulse, Compass } from 'lucide-react';

export default function BuildingWhatMatters() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1600"
            alt="Eco-building models, green wood"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Our Mission</span>
          <h1 className="page-hero-title">Building What Matters</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            We build the hospitals, transport hubs, museums, and educational centers that form the backbone of American communities.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="subtitle-amber">Guiding Philosophy</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Beyond Concrete and Steel</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
              At Clark Construction, our purpose is simple: to build what matters. We understand that a building is more than its structural elements—it is a place where lives are saved, futures are shaped, and communities connect.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              Whether we are upgrading passenger gates at LAX, reinforcing the foundations of Walter Reed Medical Center, or erecting the Smithsonian National Museum of African American History, our focus is on building resilient structures that serve the public with distinction.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
          }}>
            {[
              {
                icon: <HeartPulse size={24} color="var(--primary)" />,
                title: "Resilient Healthcare Infrastructures",
                desc: "We construct advanced hospital wings, clean labs, and clinical care systems that are ready to serve under any conditions."
              },
              {
                icon: <Compass size={24} color="var(--primary)" />,
                title: "Vital Transit Connections",
                desc: "From airport terminals to mass rail grids, our heavy civil works ensure millions of travelers arrive safely every single day."
              },
              {
                icon: <Award size={24} color="var(--primary)" />,
                title: "Cultural & Civic Monuments",
                desc: "We build and restore the national museums, sports stadiums, and historic structures that define our common heritage."
              }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  padding: '24px',
                  borderRadius: '6px',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(217,119,6,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '6px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project redirection panel */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="subtitle-amber">Projects Gallery</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '16px' }}>Explore Our Work</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              See how our core values translate into practice across 26 real-world project portfolios. Filter by healthcare, sports, museums, and education.
            </p>
          </div>
          <Button to="/projects" variant="primary" size="lg">
            View Project Portfolios
          </Button>
        </div>
      </section>
    </div>
  );
}
