import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import logo from '../../assets/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveMobileMenu(null);
  }, [location]);

  // Monitor scroll height to make navbar solid/glass on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'About Us',
      path: '/about/our-story',
      submenu: [
        { name: 'Companies', path: '/about/companies' },
        { name: 'Corporate Responsibility', path: '/about/corporate-responsibility' },
        { name: 'Our Story', path: '/about/our-story' },
        { name: 'Building What Matters', path: '/about/building-what-matters' },
        { name: 'India Partnerships', path: '/about/india-partnerships' }
      ]
    },
    {
      name: 'Our Work',
      path: '/our-work/projects',
      submenu: [
        { name: 'Markets', path: '/our-work/markets' },
        { name: 'Expertise', path: '/our-work/expertise' },
        { name: 'Projects', path: '/our-work/projects' }
      ]
    },
    {
      name: 'Business With Us',
      path: '/business/strategic-partnership',
      submenu: [
        { name: 'Strategic Partnership Program', path: '/business/strategic-partnership' },
        { name: 'Suppliers', path: '/business/suppliers' },
        { name: 'Trade Contractors', path: '/business/trade-contractors' }
      ]
    },
    {
      name: 'Build Your Career',
      path: '/careers/search-apply',
      submenu: [
        { name: 'Life at Clark', path: '/careers/life-at-clark' },
        { name: '#OneClark', path: '/careers/one-clark' },
        { name: 'Search & Apply', path: '/careers/search-apply' },
        { name: 'Recent Graduates', path: '/careers/recent-graduates' }
      ]
    },
    {
      name: 'News',
      path: '/news'
    }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          transition: 'var(--transition-normal)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          boxShadow: isScrolled ? 'var(--shadow-premium)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid rgba(15, 23, 42, 0.05)',
          height: isScrolled ? '80px' : '96px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src={logo} 
              alt="Clark Construction Group Logo" 
              style={{ height: '40px', objectFit: 'contain' }} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-nav">
            <ul style={{ display: 'flex', gap: '12px', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <NavLink
                    to={link.path}
                    style={({ isActive }) => ({
                      color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                      fontWeight: isActive ? '600' : '500',
                      fontSize: '0.85rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      padding: '24px 12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'var(--transition-fast)'
                    })}
                    className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
                  >
                    <span>{link.name}</span>
                    {link.submenu && <span className="chevron-icon">▼</span>}
                  </NavLink>

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <ul className="dropdown-menu animate-fade">
                      {link.submenu.map((sub) => (
                        <li key={sub.path}>
                          <Link to={sub.path} className="dropdown-link">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Header Call To Action */}
            <Link
              to="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                border: '1px solid var(--primary)',
                color: 'var(--primary)',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = '#FFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(var(--primary-rgb), 0.1)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              <PhoneCall size={14} />
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-white)',
              cursor: 'pointer',
              zIndex: 101,
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Dropdown menu animation and alignment styles */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        
        .logo-construction {
          display: inline-block;
        }

        @media (max-width: 360px) {
          .logo-construction {
            display: none !important;
          }
        }

        .nav-item {
          position: relative;
        }
        
        .chevron-icon {
          font-size: 0.55rem;
          margin-left: 2px;
          vertical-align: middle;
          transition: transform 0.25s ease;
          opacity: 0.7;
        }
        
        .nav-item:hover .chevron-icon {
          transform: rotate(180deg);
          color: var(--primary);
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          opacity: 0;
          visibility: hidden;
          list-style: none;
          margin: 0;
          padding: 12px 0;
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          box-shadow: var(--shadow-premium);
          min-width: 250px;
          z-index: 1000;
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
        }
        
        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        .dropdown-link {
          display: block;
          padding: 10px 24px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: none;
          text-decoration: none;
          text-align: left;
          transition: all 0.2s ease;
        }
        
        .dropdown-link:hover {
          color: var(--primary) !important;
          background-color: rgba(0, 0, 0, 0.03);
          padding-left: 28px;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background-color: var(--primary);
          transition: var(--transition-fast);
        }
        
        .nav-link:hover {
          color: var(--primary) !important;
        }

        .nav-link:hover::after {
          width: calc(100% - 24px);
        }

        .nav-link-active::after {
          content: '';
          position: absolute;
          width: calc(100% - 24px);
          height: 2px;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background-color: var(--primary);
        }
      `}</style>

      {/* Mobile Drawer Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 99,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 40px 40px 40px',
          overflowY: 'auto'
        }}
      >
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 'auto 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '320px'
        }}>
          {navLinks.map((link, idx) => (
            <li key={link.path} style={{ width: '100%' }}>
              {link.submenu ? (
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <button
                    onClick={() => setActiveMobileMenu(activeMobileMenu === idx ? null : idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-white)',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      fontFamily: 'var(--font-heading)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      padding: '10px 0',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    <span>{link.name}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      transform: activeMobileMenu === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: 'var(--primary)'
                    }}>▼</span>
                  </button>
                  <div style={{
                    maxHeight: activeMobileMenu === idx ? `${link.submenu.length * 45}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    paddingTop: activeMobileMenu === idx ? '8px' : '0px',
                    alignItems: 'center'
                  }}>
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          padding: '6px 0',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--primary)' : 'var(--text-white)',
                    fontSize: '1.3rem',
                    fontWeight: isActive ? '700' : '500',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    padding: '10px 0',
                    transition: 'var(--transition-fast)'
                  })}
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
          <li style={{ marginTop: '20px', width: '100%' }}>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                backgroundColor: 'var(--primary)',
                color: '#FFF',
                padding: '12px 30px',
                borderRadius: '4px',
                fontSize: '0.95rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: 'var(--shadow-glow)',
                width: '100%'
              }}
            >
              <PhoneCall size={16} />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
