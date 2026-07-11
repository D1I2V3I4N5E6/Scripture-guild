import React, { useState, useEffect } from 'react';

// ── DEVOTIONAL DATABASE ─────────────────────────────────────────────
const ALL_DEVOTIONALS = [
  {
    id: "rccg_july_10",
    title: "RCCG Open Heavens Daily Devotional",
    shortName: "RCCG Open Heavens",
    date: "Friday, July 10, 2026",
    calendarDate: "2026-07-10", 
    topic: "THE SHIELD OF FAITH",
    themeColor: "#F59E0B", 
    memorise: {
      verse: "Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.",
      reference: "Ephesians 6:16"
    },
    bibleReading: {
      reference: "Hebrews 11:1-6",
      verses: [
        "1 Now faith is the substance of things hoped for, the evidence of things not seen.",
        "6 But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."
      ]
    },
    message: [
      "Faith is not merely an emotional validation; it is a defensive dynamic ecosystem designed to protect your vision, assignments, and mind from negative atmospheric patterns.",
      "When challenges rise up to mock your progression, holding firm onto direct scriptural instructions builds a fortress that cannot be shaken by outward sight."
    ],
    prayerPoints: [
      "Father, reinforce my spiritual shield and raise my level of faith to quench every deceptive dart.",
      "Lord, help me to remain anchored upon your spoken Word regardless of seasonal fluctuations."
    ]
  },
  {
    id: "rccg_july_11",
    title: "RCCG Open Heavens Daily Devotional",
    shortName: "RCCG Open Heavens",
    date: "Saturday, July 11, 2026",
    calendarDate: "2026-07-11", 
    topic: "THE POWER OF A QUIET SPIRIT",
    themeColor: "#F59E0B", 
    memorise: {
      verse: "For thus saith the Lord God, the Holy One of Israel; In returning and rest shall ye be saved; in quietness and in confidence shall be your strength...",
      reference: "Isaiah 30:15"
    },
    bibleReading: {
      reference: "1 Thessalonians 4:11-12",
      verses: [
        "11 And that ye study to be quiet, and to do your own business, and to work with your own hands, as we commanded you;",
        "12 That ye may walk honestly toward them that are without, and that ye may have lack of nothing."
      ]
    },
    message: [
      "The noise of the world often tries to crowd out the clear guidelines of the Spirit. True kingdom authority is built in places of total internal submission and quiet composure.",
      "By guarding your speech and tuning your ear to divine signals, your everyday works become structured with profound precision and productivity."
    ],
    prayerPoints: [
      "Father, calm every internal wind of worry and grant me a quiet, confident posture.",
      "Holy Spirit, separate my heart from the distracting murmurs of this generation."
    ]
  },
  {
    id: "rccg_july_8",
    title: "RCCG Open Heavens Daily Devotional",
    shortName: "RCCG Open Heavens",
    date: "Wednesday, July 8, 2026",
    calendarDate: "2026-07-08", 
    topic: "THE POWER OF FAITH",
    themeColor: "#F59E0B",
    memorise: {
      verse: "Now faith is the substance of things hoped for, the evidence of things not seen.",
      reference: "Hebrews 11:1"
    },
    bibleReading: {
      reference: "Mark 11:22-24",
      verses: [
        "22 And Jesus answering saith unto them, Have faith in God.",
        "23 For verily I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart..."
      ]
    },
    message: [
      "Faith is the anchor of the believer's life. When everything around you seems shaky, standing firm on God's promises changes your perspective completely.",
      "To walk in power, your thoughts, words, and actions must align seamlessly with scripture."
    ],
    prayerPoints: [
      "Father, increase my faith and remove every trace of doubt from my spirit.",
      "Lord, help me to hold on to your promises even in difficult seasons."
    ]
  }
];

export default function Devotionals() {
  const [activeDevoIndex, setActiveDevoIndex] = useState(0);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayString = `${year}-${month}-${day}`;

    const matchedIndex = ALL_DEVOTIONALS.findIndex(
      (devo) => devo.calendarDate === todayString
    );

    if (matchedIndex !== -1) {
      setActiveDevoIndex(matchedIndex);
    } else {
      setActiveDevoIndex(0); 
    }
  }, []);

  const currentDevotional = ALL_DEVOTIONALS[activeDevoIndex] || ALL_DEVOTIONALS[0];

  const systemTodayLabel = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="devo-root">
      <style>{`
        /* ── Exact Matching Color Framework from ScriptureQA ─────────── */
        .devo-root {
          font-family: 'Lora', 'Georgia', 'Times New Roman', serif;
          background-color: #111625; /* Same exact midnight slate background */
          background: radial-gradient(circle at 50% 15%, rgba(56, 189, 248, 0.1) 0%, transparent 60%);
          color: #FFFFFF; 
          min-height: 100vh;
          padding: 5rem 1.5rem 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .devo-container { 
          max-width: 800px; 
          width: 100%; 
          display: flex; 
          flex-direction: column; 
          z-index: 1; 
        }

        /* Top Nav Layout matched with ScriptureQA interface blocks */
        .devo-nav-banner {
          width: 100%; 
          background-color: #1E2640; /* High contrast slate layer */
          padding: 1.2rem 1.8rem; 
          border-radius: 16px; 
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4); 
          border: 2px solid #F59E0B; 
          display: flex; 
          flex-wrap: wrap; 
          justify-content: space-between; 
          align-items: center; 
          gap: 15px;
          margin-bottom: 2rem;
          box-sizing: border-box;
        }

        .devo-nav-date-label {
          margin: 0 0 4px 0; 
          font-size: 0.8rem; 
          font-weight: 800; 
          color: #F59E0B; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          font-family: 'Arial', sans-serif;
        }

        .devo-nav-date-display {
          font-size: 1.2rem; 
          font-weight: 800; 
          color: #FFFFFF;
        }

        .devo-select-box {
          padding: 10px 14px; 
          border-radius: 8px; 
          border: 2px solid #F59E0B; 
          backgroundColor: #111625; 
          font-family: 'Arial', sans-serif; 
          font-size: 0.9rem;
          font-weight: 800; 
          color: #FFFFFF; 
          cursor: pointer; 
          outline: none;
          transition: all 0.2s ease;
        }
        .devo-select-box:focus {
          border-color: #38BDF8;
        }

        /* Current Selected Devotional Main Display Card */
        .devo-main-card {
          background: #1E2640; /* Match Chat-Box Container color */
          color: #FFFFFF; 
          border-radius: 20px; 
          padding: 3.5rem 2.5rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.02);
          border: 2px solid #F59E0B;
          width: 100%;
          box-sizing: border-box;
        }

        /* Text Headers Architecture */
        .devo-header {
          text-align: center;
          margin-bottom: 2.5rem;
          border-bottom: 2px solid #F59E0B;
          padding-bottom: 1.8rem;
        }

        .devo-header span {
          color: #F59E0B; 
          font-weight: 800; 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          font-size: 0.85rem; 
          font-family: 'Arial', sans-serif;
        }

        .devo-header h1 {
          font-size: clamp(2rem, 4.5vw, 2.8rem);
          font-weight: 800; 
          background: linear-gradient(135deg, #FFFFFF 0%, #F59E0B 70%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 12px 0 6px 0;
          letter-spacing: -0.5px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
        }

        .devo-header p {
          color: #F59E0B; 
          font-weight: 800; 
          letter-spacing: 1.2px; 
          font-family: 'Arial', sans-serif; 
          font-size: 1rem; 
          text-transform: uppercase;
          margin: 0.5rem 0 0 0;
        }

        /* Highlight Inner Boxes (Memory Verse & Bible Reading blocks) */
        .devo-highlight-box {
          background: #111625; /* Embedded inner dark layer */
          color: #FFFFFF !important;
          font-weight: 800 !important;
          padding: 1.8rem;
          border-radius: 14px;
          border-left: 5px solid #F59E0B;
          box-shadow: 0 4px 25px rgba(0,0,0,0.25);
          border-top: 1px solid rgba(245,158,11,0.2);
          border-right: 1px solid rgba(245,158,11,0.2);
          border-bottom: 1px solid rgba(245,158,11,0.2);
          margin-bottom: 2.5rem;
        }

        .devo-section-title {
          margin: 0 0 10px 0; 
          color: #F59E0B; 
          text-transform: uppercase; 
          font-size: 0.85rem; 
          letter-spacing: 1px; 
          font-family: 'Arial', sans-serif; 
          font-weight: 800;
        }

        /* Distinct Scripture Cyan Typography from ScriptureQA assistant-bubbles */
        .devo-scripture-text {
          font-style: italic;
          font-size: 1.4rem;
          color: #38BDF8 !important; /* Premium Cyan Scripture color */
          font-weight: 800;
          line-height: 1.75;
          margin: 0 0 10px 0;
        }

        /* Main Message Paragraph Architecture */
        .devo-message-body {
          margin-bottom: 2.5rem;
          font-size: 1.3rem;
          line-height: 1.85;
          color: #FFFFFF;
        }

        .devo-message-body p {
          margin-bottom: 1.5rem;
          text-align: justify;
          font-weight: 800;
        }

        /* Prayer Section Items */
        .devo-prayer-list {
          margin: 0;
          padding-left: 1.2rem;
          line-height: 1.85;
          color: #FFFFFF;
        }

        .devo-prayer-list li {
          margin-bottom: 12px;
          font-size: 1.25rem;
          font-weight: 800;
        }
      `}</style>

      <div className="devo-container">
        
        {/* ── MATCHED LIVE NAVIGATION BANNER ── */}
        <div className="devo-nav-banner">
          <div>
            <p className="devo-nav-date-label">☀️ Today's Date</p>
            <span className="devo-nav-date-display">{systemTodayLabel}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label className="devo-nav-date-label">📚 View Another Date:</label>
            <select 
              value={activeDevoIndex}
              onChange={(e) => setActiveDevoIndex(Number(e.target.value))}
              className="devo-select-box"
              style={{ backgroundColor: '#111625' }}
            >
              {ALL_DEVOTIONALS.map((devotional, index) => (
                <option key={devotional.id} value={index} style={{ backgroundColor: '#111625', color: '#FFFFFF' }}>
                  {devotional.date}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ── MATCHED CARD DISPLAY AREA ── */}
        <div className="devo-main-card">
          
          <header className="devo-header">
            <span>{currentDevotional.title}</span>
            <h1>{currentDevotional.topic}</h1>
            <p>{currentDevotional.date}</p>
          </header>

          {/* Memory Verse Box */}
          <section className="devo-highlight-box">
            <h3 className="devo-section-title">🔑 Memory Verse</h3>
            <p className="devo-scripture-text">
              "{currentDevotional.memorise.verse}"
            </p>
            <strong style={{ color: '#F59E0B', fontSize: '1.05rem', fontWeight: '800', fontFamily: "sans-serif" }}>
              — {currentDevotional.memorise.reference}
            </strong>
          </section>

          {/* Bible Reading Box */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h3 className="devo-section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              📖 Bible Reading: <span style={{ color: '#FFFFFF', textTransform: 'none', letterSpacing: '0' }}>{currentDevotional.bibleReading.reference}</span>
            </h3>
            <div className="devo-highlight-box" style={{ margin: 0 }}>
              {currentDevotional.bibleReading.verses.map((verse, index) => (
                <p key={index} className="devo-scripture-text" style={{ fontStyle: 'normal', fontSize: '1.3rem' }}>
                  {verse}
                </p>
              ))}
            </div>
          </section>

          {/* Message Text Block */}
          <section className="devo-message-body">
            <h3 className="devo-section-title" style={{ marginBottom: '15px' }}>📜 Message</h3>
            {currentDevotional.message.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Prayer Points Box */}
          <section className="devo-highlight-box" style={{ marginBottom: 0 }}>
            <h3 className="devo-section-title" style={{ marginBottom: '15px' }}>🙏 Prayer Points</h3>
            <ul className="devo-prayer-list">
              {currentDevotional.prayerPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}