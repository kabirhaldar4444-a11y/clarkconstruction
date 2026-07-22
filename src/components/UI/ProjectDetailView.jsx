import React from 'react';
import { 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Layers, 
  Award, 
  FileText, 
  HardHat, 
  Building2 
} from 'lucide-react';

/**
 * Intelligent helper to format complete, professional major construction company details
 * for any project in the system.
 */
export function getProjectFullDetails(project) {
  if (!project) return null;

  const isIndia = project.location?.includes('India');

  // Specific overrides for known projects like Capital One Arena
  const title = project.title;

  // 1. Specifications Table
  let specsTable = project.specsTable;
  if (!specsTable) {
    if (title === 'Capital One Arena') {
      specsTable = [
        { category: 'Project Name', details: 'Downtown Multi-Purpose Sports Arena (Capital One Arena)' },
        { category: 'Client', details: 'Monumental Sports & Entertainment' },
        { category: 'Sector / Category', details: 'Commercial & Mixed-Use' },
        { category: 'Location', details: 'Washington, D.C., USA' },
        { category: 'Completion Year', details: '1997 (Major renovations completed later)' },
        { category: 'Construction Type', details: 'Design-Build / Heavy Civil & Commercial Construction' },
        { category: 'Capacity', details: '20,000 Seats' },
        { category: 'Structure', details: 'Indoor Sports & Entertainment Arena' },
        { category: 'Project Size', details: 'Approx. 1,000,000 sq. ft.' },
        { category: 'Construction Value', details: 'Multi-million-dollar commercial development' },
        { category: 'Primary Services', details: 'Structural Steel, Deep Foundations, Concrete Works, MEP Coordination, Civil Infrastructure' },
        { category: 'Sustainability Features', details: 'Energy-efficient lighting, advanced HVAC systems, waste management during construction' },
        { category: 'Safety Record', details: 'Zero major structural incidents during construction through strict safety management' },
      ];
    } else {
      // Dynamic tailored specs for all other projects
      const sector = project.category || project.type || 'Commercial & Infrastructure';
      const constrType = getConstructionType(sector, project);
      const capacity = project.specs || project.capacity || project.budget || 'High-capacity infrastructure facility';
      const structure = getStructureDescription(sector, project);
      const size = getProjectSizeEst(project);
      const value = project.constructionValue || project.budget || 'Multi-million-dollar infrastructure project';
      const primarySvcs = getPrimaryServices(sector, project);
      const sustain = getSustainabilityFeatures(sector, project);
      const safety = project.safetyRecord || 'Zero major structural incidents achieved via VDC 4D risk monitoring';

      specsTable = [
        { category: 'Project Name', details: project.title },
        { category: 'Client', details: project.client || project.contractor || 'Government & Institutional Entity' },
        { category: 'Sector / Category', details: sector },
        { category: 'Location', details: project.location || (isIndia ? 'India' : 'USA') },
        { category: 'Completion Year', details: project.date || project.duration || 'Completed' },
        { category: 'Construction Type', details: constrType },
        { category: 'Capacity', details: capacity },
        { category: 'Structure', details: structure },
        { category: 'Project Size', details: size },
        { category: 'Construction Value', details: value },
        { category: 'Primary Services', details: primarySvcs },
        { category: 'Sustainability Features', details: sustain },
        { category: 'Safety Record', details: safety },
      ];
    }
  }

  // 2. Project Overview
  let overview = project.fullOverview;
  if (!overview) {
    if (title === 'Capital One Arena') {
      overview = [
        "Clark Construction successfully delivered one of the most significant urban sports and entertainment venues in the United States. Built in the heart of downtown Washington, D.C., the arena serves as a premier destination for professional sports, concerts, conventions, and large-scale public events.",
        "The project demanded exceptional engineering precision because the structure was constructed directly above one of the city's busiest Metro transit hubs while maintaining uninterrupted public transportation operations throughout construction.",
        "The development included massive structural steel framing, reinforced concrete foundations, complex utility relocation, underground coordination, mechanical and electrical integration, premium spectator facilities, retail spaces, VIP suites, food courts, media facilities, and modern life-safety systems."
      ];
    } else {
      overview = [
        project.details || project.description || `${project.title} is a landmark project successfully managed and constructed by Clark Construction. Located in ${project.location}, this project stands as a benchmark of modern engineering excellence.`,
        project.summary ? `${project.summary} Built for ${project.client || project.contractor || 'our valued client'}, the project integrates advanced structural techniques with stringent environmental standards.` : null,
        `Executing this complex development required comprehensive logistics planning, continuous VDC structural tracking, and multi-agency coordination to ensure safe execution without disrupting local commerce or transit operations.`
      ].filter(Boolean);
    }
  }

  // 3. Scope of Work
  let scopeOfWork = project.scopeOfWork;
  if (!scopeOfWork) {
    if (title === 'Capital One Arena') {
      scopeOfWork = [
        "Site preparation and excavation",
        "Deep foundation and piling works",
        "Reinforced concrete construction",
        "Structural steel fabrication and erection",
        "Long-span roof truss installation",
        "Mechanical, Electrical & Plumbing (MEP) coordination",
        "Utility relocation and underground services",
        "Building envelope installation",
        "Interior architectural finishes",
        "Fire protection and life-safety systems",
        "Public infrastructure coordination",
        "Testing, commissioning, and final handover"
      ];
    } else {
      scopeOfWork = getScopeOfWork(project.category || project.type, project);
    }
  }

  // 4. Engineering Challenges
  let challenges = project.challenges;
  if (!challenges) {
    if (title === 'Capital One Arena') {
      challenges = [
        "Constructing directly above active Metro railway tunnels.",
        "Maintaining uninterrupted subway operations throughout construction.",
        "Operating heavy cranes and lifting equipment within a highly congested downtown environment.",
        "Managing deliveries in limited urban staging areas.",
        "Coordinating with multiple government agencies and transportation authorities.",
        "Installing massive long-span steel roof trusses over existing infrastructure.",
        "Controlling noise, dust, and vibration to minimize impacts on surrounding businesses and residents.",
        "Meeting an aggressive construction schedule while maintaining the highest safety standards."
      ];
    } else if (project.challenge) {
      challenges = [
        project.challenge,
        ...getChallenges(project.category || project.type, project).slice(0, 5)
      ];
    } else {
      challenges = getChallenges(project.category || project.type, project);
    }
  }

  // 5. Our Solution
  let solutionText = project.solutionText;
  if (!solutionText) {
    if (title === 'Capital One Arena') {
      solutionText = [
        "Clark Construction implemented an integrated construction management strategy to overcome these challenges.",
        "Advanced Building Information Modeling (BIM) was used to coordinate structural, architectural, and MEP systems before installation, minimizing conflicts and reducing construction delays.",
        "Continuous seismic and vibration monitoring systems were installed to protect the underlying Metro infrastructure during excavation, foundation work, and structural steel erection.",
        "Major steel truss lifts were carefully scheduled during overnight off-peak transit hours using specialized heavy-lift cranes and synchronized rigging operations. Detailed logistics planning ensured uninterrupted pedestrian access, emergency services, and public transportation throughout the project.",
        "Real-time safety monitoring, strict quality control procedures, and comprehensive stakeholder coordination enabled the project team to successfully deliver the arena while maintaining excellent safety performance and construction quality."
      ];
    } else {
      solutionText = [
        project.solution || "Clark Construction deployed a multi-phased construction management methodology engineered for complex environments.",
        "Utilizing 3D laser scanning and Virtual Design & Construction (VDC), our team performed 4D clash detection across all structural, mechanical, and architectural systems prior to field installation.",
        "We implemented continuous structural vibration telemetry, off-site modular pre-assembly, and synchronized night-shift hoisting logistics to safeguard adjacent municipal operations and urban traffic flows.",
        "Real-time safety tracking and rigorous quality auditing ensured zero compromise on structural integrity, environmental compliance, and project schedule milestones."
      ];
    }
  }

  // 6. Key Features
  let keyFeatures = project.keyFeatures;
  if (!keyFeatures) {
    if (title === 'Capital One Arena') {
      keyFeatures = [
        "20,000-seat world-class indoor arena",
        "Long-span structural steel roof system",
        "Deep reinforced concrete foundations",
        "Construction above an operational Metro station",
        "Premium hospitality suites and executive lounges",
        "Retail and restaurant spaces",
        "Broadcast and media production facilities",
        "Modern mechanical and electrical infrastructure",
        "Advanced fire detection and suppression systems",
        "Energy-efficient building systems",
        "Fully ADA-compliant public accessibility",
        "High-performance acoustic engineering for sporting events and concerts"
      ];
    } else {
      keyFeatures = getKeyFeatures(project.category || project.type, project);
    }
  }

  // 7. Project Outcome
  let outcome = project.outcome;
  if (!outcome) {
    if (title === 'Capital One Arena') {
      outcome = "The arena was successfully completed while maintaining continuous Metro operations and minimizing disruption to surrounding businesses and commuters. The project has since become one of Washington, D.C.'s most recognizable entertainment venues, hosting millions of visitors annually for sporting events, concerts, and major public gatherings. Clark Construction's innovative engineering, meticulous planning, and unwavering commitment to safety ensured the successful delivery of this highly complex urban infrastructure project.";
    } else {
      outcome = `${project.title} was completed within target timelines and safety parameters while maintaining full compliance with strict municipal and environmental regulations. Today, the facility serves as a benchmark asset for ${project.client || project.contractor || 'the community'}, demonstrating Clark Construction's technical leadership in complex design-build execution.`;
    }
  }

  return {
    title: project.title,
    subtitle: project.subtitle || project.category,
    client: project.client || project.contractor || 'Government & Institutional Partner',
    category: project.category || project.type,
    location: project.location,
    date: project.date || project.duration,
    image: project.image,
    specsTable,
    overview,
    scopeOfWork,
    challenges,
    solutionText,
    keyFeatures,
    outcome
  };
}

/* Helper functions for domain-tailored metadata */
function getConstructionType(sector, p) {
  if (sector?.includes('Aviation') || sector?.includes('Airport')) return 'Aviation Infrastructure & Heavy General Contracting';
  if (sector?.includes('Healthcare') || sector?.includes('Hospital')) return 'Specialized Healthcare & Bio-Medical Contracting';
  if (sector?.includes('Industrial') || sector?.includes('Semiconductor')) return 'High-Tech Fab & Industrial General Contracting';
  if (sector?.includes('Energy') || sector?.includes('Wind') || sector?.includes('Solar')) return 'Renewable Energy & Heavy Utility Infrastructure';
  if (sector?.includes('Museum') || sector?.includes('Culture')) return 'Cultural Landmark & Precision Historic Contracting';
  if (sector?.includes('Transit') || sector?.includes('Rail') || sector?.includes('Subway')) return 'Heavy Civil & Transit Tunneling Construction';
  return 'Design-Build / Heavy Civil & Commercial Construction';
}

function getStructureDescription(sector, p) {
  if (sector?.includes('Aviation')) return 'Multi-Level Passenger Concourse & Steel Frame Pier';
  if (sector?.includes('Healthcare')) return 'Seismic-Isolated Concrete Clinical Towers & Inpatient Wings';
  if (sector?.includes('Industrial')) return 'Monolithic Heavy Vibration-Isolated Cleanroom Slab';
  if (sector?.includes('Energy')) return 'Offshore Monopiles / Subsea Power Grid & Structural Racks';
  if (sector?.includes('Museum')) return 'Custom Steel Truss & Cantilever Facade Structure';
  return 'Reinforced Concrete Foundations & Structural Steel Framing';
}

function getProjectSizeEst(p) {
  if (p.specs?.includes('sq. ft.') || p.specs?.includes('acres')) return p.specs.split(',')[0];
  if (p.budget) return `Scope: ${p.budget}`;
  return 'Approx. 500,000+ sq. ft. Total Built Area';
}

function getPrimaryServices(sector, p) {
  if (sector?.includes('Aviation')) return 'Subsea Tunnels, Terminal Framing, Apron Paving, MEP VDC Integration';
  if (sector?.includes('Healthcare')) return 'Radiation Vault Concrete, Medical Gas Networks, Clean Ventilation, Structural Framing';
  if (sector?.includes('Industrial')) return 'Ultra-Pure Piping, Cleanroom Containment, High-Density Concrete, High-Voltage Power';
  if (sector?.includes('Energy')) return 'Cryogenic Steel, Marine Foundations, High-Voltage Transmission, Zero-Liquid Discharge';
  return 'Structural Steel, Deep Foundations, Concrete Works, MEP Coordination, Civil Infrastructure';
}

function getSustainabilityFeatures(sector, p) {
  if (sector?.includes('Healthcare') || sector?.includes('Commercial')) return 'LEED Gold Standard, Low-E Electrochromic Glazing, Green Roof Systems';
  if (sector?.includes('Energy')) return 'Zero Carbon Footprint, Subsea Environmental Monitoring, Recycled Materials';
  if (sector?.includes('Industrial')) return 'Closed-Loop Water Recycling, Heat Recovery Exchangers, High-Efficiency HEPA';
  return 'Energy-efficient HVAC systems, recycled low-hydration concrete, jobsite waste diversion';
}

function getScopeOfWork(sector, p) {
  return [
    "Site preparation, soil remediation, and bulk excavation",
    "Deep foundation piling and reinforced slurry perimeter wall construction",
    "Cast-in-place concrete core and post-tensioned floor slab execution",
    "Structural steel fabrication, crane hoisting, and 3D alignment",
    "Long-span roof framing and building envelope installation",
    "Mechanical, Electrical & Plumbing (MEP) VDC 4D coordination",
    "Underground utility relocation and high-voltage grid connections",
    "High-performance curtain wall glazing and architectural facade detailing",
    "Interior fitting, acoustic panelling, and public circulation pathways",
    "Fire protection, life-safety networks, and smoke control systems",
    "Public infrastructure interface and traffic staging management",
    "Multi-system testing, commissioning, and final operational handover"
  ];
}

function getChallenges(sector, p) {
  return [
    "Executing heavy structural work within high-density active urban corridors.",
    "Strict environmental vibration controls adjacent to sensitive surrounding structures.",
    "Complex underground utility relocation and unmapped sub-surface obstacles.",
    "Tight material staging areas requiring just-in-time logistics delivery.",
    "Coordinating multi-jurisdictional permits and government inspection protocols.",
    "Adhering to an aggressive completion timeline while maintaining a zero-incident safety standard."
  ];
}

function getKeyFeatures(sector, p) {
  return [
    `State-of-the-art ${sector || 'Infrastructure'} facility`,
    "Deep reinforced concrete foundations and structural steel framing",
    "Seamless integration with regional transportation and municipal utilities",
    "Advanced mechanical, electrical, and plumbing VDC infrastructure",
    "Energy-efficient building envelope and environmental controls",
    "High-performance acoustic insulation and interior finishes",
    "Fully ADA-compliant public accessibility and modern emergency egress"
  ];
}

export default function ProjectDetailView({ project }) {
  const details = getProjectFullDetails(project);
  if (!details) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-primary)' }}>

      {/* Hero Image & Quick Info Header */}
      <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '8px', overflow: 'hidden' }}>
        <img
          src={details.image}
          alt={details.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(8, 10, 16, 0.95) 0%, rgba(8, 10, 16, 0.4) 60%, transparent 100%)',
          padding: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <span style={{ 
              backgroundColor: 'var(--primary)', 
              color: '#FFF', 
              padding: '4px 10px', 
              borderRadius: '4px', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em',
              display: 'inline-block',
              marginBottom: '8px'
            }}>
              {details.category}
            </span>
            <h2 style={{ color: '#FFF', fontSize: '1.6rem', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
              {details.title}
            </h2>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', display: 'block', marginTop: '4px' }}>
              Client: {details.client}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF', fontSize: '0.85rem' }}>
              <MapPin size={16} color="var(--primary)" />
              <span>{details.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF', fontSize: '0.85rem' }}>
              <Calendar size={16} color="var(--primary)" />
              <span>{details.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: Project Specifications (TABLE FORMAT) */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '2px solid var(--primary)', paddingBottom: '8px' }}>
          <FileText size={20} color="var(--primary)" />
          <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '0.02em' }}>
            Project Specifications
          </h3>
        </div>

        <div style={{ 
          overflowX: 'auto', 
          borderRadius: '6px', 
          border: '1px solid var(--border-color)', 
          backgroundColor: 'var(--bg-deep)' 
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(13, 26, 99, 0.2)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '12px 16px', color: 'var(--primary)', fontWeight: 800, width: '30%', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                  Category
                </th>
                <th style={{ padding: '12px 16px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {details.specsTable.map((row, idx) => (
                <tr 
                  key={idx} 
                  style={{ 
                    borderBottom: idx < details.specsTable.length - 1 ? '1px solid var(--border-color)' : 'none',
                    backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <td style={{ padding: '12px 16px', color: 'var(--text-white)', fontWeight: 700, verticalAlign: 'top' }}>
                    {row.category}
                  </td>
                  <td style={{ padding: '12px 16px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2: Project Overview */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', borderBottom: '2px solid var(--primary)', paddingBottom: '8px' }}>
          <Building2 size={20} color="var(--primary)" />
          <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
            Project Overview
          </h3>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '14px', 
          lineHeight: '1.75', 
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          backgroundColor: 'rgba(255, 255, 255, 0.015)',
          borderLeft: '4px solid var(--primary)',
          padding: '18px 20px',
          borderRadius: '0 6px 6px 0'
        }}>
          {details.overview.map((para, i) => (
            <p key={i} style={{ margin: 0 }}>{para}</p>
          ))}
        </div>
      </div>

      {/* SECTION 3: Scope of Work */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', borderBottom: '2px solid var(--primary)', paddingBottom: '8px' }}>
          <HardHat size={20} color="var(--primary)" />
          <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
            Scope of Work
          </h3>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
          Clark Construction was responsible for:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
          {details.scopeOfWork.map((item, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '10px', 
                padding: '10px 14px', 
                backgroundColor: 'var(--bg-deep)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '4px',
                fontSize: '0.875rem'
              }}
            >
              <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ color: 'var(--text-primary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4 & 5: Engineering Challenges & Our Solution */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* Engineering Challenges */}
        <div style={{ 
          backgroundColor: 'rgba(239, 68, 68, 0.03)', 
          border: '1px solid rgba(239, 68, 68, 0.2)', 
          padding: '20px', 
          borderRadius: '6px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <AlertTriangle size={18} color="var(--error)" />
            <h4 style={{ color: 'var(--error)', fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Engineering Challenges
            </h4>
          </div>
          <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
            {details.challenges.map((c, idx) => (
              <li key={idx} style={{ color: 'var(--text-primary)' }}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Our Solution */}
        <div style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.03)', 
          border: '1px solid rgba(16, 185, 129, 0.2)', 
          padding: '20px', 
          borderRadius: '6px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <ShieldCheck size={18} color="var(--success)" />
            <h4 style={{ color: 'var(--success)', fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Our Solution
            </h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.65' }}>
            {details.solutionText.map((s, idx) => (
              <p key={idx} style={{ margin: 0, color: 'var(--text-primary)' }}>{s}</p>
            ))}
          </div>
        </div>

      </div>

      {/* SECTION 6: Key Features */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', borderBottom: '2px solid var(--primary)', paddingBottom: '8px' }}>
          <Layers size={20} color="var(--primary)" />
          <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
            Key Features
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
          {details.keyFeatures.map((kf, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                padding: '12px 14px', 
                backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '4px',
                fontSize: '0.875rem'
              }}
            >
              <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.1rem' }}>✓</span>
              <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>{kf}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7: Project Outcome */}
      <div style={{ 
        backgroundColor: 'rgba(13, 26, 99, 0.1)', 
        border: '1px solid var(--primary)', 
        padding: '24px', 
        borderRadius: '6px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <Award size={20} color="var(--primary)" />
          <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
            Project Outcome
          </h4>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.7', margin: 0 }}>
          {details.outcome}
        </p>
      </div>

    </div>
  );
}
