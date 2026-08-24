import React, { useState } from 'react';
import { Eye, CheckCircle2, Monitor, Keyboard, Headphones, Sparkles, MessageSquare, Mail, Phone, Heart, Award, ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';
import HeroBg from '../assets/careers_hero.png';

export default function AccessibilityStatement() {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pageUrl: '',
    assistiveTech: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackSent(true);
  };

  return (
    <div className="accessibility-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={HeroBg}
            alt="Clark Construction workforce and digital inclusion"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Inclusion & Usability &gt; Accessibility</span>
          <h1 className="page-hero-title">Accessibility Statement</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Clark Construction Group is dedicated to ensuring digital accessibility, universal usability, and equal access for people of all abilities.
          </p>
        </div>
      </section>

      {/* Standards Badges */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)', padding: '24px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
              <CheckCircle2 size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Standard Target</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>WCAG 2.1 Level AA</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Federal Standard</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Section 508 & ADA</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(37, 99, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cobalt)' }}>
              <Keyboard size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Interaction</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Full Keyboard Navigation</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(13, 26, 99, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Headphones size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Audit Cycle</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Quarterly Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitment Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <span className="subtitle-amber">Universal Usability</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '18px' }}>
                Our Commitment to Equal Digital Access
              </h2>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '16px' }}>
                At Clark Construction Group, our value of <em>"Building What Matters"</em> extends directly into the digital spaces where we engage with community members, prospective employees, trade partners, and clients.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                We actively apply the Web Content Accessibility Guidelines (WCAG 2.1 AA) established by the World Wide Web Consortium (W3C) across our website design, code architecture, and downloadable materials to ensure everyone can easily navigate and benefit from our platforms.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', padding: '32px', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)', marginBottom: '16px', fontWeight: 700 }}>
                Key Implemented Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { title: "Semantic HTML5 Hierarchy", desc: "Structured headings (H1-H4), landmark regions (<nav>, <main>, <footer>), and descriptive ARIA attributes." },
                  { title: "High-Contrast Visual Palette", desc: "Color contrast ratios exceeding 4.5:1 for standard text and 3:1 for large graphical components." },
                  { title: "Descriptive Alternative Text", desc: "Meaningful alt attributes for architectural photography, blueprints, and BIM infrastructure renders." },
                  { title: "Focus & Keystroke Optimization", desc: "Clear visual focus outlines and logical tab orders for seamless keyboard-only navigation." }
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>{feat.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{feat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Supported Technologies & Environments */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-white)', marginBottom: '24px', textAlign: 'center' }}>
              Compatibility with Assistive Technologies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <Monitor size={28} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '8px' }}>Screen Readers</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Tested and optimized for modern screen reader software including NVDA, JAWS on Windows, VoiceOver on macOS/iOS, and TalkBack on Android.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <Keyboard size={28} style={{ color: 'var(--accent-cobalt)', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '8px' }}>Keyboard Interaction</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  All interactive dialogs, carousels, modal viewports, dropdown menus, and bidding forms can be operated using standard keyboard shortcuts (Tab, Shift+Tab, Enter, Space, Escape).
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <Sparkles size={28} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '8px' }}>Viewport & Magnification</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Fully responsive vector layouts that support text zoom up to 200% without loss of functionality, layout collisions, or horizontal scrolling clipping.
                </p>
              </div>
            </div>
          </div>

          {/* Feedback & Assistance Form */}
          <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '40px', boxShadow: 'var(--shadow-premium)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
              <div>
                <span className="subtitle-amber">Assistance & Feedback</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '14px' }}>
                  Need Accessibility Assistance?
                </h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '24px' }}>
                  If you encounter any difficulty accessing content, navigating a job portal, or reviewing bidding specifications on our site, our Accessibility Support Team is here to help. We are committed to resolving barriers promptly.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail size={20} style={{ color: 'var(--primary)' }} />
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Email Support</span>
                      <a href="mailto:accessibility@clarkconstruction.com" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cobalt)' }}>
                        accessibility@clarkconstruction.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone size={20} style={{ color: 'var(--primary)' }} />
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Accessibility Hotline</span>
                      <a href="tel:+18005552527" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cobalt)' }}>
                        1-800-555-CLARK (Ext. 408)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Feedback Form */}
              <div style={{ backgroundColor: 'var(--bg-deep)', padding: '28px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                {feedbackSent ? (
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-white)', marginBottom: '8px' }}>Report Received</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      Thank you for helping us improve our website accessibility. Our technical team will review the issue and contact you within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '16px', fontWeight: 700 }}>
                      Report an Accessibility Barrier
                    </h4>
                    
                    <div className="form-group" style={{ marginBottom: '14px' }}>
                      <label className="form-label" style={{ fontSize: '0.8rem' }}>Your Name</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ padding: '10px 14px', fontSize: '0.875rem' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '14px' }}>
                      <label className="form-label" style={{ fontSize: '0.8rem' }}>Email Address</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ padding: '10px 14px', fontSize: '0.875rem' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '14px' }}>
                      <label className="form-label" style={{ fontSize: '0.8rem' }}>Page URL / Topic</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g., /careers or /business/trade-contractors"
                        value={formData.pageUrl}
                        onChange={(e) => setFormData({ ...formData, pageUrl: e.target.value })}
                        style={{ padding: '10px 14px', fontSize: '0.875rem' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '18px' }}>
                      <label className="form-label" style={{ fontSize: '0.8rem' }}>Description of Issue</label>
                      <textarea
                        required
                        rows={3}
                        className="form-control"
                        placeholder="Please describe what you were trying to accomplish and the barrier encountered..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        style={{ padding: '10px 14px', fontSize: '0.875rem', resize: 'vertical' }}
                      />
                    </div>

                    <Button type="submit" variant="primary" style={{ width: '100%', padding: '12px' }}>
                      Submit Feedback
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
