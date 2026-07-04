import React from 'react';
import { ShieldAlert, HardHat, Home } from 'lucide-react';
import Button from '../components/UI/Button';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--bg-deep)',
      padding: '40px 24px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '500px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        padding: '60px 40px',
        borderRadius: '6px',
        boxShadow: 'var(--shadow-premium)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Warning Indicator */}
        <div style={{
          position: 'relative',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(217, 119, 6, 0.1)',
            border: '1px dashed var(--primary)',
            animation: 'spin 10s linear infinite'
          }} />
          <HardHat size={40} color="var(--primary)" style={{ zIndex: 2 }} />
        </div>

        {/* 404 Codes */}
        <span style={{
          fontSize: '5rem',
          fontWeight: 900,
          color: 'var(--primary)',
          lineHeight: '1',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-0.02em',
          marginBottom: '10px'
        }}>
          404
        </span>

        <h2 style={{ color: '#FFF', fontSize: '1.6rem', marginBottom: '16px', fontWeight: 800 }}>
          Site Under Construction
        </h2>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '32px' }}>
          The link you requested is either out of bounds, has been relocated, or is undergoing active structural maintenance by our VDC modelers.
        </p>

        {/* Home button */}
        <Button to="/" variant="primary" icon={Home} iconPosition="left">
          Return To Home Page
        </Button>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
