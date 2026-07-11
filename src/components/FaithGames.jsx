import React, { useState, useEffect } from 'react';

// Enhanced Arcade SFX Generator
const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'crash') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.2);
    } else if (type === 'stack') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(554.37, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.15);
    }
  } catch (e) {}
};

export default function FaithGames() {
  const [currentGame, setCurrentGame] = useState('menu'); 
  const [globalScore, setGlobalScore] = useState(0);

  // --- SCRIPTURE DASH STATE ---
  const dashVerses = [
    { reference: "Romans 8:28", correctOrder: ["And", "we", "know", "that", "in", "all", "things", "God", "works", "for", "the", "good"], distractors: ["fear", "doubt", "always"] },
    { reference: "Isaiah 41:10", correctOrder: ["So", "do", "not", "fear", "for", "I", "am", "with", "you"], distractors: ["run", "hide", "quit"] }
  ];
  const [dashStage, setDashStage] = useState(0);
  const [dashWordIdx, setDashWordIdx] = useState(0);
  const [dashLanes, setDashLanes] = useState([]);
  const [dashTimer, setDashTimer] = useState(100);
  const [dashHearts, setDashHearts] = useState(3);

  // --- TRUTH POPPER STATE ---
  const rawPool = [
    { text: "God works for my good!", isTruth: true },
    { text: "No weapon forms can win!", isTruth: true },
    { text: "I have a sound mind!", isTruth: true },
    { text: "I am my past mistakes.", isTruth: false },
    { text: "Fear rules today.", isTruth: false },
    { text: "I am fully abandoned.", isTruth: false }
  ];
  const [bubbles, setBubbles] = useState([]);
  const [popperScore, setPopperScore] = useState(0);
  const [popperTimer, setPopperTimer] = useState(30);
  const [popperStatus, setPopperStatus] = useState('idle');

  // --- THANKSGIVING STACK STATE ---
  const praisePool = ["BREATH", "GRACE", "HEALTH", "PEACE", "FAMILY", "JOY"];
  const [fallingItem, setFallingItem] = useState({ text: '', lane: 0, top: 0 });
  const [altarStack, setAltarStack] = useState([[], [], []]); 
  const [thanksScore, setThanksScore] = useState(0);
  const [thanksStatus, setThanksStatus] = useState('idle');

  // ==========================================
  // GAME DRIVERS & LOOPS
  // ==========================================

  // --- SCRIPTURE DASH ---
  const startDash = () => {
    setDashStage(0); setDashWordIdx(0); setDashHearts(3); setDashTimer(100);
    setCurrentGame('dash'); generateDashLanes(0, 0);
  };
  const generateDashLanes = (stage, wordIdx) => {
    const v = dashVerses[stage];
    if (!v || wordIdx >= v.correctOrder.length) return;
    const correct = v.correctOrder[wordIdx];
    let pool = [...v.distractors].sort(() => Math.random() - 0.5).slice(0, 2);
    setDashLanes(([correct, ...pool]).sort(() => Math.random() - 0.5));
    setDashTimer(100);
  };
  useEffect(() => {
    let timer = null;
    if (currentGame === 'dash') {
      timer = setInterval(() => {
        setDashTimer(p => {
          if (p <= 0) {
            playSound('crash');
            if (dashHearts <= 1) { setCurrentGame('menu'); return 0; }
            setDashHearts(h => h - 1); generateDashLanes(dashStage, dashWordIdx);
            return 100;
          }
          return p - 6;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [currentGame, dashWordIdx, dashStage, dashHearts]);

  const handleDashTap = (word) => {
    const v = dashVerses[dashStage];
    if (word === v.correctOrder[dashWordIdx]) {
      playSound('pop');
      setGlobalScore(g => g + 20);
      const nextWord = dashWordIdx + 1;
      if (nextWord >= v.correctOrder.length) {
        if (dashStage + 1 >= dashVerses.length) { setCurrentGame('menu'); alert("🏆 Course Completed!"); }
        else { setDashStage(s => s + 1); setDashWordIdx(0); generateDashLanes(dashStage + 1, 0); }
      } else { setDashWordIdx(nextWord); generateDashLanes(dashStage, nextWord); }
    } else {
      playSound('crash');
      if (dashHearts <= 1) { setCurrentGame('menu'); }
      else { setDashHearts(h => h - 1); generateDashLanes(dashStage, dashWordIdx); }
    }
  };

  // --- TRUTH POPPER ---
  const startPopper = () => {
    setPopperScore(0); setPopperTimer(25); setPopperStatus('playing'); setCurrentGame('popper');
    const initial = rawPool.map((b, i) => ({
      ...b, id: i, x: Math.random() * 70 + 10, y: Math.random() * 50 + 20,
      vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4
    }));
    setBubbles(initial);
  };
  useEffect(() => {
    let loop = null;
    if (currentGame === 'popper' && popperStatus === 'playing') {
      loop = setInterval(() => {
        setBubbles(prev => prev.map(b => {
          let nx = b.x + b.vx; let ny = b.y + b.vy;
          let nvx = b.vx; let nvy = b.vy;
          if (nx <= 5 || nx >= 90) nvx = -nvx;
          if (ny <= 5 || ny >= 90) nvy = -nvy;
          return { ...b, x: nx, y: ny, vx: nvx, vy: nvy };
        }));
      }, 40);
    }
    return () => clearInterval(loop);
  }, [currentGame, popperStatus]);

  useEffect(() => {
    let clock = null;
    if (currentGame === 'popper' && popperStatus === 'playing') {
      clock = setInterval(() => {
        setPopperTimer(t => { if (t <= 1) { setPopperStatus('ended'); return 0; } return t - 1; });
      }, 1000);
    }
    return () => clearInterval(clock);
  }, [currentGame, popperStatus]);

  const popBubble = (target) => {
    if (target.isTruth) {
      playSound('pop'); setPopperScore(s => s + 50); setGlobalScore(g => g + 50);
    } else {
      playSound('crash'); setPopperScore(s => Math.max(0, s - 40));
    }
    setBubbles(prev => prev.map(b => b.id === target.id ? {
      ...rawPool[Math.floor(Math.random() * rawPool.length)], id: target.id,
      x: Math.random() * 70 + 10, y: Math.random() * 50 + 20,
      vx: (Math.random() - 0.5) * 5, vy: (Math.random() - 0.5) * 5
    } : b));
  };

  // --- THANKSGIVING STACK ---
  const startThanks = () => {
    setThanksScore(0); setAltarStack([[], [], []]); setThanksStatus('playing'); setCurrentGame('thanks');
    spawnFallingBrick();
  };
  const spawnFallingBrick = () => {
    const text = praisePool[Math.floor(Math.random() * praisePool.length)];
    const lane = Math.floor(Math.random() * 3);
    setFallingItem({ text, lane, top: 0 });
  };
  useEffect(() => {
    let fallLoop = null;
    if (currentGame === 'thanks' && thanksStatus === 'playing') {
      fallLoop = setInterval(() => {
        setFallingItem(p => {
          if (p.top >= 82) {
            setAltarStack(prev => {
              const copy = [...prev];
              if (copy[p.lane].length >= 5) {
                playSound('crash'); setThanksStatus('ended');
              } else {
                playSound('stack'); copy[p.lane].push(p.text);
                setThanksScore(s => s + 30); setGlobalScore(g => g + 30);
              }
              return copy;
            });
            setTimeout(() => spawnFallingBrick(), 50);
            return { text: '', lane: 0, top: 0 };
          }
          return { ...p, top: p.top + 5 };
        });
      }, 100);
    }
    return () => clearInterval(fallLoop);
  }, [currentGame, thanksStatus]);

  const slamBrickToLane = (laneIdx) => {
    if (thanksStatus !== 'playing') return;
    setFallingItem(p => ({ ...p, lane: laneIdx }));
  };

  return (
    <div className="game-root">
      <style>{`
        .game-root { font-family: 'Lora', serif; background-color: #EFEFE9; min-height: 100vh; padding: 2rem 1.5rem; }
        .canvas-box { max-width: 850px; margin: 0 auto; }
        
        .arcade-navbar { background: #1E2640; border: 2px solid #F59E0B; padding: 1.2rem; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; color: white; margin-bottom: 2rem; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .score-counter { font-family: monospace; font-size: 1.8rem; color: #F59E0B; font-weight: 900; }
        
        /* Intro Panel Styles */
        .intro-panel { background: #1E2640; border-radius: 20px; padding: 2.5rem; border: 2px solid #F59E0B; color: white; margin-bottom: 2.5rem; text-align: left; }
        .intro-panel h2 { color: #F59E0B; margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 900; }
        .intro-panel p { color: #94A3B8; font-family: sans-serif; line-height: 1.6; margin: 0; font-size: 1.05rem; }

        /* Grid Matrix Selector Cards */
        .arcade-menu-title { font-weight: 900; font-size: 2rem; color: #111625; text-align: center; margin-bottom: 1.5rem; }
        .arcade-lobby-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .arcade-slot-card { background: #1E2640; color: white; border-radius: 20px; padding: 1.8rem; border: 2px solid rgba(245,158,11,0.2); transition: 0.2s; cursor: pointer; text-align: left; display: flex; flex-direction: column; justify-content: space-between; min-height: 200px; }
        .arcade-slot-card:hover { border-color: #F59E0B; transform: translateY(-4px); box-shadow: 0 12px 24px rgba(245,158,11,0.15); }
        .arcade-slot-card h3 { color: #F59E0B; margin: 0 0 0.5rem 0; font-size: 1.35rem; font-weight: 800; }
        .arcade-slot-card p { color: #94A3B8; font-size: 0.95rem; margin: 0 0 1.5rem 0; line-height: 1.5; font-family: sans-serif; }

        .game-frame { background: #1E2640; border-radius: 24px; border: 2px solid #F59E0B; padding: 2.5rem; color: white; min-height: 480px; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        .exit-link { background: transparent; border: 2px solid #64748B; color: #94A3B8; padding: 0.4rem 1rem; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.85rem; margin-bottom: 1.5rem; display: inline-block; }
        .exit-link:hover { color: white; border-color: white; }

        /* SCRIPTURE DASH LANES */
        .lane-track-bar { background: #111625; height: 12px; border-radius: 6px; overflow: hidden; margin-bottom: 1.5rem; }
        .lane-fill-bar { background: linear-gradient(90deg, #F59E0B, #EF4444); height: 100%; transition: width 0.1s linear; }
        .dash-lane-stack { display: flex; flex-direction: column; gap: 0.8rem; margin-top: 2rem; }
        .dash-strip-button { background: #111625; border: 2px solid rgba(245,158,11,0.2); border-radius: 12px; color: white; padding: 1.1rem; font-size: 1.3rem; font-weight: 800; cursor: pointer; transition: 0.1s; }
        .dash-strip-button:hover { border-color: #F59E0B; background: rgba(245,158,11,0.05); }

        /* BUBBLE CHAMBER PHYSICS FIELD */
        .physics-arena { background: #111625; width: 100%; height: 350px; border-radius: 16px; position: relative; border: 1px dashed rgba(245,158,11,0.3); overflow: hidden; }
        .bouncy-bubble { position: absolute; padding: 0.6rem 1.2rem; border-radius: 50px; font-weight: 800; cursor: pointer; font-size: 1rem; transform: translate(-50%, -50%); box-shadow: 0 6px 15px rgba(0,0,0,0.4); transition: transform 0.05s ease; white-space: nowrap; user-select: none; }
        .bubble-t { background: #065F46; color: #34D399; border: 2px solid #34D399; }
        .bubble-f { background: #991B1B; color: #FCA5A5; border: 2px solid #FCA5A5; }
        .bouncy-bubble:active { transform: translate(-50%, -50%) scale(0.9); }

        /* STACK DROP MATRIX FIELDS */
        .tetris-grid-system { background: #111625; width: 100%; height: 360px; border-radius: 16px; display: flex; position: relative; border: 1px solid rgba(245,158,11,0.2); }
        .tetris-column-track { flex: 1; border-right: 1px dashed rgba(255,255,255,0.05); display: flex; flex-direction: column-reverse; gap: 4px; padding: 6px; background: transparent; cursor: pointer; position: relative; }
        .tetris-column-track:hover { background: rgba(245,158,11,0.02); }
        .tetris-falling-brick { position: absolute; left: 5%; width: 90%; background: #F59E0B; color: #111625; padding: 0.5rem 0.2rem; text-align: center; border-radius: 6px; font-weight: 900; font-size: 0.95rem; box-shadow: 0 4px 10px rgba(0,0,0,0.3); letter-spacing: 1px; pointer-events: none; }
        .tetris-landed-brick { background: linear-gradient(90deg, #92400E, #B45309); color: #FDE68A; padding: 0.6rem; text-align: center; border-radius: 6px; font-weight: 800; font-size: 1rem; text-transform: uppercase; border-bottom: 3px solid #78350F; box-sizing: border-box; }

        .action-button { background: #F59E0B; color: #111625; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 800; cursor: pointer; font-size: 1rem; margin-top: 1.5rem; }
        .action-button:hover { background: #D98206; }
      `}</style>

      <div className="canvas-box">
        {/* Dynamic Status Hub */}
        <div className="arcade-navbar">
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '800', letterSpacing: '1px' }}>ARCADE ACCOUNT XP CORES</div>
            <div className="score-counter">{globalScore} XP</div>
          </div>
          {currentGame !== 'menu' && <button className="exit-link" style={{ margin: 0 }} onClick={() => setCurrentGame('menu')}>🎮 Open Hub Slots</button>}
        </div>

        {/* --- ARCADE LOBBY LANDING DIRECTORY --- */}
        {currentGame === 'menu' && (
          <div>
            {/* The Missing Introduction Matrix Section */}
            <div className="intro-panel">
              <h2>🎮 The Faith Onboarding Simulator</h2>
              <p>
                Welcome to the Intercessory Warmup Lobby. These custom gaming chambers are fast-paced cognitive tools built to condition your mental focus before prayer sessions. By forcing split-second selections under immediate timeline constraints, they serve to snap your attention fully onto scripture, aggressively clear doubts, and kickstart a passionate framework of praise.
              </p>
            </div>

            <h2 className="arcade-menu-title">⚡ Select Active Arcade Module</h2>
            
            <div className="arcade-lobby-grid">
              <div className="arcade-slot-card">
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#F59E0B', fontWeight: 'bold', marginBottom: '0.4rem' }}>LANE RUNNER MODE</div>
                  <h3>⚡ Scripture Dash</h3>
                  <p>Intercept and map falling scriptural words inside dynamic split lanes at breakneck speeds.</p>
                </div>
                <button className="action-button" style={{ marginTop: 0, width: '100%' }} onClick={startDash}>Launch Run</button>
              </div>

              <div className="arcade-slot-card">
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#F59E0B', fontWeight: 'bold', marginBottom: '0.4rem' }}>BOUNCY POPPER MODE</div>
                  <h3>💥 Truth Popper</h3>
                  <p>A frantic physics arena. Pop bouncing divine promises while actively filtering out deceit chains.</p>
                </div>
                <button className="action-button" style={{ marginTop: 0, width: '100%' }} onClick={startPopper}>Launch Run</button>
              </div>

              <div className="arcade-slot-card">
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#F59E0B', fontWeight: 'bold', marginBottom: '0.4rem' }}>FALL-STACK FALL MODE</div>
                  <h3>🍂 Thanksgiving Altar</h3>
                  <p>Steer dropping gratitude tokens into structural alignment columns before they stack out.</p>
                </div>
                <button className="action-button" style={{ marginTop: 0, width: '100%' }} onClick={startThanks}>Launch Run</button>
              </div>
            </div>
          </div>
        )}

        {/* --- MODULE 1: SCRIPTURE DASH --- */}
        {currentGame === 'dash' && (
          <div className="game-frame">
            <button className="exit-link" onClick={() => setCurrentGame('menu')}>← Exit Channel</button>
            <div className="lane-track-bar"><div className="lane-fill-bar" style={{ width: `${dashTimer}%` }}></div></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 'bold' }}>
              <span>📖 PASSAGE: {dashVerses[dashStage].reference}</span>
              <span>❤️ CORES: {'❤️'.repeat(dashHearts)}</span>
            </div>
            
            <div style={{ background: '#111625', padding: '1.2rem', borderRadius: '12px', fontSize: '1.3rem', fontWeight: '800', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              {dashVerses[dashStage].correctOrder.map((word, idx) => (
                <span key={idx} style={{ color: idx < dashWordIdx ? '#F59E0B' : idx === dashWordIdx ? '#38BDF8' : 'rgba(255,255,255,0.12)' }}>{word} </span>
              ))}
            </div>

            <div className="dash-lane-stack">
              {dashLanes.map((word, idx) => (
                <button key={idx} className="dash-strip-button" onClick={() => handleDashTap(word)}>{word}</button>
              ))}
            </div>
          </div>
        )}

        {/* --- MODULE 2: KINETIC TRUTH POPPER --- */}
        {currentGame === 'popper' && (
          <div className="game-frame">
            <button className="exit-link" onClick={() => setCurrentGame('menu')}>← Exit Channel</button>
            
            {popperStatus === 'playing' ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  <span>⏳ BURST TIME: {popperTimer}s</span>
                  <span>🔥 STREAK HARVEST: {popperScore} XP</span>
                </div>
                
                <div className="physics-arena">
                  {bubbles.map((b) => (
                    <div 
                      key={b.id}
                      className={`bouncy-bubble ${b.isTruth ? 'bubble-t' : 'bubble-f'}`}
                      style={{ left: `${b.x}%`, top: `${b.y}%` }}
                      onClick={() => popBubble(b)}
                    >
                      {b.text}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
                <h2>🏁 RUSH SEQUENCE ENDED</h2>
                <p style={{ color: '#94A3B8' }}>Module Output: +{popperScore} XP</p>
                <button className="action-button" onClick={startPopper}>🔄 Restart Burst Run</button>
              </div>
            )}
          </div>
        )}

        {/* --- MODULE 3: THANKSGIVING FALL-STACKER --- */}
        {currentGame === 'thanks' && (
          <div className="game-frame">
            <button className="exit-link" onClick={() => setCurrentGame('menu')}>← Exit Channel</button>
            
            {thanksStatus === 'playing' ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  <span>🎮 CLICK LANES BELOW TO SLAM/STEER DROP</span>
                  <span>🔥 MATRIX HARVEST: {thanksScore} XP</span>
                </div>

                <div className="tetris-grid-system">
                  {[0, 1, 2].map((laneIdx) => (
                    <div 
                      key={laneIdx} 
                      className="tetris-column-track"
                      onClick={() => slamBrickToLane(laneIdx)}
                    >
                      {/* Live physics block simulation display */}
                      {fallingItem.text && fallingItem.lane === laneIdx && (
                        <div className="tetris-falling-brick" style={{ top: `${fallingItem.top}%` }}>
                          📥 {fallingItem.text}
                        </div>
                      )}

                      {/* Landed blocks arrays map matrix */}
                      {altarStack[laneIdx].map((item, idx) => (
                        <div key={idx} className="tetris-landed-brick">{item}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
                <h2>💀 ALTAR OVERFLOW COLLAPSE</h2>
                <p style={{ color: '#94A3B8' }}>Stack Harvest: +{thanksScore} XP</p>
                <button className="action-button" onClick={startThanks}>🔄 Spark Falling Drop Run</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}