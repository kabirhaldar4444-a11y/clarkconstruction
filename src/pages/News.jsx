import React, { useState } from 'react';
import { 
  Search, Calendar, BookOpen, Download, ExternalLink, Mail, ChevronRight
} from 'lucide-react';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';

// Local Assets for Featured News
import VanBurenImg from '../assets/Clark Construction Mobilizes at 566 West Van Buren.png';
import AspectWestEndImg from '../assets/Aspect at WestEnd Alexandria.jpg';
import RootedInPerformanceImg from '../assets/Rooted in Performance Logistics Hub.jpg';

// Local Assets for All Articles
import CannonHouseImg from '../assets/Cannon House Balancing Modernization with Preservation.png';
import Clark120Img from '../assets/Clark 120 Setting the DC Standard (1956 - 1965).png';
import AtkinsonWSDOTImg from "../assets/Atkinson, WSDOT Team Up to Improve Connections Near Puget Sound Atkinson Construction,.png";
import StudentLivingImg from '../assets/New Heights for Student Living.png';
import CantonWastewaterImg from '../assets/Clark WaterReeves Young Team Celebrates Ribbon Cutting of Canton Wastewater Treatment Plant Expansion.png';
import MassTimberImg from '../assets/29 Roofs, 1 Village Orchestrating the Mass Timber Complex at Johns Hopkins University Bloomberg Student Center.png';
import SofiStadiumImg from "../assets/Sofi Stadium's Massive Transformation for the 2026 FIFA World Cup In preparation for the 2026 FIFA World Cup,.png";
import SuicideRiskImg from '../assets/Addressing Risk of Suicide in Construction.png';
import CubiclesToCommunitiesImg from '../assets/Cubicles to Communities Office Conversion.jpg';

// Local Assets for Extra Articles
import SafetyAwardImg from '../assets/trade_contractors_safety.png';
import AirportRunwayImg from '../assets/airport.jpg';
import StrategicPartnershipImg from '../assets/trade_contractors_hero.png';

// Hero Asset
import NewsHeroImg from '../assets/Market hero image.png';

const FEATURED_NEWS = [
  {
    id: "feat-1",
    title: "Clark Construction Mobilizes at 566 West Van Buren",
    date: "June 23, 2026",
    category: "Featured News",
    image: VanBurenImg,
    summary: "Chicago, IL – Clark Construction has commenced construction on 566 West Van Buren, a new 12-story multifamily residential tower in Chicago's West Loop Gate neighborhood, partnering with Riverside Investment & Development, Blue Star Properties, Atlantic Residential, and Metropolis Investment Holdings.",
    content: "Chicago, IL – Clark Construction has commenced construction on 566 West Van Buren, a new 12-story multifamily residential tower in Chicago's West Loop Gate neighborhood, partnering with the development team of Riverside Investment & Development, Blue Star Properties, Atlantic Residential, and Metropolis Investment Holdings. The project will feature state-of-the-art residential amenities, high-efficiency building systems, and robust structural layouts designed to integrate seamlessly into Chicago's active urban environment."
  },
  {
    id: "feat-2",
    title: "CFP Breaks Ground on Aspect, the First Residential Building at WestEnd Alexandria",
    date: "June 11, 2026",
    category: "Featured News",
    image: AspectWestEndImg,
    summary: "Alexandria, VA - On June 8, CFP, a division of Clark Construction, and developer Foulger-Pratt joined Alexandria Mayor Alyia Gaskins, Howard Hughes Communities, and Silverstein Properties to celebrate the start of work on Aspect at WestEnd in Alexandria, Virginia.",
    content: "Alexandria, VA - On June 8, CFP, a division of Clark Construction, and developer Foulger-Pratt joined Alexandria Mayor Alyia Gaskins, Howard Hughes Communities, and Silverstein Properties to celebrate the start of work on Aspect at WestEnd in Alexandria, Virginia. The groundbreaking ceremony marks the official commencement of a multi-phase development that will provide mixed-use residential opportunities, local parks, and sustainable green structures to the growing northern Virginia corridor."
  },
  {
    id: "feat-3",
    title: "Rooted in Performance: Crafting World-Class Athletic Fields",
    date: "May 05, 2026",
    category: "Featured News",
    image: RootedInPerformanceImg,
    summary: "Delivering elite athletic fields requires more than laying sod or installing turf; it demands a deep understanding of performance standards, site logistics, and sport-specific needs.",
    content: "Delivering elite athletic fields requires more than laying sod or installing turf; it demands a deep understanding of performance standards, site logistics, and sport-specific needs. Our team integrates sub-grade soil analytics, precision watering and drainage grids, and advanced root systems. This ensures that sports complexes and fields can withstand high impact, retain color, and optimize drainage during heavy weather, setting a new standard for athletic turf engineering."
  }
];

const ALL_ARTICLES = [
  {
    id: 1,
    title: "Cannon House: Balancing Modernization with Preservation",
    date: "July 01, 2026",
    topic: "Building with Purpose",
    contentType: "Blog",
    image: CannonHouseImg,
    summary: "Balancing strict preservation guidelines with contemporary utility codes on one of Washington's historic landmarks.",
    content: "Balancing modernization with preservation at the Cannon House Office Building requires meticulous planning and coordination. The project team is systematically replacing MEP systems, reinforcing structural elements, and restoring historic masonry and stone facades. This ensures the building matches contemporary safety, ADA compliance, and utility codes, while keeping its architectural integrity intact for generations to come."
  },
  {
    id: 2,
    title: "Clark 120: Setting the DC Standard (1956 - 1965)",
    date: "June 15, 2026",
    topic: "Our People",
    contentType: "Video",
    image: Clark120Img,
    summary: "A historical retrospective highlighting Clark's construction milestones that shaped Washington DC's mid-century skyline.",
    content: "As part of our Clark 120 retrospective, we examine the critical decade of 1956 to 1965, where Clark Construction undertook monumental projects that defined the modern DC skyline. From heavy highway links to iconic government complexes, our teams laid the physical foundations of corporate and public progress, establishing a legacy of safety and structural quality."
  },
  {
    id: 3,
    title: "Atkinson, WSDOT Team Up to Improve Connections Near Puget Sound",
    date: "June 08, 2026",
    topic: "Markets",
    contentType: "Blog",
    image: AtkinsonWSDOTImg,
    summary: "Atkinson Construction partners with WSDOT on highway expansion contracts to ease traffic congestion in Washington.",
    content: "Atkinson Construction, a Clark Group company, is partnering with the Washington State Department of Transportation (WSDOT) on key corridor improvements near Puget Sound. The scope of work includes widening lanes, constructing concrete flyover supports, and grading sub-bases. This project will significantly improve safety and transit times for thousands of commuters daily."
  },
  {
    id: 4,
    title: "New Heights for Student Living: UC Berkeley Bancroft Student Housing Breaks Ground",
    date: "May 25, 2026",
    topic: "Building with Purpose",
    contentType: "Press Releases",
    image: StudentLivingImg,
    summary: "Breaking ground on the Bancroft Student Housing complex to deliver sustainable, modern student living spaces.",
    content: "UC Berkeley and Clark Construction have officially broken ground on the new Bancroft Student Housing development. The structural timber-framed building will provide eco-friendly, modern living spaces for over 800 students. Equipped with solar roof panels, mass timber framing, and green water retention loops, the building targets LEED Gold certification."
  },
  {
    id: 5,
    title: "Clark Water/Reeves Young Team Celebrates Ribbon Cutting of Canton Wastewater Treatment Plant Expansion",
    date: "May 18, 2026",
    topic: "Awards",
    contentType: "Press Releases",
    image: CantonWastewaterImg,
    summary: "Celebrating the ribbon cutting of the Canton Wastewater Plant expansion, boosting filtration capacity.",
    content: "The joint venture team of Clark Water and Reeves Young celebrated the official ribbon cutting of the Canton Wastewater Treatment Plant expansion. The project involved constructing massive concrete aeration basins, setting up advanced filtration tanks, and integrating smart flow control systems, doubling the local wastewater processing capacity."
  },
  {
    id: 6,
    title: "29 Roofs, 1 Village: Orchestrating the Mass Timber Complex at Johns Hopkins University Bloomberg Student Center",
    date: "April 20, 2026",
    topic: "Building with Purpose",
    contentType: "Blog",
    image: MassTimberImg,
    summary: "How Clark teams coordinated 29 separate mass timber roof systems to construct the Bloomberg Student Center.",
    content: "Constructing the Johns Hopkins University Bloomberg Student Center involved a complex structural task: orchestrating 29 separate mass timber roof structures. By modeling the timber trusses virtually in BIM, our VDC teams resolved over 300 trade coordination clashes prior to delivery. This allowed field crews to hoist and bolt the massive wooden structures on schedule."
  },
  {
    id: 7,
    title: "Sofi Stadium's Massive Transformation for the 2026 FIFA World Cup",
    date: "April 12, 2026",
    topic: "Markets",
    contentType: "In The Media",
    image: SofiStadiumImg,
    summary: "Clark Construction modifies SoFi Stadium's structural components to meet FIFA field dimensions and standards.",
    content: "In preparation for the 2026 FIFA World Cup, Clark is leading the structural modifications at SoFi Stadium in Los Angeles. The scope involves adjusting lower bowl seating decks, expanding concrete tunnel entries, and laying specialized grass turf support trays. This ensures the arena matches soccer regulations while maintaining its status as a premier multi-sport venue."
  },
  {
    id: 8,
    title: "Addressing Risk of Suicide in Construction",
    date: "March 29, 2026",
    topic: "Our People",
    contentType: "In The Media",
    image: SuicideRiskImg,
    summary: "Clark participates in national panels to promote mental health resources and site support networks.",
    content: "Addressing mental health is a vital priority in the construction industry. Clark Construction is actively participating in national safety panels, integrating peer-to-peer counseling programs, and training site managers to identify signs of stress. Our 'Be Kind to Your Mind' initiative connects workers with 24/7 confidential counseling services."
  },
  {
    id: 9,
    title: "Cubicles to Communities",
    date: "March 15, 2026",
    topic: "Building with Purpose",
    contentType: "Blog",
    image: CubiclesToCommunitiesImg,
    summary: "How office-to-residential conversions are transforming urban city centers into mixed-use neighborhoods.",
    content: "Transforming empty urban office towers into residential buildings is the next frontier of city planning. Clark's interiors and residential divisions are managing multiple conversions, modifying core utility lines, creating light wells, and adding residential amenities like bar lounges and shared rooftop gardens, turning vacant cubicles into communities."
  }
];

const EXTRA_ARTICLES = [
  {
    id: 10,
    title: "Safety Standard Excellence Award Received at National Conference",
    date: "February 28, 2026",
    topic: "Awards",
    contentType: "Press Releases",
    image: SafetyAwardImg,
    summary: "Clark receives AGC safety awards for our nationwide zero-accident construction milestones.",
    content: "At the National Construction Safety Conference, Clark Construction was awarded the Safety Excellence Shield. With over 3 million cumulative hours logged across multiple high-rise and civil contracts without an OSHA recordable incident, this award highlights our commitment to putting field safety first, every single day."
  },
  {
    id: 11,
    title: "Clark Infrastructure Commences Sub-grade Earthwork for Airport Runway Expansion",
    date: "February 12, 2026",
    topic: "Markets",
    contentType: "Press Releases",
    image: AirportRunwayImg,
    summary: "Heavy equipment crews begin grading and utilities setup for airport tarmac extensions.",
    content: "Our heavy civil division has mobilized grading operations for the regional airport runway expansion project. Crews are installing deep underground storm utilities, reinforcing sub-grade base aggregate, and setting up laser-guided concrete paving machinery to extend the main runway by 2,500 feet while keeping airport operations active."
  },
  {
    id: 12,
    title: "Strategic Partnership Program Commences Enrolling for Winter Session",
    date: "January 20, 2026",
    topic: "Small Business Inclusion",
    contentType: "Blog",
    image: StrategicPartnershipImg,
    summary: "Small businesses can now apply to join our upcoming executive construction training cohort.",
    content: "Enrollment is now officially open for the Winter cohort of the Clark Strategic Partnership Program (SPP). Small, minority-, women-, and veteran-owned specialty trade contractors can submit details to receive 9 months of classroom and hands-on instruction from Clark estimators and finance directors, positioning their firms for smart growth."
  }
];

const TOPICS = ["All", "Awards", "Building with Purpose", "Giving Back", "Markets", "Our People", "Small Business Inclusion"];
const CONTENT_TYPES = ["All", "Blog", "In The Media", "Press Releases", "Video"];

export default function News() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState(ALL_ARTICLES);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);

  const handleLoadMore = () => {
    setArticles([...ALL_ARTICLES, ...EXTRA_ARTICLES]);
    setHasLoadedMore(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter logic
  const filteredArticles = articles.filter(art => {
    const matchesTopic = selectedTopic === "All" || art.topic === selectedTopic;
    const matchesType = selectedType === "All" || art.contentType === selectedType;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesType && matchesSearch;
  });

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={NewsHeroImg}
            alt="Clark corporate building skyline"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Chronicles & Press
            </span>
            <h1 className="page-hero-title">News</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              Access our latest press releases, blog posts, videos, and media coverage.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
              <Button href="https://clrk.cc/Fact-Sheet-2026" target="_blank" variant="primary">
                Company Fact Sheet
              </Button>
              <a 
                href="#media-inquiries" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('media-inquiries')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(var(--primary-rgb), 0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-white)',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-white)';
                }}
              >
                Media Inquiries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <span className="subtitle-amber">Featured Stories</span>
            <h2 style={{ fontSize: '2.5rem' }}>Featured News</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {FEATURED_NEWS.map((feat) => (
              <div 
                key={feat.id} 
                onClick={() => setActiveArticle(feat)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-normal)',
                  boxShadow: 'var(--shadow-premium)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow), var(--shadow-premium)';
                  const img = e.currentTarget.querySelector('.feat-img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
                  const img = e.currentTarget.querySelector('.feat-img');
                  if (img) img.style.transform = 'none';
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="feat-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-slow)' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'var(--primary)',
                    color: '#FFF',
                    padding: '4px 12px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    zIndex: 2
                  }}>
                    {feat.category}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to top, rgba(8, 10, 16, 0.7) 0%, transparent 60%)',
                    zIndex: 1
                  }} />
                </div>

                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '12px' }}>
                    <Calendar size={12} color="var(--primary)" />
                    <span>{feat.date}</span>
                  </div>
                  
                  <h3 style={{ color: 'var(--text-white)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '14px', lineHeight: '1.4' }}>
                    {feat.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                    {feat.summary}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--primary)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}>
                    <span>Read More</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid Feed with Filters */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          
          {/* Header & Search Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
            <div>
              <span className="subtitle-amber">News Feed</span>
              <h2 style={{ fontSize: '2.5rem' }}>All Articles</h2>
            </div>
            
            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search by keywords..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 48px',
                  backgroundColor: 'var(--bg-deep)',
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

          {/* Filters Selection Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            backgroundColor: 'var(--bg-deep)',
            border: '1px solid var(--border-color)',
            padding: '24px',
            borderRadius: '6px',
            marginBottom: '40px'
          }}>
            {/* Topic Filter */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Filter By Topic
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-white)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="All" style={{ color: 'var(--text-white)', backgroundColor: 'var(--bg-card)' }}>All Topics</option>
                {TOPICS.slice(1).map((top) => (
                  <option key={top} value={top} style={{ color: 'var(--text-white)', backgroundColor: 'var(--bg-card)' }}>{top}</option>
                ))}
              </select>
            </div>

            {/* Content Type Filter */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Filter By Content Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-white)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="All" style={{ color: 'var(--text-white)', backgroundColor: 'var(--bg-card)' }}>All Content Types</option>
                {CONTENT_TYPES.slice(1).map((type) => (
                  <option key={type} value={type} style={{ color: 'var(--text-white)', backgroundColor: 'var(--bg-card)' }}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid Layout of Articles */}
          {filteredArticles.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '30px',
              marginBottom: '50px'
            }}>
              {filteredArticles.map((art) => (
                <div 
                  key={art.id} 
                  className="animate-slide-up"
                  onClick={() => setActiveArticle(art)}
                  style={{
                    backgroundColor: 'var(--bg-deep)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    const img = e.currentTarget.querySelector('.art-grid-img');
                    if (img) img.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'none';
                    const img = e.currentTarget.querySelector('.art-grid-img');
                    if (img) img.style.transform = 'none';
                  }}
                >
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={art.image}
                      alt={art.title}
                      className="art-grid-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-slow)' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(8, 10, 16, 0.75)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--primary)',
                      padding: '4px 10px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      zIndex: 2
                    }}>
                      {art.contentType}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      background: 'linear-gradient(to top, rgba(8, 10, 16, 0.6) 0%, transparent 60%)',
                      zIndex: 1
                    }} />
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{art.date}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>• &nbsp; {art.topic}</span>
                    </div>

                    <h3 style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px', lineHeight: '1.4' }}>
                      {art.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5', flexGrow: 1 }}>
                      {art.summary}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--primary)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '14px',
                      marginTop: '16px'
                    }}>
                      <span>Read More</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: 'var(--bg-deep)', borderRadius: '6px', border: '1px solid var(--border-color)', marginBottom: '50px' }}>
              <BookOpen size={44} style={{ color: 'var(--text-muted)', marginBottom: '16px', opacity: 0.5 }} />
              <h3 style={{ color: 'var(--text-white)', marginBottom: '8px' }}>No News Matches Found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Try refining your keywords or updating your filter selections.</p>
            </div>
          )}

          {/* Load More Button */}
          {!hasLoadedMore && filteredArticles.length > 0 && (
            <div style={{ textAlign: 'center' }}>
              <Button onClick={handleLoadMore} variant="secondary" size="lg">
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Media Inquiries CTA */}
      <section id="media-inquiries" className="section-padding" style={{ backgroundColor: 'var(--bg-deep)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <span className="subtitle-amber">PR Contacts</span>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '16px' }}>Media Inquiries</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.6' }}>
            For media inquiries, please contact our Corporate Communications team.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={Mail}>
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Article Detail Modal */}
      <Modal
        isOpen={activeArticle !== null}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.contentType || "Article"}
        maxWidth="720px"
      >
        {activeArticle && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Modal Image */}
            <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '4px', overflow: 'hidden' }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(8, 10, 16, 0.8) 0%, transparent 80%)'
              }} />
            </div>

            <div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {activeArticle.topic || "Company News"}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{activeArticle.date}</span>
              </div>
              
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.6rem', fontWeight: 800, lineHeight: '1.3' }}>
                {activeArticle.title}
              </h3>
            </div>

            <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {activeArticle.content}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '10px' }}>
              <Button onClick={() => setActiveArticle(null)} variant="primary">
                Back to Board
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

