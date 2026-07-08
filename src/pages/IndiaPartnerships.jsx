import React from 'react';
import { 
  Zap, 
  Factory, 
  Plane, 
  Cpu, 
  Train, 
  Settings, 
  FileText, 
  Download, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Button from '../components/UI/Button';
import ClarkMoUPdf from '../assets/CLARK CONSTRUCTION.pdf';

const PROJECTS = [
  {
    title: "Kovvada Nuclear Power Plant",
    subtitle: "Strategic Energy Infrastructure",
    description: "Strategic energy infrastructure in Andhra Pradesh, powering India's industrial growth.",
    icon: <Zap size={24} color="var(--primary)" />,
    location: "Andhra Pradesh, India"
  },
  {
    title: "Reliance Jamnagar Refinery",
    subtitle: "Industrial Engineering",
    description: "World-class industrial engineering for the world's largest oil refinery complex.",
    icon: <Factory size={24} color="var(--primary)" />,
    location: "Jamnagar, Gujarat"
  },
  {
    title: "Navi Mumbai International Airport",
    subtitle: "Aviation Infrastructure",
    description: "A landmark aviation project enhancing connectivity for the Mumbai metropolitan region.",
    icon: <Plane size={24} color="var(--primary)" />,
    location: "Navi Mumbai, Maharashtra"
  },
  {
    title: "GIFT City Gujarat",
    subtitle: "Smart City Development",
    description: "Smart city utility tunnels and district cooling systems for India's first operational smart city in Gandhinagar.",
    icon: <Cpu size={24} color="var(--primary)" />,
    location: "Gandhinagar, Gujarat"
  },
  {
    title: "Railway and Metro projects",
    subtitle: "Transit & Consulting",
    description: "Historically well known for Delhi Metro consulting roles and work on other rail and metro programs.",
    icon: <Train size={24} color="var(--primary)" />,
    location: "Delhi NCR & Multiple Cities"
  },
  {
    title: "Industrial Systems & Specialist Contracting",
    subtitle: "Specialist Delivery",
    description: "Precise installation, integration, and commissioning for complex industrial systems and refining packages.",
    icon: <Settings size={24} color="var(--primary)" />,
    location: "Pan-India Operations"
  }
];

export default function IndiaPartnerships() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=1600"
            alt="Clark Construction Modern Indian Infrastructure"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              About Us &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>India Strategic Partnerships</span>
            </span>
            <h1 className="page-hero-title">India Strategic Partnerships</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              Comprehensive overview of our landmark projects and government collaborations across the Republic of India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
          <div>
            <span className="subtitle-amber">Our Presence in India</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', lineHeight: '1.2' }}>
              Clark Construction in India
            </h2>
            <p style={{ color: 'var(--text-primary)', marginBottom: '18px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Clark Construction is an American construction company with an active presence in India, supporting projects through subcontracting and EPCM / PMC / General Consultant roles—helping teams manage, design, coordinate, and supervise project delivery to achieve stronger schedule, cost, safety, and quality outcomes.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '18px', fontSize: '0.975rem', lineHeight: '1.7' }}>
              In addition, Clark works with partners as a technology licensor (particularly for refining and petrochemical applications) and also delivers specialist package contracting services for industrial systems, where precise installation, integration, and commissioning are critical.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.975rem', lineHeight: '1.7' }}>
              Clark’s engagement in India is further strengthened through an MoU with the Ministry of Housing and Urban Affairs (MoHUA), Government of India, reflecting a shared intent to support capability-building and collaboration aligned with India’s urban development priorities.
            </p>

            {/* MoU Quick Info Card */}
            <div style={{ 
              backgroundColor: 'var(--bg-card)', 
              padding: '24px', 
              borderRadius: '6px', 
              borderLeft: '4px solid var(--primary)',
              borderTop: '1px solid var(--border-color)',
              borderRight: '1px solid var(--border-color)',
              borderBottom: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <ShieldCheck size={24} color="var(--primary)" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)' }}>MoHUA Partnership</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                Signed in coordination with the Ministry of Housing and Urban Affairs to drive modern technology integration and local capacity-building projects.
              </p>
              <Button href="#mou-document" variant="outline" size="sm">
                View MoU Document <ChevronRight size={14} style={{ marginLeft: '4px' }} />
              </Button>
            </div>
          </div>

          {/* Isometric Graphic / Image montage */}
          <div className="img-overlay-wrapper" style={{ height: '480px' }}>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800"
              alt="Clark Construction high-end engineering schematics"
            />
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              backgroundColor: 'rgba(8, 10, 16, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-color)',
              padding: '20px',
              borderRadius: '4px',
              zIndex: 3
            }}>
              <h4 style={{ color: 'var(--text-white)', marginBottom: '4px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={16} color="var(--primary)" /> Global Standards
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5' }}>
                Bringing state-of-the-art EPCM execution structures and technology licenses to critical Indian commercial and industrial projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Key Engagements</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Landmark Projects & Programs</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              From smart utilities and airport transit hubs to refinery developments, our construction management and general consulting expertise supports India's core infrastructure.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  padding: '30px',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
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
                  backgroundColor: 'rgba(var(--primary-rgb), 0.1)', 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {project.icon}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                  {project.subtitle}
                </span>
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', flexGrow: 1 }}>
                  {project.description}
                </p>
                <div style={{ 
                  marginTop: '20px', 
                  paddingTop: '12px', 
                  borderTop: '1px solid rgba(15, 23, 42, 0.05)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>📍</span>
                  <span>{project.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoU PDF Viewer Section */}
      <section id="mou-document" className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle-amber">Document Center</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>MoU: MoHUA & Clark Construction</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto' }}>
              View and download the official Memorandum of Understanding detailing the capability building and urban development collaboration programs.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: 'var(--shadow-premium)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileText size={20} color="#EF4444" />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '0.95rem', fontWeight: 700 }}>CLARK CONSTRUCTION.pdf</h4>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Official Partnership Memorandum • PDF • 198 KB</span>
                </div>
              </div>
              <Button href={ClarkMoUPdf} download="CLARK_CONSTRUCTION_MoHUA_MoU.pdf" variant="primary" size="sm" icon={Download} iconPosition="left">
                Download PDF
              </Button>
            </div>

            {/* Embedded PDF Iframe */}
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: '950px', 
              backgroundColor: 'var(--bg-deep)', 
              borderRadius: '6px', 
              overflow: 'hidden',
              border: '1px solid var(--border-color)'
            }}>
              <iframe
                src={`${ClarkMoUPdf}#toolbar=1`}
                title="MoHUA & Clark Construction MoU Document"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
            
            <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>Can't view the file directly? </span>
              <a href={ClarkMoUPdf} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                Open in New Tab <ExternalLink size={10} style={{ display: 'inline', marginLeft: '2px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
