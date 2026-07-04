import React, { useState } from 'react';
import { Target, Compass, Sparkles, Handshake, Users, ShieldAlert, Award, Calendar } from 'lucide-react';
import Button from '../components/UI/Button';

const VALUES = [
  {
    icon: <Target size={32} color="var(--primary)" />,
    title: "Precision Execution",
    desc: "We plan, estimate, and build to tight tolerances. Close coordination ensures our concrete, steel, and timber systems align with CAD specifications."
  },
  {
    icon: <Compass size={32} color="var(--primary)" />,
    title: "Safety Integrity",
    desc: "Safety is not an afterthought. We train, enforce, and audit so that every craftsman returns home safely at the end of every single shift."
  },
  {
    icon: <Sparkles size={32} color="var(--primary)" />,
    title: "Digital Innovation",
    desc: "We leverage drone topography scans, VR clash detection, and BIM metadata to drive efficiency and reduce field waste."
  },
  {
    icon: <Handshake size={32} color="var(--primary)" />,
    title: "Eco Stewardship",
    desc: "We engineer circular material pipelines, reduce site carbon outputs, and construct structures targeting LEED Gold or Platinum ratings."
  }
];

const HISTORY = [
  {
    year: "1976",
    title: "Foundation of Clark Construction",
    desc: "Started as a regional paving and concrete contractor in Seattle, WA, with just a single dump truck and a crew of five."
  },
  {
    year: "1988",
    title: "Civil Infrastructure Expansion",
    desc: "Won first municipal contract to build state bridge links, establishing ourselves as a premier civil contractor."
  },
  {
    year: "2002",
    title: "High-Rise Commercial Entry",
    desc: "Completed the Clark Plaza corporate headquarters, launching our high-rise construction division."
  },
  {
    year: "2015",
    title: "BIM & Virtual Construction Integration",
    desc: "Mandated Virtual Design and Construction (VDC) workflows across all projects, lowering schedule deviations by 40%."
  },
  {
    year: "2024",
    title: "Zero Carbon Pledge & Clean Tech",
    desc: "Committed to carbon-neutral site operations by 2030, partnering with clean concrete developers."
  }
];

const LEADERS = [
  {
    name: "Marcus Sterling",
    role: "Chief Executive Officer & Founder",
    school: "M.S. Civil Engineering, Stanford University",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    bio: "Marcus has steered Clark Construction for over 30 years, transitioning it from a concrete paving business into a national infrastructure leader."
  },
  {
    name: "Elena Rostova",
    role: "Chief Operating Officer",
    school: "B.S. Construction Management, Georgia Tech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    bio: "Elena oversees all regional divisions and active project managers. She specializes in large-scale transit and airport expansions."
  },
  {
    name: "Thomas Drake",
    role: "VP of Estimating & Preconstruction",
    school: "B.S. Quantity Surveying, MIT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
    bio: "Thomas leads our preconstruction phase, using algorithmic modeling and historical indices to draft exact project estimates."
  },
  {
    name: "Sarah Kim",
    role: "Director of VDC & BIM Systems",
    school: "M.Arch, UC Berkeley",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
    bio: "Sarah integrates virtual modeling pipelines, cloud coordinates, and robotic site layouts to prevent construction design clashes."
  }
];

export default function About() {
  const [selectedHistory, setSelectedHistory] = useState(0);

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600"
            alt="Clark Construction metal scaffolding"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Legacy of Structure</span>
          <h1 className="page-hero-title">About Our Company</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            We combine standard construction principles with modern technologies to deliver complex structures that stand the test of time.
          </p>
        </div>
      </section>

      {/* Overview Block */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="subtitle-amber">Company Overview</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Driven by Rigor, Bound by Honor</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '16px' }}>
              At Clark Construction, we believe constructing a structure means partnering with communities, developers, and local ecosystems. Over 50 years, we have grown from a five-person concrete contractor into a diversified construction management firm delivering skyscrapers, stadiums, and highway networks.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Our clients value us because we build with transparent estimates, deploy virtual models to eliminate field issues, and enforce strict safety requirements.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: '4px', borderLeft: '3px solid var(--primary)' }}>
                <span style={{ fontSize: '1.8rem', color: '#FFF', fontWeight: 800 }}>98%</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>On-Time Delivery Rate</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: '4px', borderLeft: '3px solid var(--primary)' }}>
                <span style={{ fontSize: '1.8rem', color: '#FFF', fontWeight: 800 }}>85%</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Repeat Partner Business</p>
              </div>
            </div>
          </div>

          <div className="img-overlay-wrapper" style={{ height: '420px' }}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
              alt="Heavy cranes and construction crew members"
            />
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Our Core Values</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>The Pillars We Stand On</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              These rules guide our foremen, estimators, and engineers through every design challenge and structural placement.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {VALUES.map((val, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  padding: '40px 30px',
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
                <div style={{ marginBottom: '20px' }}>{val.icon}</div>
                <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '12px' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Interactive Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Our Timeline</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our History</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Explore the key milestones that marked the evolution of Clark Construction from a local concrete crew to an industry leader.
            </p>
          </div>

          {/* Timeline selectors */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto 40px auto',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {/* Background Line */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: 0,
              right: 0,
              height: '2px',
              backgroundColor: 'var(--border-color)',
              zIndex: 1,
              display: 'none' // Hidden on mobile, handled dynamically or simplified
            }} className="timeline-line" />

            {HISTORY.map((hist, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHistory(idx)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  backgroundColor: selectedHistory === idx ? 'var(--primary)' : 'var(--bg-card)',
                  border: '1px solid',
                  borderColor: selectedHistory === idx ? 'var(--primary)' : 'var(--border-color)',
                  color: selectedHistory === idx ? '#FFF' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  zIndex: 2,
                  transition: 'var(--transition-fast)'
                }}
              >
                {hist.year}
              </button>
            ))}
          </div>

          {/* Selected History content sheet */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '40px',
            boxShadow: 'var(--shadow-premium)',
            textAlign: 'center'
          }} className="animate-fade">
            <Calendar size={32} color="var(--primary)" style={{ margin: '0 auto 16px auto' }} />
            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', display: 'block', marginBottom: '8px' }}>
              {HISTORY[selectedHistory].year}
            </span>
            <h3 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '16px' }}>
              {HISTORY[selectedHistory].title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              {HISTORY[selectedHistory].desc}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Our Experts</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Leadership Team</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Committed to safe operations, precise modeling, and transparency across every stage of delivery.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px'
          }}>
            {LEADERS.map((leader, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
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
                {/* Photo */}
                <div style={{ width: '100%', paddingTop: '100%', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                {/* Text info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '4px' }}>{leader.name}</h3>
                  <span style={{ display: 'block', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    {leader.role}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '16px', fontStyle: 'italic' }}>
                    {leader.school}
                  </span>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .timeline-line {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
