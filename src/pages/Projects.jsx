import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Calendar, HardHat, FileText, LayoutGrid, List, ArrowUpDown, X, ArrowUp, CheckCircle2, Building2, ArrowRight } from 'lucide-react';
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
import KovvadaNuclearImg from '../assets/Kovvada Nuclear Power Plant.jpg';
import RelianceJamnagarImg from '../assets/reliance-jamnagar.jpeg';
import GIFTCityImg from '../assets/gift-city-correct.png';
import NaviMumbaiAirportImg from '../assets/airport.jpg';
import RailwayMetroImg from '../assets/railway_metro_projects.png';
import DMICImg from '../assets/Delhi-Mumbai Industrial Corridor (DMIC).png';
import AKICImg from '../assets/Amritsar-Kolkata Industrial Corridor (AKIC).jpg';
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
    image: AfricanAmericanMuseumImg,
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
    image: MuseumsMonumentsImg,
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
    image: InovaScharImg,
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
    id: 75,
    title: 'Railway and Metro Projects - Global & Regional',
    category: 'Aviation & Infrastructure',
    image: RailwayMetroImg,
    location: 'Delhi NCR & Metropolitan Cities',
    client: 'DMRC, L&T Metro, Tata Projects',
    specs: 'Mass Transit Systems & Elevated Viaducts',
    date: 'Ongoing Projects',
    summary: 'General consulting and construction supervision for urban subway and light rail networks.',
    details: 'Underground tunnel boring, elevated viaduct structures, station terminals, and signaling synchronization.',
    challenge: 'Boring tunnels under congested historic urban centers with low depth of cover.',
    solution: 'Operated earth pressure balance (EPB) TBMs with continuous ground settlement sensors.'
  },
  {
    id: 76,
    title: 'Delhi-Mumbai Industrial Corridor (DMIC)',
    category: 'Aviation & Infrastructure',
    image: DMICImg,
    location: 'Western India Corridor',
    client: 'NICDIT & L&T',
    specs: '1,500 km Smart Freight Corridor',
    date: '2018 - 2027',
    summary: 'A mega-infrastructure project developing new smart industrial cities along freight rail lines.',
    details: 'Smart industrial zones, logistics hubs, dedicated freight tracks, and power generation nodes.',
    challenge: 'Integrating cross-state logistics infrastructure across diverse geological terrains.',
    solution: 'Standardized modular prefabricated station structures and automated track laying trains.'
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
    id: 78,
    title: 'Chenab Rail Bridge / USBRL',
    category: 'Aviation & Infrastructure',
    image: ChenabBridgeImg,
    location: 'Jammu & Kashmir, India',
    client: 'Afcons Infrastructure & Konkan Railway',
    specs: '359m Height, World\'s Highest Rail Bridge',
    date: '2004 - 2024',
    summary: 'Construction of the world\'s highest railway bridge, spanning the Chenab River.',
    details: 'Structural steel arch, high-wind cable rigging, thermal expansion joints, and seismic-resistant steel girders.',
    challenge: 'Erecting a heavy steel arch over a 359-meter deep gorge subject to 266 km/h winds.',
    solution: 'Designed a high-capacity cable crane system spanning the gorge to lift arch segments into place.'
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
    id: 84,
    title: 'Bengaluru Suburban Railway Project (BSRP)',
    category: 'Aviation & Infrastructure',
    image: BengaluruSuburbanImg,
    location: 'Bengaluru, Karnataka, India',
    client: 'K-RIDE & L&T',
    specs: '148 km Commuter Rail Network, 4 Corridors',
    date: '2028',
    summary: 'Construction of a 148 km suburban commuter rail network featuring four corridors.',
    details: 'Elevated commuter stations, automatic train protection, grade-separated rail crossings, and depot yards.',
    challenge: 'Installing viaduct pillars in ultra-congested city streets with dense overhead utility networks.',
    solution: 'Used utility-mapping radar and pre-cast concrete pier caps set during midnight work windows.'
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

export { PROJECTS };

export default function Projects() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [activeProject, setActiveProject] = useState(null);

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

  // Filter and Sort Projects
  const filteredProjects = useMemo(() => {
    let result = UNIQUE_PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        project.title.toLowerCase().includes(query) ||
        (project.summary && project.summary.toLowerCase().includes(query)) ||
        (project.location && project.location.toLowerCase().includes(query)) ||
        (project.client && project.client.toLowerCase().includes(query)) ||
        (project.category && project.category.toLowerCase().includes(query));
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
                  <button
                    key={cat}
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
                      borderRadius: '999px',
                      fontWeight: 800
                    }}>
                      {count}
                    </span>
                  </button>
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
              {selectedCategory !== 'All' && (
                <span style={{ marginLeft: '8px', color: '#2563EB' }}>• in {selectedCategory}</span>
              )}
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
                        subtitle={project.category}
                        tag={project.location}
                        hoverEffect="tilt"
                        onClick={() => navigate(`/our-work/projects/${getProjectSlug(project.title)}`)}
                      >
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
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)', margin: '0 0 2px 0' }}>
                                  {project.title}
                                </h4>
                                <span style={{ fontSize: '0.76rem', color: '#64748B' }}>
                                  {project.client ? project.client.split(';')[0] : 'Clark Construction'}
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


