import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2, HardHat, Landmark, GraduationCap, Shield, HeartPulse,
  Hotel, Layers, Scale, Compass, Building, History, Home,
  Atom, Activity, Trophy, Cpu, ArrowRight, CheckCircle2, MapPin
} from 'lucide-react';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import RealisticBlinkingEye from '../components/UI/RealisticBlinkingEye';
import { UNIQUE_PROJECTS, getProjectSlug } from './Projects';

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
    featuredProjectSlug: "the-wharf-phase-1-2",
    searchQuery: "Wharf",
    desc: "Delivering large-scale, complex building structures that form the foundations of modern communities.",
    detailedDesc: "Clark's commercial building practice specializes in high-density multi-use structures, landmark corporate headquarters, and multi-phased urban master plans. Leveraging advanced 4D BIM coordination, modular prefabrication, and lean delivery schedules, we transform complex blueprints into high-performance urban centers.",
    capabilities: [
      "High-rise concrete & structural steel superstructures",
      "Deep foundation & zero-lot-line urban engineering",
      "Integrated mechanical & high-efficiency curtainwall systems",
      "LEED Platinum & Net-Zero certified energy delivery"
    ],
    bgImage: WharfBuildingImg,
    category: "Commercial & Mixed-Use",
    icon: <Building2 size={20} color="var(--primary)" />
  },
  {
    market: "Infrastructure",
    project: "The Wharf",
    featuredProjectSlug: "the-wharf-marine-infrastructure-buildings",
    searchQuery: "Infrastructure",
    desc: "Engineering and constructing robust heavy civil infrastructure, bridge networks, and marine systems.",
    detailedDesc: "Through Clark and our heavy civil subsidiaries (Atkinson Construction & Shirley Contracting), we deliver regional transit networks, bridge spans, highway corridors, marine bulkheads, and deep tunnel bores connecting millions across North America.",
    capabilities: [
      "Heavy civil earthwork & marine pylon construction",
      "Pressurized Slurry TBM tunneling & ground stabilization",
      "Post-tensioned concrete bridge engineering & overpasses",
      "High-speed rail corridor & mass transit alignment"
    ],
    bgImage: WharfInfraImg,
    category: "Infrastructure & Tech",
    icon: <HardHat size={20} color="var(--primary)" />
  },
  {
    market: "Convention Centers",
    project: "Convention Center",
    featuredProjectSlug: "los-angeles-convention-center-expansion",
    searchQuery: "Convention",
    desc: "Creating massive, high-capacity venues with flexible spaces and modern structural designs.",
    detailedDesc: "We construct massive civic exhibition centers and convention destinations designed for high-capacity public gatherings, column-free event halls, long-span structural roof trusses, and multi-modal transit connectivity.",
    capabilities: [
      "Long-span column-free exhibit halls & column grids",
      "High-volume displacement ventilation & acoustic containment",
      "Multi-modal freight loading docks & heavy floor loads",
      "Integrated civic plazas & seamless public transit hubs"
    ],
    bgImage: ConventionCenterImg,
    category: "Infrastructure & Tech",
    icon: <Landmark size={20} color="var(--primary)" />
  },
  {
    market: "Education",
    project: "IDEA Factory",
    featuredProjectSlug: "university-of-maryland-facilities",
    searchQuery: "Education",
    desc: "Building state-of-the-art educational spaces, research laboratories, and academic halls.",
    detailedDesc: "Partnering with leading universities and research institutions nationwide, Clark constructs advanced academic halls, student living centers, medical teaching facilities, and multi-disciplinary STEM incubators.",
    capabilities: [
      "Cleanrooms & advanced wet chemistry laboratories",
      "Mass timber & sustainable low-carbon campus structures",
      "Zero-disruption active campus construction & logistics",
      "Acoustic lecture auditoriums & interactive learning labs"
    ],
    bgImage: IdeaFactoryImg,
    category: "Public & Institutional",
    icon: <GraduationCap size={20} color="var(--primary)" />
  },
  {
    market: "Government",
    project: "Govt - FBI Central Records Complex",
    featuredProjectSlug: "fbi-central-records-complex-government-projects",
    searchQuery: "Government",
    desc: "Constructing highly secure, mission-critical federal facilities and administrative offices.",
    detailedDesc: "Delivering mission-critical federal facilities for the General Services Administration, Department of Defense, and federal law enforcement agencies. We maintain the highest security clearances, progressive collapse standards, and automated archival systems.",
    capabilities: [
      "SCIF (Sensitive Compartmented Information Facility) construction",
      "Blast-resistant & progressive collapse structural envelopes",
      "Automated robotic archival & climate-controlled vaults",
      "Redundant emergency backup power & micro-grid links"
    ],
    bgImage: GovtFbiImg,
    category: "Public & Institutional",
    icon: <Shield size={20} color="var(--primary)" />
  },
  {
    market: "Healthcare",
    project: "UM Capital Region Medical Center",
    featuredProjectSlug: "inova-schar-cancer-institute",
    searchQuery: "Healthcare",
    desc: "Developing advanced medical complexes, high-reliability utility systems, and patient care spaces.",
    detailedDesc: "Clark builds patient-centric hospitals, surgical centers, and cancer care institutes with zero disruption to active clinical operations. We engineer medical gas systems, cleanroom air isolation, and proton therapy radiation vaults.",
    capabilities: [
      "Monolithic high-density concrete radiation vaults",
      "Negative-pressure containment ventilation & HEPA suites",
      "Zero-vibration surgical suites & precision imaging bays",
      "24/7 live utility tie-ins without hospital interruption"
    ],
    bgImage: UmCapitalImg,
    category: "Public & Institutional",
    icon: <HeartPulse size={20} color="var(--primary)" />
  },
  {
    market: "Hospitality",
    project: "Presidential Bathroom Suite",
    featuredProjectSlug: "conrad-washington-dc-hotel",
    searchQuery: "Hotel",
    desc: "A part of Clark's hospitality portfolio, the presidential bathroom suite includes a freestanding tub with windows overlooking downtown Chicago.",
    detailedDesc: "From luxury five-star hotel towers to premier resort destinations, Clark creates hospitality landmarks featuring custom architectural millwork, cantilevered atrium terraces, and world-class guest amenities.",
    capabilities: [
      "Curved double-glazed curtainwalls & soaring glass atriums",
      "Luxury guest suites & bespoke architectural millwork",
      "Rooftop infinity pools & high-capacity ballrooms",
      "Accelerated phased floor handovers for early opening"
    ],
    bgImage: PresidentialSuiteImg,
    category: "Commercial & Mixed-Use",
    icon: <Hotel size={20} color="var(--primary)" />
  },
  {
    market: "Interiors & Tenant Fit-Out",
    project: "Interiors & Tenant Fit-Out - Reston Gateway",
    featuredProjectSlug: "reston-gateway-interiors-tenant-fit-out",
    searchQuery: "Interiors",
    desc: "Creating customized tenant fit-outs and high-end workspaces optimized for collaboration.",
    detailedDesc: "Clark’s specialized interior fit-out division transforms raw commercial spaces into high-performance, collaborative corporate workplaces equipped with smart-building integrations and acoustic craftsmanship.",
    capabilities: [
      "Turnkey corporate headquarters buildouts & executive suites",
      "Custom architectural woodwork & ceiling baffles",
      "Smart conference rooms & unified AV/IT integrations",
      "Accelerated multi-floor trade staging & fast-track execution"
    ],
    bgImage: RestonGatewayImg,
    category: "Commercial & Mixed-Use",
    icon: <Layers size={20} color="var(--primary)" />
  },
  {
    market: "Judicial & Correctional",
    project: "Howard County Circuit Courthouse",
    featuredProjectSlug: "department-of-homeland-security-facilities",
    searchQuery: "Homeland",
    desc: "Constructing modern, secure courthouses and correctional structures with specialized systems.",
    detailedDesc: "Clark constructs secure courthouses, detention facilities, and judicial chambers incorporating separate public, judicial, and detainee circulation pathways, bullet-resistant casework, and secure acoustic designs.",
    capabilities: [
      "Triple-zoned secure circulation paths & holding cells",
      "Bullet-resistant casework & digital courtroom technologies",
      "Centralized security command & biometric access control",
      "High-durability civic architectural finishes & sustainability"
    ],
    bgImage: JudicialImg,
    category: "Public & Institutional",
    icon: <Scale size={20} color="var(--primary)" />
  },
  {
    market: "Museums & Monuments",
    project: "Smithsonian's National Air and Space Museum",
    featuredProjectSlug: "smithsonian-institution-renovations",
    searchQuery: "Smithsonian",
    desc: "Silver airplanes are suspended in the air in an atrium of the Smithsonian's National Air and Space Museum.",
    detailedDesc: "Clark has constructed many of America's most treasured cultural landmarks, including Smithsonian museums on the National Mall. We engineer specialized climate-controlled artifact galleries, suspension systems, and monumental facades.",
    capabilities: [
      "Historic artifact suspension & heavy cantilever rigging",
      "Ultra-precise microclimate temperature & humidity control",
      "Monumental stone & architectural bronze corona facades",
      "Underground gallery excavation in sensitive urban water tables"
    ],
    bgImage: MuseumsMonumentsImg,
    category: "Public & Institutional",
    icon: <Compass size={20} color="var(--primary)" />
  },
  {
    market: "Office",
    project: "midtown center",
    featuredProjectSlug: "1900-k-street-office-tower",
    searchQuery: "Office",
    desc: "Constructing premium glass-faced corporate office towers and sustainable urban developments.",
    detailedDesc: "Building the next generation of Class-A commercial office towers with high-efficiency triple-glazed facades, column-free floor plates, and dynamic employee wellness amenities.",
    capabilities: [
      "Smart electrochromic & triple-glazed curtainwall systems",
      "Central core post-tensioned concrete structural frames",
      "LEED & WELL certified indoor air quality & daylighting",
      "Activated amenity sky decks & green rooftop terraces"
    ],
    bgImage: MidtownCenterImg,
    category: "Commercial & Mixed-Use",
    icon: <Building size={20} color="var(--primary)" />
  },
  {
    market: "Renovation & Historic Preservation",
    project: "The Kia Forum",
    featuredProjectSlug: "the-kia-forum-renovation-historic-preservation",
    searchQuery: "Preservation",
    desc: "Restoring and upgrading historic landmarks, combining classical form with modern structural integrity.",
    detailedDesc: "Clark excels at breathing new life into historic landmarks and iconic entertainment venues. We reinforce load-bearing columns, restore landmark plaster and stone facades, and upgrade MEP systems without altering historic aesthetics.",
    capabilities: [
      "Laser scan-to-BIM structural diagnostics & non-destructive testing",
      "Historic masonry & ornamental plaster preservation",
      "Seismic column retrofits & carbon fiber composite wraps",
      "Modern acoustic & heavy theatrical rigging retrofits"
    ],
    bgImage: KiaForumImg,
    category: "Specialized & Renovation",
    icon: <History size={20} color="var(--primary)" />
  },
  {
    market: "Residential & Mixed-Use",
    project: "Parkline in Chicago",
    featuredProjectSlug: "parkline-in-chicago-residential-mixed-use",
    searchQuery: "Residential",
    desc: "The interior of the residential building Parkline in Chicago with couches, chairs, and overhead lighting.",
    detailedDesc: "Constructing luxury residential high-rises, multi-family apartment communities, and integrated retail environments in dense urban settings with complex transit boundary coordination.",
    capabilities: [
      "High-rise post-tensioned residential concrete framing",
      "Zero-lot-line logistics & active transit rail coordination",
      "Cantilevered balconies & rooftop resident sky lounges",
      "Mixed-use ground floor retail & subterranean parking"
    ],
    bgImage: ParklineChicagoImg,
    category: "Commercial & Mixed-Use",
    icon: <Home size={20} color="var(--primary)" />
  },
  {
    market: "Science",
    project: "Argonne",
    featuredProjectSlug: "argonne-national-laboratory-science-facility",
    searchQuery: "Science",
    desc: "Building high-tech laboratories, clean rooms, and computing facilities for scientific innovation.",
    detailedDesc: "Clark builds high-performance research laboratories, cleanrooms, and supercomputing centers for the Department of Energy and national research laboratories, meeting strict vibration and EMI thresholds.",
    capabilities: [
      "Decoupled monolithic concrete slabs (VC-F vibration criteria)",
      "Aluminum Faraday cage electromagnetic shielding",
      "High-purity process piping & specialized gas manifolds",
      "Ultra-low tolerance temperature & humidity cleanroom bays"
    ],
    bgImage: ArgonneScienceImg,
    category: "Infrastructure & Tech",
    icon: <Atom size={20} color="var(--primary)" />
  },
  {
    market: "Seismic",
    project: "Base isolator at LACMA",
    featuredProjectSlug: "lacma-seismic-retrofit-base-isolation",
    searchQuery: "Seismic",
    desc: "Implementing advanced seismic base isolators and engineering retrofits to secure public infrastructure.",
    detailedDesc: "Engineering advanced seismic retrofits, base isolation bearings, and dampers for hospitals, museums, and bridges to ensure structural survivability and continuous functionality during major seismic events.",
    capabilities: [
      "Friction pendulum base isolation bearings & sliders",
      "Hydraulic jacking networks & foundation underpinning",
      "Non-invasive carbon-fiber column wrapping & reinforcing",
      "Real-time digital displacement strain gauge monitoring"
    ],
    bgImage: BaseIsolatorImg,
    category: "Specialized & Renovation",
    icon: <Activity size={20} color="var(--primary)" />
  },
  {
    market: "Sports & Entertainment",
    project: "Chase Center",
    featuredProjectSlug: "capital-one-arena",
    searchQuery: "Arena",
    desc: "Chase Center basketball court during a game, featuring world-class sports facilities.",
    detailedDesc: "Clark delivers world-class sports arenas, MLB ballparks, concert halls, and FIFA World Cup stadiums engineered for maximum sightlines, acoustic clarity, and high-velocity crowd circulation.",
    capabilities: [
      "Long-span structural steel roof truss assembly & hoisting",
      "Advanced acoustic dampening & concert rigging grids",
      "High-capacity precast concrete seating bowl erection",
      "Fast-track opening schedule coordination & commissioning"
    ],
    bgImage: SportsEntertainmentImg,
    category: "Infrastructure & Tech",
    icon: <Trophy size={20} color="var(--primary)" />
  },
  {
    market: "Technology",
    project: "FBI Central Records Complex robots",
    featuredProjectSlug: "data-center-campuses-confidential-clients",
    searchQuery: "Data Center",
    desc: "FBI Central Records Complex robots operating in automated, tech-driven workspaces.",
    detailedDesc: "Constructing mission-critical data center campuses, mega semiconductor fabrication facilities, and automated robotics facilities with redundant utility grids, chilled water networks, and cleanroom containment.",
    capabilities: [
      "Tier III & Tier IV hyperscale data center construction",
      "Semiconductor ultra-pure cleanroom fabs & sub-fabs",
      "High-voltage 100MW substation connections & redundancy",
      "Automated robotic material handling tracks & high-bay flooring"
    ],
    bgImage: FbiRobotsImg,
    category: "Infrastructure & Tech",
    icon: <Cpu size={20} color="var(--primary)" />
  }
];

const CATEGORIES = ["All", "Commercial & Mixed-Use", "Public & Institutional", "Infrastructure & Tech", "Specialized & Renovation"];

export default function Markets() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSector, setSelectedSector] = useState(null);

  const filteredSectors = activeCategory === "All"
    ? SECTORS
    : SECTORS.filter(s => s.category === activeCategory);

  // Compute matching portfolio projects for the selected modal sector
  const relatedProjects = useMemo(() => {
    if (!selectedSector) return [];
    const featSlug = selectedSector.featuredProjectSlug;
    const query = (selectedSector.searchQuery || selectedSector.market).toLowerCase();

    // First pick exact featured benchmark project if matched
    const featured = UNIQUE_PROJECTS.find(p => getProjectSlug(p.title) === featSlug);

    // Then find 2-3 additional relevant projects from Clark's portfolio
    const others = UNIQUE_PROJECTS.filter(p => {
      if (featured && p.id === featured.id) return false;
      const t = p.title.toLowerCase();
      const s = (p.summary || '').toLowerCase();
      const c = (p.category || '').toLowerCase();
      const d = (p.details || '').toLowerCase();
      return t.includes(query) || s.includes(query) || c.includes(query) || d.includes(query);
    }).slice(0, featured ? 2 : 3);

    return featured ? [featured, ...others] : others;
  }, [selectedSector]);

  return (
    <div>
      {/* Scoped Zig-Zag & Realistic Blinking Eye Styles */}
      <style>{`
        .market-zigzag-card {
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

        .market-zigzag-card.layout-left {
          flex-direction: row;
        }

        .market-zigzag-card.layout-right {
          flex-direction: row-reverse;
        }

        .market-zigzag-card:hover {
          transform: translateY(-4px);
          border-color: #2563EB;
          box-shadow: 0 20px 45px -10px rgba(13, 26, 99, 0.16), 0 4px 14px rgba(37, 99, 235, 0.14);
        }

        .market-zigzag-card:hover .market-zigzag-img {
          transform: scale(1.06);
        }

        .market-image-wrap {
          flex: 0 0 48%;
          position: relative;
          min-height: 350px;
          overflow: hidden;
          background-color: #071038;
        }

        .market-zigzag-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .market-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(7, 16, 56, 0.82) 0%, rgba(7, 16, 56, 0.18) 55%, transparent 100%);
          z-index: 1;
        }

        .market-signature-badge {
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

        .market-signature-badge span {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #93C5FD;
          font-weight: 700;
        }

        .market-signature-badge strong {
          font-size: 0.92rem;
          font-weight: 700;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .market-index-badge {
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

        .market-content-wrap {
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
          71% {
            transform: scaleY(0.06);
            opacity: 0.15;
          }
          73% {
            transform: scaleY(0.06);
            opacity: 0.15;
          }
          76% {
            transform: scaleY(1);
            opacity: 1;
          }
          82% {
            transform: scaleY(1);
            opacity: 1;
          }
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

        .market-zigzag-card:hover .view-capabilities-btn {
          background-color: #1D4ED8;
          border-color: #1D4ED8;
        }

        @media (max-width: 920px) {
          .market-zigzag-card.layout-left,
          .market-zigzag-card.layout-right {
            flex-direction: column !important;
          }

          .market-image-wrap {
            flex: none;
            width: 100%;
            min-height: 250px;
            height: 270px;
          }

          .market-content-wrap {
            padding: 26px 20px;
          }
        }
      `}</style>

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

      {/* Filter & Alternating Zig-Zag Sectors Showcase */}
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

          {/* Alternating Zig-Zag List of Markets */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {filteredSectors.map((sector, i) => {
              const isEven = i % 2 === 0;
              const displayIndex = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;

              return (
                <div
                  key={sector.market}
                  onClick={() => setSelectedSector(sector)}
                  className={`market-zigzag-card ${isEven ? 'layout-left' : 'layout-right'}`}
                >
                  {/* Image Side (Left on even, Right on odd) */}
                  <div className="market-image-wrap">
                    <img
                      src={sector.bgImage}
                      alt={sector.market}
                      className="market-zigzag-img"
                    />
                    <div className="market-img-overlay" />

                    {/* Numerical Index Badge */}
                    <div className="market-index-badge">
                      {displayIndex}
                    </div>

                    {/* Featured Benchmark Project Badge */}
                    <div className="market-signature-badge">
                      <span>Featured Benchmark</span>
                      <strong>{sector.project}</strong>
                    </div>
                  </div>

                  {/* Content Side (Right on even, Left on odd) */}
                  <div className="market-content-wrap">
                    
                    {/* Category Pillar & Icon Tag */}
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
                        {sector.icon}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {sector.category} • Market {displayIndex}
                      </span>
                    </div>

                    {/* Market Title */}
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '12px', lineHeight: 1.25 }}>
                      {sector.market}
                    </h2>

                    {/* Description */}
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '22px' }}>
                      {sector.desc}
                    </p>

                    {/* Core Capabilities Bullets */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '10px',
                      marginBottom: '26px'
                    }}>
                      {sector.capabilities.slice(0, 3).map((cap, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                          <CheckCircle2 size={16} color="#2563EB" style={{ flexShrink: 0 }} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Action Footer with Realistic Blinking Eye Button */}
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

                      {/* Explore Market Button with Realistic Blinking Eye */}
                      <button
                        className="view-capabilities-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSector(sector);
                        }}
                      >
                        <RealisticBlinkingEye size={18} color="#FFFFFF" />
                        <span>Explore Market</span>
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

      {/* Interactive Sector Detail Modal */}
      <Modal
        isOpen={selectedSector !== null}
        onClose={() => setSelectedSector(null)}
        title={selectedSector?.market || ""}
        maxWidth="760px"
      >
        {selectedSector && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            {/* Modal Image Banner */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }}>
              <img
                src={selectedSector.bgImage}
                alt={selectedSector.market}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(13, 26, 99, 0.94) 0%, rgba(13, 26, 99, 0.35) 55%, transparent 100%)'
              }} />

              {/* Tag pill top-right */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                backgroundColor: 'rgba(13, 26, 99, 0.88)',
                color: '#93C5FD',
                border: '1px solid rgba(147, 197, 253, 0.3)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(8px)'
              }}>
                {selectedSector.category}
              </div>

              {/* Subtitle / Benchmark bottom-left */}
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                <span style={{ fontSize: '0.75rem', color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Featured Benchmark Project
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', margin: '4px 0 0 0', fontWeight: 800 }}>
                  {selectedSector.project}
                </h3>
              </div>
            </div>

            {/* Strategic Overview */}
            <div>
              <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 700 }}>
                Sector Overview & Strategic Focus
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.7', margin: 0 }}>
                {selectedSector.detailedDesc}
              </p>
            </div>

            {/* Core Sector Capabilities */}
            <div>
              <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', marginBottom: '12px', fontWeight: 700 }}>
                Core Sector Capabilities
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                {selectedSector.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Projects in this Market */}
            {relatedProjects.length > 0 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>
                    Portfolio Projects in this Market
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {relatedProjects.length} benchmark projects
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {relatedProjects.map((p) => {
                    const slug = getProjectSlug(p.title);
                    return (
                      <div
                        key={p.id}
                        onClick={() => {
                          setSelectedSector(null);
                          navigate(`/our-work/projects/${slug}`);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.06)';
                          e.currentTarget.style.borderColor = '#2563EB';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                          {p.image && (
                            <img
                              src={p.image}
                              alt={p.title}
                              style={{ width: '48px', height: '48px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }}
                            />
                          )}
                          <div style={{ minWidth: 0 }}>
                            <div style={{ color: 'var(--text-white)', fontSize: '0.9rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {p.title}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                              <MapPin size={12} />
                              <span>{p.location || 'United States'}</span>
                              <span>•</span>
                              <span>{p.category}</span>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2563EB', fontSize: '0.82rem', fontWeight: 700, flexShrink: 0 }}>
                          <span>Full Details</span>
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Modal Footer Controls */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '18px',
              marginTop: '4px'
            }}>
              <Button
                onClick={() => setSelectedSector(null)}
                variant="secondary"
                size="sm"
              >
                Close
              </Button>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Button
                  onClick={() => {
                    setSelectedSector(null);
                    navigate(`/our-work/projects?search=${encodeURIComponent(selectedSector.searchQuery || selectedSector.market)}`);
                  }}
                  variant="primary"
                  size="sm"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  View All {selectedSector.market} Projects
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="sm"
                >
                  Contact Market Lead
                </Button>
              </div>
            </div>

          </div>
        )}
      </Modal>
    </div>
  );
}
