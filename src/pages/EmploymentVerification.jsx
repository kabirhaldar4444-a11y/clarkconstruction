import React from 'react';

export default function EmploymentVerification() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '65vh' }}>
      {/* Light Blue Page Banner matching Clark UI */}
      <section style={{
        backgroundColor: '#DCEAFE',
        padding: '64px 0 60px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0, 32, 91, 0.08)'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#0B1736',
            margin: 0,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em'
          }}>
            Employment Verification
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '72px 0 120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
            color: '#1E293B',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            fontFamily: 'var(--font-body)'
          }}>
            <p style={{ marginBottom: '24px' }}>
              Clark Construction Group uses The Work Number to provide employment and income verification for employees.
            </p>

            <p style={{ margin: 0 }}>
              For verification, visit The Work Number or call +1 (800) 555-0199.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
