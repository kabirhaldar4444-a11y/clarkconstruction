import React from 'react';

export default function FraudulentDisclaimer() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '70vh' }}>
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
            Fraudulent Employment Opportunity Disclaimer
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '72px 0 120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
            color: '#1E293B',
            fontSize: '1.02rem',
            lineHeight: '1.8',
            fontFamily: 'var(--font-body)'
          }}>
            <p style={{ marginBottom: '24px' }}>
              Please be aware that there are certain individuals and entities that fraudulently misrepresent to job seekers that Clark has open employment positions when in fact those positions are not available.
            </p>

            <p style={{
              fontWeight: 700,
              color: '#0B1736',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem'
            }}>
              Signs that a job offer is fictitious may include the following:
            </p>

            <ol style={{
              paddingLeft: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              margin: 0
            }}>
              <li style={{ paddingLeft: '8px' }}>
                You found the job on Upwork.com, Guru.com, or a similar freelancing website. Clark does not post positions on these sites. Scammers have targeted not only Clark but numerous other companies.
              </li>

              <li style={{ paddingLeft: '8px' }}>
                The person or entity contacted you about a job opening at Clark that you never applied for.
              </li>

              <li style={{ paddingLeft: '8px' }}>
                The email address indicated in the phony job vacancy posting does not end in official Clark domains: <strong>clarkindia.co</strong> or <strong>clarkconstruction.com</strong> (phony solicitations typically come from @gmail.com, @yahoo.com, @clark-construction.com, or @clarkconstruction.us). Official correspondence originates strictly from verified addresses such as{' '}
                <a href="mailto:recruitment@clarkindia.co" style={{ color: '#0060B6', fontWeight: 600, textDecoration: 'none' }}>
                  recruitment@clarkindia.co
                </a>{' '}
                or{' '}
                <a href="mailto:talentacquisition@clarkindia.co" style={{ color: '#0060B6', fontWeight: 600, textDecoration: 'none' }}>
                  talentacquisition@clarkindia.co
                </a>.
              </li>

              <li style={{ paddingLeft: '8px' }}>
                You receive an email asking that you send money or other personal details such as passport information or visa application to the individual or entity. Clark does not pay individuals or entities to solicit potential employees.
              </li>

              <li style={{ paddingLeft: '8px' }}>
                You don't find the job offer published on the Careers section of Clark's website ({' '}
                <a
                  href="https://clarkconstruction.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0060B6', textDecoration: 'none' }}
                  className="quick-link-hover"
                >
                  https://clarkconstruction.vercel.app/
                </a>
                ).
              </li>
            </ol>

            <div style={{
              marginTop: '40px',
              padding: '24px',
              backgroundColor: '#F8FAFC',
              borderRadius: '8px',
              borderLeft: '4px solid #0060B6',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h4 style={{ color: '#0B1736', fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>
                Report Fraudulent Communications
              </h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                If you receive a suspicious job offer or recruitment communication, please forward the email with full headers directly to our legal compliance and recruitment departments at{' '}
                <a href="mailto:legal@clarkindia.co" style={{ color: '#0060B6', fontWeight: 600, textDecoration: 'none' }}>
                  legal@clarkindia.co
                </a>{' '}
                and{' '}
                <a href="mailto:recruitment@clarkindia.co" style={{ color: '#0060B6', fontWeight: 600, textDecoration: 'none' }}>
                  recruitment@clarkindia.co
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
