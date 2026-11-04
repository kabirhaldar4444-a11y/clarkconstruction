import React, { useState, useMemo } from 'react';
import { 
  Search, Calendar, BookOpen, Download, ExternalLink, Mail, 
  ChevronRight, ArrowRight, Tag, Clock, Filter, X, Sparkles, Video, FileText, Newspaper
} from 'lucide-react';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';
import RealisticBlinkingEye from '../components/UI/RealisticBlinkingEye';

// Local Assets for Featured News
import VanBurenImg from '../assets/The 78 Chicago Development.jpg';
import AspectWestEndImg from '../assets/Aspect at WestEnd Alexandria.jpg';
import RootedInPerformanceImg from '../assets/Washington Nationals Ballpark (Nationals Park).png';

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
  const filteredArticles = useMemo(() => {
    return articles.filter(art => {
      const matchesTopic = selectedTopic === "All" || art.topic === selectedTopic;
      const matchesType = selectedType === "All" || art.contentType === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        art.title.toLowerCase().includes(q) || 
        art.summary.toLowerCase().includes(q) ||
        (art.topic && art.topic.toLowerCase().includes(q));
      return matchesTopic && matchesType && matchesSearch;
    });
  }, [articles, selectedTopic, selectedType, searchQuery]);

  const hasActiveFilters = selectedTopic !== "All" || selectedType !== "All" || searchQuery.trim() !== "";

  const resetFilters = () => {
    setSelectedTopic("All");
    setSelectedType("All");
    setSearchQuery("");
  };

  // Helper to pick type icon
  const getTypeIcon = (type) => {
    switch (type) {
      case "Video": return <Video size={13} />;
      case "Press Releases": return <FileText size={13} />;
      case "In The Media": return <ExternalLink size={13} />;
      default: return <Newspaper size={13} />;
    }
  };

  return (
    <div>
      {/* Scoped News Styles */}
      <style>{`
        /* Hero Lead Story Card */
        .featured-lead-card {
          display: flex;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 28px;
        }

        .featured-lead-card:hover {
          transform: translateY(-4px);
          border-color: #2563EB;
          box-shadow: 0 20px 45px -10px rgba(13, 26, 99, 0.16), 0 4px 14px rgba(37, 99, 235, 0.14);
        }

        .featured-lead-card:hover .lead-img {
          transform: scale(1.05);
        }

        .featured-lead-img-wrap {
          flex: 0 0 52%;
          position: relative;
          min-height: 380px;
          overflow: hidden;
          background: #071038;
        }

        .lead-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .featured-lead-content {
          flex: 1;
          padding: 40px 44px;
          display: flex;
          flex-direction: column;
          justifyContent: center;
        }

        /* Companion Feature Cards */
        .featured-sub-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .featured-sub-card:hover {
          transform: translateY(-4px);
          border-color: #2563EB;
          box-shadow: 0 16px 36px -8px rgba(13, 26, 99, 0.14), 0 4px 12px rgba(37, 99, 235, 0.12);
        }

        .featured-sub-card:hover .sub-img {
          transform: scale(1.06);
        }

        .sub-img-wrap {
          height: 240px;
          position: relative;
          overflow: hidden;
          background: #071038;
        }

        .sub-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* News Feed Card */
        .news-article-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--shadow-premium);
        }

        .news-article-card:hover {
          transform: translateY(-4px);
          border-color: #2563EB;
          box-shadow: 0 16px 32px -8px rgba(13, 26, 99, 0.12), 0 4px 10px rgba(37, 99, 235, 0.1);
        }

        .news-article-card:hover .feed-img {
          transform: scale(1.06);
        }

        .news-article-card:hover .feed-title {
          color: #2563EB;
        }

        .feed-img-wrap {
          height: 200px;
          position: relative;
          overflow: hidden;
          background: #071038;
        }

        .feed-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Filter Pills */
        .filter-pill-btn {
          border-radius: 999px;
          padding: 8px 18px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid var(--border-color);
          background: #FFFFFF;
          color: var(--text-primary);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .filter-pill-btn:hover {
          border-color: #2563EB;
          color: #2563EB;
          background: rgba(37, 99, 235, 0.04);
        }

        .filter-pill-btn.active {
          background: #0D1A63;
          border-color: #0D1A63;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(13, 26, 99, 0.22);
        }

        /* Action Link with Arrow */
        .action-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #2563EB;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .action-link-arrow .arr-icon {
          transition: transform 0.2s ease;
        }

        .featured-lead-card:hover .action-link-arrow .arr-icon,
        .featured-sub-card:hover .action-link-arrow .arr-icon,
        .news-article-card:hover .action-link-arrow .arr-icon {
          transform: translateX(4px);
        }

        @media (max-width: 920px) {
          .featured-lead-card {
            flex-direction: column !important;
          }

          .featured-lead-img-wrap {
            flex: none;
            width: 100%;
            height: 260px;
            min-height: 260px;
          }

          .featured-lead-content {
            padding: 26px 20px;
          }
        }
      `}</style>

      {/* Page Hero - Editorial Header */}
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
              Chronicles & Press Room
            </span>
            <h1 className="page-hero-title">News & Insights</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              Access our latest press releases, blog posts, videos, and media coverage across nationwide developments.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '24px' }}>
              <Button 
                href="https://clrk.cc/Fact-Sheet-2026" 
                target="_blank" 
                variant="primary" 
                icon={Download}
                style={{
                  backgroundColor: '#0D1A63',
                  borderColor: '#0D1A63',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(13, 26, 99, 0.2)'
                }}
              >
                Company Fact Sheet
              </Button>
              <button 
                type="button"
                onClick={() => {
                  document.getElementById('media-inquiries')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #0D1A63',
                  color: '#0D1A63',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(13, 26, 99, 0.08)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0D1A63';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#0D1A63';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(13, 26, 99, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0D1A63';
                  e.currentTarget.style.borderColor = '#0D1A63';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(13, 26, 99, 0.08)';
                }}
              >
                <Mail size={16} />
                <span>Media Inquiries</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section - Editorial Magazine Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="subtitle-amber">Featured Stories</span>
              <h2 style={{ fontSize: '2.4rem', margin: '4px 0 0 0' }}>Spotlight Coverage</h2>
            </div>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Curated architectural & project milestones
            </span>
          </div>

          {/* Lead Story Card (#1 - Van Buren) */}
          <div 
            onClick={() => setActiveArticle(FEATURED_NEWS[0])}
            className="featured-lead-card"
          >
            <div className="featured-lead-img-wrap">
              <img
                src={FEATURED_NEWS[0].image}
                alt={FEATURED_NEWS[0].title}
                className="lead-img"
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(7, 16, 56, 0.75) 0%, rgba(7, 16, 56, 0.15) 50%, transparent 100%)'
              }} />

              {/* Category Tag Top-Left */}
              <div style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                backgroundColor: 'rgba(13, 26, 99, 0.9)',
                backdropFilter: 'blur(8px)',
                color: '#93C5FD',
                padding: '5px 14px',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderRadius: '999px',
                border: '1px solid rgba(147, 197, 253, 0.3)'
              }}>
                Lead Feature
              </div>

              {/* Date Bottom-Left */}
              <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E2E8F0',
                fontSize: '0.82rem',
                fontWeight: 600,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(6px)',
                padding: '4px 12px',
                borderRadius: '6px'
              }}>
                <Calendar size={14} color="#60A5FA" />
                <span>{FEATURED_NEWS[0].date}</span>
              </div>
            </div>

            <div className="featured-lead-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563EB', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                <Sparkles size={14} />
                <span>Major Urban Mobilization</span>
              </div>

              <h3 style={{ color: 'var(--text-white)', fontSize: '1.85rem', fontWeight: 800, marginBottom: '16px', lineHeight: '1.3' }}>
                {FEATURED_NEWS[0].title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '28px' }}>
                {FEATURED_NEWS[0].summary}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Chicago West Loop
                </span>
                <button
                  className="view-capabilities-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveArticle(FEATURED_NEWS[0]);
                  }}
                >
                  <RealisticBlinkingEye size={17} color="#FFFFFF" />
                  <span>Read Full Story</span>
                  <ArrowRight size={14} className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* Companion Stories Grid (#2 & #3) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {FEATURED_NEWS.slice(1).map((feat) => (
              <div 
                key={feat.id} 
                onClick={() => setActiveArticle(feat)}
                className="featured-sub-card"
              >
                <div className="sub-img-wrap">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="sub-img"
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to top, rgba(7, 16, 56, 0.7) 0%, transparent 60%)'
                  }} />

                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(13, 26, 99, 0.88)',
                    backdropFilter: 'blur(6px)',
                    color: '#93C5FD',
                    padding: '4px 12px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    borderRadius: '999px',
                    border: '1px solid rgba(147, 197, 253, 0.25)'
                  }}>
                    {feat.category}
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#E2E8F0',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(6px)',
                    padding: '3px 10px',
                    borderRadius: '4px'
                  }}>
                    <Calendar size={13} color="#60A5FA" />
                    <span>{feat.date}</span>
                  </div>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ color: 'var(--text-white)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px', lineHeight: '1.38' }}>
                    {feat.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '22px', flexGrow: 1 }}>
                    {feat.summary}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Clark Portfolio
                    </span>
                    <span className="action-link-arrow">
                      <span>Explore Article</span>
                      <ArrowRight size={14} className="arr-icon" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Grid Feed with Advanced Modern Filters */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          
          {/* Master Toolbar */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '24px 28px',
            boxShadow: 'var(--shadow-premium)',
            marginBottom: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Top Toolbar Row: Heading & Search */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <span className="subtitle-amber">News Feed & Archives</span>
                <h2 style={{ fontSize: '1.85rem', margin: '4px 0 0 0' }}>All Publications</h2>
              </div>

              {/* Enhanced Search Input */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
                <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
                <input
                  type="text"
                  placeholder="Search articles by title or keyword..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  style={{
                    width: '100%',
                    padding: '11px 40px 11px 44px',
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
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>

            {/* Middle Toolbar Row: Content Type Segmented Switch */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '16px'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Content Format:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {CONTENT_TYPES.map((type) => {
                  const isSelected = selectedType === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        border: isSelected ? '1px solid #2563EB' : '1px solid var(--border-color)',
                        backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.1)' : '#FFFFFF',
                        color: isSelected ? '#2563EB' : 'var(--text-primary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {getTypeIcon(type)}
                      <span>{type}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Toolbar Row: Topic Filter Pills */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '16px'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Topic Focus:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {TOPICS.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`filter-pill-btn ${isSelected ? 'active' : ''}`}
                    >
                      <span>{topic}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Filters Summary */}
            {hasActiveFilters && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(37, 99, 235, 0.05)',
                border: '1px solid rgba(37, 99, 235, 0.15)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.84rem'
              }}>
                <span style={{ color: '#0D1A63', fontWeight: 600 }}>
                  Showing <strong>{filteredArticles.length}</strong> matching articles
                </span>
                <button
                  onClick={resetFilters}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2563EB',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.82rem'
                  }}
                >
                  <X size={14} /> Clear Active Filters
                </button>
              </div>
            )}
          </div>

          {/* Grid Layout of Articles */}
          {filteredArticles.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '30px',
              marginBottom: '50px'
            }}>
              {filteredArticles.map((art) => (
                <div 
                  key={art.id} 
                  className="news-article-card"
                  onClick={() => setActiveArticle(art)}
                >
                  {/* Article Thumbnail */}
                  <div className="feed-img-wrap">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="feed-img"
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      background: 'linear-gradient(to top, rgba(7, 16, 56, 0.6) 0%, transparent 60%)'
                    }} />

                    {/* Content Format Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(13, 26, 99, 0.9)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      {getTypeIcon(art.contentType)}
                      <span>{art.contentType}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '12px' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#2563EB',
                        backgroundColor: 'rgba(37, 99, 235, 0.08)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        letterSpacing: '0.05em'
                      }}>
                        {art.topic}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: '#64748B' }}>
                        <Calendar size={12} color="#64748B" />
                        <span>{art.date}</span>
                      </div>
                    </div>

                    <h3 className="feed-title" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px', lineHeight: '1.38', color: 'var(--text-white)', transition: 'color 0.2s ease' }}>
                      {art.title}
                    </h3>

                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {art.summary}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '16px',
                      marginTop: 'auto'
                    }}>
                      <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Clark Chronicles
                      </span>
                      <span className="action-link-arrow">
                        <span>Read Article</span>
                        <ArrowRight size={13} className="arr-icon" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '50px' }}>
              <BookOpen size={48} style={{ color: '#64748B', marginBottom: '16px', opacity: 0.5 }} />
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '8px', fontWeight: 700 }}>No News Matches Found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>Try refining your keywords or clearing your active filter selections.</p>
              <Button onClick={resetFilters} variant="secondary" size="sm">
                Reset Filters
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {!hasLoadedMore && filteredArticles.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button onClick={handleLoadMore} variant="secondary" size="lg" icon={ChevronRight} iconPosition="right">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Media Inquiries CTA - Enterprise Callout Banner */}
      <section id="media-inquiries" className="section-padding" style={{ backgroundColor: '#071038', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            color: '#93C5FD',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 800,
            marginBottom: '12px',
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            border: '1px solid rgba(147, 197, 253, 0.3)',
            padding: '4px 14px',
            borderRadius: '999px'
          }}>
            PR & Communications Hub
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#FFFFFF', fontWeight: 800 }}>Media Inquiries</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '32px', fontSize: '1.05rem', lineHeight: '1.7' }}>
            For press coverage, executive interview coordinates, or publication assets, please contact our dedicated Corporate Communications team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg" 
              icon={Mail}
              style={{ backgroundColor: '#2563EB', borderColor: '#2563EB', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)' }}
            >
              Contact Media Team
            </Button>
            <Button href="https://clrk.cc/Fact-Sheet-2026" target="_blank" variant="secondary" size="lg" icon={Download}>
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <Modal
        isOpen={activeArticle !== null}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.contentType || "Article"}
        maxWidth="740px"
      >
        {activeArticle && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {/* Modal Image */}
            <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(7, 16, 56, 0.85) 0%, transparent 75%)'
              }} />

              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                padding: '4px 12px',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}>
                {activeArticle.contentType || "Press Release"}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', backgroundColor: 'rgba(37, 99, 235, 0.08)', padding: '3px 10px', borderRadius: '4px' }}>
                  {activeArticle.topic || "Company News"}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{activeArticle.date}</span>
              </div>
              
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.75rem', fontWeight: 800, lineHeight: '1.3' }}>
                {activeArticle.title}
              </h3>
            </div>

            <p style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: '1.75' }}>
              {activeArticle.content}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '18px', marginTop: '6px' }}>
              <Button onClick={() => setActiveArticle(null)} variant="primary">
                Back to News
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
