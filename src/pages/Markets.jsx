import React, { useState } from 'react';
import {
  Building2, HardHat, Landmark, GraduationCap, Shield, HeartPulse,
  Hotel, Layers, Scale, Compass, Building, History, Home,
  Atom, Activity, Trophy, Cpu
} from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

// Asset Imports
import MarketHeroImg from '../assets/Market hero image.png';
import WharfBuildingImg from '../assets/The Wharf Marine Infrastructure & Buildings.jpg';
import WharfInfraImg from '../assets/The Wharf Infrastructure.jpg';
import ConventionCenterImg from '../assets/Los Angeles Convention Center Expansion.jpg';
import IdeaFactoryImg from '../assets/IDEA Factory Education.png';
import GovtFbiImg from '../assets/Govt - FBI Central Records Complex Government.jpg';
import UmCapitalImg from '../assets/Inova Schar Cancer Institute.jpg';
import PresidentialSuiteImg from '../assets/Presidential Bathroom Suite Hospitality.png';
import RestonGatewayImg from '../assets/Interiors & Tenant Fit-Out - Reston Gateway.png';
import JudicialImg from '../assets/Department of Homeland Security Facilities.jpg';
import MuseumsMonumentsImg from '../assets/Museums & Monuments.png';
import MidtownCenterImg from '../assets/midtown center Office.jpg';
import KiaForumImg from '../assets/The Kia Forum Renovation & Historic Preservation.png';
import ParklineChicagoImg from '../assets/Parkline in Chicago Residential & Mixed-Use.jpg';
import ArgonneScienceImg from '../assets/Argonne Science.png';
import BaseIsolatorImg from '../assets/Base isolator at LACMA Seismic.png';
import SportsEntertainmentImg from '../assets/Sports & Entertainment.jpg';
import FbiRobotsImg from '../assets/FBI Central Records Complex robots Technology.png';

const SECTORS = [
  {
    market: "Building",
    project: "The Wharf",
    desc: "Delivering large-scale, complex building structures that form the foundations of modern communities.",
    bgImage: WharfBuildingImg,
    category: "Commercial & Mixed-Use",
    icon: <Building2 size={20} color="var(--primary)" />
  },
  {
    market: "Infrastructure",
    project: "The Wharf",
    desc: "Engineering and constructing robust heavy civil infrastructure, bridge networks, and marine systems.",
    bgImage: WharfInfraImg,
    category: "Infrastructure & Tech",
    icon: <HardHat size={20} color="var(--primary)" />
  },
  {
    market: "Convention Centers",
    project: "Convention Center",
    desc: "Creating massive, high-capacity venues with flexible spaces and modern structural designs.",
    bgImage: ConventionCenterImg,
    category: "Infrastructure & Tech",
    icon: <Landmark size={20} color="var(--primary)" />
  },
  {
    market: "Education",
    project: "IDEA Factory",
    desc: "Building state-of-the-art educational spaces, research laboratories, and academic halls.",
    bgImage: IdeaFactoryImg,
    category: "Public & Institutional",
    icon: <GraduationCap size={20} color="var(--primary)" />
  },
  {
    market: "Government",
    project: "Govt - FBI Central Records Complex",
    desc: "Constructing highly secure, mission-critical federal facilities and administrative offices.",
    bgImage: GovtFbiImg,
    category: "Public & Institutional",
    icon: <Shield size={20} color="var(--primary)" />
  },
  {
    market: "Healthcare",
    project: "UM Capital Region Medical Center",
    desc: "Developing advanced medical complexes, high-reliability utility systems, and patient care spaces.",
    bgImage: UmCapitalImg,
    category: "Public & Institutional",
    icon: <HeartPulse size={20} color="var(--primary)" />
  },
  {
    market: "Hospitality",
    project: "Presidential Bathroom Suite",
    desc: "A part of Clark's hospitality portfolio, the presidential bathroom suite includes a freestanding tub with windows overlooking downtown Chicago.",
    bgImage: PresidentialSuiteImg,
    category: "Commercial & Mixed-Use",
    icon: <Hotel size={20} color="var(--primary)" />
  },
  {
    market: "Interiors & Tenant Fit-Out",
    project: "Interiors & Tenant Fit-Out - Reston Gateway",
    desc: "Creating customized tenant fit-outs and high-end workspaces optimized for collaboration.",
    bgImage: RestonGatewayImg,
    category: "Commercial & Mixed-Use",
    icon: <Layers size={20} color="var(--primary)" />
  },
  {
    market: "Judicial & Correctional",
    project: "Howard County Circuit Courthouse",
    desc: "Constructing modern, secure courthouses and correctional structures with specialized systems.",
    bgImage: JudicialImg,
    category: "Public & Institutional",
    icon: <Scale size={20} color="var(--primary)" />
  },
  {
    market: "Museums & Monuments",
    project: "Smithsonian's National Air and Space Museum",
    desc: "Silver airplanes are suspended in the air in an atrium of the Smithsonian's National Air and Space Museum.",
    bgImage: MuseumsMonumentsImg,
    category: "Public & Institutional",
    icon: <Compass size={20} color="var(--primary)" />
  },
  {
    market: "Office",
    project: "midtown center",
    desc: "Constructing premium glass-faced corporate office towers and sustainable urban developments.",
    bgImage: MidtownCenterImg,
    category: "Commercial & Mixed-Use",
    icon: <Building size={20} color="var(--primary)" />
  },
  {
    market: "Renovation & Historic Preservation",
    project: "The Kia Forum",
    desc: "Restoring and upgrading historic landmarks, combining classical form with modern structural integrity.",
    bgImage: KiaForumImg,
    category: "Specialized & Renovation",
    icon: <History size={20} color="var(--primary)" />
  },
  {
    market: "Residential & Mixed-Use",
    project: "Parkline in Chicago",
    desc: "The interior of the residential building Parkline in Chicago with couches, chairs, and overhead lighting.",
    bgImage: ParklineChicagoImg,
    category: "Commercial & Mixed-Use",
    icon: <Home size={20} color="var(--primary)" />
  },
  {
    market: "Science",
    project: "Argonne",
    desc: "Building high-tech laboratories, clean rooms, and computing facilities for scientific innovation.",
    bgImage: ArgonneScienceImg,
    category: "Infrastructure & Tech",
    icon: <Atom size={20} color="var(--primary)" />
  },
  {
    market: "Seismic",
    project: "Base isolator at LACMA",
    desc: "Implementing advanced seismic base isolators and engineering retrofits to secure public infrastructure.",
    bgImage: BaseIsolatorImg,
    category: "Specialized & Renovation",
    icon: <Activity size={20} color="var(--primary)" />
  },
  {
    market: "Sports & Entertainment",
    project: "Chase Center",
    desc: "Chase Center basketball court during a game, featuring world-class sports facilities.",
    bgImage: SportsEntertainmentImg,
    category: "Infrastructure & Tech",
    icon: <Trophy size={20} color="var(--primary)" />
  },
  {
    market: "Technology",
    project: "FBI Central Records Complex robots",
    desc: "FBI Central Records Complex robots operating in automated, tech-driven workspaces.",
    bgImage: FbiRobotsImg,
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
            src={MarketHeroImg}
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
                    backgroundColor: isActive ? 'var(--primary)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                    border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                    padding: '10px 22px',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: isActive ? '0 4px 14px rgba(13, 26, 99, 0.25)' : '0 1px 3px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.backgroundColor = 'rgba(13, 26, 99, 0.08)';
                      e.currentTarget.style.color = 'var(--primary)';
                      const badge = e.currentTarget.querySelector('.market-pill-badge');
                      if (badge) {
                        badge.style.backgroundColor = 'var(--primary)';
                        badge.style.color = '#FFFFFF';
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      const badge = e.currentTarget.querySelector('.market-pill-badge');
                      if (badge) {
                        badge.style.backgroundColor = '#F1F5F9';
                        badge.style.color = 'var(--text-muted)';
                      }
                    }
                  }}
                >
                  <span>{category}</span>
                  <span 
                    className="market-pill-badge"
                    style={{
                      fontSize: '0.75rem',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.22)' : '#F1F5F9',
                      color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      transition: 'all 0.2s ease'
                    }}
                  >
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

