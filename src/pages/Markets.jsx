import React, { useState } from 'react';
import { 
  Building2, HardHat, Landmark, GraduationCap, Shield, HeartPulse, 
  Hotel, Layers, Scale, Compass, Building, History, Home, 
  Atom, Activity, Trophy, Cpu 
} from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const SECTORS = [
  {
    market: "Building",
    project: "The Wharf",
    desc: "Delivering large-scale, complex building structures that form the foundations of modern communities.",
    bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    category: "Commercial & Mixed-Use",
    icon: <Building2 size={20} color="var(--primary)" />
  },
  {
    market: "Infrastructure",
    project: "The Wharf",
    desc: "Engineering and constructing robust heavy civil infrastructure, bridge networks, and marine systems.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    category: "Infrastructure & Tech",
    icon: <HardHat size={20} color="var(--primary)" />
  },
  {
    market: "Convention Centers",
    project: "Convention Center",
    desc: "Creating massive, high-capacity venues with flexible spaces and modern structural designs.",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
    category: "Infrastructure & Tech",
    icon: <Landmark size={20} color="var(--primary)" />
  },
  {
    market: "Education",
    project: "IDEA Factory",
    desc: "Building state-of-the-art educational spaces, research laboratories, and academic halls.",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
    category: "Public & Institutional",
    icon: <GraduationCap size={20} color="var(--primary)" />
  },
  {
    market: "Government",
    project: "Govt - FBI Central Records Complex",
    desc: "Constructing highly secure, mission-critical federal facilities and administrative offices.",
    bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    category: "Public & Institutional",
    icon: <Shield size={20} color="var(--primary)" />
  },
  {
    market: "Healthcare",
    project: "UM Capital Region Medical Center",
    desc: "Developing advanced medical complexes, high-reliability utility systems, and patient care spaces.",
    bgImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800",
    category: "Public & Institutional",
    icon: <HeartPulse size={20} color="var(--primary)" />
  },
  {
    market: "Hospitality",
    project: "Presidential Bathroom Suite",
    desc: "A part of Clark's hospitality portfolio, the presidential bathroom suite includes a freestanding tub with windows overlooking downtown Chicago.",
    bgImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
    category: "Commercial & Mixed-Use",
    icon: <Hotel size={20} color="var(--primary)" />
  },
  {
    market: "Interiors & Tenant Fit-Out",
    project: "Interiors & Tenant Fit-Out - Reston Gateway",
    desc: "Creating customized tenant fit-outs and high-end workspaces optimized for collaboration.",
    bgImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
    category: "Commercial & Mixed-Use",
    icon: <Layers size={20} color="var(--primary)" />
  },
  {
    market: "Judicial & Correctional",
    project: "Howard County Circuit Courthouse",
    desc: "Constructing modern, secure courthouses and correctional structures with specialized systems.",
    bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
    category: "Public & Institutional",
    icon: <Scale size={20} color="var(--primary)" />
  },
  {
    market: "Museums & Monuments",
    project: "Smithsonian's National Air and Space Museum",
    desc: "Silver airplanes are suspended in the air in an atrium of the Smithsonian's National Air and Space Museum.",
    bgImage: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=800",
    category: "Public & Institutional",
    icon: <Compass size={20} color="var(--primary)" />
  },
  {
    market: "Office",
    project: "midtown center",
    desc: "Constructing premium glass-faced corporate office towers and sustainable urban developments.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    category: "Commercial & Mixed-Use",
    icon: <Building size={20} color="var(--primary)" />
  },
  {
    market: "Renovation & Historic Preservation",
    project: "The Kia Forum",
    desc: "Restoring and upgrading historic landmarks, combining classical form with modern structural integrity.",
    bgImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800",
    category: "Specialized & Renovation",
    icon: <History size={20} color="var(--primary)" />
  },
  {
    market: "Residential & Mixed-Use",
    project: "Parkline in Chicago",
    desc: "The interior of the residential building Parkline in Chicago with couches, chairs, and overhead lighting.",
    bgImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
    category: "Commercial & Mixed-Use",
    icon: <Home size={20} color="var(--primary)" />
  },
  {
    market: "Science",
    project: "Argonne",
    desc: "Building high-tech laboratories, clean rooms, and computing facilities for scientific innovation.",
    bgImage: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=800",
    category: "Infrastructure & Tech",
    icon: <Atom size={20} color="var(--primary)" />
  },
  {
    market: "Seismic",
    project: "Base isolator at LACMA",
    desc: "Implementing advanced seismic base isolators and engineering retrofits to secure public infrastructure.",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    category: "Specialized & Renovation",
    icon: <Activity size={20} color="var(--primary)" />
  },
  {
    market: "Sports & Entertainment",
    project: "Chase Center",
    desc: "Chase Center basketball court during a game, featuring world-class sports facilities.",
    bgImage: "https://images.unsplash.com/photo-1504450758481-7338eaa75e61?q=80&w=800",
    category: "Infrastructure & Tech",
    icon: <Trophy size={20} color="var(--primary)" />
  },
  {
    market: "Technology",
    project: "FBI Central Records Complex robots",
    desc: "FBI Central Records Complex robots operating in automated, tech-driven workspaces.",
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
    category: "Infrastructure & Tech",
    icon: <Cpu size={20} color="var(--primary)" />
  }
];

const CATEGORIES = ["All", "Commercial & Mixed-Use", "Public & Institutional", "Infrastructure & Tech", "Specialized & Renovation"];

export default function Markets() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSectors = activeCategory === "All" 
    ? SECTORS 
    : SECTORS.filter(s => s.category === activeCategory);

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
            alt="Commercial construction skyline background"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Our Work &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>Markets</span>
            </span>
            <h1 className="page-hero-title">Markets</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              Clark’s breadth of capabilities ensures that we can meet our clients’ needs every time, on every front.
            </p>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '8px' }}>
              Our portfolio features projects of all sizes and levels of complexity. We can build it all — and we do.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Sectors grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          
          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '50px',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '24px'
          }}>
            {CATEGORIES.map((category) => {
              const count = category === "All" ? SECTORS.length : SECTORS.filter(s => s.category === category).length;
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    backgroundColor: isActive ? 'rgba(217, 119, 6, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                    border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                    padding: '10px 22px',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.color = '#FFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }
                  }}
                >
                  <span>{category}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    backgroundColor: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                    color: isActive ? '#FFF' : 'var(--text-muted)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontWeight: 700
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid Layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
            gap: '30px' 
          }}>
            {filteredSectors.map((sector, i) => (
              <div 
                key={i} 
                className="animate-slide-up" 
                style={{ 
                  animationDelay: `${i * 40}ms`,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Card
                  image={sector.bgImage}
                  title={sector.market}
                  subtitle={sector.project}
                  hoverEffect="glow"
                  tag={sector.category}
                >
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {sector.desc}
                  </p>
                  
                  {/* Decorative Icon overlay indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(217,119,6,0.06)',
                      border: '1px solid rgba(217,119,6,0.2)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {sector.icon}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
                      Clark Operations Certified
                    </span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action panel */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="subtitle-amber">Get in Touch</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '16px' }}>Ready to Partner with Clark?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
              Have a question, or want to get in touch with a member of the Clark team? We’d love to hear from you.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
