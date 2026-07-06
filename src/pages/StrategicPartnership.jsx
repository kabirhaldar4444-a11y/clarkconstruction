import React, { useState } from 'react';
import { 
  MapPin, Quote, DollarSign, CheckCircle2, Clock
} from 'lucide-react';
import Button from '../components/UI/Button';
import Accordion from '../components/UI/Accordion';
import Modal from '../components/UI/Modal';

const LOCATIONS = [
  "Baltimore, Maryland", "Charlotte, North Carolina", "Chicago, Illinois", 
  "Houston, Texas", "Los Angeles, California", "McLean, Virginia", 
  "Nashville, Tennessee", "Richmond, Virginia", "San Diego, California", 
  "San Francisco, California", "Seattle, Washington"
];

const TESTIMONIALS = [
  {
    quote: "Through the SPP, we are able to win more work, generate more profit, and take less risk because we understand the jobs and industry better.",
    author: "Eric Sohn",
    title: "President, J. Roberts",
    location: "Washington, DC",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  },
  {
    quote: "The Strategic Partnership Program helped to eliminate the learning curve that comes with the construction industry. I wanted to build a strong network – and that is exactly what I received.",
    author: "Kala Fleming",
    title: "Founder, Frontline Gig",
    location: "Baltimore",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200"
  },
  {
    quote: "This program opened my eyes to what I needed to do to run a successful company and gave me greater confidence that I could become one of the elite steel erectors in the region.",
    author: "Corey Smith",
    title: "President, New Horizon Steel",
    location: "Chicago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
  },
  {
    quote: "What has surprised me most about the SPP is the passion of the individuals teaching us. With Clark in my corner, I have a group that supports our vision.",
    author: "Marti Hoffer",
    title: "Owner, Lumenomics",
    location: "Seattle",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
  },
  {
    quote: "I still call on Clark executives for references. They’ve helped us develop our company’s profile … their advice is gold.",
    author: "Nick Colina",
    title: "Co-principal, Anco Iron & Construction",
    location: "San Francisco",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
  }
];

const RECENT_NEWS = [
  {
    title: "New Cohort of Small Business Leaders Complete Clark's Strategic Partnership Program",
    category: "SPP Graduation",
    date: "June 2026",
    desc: "A fresh class of minority-, women-, and veteran-owned businesses graduate from our intensive executive training program.",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=400"
  },
  {
    title: "Clark Construction Debuts Small Business Training Program in Nashville",
    category: "Program Launch",
    date: "May 2026",
    desc: "Nashville becomes the newest hub for Clark's local capacity building efforts, fostering Tennessee subcontractor growth.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400"
  },
  {
    title: "Clark Construction Announces Graduates From Baltimore Small Business Training Program",
    category: "Local Impact",
    date: "April 2026",
    desc: "Local Baltimore specialty trade contractors finish a rigorous curriculum to qualify for upcoming mid-atlantic civil works.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400"
  }
];

export default function StrategicPartnership() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', city: 'Baltimore, Maryland', experience: '3+ Years', msg: '' });
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
      setFormData({ name: '', email: '', company: '', city: 'Baltimore, Maryland', experience: '3+ Years', msg: '' });
    }, 1200);
  };

  const faqItems = [
    {
      title: "Who should apply to SPP?",
      content: "SPP is designed for small businesses in construction, engineering, and architecture. Ideal candidates have three or more years of operational experience."
    },
    {
      title: "Where is the program located?",
      content: "SPP is currently offered in markets across the country. Please see our current list of SPP cities for a location near you."
    },
    {
      title: "How is SPP different from other programs?",
      content: "Clark is committed to the growth of small businesses. SPP sets up participants for long-term success, and our teams are truly invested in seeing you and your business thrive. Reflective of our commitment to quality in everything Clark delivers, SPP offers thorough technical and soft skills training where participants have direct access to learn from our teams of experts."
    },
    {
      title: "What do SPP participants learn?",
      content: (
        <div>
          <p style={{ marginBottom: '12px' }}>Participants learn the technical and business skills training small business leaders need to successfully compete for, win, and deliver work on large-scale construction projects.</p>
          <p style={{ marginBottom: '12px' }}>The program features a unique blend of lectures, interactive group discussion, and hands-on experiential classroom learning. Clark’s building professionals work alongside outside subject matter experts to lead in-depth classroom discussions on topics such as finance and accounting, insurance and bonding, project management, contract review, estimating, and purchasing.</p>
          <p>Participants also learn general business competencies, such as networking and presentation skills. The core curriculum is reinforced through a series of quarterly assessments, which help ensure participants grasp key course concepts.</p>
        </div>
      )
    },
    {
      title: "What is the Capstone Project?",
      content: "The program culminates in a Capstone Project that further underscores the importance of business skills, teamwork, and forming strategic relationships to strengthen competitive advantage and the likelihood of success in future pursuits. During this intensive final assignment, participants work in teams and leverage the knowledge gained throughout the course to compile a competitive bid, deliver a compelling presentation, and compete for a hypothetical construction contract. As a final step in the process, Capstone teams present to a panel of Clark executives."
    },
    {
      title: "What does it cost to participate in SPP?",
      content: "There is no cost to participate. Participants accepted into SPP are expected to commit their time over several months to complete the course."
    },
    {
      title: "How long is the SPP course?",
      content: "SPP courses begin in September each year and meet weekly in the evenings. While course length varies slightly in each market, the program curriculum averages nine months."
    },
    {
      title: "What can I expect after I complete SPP?",
      content: "SPP alumni join a nationwide network of more than 1,300 business leaders. Alumni have access to SPP ENCORE programming, which provides continuing education and networking opportunities at no charge. While completing SPP does not guarantee a contract with Clark Construction, we are proud to have awarded more than $1.5 billion in contracts to SPP alumni."
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600"
            alt="Business development classroom and presentation screens"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Business With Us &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>Strategic Partnership Program</span>
            </span>
            <h1 className="page-hero-title">Strategic Partnership Program</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.7', marginTop: '10px' }}>
              Clark's Strategic Partnership Program (SPP) is an essential component of our commitment to fostering economic growth that strengthens small businesses, our communities, and our industry.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Button onClick={() => setIsApplyOpen(true)} variant="primary" size="lg">
                APPLY NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About The Program */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="subtitle-amber">About The Program</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Foundation for Smart, Sustainable Growth</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px' }}>
              SPP provides small business owners with a solid foundation for smart, sustainable growth and long-term success. Through this executive education program, participants receive comprehensive construction management and business skills training from experienced industry leaders.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <Clock size={24} color="var(--primary)" style={{ marginBottom: '12px' }} />
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', marginBottom: '6px', fontWeight: 700 }}>9-Month Program</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4' }}>Weekly evening courses reinforcing structural topics & estimating skills.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <DollarSign size={24} color="var(--primary)" style={{ marginBottom: '12px' }} />
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', marginBottom: '6px', fontWeight: 700 }}>100% Free / No Cost</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4' }}>Tuition-free program requiring weekly attendance & dedication.</p>
              </div>
            </div>
          </div>

          {/* Locations Grid */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <span className="subtitle-amber">Program Availability</span>
            <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', marginBottom: '24px' }}>Active Markets</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              {LOCATIONS.map((loc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={14} color="var(--primary)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{loc}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Don't see your city? Check back for new regional expansions.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel / Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Alumni Success</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>What SPP Alumni Say</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Over 1,300 business leaders have leveraged SPP to elevate their profiles and win major contracts.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  padding: '30px',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <Quote size={32} color="rgba(217, 119, 6, 0.08)" style={{ position: 'absolute', top: '20px', right: '20px' }} />
                
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '24px', flexGrow: 1 }}>
                  "{t.quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                  <img
                    src={t.avatar}
                    alt={t.author}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--primary)' }}
                  />
                  <div>
                    <h4 style={{ color: 'var(--text-white)', fontSize: '0.95rem', fontWeight: 700 }}>{t.author}</h4>
                    <p style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 600 }}>{t.title}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>({t.location})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Got Questions?</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Everything you need to know about eligibility, course curriculum, and Capstone requirements.
            </p>
          </div>

          <Accordion items={faqItems} allowMultiple={false} />
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="subtitle-amber">Updates & Press</span>
              <h2 style={{ fontSize: '2.5rem' }}>Recent News</h2>
            </div>
            <Button to="/news" variant="secondary">
              View All News
            </Button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {RECENT_NEWS.map((n, idx) => (
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
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={n.img}
                    alt={n.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'var(--primary)',
                    color: '#FFF',
                    padding: '4px 10px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    borderRadius: '4px'
                  }}>
                    {n.category}
                  </span>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', display: 'block' }}>{n.date}</span>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginBottom: '12px', lineHeight: '1.4', fontWeight: 700 }}>{n.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>{n.desc}</p>
                  <Button to="/news" variant="secondary" size="sm" style={{ alignSelf: 'flex-start' }}>
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section Callout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '16px' }}>Apply Today</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.6' }}>
            Apply today and better position your business for long-term growth and success. 
          </p>
          <Button onClick={() => setIsApplyOpen(true)} variant="primary" size="lg">
            APPLY NOW
          </Button>
        </div>
      </section>

      {/* Application Form Modal */}
      <Modal
        isOpen={isApplyOpen}
        onClose={() => {
          setIsApplyOpen(false);
          setApplied(false);
        }}
        title="SPP Application / Details Request"
        maxWidth="600px"
      >
        {applied ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <CheckCircle2 size={56} color="var(--success)" style={{ margin: '0 auto 20px auto' }} />
            <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '10px' }}>Application Submitted!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Thank you for applying. A member of the Subcontractor Development group will review your credentials and contact you within 5 business days regarding cohort options.
            </p>
            <Button onClick={() => setIsApplyOpen(false)} variant="primary">
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              SPP is tuition-free for construction-related companies. Please fill out this request form to begin the onboarding screening.
            </p>
            
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--bg-deep)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                color: 'var(--text-white)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--bg-deep)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                color: 'var(--text-white)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
              required
            />

            <input
              type="text"
              placeholder="Subcontracting Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--bg-deep)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                color: 'var(--text-white)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
              required
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-white)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>

              <select
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-white)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="Under 3 Years">Under 3 Years Ops</option>
                <option value="3+ Years">3+ Years Ops (Ideal)</option>
                <option value="5+ Years">5+ Years Ops</option>
                <option value="10+ Years">10+ Years Ops</option>
              </select>
            </div>

            <textarea
              placeholder="Why would you like to enroll in Clark's Strategic Partnership Program?..."
              value={formData.msg}
              onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
              rows="3"
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--bg-deep)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                color: 'var(--text-white)',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'none'
              }}
            />

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px' }}>
              <Button type="button" onClick={() => setIsApplyOpen(false)} variant="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
