import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main id="main-content" style={{ overflowX: 'hidden' }}>
      {/* =========================================================
          HERO SECTION (Art-Directed Sky & Monumental Turbine)
          ========================================================= */}
      <section className="hero-editorial-wrap">
        {/* Monumental Turbine Layer with Radial Sky Mask */}
        <div className="hero-turbine-layer" aria-hidden="true"></div>

        {/* Hero Content Layer */}
        <div className="hero-content">
          <div className="hero-tag">Independent Power & Clean Energy Advisory</div>

          <h1 className="hero-title">
            Strategic Regulatory Clarity<br />for India's Clean Energy Grid.
          </h1>

          <p className="hero-subtitle">
            Independent power-sector advisory guiding utility-scale clean energy developers through CERC General Network Access (GNA) regulations and SECI renewable tenders.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="btn-hero-dark">
              <span>Explore Advisory Services</span>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="#about" className="hero-text-link">
              <span>Practice Scope &darr;</span>
            </a>
          </div>

          {/* Single Tasteful Translucent Overlay (Grounds foreground) */}
          <div className="hero-single-glass-panel">
            <div className="glass-thumb">
              <img src="/assets/img/gna-substation.webp" alt="High Voltage Electricity Substation" />
            </div>
            <div className="glass-text">
              <h4>ISTS Transmission & Grid Access</h4>
              <p>Independent advisory covering CERC regulations and grid connectivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 1: DARK NAVY RESTRAINED EDITORIAL INDEX
          ========================================================= */}
      <section className="editorial-statement-band">
        <div className="wrap">
          <div className="statement-top-flex">
            <h2>Navigating India's High-Voltage Power Transition</h2>
            <div className="statement-context-p">
              An independent advisory perspective on the statutory rules, grid codes, and commercial guidelines governing utility-scale power projects.
            </div>
          </div>

          <div className="statement-index-grid">
            <div className="editorial-entry">
              <div className="entry-num">01 / TRANSMISSION ACCESS</div>
              <div className="entry-title">CERC General Network Access (GNA)</div>
              <div className="entry-desc">
                Statutory framework, non-discriminatory open access, and ISTS connectivity principles under CERC GNA Regulations 2022 and subsequent amendments.
              </div>
            </div>

            <div className="editorial-entry">
              <div className="entry-num">02 / COMPETITIVE OFFTAKE</div>
              <div className="entry-title">SECI Utility-Scale Tenders</div>
              <div className="entry-desc">
                Commercial assessment across central bidding cycles, Request for Selection (RfS) qualification criteria, and standardized long-term PPA provisions.
              </div>
            </div>
          </div>

          <div className="statement-disclaimer-note">
            Independent advisory practice. Not affiliated with, endorsed by, or an agency of CERC, CTUIL, SECI, or any governmental authority.
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: ABOUT / THE PRACTICE (Asymmetric Portrait Crop)
          ========================================================= */}
      <section id="about" className="about-editorial-wrap">
        <div className="wrap">
          <div className="about-grid-inner">
            <div className="about-portrait-anchor">
              <img src="/assets/img/about-grid.webp" alt="High Voltage Electricity Transmission Grid Infrastructure" />
            </div>

            <div>
              <div className="about-index-tag">01 / The Practice</div>
              <h2 className="about-headline">
                Bridging Power Regulations & Utility-Scale Clean Energy.
              </h2>
              <p className="about-body-text">
                AD P&E Consultancy provides specialized statutory, commercial, and technical advisory to renewable energy developers, independent power producers (IPPs), and power sector stakeholders navigating India's dynamic regulatory landscape.
              </p>

              <div className="editorial-hairline-list">
                <div className="hairline-item">
                  <span>CERC Statutory Compliance</span>
                  <span>Grid code & statutory amendments</span>
                </div>
                <div className="hairline-item">
                  <span>General Network Access (GNA)</span>
                  <span>ISTS connectivity orientation</span>
                </div>
                <div className="hairline-item">
                  <span>SECI Tender Procurement</span>
                  <span>Standard bidding & PPA guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: CORE PRACTICE AREAS SHOWCASE
          ========================================================= */}
      <section id="services-preview" className="homepage-services-section">
        <div className="wrap">
          <div className="section-editorial-header">
            <div>
              <div className="about-index-tag">02 / Advisory Focus</div>
              <h2>Core Practice Areas</h2>
            </div>
            <p>
              Independent statutory and commercial advisory structured around India's critical power transmission and clean energy procurement mechanisms.
            </p>
          </div>

          {/* Feature 01: GNA */}
          <div className="editorial-feature-gna">
            <div className="gna-photo-frame">
              <img src="/assets/img/gna-substation.webp" alt="765kV High Voltage Electricity Substation" />
            </div>

            <div>
              <div className="feature-num-tag">01 / TRANSMISSION CONNECTIVITY</div>
              <h3 className="feature-title">General Network Access (GNA) Regulations</h3>
              <p className="feature-desc">
                Independent statutory advisory guiding renewable developers through CERC General Network Access regulations, technical connectivity principles, and national grid access.
              </p>

              <ul className="feature-points-rules">
                <li>CERC GNA Regulatory Overview & Statutory Amendments</li>
                <li>ISTS Transmission Interconnection Principles</li>
                <li>Statutory Filing & Compliance Documentation Guidance</li>
              </ul>

              <Link to="/services#gna" className="editorial-action-link">
                <span>View Full GNA Advisory Scope</span>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Feature 02: SECI Tenders */}
          <div className="editorial-feature-seci">
            <div>
              <div className="feature-num-tag">02 / COMPETITIVE PROCUREMENT</div>
              <h3 className="feature-title">SECI Utility-Scale Renewable Tenders</h3>
              <p className="feature-desc">
                Strategic and commercial guidance for independent power producers participating in Solar Energy Corporation of India (SECI) tenders and central bidding auctions.
              </p>

              <ul className="feature-points-rules">
                <li>Request for Selection (RfS) Compliance Assessment</li>
                <li>Standard Bidding Guidelines Analysis</li>
                <li>Power Purchase Agreement (PPA) Terms Orientation</li>
              </ul>

              <Link to="/services#seci" className="editorial-action-link">
                <span>View Full SECI Tender Scope</span>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="seci-photo-frame">
              <img src="/assets/img/seci-solar.webp" alt="Utility-Scale Photovoltaic Solar Farm" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: INQUIRIES & ENGAGEMENTS NOTICE
          ========================================================= */}
      <section id="contact" className="engagements-editorial-section">
        <div className="wrap">
          <div className="engagement-inner-grid">
            <div className="engagement-left">
              <div className="about-index-tag">03 / Advisory Engagements</div>
              <h3>Direct Consultations & Contact</h3>
              <p>
                AD P&E Consultancy advises clean energy developers, IPPs, and institutional investors on statutory grid access and competitive bidding frameworks.
              </p>
            </div>

            <div className="engagement-right">
              <div className="engagement-meta-row">
                <div className="meta-tag-label">Practice Notice</div>
                <div className="meta-value-text">
                  Direct engagement protocols and consultation scheduling will be operationalized upon the public launch of the advisory portal.
                </div>
              </div>

              <div className="engagement-meta-row" style={{ marginBottom: 0 }}>
                <div className="meta-tag-label">Preliminary Inquiries</div>
                <div className="meta-value-text" style={{ color: '#557297' }}>
                  Advisory engagements are conducted under strict commercial confidentiality. Direct contact channels will be provided directly by the consultancy leadership.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
