import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  MapPin,
  Calendar
} from 'lucide-react';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import ClarkMoUPdf from '../assets/CLARK CONSTRUCTION.pdf';

// Import local project images
import KovvadaNuclearImg from '../assets/Kovvada Nuclear Power Plant.jpg';
import RelianceJamnagarImg from '../assets/reliance-jamnagar.jpeg';
import GIFTCityImg from '../assets/gift-city-correct.png';
import NaviMumbaiAirportImg from '../assets/airport.jpg';
import RailwayMetroImg from '../assets/railway_metro_projects.png';
import DMICImg from '../assets/Delhi-Mumbai Industrial Corridor (DMIC).png';
import AKICImg from '../assets/Amritsar-Kolkata Industrial Corridor (AKIC).jpg';
import PaimanaImg from '../assets/Paimana.png';
import ChenabBridgeImg from '../assets/Chenab Rail Bridge  USBRL.jpg';
import BharatmalaImg from '../assets/Bharatmala Pariyojna.jpg';
import NationalMaritimeImg from '../assets/National Maritime Heritage Complex.jpg';
import AhmedabadDholeraImg from '../assets/Ahmedabad-Dholera Express.jpg';
import VisakhapatnamChennaiImg from '../assets/Visakhapatnam-Chennai Industrial Corridor.png';
import SagarmalaImg from '../assets/Sagarmala Project.png';
import BengaluruSuburbanImg from '../assets/Bengaluru Suburban Railway Project.png';
import JSWGreenEnergyImg from "../assets/JSW Group's Green Energy Projects.png";
import DholeraSmartCityImg from '../assets/Dholera Smart City Project.png';
import GangaVikasImg from '../assets/Ganga Vikas Project (Riverfront).png';
import MysoreWindImg from '../assets/Mysore Wind Power Project.png';
import SuratWindImg from '../assets/Surat Wind Energy Project.png';
import PugaGeothermalImg from '../assets/Puga Geothermal Energy Project.png';
import NagpurMetallurgicalImg from '../assets/metallurgical expansion project in Hingna, Nagpur, Maharashtra -.png';
import KrishnapatnamPortImg from '../assets/Million Krishnapatnam Port Expansion Project in Tirupati, Andhra Pradesh.png';

const PROJECTS = [
  {
    title: "Kovvada Nuclear Power Plant",
    subtitle: "Strategic Energy Infrastructure",
    description: "Construction of a massive 6-unit nuclear power station using AP1000 pressurized water reactor technology. The project involves extensive land reclamation, constructing seismic-resistant reactor containment vaults, cooling towers, and integrating a high-voltage grid substation. It represents a key milestone in India's transition to low-carbon base-load power, boosting industrial productivity in the southern region.",
    category: "Infrastructure",
    type: "Nuclear Power Generation",
    budget: "$35 Billion",
    duration: "2030 (Expected)",
    location: "Andhra Pradesh, India",
    contractor: "Westinghouse Electric Company & NPCIL",
    status: "Pre-construction",
    image: KovvadaNuclearImg
  },
  {
    title: "Reliance Jamnagar Refinery",
    subtitle: "Industrial Engineering",
    description: "Engineering and expanding the world's largest oil refinery complex, which handles over 1.24 million barrels per day. The scope includes commissioning crude distillation units, fluidized catalytic crackers, and marine terminal docks. Key engineering features include modular pre-assembly of heavy refining columns and advanced automation systems, ensuring India's self-sufficiency in refined petroleum products.",
    category: "Infrastructure (Refinery)",
    type: "Petrochemical Refining",
    budget: "$15 Billion",
    duration: "1996 - Present",
    location: "Jamnagar, Gujarat, India",
    contractor: "Bechtel Corporation & Reliance Industries",
    status: "Operational & Expanding",
    image: RelianceJamnagarImg
  },
  {
    title: "Bhadla Solar Park",
    subtitle: "Renewable Energy",
    description: "Development of the largest solar park in the world, spanning over 14,000 acres in the Thar Desert. The scope covers installing millions of photovoltaic panels, building power evacuation substations, and integrating robotic dry-cleaning systems to counter sand dust. This project generates over 2,245 MW of green electricity, significantly reducing fossil fuel dependency.",
    category: "Infrastructure (Solar)",
    type: "Renewable Power Generation",
    budget: "$1.6 Billion",
    duration: "2015 - 2020",
    location: "Jodhpur, Rajasthan, India",
    contractor: "NTPC, Adani Green Energy & Hero Future",
    status: "Fully Operational",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800"
  },
  {
    title: "GIFT City (Gujarat International Finance Tec-City)",
    subtitle: "Smart City Development",
    description: "Construction of India's first operational smart city and international financial services hub. The scope encompasses high-rise office towers, automated waste collection pipelines, district cooling plants, and multi-tier utility tunnels. It serves as a model for modern urban planning, attracting international financial institutions to Gujarat.",
    category: "Infrastructure",
    type: "FinTech Smart City",
    budget: "$20 Billion",
    duration: "Ongoing Projects",
    location: "Gandhinagar, Gujarat, India",
    contractor: "Larsen & Toubro (L&T Construction)",
    status: "Under Construction",
    image: GIFTCityImg
  },
  {
    title: "Navi Mumbai International Airport",
    subtitle: "Aviation Infrastructure",
    description: "Development of a multi-terminal international airport featuring dual parallel runways, passenger terminal buildings, and integrated cargo facilities. The engineering challenge required leveling regional hills and diverting the Ulwe river channel. Once complete, it will accommodate over 60 million passengers annually, relieving congestion at Mumbai's main airport.",
    category: "Infrastructure",
    type: "Aviation Terminal",
    budget: "$2.8 Billion",
    duration: "2018 - 2026",
    location: "Navi Mumbai, Maharashtra, India",
    contractor: "L&T Construction & Adani Airports",
    status: "Under Construction",
    image: NaviMumbaiAirportImg
  },
  {
    title: "Railway and Metro Projects – Global",
    subtitle: "Transit & Consulting",
    description: "Providing General Consulting, project management, and construction supervision services for extensive subway and light rail networks in metropolitan hubs. The scope includes underground tunnel boring, elevated viaduct structures, and signaling synchronization. It is a critical component of India's urban transit modernization program.",
    category: "Infrastructure",
    type: "Mass Transit Systems",
    budget: "$1–40 Billion (Portfolio Value)",
    duration: "Ongoing Projects",
    location: "Delhi NCR & Multiple Cities, India",
    contractor: "DMRC, L&T Metro, Tata Projects & Alstom",
    status: "Ongoing Operations",
    image: RailwayMetroImg
  },
  {
    title: "Delhi-Mumbai Industrial Corridor (DMIC)",
    subtitle: "Industrial Infrastructure",
    description: "A mega-infrastructure project aiming to develop new smart industrial cities and logistics parks along a 1,500 km high-speed freight rail line. The project aims to double employment and industrial output, linking India's political capital with its financial hub.",
    category: "Infrastructure",
    type: "Industrial Corridor",
    budget: "$90 Billion",
    duration: "2018 - 2027",
    location: "Western India Corridor",
    contractor: "NICDIT & Larsen & Toubro (L&T)",
    status: "Under Construction",
    image: DMICImg
  },
  {
    title: "Amritsar-Kolkata Industrial Corridor (AKIC)",
    subtitle: "Industrial Infrastructure",
    description: "Development of an economic corridor along the Eastern Dedicated Freight Corridor, spanning 20 cities. The project involves setting up integrated manufacturing zones, dry ports, and logistics parks, boosting trade and industrial growth across the densely populated northern and eastern plains.",
    category: "Infrastructure",
    type: "Industrial Corridor",
    budget: "$22 Billion",
    duration: "2020 - 2028",
    location: "Northern & Eastern India",
    contractor: "Tata Projects & L&T Construction",
    status: "Under Construction",
    image: AKICImg
  },
  {
    title: "PAIMANA - India",
    subtitle: "Expressway Network",
    description: "A comprehensive highway corridor modernization program connecting industrial hubs. The scope includes highway expansion, constructing intelligent toll plazas, and advanced traffic control centers, facilitating seamless commerce and high-speed freight operations.",
    category: "Infrastructure",
    type: "High-Capacity Highway Corridor",
    budget: "$100 Billion (Est.)",
    duration: "2018 - 2027",
    location: "Western India Corridor",
    contractor: "NHAI & Dilip Buildcon",
    status: "Under Construction",
    image: PaimanaImg
  },
  {
    title: "Chenab Rail Bridge / USBRL",
    subtitle: "Transit Infrastructure",
    description: "Construction of the world's highest railway bridge, spanning the Chenab River at a height of 359 meters. The engineering masterpiece utilized structural steel arches designed to withstand wind speeds of 266 km/h and high-intensity seismic activities, connecting Kashmir with the national rail network.",
    category: "Infrastructure",
    type: "Railway Bridge",
    budget: "$0.18 Billion",
    duration: "2004 - 2024",
    location: "Jammu & Kashmir, India",
    contractor: "Afcons Infrastructure & Konkan Railway",
    status: "Completed",
    image: ChenabBridgeImg
  },
  {
    title: "High Productivity Freight Networks",
    subtitle: "Transit Infrastructure",
    description: "Enhancing the freight transit network by constructing dedicated corridors with double-stack container capacity. The project involves automatic track layout, high-capacity catenary installations, and automatic warning systems, reducing transportation costs and transit times.",
    category: "Infrastructure",
    type: "Freight Transport Corridor",
    budget: "$12 Billion",
    duration: "2019 - 2025",
    location: "Various Corridors, India",
    contractor: "DFCCIL & GMR Infrastructure",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  },
  {
    title: "Bharatmala Pariyojna",
    subtitle: "Road Development",
    description: "A nationwide road development program constructing over 34,800 km of expressways and state highways. Focus areas include optimizing border and international connectivity, economic corridors, and coastal roads, boosting agricultural and industrial market access.",
    category: "Infrastructure",
    type: "Road Development Program",
    budget: "$130 Billion",
    duration: "2018 - 2026",
    location: "Nationwide India",
    contractor: "NHAI, Larsen & Toubro & Dilip Buildcon",
    status: "Under Construction",
    image: BharatmalaImg
  },
  {
    title: "National Maritime Heritage Complex",
    subtitle: "Cultural Heritage",
    description: "Constructing a world-class historical theme park and educational center dedicated to India's ancient maritime history. The complex features a reconstruction of the ancient Lothal port, museums, research centers, and light shows, revitalizing regional tourism.",
    category: "Infrastructure",
    type: "Tourist & Cultural Center",
    budget: "$0.40 Billion",
    duration: "2022 - 2026",
    location: "Lothal, Gujarat, India",
    contractor: "Tata Projects Limited",
    status: "Under Construction",
    image: NationalMaritimeImg
  },
  {
    title: "Ahmedabad-Dholera Express",
    subtitle: "Transit Infrastructure",
    description: "A 109 km long, 4-lane high-speed expressway connecting Ahmedabad to the new Dholera Special Investment Region. The highway features precast concrete overpasses and intelligent monitoring systems, accelerating regional freight movement.",
    category: "Infrastructure",
    type: "Express Highway",
    budget: "$0.75 Billion",
    duration: "2021 - 2025",
    location: "Gujarat, India",
    contractor: "Sadbhav Engineering & L&T Construction",
    status: "Under Construction",
    image: AhmedabadDholeraImg
  },
  {
    title: "New Power Transformer Mfg. Project in Solan",
    subtitle: "Electricity Infrastructure",
    description: "Establishment of an advanced power transformer manufacturing facility. The plant specializes in high-voltage AC/DC grid transformers, enhancing the reliability of the national power transmission network and reducing electrical losses.",
    category: "Infrastructure",
    type: "Electricity Grid Factory",
    budget: "$0.20 Billion",
    duration: "2023 - 2025",
    location: "Solan, Himachal Pradesh, India",
    contractor: "Bharat Heavy Electricals Limited (BHEL)",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800"
  },
  {
    title: "Visakhapatnam-Chennai Industrial Corridor",
    subtitle: "Industrial Infrastructure",
    description: "Developing an industrial corridor along the east coast to enhance port-led manufacturing. The scope covers building expressways, industrial park water networks, power substations, and dedicated logistics facilities.",
    category: "Infrastructure",
    type: "Industrial Corridor",
    budget: "$5 Billion",
    duration: "2016 - 2028",
    location: "Andhra Pradesh, India",
    contractor: "L&T Construction & Tata Projects",
    status: "Under Construction",
    image: VisakhapatnamChennaiImg
  },
  {
    title: "Sagarmala Project",
    subtitle: "Maritime Infrastructure",
    description: "A comprehensive port modernization and port-led development program. Scope includes upgrading harbor depths, constructing new deepwater ports, improving rail-road hinterland connections, and setting up coastal economic zones.",
    category: "Infrastructure",
    type: "Ports & Maritime Network",
    budget: "$120 Billion",
    duration: "2035",
    location: "Coastal Regions, India",
    contractor: "Adani Ports, JSW Infrastructure & VPA",
    status: "Under Construction",
    image: SagarmalaImg
  },
  {
    title: "Bengaluru Suburban Railway Project (BSRP)",
    subtitle: "Transit Infrastructure",
    description: "Construction of a 148 km suburban commuter rail network featuring four corridors. The project introduces elevated commuter stations, automatic train protection, and grade-separated crossings to resolve transit congestion in Bengaluru.",
    category: "Infrastructure",
    type: "Railways & Urban Transit",
    budget: "$2.1 Billion",
    duration: "2028",
    location: "Bengaluru, Karnataka, India",
    contractor: "K-RIDE & L&T Construction",
    status: "Under Construction",
    image: BengaluruSuburbanImg
  },
  {
    title: "JSW Group's Green Energy Projects",
    subtitle: "Renewable Energy",
    description: "A portfolio of utility-scale wind and solar power plants linked by advanced battery energy storage. The scope encompasses wind turbine installation, solar arrays, and high-voltage transmission interconnects, helping India achieve green energy targets.",
    category: "Infrastructure",
    type: "Wind & Solar Generation",
    budget: "$3.8 Billion",
    duration: "2030",
    location: "Karnataka, Maharashtra & Tamil Nadu",
    contractor: "JSW Energy & GE Renewable Energy",
    status: "Under Construction",
    image: JSWGreenEnergyImg
  },
  {
    title: "Dholera Smart City Project",
    subtitle: "Smart City & Infrastructure",
    description: "A greenfield industrial smart city project being developed on a massive 920 sq km site. The engineering scope includes smart utility channels, computerized traffic grids, automated waste management, and rainwater harvesting nodes.",
    category: "Infrastructure",
    type: "Smart City",
    budget: "$15 Billion",
    duration: "2040",
    location: "Dholera, Gujarat, India",
    contractor: "DICDL & L&T Construction",
    status: "Under Construction",
    image: DholeraSmartCityImg
  },
  {
    title: "Ganga Vikas Project (Riverfront)",
    subtitle: "Water Infrastructure",
    description: "Rejuvenating and beautifying the Ganges riverfront. The scope involves building concrete retaining ghats, public parks, sewage treatment plants, and river clean-up machinery, enhancing environmental health.",
    category: "Infrastructure",
    type: "Riverfront Development",
    budget: "$1.5 Billion",
    duration: "2025",
    location: "Uttar Pradesh & Bihar, India",
    contractor: "NMCG, Dilip Buildcon & Shapoorji Pallonji",
    status: "Under Construction",
    image: GangaVikasImg
  },
  {
    title: "Mysore Wind Power Project",
    subtitle: "Renewable Energy",
    description: "Constructing wind generator farms near Mysore. Scope includes turbine installation, structural foundations, and grid connectivity, delivering green electricity to rural southern Karnataka.",
    category: "Infrastructure",
    type: "Wind Power Generation",
    budget: "$0.25 Billion",
    duration: "2022-2025",
    location: "Mysore, Karnataka, India",
    contractor: "Suzlon Energy Limited",
    status: "Completed",
    image: MysoreWindImg
  },
  {
    title: "Surat Wind Energy Project",
    subtitle: "Renewable Energy",
    description: "Installation of high-capacity onshore wind turbines along the Surat coast, producing green energy for the region's diamond and textile manufacturing plants.",
    category: "Infrastructure",
    type: "Wind Power Generation",
    budget: "$0.30 Billion",
    duration: "2023 - 2025",
    location: "Surat, Gujarat, India",
    contractor: "Inox Wind & ReNew Power",
    status: "Completed",
    image: SuratWindImg
  },
  {
    title: "Puga Geothermal Energy Project",
    subtitle: "Renewable Energy",
    description: "India's first geothermal power project, tapping high-temperature steam reservoirs in the Puga Valley. The project involves drilling deep geothermal wells and constructing a binary power plant, providing sustainable power to Ladakh.",
    category: "Infrastructure",
    type: "Geothermal Power Generation",
    budget: "$0.05 Billion",
    duration: "2022 - 2026",
    location: "Puga Valley, Ladakh, India",
    contractor: "Oil and Natural Gas Corporation (ONGC)",
    status: "Under Construction",
    image: PugaGeothermalImg
  },
  {
    title: "Nagpur Metallurgical Expansion Project",
    subtitle: "Industrial Infrastructure",
    description: "Expansion of metal processing facilities, involving high-capacity blast furnaces, automatic rolling mills, and emission reduction scrubbers, boosting regional steel and alloy manufacturing.",
    category: "Infrastructure",
    type: "Metallurgical Facilities",
    budget: "$0.45 Billion",
    duration: "2023 - 2026",
    location: "Hingna, Nagpur, Maharashtra, India",
    contractor: "Tata Projects & SMS Group",
    status: "Under Construction",
    image: NagpurMetallurgicalImg
  },
  {
    title: "Krishnapatnam Port Expansion Project",
    subtitle: "Maritime Infrastructure",
    description: "Expanding the deepwater port infrastructure by constructing new container berths, automating bulk cargo channels, and deepening harbor draft to handle larger capesize vessels, boosting maritime commerce.",
    category: "Infrastructure",
    type: "Port & Marine Terminal",
    budget: "$0.85 Billion",
    duration: "2022 - 2026",
    location: "Krishnapatnam, Andhra Pradesh, India",
    contractor: "Adani Ports (APSEZ)",
    status: "Under Construction",
    image: KrishnapatnamPortImg
  }
];

export default function IndiaPartnerships() {
  const [activeProject, setActiveProject] = useState(null);

  const PROJECTS_WITH_SUBCONTRACTOR = PROJECTS.map(project => ({
    ...project,
    subContractor: "Clark Construction"
  }));

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
              Clark Construction supports projects in India through subcontracting, technology licensing, and EPCM / PMC / General Consultant roles—helping local partners manage, design, coordinate, and supervise project delivery to achieve stronger schedule, cost, safety, and quality outcomes.
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
            {PROJECTS_WITH_SUBCONTRACTOR.map((project, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  padding: '24px',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-normal)',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {/* Project Image */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '200px', 
                  borderRadius: '4px', 
                  overflow: 'hidden', 
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: project.status === 'Completed' || project.status === 'Fully Operational' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(217, 119, 6, 0.9)',
                    color: '#FFF',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {project.status}
                  </div>
                </div>

                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                  {project.subtitle}
                </span>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '20px' }}>
                  {project.description}
                </p>

                {/* Specifications Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-color)',
                  padding: '12px 14px',
                  borderRadius: '4px',
                  marginBottom: '20px',
                  fontSize: '0.75rem'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '2px' }}>Budget</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{project.budget}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '2px' }}>Timeline</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{project.duration}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '2px' }}>Type</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{project.type}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '2px' }}>Contractor</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{project.contractor}</span>
                  </div>
                  <div style={{ gridColumn: 'span 2', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '8px', marginTop: '4px' }}>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '2px' }}>Sub Contractor</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{project.subContractor}</span>
                  </div>
                </div>

                <div style={{ 
                  marginTop: 'auto', 
                  paddingTop: '12px', 
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 800 }}>📍</span>
                    <span>{project.location}</span>
                  </div>
                  <span style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.75rem' }}>
                    Details &rarr;
                  </span>
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

      {/* Case Study Details Modal */}
      <Modal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title || ''}
        maxWidth="800px"
      >
        {activeProject && (
          <div>
            {/* Modal Image */}
            <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: '4px', overflow: 'hidden', marginBottom: '24px' }}>
              <img
                src={activeProject.image}
                alt={activeProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '24px',
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF', fontSize: '0.85rem' }}>
                  <MapPin size={16} color="var(--primary)" />
                  <span>{activeProject.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF', fontSize: '0.85rem' }}>
                  <Calendar size={16} color="var(--primary)" />
                  <span>Timeline: {activeProject.duration}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-color)',
              padding: '20px',
              borderRadius: '4px',
              marginBottom: '24px'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Category</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{activeProject.category}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Type</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{activeProject.type}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Budget</span>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem' }}>{activeProject.budget}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Status</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{activeProject.status}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Contractor</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{activeProject.contractor}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Sub Contractor</span>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem' }}>{activeProject.subContractor}</span>
              </div>
            </div>

            {/* Text description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.7' }}>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '8px', borderLeft: '3px solid var(--primary)', paddingLeft: '10px' }}>Project Overview</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{activeProject.description}</p>
              </div>
            </div>

            {/* Close Button */}
            <div style={{ textAlign: 'right', marginTop: '24px' }}>
              <Button onClick={() => setActiveProject(null)} variant="secondary">
                Close Details
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
