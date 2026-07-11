import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

/*
  AboutPage.jsx — ScriptureGuide
  Tells the story of Divinegift Morris, why ScriptureGuide was built,
  what is live right now, and how reader feedback drives improvement.
*/

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">

        {/* ── Hero Banner ── */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <span className="about-badge">Our Story</span>
            <h1 className="about-hero-title">About ScriptureGuide</h1>
            <p className="about-hero-verse">
              &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;
              <span className="about-hero-ref"> — Psalm 119:105</span>
            </p>
          </div>
        </section>

        {/* ── Founder Story ── */}
        <section className="about-section about-founder">
          <div className="about-container">
            <div className="about-two-col">

              {/* Left — avatar placeholder */}
              <div className="about-avatar-wrap">
                <div className="about-avatar">
                  <span className="about-avatar-initials">DM</span>
                </div>
                <p className="about-avatar-name">Divinegift Morris</p>
                <p className="about-avatar-role">Founder &amp; Writer</p>
                <p className="about-avatar-date">Since 20 May 2026</p>
              </div>

              {/* Right — story */}
              <div className="about-story">
                <h2 className="about-section-title">Why ScriptureGuide Exists</h2>
                <p className="about-story-para">
                  My name is <strong>Divinegift Morris</strong>, and I started ScriptureGuide
                  because I desperately needed Bible explanations that were
                  <em> short, clear, and easy to understand</em>.
                </p>
                <p className="about-story-para">
                  I kept reading chapters and still felt confused — the words were
                  there, but the meaning stayed out of reach. Then came a moment of
                  <em> insight</em>. Suddenly a passage clicked, and it encouraged me,
                  made me feel alive — even in the middle of difficult times. That
                  feeling is what I want every reader to experience.
                </p>
                <p className="about-story-para">
                  ScriptureGuide launched on <strong>20 May 2026</strong>. Right now it is
                  just me — writing, editing, and publishing every post, one at a time.
                  No team yet. Just a calling, a keyboard, and a lot of prayer.
                </p>

                {/* Values pills */}
                <div className="about-values">
                  <span className="about-value-pill">Short &amp; Clear</span>
                  <span className="about-value-pill">Spirit-Led</span>
                  <span className="about-value-pill">All Denominations</span>
                  <span className="about-value-pill">Honest &amp; Personal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider verse ── */}
        <div className="about-verse-divider">
          <blockquote className="about-mid-verse">
            &ldquo;Do not be conformed to this world, but be transformed by the renewing
            of your mind.&rdquo; <span>— Romans 12:2</span>
          </blockquote>
        </div>

        {/* ── Where Things Stand ── */}
        <section className="about-section about-impact">
          <div className="about-container">
            <h2 className="about-section-title about-center">Where Things Stand</h2>
            <p className="about-impact-sub about-center">
              ScriptureGuide is in its <strong>early stage</strong> — launched in 2026.
              I am tracking <em>reader feedback</em> more than big numbers right now,
              because understanding always comes before growth.
            </p>

            {/* What is live */}
            <h3 className="about-live-heading">What Is Live Right Now</h3>
            <div className="about-live-grid">

              <div className="about-live-card">
                <span className="about-live-icon">📖</span>
                <h4>Daily Devotionals</h4>
                <p>
                  Short, focused reflections published regularly to help you
                  start each day anchored in Scripture.
                </p>
              </div>

              <div className="about-live-card">
                <span className="about-live-icon">📋</span>
                <h4>Reading Plans</h4>
                <p>
                  Structured plans that guide you through books and themes
                  without the overwhelm of deciding what to read next.
                </p>
              </div>

              <div className="about-live-card">
                <span className="about-live-icon">✍️</span>
                <h4>New Posts — Weekly</h4>
                <p>
                  A new explanation or study post goes up every week.
                  Every post is written and edited personally by Divinegift.
                </p>
              </div>

              <div className="about-live-card">
                <span className="about-live-icon">💬</span>
                <h4>Reader Feedback Loop</h4>
                <p>
                  Every post ends with two questions: <em>Did this help you
                  understand the verse better?</em> and <em>What was confusing?</em>
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Feedback philosophy ── */}
        <section className="about-section about-feedback-phil">
          <div className="about-container about-feedback-inner">
            <div className="about-feedback-icon-wrap">
              <span className="about-feedback-big-icon">🙏</span>
            </div>
            <div>
              <h2 className="about-section-title">How I Know What to Improve</h2>
              <p className="about-feedback-para">
                I collect feedback from <strong>every reader</strong>. After each post I ask:
              </p>
              <ul className="about-feedback-list">
                <li>Did this help you understand the verse better?</li>
                <li>What was confusing?</li>
              </ul>
              <p className="about-feedback-para">
                Those two questions are my compass. They tell me what language works,
                what needs more clarity, and what topics to cover next. No fancy
                analytics — just honest conversation between reader and writer.
              </p>
              <Link to="/feedback" className="about-cta-btn">Share Your Feedback</Link>
            </div>
          </div>
        </section>

        {/* ── Coming Soon ── */}
        <section className="about-section about-coming">
          <div className="about-container">
            <h2 className="about-section-title about-center">What Is Coming</h2>
            <p className="about-coming-sub about-center">
              ScriptureGuide is growing. Here is what is being built next:
            </p>
            <div className="about-coming-grid">
              <div className="about-coming-item">
                <span>🤖</span>
                <p>AI-Powered Bible Q&amp;A</p>
              </div>
              <div className="about-coming-item">
                <span>🎮</span>
                <p>Faith-Based Games</p>
              </div>
              <div className="about-coming-item">
                <span>🛐</span>
                <p>Prayer Guilds</p>
              </div>
              <div className="about-coming-item">
                <span>📊</span>
                <p>Growth Dashboard</p>
              </div>
              <div className="about-coming-item">
                <span>👥</span>
                <p>Small Group Tools</p>
              </div>
              <div className="about-coming-item">
                <span>🔍</span>
                <p>Scripture Search</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="about-cta-strip">
          <div className="about-container about-cta-strip-inner">
            <div>
              <h2 className="about-cta-strip-title">Ready to Understand God's Word?</h2>
              <p className="about-cta-strip-sub">
                Start with a devotional, explore a reading plan, or ask a question.
                ScriptureGuide is here to walk with you.
              </p>
            </div>
            <div className="about-cta-strip-btns">
              <Link to="/devotionals" className="about-cta-btn">Read a Devotional</Link>
              <Link to="/bible-study" className="about-cta-btn about-cta-btn--outline">Start Studying</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── Page-scoped styles ── */}
      <style>{`
        /* ── Layout ── */
        .about-page {
          font-family: 'Georgia', serif;
          color: #2c1a0e;
          background: #fdf8f2;
        }
        .about-main {
          min-height: 80vh;
        }
        .about-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .about-center {
          text-align: center;
        }

        /* ── Hero ── */
        .about-hero {
          background: linear-gradient(135deg, #6b1a2a 0%, #8b2635 60%, #a0302a 100%);
          color: #fff;
          padding: 5rem 1.5rem 4rem;
          text-align: center;
        }
        .about-hero-inner {
          max-width: 700px;
          margin: 0 auto;
        }
        .about-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.4);
          color: #ffd700;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          margin-bottom: 1.1rem;
        }
        .about-hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          margin: 0 0 1.2rem;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .about-hero-verse {
          font-style: italic;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.88);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .about-hero-ref {
          font-weight: 700;
          color: #ffd700;
        }

        /* ── Sections ── */
        .about-section {
          padding: 4.5rem 0;
        }
        .about-section-title {
          font-size: 1.9rem;
          font-weight: 700;
          color: #6b1a2a;
          margin: 0 0 1rem;
          position: relative;
        }
        .about-section-title::after {
          content: '';
          display: block;
          width: 50px;
          height: 3px;
          background: #c9a84c;
          margin-top: 0.5rem;
          border-radius: 2px;
        }
        .about-center.about-section-title::after {
          margin: 0.5rem auto 0;
        }

        /* ── Founder two-col ── */
        .about-two-col {
          display: flex;
          gap: 3rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .about-avatar-wrap {
          text-align: center;
          flex-shrink: 0;
          width: 180px;
        }
        .about-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6b1a2a, #c9a84c);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.8rem;
          box-shadow: 0 4px 18px rgba(107,26,42,0.25);
        }
        .about-avatar-initials {
          font-size: 2.4rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
        }
        .about-avatar-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: #6b1a2a;
          margin: 0;
        }
        .about-avatar-role {
          font-size: 0.88rem;
          color: #8b6347;
          margin: 0.15rem 0;
        }
        .about-avatar-date {
          font-size: 0.8rem;
          color: #b08860;
          font-style: italic;
        }

        /* ── Story text ── */
        .about-story {
          flex: 1;
          min-width: 260px;
        }
        .about-story-para {
          font-size: 1.05rem;
          line-height: 1.85;
          color: #3d2010;
          margin: 0 0 1rem;
        }
        .about-values {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.4rem;
        }
        .about-value-pill {
          background: #fdf0d5;
          border: 1px solid #c9a84c;
          color: #7a5c00;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.3rem 0.85rem;
          border-radius: 20px;
          letter-spacing: 0.04em;
        }

        /* ── Mid-verse divider ── */
        .about-verse-divider {
          background: #6b1a2a;
          padding: 2.8rem 1.5rem;
          text-align: center;
        }
        .about-mid-verse {
          margin: 0 auto;
          max-width: 640px;
          font-size: 1.2rem;
          font-style: italic;
          color: #fdf8f2;
          line-height: 1.8;
        }
        .about-mid-verse span {
          display: block;
          margin-top: 0.5rem;
          color: #ffd700;
          font-style: normal;
          font-weight: 700;
          font-size: 0.95rem;
        }

        /* ── Impact / Where things stand ── */
        .about-impact {
          background: #fff9f0;
        }
        .about-impact-sub {
          font-size: 1.05rem;
          color: #5a3825;
          line-height: 1.75;
          max-width: 680px;
          margin: 0 auto 2.5rem;
        }
        .about-live-heading {
          text-align: center;
          font-size: 1.2rem;
          color: #6b1a2a;
          margin-bottom: 1.5rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .about-live-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .about-live-card {
          background: #fff;
          border: 1px solid #e8d5b7;
          border-top: 4px solid #6b1a2a;
          border-radius: 10px;
          padding: 1.6rem 1.4rem;
          box-shadow: 0 2px 12px rgba(107,26,42,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .about-live-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 20px rgba(107,26,42,0.13);
        }
        .about-live-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.7rem;
        }
        .about-live-card h4 {
          font-size: 1.05rem;
          color: #6b1a2a;
          margin: 0 0 0.5rem;
          font-weight: 700;
        }
        .about-live-card p {
          font-size: 0.92rem;
          color: #5a3825;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Feedback philosophy ── */
        .about-feedback-phil {
          background: #fdf8f2;
        }
        .about-feedback-inner {
          display: flex;
          gap: 2.5rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .about-feedback-icon-wrap {
          flex-shrink: 0;
        }
        .about-feedback-big-icon {
          font-size: 4rem;
        }
        .about-feedback-para {
          font-size: 1.02rem;
          color: #3d2010;
          line-height: 1.8;
          margin: 0 0 0.8rem;
        }
        .about-feedback-list {
          margin: 0 0 1rem 1.4rem;
          padding: 0;
        }
        .about-feedback-list li {
          font-size: 1rem;
          color: #6b1a2a;
          font-style: italic;
          line-height: 1.9;
          font-weight: 600;
        }

        /* ── CTA button (reused) ── */
        .about-cta-btn {
          display: inline-block;
          background: #6b1a2a;
          color: #fff;
          padding: 0.75rem 1.7rem;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          margin-top: 0.5rem;
        }
        .about-cta-btn:hover {
          background: #8b2635;
          transform: translateY(-2px);
        }
        .about-cta-btn--outline {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
        }
        .about-cta-btn--outline:hover {
          background: rgba(255,255,255,0.15);
        }

        /* ── Coming soon ── */
        .about-coming {
          background: #fff9f0;
        }
        .about-coming-sub {
          font-size: 1rem;
          color: #5a3825;
          margin-bottom: 2rem;
        }
        .about-coming-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.2rem;
          max-width: 760px;
          margin: 0 auto;
        }
        .about-coming-item {
          background: #fff;
          border: 1px solid #e8d5b7;
          border-radius: 10px;
          padding: 1.4rem 1rem;
          text-align: center;
          box-shadow: 0 1px 6px rgba(107,26,42,0.06);
          transition: transform 0.2s;
        }
        .about-coming-item:hover {
          transform: translateY(-3px);
        }
        .about-coming-item span {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .about-coming-item p {
          font-size: 0.88rem;
          font-weight: 700;
          color: #6b1a2a;
          margin: 0;
        }

        /* ── CTA strip ── */
        .about-cta-strip {
          background: linear-gradient(135deg, #6b1a2a, #8b2635);
          padding: 4rem 1.5rem;
        }
        .about-cta-strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .about-cta-strip-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem;
        }
        .about-cta-strip-sub {
          color: rgba(255,255,255,0.82);
          font-size: 1rem;
          margin: 0;
          max-width: 500px;
          line-height: 1.65;
        }
        .about-cta-strip-btns {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .about-two-col {
            flex-direction: column;
            align-items: center;
          }
          .about-avatar-wrap {
            width: 100%;
          }
          .about-cta-strip-inner {
            flex-direction: column;
            text-align: center;
          }
          .about-cta-strip-btns {
            justify-content: center;
          }
          .about-feedback-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-feedback-list {
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}
