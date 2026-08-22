import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you! You have subscribed to our newsletter.');
      setEmail('');
    }, 1200);
  };

  return (
    <footer style={{ backgroundColor: 'var(--primary-dark)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#94A3B8' }}>
      {/* Top Pre-Footer Call to Action */}
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '48px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          <div>
            <span style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
              Preconstruction & Contracting
            </span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px', lineHeight: '1.2' }}>
              Ready to engineer your next capital landmark?
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8' }}>
              Connect directly with our preconstruction executives and estimating teams.
            </p>
          </div>
          <Link
            to="/contact"
            style={{
              backgroundColor: '#2563EB',
              color: '#FFF',
              padding: '14px 30px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1D4ED8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563EB';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: '75px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '45px'
        }}>
          {/* Col 1: About */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', padding: '6px 12px', backgroundColor: '#FFFFFF', borderRadius: '6px' }}>
              <img 
                src={logo} 
                alt="Clark Construction Group Logo" 
                style={{ height: '32px', objectFit: 'contain', display: 'block' }} 
              />
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '24px', color: '#94A3B8' }}>
              A national infrastructure and civil engineering firm delivering high-rise commercial, airport, transit, healthcare, and sustainable building solutions.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: <Facebook size={16} />, href: '#', label: 'Facebook' },
                { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
                { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/company/clark-construction/about/?viewAsMember=true', label: 'LinkedIn' },
                { icon: <Instagram size={16} />, href: '#', label: 'Instagram' },
                { icon: <Youtube size={16} />, href: '#', label: 'YouTube' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CBD5E1',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#38BDF8';
                    e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', marginBottom: '22px', fontSize: '1.05rem', fontWeight: 700, position: 'relative', paddingBottom: '10px' }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', backgroundColor: '#2563EB' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <li><Link to="/about/our-story" className="footer-mercury-link">Our Story</Link></li>
              <li><Link to="/our-work/expertise" className="footer-mercury-link">Expertise & Capabilities</Link></li>
              <li><Link to="/our-work/projects" className="footer-mercury-link">Featured Projects</Link></li>
              <li><Link to="/business/strategic-partnership" className="footer-mercury-link">Strategic Partnership</Link></li>
              <li><Link to="/sustainability" className="footer-mercury-link">Environmental Sustainability</Link></li>
              <li><Link to="/news" className="footer-mercury-link">Latest News & Awards</Link></li>
              <li><Link to="/careers/search-apply" className="footer-mercury-link">Careers at Clark</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 style={{ color: '#FFFFFF', marginBottom: '22px', fontSize: '1.05rem', fontWeight: 700, position: 'relative', paddingBottom: '10px' }}>
              Headquarters
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', backgroundColor: '#2563EB' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} style={{ color: '#38BDF8', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#CBD5E1' }}>181 Fremont St,<br />San Francisco, CA 94105</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <span style={{ color: '#CBD5E1' }}>+1 (800) 555-0199</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <span style={{ color: '#CBD5E1' }}>info@clarkconstruction.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ color: '#FFFFFF', marginBottom: '22px', fontSize: '1.05rem', fontWeight: 700, position: 'relative', paddingBottom: '10px' }}>
              Newsletter
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', backgroundColor: '#2563EB' }}></span>
            </h4>
            <p style={{ fontSize: '0.88rem', marginBottom: '16px', lineHeight: '1.6', color: '#94A3B8' }}>
              Subscribe to receive verified construction insights, safety chronicles, and project updates.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
              <input
                type="email"
                placeholder="Work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 48px 12px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#38BDF8'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                aria-label="Subscribe"
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                  bottom: '4px',
                  padding: '0 14px',
                  backgroundColor: '#2563EB',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              >
                {status === 'loading' ? (
                  <span className="spinner" style={{
                    width: '14px',
                    height: '14px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTop: '2px solid #FFF',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></span>
                ) : (
                  <ArrowRight size={15} />
                )}
              </button>
            </form>
            {message && (
              <p style={{
                fontSize: '0.75rem',
                marginTop: '8px',
                color: status === 'success' ? '#34D399' : '#F87171'
              }}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)', borderTop: '1px solid rgba(255, 255, 255, 0.06)', padding: '22px 0', color: '#64748B' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '0.8rem' }}>
          <span>&copy; {new Date().getFullYear()} Clark Construction Group. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Use</a>
            <a href="#" className="footer-legal-link">Accessibility Statement</a>
            <a href="#" className="footer-legal-link">Sitemap</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-mercury-link {
          color: #94A3B8;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
        }
        .footer-mercury-link:hover {
          color: #FFFFFF !important;
          transform: translateX(4px);
        }
        .footer-legal-link {
          color: #64748B;
          transition: color 0.2s ease;
        }
        .footer-legal-link:hover {
          color: #CBD5E1 !important;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}

