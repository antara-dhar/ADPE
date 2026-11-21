import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig.js';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--p-border)',
      paddingTop: '56px',
      paddingBottom: '56px',
      backgroundColor: 'var(--p-surface)'
    }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          alignItems: 'flex-start',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '18px', color: 'var(--p-ink)', marginBottom: '8px' }}>
              {siteConfig.companyName}
            </div>
            <p style={{ fontSize: '14px', color: 'var(--p-muted)', lineHeight: 1.6, margin: 0, maxWidth: '340px' }}>
              Independent power-sector advisory and technical knowledge publication covering Indian transmission systems, CERC GNA frameworks, and renewable tenders.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--p-muted)', marginBottom: '12px' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              <Link to="/" style={{ color: 'var(--p-ink)', textDecoration: 'none' }}>Home</Link>
              <Link to="/services" style={{ color: 'var(--p-ink)', textDecoration: 'none' }}>Services Overview</Link>
              <Link to="/services#gna" style={{ color: 'var(--p-muted)', textDecoration: 'none' }}>GNA Advisory</Link>
              <Link to="/services#seci" style={{ color: 'var(--p-muted)', textDecoration: 'none' }}>SECI Tenders</Link>
              <Link to="/#about" style={{ color: 'var(--p-ink)', textDecoration: 'none' }}>About Practice</Link>
              <Link to="/#contact" style={{ color: 'var(--p-ink)', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--p-muted)', marginBottom: '12px' }}>
              Advisory Governance
            </div>
            <p style={{ fontSize: '13px', color: 'var(--p-muted)', lineHeight: 1.6, margin: 0 }}>
              All regulatory analysis is prepared for general technical guidance. Advisory engagements are confirmed on a case-by-case statutory review.
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--p-border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--p-muted)'
        }}>
          <div>
            &copy; {siteConfig.footer.copyrightYear} {siteConfig.companyName}. All rights reserved.
          </div>
          <div>
            Editorial Grid Architecture &bull; {siteConfig.footer.credit}
          </div>
        </div>
      </div>
    </footer>
  );
}
