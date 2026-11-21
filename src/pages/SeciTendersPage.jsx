import React from 'react';

export default function SeciTendersPage() {
  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav)' }}>
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--p-border)' }}>
        <div className="wrap">
          <div style={{ fontSize: '13px', color: 'var(--p-accent)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Tender Tracking
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, letterSpacing: 'var(--display-tracking)', margin: '0 0 16px 0' }}>
            SECI Renewable Energy Tenders
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--p-muted)', maxWidth: '640px', margin: 0 }}>
            Analytical updates and insights on Solar Energy Corporation of India auctions and capacity procurements.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{
            backgroundColor: 'var(--p-surface)',
            padding: '48px 32px',
            borderRadius: '8px',
            border: '1px solid var(--p-border)',
            maxWidth: '640px',
            textAlign: 'left'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500, color: 'var(--p-ink)', margin: '0 0 12px 0' }}>
              Content Coming Soon
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--p-muted)', margin: 0, lineHeight: 1.6 }}>
              This section is in preparation. Comprehensive information on SECI renewable energy tenders, capacity pipelines, and tariff trends will be published here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
