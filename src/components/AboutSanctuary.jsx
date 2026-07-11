import React, { useState } from 'react';

export default function AboutSanctuary() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const pillars = [
    {
      icon: "🗡️",
      title: "The Word (Sword of the Spirit)",
      desc: "Scripture isn't just to be read; it's to be embedded. Our interactive verse engine helps believers actively build and memorize foundational truths to form unshakeable mental armor."
    },
    {
      icon: "🧎",
      title: "The Watch (Keep Watch Prayer Room)",
      desc: "Designed to help you sustain focused, distraction-free intimacy with God. Moving from adoration to scriptural alignment and deep intercession, supported by an immersive, calming background pad."
    },
    {
      icon: "🧱",
      title: "The Remembrance (Memorial Stones)",
      desc: "Just as Israel piled stones after crossing Jordan, our platform allows you to record breakthrough moments, answered prayers, and divine provisions so you never forget His faithfulness."
    }
  ];

  return (
    <div className="about-root">
      <style>{`
        .about-root {
          font-family: 'Lora', serif;
          background-color: #EFEFE9; /* Unified arcade canvas backdrop */
          min-height: 100vh;
          padding: 4rem 1.5rem;
          line-height: 1.8;
          color: #111625;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .about-container { max-width: 900px; margin: 0 auto; }

        /* Iconic Hero Section Header */
        .about-hero {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          padding-bottom: 2rem;
          border-bottom: 2px dashed rgba(30, 38, 64, 0.2);
        }
        .about-hero h1 {
          font-size: 3rem;
          font-weight: 900;
          color: #1E2640;
          margin: 0 0 1rem 0;
          letter-spacing: 1px;
        }
        .about-hero p {
          font-size: 1.25rem;
          color: #64748B;
          font-style: italic;
          max-width: 700px;
          margin: 0 auto;
          font-family: sans-serif;
        }

        /* Unified Arcade Story Terminal Box */
        .story-box {
          background: #1E2640;
          color: white;
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 3.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          border: 2px solid #F59E0B;
        }
        .story-box h2 {
          color: #F59E0B;
          font-size: 1.8rem;
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-weight: 900;
        }
        
        /* High-Visibility Story Typography */
        .story-text p {
          font-size: 1.15rem;
          color: #EFEFE9 !important;
          font-weight: 500 !important;
          letter-spacing: 0.4px;
          opacity: 1 !important;
        }

        /* Section Titles Matrix */
        .section-title {
          text-align: center;
          color: #1E2640;
          font-size: 1.8rem;
          font-weight: 900;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Dynamic System Pillar Cards Grid */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .pillar-card {
          background: #1E2640;
          color: white;
          border: 2px solid rgba(245, 158, 11, 0.15);
          border-radius: 20px;
          padding: 2.2rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          display: flex;
          flex-direction: column;
        }
        .pillar-card.active {
          transform: translateY(-8px);
          border-color: #F59E0B;
          box-shadow: 0 12px 24px rgba(245, 158, 11, 0.15);
        }
        .pillar-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .pillar-card h3 {
          color: #F59E0B;
          font-size: 1.35rem;
          margin: 0 0 0.8rem 0;
          font-weight: 800;
        }
        .pillar-card p {
          color: #94A3B8;
          font-size: 0.98rem;
          margin: 0;
          line-height: 1.6;
          font-family: sans-serif;
        }

        /* Scripture Shield Footer Card */
        .scripture-footer {
          background: linear-gradient(rgba(17, 22, 37, 0.9), rgba(17, 22, 37, 0.95)), url('https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?auto=format&fit=crop&w=800&q=80');
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          border: 2px solid #F59E0B;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          color: white;
        }
        .footer-quote {
          font-style: italic;
          font-size: 1.3rem;
          line-height: 1.7;
          color: #EFEFE9;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }
        .footer-ref {
          font-weight: bold;
          color: #F59E0B;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 0.95rem;
          font-family: sans-serif;
        }
      `}</style>

      <div className="about-container">
        {/* Elegant Hero Heading */}
        <div className="about-hero">
          <h1>Our Sacred Mission</h1>
          <p>"To equip the saints for the work of ministry, for building up the body of Christ."</p>
        </div>

        {/* The Core Story Box */}
        <div className="story-box">
          <h2>The Vision Behind the App</h2>
          <div className="story-text">
            <p style={{ marginTop: 0 }}>
              In a digital world engineered for absolute distraction, finding an intentional space for quiet scriptural depth and extended prayer can feel like an uphill battle. This ecosystem wasn't built to be another passive scrolling application; it was created as an interactive, digital sanctuary.
            </p>
            <p style={{ marginBottom: 0 }}>
              By merging immersive design with deliberate practice, we seek to help believers transition from simple consumption to active spiritual devotion. Whether you are actively piecing scripture back together, spending dedicated hours keeping watch, or chronicling historical landmarks of God's goodness, every mechanic is designed to root your soul firmly in truth.
            </p>
          </div>
        </div>

        {/* Core Pillars Interactive Cards Grid */}
        <div className="section-title">The Framework of Faith</div>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`pillar-card ${hoveredCard === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span className="pillar-icon">{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Scripture Shield Footer */}
        <div className="scripture-footer">
          <p className="footer-quote">
            "But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be the glory both now and to the day of eternity. Amen."
          </p>
          <span className="footer-ref">2 Peter 3:18</span>
        </div>
      </div>
    </div>
  );
}