import React from 'react';
import { servicesData } from '../data/servicesData.js';

export default function ServicesPage() {
  const gna = servicesData.find(s => s.id === 'gna');
  const seci = servicesData.find(s => s.id === 'seci');

  return (
    <main id="main-content">
      {/* =========================================================
          SERVICES EDITORIAL SKY BANNER
          ========================================================= */}
      <section className="services-editorial-hero">
        <div className="wrap">
          <div className="services-hero-inner">
            <div className="services-tag">Advisory Practice</div>
            <h1>Transmission Connectivity & Utility Procurement</h1>
            <p>
              Independent statutory and commercial advisory navigating the two foundational pillars of India's clean power transition: Inter-State Transmission Access (GNA) and central competitive renewable auctions (SECI).
            </p>

            <div className="services-jump-links">
              <a href="#gna" className="jump-link-item">
                <span>&darr; 01 / General Network Access (GNA)</span>
              </a>
              <a href="#seci" className="jump-link-item">
                <span>&darr; 02 / SECI Utility-Scale Tenders</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE 01: GNA (Architectural Photo & Editorial Hierarchy)
          ========================================================= */}
      <section id="gna" className="service-editorial-block">
        <div className="wrap">
          <div className="service-headline-row">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
              <div className="service-num-big">01</div>
              <div>
                <div className="about-index-tag">Statutory Transmission Track</div>
                <h2>{gna.title}</h2>
              </div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#557297' }}>
              CERC Framework 2022 & Amendments
            </div>
          </div>

          {/* Panoramic Photo Frame */}
          <div className="service-panoramic-frame">
            <img src={gna.image} alt={gna.imageAlt} />
          </div>

          {/* Clean Text Breakdown with Fine Rules */}
          <div className="editorial-rules-grid">
            <div>
              <p className="editorial-overview-p">
                Under the Central Electricity Regulatory Commission (CERC) Connectivity and General Network Access to the Inter-State Transmission System Regulations, 2022 and subsequent amendments, power generation entities must satisfy rigorous statutory prerequisites to evacuate electricity across the national transmission network.
              </p>
              <p className="editorial-overview-p" style={{ marginTop: '16px' }}>
                Our practice provides independent guidance to developers through each statutory stage, from eligibility assessment and portal documentation to bilateral connection agreement execution.
              </p>
            </div>

            <div>
              <div className="editorial-breakdown-list">
                {gna.focusAreas.map((area, idx) => (
                  <div key={idx} className="editorial-breakdown-item">
                    <h5>{area.title}</h5>
                    <p>{area.detail}</p>
                  </div>
                ))}
              </div>

              {/* Understated Placeholder Note */}
              <div className="understated-placeholder-note">
                {gna.placeholder}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE 02: SECI TENDERS (Midnight Cobalt Canvas)
          ========================================================= */}
      <section id="seci" className="service-editorial-block-dark">
        <div className="wrap">
          <div className="service-headline-row">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
              <div className="service-num-big" style={{ color: '#38bdf8' }}>02</div>
              <div>
                <div className="about-index-tag" style={{ color: '#38bdf8' }}>Commercial Bidding Track</div>
                <h2>{seci.title}</h2>
              </div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8' }}>
              Central Competitive Auctions
            </div>
          </div>

          {/* Panoramic Photo Frame */}
          <div className="service-panoramic-frame" style={{ background: '#000' }}>
            <img src={seci.image} alt={seci.imageAlt} />
          </div>

          {/* Clean Text Breakdown with Fine Rules */}
          <div className="editorial-rules-grid">
            <div>
              <p className="editorial-overview-p">
                The Solar Energy Corporation of India (SECI) conducts major competitive auctions that define India's renewable energy deployment. We provide independent commercial and regulatory advisory to developers participating in central competitive clean energy tenders.
              </p>
              <p className="editorial-overview-p" style={{ marginTop: '16px' }}>
                Our advisory spans the tender lifecycle under standard bidding guidelines issued by the Ministry of Power and MNRE, focusing on statutory risk management and bankable commercial execution.
              </p>
            </div>

            <div>
              <div className="editorial-breakdown-list">
                {seci.focusAreas.map((area, idx) => (
                  <div key={idx} className="editorial-breakdown-item">
                    <h5>{area.title}</h5>
                    <p>{area.detail}</p>
                  </div>
                ))}
              </div>

              {/* Understated Placeholder Note */}
              <div className="understated-placeholder-note">
                {seci.placeholder}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
