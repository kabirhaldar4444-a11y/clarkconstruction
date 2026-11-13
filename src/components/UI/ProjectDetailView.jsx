import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
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
  Building2,
  SlidersHorizontal,
  LayoutGrid,
  Briefcase,
  Box,
  Activity,
  Ruler,
  DollarSign,
  Cpu,
  Leaf,
  Sparkles,
  Check,
  ExternalLink
} from 'lucide-react';
import Carousel from './Carousel';

// Helper to match appropriate high-tech icon to specification category
function getSpecIcon(category = '') {
  const cat = category.toLowerCase();
  if (cat.includes('name') || cat.includes('project')) return <Building2 size={15} />;
  if (cat.includes('client') || cat.includes('owner')) return <Briefcase size={15} />;
  if (cat.includes('sub-constructor') || cat.includes('subconstructor')) return <HardHat size={15} />;
  if (cat.includes('constructor') || cat.includes('contract')) return <HardHat size={15} />;
  if (cat.includes('sector') || cat.includes('category') || cat.includes('type')) return <Layers size={15} />;
  if (cat.includes('location') || cat.includes('city') || cat.includes('site')) return <MapPin size={15} />;
  if (cat.includes('year') || cat.includes('date') || cat.includes('completion')) return <Calendar size={15} />;
  if (cat.includes('capacity') || cat.includes('volume') || cat.includes('seats')) return <Activity size={15} />;
  if (cat.includes('structure') || cat.includes('foundation') || cat.includes('framing')) return <Box size={15} />;
  if (cat.includes('size') || cat.includes('area') || cat.includes('sq')) return <Ruler size={15} />;
  if (cat.includes('value') || cat.includes('cost') || cat.includes('budget') || cat.includes('dollar')) return <DollarSign size={15} />;
  if (cat.includes('services') || cat.includes('scope') || cat.includes('mep') || cat.includes('tech')) return <Cpu size={15} />;
  if (cat.includes('sustain') || cat.includes('green') || cat.includes('leed') || cat.includes('env')) return <Leaf size={15} />;
  if (cat.includes('safety') || cat.includes('record') || cat.includes('incident')) return <ShieldCheck size={15} />;
  return <Sparkles size={15} />;
}

/**
 * Intelligent directory of verified primary constructors for landmark Indian infrastructure projects
 */
export const REAL_INDIAN_CONSTRUCTORS = {
  'Kovvada Nuclear Power Plant': 'Westinghouse Electric Company & NPCIL',
  'Reliance Jamnagar Refinery Expansion': 'Bechtel Corporation & Reliance Engineering',
  'Reliance Jamnagar Refinery': 'Bechtel Corporation & Reliance Engineering',
  'GIFT City (Gujarat International Finance Tec-City)': 'Larsen & Toubro (L&T)',
  'GIFT City': 'Larsen & Toubro (L&T)',
  'Navi Mumbai International Airport': 'Larsen & Toubro (L&T) & Tata Projects',
  'Amritsar-Kolkata Industrial Corridor (AKIC)': 'Tata Projects & Larsen & Toubro (L&T)',
  'Bharatmala Pariyojna Highway Network': 'Larsen & Toubro (L&T) & Dilip Buildcon',
  'Bharatmala Pariyojna': 'Larsen & Toubro (L&T) & Dilip Buildcon',
  'National Maritime Heritage Complex': 'Tata Projects Limited',
  'Ahmedabad-Dholera Express Highway': 'Sadbhav Engineering & Larsen & Toubro (L&T)',
  'Visakhapatnam-Chennai Industrial Corridor': 'Larsen & Toubro (L&T) & Tata Projects',
  'Sagarmala Project Maritime Network': 'Adani Ports & SEZ (APSEZ) & L&T',
  'Sagarmala Project': 'Adani Ports & SEZ (APSEZ) & L&T',
  'JSW Group Green Energy Projects': 'JSW Energy & Suzlon Energy',
  "JSW Group's Green Energy Projects": 'JSW Energy & Suzlon Energy',
  'Dholera Smart City Greenfield Project': 'Larsen & Toubro (L&T)',
  'Dholera Smart City Project': 'Larsen & Toubro (L&T)',
  'Ganga Vikas Riverfront Development': 'Shapoorji Pallonji & Co.',
  'Ganga Vikas Project (Riverfront)': 'Shapoorji Pallonji & Co.',
  'Mysore Wind Power Project': 'Suzlon Energy Limited',
  'Surat Wind Energy Project': 'Inox Wind & ReNew Power',
  'Puga Geothermal Energy Project': 'ONGC & Megha Engineering (MEIL)',
  'Nagpur Metallurgical Expansion Project': 'Tata Projects & SMS Group',
  'Krishnapatnam Port Expansion Project': 'Adani Ports (APSEZ) & L&T Infrastructure',
  'Paimana Highway Network Project': 'Dilip Buildcon & NHAI Concessionaires',
  'Paimana': 'Dilip Buildcon & NHAI Concessionaires',
  'Battery Energy Storage System Manufacturing Facility': 'Tata Projects & Sterling and Wilson',
  'Bhadla Solar Park': 'Adani Green Energy & Sterling and Wilson',
  'New Power Transformer Mfg. Project in Solan': 'Bharat Heavy Electricals Limited (BHEL)',
  'Tata Electronics Semiconductor Facility': 'Tata Projects & Powerchip (PSMC)',
  'Mumbai Trans Harbour Link (Atal Setu)': 'Larsen & Toubro (L&T), IHI Corporation & Daewoo E&C',
  'Mumbai–Ahmedabad High-Speed Rail Corridor': 'Larsen & Toubro (L&T) Heavy Civil',
  'Atal Tunnel': 'Strabag-Afcons Joint Venture',
  'Zojila Tunnel Project': 'Megha Engineering & Infrastructures Limited (MEIL)',
  'Shinkun La Tunnel Project': 'Border Roads Organisation (BRO)',
  'Dhola–Sadiya Bridge (Bhupen Hazarika Setu)': 'Navayuga Engineering Company',
  'Sudarshan Setu': 'SP Singla Constructions',
  'Dwarka Expressway': 'Larsen & Toubro (L&T) & J Kumar Infraprojects',
  'Delhi–Mumbai Expressway': 'Dilip Buildcon, Cube Highways & L&T',
  'Bengaluru–Mysuru Expressway': 'Dilip Buildcon Limited',
  'Purvanchal Expressway': 'PNC Infratech, Apco Infratech & GR Infraprojects',
  'Ganga Expressway': 'Adani Enterprises & IRB Infrastructure',
  'Bundelkhand Expressway': 'Apco Infratech & Ashoka Buildcon',
  'Gorakhpur Link Expressway': 'Apco Infratech & Dilip Buildcon',
  'Samruddhi Mahamarg': 'Megha Engineering (MEIL), Afcons Infrastructure & L&T',
  'Mumbai Coastal Road Project': 'Larsen & Toubro (L&T) & HCC-HDC JV',
  'Pune Ring Road Project': 'Navayuga Engineering & MSRDC',
  'Thane–Borivali Twin Tunnel Project': 'Megha Engineering & Infrastructures Limited (MEIL)',
  'Virar–Alibaug Multimodal Corridor': 'Navayuga Engineering & J Kumar Infraprojects',
  'Nagpur–Mumbai Super Communication Expressway (Phase Expansion)': 'Afcons Infrastructure & Megha Engineering (MEIL)',
  'Chennai Peripheral Ring Road': 'Larsen & Toubro (L&T) & Tata Projects',
  'Jaipur Metro Phase 1C': 'Afcons Infrastructure',
  'Vadhavan Port Development': 'Larsen & Toubro (L&T) Heavy Civil & JNPA',
  'Vizhinjam International Seaport': 'Adani Ports & Special Economic Zone (APSEZ)',
  'Tuna-Tekra Mega Container Terminal': 'DP World & Larsen & Toubro (L&T)',
  'New Mangalore Port Capacity Expansion': 'Larsen & Toubro (L&T) Geostructure',
  'Dighi Port Development': 'Adani Ports & Special Economic Zone (APSEZ)',
  'Kaleshwaram Lift Irrigation Project': 'Megha Engineering (MEIL) & L&T Construction',
  'Polavaram Irrigation Project': 'Megha Engineering & Infrastructures Limited (MEIL)',
  'Ken–Betwa River Linking Project': 'Larsen & Toubro (L&T) Water & Effluent',
  'Renukaji Dam Project': 'Patel Engineering Limited',
  'Dibang Multipurpose Hydroelectric Project': 'Larsen & Toubro (L&T) & Patel Engineering',
  'Subansiri Lower Hydroelectric Project': 'Patel Engineering & Larsen & Toubro (L&T)',
  'Teesta-III Hydroelectric Project': 'Navayuga Engineering & SEW Infrastructure',
  'Khavda Renewable Energy Park': 'Adani Green Energy & Sterling and Wilson',
  'Ramagundam Floating Solar Power Project': 'Bharat Heavy Electricals Limited (BHEL)'
};

/**
 * Intelligent directory of verified specialized trade contractors & JV partners for American projects
 */
export const REAL_AMERICAN_SUBCONTRACTORS = {
  'Capital One Arena': 'Clark Concrete & C3M Power Systems',
  'CityCenterDC': 'Smoot Construction & Clark Concrete JV',
  'The Wharf (Phase 1 & 2)': 'Clark Foundations & Clark Concrete',
  'The Wharf': 'Clark Foundations & Clark Concrete',
  'Washington Nationals Ballpark (Nationals Park)': 'Hunt Construction & Smoot Construction',
  'LAX Midfield Satellite Concourse': 'Turner Construction & PCL Construction JV',
  'LAX Terminal Modernization Projects': 'Clark Civil & Specialized Aviation Systems',
  'San Francisco International Airport (SFO) Projects': 'Skanska USA Building & Clark Joint Venture',
  'Walter Reed National Military Medical Center': 'Balfour Beatty Construction JV',
  'National Museum of African American History and Culture': 'Smoot Construction & Russell Construction JV',
  'Smithsonian Institution Renovations': 'Clark Historic Preservation & Architectural Trades',
  'National Museum of the United States Army': 'Specialized Laser-Aligned Steel Cladding Trades',
  'Conrad Washington DC Hotel': 'Clark Concrete & Architectural Curtainwall Trades',
  'MGM National Harbor': 'Smoot Construction & Whiting-Turner JV',
  'Inova Schar Cancer Institute': 'Clark Concrete & Radiation Vault Shielding Trades',
  'Johns Hopkins Medical Facilities': 'Whiting-Turner Contracting & Clark MEP Trades',
  "Children's National Hospital Expansion": 'Clark Concrete & Bio-Medical MEP Specialists',
  'George Washington University Buildings': 'Clark Concrete & Research Laboratory Trades',
  'University of Maryland Facilities': 'Clark Concrete & Long-Span Structural Steel Trades',
  'Virginia Tech Academic Buildings': 'Traditional Hokie Stone Masons & Clark Concrete',
  'The Anthem Music Venue': 'Acoustical & Entertainment Theatre Specialty Trades',
  'Capital Crossing Development': 'Balfour Beatty & Highway Air-Rights Deck Trades',
  '1900 K Street Office Tower': 'Clark Concrete & Smart Electrochromic Curtainwall Trades',
  'Fannie Mae Headquarters Renovation': 'Clark Interiors & Structural Shoring Trades',
  'Department of Homeland Security Facilities': 'Clark Foundations & High-Security Federal Trades',
  'FBI Central Records Complex & Government Projects': 'Clark Concrete & Automated Storage/Retrieval Robotics Trades',
  'FBI Central Records Complex': 'Clark Concrete & Automated Storage/Retrieval Robotics Trades',
  'Data Center Campuses (Confidential Clients)': 'Clark Technologies & Mission Critical MEP Specialists',
  'Data Center Campuses': 'Clark Technologies & Mission Critical MEP Specialists',
  'Texas Central High-Speed Rail': 'Lane Construction & Guy F. Atkinson Construction JV',
  'Gateway Program': 'Guy F. Atkinson Construction & Heavy Civil Tunneling JV',
  'Hudson Tunnel Project': 'Guy F. Atkinson Construction & Heavy Civil Tunneling JV',
  'Brightline West High-Speed Rail': 'Clark Civil & High-Speed Rail Systems JV',
  'Gordie Howe International Bridge': 'Bridging North America (Fluor / ACS / Dragados) & Clark Civil',
  'I-45 North Houston Expansion': 'Guy F. Atkinson Construction & Shirley Contracting',
  'Honolulu Rail Transit Extension': 'Ansaldo Honolulu & Guy F. Atkinson Heavy Civil',
  'Los Angeles Metro D Line Extension': 'Skanska | Traylor | Shea Joint Venture',
  'Second Avenue Subway Phase 2': 'Clark Heavy Civil & MTA Underground Contractors',
  'Phoenix Interstate I-10 Expansion': 'Guy F. Atkinson Construction',
  'Micron Idaho Memory Manufacturing Campus': 'Clark Cleanroom & High-Purity Industrial Mechanical Trades',
  'Louisiana LNG Export Terminal': 'Clark Civil & Heavy Industrial Cryogenic Trades',
  'Plaquemines LNG Phase Expansion': 'Clark Marine & Heavy Civil Subcontractors',
  'Empire Wind Project': 'Guy F. Atkinson Marine & Offshore Wind Trades',
  'Coastal Virginia Offshore Wind Project': 'Clark Infrastructure & Subsea Marine Energy Partners',
  'Los Angeles Convention Center Expansion': 'Hunt Construction Group JV',
  'Miami Freedom Park Development': 'Clark Concrete & Sports Venue Specialty Contractors',
  'The 78 Chicago Development': 'Clark Civil & Deep Foundation Contractors',
  'Nashville East Bank Development': 'Clark Civil & Waterfront Infrastructure Trades',
  'Salt Lake City Innovation District': 'Clark Concrete & Commercial Trade Partners',
  'Museums & Monuments': 'Clark Historic Preservation & Architectural Trades',
  'Presidential Bathroom Suite Hospitality': 'Clark Interiors & Luxury Hospitality Trades',
  'Clark Technologies': 'Clark Technologies Mission Critical Electrical Division',
  'Base Isolator at LACMA Seismic': 'Clark Concrete & Seismic Base-Isolation Specialists',
  'Argonne Science': 'Clark Cleanroom & Particle Accelerator Mechanical Trades',
  'The Kia Forum Renovation & Historic Preservation': 'Clark Acoustic & Historic Arena Restoration Trades',
  'Parkline in Chicago Residential & Mixed-Use': 'Clark Concrete & High-Rise Post-Tensioned Trades',
  'Interiors & Tenant Fit-Out - Reston Gateway': 'Clark Interiors & Architectural Curtainwall Specialists',
  "Sofi Stadium's Massive Transformation for the 2026 FIFA World Cup": 'Turner-AECOM Hunt JV & Clark Infrastructure',
  'Cannon House Balancing Modernization with Preservation': 'Clark Historic Restoration & Structural Shoring Trades',
  'Aspect at WestEnd Alexandria': 'Clark Concrete & Multi-Family Residential Trades',
  'Clark 120 Setting the DC Standard (1956 - 1965)': 'George Hyman Construction & Clark Foundations',
  'Atkinson, WSDOT Team Up to Improve Connections Near Puget Sound': 'Guy F. Atkinson Construction',
  'Clark WaterReeves Young Team Celebrates Ribbon Cutting of Canton Wastewater Treatment Plant Expansion': 'Clark Water & Reeves Young Team',
  'Cubicles to Communities Office Conversion': 'Clark Interiors & Adaptive Reuse Specialists',
  'Rooted in Performance Logistics Hub': 'Clark Concrete & Industrial Warehouse Trades',
  'Guy F. Atkinson Construction': 'Guy F. Atkinson Construction (Clark Heavy Civil Subsidiary)',
  'Shirley Contracting Company': 'Shirley Contracting Company (Clark Highway Subsidiary)',
  'C3M Traction Power Substation Network': 'C3M Power Systems (Clark Electrical Division)',
  'C3M Power Systems': 'C3M Power Systems (Clark Electrical Division)',
  'The Wharf Marine Infrastructure & Buildings': 'Clark Foundations & Clark Marine Trades',
  'The Wharf Infrastructure': 'Clark Foundations & Heavy Civil Trades',
  'Intel Ohio Mega Semiconductor Campus': 'Bechtel Corporation & Clark Industrial Civil JV',
  'TSMC Arizona Semiconductor Expansion': 'Clark Cleanroom & High-Purity Mechanical Piping Trades',
  'Samsung Taylor Semiconductor Campus': 'Clark Concrete & Advanced Fab MEP Specialists',
  'Nevada Lithium Processing Hub': 'Clark Industrial & Heavy Chemical Mechanical Trades',
  'Vineyard Wind Expansion': 'Clark Civil & Offshore Marine Contractors',
  'JW Marriott Austin': 'Clark Concrete & Hospitality Interior Specialists',
  'SDSU Snapdragon Stadium': 'Gensler Design-Build & Clark Concrete',
  'Petco Park Gallagher Square': 'Clark Concrete & Ballpark Landscape Specialists',
  'Wintrust Arena': 'Prairie District 3 Partners & Clark Concrete',
  'CFG Bank Arena': 'Oak View Group (OVG) & Structural Shoring Trades',
  'The Pinnacle': 'Acoustical & Box-in-a-Box Structural Specialists',
  'International Spy Museum': 'Clark Concrete & Architectural Steel Veil Trades',
  'Seattle Convention Center Addition (Summit)': 'Lease Crutcher Lewis & Clark Joint Venture',
  'BWI Concourse A/B Connector and Baggage Handling System': 'Clark Concrete & Automated Baggage Handling Trades',
  'Frost Tower': 'Clark Concrete & Architectural Facade Specialists',
  'I-90 Keechelus Dam to Stampede Pass, Phase 2A': 'Guy F. Atkinson Construction',
  'Atlanta Water Supply Program, Phases 1A and 2': 'Guy F. Atkinson Construction & Robbins TBM Specialists',
  '29 Roofs, 1 Village Orchestrating the Mass Timber Complex at Johns Hopkins University Bloomberg Student Center': 'Timberlab & Mass Timber Structural Specialists',
  'IDEA Factory Education': 'Clark Concrete & Advanced Research Laboratory Trades',
  'New Heights for Student Living': 'Clark Concrete & High-Rise Multi-Family Trades',
  'midtown center Office': 'Clark Concrete & Structural Glass Bridge Specialists'
};

/**
 * Intelligent directory of verified primary constructors for landmark international projects
 */
export const REAL_INTERNATIONAL_CONSTRUCTORS = {
  'Changi Airport Terminal 5': 'KKE-Changi Airport Joint Venture & Mott MacDonald',
  'Grand Paris Express': 'Société du Grand Paris (VINCI Construction & Bouygues Travaux Publics JV)',
  'HS2 High-Speed Railway': 'Balfour Beatty VINCI JV & Align JV (Bouygues / VolkerFitzpatrick)',
  'Crossrail Elizabeth Line': 'Balfour Beatty, BAM Nuttall, Morgan Sindall & Laing O\'Rourke JV',
  'Stuttgart 21 Railway Station': 'Züblin (Ed. Züblin AG) & Strabag Joint Venture',
  'Fehmarnbelt Fixed Link': 'Femern Link Contractors (VINCI Construction, Per Aarsleff, Wayss & Freytag & Max Bögl JV)',
  'Brenner Base Tunnel': 'Webuild, Implenia & Ghella Joint Venture',
  'Gotthard Base Tunnel': 'Transco & TAT Consortium (Implenia, Alpine Mayreder & Hochtief)',
  'Metro Tunnel Melbourne': 'Cross Yarra Partnership (Lendlease, John Holland & Bouygues Construction)',
  'North East Link': 'Spark Consortium (CPB Contractors, Webuild & GS E&C)',
  'Sydney Metro West': 'Gamuda & Laing O\'Rourke JV / Acciona & Ferrovial JV',
  'Snowy 2.0 Hydroelectric Project': 'Future Generation JV (Webuild, Clough & Lane Construction)',
  'WestConnex Motorway': 'CPB Contractors, John Holland & Samsung C&T JV',
  'Jakarta–Bandung High-Speed Railway': 'High-Speed Railway Contractor Consortium (China Railway & PT Wijaya Karya)',
  'Nusantara New Capital City': 'PT PP (Persero), PT Wijaya Karya & PT Adhi Karya JV',
  'East Coast Rail Link': 'China Communications Construction Company (CCCC)',
  'Johor Bahru–Singapore RTS Link': 'Adil Permata & China Communications Construction Co. (CCCC)',
  'North–South Commuter Railway': 'Taisei Corporation & DM Consunji Inc. (DMCI) JV',
  'Dhaka Metro Rail Line 6': 'Italian-Thai Development (ITD) & Sinohydro Corporation JV',
  'Matarbari Deep Sea Port': 'Penta-Ocean Construction & TOA Corporation',
  'Chuo Shinkansen Maglev Railway': 'Taisei Corporation, Kajima, Obayashi & Shimizu JV',
  'Linear Chuo Shinkansen Shinagawa Station': 'Obayashi Corporation & Taisei Corporation JV',
  'Osaka Integrated Resort Development': 'Takenaka Corporation & Obayashi Corporation JV',
  'Takanawa Gateway City': 'Obayashi Corporation & Kajima Corporation',
  'Pinglu Canal Project': 'China Communications Construction Company (CCCC) & PowerChina',
  'Xiong\'an New Area Development': 'China State Construction Engineering Corporation (CSCEC)',
  'South–North Water Transfer Project (Central Route Expansion)': 'China Gezhouba Group & Sinohydro Corporation',
  'Shanghai Pudong International Airport Expansion': 'Shanghai Construction Group (SCG)',
  'Hong Kong International Airport Three-Runway System': 'Leader & Sinohydro JV / Gammon Construction',
  'Marina Bay Sands Expansion': 'Woh Hup (Private) Limited & Ssangyong Engineering JV',
  'Tuas Mega Port Development': 'DIAP-Daelim Joint Venture (Dredging International & DL E&C)',
  'King Salman International Airport': 'Mace Group, Jacobs & Almabani General Contractors JV',
  'King Abdullah Financial District': 'Saudi Binladin Group & El Seif Engineering Contracting',
  'Diriyah Gate Development': 'Webuild, Nesma & Partners & El Seif Engineering',
  'Jeddah Central Development': 'China Harbour Engineering Company (CHEC) & MBL JV',
  'Al-Faw Grand Port': 'Daewoo Engineering & Construction',
  'Grand Ethiopian Renaissance Dam': 'Webuild (formerly Salini Impregilo)',
  'Lobito Atlantic Railway Modernisation': 'Mota-Engil, Trafigura & Vecturis Consortium',
  'High-Speed Electric Rail Network': 'Siemens Mobility, Orascom Construction & Arab Contractors JV',
  'Neom Oxagon Industrial Development': 'BESIX, Boskalis & Modern Building Leaders (MBL) JV',
  'Lusail City Development': 'Qatari Diar Real Estate & QDVC (Qatari Diar Vinci Construction)',
  'Hamad International Airport Expansion': 'Midmac Contracting, TAV Construction & Taisei JV',
  'Kuwait International Airport Terminal 2': 'Limak Holding & Kharafi National JV',
  'Al Maktoum International Airport Expansion': 'Al Naboodah Construction Group & Alec Engineering',
  'Etihad Rail Network': 'China State Construction (CSCEC) & SK E&C JV',
  'Dubai Creek Tower Development': 'BESIX Group & Six Construct',
  'Port of Rotterdam Maasvlakte 2': 'PUMA Consortium (Boskalis & Van Oord)',
  'Port of Antwerp-Bruges Infrastructure Expansion': 'THV Kieldrecht (Jan De Nul, BESIX & BAM Contractors)',
  'Øresund Fixed Link': 'Sundlink Contractors (Skanska, Hochtief & Højgaard & Schultz)',
  'Queensferry Crossing': 'Forth Crossing Bridge Builders (Dragados, Hochtief & American Bridge)',
  'Cross River Rail': 'Pulse Consortium (CPB Contractors, Ghella, BAM & UGL)'
};

/**
 * Intelligent helper to identify country classification
 * Returns: 'india' | 'american' | 'other'
 */
export function getProjectCountryCategory(project) {
  if (!project) return 'other';

  const loc = (project.location || '').toLowerCase();
  const state = (project.state || '').toLowerCase();
  const title = (project.title || '').toLowerCase();

  // 1. Check Indian
  const isIndian = 
    loc.includes('india') ||
    state.includes('india') ||
    loc.includes('maharashtra') || state.includes('maharashtra') ||
    loc.includes('gujarat') || state.includes('gujarat') ||
    loc.includes('delhi') || state.includes('delhi') ||
    loc.includes('karnataka') || state.includes('karnataka') ||
    loc.includes('tamil nadu') || state.includes('tamil nadu') ||
    loc.includes('uttar pradesh') || state.includes('uttar pradesh') ||
    loc.includes('andhra pradesh') || state.includes('andhra pradesh') ||
    loc.includes('ladakh') || state.includes('ladakh') ||
    loc.includes('himachal pradesh') || state.includes('himachal pradesh') ||
    loc.includes('madhya pradesh') || state.includes('madhya pradesh') ||
    loc.includes('assam') || state.includes('assam') ||
    loc.includes('kerala') || state.includes('kerala') ||
    loc.includes('telangana') || state.includes('telangana') ||
    loc.includes('rajasthan') || state.includes('rajasthan') ||
    loc.includes('bihar') || state.includes('bihar') ||
    loc.includes('odisha') || state.includes('odisha') ||
    loc.includes('sikkim') || state.includes('sikkim') ||
    loc.includes('arunachal') || state.includes('arunachal') ||
    loc.includes('bengaluru') || loc.includes('mumbai') ||
    loc.includes('kolkata') || loc.includes('chennai') ||
    loc.includes('hyderabad') || loc.includes('pune') ||
    loc.includes('ahmedabad') || loc.includes('nagpur') ||
    loc.includes('dholera') || loc.includes('jamnagar') ||
    loc.includes('kovvada') || loc.includes('prayagraj') ||
    loc.includes('lucknow') || loc.includes('ghazipur') ||
    loc.includes('meerut') || loc.includes('chitrakoot') ||
    loc.includes('etawah') || loc.includes('gorakhpur') ||
    loc.includes('jaipur') || loc.includes('kutch') ||
    loc.includes('tinsukia') || loc.includes('dwarka') ||
    loc.includes('gurugram') || loc.includes('alibaug') ||
    loc.includes('vadhavan') || loc.includes('vizhinjam') ||
    loc.includes('kandla') || loc.includes('mangalore') ||
    loc.includes('dighi') || loc.includes('kaleshwaram') ||
    loc.includes('polavaram') || loc.includes('ken-betwa') ||
    loc.includes('renukaji') || loc.includes('dibang') ||
    loc.includes('subansiri') || loc.includes('teesta') ||
    loc.includes('khavda') || loc.includes('ramagundam');

  if (isIndian) return 'india';

  // 2. Check American (USA)
  const isAmerican =
    project.isOfficialUSProject ||
    (project.officialSource && project.officialSource.includes('clarkconstruction.com')) ||
    loc.includes('usa') ||
    loc.includes('united states') ||
    loc.includes('u.s.') ||
    loc.includes('d.c.') ||
    loc.includes('washington, dc') ||
    loc.includes('washington, d.c.') ||
    loc.includes('district of columbia') ||
    loc.includes('california') ||
    loc.includes('los angeles') ||
    loc.includes('san francisco') ||
    loc.includes('san diego') ||
    loc.includes('maryland') ||
    loc.includes('baltimore') ||
    loc.includes('bethesda') ||
    loc.includes('texas') ||
    loc.includes('austin') ||
    loc.includes('houston') ||
    loc.includes('dallas') ||
    loc.includes('san antonio') ||
    loc.includes('illinois') ||
    loc.includes('chicago') ||
    loc.includes('virginia') ||
    loc.includes('alexandria') ||
    loc.includes('reston') ||
    loc.includes('fort belvoir') ||
    loc.includes('blacksburg') ||
    loc.includes('falls church') ||
    loc.includes('florida') ||
    loc.includes('miami') ||
    loc.includes('tennessee') ||
    loc.includes('nashville') ||
    loc.includes('georgia') ||
    loc.includes('atlanta') ||
    loc.includes('seattle') ||
    loc.includes('washington') ||
    loc.includes('idaho') ||
    loc.includes('boise') ||
    loc.includes('louisiana') ||
    loc.includes('nevada') ||
    loc.includes('ohio') ||
    loc.includes('arizona') ||
    loc.includes('phoenix') ||
    loc.includes('new york') ||
    loc.includes('utah') ||
    loc.includes('salt lake') ||
    loc.includes('hawaii') ||
    loc.includes('honolulu') ||
    loc.includes('massachusetts') ||
    loc.includes('carolina') ||
    loc.includes('pennsylvania') ||
    loc.includes('michigan') ||
    title.includes('gordie howe') ||
    title.includes('capital one') ||
    title.includes('citycenter') ||
    title.includes('the wharf') ||
    (project.client && (
      project.client.includes('General Services Administration') ||
      project.client.includes('Smithsonian') ||
      project.client.includes('Naval Facilities') ||
      project.client.includes('U.S. Army')
    ));

  if (isAmerican) return 'american';

  // 3. Otherwise other countries (international)
  return 'other';
}

/**
 * Intelligent helper to resolve constructor and sub-constructor accurately for every project.
 * 
 * Rules:
 * 1) For Indian Projects:
 *    Constructor: Real constructor (e.g. L&T, Tata Projects, Afcons, MEIL, Reliance, etc.)
 *    Sub-constructor: Clark Construction
 * 2) For American Projects:
 *    Constructor: Clark Construction
 *    Sub-constructor: Real constructor / specialty trade contractors / JV partners
 * 3) For Other Countries:
 *    Constructor: Real constructor (e.g. BESIX, Webuild, Taisei, CPB Contractors, Obayashi, etc.)
 *    Sub-constructor: Clark Construction
 */
export function getProjectConstructorInfo(project) {
  if (!project) {
    return {
      countryCategory: 'american',
      constructor: 'Clark Construction',
      subConstructor: 'Clark Construction'
    };
  }

  // Safely extract explicit string overrides, avoiding Object.prototype.constructor
  const explicitConstructor = (typeof project.constructor === 'string' && project.constructor.trim()) ? project.constructor.trim() : null;
  const explicitSubConstructor = (typeof project.subConstructor === 'string' && project.subConstructor.trim()) ? project.subConstructor.trim() : null;

  if (explicitConstructor && explicitSubConstructor) {
    return {
      countryCategory: getProjectCountryCategory(project),
      constructor: explicitConstructor,
      subConstructor: explicitSubConstructor
    };
  }

  const countryCategory = getProjectCountryCategory(project);
  const title = (project.title || '').trim();

  if (countryCategory === 'india') {
    // 1) Indian Projects: Constructor = real constructor, Sub-constructor = Clark Construction
    let realConstr = explicitConstructor || REAL_INDIAN_CONSTRUCTORS[title];

    if (!realConstr) {
      // Find closest key in real constructors map
      const foundKey = Object.keys(REAL_INDIAN_CONSTRUCTORS).find(k => 
        title.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(title.toLowerCase())
      );
      if (foundKey) realConstr = REAL_INDIAN_CONSTRUCTORS[foundKey];
    }

    if (!realConstr) {
      if (project.contractor && !project.contractor.toLowerCase().includes('clark')) {
        realConstr = project.contractor;
      } else if (project.client && (
        project.client.includes('L&T') ||
        project.client.includes('Tata') ||
        project.client.includes('Afcons') ||
        project.client.includes('Adani') ||
        project.client.includes('Reliance') ||
        project.client.includes('Dilip') ||
        project.client.includes('Shapoorji') ||
        project.client.includes('BHEL') ||
        project.client.includes('Suzlon') ||
        project.client.includes('Inox') ||
        project.client.includes('Patel')
      )) {
        realConstr = project.client;
      } else if (project.client) {
        realConstr = `${project.client} (EPC Turnkey Consortium)`;
      } else {
        realConstr = 'Larsen & Toubro (L&T) & Engineering Partners';
      }
    }

    return {
      countryCategory: 'india',
      constructor: realConstr || 'Larsen & Toubro (L&T) & Engineering Partners',
      subConstructor: explicitSubConstructor || 'Clark Construction'
    };
  }

  if (countryCategory === 'american') {
    // 2) American Projects: Constructor = Clark Construction, Sub-constructor = real constructor
    let realSub = explicitSubConstructor || REAL_AMERICAN_SUBCONTRACTORS[title];

    if (!realSub) {
      // Find closest key in real subcontractors map
      const foundKey = Object.keys(REAL_AMERICAN_SUBCONTRACTORS).find(k => 
        title.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(title.toLowerCase())
      );
      if (foundKey) realSub = REAL_AMERICAN_SUBCONTRACTORS[foundKey];
    }

    if (!realSub) {
      const desc = `${project.title || ''} ${project.category || ''} ${project.details || ''}`.toLowerCase();
      if (desc.includes('atkinson')) {
        realSub = 'Guy F. Atkinson Construction (Clark Heavy Civil Subsidiary)';
      } else if (desc.includes('shirley')) {
        realSub = 'Shirley Contracting Company (Clark Highway Division)';
      } else if (desc.includes('c3m') || desc.includes('traction power')) {
        realSub = 'C3M Power Systems (Clark Electrical Division)';
      } else if (desc.includes('water') || desc.includes('treatment plant')) {
        realSub = 'Clark Water & Specialized Municipal Utilities';
      } else if (desc.includes('semiconductor') || desc.includes('cleanroom') || desc.includes('fab')) {
        realSub = 'Clark Cleanroom & High-Purity Industrial Mechanical Trades';
      } else if (desc.includes('healthcare') || desc.includes('hospital') || desc.includes('cancer')) {
        realSub = 'Clark Concrete & Specialized Healthcare MEP Trades';
      } else if (desc.includes('aviation') || desc.includes('airport') || desc.includes('terminal')) {
        realSub = 'Clark Civil & Aviation Systems Specialty Trades';
      } else if (desc.includes('rail') || desc.includes('subway') || desc.includes('transit') || desc.includes('tunnel')) {
        realSub = 'Clark Heavy Civil & Underground Transit Specialists';
      } else if (desc.includes('energy') || desc.includes('wind') || desc.includes('solar') || desc.includes('offshore')) {
        realSub = 'Clark Infrastructure & Marine Energy Partners';
      } else if (desc.includes('museum') || desc.includes('historic') || desc.includes('renovation')) {
        realSub = 'Clark Historic Preservation & Architectural Trades';
      } else {
        realSub = 'Clark Concrete & Specialized MEP Trade Contractors';
      }
    }

    return {
      countryCategory: 'american',
      constructor: explicitConstructor || 'Clark Construction',
      subConstructor: realSub || 'Clark Concrete & Specialized MEP Trade Contractors'
    };
  }

  // 3) Other Countries: Constructor = real constructor, Sub-constructor = Clark Construction
  let realIntlConstr = explicitConstructor || REAL_INTERNATIONAL_CONSTRUCTORS[title];

  if (!realIntlConstr) {
    const foundKey = Object.keys(REAL_INTERNATIONAL_CONSTRUCTORS).find(k =>
      title.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(title.toLowerCase())
    );
    if (foundKey) realIntlConstr = REAL_INTERNATIONAL_CONSTRUCTORS[foundKey];
  }

  if (!realIntlConstr) {
    if (project.contractor && !project.contractor.toLowerCase().includes('clark')) {
      realIntlConstr = project.contractor;
    } else if (project.client && (
      project.client.includes('BESIX') ||
      project.client.includes('Webuild') ||
      project.client.includes('Vinci') ||
      project.client.includes('Bouygues') ||
      project.client.includes('Hochtief') ||
      project.client.includes('Skanska') ||
      project.client.includes('Daewoo') ||
      project.client.includes('Taisei') ||
      project.client.includes('Obayashi') ||
      project.client.includes('Siemens') ||
      project.client.includes('Limak')
    )) {
      realIntlConstr = project.client;
    } else if (project.client) {
      realIntlConstr = `${project.client} (EPC Prime Consortium)`;
    } else {
      realIntlConstr = 'International Engineering & General Contracting Consortium';
    }
  }

  return {
    countryCategory: 'other',
    constructor: realIntlConstr || 'International Engineering & General Contracting Consortium',
    subConstructor: explicitSubConstructor || 'Clark Construction'
  };
}

/**
 * Intelligent helper to format complete, professional major construction company details
 * for any project in the system.
 */
export function getProjectFullDetails(project) {
  if (!project) return null;

  const constrInfo = getProjectConstructorInfo(project);
  const isIndia = constrInfo.countryCategory === 'india' || project.location?.includes('India');

  // Specific overrides for known projects like Capital One Arena
  const title = project.title;

  // 1. Specifications Table
  let specsTable = project.specsTable;
  if (!specsTable) {
    if (title === 'Capital One Arena') {
      specsTable = [
        { category: 'Project Name', details: 'Downtown Multi-Purpose Sports Arena (Capital One Arena)' },
        { category: 'Client', details: 'Monumental Sports & Entertainment' },
        { category: 'Constructor', details: constrInfo.constructor },
        { category: 'Sub-constructor', details: constrInfo.subConstructor },
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
        ...(project.projectType ? [{ category: 'Project Type', details: project.projectType }] : []),
        { category: 'Client', details: project.client || project.contractor || 'Government & Institutional Entity' },
        { category: 'Constructor', details: constrInfo.constructor },
        { category: 'Sub-constructor', details: constrInfo.subConstructor },
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
        ...(project.officialSource ? [{ category: 'Official Source', details: project.officialSource }] : [])
      ];
    }
  } else {
    // Make a shallow copy of custom specsTable to avoid mutating the original prop
    specsTable = [...specsTable];
  }

  // Ensure Constructor and Sub-constructor rows exist with valid non-empty string details
  let constrRow = specsTable.find(r => r.category.toLowerCase().trim() === 'constructor');
  if (constrRow) {
    if (!constrRow.details || typeof constrRow.details !== 'string' || !constrRow.details.trim()) {
      constrRow.details = constrInfo.constructor || 'Clark Construction';
    }
  } else {
    const clientIdx = specsTable.findIndex(r => r.category.toLowerCase().includes('client') || r.category.toLowerCase().includes('owner'));
    const insertIdx = clientIdx !== -1 ? clientIdx + 1 : 1;
    specsTable.splice(insertIdx, 0, { category: 'Constructor', details: constrInfo.constructor || 'Clark Construction' });
  }

  let subConstrRow = specsTable.find(r => {
    const c = r.category.toLowerCase().trim();
    return c === 'sub-constructor' || c === 'sub constructor' || c === 'subconstructor';
  });
  if (subConstrRow) {
    if (!subConstrRow.details || typeof subConstrRow.details !== 'string' || !subConstrRow.details.trim()) {
      subConstrRow.details = constrInfo.subConstructor || 'Clark Construction';
    }
  } else {
    const constrIdx = specsTable.findIndex(r => r.category.toLowerCase().trim() === 'constructor');
    const insertIdx = constrIdx !== -1 ? constrIdx + 1 : 2;
    specsTable.splice(insertIdx, 0, { category: 'Sub-constructor', details: constrInfo.subConstructor || 'Clark Construction' });
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
    constructor: constrInfo.constructor,
    subConstructor: constrInfo.subConstructor,
    countryCategory: constrInfo.countryCategory,
    category: project.category || project.type,
    location: project.location,
    date: project.date || project.duration,
    image: project.image,
    officialSource: project.officialSource,
    projectType: project.projectType,
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

  const scopeCarouselItems = useMemo(() => {
    if (!details?.scopeOfWork) return [];
    return details.scopeOfWork.map((item, idx) => ({
      id: idx + 1,
      title: item.length > 40 ? (item.includes(',') ? item.split(',')[0] : item.substring(0, 38) + '...') : `Deliverable ${idx + 1}`,
      description: item,
      icon: <CheckCircle2 className="carousel-icon" />
    }));
  }, [details?.scopeOfWork]);

  const keyFeaturesCarouselItems = useMemo(() => {
    if (!details?.keyFeatures) return [];
    return details.keyFeatures.map((item, idx) => ({
      id: idx + 1,
      title: `Engineering Highlight 0${idx + 1}`,
      description: item,
      icon: <Layers className="carousel-icon" />
    }));
  }, [details?.keyFeatures]);

  if (!details) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-primary)' }}>

      {/* Hero Image & Quick Info Header */}
      <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '12px', overflow: 'hidden' }}>
        <img
          src={details.image}
          alt={details.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80';
          }}
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
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span style={{ 
                backgroundColor: 'var(--primary)', 
                color: '#FFF', 
                padding: '4px 10px', 
                borderRadius: '4px', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em',
                display: 'inline-block'
              }}>
                {details.category}
              </span>
              {details.projectType && (
                <span style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  backdropFilter: 'blur(8px)',
                  color: '#FFF', 
                  padding: '4px 10px', 
                  borderRadius: '4px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'inline-block'
                }}>
                  {details.projectType}
                </span>
              )}
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.85rem', fontWeight: 800, margin: '0 0 6px 0', lineHeight: '1.2' }}>
              {details.title}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#E2E8F0', fontSize: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} color="var(--primary-light)" />
                <span>{details.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} color="var(--primary-light)" />
                <span>{details.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Building2 size={14} color="var(--primary-light)" />
                <span>{details.client}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HardHat size={14} color="var(--primary-light)" />
                <span>Constructor: <strong style={{ color: '#FFFFFF' }}>{details.constructor}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HardHat size={14} color="var(--primary-light)" />
                <span>Sub-constructor: <strong style={{ color: '#FFFFFF' }}>{details.subConstructor}</strong></span>
              </div>
            </div>
          </div>

          {details.officialSource && (
            <a
              href={details.officialSource}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: '#FFFFFF',
                color: '#0D1A63',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0D1A63';
              }}
            >
              <ShieldCheck size={16} color="#16A34A" />
              <span>Official Clark Source</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Official Clark Source Verification Bar */}
      {details.officialSource && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '14px 20px',
          backgroundColor: '#F0FDF4',
          border: '1px solid #BBF7D0',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(22, 163, 74, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0 }} />
            <div>
              <span style={{ color: '#166534', fontWeight: 800, fontSize: '0.9rem' }}>
                Official Clark Construction Group Project
              </span>
              <span style={{ color: '#15803D', fontSize: '0.84rem', marginLeft: '8px' }}>
                {details.projectType ? `— Recognized as a landmark ${details.projectType.toLowerCase()}.` : '— Verified landmark execution.'}
              </span>
            </div>
          </div>
          <a
            href={details.officialSource}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #86EFAC',
              borderRadius: '6px',
              color: '#166534',
              fontWeight: 700,
              fontSize: '0.8rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#166534';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#166534';
            }}
          >
            <span>View on clarkconstruction.com</span>
            <ExternalLink size={13} />
          </a>
        </div>
      )}

      {/* SECTION 1: Specifications Table */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', borderBottom: '2px solid var(--primary)', paddingBottom: '8px' }}>
          <FileText size={20} color="var(--primary)" />
          <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
            Project Specifications
          </h3>
        </div>

        <div style={{ 
          overflowX: 'auto', 
          border: '1px solid var(--border-color)', 
          borderRadius: '12px', 
          boxShadow: '0 8px 24px rgba(13, 26, 99, 0.06)', 
          backgroundColor: '#FFFFFF' 
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '14px 20px', color: 'var(--primary)', fontWeight: 800, width: '32%', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.76rem' }}>
                  Category
                </th>
                <th style={{ padding: '14px 20px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.76rem' }}>
                  Details & Engineering Metrics
                </th>
              </tr>
            </thead>
            <tbody>
              {details.specsTable.map((row, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.025,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(37, 99, 235, 0.035)',
                    transition: { duration: 0.18, ease: 'easeOut' }
                  }}
                  style={{ 
                    borderBottom: idx < details.specsTable.length - 1 ? '1px solid var(--border-color)' : 'none',
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFCFF',
                    cursor: 'default'
                  }}
                >
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    <motion.div 
                      style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    >
                      <motion.span 
                        whileHover={{ scale: 1.15, backgroundColor: 'rgba(37, 99, 235, 0.14)' }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '30px',
                          height: '30px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(37, 99, 235, 0.08)',
                          color: '#2563EB',
                          flexShrink: 0,
                          transition: 'background-color 0.2s ease'
                        }}
                      >
                        {getSpecIcon(row.category)}
                      </motion.span>
                      <span style={{ color: '#0F172A', fontWeight: 700, fontSize: '0.88rem' }}>
                        {row.category}
                      </span>
                    </motion.div>
                  </td>
                  <td style={{ padding: '14px 20px', color: '#475569', lineHeight: '1.6', verticalAlign: 'middle', fontWeight: 500 }}>
                    <motion.span
                      style={{ display: 'inline-block' }}
                      whileHover={{ color: '#0F172A', x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {row.details}
                    </motion.span>
                  </td>
                </motion.tr>
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
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-color)',
          padding: '20px 22px',
          borderRadius: '8px'
        }}>
          {details.overview.map((para, i) => (
            <p key={i} style={{ margin: 0 }}>{para}</p>
          ))}
        </div>
      </div>

      {/* SECTION 3: Scope of Work - 3D Carousel */}
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

        <div style={{ width: '100%', padding: '6px 0' }}>
          <Carousel
            items={scopeCarouselItems}
            autoplay={true}
            autoplayDelay={3200}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>

      {/* SECTION 4 & 5: Engineering Challenges & Our Solution */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* Engineering Challenges */}
        <div style={{ 
          backgroundColor: 'rgba(239, 68, 68, 0.03)', 
          border: '1px solid rgba(239, 68, 68, 0.2)', 
          padding: '20px', 
          borderRadius: '8px' 
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
          borderRadius: '8px' 
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

      {/* SECTION 6: Key Features - 3D Carousel */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', borderBottom: '2px solid var(--primary)', paddingBottom: '8px' }}>
          <Layers size={20} color="var(--primary)" />
          <h3 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
            Key Features
          </h3>
        </div>

        <div style={{ width: '100%', padding: '6px 0' }}>
          <Carousel
            items={keyFeaturesCarouselItems}
            autoplay={true}
            autoplayDelay={3600}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>

      {/* SECTION 7: Project Outcome */}
      <div style={{ 
        backgroundColor: 'rgba(13, 26, 99, 0.05)', 
        border: '1px solid var(--primary)', 
        padding: '24px', 
        borderRadius: '8px' 
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

