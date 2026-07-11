import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ── Majestic Script For Every Page ───────────────────────────
const ROYAL_SCRIPTS = {
  '/': "Welcome, honored seeker, to the Grand Citadel of Scripture Guild. Here, you may anchor your soul with our dynamic daily highlights or embark upon our sacred study tracks.",
  '/bible-study': "You have entered the Chamber of Deep Reflection. Here, we break down the complexities of scripture, offering you pristine clarity on every chapter.",
  '/ask': "Welcome to the Sanctuary of Divine Counsel. Speak plainly of whatever burdens your heart, and receive instant, scripture-rooted wisdom.",
  '/devotionals': "Welcome to the Courts of Daily Devotion. Pause, breathe, and ground your spirit in short, powerful reflections designed to bring you ultimate peace.",
  '/prayer': "Welcome to the Sacred Prayer Guilds. You stand among a devoted fellowship of believers. Leave your requests here, or lift up another soul in prayer.",
  '/games': "Welcome to the Arena of Joyful Faith. Here, you may reinforce sacred truths through delightful scripture matching and holy quizzes.",
  '/dashboard': "Welcome to your Personal Growth Chronicle. Look upon your spiritual milestones, active streaks, and the faithful path you have trodden.",
  '/about': "Welcome to the Sanctuary Chronicles. Discover the vision, the heart, and the divine purpose that brought Scripture Guild into existence.",
  '/login': "Welcome to the Gates of Access. Please present your credentials to enter your personal chamber."
};

export default function RoyalVoiceGuide() {
  const location = useLocation();

  useEffect(() => {
    // 1. Immediately silence any existing voice when the page changes
    window.speechSynthesis.cancel();

    // 2. Lookup the royal greeting for the current path
    const script = ROYAL_SCRIPTS[location.pathname];
    
    if (script) {
      // 3. Configure the royal voice text
      const utterance = new SpeechSynthesisUtterance(script);

      // 4. Find a premium, rich sounding voice if available in the browser
      const voices = window.speechSynthesis.getVoices();
      
      // Try to find Google UK English Male/Female or Microsoft natural voices for a royal/classic accent
      const premiumVoice = voices.find(v => 
        v.name.includes('Google UK English') || 
        v.name.includes('Natural') || 
        v.name.includes('Great Britain') ||
        v.lang.startsWith('en-GB')
      );

      if (premiumVoice) {
        utterance.voice = premiumVoice;
      }

      // 5. Adjust tone parameters for maximum prestige
      utterance.rate = 0.92;  // Slightly slower pace to sound deliberate and elegant
      utterance.pitch = 1.05; // Balanced, clear tone

      // 6. Speak!
      window.speechSynthesis.speak(utterance);
    }

    // Cleanup: shut up immediately if the user clicks away or closes the tab
    return () => window.speechSynthesis.cancel();
  }, [location.pathname]);

  // This component doesn't need to render any HTML elements; it is an invisible guide!
  return null;
}