import React from 'react';
import { 
  GraduationCap, Users, HeartPulse, BatteryCharging, DollarSign, Search
} from 'lucide-react';
import Button from '../components/UI/Button';

export default function LifeAtClark() {
  
  const benefitsList = [
    {
      id: "career-development",
      title: "Your Career Development",
      icon: <GraduationCap size={28} color="var(--primary)" />,
      content: (
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
            We are passionate about developing well-rounded team members through diverse experiences and opportunities. Clark’s national scale and business diversity enables employees to explore a variety of opportunities across the organization.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            Through on-the-job and classroom experiences, you will have access to a range of development tools that are designed to help you hone new skills and advance your career.
          </p>
        </div>
      ),
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600"
    },
    {
      id: "clark-community",
      title: "Your Clark Community",
      icon: <Users size={28} color="var(--primary)" />,
      content: (
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
            There is a sense of camaraderie that comes with delivering impactful projects as a team. It creates a sense of humility and fosters pride in the work we do.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            We are purposeful in taking time to celebrate success, creating a sense of pride and belonging for all of our team members.
          </p>
        </div>
      ),
      bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600"
    },
    {
      id: "health-wellbeing",
      title: "Your Health & Well-Being",
      icon: <HeartPulse size={28} color="var(--primary)" />,
      content: (
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
            Your physical and mental health is our top priority. We are proud to support employees and their families with a robust suite of benefits, including comprehensive medical, vision, and dental plans.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            Our <strong>Be Kind to Your Mind</strong> campaign connects team members with resources and information to support their mental health and overall well-being. Additionally, the Clark team has access to free, confidential counseling services and resources through an employee assistance program.
          </p>
        </div>
      ),
      bgImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600"
    },
    {
      id: "ability-to-recharge",
      title: "Your Ability to Recharge",
      icon: <BatteryCharging size={28} color="var(--primary)" />,
      content: (
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            Having time to recharge is key to taking care of yourself and your loved ones. We support your work-life harmony with a variety of time-away and family-focused programs, including paid time off for vacations, holidays, sick time, and parental leave*.
          </p>
        </div>
      ),
      bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600"
    },
    {
      id: "financial-security",
      title: "Your Financial Security",
      icon: <DollarSign size={28} color="var(--primary)" />,
      content: (
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
            We offer a wealth of financial programs designed to help our employees build a sound financial future. Plan for today and save for the future with competitive compensation packages, 401(k) savings plans with company matching, life insurance and disability coverage, and flexible spending accounts*.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            Our team members can also take advantage of free webinars and telephonic counseling on investing, financial planning, and more.
          </p>
        </div>
      ),
      bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600"
    }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600"
            alt="Life at clark employees collaborating"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              A Career Worth Building &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>Life At Clark</span>
            </span>
            <h1 className="page-hero-title">Life at Clark</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              Just like we have a plan for our projects, we dedicate the benefits, resources, and support necessary to ensure our team members thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Jump To Anchor Navigation */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: '80px',
        zIndex: 10,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '16px 24px', gap: '16px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Jump to:
          </span>
          {benefitsList.map((benefit) => (
            <button
              key={benefit.id}
              onClick={() => handleScroll(benefit.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                padding: '4px 10px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              {benefit.title.replace("Your ", "")}
            </button>
          ))}
        </div>
      </div>

      {/* Benefits Content Sections */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {benefitsList.map((benefit, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={benefit.id}
                id={benefit.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '60px',
                  alignItems: 'center',
                  scrollMarginTop: '160px'
                }}
              >
                {/* Visual Block */}
                <div style={{
                  order: isEven ? 0 : 1,
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-premium)'
                }}>
                  <img
                    src={benefit.bgImage}
                    alt={benefit.title}
                    style={{ width: '100%', display: 'block', height: '320px', objectFit: 'cover' }}
                  />
                </div>

                {/* Text Block */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'rgba(217,119,6,0.06)',
                      border: '1px solid rgba(217,119,6,0.2)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {benefit.icon}
                    </div>
                    <h3 style={{ color: '#FFF', fontSize: '1.8rem', fontWeight: 800 }}>{benefit.title}</h3>
                  </div>
                  {benefit.content}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Specific Benefit Programs Callouts */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px auto' }}>
            <span className="subtitle-amber">Benefits Plans</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Specific Benefit Programs</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Click below to view tailored health, insurance, and retirement plans by corporate division category.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
            {/* Skilled Craft Card */}
            <div style={{
              backgroundColor: 'var(--bg-deep)',
              border: '1px solid var(--border-color)',
              padding: '40px',
              borderRadius: '6px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 800 }}>Skilled Craft</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '24px' }}>
                Benefits coverage details, union agreements, safety equipment vouchers, and wellness support for our field tradesmen.
              </p>
              <Button to="/contact" variant="primary">
                SKILLED CRAFT
              </Button>
            </div>

            {/* Professionals & Grads Card */}
            <div style={{
              backgroundColor: 'var(--bg-deep)',
              border: '1px solid var(--border-color)',
              padding: '40px',
              borderRadius: '6px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '16px', fontWeight: 800 }}>Professionals & Grads</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '24px' }}>
                Retirement plans, continuing education packages, flexible accounts, and healthcare solutions for office and operations managers.
              </p>
              <Button to="/careers/recent-graduates" variant="primary">
                PROFESSIONALS & RECENT GRADUATES
              </Button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              *Eligibility depends on several factors, including role, company tenure, local jurisdictions, and union status.
            </span>
          </div>
        </div>
      </section>

      {/* Join the Clark Team */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <span className="subtitle-amber">Build Your Future</span>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '16px' }}>Join the Clark Team</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.6' }}>
            Whether you are a skilled craft worker, recent graduate, experienced professional, or veteran looking to make your next move, explore opportunities with a winning team.
          </p>
          <Button to="/careers/search-apply" variant="primary" size="lg" icon={Search}>
            search & apply
          </Button>
        </div>
      </section>
    </div>
  );
}
