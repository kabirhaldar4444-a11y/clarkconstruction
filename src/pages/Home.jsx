import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Award, Star, HardHat, HeartHandshake, Zap, Factory, Train } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import KovvadaNuclearPlantImg from '../assets/kovvada_nuclear_plant.png';
import RailwayMetroImg from '../assets/railway_metro_projects.png';
import JamnagarRefineryImg from '../assets/jamnagar_refinery.png';
import ShapingTomorrowImg from "../assets/Shaping Tomorrow's Horizons with Rigor and Craft.png";

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600',
    title: 'Building Modern Infrastructure',
    subtitle: 'ENGINEERING EXCELLENCE SINCE 1976',
    description: 'We construct commercial towers, state-of-the-art airports, and vital transit structures with unmatched precision.',
    ctaText: 'View Our Projects',
    ctaLink: '/projects',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600',
    title: 'Designing Smarter Spaces',
    subtitle: 'INNOVATIVE DESIGN-BUILD SERVICES',
    description: 'Using BIM virtual construction technologies to minimize project risk, control cost, and maximize environmental efficiency.',
    ctaText: 'Explore Services',
    ctaLink: '/services',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600',
    title: 'Pioneering Sustainable Building',
    subtitle: 'LEED CERTIFIED GREEN INFRASTRUCTURE',
    description: 'Empowering future generations with energy-neutral developments, carbon-neutral concrete, and eco-friendly construction cycles.',
    ctaText: 'Sustainability Commitment',
    ctaLink: '/sustainability',
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

  // Auto-slide Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* 1. HERO SLIDER BANNER */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#080a10' }}>
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
              transform: currentSlide === index ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 1.2s ease-in-out, transform 1.8s ease-in-out',
              zIndex: currentSlide === index ? 2 : 1
            }}
          >
            {/* Background Image - with a subtle dark overlay for depth */}
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(8, 10, 16, 0.1) 0%, rgba(8, 10, 16, 0.4) 100%)',
                zIndex: 1
              }} />
            </div>

            {/* Slider Content inside a premium glass card */}
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
              zIndex: 3
            }}>
              <div 
                className="animate-float-panel"
                style={{ 
                  maxWidth: '620px', 
                  padding: '48px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.78)', 
                  backdropFilter: 'blur(20px)', 
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.45)', 
                  borderRadius: '12px', 
                  boxShadow: 'var(--shadow-premium), 0 20px 40px -15px rgba(13, 26, 99, 0.12)' 
                }}
              >
                <span style={{
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.25em',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}>
                  {slide.subtitle}
                </span>
                <h1 style={{
                  fontSize: '3.4rem',
                  lineHeight: '1.1',
                  marginBottom: '20px',
                  fontWeight: 900,
                  color: 'var(--primary)'
                }}>
                  {slide.title}
                </h1>
                <p style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  marginBottom: '32px',
                  lineHeight: '1.6'
                }}>
                  {slide.description}
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <Button to={slide.ctaLink} variant="primary" size="lg">
                    {slide.ctaText}
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10
        }}>
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '40px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentSlide === index ? 'var(--primary)' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            />
          ))}
        </div>

        {/* Bouncing Scroll Indicator */}
        <div 
          className="animate-bounce-down"
          style={{
            position: 'absolute',
            bottom: '20px',
            left: 'calc(50% + 80px)', // offset from indicators
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            zIndex: 10,
            cursor: 'pointer',
            opacity: 0.85
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 80,
              behavior: 'smooth'
            });
          }}
        >
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#FFF', letterSpacing: '0.2em', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Scroll</span>
          <div style={{
            width: '18px',
            height: '28px',
            borderRadius: '9px',
            border: '2px solid #FFF',
            position: 'relative',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              width: '4px',
              height: '6px',
              borderRadius: '2px',
              backgroundColor: '#FFF',
              position: 'absolute',
              top: '4px',
              left: '50%',
              transform: 'translateX(-50%)'
            }} />
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Floating Premium Bar) */}
      <section style={{ position: 'relative', zIndex: 10, marginTop: '-60px', padding: '0 24px' }}>
        <div className="container" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.45)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-premium), 0 20px 40px -15px rgba(15, 23, 42, 0.1)',
          padding: '40px 32px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            {[
              { label: 'Completed Projects', value: 480, suffix: '+', prefix: '' },
              { label: 'Accident-Free Hours', value: 1.5, suffix: 'M', prefix: '' },
              { label: 'LEED Certified Sites', value: 75, suffix: '+', prefix: '' },
              { label: 'Years of Integrity', value: 50, suffix: '', prefix: '' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="stat-col"
                style={{ 
                  borderRight: i < 3 ? '1px solid rgba(15, 23, 42, 0.08)' : 'none',
                  transition: 'var(--transition-normal)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <h3 style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '4px' }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} duration={2500} />
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Visual element with floating badge */}
          <div className="img-overlay-wrapper" style={{ height: '480px', position: 'relative' }}>
            <img
              src={ShapingTomorrowImg}
              alt="Clark Construction vehicle excavator"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
            />
            {/* Floating Est. 1976 glass badge */}
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '-12px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              padding: '16px 24px',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-premium), 0 10px 20px -5px rgba(13,26,99,0.1)',
              zIndex: 4,
              textAlign: 'center'
            }}>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>50+</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>Years of Quality</span>
            </div>

             <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              backgroundColor: 'rgba(13, 26, 99, 0.9)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '24px',
              borderRadius: '6px',
              zIndex: 3,
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }}>
              <h4 style={{ color: '#FFF', marginBottom: '8px', fontSize: '1.1rem', fontWeight: 700 }}>Built to Last</h4>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                Every pillar we cast and steel beam we rivet is backed by a legacy of zero compromising on security, timeline, or environmental footprint.
              </p>
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="subtitle-amber">Who We Are</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', lineHeight: '1.2' }}>
              Shaping Tomorrow's Horizons with Rigor and Craft
            </h2>
            <p style={{ color: 'var(--text-primary)', marginBottom: '18px', fontSize: '1rem', lineHeight: '1.7' }}>
              Founded on the values of safety, transparency, and innovation, Clark Construction is a leading heavy civil construction, commercial design-build, and development company. We deliver complex infrastructure solutions across Aviation, Healthcare, transit lines, and sustainable residential communities.
            </p>
            
            {/* Core Values Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px', marginTop: '24px' }}>
              {[
                { title: 'LiDAR & VDC Workflow', desc: 'Minimizing risk using drone telemetry and BIM models.' },
                { title: 'Zero-Incident Standard', desc: 'Rigorous safety routines resulting in zero active site injuries.' },
                { title: 'Low-Carbon Building', desc: 'Pioneering eco-friendly concrete and LEED consulting.' },
                { title: 'Legacy of Trust', desc: 'Delivering infrastructure projects since 1976.' }
              ].map((val, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.1rem', lineHeight: 1 }}>✓</span>
                  <div>
                    <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '2px' }}>{val.title}</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <Button to="/about" variant="primary">
                Learn About Clark Construction
              </Button>
              <Button to="/services" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 3.5. GOVERNMENT & INSTITUTIONAL PARTNERSHIP IN INDIA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Column: Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ width: '32px', height: '3px', backgroundColor: 'var(--primary)', display: 'inline-block' }} />
              <span style={{
                color: 'var(--primary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                Clark Construction
              </span>
            </div>
            
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: '1.2' }}>
              Government & Institutional Partnership in India
            </h2>
            
            <p style={{ color: 'var(--text-primary)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.6' }}>
              Strategic collaborations driving national development and infrastructure modernization across the Republic of India.
            </p>

            {/* List of projects */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                {
                  id: 0,
                  title: 'Kovvada Nuclear Power Plant',
                  desc: 'Strategic energy infrastructure in Andhra Pradesh, powering India\'s industrial growth.',
                  metric: '6 AP1000 Reactors',
                  partner: 'NPCIL & Westinghouse',
                  icon: <Zap size={20} />
                },
                {
                  id: 1,
                  title: 'Reliance Jamnagar Refinery',
                  desc: 'World-class industrial engineering for the world\'s largest oil refinery complex.',
                  metric: '1.24M Barrels / Day',
                  partner: 'Reliance Industries',
                  icon: <Factory size={20} />
                },
                {
                  id: 2,
                  title: 'Railway and Metro projects',
                  desc: 'Historically well known for Delhi Metro consulting roles and similar work on other rail/metro programs.',
                  metric: 'Transit Consulting & PM',
                  partner: 'Delhi Metro Rail Corp',
                  icon: <Train size={20} />
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
                      gap: '20px',
                      padding: '20px',
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'rgba(13, 26, 99, 0.03)' : 'transparent',
                      border: isActive ? '1px solid rgba(13, 26, 99, 0.15)' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'var(--transition-normal)',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'var(--primary)' : 'rgba(13, 26, 99, 0.05)',
                      color: isActive ? '#FFF' : 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'var(--transition-fast)',
                      boxShadow: isActive ? 'var(--shadow-glow-blue)' : 'none'
                    }}>
                      {project.icon}
                    </div>
                    <div>
                      <h4 style={{ 
                        fontSize: '1.15rem', 
                        color: 'var(--text-white)', 
                        marginBottom: '6px', 
                        fontWeight: 700,
                        transition: 'var(--transition-fast)'
                      }}>
                        {project.title}
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                        {project.desc}
                      </p>
                      
                      {/* Sub metrics details - Expand smoothly on active */}
                      <div style={{
                        maxHeight: isActive ? '60px' : '0',
                        opacity: isActive ? '1' : '0',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease-in-out',
                        marginTop: isActive ? '12px' : '0',
                        display: 'flex',
                        gap: '24px',
                        fontSize: '0.75rem'
                      }}>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 600 }}>Capacity / Scope</span>
                          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{project.metric}</span>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 600 }}>Key Partner</span>
                          <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>{project.partner}</span>
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

          {/* Right Column: Dynamic Image Showcase with Stacked Images */}
          <div style={{ 
            height: '460px', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            position: 'relative',
            boxShadow: 'var(--shadow-premium), 0 20px 40px -10px rgba(0,0,0,0.15)'
          }}>
            {[
              { id: 0, image: KovvadaNuclearPlantImg, alt: 'Kovvada Nuclear Power Plant' },
              { id: 1, image: JamnagarRefineryImg, alt: 'Reliance Jamnagar Refinery' },
              { id: 2, image: RailwayMetroImg, alt: 'Railway and Metro Projects' }
            ].map((imgData) => (
              <img
                key={imgData.id}
                src={imgData.image}
                alt={imgData.alt}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: activeProject === imgData.id ? 1 : 0,
                  transform: activeProject === imgData.id ? 'scale(1.03)' : 'scale(1)',
                  transition: 'opacity 0.6s ease-in-out, transform 1s ease-in-out',
                  zIndex: activeProject === imgData.id ? 2 : 1
                }}
              />
            ))}

            {/* Subtle Gradient Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(8, 10, 16, 0.7) 0%, transparent 50%)',
              zIndex: 3
            }} />

            {/* Dynamic Glass Specs Overlay Card */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '8px',
              padding: '16px 20px',
              zIndex: 4,
              boxShadow: 'var(--shadow-premium), 0 10px 20px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transform: 'translateY(0)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              <div>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>Location</span>
                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem' }}>
                  {activeProject === 0 && 'Andhra Pradesh, India'}
                  {activeProject === 1 && 'Jamnagar, Gujarat, India'}
                  {activeProject === 2 && 'Delhi Metro & Global, India'}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>Sub Contractor</span>
                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem' }}>Clark Construction</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Our Core Expertise</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Services Crafted for Complexity</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              From initial planning and environmental checks to casting final foundations, we manage the entire project lifecycle with engineering excellence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <Card
              image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800"
              title="Preconstruction & VDC"
              subtitle="01. Phase Planning"
              tag="Virtual Design"
              hoverEffect="glow"
            >
              We run cost estimates, material stress analyses, and virtual reality BIM simulations to uncover site hazards and reduce budget deviations before ground breaking.
            </Card>

            <Card
              image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800"
              title="General Contracting"
              subtitle="02. Core Execution"
              tag="Heavy Construction"
              hoverEffect="glow"
            >
              Overseeing site teams, scheduling subcontractors, enforcing quality parameters, and deploying heavy machinery to construct bridges, mass transit systems, and skyscrapers.
            </Card>

            <Card
              image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800"
              title="Sustainability Consulting"
              subtitle="03. Green Building"
              tag="LEED Strategy"
              hoverEffect="glow"
            >
              Deploying carbon-capturing foundations, setting up solar energy grids, organizing water reclamation structures, and guaranteeing certification under official LEED frameworks.
            </Card>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button to="/services" variant="outline" size="lg">
              Explore All Services <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (INTERACTIVE TABS) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Column: Info & Tabs */}
          <div>
            <span className="subtitle-amber">The Clark Advantage</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Building Safely, Constructing Responsibly</h2>
            <p style={{ color: 'var(--text-primary)', marginBottom: '32px' }}>
              We set industry benchmarks by choosing safety first, using smart tech integration, and driving circular sustainability forward.
            </p>

            {/* Tab buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                    padding: '18px 24px',
                    textAlign: 'left',
                    background: activeTab === tab.id ? 'rgba(13, 26, 99, 0.05)' : 'rgba(15, 23, 42, 0.02)',
                    border: activeTab === tab.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    transition: 'var(--transition-fast)',
                    boxShadow: activeTab === tab.id ? '0 4px 12px -2px rgba(13, 26, 99, 0.08)' : 'none'
                  }}
                >
                  <span style={{ color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)' }}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content sheet */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-premium), 0 20px 40px -15px rgba(15, 23, 42, 0.05)',
            minHeight: '320px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'var(--transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Elegant top accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--primary)' }} />

            {activeTab === 'safety' && (
              <div className="animate-fade">
                <HardHat size={36} color="var(--primary)" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>Zero-Incident Commitment</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Safety is not a checkbox; it is our operational culture. Every site layout is modeled virtually to identify fall, crush, or electrocution hazards before real tools are touched. We hold daily toolbox talks, enforce PPE rules, and employ site coordinators tracking real-time telemetry.
                </p>
              </div>
            )}
            {activeTab === 'quality' && (
              <div className="animate-fade">
                <ShieldCheck size={36} color="var(--primary)" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>VDC Tolerances to the Millimeter</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  We utilize drone topography sweeps and LiDAR laser scanning on-site to compare active structures against raw CAD models. This prevents misalignment errors in plumbing, electrical mains, and core load paths, ensuring high quality control.
                </p>
              </div>
            )}
            {activeTab === 'sustain' && (
              <div className="animate-fade">
                <HeartHandshake size={36} color="var(--primary)" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>Green Building Frameworks</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  By specifying low-hydration concrete, recycling 85% of site waste products, and harvesting graywater on-site, we help client systems meet decarbonization requirements and secure tax advantages under regional environmental laws.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 6. FEATURED PROJECTS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '60px' }}>
            <div>
              <span className="subtitle-amber">Case Studies</span>
              <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Built With Precision</h2>
            </div>
            <Button to="/projects" variant="primary">
              View All Project Case Studies
            </Button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Capital One Arena',
                desc: 'Construction of the premier indoor sports and entertainment venue directly above an active Metro station hub.',
                image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800',
                tag: 'Commercial & Mixed-Use',
                loc: 'Washington, D.C.'
              },
              {
                title: 'The Wharf (Phase 1 & 2)',
                desc: 'A massive waterfront destination containing residential, hotel, marina, and concert halls along the Potomac.',
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800',
                tag: 'Commercial & Mixed-Use',
                loc: 'Washington, D.C.'
              },
              {
                title: 'LAX Midfield Satellite Concourse',
                desc: 'A modern multi-level concourse terminal featuring 12 gates connected via underground passenger tunnels.',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800',
                tag: 'Aviation & Infrastructure',
                loc: 'Los Angeles, CA'
              }
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <Card image={p.image} title={p.title} subtitle={p.tag} tag={p.loc} hoverEffect="zoom">
                  {p.desc}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS (WITH SLIDER NAV) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="subtitle-amber">Client Testimonials</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>What Our Partners Say</h2>

          <div style={{
            position: 'relative',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '60px 48px',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-premium), 0 20px 40px -15px rgba(15, 23, 42, 0.05)',
            overflow: 'hidden'
          }}>
            {/* Elegant large background double quotation marks */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '30px',
              fontSize: '12rem',
              fontFamily: 'Georgia, serif',
              color: 'rgba(13, 26, 99, 0.035)',
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none'
            }}>“</div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
              {[...Array(TESTIMONIALS[currentTestimonial].stars)].map((_, i) => (
                <Star key={i} size={18} fill="var(--primary)" color="var(--primary)" />
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              marginBottom: '28px',
              position: 'relative',
              zIndex: 2
            }}>
              "{TESTIMONIALS[currentTestimonial].quote}"
            </p>

            {/* Author details */}
            <h4 style={{ color: 'var(--text-white)', fontSize: '1.15rem', fontWeight: 800, position: 'relative', zIndex: 2 }}>
              {TESTIMONIALS[currentTestimonial].author}
            </h4>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px', position: 'relative', zIndex: 2 }}>
              {TESTIMONIALS[currentTestimonial].role}
            </span>

            {/* Slider arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '30px', position: 'relative', zIndex: 2 }}>
              <button
                onClick={prevTestimonial}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(15, 23, 42, 0.03)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.backgroundColor = 'rgba(13, 26, 99, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-white)';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.03)';
                }}
              >
                &#8592;
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(15, 23, 42, 0.03)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-white)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.backgroundColor = 'rgba(13, 26, 99, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-white)';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.03)';
                }}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '60px' }}>
            <div>
              <span className="subtitle-amber">Our Blog & Press Releases</span>
              <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Company Chronicles</h2>
            </div>
            <Button to="/news" variant="outline">
              Read All News
            </Button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <Card
              image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800"
              title="Clark Construction Implements Low-Hydration Concrete Mixes"
              subtitle="Innovation & Tech"
              tag="Press Release"
              hoverEffect="zoom"
            >
              We have partnered with CarbonCure to deploy specialized concrete mixes that permanently lock in carbon dioxide, cutting foundation emissions by 25%.
            </Card>

            <Card
              image="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800"
              title="Gold Award Won for Central Corporate Skyscraper"
              subtitle="Company Awards"
              tag="Award"
              hoverEffect="zoom"
            >
              The Association of General Contractors (AGC) has awarded Clark Construction the design excellence medal for the dual structural glass core of Seattle Financial Tower.
            </Card>

            <Card
              image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800"
              title="Training the Next Generation: BIM Internships open"
              subtitle="Careers & Internships"
              tag="Notice"
              hoverEffect="zoom"
            >
              Applications are now open for the Autumn 2026 Virtual Design and Construction internship. Work with senior BIM engineers on live infrastructure mockups.
            </Card>
          </div>
        </div>
      </section>

      {/* 9. CAREERS & CONTACT CALL-TO-ACTION (CONTAINERIZED CARDS) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {/* Left Card: Join the Team */}
            <div 
              style={{
                padding: '50px 40px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                transition: 'var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <span className="subtitle-amber">Work at Clark</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '16px' }}>Build Your Legacy With Us</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.95rem', lineHeight: '1.7' }}>
                We offer highly competitive salaries, modern health benefits, structured training, and a site environment where your safety is our core value. Apply for one of our open engineering roles.
              </p>
              <Button to="/careers" variant="primary">
                View Current Openings
              </Button>
            </div>

            {/* Right Card: Project Inquiry */}
            <div 
              style={{
                padding: '50px 40px',
                backgroundColor: 'rgba(13, 26, 99, 0.03)',
                border: '1px solid rgba(13, 26, 99, 0.1)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                transition: 'var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(13, 26, 99, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(13, 26, 99, 0.1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
              }}
            >
              <span className="subtitle-amber">Project Inquiries</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '16px' }}>Have a Construction Challenge?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Whether you need preconstruction virtual simulations, project estimations, or heavy general contracting, our regional foremen are ready to configure a custom quote for you.
              </p>
              <Button to="/contact" variant="outline">
                Send Project Brief
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stat-col {
            border-right: none !important;
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(15, 23, 42, 0.08) !important;
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
