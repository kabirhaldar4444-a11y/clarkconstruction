import React, { useState } from 'react';
import { 
  FileText, Cpu, Compass, Shield, Activity, HardHat, 
  Leaf, Settings, Laptop, CheckCircle2, ArrowRight
} from 'lucide-react';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import RealisticBlinkingEye from '../components/UI/RealisticBlinkingEye';
import ExpertiseHeroImg from '../assets/Market hero image.png';
import QualityImg from '../assets/expertise_quality.png';
import DeliveryMethodsImg from '../assets/delivery_methods.png';
import ClarkCivilImg from '../assets/Clark Civil.png';
import ClarkConcreteImg from '../assets/Clark Concrete.png';
import ClarkFoundationsImg from '../assets/Clark Foundations.png';
import ClarkWaterImg from '../assets/Clark Water.png';
import ClarkTechnologiesImg from '../assets/Clark Technologies.png';
import TektonImg from '../assets/Tekton.png';

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
    projectSign: "Modular Systems",
    desc: "Assembling structural systems off-site in controlled environments to compress timelines and elevate precision.",
    bgImage: TektonImg,
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
    projectSign: "P3 Initiatives",
    desc: "Supporting projects from inception with financial modeling, site selection, and public-private partnerships (P3).",
    bgImage: ClarkCivilImg,
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
    bgImage: ClarkFoundationsImg,
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
    projectSign: "Historic Preservation",
    desc: "Directly employing skilled trade unions to execute critical concrete, carpentry, and masonry work.",
    bgImage: ClarkConcreteImg,
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
    projectSign: "Green Building",
    desc: "Implementing green building techniques, LEED certifications, and low-carbon materials.",
    bgImage: ClarkWaterImg,
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
    bgImage: ClarkTechnologiesImg,
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
    projectSign: "VDC Digital Twins",
    desc: "Simulating projects digitally using advanced 3D BIM, clash detection, and VR walkthroughs.",
    bgImage: ExpertiseHeroImg,
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
      {/* Scoped Zig-Zag & Blinking Button Styles */}
      <style>{`
        .expertise-zigzag-card {
          display: flex;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .expertise-zigzag-card.layout-left {
          flex-direction: row;
        }

        .expertise-zigzag-card.layout-right {
          flex-direction: row-reverse;
        }

        .expertise-zigzag-card:hover {
          transform: translateY(-4px);
          border-color: #2563EB;
          box-shadow: 0 20px 45px -10px rgba(13, 26, 99, 0.16), 0 4px 14px rgba(37, 99, 235, 0.14);
        }

        .expertise-zigzag-card:hover .exp-zigzag-img {
          transform: scale(1.06);
        }

        .expertise-image-wrap {
          flex: 0 0 48%;
          position: relative;
          min-height: 350px;
          overflow: hidden;
          background-color: #071038;
        }

        .exp-zigzag-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .expertise-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(7, 16, 56, 0.82) 0%, rgba(7, 16, 56, 0.18) 55%, transparent 100%);
          z-index: 1;
        }

        .expertise-signature-badge {
          position: absolute;
          bottom: 18px;
          left: 18px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: rgba(13, 26, 99, 0.88);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #FFF;
          max-width: calc(100% - 36px);
        }

        .expertise-signature-badge span {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #93C5FD;
          font-weight: 700;
        }

        .expertise-signature-badge strong {
          font-size: 0.92rem;
          font-weight: 700;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .expertise-index-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 2;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #FFF;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .expertise-content-wrap {
          flex: 1;
          padding: 38px 44px;
          display: flex;
          flex-direction: column;
          justifyContent: center;
        }

        /* Realistic Eye Blinking Keyframes */
        .realistic-eye-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .eye-open-layer {
          transform-origin: 12px 12px;
          animation: realisticEyeBlink 4s infinite ease-in-out;
        }

        .eye-pupil-layer {
          transform-origin: 12px 12px;
          animation: realisticEyePupil 4s infinite ease-in-out;
        }

        .eye-closed-lid-layer {
          transform-origin: 12px 12px;
          opacity: 0;
          animation: realisticEyelidClose 4s infinite ease-in-out;
        }

        @keyframes realisticEyeBlink {
          0%, 68% {
            transform: scaleY(1);
            opacity: 1;
          }
          /* Primary Blink: eyelid swiftly sweeps closed */
          71% {
            transform: scaleY(0.06);
            opacity: 0.15;
          }
          73% {
            transform: scaleY(0.06);
            opacity: 0.15;
          }
          /* Opens back up */
          76% {
            transform: scaleY(1);
            opacity: 1;
          }
          /* Rest briefly */
          82% {
            transform: scaleY(1);
            opacity: 1;
          }
          /* Realistic micro-flutter double blink */
          83.5% {
            transform: scaleY(0.12);
            opacity: 0.25;
          }
          85.5% {
            transform: scaleY(1);
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes realisticEyePupil {
          0%, 25% {
            transform: translate(0, 0);
            opacity: 1;
          }
          28%, 48% {
            transform: translate(-0.8px, -0.3px);
            opacity: 1;
          }
          52%, 68% {
            transform: translate(0.7px, 0.2px);
            opacity: 1;
          }
          71%, 73% {
            transform: translate(0, 0);
            opacity: 0;
          }
          76%, 82% {
            transform: translate(0, 0);
            opacity: 1;
          }
          83.5% {
            opacity: 0;
          }
          85.5%, 100% {
            transform: translate(0, 0);
            opacity: 1;
          }
        }

        @keyframes realisticEyelidClose {
          0%, 69.5% {
            opacity: 0;
            transform: scaleY(0.2);
          }
          71%, 73% {
            opacity: 1;
            transform: scaleY(1);
          }
          74.5%, 82% {
            opacity: 0;
            transform: scaleY(0.2);
          }
          83.5% {
            opacity: 1;
            transform: scaleY(1);
          }
          84.5%, 100% {
            opacity: 0;
            transform: scaleY(0.2);
          }
        }

        .view-capabilities-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border-radius: 8px;
          border: 1px solid #2563EB;
          background-color: #2563EB;
          color: #FFFFFF;
          font-size: 0.84rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.28);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .view-capabilities-btn:hover {
          background-color: #0D1A63;
          border-color: #0D1A63;
          box-shadow: 0 6px 22px rgba(13, 26, 99, 0.35);
          transform: translateY(-1px);
        }

        .view-capabilities-btn .btn-arrow {
          transition: transform 0.2s ease;
        }

        .view-capabilities-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .expertise-zigzag-card:hover .view-capabilities-btn {
          background-color: #1D4ED8;
          border-color: #1D4ED8;
        }

        @media (max-width: 920px) {
          .expertise-zigzag-card.layout-left,
          .expertise-zigzag-card.layout-right {
            flex-direction: column !important;
          }

          .expertise-image-wrap {
            flex: none;
            width: 100%;
            min-height: 250px;
            height: 270px;
          }

          .expertise-content-wrap {
            padding: 26px 20px;
          }
        }
      `}</style>

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

      {/* Alternating Zig-Zag Showcase of Expertise */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {EXPERTISE_LIST.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExpertise(exp)}
                  className={`expertise-zigzag-card ${isEven ? 'layout-left' : 'layout-right'}`}
                >
                  {/* Image Side (Left on even, Right on odd) */}
                  <div className="expertise-image-wrap">
                    <img
                      src={exp.bgImage}
                      alt={exp.title}
                      className="exp-zigzag-img"
                    />
                    <div className="expertise-img-overlay" />
                    
                    {/* Index badge */}
                    <div className="expertise-index-badge">
                      0{index + 1}
                    </div>

                    {/* Signature Project Badge */}
                    <div className="expertise-signature-badge">
                      <span>Signature Project</span>
                      <strong>{exp.projectSign}</strong>
                    </div>
                  </div>

                  {/* Content Side (Right on even, Left on odd) */}
                  <div className="expertise-content-wrap">
                    
                    {/* Discipline Pillar Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(37, 99, 235, 0.08)',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {exp.icon}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Core Discipline 0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '12px', lineHeight: 1.25 }}>
                      {exp.title}
                    </h2>

                    {/* Description */}
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '22px' }}>
                      {exp.desc}
                    </p>

                    {/* Core Capabilities Bullets */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '10px',
                      marginBottom: '26px'
                    }}>
                      {exp.bullets.slice(0, 3).map((bullet, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                          <CheckCircle2 size={16} color="#2563EB" style={{ flexShrink: 0 }} />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Action Footer with Blinking View Button */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '20px',
                      marginTop: 'auto',
                      flexWrap: 'wrap',
                      gap: '14px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Clark Standard
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#0D1A63', fontWeight: 700, backgroundColor: 'rgba(13, 26, 99, 0.06)', padding: '3px 8px', borderRadius: '4px' }}>
                          Certified Delivery
                        </span>
                      </div>

                      {/* View Capabilities Button with Realistic Blinking Eye */}
                      <button
                        className="view-capabilities-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExpertise(exp);
                        }}
                      >
                        <RealisticBlinkingEye size={18} color="#FFFFFF" />
                        <span>View Capabilities</span>
                        <ArrowRight size={14} className="btn-arrow" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
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
            <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: '6px', overflow: 'hidden' }}>
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
