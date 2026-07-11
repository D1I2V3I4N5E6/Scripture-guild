/**
 * main.jsx — React DOM Entry Point
 *
 * This is the first JavaScript file executed by the browser.
 * It mounts the root <App /> component into the #root div
 * defined in index.html.
 *
 * React.StrictMode is enabled to surface potential issues
 * during development (does not affect production builds).
 * It intentionally double-invokes some functions to help
 * you catch side-effects and deprecated API usage early.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
