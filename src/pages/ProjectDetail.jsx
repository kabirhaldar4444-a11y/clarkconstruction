import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, HardHat, Building2, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { UNIQUE_PROJECTS, getProjectSlug } from './Projects';
import ProjectDetailView from '../components/UI/ProjectDetailView';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Locate project by slug or ID
  const project = useMemo(() => {
    if (!slug) return null;
    return UNIQUE_PROJECTS.find((p) => {
      const pSlug = getProjectSlug(p.title);
      return pSlug === slug || String(p.id) === slug;
    });
  }, [slug]);

  // Related projects in the same category
  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return UNIQUE_PROJECTS.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3);
  }, [project]);

  if (!project) {
    return (
      <div style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-deep)', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '520px', backgroundColor: '#FFFFFF', padding: '48px 32px', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
          <HardHat size={56} style={{ color: 'var(--text-muted)', marginBottom: '20px', opacity: 0.6 }} />
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '12px', fontWeight: 800 }}>Project Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '28px', lineHeight: '1.6' }}>
            The project details you requested could not be located or may have been updated.
          </p>
          <Button to="/our-work/projects" variant="primary" icon={ArrowLeft} iconPosition="left">
            Back to All Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-deep)', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Top Header & Breadcrumb Bar */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-color)', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            
            {/* Breadcrumb path */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748B', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
              <ChevronRight size={14} />
              <Link to="/our-work/projects" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Our Work</Link>
              <ChevronRight size={14} />
              <Link to="/our-work/projects" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Projects</Link>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{project.title}</span>
            </div>

            {/* Back button */}
            <Link
              to="/our-work/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: '#FFFFFF',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0D1A63';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Projects</span>
            </Link>

          </div>
        </div>
      </section>

      {/* Main Project Case Study Body */}
      <main className="container" style={{ maxWidth: '1080px', marginTop: '36px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-premium)',
          padding: '36px 32px'
        }}>
          <ProjectDetailView project={project} />
        </div>

        {/* Related Projects in Sector */}
        {relatedProjects.length > 0 && (
          <section style={{ marginTop: '54px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <span className="subtitle-amber">Similar Portfolio</span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-white)', fontWeight: 800, margin: '4px 0 0 0' }}>
                  Related {project.category} Projects
                </h3>
              </div>
              <Button to="/our-work/projects" variant="text" size="sm" icon={ArrowRight} iconPosition="right">
                View All Projects
              </Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '24px' }}>
              {relatedProjects.map((rel) => (
                <Card
                  key={rel.id}
                  image={rel.image}
                  title={rel.title}
                  subtitle={rel.category}
                  tag={rel.location}
                  hoverEffect="tilt"
                  onClick={() => navigate(`/our-work/projects/${getProjectSlug(rel.title)}`)}
                >
                  <p style={{ marginBottom: '16px', lineHeight: '1.55' }}>{rel.summary}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: 600 }}>
                      {rel.client ? rel.client.split(';')[0] : 'Clark Construction'}
                    </span>
                    <span style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      View Page &rarr;
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

      </main>

    </div>
  );
}
