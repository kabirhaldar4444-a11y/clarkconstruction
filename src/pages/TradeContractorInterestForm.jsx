import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import LogoImg from '../assets/logo.png';

const MARKETS = [
  'Mid-Atlantic (DC, MD, VA)',
  'Baltimore',
  'Richmond',
  'Chicago',
  'Nashville',
  'Kansas City',
  'Houston',
  'Seattle',
  'San Francisco',
  'Los Angeles',
  'San Diego',
  'Phoenix',
  'Reno',
  'Atlanta',
  'Charlotte',
  'Jacksonville',
  'Charleston'
];

const FEDERAL_CERTS = [
  'N/A - Large Business',
  'N/A - Small/Diverse Business, But Not Certified',
  'Small Business (SB)',
  'Small Disadvantaged Business (SDB)',
  'Women-Owned Small Business (WOSB)',
  'HUBZone Certified Business (HUBZ)',
  'Veteran-Owned Small Business (VOSB)',
  'Service-Disabled Veteran-Owned Small Business (SDVOSB)',
  'Disadvantaged Business Enterprise (DBE)'
];

const STATE_LOCAL_CERTS = [
  'Minority Business Enterprise (MBE)',
  'Women-Owned Business Enterprise (WBE)',
  'Disadvantaged Business Enterprise (DBE)',
  'Local Business Enterprise (LBE)',
  'Jacksonville Small Emerging Business (JSEB)',
  'LGBT Business Enterprise (LGBTBE)',
  'DC Certified Business Enterprise (CBE) through DSLBD'
];

const BONDING_TIERS = [
  'No bonding capacity currently',
  '$1 - $100,000',
  '$100,001 - $500,000',
  '$500,001 - $1 million',
  '$1 million - $5 million',
  '$5 million - $10 million',
  '$10 million - $15 million',
  '$15 million - $20 million',
  '$20 million or greater'
];

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming', 'All 50 States (Nationwide)'
];

const TRADES_LIST = [
  'Concrete / Cast-in-Place',
  'Drywall, Framing & Acoustical',
  'Electrical & Low Voltage',
  'Elevators & Conveyance',
  'Earthwork & Grading',
  'Fire Protection & Sprinklers',
  'Glass, Glazing & Curtainwall',
  'HVAC & Mechanical',
  'Heavy Civil & Marine',
  'Masonry & Stone',
  'Painting & Wall Coverings',
  'Plumbing & Piping',
  'Roofing & Waterproofing',
  'Structural Steel & Metal Fabrication',
  'Tile & Flooring Finishes',
  'Demolition & Environmental Abatement',
  'Utilities & Infrastructure',
  'Other Specialty Trade'
];

export default function TradeContractorInterestForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneCode: '+1',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    website: '',
    trade: '',
    unionStatus: '',
    licensedStates: '',
    activeMarkets: [],
    federalCerts: [],
    stateCerts: [],
    otherCerts: '',
    largestContract: '',
    rightSizedProject: '',
    singleBonding: '$1 million - $5 million',
    aggregateBonding: '',
    referralSource: '',
    sendCopy: false
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleMultiCheckbox = (group, item) => {
    setFormData((prev) => {
      const currentList = prev[group] || [];
      const updated = currentList.includes(item)
        ? currentList.filter((x) => x !== item)
        : [...currentList, item];
      return { ...prev, [group]: updated };
    });
    if (errors[group]) {
      setErrors((prev) => ({ ...prev, [group]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street Address is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.state) newErrors.state = 'State is required.';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip Code is required.';
    if (!formData.trade) newErrors.trade = 'Please indicate trades performed.';
    if (!formData.unionStatus) newErrors.unionStatus = 'Please indicate Union or Non-Union status.';
    if (!formData.licensedStates) newErrors.licensedStates = 'Please select licensed state(s).';
    if (!formData.activeMarkets.length) newErrors.activeMarkets = 'Select at least one active market.';
    if (!formData.federalCerts.length) newErrors.federalCerts = 'Please indicate federal certifications.';
    if (!formData.largestContract.trim()) newErrors.largestContract = 'Largest contract value is required.';
    if (!formData.rightSizedProject) newErrors.rightSizedProject = 'Right sized project value is required.';
    if (!formData.singleBonding) newErrors.singleBonding = 'Single-project bonding capacity is required.';
    if (!formData.aggregateBonding) newErrors.aggregateBonding = 'Aggregate bonding capacity is required.';
    if (!formData.referralSource) newErrors.referralSource = 'Please tell us how you learned about this form.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#FFFFFF',
    border: hasError ? '1.5px solid #DC2626' : '1.5px solid #475569',
    borderRadius: '10px',
    fontSize: '0.96rem',
    color: '#0F172A',
    outline: 'none',
    transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
    boxShadow: hasError ? '0 0 0 3px rgba(220, 38, 38, 0.15)' : 'none',
    boxSizing: 'border-box'
  });

  const labelStyle = {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#0F172A',
    marginBottom: '8px',
    fontFamily: 'var(--font-heading)'
  };

  const asteriskStyle = { color: '#EF4444', marginLeft: '3px' };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '85vh', paddingBottom: '90px' }}>
      {/* Top Header Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '56px 0 36px 0', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          {/* Clark Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <img
              src={LogoImg}
              alt="Clark Construction"
              style={{ height: '52px', objectFit: 'contain' }}
            />
          </div>

          <h1 style={{
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#0B1736',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em'
          }}>
            Trade Contractor Interest Form
          </h1>

          <div style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.7', textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <p style={{ marginBottom: '14px' }}>
              We invite your firm to submit your interest in working with Clark on future opportunities.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Our team will review your information and, if appropriate, schedule an introductory meeting and invite you to fill out Clark's formal Subcontractor Qualification Application (SQA).
            </p>
            <p style={{ margin: 0 }}>
              If interested, we encourage you to apply to Clark's{' '}
              <Link
                to="/business/strategic-partnership"
                style={{ color: '#0060B6', textDecoration: 'underline', fontWeight: 600 }}
              >
                Strategic Partnership Program
              </Link>
              , our industry's premier small business executive education program. Offered at no cost to participants, this 10-month course is geared towards elevating small businesses and growing their capacity to pursue and win work with large general contractors like Clark.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Container */}
      <div className="container" style={{ maxWidth: '820px', marginTop: '40px' }}>
        {submitted ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #CBD5E1',
            borderRadius: '8px',
            padding: '50px 40px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-premium)'
          }} className="animate-fade">
            <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 20px auto' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#0B1736', marginBottom: '12px' }}>
              Interest Form Submitted!
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 28px auto' }}>
              Thank you for expressing interest in partnering with Clark Construction. Our Subcontractor Development Group has received your profile and will review your capabilities.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: '#0060B6',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Back to Contact
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="trade-form-card"
          >
            <div style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '28px' }}>
              Fields marked with an asterisk (<span style={{ color: '#EF4444' }}>*</span>) are required.
            </div>

            {/* First Name & Last Name */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px', marginBottom: '22px' }}>
              <div id="firstName">
                <label style={labelStyle}>
                  First Name <span style={asteriskStyle}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`trade-form-input ${errors.firstName ? 'has-error' : ''}`}
                  style={inputStyle(errors.firstName)}
                />
                {errors.firstName && (
                  <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={14} /> {errors.firstName}
                  </div>
                )}
              </div>

              <div id="lastName">
                <label style={labelStyle}>
                  Last Name <span style={asteriskStyle}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`trade-form-input ${errors.lastName ? 'has-error' : ''}`}
                  style={inputStyle(errors.lastName)}
                />
                {errors.lastName && (
                  <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={14} /> {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            {/* Company Name */}
            <div style={{ marginBottom: '22px' }} id="companyName">
              <label style={labelStyle}>
                Company Name <span style={asteriskStyle}>*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className={`trade-form-input ${errors.companyName ? 'has-error' : ''}`}
                style={inputStyle(errors.companyName)}
              />
              {errors.companyName && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.companyName}
                </div>
              )}
            </div>

            {/* Email Address */}
            <div style={{ marginBottom: '22px' }} id="email">
              <label style={labelStyle}>
                Email Address <span style={asteriskStyle}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`trade-form-input ${errors.email ? 'has-error' : ''}`}
                  style={{ ...inputStyle(errors.email), paddingLeft: '44px' }}
                />
                <Mail size={18} color="#64748B" style={{ position: 'absolute', left: '15px', top: '15px' }} />
              </div>
              {errors.email && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.email}
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div style={{ marginBottom: '22px' }} id="phone">
              <label style={labelStyle}>
                Phone Number <span style={asteriskStyle}>*</span>
              </label>
              <div
                className={`trade-form-phone-group ${errors.phone ? 'has-error' : ''}`}
                style={{
                  border: errors.phone ? '1.5px solid #DC2626' : '1.5px solid #475569',
                  borderRadius: '10px'
                }}
              >
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleInputChange}
                  className="trade-form-phone-code"
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 000-0000"
                  className="trade-form-phone-input"
                />
              </div>
              {errors.phone && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.phone}
                </div>
              )}
            </div>

            {/* Street Address */}
            <div style={{ marginBottom: '22px' }} id="streetAddress">
              <label style={labelStyle}>
                Street Address <span style={asteriskStyle}>*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className={`trade-form-input ${errors.streetAddress ? 'has-error' : ''}`}
                style={inputStyle(errors.streetAddress)}
              />
              {errors.streetAddress && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.streetAddress}
                </div>
              )}
            </div>

            {/* City, State & Zip Code */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '22px' }}>
              <div id="city">
                <label style={labelStyle}>
                  City <span style={asteriskStyle}>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`trade-form-input ${errors.city ? 'has-error' : ''}`}
                  style={inputStyle(errors.city)}
                />
                {errors.city && (
                  <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={14} /> {errors.city}
                  </div>
                )}
              </div>

              <div id="state">
                <label style={labelStyle}>
                  State <span style={asteriskStyle}>*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`trade-form-input trade-form-select ${errors.state ? 'has-error' : ''}`}
                  style={inputStyle(errors.state)}
                >
                  <option value="">Select State...</option>
                  {US_STATES.map((st, i) => (
                    <option key={i} value={st}>{st}</option>
                  ))}
                </select>
                {errors.state && (
                  <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={14} /> {errors.state}
                  </div>
                )}
              </div>

              <div id="zipCode">
                <label style={labelStyle}>
                  Zip Code <span style={asteriskStyle}>*</span>
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`trade-form-input ${errors.zipCode ? 'has-error' : ''}`}
                  style={inputStyle(errors.zipCode)}
                />
                {errors.zipCode && (
                  <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={14} /> {errors.zipCode}
                  </div>
                )}
              </div>
            </div>

            {/* Company Website */}
            <div style={{ marginBottom: '22px' }}>
              <label style={labelStyle}>
                Company Website
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className="trade-form-input"
                style={inputStyle(false)}
              />
            </div>

            {/* Trades performed */}
            <div style={{ marginBottom: '22px' }} id="trade">
              <label style={labelStyle}>
                Please indicate all the trades your company performs. <span style={asteriskStyle}>*</span>
              </label>
              <select
                name="trade"
                value={formData.trade}
                onChange={handleInputChange}
                className={`trade-form-input trade-form-select ${errors.trade ? 'has-error' : ''}`}
                style={inputStyle(errors.trade)}
              >
                <option value="">Select Primary Trade / Specialty...</option>
                {TRADES_LIST.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))}
              </select>
              {errors.trade && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.trade}
                </div>
              )}
            </div>

            {/* Is your firm Union or Non-Union? */}
            <div style={{ marginBottom: '22px' }} id="unionStatus">
              <label style={labelStyle}>
                Is your firm Union or Non-Union? <span style={asteriskStyle}>*</span>
              </label>
              <input
                type="text"
                name="unionStatus"
                value={formData.unionStatus}
                onChange={handleInputChange}
                className={`trade-form-input ${errors.unionStatus ? 'has-error' : ''}`}
                style={inputStyle(errors.unionStatus)}
              />
              {errors.unionStatus && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.unionStatus}
                </div>
              )}
            </div>

            {/* Licensed States */}
            <div style={{ marginBottom: '26px' }} id="licensedStates">
              <label style={labelStyle}>
                What states is your firm licensed to work in? <span style={asteriskStyle}>*</span>
              </label>
              <select
                name="licensedStates"
                value={formData.licensedStates}
                onChange={handleInputChange}
                className={`trade-form-input trade-form-select ${errors.licensedStates ? 'has-error' : ''}`}
                style={inputStyle(errors.licensedStates)}
              >
                <option value="">Select Licensing Jurisdiction...</option>
                <option value="Nationwide">Nationwide (All 50 States)</option>
                <option value="Mid-Atlantic">Mid-Atlantic (DC, MD, VA, DE)</option>
                <option value="Southeast">Southeast (FL, GA, NC, SC, TN)</option>
                <option value="Southwest">Southwest (TX, AZ, NV, NM)</option>
                <option value="West Coast">West Coast (CA, WA, OR)</option>
                <option value="Midwest">Midwest (IL, IN, OH, MO, KS)</option>
              </select>
              {errors.licensedStates && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.licensedStates}
                </div>
              )}
            </div>

            {/* Active Markets Checkboxes */}
            <div style={{ marginBottom: '32px' }} id="activeMarkets">
              <label style={labelStyle}>
                Which of Clark's active markets is your firm interested in working in? Select all that apply. <span style={asteriskStyle}>*</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', marginTop: '10px' }}>
                {MARKETS.map((market, idx) => (
                  <label
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      color: '#334155',
                      cursor: 'pointer',
                      padding: '4px 0'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.activeMarkets.includes(market)}
                      onChange={() => handleMultiCheckbox('activeMarkets', market)}
                      style={{ width: '17px', height: '17px', accentColor: '#0060B6', cursor: 'pointer' }}
                    />
                    <span>{market}</span>
                  </label>
                ))}
              </div>
              {errors.activeMarkets && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.activeMarkets}
                </div>
              )}
            </div>

            {/* Federal Business Certifications */}
            <div style={{ marginBottom: '32px' }} id="federalCerts">
              <label style={labelStyle}>
                Please indicate all federal business certifications held by your firm. <span style={asteriskStyle}>*</span>
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '10px' }}>
                {FEDERAL_CERTS.map((cert, idx) => (
                  <label
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      color: '#334155',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.federalCerts.includes(cert)}
                      onChange={() => handleMultiCheckbox('federalCerts', cert)}
                      style={{ width: '17px', height: '17px', accentColor: '#0060B6', cursor: 'pointer' }}
                    />
                    <span>{cert}</span>
                  </label>
                ))}
              </div>
              {errors.federalCerts && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.federalCerts}
                </div>
              )}
            </div>

            {/* State & Local Business Certifications */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>
                Please indicate all state and local business certifications held by your firm.
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '10px' }}>
                {STATE_LOCAL_CERTS.map((cert, idx) => (
                  <label
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      color: '#334155',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.stateCerts.includes(cert)}
                      onChange={() => handleMultiCheckbox('stateCerts', cert)}
                      style={{ width: '17px', height: '17px', accentColor: '#0060B6', cursor: 'pointer' }}
                    />
                    <span>{cert}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Other State & Local Certifications */}
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>
                Please indicate all other state and local business certifications held by your firm.
              </label>
              <textarea
                name="otherCerts"
                value={formData.otherCerts}
                onChange={handleInputChange}
                rows="3"
                className="trade-form-input"
                style={{ ...inputStyle(false), resize: 'vertical' }}
              />
            </div>

            {/* Largest Contract Value */}
            <div style={{ marginBottom: '24px' }} id="largestContract">
              <label style={labelStyle}>
                What is the dollar value of your largest contract in the past five years? <span style={asteriskStyle}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '12px', color: '#64748B', fontWeight: 600 }}>#</span>
                <input
                  type="text"
                  name="largestContract"
                  value={formData.largestContract}
                  onChange={handleInputChange}
                  placeholder="e.g. $4,500,000"
                  className={`trade-form-input ${errors.largestContract ? 'has-error' : ''}`}
                  style={{ ...inputStyle(errors.largestContract), paddingLeft: '32px' }}
                />
              </div>
              {errors.largestContract && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.largestContract}
                </div>
              )}
            </div>

            {/* Right Sized Project Value */}
            <div style={{ marginBottom: '28px' }} id="rightSizedProject">
              <label style={labelStyle}>
                What is your "right sized" project value? <span style={asteriskStyle}>*</span>
              </label>
              <select
                name="rightSizedProject"
                value={formData.rightSizedProject}
                onChange={handleInputChange}
                className={`trade-form-input trade-form-select ${errors.rightSizedProject ? 'has-error' : ''}`}
                style={inputStyle(errors.rightSizedProject)}
              >
                <option value="">Select Right-Sized Project Range...</option>
                <option value="Under $250k">Under $250,000</option>
                <option value="$250k - $1M">$250,000 - $1,000,000</option>
                <option value="$1M - $5M">$1,000,000 - $5,000,000</option>
                <option value="$5M - $10M">$5,000,000 - $10,000,000</option>
                <option value="$10M - $25M">$10,000,000 - $25,000,000</option>
                <option value="$25M+">$25,000,000+</option>
              </select>
              {errors.rightSizedProject && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.rightSizedProject}
                </div>
              )}
            </div>

            {/* Single-Project Bonding Capacity (Radio) */}
            <div style={{ marginBottom: '28px' }} id="singleBonding">
              <label style={labelStyle}>
                What is your single-project bonding capacity? <span style={asteriskStyle}>*</span>
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                {BONDING_TIERS.map((tier, idx) => (
                  <label
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      color: '#334155',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="singleBonding"
                      value={tier}
                      checked={formData.singleBonding === tier}
                      onChange={handleInputChange}
                      style={{ width: '17px', height: '17px', accentColor: '#0060B6', cursor: 'pointer' }}
                    />
                    <span>{tier}</span>
                  </label>
                ))}
              </div>
              {errors.singleBonding && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.singleBonding}
                </div>
              )}
            </div>

            {/* Aggregate Bonding Capacity (Radio) */}
            <div style={{ marginBottom: '28px' }} id="aggregateBonding">
              <label style={labelStyle}>
                What is your aggregate bonding capacity? <span style={asteriskStyle}>*</span>
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                {BONDING_TIERS.map((tier, idx) => (
                  <label
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      color: '#334155',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="aggregateBonding"
                      value={tier}
                      checked={formData.aggregateBonding === tier}
                      onChange={handleInputChange}
                      style={{ width: '17px', height: '17px', accentColor: '#0060B6', cursor: 'pointer' }}
                    />
                    <span>{tier}</span>
                  </label>
                ))}
              </div>
              {errors.aggregateBonding && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.aggregateBonding}
                </div>
              )}
            </div>

            {/* How did you learn about this form? */}
            <div style={{ marginBottom: '32px' }} id="referralSource">
              <label style={labelStyle}>
                How did you learn about this form? <span style={asteriskStyle}>*</span>
              </label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                className={`trade-form-input trade-form-select ${errors.referralSource ? 'has-error' : ''}`}
                style={inputStyle(errors.referralSource)}
              >
                <option value="">Please select an option...</option>
                <option value="Clark Project Team / Field Outreach">Clark Project Team / Field Outreach</option>
                <option value="Clark Website / Social Media">Clark Website / Social Media</option>
                <option value="Strategic Partnership Program (SPP)">Strategic Partnership Program (SPP)</option>
                <option value="Industry Referral / Peer Contractor">Industry Referral / Peer Contractor</option>
                <option value="Trade Association / Event">Trade Association / Event</option>
                <option value="Subcontractor Prequalification Notice">Subcontractor Prequalification Notice</option>
                <option value="Other">Other</option>
              </select>
              {errors.referralSource && (
                <div style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.referralSource}
                </div>
              )}
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '32px 0 24px 0' }} />

            {/* Send copy checkbox */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155', fontSize: '0.94rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="sendCopy"
                  checked={formData.sendCopy}
                  onChange={handleInputChange}
                  style={{ width: '18px', height: '18px', accentColor: '#0060B6', cursor: 'pointer' }}
                />
                <span>Send me a copy of my responses</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              style={{
                backgroundColor: '#1D4ED8',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                fontFamily: 'var(--font-heading)'
              }}
              onMouseEnter={(e) => {
                if (!submitting) e.currentTarget.style.backgroundColor = '#1E40AF';
              }}
              onMouseLeave={(e) => {
                if (!submitting) e.currentTarget.style.backgroundColor = '#1D4ED8';
              }}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
