import React, { useState } from 'react';
import { 
  FileText, Cpu, Compass, Shield, Activity, HardHat, 
  Leaf, Settings, Laptop, Eye, CheckCircle2 
} from 'lucide-react';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import ExpertiseHeroImg from '../assets/expertise_hero.png';
import QualityImg from '../assets/expertise_quality.png';
import DeliveryMethodsImg from '../assets/delivery_methods.png';

const EXPERTISE_LIST = [
  {
    id: "delivery-methods",
    title: "Delivery Methods",
    projectSign: "Salesforce Tower",
    desc: "Tailoring procurement and collaboration models to ensure optimal budget control, speed, and execution quality.",
    bgImage: DeliveryMethodsImg,
    detailedDesc: "Our delivery methods include Design-Build, CMAR (Construction Manager at Risk), and General Contracting. By aligning the design teams and contractors under unified incentives, we deliver signature projects on schedule and with unmatched quality. For landmarks like the Salesforce Tower, our delivery methods ensured smooth multi-stakeholder collaboration and rapid execution.",
    icon: <FileText size={22} color="var(--primary)" />,
    bullets: [
      "Design-Build (Single-source responsibility)",
      "Construction Management at Risk (CMAR)",
      "Integrated Project Delivery (IPD) partnerships",
      "Guaranteed Maximum Price (GMP) stability"
    ]
  },
  {
    id: "modular",
    title: "Modular Construction",
    projectSign: "Modular",
    desc: "Assembling structural systems off-site in controlled environments to compress timelines and elevate precision.",
    bgImage: "https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?q=80&w=800",
    detailedDesc: "Modular construction allows us to manufacture complex building modules, bathroom pods, structural frames, and MEP systems in dedicated off-site facilities. This drastically reduces on-site labor demands, eliminates weather delays, and enhances safety and quality. By building in a controlled setting, we deliver higher consistency and finish quality.",
    icon: <Cpu size={22} color="var(--primary)" />,
    bullets: [
      "Off-site prefabrication & assembly",
      "Pre-assembled MEP service modules",
      "Compressed vertical build cycles",
      "High-tolerance factory quality control"
    ]
  },
  {
    id: "project-development",
    title: "Project Development",
    projectSign: "Project Development",
    desc: "Supporting projects from inception with financial modeling, site selection, and public-private partnerships (P3).",
    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
    detailedDesc: "Clark's project development division collaborates with clients on site acquisition, entitlement processes, feasibility studies, capital structuring, and P3 models. We bridge the gap between finance and construction to make ambitious projects viable, ensuring long-term asset value.",
    icon: <Compass size={22} color="var(--primary)" />,
    bullets: [
      "Public-Private Partnerships (P3)",
      "Geotechnical & feasibility analytics",
      "Capital sourcing & debt coordination",
      "Master planning & zoning support"
    ]
  },
  {
    id: "quality",
    title: "Quality",
    projectSign: "Quality Assurance",
    desc: "Applying rigid structural inspections and digital laser verification to assure defect-free handovers.",
    bgImage: QualityImg,
    detailedDesc: "Quality is engineered into our daily operations. We use laser scanners, concrete core diagnostics, thermal imaging, and digital QA/QC systems to track structural accuracy down to the millimeter. Our dedicated quality managers monitor every stage from foundation to finishing.",
    icon: <Shield size={22} color="var(--primary)" />,
    bullets: [
      "Laser-scan-to-BIM verification",
      "Material strength & concrete analytics",
      "Water ingress & thermal diagnostics",
      "Rigorous multi-point sign-off workflows"
    ]
  },
  {
    id: "safety",
    title: "Safety",
    projectSign: "Putting Safety First",
    desc: "Enforcing a proactive, zero-incident safety culture across every active job site in the nation.",
    bgImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800",
    detailedDesc: "Our 'Safety First' mandate is the foundation of every Clark project. We employ real-time digital risk evaluations, comprehensive field safety coordinates, and continuous subcontractor training to achieve industry-leading safety metrics. We believe that every worker should return home safely, every single day.",
    icon: <HardHat size={22} color="var(--primary)" />,
    bullets: [
      "Zero-incident culture enforcement",
      "Daily site hazard analysis (SHA) logs",
      "Continuous workforce training programs",
      "Wearable sensor integration for site safety"
    ]
  },
  {
    id: "self-perform",
    title: "Self-Perform",
    projectSign: "Renovation & Historic Preservation",
    desc: "Directly employing skilled trade unions to execute critical concrete, carpentry, and masonry work.",
    bgImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
    detailedDesc: "By self-performing concrete foundations, structural framing, historic masonry, and interior systems, we control the critical path of construction. This capability ensures that complex historic preservation projects (like the Kia Forum) are handled with the highest level of craftsmanship and structural integrity.",
    icon: <Activity size={22} color="var(--primary)" />,
    bullets: [
      "Direct-hire union trade management",
      "Structural concrete casting & formwork",
      "Historic masonry restoration & preservation",
      "Flexible, responsive schedule control"
    ]
  },
  {
    id: "sustainability",
    title: "Sustainability",
    projectSign: "Sustainability",
    desc: "Implementing green building techniques, LEED certifications, and low-carbon materials.",
    bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800",
    detailedDesc: "Clark is a pioneer in sustainable construction. We guide project teams through LEED and WELL certification, utilize low-carbon concrete mixes, and manage massive waste diversion programs to ensure structures minimize their lifecycle carbon footprint and operating costs.",
    icon: <Leaf size={22} color="var(--primary)" />,
    bullets: [
      "LEED, WELL & Net-Zero coordinates",
      "Low-carbon & recycled material sourcing",
      "Geothermal & energy harvesting integration",
      "95%+ job-site waste diversion programs"
    ]
  },
  {
    id: "systems",
    title: "Systems",
    projectSign: "Systems Integration",
    desc: "Integrating high-efficiency MEP layouts, backup power grids, and smart building automation.",
    bgImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800",
    detailedDesc: "Modern buildings rely on complex mechanical, electrical, plumbing, and automation systems. We coordinate system designs early in the BIM phase, ensuring seamless installation, energy efficiency, and reliable facilities operations after handover.",
    icon: <Settings size={22} color="var(--primary)" />,
    bullets: [
      "HVAC, MEP & building automation grids",
      "Primary backup power & microgrid planning",
      "Commissioning & operational readiness testing",
      "Complex low-voltage data networking"
    ]
  },
  {
    id: "vdc",
    title: "Virtual Design & Construction",
    projectSign: "VDC",
    desc: "Simulating projects digitally using advanced 3D BIM, clash detection, and VR walkthroughs.",
    bgImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800",
    detailedDesc: "Virtual Design and Construction (VDC) allows us to resolve potential design conflicts before construction begins. We build a fully detailed digital twin of the project, allowing our clients to walk through spaces virtually, optimize costs, and coordinate trades.",
    icon: <Laptop size={22} color="var(--primary)" />,
    bullets: [
      "High-fidelity 3D/4D/5D BIM modeling",
      "Clash-detection & system clearance scripts",
      "Virtual reality (VR) stakeholder mockups",
      "Scan-to-BIM topography mapping"
    ]
  }
];

export default function Services() {
  const [selectedExpertise, setSelectedExpertise] = useState(null);

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={ExpertiseHeroImg}
            alt="Steel scaffolding construction skyline"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Our Work &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>Expertise</span>
            </span>
            <h1 className="page-hero-title">Expertise</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '800px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              With more than a century of expertise, Clark executes the most challenging and complex projects that push the boundaries of engineering and construction.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Expertise */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {EXPERTISE_LIST.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExpertise(exp)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-normal)',
                  boxShadow: 'var(--shadow-premium)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow), var(--shadow-premium)';
                  const img = e.currentTarget.querySelector('.exp-img');
                  if (img) img.style.transform = 'scale(1.06)';
                  const viewBtn = e.currentTarget.querySelector('.view-link');
                  if (viewBtn) {
                    viewBtn.style.color = '#FFF';
                    viewBtn.style.backgroundColor = 'var(--primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
                  const img = e.currentTarget.querySelector('.exp-img');
                  if (img) img.style.transform = 'none';
                  const viewBtn = e.currentTarget.querySelector('.view-link');
                  if (viewBtn) {
                    viewBtn.style.color = 'var(--primary)';
                    viewBtn.style.backgroundColor = 'rgba(217, 119, 6, 0.08)';
                  }
                }}
              >
                {/* Image Section */}
                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', overflow: 'hidden' }}>
                  <img
                    src={exp.bgImage}
                    alt={exp.title}
                    className="exp-img"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'var(--transition-slow)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(8, 10, 16, 0.7) 0%, transparent 60%)',
                    zIndex: 1
                  }} />
                </div>

                {/* Content Section */}
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(217, 119, 6, 0.06)',
                      border: '1px solid rgba(217, 119, 6, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {exp.icon}
                    </div>
                    <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: 700 }}>
                      {exp.title}
                    </h3>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                    {exp.desc}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '18px',
                    marginTop: 'auto'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Clark Engineering
                    </span>
                    <div
                      className="view-link"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--primary)',
                        backgroundColor: 'rgba(217, 119, 6, 0.08)',
                        border: '1px solid rgba(217, 119, 6, 0.2)',
                        padding: '6px 14px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <Eye size={12} />
                      <span>view</span>
                    </div>
                  </div>
                </div>
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

      {/* Detail Modal */}
      <Modal
        isOpen={selectedExpertise !== null}
        onClose={() => setSelectedExpertise(null)}
        title={selectedExpertise?.title || ""}
        maxWidth="680px"
      >
        {selectedExpertise && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Modal Image banner */}
            <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: '4px', overflow: 'hidden' }}>
              <img
                src={selectedExpertise.bgImage}
                alt={selectedExpertise.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'var(--primary)',
                color: '#FFF',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 700,
                zIndex: 2
              }}>
                Signature Project: {selectedExpertise.projectSign}
              </div>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(8, 10, 16, 0.8) 0%, transparent 80%)'
              }} />
            </div>

            {/* Description */}
            <div>
              <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', marginBottom: '10px', fontWeight: 700 }}>About Our Capabilities</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                {selectedExpertise.detailedDesc}
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', marginBottom: '12px', fontWeight: 700 }}>Core Features</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
                {selectedExpertise.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer buttons */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              gap: '12px', 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '20px',
              marginTop: '10px'
            }}>
              <Button 
                onClick={() => setSelectedExpertise(null)} 
                variant="secondary"
              >
                Close Window
              </Button>
              <Button 
                to="/contact" 
                variant="primary"
              >
                Discuss a Project
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
