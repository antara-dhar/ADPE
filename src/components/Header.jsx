import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e, path) => {
    setMenuOpen(false);
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="wrap header-inner">
        {/* Brand Mark with Bespoke Transmission Monogram */}
        <Link to="/" className="brand-logo" onClick={() => setMenuOpen(false)}>
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
            <span className="brand-name">{siteConfig.headerWordmark}</span>
            <span className="brand-sub">Consultancy</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
          >
            Services
          </Link>
          <Link
            to="/#about"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '/#about')}
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '/#contact')}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="mobile-drawer" style={{ display: 'flex' }}>
          <Link
            to="/"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '/')}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/#about"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '/#about')}
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '/#contact')}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
