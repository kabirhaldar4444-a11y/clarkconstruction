import React, { useState } from 'react';
import { 
  FileText, Play, Mail, Phone, Calendar, 
  Download, CheckCircle2, AlertTriangle
} from 'lucide-react';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

export default function Suppliers() {
  const [invoiceId, setInvoiceId] = useState('');
  const [trackerStatus, setTrackerStatus] = useState(null);
  const [activeMedia, setActiveMedia] = useState(null);

  const handleTrackInvoice = (e) => {
    e.preventDefault();
    if (!invoiceId) return;
    
    // Simulate lookup response
    if (invoiceId.toUpperCase().startsWith('PO')) {
      setTrackerStatus({
        status: 'Approved',
        message: `Purchase Order ${invoiceId} has been successfully closed and fully matched with submitted supplier invoices. The direct ACH transfer is scheduled.`,
        color: 'var(--success)'
      });
    } else if (invoiceId.toUpperCase().startsWith('INV')) {
      setTrackerStatus({
        status: 'In Review',
        message: `Invoice ${invoiceId} has been received via the Coupa Supplier Portal and is currently under review by Accounts Payable.`,
        color: 'var(--primary)'
      });
    } else {
      setTrackerStatus({
        status: 'Query Match Not Found',
        message: `Reference "${invoiceId}" was not found. Please log into the Coupa Supplier Portal directly to check details, or contact accounts.payable@clarkconstruction.com.`,
        color: 'var(--error)'
      });
    }
  };

  const videoResources = [
    {
      title: "VIDEO: E-Invoicing & Remit-to Setup",
      description: "Learn how to configure your company profile, billing addresses, and tax remit-to settings inside the Coupa Supplier Portal.",
      duration: "4 mins",
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=400",
      steps: [
        "Log into Coupa Supplier Portal and click 'Admin' tab.",
        "Navigate to 'Remit-To' and select 'Add Remit-To'.",
        "Fill out tax details, legal name, and attach direct deposit instructions.",
        "Submit for Clark Accounts Payable verification."
      ]
    },
    {
      title: "VIDEO: Submitting an Invoice with a Purchase Order",
      description: "Step-by-step walkthrough showing how to convert an active Clark purchase order directly into a billing voucher.",
      duration: "5 mins",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400",
      steps: [
        "Go to the 'Orders' tab in the Coupa Supplier Portal.",
        "Locate the correct PO number and click the gold 'Coins' icon.",
        "Confirm quantities and line item unit rates.",
        "Upload material delivery receipts and submit the digital invoice."
      ]
    },
    {
      title: "VIDEO: Submitting an Invoice without a Purchase Order",
      description: "Instructions on submitting non-PO service invoices to Clark division managers for internal routing.",
      duration: "3 mins",
      thumbnail: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=400",
      steps: [
        "Navigate to the 'Invoices' menu and select 'Create Invoice'.",
        "Choose 'Non-PO Invoice' option.",
        "Enter the email of your Clark project manager or procurement lead.",
        "Attach supporting cost-plus documentation and click submit."
      ]
    },
    {
      title: "VIDEO: Submitting an Invoice against a Contract",
      description: "How to bill recurring services, rentals, or construction sub-contracts structured under a master agreement.",
      duration: "6 mins",
      thumbnail: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=400",
      steps: [
        "Access the 'Contracts' menu in the Coupa Supplier Portal.",
        "Select the active Contract ID matching your scope of work.",
        "Enter the progressive billing amount or percentage complete.",
        "Attach certified payrolls or service logs and submit."
      ]
    }
  ];

  const guideResources = [
    {
      title: "How to Add Users",
      filename: "guide_how_to_add_users.pdf",
      desc: "Learn how to grant other employees access to the portal and configure their permissions."
    },
    {
      title: "How to Submit an Invoice",
      filename: "guide_invoice_submission.pdf",
      desc: "Detailed written instructions covering PO-matching rules and invoice formatting details."
    },
    {
      title: "Invoicing FAQs",
      filename: "clark_coupa_invoicing_faqs.pdf",
      desc: "Answers to common supplier questions regarding payment cycles, banking setup, and disputes."
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600"
            alt="Suppliers inventory warehouse shipping logistics"
          />
        </div>
        <div className="container page-hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
              Business With Us &nbsp;/&nbsp; <span style={{ color: 'var(--primary)' }}>Suppliers</span>
            </span>
            <h1 className="page-hero-title">Suppliers</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem', marginTop: '10px', lineHeight: '1.7' }}>
              Our suppliers are essential to our business. Learn how to conduct business with us through Coupa, Clark's procure-to-pay system for purchase orders, invoice processing, and payments.
            </p>
          </div>
        </div>
      </section>

      {/* Invoicing and Payment Overview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
          
          <div>
            <span className="subtitle-amber">Transactions</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Invoicing and Payment</h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Clark Construction Group and its associated companies use the **Coupa Supplier Portal (Coupa)** to manage transactions with its suppliers. The portal improves the accuracy and speed of the payment process and gives suppliers instant access to payment information.
            </p>

            <div style={{
              backgroundColor: 'rgba(15, 19, 30, 0.6)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              padding: '24px',
              marginBottom: '24px'
            }}>
              <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '12px', fontWeight: 700 }}>Coupa allows you to:</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  "Submit invoices electronically",
                  "Review invoice status",
                  "Receive notifications when invoices are paid",
                  "Resolve invoicing disputes",
                  "View purchase orders",
                  "Send shipping/tracking information for orders",
                  "Grant other employees access and configure their permissions"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Coupa is the most efficient way to get your invoice paid. However, you can also submit your invoices by cXML transmission. This option lets you send invoice information through an Invoice Detail Request in cXML and post the file directly to Coupa via an HTTP post.
            </p>

            {/* Warning Alert Panel */}
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid var(--error)',
              padding: '20px',
              borderRadius: '6px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <AlertTriangle size={24} color="var(--error)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>“No PO, No Pay” Policy</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: '1.5' }}>
                  Clark has a “No PO, No Pay” Policy in effect. Please check our invoicing standards. Failure to meet these requirements will cause payment delays and may result in your invoice being rejected.
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontStyle: 'italic', borderLeft: '2px solid var(--border-color)', paddingLeft: '16px' }}>
              <strong>Updating Account Information:</strong> If you are currently a Clark supplier and would like to update your account information, please reach out to your Clark point of contact.
            </p>
          </div>

          {/* Interactive Portal Login / Invoice tracking */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'sticky', top: '110px' }}>
            {/* Quick Access Card */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              padding: '40px',
              borderRadius: '6px',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <span className="subtitle-amber">Supplier Portal</span>
              <h3 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '16px' }}>Coupa Supplier Portal</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Authorized suppliers can log into the Coupa Supplier Portal directly to submit invoices or modify billing details.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Button href="https://supplier.coupa.com" target="_blank" variant="primary" style={{ width: '100%', textAlign: 'center' }}>
                  Log In to Coupa Portal
                </Button>
                <Button to="/contact" variant="secondary" style={{ width: '100%', textAlign: 'center' }}>
                  Request Invitation
                </Button>
              </div>
            </div>

            {/* Quick Tracking Widget */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              padding: '40px',
              borderRadius: '6px',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <span className="subtitle-amber">Status Center</span>
              <h3 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '12px' }}>Quick Invoice Tracking</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
                Enter your PO code or Invoice ID to view immediate processing state metrics.
              </p>
              
              <form onSubmit={handleTrackInvoice} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                  type="text"
                  placeholder="PO-XXXXX or INV-YYYYY"
                  value={invoiceId}
                  onChange={(e) => {
                    setInvoiceId(e.target.value);
                    setTrackerStatus(null);
                  }}
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    backgroundColor: 'var(--bg-deep)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                  required
                />
                <Button type="submit" variant="primary">
                  Track
                </Button>
              </form>

              {trackerStatus && (
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.01)',
                  border: `1.5px solid ${trackerStatus.color}`,
                  padding: '20px',
                  borderRadius: '4px'
                }} className="animate-fade">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tracking Query Results:</span>
                    <span style={{ fontSize: '0.75rem', color: trackerStatus.color, fontWeight: 800, textTransform: 'uppercase' }}>{trackerStatus.status}</span>
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.85rem', lineHeight: '1.5' }}>{trackerStatus.message}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Resources & Guides Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="subtitle-amber">Resources</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Supplier Resource Center</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Video tutorials and PDF download guides explaining how to navigate the Coupa Supplier Portal and comply with invoicing requirements.
            </p>
          </div>

          {/* Videos Grid */}
          <h3 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '24px', textAlign: 'left', fontWeight: 800 }}>Training Videos</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {videoResources.map((video, idx) => (
              <div
                key={idx}
                onClick={() => setActiveMedia(video)}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  const btn = e.currentTarget.querySelector('.play-btn');
                  if (btn) btn.style.backgroundColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  const btn = e.currentTarget.querySelector('.play-btn');
                  if (btn) btn.style.backgroundColor = 'rgba(8, 10, 16, 0.75)';
                }}
              >
                <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    className="play-btn"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(8, 10, 16, 0.75)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--primary)',
                      transition: 'var(--transition-fast)',
                      zIndex: 2
                    }}
                  >
                    <Play size={18} color="#FFF" style={{ marginLeft: '2px' }} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(8, 10, 16, 0.3)'
                  }} />
                  <span style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(8, 10, 16, 0.8)',
                    color: 'var(--text-primary)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    zIndex: 2
                  }}>
                    {video.duration}
                  </span>
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h4 style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', lineHeight: '1.4' }}>{video.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5' }}>{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guide Downloads Grid */}
          <h3 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '24px', textAlign: 'left', fontWeight: 800 }}>Written Guides & FAQs</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {guideResources.map((guide, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(217, 119, 6, 0.05)',
                    border: '1px solid rgba(217, 119, 6, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileText size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px' }}>{guide.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4' }}>{guide.desc}</p>
                  </div>
                </div>
                <a
                  href={`#download-${guide.filename}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Initiating mock download: ${guide.filename}`);
                  }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    padding: '8px',
                    borderRadius: '4px',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = '#FFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  <Download size={16} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Get in Touch / Support */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-premium)',
            textAlign: 'center'
          }}>
            <span className="subtitle-amber">Supplier Assistance</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: 800 }}>Get in Touch</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '30px',
              textAlign: 'left',
              marginBottom: '30px',
              paddingBottom: '30px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div>
                <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 700, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} color="var(--primary)" />
                  Coupa Support
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  For sign-up questions or cXML configurations:
                  <br />
                  <a href="mailto:coupa.admin@clarkconstruction.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>coupa.admin@clarkconstruction.com</a>
                </p>
              </div>

              <div>
                <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 700, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={16} color="var(--primary)" />
                  Accounts Payable
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  For payment-related inquiries:
                  <br />
                  <a href="mailto:accounts.payable@clarkconstruction.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>accounts.payable@clarkconstruction.com</a>
                  <br />
                  Phone: (301) 272-8105
                </p>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#FFF', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Calendar size={18} color="var(--primary)" />
                Weekly Live Training Webinars
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 20px auto' }}>
                Live training for the Coupa Supplier portal is available to suppliers weekly on Tuesdays and Thursdays (excluding holidays). Register for training on the Coupa website.
              </p>
              <Button href="https://www.coupa.com" target="_blank" variant="primary">
                Register for Training
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <Modal
        isOpen={activeMedia !== null}
        onClose={() => setActiveMedia(null)}
        title={activeMedia?.title || ""}
        maxWidth="600px"
      >
        {activeMedia && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: '4px', overflow: 'hidden' }}>
              <img
                src={activeMedia.thumbnail}
                alt={activeMedia.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'rgba(8, 10, 16, 0.6)'
              }}>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'
                }}>
                  <Play size={40} color="var(--primary)" />
                  <span style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 600 }}>Simulated Training Video Demo</span>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#FFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>About This Tutorial</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {activeMedia.description}
              </p>
            </div>

            <div>
              <h4 style={{ color: '#FFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '12px' }}>Video Chapters & Actions:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeMedia.steps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{
                      backgroundColor: 'rgba(217, 119, 6, 0.1)',
                      color: 'var(--primary)',
                      border: '1px solid rgba(217, 119, 6, 0.3)',
                      width: '22px', height: '22px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, flexShrink: 0
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '10px' }}>
              <Button onClick={() => setActiveMedia(null)} variant="primary">
                Got it
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
