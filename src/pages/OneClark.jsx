import React from 'react';
import { Users, BookOpen, Search, Heart, Award, Shield } from 'lucide-react';
import Button from '../components/UI/Button';

export default function OneClark() {
  
  const inclusionPillars = [
    {
      title: "Culture",
      desc: "We welcome employees and project partners from all backgrounds and cultivate a respectful workplace.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400",
      icon: <Heart size={20} color="var(--primary)" />
    },
    {
      title: "Growth",
      desc: "We are passionate about attracting, retaining, growing, and promoting a mix of talent at all levels of our organization.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      icon: <Award size={20} color="var(--primary)" />
    },
    {
      title: "Resources",
      desc: "We equip employees with resources to foster collaboration across diverse perspectives and regularly review our benefits programs and workplace policies.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400",
      icon: <Shield size={20} color="var(--primary)" />
    },
    {
      title: "Engagement",
      desc: "We provide diverse pathways to pursuing careers through partnerships with trade schools, high schools, colleges, and non-profit organizations.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400",
      icon: <Users size={20} color="var(--primary)" />
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600"
            alt="OneClark group collaboration meeting"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              A Career Worth Building &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>#OneClark</span>
            </span>
            <h1 className="page-hero-title">#OneClark</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              Attracting and retaining the best talent from all backgrounds is essential to our mission of building what matters, together. By harnessing different perspectives, there is nothing our team cannot achieve.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Our Core Framework</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>A Shared Foundation of Trust</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Our #OneClark approach is centered around four key areas: culture, growth, resources, and engagement.
            </p>
          </div>

          {/* Inclusion Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {inclusionPillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  const img = e.currentTarget.querySelector('.pillar-img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  const img = e.currentTarget.querySelector('.pillar-img');
                  if (img) img.style.transform = 'none';
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="pillar-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-slow)' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to top, rgba(8, 10, 16, 0.7) 0%, transparent 60%)'
                  }} />
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(217, 119, 6, 0.05)',
                      border: '1px solid rgba(217, 119, 6, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {p.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: '#FFF', fontWeight: 700 }}>{p.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership Callout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{
            backgroundColor: 'rgba(15, 19, 30, 0.7)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid var(--primary)',
            padding: '40px',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-glow), var(--shadow-premium)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}>
            <BookOpen size={36} color="var(--primary)" />
            <h3 style={{ color: '#FFF', fontSize: '1.6rem', fontWeight: 800 }}>Business Partnerships</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px' }}>
              Company-led programs like our Strategic Partnership Program help expand the capability and capacity of small businesses.
            </p>
            <Button to="/business/strategic-partnership" variant="primary">
              LEARN ABOUT OUR STRATEGIC PARTNERSHIP PROGRAM
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Tagline Display */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '3.5rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            margin: 0
          }} className="text-gradient">
            We are #OneClark
          </h2>
        </div>
      </section>

      {/* Join the Clark Team */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '650px' }}>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '16px' }}>Join the Clark Team</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.6' }}>
            We’re always looking for ambitious team members to build what matters.
          </p>
          <Button to="/careers/search-apply" variant="primary" size="lg" icon={Search}>
            search & apply
          </Button>
        </div>
      </section>
    </div>
  );
}
