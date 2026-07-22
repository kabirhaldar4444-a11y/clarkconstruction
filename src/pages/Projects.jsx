import React, { useState } from 'react';
import { Search, MapPin, Calendar, HardHat, FileText } from 'lucide-react';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';
import ProjectDetailView from '../components/UI/ProjectDetailView';

// Import local project images
import CapitalOneArenaImg from '../assets/Capital One Arena.png';
import CityCenterDCImg from '../assets/CityCenterDC.png';
import TheWharfImg from '../assets/The Wharf (Phase 1 & 2).png';
import NationalsParkImg from '../assets/Nationals Ballpark Nationals Park.png';
import LAXMidfieldImg from '../assets/LAX Midfield Satellite Concourse.png';
import LAXTerminalImg from '../assets/LAX Terminal Modernization Projects.png';
import WalterReedImg from '../assets/Walter Reed National Military Medical Center.png';
import SmithsonianImg from '../assets/Smithsonian Institution Renovations.png';
import FannieMaeImg from '../assets/Fannie Mae Headquarters Renovation.png';
import DHSImg from '../assets/Department of Homeland Security Facilities.png';
import TexasCentralImg from '../assets/Texas Central High-Speed Rail.png';
import GatewayImg from '../assets/gateway program.png';
import BrightlineWestImg from '../assets/Brightline West High-Speed Rail.png';
import GordieHoweImg from '../assets/Gordie Howe International Bridge.png';
import HudsonTunnelImg from '../assets/Hudson Tunnel Project.png';
import I45ExpansionImg from '../assets/I-45 North Houston Expansion.png';
import HonoluluRailImg from '../assets/Honolulu Rail Transit Extension.png';
import LAMetroImg from '../assets/Los Angeles Metro D Line Extension.png';
import SecondAveSubwayImg from '../assets/Second Avenue Subway Phase 2.png';
import PhoenixI10Img from '../assets/Phoenix Interstate I-10 Expansion.png';
import MicronIdahoImg from '../assets/Micron Idaho Memory Manufacturing Campus.png';
import LouisianaLNGImg from '../assets/Louisiana LNG Export Terminal.png';
import PlaqueminesLNGImg from '../assets/Plaquemines LNG Phase Expansion.png';
import EmpireWindImg from '../assets/Empire Wind Project.png';
import CoastalVirginiaImg from '../assets/Coastal Virginia Offshore Wind Project.png';
import LAConventionImg from '../assets/Los Angeles Convention Center Expansion.png';
import MiamiFreedomImg from '../assets/Miami Freedom Park Development.png';
import The78Img from '../assets/The 78 Chicago Development.png';
import NashvilleEastImg from '../assets/Nashville East Bank Development.png';
import SLCInnovationImg from '../assets/Salt Lake City Innovation District.png';

const CATEGORIES = ['All', 'Aviation & Infrastructure', 'Commercial & Mixed-Use', 'Healthcare & Government', 'Museums & Culture', 'Education', 'Industrial', 'Energy'];

const PROJECTS = [
  {
    id: 1,
    title: 'Capital One Arena',
    category: 'Commercial & Mixed-Use',
    image: CapitalOneArenaImg,
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
    image: CityCenterDCImg,
    location: 'Washington, D.C.',
    client: 'Hines Interests',
    specs: '2.5M sq. ft., Mixed-Use Retail & Residential',
    date: '2014',
    summary: 'A landmark multi-block development featuring luxury retail, apartments, and offices.',
    details: 'One of the largest downtown developments in D.C. history, spanning three city blocks. Constructed modern concrete towers linked by bridges, targeting LEED Gold certification.',
    challenge: 'Coordinating concrete pours and scaffolding setups across multiple blocks without blocking central avenues.',
    solution: 'Designed a unified logistics command center to synchronize cement trucks, cranes, and delivery lanes.'
  },
  {
    id: 3,
    title: 'The Wharf (Phase 1 & 2)',
    category: 'Commercial & Mixed-Use',
    image: TheWharfImg,
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
    image: NationalsParkImg,
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
    image: LAXMidfieldImg,
    location: 'Los Angeles, California',
    client: 'Los Angeles World Airports',
    specs: '750,000 sq. ft., 12-Gate Concourse',
    date: '2021',
    summary: 'A modern concourse addition connected to the Tom Bradley Terminal via utility tunnels.',
    details: 'Constructing a multi-level passenger boarding pier featuring terminal gates, luggage channels, and premium lounges, utilizing BIM modeling to optimize plumbing corridors.',
    challenge: 'Connecting concourse utility paths through sub-apron tunnels without interrupting flight operations on active taxiways.',
    solution: 'We utilized micro-tunneling and automated guidance systems to excavate channels underneath active aircraft lanes.'
  },
  {
    id: 6,
    title: 'LAX Terminal Modernization Projects',
    category: 'Aviation & Infrastructure',
    image: LAXTerminalImg,
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
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800',
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
    image: WalterReedImg,
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
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800',
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
    image: SmithsonianImg,
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
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800',
    location: 'Washington, D.C.',
    client: "Children's National Hospital",
    specs: '160,000 sq. ft., Pediatric Care Unit',
    date: '2020',
    summary: 'Expansion of the health campus to include pediatric care wards.',
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
    details: 'A 8-story research hall incorporating specialized lab equipment, chemical storage systems, and solar water heating.',
    challenge: 'Drilling foundation supports directly adjacent to historical brick academic halls on a tight urban campus.',
    solution: 'Used continuous vibration sensors and deployed low-vibration auger-cast drilling techniques.'
  },
  {
    id: 18,
    title: 'University of Maryland Facilities',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=800',
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
    image: FannieMaeImg,
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
    image: DHSImg,
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
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800',
    location: 'Virginia & Texas',
    client: 'Confidential Tech Enterprises',
    specs: '1.2M sq. ft., Tier III Data Centers',
    date: '2025',
    summary: 'Heavy utility infrastructure, server warehouses, and redundant substation links.',
    details: 'Constructed Tier III server hubs, installing concrete containment shells, redundant water chiller nodes, and direct links to 100MW substations.',
    challenge: 'Accelerating building timelines to deliver processing spaces to clients on tight delivery dates.',
    solution: 'Utilized prefabricated tilt-up wall panels and assembled the building envelope in weeks.'
  },
  {
    id: 27,
    title: 'Texas Central High-Speed Rail',
    category: 'Aviation & Infrastructure',
    image: TexasCentralImg,
    location: 'Dallas, Texas',
    client: 'Texas Central Partners',
    specs: '386 km, 240 mph High-Speed Line',
    date: '2025–2034',
    summary: 'A high-speed rail line linking Dallas and Houston in under 90 minutes.',
    details: 'Clark is part of the infrastructure delivery consortium constructing elevated guide-ways, terminal hubs, and safety enclosures. The corridor uses Japanese N700S Shinkansen technology adapted for North American specifications.',
    challenge: 'Navigating expansive clay soil conditions across Texas and ensuring flat grade tolerances for 200+ mph speeds.',
    solution: 'We used deep shaft drilled shafts and pre-stressed concrete span girders designed to absorb seismic and thermal movements.'
  },
  {
    id: 28,
    title: 'Gateway Program',
    category: 'Aviation & Infrastructure',
    image: GatewayImg,
    location: 'New York, New York',
    client: 'Gateway Development Commission',
    specs: '16 km rail corridor, passenger rail upgrades',
    date: '2023–2038',
    summary: 'A massive rail infrastructure expansion to double rail capacity between Newark and New York City.',
    details: 'An overarching infrastructure program upgrading rail tracks, bridges, and traction power substations along the critical Northeast Corridor.',
    challenge: 'Executing track updates on active, high-traffic passenger lines without suspending Amtrak or NJ Transit services.',
    solution: 'Implemented prefabricated rail assemblies that could be rolled and pinned into place during tight 4-hour night work slots.'
  },
  {
    id: 29,
    title: 'Brightline West High-Speed Rail',
    category: 'Aviation & Infrastructure',
    image: BrightlineWestImg,
    location: 'Las Vegas, Nevada',
    client: 'Brightline West',
    specs: '350 km, Fully Electric Rail System',
    date: '2024–2031',
    summary: 'A high-speed passenger rail system connecting Las Vegas and Southern California.',
    details: 'Constructing fully electric high-speed rail tracks, stations in Las Vegas, Rancho Cucamonga, and maintenance facilities, targeting zero-emission operations.',
    challenge: 'Extreme desert heat and grade changes through the Cajon Pass threatening worker safety and rail alignment.',
    solution: 'Utilized real-time weather monitoring to schedule concrete pours and implemented automated track laying machinery.'
  },
  {
    id: 30,
    title: 'Gordie Howe International Bridge',
    category: 'Aviation & Infrastructure',
    image: GordieHoweImg,
    location: 'Detroit, Michigan',
    client: 'Windsor-Detroit Bridge Authority',
    specs: '2.5 km, Cable-Stayed Bridge',
    date: '2018–2030',
    summary: 'A cable-stayed bridge spanning the Detroit River, connecting Detroit and Windsor.',
    details: 'Constructing the longest cable-stayed bridge in North America, including customs plazas and port of entry facilities.',
    challenge: 'Erecting 220-meter tall bridge towers and supporting long-span cable anchors over a busy international shipping channel.',
    solution: 'Used jump-form systems for continuous tower casting and GPS-guided crane rigging for precision stay-cable installation.'
  },
  {
    id: 31,
    title: 'Hudson Tunnel Project',
    category: 'Aviation & Infrastructure',
    image: HudsonTunnelImg,
    location: 'New York, New York',
    client: 'Gateway Development Commission',
    specs: '14 km twin-bore tunnels',
    date: '2024–2035',
    summary: 'Excavation of new rail tunnels under the Hudson River and rehabilitation of existing tunnels.',
    details: 'Boring two new passenger rail tunnels and installing concrete liners, drainage systems, and high-voltage traction systems.',
    challenge: 'Boring through soft river silt and hard bedrock directly beneath active shipping channels.',
    solution: 'Deployed pressurized Slurry Tunnel Boring Machines (TBMs) to balance face pressure and prevent riverbed subsidence.'
  },
  {
    id: 32,
    title: 'I-45 North Houston Expansion',
    category: 'Aviation & Infrastructure',
    image: I45ExpansionImg,
    location: 'Houston, Texas',
    client: 'Texas Department of Transportation',
    specs: '39 km highway expansion',
    date: '2023–2032',
    summary: 'Reconstructing and widening the I-45 corridor to improve safety and ease congestion.',
    details: 'Expanding travel lanes, constructing retention ponds, adding bicycle lanes, and rebuilding highway interchanges in North Houston.',
    challenge: 'Massive utility relocation and flood mitigation along the interstate in a hurricane-prone city.',
    solution: 'Integrated advanced BIM utility models and constructed deep detention basins to redirect heavy stormwater flows.'
  },
  {
    id: 33,
    title: 'Honolulu Rail Transit Extension',
    category: 'Aviation & Infrastructure',
    image: HonoluluRailImg,
    location: 'Honolulu, Hawaii',
    client: 'Honolulu Authority for Rapid Transportation',
    specs: '32 km elevated rail line',
    date: '2011–2031',
    summary: 'Constructing Hawaii\'s first elevated rapid transit rail system.',
    details: 'Erecting precast concrete guideway spans, station terminals, and maintenance yards along the southern coast of Oahu.',
    challenge: 'Erecting heavy elevated guideways through congested commercial corridors and protecting native archaeological sites.',
    solution: 'Deployed custom overhead gantry launchers to lift and set guideway spans with minimal ground footprint.'
  },
  {
    id: 34,
    title: 'Los Angeles Metro D Line Extension',
    category: 'Aviation & Infrastructure',
    image: LAMetroImg,
    location: 'Los Angeles, California',
    client: 'LA Metro',
    specs: '14 km subway tunnel, new stations',
    date: '2015–2031',
    summary: 'Extending the subway from Koreatown to West Los Angeles.',
    details: 'Boring twin tunnels and building seven new underground stations, providing a fast transit link between downtown LA and Westwood.',
    challenge: 'Boring through historic tar pits and pockets of methane gas under Wilshire Boulevard.',
    solution: 'Equipped TBMs with real-time gas detectors and used double-gasketed liners to prevent water/gas ingress.'
  },
  {
    id: 35,
    title: 'Second Avenue Subway Phase 2',
    category: 'Aviation & Infrastructure',
    image: SecondAveSubwayImg,
    location: 'New York, New York',
    client: 'MTA New York City Transit',
    specs: '2.4 km subway extension',
    date: '2024–2033',
    summary: 'Extending the Q line from 96th Street to 125th Street in East Harlem.',
    details: 'Constructing new station vaults, passenger tunnels, and ventilation buildings under high-density Manhattan blocks.',
    challenge: 'Excavating huge station caverns in close proximity to historic residential foundations.',
    solution: 'Used controlled drill-and-blast methods combined with continuous micro-seismic structural monitoring.'
  },
  {
    id: 36,
    title: 'Phoenix Interstate I-10 Expansion',
    category: 'Aviation & Infrastructure',
    image: PhoenixI10Img,
    location: 'Phoenix, Arizona',
    client: 'Arizona Department of Transportation',
    specs: '42 km highway widening',
    date: '2024–2032',
    summary: 'Widening the I-10 freeway and rebuilding major bridge crossings.',
    details: 'Adding new general purpose and HOV lanes, reconstructing the Broadway Curve interchange, and implementing smart traffic control sensors.',
    challenge: 'Minimizing traffic delays on one of Arizona\'s busiest commercial corridors during construction.',
    solution: 'Constructed temporary bypass lanes and used prefabricated bridge elements to complete overpasses in 48-hour weekend closures.'
  },
  {
    id: 37,
    title: 'Intel Ohio Mega Semiconductor Campus',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800',
    location: 'Columbus, Ohio',
    client: 'Intel Corporation',
    specs: '1,000 acres, fabrication plants',
    date: '2022–2035',
    summary: 'A massive semiconductor manufacturing hub featuring multiple cleanrooms.',
    details: 'General contracting for two high-tech semiconductor fabs, administrative centers, utility buildings, and water treatment plants.',
    challenge: 'Meeting cleanroom vibration criteria (VC-F level) to prevent sub-nanometer lithography errors.',
    solution: 'Cast five-foot-thick monolithic concrete foundations with specialized reinforcing fibers and decoupled structural cores.'
  },
  {
    id: 38,
    title: 'TSMC Arizona Semiconductor Expansion',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
    location: 'Phoenix, Arizona',
    client: 'Taiwan Semiconductor Manufacturing Company',
    specs: '1,100 acres, 3 Fab Units',
    date: '2021–2035',
    summary: 'An advanced semiconductor campus producing 2nm and 3nm microchips.',
    details: 'Constructing multiple ultra-clean fabrication facilities, gas distribution yards, and high-purity chemical warehouses.',
    challenge: 'Routing thousands of miles of high-purity piping and electrical conduits within highly congested corridors.',
    solution: 'Developed a comprehensive 3D BIM coordination model, prefabricating complex piping modules offsite for drop-in installation.'
  },
  {
    id: 39,
    title: 'Samsung Taylor Semiconductor Campus',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800',
    location: 'Taylor, Texas',
    client: 'Samsung Electronics',
    specs: '1,200 acres, advanced chip plant',
    date: '2022–2034',
    summary: 'A state-of-the-art semiconductor facility supporting next-gen chip technology.',
    details: 'Erecting advanced fab buildings, cleanroom support facilities, sub-fabrication plazas, and automated material handling links.',
    challenge: 'Ensuring absolute cleanroom air filtration and moisture levels during high-velocity outdoor construction phases.',
    solution: 'Installed temporary air containment zones and high-capacity HEPA dehumidifier arrays during structural sealing.'
  },
  {
    id: 40,
    title: 'Micron Idaho Memory Manufacturing Campus',
    category: 'Industrial',
    image: MicronIdahoImg,
    location: 'Boise, Idaho',
    client: 'Micron Technology',
    specs: '800 acres, memory chip facility',
    date: '2023–2034',
    summary: 'The first new leading-edge memory fab built in the U.S. in 20 years.',
    details: 'Constructing cleanroom facilities, sub-fabs, central utility buildings, and advanced research facilities for DRAM memory fabrication.',
    challenge: 'Extremely heavy loading demands on roof systems holding heavy air handler units.',
    solution: 'Engineered high-strength structural steel trusses and reinforced support columns using high-performance concrete.'
  },
  {
    id: 41,
    title: 'Nevada Lithium Processing Hub',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=800',
    location: 'Reno, Nevada',
    client: 'Lithium Americas Corp',
    specs: '250 acres, chemical processing plant',
    date: '2025–2032',
    summary: 'An industrial facility refining raw lithium ore into battery-grade carbonate.',
    details: 'Constructing processing tanks, acid recycling plants, packaging facilities, and bulk shipping rail links.',
    challenge: 'Containing corrosive chemicals and wastewater within severe desert environmental regulations.',
    solution: 'Specified double-walled stainless steel storage tanks and a zero-liquid-discharge (ZLD) water recycling loop.'
  },
  {
    id: 42,
    title: 'Louisiana LNG Export Terminal',
    category: 'Energy',
    image: LouisianaLNGImg,
    location: 'Lake Charles, Louisiana',
    client: 'Energy Transfer Partners',
    specs: '900 acres, LNG liquefaction facility',
    date: '2024–2031',
    summary: 'A natural gas liquefaction and export facility on the Calcasieu Ship Channel.',
    details: 'Building three LNG liquefaction trains, cryogenic storage tanks, and heavy-duty loading docks for ocean-going gas carriers.',
    challenge: 'Pouring huge cryogenic foundations that must withstand temperatures of -162°C (-260°F).',
    solution: 'Used specialized 9% nickel steel rebar and placed cold-resistant concrete formulations.'
  },
  {
    id: 43,
    title: 'Plaquemines LNG Phase Expansion',
    category: 'Energy',
    image: PlaqueminesLNGImg,
    location: 'Plaquemines Parish, Louisiana',
    client: 'Venture Global LNG',
    specs: '1,000 acres, LNG plant',
    date: '2022–2031',
    summary: 'Expanding the Plaquemines LNG export facility to increase production.',
    details: 'Constructing additional liquefaction blocks, power generation facilities, and loading marine berths along the Mississippi River.',
    challenge: 'Building on soft delta soils vulnerable to hurricane storm surges and river floods.',
    solution: 'Drove over 10,000 precast concrete piles into bedrock and constructed a 26-foot storm protection levee around the perimeter.'
  },
  {
    id: 44,
    title: 'Vineyard Wind Expansion',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800',
    location: 'Massachusetts Coast',
    client: 'Vineyard Wind LLC',
    specs: '1.6 GW offshore wind capacity',
    date: '2024–2032',
    summary: 'An offshore wind energy expansion project generating clean power for Massachusetts.',
    details: 'Installing offshore wind turbines, constructing sub-sea transmission lines, and building onshore substation yards.',
    challenge: 'Installing massive monopile foundations in shifting marine sandbeds and deep ocean swells.',
    solution: 'Deployed heavy-lift jack-up vessels and used bubble curtains to damp acoustic shockwaves, protecting marine life.'
  },
  {
    id: 45,
    title: 'Empire Wind Project',
    category: 'Energy',
    image: EmpireWindImg,
    location: 'New York Coast',
    client: 'Equinor & bp',
    specs: '2 GW offshore wind capacity',
    date: '2024–2032',
    summary: 'An offshore wind array supplying clean energy to Long Island and New York City.',
    details: 'Erecting offshore wind turbines, constructing gravity-base foundations, and building a dedicated marine port in Brooklyn.',
    challenge: 'Managing complex maritime logistics and cabling links through busy New York shipping lanes.',
    solution: 'Coordinated marine traffic using dynamic positioning vessels and buried sub-sea cables six feet below the seabed.'
  },
  {
    id: 46,
    title: 'Coastal Virginia Offshore Wind Project',
    category: 'Energy',
    image: CoastalVirginiaImg,
    location: 'Virginia Beach, Virginia',
    client: 'Dominion Energy',
    specs: '2.6 GW capacity, 176 turbines',
    date: '2021–2031',
    summary: 'The largest commercial offshore wind project in the United States.',
    details: 'Constructing 176 offshore wind turbines, three offshore substations, and onshore transmission connections.',
    challenge: 'Protecting seasonal whale migrations during intensive marine pile driving operations.',
    solution: 'Scheduled all pile driving outside migration windows and used passive acoustic monitoring (PAM) hydrophones to verify mammal clearance.'
  },
  {
    id: 47,
    title: 'Los Angeles Convention Center Expansion',
    category: 'Commercial & Mixed-Use',
    image: LAConventionImg,
    location: 'Los Angeles, California',
    client: 'City of Los Angeles',
    specs: '190,000 m², exhibition space expansion',
    date: '2025–2032',
    summary: 'Expanding the convention center to add exhibition halls and connecting bridges.',
    details: 'Constructing a new contiguous exhibition hall, meeting rooms, and a connection bridge over Pico Boulevard, targeting LEED Platinum.',
    challenge: 'Erecting high-span structural steel frames over an active city boulevard.',
    solution: 'Pre-assembled steel bridge spans off-site and hoisted them into place using heavy hydraulic strand jacks during weekend closures.'
  },
  {
    id: 48,
    title: 'Miami Freedom Park Development',
    category: 'Commercial & Mixed-Use',
    image: MiamiFreedomImg,
    location: 'Miami, Florida',
    client: 'Inter Miami CF',
    specs: '131 acres, stadium & retail park',
    date: '2023–2031',
    summary: 'A multi-use commercial park featuring a new 25,000-seat soccer stadium.',
    details: 'Constructing a state-of-the-art sports stadium, hotel, retail village, and public parklands.',
    challenge: 'Excavating and remediating a former municipal golf course with contaminated soils.',
    solution: 'Implemented a comprehensive soil remediation and capping system, converting it into a clean, safe sub-base.'
  },
  {
    id: 49,
    title: 'The 78 Chicago Development',
    category: 'Commercial & Mixed-Use',
    image: The78Img,
    location: 'Chicago, Illinois',
    client: 'Related Midwest',
    specs: '62 acres, mixed-use waterfront',
    date: '2024–2035',
    summary: 'A massive waterfront development creating a new neighborhood on Chicago\'s South Side.',
    details: 'Constructing residential towers, commercial offices, retail storefronts, and a riverfront walk along the Chicago River.',
    challenge: 'Building high-rises in close proximity to active river bulkheads and soft riverbed clay.',
    solution: 'Installed heavy slurry walls and drilled deep caissons into solid bedrock to anchor tower foundations.'
  },
  {
    id: 50,
    title: 'Nashville East Bank Development',
    category: 'Commercial & Mixed-Use',
    image: NashvilleEastImg,
    location: 'Nashville, Tennessee',
    client: 'Metro Nashville Government',
    specs: '338 acres, mixed-use district',
    date: '2024–2035',
    summary: 'A comprehensive riverfront development converting industrial lands into retail and residential hubs.',
    details: 'Building affordable housing towers, commercial office buildings, greenways, and public infrastructure along the Cumberland River.',
    challenge: 'Managing flood risks along the Cumberland River for new low-elevation developments.',
    solution: 'Elevated all primary building platforms above the 100-year flood levels and integrated bioswales and park barriers.'
  },
  {
    id: 51,
    title: 'Salt Lake City Innovation District',
    category: 'Commercial & Mixed-Use',
    image: SLCInnovationImg,
    location: 'Salt Lake City, Utah',
    client: 'University of Utah / City of Salt Lake',
    specs: '100 acres, labs & office tech space',
    date: '2025–2034',
    summary: 'An innovation hub supporting research labs, tech incubator spaces, and retail hubs.',
    details: 'Constructing laboratory facilities, commercial offices, meeting spaces, and green-certified public plazas.',
    challenge: 'Designing labs to tolerate high seismic risks in the Wasatch Fault Zone.',
    solution: 'Incorporated base-isolation technology and ductile moment-resisting steel frames to allow structural flexibility.'
  }
];

// Remove duplicates by title dynamically to prevent duplicate listings
const UNIQUE_PROJECTS = PROJECTS.filter((project, index, self) =>
  index === self.findIndex((p) => p.title === project.title)
);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = UNIQUE_PROJECTS.filter((project) => {
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
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>No Projects Found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your filters or search keywords.</p>
            </div>
          )}

        </div>
      </section>

      {/* Case Study Details Modal */}
      <Modal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        title=""
        maxWidth="950px"
      >
        {activeProject && (
          <div>
            <ProjectDetailView project={activeProject} />
            <div style={{ textAlign: 'right', marginTop: '32px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
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
