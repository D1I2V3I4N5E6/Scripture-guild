import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',        to: '/' },
  { label: 'Bible Study', to: '/bible-study' },
  { label: 'Ask a Question', to: '/ask' },
  { label: 'Devotionals', to: '/devotionals' },
  { label: 'Prayer',      to: '/prayer' },
  { label: 'Notebook',    to: '/notebook' }, 
  { label: 'Games',       to: '/games' },
  { label: 'Dashboard',   to: '/dashboard' },
  { label: 'About',       to: '/about' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  function isActive(to) {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <style>{`
        .navbar { background-color: #1A0F02; color: #f5f0e8; position: sticky; top: 0; z-index: 1000; box-shadow: 0 4px 14px rgba(0,0,0,0.45); }
        .navbar__inner { max-width: 1300px; margin: 0 auto; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 76px; }
        .navbar__brand { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; color: #f5f0e8; transition: transform 0.2s ease; }
        .navbar__brand:hover { transform: scale(1.02); }
        .navbar__brand-icon { font-size: 1.6rem; line-height: 1; color: #FFC107; text-shadow: 0 0 8px rgba(255, 193, 7, 0.6); }
        .navbar__brand-name { font-family: Georgia, 'Times New Roman', serif; font-size: 1.4rem; font-weight: 700; letter-spacing: 0.03em; color: #f5f0e8; }
        .navbar__brand-name span { color: #FFC107; text-shadow: 0 0 8px rgba(255, 193, 7, 0.4); }
        .navbar__links { display: flex; align-items: center; gap: 1.25rem; list-style: none; margin: 0; padding: 0; }
        .navbar__links li a { display: block; padding: 0.5rem 0.75rem; text-decoration: none; color: #d4cfc6; font-family: 'Segoe UI', Arial, sans-serif; font-size: 0.95rem; font-weight: 600; transition: color 0.18s ease; }
        .navbar__links li a:hover { color: #FFD54F; }
        .navbar__links li a.nav-link--active { color: #FFC107; font-weight: 700; border-bottom: 2px solid #FFC107; }
        .navbar__search-btn { display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 50%; width: 38px; height: 38px; color: #f5f0e8; cursor: pointer; transition: all 0.2s ease; margin-left: 0.5rem; }
        .navbar__hamburger { display: none; background: none; border: none; color: #f5f0e8; font-size: 1.6rem; cursor: pointer; }
        .navbar__mobile-menu { display: none; flex-direction: column; background-color: #110a01; border-top: 1px solid rgba(255, 193, 7, 0.15); padding: 0.75rem 1.5rem 1rem; }
        .navbar__mobile-menu.is-open { display: flex; }
        .navbar__mobile-menu a { padding: 0.75rem 0.5rem; text-decoration: none; color: #d4cfc6; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .navbar__mobile-menu a.nav-link--active { color: #FFC107; }
        @media (max-width: 950px) { .navbar__links, .navbar__search-btn { display: none; } .navbar__hamburger { display: block; } }
      `}</style>

      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand" onClick={handleLinkClick}>
            <span className="navbar__brand-icon">✝</span>
            <span className="navbar__brand-name">Scripture <span>Guild</span></span>
          </Link>

          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className={isActive(to) ? 'nav-link--active' : ''} onClick={handleLinkClick}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/search" className="navbar__search-btn" onClick={handleLinkClick}>🔍</Link>

          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`navbar__mobile-menu${menuOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className={isActive(to) ? 'nav-link--active' : ''} onClick={handleLinkClick}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;