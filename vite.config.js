/**
 * vite.config.js — Scripture Guild Build Configuration
 *
 * BASE PATH GUIDE:
 * ─────────────────────────────────────────────────────────────────
 * The `base` option controls the root URL prefix for all generated
 * asset URLs (JS, CSS, images) in the production build.
 *
 * ✅ Netlify / Vercel  →  base: '/'
 *    These platforms serve your site from the domain root.
 *    React Router BrowserRouter works perfectly here.
 *
 * ✅ GitHub Pages (subdirectory)  →  base: '/scripture-guild/'
 *    Replace 'scripture-guild' with your exact GitHub repo name.
 *    Also switch App.jsx to use HashRouter for full compatibility.
 *
 * ✅ Custom subdirectory  →  base: '/your-subfolder/'
 *    Use this if your hosting places the app inside a subfolder.
 *
 * ENVIRONMENT VARIABLE OVERRIDE:
 *    Set VITE_BASE_PATH in your CI/CD pipeline to change the base
 *    without editing this file.
 *    Example: VITE_BASE_PATH=/scripture-guild/ npm run build
 * ─────────────────────────────────────────────────────────────────
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  /**
   * base — The public base path for the app.
   * Reads from the VITE_BASE_PATH environment variable if set,
   * otherwise defaults to '/' (root — correct for Netlify & Vercel).
   */
  base: process.env.VITE_BASE_PATH || '/',

  build: {
    /**
     * outDir — Where the production build is written.
     * Default is 'dist'. Deploy this folder to your hosting platform.
     */
    outDir: 'dist',

    /**
     * sourcemap — Set to true if you want source maps in production
     * for easier debugging. Set to false for smaller bundle size.
     */
    sourcemap: false,

    /**
     * rollupOptions — Advanced bundling configuration.
     * manualChunks splits vendor libraries into a separate chunk
     * so browsers can cache React independently from your app code.
     */
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunk for better browser caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },

  server: {
    /**
     * port — Local dev server port.
     * Change this if 5173 conflicts with another process.
     */
    port: 5173,

    /**
     * open — Automatically open the browser when dev server starts.
     * Set to false if you prefer to open it manually.
     */
    open: true,
  },

  preview: {
    /**
     * port — Port used by `npm run preview` (serves dist/ locally).
     * Visit http://localhost:4173 after running `npm run preview`.
     */
    port: 4173,
  },
});
