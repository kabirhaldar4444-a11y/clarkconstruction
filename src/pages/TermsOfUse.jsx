import React, { useState } from 'react';
import { Scale, FileCode2, AlertTriangle, Building, ShieldAlert, CheckCircle2, ChevronRight, HelpCircle, ArrowRight, BookOpen, Briefcase } from 'lucide-react';
import Button from '../components/UI/Button';
import HeroBg from '../assets/home_hero_slide1.jpg';

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'acceptance', label: '1. Acceptance & Scope' },
    { id: 'intellectual-property', label: '2. Intellectual Property & BIM Assets' },
    { id: 'vendor-portals', label: '3. Trade Partner & Bidding Portals' },
    { id: 'prohibited-use', label: '4. Prohibited Conduct' },
    { id: 'disclaimers', label: '5. Engineering & Render Disclaimers' },
    { id: 'liability', label: '6. Limitation of Liability' },
    { id: 'governing-law', label: '7. Governing Law & Dispute Resolution' },
    { id: 'contact-legal', label: '8. Legal Department Contact' }
  ];

  return (
    <div className="terms-of-use-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={HeroBg}
            alt="Clark Construction architectural project"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Legal & Compliance &gt; Terms</span>
          <h1 className="page-hero-title">Terms of Use</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Please review these Terms of Use carefully before accessing Clark Construction Group's digital properties, vendor collaboration platforms, and public project showcases.
          </p>
        </div>
      </section>

      {/* Overview Banner */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)', padding: '24px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Scale size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Governing Law</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Maryland & Virginia, USA</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(37, 99, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cobalt)' }}>
              <FileCode2 size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>IP Protection</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>All Rights Reserved</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
              <Briefcase size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Commercial Scope</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Subcontractors & Public</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <BookOpen size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Revision Date</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>August 2026 Edition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 280px) 1fr', gap: '48px', alignItems: 'start' }} className="terms-grid-layout">
            
            {/* Quick Sticky Sidebar Navigation */}
            <aside style={{ position: 'sticky', top: '110px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-premium)' }} className="terms-sidebar">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
                Terms Directory
              </h3>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      textAlign: 'left',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: activeSection === item.id ? 'rgba(13, 26, 99, 0.08)' : 'transparent',
                      color: activeSection === item.id ? 'var(--primary)' : 'var(--text-primary)',
                      fontWeight: activeSection === item.id ? 700 : 500,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && <ArrowRight size={14} />}
                  </button>
                ))}
              </nav>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <Button to="/contact" variant="primary" style={{ width: '100%', fontSize: '0.85rem', padding: '10px 14px' }}>
                  Legal & Compliance Inquiry
                </Button>
              </div>
            </aside>

            {/* Terms Articles */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '40px', boxShadow: 'var(--shadow-premium)' }}>
              
              {/* Introduction */}
              <div style={{ marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid var(--border-color)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  These Terms of Use govern your access to and use of all websites, vendor management interfaces, preconstruction document vaults, and digital services operated by <strong>Clark Construction Group, LLC</strong> and its affiliated operating entities.
                </p>
                <div style={{ padding: '16px 20px', backgroundColor: 'rgba(37, 99, 235, 0.05)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
                    <strong>Notice to Subcontractors & Bidders:</strong> Specific trade agreements, prime contract provisions, subcontracts, and Master Service Agreements (MSAs) take legal precedence over these website terms in the event of any conflict.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <section id="acceptance" style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  1. Acceptance & Scope of Terms
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  By accessing, browsing, downloading specifications from, or submitting forms through this website, you agree to be bound by these Terms of Use and our accompanying Privacy Policy. If you do not agree with any part of these terms, you must discontinue your use of our digital platforms immediately.
                </p>
              </section>

              {/* Section 2 */}
              <section id="intellectual-property" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  2. Intellectual Property & BIM Assets
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '14px' }}>
                  All content published on this website—including architectural photography, engineering renderings, 3D Building Information Models (BIM), case study whitepapers, proprietary project delivery methodologies, logos, and graphics—is the exclusive intellectual property of Clark Construction Group or used under authorized license from our clients and design partners.
                </p>
                <ul style={{ paddingLeft: '24px', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                  <li>You may view, cache, and print individual pages for personal or informational bidding evaluation purposes only.</li>
                  <li>You may not reproduce, redistribute, decompile, or publicly display proprietary engineering models without explicit written permission from our corporate legal department.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="vendor-portals" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  3. Trade Partner, Supplier & Bidding Portals
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '14px' }}>
                  Trade contractors and suppliers utilizing our prequalification platforms (including the Strategic Partnership Program and SDBX portal) agree to:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '16px' }}>
                  <div style={{ padding: '16px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ color: 'var(--text-white)', display: 'block', marginBottom: '6px' }}>Credential Security</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Maintain strict confidentiality of assigned RFP portal passwords and API keys.</span>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ color: 'var(--text-white)', display: 'block', marginBottom: '6px' }}>Data Accuracy</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Warrant that all bonding certifications, insurance binders, and OSHA EMR safety ratings submitted are accurate and current.</span>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="prohibited-use" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  4. Prohibited Conduct
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  When accessing our digital infrastructure, you agree not to:
                </p>
                <ul style={{ paddingLeft: '24px', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                  <li>Deploy automated bots, scrapers, or spider scripts to harvest procurement lists, subcontractor contacts, or proprietary pricing schedules.</li>
                  <li>Transmit malware, viruses, or disruptive scripts designed to impair server performance.</li>
                  <li>Impersonate Clark Construction project managers, corporate officers, or safety executives.</li>
                  <li>Circumvent access controls on confidential project drawings or bidding packages.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="disclaimers" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  5. Engineering, Schedules & Forward-Looking Statements
                </h2>
                <div style={{ padding: '20px', backgroundColor: 'rgba(239, 68, 68, 0.04)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.15)', marginBottom: '16px' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
                    <strong>Disclaimer of Architectural Accuracy:</strong> Project renderings, milestone schedules, conceptual diagrams, and square-footage estimates presented on this website are for illustrative and informational marketing purposes only. Final construction specifications are governed exclusively by approved stamped construction documents and formal prime contracts.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="liability" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  6. Limitation of Liability
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                  To the maximum extent permitted by applicable law, Clark Construction Group, its directors, employees, and subcontractors shall not be liable for any indirect, punitive, incidental, or consequential damages resulting from the use or inability to use this website, including errors in bid transmission or service interruptions.
                </p>
              </section>

              {/* Section 7 */}
              <section id="governing-law" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  7. Governing Law & Dispute Resolution
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                  These Terms of Use shall be governed and interpreted in accordance with the laws of the State of Maryland and the Commonwealth of Virginia, without regard to conflict of law principles. Any legal action arising from these digital terms shall be filed in the state or federal courts located in Montgomery County, Maryland.
                </p>
              </section>

              {/* Section 8 */}
              <section id="contact-legal" style={{ paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  8. Legal Department Contact
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  For inquiries regarding intellectual property rights, subcontractor terms, or corporate compliance:
                </p>
                <div style={{ backgroundColor: 'var(--bg-deep)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Office of the General Counsel</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>Clark Construction Group, LLC</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>7500 Old Georgetown Road, Bethesda, MD 20814</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--accent-cobalt)', marginTop: '6px', fontWeight: 600 }}>legal@clarkconstruction.com</div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .terms-grid-layout {
            grid-template-columns: 1fr !important;
          }
          .terms-sidebar {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
