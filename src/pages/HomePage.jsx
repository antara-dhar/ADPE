import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig.js';

export default function HomePage() {
  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav)', overflowX: 'hidden' }}>
      {/* Renewable Energy Hero Section */}
      <section style={{
        padding: '56px 0 72px 0',
        borderBottom: '1px solid var(--p-border)',
        position: 'relative'
      }}>
        <div className="wrap">
          <div className="grid-hero">
            {/* Hero Copy */}
            <div>
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
                marginBottom: '18px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--p-accent)' }}></span>
                Renewable Energy & Power Grid Advisory
              </div>

              <h1 style={{
                fontSize: 'clamp(24px, 3.8vw, 50px)',
                lineHeight: 1.15,
                fontWeight: 400,
                letterSpacing: 'var(--display-tracking)',
                margin: '0 0 18px 0',
                color: 'var(--p-ink)',
                overflowWrap: 'break-word'
              }}>
                Technical Clarity for India's Modern Power Grid
              </h1>

              <p style={{
                fontSize: '16px',
                color: 'var(--p-muted)',
                lineHeight: 1.6,
                maxWidth: '540px',
                margin: '0 0 28px 0'
              }}>
                {siteConfig.companyName} delivers independent advisory, technical reviews, and regulatory intelligence across Indian transmission systems, General Network Access (GNA), and utility-scale renewable tenders.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/services" className="btn btn--primary">
                  Explore Services & Focus Areas
                </Link>
                <Link to="/#contact" className="btn btn--secondary">
                  Contact Advisory Practice
                </Link>
              </div>

              {/* Floating Pill Highlights inspired by Windora reference */}
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid var(--p-border)'
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--p-ink)',
                  backgroundColor: 'var(--p-surface)',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--p-border)'
                }}>
                  ISTS 400kV / 765kV Networks
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--p-ink)',
                  backgroundColor: 'var(--p-surface)',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--p-border)'
                }}>
                  CERC GNA Connectivity
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--p-ink)',
                  backgroundColor: 'var(--p-surface)',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--p-border)'
                }}>
                  SECI Solar & Wind Procurement
                </div>
              </div>
            </div>

            {/* Hero Image Card */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid var(--p-border)',
                backgroundColor: 'var(--p-surface)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)'
              }}>
                <img
                  src="/assets/img/hero-wind.webp"
                  alt="Utility-scale modern wind turbines generating renewable power against an open sky"
                  style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '280px',
                    maxHeight: '460px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Floating Metric Card Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '14px',
                  right: '14px',
                  backgroundColor: 'rgba(223, 222, 219, 0.94)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  border: '1px solid var(--p-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--p-muted)', fontWeight: 600 }}>
                      Grid Integration Focus
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--p-ink)' }}>
                      Renewable Energy & Evacuation Nodes
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--p-muted)', textAlign: 'right' }}>
                    Photo: Karsten Würth (Unsplash)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gateways (Direct links to /services#gna and /services#seci) */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--p-border)' }}>
        <div className="wrap">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '32px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--p-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Practice Areas
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, margin: 0, color: 'var(--p-ink)' }}>
                Core Advisory Domains
              </h2>
            </div>
            <Link to="/services" style={{ textDecoration: 'none', color: 'var(--p-accent)', fontWeight: 600, fontSize: '15px' }}>
              View all services &rarr;
            </Link>
          </div>

          <div className="grid-cards">
            {/* GNA Service Card */}
            <div className="card-lift" style={{
              backgroundColor: 'var(--p-surface)',
              borderRadius: '12px',
              border: '1px solid var(--p-border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src="/assets/img/gna-substation.webp"
                  alt="High-voltage substation transformer"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontSize: '12px', color: 'var(--p-accent)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Regulatory Architecture
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 500, margin: '0 0 10px 0', color: 'var(--p-ink)' }}>
                  General Network Access (GNA)
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--p-muted)', lineHeight: 1.6, margin: '0 0 20px 0', flexGrow: 1 }}>
                  Rigorous guidance on CERC GNA regulations, inter-state grid connectivity applications, drawing rights, and transmission charge dynamics.
                </p>
                <div>
                  <Link to="/services#gna" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center' }}>
                    View GNA Service &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* SECI Tenders Card */}
            <div className="card-lift" style={{
              backgroundColor: 'var(--p-surface)',
              borderRadius: '12px',
              border: '1px solid var(--p-border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src="/assets/img/seci-solar.webp"
                  alt="Utility-scale solar panels"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontSize: '12px', color: 'var(--p-accent)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Renewable Procurement
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 500, margin: '0 0 10px 0', color: 'var(--p-ink)' }}>
                  SECI Tenders & Auctions
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--p-muted)', lineHeight: 1.6, margin: '0 0 20px 0', flexGrow: 1 }}>
                  Evaluation and advisory resources covering Solar Energy Corporation of India auctions, RfS guidelines, and clean power evacuation.
                </p>
                <div>
                  <Link to="/services#seci" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center' }}>
                    View SECI Tenders Service &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Practice & About Section */}
      <section id="about" style={{ padding: '64px 0', borderBottom: '1px solid var(--p-border)' }}>
        <div className="wrap">
          <div className="grid-2">
            <div>
              <div style={{ fontSize: '13px', color: 'var(--p-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Practice Profile
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, margin: '0 0 16px 0', color: 'var(--p-ink)', lineHeight: 1.18 }}>
                About {siteConfig.companyName}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--p-ink)', lineHeight: 1.6, marginBottom: '16px' }}>
                {siteConfig.companyName} was founded to bridge complex electrical grid engineering with practical statutory intelligence, assisting developers, utilities, engineers, and researchers across India's evolving energy transition.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--p-muted)', lineHeight: 1.65, marginBottom: '20px' }}>
                Operating independently with an editorial and engineering-focused rigor, the practice delivers thorough advisory without commercial bias, ensuring stakeholders make sound, legally compliant transmission decisions.
              </p>

              {/* Founder Profile / Credentials Placeholder */}
              <div style={{
                padding: '16px 18px',
                backgroundColor: 'var(--p-surface)',
                borderRadius: '8px',
                border: '1px solid var(--p-border)',
                borderLeft: '4px solid var(--p-accent)',
                fontSize: '13px',
                color: 'var(--p-muted)',
                lineHeight: 1.55
              }}>
                [Founder background, academic affiliations, engineering qualifications, and professional advisory milestones will be published here upon final review.]
              </div>
            </div>

            {/* Authentic Transmission Infrastructure Image (Zero People) */}
            <div>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--p-border)',
                backgroundColor: 'var(--p-surface)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)'
              }}>
                <img
                  src="/assets/img/about-grid.webp"
                  alt="High-voltage electrical transmission towers and corridor under an overcast sky"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  padding: '10px 14px',
                  backgroundColor: 'var(--p-surface)',
                  borderTop: '1px solid var(--p-border)',
                  fontSize: '12px',
                  color: 'var(--p-muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  <span>High-Voltage Transmission Corridor</span>
                  <span>Photo: Z3lvs (CC0)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '64px 0', backgroundColor: 'var(--p-surface-subtle)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div style={{ fontSize: '13px', color: 'var(--p-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '10px' }}>
            Engagement Channel
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, margin: '0 0 14px 0', color: 'var(--p-ink)' }}>
            Contact & Consultation
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--p-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
            For power transmission advisory consultations, regulatory assessments, or educational collaboration with {siteConfig.companyName}:
          </p>

          <div style={{
            backgroundColor: 'var(--p-surface)',
            padding: '28px',
            borderRadius: '10px',
            border: '1px solid var(--p-border)',
            borderLeft: '4px solid var(--p-accent)'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--p-ink)', marginBottom: '6px' }}>
              Direct Advisory Channel
            </div>
            <p style={{ fontSize: '14px', color: 'var(--p-muted)', lineHeight: 1.6, margin: 0 }}>
              Official consultation request protocols, advisory contact points, and scheduling information will be published here upon confirmation by the practice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
