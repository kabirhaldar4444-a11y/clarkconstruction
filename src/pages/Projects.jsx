import React, { useState } from 'react';
import { Search, MapPin, Calendar, HardHat, FileText } from 'lucide-react';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';

const CATEGORIES = ['All', 'Aviation & Infrastructure', 'Commercial & Mixed-Use', 'Healthcare & Government', 'Museums & Culture', 'Education'];

const PROJECTS = [
  {
    id: 1,
    title: 'Capital One Arena',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Monumental Sports & Entertainment',
    specs: '20,000 Seats, Indoor Sports Arena',
    date: '1997 / Renovated 2018',
    summary: 'A premier indoor sports and entertainment venue housing the Capitals and Wizards.',
    details: 'Clark Construction delivered this landmark downtown arena. The project required deep foundation excavation and structural steel truss placement directly above a high-traffic Metro station hub.',
    challenge: 'Executing heavy steel truss rigging in a congested city center with active subway tunnels directly underneath.',
    solution: 'We installed continuous seismic vibration sensors and scheduled all major truss lifts during low-frequency night shifts.'
  },
  {
    id: 2,
    title: 'CityCenterDC',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Hines Interests',
    specs: '2.5M sq. ft., Mixed-Use Retail & Residential',
    date: '2014',
    summary: 'A landmark multi-block development featuring luxury retail, apartments, and offices.',
    details: 'One of the largest downtown developments in D.C. history, spanning three city blocks. Constructed modern concrete towers linked by bridge bridges, targeting LEED Gold certification.',
    challenge: 'Coordinating concrete pours and scaffolding setups across multiple blocks without blocking central avenues.',
    solution: 'Designed a unified logistics command center to synchronize cement trucks, cranes, and delivery lanes.'
  },
  {
    id: 3,
    title: 'The Wharf (Phase 1 & 2)',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1517984922331-8dbaa8ffa9c1?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Hoffman-Madison Waterfront',
    specs: '3.2M sq. ft., Waterfront Development',
    date: '2022',
    summary: 'A massive waterfront destination containing residential, hotel, marina, and music venues.',
    details: 'Clark managed the general contracting of both phases of this waterfront development. We constructed marine bulkheads, parking structures, and high-rise hotel columns along the Potomac.',
    challenge: 'Water table infiltration and soft river silt threatening the excavation of the two-story parking garage.',
    solution: 'Installed a continuous slurry perimeter wall and automated dewatering pumps to stabilize the riverbank.'
  },
  {
    id: 4,
    title: 'Washington Nationals Ballpark (Nationals Park)',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'D.C. Sports & Entertainment Commission',
    specs: '41,000 Seats, LEED Silver Stadium',
    date: '2008',
    summary: 'The first major professional stadium in the United States to achieve LEED certification.',
    details: 'A state-of-the-art sports stadium featuring precast concrete seating decks and structural steel cantilever trusses, completed in just 22 months.',
    challenge: 'An aggressive schedule demanding stadium completion in time for the opening game of the MLB season.',
    solution: 'We ran 24/7 dual-shift operations and sequenced precast stadium concrete sections offsite for fast field assembly.'
  },
  {
    id: 5,
    title: 'LAX Midfield Satellite Concourse',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800',
    location: 'Los Angeles, California',
    client: 'Los Angeles World Airports',
    specs: '750,000 sq. ft., 12-Gate Concourse',
    date: '2021',
    summary: 'A modern concourse addition connected to the Tom Bradley Terminal via utility tunnels.',
    details: 'Constructed a multi-level passenger boarding pier featuring terminal gates, luggage channels, and premium lounges, utilizing BIM modeling to optimize plumbing corridors.',
    challenge: 'Connecting concourse utility paths through sub-apron tunnels without interrupting flight operations on active taxiways.',
    solution: 'We utilized micro-tunneling and automated guidance systems to excavate channels underneath active aircraft lanes.'
  },
  {
    id: 6,
    title: 'LAX Terminal Modernization Projects',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800',
    location: 'Los Angeles, California',
    client: 'Los Angeles World Airports',
    specs: 'Terminal Renovations & Ticket Counters',
    date: '2024',
    summary: 'Structural upgrade of baggage handling, ticketing halls, and security lanes.',
    details: 'Renovation of terminal facilities to integrate luggage screening equipment, wider passenger corridors, and seismic structural bracing.',
    challenge: 'Executing heavy demolition work directly adjacent to ticketing lines and airport security checkpoints.',
    solution: 'Constructed soundproof fire barriers and executed structural demolition in phased night zones.'
  },
  {
    id: 7,
    title: 'San Francisco International Airport (SFO) Projects',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800',
    location: 'San Francisco, California',
    client: 'San Francisco Airport Commission',
    specs: 'Terminal 1 Boarding Area B, LEED Gold',
    date: '2021',
    summary: 'Erection of a high-efficiency terminal wing with modern boarding gates and lounges.',
    details: 'Clark built a terminal wing incorporating solar arrays, displacement ventilation, and rainwater reuse networks, matching strict environmental requirements.',
    challenge: 'Rigid California seismic codes requiring structures to withstand significant lateral earthquake forces.',
    solution: 'Installed heavy seismic isolation bearings under structural columns to allow independent horizontal sway.'
  },
  {
    id: 8,
    title: 'Walter Reed National Military Medical Center',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800',
    location: 'Bethesda, Maryland',
    client: 'Naval Facilities Engineering Command',
    specs: '2.4M sq. ft., Healthcare Complex',
    date: '2011',
    summary: 'The flagship medical complex serving military personnel, combining modern laboratories and clinics.',
    details: 'Constructed new inpatient towers, clinical spaces, and administrative hubs, integrating central utilities and seismic resistance.',
    challenge: 'Building a new hospital directly next to operating surgery theaters sensitive to vibration.',
    solution: 'Used acoustic damping shields and hydraulic concrete splitters instead of traditional pneumatic hammers.'
  },
  {
    id: 9,
    title: 'National Museum of African American History and Culture',
    category: 'Museums & Culture',
    image: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Smithsonian Institution',
    specs: '400,000 sq. ft., Bronze Corona Facade',
    date: '2016',
    summary: 'An architectural icon on the National Mall featuring a three-tiered bronze-colored corona.',
    details: 'Clark managed the construction of this Smithsonian museum. The project required deep excavation beneath the water table and support of historic trees.',
    challenge: 'Supporting the heavy cantilevered corona facade and excavating five levels underground next to the Washington Monument.',
    solution: 'Designed a massive slurry wall support network and monitored monument alignment continuously with robotic sensors.'
  },
  {
    id: 10,
    title: 'Smithsonian Institution Renovations',
    category: 'Museums & Culture',
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Smithsonian Institution',
    specs: 'Historic Building Upgrades & Vaults',
    date: '2023',
    summary: 'Restoration of historic museums, structural columns, and climate-controlled galleries.',
    details: 'Renovating historic stone facades, updating mechanical lines, and reinforcing foundations to protect valuable artifact collections.',
    challenge: 'Updating HVAC and fire protection networks inside 150-year-old structures without altering historic plaster.',
    solution: 'Used VDC laser scanning to find hidden utility paths behind historic columns, avoiding invasive drilling.'
  },
  {
    id: 11,
    title: 'National Museum of the United States Army',
    category: 'Museums & Culture',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800',
    location: 'Fort Belvoir, Virginia',
    client: 'Army Historical Foundation',
    specs: '185,000 sq. ft., Stainless Steel Panels',
    date: '2020',
    summary: 'A museum honoring the history of the US Army, featuring reflective steel panels.',
    details: 'Constructed the museum building clad in laser-aligned stainless steel panels, housing exhibition halls, administrative suites, and memorial gardens.',
    challenge: 'Aligning the reflective steel facade panels to ensure seamless reflection lines.',
    solution: 'Deployed high-accuracy robotic total stations to inspect brackets and framing positions within millimeter tolerances.'
  },
  {
    id: 12,
    title: 'Conrad Washington DC Hotel',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Hines & Capitol Square Partners',
    specs: '370 Rooms, Luxury Hotel & Retail',
    date: '2019',
    summary: 'A luxury hotel featuring an all-glass curvilinear facade and elevated atrium.',
    details: 'We built this luxury hotel at CityCenterDC. The building features a post-tension concrete structure, curved double-glazing window ribbons, and green roof gardens.',
    challenge: 'Supporting a massive open-air interior atrium without cross-bracing steel columns.',
    solution: 'Utilized cantilevered concrete floor slabs anchored to a high-capacity central core structure.'
  },
  {
    id: 13,
    title: 'MGM National Harbor',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800',
    location: 'Oxon Hill, Maryland',
    client: 'MGM Resorts International',
    specs: '1.7M sq. ft., Resort, Casino & Theater',
    date: '2016',
    summary: 'A premier gaming resort and entertainment complex overlooking the Potomac River.',
    details: 'general contracting of a resort complex featuring casino floors, 300 hotel rooms, a 3,000-seat theater, and central mechanical plants.',
    challenge: 'Placing heavy mechanical plant modules on structural roofs without delaying interior finish timelines.',
    solution: 'Designed modular MEP racks offsite, hoisting them directly onto the roof structural frame in single lifts.'
  },
  {
    id: 14,
    title: 'Inova Schar Cancer Institute',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800',
    location: 'Fairfax, Virginia',
    client: 'Inova Health System',
    specs: '450,000 sq. ft., Cancer Care Center',
    date: '2019',
    summary: 'A modern cancer care center housing radiation vaults and clinical research suites.',
    details: 'Constructed outpatient care facilities, research labs, and heavy concrete shielding vaults for advanced proton therapy equipment.',
    challenge: 'Casting concrete vaults with zero void tolerances to block radiation leaks.',
    solution: 'We specified high-density aggregate concrete and used continuous thermal monitoring during the curing process.'
  },
  {
    id: 15,
    title: 'Johns Hopkins Medical Facilities',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800',
    location: 'Baltimore, Maryland',
    client: 'Johns Hopkins Medicine',
    specs: 'Clinical Towers & Advanced Laboratory Suites',
    date: '2022',
    summary: 'Modernization of advanced pediatric and adult care towers.',
    details: 'Constructing clinical wards, operating rooms, and central mechanical units, using VDC modeling to verify complex medical piping pathways.',
    challenge: 'Replacing primary electrical backup networks without cutting clinical power feeds.',
    solution: 'Used temporary power distribution systems and conducted live switch-overs during weekend off-peak hours.'
  },
  {
    id: 16,
    title: "Children's National Hospital Expansion",
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800',
    location: 'Washington, D.C.',
    client: "Children's National Health System",
    specs: 'Emergency Wing & Pediatric Care Chambers',
    date: '2023',
    summary: 'Modernization and expansion of pediatric intensive care wings.',
    details: 'We built a new pediatric ICU wing, implementing containment ventilation, medical gas mains, and acoustic barrier walls.',
    challenge: 'Executing heavy welding and framework directly adjacent to pediatric wards where noise had to be kept low.',
    solution: 'Set up temporary acoustic barriers and scheduled high-decibel operations during restricted windows.'
  },
  {
    id: 17,
    title: 'George Washington University Buildings',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'George Washington University',
    specs: 'Science & Engineering Hall, LEED Gold',
    date: '2015',
    summary: 'A premier educational facility housing advanced laboratories and clean rooms.',
    details: 'Erected an 8-story research hall incorporating specialized lab equipment, chemical storage systems, and solar water heating.',
    challenge: 'Drilling foundation supports directly adjacent to historical brick academic halls on a tight urban campus.',
    solution: 'Used continuous vibration sensors and deployed low-vibration auger-cast drilling techniques.'
  },
  {
    id: 18,
    title: 'University of Maryland Facilities',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
    location: 'College Park, Maryland',
    client: 'University of Maryland',
    specs: 'Cole Field House & Science Annexes',
    date: '2021',
    summary: 'Constructing modern scientific annexes and athletic research complexes.',
    details: 'Building scientific research halls, testing classrooms, and indoor sports research facilities, featuring long-span steel trusses.',
    challenge: 'Erecting 200-foot structural steel trusses over the stadium dome during campus semesters.',
    solution: 'We ran crane operations during early morning hours and established safety exclusion buffers.'
  },
  {
    id: 19,
    title: 'Virginia Tech Academic Buildings',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800',
    location: 'Blacksburg, Virginia',
    client: 'Virginia Tech',
    specs: 'Academic Halls & Hokie Stone Facades',
    date: '2022',
    summary: 'Constructing lecture facilities clad in traditional Hokie stone.',
    details: 'Built classrooms, laboratory suites, and study hubs, utilizing traditional Hokie stone cladding alongside modern curtain walls.',
    challenge: 'Sourcing and detailing natural Hokie stone to match historical university masonry.',
    solution: 'We partnered with local quarries and employed master masons to hand-cut and dress the exterior panels.'
  },
  {
    id: 20,
    title: 'The Anthem Music Venue',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'I.M.P. Productions',
    specs: '6,000 Capacity, Concert Hall',
    date: '2017',
    summary: 'A state-of-the-art concert venue and auditorium at The Wharf.',
    details: 'Built a multi-tiered concert venue, featuring column-free sightlines, high-end acoustic wood paneling, and heavy structural roof supports.',
    challenge: 'Ensuring zero noise transfer to apartments built directly above the venue.',
    solution: 'Built a double-walled "box-in-a-box" structural layout, isolating the auditorium via rubber sound dampeners.'
  },
  {
    id: 21,
    title: 'Capital Crossing Development',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Property Group Partners',
    specs: '2.2M sq. ft., Platform & Office Towers',
    date: '2020',
    summary: 'A multi-block project built on a concrete platform over an active interstate.',
    details: 'Clark built a concrete deck directly over Interstate 395, constructing three commercial office towers on top of the platform.',
    challenge: 'Casting massive concrete support columns between active highway lanes without stopping traffic.',
    solution: 'Designed precast column segments and erected them during overnight closures using specialized heavy-lift cranes.'
  },
  {
    id: 22,
    title: '1900 K Street Office Tower',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Tishman Speyer',
    specs: '12-Story Office Tower, Triple Glazing',
    date: '2019',
    summary: 'A premium downtown office building utilizing high-efficiency glass and green roof lines.',
    details: 'We built a modern commercial office tower. Features a structural steel frame, triple-glazed curtain walls, and central mechanical units.',
    challenge: 'Minimizing solar heat gain on the South facade without adding heavy external shading elements.',
    solution: 'Specified smart electrochromic glass panels that tint automatically based on sun angles.'
  },
  {
    id: 23,
    title: 'Fannie Mae Headquarters Renovation',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800',
    location: 'Washington, D.C.',
    client: 'Fannie Mae',
    specs: '700,000 sq. ft., Office Modernization',
    date: '2018',
    summary: 'Modernization of a corporate headquarters to support collaboration.',
    details: 'Restoration of historic brick elements, addition of central glass atriums, and update of all electrical, mechanical, and safety lines.',
    challenge: 'Renovating the structural framing of the historic brick wings while adding the glass courtyard roof.',
    solution: 'Used temporary steel support towers to hold the brick walls in place while casting the new concrete foundations.'
  },
  {
    id: 24,
    title: 'Department of Homeland Security Facilities',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=800',
    location: 'Various Locations',
    client: 'General Services Administration',
    specs: 'Secure administrative complexes & IT centers',
    date: '2023',
    summary: 'High-security administrative facilities with blast-resistant envelopes.',
    details: 'general contracting of government complexes containing secure SCIF zones, blast-resistant concrete panels, and redundant power nodes.',
    challenge: 'Meeting strict federal security guidelines for all site workers and supply chains.',
    solution: 'Established secure worker check-ins and vetted material shipments through a dedicated offsite sorting warehouse.'
  },
  {
    id: 25,
    title: 'Federal Courthouse Projects',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800',
    location: 'Multiple U.S. Cities',
    client: 'General Services Administration',
    specs: 'Reinforced Concrete Vaults & Courtrooms',
    date: '2022',
    summary: 'Constructing secure regional federal courthouses with blast-resistant structures.',
    details: 'Building modern courtrooms, holding cells, and secure parking platforms, utilizing high-strength precast concrete panels.',
    challenge: 'Ensuring structural stability against extreme pressure waves from potential external impacts.',
    solution: 'Used progressive collapse-resistant structural designs, linking all core steel columns with redundant load-path joints.'
  },
  {
    id: 26,
    title: 'Data Center Campuses (Confidential Clients)',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800',
    location: 'Virginia & Texas',
    client: 'Confidential Tech Enterprises',
    specs: '1.2M sq. ft., Tier III Data Centers',
    date: '2025',
    summary: 'Heavy utility infrastructure, server warehouses, and redundant substation links.',
    details: 'Constructed Tier III server hubs, installing concrete containment shells, redundant water chiller nodes, and direct links to 100MW substations.',
    challenge: 'Accelerating building timelines to deliver processing spaces to clients on tight delivery dates.',
    solution: 'Utilized prefabricated tilt-up wall panels and assembled the building envelope in weeks.'
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
            alt="Airport construction interior skeleton steel structures"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Our Case Studies</span>
          <h1 className="page-hero-title">Featured Projects</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Explore our collection of institutional, commercial, civil, and sustainable infrastructure developments.
          </p>
        </div>
      </section>

      {/* Projects Gallery controls */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          
          {/* Controls bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '20px 24px',
            borderRadius: '6px',
            marginBottom: '40px'
          }}>
            {/* Category tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: selectedCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                    color: selectedCategory === cat ? '#FFF' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== cat) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== cat) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)'
                }}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 16px 10px 40px',
                  backgroundColor: 'rgba(8, 10, 16, 0.4)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: '#FFF',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
          </div>

          {/* Grid Layout */}
          {filteredProjects.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
            }}>
              {filteredProjects.map((project) => (
                <div key={project.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  <Card
                    image={project.image}
                    title={project.title}
                    subtitle={project.category}
                    tag={project.location}
                    hoverEffect="zoom"
                    onClick={() => setActiveProject(project)}
                  >
                    <p style={{ marginBottom: '16px' }}>{project.summary}</p>
                    <Button variant="text" size="sm" onClick={() => setActiveProject(project)}>
                      View Full Details &rarr;
                    </Button>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: 'var(--bg-card)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <HardHat size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px', opacity: 0.5 }} />
              <h3 style={{ color: '#FFF', marginBottom: '8px' }}>No Projects Found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your filters or search keywords.</p>
            </div>
          )}

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
                  <span>Completed: {activeProject.date}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-color)',
              padding: '20px',
              borderRadius: '4px',
              marginBottom: '24px'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Project Client</span>
                <span style={{ color: '#FFF', fontWeight: 600, fontSize: '0.95rem' }}>{activeProject.client}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Sector / Category</span>
                <span style={{ color: '#FFF', fontWeight: 600, fontSize: '0.95rem' }}>{activeProject.category}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Specifications</span>
                <span style={{ color: '#FFF', fontWeight: 600, fontSize: '0.95rem' }}>{activeProject.specs}</span>
              </div>
            </div>

            {/* Text description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.7' }}>
              <div>
                <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '8px', borderLeft: '3px solid var(--primary)', paddingLeft: '10px' }}>Project Overview</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{activeProject.details}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.03)', border: '1px solid rgba(239, 68, 68, 0.1)', padding: '20px', borderRadius: '4px' }}>
                  <h5 style={{ color: 'var(--error)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>The Challenge</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{activeProject.challenge}</p>
                </div>

                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: '4px' }}>
                  <h5 style={{ color: 'var(--success)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Our Solution</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{activeProject.solution}</p>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div style={{ textAlign: 'right', marginTop: '24px' }}>
              <Button onClick={() => setActiveProject(null)} variant="secondary">
                Close Case Study
              </Button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}
