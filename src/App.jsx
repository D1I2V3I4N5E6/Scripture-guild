import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Core Layout components
import Navbar         from './components/Navbar'
import Footer         from './components/Footer'
import RoyalVoiceGuide from './components/RoyalVoiceGuide'

// Page components
import HomePage       from './pages/HomePage' 
import Login          from './Login'

// Component-based views
import VerseDeepDive  from './components/VerseDeepDive'
import ScriptureQA    from './components/ScriptureQA'
import Devotionals    from './components/Devotionals' 
import PrayerGuild    from './components/PrayerGuild' 
import FaithGames     from './components/FaithGames'
import AboutSanctuary from './components/AboutSanctuary'
import GrowthDashboard from './components/GrowthDashboard'
import DailyGainsNotebook from './components/DailyGainsNotebook' // ◄ Added this line

function AppShell() {
  return (
    <div className="app-shell">
      {/* ── Invisible Royal Voice Guide Narrator ── */}
      <RoyalVoiceGuide />

      {/* ── Top Primary Navbar ── */}
      <Navbar />

      {/* ── Main Router Pages Display Container ── */}
      <main className="app-main">
        <Routes>
          {/* Main Direct Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/bible-study" element={<VerseDeepDive />} /> 
          <Route path="/devotionals" element={<Devotionals />} /> 
          <Route path="/dashboard" element={<GrowthDashboard />} />
          <Route path="/notebook" element={<DailyGainsNotebook />} /> {/* ◄ Added this route */}
          <Route path="/games" element={<FaithGames />} />
          <Route path="/ask" element={<ScriptureQA />} />
          <Route path="/prayer" element={<PrayerGuild />} /> 
          <Route path="/about" element={<AboutSanctuary />} />
          <Route path="/login" element={<Login />} />
          
          {/* Temporary fallbacks for optional sub-pages */}
          <Route path="/demo" element={<div style={{ padding: '40px', textAlign: 'center', color: '#1A0F02' }}><h2>Demo Coming Soon!</h2></div>} />
          <Route path="/how-it-works" element={<div style={{ padding: '40px', textAlign: 'center', color: '#1A0F02' }}><h2>How it Works Coming Soon!</h2></div>} />

          {/* Catch-all: If a path doesn't match anything above, send them back to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter 
      future={{ 
        v7_startTransition: true, 
        v7_relativeSplatPath: true 
      }}
    >
      <AppShell />
    </BrowserRouter>
  )
}