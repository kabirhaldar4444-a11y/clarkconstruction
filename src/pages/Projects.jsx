import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Calendar, HardHat, FileText, LayoutGrid, List, ArrowUpDown, X, ArrowUp, CheckCircle2, Building2, ArrowRight, ExternalLink } from 'lucide-react';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';
import ProjectDetailView from '../components/UI/ProjectDetailView';

// Import local project images - matching filenames precisely to project titles
import CapitalOneArenaImg from '../assets/Capital One Arena.jpg';
import CityCenterDCImg from '../assets/CityCenterDC.jpeg';
import TheWharfImg from '../assets/The Wharf (Phase 1 & 2).jpg';
import NationalsParkImg from '../assets/Washington Nationals Ballpark (Nationals Park).png';
import LAXMidfieldImg from '../assets/LAX Midfield Satellite Concourse.jpg';
import LAXTerminalImg from '../assets/LAX Terminal Modernization Projects.jpg';
import WalterReedImg from '../assets/Walter Reed National Military Medical Center.jpg';
import SmithsonianImg from '../assets/Smithsonian Institution Renovations.jpg';
import FannieMaeImg from '../assets/Fannie Mae Headquarters Renovation.jpg';
import DHSImg from '../assets/Department of Homeland Security Facilities.jpg';
import TexasCentralImg from '../assets/Texas Central High-Speed Rail.jpg';
import GatewayImg from '../assets/gateway program.png';
import BrightlineWestImg from '../assets/Brightline West High-Speed Rail.jpg';
import GordieHoweImg from '../assets/Gordie Howe International Bridge.jpg';
import HudsonTunnelImg from '../assets/Hudson Tunnel Project.jpg';
import I45ExpansionImg from '../assets/I-45 North Houston Expansion.jpg';
import HonoluluRailImg from '../assets/Honolulu Rail Transit Extension.jpg';
import LAMetroImg from '../assets/Los Angeles Metro D Line Extension.jpg';
import SecondAveSubwayImg from '../assets/Second Avenue Subway Phase 2.jpg';
import PhoenixI10Img from '../assets/Phoenix Interstate I-10 Expansion.jpg';
import MicronIdahoImg from '../assets/Micron Idaho Memory Manufacturing Campus.jpg';
import LouisianaLNGImg from '../assets/Louisiana LNG Export Terminal.jpg';
import PlaqueminesLNGImg from '../assets/Plaquemines LNG Phase Expansion.jpg';
import EmpireWindImg from '../assets/Empire Wind Project.jpg';
import CoastalVirginiaImg from '../assets/Coastal Virginia Offshore Wind Project.jpg';
import LAConventionImg from '../assets/Los Angeles Convention Center Expansion.jpg';
import MiamiFreedomImg from '../assets/Miami Freedom Park Development.jpg';
import The78Img from '../assets/The 78 Chicago Development.jpg';
import NashvilleEastImg from '../assets/Nashville East Bank Development.jpg';
import SLCInnovationImg from '../assets/Salt Lake City Innovation District.jpg';
import SFOAirportImg from '../assets/San Francisco International Airport (SFO) Projects Client San Francisco Airport Commission.png';
import AfricanAmericanMuseumImg from '../assets/National Museum of African American History and Culture.jpg';
import MuseumsMonumentsImg from '../assets/Museums & Monuments.png';
import PresidentialSuiteImg from '../assets/Presidential Bathroom Suite Hospitality.png';
import MGMNationalHarborImg from '../assets/MGM National Harbor.jpg';
import InovaScharImg from '../assets/Inova Schar Cancer Institute.jpg';
import JohnsHopkinsMedicalImg from '../assets/Johns Hopkins Medical Facilities.jpg';
import ChildrensNationalImg from "../assets/Children's National Hospital Expansion.jpg";
import GWUniversityImg from '../assets/George Washington University Buildings.jpg';
import UMDFacilitiesImg from '../assets/University of Maryland Facilities.jpg';
import VirginiaTechImg from '../assets/Virginia Tech Academic Buildings.jpg';
import UMCapitalMedicalImg from '../assets/Inova Schar Cancer Institute.jpg';
import MassTimberHopkinsImg from '../assets/29 Roofs, 1 Village Orchestrating the Mass Timber Complex at Johns Hopkins University Bloomberg Student Center.png';
import IDEAFactoryImg from '../assets/IDEA Factory Education.png';
import StudentLivingImg from '../assets/New Heights for Student Living.png';
import CapitalCrossingImg from '../assets/Capital Crossing Development Client Property Group Partners.png';
import MidtownCenterImg from '../assets/midtown center Office.png';
import FBICentralRecordsImg from '../assets/FBI Central Records Complex & Government Projects.jpg';
import FBICentralRobotsImg from '../assets/FBI Central Records Complex robots Technology.png';
import DataCenterCampusesImg from '../assets/Data Center Campuses (Confidential Clients).jpg';
import ClarkTechnologiesImg from '../assets/Clark Technologies.png';
import TataSemiconductorImg from '../assets/Tata Electronics Semiconductor Facility.png';
import ElectronicsPlantImg from '../assets/electronics-plant.png';
import BatteryStorageImg from '../assets/Million New Battery Energy Storage System Mfg. Unit in Dhenkanal, Odisha.png';
import SuratWindImg from '../assets/Surat Wind Energy Project.png';
import MarketHeroImg from '../assets/Market hero image.png';
import BaseIsolatorLACMAImg from '../assets/Base isolator at LACMA Seismic.png';
import ArgonneScienceImg from '../assets/Argonne Science.png';
import KiaForumImg from '../assets/The Kia Forum Renovation & Historic Preservation.png';
import ParklineChicagoImg from '../assets/Parkline in Chicago Residential & Mixed-Use.jpg';
import RestonGatewayImg from '../assets/Interiors & Tenant Fit-Out - Reston Gateway.png';
import KovvadaNuclearImg from '../assets/Nuclear_power_plant_construction…_202608251151.jpeg';
import RelianceJamnagarImg from '../assets/reliance-jamnagar.jpeg';
import GIFTCityImg from '../assets/gift-city-correct.png';
import NaviMumbaiAirportImg from '../assets/airport.jpg';
import AKICImg from '../assets/Amritsar-Kolkata Industrial Corridor (AKIC).jpg';
import BharatmalaImg from '../assets/Bharatmala Pariyojna.jpg';
import NationalMaritimeImg from '../assets/National Maritime Heritage Complex.jpg';
import AhmedabadDholeraImg from '../assets/Ahmedabad-Dholera Express.jpg';
import VisakhapatnamChennaiImg from '../assets/Visakhapatnam-Chennai Industrial Corridor.png';
import SagarmalaImg from '../assets/Sagarmala Project.png';
import JSWGreenEnergyImg from "../assets/JSW Group's Green Energy Projects.png";
import DholeraSmartCityImg from '../assets/Dholera Smart City Project.png';
import GangaVikasImg from '../assets/Ganga Vikas Project (Riverfront).png';
import MysoreWindImg from '../assets/Mysore Wind Power Project.png';
import PugaGeothermalImg from '../assets/Puga Geothermal Energy Project.png';
import NagpurMetallurgicalImg from '../assets/metallurgical expansion project in Hingna, Nagpur, Maharashtra -.png';
import KrishnapatnamPortImg from '../assets/Million Krishnapatnam Port Expansion Project in Tirupati, Andhra Pradesh.png';
import PaimanaImg from '../assets/Paimana.png';
import SofiStadiumImg from "../assets/Sofi Stadium's Massive Transformation for the 2026 FIFA World Cup In preparation for the 2026 FIFA World Cup,.png";
import CannonHouseImg from '../assets/Cannon House Balancing Modernization with Preservation.png';
import AspectWestEndImg from '../assets/Aspect at WestEnd Alexandria.jpg';
import Clark120Img from '../assets/Clark 120 Setting the DC Standard (1956 - 1965).png';
import PugetSoundImg from '../assets/Atkinson, WSDOT Team Up to Improve Connections Near Puget Sound Atkinson Construction,.png';
import CantonWastewaterImg from '../assets/Clark WaterReeves Young Team Celebrates Ribbon Cutting of Canton Wastewater Treatment Plant Expansion.png';
import CubiclesToCommunitiesImg from '../assets/Cubicles to Communities Office Conversion.jpg';
import RootedPerformanceImg from '../assets/Rooted in Performance Logistics Hub.jpg';
import AtkinsonHeavyImg from '../assets/Guy F. Atkinson Construction.png';
import ShirleyContractingImg from '../assets/Shirley Contracting Company.png';
import C3MTractionPowerImg from '../assets/C3M Traction Power Substation Network.jpg';
import C3MPowerImg from '../assets/C3M Power Systems.png';
import WharfBuildingImg from '../assets/The Wharf Marine Infrastructure & Buildings.jpg';
import WharfInfraImg from '../assets/The Wharf Infrastructure.png';
import WharfMarineImg from '../assets/The Wharf Marine Infrastructure & Buildings.jpg';
import KStreetOfficeJpg from '../assets/1900 K Street Office Tower.jpg';
import IntelOhioJpg from '../assets/Intel Ohio Mega Semiconductor Campus.jpg';
import TSMCArizonaJpg from '../assets/TSMC Arizona Semiconductor Expansion.jpg';
import SamsungTaylorJpg from '../assets/Samsung Taylor Semiconductor Campus.jpg';
import NevadaLithiumJpg from '../assets/Nevada Lithium Processing Hub.jpg';
import VineyardWindJpg from '../assets/Vineyard Wind Expansion.jpg';
import AnthemMusicVenueJpg from '../assets/The Anthem Music Venue.jpg';
import JWMarriottAustinImg from '../assets/jw-marriott-austin.jpeg';
import CrossRiverRailImg from '../assets/cross river rail.png';
import NEOMImg from '../assets/NEOM.png';
import VanBurenImg from '../assets/The 78 Chicago Development.jpg';

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
    image: SFOAirportImg,
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
    projectType: 'Smithsonian museum',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/national-museum-african-american-history-and-culture',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-03/10236-17_jpg.jpg?itok=-mV2G-hj',
    location: 'Washington, DC',
    client: 'Smithsonian Institution',
    specs: '400,000 sq. ft., Bronze Corona Facade, LEED Gold',
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
    projectType: 'Military history museum',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/national-museum-united-states-army',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-03/NMUSA%20Aerial%20Enhanced%20%238186%20112119%206x10_1.png?itok=T6ZtEOSW',
    location: 'Fort Belvoir, Virginia',
    client: 'Army Historical Foundation / U.S. Army Corps of Engineers',
    specs: '185,000 sq. ft., Stainless Steel Panels, LEED Silver',
    date: '2020',
    summary: 'A museum honoring the history of the US Army, featuring reflective laser-aligned steel panels.',
    details: 'Constructed the museum building clad in laser-aligned stainless steel panels, housing exhibition halls, administrative suites, and memorial gardens.',
    challenge: 'Aligning the reflective steel facade panels to ensure seamless reflection lines.',
    solution: 'Deployed high-accuracy robotic total stations to inspect brackets and framing positions within millimeter tolerances.'
  },
  {
    id: 12,
    title: 'Conrad Washington DC Hotel',
    category: 'Commercial & Mixed-Use',
    image: PresidentialSuiteImg,
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
    image: MGMNationalHarborImg,
    location: 'Oxon Hill, Maryland',
    client: 'MGM Resorts International',
    specs: '1.7M sq. ft., Resort, Casino & Theater',
    date: '2016',
    summary: 'A premier gaming resort and entertainment complex overlooking the Potomac River.',
    details: 'General contracting of a resort complex featuring casino floors, 300 hotel rooms, a 3,000-seat theater, and central mechanical plants.',
    challenge: 'Placing heavy mechanical plant modules on structural roofs without delaying interior finish timelines.',
    solution: 'Designed modular MEP racks offsite, hoisting them directly onto the roof structural frame in single lifts.'
  },
  {
    id: 14,
    title: 'Inova Schar Cancer Institute',
    category: 'Healthcare & Government',
    projectType: 'Cancer center renovation and expansion',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/inova-schar-cancer-institute',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-04/2019_05_07_WSInova02_A_jpg.jpg?itok=Z2hTd-nY',
    location: 'Falls Church, Virginia',
    client: 'Inova Health System',
    specs: '450,000 sq. ft., Cancer Care Center & Proton Therapy',
    date: '2019',
    summary: 'A modern cancer care center housing radiation vaults and clinical research suites in Falls Church, Virginia.',
    details: 'Constructed outpatient care facilities, research labs, and heavy concrete shielding vaults for advanced proton therapy equipment.',
    challenge: 'Casting concrete vaults with zero void tolerances to block radiation leaks.',
    solution: 'We specified high-density aggregate concrete and used continuous thermal monitoring during the curing process.'
  },
  {
    id: 15,
    title: 'Johns Hopkins Medical Facilities',
    category: 'Healthcare & Government',
    image: JohnsHopkinsMedicalImg,
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
    image: ChildrensNationalImg,
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
    image: GWUniversityImg,
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
    image: UMDFacilitiesImg,
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
    image: VirginiaTechImg,
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
    image: AnthemMusicVenueJpg,
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
    image: CapitalCrossingImg,
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
    image: KStreetOfficeJpg,
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
    details: 'General contracting of government complexes containing secure SCIF zones, blast-resistant concrete panels, and redundant power nodes.',
    challenge: 'Meeting strict federal security guidelines for all site workers and supply chains.',
    solution: 'Established secure worker check-ins and vetted material shipments through a dedicated offsite sorting warehouse.'
  },
  {
    id: 25,
    title: 'FBI Central Records Complex & Government Projects',
    category: 'Healthcare & Government',
    image: FBICentralRecordsImg,
    location: 'Multiple U.S. Cities',
    client: 'General Services Administration',
    specs: 'Reinforced Concrete Vaults & Automated Robotic Storage',
    date: '2022',
    summary: 'Constructing secure regional federal records complexes with blast-resistant structures.',
    details: 'Building modern courtrooms, holding cells, automated robotic filing plazas, and secure parking platforms, utilizing high-strength precast concrete panels.',
    challenge: 'Ensuring structural stability against extreme pressure waves from potential external impacts.',
    solution: 'Used progressive collapse-resistant structural designs, linking all core steel columns with redundant load-path joints.'
  },
  {
    id: 26,
    title: 'Data Center Campuses (Confidential Clients)',
    category: 'Industrial',
    image: DataCenterCampusesImg,
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
    image: IntelOhioJpg,
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
    image: TSMCArizonaJpg,
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
    image: SamsungTaylorJpg,
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
    image: NevadaLithiumJpg,
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
    image: VineyardWindJpg,
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
  },
  {
    id: 52,
    title: 'SoFi Stadium 2026 FIFA World Cup Transformation',
    category: 'Commercial & Mixed-Use',
    image: SofiStadiumImg,
    location: 'Inglewood, California',
    client: 'Hollywood Park Land Company',
    specs: '70,000 Seats, FIFA World Cup Specification',
    date: '2025–2026',
    summary: 'Massive structural transformation of SoFi Stadium to accommodate international FIFA regulation pitch requirements.',
    details: 'Modifying lower bowl seating tiers, field level turf drainage, and player tunnel access to support 2026 FIFA World Cup matches.',
    challenge: 'Re-engineering fixed concrete lower seating bowl sections while maintaining active event hosting schedules.',
    solution: 'Engineered modular precast seating blocks and fast-track hydraulic retraction platforms for flexible pitch conversions.'
  },
  {
    id: 53,
    title: 'Cannon House Office Building Renovation',
    category: 'Healthcare & Government',
    image: CannonHouseImg,
    location: 'Washington, D.C.',
    client: 'Architect of the Capitol',
    specs: '800,000 sq ft, Historic Modernization',
    date: '2015–2026',
    summary: 'Comprehensive renewal of the oldest congressional office building, balancing historic preservation with high-efficiency MEP upgrades.',
    details: 'Restoring historic stone facades, replacing century-old steam piping, and integrating energy-efficient HVAC and seismic bracing.',
    challenge: 'Executing modern structural seismic upgrades while preserving landmark marble masonry and decorative plasterwork.',
    solution: 'Utilized laser scan-to-BIM modeling and non-destructive micro-drilling for hidden tie-back anchors.'
  },
  {
    id: 54,
    title: 'Aspect at WestEnd Alexandria',
    category: 'Commercial & Mixed-Use',
    image: AspectWestEndImg,
    location: 'Alexandria, Virginia',
    client: 'Clark Foundations & Partners',
    specs: '375 Units, Multi-Family Residential Tower',
    date: '2024–2026',
    summary: 'The inaugural residential tower breaking ground at the WestEnd Alexandria master plan development.',
    details: 'Constructing a multi-family residential building featuring retail spaces, underground parking, and green amenity terraces.',
    challenge: 'Deep foundation shoring directly adjacent to active urban transit corridors.',
    solution: 'Installed continuous soldier piles and tieback anchors with real-time digital inclinometer monitoring.'
  },
  {
    id: 55,
    title: 'Puget Sound Highway & Bridge Connectivity',
    category: 'Aviation & Infrastructure',
    image: PugetSoundImg,
    location: 'Puget Sound, Washington',
    client: 'WSDOT / Atkinson Construction',
    specs: '12 km Expressway & Overpass Network',
    date: '2023–2026',
    summary: 'Highway widening and interchange improvements to streamline freight access near the Port of Tacoma and Puget Sound.',
    details: 'Erecting post-tensioned concrete bridge girders, storm water filtration vaults, and sound wall barriers.',
    challenge: 'Minimizing traffic disruptions on heavily traveled coastal freight routes.',
    solution: 'Deployed overnight bridge girder launcher gantries and precast pier cap segments.'
  },
  {
    id: 56,
    title: 'Canton Wastewater Treatment Plant Expansion',
    category: 'Industrial',
    image: CantonWastewaterImg,
    location: 'Canton, Georgia',
    client: 'City of Canton / Clark Water',
    specs: '24 MGD Capacity, Water Reclamation',
    date: '2022–2026',
    summary: 'Major expansion of the municipal wastewater reclamation facility incorporating advanced membrane bioreactors.',
    details: 'Building aeration basins, clarifier tanks, chemical disinfection facilities, and high-efficiency pumping stations.',
    challenge: 'Maintaining uninterrupted municipal wastewater processing during active facility tie-ins.',
    solution: 'Executed staged hydraulic bypasses and 24/7 hot-tap piping connections.'
  },
  {
    id: 57,
    title: 'Cubicles to Communities Office Conversion',
    category: 'Commercial & Mixed-Use',
    image: CubiclesToCommunitiesImg,
    location: 'Washington, D.C.',
    client: 'Private Urban Redevelopment Group',
    specs: '250,000 sq ft, Adaptive Reuse',
    date: '2024–2026',
    summary: 'Converting obsolete mid-century office spaces into vibrant residential and community living units.',
    details: 'Modifying structural floor plates, re-coring vertical plumbing stacks, and adding exterior residential balconies.',
    challenge: 'Retrofitting deep commercial floor plates for residential light and ventilation requirements.',
    solution: 'Cut a central atrium light-well into concrete floor slabs to bring daylight into interior units.'
  },
  {
    id: 58,
    title: 'Rooted in Performance Logistics Hub',
    category: 'Industrial',
    image: RootedPerformanceImg,
    location: 'Richmond, Virginia',
    client: 'Clark Group Logistics',
    specs: '500,000 sq ft, Automated Distribution',
    date: '2024–2026',
    summary: 'Constructing a state-of-the-art automated logistics and cold storage center.',
    details: 'Pouring jointless high-tolerance concrete slabs, erecting tilt-up insulated wall panels, and installing rooftop solar arrays.',
    challenge: 'Achieving super-flat slab tolerances (FF 100 / FL 80) for high-bay robotic forklift aisles.',
    solution: 'Used laser-guided somero screeds and continuous wet-curing protocols.'
  },
  {
    id: 59,
    title: 'C3M Traction Power Substation Network',
    category: 'Aviation & Infrastructure',
    image: C3MTractionPowerImg,
    location: 'Washington, D.C. Metro Area',
    client: 'C3M Power Systems',
    specs: '750V DC Traction Power Distribution',
    date: '2023–2026',
    summary: 'Installation and modernization of traction power substations and third-rail distribution systems for urban transit lines.',
    details: 'Replacing high-voltage transformers, DC switchgear arrays, emergency trip systems, and fiber optic supervisory networks.',
    challenge: 'Working inside live rail corridors with zero tolerance for track outages during morning service.',
    solution: 'Utilized rail-mounted hi-rail utility vehicles and modular pre-wired substation shelters.'
  },
  {
    id: 60,
    title: 'The Wharf Marine Infrastructure & Buildings',
    category: 'Commercial & Mixed-Use',
    image: WharfMarineImg,
    location: 'Washington, D.C.',
    client: 'Hoffman-Madison Waterfront',
    specs: '1.5 Miles Waterfront, Mixed-Use District',
    date: '2014–2026',
    summary: 'Multi-phased waterfront development comprising residential towers, retail promenades, piers, and subterranean parking.',
    details: 'Engineered marine bulkheads, floating docks, underground garage basements below sea level, and luxury hotel towers.',
    challenge: 'Constructing multi-story basement structures below the Potomac River water table.',
    solution: 'Installed continuous secant pile cutoff walls and heavy tremie concrete plug foundations.'
  },
  {
    id: 61,
    title: 'Johns Hopkins Bloomberg Student Center Mass Timber',
    category: 'Education',
    image: MassTimberHopkinsImg,
    location: 'Baltimore, Maryland',
    client: 'Johns Hopkins University',
    specs: '29 Roofs, Mass Timber Structural Complex',
    date: '2023–2026',
    summary: 'Orchestrating a mass timber student center complex featuring 29 unique rooflines.',
    details: 'Constructing glued laminated timber (glulam) beams and cross-laminated timber (CLT) floor panels, delivering sustainable academic and social spaces.',
    challenge: 'Precision assembly of intricate mass timber roof joints in tight urban settings.',
    solution: 'Used 3D VDC laser scanning and pre-fabricated CNC timber joints for rapid millimeter-accurate erection.'
  },
  {
    id: 62,
    title: 'LACMA Seismic Retrofit & Base Isolation',
    category: 'Museums & Culture',
    image: BaseIsolatorLACMAImg,
    location: 'Los Angeles, California',
    client: 'Los Angeles County Museum of Art',
    specs: 'Seismic Base Isolation System',
    date: '2022–2026',
    summary: 'Installation of high-capacity seismic isolation bearings beneath museum exhibition galleries.',
    details: 'Retrofitting structural column footings with friction pendulum base isolators to safeguard priceless artwork during seismic events.',
    challenge: 'Underpinning existing structural foundations without disturbing sensitive gallery environments above.',
    solution: 'Deployed hydraulic jacking networks and digital displacement gauges to maintain structural equilibrium.'
  },
  {
    id: 63,
    title: 'Argonne National Laboratory Science Facility',
    category: 'Education',
    image: ArgonneScienceImg,
    location: 'Lemont, Illinois',
    client: 'U.S. Department of Energy',
    specs: 'Advanced Supercomputing & Photon Science Facility',
    date: '2023–2026',
    summary: 'Constructing cleanrooms, supercomputing halls, and radiological research labs.',
    details: 'Building high-density concrete shielded vaults and climate-controlled cleanroom enclosures for advanced scientific research.',
    challenge: 'Strict electromagnetic shielding and temperature control within zero-vibration laboratory bays.',
    solution: 'Cast thick, decoupled concrete slabs and wrapped critical rooms in aluminum Faraday cages.'
  },
  {
    id: 64,
    title: 'The Kia Forum Renovation & Historic Preservation',
    category: 'Commercial & Mixed-Use',
    image: KiaForumImg,
    location: 'Inglewood, California',
    client: 'MSG Entertainment',
    specs: '17,500 Seats, Historic Arena Modernization',
    date: '2019–2024',
    summary: 'Restoration and structural renewal of the iconic arena, upgrading acoustic ceiling trusses and venue finishes.',
    details: 'Modernizing seating tiers, concert rigging grids, VIP lounges, and mechanical systems while preserving the iconic 60-column exterior facade.',
    challenge: 'Retrofitting heavy roof rigging frames onto 1960s pre-stressed concrete columns.',
    solution: 'Reinforced original columns with carbon fiber wraps and added auxiliary steel trusses.'
  },
  {
    id: 65,
    title: 'Parkline in Chicago Residential & Mixed-Use',
    category: 'Commercial & Mixed-Use',
    image: ParklineChicagoImg,
    location: 'Chicago, Illinois',
    client: 'Madden Elevate',
    specs: '26 Stories, 190 Luxury Apartments & Retail',
    date: '2021–2024',
    summary: 'A sleek residential tower featuring cantilevered glass balconies and ground-level retail.',
    details: 'Constructed post-tensioned concrete slabs, high-performance window walls, and rooftop sky lounge amenities in downtown Loop district.',
    challenge: 'Tight zero-lot-line site bounded by Chicago Transit Authority (CTA) elevated train tracks.',
    solution: 'Utilized real-time acoustic sensors and scheduled crane movements around train arrival frequencies.'
  },
  {
    id: 66,
    title: 'Reston Gateway Interiors & Tenant Fit-Out',
    category: 'Commercial & Mixed-Use',
    image: RestonGatewayImg,
    location: 'Reston, Virginia',
    client: 'Boston Properties',
    specs: '1.1M sq ft, High-End Corporate Interiors',
    date: '2022–2025',
    summary: 'Comprehensive interior fit-out for corporate headquarters including executive suites, cafeterias, and glass atrium stairs.',
    details: 'Installing architectural woodwork, custom acoustic ceiling baffles, modular glass partitions, and integrated smart-office technology.',
    challenge: 'Simultaneous interior buildouts across 28 office floors on accelerated delivery schedules.',
    solution: 'Implemented standardized pre-packaged trade kits and just-in-time material hoisting via exterior skip hoists.'
  },
  {
    id: 67,
    title: '566 West Van Buren High-Rise',
    category: 'Commercial & Mixed-Use',
    image: VanBurenImg,
    location: 'Chicago, Illinois',
    client: 'Pocket Properties',
    specs: '24 Stories, Multi-Family Residential Tower',
    date: '2023–2026',
    summary: 'Construction mobilization and structural erection of a 24-story residential tower in West Loop.',
    details: 'Foundations excavation, reinforced concrete tower framing, architectural precast cladding, and high-efficiency mechanical systems.',
    challenge: 'Excavation directly adjacent to heavy urban commuter rail corridors.',
    solution: 'Installed continuous soldier pile wall shoring with tiebacks monitored by automated digital strain gauges.'
  },
  {
    id: 68,
    title: 'Clark 120 Historic DC Standard Development',
    category: 'Commercial & Mixed-Use',
    image: Clark120Img,
    location: 'Washington, D.C.',
    client: 'Clark Historical Archives',
    specs: 'Historic Capital Infrastructure Milestone',
    date: '1956–2026',
    summary: 'A legacy project setting the benchmark for Washington, D.C. urban structural standards.',
    details: 'Historic concrete structures, foundational caissons, and commercial building frames that established modern DC building codes.',
    challenge: 'Pioneering heavy deep-foundation caisson methods in saturated DC soil conditions.',
    solution: 'Developed proprietary slurry-shield caisson drilling techniques adopted across mid-Atlantic urban engineering.'
  },
  {
    id: 69,
    title: 'Guy F. Atkinson Heavy Civil Infrastructure',
    category: 'Aviation & Infrastructure',
    image: AtkinsonHeavyImg,
    location: 'Pacific Northwest, USA',
    client: 'Atkinson Construction / WSDOT',
    specs: 'Heavy Civil Highways, Dams & Bridges',
    date: '2020–2026',
    summary: 'Heavy civil infrastructure projects including highway overpasses, river bridges, and coastal transit corridors.',
    details: 'Large-scale earthworks, post-tensioned concrete bridge girders, seismic pier caps, and marine piling.',
    challenge: 'Executing heavy riverbed bridge pier pours during strict environmental fish-window periods.',
    solution: 'Utilized temporary cofferdams and continuous 24-hour concrete pouring crews.'
  },
  {
    id: 70,
    title: 'Shirley Contracting Transportation Projects',
    category: 'Aviation & Infrastructure',
    image: ShirleyContractingImg,
    location: 'Virginia & Mid-Atlantic',
    client: 'VDOT & Regional Transportation Authorities',
    specs: 'Highways, Express Lanes & Interchange Works',
    date: '2021–2026',
    summary: 'Regional transportation infrastructure expansion including HOV lanes, sound walls, and smart traffic interchanges.',
    details: 'Asphalt paving, bridge construction, stormwater retention vaults, and digital traffic monitoring networks.',
    challenge: 'Maintaining high-speed commuter traffic flow during major highway interchange widenings.',
    solution: 'Constructed temporary paved detour lanes and utilized precast bridge deck panels for overnight setting.'
  },
  {
    id: 71,
    title: 'Kovvada Nuclear Power Plant',
    category: 'Energy',
    image: KovvadaNuclearImg,
    location: 'Andhra Pradesh, India',
    client: 'Westinghouse Electric Company & NPCIL',
    specs: '6-Unit Nuclear Power Station (AP1000)',
    date: '2030 (Expected)',
    summary: 'Construction of a massive 6-unit nuclear power station using AP1000 pressurized water reactor technology.',
    details: 'Land reclamation, seismic containment vaults, cooling towers, and high-voltage grid substations delivering clean base-load power.',
    challenge: 'Designing structural vaults to withstand high-magnitude seismic forces and extreme thermal expansion.',
    solution: 'Used heavy steel containment liners wrapped in high-density aggregate concrete.'
  },
  {
    id: 72,
    title: 'Reliance Jamnagar Refinery Expansion',
    category: 'Industrial',
    image: RelianceJamnagarImg,
    location: 'Jamnagar, Gujarat, India',
    client: 'Bechtel Corporation & Reliance Industries',
    specs: '1.24 Million Barrels Per Day Refinery Complex',
    date: '1996 - Present',
    summary: 'Engineering and expanding the world\'s largest oil refinery complex.',
    details: 'Crude distillation units, catalytic crackers, marine docks, modular refining columns, and advanced plant automation.',
    challenge: 'Modular pre-assembly and heavy lifting of 1,000-ton refining columns in coastal weather conditions.',
    solution: 'Deployed twin 1,600-ton crawler cranes and real-time wind speed monitoring systems during lifts.'
  },
  {
    id: 73,
    title: 'GIFT City (Gujarat International Finance Tec-City)',
    category: 'Commercial & Mixed-Use',
    image: GIFTCityImg,
    location: 'Gandhinagar, Gujarat, India',
    client: 'GIFT SEZ Limited / L&T',
    specs: 'Smart Financial City & Utility Tunnels',
    date: 'Ongoing Projects',
    summary: 'India\'s first operational smart city and international financial services hub.',
    details: 'High-rise office towers, automated waste collection pipelines, district cooling plants, and multi-tier utility tunnels.',
    challenge: 'Constructing subterranean utility tunnels without interfering with high-rise foundation pilings.',
    solution: 'Used 3D spatial BIM coordination models and micro-tunneling boring machines.'
  },
  {
    id: 74,
    title: 'Navi Mumbai International Airport',
    category: 'Aviation & Infrastructure',
    image: NaviMumbaiAirportImg,
    location: 'Navi Mumbai, Maharashtra, India',
    client: 'Adani Airports & CIDCO',
    specs: '60 Million Passenger Capacity, Dual Runways',
    date: '2018 - 2026',
    summary: 'Development of a multi-terminal international airport featuring dual parallel runways.',
    details: 'Passenger terminal buildings, cargo facilities, hill blasting, and river channel diversion.',
    challenge: 'Leveling regional rock hills and diverting the Ulwe river course to establish runway grade levels.',
    solution: 'Controlled precision blasting and engineered concrete river diversion culverts.'
  },
  
  
  {
    id: 77,
    title: 'Amritsar-Kolkata Industrial Corridor (AKIC)',
    category: 'Aviation & Infrastructure',
    image: AKICImg,
    location: 'Northern & Eastern India',
    client: 'Tata Projects & L&T',
    specs: '20 Cities Economic Link, EDFC Corridor',
    date: '2020 - 2028',
    summary: 'Development of an economic corridor along the Eastern Dedicated Freight Corridor.',
    details: 'Integrated manufacturing zones, dry ports, logistics parks, and high-load freight rail lines.',
    challenge: 'Crossing major river floodplains without interrupting seasonal agricultural runoff.',
    solution: 'Erected long-span concrete viaduct bridges with elevated pier footings.'
  },
  
  {
    id: 79,
    title: 'Bharatmala Pariyojna Highway Network',
    category: 'Aviation & Infrastructure',
    image: BharatmalaImg,
    location: 'Nationwide India',
    client: 'NHAI & L&T Construction',
    specs: '34,800 km Expressway Network',
    date: '2018 - 2026',
    summary: 'A nationwide road development program constructing expressways and economic corridors.',
    details: 'High-capacity expressways, bypass tunnels, automated toll plazas, and emergency runway stretches.',
    challenge: 'Synchronizing multi-contractor road paving across thousands of kilometers of varying soil types.',
    solution: 'Implemented digital satellite GIS tracking and automated asphalt paver fleet management.'
  },
  {
    id: 80,
    title: 'National Maritime Heritage Complex',
    category: 'Museums & Culture',
    image: NationalMaritimeImg,
    location: 'Lothal, Gujarat, India',
    client: 'Tata Projects Limited',
    specs: 'Maritime Theme Park & Ancient Port Reconstruction',
    date: '2022 - 2026',
    summary: 'Constructing a world-class historical theme park and educational center dedicated to ancient maritime history.',
    details: 'Reconstructed Lothal port basins, museum pavilions, research centers, and interactive light show auditoriums.',
    challenge: 'Re-creating historical water basins in saline soil conditions without saltwater seepage.',
    solution: 'Applied high-density bentonite clay liners and specialized anti-corrosive concrete mixes.'
  },
  {
    id: 81,
    title: 'Ahmedabad-Dholera Express Highway',
    category: 'Aviation & Infrastructure',
    image: AhmedabadDholeraImg,
    location: 'Gujarat, India',
    client: 'Sadbhav Engineering & L&T',
    specs: '109 km 4-Lane High-Speed Expressway',
    date: '2021 - 2025',
    summary: 'A high-speed expressway connecting Ahmedabad to the Dholera Special Investment Region.',
    details: 'Precast concrete overpasses, intelligent traffic monitoring, and heavy freight transport lanes.',
    challenge: 'Fast-track embankment construction over soft agricultural soil beds.',
    solution: 'Utilized prefabricated vertical drains (PVD) to accelerate ground settlement before paving.'
  },
  {
    id: 82,
    title: 'Visakhapatnam-Chennai Industrial Corridor',
    category: 'Industrial',
    image: VisakhapatnamChennaiImg,
    location: 'Andhra Pradesh, India',
    client: 'L&T & Tata Projects',
    specs: 'Port-Led Industrial Hub & Power Grid',
    date: '2016 - 2028',
    summary: 'Developing an industrial corridor along the east coast to enhance port-led manufacturing.',
    details: 'Coastal expressways, industrial park water pipelines, high-voltage substations, and container depots.',
    challenge: 'Corrosive coastal atmosphere threatening electrical substations and steel infrastructure.',
    solution: 'Specified hot-dip galvanized structural framing and silicon-coated insulator strings.'
  },
  {
    id: 83,
    title: 'Sagarmala Project Maritime Network',
    category: 'Aviation & Infrastructure',
    image: SagarmalaImg,
    location: 'Coastal Regions, India',
    client: 'Adani Ports & JSW Infra',
    specs: 'National Port Modernization & Shipping Lanes',
    date: '2035',
    summary: 'A comprehensive port modernization and port-led development program.',
    details: 'Harbor dredging, deepwater berths, rail-road hinterland connectivity, and coastal economic zones.',
    challenge: 'Deepening harbor channels without destabilizing existing berth seawalls.',
    solution: 'Employed cutter suction dredgers with automated acoustic bathymetric scanning.'
  },
  
  {
    id: 85,
    title: 'JSW Group Green Energy Projects',
    category: 'Energy',
    image: JSWGreenEnergyImg,
    location: 'Karnataka, Maharashtra & Tamil Nadu',
    client: 'JSW Energy & GE Renewable',
    specs: '3.8 GW Utility Wind & Solar Portfolio',
    date: '2030',
    summary: 'A portfolio of utility-scale wind and solar power plants linked by advanced battery energy storage.',
    details: 'Wind turbine installation, solar PV fields, battery storage units, and high-voltage transmission substations.',
    challenge: 'Transporting 75-meter wind turbine blades across narrow hill roads.',
    solution: 'Deployed specialized hydraulic blade adapter trailers capable of tilting blades up to 60 degrees.'
  },
  {
    id: 86,
    title: 'Dholera Smart City Greenfield Project',
    category: 'Commercial & Mixed-Use',
    image: DholeraSmartCityImg,
    location: 'Dholera, Gujarat, India',
    client: 'DICDL & L&T',
    specs: '920 sq km Greenfield Smart City',
    date: '2040',
    summary: 'A greenfield industrial smart city project being developed on a massive 920 sq km site.',
    details: 'Smart utility channels, SCADA traffic grids, automated pneumatic waste nodes, and rainwater harvesting networks.',
    challenge: 'Engineering flood management across low-lying coastal tidal plains.',
    solution: 'Constructed an perimeter bund canal and automated tidal gate sluices.'
  },
  {
    id: 87,
    title: 'Ganga Vikas Riverfront Development',
    category: 'Aviation & Infrastructure',
    image: GangaVikasImg,
    location: 'Uttar Pradesh & Bihar, India',
    client: 'NMCG & Shapoorji Pallonji',
    specs: 'River Ghat Renewal & Sewage Treatment',
    date: '2025',
    summary: 'Rejuvenating and beautifying the Ganges riverfront.',
    details: 'Concrete retaining ghat steps, public promenades, sewage interceptor drains, and river clean-up stations.',
    challenge: 'Executing heavy concrete pours on soft riverbank silt subject to monsoon water level rises.',
    solution: 'Installed sheet pile coffer walls and poured underwater tremie concrete pads.'
  },
  {
    id: 88,
    title: 'Mysore Wind Power Project',
    category: 'Energy',
    image: MysoreWindImg,
    location: 'Mysore, Karnataka, India',
    client: 'Suzlon Energy Limited',
    specs: '250 MW Onshore Wind Farm',
    date: '2022-2025',
    summary: 'Constructing wind generator farms near Mysore.',
    details: 'Wind turbine foundations, tubular steel towers, power evacuation lines, and central control stations.',
    challenge: 'Casting heavy gravity foundations on rocky plateau terrain.',
    solution: 'Utilized hydraulic rock breakers and high-strength self-compacting concrete.'
  },
  {
    id: 89,
    title: 'Surat Wind Energy Project',
    category: 'Energy',
    image: SuratWindImg,
    location: 'Surat, Gujarat, India',
    client: 'Inox Wind & ReNew Power',
    specs: '300 MW Coastal Wind Array',
    date: '2023 - 2025',
    summary: 'Installation of high-capacity onshore wind turbines along the Surat coast.',
    details: 'Wind generator towers, anti-corrosive coastal coatings, and high-voltage grid tie-in substations.',
    challenge: 'High coastal humidity and salt air causing corrosion on turbine nacelle components.',
    solution: 'Applied triple-layer epoxy polyurethane marine coatings to all exposed metal surfaces.'
  },
  {
    id: 90,
    title: 'Puga Geothermal Energy Project',
    category: 'Energy',
    image: PugaGeothermalImg,
    location: 'Puga Valley, Ladakh, India',
    client: 'ONGC & Geothermal Energy India',
    specs: 'High-Temperature Geothermal Power Plant',
    date: '2022 - 2026',
    summary: 'India\'s first geothermal power project, tapping high-temperature steam reservoirs in the Puga Valley.',
    details: 'Geothermal well drilling, binary cycle power plant, insulated steam transport piping, and high-altitude sub-zero electrical nodes.',
    challenge: 'Executing deep drilling at sub-zero high-altitude conditions (14,000 ft elevation).',
    solution: 'Used winterized drilling rigs with heated fluid circulation networks.'
  },
  {
    id: 91,
    title: 'Nagpur Metallurgical Expansion Project',
    category: 'Industrial',
    image: NagpurMetallurgicalImg,
    location: 'Hingna, Nagpur, Maharashtra, India',
    client: 'Tata Projects & SMS Group',
    specs: 'Heavy Steel & Alloy Processing Plant',
    date: '2023 - 2026',
    summary: 'Expansion of metal processing facilities in Hingna, Nagpur.',
    details: 'High-capacity blast furnaces, automatic rolling mills, gas scrubbers, and heavy overhead crane runways.',
    challenge: 'Erecting 100-ton crane runway girders inside an active steel mill without stopping production.',
    solution: 'Utilized specialized low-clearance hydraulic gantry systems for overnight girder installations.'
  },
  {
    id: 92,
    title: 'Krishnapatnam Port Expansion Project',
    category: 'Aviation & Infrastructure',
    image: KrishnapatnamPortImg,
    location: 'Krishnapatnam, Andhra Pradesh, India',
    client: 'Adani Ports (APSEZ)',
    specs: 'Deepwater Container Berths & Bulk Terminals',
    date: '2022 - 2026',
    summary: 'Expanding the deepwater port infrastructure at Krishnapatnam.',
    details: 'Container berth construction, automated bulk cargo conveyers, harbor basin deepening, and rail intermodal yards.',
    challenge: 'Driving 40-meter steel pipe piles into dense marine seabed layers.',
    solution: 'Deployed heavy diesel impact hammers with automated verticality guidance sensors.'
  },
  {
    id: 93,
    title: 'Paimana Highway Network Project',
    category: 'Aviation & Infrastructure',
    image: PaimanaImg,
    location: 'Western India Corridor',
    client: 'NHAI & Dilip Buildcon',
    specs: 'High-Capacity Express Expressway',
    date: '2018 - 2027',
    summary: 'A comprehensive highway corridor modernization program connecting industrial hubs.',
    details: 'Highway expansion, intelligent toll plazas, automated traffic control centers, and heavy freight lanes.',
    challenge: 'Rebuilding high-traffic interchanges without closing primary freight shipping lanes.',
    solution: 'Phased construction utilizing temporary precast bridge detours.'
  },
  {
    id: 94,
    title: 'Battery Energy Storage System Manufacturing Facility',
    category: 'Industrial',
    image: BatteryStorageImg,
    location: 'Dhenkanal, Odisha, India',
    client: 'State Industrial Development Corporation',
    specs: 'Advanced Giga-Factory Battery Storage Unit',
    date: '2023–2026',
    summary: 'Constructing a large-scale manufacturing plant for grid-scale battery energy storage systems.',
    details: 'Cleanroom manufacturing halls, dry-room assembly lines, chemical handling yards, and testing substations.',
    challenge: 'Maintaining ultralow dew point (-40°C) inside dry-room battery assembly suites.',
    solution: 'Installed industrial desiccant dehumidification systems sealed within air-tight insulated panels.'
  },
  {
    id: 95,
    title: 'JW Marriott Austin Luxury Hotel',
    category: 'Commercial & Mixed-Use',
    image: JWMarriottAustinImg,
    location: 'Austin, Texas',
    client: 'White Lodging Services',
    specs: '34 Stories, 1,012 Guest Rooms & Convention Center',
    date: '2015–2024',
    summary: 'A 34-story luxury convention hotel located in downtown Austin.',
    details: 'Post-tensioned concrete tower, grand ballroom structures, rooftop pool deck, and underground parking garages.',
    challenge: 'Casting massive 10-foot thick concrete mat foundation in congested urban core.',
    solution: 'Executed continuous 24-hour pour of 14,000 cubic yards of concrete using five simultaneous pump trucks.'
  },
  {
    id: 96,
    title: 'Cross River Rail Infrastructure Project',
    category: 'Aviation & Infrastructure',
    image: CrossRiverRailImg,
    location: 'Queensland, Australia',
    client: 'Queensland Government',
    specs: '10.2 km Rail Line & 5.9 km Twin Tunnels',
    date: '2019–2026',
    summary: 'A major rail project including twin tunnels under the Brisbane River and new underground stations.',
    details: 'Twin-bore TBM tunneling, underground cavern stations, rail systems integration, and urban precinct redevelopment.',
    challenge: 'Boring tunnels under a major riverbed through complex fault geology.',
    solution: 'Operated dual-mode TBMs with real-time seismic probing ahead of the cutterhead.'
  },
  {
    id: 97,
    title: 'NEOM Mega Infrastructure Development',
    category: 'Aviation & Infrastructure',
    image: NEOMImg,
    location: 'Tabuk Province, Saudi Arabia',
    client: 'NEOM Company',
    specs: 'High-Speed Rail Tunnels & Utility Infrastructure',
    date: '2022–2030',
    summary: 'Subterranean transport tunnels, utility corridors, and heavy civil foundations for the futuristic region.',
    details: 'Hard-rock TBM tunneling, underground logistics networks, solar/wind grid substations, and water desalination pipelines.',
    challenge: 'Extremely remote desert environment and hard granite rock tunnel excavation.',
    solution: 'Deployed heavy-duty hard rock TBMs and established self-contained worker logistics hubs.'
  },
  {
    id: 98,
    title: 'UCSF Medical Center at Mission Bay',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80',
    location: 'San Francisco, California',
    client: 'University of California San Francisco',
    specs: '878,000 sq. ft., 289-Bed Hospital Complex',
    date: '2015–2024',
    summary: 'A landmark multi-specialty clinical complex integrating pediatric, women\'s, and cancer care hospitals.',
    details: 'Constructed three integrated clinical towers with advanced operating suites, seismic joint corridors, and high-efficiency mechanical infrastructure.',
    challenge: 'Executing heavy concrete pours and precision MEP tie-ins adjacent to active urban bio-research labs.',
    solution: 'Leveraged virtual design coordination (VDC) and pre-fabricated modular MEP corridor racks installed during off-peak windows.'
  },
  {
    id: 99,
    title: 'Meta Prineville Hyperscale Data Center Campus',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    location: 'Prineville, Oregon',
    client: 'Meta Platforms (Facebook)',
    specs: '4.6M sq. ft., Tier III Hyperscale Campus',
    date: '2012–2025',
    summary: 'A world-class hyperscale compute campus setting global standards in energy-efficient data storage.',
    details: 'Multiple high-capacity data halls featuring custom direct evaporative cooling units, redundant 500kV electrical interconnects, and fiber spine networks.',
    challenge: 'Managing high-velocity schedule milestones across massive building shells in high-desert climate conditions.',
    solution: 'Implemented modular prefabricated structural steel frames and tilt-up concrete envelopes completed in accelerated cycles.'
  },
  {
    id: 100,
    title: 'Meta Altoona Data Center Campus',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    location: 'Altoona, Iowa',
    client: 'Meta Platforms (Facebook)',
    specs: '5M sq. ft., Multi-Building Data Hub',
    date: '2014–2026',
    summary: 'A hyper-scale cloud infrastructure campus powered 100% by regional renewable energy.',
    details: 'Building massive server enclosures, high-voltage substations, and ultra-reliable emergency generator backup wings.',
    challenge: 'Routing complex high-voltage conduit channels without impeding concurrent civil earthwork operations.',
    solution: 'Used 4D construction BIM sequencing to deconflict underground utility trenching and slab placements.'
  },
  {
    id: 101,
    title: 'Apple Park Support & Technical Facilities',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
    location: 'Cupertino, California',
    client: 'Apple Inc.',
    specs: 'High-Tolerance Corporate & Testing Campus',
    date: '2017–2024',
    summary: 'High-precision technical support and research buildings constructed to exacting architectural tolerances.',
    details: 'State-of-the-art testing suites, high-end architectural terrazzo flooring, concealed mechanical runs, and integrated solar arrays.',
    challenge: 'Meeting unprecedented millimeter-level architectural finish tolerances on curved structural glass and stone.',
    solution: 'Engineered specialized laser-guided alignment jigs and custom robotic vacuum lifters for oversized panels.'
  },
  {
    id: 102,
    title: 'BioMed Realty Gateway of Pacific',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    location: 'South San Francisco, California',
    client: 'BioMed Realty Trust',
    specs: '2.2M sq. ft., Life Science Innovation Campus',
    date: '2018–2025',
    summary: 'A premier life science hub with multi-tenant laboratory and Class-A office buildings.',
    details: 'Constructing specialized lab facilities with 100% outside air HVAC, dedicated acid-neutralization waste plants, and vibrant central amenity parks.',
    challenge: 'Accommodating heavy vibration criteria for ultra-sensitive optical microscope labs on upper floor plates.',
    solution: 'Designed thick post-tensioned floor slabs with decoupled structural floor framing to absorb resonant frequencies.'
  },
  {
    id: 103,
    title: 'Lucile Packard Children\'s Hospital Stanford',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    location: 'Palo Alto, California',
    client: 'Stanford Health Care',
    specs: '521,000 sq. ft., LEED Platinum Pediatric Facility',
    date: '2017–2024',
    summary: 'A national model for pediatric care featuring expansive healing gardens and innovative clinical planning.',
    details: 'Private patient rooms, surgical suites, specialized cardiac ICU wings, and extensive water cistern reclamation networks.',
    challenge: 'Maintaining silent, dust-free infection control buffers directly adjacent to active operational hospital corridors.',
    solution: 'Erected pressurized negative-air containment barriers and scheduled acoustic demolition during strictly monitored shifts.'
  },
  {
    id: 104,
    title: 'eBay Topaz High-Density Data Center',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80',
    location: 'South Jordan, Utah',
    client: 'eBay Inc.',
    specs: 'Tier IV Reliability Data Facility',
    date: '2013–2024',
    summary: 'An energy-efficient data center facility designed for maximum computational density and uptime.',
    details: 'Features high-density server racks, medium-voltage distribution systems, solar rooftop arrays, and hot-aisle containment suites.',
    challenge: 'Extreme high-density thermal loads demanding innovative continuous cooling without consuming massive water volumes.',
    solution: 'Installed variable-speed fan wall assemblies and dual-source closed-loop chilled fluid loops.'
  },
  {
    id: 105,
    title: 'Bayer Healthcare Global Cell Culture Facility',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
    location: 'Berkeley, California',
    client: 'Bayer HealthCare',
    specs: 'Biotech Cell Culture & Purification Plant',
    date: '2021–2025',
    summary: 'An advanced clinical biotechnology manufacturing facility producing targeted therapy products.',
    details: 'Constructed cleanroom suites, clean-in-place (CIP) and steam-in-place (SIP) utility piping, and single-use bioreactor ballrooms.',
    challenge: 'Meeting FDA validation and cGMP cleanroom particulate standards within a compressed timeline.',
    solution: 'Pre-tested modular skids off-site and deployed integrated digital commissioning protocols.'
  },
  {
    id: 106,
    title: 'Tampa International Airport Main Terminal Modernization',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=80',
    location: 'Tampa, Florida',
    client: 'Hillsborough County Aviation Authority',
    specs: 'Terminal Expansion & Concession Plazas',
    date: '2018–2024',
    summary: 'Major redevelopment of passenger transfer levels, concession plazas, and dynamic escalators.',
    details: 'Expanding public circulation space, updating automated people mover (APM) guideway stations, and erecting wide glass curtainwalls.',
    challenge: 'Executing structural modifications over active airport ticket queues without disrupting passenger flows.',
    solution: 'Implemented phased night-time structural work behind acoustic barrier screens.'
  },
  {
    id: 107,
    title: 'MD Anderson Cancer Center Specialized Facilities',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    location: 'Houston, Texas',
    client: 'University of Texas MD Anderson',
    specs: 'Specialized Oncology Clinical & Research Suites',
    date: '2019–2025',
    summary: 'Clinical expansion supporting cutting-edge immunotherapy research and specialized patient treatment.',
    details: 'State-of-the-art infusion therapy centers, radiation therapy treatment vaults, and climate-controlled sample preservation suites.',
    challenge: 'Integrating heavy radiation shielding concrete into existing hospital basement structures.',
    solution: 'Formed high-density barite aggregate concrete walls with zero cold-joint defects.'
  },
  {
    id: 108,
    title: 'Mayo Clinic Phoenix Campus Bed Tower',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    location: 'Phoenix, Arizona',
    client: 'Mayo Clinic',
    specs: 'Multi-Story Patient Tower & Emergency Wing',
    date: '2020–2025',
    summary: 'A multi-story hospital tower addition expanding patient capacity and surgical capabilities.',
    details: 'Constructed patient suites, operating rooms, cardiovascular ICU facilities, and central utility plant upgrades.',
    challenge: 'Continuous high desert heat creating challenges for large monolithic foundation concrete pours.',
    solution: 'Executed overnight concrete pours utilizing chilled water and nitrogen cooling systems to maintain curing stability.'
  },
  {
    id: 109,
    title: 'Mayo Clinic Rochester Hospital Modernization',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    location: 'Rochester, Minnesota',
    client: 'Mayo Clinic',
    specs: 'Historic Clinical Modernization & Diagnostic Bays',
    date: '2021–2026',
    summary: 'Structural renovation of core diagnostic centers and advanced imaging suites.',
    details: 'Upgrading MRI suites, clinical labs, MEP infrastructure, and digital communications corridors.',
    challenge: 'Eliminating electromagnetic interference between high-powered MRI magnets and new electrical switchgear.',
    solution: 'Installed silicon steel shielding panels and decoupled structural steel floor supports.'
  },
  {
    id: 110,
    title: 'Palomar Medical Center West',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    location: 'Escondido, California',
    client: 'Palomar Health',
    specs: '740,000 sq. ft., 11-Story Acute Care Hospital',
    date: '2012–2024',
    summary: 'A hospital facility pioneering early virtual BIM design and patient-centered architectural layouts.',
    details: 'Garden roofs, natural daylighting corridors, satellite nursing stations, and modular surgical suites.',
    challenge: 'Coordinating thousands of MEP system clashes across an 11-story curvilinear structure.',
    solution: 'Utilized comprehensive 3D BIM clash detection to resolve hundreds of system conflicts before field fabrication.'
  },
  {
    id: 111,
    title: 'Kaiser Permanente San Diego Medical Center',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80',
    location: 'San Diego, California',
    client: 'Kaiser Permanente',
    specs: '617,000 sq. ft., 321-Bed Hospital',
    date: '2017–2024',
    summary: 'A state-of-the-art hospital combining cutting-edge technology with sustainable environmental design.',
    details: 'Constructed intensive care units, emergency suites, radiology wards, and a central utility plant achieving LEED Platinum.',
    challenge: 'High California seismic hospital code (OSHPD-1) compliance across all MEP piping and structural braces.',
    solution: 'Engineered seismic snubbers and flexible braided couplings on all critical medical lines.'
  },
  {
    id: 112,
    title: 'Sutter Health CPMC Van Ness Campus Hospital',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    location: 'San Francisco, California',
    client: 'Sutter Health',
    specs: '1M sq. ft., 274-Bed Hospital Complex',
    date: '2019–2024',
    summary: 'An urban hospital built with innovative seismic viscous wall dampers.',
    details: 'Constructed patient towers, trauma centers, maternity suites, and multi-tier subterranean parking in downtown San Francisco.',
    challenge: 'Zero-lot-line site bounded by busy transit arteries requiring massive deep excavation and shoring.',
    solution: 'Installed continuous soldier piles and internal tiebacks, accompanied by 119 viscous wall dampers to withstand major earthquakes.'
  },
  {
    id: 113,
    title: 'Banner University Medical Center Phoenix Expansion',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    location: 'Phoenix, Arizona',
    client: 'Banner Health',
    specs: '16-Story Patient Tower & Emergency Center',
    date: '2018–2024',
    summary: 'A high-rise medical tower modernizing emergency response and clinical surgery.',
    details: 'Emergency bays, intensive care units, rooftop helipad, and underground utility links.',
    challenge: 'Erecting a 16-story tower directly adjacent to an active helipad and emergency trauma entrance.',
    solution: 'Implemented real-time radar airspace coordination and configured specialized tower cranes with automated slew limits.'
  },
  {
    id: 114,
    title: 'Domain 9 Office Building',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1780411926543-8d280cb58430?auto=format&fit=crop&w=1200&q=80',
    location: 'Austin, Texas',
    client: 'Cousins Properties',
    specs: '794,000 sq. ft., 9-Story Office Tower',
    date: '2022–2025',
    summary: 'A multi-level office development with integrated parking in Austin\'s Domain district.',
    details: 'Post-tensioned concrete slabs, high-efficiency curtainwall panels, tenant fitness centers, and rooftop terraces.',
    challenge: 'Accelerating vertical formwork cycling on an aggressive fast-track delivery schedule.',
    solution: 'Utilized self-climbing hydraulic core formwork systems to cast tower elevator cores days ahead of floor decks.'
  },
  {
    id: 115,
    title: 'Colorado Tower',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80',
    location: 'Austin, Texas',
    client: 'Cousins Properties',
    specs: '29 Stories, 373,000 sq. ft. Class-A Office',
    date: '2015–2024',
    summary: 'A downtown Austin skyscraper featuring panoramic views and high-efficiency mechanical systems.',
    details: 'Glass and steel commercial tower with grand lobby finishes, conference centers, and multi-level integrated parking.',
    challenge: 'Tight urban downtown footprint with zero material staging space.',
    solution: 'Executed strict just-in-time material deliveries and off-hour steel crane picks.'
  },
  {
    id: 116,
    title: 'Terminus 100 Tower',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    location: 'Atlanta, Georgia',
    client: 'Cousins Properties',
    specs: '27 Stories, 582,000 sq. ft. Tower',
    date: '2007–2024',
    summary: 'A landmark mixed-use commercial office tower anchoring the Buckhead district.',
    details: 'Structural concrete frame, energy-efficient curtainwall glazing, retail arcades, and landscaped outdoor pedestrian plazas.',
    challenge: 'Integrating transit links and pedestrian bridges over high-traffic thoroughfares.',
    solution: 'Pre-assembled structural steel bridge components offsite and erected spans in single weekend closures.'
  },
  {
    id: 117,
    title: 'Marengo Office Core & Shell Modernization',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    location: 'Pasadena, California',
    client: 'Atlas Capital Group',
    specs: '360,000 sq. ft. Office Modernization',
    date: '2022–2025',
    summary: 'Complete architectural transformation of a historic corporate complex into modern collaborative workspaces.',
    details: 'Created an open central atrium, added glass-fiber reinforced concrete (GFRC) facade panels, and updated all central MEP lines.',
    challenge: 'Cutting a massive open-air atrium through existing structural concrete post-tensioned floors.',
    solution: 'Installed temporary shoring towers and cut concrete with automated diamond wire saws to eliminate micro-cracking.'
  },
  {
    id: 118,
    title: 'Nielsen Media Research Global Technology Center',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    location: 'Oldsmar, Florida',
    client: 'The Nielsen Company',
    specs: '39-Acre Corporate Campus, 350,000 sq. ft.',
    date: '2004–2024',
    summary: 'A campus featuring Category-5 hurricane-hardened technical processing centers.',
    details: 'Hardened precast concrete shell, central utility plant with redundant diesel generators, and chilled water energy storage.',
    challenge: 'Ensuring 100% operational continuity during major coastal hurricane wind events.',
    solution: 'Engineered blast and missile-resistant exterior curtainwalls and redundant dual-feed substation power grids.'
  },
  {
    id: 119,
    title: 'Genentech Oceanside Biologics Manufacturing Center',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    location: 'Oceanside, California',
    client: 'Genentech / Roche',
    specs: 'High-Volume Biologics Production Suites',
    date: '2016–2025',
    summary: 'A manufacturing facility producing clinical monoclonal antibody therapies.',
    details: 'Bioreactor suites, downstream purification centers, cold storage warehouses, and clean utility distribution grids.',
    challenge: 'High-purity orbital welding requirements for hundreds of miles of stainless steel pharmaceutical tubing.',
    solution: 'Employed automated orbital weld machines with digital boroscope inspections on 100% of weld joints.'
  },
  {
    id: 120,
    title: 'Arizona State University ISTB 4',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    location: 'Tempe, Arizona',
    client: 'Arizona State University',
    specs: '298,000 sq. ft., STEM Research Complex',
    date: '2012–2024',
    summary: 'An interdisciplinary research building with cleanrooms and specialized astrophysics laboratories.',
    details: 'High-bay testing halls, optics laboratories, vibration-isolated testing pads, and public interactive outreach atriums.',
    challenge: 'Isolating ultra-sensitive mass spectrometer lasers from pedestrian vibrations and mechanical equipment.',
    solution: 'Cast decoupled inertia foundation blocks seated on elastomeric neoprene acoustic pads.'
  },
  {
    id: 121,
    title: 'Vanguard Corporate Headquarters Campus',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    location: 'Charlotte, North Carolina',
    client: 'The Vanguard Group',
    specs: '700,000 sq. ft., Multi-Building Office Campus',
    date: '2021–2025',
    summary: 'A corporate campus designed with sustainable materials and flexible tech workspaces.',
    details: 'Class-A office spaces, conference centers, employee dining halls, walking trails, and structured parking garages.',
    challenge: 'Coordinating concurrent trade construction across four separate building sites simultaneously.',
    solution: 'Deployed digital cloud field logistics platforms and daily multi-zone superintendent coordination meetings.'
  },
  {
    id: 122,
    title: 'Edwards Lifesciences Global Headquarters',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    location: 'Irvine, California',
    client: 'Edwards Lifesciences',
    specs: 'Corporate Headquarters & Innovation Center',
    date: '2019–2025',
    summary: 'Corporate expansion featuring advanced heart valve research laboratories and employee collaboration hubs.',
    details: 'Glass-clad office towers, cleanroom prototyping suites, museum exhibition galleries, and green rooftop gathering decks.',
    challenge: 'Balancing corporate office finishes alongside strict bio-medical research containment standards.',
    solution: 'Designed specialized airlock buffer lobbies and independent pressure-differential HVAC systems.'
  },
  {
    id: 123,
    title: 'Genentech Clinical Supply Center',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    location: 'South San Francisco, California',
    client: 'Genentech',
    specs: 'Modular Small-Batch Biologics Facility',
    date: '2020–2025',
    summary: 'A pharmaceutical production facility designed for accelerated small-batch clinical trials.',
    details: 'Prefabricated modular cleanroom pods, flexible single-use processing equipment, and digital batch record monitoring.',
    challenge: 'Compressing facility delivery by 50% compared to traditional pharmaceutical build timelines.',
    solution: 'Manufactured cleanroom pods off-site in parallel with on-site foundation and utility installs.'
  },
  {
    id: 124,
    title: 'Illumina i3 Campus',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=80',
    location: 'San Diego, California',
    client: 'BioMed Realty / Illumina',
    specs: '316,000 sq. ft., Life Science & Office Campus',
    date: '2017–2024',
    summary: 'A genomic research headquarters designed to attract top scientific and software engineering talent.',
    details: 'Three modern office and research buildings, green roof amenities, outdoor amphitheaters, and fitness centers.',
    challenge: 'Managing zero-lot-line foundation pours next to sensitive neighboring biotech enterprises.',
    solution: 'Monitored seismic vibrations in real-time and scheduled major heavy equipment moves during low-traffic windows.'
  },
  {
    id: 125,
    title: 'Scripps Health Prebys Cardiovascular Institute',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=80',
    location: 'La Jolla, California',
    client: 'Scripps Health',
    specs: '383,000 sq. ft., 7-Story Cardiovascular Hospital',
    date: '2015–2024',
    summary: 'A cardiovascular hospital with integrated hybrid surgical suites and advanced cath labs.',
    details: 'Hybrid operating rooms, cardiac catheterization labs, specialized cardiac recovery rooms, and digital diagnostic centers.',
    challenge: 'OSHPD-1 stringent ceiling seismic bracing requirements over crowded robotic surgical machinery.',
    solution: 'Built heavy overhead unistrut ceiling grids detailed down to the millimeter in BIM models.'
  },
  {
    id: 126,
    title: 'Sharp Chula Vista Ocean View Tower',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    location: 'Chula Vista, California',
    client: 'Sharp HealthCare',
    specs: '197,000 sq. ft., 138-Bed Hospital Tower',
    date: '2019–2024',
    summary: 'A modern hospital tower built to meet the healthcare needs of South San Diego County.',
    details: 'Private patient rooms, intensive care units, high-tech operating suites, and a rooftop wellness terrace.',
    challenge: 'Connecting new tower utility infrastructure to existing active hospital utility plants.',
    solution: 'Utilized hot-tap utility line connections without taking critical hospital systems offline.'
  },
  {
    id: 127,
    title: 'Qualcomm Building AZ Expansion',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    location: 'San Diego, California',
    client: 'Qualcomm Technologies',
    specs: 'High-Tech Testing & R&D Facility',
    date: '2018–2024',
    summary: 'Expansion of wireless communications testing suites and advanced semiconductor research labs.',
    details: 'Anechoic testing chambers, radio frequency (RF) shielded rooms, cleanrooms, and high-capacity electrical backup.',
    challenge: 'Absolute RF shielding integrity required to prevent external signal leakage during chip testing.',
    solution: 'Installed continuous copper-lined wall enclosures with double-contact door seal mechanisms.'
  },
  {
    id: 128,
    title: 'Digital Realty Hyperscale Data Campus',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    location: 'Ashburn, Virginia',
    client: 'Digital Realty',
    specs: '1M sq. ft., Tier III Hyperscale Facility',
    date: '2019–2025',
    summary: 'A multi-story hyperscale data center facility in the heart of Data Center Alley.',
    details: 'Massive white space computer rooms, 415V electrical power distribution, high-efficiency chillers, and diesel generators.',
    challenge: 'Extremely compressed electrical substation commissioning schedule before customer tenant move-in.',
    solution: 'Conducted factory witness load-bank testing of switchgear before on-site equipment arrival.'
  },
  {
    id: 129,
    title: 'CyrusOne Phoenix Data Center Hub',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    location: 'Chandler, Arizona',
    client: 'CyrusOne',
    specs: '500,000 sq. ft., 100MW Critical IT Load',
    date: '2020–2025',
    summary: 'A mission-critical data center campus providing cloud compute capacity.',
    details: 'Zero-water cooling systems, high-density server halls, precast insulated concrete walls, and dual utility feeds.',
    challenge: 'Operating massive cooling systems in 115°F desert summer conditions without consuming potable water.',
    solution: 'Implemented closed-loop chilled water systems with air-cooled chillers and integrated economizer coils.'
  },
  {
    id: 130,
    title: 'Equinix Silicon Valley SV10 Data Center',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    location: 'San Jose, California',
    client: 'Equinix',
    specs: 'Tier III International Business Exchange (IBX)',
    date: '2017–2024',
    summary: 'A premier IBX colocation data facility serving major global internet and financial networks.',
    details: 'Multi-level server racks, bio-metric security corridors, seismic isolated battery rooms, and N+1 power redundancy.',
    challenge: 'San Jose high seismic zone requirements demanding structural floor-to-ceiling server rack bracing.',
    solution: 'Engineered specialized structural overhead drop-in steel unistrut trusses anchored directly to concrete slabs.'
  },
  {
    id: 131,
    title: 'Stanford University Center for Academic Medicine',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1527891751199-722e37466723?auto=format&fit=crop&w=1200&q=80',
    location: 'Palo Alto, California',
    client: 'Stanford Medicine',
    specs: '170,000 sq. ft., Academic & Clinical Office',
    date: '2020–2024',
    summary: 'An academic medicine center uniting clinical faculty in a sustainable workplace.',
    details: 'Curtainwalls with automated exterior ceramic louvers, natural ventilation corridors, and underground parking.',
    challenge: 'Minimizing solar heat gain while preserving unobstructed views of the surrounding Stanford arboretum.',
    solution: 'Specified passive architectural sun-shading fins calculated via seasonal solar path simulations.'
  },
  {
    id: 132,
    title: 'University of Arizona Biomedical Sciences Partnership Building',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    location: 'Phoenix, Arizona',
    client: 'University of Arizona',
    specs: '245,000 sq. ft., 10-Story Research Tower',
    date: '2017–2024',
    summary: 'A research facility featuring a folded copper facade inspired by desert canyon geology.',
    details: 'Wet laboratories, computational research offices, clean rooms, and public conference facilities.',
    challenge: 'Installing thousands of custom-folded copper exterior panels on a 10-story exterior facade.',
    solution: 'Prefabricated unitized panel assemblies in off-site warehouses and hoisted them in sequenced vertical drops.'
  },
  {
    id: 133,
    title: 'UC Davis Health Eye Center',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80',
    location: 'Sacramento, California',
    client: 'UC Davis Health',
    specs: '64,000 sq. ft., Specialty Eye Hospital',
    date: '2022–2025',
    summary: 'A specialized surgical center and vision care clinic.',
    details: 'Ophthalmic surgical suites, refractive laser rooms, specialized diagnostic lanes, and clinical trials spaces.',
    challenge: 'Laser procedure rooms require zero vibrations from nearby building HVAC mechanical units.',
    solution: 'Mounted mechanical air handlers on spring-isolated roof curbs and isolated surgical floor slabs.'
  },
  {
    id: 134,
    title: 'Children\'s Hospital of San Antonio Transformation',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    location: 'San Antonio, Texas',
    client: 'CHRISTUS Santa Rosa Health System',
    specs: '400,000 sq. ft., Hospital Modernization',
    date: '2015–2024',
    summary: 'Total conversion and renovation of a historic downtown hospital into a world-class pediatric center.',
    details: 'Pediatric ICU wards, emergency centers, colorful exterior facade curtainwalls, and healing prayer gardens.',
    challenge: 'Complete structural renovations while maintaining active patient emergency treatment.',
    solution: 'Phased the building renovation across 14 independent vertical and horizontal construction stages.'
  },
  {
    id: 135,
    title: 'Texas Children\'s Hospital Pavilion for Women',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80',
    location: 'Houston, Texas',
    client: 'Texas Children\'s Hospital',
    specs: '15-Story Women\'s Specialty Hospital Tower',
    date: '2012–2024',
    summary: 'A specialty hospital dedicated to maternal-fetal medicine and comprehensive obstetrics care.',
    details: 'Labor and delivery suites, neonatal intensive care units (NICU), clinical research wings, and pedestrian skybridges.',
    challenge: 'Constructing skybridge connections spanning high-traffic Texas Medical Center avenues.',
    solution: 'Erected long-span structural trusses using high-capacity mobile hydraulic cranes during weekend street detours.'
  },
  {
    id: 136,
    title: 'Austin Community College Highland Phase 2',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    location: 'Austin, Texas',
    client: 'Austin Community College',
    specs: '415,000 sq. ft., Adaptive Reuse Campus',
    date: '2020–2024',
    summary: 'Adaptive reuse transformation of an obsolete shopping mall into an educational campus.',
    details: 'Culinary arts teaching kitchens, performing arts theaters, digital media production labs, and high-tech STEM suites.',
    challenge: 'Converting deep windowless department store retail footprints into sunlit educational classrooms.',
    solution: 'Cut continuous skylights and multi-level light wells through the existing roof deck.'
  },
  {
    id: 137,
    title: 'Cousins Northpark 600 Tower',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    location: 'Sandy Springs, Georgia',
    client: 'Cousins Properties',
    specs: 'Multi-Story Commercial Renovation & Fitness Center',
    date: '2022–2025',
    summary: 'Modernization of commercial building spaces including a tenant fitness center and refreshed grand lobbies.',
    details: 'Architectural woodwork, custom tile installations, curved glazing panels, and updated high-efficiency HVAC units.',
    challenge: 'Executing heavy demolition work directly underneath active Fortune 500 corporate office suites.',
    solution: 'Used electric mini-excavators and acoustic sound dampeners during designated off-hour shifts.'
  },
  {
    id: 138,
    title: 'One Eleven Congress Modernization',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
    location: 'Austin, Texas',
    client: 'Cousins Properties',
    specs: 'Tower Amenities & Fitness Facility Buildout',
    date: '2021–2024',
    summary: 'High-end interior modernization of tenant amenity clubs, executive conference suites, and wellness centers.',
    details: 'Self-performed drywall, custom doors, frames, architectural hardware, and specialized lighting installations.',
    challenge: 'Coordinating high-end interior architectural finishes across multiple trade contractors on a rapid schedule.',
    solution: 'Deployed self-perform interior finish teams to directly manage critical path quality milestones.'
  },
  {
    id: 139,
    title: 'Bhadla Solar Park',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    location: 'Jodhpur, Rajasthan, India',
    client: 'NTPC, Adani Green Energy & Hero Future',
    specs: '14,000 Acres, 2,245 MW Solar Generation',
    date: '2015–2024',
    summary: 'One of the largest operational solar parks in the world, generating over 2.2 GW of clean renewable energy.',
    details: 'Millions of solar photovoltaic panels, automated dry-cleaning robotic arms, and high-voltage substation switchyards.',
    challenge: 'Severe desert sand dust storms reducing solar panel generation efficiency.',
    solution: 'Installed automated waterless robotic cleaning bots to maintain maximum solar panel light absorption.'
  },
  
  {
    id: 141,
    title: 'New Power Transformer Mfg. Project in Solan',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    location: 'Solan, Himachal Pradesh, India',
    client: 'Bharat Heavy Electricals Limited (BHEL)',
    specs: 'High-Voltage AC/DC Power Grid Factory',
    date: '2023–2025',
    summary: 'An advanced transformer manufacturing plant supporting the national electrical transmission grid.',
    details: 'Cleanroom winding halls, high-voltage testing bays, heavy overhead crane tracks, and climate-controlled assembly suites.',
    challenge: 'Erecting heavy industrial crane structures on hilly Himalayan foothills topography.',
    solution: 'Constructed reinforced concrete retaining walls and anchored deep foundation micro-piles into bedrock.'
  },
  {
    id: 142,
    title: 'Tata Electronics Semiconductor Facility',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    location: 'Dholera, Gujarat, India',
    client: 'Tata Electronics & PSMC',
    specs: '50,000 Wafers Per Month AI & Chip Fab',
    date: '2024–2028',
    summary: 'India\'s landmark commercial semiconductor fabrication plant producing microchips for automotive and mobile systems.',
    details: 'Ultra-clean cleanrooms, gas distribution yards, pure chemical pipelines, and sub-fabrication vibration-isolated floors.',
    challenge: 'Strict zero-vibration specifications on deep coastal silt soils.',
    solution: 'Engineered massive monolithic concrete slab foundations coupled with deep bored pile grids.'
  },
  {
    id: 143,
    title: 'UM Capital Region Medical Center',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80',
    location: 'Largo, Maryland',
    client: 'University of Maryland Medical System',
    specs: '620,000 sq. ft., Acute-Care Hospital',
    date: '2021–2024',
    summary: 'A state-of-the-art regional medical center offering advanced specialty care, cardiac surgery, and trauma units.',
    details: 'Level II trauma center, healing garden plazas, private inpatient rooms, and energy-efficient building systems.',
    challenge: 'Accelerating facility completion to meet regional healthcare needs.',
    solution: 'Employed modular bathroom pods and multi-trade prefabricated corridor utility racks.'
  },
  {
    id: 144,
    title: 'Salesforce Tower',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80',
    location: 'San Francisco, California',
    client: 'Boston Properties & Hines',
    specs: '61 Stories, 1,070 ft. Supertall Skyscraper',
    date: '2018–2024',
    summary: 'The tallest skyscraper in San Francisco, featuring advanced seismic damping and LEED Platinum design.',
    details: 'Constructed heavy structural foundations into Franciscan bedrock, column-free interior floor plates, and HVAC air intakes on every floor.',
    challenge: 'Drilling socketed cast-in-place foundational caissons through dense bay mud into bedrock over 300 feet deep.',
    solution: 'Utilized world-class rotatory drilling rigs with polymer slurry support fluids to cast foundation caissons.'
  },
  {
    id: 145,
    title: 'Smithsonian\'s National Air and Space Museum Revitalization',
    category: 'Museums & Culture',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    location: 'Washington, D.C.',
    client: 'Smithsonian Institution',
    specs: 'Historic Cladding & 23 Exhibition Galleries',
    date: '2018–2026',
    summary: 'Multi-year architectural revitalizing of the most visited museum in America while keeping wings open to the public.',
    details: 'Replacing exterior Tennessee marble panels, re-engineering structural roof trusses, and hanging historic aircraft artifacts.',
    challenge: 'Safely lifting, rigging, and displaying irreplaceable historical aircraft and spacecraft in high atriums.',
    solution: 'Engineered custom 3D computer-modeled suspension cables and tension testing sensors.'
  },
  {
    id: 146,
    title: 'Howard County Circuit Courthouse',
    category: 'Healthcare & Government',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    location: 'Ellicott City, Maryland',
    client: 'Howard County Government',
    specs: '238,000 sq. ft., LEED Gold Judicial Center',
    date: '2021–2024',
    summary: 'A modern courthouse facility delivered through an innovative public-private partnership (P3).',
    details: 'Multiple courtrooms, judicial chambers, secure detention facilities, and integrated public community plazas.',
    challenge: 'Ensuring absolute structural separation between public visitors, judges, and secured detainees.',
    solution: 'Integrated three distinct, non-intersecting secure circulation paths throughout the building core.'
  },
  {
    id: 147,
    title: 'Midtown Center',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    location: 'Washington, D.C.',
    client: 'Carr Properties',
    specs: '865,000 sq. ft., Dual Towers & Skybridges',
    date: '2018–2024',
    summary: 'A headquarters complex featuring iconic multi-story glass-and-steel aerial pedestrian skybridges.',
    details: 'Two 14-story towers connected across a public plaza by three architectural skybridges, targeting LEED Gold.',
    challenge: 'Hoisting and securing 100-foot structural steel skybridges high above an open urban courtyard.',
    solution: 'Pre-assembled skybridges on the ground and hoisted them using twin heavy strand-jacking systems.'
  },
  {
    id: 148,
    title: 'Chase Center',
    category: 'Commercial & Mixed-Use',
    projectType: 'Sports and entertainment arena',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/chase-center',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/news_detail/public/2023-06/Chase%20Center%20east%20side%20view%20with%20Seeing%20spheres2_photo%20credit%20Jason%20ORear_jpg_jpg.jpg.webp',
    location: 'San Francisco, California',
    client: 'Golden State Warriors / GSW Arena LLC',
    specs: '18,064 Seats, 11-Acre District, Waterfront Arena',
    date: '2019',
    summary: 'A state-of-the-art waterfront sports and entertainment arena anchoring an 11-acre mixed-use district in Mission Bay.',
    details: 'Clark delivered this premier multi-purpose sports and entertainment arena, home to the NBA Golden State Warriors. The project encompasses an 18,064-seat arena, two 11-story commercial office towers comprising 580,000 sq. ft., 100,000 sq. ft. of retail, 925 subterranean parking spaces, and a 3.2-acre public waterfront plaza. To construct two subterranean levels below the San Francisco Bay water table, Clark engineered a 3,000-linear-foot soil-bentonite cutoff wall and executed deep dewatering operations.',
    challenge: 'Excavating 28 feet below sea level in saturated bay mud directly adjacent to San Francisco Bay while protecting neighboring bioscience laboratories.',
    solution: 'Installed a continuous cement-bentonite slurry cutoff wall, drilled socketed foundation caissons, and deployed automated real-time seismic vibration sensors to ensure zero impact on adjacent research labs.'
  },
  {
    id: 149,
    title: 'IDEA Factory at University of Maryland',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    location: 'College Park, Maryland',
    client: 'University of Maryland',
    specs: '60,000 sq. ft., STEM Innovation Hub',
    date: '2022–2025',
    summary: 'An engineering center housing rapid prototyping labs, quantum computing suites, and robotics arenas.',
    details: 'Open-concept prototyping studios, cleanrooms, high-bay autonomous flight facilities, and collaborative student incubators.',
    challenge: 'Supporting cantilevered architectural glass boxes while maintaining vibration dampening for laser labs.',
    solution: 'Integrated stiffened cantilever steel trusses and isolated concrete floor floating pads.'
  },
  {
    id: 150,
    title: 'Mumbai Trans Harbour Link (Atal Setu)',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1712023076708-a56b83c332a9?auto=format&fit=crop&w=1200&q=80',
    location: 'Sewri to Nhava Sheva, Maharashtra, India',
    client: 'MMRDA',
    specs: '21.8 km, 6-Lane Sea Bridge',
    date: '2018–2024',
    summary: 'India\'s longest sea bridge connecting Mumbai with Navi Mumbai across the Arabian Sea.',
    details: 'Constructed orthotropic steel decks (OSD), reverse-circulation drilled marine piers, noise barriers, and an intelligent traffic management system.',
    challenge: 'Erecting 180-meter long orthotropic steel deck spans in sensitive flamingo sanctuary mudflats and tidal shipping channels.',
    solution: 'Deployed massive crane barges and specialized marine strand jacks to lift prefabricated steel spans during high tide cycles.'
  },
  
  {
    id: 152,
    title: 'Mumbai–Ahmedabad High-Speed Rail Corridor',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1514337224818-9787cf717f2a?auto=format&fit=crop&w=1200&q=80',
    location: 'Maharashtra & Gujarat, India',
    client: 'NHSRCL',
    specs: '508 km, 320 km/h Bullet Train Corridor',
    date: '2020–2028',
    summary: 'India\'s first bullet train project utilizing Japanese Shinkansen E5 technology.',
    details: 'Elevated guideways, undersea rail tunnels, 12 modern high-speed stations, and heavy precast segment yards.',
    challenge: 'Boring a 21-km undersea tunnel beneath Thane Creek through complex marine geology.',
    solution: 'Deployed super-diameter 13.1-meter Slurry Tunnel Boring Machines with automated seismic face monitoring.'
  },
  {
    id: 153,
    title: 'Atal Tunnel',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1686994256083-47294e90a8c4?auto=format&fit=crop&w=1200&q=80',
    location: 'Rohtang Pass, Himachal Pradesh, India',
    client: 'Border Roads Organisation (BRO)',
    specs: '9.02 km Highway Tunnel, 10,000 ft Elevation',
    date: '2010–2024',
    summary: 'The world\'s longest highway tunnel above 10,000 feet, providing all-weather connectivity to Ladakh.',
    details: 'Horseshoe-shaped cross-section, semi-transverse ventilation, integrated emergency egress duct beneath the carriageway, and SCADA fire safety.',
    challenge: 'Severe water ingress and heavy rock bursts while boring through the fragile Seri Nullah fault zone.',
    solution: 'Implemented dynamic rock-bolting, chemical polyurethane grouting, and advanced drain drainage holes ahead of the excavation face.'
  },
  {
    id: 154,
    title: 'Zojila Tunnel Project',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1563718428108-a2420c356c5c?auto=format&fit=crop&w=1200&q=80',
    location: 'Zojila Pass, Jammu & Kashmir / Ladakh, India',
    client: 'NHIDCL',
    specs: '14.15 km Horseshoe Highway Tunnel',
    date: '2020–2026',
    summary: 'Strategic all-weather mountain tunnel ensuring continuous military and civilian connectivity between Srinagar and Leh.',
    details: 'Single-tube bi-directional tunnel, longitudinal ventilation, fully automated emergency SOS niches, and avalanche-resistant cut-and-cover portals.',
    challenge: 'Extreme Himalayan sub-zero temperatures (-30°C), heavy winter snowfalls, and avalanche hazards at high elevations.',
    solution: 'Employed specialized winterized drilling equipment, climate-controlled concrete batch plants, and avalanche deflector dams.'
  },
  {
    id: 155,
    title: 'Shinkun La Tunnel Project',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&w=1200&q=80',
    location: 'Shinkun La Pass, Ladakh, India',
    client: 'Border Roads Organisation (BRO)',
    specs: '4.1 km High-Altitude Tunnel at 15,800 ft',
    date: '2023–2027',
    summary: 'The world\'s highest highway tunnel linking Himachal Pradesh\'s Lahaul valley with Zanskar in Ladakh.',
    details: 'Twin-tube all-weather highway passage, automated air quality monitoring, heating systems, and specialized avalanche sheds.',
    challenge: 'Extremely thin oxygen levels and freezing sub-zero conditions preventing conventional diesel engine operations.',
    solution: 'Deployed electric and turbocharged high-altitude equipment supported by dedicated on-site oxygen and medical shelter hubs.'
  },
  
  
  
  {
    id: 159,
    title: 'Dhola–Sadiya Bridge (Bhupen Hazarika Setu)',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1703868673325-64d7d7afa618?auto=format&fit=crop&w=1200&q=80',
    location: 'Tinsukia, Assam, India',
    client: 'Ministry of Road Transport and Highways (MoRTH)',
    specs: '9.15 km Longest Water Bridge in India',
    date: '2011–2024',
    summary: 'Strategic water bridge over the Lohit River connecting Assam and Arunachal Pradesh.',
    details: '183 spans of pre-stressed concrete girders designed to support 60-ton military battle tanks.',
    challenge: 'Braided riverbed shifts and severe monsoon flooding spanning several kilometers across the floodplain.',
    solution: 'Executed deep hydraulic bored piles and installed rock rip-rap guide bunds to stabilize the river current.'
  },
  {
    id: 160,
    title: 'Sudarshan Setu',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1791760012345-1d9df7e0ac54?auto=format&fit=crop&w=1200&q=80',
    location: 'Okha – Beyt Dwarka, Gujarat, India',
    client: 'Gujarat R&B Department / NHAI',
    specs: '2.32 km Cable-Stayed Sea Bridge',
    date: '2018–2024',
    summary: 'India\'s longest cable-stayed bridge over sea water connecting Okha and Beyt Dwarka island.',
    details: 'Four-lane sea bridge with solar panels installed on upper footpath shelters generating 1 MW of green electricity.',
    challenge: 'Heavy tidal currents and marine corrosion impacting underwater foundation caissons.',
    solution: 'Employed high-performance self-compacting marine concrete and stainless steel reinforcement bars.'
  },
  {
    id: 161,
    title: 'Dwarka Expressway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1758470476440-024d3833b17e?auto=format&fit=crop&w=1200&q=80',
    location: 'Delhi – Gurugram, Haryana, India',
    client: 'NHAI',
    specs: '29 km, 8-Lane Elevated Urban Expressway',
    date: '2019–2024',
    summary: 'India\'s first elevated urban expressway featuring an 8-lane single pier elevated structure.',
    details: 'Multi-level interchanges, integrated storm water tunnels, toll plazas, and tunnel links directly to IGI Airport.',
    challenge: 'Casting massive cantilever pier caps over congested suburban traffic corridors.',
    solution: 'Used heavy mobile straddle carrier gantries and precast segmental bridge box girders.'
  },
  {
    id: 162,
    title: 'Delhi–Mumbai Expressway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1708193309876-e290c9da45df?auto=format&fit=crop&w=1200&q=80',
    location: 'Delhi, Haryana, Rajasthan, MP, Gujarat, Maharashtra',
    client: 'NHAI',
    specs: '1,386 km, 8-Lane Access-Controlled Expressway',
    date: '2019–2025',
    summary: 'The longest access-controlled expressway in India cutting travel time between Delhi and Mumbai to 12 hours.',
    details: 'Expandable to 12 lanes, state-of-the-art wildlife animal overpasses, automated speed enforcement, and wayside amenities every 50 km.',
    challenge: 'Passing through ecologically sensitive wildlife corridors near Ranthambore and Mukundra Hills national parks.',
    solution: 'Engineered specialized naturalized wildlife overpasses and acoustic barrier noise walls.'
  },
  {
    id: 163,
    title: 'Bengaluru–Mysuru Expressway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1669843496449-c9258b015064?auto=format&fit=crop&w=1200&q=80',
    location: 'Karnataka, India',
    client: 'NHAI',
    specs: '119 km, 10-Lane Access-Controlled Corridor',
    date: '2019–2024',
    summary: 'High-speed economic corridor reducing travel time between Bengaluru and Mysuru from 3.5 hours to 75 minutes.',
    details: 'Features 6-lane access-controlled main carriageways alongside 2-lane service roads, bypass overpasses, and river bridges.',
    challenge: 'Minimizing disruptions to agricultural irrigation channels along the highway alignment.',
    solution: 'Constructed numerous precast concrete box culverts and elevated viaduct bypasses around congested towns.'
  },
  {
    id: 164,
    title: 'Purvanchal Expressway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1550623177-7c31a322de87?auto=format&fit=crop&w=1200&q=80',
    location: 'Lucknow to Ghazipur, Uttar Pradesh, India',
    client: 'UPEIDA',
    specs: '340.8 km, 6-Lane Greenfield Expressway',
    date: '2018–2024',
    summary: 'Major economic spine connecting central Uttar Pradesh with eastern border districts.',
    details: 'Features a 3.2-km dedicated airstrip at Sultanpur for Indian Air Force emergency fighter jet landings.',
    challenge: 'Fast-track earthwork grading across massive alluvial plains prone to monsoon waterlogging.',
    solution: 'Applied geotextile ground reinforcement and integrated continuous drainage swales.'
  },
  {
    id: 165,
    title: 'Ganga Expressway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1570720903313-2725e963ad85?auto=format&fit=crop&w=1200&q=80',
    location: 'Meerut to Prayagraj, Uttar Pradesh, India',
    client: 'UPEIDA',
    specs: '594 km, 6-Lane Access-Controlled Expressway',
    date: '2022–2025',
    summary: 'One of India\'s largest greenfield expressway networks linking western Uttar Pradesh with eastern religious hubs.',
    details: 'Reinforced concrete overpasses, emergency fighter jet landing strip, wildlife underpasses, and solar-lit toll corridors.',
    challenge: 'Crossing major river basins and fertile agricultural lands with minimum environmental footprint.',
    solution: 'Precast segmental girder launching and high-density soil stabilization using lime-cement admixture piles.'
  },
  {
    id: 166,
    title: 'Bundelkhand Expressway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1506022332231-3647d37c1968?auto=format&fit=crop&w=1200&q=80',
    location: 'Chitrakoot to Etawah, Uttar Pradesh, India',
    client: 'UPEIDA',
    specs: '296 km, 4-Lane Greenfield Expressway',
    date: '2020–2024',
    summary: 'Access-controlled regional development expressway linking backward districts to national industrial corridors.',
    details: 'Four major river bridges, railway overbridges (ROBs), automated toll monitoring, and solar farm integration.',
    challenge: 'Dry, rocky terrain requiring extensive hard-rock blasting and aggregate supply chain coordination.',
    solution: 'Used controlled precision blasting and set up dedicated on-site aggregate crushing hubs.'
  },
  {
    id: 167,
    title: 'Gorakhpur Link Expressway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1508916319692-80a99da75692?auto=format&fit=crop&w=1200&q=80',
    location: 'Gorakhpur to Azamgarh, Uttar Pradesh, India',
    client: 'UPEIDA',
    specs: '91.35 km, 4-Lane Access-Controlled Link',
    date: '2020–2024',
    summary: 'Strategic highway spur linking Gorakhpur with the main Purvanchal Expressway network.',
    details: 'Grade-separated interchanges, agricultural underpasses, major river bridges over the Ghaghara, and commercial logistics hubs.',
    challenge: 'Constructing heavy bridge piers within the active braided flood basin of the Ghaghara River.',
    solution: 'Employed deep pneumatic caissons and specialized tremie concrete placement.'
  },
  {
    id: 168,
    title: 'Samruddhi Mahamarg',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1589808541688-5e797b17d8ac?auto=format&fit=crop&w=1200&q=80',
    location: 'Nagpur to Mumbai, Maharashtra, India',
    client: 'MSRDC',
    specs: '701 km, 6-Lane Super Communication Expressway',
    date: '2019–2024',
    summary: 'High-speed economic expressway connecting the state capital Mumbai with Nagpur at 150 km/h design speed.',
    details: 'Features extensive hill tunnels, elevated viaducts, wildlife overpasses, and fiber-optic smart highway networks.',
    challenge: 'Boring through the rugged Western Ghats mountain range with wide-profile multi-lane highway tunnels.',
    solution: 'Deployed mechanized NATM drilling jumbos and continuous digital laser profilometry.'
  },
  {
    id: 169,
    title: 'Mumbai Coastal Road Project',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1783589142418-ce2a8a0cea4d?auto=format&fit=crop&w=1200&q=80',
    location: 'Marine Drive to Kandivali, Mumbai, Maharashtra, India',
    client: 'BMC',
    specs: '29.2 km Freeway & Undersea Tunnels',
    date: '2018–2025',
    summary: 'Reclamation-based arterial coastal highway with India\'s first undersea road tunnels.',
    details: 'Land reclamation from the Arabian Sea, seawall rock armor, twin undersea tunnels beneath Malabar Hill, and seaside promenades.',
    challenge: 'Boring large 12.19-meter diameter twin tunnels through complex coastal geology and marine tidal pressure.',
    solution: 'Deployed India\'s largest Slurry TBM ("Mavala") equipped with real-time bentonite pressure balancing.'
  },
  {
    id: 170,
    title: 'Pune Ring Road Project',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1755585635727-336c600e19ad?auto=format&fit=crop&w=1200&q=80',
    location: 'Pune Metropolitan Region, Maharashtra, India',
    client: 'MSRDC',
    specs: '173 km, 8-Lane Circular Expressway',
    date: '2023–2027',
    summary: 'Outer circular bypass around Pune designed to divert transit freight traffic away from urban centers.',
    details: 'Deep mountain tunnels, multi-level flyovers, railway overbridges, and rapid inter-modal logistics hubs.',
    challenge: 'Navigating rugged Sahyadri hill slopes and dense suburban peri-urban development.',
    solution: 'Designed balanced cantilever viaducts and low-vibration rock excavation strategies.'
  },
  {
    id: 171,
    title: 'Thane–Borivali Twin Tunnel Project',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1571201674244-0a770ba0dac6?auto=format&fit=crop&w=1200&q=80',
    location: 'Mumbai / Thane, Maharashtra, India',
    client: 'MMRDA',
    specs: '11.8 km Twin-Tube Highway Tunnel',
    date: '2023–2028',
    summary: 'Subterranean bypass connecting Thane and Western Suburbs directly underneath Sanjay Gandhi National Park.',
    details: 'Twin 3-lane road tunnels with cross-passages every 300 meters, high-volume smoke extraction, and automated fire suppression.',
    challenge: 'Zero-disturbance environmental requirements to safeguard wildlife inside Sanjay Gandhi National Park above.',
    solution: 'Utilized deep shield TBM boring with micro-seismic sensors to guarantee zero surface vibrations.'
  },
  {
    id: 172,
    title: 'Virar–Alibaug Multimodal Corridor',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1780103204776-8e0b0886363f?auto=format&fit=crop&w=1200&q=80',
    location: 'MMR Region, Maharashtra, India',
    client: 'MSRDC',
    specs: '126 km Multi-Modal Transit Corridor',
    date: '2023–2028',
    summary: 'Integrated transportation corridor combining express highways, metro lines, and bus rapid transit lanes.',
    details: 'Links satellite growth centers with the upcoming Navi Mumbai International Airport and JNPT Port.',
    challenge: 'Coordinating massive multi-tier grade separations across existing highways and rail lines.',
    solution: 'Developed 4D BIM logistics coordination models to manage sequential bridge launches.'
  },
  {
    id: 173,
    title: 'Nagpur–Mumbai Super Communication Expressway (Phase Expansion)',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1737925761313-eb1dae0248c4?auto=format&fit=crop&w=1200&q=80',
    location: 'Igatpuri to Amane, Maharashtra, India',
    client: 'MSRDC',
    specs: 'Final Ghats Mountain Pass Section',
    date: '2022–2025',
    summary: 'Completion of the final treacherous mountain descent phase of the Maharashtra Samruddhi expressway.',
    details: 'High-viaduct concrete columns, mountain tunnels, and advanced fog-warning intelligent transportation systems.',
    challenge: 'Constructing 80-meter tall concrete piers in deep, wind-swept mountain valleys.',
    solution: 'Employed auto-climbing hydraulic formwork and helicopter-assisted material rigging.'
  },
  {
    id: 174,
    title: 'Chennai Peripheral Ring Road',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1647563359145-dc37bc12a60c?auto=format&fit=crop&w=1200&q=80',
    location: 'Chennai, Tamil Nadu, India',
    client: 'TNHD',
    specs: '133 km, 6-Lane Access-Controlled Ring Road',
    date: '2021–2026',
    summary: 'Strategic ring road connecting Ennore Port and Kattupalli Port with manufacturing corridors.',
    details: 'Features intelligent transport systems, dedicated freight lanes, coastal marsh overpasses, and high-load pavement.',
    challenge: 'Building stable embankments across soft coastal marshlands and low-lying mud beds.',
    solution: 'Installed prefabricated vertical drains (PVD) and stone column ground improvement networks.'
  },
  
  
  
  
  
  
  
  {
    id: 182,
    title: 'Jaipur Metro Phase 1C',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1768818373266-4b5cbe951512?auto=format&fit=crop&w=1200&q=80',
    location: 'Jaipur, Rajasthan, India',
    client: 'JMRC',
    specs: 'Underground Extension through Walled City',
    date: '2022–2025',
    summary: 'Extending the East-West metro corridor through the heart of the historic Walled City of Jaipur.',
    details: 'Underground station vaults, twin tunnel bores, architectural facades matching pink city heritage, and microclimate HVAC.',
    challenge: 'Underpinning century-old heritage masonry structures directly above the tunnel alignment.',
    solution: 'Implemented chemical jet grouting and real-time digital structural tilt meters on all historic monuments.'
  },
  
  
  {
    id: 185,
    title: 'Vadhavan Port Development',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    location: 'Dahanu, Maharashtra, India',
    client: 'JNPA & Maharashtra Maritime Board',
    specs: 'Greenfield Deepwater All-Weather Mega Port',
    date: '2024–2030',
    summary: 'One of the world\'s largest deepwater container ports with natural 20-meter draft to handle mega-container ships.',
    details: 'Land reclamation, offshore breakwaters, automated container terminals, and direct links to the Dedicated Freight Corridor.',
    challenge: 'Constructing heavy offshore breakwaters exposed to high-energy Arabian Sea wave forces.',
    solution: 'Placed thousands of high-density concrete tetrapods and accropodes along the perimeter breakwater.'
  },
  {
    id: 186,
    title: 'Vizhinjam International Seaport',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
    location: 'Thiruvananthapuram, Kerala, India',
    client: 'Adani Ports & Government of Kerala',
    specs: 'Deepwater Transshipment Mega Terminal',
    date: '2015–2024',
    summary: 'India\'s first deepwater transshipment container port located on strategic international east-west shipping channels.',
    details: 'Natural 20m depth, massive breakwater, automated rail-mounted gantry cranes, and berths handling mega container ships.',
    challenge: 'Sourcing and dumping millions of tons of granite core stone into rough deep-sea waters.',
    solution: 'Deployed specialized bottom-opening split-hopper barges and acoustic sonar profiling.'
  },
  {
    id: 187,
    title: 'Tuna-Tekra Mega Container Terminal',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    location: 'Kandla, Gujarat, India',
    client: 'DP World & Deendayal Port Authority',
    specs: '2.19M TEU Automated Container Terminal',
    date: '2023–2027',
    summary: 'State-of-the-art container transshipment hub at Deendayal Port serving northern and western hinterlands.',
    details: '1,100-meter quay wall, heavy concrete berths, high-speed ship-to-shore cranes, and automated intermodal rail sidings.',
    challenge: 'Marine soft clay seabed requiring deep piled foundations to support 100-ton crane loads.',
    solution: 'Drove heavy steel tubular piles deep into solid sand strata using high-energy hydraulic impact hammers.'
  },
  {
    id: 188,
    title: 'New Mangalore Port Capacity Expansion',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1200&q=80',
    location: 'Mangalore, Karnataka, India',
    client: 'New Mangalore Port Authority',
    specs: 'Deepwater Berth & Mechanized Cargo Handling',
    date: '2021–2025',
    summary: 'Modernizing deepwater berths and automating container handling on the southwestern coast.',
    details: 'Berth deepening, automated conveyor corridors for bulk materials, container yards, and smart gate systems.',
    challenge: 'Maintaining daily commercial vessel berthing while constructing new quay extensions.',
    solution: 'Executed marine piling using floating jack-up platforms positioned clear of navigation channels.'
  },
  {
    id: 189,
    title: 'Dighi Port Development',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?auto=format&fit=crop&w=1200&q=80',
    location: 'Raigad, Maharashtra, India',
    client: 'Adani Ports & SEZ',
    specs: 'Multi-Cargo Port & Rail Link Infrastructure',
    date: '2022–2026',
    summary: 'Transforming Dighi into an alternate gateway to Mumbai with modern multi-purpose cargo berths.',
    details: 'Berth construction, dredging, direct rail and highway hinterland links, and large storage tank farms.',
    challenge: 'Deepening rocky approach channels through hard volcanic basalt underwater strata.',
    solution: 'Utilized heavy cutter-suction dredgers with precision underwater rock-ripping teeth.'
  },
  {
    id: 190,
    title: 'Kaleshwaram Lift Irrigation Project',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1756714282408-b37e798103b7?auto=format&fit=crop&w=1200&q=80',
    location: 'Telangana, India',
    client: 'Irrigation & CAD Department, Telangana',
    specs: 'World\'s Largest Multi-Stage Lift Irrigation System',
    date: '2016–2024',
    summary: 'A multi-stage lift irrigation system lifting water from the Godavari River across hundreds of kilometers.',
    details: 'Massive underground pump houses, 139 MW high-capacity pump turbines, surge pools, and gravity delivery canals.',
    challenge: 'Excavating huge cavernous underground pump houses deep below the water table.',
    solution: 'Employed controlled drill-and-blast methods with continuous shotcreting and post-tensioned cable anchors.'
  },
  {
    id: 191,
    title: 'Polavaram Irrigation Project',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1779637013246-e80a57e8d7b4?auto=format&fit=crop&w=1200&q=80',
    location: 'Godavari River, Andhra Pradesh, India',
    client: 'Polavaram Project Authority',
    specs: 'National Irrigation Dam & Hydroelectric Station',
    date: '2014–2026',
    summary: 'Major multipurpose dam project storing water from the Godavari River to irrigate millions of acres.',
    details: 'Earth-cum-rockfill dam, 48 massive spillway radial gates, 960 MW hydroelectric powerhouse, and right/left main canals.',
    challenge: 'Building a 1.5-km continuous plastic concrete diaphragm cutoff wall through deep river sand beds.',
    solution: 'Deployed heavy trench cutters and hydraulic grabs to cast the world\'s deepest plastic concrete diaphragm wall.'
  },
  {
    id: 192,
    title: 'Ken–Betwa River Linking Project',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1773907076519-1750268a79e8?auto=format&fit=crop&w=1200&q=80',
    location: 'Madhya Pradesh & Uttar Pradesh, India',
    client: 'National Water Development Agency',
    specs: 'First Inter-State River Interlinking Project',
    date: '2022–2030',
    summary: 'National flagship project transferring surplus water from the Ken River to the drought-prone Betwa basin.',
    details: 'Daudhan Dam, 221-km link canal, 2-km water tunnel, two powerhouses, and extensive feeder channels.',
    challenge: 'Constructing water tunnels through rugged plateau rock while preserving surrounding tiger reserve ecosystems.',
    solution: 'Utilized hard-rock Tunnel Boring Machines (TBMs) to bore deep beneath surface forest zones.'
  },
  {
    id: 193,
    title: 'Renukaji Dam Project',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    location: 'Sirmaur, Himachal Pradesh, India',
    client: 'HPPCL',
    specs: '148m High Rockfill Dam & Water Reservoir',
    date: '2022–2029',
    summary: 'Strategic water storage dam on the Giri River designed to secure municipal drinking water supply for Delhi NCR.',
    details: 'Rockfill dam embankment, spillway structures, 40 MW hydroelectric power plant, and intake tunnels.',
    challenge: 'Deep riverbed excavation in steep Himalayan mountain gorge geology subject to flash floods.',
    solution: 'Constructed twin diversion tunnels and heavy upstream coffer dams to divert river discharge around the site.'
  },
  {
    id: 194,
    title: 'Dibang Multipurpose Hydroelectric Project',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1756714282408-b37e798103b7?auto=format&fit=crop&w=1200&q=80',
    location: 'Lower Dibang Valley, Arunachal Pradesh, India',
    client: 'NHPC Limited',
    specs: '2,880 MW, 278m Tall Concrete Gravity Dam',
    date: '2023–2032',
    summary: 'India\'s largest hydroelectric project featuring the highest concrete gravity dam in the nation.',
    details: 'Roller-compacted concrete (RCC) dam, underground powerhouse holding 12x240 MW turbines, and flood moderation reservoirs.',
    challenge: 'Placing massive volumes of roller-compacted concrete in extreme seismic Zone V mountain conditions.',
    solution: 'Utilized continuous aerial cableways and conveyor belt placement networks with automated thermal sensors.'
  },
  {
    id: 195,
    title: 'Subansiri Lower Hydroelectric Project',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1773907076519-1750268a79e8?auto=format&fit=crop&w=1200&q=80',
    location: 'Arunachal Pradesh / Assam, India',
    client: 'NHPC Limited',
    specs: '2,000 MW Run-of-the-River Hydro Project',
    date: '2005–2025',
    summary: 'Mega hydroelectric power plant featuring a 116-meter concrete gravity dam on the Subansiri River.',
    details: 'Underground powerhouse, 8 surge tunnels, high-pressure penstocks, and tailrace channels delivering clean green energy.',
    challenge: 'Soft sandstone geology and heavy monsoon landslides threatening powerhouse caverns.',
    solution: 'Reinforced powerhouse cavern walls with heavy multi-strand prestressed rock anchors and steel mesh shotcrete.'
  },
  {
    id: 196,
    title: 'Teesta-III Hydroelectric Project',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1762086897132-06c07fe78ae1?auto=format&fit=crop&w=1200&q=80',
    location: 'Chungthang, Sikkim, India',
    client: 'Teesta Urja Limited',
    specs: '1,200 MW Hydroelectric Dam Facility',
    date: '2008–2024',
    summary: 'High-head hydroelectric power project utilizing water from the glacial Teesta River.',
    details: 'Concrete-faced rockfill dam (CFRD), 13.8-km headrace tunnel, underground powerhouse, and 400kV transmission switchyards.',
    challenge: 'High hydraulic water head (800m) generating immense hydrostatic pressure inside penstock tunnels.',
    solution: 'Lined high-pressure penstocks with high-strength quenched and tempered steel liners.'
  },
  {
    id: 197,
    title: 'Khavda Renewable Energy Park',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    location: 'Rann of Kutch, Gujarat, India',
    client: 'Adani Green Energy & NTPC',
    specs: '30 GW Hybrid Solar & Wind Mega Park',
    date: '2022–2028',
    summary: 'The world\'s largest renewable energy installation spanning 726 sq. km, generating 30 GW of wind and solar power.',
    details: 'Millions of solar PV modules, thousands of high-capacity wind turbines, battery energy storage hubs, and 765kV transmission lines.',
    challenge: 'Harsh salt desert terrain, extreme summer heat, and saline groundwater eroding foundations.',
    solution: 'Used specialized anti-corrosive sulphate-resistant concrete and robotic waterless solar panel cleaning systems.'
  },
  {
    id: 198,
    title: 'Ramagundam Floating Solar Power Project',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80',
    location: 'Ramagundam, Peddapalli, Telangana, India',
    client: 'NTPC Limited',
    specs: '100 MW Largest Floating Solar Plant',
    date: '2020–2024',
    summary: 'India\'s premier commercial floating solar photovoltaic installation spread across a thermal plant reservoir.',
    details: 'High-density polyethylene (HDPE) floaters, automated water anchors, specialized moisture-resistant inverters, and switchyards.',
    challenge: 'Anchoring thousands of floating solar arrays against fluctuating reservoir water levels and wind currents.',
    solution: 'Designed specialized deadweight concrete bottom anchors and elastic mooring cords to absorb wave motion.'
  },
  {
    id: 199,
    title: 'Changi Airport Terminal 5',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1744659960424-76551077fe5a?auto=format&fit=crop&w=1200&q=80',
    location: 'Changi, Singapore',
    client: 'Changi Airport Group',
    specs: '50 Million Passenger Annual Capacity Mega Terminal',
    date: '2024–2030',
    summary: 'A mega-airport expansion designed for sustainability, automated baggage handling, and autonomous transit.',
    details: 'Three-runway connectivity, subterranean automated baggage networks, solar roof arrays, and contactless biometric boarding.',
    challenge: 'Massive ground stabilization on reclaimed coastal marine clay soil beds.',
    solution: 'Implemented deep soil mixing, prefabricated vertical drains (PVD), and real-time settlement telemetry.'
  },
  {
    id: 200,
    title: 'Grand Paris Express',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1762417421978-d95cc60ad968?auto=format&fit=crop&w=1200&q=80',
    location: 'Île-de-France, Paris, France',
    client: 'Société du Grand Paris',
    specs: '200 km Automated Metro, 68 New Stations',
    date: '2016–2030',
    summary: 'The largest urban infrastructure transport program in Europe, quadrupling the Paris subway network.',
    details: 'Four new fully automated metro lines (Lines 15, 16, 17, 18), subterranean cavern stations, and automated CBTC train controls.',
    challenge: 'Operating up to 20 tunnel boring machines simultaneously beneath dense historic Paris architecture.',
    solution: 'Deployed high-precision Slurry and EPB TBMs with satellite InSAR structural ground monitoring.'
  },
  {
    id: 201,
    title: 'HS2 High-Speed Railway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1729340034015-124dbbca8f4f?auto=format&fit=crop&w=1200&q=80',
    location: 'London to Birmingham, United Kingdom',
    client: 'High Speed Two (HS2) Ltd',
    specs: '225 km, 360 km/h High-Speed Rail Corridor',
    date: '2017–2030',
    summary: 'A new zero-carbon high-speed rail line connecting London with the West Midlands.',
    details: 'Colne Valley Viaduct, massive twin-bore Chiltern mountain tunnels, and signature stations like Curzon Street Birmingham.',
    challenge: 'Protecting chalk aquifer drinking water sources during long-distance tunnel boring operations.',
    solution: 'Used specialized variable-density TBMs with eco-friendly biodegradable drilling fluids.'
  },
  {
    id: 202,
    title: 'Crossrail Elizabeth Line',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1785859981438-1ff88f033905?auto=format&fit=crop&w=1200&q=80',
    location: 'London, United Kingdom',
    client: 'Transport for London (TfL)',
    specs: '118 km High-Capacity Passenger Railway',
    date: '2009–2024',
    summary: 'A transformative passenger railway linking Reading and Heathrow in the west to Shenfield and Abbey Wood in the east.',
    details: '42 km of new bored tunnels under central London, 10 cavernous sub-surface stations, and cutting-edge digital signaling.',
    challenge: 'Boring tunnels within millimeters of existing century-old London Underground tube tunnels and sewer mains.',
    solution: 'Utilized laser-guided compensation grouting ahead of TBMs to counteract ground subsidence in real time.'
  },
  {
    id: 203,
    title: 'Stuttgart 21 Railway Station',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1644230928140-8e480a67dea8?auto=format&fit=crop&w=1200&q=80',
    location: 'Stuttgart, Baden-Württemberg, Germany',
    client: 'Deutsche Bahn',
    specs: 'Underground Through-Station & Rail Hub',
    date: '2010–2025',
    summary: 'Total transformation of Stuttgart\'s terminal rail station into a high-capacity subterranean through-station.',
    details: 'Iconic chalice-shaped concrete support pillars, underground track platforms, and 60 km of connecting regional tunnels.',
    challenge: 'Casting 28 unique double-curved chalice columns with self-compacting architectural concrete without defects.',
    solution: 'Engineered specialized custom 3D CNC wooden formwork molds and continuous digital pour monitoring.'
  },
  {
    id: 204,
    title: 'Fehmarnbelt Fixed Link',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1774287528257-d7864569a72f?auto=format&fit=crop&w=1200&q=80',
    location: 'Rødbyhavn, Denmark to Puttgarden, Germany',
    client: 'Femern A/S',
    specs: '18 km World\'s Longest Immersed Tunnel',
    date: '2020–2029',
    summary: 'The world\'s longest immersed tunnel combining a 4-lane motorway and a two-track electrified railway under the Baltic Sea.',
    details: 'Prefabricated hollow concrete tunnel elements weighing 73,000 tons each, cast in a factory and floated out to be immersed on the seabed.',
    challenge: 'Precision sinking and millimeter-accurate coupling of massive concrete tunnel blocks in deep ocean currents.',
    solution: 'Deployed satellite GPS-guided immersion pontoon catamarans and automated hydraulic rubber gasket seals.'
  },
  {
    id: 205,
    title: 'Brenner Base Tunnel',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1660739418941-b0a2f22d03b9?auto=format&fit=crop&w=1200&q=80',
    location: 'Innsbruck, Austria to Franzensfeste, Italy',
    client: 'BBT SE',
    specs: '64 km Base Tunnel (World\'s Longest Underground Rail Link)',
    date: '2015–2032',
    summary: 'Low-gradient railway tunnel beneath the eastern Alps removing heavy freight trucks from Alpine highways.',
    details: 'Twin single-track tubes, exploratory pilot tunnel, underground emergency rescue stops, and drainage shafts.',
    challenge: 'Boring through the geologically treacherous Periadriatic fault seam under 1,800 meters of rock overburden.',
    solution: 'Operated shielded hard-rock TBMs with advance probe drilling and yielding steel ring supports.'
  },
  {
    id: 206,
    title: 'Gotthard Base Tunnel',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1697166979685-b8f9b26731d4?auto=format&fit=crop&w=1200&q=80',
    location: 'Erstfeld to Bodio, Switzerland',
    client: 'AlpTransit Gotthard AG',
    specs: '57.1 km Deepest & Longest Operational Rail Tunnel',
    date: '1999–2024',
    summary: 'Engineering marvel cutting through the Swiss Alps with zero surface gradients, linking northern and southern Europe.',
    details: 'Twin single-track tunnels, multifunctional emergency stations at Sedrun and Faido, and sophisticated high-temperature ventilation.',
    challenge: 'Encountering rock temperatures exceeding 45°C (113°F) and squeezing rock formations deep under Alpine massifs.',
    solution: 'Installed large-scale refrigeration water systems and flexible deformable steel arch support rings.'
  },
  {
    id: 207,
    title: 'Metro Tunnel Melbourne',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1778050147537-bc1001c3f825?auto=format&fit=crop&w=1200&q=80',
    location: 'Melbourne, Victoria, Australia',
    client: 'Rail Projects Victoria',
    specs: '9 km Twin Rail Tunnels & 5 Underground Stations',
    date: '2017–2025',
    summary: 'Major public transit expansion adding high-capacity twin rail tunnels and modern stations beneath Melbourne CBD.',
    details: 'Deep mined cavern stations at Town Hall and State Library, platform screen doors, and high-frequency digital signaling.',
    challenge: 'Excavating massive underground station caverns directly underneath historic city streets without street-level closures.',
    solution: 'Constructed acoustic construction acoustic sheds over access shafts and mined caverns via specialized roadheaders.'
  },
  {
    id: 208,
    title: 'North East Link',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1755585635727-336c600e19ad?auto=format&fit=crop&w=1200&q=80',
    location: 'Melbourne, Victoria, Australia',
    client: 'Major Transport Infrastructure Authority',
    specs: '6.5 km Twin 3-Lane Road Tunnels',
    date: '2021–2028',
    summary: 'The largest road project in Victoria\'s history, closing the missing link between the M80 Ring Road and Eastern Freeway.',
    details: 'Twin 3-lane tunnels, green pedestrian bridges, wetland retention basins, and modern ventilation stations.',
    challenge: 'Protecting the sensitive Yarra River floodplain and surrounding residential suburbs during deep excavation.',
    solution: 'Deployed massive 15.6-meter diameter EPB TBMs to bore deep beneath the river valley.'
  },
  {
    id: 209,
    title: 'Sydney Metro West',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1780342700450-0b2a06888a05?auto=format&fit=crop&w=1200&q=80',
    location: 'Greater Parramatta to Sydney CBD, Australia',
    client: 'Sydney Metro',
    specs: '24 km Underground Metro Line',
    date: '2020–2030',
    summary: 'A new standalone underground railway doubling rail capacity between Greater Parramatta and the Sydney CBD.',
    details: 'Fully driverless trains, nine underground stations, tunnel crossing under Sydney Harbour, and rapid 20-minute travel times.',
    challenge: 'Tunneling through varied Hawkesbury sandstone and sub-aquatic harbor sediments.',
    solution: 'Deployed mixed-shield TBMs equipped with heavy rock disc cutters and hyperbaric intervention locks.'
  },
  {
    id: 210,
    title: 'Snowy 2.0 Hydroelectric Project',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1773907076519-1750268a79e8?auto=format&fit=crop&w=1200&q=80',
    location: 'Snowy Mountains, New South Wales, Australia',
    client: 'Snowy Hydro Limited',
    specs: '2,200 MW Pumped-Hydro Storage Expansion',
    date: '2019–2028',
    summary: 'Massive expansion of the iconic Snowy Mountains Scheme providing grid-scale renewable energy storage.',
    details: 'Deep underground powerhouse cavern, 27 km of water transfer tunnels linking Tantangara and Talbingo reservoirs.',
    challenge: 'Tunneling through saturated fault zones causing ground subsidence around the specialized TBM "Florence".',
    solution: 'Executed high-pressure chemical ground grouting from the surface and restructured the TBM cutterhead configuration.'
  },
  {
    id: 211,
    title: 'WestConnex Motorway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1791519951759-7630bbfe0f53?auto=format&fit=crop&w=1200&q=80',
    location: 'Sydney, New South Wales, Australia',
    client: 'Transport for NSW / Transurban',
    specs: '33 km Underground Motorway Network',
    date: '2015–2024',
    summary: 'Australia\'s largest road project linking Sydney\'s west and south-west with the city, airport, and Port Botany.',
    details: 'Multi-lane underground road tunnels (M4, M8, Rozelle Interchange), computerized ventilation, and smart lane monitoring.',
    challenge: 'Engineering the world\'s most complex underground highway junction at the Rozelle Interchange with zero surface footprint.',
    solution: 'Used over 50 roadheaders simultaneously working 24/7 guided by 3D CAD underground positioning systems.'
  },
  {
    id: 212,
    title: 'Jakarta–Bandung High-Speed Railway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1769708185905-b40a43adfac3?auto=format&fit=crop&w=1200&q=80',
    location: 'Jakarta to Bandung, West Java, Indonesia',
    client: 'PT Kereta Cepat Indonesia China (KCIC)',
    specs: '142.3 km, 350 km/h Bullet Train Corridor',
    date: '2016–2024',
    summary: 'Southeast Asia\'s first operational high-speed bullet train line ("Whoosh"), cutting travel time from 3 hours to 45 minutes.',
    details: 'Elevated concrete viaducts, 13 mountain tunnels, 4 modern station hubs, and advanced electric traction networks.',
    challenge: 'Complex volcanic clay soils subject to sudden liquefaction during high-intensity earthquakes.',
    solution: 'Utilized deep tubular steel piles and continuous seismic dampers on all elevated bridge pier structures.'
  },
  {
    id: 213,
    title: 'Nusantara New Capital City',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1556983852-43bf21186b2a?auto=format&fit=crop&w=1200&q=80',
    location: 'East Kalimantan, Borneo, Indonesia',
    client: 'Nusantara Capital City Authority (IKN)',
    specs: '256,000 Hectares Greenfield Forest Smart City',
    date: '2022–2045',
    summary: 'Indonesia\'s ambitious greenfield national capital designed as a 100% net-zero smart forest city.',
    details: 'Presidential palace complex, ministerial high-rises, multi-utility underground tunnels, and renewable solar grids.',
    challenge: 'Rapid heavy construction within dense tropical rainforest with sensitive peatland soils and high rainfall.',
    solution: 'Implemented zero-deforestation buffers, permeable bio-swale roadways, and modular precast building components.'
  },
  {
    id: 214,
    title: 'East Coast Rail Link',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1770839012299-fb0130e5ec67?auto=format&fit=crop&w=1200&q=80',
    location: 'Kota Bharu to Port Klang, Malaysia',
    client: 'Malaysia Rail Link (MRL)',
    specs: '665 km Standard-Gauge Railway Corridor',
    date: '2017–2027',
    summary: 'Major railway connecting Malaysia\'s rural East Coast states with industrial ports on the West Coast.',
    details: 'Features the 16.3-km Genting Twin Tunnel, elevated viaducts, and 20 passenger and freight stations.',
    challenge: 'Boring through the rugged Titiwangsa mountain range through hard granite and quartz dykes.',
    solution: 'Deployed dual gripper open-type TBMs paired with advanced geological drill-probing systems.'
  },
  {
    id: 215,
    title: 'Johor Bahru–Singapore RTS Link',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1639185987770-c95e1d295190?auto=format&fit=crop&w=1200&q=80',
    location: 'Johor Bahru, Malaysia to Woodlands, Singapore',
    client: 'RTS Operations / LTA & MRT Corp',
    specs: '4 km Cross-Border Light Rail Transit',
    date: '2020–2026',
    summary: 'High-capacity international rapid transit rail link crossing the Straits of Johor to de-congest the Causeway.',
    details: 'Elevated marine viaduct across the straits, co-located customs, immigration, and quarantine (CIQ) facilities, carrying 10,000 commuters per hour.',
    challenge: 'Executing heavy marine pier foundation pours across a busy international maritime boundary.',
    solution: 'Fabricated precast pier segments in dedicated yards and lowered them from overhead crane barges.'
  },
  {
    id: 216,
    title: 'North–South Commuter Railway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1768818373266-4b5cbe951512?auto=format&fit=crop&w=1200&q=80',
    location: 'Clark to Calamba, Luzon, Philippines',
    client: 'DOTr / PNR',
    specs: '147 km Semi-High-Speed Suburban Rail',
    date: '2019–2028',
    summary: 'Massive suburban rail network connecting Clark International Airport with metro Manila and Laguna.',
    details: 'Elevated viaducts, 35 accessible stations, airport express trains, and underground connection tunnels.',
    challenge: 'High typhoons, seasonal flooding, and high-intensity seismic fault activity along the alignment.',
    solution: 'Elevated the entire guideway above 100-year flood levels and installed base-isolation pier bearings.'
  },
  {
    id: 217,
    title: 'Dhaka Metro Rail Line 6',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1663604019006-794d63f21403?auto=format&fit=crop&w=1200&q=80',
    location: 'Uttara to Motijheel, Dhaka, Bangladesh',
    client: 'DMTCL',
    specs: '21.26 km Elevated Rapid Transit System',
    date: '2016–2024',
    summary: 'Bangladesh\'s first operational metro rail system transforming urban mobility across congested Dhaka.',
    details: 'Elevated concrete viaducts, 16 accessible station terminals, 1500V DC overhead catenary, and CBTC signaling.',
    challenge: 'Building heavy elevated piers in narrow streets packed with millions of daily pedestrians and unmapped utilities.',
    solution: 'Constructed prefabricated precast concrete segmental box girders erected during overnight road closures.'
  },
  {
    id: 218,
    title: 'Matarbari Deep Sea Port',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1763689157641-a31dbc48584f?auto=format&fit=crop&w=1200&q=80',
    location: 'Maheshkhali, Cox\'s Bazar, Bangladesh',
    client: 'Chittagong Port Authority (CPA)',
    specs: '18.5m Natural Depth Deepwater Port Terminal',
    date: '2020–2026',
    summary: 'Bangladesh\'s first deep sea port facility capable of berthing large post-panamax container vessels.',
    details: '14.3-km navigation channel, breakwaters, multi-purpose container berths, and dedicated road and rail links.',
    challenge: 'Heavy ocean siltation and severe tropical cyclones during foundation construction.',
    solution: 'Designed deep stone revetment breakwaters and dredged an engineered hydrodynamic approach channel.'
  },
  {
    id: 219,
    title: 'Chuo Shinkansen Maglev Railway',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1787735011846-83a178779cee?auto=format&fit=crop&w=1200&q=80',
    location: 'Tokyo to Nagoya, Japan',
    client: 'Central Japan Railway Company (JR Central)',
    specs: '286 km, 500 km/h Superconducting Maglev Line',
    date: '2014–2034',
    summary: 'The world\'s fastest commercial magnetic levitation bullet train running in deep mountain tunnels.',
    details: 'Superconducting magnets, linear motor guideways, 86% subterranean routing, and underground terminals.',
    challenge: 'Boring deep through the Japanese Southern Alps under 1,400 meters of fractured rock overburden.',
    solution: 'Engineered specialized high-durability TBMs and implemented continuous groundwater pressure bypass valves.'
  },
  {
    id: 220,
    title: 'Linear Chuo Shinkansen Shinagawa Station',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1752735266753-c05d156c16a8?auto=format&fit=crop&w=1200&q=80',
    location: 'Shinagawa, Tokyo, Japan',
    client: 'JR Central',
    specs: 'Underground Mega Terminal, 40m Deep',
    date: '2016–2029',
    summary: 'A 40-meter deep subterranean maglev train terminal built directly beneath active commuter railway tracks.',
    details: 'Four subterranean passenger platforms, massive slurry walls, and direct high-speed escalator connections.',
    challenge: 'Excavating 40 meters underground beneath active Shinkansen and Yamanote rail lines without causing millimeter track settlement.',
    solution: 'Underpinned existing railway tracks with massive steel beams supported by hydraulic computer-controlled jacks.'
  },
  {
    id: 221,
    title: 'Osaka Integrated Resort Development',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    location: 'Yumeshima Island, Osaka, Japan',
    client: 'MGM Resorts Japan / ORIX',
    specs: 'Integrated Resort, Casino, Convention & Hotel',
    date: '2023–2030',
    summary: 'Japan\'s first legalized integrated resort development located on the artificial island of Yumeshima.',
    details: 'Luxury hotels with 2,500 rooms, international convention centers, entertainment arenas, and high-end retail malls.',
    challenge: 'Preventing soil liquefaction on reclaimed coastal land during potential Nankai Trough earthquake events.',
    solution: 'Executed deep dynamic soil compaction and cement deep-mixing soil stabilization across the entire island.'
  },
  {
    id: 222,
    title: 'Takanawa Gateway City',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1791703111098-ff91f127768a?auto=format&fit=crop&w=1200&q=80',
    location: 'Minato, Tokyo, Japan',
    client: 'East Japan Railway Company (JR East)',
    specs: '850,000 sq. m. Mixed-Use Smart Precinct',
    date: '2020–2025',
    summary: 'A futuristic urban redevelopment precinct built on former railway railyards in central Tokyo.',
    details: 'Four high-rise commercial and residential towers, district cooling facilities, autonomous delivery robots, and pedestrian skydecks.',
    challenge: 'Seamless integration of super-tall towers adjacent to active passenger railway tracks.',
    solution: 'Used off-site modular steel frame pre-assembly and deployed autonomous construction transport robots.'
  },
  {
    id: 223,
    title: 'Pinglu Canal Project',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1758656664371-a1bb02c3165a?auto=format&fit=crop&w=1200&q=80',
    location: 'Guangxi Zhuang Region, China',
    client: 'Guangxi Transport Department',
    specs: '134.2 km Heavy Navigational Canal',
    date: '2022–2026',
    summary: 'A historic transport canal opening a direct maritime shipping outlet from inland China to the Gulf of Tonkin.',
    details: 'Accommodates 5,000-ton ships, massive multi-tier water locks, riverbed widening, and water saving chambers.',
    challenge: 'Excavating over 300 million cubic meters of earth and rock without polluting coastal river ecosystems.',
    solution: 'Employed specialized eco-friendly suction dredgers and utilized excavated soil for agricultural land terracing.'
  },
  {
    id: 224,
    title: 'Xiong\'an New Area Development',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1788248009241-018884116e61?auto=format&fit=crop&w=1200&q=80',
    location: 'Hebei Province, China',
    client: 'Xiong\'an Administrative Commission',
    specs: 'National Smart Mega-City of the Future',
    date: '2017–2035',
    summary: 'A planned national metropolis designed to relieve Beijing of non-capital administrative functions.',
    details: 'Underground utility corridors, smart sensor-driven highways, green building envelopes, and Baiyangdian wetland restorations.',
    challenge: 'Building a complete city with zero overhead cables or visible street utility lines.',
    solution: 'Constructed multi-tiered subterranean utility tunnels accommodating water, power, communications, and automated logistics.'
  },
  {
    id: 225,
    title: 'South–North Water Transfer Project (Central Route Expansion)',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1754831949184-079ad9cd39c3?auto=format&fit=crop&w=1200&q=80',
    location: 'Danjiangkou to Beijing / Tianjin, China',
    client: 'China South-to-North Water Diversion Corp',
    specs: '1,432 km Cross-Country Water Aqueduct',
    date: '2003–2024',
    summary: 'The world\'s largest water transfer megaproject, delivering trillions of gallons of water from southern rivers to northern cities.',
    details: 'Elevated concrete aqueducts, inverted river siphons under the Yellow River, and automated water-quality monitoring stations.',
    challenge: 'Boring twin tunnel siphons under the massive scouring mud and silt of the mighty Yellow River.',
    solution: 'Utilized specialized Slurry TBMs to tunnel 70 meters below the riverbed.'
  },
  {
    id: 226,
    title: 'Shanghai Pudong International Airport Expansion',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1757206637658-d40fdb386cd5?auto=format&fit=crop&w=1200&q=80',
    location: 'Pudong, Shanghai, China',
    client: 'Shanghai Airport Authority',
    specs: 'Terminal 3 & Satellite Concourse Expansion',
    date: '2021–2026',
    summary: 'Expansion of Pudong airport to handle over 130 million annual passengers.',
    details: 'Terminal 3 building, automated people mover networks, integrated maglev and rail hubs, and smart luggage robotics.',
    challenge: 'Deep excavation in saturated coastal clay soils directly adjacent to active runways.',
    solution: 'Engineered thick reinforced concrete diaphragm walls and continuous dewatering recharge wells.'
  },
  {
    id: 227,
    title: 'Hong Kong International Airport Three-Runway System',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1724129957767-2cf6b6795da0?auto=format&fit=crop&w=1200&q=80',
    location: 'Chek Lap Kok, Hong Kong',
    client: 'Airport Authority Hong Kong',
    specs: '650 Hectares Reclaimed Third Runway & Terminal',
    date: '2016–2024',
    summary: 'Massive airport expansion adding a 3.8-km third runway and terminal facilities on reclaimed ocean land.',
    details: 'Non-dredge land reclamation, 3,800m runway, automated baggage systems, and high-speed APM tunnels.',
    challenge: 'Reclaiming 650 hectares of land over soft marine mud without polluting marine dolphin habitats.',
    solution: 'Used Deep Cement Mixing (DCM) technology to solidify the seabed without dredging marine mud into the sea.'
  },
  {
    id: 228,
    title: 'Marina Bay Sands Expansion',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1508564786746-3574eeae6bf3?auto=format&fit=crop&w=1200&q=80',
    location: 'Marina Bay, Singapore',
    client: 'Las Vegas Sands Corp',
    specs: 'Fourth Luxury Hotel Tower & 15,000-Seat Arena',
    date: '2023–2029',
    summary: 'Expansion of Singapore\'s iconic landmark adding a standalone luxury hotel tower, sky roof, and live arena.',
    details: 'Luxury suites, rooftop infinity pool, multi-level convention exhibition halls, and premium culinary venues.',
    challenge: 'Erecting high-rise hotel foundations in deep marine clay right next to operational MRT tunnels.',
    solution: 'Installed large-diameter circular diaphragm walls and drilled deep cast-in-place bored foundation piles.'
  },
  {
    id: 229,
    title: 'Tuas Mega Port Development',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1783090530624-4c1de5ba587c?auto=format&fit=crop&w=1200&q=80',
    location: 'Tuas, Singapore',
    client: 'Maritime and Port Authority of Singapore (MPA)',
    specs: '65 Million TEU Automated Mega Port',
    date: '2015–2040',
    summary: 'The world\'s largest fully automated container terminal consolidated into a single location.',
    details: 'Deepwater berths, automated guided vehicles (AGVs), automated rail mounted gantry cranes, and drone inspection networks.',
    challenge: 'Fabricating and sinking hundreds of massive 10-story high concrete caissons into the seabed.',
    solution: 'Constructed giant 28-meter tall concrete caissons on a floating dock and positioned them using GPS alignment.'
  },
  {
    id: 230,
    title: 'King Salman International Airport',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1783164504153-3384dfce1a3d?auto=format&fit=crop&w=1200&q=80',
    location: 'Riyadh, Saudi Arabia',
    client: 'Public Investment Fund (PIF)',
    specs: '57 sq. km, 6 Parallel Runways, 120M Passengers',
    date: '2023–2030',
    summary: 'One of the world\'s largest airports designed as an aerotropolis spanning 57 square kilometers.',
    details: 'Six parallel runways, high-capacity passenger terminals, logistics zones, and 100% renewable energy operations.',
    challenge: 'Massive earthworks and grading in rocky desert terrain with severe dust storm exposure.',
    solution: 'Deployed fleet of autonomous GPS-guided heavy scrapers and implemented soil-binding stabilization agents.'
  },
  {
    id: 231,
    title: 'King Abdullah Financial District',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1599340749490-96dcbfb19447?auto=format&fit=crop&w=1200&q=80',
    location: 'Riyadh, Saudi Arabia',
    client: 'PIF / KAFD Development Management',
    specs: '1.6M sq. m. High-Rise Financial District',
    date: '2007–2024',
    summary: 'The premier financial hub of the Middle East featuring dozens of sustainable architectural towers.',
    details: 'Iconic crystal-shaped skyscrapers, elevated climate-controlled skywalks, central monorail loop, and district cooling.',
    challenge: 'Minimizing intense solar radiation in a desert climate on glass-clad skyscraper facades.',
    solution: 'Designed geometric Islamic-patterned perforated solar shading panels and smart heat-reflective glazing.'
  },
  {
    id: 232,
    title: 'Diriyah Gate Development',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1784637729389-f24e1d2a8b22?auto=format&fit=crop&w=1200&q=80',
    location: 'Diriyah, Riyadh, Saudi Arabia',
    client: 'Diriyah Gate Development Authority (DGDA)',
    specs: '14 sq. km Cultural & Tourism Landmark',
    date: '2020–2030',
    summary: 'Heritage megaproject restoring the historic birthplace of Saudi Arabia using traditional Najdi adobe architecture.',
    details: 'Museums, hotels, pedestrian plazas, and luxury residences built with millions of handmade traditional mud bricks.',
    challenge: 'Preserving traditional Najdi clay masonry aesthetics while meeting 21st-century seismic and structural building codes.',
    solution: 'Developed polymer-stabilized earth blocks reinforced with hidden high-strength internal composite frames.'
  },
  {
    id: 233,
    title: 'Jeddah Central Development',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
    location: 'Jeddah, Saudi Arabia',
    client: 'Jeddah Central Development Co (PIF)',
    specs: '5.7M sq. m. Waterfront Destination',
    date: '2022–2030',
    summary: 'Transformative Red Sea waterfront megaproject featuring four iconic landmarks including an Opera House and Oceanarium.',
    details: 'Museums, sports stadium, marina berths, public beach promenades, and luxury residential districts.',
    challenge: 'High water tables and coastal saline soils requiring massive dewatering for subterranean parking structures.',
    solution: 'Formed continuous perimeter slurry cutoff walls and deployed automated multi-well dewatering networks.'
  },
  {
    id: 234,
    title: 'Al-Faw Grand Port',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1724320341829-2942507e3104?auto=format&fit=crop&w=1200&q=80',
    location: 'Basra, Iraq',
    client: 'General Company for Ports of Iraq',
    specs: 'One of the Largest Ports in the Middle East',
    date: '2020–2028',
    summary: 'Strategic mega-port project located on the Persian Gulf connecting Iraq directly to European trade corridors.',
    details: 'World\'s longest breakwater (14.5 km), container berths, sub-sea immersed road tunnels under the Khor Al-Zubair, and railway links.',
    challenge: 'Extremely soft, saturated clay seabed prone to structural subsidence under heavy berth loading.',
    solution: 'Executed massive stone column stone vibro-replacement and pre-stressed concrete pile installations.'
  },
  {
    id: 235,
    title: 'Grand Ethiopian Renaissance Dam',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1763190521320-7076023a5318?auto=format&fit=crop&w=1200&q=80',
    location: 'Benishangul-Gumuz, Ethiopia',
    client: 'Ethiopian Electric Power (EEP)',
    specs: '5,150 MW Hydro Dam (Largest in Africa)',
    date: '2011–2024',
    summary: 'The largest hydroelectric power plant in Africa built on the Blue Nile River to power the Horn of Africa.',
    details: 'Main roller-compacted concrete (RCC) gravity dam (145m high), curved concrete saddle dam, spillways, and twin powerhouses.',
    challenge: 'Placing over 10 million cubic meters of roller-compacted concrete in remote, extreme-heat conditions.',
    solution: 'Built dedicated on-site aggregate cooling systems and operated continuous high-capacity conveyor delivery systems.'
  },
  {
    id: 236,
    title: 'Lobito Atlantic Railway Modernisation',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1768779533631-40721f91ae56?auto=format&fit=crop&w=1200&q=80',
    location: 'Lobito Port to Luau, Angola to DR Congo',
    client: 'Lobito Atlantic Railway Consortium',
    specs: '1,300 km Trans-African Strategic Freight Corridor',
    date: '2023–2028',
    summary: 'Modernization of the historic Benguela railway to transport copper and cobalt from Central Africa to Atlantic shipping lanes.',
    details: 'Track re-railing, ballast tamping, concrete sleeper replacement, digital signaling, and port container yard upgrades.',
    challenge: 'Upgrading active single-track railway corridors across remote tropical bush terrain.',
    solution: 'Employed mechanized track maintenance trains and localized mobile camp logistics.'
  },
  {
    id: 237,
    title: 'High-Speed Electric Rail Network',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1726552959813-c43492d2487e?auto=format&fit=crop&w=1200&q=80',
    location: 'Ain Sokhna to Marsa Matrouh, Egypt',
    client: 'NAT / Siemens Mobility',
    specs: '2,000 km Electric High-Speed & Freight Network',
    date: '2021–2027',
    summary: 'A complete nationwide high-speed electric railway dubbed the "Suez Canal on Rails".',
    details: '250 km/h passenger bullet trains, freight transport lines, desert overpasses, and high-voltage catenary electrification.',
    challenge: 'Desert sand drift covering tracks and extreme daytime thermal expansion on steel rails.',
    solution: 'Constructed aerodynamic sand-diversion embankments and continuously continuously welded prestressed rails.'
  },
  {
    id: 238,
    title: 'Neom Oxagon Industrial Development',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    location: 'Red Sea Coast, Tabuk, Saudi Arabia',
    client: 'NEOM Company',
    specs: 'Floating Clean Industrial Mega-City',
    date: '2022–2030',
    summary: 'A futuristic octagonal clean industrial city and automated port protruding into the Red Sea.',
    details: 'Automated container port, green hydrogen production hubs, modular factories, and floating urban communities.',
    challenge: 'Fabricating massive buoyant marine foundation platforms that resist offshore Red Sea wave actions.',
    solution: 'Engineered modular high-durability marine concrete pontoons anchored via high-tension mooring tendons.'
  },
  {
    id: 239,
    title: 'Lusail City Development',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1792930568968-93840b84840a?auto=format&fit=crop&w=1200&q=80',
    location: 'Lusail, Qatar',
    client: 'Qatari Diar',
    specs: '38 sq. km Greenfield Coastal Smart City',
    date: '2010–2024',
    summary: 'A planned futuristic sustainable city featuring the Lusail Iconic Stadium, marinas, and residential islands.',
    details: 'Underground pneumatic waste collection, district cooling networks, light rail transit, and Lusail Plaza high-rise towers.',
    challenge: 'Eliminating vehicular delivery congestion on ground-level commercial pedestrian districts.',
    solution: 'Constructed an multi-level underground tunnel roadway network servicing all commercial building basements.'
  },
  {
    id: 240,
    title: 'Hamad International Airport Expansion',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1787059526580-b8e654ba2d44?auto=format&fit=crop&w=1200&q=80',
    location: 'Doha, Qatar',
    client: 'Qatar Airways / MATAR',
    specs: 'Terminal Expansion with 10,000 sq. m. Indoor Garden',
    date: '2019–2024',
    summary: 'Major expansion adding "The Orchard", a massive indoor tropical garden and luxury shopping concourse.',
    details: 'Expansive column-free glass roof grid, high-capacity transfer gates, luxury lounges, and baggage automation.',
    challenge: 'Erecting high-span structural steel tree columns and glass roofs over active passenger gates.',
    solution: 'Utilized temporary hydraulic tower supports and executed heavy lifts during strict night windows.'
  },
  {
    id: 241,
    title: 'Kuwait International Airport Terminal 2',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1783164504153-3384dfce1a3d?auto=format&fit=crop&w=1200&q=80',
    location: 'Kuwait City, Kuwait',
    client: 'Ministry of Public Works, Kuwait',
    specs: '25 Million Passenger Capacity, LEED Gold',
    date: '2016–2025',
    summary: 'Trefoil-shaped iconic passenger terminal engineered to withstand extreme desert heat while targeting LEED Gold.',
    details: 'Three symmetrical terminal wings, massive concrete roof arches clad in photovoltaic panels, and cascading water features.',
    challenge: 'Supporting massive 1.2-km long continuous concrete roof spans in an area subject to 50°C (122°F) summer temperatures.',
    solution: 'Engineered precast composite concrete arches with expansion joints and built-in thermal relief bearings.'
  },
  {
    id: 242,
    title: 'Al Maktoum International Airport Expansion',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1786581803813-56e8f395fca1?auto=format&fit=crop&w=1200&q=80',
    location: 'Dubai South, UAE',
    client: 'Dubai Aviation Engineering Projects',
    specs: '260 Million Passenger Ultimate Capacity Mega Hub',
    date: '2024–2034',
    summary: 'The ultimate expansion of Dubai World Central to become the world\'s largest airport upon full completion.',
    details: 'Five parallel runways, 400 aircraft gates, multi-modal metro connections, and fully automated baggage handling.',
    challenge: 'Executing massive infrastructure excavation and runway asphalt paving across dozens of square kilometers.',
    solution: 'Deployed satellite-synchronized automated asphalt paving trains operating continuously under night lighting.'
  },
  {
    id: 243,
    title: 'Etihad Rail Network',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1786359994495-b1917a146c79?auto=format&fit=crop&w=1200&q=80',
    location: 'Nationwide UAE (Abu Dhabi, Dubai, Fujairah)',
    client: 'Etihad Rail',
    specs: '1,200 km National Freight & Passenger Rail Network',
    date: '2016–2024',
    summary: 'The national railway of the United Arab Emirates linking ports, industrial hubs, and population centers.',
    details: 'Heavy rail freight lines, high-speed passenger services, mountain tunnels through the Hajar mountains, and sea port links.',
    challenge: 'Boring tunnels through hard rock in the Hajar mountains and preventing desert sand infiltration across desert tracks.',
    solution: 'Designed sand mitigation berms, sleeper-embedded sensors, and blast-resistant tunnel portals.'
  },
  {
    id: 244,
    title: 'Dubai Creek Tower Development',
    category: 'Commercial & Mixed-Use',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    location: 'Dubai Creek Harbour, Dubai, UAE',
    client: 'Emaar Properties',
    specs: 'Super-Tall Monumental Observation Tower',
    date: '2018–2028',
    summary: 'An architectural tower anchoring Dubai Creek Harbour, inspired by the lily flower and minaret design.',
    details: 'Deep foundation barrette piles, cable-stayed high-tensile steel rigging cables, and panoramic glass observation pods.',
    challenge: 'Casting foundational caisson piles over 72 meters deep into fractured coastal bedrock.',
    solution: 'Executed continuous pours of high-strength self-consolidating concrete using specialized polymer drilling slurries.'
  },
  {
    id: 245,
    title: 'Port of Rotterdam Maasvlakte 2',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1755288208009-a0d7c666962b?auto=format&fit=crop&w=1200&q=80',
    location: 'Rotterdam, Netherlands',
    client: 'Port of Rotterdam Authority',
    specs: '2,000 Hectares Reclaimed Deepwater Seaport',
    date: '2008–2024',
    summary: 'Major expansion of Europe\'s largest seaport reclaimed entirely from the North Sea.',
    details: 'Deepwater berths handling 24,000 TEU container ships, sea dike breakwaters, automated electric cranes, and rail terminals.',
    challenge: 'Constructing outer sea defense walls capable of withstanding 1-in-10,000-year North Sea storm surges.',
    solution: 'Engineered a hard stone cobble seawall combined with a dynamic sand dune nourishment buffer.'
  },
  {
    id: 246,
    title: 'Port of Antwerp-Bruges Infrastructure Expansion',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1784914186774-4072378405c3?auto=format&fit=crop&w=1200&q=80',
    location: 'Antwerp / Zeebrugge, Belgium',
    client: 'Port of Antwerp-Bruges',
    specs: 'Extra Container Capacity & Kieldrecht Lock Hub',
    date: '2016–2025',
    summary: 'Infrastructure modernization of Europe\'s second largest port including the massive Kieldrecht maritime lock.',
    details: 'Deepwater container quays, automated logistics platforms, hydrogen import pipelines, and green energy bunkering.',
    challenge: 'Maintaining non-stop cargo barge traffic through tidal lock gates during quay construction.',
    solution: 'Used underwater sheet piling and deployed modular floating caisson blocks.'
  },
  {
    id: 247,
    title: 'Øresund Fixed Link',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1752767393352-f46ae28941e1?auto=format&fit=crop&w=1200&q=80',
    location: 'Copenhagen, Denmark to Malmö, Sweden',
    client: 'Øresundsbro Konsortiet',
    specs: '16 km Motorway & Railway Fixed Link',
    date: '1995–2024',
    summary: 'The iconic cable-stayed bridge, artificial island (Peberholm), and immersed tunnel connecting Denmark and Sweden.',
    details: 'Cable-stayed bridge with double-deck steel truss (upper road, lower rail), 4-km immersed tunnel, and artificial island transition.',
    challenge: 'Creating a seamless transition from an immersed undersea tunnel to a high-span bridge without disturbing air traffic from Copenhagen Airport.',
    solution: 'Constructed the artificial island of Peberholm using dredged limestone to facilitate the tunnel-to-bridge transition.'
  },
  {
    id: 248,
    title: 'Queensferry Crossing',
    category: 'Aviation & Infrastructure',
    image: 'https://images.unsplash.com/photo-1539756858825-cf986f30da4a?auto=format&fit=crop&w=1200&q=80',
    location: 'Firth of Forth, Scotland, United Kingdom',
    client: 'Transport Scotland',
    specs: '2.7 km Cable-Stayed Road Bridge',
    date: '2011–2024',
    summary: 'The longest three-tower cable-stayed bridge in the world spanning the Firth of Forth estuary.',
    details: 'Three 210-meter tall slender concrete towers, overlapping stay cables for maximum rigidity, and aerodynamic wind shielding.',
    challenge: 'High coastal wind speeds up to 100 mph causing bridge closures on neighboring crossings.',
    solution: 'Installed 3.5-meter high curved transparent wind deflection barriers that deflect 75% of gale-force winds.'
  },
  {
    id: 249,
    title: 'SDSU Snapdragon Stadium',
    category: 'Commercial & Mixed-Use',
    projectType: 'Multi-use stadium',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/sdsu-snapdragon-stadium',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-03/20220824_DIG_3896_MAS_jpg.jpg?itok=Ba97Aroe',
    location: 'San Diego, California',
    client: 'San Diego State University (SDSU)',
    specs: '35,000 Seats, LEED Gold Multi-Use Stadium',
    date: '2022',
    summary: 'A premier 35,000-seat multi-use stadium serving as the cornerstone of the SDSU Mission Valley campus expansion.',
    details: 'Clark teamed with Gensler in an integrated design-build partnership to deliver the 35,000-seat multi-use stadium. Serving SDSU Aztecs football, professional soccer, major concerts, and community events, the facility features 30,000 cubic yards of concrete, 3,000 tons of structural steel, concourse concessions, premium luxury suites, the Sycuan Piers viewing decks, and state-of-the-art broadcast infrastructure, achieved on a fast-track 17-month construction schedule.',
    challenge: 'Constructing within an active 100-year San Diego River floodplain requiring massive ground elevation before vertical work could start.',
    solution: 'Hauled 40,000 truckloads of soil (173,000 cubic yards) to elevate the site up to 35 feet, constructed a designated floodplain wildlife corridor, and managed round-the-clock concrete pours to meet the season opener deadline.'
  },
  {
    id: 250,
    title: 'Petco Park Gallagher Square',
    category: 'Commercial & Mixed-Use',
    projectType: 'Public park and outdoor event space',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/petco-park-gallagher-square',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2024-11/Petco%20Park%20Gallagher%20Square.jpg?itok=gWf5gpqq',
    location: 'San Diego, California',
    client: 'San Diego Padres',
    specs: '2.8-Acre Community Park & Event Amphitheater',
    date: '2024',
    summary: 'A complete revitalization of the 2.8-acre park and amphitheater space beyond Petco Park\'s outfield wall.',
    details: 'To celebrate Petco Park\'s 20th anniversary, Clark transformed the former "Park at the Park" into an elevated year-round public destination and premier outdoor entertainment venue. The project features an expansive tiered amphitheater lawn, an elevated viewing deck at the Tony Gwynn Terrace, a custom fenced dog park, pickleball courts, an upgraded Play Ball field, expanded food and beverage concessions, and full event production infrastructure.',
    challenge: 'Executing complex structural concrete, hardscaping, and utility overhauls within a compressed off-season window inside an active urban ballpark.',
    solution: 'Deployed 24/7 dual-shift operations and synchronized modular precast installations to complete the full 2.8-acre redevelopment in time for 2024 MLB Opening Day.'
  },
  {
    id: 251,
    title: 'Wintrust Arena',
    category: 'Commercial & Mixed-Use',
    projectType: 'Sports and events arena',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/wintrust-arena',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-03/5471100003_jpg_0.jpg?itok=6JGM57Ea',
    location: 'Chicago, Illinois',
    client: 'Metropolitan Pier and Exposition Authority (MPEA) & DePaul University',
    specs: '10,387 Seats, 300,000 sq. ft. Multi-Purpose Arena, LEED Gold',
    date: '2017',
    summary: 'A signature 10,387-seat urban arena in Chicago\'s McCormick Square housing DePaul basketball and WNBA Chicago Sky.',
    details: 'Clark served as the lead builder of Prairie District 3 Partners to construct the $150M Wintrust Arena. Designed by Pelli Clarke & Partners, the 300,000 sq. ft. building features an iconic sweeping arch roof with a continuous curved steel diagrid system, 22 private suites, 479 club seats, two VIP lounges, state-of-the-art broadcast rooms, and seamless pedestrian bridges connecting to McCormick Place convention center.',
    challenge: 'Erecting long-span swooping steel roof trusses over a tight urban footprint bordered by active commuter rail tracks.',
    solution: 'Engineered a synchronized dual-crane tandem hoist strategy and utilized 4D BIM modeling to sequence truss connections with zero track disruptions.'
  },
  {
    id: 252,
    title: 'CFG Bank Arena',
    category: 'Commercial & Mixed-Use',
    projectType: 'Arena renovation',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/cfg-bank-arena',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-06/CFG-3327_jpg.jpg',
    location: 'Baltimore, Maryland',
    client: 'Oak View Group (OVG)',
    specs: '14,000 Seats, $200M Complete Arena Transformation',
    date: '2023',
    summary: 'A fast-track modernization transforming a 61-year-old historic civic center into a world-class concert venue.',
    details: 'Clark served as construction manager for the $200M complete revitalization of Baltimore\'s iconic downtown arena. In an intense 12-month schedule, Clark completely gutted the interior, demolished the historic proscenium stage wall, shifted the event floor, reinforced the structural roof, added premium suites, club lounges, and modernized MEP/acoustics, capped off with a striking maritime sail-inspired exterior glass facade.',
    challenge: 'Demolishing a massive structural proscenium wall holding up the arena roof within an aggressive 12-month turnaround.',
    solution: 'Installed temporary shoring towers, engineered a permanent 180-ton transfer truss to support the roof load, and ran continuous round-the-clock trade shifts.'
  },
  {
    id: 253,
    title: 'The Pinnacle',
    category: 'Commercial & Mixed-Use',
    projectType: 'Live music venue',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/pinnacle',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2025-03/5.%20ThePinnacle_20250227_0723-Enhanced-NR-ALIVECOVERAGE_0.jpg',
    location: 'Nashville, Tennessee',
    client: 'Southwest Value Partners & AEG Presents',
    specs: '4,500 Capacity, 130,000 sq. ft. Entertainment Venue',
    date: '2024–2025',
    summary: 'A state-of-the-art 4,500-capacity live music and entertainment venue anchoring the Nashville Yards development.',
    details: 'Constructed by Clark in the heart of the 19-acre Nashville Yards master development, The Pinnacle is a multi-level concert hall designed by HOK for AEG Presents. The 130,000 sq. ft. venue features column-free sightlines, premier acoustic finishes, an expansive open general admission floor, reserved tiered mezzanine seating, an open-air rooftop bar, and specialized underground loading docks that handle multiple tour semi-trucks simultaneously.',
    challenge: 'Achieving concert-grade acoustic containment directly adjacent to high-end residential towers and luxury hotels in Nashville Yards.',
    solution: 'Constructed an acoustically decoupled "box-in-a-box" double-wall structural concrete envelope with elastomeric ceiling isolators.'
  },
  {
    id: 254,
    title: 'International Spy Museum',
    category: 'Museums & Culture',
    projectType: 'Museum',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/international-spy-museum',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-04/776.126_jpg_0.jpg?itok=SiVxRe8C',
    location: 'Washington, DC',
    client: 'The Malrite Company & JBG SMITH',
    specs: '140,000 sq. ft., 8 Stories, Steel & Glass "Veil"',
    date: '2019',
    summary: 'A landmark 140,000 sq. ft. purpose-built museum at L\'Enfant Plaza featuring an iconic glass veil facade.',
    details: 'Clark constructed the eight-story headquarters of the International Spy Museum in Southwest D.C. Designed by Rogers Stirk Harbour + Partners and Hickok Cole, the building features an angular steel frame, a distinctive "black box" exhibit block wrapped in metal louvers, an exterior suspended glass-enclosed atrium staircase known as "The Veil", interactive immersive exhibit floors, and a glass-enclosed rooftop event space overlooking the capital.',
    challenge: 'Constructing a heavy structural steel building directly on top of an active subterranean 1960s parking garage and rail transit concourse.',
    solution: 'Reinforced existing subterranean concrete columns with carbon fiber wraps and drove new micro-piles through the garage floor to bedrock.'
  },
  {
    id: 255,
    title: 'Seattle Convention Center Addition (Summit)',
    category: 'Commercial & Mixed-Use',
    projectType: 'Convention center expansion',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/seattle-convention-center-addition',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-07/13033_Final%2009-WSCC-2885_jpg.jpg',
    location: 'Seattle, Washington',
    client: 'Washington State Public Facilities District / Pine Street Group',
    specs: '1.5M sq. ft., LEED Platinum, 15-Story Vertically-Stacked Venue',
    date: '2023',
    summary: 'North America\'s first high-rise, vertically-stacked convention center adding 1.5 million sq. ft. in downtown Seattle.',
    details: 'Built by the Clark | Lewis joint venture, the Summit building is a 1.5 million sq. ft. convention venue designed by LMN Architects. Nearly doubling the facility\'s capacity, the 15-story facility features a 58,000 sq. ft. column-free ballroom, 248,000 sq. ft. of exhibit space, 62 meeting rooms, a 14,000 sq. ft. garden terrace, and 21,000 tons of structural steel, achieving LEED Platinum with an innovative rainwater harvesting system integrated into the truck ramp.',
    challenge: 'Executing a massive 1.5M sq. ft. deep urban excavation constrained by Interstate 5 and active downtown transit tunnels.',
    solution: 'Engineered a perimeter tieback shoring wall up to 100 feet deep and assembled long-span structural trusses using modular offsite fabrication.'
  },
  {
    id: 256,
    title: 'BWI Concourse A/B Connector and Baggage Handling System',
    category: 'Aviation & Infrastructure',
    projectType: 'Airport terminal and baggage upgrades',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/bwi-concourse-ab-connector-and-baggage-handling-system',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2025-10/BWI%20Baggage%20Handling%20System%20%26%20Concourse%20Connector%20machine.jpg',
    location: 'Baltimore, Maryland',
    client: 'Maryland Aviation Administration (MAA) / MDOT',
    specs: 'Multi-Level Connector, Central Atrium & In-Line Baggage System',
    date: '2024–2026',
    summary: 'The largest capital project in BWI Airport history, unifying Concourses A and B with a modern connector and automated baggage network.',
    details: 'Clark was selected by MDOT MAA to construct the multi-level passenger connector between Concourses A and B. The project provides direct passenger transit, expanded holdrooms for Southwest Airlines, new food and retail spaces, smart restrooms, and an architecturally exposed structural steel (AESS) skylit atrium. Beneath the concourse, Clark is installing a state-of-the-art automated in-line baggage handling system with high-speed security screening.',
    challenge: 'Building directly across the airport\'s primary active baggage tug routes without disrupting 24/7 flight operations.',
    solution: 'Built temporary illuminated subterranean bypass tunnels to maintain continuous baggage train circulation throughout construction.'
  },
  {
    id: 257,
    title: 'Frost Tower',
    category: 'Commercial & Mixed-Use',
    projectType: 'Office and retail tower',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/frost-tower',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-03/Frost%20Tower%20Aerial%20-%20122318-1_jpg.jpg?itok=NsomEIMb',
    location: 'San Antonio, Texas',
    client: 'Weston Urban & KDC',
    specs: '23 Stories, 460,000 sq. ft., 400-Foot Architectural Skyscraper',
    date: '2019',
    summary: 'A 23-story, 400-foot crystalline glass tower—the first high-rise office skyscraper built in downtown San Antonio in 30 years.',
    details: 'Clark served as general contractor for the iconic Frost Tower designed by Pelli Clarke & Partners. The 460,000 sq. ft. tower features an octagonal cast-in-place post-tensioned concrete superstructure that tapers as it rises into a faceted, illuminated glass crown. The project includes 20,000 sq. ft. of ground-level retail, a tenant fitness center, a multi-level integrated parking structure, and advanced high-efficiency building envelopes.',
    challenge: 'Pouring complex post-tensioned concrete floor slabs for an octagonal footprint that changes angle at every single floor.',
    solution: 'Developed custom parametric 3D BIM formwork schedules and utilized self-climbing perimeter protection screens.'
  },
  {
    id: 258,
    title: 'I-90 Keechelus Dam to Stampede Pass, Phase 2A',
    category: 'Aviation & Infrastructure',
    projectType: 'Highway improvements',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/i-90-keechelus-dam-stampede-pass-phase-2a',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-04/DJI_0024.JPG',
    location: 'Hyak, Washington',
    client: 'Washington State Department of Transportation (WSDOT)',
    specs: '6-Lane Highway Widening, 3 Creek Bridges & Wildlife Overcrossings',
    date: '2021',
    summary: 'Major mountain corridor improvements widening I-90 through Snoqualmie Pass with wildlife overcrossings.',
    details: 'Clark\'s heavy civil subsidiary, Guy F. Atkinson Construction, delivered this major mountain corridor project for WSDOT along Interstate 90 through Snoqualmie Pass. The project widened I-90 from 4 to 6 lanes, built replacement bridges over Unnamed Creek, Price Creek, and Noble Creek, stabilized rugged rock avalanche slopes, installed ITS monitoring systems, and constructed an architecturally naturalized wildlife overcrossing to preserve animal migration paths across the Cascade Mountains.',
    challenge: 'Executing heavy rock blasting, bridge erection, and grading in an alpine mountain pass with severe winter closures.',
    solution: 'Deployed specialized accelerated bridge construction (ABC) methods and coordinated phased traffic shifts to maintain commuter flow.'
  },
  {
    id: 259,
    title: 'Atlanta Water Supply Program, Phases 1A and 2',
    category: 'Industrial',
    projectType: 'Water supply tunnel and storage infrastructure',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/atlanta-water-supply-program-phase-1a-and-2',
    isOfficialUSProject: true,
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2023-04/DJI_0566_jpg.jpg?itok=ReshataW',
    location: 'Atlanta, Georgia',
    client: 'City of Atlanta Department of Watershed Management',
    specs: '5-Mile 12.5-ft TBM Hard-Rock Tunnel & 2.4-Billion-Gallon Quarry Reservoir',
    date: '2020',
    summary: 'A transformative 5-mile hard-rock tunnel and 2.4-billion-gallon reservoir securing Atlanta\'s water supply for 100 years.',
    details: 'Clark\'s heavy civil subsidiary, Guy F. Atkinson Construction, completed the subterranean hard-rock tunneling and shaft construction for the $321M Atlanta Water Supply Program. The project converted the 400-foot-deep former Bellwood Quarry into a 2.4-billion-gallon raw water storage reservoir and bored an 5-mile-long, 12.5-foot-diameter tunnel using a Robbins hard-rock TBM ("Dr. Geoff") to connect the quarry with the Chattahoochee River and Hemphill Water Treatment Plant, boosting Atlanta\'s water reserves from 3 days to over 30 days.',
    challenge: 'Boring an 5-mile hard-rock tunnel hundreds of feet beneath active interstate highways, rail lines, and residential neighborhoods.',
    solution: 'Operated a custom high-performance Robbins Main Beam TBM with pre-excavation probe drilling and automated micro-seismic settlement monitoring.'
  }
];

// Helper to generate clean SEO URL slugs for all projects
export function getProjectSlug(title) {
  if (!title) return '';
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Remove duplicates by title dynamically to prevent duplicate listings
export const UNIQUE_PROJECTS = PROJECTS.filter((project, index, self) =>
  index === self.findIndex((p) => p.title === project.title)
);

// Helper to identify Indian projects
export function isIndianProject(project) {
  if (!project) return false;
  const loc = (project.location || '').toLowerCase();
  return (
    loc.includes('india') ||
    loc.includes('maharashtra') ||
    loc.includes('gujarat') ||
    loc.includes('delhi') ||
    loc.includes('karnataka') ||
    loc.includes('tamil nadu') ||
    loc.includes('uttar pradesh') ||
    loc.includes('andhra pradesh') ||
    loc.includes('ladakh') ||
    loc.includes('himachal pradesh') ||
    loc.includes('madhya pradesh') ||
    loc.includes('assam') ||
    loc.includes('kerala') ||
    loc.includes('telangana') ||
    loc.includes('rajasthan') ||
    loc.includes('bihar') ||
    loc.includes('odisha') ||
    loc.includes('sikkim') ||
    loc.includes('arunachal') ||
    loc.includes('bengaluru') ||
    loc.includes('mumbai')
  );
}

export { PROJECTS };
export { INDIAN_PROJECTS } from '../data/indianProjects';

export default function Projects() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [activeProject, setActiveProject] = useState(null);

  // Sync state from URL query parameters (e.g. ?category=... or ?search=...)
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  // Dynamic Category extraction
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(UNIQUE_PROJECTS.map((p) => p.category))).filter(Boolean)];
    return cats;
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: UNIQUE_PROJECTS.length };
    UNIQUE_PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Official U.S. Portfolio count
  const officialUSProjectsCount = useMemo(() => {
    return UNIQUE_PROJECTS.filter((p) => p.isOfficialUSProject || p.officialSource).length;
  }, []);

  // India Portfolio count
  const indianProjectsCount = useMemo(() => {
    return UNIQUE_PROJECTS.filter(isIndianProject).length;
  }, []);

  // Filter and Sort Projects
  const filteredProjects = useMemo(() => {
    let result = UNIQUE_PROJECTS.filter((project) => {
      let matchesCategory = true;
      if (selectedCategory === 'Official U.S. Projects') {
        matchesCategory = !!(project.isOfficialUSProject || project.officialSource);
      } else if (selectedCategory === 'India Projects') {
        matchesCategory = isIndianProject(project);
      } else if (selectedCategory !== 'All') {
        matchesCategory = project.category === selectedCategory;
      }

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        project.title.toLowerCase().includes(query) ||
        (project.projectType && project.projectType.toLowerCase().includes(query)) ||
        (project.summary && project.summary.toLowerCase().includes(query)) ||
        (project.location && project.location.toLowerCase().includes(query)) ||
        (project.client && project.client.toLowerCase().includes(query)) ||
        (project.category && project.category.toLowerCase().includes(query)) ||
        (project.details && project.details.toLowerCase().includes(query)) ||
        (project.specs && project.specs.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'title-asc') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'title-desc') {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === 'location') {
      result = [...result].sort((a, b) => (a.location || '').localeCompare(b.location || ''));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const hasActiveFilters = selectedCategory !== 'All' || searchQuery !== '';

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('default');
    setSearchParams({});
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Hero - Enterprise Aesthetic */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={MarketHeroImg}
            alt="Clark Construction Complete Project Portfolio"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Our Complete Portfolio</span>
          <h1 className="page-hero-title">All Projects Catalog</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
            Explore our complete collection of {UNIQUE_PROJECTS.length} landmark commercial, institutional, civil transit, energy, and heavy infrastructure developments across the globe.
          </p>
        </div>
      </section>

      {/* Projects Gallery & Controls Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">

          {/* Master Controls Toolbar */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-color)',
            padding: '20px 24px',
            borderRadius: '14px',
            boxShadow: 'var(--shadow-premium)',
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}>
            
            {/* Top Row: Search, Sort & View Mode Switcher */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px'
            }}>
              {/* Search input */}
              <div style={{ position: 'relative', flexGrow: 1, maxWidth: '420px', minWidth: '240px' }}>
                <Search
                  size={17}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#64748B'
                  }}
                />
                <input
                  type="text"
                  placeholder="Search by project name, city, client, or sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 38px 10px 40px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    color: 'var(--text-white)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.backgroundColor = '#FFFFFF';
                    e.target.style.borderColor = '#2563EB';
                    e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = '#F8FAFC';
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#64748B',
                      cursor: 'pointer',
                      display: 'flex',
                      padding: 0
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Right Side: Sort dropdown & Grid/List View switcher */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                
                {/* Sort selector */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ArrowUpDown size={15} color="#64748B" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--text-white)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <option value="default">Default Order</option>
                    <option value="title-asc">Project Name (A–Z)</option>
                    <option value="title-desc">Project Name (Z–A)</option>
                    <option value="location">Location (A–Z)</option>
                  </select>
                </div>

                {/* View Switcher: Grid vs List */}
                <div style={{
                  display: 'flex',
                  backgroundColor: '#F1F5F9',
                  padding: '3px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)'
                }}>
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: viewMode === 'grid' ? '#0D1A63' : 'transparent',
                      color: viewMode === 'grid' ? '#FFFFFF' : '#64748B',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <LayoutGrid size={15} />
                    <span>Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    title="List View"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: viewMode === 'list' ? '#0D1A63' : 'transparent',
                      color: viewMode === 'list' ? '#FFFFFF' : '#64748B',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <List size={15} />
                    <span>List</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Row: Category Filter Pills with counts */}
            <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center',
              paddingTop: '8px',
              borderTop: '1px solid var(--border-color)'
            }}>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = categoryCounts[cat] || 0;
                return (
                  <React.Fragment key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        border: isSelected ? '1px solid #2563EB' : '1px solid var(--border-color)',
                        backgroundColor: isSelected ? '#0D1A63' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: isSelected ? '0 2px 8px rgba(13, 26, 99, 0.2)' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = '#F8FAFC';
                          e.currentTarget.style.borderColor = 'var(--border-color-hover)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = '#FFFFFF';
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }
                      }}
                    >
                      <span>{cat}</span>
                      <span style={{
                        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.22)' : 'rgba(13, 26, 99, 0.08)',
                        color: isSelected ? '#FFFFFF' : 'var(--primary)',
                        fontSize: '0.72rem',
                        padding: '1px 6px',
                        borderRadius: '9999px',
                        fontWeight: 800
                      }}>
                        {count}
                      </span>
                    </button>

                    {cat === 'All' && (
                      <button
                        onClick={() => setSelectedCategory(selectedCategory === 'Official U.S. Projects' ? 'All' : 'Official U.S. Projects')}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '9999px',
                          border: selectedCategory === 'Official U.S. Projects' ? '1px solid #16A34A' : '1px solid #BBF7D0',
                          backgroundColor: selectedCategory === 'Official U.S. Projects' ? '#166534' : '#F0FDF4',
                          color: selectedCategory === 'Official U.S. Projects' ? '#FFFFFF' : '#166534',
                          cursor: 'pointer',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                          boxShadow: selectedCategory === 'Official U.S. Projects' ? '0 2px 8px rgba(22, 101, 52, 0.25)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedCategory !== 'Official U.S. Projects') {
                            e.currentTarget.style.backgroundColor = '#DCFCE7';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedCategory !== 'Official U.S. Projects') {
                            e.currentTarget.style.backgroundColor = '#F0FDF4';
                          }
                        }}
                      >
                        <CheckCircle2 size={13} color={selectedCategory === 'Official U.S. Projects' ? '#FFF' : '#16A34A'} />
                        <span>Official U.S. Projects</span>
                        <span style={{
                          backgroundColor: selectedCategory === 'Official U.S. Projects' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(22, 163, 74, 0.15)',
                          color: selectedCategory === 'Official U.S. Projects' ? '#FFFFFF' : '#166534',
                          fontSize: '0.72rem',
                          padding: '1px 6px',
                          borderRadius: '9999px',
                          fontWeight: 800
                        }}>
                          {officialUSProjectsCount}
                        </span>
                      </button>
                    )}

                    {/* Dedicated India Projects Filter Button */}
                    {cat === 'All' && (
                      <button
                        onClick={() => setSelectedCategory('India Projects')}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '9999px',
                          border: selectedCategory === 'India Projects' ? '1px solid #D97706' : '1px solid #FDE68A',
                          backgroundColor: selectedCategory === 'India Projects' ? '#D97706' : '#FFFBEB',
                          color: selectedCategory === 'India Projects' ? '#FFFFFF' : '#B45309',
                          cursor: 'pointer',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                          boxShadow: selectedCategory === 'India Projects' ? '0 2px 8px rgba(217, 119, 6, 0.25)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedCategory !== 'India Projects') {
                            e.currentTarget.style.backgroundColor = '#FEF3C7';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedCategory !== 'India Projects') {
                            e.currentTarget.style.backgroundColor = '#FFFBEB';
                          }
                        }}
                      >
                        <Building2 size={13} color={selectedCategory === 'India Projects' ? '#FFF' : '#D97706'} />
                        <span>India Projects</span>
                        <span style={{
                          backgroundColor: selectedCategory === 'India Projects' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(217, 119, 6, 0.15)',
                          color: selectedCategory === 'India Projects' ? '#FFFFFF' : '#B45309',
                          fontSize: '0.72rem',
                          padding: '1px 6px',
                          borderRadius: '9999px',
                          fontWeight: 800
                        }}>
                          {indianProjectsCount}
                        </span>
                      </button>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

          </div>

          {/* Results Summary Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            fontSize: '0.88rem',
            color: '#64748B',
            fontWeight: 600
          }}>
            <div>
              <span>Showing <strong style={{ color: 'var(--text-white)' }}>{filteredProjects.length}</strong> of <strong style={{ color: 'var(--text-white)' }}>{UNIQUE_PROJECTS.length}</strong> total projects on one page</span>
              {selectedCategory === 'Official U.S. Projects' ? (
                <span style={{ marginLeft: '8px', color: '#16A34A', fontWeight: 700 }}>• Official Clark U.S. Portfolio</span>
              ) : selectedCategory === 'India Projects' ? (
                <span style={{ marginLeft: '8px', color: '#D97706', fontWeight: 700 }}>• Indian Infrastructure & Landmark Portfolio ({indianProjectsCount} projects)</span>
              ) : selectedCategory !== 'All' ? (
                <span style={{ marginLeft: '8px', color: '#2563EB' }}>• in {selectedCategory}</span>
              ) : null}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563EB',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <X size={14} /> Clear Active Filters
              </button>
            )}
          </div>

          {/* Projects View: GRID MODE */}
          {viewMode === 'grid' && (
            filteredProjects.length > 0 ? (
              <motion.div
                layout
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '26px'
                }}
              >
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 24, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                        delay: Math.min(index * 0.02, 0.25)
                      }}
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <Card
                        image={project.image}
                        title={project.title}
                        subtitle={project.projectType || project.category}
                        tag={project.location}
                        hoverEffect="tilt"
                        onClick={() => navigate(`/our-work/projects/${getProjectSlug(project.title)}`)}
                      >
                        {(project.isOfficialUSProject || project.officialSource) && (
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              backgroundColor: '#F0FDF4',
                              border: '1px solid #BBF7D0',
                              color: '#166534',
                              padding: '2px 8px',
                              borderRadius: '999px',
                              fontSize: '0.68rem',
                              fontWeight: 800
                            }}>
                              <CheckCircle2 size={11} color="#16A34A" />
                              <span>Official Clark Project</span>
                            </span>
                          </div>
                        )}
                        <p style={{ marginBottom: '16px', lineHeight: '1.55', flexGrow: 1 }}>{project.summary}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                          <span style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: 600 }}>
                            {project.client ? project.client.split(';')[0] : 'Clark Construction'}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/our-work/projects/${getProjectSlug(project.title)}`);
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#2563EB',
                              fontWeight: 700,
                              fontSize: '0.84rem',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '4px 0',
                              transition: 'gap 0.2s ease, color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#0D1A63';
                              e.currentTarget.style.gap = '10px';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#2563EB';
                              e.currentTarget.style.gap = '6px';
                            }}
                          >
                            <span>Full Details</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
                <HardHat size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px', opacity: 0.5 }} />
                <h3 style={{ color: 'var(--text-white)', marginBottom: '8px' }}>No Projects Found</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '18px' }}>Try adjusting your filters or search keywords.</p>
                <Button onClick={clearFilters} variant="secondary" size="sm">
                  Reset Filters
                </Button>
              </div>
            )
          )}

          {/* Projects View: LIST / TABLE MODE */}
          {viewMode === 'list' && (
            filteredProjects.length > 0 ? (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-premium)',
                overflow: 'hidden'
              }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-color)' }}>
                        <th style={{ padding: '14px 18px', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>Project</th>
                        <th style={{ padding: '14px 18px', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>Sector / Category</th>
                        <th style={{ padding: '14px 18px', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>Location</th>
                        <th style={{ padding: '14px 18px', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>Key Scope / Specs</th>
                        <th style={{ padding: '14px 18px', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', textAlign: 'right' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProjects.map((project) => (
                        <tr
                          key={project.id}
                          onClick={() => navigate(`/our-work/projects/${getProjectSlug(project.title)}`)}
                          style={{
                            borderBottom: '1px solid var(--border-color)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            borderLeft: '3px solid transparent'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#F8FAFC';
                            e.currentTarget.style.borderLeft = '3px solid #2563EB';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFFFFF';
                            e.currentTarget.style.borderLeft = '3px solid transparent';
                          }}
                        >
                          {/* Project thumbnail & title */}
                          <td style={{ padding: '14px 18px', verticalAlign: 'middle' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                              <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=400&q=80';
                                }}
                                style={{
                                  width: '54px',
                                  height: '42px',
                                  borderRadius: '6px',
                                  objectFit: 'cover',
                                  flexShrink: 0,
                                  border: '1px solid var(--border-color)',
                                  transition: 'transform 0.3s ease'
                                }}
                              />
                              <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2px' }}>
                                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)', margin: 0 }}>
                                    {project.title}
                                  </h4>
                                  {(project.isOfficialUSProject || project.officialSource) && (
                                    <span style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '3px',
                                      backgroundColor: '#F0FDF4',
                                      border: '1px solid #BBF7D0',
                                      color: '#166534',
                                      padding: '1px 6px',
                                      borderRadius: '999px',
                                      fontSize: '0.65rem',
                                      fontWeight: 800
                                    }}>
                                      <CheckCircle2 size={10} color="#16A34A" />
                                      <span>Official U.S.</span>
                                    </span>
                                  )}
                                </div>
                                <span style={{ fontSize: '0.76rem', color: '#64748B' }}>
                                  {project.projectType || (project.client ? project.client.split(';')[0] : 'Clark Construction')}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td style={{ padding: '14px 18px', verticalAlign: 'middle' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '4px 10px',
                              borderRadius: '999px',
                              backgroundColor: 'rgba(13, 26, 99, 0.06)',
                              color: 'var(--primary)',
                              fontSize: '0.78rem',
                              fontWeight: 700
                            }}>
                              {project.category}
                            </span>
                          </td>

                          {/* Location */}
                          <td style={{ padding: '14px 18px', verticalAlign: 'middle', color: '#334155', fontSize: '0.86rem', fontWeight: 600 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <MapPin size={14} color="#64748B" />
                              <span>{project.location}</span>
                            </div>
                          </td>

                          {/* Specs */}
                          <td style={{ padding: '14px 18px', verticalAlign: 'middle', color: '#64748B', fontSize: '0.82rem', maxWidth: '240px' }}>
                            {project.specs || project.summary.substring(0, 75) + '...'}
                          </td>

                          {/* Action */}
                          <td style={{ padding: '14px 18px', verticalAlign: 'middle', textAlign: 'right' }}>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/our-work/projects/${getProjectSlug(project.title)}`);
                              }}
                            >
                              Case Study
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
                <HardHat size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px', opacity: 0.5 }} />
                <h3 style={{ color: 'var(--text-white)', marginBottom: '8px' }}>No Projects Found</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '18px' }}>Try adjusting your filters or search keywords.</p>
                <Button onClick={clearFilters} variant="secondary" size="sm">
                  Reset Filters
                </Button>
              </div>
            )
          )}

          {/* Quick Back to Top bar at bottom */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '999px',
                border: '1px solid var(--border-color)',
                backgroundColor: '#FFFFFF',
                color: 'var(--primary)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 700,
                boxShadow: 'var(--shadow-premium)',
                transition: 'all 0.2s ease'
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
              <ArrowUp size={16} /> Back to Top
            </button>
          </div>

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
            <div style={{ textAlign: 'right', marginTop: '28px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
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


