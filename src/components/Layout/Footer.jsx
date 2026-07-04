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
    <footer style={{ backgroundColor: '#F1F5F9', borderTop: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
      {/* Top Banner */}
      <div style={{ borderBottom: '1px solid var(--border-color)', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '8px' }}>Ready to bring your vision to life?</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Let's discuss how our expert engineering team can make it happen.</p>
          </div>
          <Link
            to="/contact"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#FFF',
              padding: '12px 28px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: 'var(--shadow-glow)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
          >
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: '80px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px'
        }}>
          {/* Col 1: About */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <img 
                src={logo} 
                alt="Clark Construction Group Logo" 
                style={{ height: '36px', objectFit: 'contain' }} 
              />
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '24px' }}>
              A leading modern infrastructure firm specializing in heavy civil, high-rise commercial, healthcare, and sustainable building solutions.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <Facebook size={18} />, href: '#' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Instagram size={18} />, href: '#' },
                { icon: <Youtube size={18} />, href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-deep)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(217, 119, 6, 0.08)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-deep)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-white)', marginBottom: '24px', fontSize: '1.1rem', position: 'relative', paddingBottom: '8px' }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', backgroundColor: 'var(--primary)' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><Link to="/about/our-story" className="hover-amber-link">Our Story</Link></li>
              <li><Link to="/our-work/expertise" className="hover-amber-link">Expertise & Services</Link></li>
              <li><Link to="/our-work/projects" className="hover-amber-link">Featured Projects</Link></li>
              <li><Link to="/business/strategic-partnership" className="hover-amber-link">Strategic Partnership</Link></li>
              <li><Link to="/sustainability" className="hover-amber-link">Environmental Sustainability</Link></li>
              <li><Link to="/news" className="hover-amber-link">Latest Chronicles</Link></li>
              <li><Link to="/careers/search-apply" className="hover-amber-link">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 style={{ color: 'var(--text-white)', marginBottom: '24px', fontSize: '1.1rem', position: 'relative', paddingBottom: '8px' }}>
              Headquarters
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', backgroundColor: 'var(--primary)' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <span>181 Fremont St,<br />San Francisco, CA 94105</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>+1 (800) 555-0199</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>info@clarkconstruction.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ color: 'var(--text-white)', marginBottom: '24px', fontSize: '1.1rem', position: 'relative', paddingBottom: '8px' }}>
              Newsletter
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', backgroundColor: 'var(--primary)' }}></span>
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '16px', lineHeight: '1.6' }}>
              Subscribe to receive construction news, technology updates, and project highlights.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 50px 12px 16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-white)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                  bottom: '4px',
                  padding: '0 12px',
                  backgroundColor: 'var(--primary)',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                {status === 'loading' ? (
                  <span className="spinner" style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTop: '2px solid #FFF',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></span>
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </form>
            {message && (
              <p style={{
                fontSize: '0.75rem',
                marginTop: '8px',
                color: status === 'success' ? 'var(--success)' : 'var(--error)'
              }}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#E2E8F0', borderTop: '1px solid var(--border-color)', padding: '24px 0', color: 'var(--text-muted)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '0.8rem' }}>
          <span>&copy; {new Date().getFullYear()} Clark Construction Group. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="hover-white">Privacy Policy</a>
            <a href="#" className="hover-white">Terms of Use</a>
            <a href="#" className="hover-white">Accessibility Statement</a>
            <a href="#" className="hover-white">Sitemap</a>
          </div>
        </div>
      </div>

      <style>{`
        .hover-amber-link {
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .hover-amber-link:hover {
          color: var(--primary) !important;
          transform: translateX(4px);
          display: inline-block;
        }
        .hover-white:hover {
          color: var(--text-white) !important;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
