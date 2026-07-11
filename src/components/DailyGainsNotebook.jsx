import React, { useState } from 'react';

export default function DailyGainsNotebook() {
  const [gains, setGains] = useState([
    {
      id: 1,
      title: "Clarity on Romans 8",
      category: "💡 Revelation",
      content: "While playing Scripture Dash today, the phrase 'God works for the good' hit differently. Realized that 'all things' truly means even the messy delays.",
      date: "2026-07-10"
    },
    {
      id: 2,
      title: "Sustained a 1-Hour Watch",
      category: "🧎 Prayer Win",
      content: "Managed to lock out distractions completely for a full hour. Felt an incredible peace shift into the room during intercession.",
      date: "2026-07-09"
    }
  ]);

  const [newGain, setNewGain] = useState({ title: '', category: '💡 Revelation', content: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGain(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveGain = (e) => {
    e.preventDefault();
    if (!newGain.title.trim() || !newGain.content.trim()) return;

    const entry = {
      id: Date.now(),
      title: newGain.title,
      category: newGain.category,
      content: newGain.content,
      date: new Date().toISOString().split('T')[0]
    };

    setGains([entry, ...gains]);
    setNewGain({ title: '', category: '💡 Revelation', content: '' });
  };

  const filteredGains = gains.filter(gain => 
    gain.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gain.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gain.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="notebook-root">
      <style>{`
        .notebook-root {
          font-family: 'Lora', serif;
          background-color: #EFEFE9; /* Matched to app canvas backdrop */
          min-height: 100vh;
          padding: 2rem 1.5rem;
          color: #111625;
        }
        .notebook-container { max-width: 950px; margin: 0 auto; }
        
        /* Layout Split: Input Left, Saved Gains Right */
        .notebook-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) { .notebook-grid { grid-template-columns: 1fr; } }

        /* Form Terminal Box */
        .gain-form-box {
          background: #1E2640;
          color: white;
          border-radius: 20px;
          padding: 2rem;
          border: 2px solid #F59E0B;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          height: fit-content;
        }
        .gain-form-box h2 { color: #F59E0B; margin-top: 0; font-size: 1.5rem; font-weight: 900; }
        
        .input-group { margin-bottom: 1.2rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .input-group label { font-size: 0.85rem; color: #94A3B8; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; font-family: sans-serif; }
        
        .input-field, .select-field, .textarea-field {
          background: #111625;
          border: 1px solid rgba(245,158,11,0.3);
          border-radius: 8px;
          padding: 0.8rem;
          color: white;
          font-family: sans-serif;
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .input-field:focus, .select-field:focus, .textarea-field:focus {
          outline: none;
          border-color: #F59E0B;
        }
        .textarea-field { resize: none; height: 120px; font-family: 'Lora', serif; }

        .submit-btn {
          background: #F59E0B;
          color: #111625;
          border: none;
          padding: 0.9rem;
          border-radius: 8px;
          font-weight: 800;
          cursor: pointer;
          font-size: 1rem;
          width: 100%;
          transition: background 0.2s;
        }
        .submit-btn:hover { background: #D98206; }

        /* Search & Feed Container */
        .feed-container { display: flex; flex-direction: column; gap: 1.5rem; }
        .search-bar {
          background: #1E2640;
          border: 2px solid rgba(245,158,11,0.15);
          border-radius: 12px;
          padding: 0.8rem 1.2rem;
          color: white;
          width: 100%;
          box-sizing: border-box;
          font-size: 1rem;
        }
        .search-bar:focus { outline: none; border-color: #F59E0B; }

        /* Saved Gain Cards */
        .gain-card {
          background: #1E2640;
          color: white;
          border-radius: 20px;
          padding: 1.8rem;
          border: 2px solid rgba(245, 158, 11, 0.15);
          box-shadow: 0 6px 15px rgba(0,0,0,0.05);
          transition: border-color 0.2s;
        }
        .gain-card:hover { border-color: #F59E0B; }
        .gain-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; }
        .gain-title { font-size: 1.35rem; color: #F59E0B; font-weight: 800; margin: 0; }
        .gain-category { font-size: 0.75rem; background: #111625; color: #94A3B8; padding: 0.3rem 0.6rem; border-radius: 6px; font-weight: bold; font-family: sans-serif; border: 1px solid rgba(245,158,11,0.1); }
        .gain-content { color: #EFEFE9; font-size: 1.05rem; line-height: 1.6; margin: 0 0 1rem 0; }
        .gain-date { font-size: 0.8rem; color: #64748B; font-family: sans-serif; display: block; text-align: right; }
        
        .empty-state { text-align: center; color: #64748B; font-style: italic; padding: 3rem; background: rgba(30,38,64,0.03); border-radius: 20px; border: 2px dashed rgba(30,38,64,0.1); }
      `}</style>

      <div className="notebook-container">
        {/* Module Header */}
        <div style={{ borderBottom: '2px dashed rgba(30, 38, 64, 0.2)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1E2640', margin: '0 0 0.5rem 0' }}>✍️ Spiritual Gains Log</h1>
          <p style={{ margin: 0, color: '#64748B', fontFamily: 'sans-serif', fontSize: '1.1rem' }}> Document daily metrics of grace, alignment breakthroughs, and structural wins. </p>
        </div>

        <div className="notebook-grid">
          {/* LEFT COLUMN: Entry Form */}
          <form className="gain-form-box" onSubmit={handleSaveGain}>
            <h2>Log Today's Gain</h2>
            
            <div className="input-group">
              <label>Gain Category</label>
              <select className="select-field" name="category" value={newGain.category} onChange={handleInputChange}>
                <option value="💡 Revelation">💡 Revelation / Insight</option>
                <option value="🧎 Prayer Win">🧎 Prayer Consistency</option>
                <option value="🧱 Altar Milestone">🧱 Answered Prayer</option>
                <option value="🔥 Faith Victory">🔥 Overcoming Doubt/Fear</option>
              </select>
            </div>

            <div className="input-group">
              <label>Core Title / Focus</label>
              <input 
                type="text" 
                className="input-field" 
                name="title"
                placeholder="e.g., Romans 8 Clarity" 
                value={newGain.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label>What did you gain or witness?</label>
              <textarea 
                className="textarea-field" 
                name="content"
                placeholder="Write down the promptings, structural changes, or peace experienced..." 
                value={newGain.content}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">⚡ Record to Journal Core</button>
          </form>

          {/* RIGHT COLUMN: Interactive Filterable Feed */}
          <div className="feed-container">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="🔍 Filter through recorded metrics..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredGains.length > 0 ? (
              filteredGains.map((gain) => (
                <div key={gain.id} className="gain-card">
                  <div className="gain-header">
                    <h3 className="gain-title">{gain.title}</h3>
                    <span className="gain-category">{gain.category}</span>
                  </div>
                  <p className="gain-content">{gain.content}</p>
                  <span className="gain-date">📅 {gain.date}</span>
                </div>
              ))
            ) : (
              <div className="empty-state">
                No matching spiritual logs found. Start typing on the left to capture a dynamic milestone!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}