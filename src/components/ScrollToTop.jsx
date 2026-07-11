/**
 * ScrollToTop.jsx — Automatic Scroll Reset on Navigation
 *
 * Problem this solves:
 *   React Router swaps page content without a full page reload.
 *   This means if a user scrolls down on one page, then navigates
 *   to another page, they land mid-page rather than at the top.
 *
 * Solution:
 *   This component watches the URL pathname using useLocation().
 *   Every time the pathname changes (i.e. the user navigates to a
 *   new route), it calls window.scrollTo(0, 0) to reset the scroll
 *   position to the top of the page.
 *
 * Usage:
 *   Place <ScrollToTop /> inside <BrowserRouter> but outside <Routes>
 *   in App.jsx. It renders nothing — it's purely a behaviour hook.
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to the very top of the page on every route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname]) // Re-run this effect whenever the route changes

  // This component renders no visible output
  return null
}
