import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData.js';
import { siteConfig } from '../data/siteConfig.js';

export default function ServicesPage() {
  const gna = servicesData.find(s => s.id === 'gna');
  const seci = servicesData.find(s => s.id === 'seci');

  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav)' }}>
      {/* Services Header Banner */}
      <section style={{
        padding: '64px 0 44px 0',
        borderBottom: '1px solid var(--p-border)',
        backgroundColor: 'var(--p-surface-subtle)'
      }}>
        <div className="wrap">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--p-surface)',
            border: '1px solid var(--p-border)',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--p-ink)',
            marginBottom: '16px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--p-accent)' }}></span>
            Advisory Capabilities & Knowledge Areas
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 50px)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: 'var(--display-tracking)',
            margin: '0 0 16px 0',
            color: 'var(--p-ink)',
            wordBreak: 'break-word'
          }}>
            Power Sector Advisory & Regulatory Services
          </h1>
          <p style={{
            fontSize: '17px',
            color: 'var(--p-muted)',
            maxWidth: '680px',
            lineHeight: 1.6,
            margin: 0
          }}>
            {siteConfig.companyName} provides specialized advisory and educational intelligence across Indian power transmission regulations and utility-scale renewable energy procurement.
          </p>
        </div>
      </section>

      {/* GNA Service Section */}
      <section id="gna" style={{
        padding: '72px 0',
        borderBottom: '1px solid var(--p-border)'
      }}>
        <div className="wrap">
          <div className="grid-2">
            <div>
              <div style={{
                fontSize: '13px',
                color: 'var(--p-accent)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                Service 01 &bull; Regulatory & Transmission Access
              </div>
              <h2 style={{
                fontSize: 'clamp(24px, 3.2vw, 38px)',
                fontWeight: 500,
                lineHeight: 1.18,
                margin: '0 0 14px 0',
                color: 'var(--p-ink)',
                letterSpacing: '-0.02em',
                wordBreak: 'break-word'
              }}>
                {gna.title}
              </h2>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '4px',
                backgroundColor: 'var(--p-surface)',
                border: '1px solid var(--p-border)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--p-muted)',
                marginBottom: '18px'
              }}>
                {gna.tagline}
              </div>
              <p style={{
                fontSize: '15px',
                color: 'var(--p-ink)',
                lineHeight: 1.65,
                marginBottom: '20px'
              }}>
                {gna.overview}
              </p>

              {/* Placeholder Box */}
              <div style={{
                padding: '16px 18px',
                backgroundColor: 'var(--p-surface)',
                borderLeft: '4px solid var(--p-accent)',
                borderRadius: '4px',
                fontSize: '14px',
                color: 'var(--p-muted)',
                lineHeight: 1.5,
                marginBottom: '24px'
              }}>
                {gna.placeholder}
              </div>

              {/* Focus Area Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {gna.focusAreas.map((area, idx) => (
                  <div key={idx} style={{
                    padding: '14px 18px',
                    backgroundColor: 'var(--p-surface-subtle)',
                    borderRadius: '6px',
                    border: '1px solid var(--p-border)'
                  }}>
                    <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--p-ink)', marginBottom: '4px' }}>
                      {area.title}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--p-muted)', lineHeight: 1.5 }}>
                      {area.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px' }}>
                <Link to="/#contact" className="btn btn--primary">
                  Inquire About GNA Advisory
                </Link>
              </div>
            </div>

            {/* Service Image with Technical Spec Card */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--p-border)',
                backgroundColor: 'var(--p-surface)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)'
              }}>
                <img
                  src={gna.image}
                  alt={gna.imageAlt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '14px',
                  right: '14px',
                  backgroundColor: 'rgba(223, 222, 219, 0.94)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--p-border)',
                  fontSize: '12px',
                  color: 'var(--p-ink)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <span style={{ fontWeight: 600 }}>High-Voltage ISTS Substation</span> &bull; 750 kV Node
                  </div>
                  <div style={{ color: 'var(--p-muted)', fontSize: '11px' }}>
                    Photo: Novoklimov (CC0)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECI Tenders Service Section */}
      <section id="seci" style={{
        padding: '72px 0',
        borderBottom: '1px solid var(--p-border)',
        backgroundColor: 'var(--p-surface-subtle)'
      }}>
        <div className="wrap">
          <div className="grid-2">
            {/* Image First on Desktop for SECI section */}
            <div style={{ order: 1 }}>
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--p-border)',
                backgroundColor: 'var(--p-surface)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)'
              }}>
                <img
                  src={seci.image}
                  alt={seci.imageAlt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '14px',
                  right: '14px',
                  backgroundColor: 'rgba(223, 222, 219, 0.94)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--p-border)',
                  fontSize: '12px',
                  color: 'var(--p-ink)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <span style={{ fontWeight: 600 }}>Utility-Scale Solar Generation</span> &bull; Clean Power
                  </div>
                  <div style={{ color: 'var(--p-muted)', fontSize: '11px' }}>
                    Photo: APPA (Unsplash)
                  </div>
                </div>
              </div>
            </div>

            {/* Content for SECI */}
            <div style={{ order: 2 }}>
              <div style={{
                fontSize: '13px',
                color: 'var(--p-accent)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                Service 02 &bull; Renewable Energy Procurement
              </div>
              <h2 style={{
                fontSize: 'clamp(24px, 3.2vw, 38px)',
                fontWeight: 500,
                lineHeight: 1.18,
                margin: '0 0 14px 0',
                color: 'var(--p-ink)',
                letterSpacing: '-0.02em',
                wordBreak: 'break-word'
              }}>
                {seci.title}
              </h2>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '4px',
                backgroundColor: 'var(--p-surface)',
                border: '1px solid var(--p-border)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--p-muted)',
                marginBottom: '18px'
              }}>
                {seci.tagline}
              </div>
              <p style={{
                fontSize: '15px',
                color: 'var(--p-ink)',
                lineHeight: 1.65,
                marginBottom: '20px'
              }}>
                {seci.overview}
              </p>

              {/* Placeholder Box */}
              <div style={{
                padding: '16px 18px',
                backgroundColor: 'var(--p-surface)',
                borderLeft: '4px solid var(--p-accent)',
                borderRadius: '4px',
                fontSize: '14px',
                color: 'var(--p-muted)',
                lineHeight: 1.5,
                marginBottom: '24px'
              }}>
                {seci.placeholder}
              </div>

              {/* Focus Area Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {seci.focusAreas.map((area, idx) => (
                  <div key={idx} style={{
                    padding: '14px 18px',
                    backgroundColor: 'var(--p-surface)',
                    borderRadius: '6px',
                    border: '1px solid var(--p-border)'
                  }}>
                    <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--p-ink)', marginBottom: '4px' }}>
                      {area.title}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--p-muted)', lineHeight: 1.5 }}>
                      {area.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px' }}>
                <Link to="/#contact" className="btn btn--primary">
                  Inquire About SECI Advisory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
