import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ◄ FIXED: Points inside the components folder using your exact sidebar spelling
import { supabase } from "./components/supabaseClient";
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  // Handle User Registration (Sign Up)
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Success! Check your email for the confirmation link.' });
    }
  };

  // Handle User Authentication (Sign In)
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Welcome back! Redirecting...' });
      setTimeout(() => navigate('/dashboard'), 1500); 
    }
  };

  return (
    <div className="login-root">
      <style>{`
        .login-root {
          font-family: 'Georgia', serif;
          background: #0A0F1D;
          color: #FFF4D4;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .login-card {
          background: #131F35;
          padding: 2.5rem;
          border-radius: 16px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          border-top: 5px solid #E5C158;
        }
        .login-card h2 { color: #E5C158; text-align: center; margin-bottom: 1.5rem; font-weight: 900; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label { display: block; margin-bottom: 0.4rem; color: #8FA3C4; font-size: 0.9rem; }
        .form-group input {
          width: 100%; padding: 0.8rem; border-radius: 8px; border: 1px solid #1F3354;
          background: #0A0F1D; color: #FFFFFF; font-size: 1rem; box-sizing: border-box;
        }
        .form-group input:focus { outline: none; border-color: #E5C158; }
        .btn-group { display: flex; gap: 1rem; margin-top: 1.5rem; }
        .login-btn {
          flex: 1; padding: 0.8rem; border: none; border-radius: 8px; font-weight: bold;
          cursor: pointer; transition: background 0.2s; font-size: 1rem;
        }
        .primary-btn { background: #7B1C2E; color: white; }
        .primary-btn:hover { background: #5A1421; }
        .secondary-btn { background: transparent; color: #E5C158; border: 1px solid #E5C158; }
        .secondary-btn:hover { background: rgba(229, 193, 88, 0.05); }
        .msg-banner { padding: 0.8rem; border-radius: 6px; margin-bottom: 1.2rem; text-align: center; font-size: 0.95rem; }
        .msg-error { background: rgba(220,53,69,0.15); color: #f87171; border: 1px solid #dc3545; }
        .msg-success { background: rgba(40,167,69,0.15); color: #5dd879; border: 1px solid #28a745; }
      `}</style>

      <div className="login-card">
        <h2>Sanctuary Gateway</h2>
        
        {message.text && (
          <div className={`msg-banner msg-${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="btn-group">
            <button 
              type="button" 
              className="login-btn primary-btn" 
              disabled={loading}
              onClick={handleSignIn}
            >
              {loading ? 'Entering...' : 'Sign In'}
            </button>
            <button 
              type="button" 
              className="login-btn secondary-btn" 
              disabled={loading}
              onClick={handleSignUp}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}