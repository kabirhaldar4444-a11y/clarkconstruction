import React from 'react';
import { 
  Award, Users, HardHat, History, Search
} from 'lucide-react';
import Button from '../components/UI/Button';

export default function RecentGraduates() {

  const buildPillars = [
    {
      title: "We Build Leaders",
      desc: "We empower you to take ownership early and support your growth with resources, mentorship, and a culture that challenges you to take your career further. Our team doesn’t just build great projects—we build the leaders who make them possible.",
      icon: <Award size={26} color="var(--primary)" />
    },
    {
      title: "We Build Experts",
      desc: "From day one at Clark, you’ll be hands-on, solving challenges on high-stakes projects under the guidance of the best in the business. Through role-specific training, on-the-job learning, and mentorship from industry veterans, you’ll sharpen your skills and expand your expertise quickly.",
      icon: <HardHat size={26} color="var(--primary)" />
    },
    {
      title: "We Build Together",
      desc: "Complex projects demand the best of everyone involved. Project teams at Clark care for each other, learn from each other, and show up for each other — on and off the job site. We work as one, grow as one, and win as one.",
      icon: <Users size={26} color="var(--primary)" />
    },
    {
      title: "We Build Legacies",
      desc: "Clark has been instrumental in our nation’s growth for more than a century as the builder behind iconic projects that transform skylines and serve communities for generations — a legacy that proudly continues with you. From stadiums and museums to transit lines and water systems, you will deliver projects that stand the test of time.",
      icon: <History size={26} color="var(--primary)" />
    }
  ];

  const roleTypes = [
    {
      title: "Engineer",
      desc: "Work in a variety of roles on and off the jobsite to learn the fundamentals of the industry and our business.",
      caption: "On-site field operations training",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400"
    },
    {
      title: "Safety Coordinator",
      desc: "Play a critical role in ensuring the safety of thousands of team members on our jobsites each day.",
      caption: "Daily safety inspection checks",
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=400"
    },
    {
      title: "Business Analyst",
      desc: "Learn business strategy during a multi-year rotation that offers a unique, cross-functional experience.",
      caption: "A Clark employee reads in front of computer screens at a desk in a Clark office",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400"
    },
    {
      title: "Project Controls Analyst",
      desc: "Serve as a trusted resource to project delivery teams to ensure the financial health of our projects.",
      caption: "Recent graduates - business manager",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400"
    }
  ];

  const scrollToRoles = () => {
    const el = document.getElementById('role-types-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600"
            alt="Young engineering grads on site"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              A Career Worth Building &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>Recent Graduates</span>
            </span>
            <h1 className="page-hero-title">Recent Graduates</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              If you’re someone who expects more from your career and your company — more investment, more support, more purpose — you’ll find it at Clark.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Button onClick={scrollToRoles} variant="primary" size="lg">
                EXPLORE OPPORTUNITIES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* We Build Core Pillars Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Our Mission</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>We Build Leaders & Experts</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              From day one, you are empowered to make a meaningful difference and leave a legacy.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {buildPillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  padding: '30px',
                  borderRadius: '6px',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(217, 119, 6, 0.05)',
                  border: '1px solid rgba(217, 119, 6, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {pillar.icon}
                </div>
                <h3 style={{ color: '#FFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Types Section */}
      <section id="role-types-section" className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Career Paths</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Graduate Role Types</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Explore structural paths for graduates designed for cross-functional learning and development.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {roleTypes.map((role, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  const img = e.currentTarget.querySelector('.role-img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  const img = e.currentTarget.querySelector('.role-img');
                  if (img) img.style.transform = 'none';
                }}
              >
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={role.img}
                    alt={role.title}
                    className="role-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-slow)' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to top, rgba(8, 10, 16, 0.7) 0%, transparent 60%)'
                  }} />
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#FFF', fontWeight: 700, marginBottom: '8px' }}>{role.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>
                    {role.desc}
                  </p>
                  <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '12px',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic'
                  }}>
                    {role.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefit Programs Promotion */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-premium)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <span className="subtitle-amber">Thrive With Us</span>
            <h3 style={{ color: '#FFF', fontSize: '1.6rem', fontWeight: 800 }}>Explore Our Benefit Programs</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '600px' }}>
              Find out more about the benefits of joining our team, including your career development, Clark community, health and wellness, ability to recharge, and financial security.
            </p>
            <Button to="/careers/life-at-clark" variant="primary" style={{ marginTop: '10px' }}>
              learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Join the Clark Team */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '650px' }}>
          <span className="subtitle-amber">Build Your Career</span>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '16px' }}>Join the Clark Team</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.6' }}>
            Explore opportunities to build a career with Clark.
          </p>
          <Button to="/careers/search-apply" variant="primary" size="lg" icon={Search}>
            search & apply
          </Button>
        </div>
      </section>
    </div>
  );
}
