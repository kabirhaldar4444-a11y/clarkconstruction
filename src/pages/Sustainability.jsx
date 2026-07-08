import React from 'react';
import { Leaf, Award, Recycle, Sun, CloudRain, HardHat } from 'lucide-react';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import Card from '../components/UI/Card';

const HIGHLIGHTS = [
  {
    icon: <Leaf size={24} color="var(--primary)" />,
    title: "Low-Carbon Cement & Concrete",
    desc: "By injecting carbon dioxide directly during the wet concrete mixing phase, we lock in greenhouse gases permanently, yielding a 25% net drop in foundation carbon footprint."
  },
  {
    icon: <Recycle size={24} color="var(--primary)" />,
    title: "Circular Waste Management",
    desc: "We enforce strict debris separation rules. 85% of wood scraps, metal filings, concrete chunks, and soil is diverted from landfills to regional recycling facilities."
  },
  {
    icon: <Sun size={24} color="var(--primary)" />,
    title: "Micro-Grid Energy Harvesting",
    desc: "We integrate photovoltaic solar tiles, battery banks, and smart energy routers directly into building design specs, making corporate structures self-sustaining."
  },
  {
    icon: <CloudRain size={24} color="var(--primary)" />,
    title: "Rainwater Harvesting & Recycling",
    desc: "We engineer rooftop collection cisterns and bio-swale landscape filters that process runoff on-site, cutting municipal water demand by 45%."
  }
];

export default function Sustainability() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600"
            alt="Eco-friendly timber framed townhouses"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">ESG & Green Building</span>
          <h1 className="page-hero-title">Our Sustainability</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            We engineer structures that respect environmental boundaries, targeting carbon neutral operations by 2030.
          </p>
        </div>
      </section>

      {/* Intro Commitment Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="subtitle-amber">Our Carbon Pledge</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ecosystem Preservation Through Engineering</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Construction accounts for nearly 40% of global greenhouse emissions. As general contractors and structural engineers, Clark Construction is committed to driving that number down. We actively spec Cross-Laminated Timber (CLT) instead of standard carbon-heavy steel framing, and enforce green supply chains.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '24px' }}>
              We partner with local environmental agencies to restore surrounding soil and flora during heavy civil excavations, creating sustainable bio-diversity pathways.
            </p>
          </div>

          {/* Interactive Stats Dashboard */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '40px',
            boxShadow: 'var(--shadow-premium)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px'
          }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>
                <AnimatedCounter end={85} suffix="%" />
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Site Waste Diverted</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>
                <AnimatedCounter end={75} suffix="+" />
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LEED Registered Sites</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>
                <AnimatedCounter end={25} suffix="%" />
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CO2 Concrete Drop</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>
                <AnimatedCounter end={50} suffix="MW" />
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solar Grid Output</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">ESG Strategy</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Core Eco Pillars</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              How we modify standard general contracting rules to meet the rigid demands of local municipal climate codes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  padding: '30px',
                  borderRadius: '6px',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(217,119,6,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.15rem', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Project Spotlights */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Showcases</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>LEED Highlights</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Case studies showcasing how Clark Construction delivers premium structural projects with green technology.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <Card
              image="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800"
              title="Cascade Heights Eco Blocks"
              subtitle="LEED Platinum Certified"
              tag="Portland, OR"
              hoverEffect="zoom"
            >
              Constructed a multi-family townhouse community built completely from Cross-Laminated Timber (CLT). Features integrated graywater reclamation and solar shingles.
            </Card>

            <Card
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
              title="Clark Corporate Skyscraper"
              subtitle="LEED Gold Target"
              tag="Chicago, IL"
              hoverEffect="zoom"
            >
              A 45-story tower incorporating double-glazed insulated envelope bands and energy harvesting rooftop turbines, saving 25% of baseline municipal energy drafts.
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
