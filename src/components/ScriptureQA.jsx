import React, { useState, useEffect, useRef } from 'react';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY, 
  dangerouslyAllowBrowser: true               
});

export default function ScriptureQA() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, loading]);

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    const userMessage = { role: 'user', content: question };
    
    setChatHistory((prev) => [...prev, userMessage]);
    setQuestion('');
    setLoading(true);
    setError('');

    const systemInstruction = {
      role: "system",
      content: `You are a caring, wise, and deeply grounded Christian pastor providing spiritual counsel. 
      Engage in a warm, natural conversation. Never use robotic structures, sections, or bullet points. 
      
      Follow these pastoral rules strictly:
      1. Get straight to the heart of their struggle in the first sentence. No conversational fluff or introductory delays.
      2. Always weave in a foundational Bible reference (book, chapter, and verse) that speaks directly to their situation.
      3. Keep the conversation continuous, directly linking your wisdom to their previous messages.
      4. At the end of every response, ask a single, thoughtful, or probing question that invites the user to go deeper or helps you understand their heart better.
      5. Remind them gently that while this conversation is a helpful guide, the Holy Spirit is their ultimate Counselor, and they should bring this straight to Him in prayer.
      6. If the user expresses deep spiritual emptiness, a desire to start over, immense guilt, or feeling completely lost, explicitly call them to salvation, explaining the simple beauty of repenting and trusting Jesus.`
    };

    try {
      const fullMessagesPayload = [
        systemInstruction,
        ...chatHistory,
        userMessage
      ];

      const response = await groq.chat.completions.create({
        messages: fullMessagesPayload,
        model: "llama-3.3-70b-versatile",
        temperature: 0.6,
      });

      const aiReplyText = response.choices[0]?.message?.content || "I couldn't process that statement.";

      setChatHistory((prev) => [...prev, { role: 'assistant', content: aiReplyText }]);
      speakResponse(aiReplyText);

    } catch (err) {
      console.error("Chat Error:", err);
      setError("The connection to the sanctuary was interrupted. Please try re-sending your thought.");
    } finally {
      setLoading(false);
    }
  };

  const speakResponse = (text) => {
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="sqa-root">
      <style>{`
        /* ── Deep Premium Ambient Design Framework ─────────── */
        .sqa-root {
          font-family: 'Lora', 'Georgia', 'Times New Roman', serif;
          background-color: #0F0A06; /* Core Warm Espresso Base */
          background: radial-gradient(circle at 50% 15%, rgba(123, 28, 46, 0.2) 0%, transparent 60%);
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

        .sqa-container { 
          max-width: 800px; 
          width: 100%; 
          display: flex; 
          flex-direction: column; 
          z-index: 1; 
        }
        
        /* Premium High-Contrast Header Architecture */
        .sqa-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center; 
          margin-bottom: 3rem; 
          padding: 0 1rem;
          width: 100%;
        }
        .sqa-header h1 { 
          margin: 0; 
          font-size: clamp(2.2rem, 5vw, 3.2rem); 
          font-weight: 800; 
          background: linear-gradient(135deg, #7B1C2E 0%, #D4AF37 50%, #B48E24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px; 
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
        }
        .sqa-header p {
          margin: 0.8rem auto 0; 
          color: #7B1C2E; 
          font-weight: 700; 
          letter-spacing: 1.2px; 
          font-family: 'Arial', sans-serif; 
          font-size: 0.9rem; 
          text-transform: uppercase;
          text-align: center;
          max-width: 600px;
          width: 100%;
        }
        
        /* Ultra Crisp Premium Chat Interface */
        .chat-box {
          background: linear-gradient(145deg, rgba(30, 20, 15, 0.4) 0%, rgba(18, 12, 8, 0.6) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #FFFFFF; 
          border-radius: 20px; 
          padding: 2.5rem 2.2rem;
          min-height: 480px; 
          max-height: 600px; 
          overflow-y: auto; 
          margin-bottom: 1.8rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02);
          border: 1px solid rgba(212, 175, 55, 0.15);
        }
        
        /* Beautifully Brightened Section Introduction */
        .sqa-intro-card {
          text-align: center; 
          margin-top: 4.5rem; 
          padding: 0 1rem;
        }
        .sqa-intro-icon {
          font-size: 2.5rem; 
          color: #D4AF37; 
          margin: 0 0 1.2rem;
          filter: drop-shadow(0 2px 10px rgba(212, 175, 55, 0.3));
        }
        .sqa-intro-quote {
          margin: 0 0 1.2rem; 
          font-weight: 500;
          font-style: italic; 
          font-size: 1.55rem; 
          line-height: 1.8; 
          color: #FFFFFF; 
          text-shadow: 0 0 25px rgba(212, 175, 55, 0.25);
        }
        .sqa-intro-subtext {
          margin: 0;
          font-family: 'Arial', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #D4AF37;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .message-bubble { 
          margin-bottom: 2rem; 
          max-width: 85%; 
          line-height: 1.85; 
          font-size: 1.25rem; 
          letter-spacing: 0.3px;
        }
        
        /* Matte Metallic Gold User Bubble */
        .user-bubble { 
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(180, 142, 36, 0.08) 100%); 
          color: #FFFFFF; 
          padding: 1.2rem 1.6rem; 
          border-radius: 18px 18px 0 18px; 
          margin-left: auto; 
          font-weight: 400;
          border: 1px solid rgba(212, 175, 55, 0.25);
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }
        
        /* Polished Ultra-Bright Premium Sanctuary Response Box - FORCED BRIGHT AND BOLD HERE */
        .assistant-bubble { 
          background: #140E0A; 
          color: #FFFFFF !important; 
          font-weight: 800 !important; 
          padding: 1.8rem; 
          border-radius: 18px 18px 18px 0; 
          border-left: 4px solid #7B1C2E; 
          box-shadow: 0 4px 25px rgba(0,0,0,0.25);
          border-top: 1px solid rgba(255,255,255,0.02);
          border-right: 1px solid rgba(255,255,255,0.02);
          border-bottom: 1px solid rgba(255,255,255,0.02);
          text-shadow: none !important; 
        }

        /* Enforce child paragraph elements within the assistant bubble to be bright white and extra bold */
        .assistant-bubble p {
          color: #FFFFFF !important;
          font-weight: 800 !important;
        }
        
        /* Action Elements */
        .voice-action-btn {
          background: rgba(123, 28, 46, 0.15); 
          color: #F59E0B; 
          border: 1px solid rgba(123, 28, 46, 0.4); 
          padding: 0.5rem 1.1rem; 
          font-size: 0.8rem; 
          font-family: 'Arial', sans-serif;
          border-radius: 6px; 
          cursor: pointer; 
          margin-top: 1.2rem; 
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
        }
        .voice-action-btn:hover { background: #7B1C2E; color: #FFFFFF; border-color: #7B1C2E; box-shadow: 0 4px 12px rgba(123,28,46,0.2); }
        
        /* Dark Custom Glass Chat Form */
        .chat-form { 
          display: flex; 
          gap: 0.8rem; 
          background: #140E0A; 
          padding: 0.8rem; 
          border-radius: 16px; 
          box-shadow: 0 15px 35px rgba(0,0,0,0.4); 
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        .chat-input {
          flex: 1; 
          padding: 1.1rem; 
          font-size: 1.1rem; 
          border-radius: 10px; 
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #0F0A06; 
          font-family: inherit; 
          color: #FFFFFF; 
          transition: all 0.2s ease;
        }
        .chat-input:focus { outline: none; border-color: #D4AF37; background: #17100B; box-shadow: inset 0 1px 8px rgba(0,0,0,0.5); }
        
        .send-btn { 
          background: #7B1C2E; 
          color: white; 
          border: none; 
          padding: 0 2rem; 
          border-radius: 10px; 
          font-family: 'Arial', sans-serif;
          font-weight: 700; 
          cursor: pointer; 
          font-size: 1rem;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(123, 28, 46, 0.3);
        }
        .send-btn:hover { background: #942135; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(123, 28, 46, 0.4); }
        .send-btn:disabled { background: #221A16; color: #55433B; cursor: not-allowed; transform: none; box-shadow: none; }
        
        .sqa-loading { text-align: center; color: #F59E0B; font-weight: 400; font-style: italic; font-size: 1.15rem; padding: 0.5rem; }
        .sqa-error { color: #FF8A8A; background: rgba(123, 28, 46, 0.15); border: 1px solid rgba(123, 28, 46, 0.4); padding: 1rem; border-radius: 10px; font-weight: bold; margin-bottom: 1rem; text-align: center; width: 100%; box-sizing: border-box; font-family: 'Arial', sans-serif; font-size: 0.9rem; }
        
        .global-audio-banner { 
          display: flex; 
          justify-content: space-between; 
          background: #140E0A; 
          color: #D4AF37; 
          padding: 0.9rem 1.4rem; 
          border-radius: 12px; 
          font-size: 0.95rem; 
          font-family: 'Arial', sans-serif;
          font-weight: 700; 
          margin-bottom: 1.5rem; 
          align-items: center; 
          border: 1px solid rgba(123, 28, 46, 0.3);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          width: 100%;
          box-sizing: border-box;
        }
        .global-stop-btn { background: #7B1C2E; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: bold; transition: background 0.2s; font-size: 0.85rem; }
        .global-stop-btn:hover { background: #942135; }
      `}</style>

      <div className="sqa-container">
        <div className="sqa-header">
          <h1>🕊️ Pastoral Q&A Counsel</h1>
          <p>Bring your heart before the Word in continuous conversation</p>
        </div>

        {error && <div className="sqa-error">⚠️ {error}</div>}

        {isSpeaking && (
          <div className="global-audio-banner">
            <span>🔊 Reading active counsel out loud...</span>
            <button className="global-stop-btn" onClick={stopSpeaking}>Stop Voice</button>
          </div>
        )}

        <div className="chat-box">
          {chatHistory.length === 0 && (
            <div className="sqa-intro-card">
              <p className="sqa-intro-icon">📖</p>
              <p className="sqa-intro-quote">
                "Come to me, all you who are weary and burdened, and I will give you rest."
              </p>
              <p className="sqa-intro-subtext">Open your heart and speak plainly below...</p>
            </div>
          )}

          {chatHistory.map((msg, index) => (
            <div key={index} className={`message-bubble ${msg.role === 'user' ? 'user-bubble' : 'assistant-bubble'}`}>
              <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{msg.content}</p>
              
              {msg.role === 'assistant' && (
                <button className="voice-action-btn" onClick={() => speakResponse(msg.content)}>
                  🔊 Replay Audio
                </button>
              )}
            </div>
          ))}

          {loading && (
            <div className="sqa-loading">
              ✨ The Pastor is reflecting and seeking scripture...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="chat-form">
          <input 
            type="text" 
            className="chat-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Speak plainly about what's on your mind..."
            disabled={loading}
          />
          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}