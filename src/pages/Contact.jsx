import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle, Globe } from 'lucide-react';
import Button from '../components/UI/Button';
import Accordion from '../components/UI/Accordion';

const OFFICES = [
  {
    city: "Seattle HQ",
    address: "100 Clark Tower Parkway, Suite 450",
    zip: "Seattle, WA 98101",
    phone: "+1 (800) 555-0199",
    email: "seattle@clarkconstruction.com"
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
  const [activePin, setActivePin] = useState('Seattle HQ');

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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600"
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
                <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '10px' }}>Message Dispatched!</h3>
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
                <h2 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '8px' }}>Send Us a Message</h2>

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
            <h2 style={{ fontSize: '2.2rem', color: '#FFF' }}>Our Offices</h2>
            
            {/* Offices list */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {OFFICES.map((office, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePin(office.city)}
                  style={{
                    backgroundColor: activePin === office.city ? 'rgba(217, 119, 6, 0.05)' : 'var(--bg-card)',
                    border: '1px solid',
                    borderColor: activePin === office.city ? 'var(--primary)' : 'var(--border-color)',
                    padding: '24px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
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

            {/* Mock Google Map - Dark aesthetic custom vector */}
            <div style={{
              height: '220px',
              backgroundColor: '#07090E',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <Globe size={100} style={{ color: 'rgba(255, 255, 255, 0.02)', position: 'absolute' }} />
              
              {/* Map grid lines */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(rgba(217,119,6,0.1) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }} />

              {/* Map Pins */}
              {/* Seattle Pin (Northwest) */}
              <div
                onClick={() => setActivePin('Seattle HQ')}
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: '70px',
                  cursor: 'pointer',
                  zIndex: 2
                }}
              >
                <div style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: activePin === 'Seattle HQ' ? 'var(--primary)' : 'var(--text-muted)',
                  border: '2px solid #000',
                  boxShadow: activePin === 'Seattle HQ' ? 'var(--shadow-glow)' : 'none',
                  transition: 'var(--transition-fast)'
                }} />
                {activePin === 'Seattle HQ' && (
                  <span style={{ position: 'absolute', top: '-24px', left: '-20px', backgroundColor: 'var(--primary)', color: '#FFF', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '3px', fontWeight: 800, whiteSpace: 'nowrap' }}>
                    Seattle HQ
                  </span>
                )}
              </div>

              {/* Arizona Pin (Southwest) */}
              <div
                onClick={() => setActivePin('Southwest Office')}
                style={{
                  position: 'absolute',
                  top: '130px',
                  left: '120px',
                  cursor: 'pointer',
                  zIndex: 2
                }}
              >
                <div style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: activePin === 'Southwest Office' ? 'var(--primary)' : 'var(--text-muted)',
                  border: '2px solid #000',
                  boxShadow: activePin === 'Southwest Office' ? 'var(--shadow-glow)' : 'none',
                  transition: 'var(--transition-fast)'
                }} />
                {activePin === 'Southwest Office' && (
                  <span style={{ position: 'absolute', top: '18px', left: '-30px', backgroundColor: 'var(--primary)', color: '#FFF', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '3px', fontWeight: 800, whiteSpace: 'nowrap' }}>
                    Phoenix
                  </span>
                )}
              </div>

              {/* Washington DC Pin (East Coast) */}
              <div
                onClick={() => setActivePin('Mid-Atlantic Office')}
                style={{
                  position: 'absolute',
                  top: '90px',
                  left: '260px',
                  cursor: 'pointer',
                  zIndex: 2
                }}
              >
                <div style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: activePin === 'Mid-Atlantic Office' ? 'var(--primary)' : 'var(--text-muted)',
                  border: '2px solid #000',
                  boxShadow: activePin === 'Mid-Atlantic Office' ? 'var(--shadow-glow)' : 'none',
                  transition: 'var(--transition-fast)'
                }} />
                {activePin === 'Mid-Atlantic Office' && (
                  <span style={{ position: 'absolute', top: '-24px', left: '-40px', backgroundColor: 'var(--primary)', color: '#FFF', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '3px', fontWeight: 800, whiteSpace: 'nowrap' }}>
                    Washington DC
                  </span>
                )}
              </div>

              <span style={{ position: 'absolute', bottom: '12px', right: '16px', fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Globe size={12} /> Interactive Regional Map Mockup
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <HelpCircle size={32} color="var(--primary)" style={{ margin: '0 auto 12px auto' }} />
            <span className="subtitle-amber">Answers & Support</span>
            <h2 style={{ fontSize: '2.4rem', color: '#FFF' }}>Frequently Asked Questions</h2>
          </div>

          <Accordion items={FAQS} allowMultiple={false} />
        </div>
      </section>
    </div>
  );
}
