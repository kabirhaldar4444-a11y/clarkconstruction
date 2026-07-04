import React from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Leaf, Users, ShieldAlert, Award, Heart, HeartPulse } from 'lucide-react';

export default function CorporateResponsibility() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
            alt="Eco-friendly landscaping construction site"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">About Us &gt; Corporate Responsibility</span>
          <h1 className="page-hero-title">Corporate Responsibility</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Building what matters means having a positive impact beyond the world-class assets we deliver. We are committed to fostering meaningful change within our industry and communities.
          </p>
        </div>
      </section>

      {/* Economic Empowerment */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="subtitle-amber">Workforce & Growth</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Economic Empowerment</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>
              The projects we build represent pathways to economic growth through contracting and job opportunities. We develop the next generation of our industry's workforce through recruitment, pre-apprenticeship programs, mentoring, and on-the-job training.
            </p>
            <Button to="/business/strategic-partnership" variant="primary">
              Our Strategic Partnership Program
            </Button>
          </div>

          {/* Small Business Efforts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '10px' }}>Our Small Business Efforts Include:</h3>
            {[
              {
                title: "Strategic Partnership Program",
                desc: "Helps grow the capability and capacity of small businesses through MBA-style executive training courses."
              },
              {
                title: "SDBE15 Commitment",
                desc: "Clark's pledge to achieving at least 15 percent small business participation across all of our active construction projects."
              },
              {
                title: "SDBX Platform",
                desc: "Connects local certified firms with upcoming bidding opportunities to build with Clark, and provides networking with local certifying agencies and professional services experts."
              }
            ].map((effort, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '6px' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>{effort.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{effort.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Sustainability Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                title: "Industry Leadership and Education",
                desc: "Through partnerships with USGBC, the Institute for Market Transformation, FitWel, and more, we promote best practices in green construction."
              },
              {
                title: "Sustainable Building Practices",
                desc: "We leverage our experience to manage and reduce environmental impacts on jobsites, including controlling runoff, minimizing operational carbon, and recycling construction waste and debris."
              },
              {
                title: "Advisory Services",
                desc: "We help our clients navigate the complexities of bringing high-performing buildings to fruition."
              }
            ].map((pillar, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-deep)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '6px' }}>
                <h4 style={{ color: '#FFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>{pillar.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <span className="subtitle-amber">ESG Strategy</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Sustainability</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Building healthy and resilient communities creates a more prosperous future. We develop innovative, environmentally conscious, and practical solutions that support our company’s and clients’ goals.
            </p>
            <Button to="/sustainability" variant="outline">
              Learn More About Sustainability
            </Button>
          </div>
        </div>
      </section>

      {/* Community Engagement & #OneClark */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            {/* Community Engagement */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '40px', borderRadius: '6px' }}>
              <span className="subtitle-amber">Acts of Service</span>
              <h3 style={{ color: '#FFF', fontSize: '1.8rem', marginBottom: '16px' }}>Community Engagement</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.7', marginBottom: '20px' }}>
                We believe in building community beyond the jobsite. At Clark, we cultivate deep and lasting relationships with the communities where we live and build.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Giving Back</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>From serving meals to renovating homes to cleaning up parks, our employees are passionate about building better communities through acts of service.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Being a Respectful Neighbor</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>We promote trust and transparency by actively engaging and communicating with residents, businesses, and community groups to understand their needs and concerns.</p>
                </div>
              </div>
            </div>

            {/* We Are #OneClark */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '40px', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="subtitle-amber">Inclusion & Respect</span>
              <h3 style={{ color: '#FFF', fontSize: '1.8rem', marginBottom: '16px' }}>We Are #OneClark</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.7', marginBottom: '24px' }}>
                By embracing uniqueness, fostering a culture of respect, and engaging our employees and partners, we provide an environment where everyone can thrive as individuals and succeed together as #OneClark.
              </p>
              <Button to="/careers/one-clark" variant="primary">
                Learn More about #OneClark
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
