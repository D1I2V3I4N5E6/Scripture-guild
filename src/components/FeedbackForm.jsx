import React, { useState } from 'react';

/**
 * FeedbackForm — Newsletter / Account sign-up form for ScriptureGuide.
 * On submission the form fades out and a warm, animated confirmation
 * panel fades in with a Bible verse, next-step links, and extra info.
 */

// ── Static data ────────────────────────────────────────────────────────────────
const ENCOURAGEMENT_VERSE = {
  text: '\u201cYour word is a lamp to my feet and a light to my path.\u201d',
  reference: '\u2014 Psalm 119:105',
};

const NEXT_STEPS = [
  { label: '\ud83d\udcd6 Start Reading Today',        href: '/bible-study' },
  { label: '\ud83d\udcda Explore Bible Study Guides', href: '/bible-study' },
  { label: '\u2600\ufe0f  View Daily Devotions',       href: '/devotional' },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function FeedbackForm() {
  // Form field state
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [type,    setType]    = useState('newsletter'); // 'newsletter' | 'account'
  const [message, setMessage] = useState('');

  // UI state
  const [submitted,  setSubmitted]  = useState(false);
  const [fadingOut,  setFadingOut]  = useState(false);  // triggers form fade-out
  const [showCheck,  setShowCheck]  = useState(false);  // drives check animation
  const [errors,     setErrors]     = useState({});

  // ── Validation ────────────────────────────────────────────────────────────
  function validate() {
    const errs = {};
    if (!name.trim())                         errs.name    = 'Please enter your name.';
    if (!email.trim())                        errs.email   = 'Please enter your email.';
    else if (!/\S+@\S+\.\S+/.test(email))    errs.email   = 'Please enter a valid email.';
    return errs;
  }

  // ── Submit handler ────────────────────────────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // 1. Start fade-out of the form
    setFadingOut(true);

    // 2. After the CSS transition completes, swap to success panel
    setTimeout(() => {
      setSubmitted(true);
      setFadingOut(false);
      // 3. Short delay then trigger check-mark pop animation
      setTimeout(() => setShowCheck(true), 80);
    }, 500);
  }

  // ── Render: Success panel ─────────────────────────────────────────────────
  if (submitted) {
    return (
      <section className="ff-success-wrapper" aria-live="polite">
        {/* Soft radial background glow */}
        <div className="ff-glow" aria-hidden="true" />

        <div className="ff-success-panel">
          {/* Animated checkmark */}
          <div className={`ff-check-circle ${showCheck ? 'ff-check-circle--visible' : ''}`}
               role="img" aria-label="Success checkmark">
            <svg viewBox="0 0 52 52" className="ff-checkmark-svg" aria-hidden="true">
              <circle className="ff-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path  className="ff-checkmark-path"   fill="none"
                     d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="ff-success-heading">
            Thank you for joining ScriptureGuide,&nbsp;{name}!
          </h2>
          <p className="ff-success-sub">
            May God guide your journey as you grow deeper in His Word.
          </p>

          {/* Extra info based on form type */}
          <div className="ff-extra-info">
            {type === 'newsletter' && (
              <p>\ud83d\udce7 <strong>Check your email</strong> for your welcome message.</p>
            )}
            {type === 'account' && (
              <p>\ud83d\udcda <strong>Your free study guide</strong> is ready to download.</p>
            )}
          </div>

          {/* Bible verse */}
          <blockquote className="ff-verse">
            <p className="ff-verse-text">{ENCOURAGEMENT_VERSE.text}</p>
            <footer className="ff-verse-ref">{ENCOURAGEMENT_VERSE.reference}</footer>
          </blockquote>

          {/* Next-step links */}
          <div className="ff-next-steps">
            <p className="ff-next-label">Where would you like to go next?</p>
            <div className="ff-next-buttons">
              {NEXT_STEPS.map((step) => (
                <a key={step.href} href={step.href} className="ff-next-btn">
                  {step.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Render: Form ──────────────────────────────────────────────────────────
  return (
    <section className={`ff-form-wrapper ${fadingOut ? 'ff-form-wrapper--fading' : ''}`}>
      <div className="ff-form-card">
        <h2 className="ff-form-heading">Join the ScriptureGuide Community</h2>
        <p className="ff-form-intro">
          Sign up to receive daily devotionals, Bible study guides, and
          encouragement straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} noValidate className="ff-form">
          {/* Sign-up type selector */}
          <fieldset className="ff-fieldset">
            <legend className="ff-legend">I want to&hellip;</legend>
            <label className="ff-radio-label">
              <input type="radio" name="type" value="newsletter"
                     checked={type === 'newsletter'}
                     onChange={() => setType('newsletter')} />
              &nbsp;Subscribe to the newsletter
            </label>
            <label className="ff-radio-label">
              <input type="radio" name="type" value="account"
                     checked={type === 'account'}
                     onChange={() => setType('account')} />
              &nbsp;Create a free account
            </label>
          </fieldset>

          {/* Name */}
          <div className="ff-field">
            <label htmlFor="ff-name" className="ff-label">Full Name</label>
            <input
              id="ff-name"
              type="text"
              className={`ff-input ${errors.name ? 'ff-input--error' : ''}`}
              placeholder="e.g. Grace Abounding"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: '' })); }}
            />
            {errors.name && <span className="ff-error">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="ff-field">
            <label htmlFor="ff-email" className="ff-label">Email Address</label>
            <input
              id="ff-email"
              type="email"
              className={`ff-input ${errors.email ? 'ff-input--error' : ''}`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: '' })); }}
            />
            {errors.email && <span className="ff-error">{errors.email}</span>}
          </div>

          {/* Optional message */}
          <div className="ff-field">
            <label htmlFor="ff-message" className="ff-label">
              A prayer request or message&nbsp;<span className="ff-optional">(optional)</span>
            </label>
            <textarea
              id="ff-message"
              className="ff-textarea"
              rows={4}
              placeholder="Share what's on your heart…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="ff-submit-btn">
            Join ScriptureGuide \u2192
          </button>
        </form>
      </div>
    </section>
  );
}
