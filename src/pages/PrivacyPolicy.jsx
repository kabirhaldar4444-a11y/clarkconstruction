import React, { useState } from 'react';
import { ShieldCheck, Lock, FileText, UserCheck, Eye, HelpCircle, Server, Globe, ArrowRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/UI/Button';
import HeroBg from '../assets/Market hero image.png';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('collection');

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
    { id: 'collection', label: '1. Information We Collect' },
    { id: 'usage', label: '2. How We Use Information' },
    { id: 'sharing', label: '3. Information Sharing & Disclosure' },
    { id: 'cookies', label: '4. Cookies & Analytics' },
    { id: 'security', label: '5. Data Security & Storage' },
    { id: 'rights', label: '6. Your Privacy Rights (CCPA/GDPR)' },
    { id: 'retention', label: '7. Data Retention' },
    { id: 'contact', label: '8. Contact Privacy Office' }
  ];

  return (
    <div className="privacy-policy-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={HeroBg}
            alt="Clark Construction corporate operations"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Legal & Compliance &gt; Privacy</span>
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Clark Construction Group is committed to protecting the privacy, security, and confidential data of our clients, trade partners, workforce candidates, and website visitors.
          </p>
        </div>
      </section>

      {/* Highlights Bar */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)', padding: '24px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Status</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Effective August 2026</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(37, 99, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cobalt)' }}>
              <Lock size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Encryption</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>256-Bit TLS & SOC 2</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
              <UserCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Consumer Pledge</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Zero Data Monetization</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Globe size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Compliance</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>CCPA, CPRA & GDPR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 280px) 1fr', gap: '48px', alignItems: 'start' }} className="privacy-grid-layout">
            {/* Quick Sticky Table of Contents */}
            <aside style={{ position: 'sticky', top: '110px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-premium)' }} className="privacy-sidebar">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
                Policy Sections
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
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Have questions about your data?
                </div>
                <Button to="/contact" variant="outline" style={{ width: '100%', fontSize: '0.85rem', padding: '8px 14px' }}>
                  Contact Privacy Officer
                </Button>
              </div>
            </aside>

            {/* Detailed Content */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '40px', boxShadow: 'var(--shadow-premium)' }}>
              
              {/* Introduction */}
              <div style={{ marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid var(--border-color)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  This Privacy Policy outlines the types of personal and organizational information collected by <strong>Clark Construction Group, LLC</strong> and its operating subsidiaries (collectively, "Clark", "we", "our", or "us"), how we utilize, store, share, and protect this information, and the choices available to you regarding our data handling practices.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                  This policy applies to all interactions across our corporate websites, digital project platforms, subcontractor prequalification portals (including SDBX), mobile applications, job application portals, and offline business engagements.
                </p>
              </div>

              {/* Section 1 */}
              <section id="collection" style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <FileText size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>1. Information We Collect</h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  We collect information in several ways depending on how you interact with Clark Construction:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                  <div style={{ padding: '18px 22px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px' }}>
                      A. Directly Provided Information
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                      Includes contact details (name, email address, corporate phone number, company name, office location) submitted when filling out contact forms, registering for subcontractor bidding, subscribing to news digests, or requesting RFP packets.
                    </p>
                  </div>

                  <div style={{ padding: '18px 22px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px' }}>
                      B. Subcontractor & Vendor Prequalification Data
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                      Includes trade licensing, OSHA safety rating logs (EMR), bonding capacity statements, financial audits, insurance certificates, diversity certifications (MBE/WBE/DBE/SDVOB), and union affiliations submitted through our Strategic Partnership and trade contractor portals.
                    </p>
                  </div>

                  <div style={{ padding: '18px 22px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px' }}>
                      C. Employment & Applicant Information
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                      Resumes, employment history, academic transcripts, professional engineering licenses, references, and background verification details provided via our career portal or recruiting partners.
                    </p>
                  </div>

                  <div style={{ padding: '18px 22px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '6px' }}>
                      D. Automatically Collected Technical Data
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                      IP addresses, browser type, device specifications, operating system, referrer URLs, pages visited, duration of visit, and interaction timestamps collected via server logs and telemetry scripts.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="usage" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Eye size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>2. How We Use Your Information</h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Clark Construction strictly uses collected data for legitimate commercial, operational, and safety purposes:
                </p>
                <ul style={{ paddingLeft: '24px', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                  <li><strong>Project Delivery & Procurement:</strong> Evaluating bid proposals, awarding subcontractor packages, executing contracts, and coordinating jobsite access.</li>
                  <li><strong>Worksite Safety & Compliance:</strong> Enforcing stringent jobsite security, badging requirements, OSHA reporting, and incident management protocols.</li>
                  <li><strong>Talent Recruitment:</strong> Assessing applicant qualifications, scheduling interviews, and managing onboarding for engineering and craft roles.</li>
                  <li><strong>Stakeholder Communications:</strong> Delivering press releases, project milestone announcements, and strategic partnership updates.</li>
                  <li><strong>Digital Infrastructure Optimization:</strong> Monitoring site traffic, preventing unauthorized intrusion, and enhancing user experience.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="sharing" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Server size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>3. Information Sharing & Disclosure</h2>
                </div>
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '16px 20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <strong style={{ color: '#065F46', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} /> Our Zero Data-Selling Commitment
                  </strong>
                  <p style={{ fontSize: '0.9rem', color: '#065F46', margin: '6px 0 0 0' }}>
                    Clark Construction does not sell, rent, lease, or monetize your personal data to any third-party marketing brokers under any circumstances.
                  </p>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '14px' }}>
                  We disclose information only to the following authorized parties:
                </p>
                <ul style={{ paddingLeft: '24px', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                  <li><strong>Subsidiaries & Affiliates:</strong> Operating entities within the Clark Group (including Guy F. Atkinson, Clark Concrete, Clark Civil, and C3M Power Systems) to support joint venture execution.</li>
                  <li><strong>Trusted Service Providers:</strong> Secure enterprise software vendors hosting our cloud ERP, BIM collaboration tools, payroll, and recruitment portals.</li>
                  <li><strong>Legal & Regulatory Authorities:</strong> Federal, state, and local compliance bodies when required by subpoena, audit, or mandatory safety disclosure laws.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="cookies" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Globe size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>4. Cookies & Analytics Technologies</h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Our website uses strictly necessary and performance cookies to maintain session states, remember language preferences, and gather aggregated telemetry through analytics engines. You can manage or disable cookie preferences at any time via your browser settings.
                </p>
              </section>

              {/* Section 5 */}
              <section id="security" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Lock size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>5. Data Security & Storage</h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Clark employs enterprise-grade administrative, physical, and technical defenses to prevent unauthorized access, disclosure, alteration, or destruction of information. All transmission of sensitive financial and proprietary project data is protected with 256-bit SSL/TLS encryption protocols.
                </p>
              </section>

              {/* Section 6 */}
              <section id="rights" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <UserCheck size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>6. Your Privacy Rights (CCPA / GDPR)</h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Depending on your jurisdiction, you may have the following statutory privacy rights:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div style={{ padding: '16px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ color: 'var(--text-white)', display: 'block', marginBottom: '4px' }}>Right to Know & Access</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Request a summary of the personal data categories we have gathered regarding you.</span>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ color: 'var(--text-white)', display: 'block', marginBottom: '4px' }}>Right to Deletion</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Request erasure of your personal data, subject to statutory record-retention laws.</span>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ color: 'var(--text-white)', display: 'block', marginBottom: '4px' }}>Right to Rectification</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Correct inaccurate or incomplete contractor, vendor, or applicant records.</span>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: 'var(--bg-deep)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ color: 'var(--text-white)', display: 'block', marginBottom: '4px' }}>Non-Discrimination</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Exercising your privacy rights will never result in altered service levels or penalty.</span>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="retention" style={{ marginBottom: '48px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <HelpCircle size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>7. Data Retention</h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                  We retain personal information for the period necessary to fulfill the purposes outlined in this Privacy Policy, satisfy contractual construction guarantees, adhere to statutory statutes of limitation, and comply with state and federal construction records laws.
                </p>
              </section>

              {/* Section 8 */}
              <section id="contact" style={{ paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Mail size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>8. Contact the Privacy Office</h2>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '20px' }}>
                  To submit a formal data privacy request or inquire about our compliance practices, please reach out directly:
                </p>

                <div style={{ backgroundColor: 'var(--bg-deep)', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={20} style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--text-white)', display: 'block', fontSize: '0.95rem' }}>Corporate Headquarters</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', display: 'block' }}>
                        Clark Construction Group, LLC<br />
                        Attn: Office of the General Counsel (Privacy)<br />
                        7500 Old Georgetown Road<br />
                        Bethesda, MD 20814
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Mail size={20} style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--text-white)', display: 'block', fontSize: '0.95rem' }}>Direct Email</strong>
                      <a href="mailto:privacy@clarkconstruction.com" style={{ fontSize: '0.85rem', color: 'var(--accent-cobalt)', fontWeight: 600 }}>
                        privacy@clarkconstruction.com
                      </a>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                        Response SLA: Within 48 business hours
                      </span>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .privacy-grid-layout {
            grid-template-columns: 1fr !important;
          }
          .privacy-sidebar {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
