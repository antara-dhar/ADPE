import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav)',
      backgroundColor: 'rgba(223, 222, 219, 0.94)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--p-border)',
      zIndex: 100
    }}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="wrap" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            color: 'var(--p-ink)', 
            fontWeight: 600, 
            fontSize: '20px', 
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--p-accent)'
          }}></span>
          {siteConfig.headerWordmark}
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {siteConfig.navLinks.map((link) => {
            if (link.path.startsWith('/#')) {
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--p-muted)',
                    fontSize: '15px',
                    fontWeight: 500,
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--p-ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--p-muted)')}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === '/'}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'var(--p-ink)' : 'var(--p-muted)',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 500,
                  position: 'relative',
                  paddingBottom: '4px',
                  borderBottom: isActive ? '2px solid var(--p-accent)' : '2px solid transparent',
                  transition: 'all 0.15s ease'
                })}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Accessible Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--nav)',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--p-bg)',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          borderBottom: '1px solid var(--p-border)',
          zIndex: 99
        }}>
          {siteConfig.navLinks.map((link) => (
            link.path.startsWith('/#') ? (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--p-ink)',
                  fontSize: '20px',
                  fontWeight: 500,
                  padding: '8px 0'
                }}
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'var(--p-accent)' : 'var(--p-ink)',
                  fontSize: '20px',
                  fontWeight: isActive ? 600 : 500,
                  padding: '8px 0'
                })}
              >
                {link.label}
              </NavLink>
            )
          ))}
        </div>
      )}
    </header>
  );
}
