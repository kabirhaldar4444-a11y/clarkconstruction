import React, { useState } from 'react';
import { HeartPulse, DollarSign, Award, GraduationCap, HardHat, FileText, Send, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

const BENEFITS = [
  {
    icon: <DollarSign size={24} color="var(--primary)" />,
    title: "Premium Wages & Matching 401(k)",
    desc: "We offer top-quartile industry salaries with a fully vesting corporate matching 401(k) layout to secure your financial future."
  },
  {
    icon: <HeartPulse size={24} color="var(--primary)" />,
    title: "Full Healthcare Coverage",
    desc: "Comprehensive medical, dental, and vision insurance policies covering you and your dependants from day one of hire."
  },
  {
    icon: <Award size={24} color="var(--primary)" />,
    title: "Accident-Free Safeties",
    desc: "Our zero-incident field culture ensures you have top-tier protective equipment, crane telemetry buffers, and safety coordinators."
  },
  {
    icon: <GraduationCap size={24} color="var(--primary)" />,
    title: "Paid Training & growth",
    desc: "We reimburse VDC Revit courses, heavy equipment certification licenses, and construction management college programs."
  }
];

const JOBS = [
  {
    id: 1,
    title: 'Senior Project Manager',
    dept: 'Operations & Execution',
    loc: 'San Francisco, CA',
    type: 'Full-Time',
    desc: 'Overseeing heavy civil structures and airport wings. Coordinates subcontractor crews, crane logistics, and municipal inspections.'
  },
  {
    id: 2,
    title: 'Lead VDC / BIM Engineer',
    dept: 'Engineering & Modeling',
    loc: 'San Francisco, CA',
    type: 'Full-Time',
    desc: 'Runs Navisworks clash-detection checks on high-rise layouts. Works with estimators to output structural tolerance reports.'
  },
  {
    id: 3,
    title: 'Site Safety Coordinator',
    dept: 'Safety Compliance',
    loc: 'Chicago, IL',
    type: 'Full-Time',
    desc: 'Conducts daily site walks, audits rigging cables, holds toolbox safety talks, and maintains regulatory log documentation.'
  },
  {
    id: 4,
    title: 'Quantity Estimator & Surveyor',
    dept: 'Preconstruction Systems',
    loc: 'Remote / Hybrid',
    type: 'Contract (12-Mo)',
    desc: 'Drafts cost models and material schedules using historical price databases and algorithmic Excel configurations.'
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', coverLetter: '', file: null });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    if (errors.file) setErrors((prev) => ({ ...prev, file: null }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim() || formData.name.length < 3) {
      tempErrors.name = 'Full name must be at least 3 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    const phoneRegex = /^\+?([0-9]{1,3})?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.coverLetter.trim() || formData.coverLetter.length < 10) {
      tempErrors.coverLetter = 'Cover letter/brief must be at least 10 characters.';
    }
    if (!formData.file) {
      tempErrors.file = 'Please upload your resume file (PDF/DOCX).';
    } else if (formData.file.size > 5 * 1024 * 1024) {
      tempErrors.file = 'File size exceeds maximum threshold of 5MB.';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', coverLetter: '', file: null });
    }, 1500);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setSuccess(false);
    setErrors({});
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
            alt="Clark Construction BIM software coordination screens"
          />
        </div>
        <div className="container page-hero-content">
          <span className="subtitle-amber">Join Our Craftsmen</span>
          <h1 className="page-hero-title">Careers at Clark Construction</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.05rem' }}>
            We recruit engineers, quantity surveyors, and trade foremen committed to safe structural delivery.
          </p>
        </div>
      </section>

      {/* Why Work With Us Overview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="subtitle-amber">Working at Clark Construction</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Erect Your Career path</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '16px' }}>
              At Clark Construction, your talent is backed by advanced training, digital modeling toolkits, and safe worksites. We work on high-value, highly visible public airports, commercial skyscrapers, and bridge infrastructure networks that define regional maps.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '24px' }}>
              We encourage collaborative growth, ensuring junior VDC modelers and field engineers shadow senior project executives to speed up development.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            {BENEFITS.map((b, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  padding: '24px',
                  borderRadius: '6px',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(217,119,6,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {b.icon}
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', marginBottom: '6px' }}>{b.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Board */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Hiring Board</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Current Job Openings</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Join a crew that values integrity and safety. Apply for our open engineering, estimating, and management positions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {JOBS.map((job) => (
              <div
                key={job.id}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  padding: '30px',
                  borderRadius: '6px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div style={{ maxWidth: '500px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{job.dept}</span>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--text-muted)', borderRadius: '50%' }}></span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{job.loc}</span>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--text-muted)', borderRadius: '50%' }}></span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>{job.type}</span>
                  </div>
                  <h3 style={{ color: 'var(--text-white)', fontSize: '1.3rem', marginBottom: '8px', fontWeight: 700 }}>{job.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>{job.desc}</p>
                </div>
                
                <Button onClick={() => setSelectedJob(job)} variant="primary">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <Modal
        isOpen={!!selectedJob}
        onClose={handleCloseModal}
        title={`Apply: ${selectedJob?.title}`}
        maxWidth="600px"
      >
        {success ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }} className="animate-fade">
            <CheckCircle size={56} color="var(--success)" style={{ margin: '0 auto 20px auto' }} />
            <h3 style={{ color: 'var(--text-white)', fontSize: '1.4rem', marginBottom: '10px' }}>Application Submitted!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Thank you for applying for the <strong>{selectedJob?.title}</strong> role. Our human resources staff will review your credentials and contact you via email or phone.
            </p>
            <Button onClick={handleCloseModal} variant="primary">
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="animate-fade">
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="John Doe"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            {/* Email & Phone grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="johndoe@email.com"
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

            {/* Resume upload */}
            <div className="form-group">
              <label className="form-label">Upload Resume (PDF/DOCX, Max 5MB) *</label>
              <div style={{
                border: '1px dashed var(--border-color)',
                backgroundColor: 'rgba(255,255,255,0.01)',
                padding: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                position: 'relative',
                cursor: 'pointer'
              }}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.doc"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }}
                />
                <FileText size={24} style={{ color: 'var(--primary)', marginBottom: '8px' }} />
                <span style={{ display: 'block', fontSize: '0.85rem', color: formData.file ? 'var(--text-white)' : 'var(--text-muted)' }}>
                  {formData.file ? `Selected file: ${formData.file.name}` : 'Click here or drag file to upload'}
                </span>
              </div>
              {errors.file && <span className="error-text">{errors.file}</span>}
            </div>

            {/* Cover Letter */}
            <div className="form-group">
              <label className="form-label">Cover Letter / Brief Pitch *</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows="4"
                className="form-control"
                placeholder="Explain why you are a good fit for this role..."
              />
              {errors.coverLetter && <span className="error-text">{errors.coverLetter}</span>}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
              <Button onClick={handleCloseModal} variant="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={submitting} icon={Send}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        )}
      </Modal>

    </div>
  );
}
