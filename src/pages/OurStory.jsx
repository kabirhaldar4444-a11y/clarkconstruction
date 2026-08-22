import React, { useState } from 'react';
import { Calendar, Compass, ShieldCheck, Award } from 'lucide-react';
import Button from '../components/UI/Button';
import StoryHeroImg from '../assets/Gemini_Generated_Image_agl3gdagl3gdagl3.png';
import StoryOriginsImg from '../assets/Gemini_Generated_Image_tv3t6etv3t6etv3t.png';

const TIMELINE = [
  {
    year: "1906",
    title: "The George Hyman Construction Company",
    desc: "Founded in Washington, D.C. by George Hyman. The firm immediately established a reputation for building landmarks, laying the foundation of our high-standards culture."
  },
  {
    year: "1969",
    title: "Under New Leadership",
    desc: "A. James Clark, who joined the company as a field engineer in 1950, becomes president and CEO. Under his vision, the firm aggressively expanded civil and commercial markets."
  },
  {
    year: "1977",
    title: "OMNI Construction Founding",
    desc: "Omni Construction was founded to serve commercial office developers in the suburban Mid-Atlantic. It grew to become one of the region's largest general contractors."
  },
  {
    year: "1996",
    title: "Merger into Clark Construction Group",
    desc: "George Hyman Construction and Omni Construction merge under a single banner: Clark Construction Group. This formed a national powerhouse in heavy contracting."
  },
  {
    year: "2006",
    title: "Strategic Partnership Program Launch",
    desc: "Launched our free executive training program to build capabilities for minority- and women-owned subcontractors, driving community growth."
  },
  {
    year: "2026",
    title: "Modern Innovations",
    desc: "Utilizing deep BIM modeling integration, drone laser scans, and low-carbon cement matrices on major stadium and airport expansions nationwide."
  }
];

export default function OurStory() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={StoryHeroImg}
            alt="Historical and modern scaffolding alignment"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Our Legacy</span>
          <h1 className="page-hero-title">Our Story</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            From a local concrete paving contractor in 1906 to a multi-billion dollar national infrastructure group, integrity has steered our course.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="subtitle-amber">Origins</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Over a Century of Engineering Excellence</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Clark Construction Group traces its history to 1906 and the founding of the George Hyman Construction Company. Under the subsequent stewardship of A. James Clark, we expanded our footprint, taking on the nation's most challenging structural engineering projects.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              Today, our teams carry on this legacy of quality. By integrating virtual modeling, prefabrication facilities, and circular materials, we build landmarks that shape community life for decades.
            </p>
          </div>

          <div className="img-overlay-wrapper" style={{ height: '420px' }}>
            <img
              src={StoryOriginsImg}
              alt="Vintage blueprint and construction layout"
            />
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Milestones</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Chronological History</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Click on a decade to discover the key events that shaped the modern Clark Construction Group.
            </p>
          </div>

          {/* Decade tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '800px',
            margin: '0 auto 40px auto',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {TIMELINE.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  backgroundColor: activeIndex === idx ? 'var(--primary)' : 'var(--bg-deep)',
                  border: '1px solid',
                  borderColor: activeIndex === idx ? 'var(--primary)' : 'var(--border-color)',
                  color: activeIndex === idx ? '#FFF' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  transition: 'var(--transition-fast)'
                }}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Timeline details container */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-deep)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '40px',
            boxShadow: 'var(--shadow-premium)',
            textAlign: 'center'
          }} className="animate-fade">
            <Calendar size={32} color="var(--primary)" style={{ margin: '0 auto 16px auto' }} />
            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', display: 'block', marginBottom: '8px' }}>
              {TIMELINE[activeIndex].year}
            </span>
            <h3 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '16px' }}>
              {TIMELINE[activeIndex].title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              {TIMELINE[activeIndex].desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
