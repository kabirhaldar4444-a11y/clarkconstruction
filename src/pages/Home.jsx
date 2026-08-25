import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Award, Star, HardHat, HeartHandshake, Zap, Factory, Train, Building2, Compass, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import ProjectDetailView from '../components/UI/ProjectDetailView';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import DepthCarousel from '../components/UI/DepthCarousel';
import CircleGallery from '../components/UI/CircleGallery';
import RailwayMetroImg from '../assets/railway_metro_projects.png';
import NaviMumbaiAirportImg from '../assets/airport.jpg';
import ChenabBridgeImg from '../assets/Chenab Rail Bridge  USBRL.jpg';
import DMICImg from '../assets/Delhi-Mumbai Industrial Corridor (DMIC).png';
import BharatmalaImg from '../assets/Bharatmala Pariyojna.jpg';
import TataSemiconductorImg from '../assets/Tata Electronics Semiconductor Facility.png';
import HeroSlide1Img from '../assets/home_hero_slide1.jpg';
import HeroSlide2Img from '../assets/home_hero_slide2.jpg';
import HeroSlide3Img from '../assets/home_hero_slide3.jpg';
import HeroSlide4Img from '../assets/home_hero_slide4.jpg';
import HeroSlide6Img from '../assets/home_hero_slide6.jpg';
import CapitalOneArenaImg from '../assets/Capital One Arena.jpg';
import TheWharfImg from '../assets/The Wharf (Phase 1 & 2).jpg';
import LAXMidfieldImg from '../assets/LAX Midfield Satellite Concourse.jpg';
import ClarkCivilImg from '../assets/Clark Civil.png';
import download from '../assets/download.png';
import ClarkConcreteImg from '../assets/Clark Concrete.png';
import ClarkWaterImg from '../assets/Clark Water.png';
import CareersHeroImg from '../assets/careers_hero.png';
import TradeHeroImg from '../assets/trade_contractors_hero.png';
import TradeSafetyImg from '../assets/trade_contractors_safety.png';
import IntelOhioImg from '../assets/Intel Ohio Mega Semiconductor Campus.jpg';
import MidtownCenterImg from '../assets/midtown center Office.png';
import FBICentralRobotsImg from '../assets/FBI Central Records Complex robots Technology.png';
import ClarkFoundationsImg from '../assets/Clark Foundations.png';
import C3MPowerImg from '../assets/C3M Power Systems.png';
import CrossRiverRailImg from '../assets/cross river rail.png';

const SERVICES_ITEMS = [
  {
    id: 1,
    image: ClarkCivilImg,
    tag: 'Virtual Design',
    subtitle: '01. Phase Planning',
    title: 'Preconstruction & VDC',
    description: 'We run cost estimates, material stress analyses, and virtual reality BIM simulations to uncover site hazards and reduce budget deviations before ground breaking.',
    link: '/services'
  },
  {
    id: 2,
    image: ClarkConcreteImg,
    tag: 'Heavy Construction',
    subtitle: '02. Core Execution',
    title: 'General Contracting',
    description: 'Overseeing site teams, scheduling subcontractors, enforcing quality parameters, and deploying heavy machinery to construct bridges, mass transit systems, and skyscrapers.',
    link: '/services'
  },
  {
    id: 3,
    image: ClarkWaterImg,
    tag: 'LEED Strategy',
    subtitle: '03. Green Building',
    title: 'Sustainability Consulting',
    description: 'Deploying carbon-capturing foundations, setting up solar energy grids, organizing water reclamation structures, and guaranteeing certification under official LEED frameworks.',
    link: '/services'
  },
  {
    id: 4,
    image: FBICentralRobotsImg,
    tag: 'Automation & AI',
    subtitle: '04. Smart Systems',
    title: 'Clark Technologies & BIM',
    description: 'Autonomous robotics, automated material tracking, 4D construction timeline monitoring, and precision laser scanning for complex high-security facilities.',
    link: '/services'
  },
  {
    id: 5,
    image: IntelOhioImg,
    tag: 'Industrial Mega-Sites',
    subtitle: '05. High-Tech Execution',
    title: 'Semiconductor & Cleanrooms',
    description: 'Ultra-pure vibration-isolated cleanrooms, high-voltage substations, chemical logistics systems, and mega-scale semiconductor fab construction.',
    link: '/services'
  },
  {
    id: 6,
    image: MidtownCenterImg,
    tag: 'Adaptive Interiors',
    subtitle: '06. Commercial Fit-Out',
    title: 'Interiors & Modernization',
    description: 'Architectural finishes, structural mass timber retrofits, acoustic ceilings, high-end tenant fit-outs, and rapid seismic modernization.',
    link: '/services'
  },
  {
    id: 7,
    image: CrossRiverRailImg,
    tag: 'Mobility & Rail',
    subtitle: '07. Infrastructure',
    title: 'Civil Transit & Bridges',
    description: 'Subterranean rail tunneling, high-speed rail lines, elevated highway interchanges, and complex long-span bridge construction.',
    link: '/services'
  },
  {
    id: 8,
    image: ClarkFoundationsImg,
    tag: 'Deep Geotechnical',
    subtitle: '08. Subsurface Engineering',
    title: 'Foundations & Shoring',
    description: 'Slurry diaphragm walls, secant piling, ground freezing, micropiles, and deep seismic base-isolation foundation systems.',
    link: '/services'
  },
  {
    id: 9,
    image: C3MPowerImg,
    tag: 'Power & Grid',
    subtitle: '09. Renewable Energy',
    title: 'Clean Energy & Traction',
    description: 'Traction power substations, utility-scale battery energy storage systems (BESS), solar/wind interconnects, and high-voltage grid works.',
    link: '/services'
  }
];

const HERO_SLIDES = [
  {
    image: HeroSlide1Img,
    title: 'Building Modern Infrastructure',
    subtitle: 'ENGINEERING EXCELLENCE SINCE 1976',
    description: 'We construct commercial towers, state-of-the-art airports, and vital transit structures with unmatched precision.',
    ctaText: 'View Our Projects',
    ctaLink: '/projects',
  },
  {
    image: HeroSlide2Img,
    title: 'Designing Smarter Spaces',
    subtitle: 'INNOVATIVE DESIGN-BUILD SERVICES',
    description: 'Using BIM virtual construction technologies to minimize project risk, control cost, and maximize environmental efficiency.',
    ctaText: 'Explore Services',
    ctaLink: '/services',
  },
  {
    image: HeroSlide3Img,
    title: 'Pioneering Sustainable Building',
    subtitle: 'LEED CERTIFIED GREEN INFRASTRUCTURE',
    description: 'Empowering future generations with energy-neutral developments, carbon-neutral concrete, and eco-friendly construction cycles.',
    ctaText: 'Sustainability Commitment',
    ctaLink: '/sustainability',
  },
  {
    image: HeroSlide4Img,
    title: 'Transforming Urban Transit Networks',
    subtitle: 'HEAVY CIVIL & MASS TRANSIT',
    description: 'Delivering high-capacity rail lines, tunnel borings, and complex highway interchanges that connect communities seamlessly.',
    ctaText: 'Explore Infrastructure',
    ctaLink: '/our-work/markets',
  },
  {
    image: HeroSlide6Img,
    title: 'Building What Matters for Communities',
    subtitle: 'CIVIC, HEALTHCARE & EDUCATION',
    description: 'From flagship medical complexes to landmark national museums, we build resilient public structures that stand the test of time.',
    ctaText: 'Learn About Clark',
    ctaLink: '/about',
  }
];

const TESTIMONIALS = [
  {
    quote: "Clark Construction delivered our 45-story commercial tower ahead of schedule and under budget. Their preconstruction estimators saved us millions in structural steel adjustments through virtual BIM simulations.",
    author: "Sarah Jenkins",
    role: "VP of Development, Beacon Capital Group",
    stars: 5
  },
  {
    quote: "Their safety protocols on our airport terminal expansion were outstanding. With over 1.5 million man-hours logged, they maintained a zero-incident safety record. Truly professional.",
    author: "Robert Miller",
    role: "Director of Facilities, Seattle Transit Authority",
    stars: 5
  },
  {
    quote: "Clark Construction's commitment to sustainable green building was the core reason we selected them. They achieved LEED Platinum status for our medical center while integrating complex HVAC units.",
    author: "Dr. Amanda Ross",
    role: "Chief Operating Officer, Northwest Healthcare Network",
    stars: 5
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('safety');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  // Auto-slide Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* 1. HERO SLIDER BANNER - SAAS PLATFORM AESTHETIC */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '680px', overflow: 'hidden', backgroundColor: '#071038' }}>
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 2s ease-out',
              zIndex: currentSlide === index ? 2 : 1
            }}
          >
            {/* Background Image - Original vibrant architectural image */}
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Natural High-Tech Text Vignette */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to right, rgba(7, 16, 56, 0.88) 0%, rgba(7, 16, 56, 0.55) 45%, rgba(7, 16, 56, 0.1) 85%), linear-gradient(to top, rgba(7, 16, 56, 0.75) 0%, transparent 40%)',
                zIndex: 1
              }} />
            </div>

            {/* Left-Aligned Crisp Hero Content */}
            <div className="container" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingBottom: '60px',
              zIndex: 3
            }}>
              <div 
                className="animate-slide-up"
                style={{ 
                  maxWidth: '750px'
                }}
              >
                {/* Hero subtitle */}
                <div style={{ marginBottom: '16px' }}>
                  <span className="subtitle-amber" style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 800 }}>
                    {slide.subtitle}
                  </span>
                </div>

                {/* Headline */}
                <h1 style={{
                  fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)',
                  lineHeight: '1.12',
                  marginBottom: '20px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em'
                }}>
                  {slide.title}
                </h1>

                {/* Description */}
                <p style={{
                  color: '#CBD5E1',
                  fontSize: '1.12rem',
                  lineHeight: '1.7',
                  marginBottom: '36px',
                  maxWidth: '620px'
                }}>
                  {slide.description}
                </p>

                {/* Clean SaaS Action Buttons */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button 
                    to={slide.ctaLink} 
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    style={{
                      backgroundColor: '#2563EB',
                      borderColor: '#2563EB',
                      boxShadow: '0 4px 18px rgba(37, 99, 235, 0.35)'
                    }}
                  >
                    {slide.ctaText}
                  </Button>
                  <Button 
                    to="/contact" 
                    variant="glass"
                    size="lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      color: '#FFFFFF'
                    }}
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Slider Controls Bar (Bottom Left & Right) */}
        <div className="container" style={{
          position: 'absolute',
          bottom: '95px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          {/* SaaS Slide Counter Pill */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '14px', 
            backgroundColor: 'rgba(7, 16, 56, 0.65)', 
            backdropFilter: 'blur(12px)',
            padding: '8px 18px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            pointerEvents: 'auto' 
          }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.06em' }}>
              {String(currentSlide + 1).padStart(2, '0')} <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>/ {String(HERO_SLIDES.length).padStart(2, '0')}</span>
            </span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: currentSlide === index ? '28px' : '10px',
                    height: '3px',
                    borderRadius: '2px',
                    backgroundColor: currentSlide === index ? '#38BDF8' : 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  title={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slider Prev / Next Arrows */}
          <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto' }}>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(7, 16, 56, 0.65)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.borderColor = '#2563EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(7, 16, 56, 0.65)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(7, 16, 56, 0.65)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.borderColor = '#2563EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(7, 16, 56, 0.65)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION - SAAS BENTO METRICS BAR */}
      <section style={{ position: 'relative', zIndex: 10, marginTop: '-50px', padding: '0 24px' }}>
        <div className="container" style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-mercury)',
          padding: '32px 28px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            {[
              { label: 'Completed Projects', value: 480, suffix: '+', prefix: '', tag: 'Verified Delivery' },
              { label: 'Accident-Free Hours', value: 1.5, suffix: 'M', prefix: '', tag: 'Zero-Incident Target' },
              { label: 'LEED Certified Sites', value: 75, suffix: '+', prefix: '', tag: 'Eco-Compliant' },
              { label: 'Years of Integrity', value: 50, suffix: '', prefix: '', tag: 'Enterprise Trust' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="stat-col"
                style={{ 
                  borderRight: i < 3 ? '1px solid var(--border-color)' : 'none',
                  padding: '12px 16px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span className="saas-dot" style={{ backgroundColor: '#2563EB' }}></span>
                  <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {stat.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '3.1rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '2px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} duration={2200} />
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION - SAAS MODULAR BENTO */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Visual Bento Element */}
          <div className="img-overlay-wrapper" style={{ height: '490px', position: 'relative', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <img
              src={download}
              alt="Clark Construction engineering team on active site"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Floating SaaS Badge */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-color)',
              padding: '12px 20px',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-mercury)',
              zIndex: 4,
              textAlign: 'center'
            }}>
              <span style={{ display: 'block', fontSize: '1.6rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>50+</span>
              <span style={{ fontSize: '0.68rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.06em' }}>Years of Quality</span>
            </div>

            {/* Bottom Platform Specs Drawer */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              backgroundColor: 'rgba(7, 16, 56, 0.94)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '20px 24px',
              borderRadius: '10px',
              zIndex: 3,
              boxShadow: '0 12px 30px rgba(0,0,0,0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="saas-dot-green"></span>
                <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 700, margin: 0 }}>Built to Last Standard</h4>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '0.84rem', lineHeight: '1.5', margin: 0 }}>
                Every pillar we cast and steel beam we rivet is backed by a legacy of zero compromising on security, timeline, or environmental footprint.
              </p>
            </div>
          </div>

          {/* Right Text & Bento Feature Grid */}
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '18px', lineHeight: '1.18', letterSpacing: '-0.025em' }}>
              Shaping Tomorrow's Horizons with Rigor and Craft
            </h2>
            <p style={{ color: 'var(--text-primary)', marginBottom: '24px', fontSize: '0.98rem', lineHeight: '1.7' }}>
              Founded on the values of safety, transparency, and innovation, Clark Construction is a leading heavy civil construction, commercial design-build, and development company. We deliver complex infrastructure solutions across Aviation, Healthcare, transit lines, and sustainable residential communities.
            </p>
            
            {/* Core Values Bento Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '32px' }}>
              {[
                { title: 'LiDAR & VDC Workflow', desc: 'Minimizing risk using drone telemetry and BIM models.' },
                { title: 'Zero-Incident Standard', desc: 'Rigorous safety routines resulting in zero active site injuries.' },
                { title: 'Low-Carbon Building', desc: 'Pioneering eco-friendly concrete and LEED consulting.' },
                { title: 'Legacy of Trust', desc: 'Delivering infrastructure projects since 1976.' }
              ].map((val, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid var(--border-color)', 
                  padding: '14px 16px', 
                  borderRadius: '8px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ color: '#2563EB', fontWeight: 900, fontSize: '0.9rem' }}>✓</span>
                    <h5 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-white)', margin: 0 }}>{val.title}</h5>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: '1.4', margin: 0 }}>{val.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button to="/about" variant="primary" icon={ArrowRight} iconPosition="right">
                Learn About Clark
              </Button>
              <Button to="/services" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 3.5. GOVERNMENT & INSTITUTIONAL PARTNERSHIP IN INDIA - 3D FLYING POSTERS */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Column: Details & Project Selector */}
          <div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '14px', lineHeight: '1.2', letterSpacing: '-0.025em' }}>
              Government & Institutional Partnership in India
            </h2>
            
            <p style={{ color: 'var(--text-primary)', marginBottom: '24px', fontSize: '0.96rem', lineHeight: '1.6' }}>
              Strategic collaborations driving national development and infrastructure modernization across the Republic of India.
            </p>

            {/* List of projects as SaaS Segmented Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {[
                {
                  id: 0,
                  title: 'Railway and Metro projects',
                  desc: 'Historically well known for Delhi Metro consulting roles and similar work on other rail/metro programs.',
                  metric: 'Transit Consulting & PM',
                  partner: 'Delhi Metro Rail Corp',
                  location: 'Delhi NCR & Pan-India',
                  icon: <Train size={18} />
                },
                {
                  id: 1,
                  title: 'Navi Mumbai International Airport',
                  desc: 'Major greenfield international airport development including multi-level passenger terminals.',
                  metric: '60M+ Annual Passenger Capacity',
                  partner: 'Airport Authority of India',
                  location: 'Navi Mumbai, Maharashtra, India',
                  icon: <ShieldCheck size={18} />
                },
                {
                  id: 2,
                  title: 'Chenab Rail Bridge (USBRL)',
                  desc: 'Structural steel erection and engineering supervision for the world\'s highest railway arch bridge.',
                  metric: '359m Above River Bed',
                  partner: 'Northern Railways & USBRL',
                  location: 'Jammu & Kashmir, India',
                  icon: <Award size={18} />
                }
              ].map((project) => {
                const isActive = activeProject === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    onMouseEnter={() => setActiveProject(project.id)}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      padding: '16px 18px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? '#F8FAFC' : '#FFFFFF',
                      border: isActive ? '1px solid #2563EB' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      alignItems: 'flex-start',
                      boxShadow: isActive ? '0 4px 14px rgba(37, 99, 235, 0.12)' : 'none'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: isActive ? '#2563EB' : 'rgba(13, 26, 99, 0.06)',
                      color: isActive ? '#FFF' : 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}>
                      {project.icon}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ 
                        fontSize: '1.05rem', 
                        color: 'var(--text-white)', 
                        marginBottom: '4px', 
                        fontWeight: 700,
                      }}>
                        {project.title}
                      </h4>
                      <p style={{ color: '#64748B', fontSize: '0.86rem', lineHeight: '1.5', margin: 0 }}>
                        {project.desc}
                      </p>
                      
                      {/* Sub metrics details */}
                      <div style={{
                        maxHeight: isActive ? '50px' : '0',
                        opacity: isActive ? '1' : '0',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                        marginTop: isActive ? '8px' : '0',
                        display: 'flex',
                        gap: '20px',
                        fontSize: '0.75rem'
                      }}>
                        <div>
                          <span style={{ color: '#94A3B8', display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 700 }}>Capacity / Scope</span>
                          <span style={{ color: '#2563EB', fontWeight: 800 }}>{project.metric}</span>
                        </div>
                        <div>
                          <span style={{ color: '#94A3B8', display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 700 }}>Key Partner</span>
                          <span style={{ color: 'var(--text-white)', fontWeight: 700 }}>{project.partner}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button to="/about/india-partnerships" variant="text" icon={ArrowRight} iconPosition="right">
              Read More
            </Button>
          </div>

          {/* Right Column: 3D DepthCarousel Showcase (Floating in Open Air) */}
          <div style={{ 
            height: '490px', 
            position: 'relative',
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible'
          }}>
            {/* DepthCarousel Component Floating in Air */}
            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
              <DepthCarousel
                items={[
                  { image: RailwayMetroImg, alt: 'Railway and Metro projects' },
                  { image: NaviMumbaiAirportImg, alt: 'Navi Mumbai International Airport' },
                  { image: ChenabBridgeImg, alt: 'Chenab Rail Bridge (USBRL)' }
                ]}
                depth={220}
                spread={85}
                tilt={22}
                tiltDirection="right"
                perspective={1400}
                visibleCards={3}
                falloff={0.2}
                blur={5}
                cardWidth={300}
                cardHeight={360}
                autoplay={true}
                autoplayDelay={3200}
                loop={true}
                showControls={true}
                showIndicators={true}
                onChange={(index) => setActiveProject(index)}
              />
            </div>

            {/* Dynamic Floating Telemetry Card */}
            <div style={{
              width: '100%',
              maxWidth: '440px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '14px 20px',
              zIndex: 3500,
              boxShadow: 'var(--shadow-mercury)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px'
            }}>
              <div>
                <span style={{ fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', display: 'block', fontWeight: 700, letterSpacing: '0.06em' }}>Location</span>
                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem' }}>
                  {activeProject === 0 && 'Delhi NCR & Pan-India'}
                  {activeProject === 1 && 'Navi Mumbai, Maharashtra, India'}
                  {activeProject === 2 && 'Jammu & Kashmir, India'}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', display: 'block', fontWeight: 700, letterSpacing: '0.06em' }}>Sub Contractor</span>
                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem' }}>Clark Construction</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICES OVERVIEW - 3D CIRCLE GALLERY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 30px auto' }}>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '12px', letterSpacing: '-0.025em' }}>Services Crafted for Complexity</h2>
            <p style={{ color: '#64748B', fontSize: '0.96rem' }}>
              From initial planning and environmental checks to casting final foundations, we manage the entire project lifecycle with engineering excellence.
            </p>
          </div>

          <CircleGallery
            items={SERVICES_ITEMS}
            radius={450}
            depth={160}
            cardWidth={250}
            cardHeight={325}
            autoRotate={true}
            autoRotateSpeed={0.28}
          />

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Button to="/services" variant="outline" size="lg" icon={ArrowRight} iconPosition="right">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (SEGMENTED CONTROL TABS) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Column: Info & Tabs */}
          <div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px', letterSpacing: '-0.025em' }}>Building Safely, Constructing Responsibly</h2>
            <p style={{ color: 'var(--text-primary)', marginBottom: '24px', fontSize: '0.96rem' }}>
              We set industry benchmarks by choosing safety first, using smart tech integration, and driving circular sustainability forward.
            </p>

            {/* Tab buttons as SaaS Segmented List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'safety', label: 'Uncompromised Site Safety', icon: <ShieldCheck size={18} /> },
                { id: 'quality', label: 'Digital Quality Control (VDC)', icon: <Award size={18} /> },
                { id: 'sustain', label: 'Ecosystem Sustainability', icon: <HeartHandshake size={18} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    width: '100%',
                    padding: '16px 20px',
                    textAlign: 'left',
                    background: activeTab === tab.id ? '#FFFFFF' : 'var(--bg-deep)',
                    border: activeTab === tab.id ? '1px solid #2563EB' : '1px solid var(--border-color)',
                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    boxShadow: activeTab === tab.id ? '0 4px 14px rgba(37, 99, 235, 0.12)' : 'none'
                  }}
                >
                  <span style={{ color: activeTab === tab.id ? '#2563EB' : 'var(--text-muted)' }}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content sheet */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-color)',
            padding: '38px',
            borderRadius: '14px',
            boxShadow: 'var(--shadow-mercury)',
            minHeight: '290px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {activeTab === 'safety' && (
              <div className="animate-fade">
                <HardHat size={34} color="#2563EB" style={{ marginBottom: '14px' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.35rem', marginBottom: '10px', fontWeight: 800 }}>Zero-Incident Commitment</h3>
                <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: '1.7', margin: 0 }}>
                  Safety is not a checkbox; it is our operational culture. Every site layout is modeled virtually to identify fall, crush, or electrocution hazards before real tools are touched. We hold daily toolbox talks, enforce PPE rules, and employ site coordinators tracking real-time telemetry.
                </p>
              </div>
            )}
            {activeTab === 'quality' && (
              <div className="animate-fade">
                <ShieldCheck size={34} color="#2563EB" style={{ marginBottom: '14px' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.35rem', marginBottom: '10px', fontWeight: 800 }}>VDC Tolerances to the Millimeter</h3>
                <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: '1.7', margin: 0 }}>
                  We utilize drone topography sweeps and LiDAR laser scanning on-site to compare active structures against raw CAD models. This prevents misalignment errors in plumbing, electrical mains, and core load paths, ensuring high quality control.
                </p>
              </div>
            )}
            {activeTab === 'sustain' && (
              <div className="animate-fade">
                <HeartHandshake size={34} color="#2563EB" style={{ marginBottom: '14px' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.35rem', marginBottom: '10px', fontWeight: 800 }}>Green Building Frameworks</h3>
                <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: '1.7', margin: 0 }}>
                  By specifying low-hydration concrete, recycling 85% of site waste products, and harvesting graywater on-site, we help client systems meet decarbonization requirements and secure tax advantages under regional environmental laws.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 6. FEATURED PROJECTS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '45px' }}>
            <div>
              <h2 style={{ fontSize: '2.4rem', margin: 0, letterSpacing: '-0.025em' }}>Built With Precision</h2>
            </div>
            <Button to="/projects" variant="primary" icon={ArrowRight} iconPosition="right">
              View All Project Case Studies
            </Button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}>
            {[
              {
                title: 'Capital One Arena',
                desc: 'Construction of the premier indoor sports and entertainment venue directly above an active Metro station hub.',
                image: CapitalOneArenaImg,
                tag: 'Commercial & Mixed-Use',
                loc: 'Washington, D.C.'
              },
              {
                title: 'The Wharf (Phase 1 & 2)',
                desc: 'A massive waterfront destination containing residential, hotel, marina, and concert halls along the Potomac.',
                image: TheWharfImg,
                tag: 'Commercial & Mixed-Use',
                loc: 'Washington, D.C.'
              },
              {
                title: 'LAX Midfield Satellite Concourse',
                desc: 'A modern multi-level concourse terminal featuring 12 gates connected via underground passenger tunnels.',
                image: LAXMidfieldImg,
                tag: 'Aviation & Infrastructure',
                loc: 'Los Angeles, CA'
              }
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <Card 
                  image={p.image} 
                  title={p.title} 
                  subtitle={p.tag} 
                  tag={p.loc} 
                  hoverEffect="zoom"
                  onClick={() => setModalProject(p)}
                >
                  <p style={{ marginBottom: '14px' }}>{p.desc}</p>
                  <Button variant="text" size="sm" onClick={() => setModalProject(p)}>
                    View Full Details &rarr;
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '32px', letterSpacing: '-0.025em' }}>What Our Partners Say</h2>

          <div style={{
            position: 'relative',
            backgroundColor: 'var(--bg-deep)',
            border: '1px solid var(--border-color)',
            padding: '50px 40px',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-premium)',
            overflow: 'hidden'
          }}>
            {/* Background quotation mark */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '25px',
              fontSize: '10rem',
              fontFamily: 'Georgia, serif',
              color: 'rgba(13, 26, 99, 0.04)',
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none'
            }}>“</div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '18px', position: 'relative', zIndex: 2 }}>
              {[...Array(TESTIMONIALS[currentTestimonial].stars)].map((_, i) => (
                <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontSize: '1.16rem',
              lineHeight: '1.75',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              marginBottom: '22px',
              position: 'relative',
              zIndex: 2
            }}>
              "{TESTIMONIALS[currentTestimonial].quote}"
            </p>

            {/* Author details */}
            <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontWeight: 800, position: 'relative', zIndex: 2, marginBottom: '2px' }}>
              {TESTIMONIALS[currentTestimonial].author}
            </h4>
            <span style={{ fontSize: '0.82rem', color: '#64748B', display: 'block', position: 'relative', zIndex: 2 }}>
              {TESTIMONIALS[currentTestimonial].role}
            </span>

            {/* Slider arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '26px', position: 'relative', zIndex: 2 }}>
              <button
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563EB';
                  e.currentTarget.style.color = '#2563EB';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-white)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                &#8592;
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563EB';
                  e.currentTarget.style.color = '#2563EB';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-white)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 9. CAREERS & CONTACT CALL-TO-ACTION */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}>
            {/* Left Card: Join the Team */}
            <div 
              style={{
                padding: '44px 34px',
                backgroundColor: 'var(--bg-deep)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#2563EB';
                e.currentTarget.style.boxShadow = 'var(--shadow-mercury-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
              }}
            >
              <h2 style={{ fontSize: '2.1rem', color: 'var(--text-white)', marginBottom: '12px', letterSpacing: '-0.025em' }}>Build Your Legacy With Us</h2>
              <p style={{ color: '#64748B', marginBottom: '24px', fontSize: '0.94rem', lineHeight: '1.7' }}>
                We offer highly competitive salaries, modern health benefits, structured training, and a site environment where your safety is our core value. Apply for one of our open engineering roles.
              </p>
              <Button to="/careers" variant="primary" icon={ArrowRight} iconPosition="right">
                View Current Openings
              </Button>
            </div>

            {/* Right Card: Project Inquiry */}
            <div 
              style={{
                padding: '44px 34px',
                backgroundColor: 'rgba(13, 26, 99, 0.03)',
                border: '1px solid rgba(13, 26, 99, 0.12)',
                borderRadius: '14px',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#2563EB';
                e.currentTarget.style.boxShadow = 'var(--shadow-mercury-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(13, 26, 99, 0.12)';
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
              }}
            >
              <h2 style={{ fontSize: '2.1rem', color: 'var(--text-white)', marginBottom: '12px', letterSpacing: '-0.025em' }}>Have a Construction Challenge?</h2>
              <p style={{ color: '#64748B', marginBottom: '24px', fontSize: '0.94rem', lineHeight: '1.7' }}>
                Whether you need preconstruction virtual simulations, project estimations, or heavy general contracting, our regional foremen are ready to configure a custom quote for you.
              </p>
              <Button to="/contact" variant="outline" icon={ArrowRight} iconPosition="right">
                Send Project Brief
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
        title=""
        maxWidth="950px"
      >
        {modalProject && (
          <div>
            <ProjectDetailView project={modalProject} />
            <div style={{ textAlign: 'right', marginTop: '28px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
              <Button onClick={() => setModalProject(null)} variant="secondary">
                Close Case Study
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <style>{`
        @media (max-width: 768px) {
          .stat-col {
            border-right: none !important;
            padding-bottom: 18px;
            border-bottom: 1px solid var(--border-color) !important;
          }
          .stat-col:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}


