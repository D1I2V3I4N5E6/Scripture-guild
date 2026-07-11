import React from 'react'
import { Link } from 'react-router-dom'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      {/* Brand & tagline */}
      <div className="footer__brand">
        <span className="footer__name">✝ ScriptureGuide</span>
        <p className="footer__tagline">
          Growing in faith — one verse, one lesson, one prayer at a time.
        </p>
      </div>

      {/* Mission statement */}
      <div className="footer__mission">
        <h3 className="footer__heading">Our Mission</h3>
        <p>
          ScriptureGuide exists to make the Word of God accessible and engaging
          for every believer — from new converts to mature disciples. We provide
          structured Bible study, daily devotionals, and community-driven prayer
          to help all people grow deeper in their walk with Christ.
        </p>
      </div>

      {/* Quick links */}
      <div className="footer__links">
        <h3 className="footer__heading">Explore</h3>
        <ul>
          <li><Link to="/bible-study">Bible Study</Link></li>
          <li><Link to="/devotionals">Devotionals</Link></li>
          <li><Link to="/prayer">Prayer Guilds</Link></li>
          <li><Link to="/games">Faith Games</Link></li>
          <li><Link to="/ask">Ask AI</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </div>

      {/* Contact information */}
      <div className="footer__contact">
        <h3 className="footer__heading">Contact Us</h3>
        <p>Email: <a href="mailto:hello@scriptureguide.org">hello@scriptureguide.org</a></p>
        <p>Community: <a href="/prayer">Join a Prayer Guild</a></p>
        <p>Feedback: <Link to="/feedback">Share Your Thoughts</Link></p>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>
          &copy; {CURRENT_YEAR} ScriptureGuide. All rights reserved.
          &nbsp;|&nbsp; Built with faith &amp; purpose.
        </p>
        <p className="footer__verse">
          &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;
          &nbsp;&mdash; Psalm 119:105
        </p>
      </div>

      <style>{`
        .footer {
          background: var(--color-primary);
          color: var(--color-light);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 2.5rem 2rem 1.5rem;
          margin-top: auto;
        }
        .footer__bottom {
          grid-column: 1 / -1;
          border-top: 1px solid rgba(255,255,255,0.2);
          padding-top: 1rem;
          text-align: center;
          font-size: 0.85rem;
          opacity: 0.85;
        }
        .footer__verse {
          font-style: italic;
          margin-top: 0.4rem;
          color: var(--color-accent);
        }
        .footer__name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-accent);
        }
        .footer__tagline {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          opacity: 0.85;
        }
        .footer__heading {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer__links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .footer a {
          color: var(--color-light);
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.9;
          transition: opacity 0.2s;
        }
        .footer a:hover { opacity: 1; text-decoration: underline; }
        .footer__contact p { margin: 0.3rem 0; font-size: 0.9rem; }
      `}</style>
    </footer>
  )
}
