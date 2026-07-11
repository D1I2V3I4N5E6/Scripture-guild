import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

/* ═══════════════════════════════════════════════════════════════
   FeedbackPage — Contact & Feedback Page
   Allows visitors to get in touch with Divinegift Morris directly
   via email link or the contact form below.
═══════════════════════════════════════════════════════════════ */

export default function FeedbackPage() {
  // ── Form state ────────────────────────────────────────────────
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'verse-question',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState({})

  // ── Field change handler ───────────────────────────────────────
  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // ── Validation ────────────────────────────────────────────────
  function validate() {
    const newErrors = {}
    if (!formData.name.trim())    newErrors.name    = 'Please enter your name.'
    if (!formData.email.trim())   newErrors.email   = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  newErrors.email   = 'Please enter a valid email address.'
    if (!formData.message.trim()) newErrors.message = 'Please write your message before sending.'
    return newErrors
  }

  // ── Submit handler ────────────────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault()
    const foundErrors = validate()
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
      return
    }
    // Static site — no backend. Simulate submission success.
    setSubmitted(true)
    setFormData({ name: '', email: '', type: 'verse-question', message: '' })
    setErrors({})
  }

  // ── Message type options ──────────────────────────────────────
  const messageTypes = [
    { value: 'verse-question',   label: '📖  I have a question about a verse' },
    { value: 'topic-suggestion', label: '💡  I want to suggest a topic to explain' },
    { value: 'reading-plan',     label: '📅  I want to suggest a reading plan' },
    { value: 'helpful-post',     label: '🙌  A post helped me — I want to share' },
    { value: 'confusing-post',   label: '🤔  Something confused me — I want to flag it' },
    { value: 'typo-error',       label: '✏️  I found a typo or error' },
    { value: 'other',            label: '✉️  Something else' },
  ]

  return (
    <>
      <Navbar />

      <main className="feedback-page">

        {/* ── Page Hero ──────────────────────────────────────────── */}
        <section className="feedback-hero">
          <div className="feedback-hero-inner">
            <span className="feedback-hero-label">Contact</span>
            <h1 className="feedback-hero-title">Get in Touch</h1>
            <p className="feedback-hero-sub">
              Have a question about a verse? Found a typo? Want to suggest a topic?{' '}
              <strong>I read every message.</strong>
            </p>
          </div>
        </section>

        <div className="feedback-layout">

          {/* ── Left Column — Info ───────────────────────────────── */}
          <aside className="feedback-info">

            {/* Direct email */}
            <div className="feedback-contact-card">
              <div className="fcc-icon">✉️</div>
              <h2 className="fcc-heading">Email Me Directly</h2>
              <p className="fcc-body">
                The fastest way to reach me. I reply to every message within&nbsp;3&nbsp;days.
              </p>
              <a
                href="mailto:morrdivinegift@gmail.com"
                className="fcc-email-link"
              >
                morrdivinegift@gmail.com
              </a>
            </div>

            {/* What you can send */}
            <div className="feedback-what-card">
              <h3 className="fwc-heading">You're welcome to send me…</h3>
              <ul className="fwc-list">
                <li>
                  <span className="fwc-icon">📖</span>
                  Verses or topics you'd like explained
                </li>
                <li>
                  <span className="fwc-icon">💬</span>
                  Feedback on posts that helped — or confused — you
                </li>
                <li>
                  <span className="fwc-icon">📅</span>
                  Suggestions for reading plans
                </li>
                <li>
                  <span className="fwc-icon">✏️</span>
                  Typos or errors you've spotted
                </li>
                <li>
                  <span className="fwc-icon">🙏</span>
                  Prayer requests or encouragements
                </li>
              </ul>
            </div>

            {/* Reply notice */}
            <div className="feedback-reply-notice">
              <span className="frn-icon">⏱️</span>
              <p>
                I can't reply to everyone instantly, but I reply to
                <strong> every message within 3 days.</strong> Your words matter to me.
              </p>
            </div>

            {/* Future plans */}
            <div className="feedback-future-card">
              <h3 className="ffc-heading">🔭 Coming Soon</h3>
              <ul className="ffc-list">
                <li>
                  <span className="ffc-badge">Audio</span>
                  Audio versions so you can <em>listen</em> to each devotional
                </li>
                <li>
                  <span className="ffc-badge">Community</span>
                  An open section where readers share how a verse changed them
                </li>
              </ul>
              <p className="ffc-note">
                Your feedback helps shape these features — every message you send
                brings ScriptureGuide one step closer to what it can become.
              </p>
            </div>

          </aside>

          {/* ── Right Column — Form ──────────────────────────────── */}
          <section className="feedback-form-section">

            {submitted ? (
              /* Success state */
              <div className="feedback-success">
                <div className="fs-icon">🙏</div>
                <h2 className="fs-title">Message Received!</h2>
                <p className="fs-body">
                  Thank you for reaching out. I read every message personally and
                  will get back to you within&nbsp;3&nbsp;days. May God bless you.
                </p>
                <button
                  className="fs-reset-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Contact form */
              <form
                className="feedback-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <h2 className="ff-title">Send a Message</h2>
                <p className="ff-subtitle">
                  Use the form below — every field helps me give you the best reply.
                </p>

                {/* Name */}
                <div className={`ff-field ${errors.name ? 'ff-field--error' : ''}`}>
                  <label className="ff-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="ff-input"
                    placeholder="e.g. Sarah"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                  {errors.name && <span className="ff-error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className={`ff-field ${errors.email ? 'ff-field--error' : ''}`}>
                  <label className="ff-label" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="ff-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <span className="ff-error">{errors.email}</span>}
                </div>

                {/* Message type */}
                <div className="ff-field">
                  <label className="ff-label" htmlFor="type">What are you sending?</label>
                  <select
                    id="type"
                    name="type"
                    className="ff-select"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    {messageTypes.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className={`ff-field ${errors.message ? 'ff-field--error' : ''}`}>
                  <label className="ff-label" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="ff-textarea"
                    rows={6}
                    placeholder="Write your verse question, topic idea, feedback, or anything on your heart..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="ff-error">{errors.message}</span>}
                  <span className="ff-char-count">{formData.message.length} characters</span>
                </div>

                {/* Submit */}
                <button type="submit" className="ff-submit-btn">
                  Send Message ✉️
                </button>

                <p className="ff-footer-note">
                  By sending this form you agree that your message will be read by
                  Divinegift Morris only. No data is stored on any server.
                </p>
              </form>
            )}

          </section>
        </div>

        {/* ── Bottom Scripture ─────────────────────────────────── */}
        <section className="feedback-verse-banner">
          <blockquote className="fvb-quote">
            "Let your speech always be gracious, seasoned with salt, so that you
            may know how you ought to answer each person."
          </blockquote>
          <cite className="fvb-cite">— Colossians 4:6 (ESV)</cite>
        </section>

      </main>

      <Footer />

      {/* ── Page-scoped styles ──────────────────────────────────── */}
      <style>{`
        /* ── Page wrapper ─────────────────────────────────────── */
        .feedback-page {
          min-height: 100vh;
          background: var(--color-bg, #fdf8f2);
          color: var(--color-text, #2c1a0e);
          font-family: var(--font-body, 'Georgia', serif);
        }

        /* ── Hero ─────────────────────────────────────────────── */
        .feedback-hero {
          background: linear-gradient(135deg, #5c1a2e 0%, #7a2240 60%, #9b3a5a 100%);
          color: #fff;
          padding: 72px 24px 56px;
          text-align: center;
        }
        .feedback-hero-inner {
          max-width: 640px;
          margin: 0 auto;
        }
        .feedback-hero-label {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          color: #f5d78e;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .feedback-hero-title {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          margin: 0 0 16px;
          line-height: 1.2;
        }
        .feedback-hero-sub {
          font-size: 1.08rem;
          line-height: 1.7;
          opacity: 0.92;
          margin: 0;
        }

        /* ── Two-column layout ────────────────────────────────── */
        .feedback-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 24px;
          align-items: start;
        }
        @media (max-width: 820px) {
          .feedback-layout {
            grid-template-columns: 1fr;
          }
        }

        /* ── Info column ─────────────────────────────────────── */
        .feedback-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Contact card */
        .feedback-contact-card {
          background: #fff;
          border: 1px solid #e8d5c0;
          border-radius: 14px;
          padding: 28px 24px;
          box-shadow: 0 2px 12px rgba(92,26,46,0.07);
          text-align: center;
        }
        .fcc-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .fcc-heading {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: 1.18rem;
          font-weight: 700;
          color: #5c1a2e;
          margin: 0 0 8px;
        }
        .fcc-body {
          font-size: 0.93rem;
          line-height: 1.6;
          color: #5a3e2b;
          margin: 0 0 14px;
        }
        .fcc-email-link {
          display: inline-block;
          color: #5c1a2e;
          font-weight: 700;
          font-size: 0.97rem;
          text-decoration: underline;
          word-break: break-all;
          transition: color 0.2s;
        }
        .fcc-email-link:hover {
          color: #c0a020;
        }

        /* What-to-send card */
        .feedback-what-card {
          background: #fff;
          border: 1px solid #e8d5c0;
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 2px 12px rgba(92,26,46,0.07);
        }
        .fwc-heading {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: 1.05rem;
          font-weight: 700;
          color: #5c1a2e;
          margin: 0 0 14px;
        }
        .fwc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .fwc-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.93rem;
          line-height: 1.5;
          color: #3d2010;
        }
        .fwc-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Reply notice */
        .feedback-reply-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #fef9ec;
          border: 1px solid #e8c84a;
          border-radius: 10px;
          padding: 16px 18px;
        }
        .frn-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .feedback-reply-notice p {
          margin: 0;
          font-size: 0.91rem;
          line-height: 1.6;
          color: #5a3e2b;
        }

        /* Future plans card */
        .feedback-future-card {
          background: linear-gradient(135deg, #fdf3fb 0%, #f9f0ff 100%);
          border: 1px solid #d4b8e8;
          border-radius: 14px;
          padding: 24px;
        }
        .ffc-heading {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: 1.05rem;
          font-weight: 700;
          color: #5c1a2e;
          margin: 0 0 14px;
        }
        .ffc-list {
          list-style: none;
          padding: 0;
          margin: 0 0 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ffc-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.91rem;
          line-height: 1.5;
          color: #3d2010;
        }
        .ffc-badge {
          display: inline-block;
          background: #5c1a2e;
          color: #f5d78e;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 2px 9px;
          border-radius: 10px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ffc-note {
          margin: 0;
          font-size: 0.86rem;
          color: #6b4c6e;
          line-height: 1.6;
          font-style: italic;
        }

        /* ── Form section ─────────────────────────────────────── */
        .feedback-form-section {
          background: #fff;
          border: 1px solid #e8d5c0;
          border-radius: 16px;
          padding: 40px 36px;
          box-shadow: 0 4px 24px rgba(92,26,46,0.08);
        }
        @media (max-width: 560px) {
          .feedback-form-section {
            padding: 28px 18px;
          }
        }

        /* Form header */
        .ff-title {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: 1.45rem;
          font-weight: 700;
          color: #5c1a2e;
          margin: 0 0 6px;
        }
        .ff-subtitle {
          font-size: 0.92rem;
          color: #7a5c42;
          margin: 0 0 28px;
          line-height: 1.6;
        }

        /* Fields */
        .ff-field {
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ff-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #3d2010;
          letter-spacing: 0.02em;
        }
        .ff-input,
        .ff-select,
        .ff-textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #d4b89a;
          border-radius: 8px;
          font-size: 0.95rem;
          font-family: inherit;
          color: #2c1a0e;
          background: #fdf8f2;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .ff-input:focus,
        .ff-select:focus,
        .ff-textarea:focus {
          outline: none;
          border-color: #5c1a2e;
          box-shadow: 0 0 0 3px rgba(92,26,46,0.1);
          background: #fff;
        }
        .ff-textarea {
          resize: vertical;
          min-height: 130px;
        }
        .ff-field--error .ff-input,
        .ff-field--error .ff-textarea {
          border-color: #c0392b;
        }
        .ff-error {
          font-size: 0.82rem;
          color: #c0392b;
          font-weight: 600;
        }
        .ff-char-count {
          font-size: 0.79rem;
          color: #9a7a60;
          text-align: right;
          margin-top: 2px;
        }

        /* Submit button */
        .ff-submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #5c1a2e 0%, #7a2240 100%);
          color: #f5d78e;
          font-size: 1rem;
          font-weight: 700;
          font-family: inherit;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: transform 0.15s, box-shadow 0.15s;
          margin-bottom: 14px;
        }
        .ff-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(92,26,46,0.25);
        }
        .ff-submit-btn:active {
          transform: translateY(0);
        }
        .ff-footer-note {
          font-size: 0.78rem;
          color: #9a7a60;
          text-align: center;
          margin: 0;
          line-height: 1.5;
        }

        /* ── Success state ────────────────────────────────────── */
        .feedback-success {
          text-align: center;
          padding: 32px 16px;
        }
        .fs-icon {
          font-size: 3.5rem;
          margin-bottom: 16px;
        }
        .fs-title {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: 1.7rem;
          font-weight: 700;
          color: #5c1a2e;
          margin: 0 0 12px;
        }
        .fs-body {
          font-size: 1rem;
          line-height: 1.7;
          color: #5a3e2b;
          max-width: 420px;
          margin: 0 auto 28px;
        }
        .fs-reset-btn {
          padding: 12px 28px;
          background: transparent;
          border: 2px solid #5c1a2e;
          color: #5c1a2e;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: inherit;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .fs-reset-btn:hover {
          background: #5c1a2e;
          color: #f5d78e;
        }

        /* ── Bottom verse banner ──────────────────────────────── */
        .feedback-verse-banner {
          background: #5c1a2e;
          color: #fff;
          text-align: center;
          padding: 52px 24px;
        }
        .fvb-quote {
          font-family: var(--font-heading, 'Georgia', serif);
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          font-style: italic;
          line-height: 1.8;
          max-width: 680px;
          margin: 0 auto 12px;
          opacity: 0.95;
          border: none;
          padding: 0;
        }
        .fvb-cite {
          font-size: 0.88rem;
          color: #f5d78e;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
      `}</style>
    </>
  )
}
