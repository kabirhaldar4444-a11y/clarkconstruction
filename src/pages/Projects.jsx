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
import SFOAirportImg from '../assets/San Francisco International Airport (SFO) Projects Client San Francisco Airport Commission.png';
import PresidentialSuiteImg from '../assets/Presidential Bathroom Suite Hospitality.png';
import MGMNationalHarborImg from '../assets/MGM National Harbor.jpg';
import JohnsHopkinsMedicalImg from '../assets/Johns Hopkins Medical Facilities.jpg';
import ChildrensNationalImg from "../assets/Children's National Hospital Expansion.jpg";
import GWUniversityImg from '../assets/George Washington University Buildings.jpg';
import UMDFacilitiesImg from '../assets/University of Maryland Facilities.jpg';
import VirginiaTechImg from '../assets/Virginia Tech Academic Buildings.jpg';
import CapitalCrossingImg from '../assets/Capital Crossing Development Client Property Group Partners.png';
import FBICentralRecordsImg from '../assets/FBI Central Records Complex & Government Projects.jpg';
import DataCenterCampusesImg from '../assets/Data Center Campuses (Confidential Clients).jpg';
import BatteryStorageImg from '../assets/Million New Battery Energy Storage System Mfg. Unit in Dhenkanal, Odisha.png';
import SuratWindImg from '../assets/Surat Wind Energy Project.png';
import MarketHeroImg from '../assets/Market hero image.png';
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
import PugetSoundImg from '../assets/Atkinson, WSDOT Team Up to Improve Connections Near Puget Sound Atkinson Construction,.png';
import CantonWastewaterImg from '../assets/Clark WaterReeves Young Team Celebrates Ribbon Cutting of Canton Wastewater Treatment Plant Expansion.png';
import KStreetOfficeJpg from '../assets/1900 K Street Office Tower.jpg';
import AnthemMusicVenueJpg from '../assets/The Anthem Music Venue.jpg';

// Custom curated Clark project images from src/assets/Clark
import Clark_UMCapitalRegionMedicalCenterImg from '../assets/Clark/UM Capital Region Medical Center — Healthcare & Government.jpg';
import Clark_SalesforceTowerImg from '../assets/Clark/Salesforce Tower — Commercial & Mixed-Use.jpg';
import Clark_SmithsoniansAirAndSpaceRevitalizationImg from "../assets/Clark/Smithsonian's National Air and Space Museum Revitalization — Museums & Culture.jpg";
import Clark_HowardCountyCircuitCourthouseImg from '../assets/Clark/Howard County Circuit Courthouse — Healthcare & Government.jpg';
import Clark_MidtownCenterImg from '../assets/Clark/Midtown Center — Commercial & Mixed-Use.jpg';
import Clark_ChaseCenterImg from '../assets/Clark/Chase Center — Sports and entertainment arena.jpg';
import Clark_IDEAFactoryUMDImg from '../assets/Clark/IDEA Factory at University of Maryland — Education.jpg';
import Clark_MDAndersonCancerCenterImg from '../assets/Clark/MD Anderson Cancer Center Specialized Facilities — Healthcare & Government.jpg';
import Clark_BhadlaSolarParkImg from '../assets/Clark/Bhadla Solar Park — Energy.jpg';
import Clark_NewPowerTransformerSolanImg from '../assets/Clark/New Power Transformer Mfg. Project in Solan — Industrial.jpg';
import Clark_TataElectronicsSemiconductorImg from '../assets/Clark/Tata Electronics Semiconductor Facility — Industrial.jpg';
import Clark_MumbaiTransHarbourLinkImg from '../assets/Clark/Mumbai Trans Harbour Link.jpg';
import Clark_MumbaiAhmedabadHSRailImg from '../assets/Clark/Mumbai–Ahmedabad High-Speed Rail Corridor — Aviation & Infrastructure.jpg';
import Clark_AtalTunnelImg from '../assets/Clark/Atal Tunnel — Aviation & Infrastructure.jpg';
import Clark_ZojilaTunnelProjectImg from '../assets/Clark/Zojila Tunnel Project — Aviation & Infrastructure.jpg';
import Clark_ShinkunLaTunnelProjectImg from '../assets/Clark/Shinkun La Tunnel Project — Aviation & Infrastructure.jpg';
import Clark_DholaSadiyaBridgeImg from '../assets/Clark/Dhola–Sadiya Bridge (Bhupen Hazarika Setu) — Aviation & Infrastructure.jpg';
import Clark_SudarshanSetuImg from '../assets/Clark/Sudarshan Setu — Aviation & Infrastructure.jpg';
import Clark_DwarkaExpresswayImg from '../assets/Clark/Dwarka Expressway — Aviation & Infrastructure.jpg';
import Clark_DelhiMumbaiExpresswayImg from '../assets/Clark/Delhi–Mumbai Expressway — Aviation & Infrastructure.jpg';
import Clark_BengaluruMysuruExpresswayImg from '../assets/Clark/Bengaluru–Mysuru Expressway — Aviation & Infrastructure.jpg';
import Clark_PurvanchalExpresswayImg from '../assets/Clark/Purvanchal Expressway — Aviation & Infrastructure.jpg';
import Clark_GangaExpresswayImg from '../assets/Clark/Ganga Expressway — Aviation & Infrastructure.jpg';
import Clark_BundelkhandExpresswayImg from '../assets/Clark/Bundelkhand Expressway — Aviation & Infrastructure.jpg';
import Clark_GorakhpurLinkExpresswayImg from '../assets/Clark/Gorakhpur Link Expressway — Aviation & Infrastructure.jpg';
import Clark_SamruddhiMahamargImg from '../assets/Clark/Samruddhi Mahamarg — Aviation & Infrastructure.jpg';
import Clark_MumbaiCoastalRoadProjectImg from '../assets/Clark/Mumbai Coastal Road Project — Aviation & Infrastructure.jpg';
import Clark_PuneRingRoadProjectImg from '../assets/Clark/Pune Ring Road Project — Aviation & Infrastructure.jpg';
import Clark_ThaneBorivaliTwinTunnelImg from '../assets/Clark/Thane–Borivali Twin Tunnel Project — Aviation & Infrastructure.jpg';
import Clark_VirarAlibaugMultimodalImg from '../assets/Clark/Virar–Alibaug Multimodal Corridor — Aviation & Infrastructure.jpg';
import Clark_NagpurMumbaiSuperExpresswayImg from '../assets/Clark/Nagpur–Mumbai Super Communication Expressway (Phase Expansion) — Aviation & Infrastructure.jpg';
import Clark_ChennaiPeripheralRingRoadImg from '../assets/Clark/Chennai Peripheral Ring Road — Aviation & Infrastructure.jpg';
import Clark_JaipurMetroPhase1CImg from '../assets/Clark/Jaipur Metro Phase 1C — Aviation & Infrastructure.jpg';
import Clark_VadhavanPortDevelopmentImg from '../assets/Clark/Vadhavan Port Development — Aviation & Infrastructure.jpg';
import Clark_VizhinjamInternationalSeaportImg from '../assets/Clark/Vizhinjam International Seaport — Aviation & Infrastructure.jpg';
import Clark_TunaTekraMegaContainerTerminalImg from '../assets/Clark/Tuna-Tekra Mega Container Terminal — Aviation & Infrastructure.jpg';
import Clark_NewMangalorePortCapacityExpansionImg from '../assets/Clark/New Mangalore Port Capacity Expansion — Aviation & Infrastructure.jpg';
import Clark_DighiPortDevelopmentImg from '../assets/Clark/Dighi Port Development — Aviation & Infrastructure.jpg';
import Clark_KaleshwaramLiftIrrigationImg from '../assets/Clark/Kaleshwaram Lift Irrigation Project — Industrial.jpg';
import Clark_PolavaramIrrigationProjectImg from '../assets/Clark/Polavaram Irrigation Project — Industrial.jpg';
import Clark_KenBetwaRiverLinkingImg from '../assets/Clark/Ken–Betwa River Linking Project — Industrial.jpg';
import Clark_RenukajiDamProjectImg from '../assets/Clark/Renukaji Dam Project — Industrial.jpg';
import Clark_DibangHydroelectricImg from '../assets/Clark/Dibang Multipurpose Hydroelectric Project — Energy.jpg';
import Clark_SubansiriLowerHydroelectricImg from '../assets/Clark/Subansiri Lower Hydroelectric Project — Energy.jpg';
import Clark_TeestaIIIHydroelectricImg from '../assets/Clark/Teesta-III Hydroelectric Project — Energy.jpg';
import Clark_KhavdaRenewableEnergyParkImg from '../assets/Clark/Khavda Renewable Energy Park — Energy.jpg';
import Clark_RamagundamFloatingSolarImg from '../assets/Clark/Ramagundam Floating Solar Power Project — Energy.jpg';

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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
    title: 'UM Capital Region Medical Center',
    category: 'Healthcare & Government',
    image: Clark_UMCapitalRegionMedicalCenterImg,
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
    id: 40,
    title: 'Salesforce Tower',
    category: 'Commercial & Mixed-Use',
    image: Clark_SalesforceTowerImg,
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
    id: 41,
    title: 'Smithsonian\'s National Air and Space Museum Revitalization',
    category: 'Museums & Culture',
    image: Clark_SmithsoniansAirAndSpaceRevitalizationImg,
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
    id: 42,
    title: 'Howard County Circuit Courthouse',
    category: 'Healthcare & Government',
    image: Clark_HowardCountyCircuitCourthouseImg,
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
    id: 43,
    title: 'Midtown Center',
    category: 'Commercial & Mixed-Use',
    image: Clark_MidtownCenterImg,
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
    id: 44,
    title: 'Chase Center',
    category: 'Commercial & Mixed-Use',
    projectType: 'Sports and entertainment arena',
    officialSource: 'https://www.clarkconstruction.com/our-work/projects/chase-center',
    isOfficialUSProject: true,
    image: Clark_ChaseCenterImg,
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
    id: 45,
    title: 'IDEA Factory at University of Maryland',
    category: 'Education',
    image: Clark_IDEAFactoryUMDImg,
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
    id: 46,
    title: 'MD Anderson Cancer Center Specialized Facilities',
    category: 'Healthcare & Government',
    image: Clark_MDAndersonCancerCenterImg,
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
    id: 47,
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
    id: 48,
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
    id: 49,
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
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
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
    id: 54,
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
    id: 55,
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
    id: 56,
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
    id: 57,
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
    id: 139,
    title: 'Bhadla Solar Park',
    category: 'Energy',
    image: Clark_BhadlaSolarParkImg,
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
    image: Clark_NewPowerTransformerSolanImg,
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
    image: Clark_TataElectronicsSemiconductorImg,
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
    id: 150,
    title: 'Mumbai Trans Harbour Link (Atal Setu)',
    category: 'Aviation & Infrastructure',
    image: Clark_MumbaiTransHarbourLinkImg,
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
    image: Clark_MumbaiAhmedabadHSRailImg,
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
    image: Clark_AtalTunnelImg,
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
    image: Clark_ZojilaTunnelProjectImg,
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
    image: Clark_ShinkunLaTunnelProjectImg,
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
    image: Clark_DholaSadiyaBridgeImg,
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
    image: Clark_SudarshanSetuImg,
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
    image: Clark_DwarkaExpresswayImg,
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
    image: Clark_DelhiMumbaiExpresswayImg,
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
    image: Clark_BengaluruMysuruExpresswayImg,
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
    image: Clark_PurvanchalExpresswayImg,
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
    image: Clark_GangaExpresswayImg,
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
    image: Clark_BundelkhandExpresswayImg,
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
    image: Clark_GorakhpurLinkExpresswayImg,
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
    image: Clark_SamruddhiMahamargImg,
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
    image: Clark_MumbaiCoastalRoadProjectImg,
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
    image: Clark_PuneRingRoadProjectImg,
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
    image: Clark_ThaneBorivaliTwinTunnelImg,
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
    image: Clark_VirarAlibaugMultimodalImg,
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
    image: Clark_NagpurMumbaiSuperExpresswayImg,
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
    image: Clark_ChennaiPeripheralRingRoadImg,
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
    image: Clark_JaipurMetroPhase1CImg,
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
    image: Clark_VadhavanPortDevelopmentImg,
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
    image: Clark_VizhinjamInternationalSeaportImg,
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
    image: Clark_TunaTekraMegaContainerTerminalImg,
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
    image: Clark_NewMangalorePortCapacityExpansionImg,
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
    image: Clark_DighiPortDevelopmentImg,
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
    image: Clark_KaleshwaramLiftIrrigationImg,
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
    image: Clark_PolavaramIrrigationProjectImg,
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
    image: Clark_KenBetwaRiverLinkingImg,
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
    image: Clark_RenukajiDamProjectImg,
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
    image: Clark_DibangHydroelectricImg,
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
    image: Clark_SubansiriLowerHydroelectricImg,
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
    image: Clark_TeestaIIIHydroelectricImg,
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
    image: Clark_KhavdaRenewableEnergyParkImg,
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
    image: Clark_RamagundamFloatingSolarImg,
    location: 'Ramagundam, Peddapalli, Telangana, India',
    client: 'NTPC Limited',
    specs: '100 MW Largest Floating Solar Plant',
    date: '2020–2024',
    summary: 'India\'s premier commercial floating solar photovoltaic installation spread across a thermal plant reservoir.',
    details: 'High-density polyethylene (HDPE) floaters, automated water anchors, specialized moisture-resistant inverters, and switchyards.',
    challenge: 'Anchoring thousands of floating solar arrays against fluctuating reservoir water levels and wind currents.',
    solution: 'Designed specialized deadweight concrete bottom anchors and elastic mooring cords to absorb wave motion.'
  }
];

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


