import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Compass, Building, Briefcase, Users, FileText, Globe, Layers, ArrowUpRight, CheckCircle, ShieldCheck, Heart } from 'lucide-react';
import Button from '../components/UI/Button';
import HeroBg from '../assets/1900 K Street Office Tower.jpg';

export default function Sitemap() {
  const [searchQuery, setSearchQuery] = useState('');

  const sitemapData = [
    {
      category: "Main & Corporate Overview",
      icon: Building,
      badge: "Core Navigation",
      links: [
        { title: "Home Page", path: "/", desc: "Clark Construction corporate homepage, featured sectors, highlights & credentials" },
        { title: "About Clark", path: "/about", desc: "Corporate overview, mission, leadership, and operational heritage" },
        { title: "Our Story & History", path: "/about/our-story", desc: "Decades of milestone projects shaping national skylines and infrastructure" },
        { title: "Operating Companies", path: "/about/companies", desc: "Clark Civil, Clark Concrete, Clark Foundations, C3M Power Systems & Atkinson" },
        { title: "Corporate Responsibility", path: "/about/corporate-responsibility", desc: "Community workforce investments, diversity pledges, and philanthropy" },
        { title: "Building What Matters", path: "/about/building-what-matters", desc: "Our core ethos and long-term societal impact" },
        { title: "India Partnerships", path: "/about/india-partnerships", desc: "Strategic joint ventures, global engineering hubs, and international delivery" }
      ]
    },
    {
      category: "Our Work & Markets",
      icon: Layers,
      badge: "Projects & Capabilities",
      links: [
        { title: "Markets Overview", path: "/our-work/markets", desc: "Aviation, healthcare, commercial, science & tech, transit and public infrastructure" },
        { title: "Expertise & Services", path: "/our-work/expertise", desc: "Preconstruction, General Contracting, Virtual Design (BIM), Self-Perform and MEP" },
        { title: "Featured Projects Directory", path: "/our-work/projects", desc: "Searchable portfolio of landmark national and regional construction builds" },
        { title: "Chenab Rail Bridge (USBRL)", path: "/our-work/projects/chenab-bridge", desc: "The world's highest railway arch bridge engineering showcase" },
        { title: "LAX Midfield Satellite Concourse", path: "/our-work/projects/lax-midfield", desc: "Major airport expansion and world-class passenger terminal" },
        { title: "Capital One Arena Modernization", path: "/our-work/projects/capital-one-arena", desc: "Fast-track downtown sports & entertainment facility transformation" },
        { title: "The Wharf Marine & Buildings", path: "/our-work/projects/the-wharf", desc: "Massive mixed-use waterfront revitalization in Washington, DC" },
        { title: "Sustainability & Green Building", path: "/sustainability", desc: "LEED certification, embodied carbon reduction, and renewable energy builds" }
      ]
    },
    {
      category: "Business With Us",
      icon: Briefcase,
      badge: "Partners & Procurement",
      links: [
        { title: "Strategic Partnership Program (SPP)", path: "/business/strategic-partnership", desc: "Executive MBA-style training and development for diverse small business enterprises" },
        { title: "Suppliers & Vendors", path: "/business/suppliers", desc: "Material procurement standards, supplier diversity, and supply chain onboarding" },
        { title: "Trade Contractors & Bidding", path: "/business/trade-contractors", desc: "Subcontractor prequalification, safety standards (EMR), and bidding portals" }
      ]
    },
    {
      category: "Careers & Culture",
      icon: Users,
      badge: "Talent & Opportunities",
      links: [
        { title: "Careers Home & Job Search", path: "/careers", desc: "Explore open project management, engineering, and craft opportunities nationwide" },
        { title: "Search & Apply Portal", path: "/careers/search-apply", desc: "Direct portal to submit resumes and apply for active positions" },
        { title: "Life at Clark", path: "/careers/life-at-clark", desc: "Workplace culture, employee benefits, wellness programs, and community days" },
        { title: "One Clark Philosophy", path: "/careers/one-clark", desc: "Our collaborative team ethos across corporate and jobsite operations" },
        { title: "Recent Graduates & Internships", path: "/careers/recent-graduates", desc: "VDC internships, field engineer bootcamps, and campus recruiting" }
      ]
    },
    {
      category: "News, Media & Contact",
      icon: Globe,
      badge: "Communications",
      links: [
        { title: "Company News & Press Releases", path: "/news", desc: "Latest project groundbreakings, industry awards, and technology rollouts" },
        { title: "Contact Corporate Headquarters", path: "/contact", desc: "Regional office directory, media inquiries, and general contact forms" }
      ]
    },
    {
      category: "Legal & Digital Governance",
      icon: ShieldCheck,
      badge: "Compliance",
      links: [
        { title: "Privacy Policy", path: "/privacy-policy", desc: "Data protection standards, CCPA/GDPR compliance, and privacy officer contact" },
        { title: "Terms of Use", path: "/terms-of-use", desc: "Digital platform terms, intellectual property, and subcontractor portal terms" },
        { title: "Accessibility Statement", path: "/accessibility", desc: "WCAG 2.1 AA compliance, assistive technology support, and feedback reporting" },
        { title: "Sitemap Directory", path: "/sitemap", desc: "Complete directory of all indexable pages across Clark Construction Group" }
      ]
    }
  ];

  // Filtered categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return sitemapData;
    const q = searchQuery.toLowerCase();

    return sitemapData
      .map((cat) => ({
        ...cat,
        links: cat.links.filter(
          (link) =>
            link.title.toLowerCase().includes(q) ||
            link.desc.toLowerCase().includes(q) ||
            link.path.toLowerCase().includes(q)
        )
      }))
      .filter((cat) => cat.links.length > 0);
  }, [searchQuery, sitemapData]);

  const totalLinks = sitemapData.reduce((acc, cat) => acc + cat.links.length, 0);

  return (
    <div className="sitemap-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={HeroBg}
            alt="Clark Construction project skyline"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Directory & Navigation &gt; Sitemap</span>
          <h1 className="page-hero-title">Website Sitemap</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Comprehensive directory of all sections, services, project portfolio highlights, trade contractor portals, and career resources.
          </p>
        </div>
      </section>

      {/* Interactive Search & Summary Bar */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)', padding: '28px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Compass size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Indexed Destinations</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-white)' }}>
                {totalLinks} Verified Web Pages & Portals
              </div>
            </div>
          </div>

          {/* Quick Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
            <Search
              size={18}
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
            />
            <input
              type="text"
              placeholder="Search pages (e.g., BIM, concrete, careers, terms)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: '44px', paddingRight: '16px', borderRadius: '9999px', fontSize: '0.9rem' }}
            />
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <Compass size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '8px' }}>No matching pages found</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                We couldn't find any pages matching "{searchQuery}". Try searching for terms like "Services", "Projects", "Careers", or "Legal".
              </p>
              <Button onClick={() => setSearchQuery('')} variant="outline">
                Clear Search Filter
              </Button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
              {filteredCategories.map((group, groupIdx) => {
                const IconComponent = group.icon;
                return (
                  <div
                    key={groupIdx}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-premium)',
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Category Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                          <IconComponent size={20} />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-white)', margin: 0, fontWeight: 700 }}>
                          {group.category}
                        </h3>
                      </div>
                      <span className="saas-pill-badge" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>
                        {group.badge}
                      </span>
                    </div>

                    {/* Links List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                      {group.links.map((link, linkIdx) => (
                        <Link
                          key={linkIdx}
                          to={link.path}
                          style={{
                            display: 'block',
                            padding: '12px 14px',
                            borderRadius: '8px',
                            backgroundColor: 'var(--bg-deep)',
                            border: '1px solid transparent',
                            transition: 'var(--transition-fast)'
                          }}
                          className="sitemap-link-card"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-white)' }} className="sitemap-link-title">
                              {link.title}
                            </span>
                            <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} className="sitemap-link-icon" />
                          </div>
                          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                            {link.desc}
                          </p>
                          <div style={{ fontSize: '0.75rem', color: 'var(--accent-cobalt)', marginTop: '6px', fontFamily: 'monospace' }}>
                            {link.path}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .sitemap-link-card:hover {
          background-color: #FFFFFF !important;
          border-color: var(--primary) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-premium);
        }
        .sitemap-link-card:hover .sitemap-link-title {
          color: var(--primary) !important;
        }
        .sitemap-link-card:hover .sitemap-link-icon {
          color: var(--primary) !important;
          transform: translate(2px, -2px);
        }
      `}</style>
    </div>
  );
}
