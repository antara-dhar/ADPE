import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="wrap">
        <div className="footer-top-rule">
          {/* Brand Column */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '14px' }}>
              <div className="brand-mark">
                <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="22" height="22">
                  <path d="M12 2.5 L7 22 M12 2.5 L17 22" />
                  <path d="M4 7 L20 7" />
                  <path d="M5 13 L19 13" />
                  <path d="M8 7 L16 13 M16 7 L8 13" />
                  <circle cx="12" cy="2.5" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#ffffff' }}>AD P&E</span>
                <span className="brand-sub" style={{ color: '#38bdf8' }}>Consultancy</span>
              </div>
            </Link>
            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#8397b2', maxWidth: '340px', margin: 0 }}>
              Independent Indian power-sector consultancy dedicated to regulatory certainty, transmission access, and utility-scale clean energy deployment.
            </p>
          </div>

          {/* Practice Areas */}
          <div className="footer-col">
            <h5>Advisory Focus</h5>
            <ul>
              <li><Link to="/services#gna">General Network Access (GNA)</Link></li>
              <li><Link to="/services#seci">SECI Utility-Scale Tenders</Link></li>
              <li><Link to="/services#gna">ISTS Interconnection Principles</Link></li>
              <li><Link to="/services#gna">Grid Code & Compliance Orientation</Link></li>
            </ul>
          </div>

          {/* Statutory Frameworks */}
          <div className="footer-col">
            <h5>Statutory Frameworks</h5>
            <ul>
              <li><span style={{ color: '#94a3b8', fontSize: '13.5px' }}>CERC GNA Regulations 2022</span></li>
              <li><span style={{ color: '#94a3b8', fontSize: '13.5px' }}>Indian Electricity Grid Code (IEGC)</span></li>
              <li><span style={{ color: '#94a3b8', fontSize: '13.5px' }}>SECI Standard Bidding Guidelines</span></li>
              <li><span style={{ color: '#94a3b8', fontSize: '13.5px' }}>Central Transmission Utility Procedures</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Meta */}
        <div className="footer-bottom-flex">
          <div>&copy; 2026 AD P&E Consultancy. All rights reserved.</div>
          <div>Independent Statutory & Regulatory Advisory &bull; Indian Power Sector</div>
        </div>

        {/* Full Statutory Disclaimer */}
        <div className="footer-disclaimer-text">
          <strong>Statutory & Affiliation Disclaimer:</strong> AD P&E Consultancy is an independent commercial and regulatory advisory practice. AD P&E Consultancy is not affiliated with, authorized by, associated with, or an agency of the Central Electricity Regulatory Commission (CERC), Central Transmission Utility of India Limited (CTUIL), Solar Energy Corporation of India (SECI), or any governmental authority. All references to public regulatory bodies, regulations, and guidelines are for descriptive informational purposes only.
        </div>
      </div>
    </footer>
  );
}
