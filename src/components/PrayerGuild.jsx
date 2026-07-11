import React, { useState, useEffect, useRef } from 'react';

const PRAYER_STATIONS = [
  {
    id: 'adoration',
    title: '👑 1. Enter His Gates (Adoration)',
    scripture: 'Psalm 100:4 — "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."',
    focus: 'Do not ask for anything yet. Spend this time declaring who God is—His names, His goodness, and His majesty. Speak it out loud.',
    prompts: [
      'Father, I praise You because You are Jehovah Jireh, my Provider...',
      'Lord, I thank You for Your unshakeable faithfulness in my life...',
      'You are the Alpha and the Omega, the sovereign King over my family...'
    ]
  },
  {
    id: 'alignment',
    title: '🛡️ 2. Scriptural Identity & Alignment',
    scripture: 'Isaiah 55:11 — "So is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire..."',
    focus: 'Anchor your soul. Read these declarations out loud to shatter doubt, anxiety, and fear by aligning your mind with God\'s true thoughts.',
    prompts: [
      'I declare that I am fearfully and wonderfully made (Psalm 139:14).',
      'No weapon formed against my mind or peace shall prosper (Isaiah 54:17).',
      'I have not been given a spirit of fear, but of power, love, and a sound mind (2 Timothy 1:7).'
    ]
  },
  {
    id: 'supplication',
    title: '🔥 3. Deep Intercession & Warfare',
    scripture: 'Philippians 4:6 — "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."',
    focus: 'Pour out your heavy burdens. Pray specifically for your future, your calling, your family, and the body of Christ.',
    prompts: [
      'Lord, establish Your divine purpose and order my steps today...',
      'I bring my worries regarding my future and layout them plainly at Your feet...',
      'Holy Spirit, grant me supernatural wisdom and open doors no man can shut...'
    ]
  },
  {
    id: 'resting',
    title: '🕊️ 4. Rest & Listen (Selah)',
    scripture: 'Psalm 46:10 — "Be still, and know that I am God."',
    focus: 'Quiet your heart completely. Stop talking. Close your eyes, breathe deeply, and allow the Holy Spirit to minister peace directly to your thoughts.',
    prompts: [
      'Holy Spirit, I am listening. Speak into my heart...',
      'I receive Your supernatural peace that passes all understanding...',
      'Lord, I rest completely in the absolute safety of Your presence...'
    ]
  }
];

export default function PrayerGuild() {
  const [activeStation, setActiveStation] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Constants based on your precise configuration
  const MAX_VOLUME = 0.20; // Hard capped at 20% background volume
  const FADE_DURATION = 3000; // 3 seconds fade
  const FADE_STEP_TIME = 100; // Smooth volume adjustment updates every 100ms

  // Clock tracking effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Premium Atmospheric Audio Control Engine
  useEffect(() => {
    // Initialize audio instance if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio('/worship-pad.mp3'); // Put your file in your public folder
      audioRef.current.loop = true; // Seamless looping enabled
    }

    const audio = audioRef.current;

    // Clear any active transitions to avoid volume fights
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    if (isMusicPlaying) {
      // Start at absolute silence, then smoothly blend up
      if (audio.paused) {
        audio.volume = 0;
        audio.play().catch(err => console.log("Interaction required to initiate playback:", err));
      }

      const totalSteps = FADE_DURATION / FADE_STEP_TIME;
      const volumeIncrement = MAX_VOLUME / totalSteps;

      fadeIntervalRef.current = setInterval(() => {
        if (audio.volume + volumeIncrement >= MAX_VOLUME) {
          audio.volume = MAX_VOLUME;
          clearInterval(fadeIntervalRef.current);
        } else {
          audio.volume += volumeIncrement;
        }
      }, FADE_STEP_TIME);

    } else {
      // Smooth 3-second descent into quiet reverence before pausing
      const totalSteps = FADE_DURATION / FADE_STEP_TIME;
      const volumeDecrement = audio.volume / totalSteps;

      fadeIntervalRef.current = setInterval(() => {
        if (audio.volume - volumeDecrement <= 0) {
          audio.volume = 0;
          audio.pause();
          clearInterval(fadeIntervalRef.current);
        } else {
          audio.volume -= volumeDecrement;
        }
      }, FADE_STEP_TIME);
    }

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, [isMusicPlaying]);

  // Clean shutdown when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePrayerSession = () => {
    const nextState = !isTimerRunning;
    setIsTimerRunning(nextState);
    setIsMusicPlaying(nextState); 
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const station = PRAYER_STATIONS[activeStation];

  return (
    <div className="prayer-root">
      <style>{`
        .prayer-root {
          font-family: 'Lora', 'Georgia', 'Times New Roman', serif;
          background-color: #EFEFE9;
          color: #111625;
          min-height: 100vh;
          padding: 4rem 1.5rem 5rem;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .prayer-container { 
          max-width: 850px; 
          margin: 0 auto; 
          display: flex;
          flex-direction: column;
        }
        
        .prayer-header { text-align: center; margin-bottom: 3.5rem; }
        .prayer-header h1 { 
          font-size: clamp(2.4rem, 5.5vw, 3.6rem);
          font-weight: 900; 
          background: linear-gradient(135deg, #0F172A 0%, #92400E 50%, #78350F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 0.8rem 0; 
          letter-spacing: -1px;
          line-height: 1.2;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06));
        }
        .prayer-header p { 
          color: #4B5563; 
          font-size: clamp(1.1rem, 2.5vw, 1.35rem); 
          font-style: italic; 
          font-weight: 700;
          margin: 0; 
          letter-spacing: 0.2px;
        }

        .timer-box {
          background-color: #1E2640; 
          border: 2px solid #F59E0B;
          padding: 1.5rem 2rem; 
          border-radius: 16px; 
          margin-bottom: 2.5rem;
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          gap: 1.5rem;
          flex-wrap: wrap;
          box-shadow: 0 12px 24px rgba(30, 38, 64, 0.15);
        }
        .timer-display { 
          font-size: 2.5rem; 
          font-weight: 800; 
          color: #FFFFFF; 
          font-family: monospace; 
          line-height: 1;
          margin-top: 2px;
        }
        
        .action-button-group { display: flex; gap: 1rem; flex-wrap: wrap; }
        
        .timer-btn {
          background: #F59E0B; 
          color: #111625; 
          border: none; 
          padding: 0.9rem 1.8rem;
          border-radius: 8px; 
          font-weight: 800; 
          cursor: pointer; 
          transition: all 0.2s ease; 
          font-size: 1rem;
          font-family: 'Arial', sans-serif;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }
        .timer-btn:hover { 
          background: #D98206; 
          transform: translateY(-1px);
        }
        .timer-btn:active { transform: translateY(1px); }

        .music-toggle-btn {
          background: transparent; 
          color: #F59E0B; 
          border: 2px solid #F59E0B; 
          padding: 0.9rem 1.5rem;
          border-radius: 8px; 
          font-weight: 800; 
          cursor: pointer; 
          transition: all 0.2s ease;
          font-size: 1rem;
          font-family: 'Arial', sans-serif;
        }
        .music-toggle-btn:hover {
          background: rgba(245, 158, 11, 0.08);
        }

        .station-tabs { 
          display: flex; 
          gap: 0.6rem; 
          margin-bottom: 1.8rem; 
          overflow-x: auto; 
          padding-bottom: 8px; 
          scrollbar-width: thin;
        }
        .station-tabs::-webkit-scrollbar { height: 4px; }
        .station-tabs::-webkit-scrollbar-thumb { background: #1E2640; border-radius: 4px; }
        
        .tab-btn {
          background: #1E2640; 
          color: #94A3B8; 
          border: 1px solid transparent; 
          padding: 0.9rem 1.4rem;
          border-radius: 8px; 
          font-weight: 800; 
          cursor: pointer; 
          white-space: nowrap;
          font-family: 'Arial', sans-serif;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        .tab-btn:hover { color: #FFFFFF; background: #242e4d; }
        .tab-btn.active { 
          background: #111625; 
          color: #FFFFFF; 
          border-color: #F59E0B; 
          box-shadow: 0 4px 12px rgba(30, 38, 64, 0.2);
        }

        .altar-panel {
          background: #1E2640; 
          border-radius: 20px; 
          padding: 3.5rem 2.5rem;
          box-shadow: 0 20px 40px rgba(17, 22, 37, 0.15);
          border: 2px solid #F59E0B;
          box-sizing: border-box;
          width: 100%;
        }

        .scripture-banner {
          background: #111625; 
          border-left: 5px solid #F59E0B;
          padding: 1.5rem 1.8rem; 
          font-style: italic; 
          font-size: 1.35rem; 
          line-height: 1.7; 
          color: #38BDF8 !important; 
          margin-bottom: 2.5rem;
          border-radius: 0 12px 12px 0;
          font-weight: 800;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .focus-section { margin-bottom: 2.5rem; }
        .focus-section h3 { 
          color: #F59E0B; 
          font-size: 0.85rem; 
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0 0 12px 0; 
          font-family: 'Arial', sans-serif;
          font-weight: 800;
        }
        .focus-text { 
          font-size: 1.3rem; 
          line-height: 1.8; 
          color: #FFFFFF; 
          margin: 0; 
          font-weight: 800;
          text-align: justify;
        }

        .prompt-list { display: flex; flex-direction: column; gap: 1.2rem; }
        .prompt-card {
          background: #111625; 
          padding: 1.4rem 1.6rem; 
          border-radius: 12px;
          border: 1px solid rgba(245, 158, 11, 0.15); 
          font-size: 1.25rem; 
          line-height: 1.6; 
          color: #FFFFFF;
          font-weight: 800;
        }

        .nav-controls { 
          display: flex; 
          justify-content: space-between; 
          margin-top: 3rem; 
          border-top: 2px solid #F59E0B;
          padding-top: 2rem;
        }
        .nav-btn {
          background: transparent; 
          color: #F59E0B; 
          border: 2px solid #F59E0B;
          padding: 0.8rem 1.6rem; 
          border-radius: 8px; 
          font-weight: 800; 
          cursor: pointer;
          font-family: 'Arial', sans-serif;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        .nav-btn:hover:not(:disabled) { 
          background: rgba(245, 158, 11, 0.08); 
          transform: translateY(-1px);
        }
        .nav-btn:active:not(:disabled) { transform: translateY(1px); }
        .nav-btn:disabled { opacity: 0.2; cursor: not-allowed; border-color: rgba(245, 158, 11, 0.2); color: rgba(245, 158, 11, 0.2); }
      `}</style>

      <div className="prayer-container">
        <div className="prayer-header">
          <h1>🧎 Keep Watch Prayer Room</h1>
          <p>"Could you not watch with me one hour?" — Matthew 26:40</p>
        </div>

        <div className="timer-box">
          <div style={{ textAlign: 'left' }}>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'block', letterSpacing: '1px', fontWeight: '800', fontFamily: "sans-serif" }}>SACRED HOUR PROGRESS</span>
            <div className="timer-display">{formatTime(timer)}</div>
          </div>
          
          <div className="action-button-group">
            <button className="timer-btn" onClick={togglePrayerSession}>
              {isTimerRunning ? "⏸️ Pause Session" : "🔥 Begin Intercession"}
            </button>
            <button className="music-toggle-btn" onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
              {isMusicPlaying ? "🔊 Instrumental Playing" : "🔇 Instrumental Paused"}
            </button>
          </div>
        </div>

        <div className="station-tabs">
          {PRAYER_STATIONS.map((st, idx) => (
            <button 
              key={st.id}
              className={`tab-btn ${activeStation === idx ? 'active' : ''}`}
              onClick={() => setActiveStation(idx)}
            >
              {st.title.split(' ')[0]} {st.id.charAt(0).toUpperCase() + st.id.slice(1)}
            </button>
          ))}
        </div>

        <div className="altar-panel">
          <div className="scripture-banner">
            {station.scripture}
          </div>

          <div className="focus-section">
            <h3>🎯 Room Direction</h3>
            <p className="focus-text">{station.focus}</p>
          </div>

          <div className="focus-section" style={{ marginBottom: 0 }}>
            <h3 style={{ color: '#94A3B8' }}>🗣️ Prayer Prompts (Speak these aloud)</h3>
            <div className="prompt-list">
              {station.prompts.map((prompt, i) => (
                <div key={i} className="prompt-card">
                  {prompt}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-controls">
            <button 
              className="nav-btn"
              disabled={activeStation === 0}
              onClick={() => setActiveStation(prev => prev - 1)}
            >
              ← Previous Focus
            </button>
            <button 
              className="nav-btn"
              disabled={activeStation === PRAYER_STATIONS.length - 1}
              onClick={() => setActiveStation(prev => prev + 1)}
            >
              Next Focus →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}