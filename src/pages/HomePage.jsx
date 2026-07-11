import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ── Daily Verse Rotation ──────────────────────────────────────
const DAILY_VERSES = [
  {
    text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
    ref: 'Jeremiah 29:11',
  },
  {
    text: 'I can do all things through Christ who strengthens me.',
    ref: 'Philippians 4:13',
  },
  {
    text: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    ref: 'Proverbs 3:5',
  },
  {
    text: 'The Lord is my shepherd; I shall not want.',
    ref: 'Psalm 23:1',
  },
  {
    text: 'Come to me, all who are weary and burdened, and I will give you rest.',
    ref: 'Matthew 11:28',
  },
  {
    text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
    ref: 'Joshua 1:9',
  },
  {
    text: 'And we know that in all things God works for the good of those who love him.',
    ref: 'Romans 8:28',
  },
]

// ── Feature Data ─────────────────────────────────────────────
const FEATURES = [
  {
    icon: '📖',
    title: 'Structured Bible Study',
    desc: 'Step-by-step lessons that break down Scripture into clear, understandable insights — no more reading without understanding.',
    link: '/bible-study',
    cta: 'Start Studying',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Q&A',
    desc: 'Ever wished someone could answer your lingering Bible questions? Ask anything and receive Scripture-rooted, clear explanations instantly.',
    link: '/ask',
    cta: 'Ask a Question',
  },
  {
    icon: '🌅',
    title: 'Daily Devotionals',
    desc: "Start each day grounded in God's nature — short, meaningful reflections that bring peace and courage even in the hardest moments.",
    link: '/devotionals',
    cta: "Read Today's Devotional",  
  },
  {
    icon: '🙏',
    title: 'Prayer Guilds',
    desc: 'Join a community of believers who pray together. Submit requests and anchor your soul with a dedicated online prayer guild.',
    link: '/prayer', 
    cta: 'Join a Guild',
  },
  {
    icon: '🎮',
    title: 'Faith-Based Games',
    desc: 'Reinforce what you learn through fun, Scripture-based quizzes and matching games — faith growth that feels joyful.',
    link: '/games',
    cta: 'Play & Learn',
  },
  {
    icon: '📊',
    title: 'Growth Dashboard',
    desc: 'Track your streaks, completed lessons, prayer activity, and spiritual milestones — see your faith journey at a glance.',
    link: '/dashboard',
    cta: 'View Dashboard',
  },
]

// ── Testimonial / Story Data ──────────────────────────────────
const STORIES = [
  {
    name: 'Miriam O.',
    role: 'New Believer',
    text: 'I used to read the Bible and feel confused and alone. Scripture Guild gave me the explanations I was desperately looking for. Now I read with joy and understanding.',
    avatar: '👩🏾',
  },
  {
    name: 'David K.',
    role: 'Small Group Leader',
    text: 'The structured lessons have transformed our small group sessions. My members come prepared and we go so much deeper than before.',
    avatar: '👨🏿',
  },
  {
    name: 'Grace T.',
    role: 'Young Adult',
    text: "During one of the hardest seasons of my life, the daily devotionals gave me courage I didn't know I had. God's Word truly is alive.",
    avatar: '👩🏽',
  },
]

// ── How It Works Steps ────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Choose Your Path',
    desc: 'Pick a Bible study track, a devotional series, or ask your first question. Every journey starts with one step.',
  },
  {
    step: '02',
    title: 'Receive Clear Insight',
    desc: 'Get Scripture explained in plain language — the kind of clarity that brings that peaceful "now I understand" moment.',
  },
  {
    step: '03',
    title: 'Grow & Connect',
    desc: 'Track your progress, join prayer guilds, play games, and encourage others walking the same path.',
  },
]

export default function HomePage() {
  const [verseIndex, setVerseIndex] = useState(0)
  const [verseVisible, setVerseVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVerseVisible(false)
      setTimeout(() => {
        setVerseIndex(prev => (prev + 1) % DAILY_VERSES.length)
        setVerseVisible(true)
      }, 500)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const currentVerse = DAILY_VERSES[verseIndex]

  return (
    <div className="home-page">
      <style>{`
        /* ── Deep Premium Canvas With Ambient Glows ─────────── */
        .home-page {
          font-family: 'Georgia', 'Times New Roman', serif;
          background-color: #0F0A06; /* Rich, near-black Warm Espresso base */
          color: #E2E8F0; 
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Ambient Glow Lighting Effects ── */
        .glow-bg-hero {
          background: radial-gradient(circle at 50% 30%, rgba(123, 28, 46, 0.25) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%);
        }
        .glow-bg-features {
          background: radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.12) 0%, rgba(123, 28, 46, 0.05) 60%, transparent 100%);
        }
        .glow-bg-steps {
          background: radial-gradient(circle at 20% 50%, rgba(123, 28, 46, 0.15) 0%, transparent 70%);
        }

        /* ── Hero Layout ── */
        .hero {
          padding: 7rem 1.5rem 5.5rem;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.1);
          color: #D4AF37; /* Radiant Gold text */
          border: 1px solid rgba(212, 175, 55, 0.3);
          font-size: 0.8rem;
          padding: 0.5rem 1.4rem;
          border-radius: 30px;
          margin-bottom: 2rem;
          font-family: 'Arial', sans-serif;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 700; 
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
        }
        .hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem); 
          font-weight: 900; 
          line-height: 1.25;
          margin: 0 auto 1.5rem;
          max-width: 900px;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }
        .hero h1 span {
          color: #F59E0B; /* Vivid glowing Gold/Amber */
          text-shadow: 0 0 25px rgba(245, 158, 11, 0.3);
          display: inline-block;
          font-weight: 900;
        }
        .hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.3rem); 
          max-width: 720px;
          margin: 0 auto 3rem;
          color: #CBD5E1;
          font-weight: 400; 
          line-height: 1.8;
          font-style: italic;
        }
        .hero-buttons {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }
        .btn-primary {
          background: #7B1C2E; /* Elegant Crimson Wine */
          color: #FFFFFF;
          border: none;
          padding: 1rem 2.4rem;
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Arial', sans-serif;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 20px rgba(123, 28, 46, 0.4);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          background: #96253B;
          box-shadow: 0 6px 25px rgba(123, 28, 46, 0.6);
        }
        .btn-secondary {
          background: rgba(255, 255, 255, 0.03);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 1rem 2.4rem;
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Arial', sans-serif;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* ── Metric Box Counter ────────────────────────────── */
        .hero-stats {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          background: rgba(26, 17, 10, 0.6);
          padding: 1.75rem;
          border-radius: 16px;
          max-width: 800px;
          margin: 0 auto;
          border: 1px solid rgba(212, 175, 55, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
        }
        .hero-stat {
          text-align: center;
          min-width: 135px;
        }
        .hero-stat-num {
          display: block;
          font-size: 2rem; 
          font-weight: 900;
          color: #D4AF37; /* Glowing Metric accent */
          text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        }
        .hero-stat-label {
          font-size: 0.75rem;
          color: #94A3B8;
          text-transform: uppercase;
          font-family: 'Arial', sans-serif;
          letter-spacing: 1px;
          font-weight: 700;
          margin-top: 0.3rem;
        }

        /* ── Dynamic Scripture Highlight Box ───────────── */
        .verse-widget {
          background: linear-gradient(90deg, #16100B 0%, #251216 50%, #16100B 100%);
          padding: 3.5rem 1.5rem;
          text-align: center;
          border-top: 1px solid rgba(123, 28, 46, 0.3);
          border-bottom: 1px solid rgba(123, 28, 46, 0.3);
          box-shadow: inset 0 0 30px rgba(0,0,0,0.6);
        }
        .verse-widget-label {
          font-size: 0.8rem;
          color: #D4AF37;
          font-family: 'Arial', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
          font-weight: 700;
        }
        .verse-text {
          font-size: clamp(1.15rem, 2.5vw, 1.6rem); 
          font-style: italic;
          color: #FFF4D4;
          font-weight: 400;
          max-width: 850px;
          margin: 0 auto 1.2rem;
          line-height: 1.7;
          transition: opacity 0.3s ease;
        }
        .verse-ref {
          color: #F59E0B;
          font-weight: 700;
          font-size: 1.1rem;
          font-family: 'Arial', sans-serif;
        }
        .verse-dots {
          display: flex;
          gap: 0.6rem;
          justify-content: center;
          margin-top: 1.8rem;
        }
        .verse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }
        .verse-dot.active {
          background: #F59E0B;
          box-shadow: 0 0 10px #F59E0B;
          transform: scale(1.3);
        }

        /* ── Shared Containers ─────────────────────────── */
        .section { padding: 6rem 1.5rem; position: relative; }
        .section-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .section-label { font-size: 0.8rem; color: #F59E0B; font-family: 'Arial', sans-serif; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; margin-bottom: 0.5rem; }
        .section-title { font-size: clamp(1.8rem, 3.5vw, 2.5rem); color: #FFFFFF; font-weight: 900; margin-bottom: 1rem; letter-spacing: -0.5px; }
        .section-header { margin-bottom: 3.5rem; }
        .section-header.center { text-align: center; }

        /* ── Founder Track ─────────────────────────────────── */
        .story-section { padding: 5rem 1.5rem; }
        .story-card {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
          background: rgba(22, 15, 11, 0.7);
          padding: 3rem 2.5rem;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(123, 28, 46, 0.25);
          backdrop-filter: blur(10px);
        }
        .story-icon { font-size: 2.2rem; color: #F59E0B; margin-bottom: 1.2rem; display: block; text-shadow: 0 0 15px rgba(245, 158, 11, 0.4); }
        .story-quote { font-size: clamp(1.1rem, 2vw, 1.35rem); font-style: italic; line-height: 1.8; margin-bottom: 1.5rem; color: #E2E8F0; }
        .story-quote strong { color: #FFF4D4; font-weight: 700; border-bottom: 1px dashed rgba(214, 175, 55, 0.3); }
        .story-source { font-size: 0.95rem; color: #94A3B8; font-family: 'Arial', sans-serif; font-weight: 600; letter-spacing: 0.5px; }

        /* ── Feature Grid ───────────────────────────────────── */
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 1.5rem; }
        .feature-card {
          background: linear-gradient(145deg, rgba(30, 20, 15, 0.6) 0%, rgba(18, 12, 8, 0.8) 100%);
          border-radius: 16px;
          padding: 2.2rem 1.8rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          border: 1px solid rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(212, 175, 55, 0.25);
          box-shadow: 0 15px 30px rgba(212, 175, 55, 0.06), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .feature-icon { font-size: 2rem; margin-bottom: 1.2rem; display: inline-block; }
        .feature-title { font-size: 1.3rem; color: #FFFFFF; margin-bottom: 0.7rem; font-weight: 700; letter-spacing: -0.3px; }
        .feature-desc { font-size: 0.95rem; color: #94A3B8; line-height: 1.65; margin-bottom: 1.8rem; font-family: 'Arial', sans-serif; }
        .feature-link { display: inline-flex; align-items: center; gap: 0.5rem; color: #D4AF37; font-weight: 700; font-family: 'Arial', sans-serif; text-decoration: none; transition: color 0.2s ease; }
        .feature-card:hover .feature-link { color: #F59E0B; text-shadow: 0 0 10px rgba(245,158,11,0.2); }

        /* ── Step Sequence ─────────────────────────────────── */
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; }
        .step-card { text-align: center; padding: 2.5rem 1.8rem; background: rgba(255, 255, 255, 0.02); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05); position: relative; }
        .step-number { font-size: 2.8rem; font-weight: 900; color: rgba(123, 28, 46, 0.8); font-family: 'Arial', sans-serif; display: block; margin-bottom: 0.5rem; }
        .step-title { font-size: 1.2rem; color: #FFFFFF; margin-bottom: 0.6rem; font-weight: 700; }
        .step-desc { font-size: 0.95rem; color: #94A3B8; line-height: 1.65; font-family: 'Arial', sans-serif; }

        /* ── Testimonials ───────────────────────────────────── */
        .stories-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.5rem; }
        .story-testimonial { background: rgba(22, 15, 11, 0.4); border-radius: 16px; padding: 2.2rem 1.8rem; border: 1px solid rgba(255, 255, 255, 0.04); display: flex; flex-direction: column; justify-content: space-between; }
        .story-testimonial-text { font-style: italic; color: #CBD5E1; line-height: 1.7; margin-bottom: 1.5rem; font-size: 0.95rem; }
        .story-author { display: flex; align-items: center; gap: 0.8rem; border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 1.2rem; }
        .story-avatar { font-size: 1.8rem; }
        .story-author-name { font-weight: 700; color: #FFFFFF; font-size: 0.95rem; }
        .story-author-role { font-size: 0.8rem; color: #D4AF37; font-family: 'Arial', sans-serif; font-weight: 600; margin-top: 0.1rem; }

        /* ── Call To Action Bottom Section ──────────────────── */
        .cta-section { 
          background: linear-gradient(180deg, #120C08 0%, #4A0F1C 100%); 
          padding: 6.5rem 1.5rem; 
          text-align: center; 
          color: #FFFFFF; 
          border-top: 1px solid rgba(123, 28, 46, 0.3);
          position: relative;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; transform: translateX(-50%);
          width: 80%; height: 150px;
          background: radial-gradient(circle, rgba(123, 28, 46, 0.4) 0%, transparent 70%);
          filter: blur(20px);
          pointer-events: none;
        }
        .cta-section h2 { font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 900; margin-bottom: 1.2rem; color: #FFFFFF; letter-spacing: -0.5px; }
        .cta-section p { font-size: 1.15rem; color: #FFF4D4; max-width: 600px; margin: 0 auto 2.5rem; line-height: 1.7; font-style: italic; }
        .btn-white { 
          background: #FFFFFF; 
          color: #4A0F1C; 
          border: none; 
          padding: 1rem 2.8rem; 
          border-radius: 8px; 
          font-size: 1rem; 
          font-family: 'Arial', sans-serif; 
          font-weight: 700; 
          cursor: pointer; 
          text-decoration: none; 
          display: inline-block; 
          transition: all 0.2s ease; 
          box-shadow: 0 0 25px rgba(255,255,255,0.2);
        }
        .btn-white:hover { 
          background: #FFF4D4; 
          transform: translateY(-2px); 
          box-shadow: 0 0 35px rgba(255,255,255,0.4);
        }

        @media (max-width: 768px) {
          .hero { padding: 4.5rem 1rem 3.5rem; }
          .section { padding: 4.2rem 1rem; }
        }
      `}</style>

      {/* ── Hero Section ────────────────────────────────────── */}
      <div className="glow-bg-hero">
        <section className="hero">
          <div className="hero-badge">✦ Spirit-Led · Scripture-Rooted · Premium Guidance</div>
          <h1>Find the <span>Clarity & Peace</span> You've Been Searching for in God's Word</h1>
          <p className="hero-subtitle">
            "I know what it's like to read and not understand — and I know the joy
            when it finally clicks. Scripture Guild was built so you never have to search alone."
          </p>
          <div className="hero-buttons">
            <Link to="/bible-study" className="btn-primary">Begin Your Study →</Link>
            <Link to="/ask" className="btn-secondary">Ask a Bible Question</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">66</span>
              <span className="hero-stat-label">Books Covered</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">100+</span>
              <span className="hero-stat-label">Study Lessons</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">Daily</span>
              <span className="hero-stat-label">Devotionals</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">∞</span>
              <span className="hero-stat-label">Q&A Answers</span>
            </div>
          </div>
        </section>
      </div>

      {/* ── Dynamic Scripture Highlighting ───────────────────── */}
      <div className="verse-widget">
        <div className="verse-widget-label">✦ Today's Highlighted Scripture ✦</div>
        <p className={`verse-text ${verseVisible ? '' : 'hidden'}`}>"{currentVerse.text}"</p>
        <p className={`verse-ref ${verseVisible ? '' : 'hidden'}`}>— {currentVerse.ref}</p>
        <div className="verse-dots">
          {DAILY_VERSES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Select verse ${i + 1}`}
              className={`verse-dot ${i === verseIndex ? 'active' : ''}`}
              onClick={() => { 
                setVerseVisible(false); 
                setTimeout(() => { setVerseIndex(i); setVerseVisible(true); }, 300) 
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Founder Track ────────────────────────────────────── */}
      <section className="story-section">
        <div className="story-card">
          <span className="story-icon">✝</span>
          <blockquote className="story-quote">
            There were moments when I was reading and simply <strong>not understanding</strong> — wishing someone could explain it clearly. And then there were the moments when insight finally came: a deep <strong>peace of mind</strong>, courage in the middle of difficulty, and strength I hadn't felt before — all from understanding what God's Word was truly saying.
            <br /><br />
            I thought: <strong>there are many people out there looking for that same insight.</strong> That's why Scripture Guild exists — so others can be encouraged by God's Word, just like it happened for me.
          </blockquote>
          <p className="story-source">— The heart behind Scripture Guild</p>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <div className="glow-bg-features">
        <section className="section">
          <div className="section-inner">
            <div className="section-header center">
              <div className="section-label">Everything You Need</div>
              <h2 className="section-title">Your Complete Faith Growth Platform</h2>
            </div>
            <div className="features-grid">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <div>
                    <span className="feature-icon">{feature.icon}</span>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                  <Link to={feature.link} className="feature-link">{feature.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Steps ───────────────────────────────────────────── */}
      <div className="glow-bg-steps">
        <section className="section">
          <div className="section-inner">
            <div className="section-header center">
              <div className="section-label">Simple to Start</div>
              <h2 className="section-title">How Scripture Guild Works</h2>
            </div>
            <div className="steps-grid">
              {HOW_IT_WORKS.map((step) => (
                <div key={step.step} className="step-card">
                  <span className="step-number">{step.step}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Stories of Encouragement</div>
            <h2 className="section-title">God's Word Is Changing Lives</h2>
          </div>
          <div className="stories-grid">
            {STORIES.map((s) => (
              <div key={s.name} className="story-testimonial">
                <p className="story-testimonial-text">{s.text}</p>
                <div className="story-author">
                  <div className="story-avatar">{s.avatar}</div>
                  <div>
                    <div className="story-author-name">{s.name}</div>
                    <div className="story-author-role">{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Action Section ───────────────────────────────────── */}
      <section className="cta-section">
        <h2>Your "Now I Understand" Moment Is Waiting</h2>
        <p>The peace, the courage, and the joy that come from truly grasping God's Word — they're available to you right now.</p>
        <Link to="/bible-study" className="btn-white">Start Your First Lesson →</Link>
      </section>
    </div>
  )
}