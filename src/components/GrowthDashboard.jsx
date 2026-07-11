import React, { useState } from 'react';

export default function GrowthDashboard() {
  // Functional State to handle real-time metric increments
  const [stats, setStats] = useState({
    name: "Servant of God",
    level: 4,
    currentXp: 1450,
    nextLevelXp: 2000,
    verseStreak: 5,
    prayerHours: 12,
    memorialStones: 8,
  });

  const [milestones, setMilestones] = useState([
    { id: 1, type: "🔥", text: "Maintained a 5-Day Scripture Study Streak", date: "Just now" },
    { id: 2, type: "🧎", text: "Completed an immersive 1-Hour Watch in the Prayer Room", date: "Yesterday" },
    { id: 3, type: "🧱", text: "Dropped a Memorial Stone on the Altar of Remembrance", date: "2 days ago" },
    { id: 4, type: "🗡️", text: "Successfully memorized Romans 8:28 in Verse Builder", date: "3 days ago" },
  ]);

  // Helper functions to drive dynamic updates and XP collection
  const triggerStreak = () => {
    setStats(prev => {
      const newStreak = prev.verseStreak + 1;
      const newXp = prev.currentXp + 50;
      return { ...prev, verseStreak: newStreak, currentXp: newXp >= prev.nextLevelXp ? newXp - prev.nextLevelXp : newXp, level: newXp >= prev.nextLevelXp ? prev.level + 1 : prev.level };
    });
    setMilestones(prev => [
      { id: Date.now(), type: "🔥", text: "Logged daily Word Consistency study session!", date: "Just now" },
      ...prev
    ]);
  };

  const addPrayerHour = () => {
    setStats(prev => {
      const newHours = prev.prayerHours + 1;
      const newXp = prev.currentXp + 100;
      return { ...prev, prayerHours: newHours, currentXp: newXp >= prev.nextLevelXp ? newXp - prev.nextLevelXp : newXp, level: newXp >= prev.nextLevelXp ? prev.level + 1 : prev.level };
    });
    setMilestones(prev => [
      { id: Date.now(), type: "🧎", text: "Completed a 1-Hour deep focus Intercessory Watch", date: "Just now" },
      ...prev
    ]);
  };

  const deployStone = () => {
    setStats(prev => {
      const newStones = prev.memorialStones + 1;
      const newXp = prev.currentXp + 150;
      return { ...prev, memorialStones: newStones, currentXp: newXp >= prev.nextLevelXp ? newXp - prev.nextLevelXp : newXp, level: newXp >= prev.nextLevelXp ? prev.level + 1 : prev.level };
    });
    setMilestones(prev => [
      { id: Date.now(), type: "🧱", text: "Erected a new Memorial Stone on the Altar of Remembrance", date: "Just now" },
      ...prev
    ]);
  };

  return (
    <div className="db-root">
      <style>{`
        .db-root {
          font-family: 'Lora', serif;
          background-color: #EFEFE9; /* Matched to arcade page body canvas */
          min-height: 100vh;
          padding: 2rem 1.5rem;
          color: #111625;
        }
        .db-container { max-width: 950px; margin: 0 auto; }
        
        /* Unified Arcade Profile Banner Styling */
        .db-profile-header {
          background: #1E2640; /* Shared main arcade slate blue */
          border: 2px solid #F59E0B; /* Shared golden amber token boundary */
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          color: white;
        }
        .welcome-text h1 { margin: 0 0 0.4rem 0; font-size: 2.2rem; color: #F59E0B; font-weight: 900; }
        .welcome-text p { margin: 0; color: #94A3B8; font-family: sans-serif; font-size: 1.05rem; }
        
        .level-badge {
          background: #111625;
          border: 2px solid #F59E0B;
          color: #FFFFFF;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
        .level-num { font-size: 2.2rem; font-weight: 900; display: block; color: #F59E0B; line-height: 1; margin-bottom: 4px; }
        .level-label { font-size: 0.75rem; font-weight: bold; letter-spacing: 1px; color: #94A3B8; font-family: sans-serif; }

        /* Unified Core Matrix XP Bars */
        .xp-container { width: 100%; margin-top: 1.2rem; }
        .xp-bar-bg { width: 100%; height: 12px; background: #111625; border-radius: 6px; overflow: hidden; margin-top: 0.5rem; }
        .xp-bar-fill { height: 100%; background: linear-gradient(90deg, #F59E0B, #D98206); transition: width 0.4s ease; }

        /* Stat Blocks Grid Selector Matrices */
        .db-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .stat-card {
          background: #1E2640;
          color: white;
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 2px solid rgba(245,158,11,0.15);
          transition: transform 0.2s, border-color 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .stat-card:hover { transform: translateY(-4px); border-color: #F59E0B; box-shadow: 0 12px 24px rgba(245,158,11,0.12); }
        .stat-icon { font-size: 2.5rem; margin-bottom: 0.5rem; display: block; }
        .stat-val { font-size: 2.2rem; font-weight: bold; color: #F59E0B; margin-bottom: 0.2rem; }
        .stat-label { font-size: 0.85rem; color: #94A3B8; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; font-family: sans-serif; margin-bottom: 1rem; }

        /* Two-Column Matrix Split Screens */
        .db-split-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 768px) { .db-split-layout { grid-template-columns: 1fr; } }

        .panel-box {
          background: #1E2640;
          color: white;
          border-radius: 20px;
          padding: 2rem;
          border: 2px solid #F59E0B;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .panel-box h3 { margin-top: 0; color: #F59E0B; font-size: 1.4rem; margin-bottom: 1.2rem; font-weight: 900; }

        /* Integrated Activity Timelines */
        .milestone-timeline { display: flex; flex-direction: column; gap: 1rem; max-height: 320px; overflow-y: auto; padding-right: 5px; }
        .timeline-item {
          display: flex; gap: 1rem; align-items: center;
          background: #111625; padding: 1rem; border-radius: 12px;
          border: 1px solid rgba(245,158,11,0.1);
        }
        .item-emoji { font-size: 1.4rem; background: #1E2640; padding: 0.4rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); }
        .item-text { font-size: 1rem; line-height: 1.4; color: #EFEFE9; font-weight: bold; }
        .item-date { font-size: 0.8rem; color: #94A3B8; display: block; margin-top: 0.2rem; font-family: sans-serif; }

        /* Interactive Trigger Action Core Buttons */
        .dashboard-action-btn {
          background: #F59E0B;
          color: #111625;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          font-weight: 800;
          cursor: pointer;
          font-size: 0.85rem;
          width: 100%;
          transition: 0.1s;
        }
        .dashboard-action-btn:hover { background: #D98206; }

        /* Anchored Scriptural Focus Cards */
        .verse-banner-box {
          background: linear-gradient(rgba(17, 22, 37, 0.85), rgba(17, 22, 37, 0.95)), url('https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?auto=format&fit=crop&w=400&q=80');
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          padding: 2.2rem;
          text-align: center;
          border: 2px solid #F59E0B;
          display: flex; flex-direction: column; justify-content: center;
          color: white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .banner-quote { font-style: italic; font-size: 1.3rem; line-height: 1.6; color: #EFEFE9; margin-bottom: 1.2rem; font-weight: 600; }
        .banner-author { font-weight: bold; color: #F59E0B; text-transform: uppercase; letter-spacing: 1px; font-size: 0.95rem; font-family: sans-serif; }
      `}</style>

      <div className="db-container">
        {/* Profile Banner */}
        <div className="db-profile-header">
          <div className="welcome-text">
            <h1>Welcome Back, {stats.name}</h1>
            <p>"Grow in the grace and knowledge of our Lord and Savior Jesus Christ." — 2 Peter 3:18</p>
            <div className="xp-container">
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                SPIRITUAL EXPANSION CORE CORE: {stats.currentXp} / {stats.nextLevelXp} XP
              </span>
              <div className="xp-bar-bg">
                <div className="xp-bar-fill" style={{ width: `${(stats.currentXp / stats.nextLevelXp) * 100}%` }}></div>
              </div>
            </div>
          </div>
          <div className="level-badge">
            <span className="level-num">{stats.level}</span>
            <span className="level-label">FOUNDATION LVL</span>
          </div>
        </div>

        {/* Core Metrics Summary Grid with Live Action Triggers */}
        <div className="db-grid">
          <div className="stat-card">
            <div style={{ textAlign: 'center', width: '100%' }}>
              <span className="stat-icon">🔥</span>
              <div className="stat-val">{stats.verseStreak} Days</div>
              <div className="stat-label">Word Consistency</div>
            </div>
            <button className="dashboard-action-btn" onClick={triggerStreak}>+ Study Word</button>
          </div>
          
          <div className="stat-card">
            <div style={{ textAlign: 'center', width: '100%' }}>
              <span className="stat-icon">🧎</span>
              <div className="stat-val">{stats.prayerHours} hrs</div>
              <div className="stat-label">Altar Watch Hours</div>
            </div>
            <button className="dashboard-action-btn" onClick={addPrayerHour}>+ Log 1hr Prayer</button>
          </div>

          <div className="stat-card">
            <div style={{ textAlign: 'center', width: '100%' }}>
              <span className="stat-icon">🧱</span>
              <div className="stat-val">{stats.memorialStones} Stones</div>
              <div className="stat-label">Memorials Built</div>
            </div>
            <button className="dashboard-action-btn" onClick={deployStone}>+ Build Memorial</button>
          </div>
        </div>

        {/* Lower Split Sections Layout */}
        <div className="db-split-layout">
          {/* Dynamic Spiritual Milestones Feed Log */}
          <div className="panel-box">
            <h3>🛡️ Recent Sacred Milestones</h3>
            <div className="milestone-timeline">
              {milestones.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="item-emoji">{item.type}</div>
                  <div>
                    <span className="item-text">{item.text}</span>
                    <span className="item-date">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Anchor Focus Scripture Verse */}
          <div className="verse-banner-box">
            <p className="banner-quote">
              "Thy word is a lamp unto my feet, and a light unto my path."
            </p>
            <span className="banner-author">Psalm 119:105</span>
          </div>
        </div>
      </div>
    </div>
  );
}