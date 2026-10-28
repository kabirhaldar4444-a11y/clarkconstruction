import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle, Globe as GlobeIcon } from 'lucide-react';
import Button from '../components/UI/Button';
import Accordion from '../components/UI/Accordion';
import Globe from '../components/UI/Globe';
import MarketHeroImg from '../assets/Market hero image.png';

/* Resource Section Custom Icons matching Clark Design */
function TeamIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 44 44" fill="#0060B6">
      <circle cx="22" cy="9.5" r="3.6" />
      <circle cx="12.5" cy="13.5" r="3.1" />
      <circle cx="31.5" cy="13.5" r="3.1" />
      <circle cx="5" cy="19.5" r="2.7" />
      <circle cx="39" cy="19.5" r="2.7" />
      <path d="M17.5 19 C17.5 16 19.5 14.5 22 14.5 C24.5 14.5 26.5 16 26.5 19 L26.5 21 C26.5 22 25.5 22.8 24.5 22.8 L19.5 22.8 C18.5 22.8 17.5 22 17.5 21 Z" />
      <path d="M8.8 22.5 C8.8 20 10.5 18.5 12.5 18.5 C13.8 18.5 14.8 19.2 15.4 20.2 C14.2 21.4 13.5 23 13.5 24.8 L13.5 26 L8 26 C7 26 6.5 25 6.5 24.2 C6.5 23.4 7.5 22.5 8.8 22.5 Z" />
      <path d="M28.6 20.2 C29.2 19.2 30.2 18.5 31.5 18.5 C33.5 18.5 35.2 20 35.2 22.5 C36.5 22.5 37.5 23.4 37.5 24.2 C37.5 25 37 26 36 26 L30.5 26 L30.5 24.8 C30.5 23 29.8 21.4 28.6 20.2 Z" />
      <path d="M2 28.5 C2 26.5 3.5 25 5 25 C6.5 25 7.6 25.8 8.2 27 C7.5 28.2 7.2 29.6 7.2 31 L7.2 32.5 L1.5 32.5 C0.7 32.5 0 31.8 0 30.8 C0 29.8 0.8 28.5 2 28.5 Z" />
      <path d="M35.8 27 C36.4 25.8 37.5 25 39 25 C40.5 25 42 26.5 42 28.5 C43.2 28.5 44 29.8 44 30.8 C44 31.8 43.3 32.5 42.5 32.5 L36.8 32.5 L36.8 31 C36.8 29.6 36.5 28.2 35.8 27 Z" />
    </svg>
  );
}

function DocumentPencilIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
      <path
        d="M10 6 H29 L37 14 V38 H10 V6 Z"
        stroke="#0060B6"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 6 V14 H37"
        stroke="#0060B6"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5 15 L29.5 19 L19 29.5 L14.5 29.5 L14.5 25 Z"
        fill="#0060B6"
      />
      <path
        d="M24 16.5 L28 20.5"
        stroke="#FFFFFF"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function VerificationBadgeIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
      <path
        d="M22 3.5
           L25.8 5.4 L30.2 4.9 L32.8 8.3 L36.9 10 L37.4 14.4 L40.5 17.5 L38.8 21.6 L40 25.8 L36.7 28.7 L36 33 L31.7 34 L29.2 37.4 L24.8 36.4 L22 38.8 L19.2 36.4 L14.8 37.4 L12.3 34 L8 33 L7.3 28.7 L4 25.8 L5.2 21.6 L3.5 17.5 L6.6 14.4 L7.1 10 L11.2 8.3 L13.8 4.9 L18.2 5.4 Z"
        fill="#0060B6"
      />
      <path
        d="M15 22.5 L20 27.5 L30 16.5"
        stroke="#FFFFFF"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FactSheetIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
      <path
        d="M20 9 C14.5 9 8.5 7 4.5 5 V33.5 C8.5 35.5 14.5 37.5 20 37.5 Z"
        fill="#0060B6"
      />
      <path
        d="M24 9 C29.5 9 35.5 7 39.5 5 V33.5 C35.5 35.5 29.5 37.5 24 37.5 Z"
        fill="#0060B6"
      />
    </svg>
  );
}

const OFFICES = [
  {
    city: "San Francisco HQ",
    address: "181 Fremont St",
    zip: "San Francisco, CA 94105",
    phone: "+1 (800) 555-0199",
    email: "sf@clarkconstruction.com"
  },
  {
    city: "Mid-Atlantic Office",
    address: "420 Constitution Ave NE",
    zip: "Washington, DC 20002",
    phone: "+1 (202) 555-0143",
    email: "dc@clarkconstruction.com"
  },
  {
    city: "Southwest Office",
    address: "500 Phoenix Plaza, Suite 12",
    zip: "Phoenix, AZ 85001",
    phone: "+1 (602) 555-0188",
    email: "phx@clarkconstruction.com"
  }
];

const FAQS = [
  {
    title: "How do I request a budget estimation for a project?",
    content: "Submit your details via this contact form or email our preconstruction team directly at rfp@clarkconstruction.com. Please attach any preliminary architectural specs, soil surveys, or land plots. Our surveyors will reply in 3-5 business days."
  },
  {
    title: "Does Clark Construction handle design-build or just general contracting?",
    content: "We deliver both. While we operate as general contractors on many civil infrastructure bids, we specialize in single-point-of-contact Design-Build services, managing the architectural team, engineering checks, and construction crews concurrently."
  },
  {
    title: "What BIM software configurations does your VDC team utilize?",
    content: "Our virtual design and construction divisions build models in Autodesk Revit, run automated clash checks via Navisworks Manage, compile topography sweeps with drone photogrammetry, and coordinate coordinates using Trimble Robotic Total Stations."
  },
  {
    title: "Is Clark Construction licensed to operate nationwide?",
    content: "Yes, Clark Construction is fully bonded, insured, and licensed to deliver heavy civil, commercial, and multi-family residential projects across all 50 states. We operate regional field offices to oversee localized subcontractors and compliance audits."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: 'Commercial', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activePin, setActivePin] = useState('San Francisco HQ');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim() || formData.name.length < 3) {
      tempErrors.name = 'Name must be at least 3 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    const phoneRegex = /^\+?([0-9]{1,3})?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      tempErrors.message = 'Please type a message of at least 10 characters.';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', projectType: 'Commercial', message: '' });
    }, 1500);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src={MarketHeroImg}
            alt="Steel framing and scaffolding background"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Establish Contact</span>
          <h1 className="page-hero-title">Contact Us</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            Get in touch with our estimators, managers, and safety compliance division leads.
          </p>
        </div>
      </section>

      {/* Resources & Key Portals (Below Hero) */}
      <section className="contact-resources-section">
        <div className="container">
          <div className="contact-resources-grid">
            
            {/* 1. Employment Opportunities */}
            <div className="contact-resource-item">
              <div className="contact-resource-icon" aria-hidden="true">
                <TeamIcon />
              </div>
              <div className="contact-resource-content">
                <h3>
                  <Link to="/fraudulent-employment-opportunity-disclaimer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Employment Opportunities
                  </Link>
                </h3>
                <p>
                  If you think you might have seen a fraudulent job posting or have received an unsolicited interview request for a position at Clark, please click{' '}
                  <Link
                    to="/fraudulent-employment-opportunity-disclaimer"
                    className="contact-inline-link"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* 2. Trade Contractor Interest Form */}
            <div className="contact-resource-item">
              <div className="contact-resource-icon" aria-hidden="true">
                <DocumentPencilIcon />
              </div>
              <div className="contact-resource-content">
                <h3>
                  <Link to="/trade-contractor-interest-form" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Trade Contractor Interest Form
                  </Link>
                </h3>
                <p>
                  We invite firms to submit their interest in working with Clark on future opportunities. To fill out the trade contractor interest form, please click{' '}
                  <Link to="/trade-contractor-interest-form" className="contact-inline-link">
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* 3. Employment Verification */}
            <div className="contact-resource-item">
              <div className="contact-resource-icon" aria-hidden="true">
                <VerificationBadgeIcon />
              </div>
              <div className="contact-resource-content">
                <h3>
                  <Link to="/employment-verification" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Employment Verification
                  </Link>
                </h3>
                <p>
                  If you want to verify employment for an employee, please click{' '}
                  <Link
                    to="/employment-verification"
                    className="contact-inline-link"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* 4. Company Fact Sheet */}
            <div className="contact-resource-item">
              <div className="contact-resource-icon" aria-hidden="true">
                <FactSheetIcon />
              </div>
              <div className="contact-resource-content">
                <h3>
                  <a
                    href="/Company-Fact-Sheet-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Company Fact Sheet
                  </a>
                </h3>
                <p>
                  View our{' '}
                  <a
                    href="/Company-Fact-Sheet-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-inline-link"
                  >
                    company fact sheet
                  </a>{' '}
                  for more information about Clark Construction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Split Layout: Form & Details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
          
          {/* Left: Contact Form */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-premium)'
          }}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }} className="animate-fade">
                <CheckCircle size={56} color="var(--success)" style={{ margin: '0 auto 20px auto' }} />
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '10px' }}>Message Dispatched!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
                  Your brief has been logged. A Clark Construction division manager or quantity surveyor will contact you shortly.
                </p>
                <Button onClick={() => setSuccess(false)} variant="primary">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className="subtitle-amber" style={{ marginBottom: 0 }}>Project inquiry</span>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '8px' }}>Send Us a Message</h2>

                {/* Name */}
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Johnathan Doe"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="john@email.com"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="123-456-7890"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>

                {/* Project Selector */}
                <div className="form-group">
                  <label className="form-label">Project Category *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="Commercial">Commercial (High-rise / Retail)</option>
                    <option value="Infrastructure">Infrastructure (Civil / Transit)</option>
                    <option value="Healthcare">Healthcare (Hospitals / Labs)</option>
                    <option value="Education">Education (University / Schools)</option>
                    <option value="Residential">Residential Townhomes</option>
                  </select>
                </div>

                {/* Message Brief */}
                <div className="form-group">
                  <label className="form-label">Project Brief & Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="form-control"
                    placeholder="Provide details on project square footage, timeline, and city..."
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <Button type="submit" variant="primary" disabled={submitting} icon={Send} style={{ width: '100%' }}>
                  {submitting ? 'Sending Message...' : 'Submit Inquiry'}
                </Button>
              </form>
            )}
          </div>

          {/* Right: Office cards & Map mockup */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <span className="subtitle-amber" style={{ marginBottom: 0 }}>Global Presence</span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-white)' }}>Our Offices</h2>
            
            {/* Offices list */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {OFFICES.map((office, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePin(office.city)}
                  style={{
                    backgroundColor: activePin === office.city ? 'rgba(0, 214, 171, 0.05)' : 'var(--bg-card)',
                    border: '1px solid',
                    borderColor: activePin === office.city ? 'var(--primary)' : 'var(--border-color)',
                    padding: '24px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color={activePin === office.city ? 'var(--primary)' : 'var(--text-muted)'} />
                    {office.city}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: '1.5' }}>
                    {office.address}<br />{office.zip}
                  </p>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {office.phone}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {office.email}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive 3D Earth Globe Component */}
            <Globe
              activeLocation={activePin}
              onSelectLocation={setActivePin}
              style={{ height: '380px', width: '100%' }}
            />
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <HelpCircle size={32} color="var(--primary)" style={{ margin: '0 auto 12px auto' }} />
            <span className="subtitle-amber">Answers & Support</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-white)' }}>Frequently Asked Questions</h2>
          </div>

          <Accordion items={FAQS} allowMultiple={false} />
        </div>
      </section>
    </div>
  );
}
