import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, Send
} from 'lucide-react';
import Button from '../components/UI/Button';
import TradeHeroImg from '../assets/trade_contractors_hero.png';
import TradeSafetyImg from '../assets/trade_contractors_safety.png';

export default function TradeContractors() {
  const [formData, setFormData] = useState({
    firmName: '',
    contactName: '',
    email: '',
    phone: '',
    specialty: '',
    unionStatus: 'Union',
    certifications: {
      mbe: false,
      wbe: false,
      dbe: false,
      dvbe: false,
      none: true
    },
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firmName || !formData.contactName || !formData.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        firmName: '',
        contactName: '',
        email: '',
        phone: '',
        specialty: '',
        unionStatus: 'Union',
        certifications: { mbe: false, wbe: false, dbe: false, dvbe: false, none: true },
        message: ''
      });
    }, 1200);
  };

  const handleCheckboxChange = (cert) => {
    if (cert === 'none') {
      setFormData({
        ...formData,
        certifications: { mbe: false, wbe: false, dbe: false, dvbe: false, none: true }
      });
    } else {
      setFormData({
        ...formData,
        certifications: {
          ...formData.certifications,
          [cert]: !formData.certifications[cert],
          none: false
        }
      });
    }
  };

  const steps = [
    {
      step: "Step 1",
      title: "Interest Form",
      desc: "Fill out the trade contractor interest form to provide an overview of your company and capabilities."
    },
    {
      step: "Step 2",
      title: "Introductory Meeting",
      desc: "Our Subcontractor Development Group, a critical connection point between Clark and our small business partners, will review your information and, if appropriate, schedule an introductory meeting."
    },
    {
      step: "Step 3",
      title: "Prequalification",
      desc: "Small businesses with relevant capabilities and capacity will be encouraged to complete Clark's formal Subcontractor Qualification Application (SQA)."
    },
    {
      step: "Step 4",
      title: "Ongoing Engagement",
      desc: "Small businesses and Clark then maintain contact and communication about ongoing opportunities to budget and/or bid on projects and ways to align capabilities with one of Clark's small business capacity-building programs, like the Strategic Partnership Program."
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={TradeHeroImg}
            alt="Safety briefing and trade contractor operations"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Business With Us &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>Trade Contractors</span>
            </span>
            <h1 className="page-hero-title">Trade Contractors</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', marginTop: '10px', lineHeight: '1.7' }}>
              Great project partners help make our success as a builder possible. We assemble teams of skilled and highly-qualified trade contractors dedicated to craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section: Form & Safety Image */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
          
          {/* Left Block: Text, Image & Safety Caption */}
          <div>
            <span className="subtitle-amber">Working With Clark</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Interested in Working with Clark?</h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.025rem', lineHeight: '1.6', marginBottom: '24px' }}>
              We invite firms to submit their interest in working with Clark on future opportunities by filling out our trade contractor interest form. We form long-term bonds with regional trade teams who share our commitment to safety and quality.
            </p>

            {/* Safety Week Image Container */}
            <div style={{
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-card)',
              padding: '16px'
            }}>
              <img
                src={TradeSafetyImg}
                alt="Trade contractor receives a safety helmet as part of Safety Week"
                style={{ width: '100%', borderRadius: '4px', display: 'block', height: '240px', objectFit: 'cover' }}
              />
              <div style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontStyle: 'italic'
              }}>
                <ShieldCheck size={14} color="var(--primary)" />
                <span>Trade contractor receives a safety helmet as part of Safety Week</span>
              </div>
            </div>
          </div>

          {/* Right Block: Trade Contractor Interest Form Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-premium)',
            position: 'sticky',
            top: '110px'
          }}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }} className="animate-fade">
                <CheckCircle2 size={56} color="var(--success)" style={{ margin: '0 auto 20px auto' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '10px' }}>Interest Logged!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
                  Thank you for registering your interest. Our Subcontractor Development Group has received your profile and will follow up with SQA TradeTapp prequalification links.
                </p>
                <Button onClick={() => setSuccess(false)} variant="primary">
                  Submit Another Profile
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span className="subtitle-amber" style={{ marginBottom: 0 }}>Register Interest</span>
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', marginBottom: '8px' }}>Trade Contractor Interest Form</h3>

                <input
                  type="text"
                  placeholder="Firm / Company Name"
                  value={formData.firmName}
                  onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
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
                  placeholder="Contact Person Name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
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
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'var(--bg-deep)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '4px',
                      color: 'var(--text-white)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input
                    type="text"
                    placeholder="Sub-Trade (e.g. Masonry)"
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
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
                  <select
                    value={formData.unionStatus}
                    onChange={(e) => setFormData({ ...formData, unionStatus: e.target.value })}
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
                    <option value="Union">Union Firm</option>
                    <option value="Open Shop">Open Shop / Non-Union</option>
                    <option value="Both">Co-exist / Mixed Crews</option>
                  </select>
                </div>

                {/* Small Business Certifications */}
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                    Small Business Certifications (SDBE15 Eligible)
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.85rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={formData.certifications.mbe} onChange={() => handleCheckboxChange('mbe')} />
                      <span>MBE (Minority)</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.85rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={formData.certifications.wbe} onChange={() => handleCheckboxChange('wbe')} />
                      <span>WBE (Women-Owned)</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.85rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={formData.certifications.dbe} onChange={() => handleCheckboxChange('dbe')} />
                      <span>DBE (Disadvantaged)</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.85rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={formData.certifications.dvbe} onChange={() => handleCheckboxChange('dvbe')} />
                      <span>DVBE (Vet-Owned)</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.85rem', cursor: 'pointer', gridColumn: 'span 2' }}>
                      <input type="checkbox" checked={formData.certifications.none} onChange={() => handleCheckboxChange('none')} />
                      <span>None / Non-Small Business Enterprise</span>
                    </label>
                  </div>
                </div>

                <textarea
                  placeholder="Provide a summary of core credentials, licensing details, and safety rating indices..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

                <Button type="submit" variant="primary" disabled={loading} icon={Send}>
                  {loading ? 'Submitting...' : 'Submit Interest Form'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Small Business Participation Timelines */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Diversity & Inclusion</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Small Business Participation</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
              Small businesses play a vital role in every project we build. Their perspectives and skills strengthen our projects, industry, and community. Through initiatives such as SDBE15, we are committed to maximizing small business participation on our projects.
            </p>
          </div>

          <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '32px', textAlign: 'center', fontWeight: 800 }}>
            Are you a small business looking to work with Clark?
          </h3>

          {/* Stepper Steps grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  padding: '30px',
                  borderRadius: '6px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '30px',
                  backgroundColor: 'var(--primary)',
                  color: '#FFF',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  border: '3px solid var(--bg-deep)'
                }}>
                  {step.step}
                </div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontWeight: 700, marginTop: '10px', marginBottom: '12px' }}>{step.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prequalification Process & SPP */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* SQA Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span className="subtitle-amber">Risk Prequalification</span>
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.6rem', marginBottom: '16px', fontWeight: 800 }}>Prequalification Process</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '24px' }}>
                All trade contractors need to complete our Subcontractor Qualification Application to be eligible to bid on our projects and contract with Clark. Clark uses TradeTapp, a BuildingConnected product, to assist our team in prequalifying trade contractors. If your company has a TradeTapp and/or BuildingConnected account already, you should skip setup and log in using your existing credentials.
              </p>
            </div>
            <Button href="https://www.buildingconnected.com" target="_blank" variant="primary" style={{ alignSelf: 'flex-start' }}>
              REGISTER NOW
            </Button>
          </div>

          {/* SPP Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span className="subtitle-amber">Capacity Building</span>
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.6rem', marginBottom: '16px', fontWeight: 800 }}>Strategic Partnership Program</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Clark's Strategic Partnership Program (SPP) is an essential component of our commitment to fostering economic opportunities that strengthen small businesses, our communities, and our industry.
              </p>
            </div>
            <Button to="/business/strategic-partnership" variant="secondary" style={{ alignSelf: 'flex-start' }}>
              Learn More
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
