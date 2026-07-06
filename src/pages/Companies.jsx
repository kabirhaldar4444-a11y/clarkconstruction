import React from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Building2, ShieldCheck, Hammer, Layers, ShieldAlert, Award } from 'lucide-react';

const COMPANIES_DATABASE = [
  {
    name: "Clark Construction",
    desc: "A leading provider of general contracting, design-build, construction management, and specialty contracting services for building and infrastructure assets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
  },
  {
    name: "Guy F. Atkinson Construction",
    desc: "One of the nation’s most experienced heavy civil contractors. Founded in 1926, Atkinson’s portfolio includes projects across markets, including highways and bridges, mass transit, mining, and tunneling.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800"
  },
  {
    name: "Shirley Contracting Company",
    desc: "Provides comprehensive transportation, heavy civil, and site construction solutions for public and private entities in the Mid-Atlantic region. Since 1974, Shirley has improved the region’s infrastructure by designing and constructing countless miles of roads and hundreds of bridges.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
  },
  {
    name: "C3M Power Systems",
    desc: "A leading electrical contractor that constructs, rehabilitates, and maintains electrical and special systems for railways, airports, highways and utilities nationwide.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800"
  },
  {
    name: "CFP",
    desc: "An award-winning general contractor that specializes in building all things multi-family residential. The company's 60 years of experience delivering projects across the Mid-Atlantic region features a range of product types, including office-to-residential conversions, affordable housing, and market-rate developments.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
  },
  {
    name: "Clark Civil",
    desc: "A leading contractor specializing in all aspects of civil and heavy civil construction. With expertise ranging from self-performance to comprehensive design-build delivery, Clark Civil works with clients to deliver safe and innovative infrastructure that strengthens our communities.",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800"
  },
  {
    name: "Clark Concrete",
    desc: "Self-performs structural concrete work throughout the Mid-Atlantic region. The company offers a range of services, including the scheduling and budgeting of conceptual documents, formwork design and installation, and concrete pouring and finishing.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
  },
  {
    name: "Clark Foundations",
    desc: "Delivers advanced engineering and construction solutions for the most sophisticated excavation support and deep foundations systems. With more than 50 years of experience providing preconstruction, estimating, and self-perform construction services for support of excavation and deep foundations work, Clark Foundations provides project certainty.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800"
  },
  {
    name: "Clark Technologies",
    desc: "A leading builder of data centers and mission critical facilities.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
  },
  {
    name: "Clark Water",
    desc: "Serving as a trusted construction partner to both public and private sector clients, Clark Water specializes in the delivery of water and wastewater infrastructure projects. Clark Water provides a full range of custom planning, design, construction, and construction management services to meet the specialized needs of the community.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800"
  },
  {
    name: "Tekton",
    desc: "Tekton is a full-service, self-perform construction firm specializing in rough carpentry, make-ready services, and a variety of other construction scopes.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
  }
];

export default function Companies() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
            alt="Clark Corporate Glass Skyscraper"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">About Us &gt; Our Companies</span>
          <h1 className="page-hero-title">Our Companies</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Our robust portfolio of companies enables us to serve clients as the most versatile and well-equipped builder in the market.
          </p>
        </div>
      </section>

      {/* Grid Layout for Subsidiaries */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {COMPANIES_DATABASE.map((sub, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <Card
                  image={sub.image}
                  title={sub.name}
                  subtitle="Clark Group Portfolio"
                  hoverEffect="glow"
                >
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {sub.desc}
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <Button variant="text" size="sm" to="/contact">
                      Learn More &rarr;
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
