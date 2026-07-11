# Scripture Guild — Interactive Christian Faith Platform

## Site Name
**Scripture Guild**

## Purpose
Scripture Guild is an interactive Christian platform designed to help believers understand God's Word more deeply through structured Bible study, AI-powered Q&A, faith-based games, daily devotionals, prayer guilds, and a spiritual growth dashboard — all in one place, with a focus on clarity and real-life application of Scripture.

## Audience
New believers, mature Christians, small group leaders, young adults, and all denominations seeking structured, engaging, and clear faith-growth resources.

---

## Tech Stack
- **React 18** — UI library (functional components + hooks)
- **React Router v6** — client-side routing (BrowserRouter)
- **Vite 5** — dev server and production build tool
- **Plain CSS** — styles in `src/index.css` and component-level styles
- **No database / No external API** — fully static, deployable to any CDN

---

## Project Structure

```
scripture-guild/
├── public/                  # Static assets (favicon, og-image, etc.)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageWrapper.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── LessonCard.jsx
│   │   ├── DevotionalCard.jsx
│   │   ├── GameCard.jsx
│   │   ├── PrayerCard.jsx
│   │   ├── VerseBlock.jsx
│   │   ├── ReflectionBox.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── StreakTracker.jsx
│   │   ├── ProgressIndicator.jsx
│   │   ├── SuggestedNext.jsx
│   │   ├── GuildMemberBadge.jsx
│   │   ├── QAInterface.jsx
│   │   ├── PrayerForm.jsx
│   │   ├── FeedbackForm.jsx
│   │   ├── QuizGame.jsx
│   │   ├── MatchGame.jsx
│   │   ├── StudyTrackList.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SearchResults.jsx
│   │   ├── TopicTagCloud.jsx
│   │   ├── DailyVerseWidget.jsx
│   │   └── FeedbackList.jsx
│   ├── pages/               # One file per route/page
│   │   ├── HomePage.jsx
│   │   ├── BibleStudyPage.jsx
│   │   ├── LessonDetailPage.jsx
│   │   ├── AIQAPage.jsx
│   │   ├── GamesPage.jsx
│   │   ├── GameDetailPage.jsx
│   │   ├── DevotionalPage.jsx
│   │   ├── DevotionalDetailPage.jsx
│   │   ├── PrayerPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── SearchPage.jsx
│   │   ├── FeedbackPage.jsx
│   │   └── AboutPage.jsx
│   ├── data/                # Static JSON / JS data files
│   ├── App.jsx              # Root component — BrowserRouter + Routes
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global stylesheet
├── index.html               # HTML shell
├── vite.config.js           # Vite build configuration
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone or Unzip the Project

**Option A — Clone from GitHub:**
```bash
git clone https://github.com/your-username/scripture-guild.git
cd scripture-guild
```

**Option B — Unzip downloaded archive:**
```bash
unzip scripture-guild.zip
cd scripture-guild
```

---

### 2. Install Dependencies

Make sure you have **Node.js v18+** installed. Then run:

```bash
npm install
```

This installs React, React Router, Vite, and all other packages listed in `package.json`.

---

### 3. Start the Local Development Server

```bash
npm run dev
```

Vite will start a local server. Open your browser and visit:

```
http://localhost:5173
```

The server supports **Hot Module Replacement (HMR)** — your browser will automatically reflect changes as you edit files.

---

### 4. Build for Production

```bash
npm run build
```

Vite compiles and bundles the app into the `dist/` folder. This output is fully static — just HTML, CSS, and JavaScript files — ready to be uploaded to any hosting platform.

To preview the production build locally before deploying:

```bash
npm run preview
```

This serves the `dist/` folder at `http://localhost:4173`.

---

### 5. Deploy

The `dist/` folder produced by `npm run build` is your deployable artifact. Choose any of the platforms below:

---

#### ✅ Option A — Netlify (Recommended)

**Drag-and-drop (no CLI needed):**
1. Run `npm run build`
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the entire `dist/` folder onto the page
4. Netlify gives you a live URL instantly

**Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Important — React Router fix for Netlify:**
Create a file `public/_redirects` with this single line:
```
/*    /index.html   200
```
This tells Netlify to route all URLs to React so React Router can handle them.

---

#### ✅ Option B — Vercel

```bash
npm install -g vercel
npm run build
vercel --prod
```

Vercel auto-detects Vite projects. React Router works out of the box.

Alternatively, connect your GitHub repo in the Vercel dashboard and it will deploy automatically on every push.

---

#### ✅ Option C — GitHub Pages

1. Open `vite.config.js` and set the `base` option to your repository name:
   ```js
   base: '/scripture-guild/',
   ```
2. Run `npm run build`
3. Push the `dist/` contents to the `gh-pages` branch:
   ```bash
   npm install -g gh-pages
   npx gh-pages -d dist
   ```
4. In your GitHub repo → **Settings → Pages**, set the source to the `gh-pages` branch.

**Important — React Router fix for GitHub Pages:**
BrowserRouter does not work with GitHub Pages without extra configuration. Either:
- Use `HashRouter` instead of `BrowserRouter` in `App.jsx`, **or**
- Add a custom `404.html` redirect script (search "spa github pages redirect")

---

## Environment Notes

| Variable | Purpose |
|---|---|
| `VITE_BASE_PATH` | Optional: override the `base` path at build time |

Example:
```bash
VITE_BASE_PATH=/scripture-guild/ npm run build
```

---

## Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build production bundle into `dist/` |
| `npm run preview` | Serve `dist/` locally for final checks |

---

## Troubleshooting

**Blank page after deploy?**
- Make sure `base` in `vite.config.js` matches your hosting subdirectory.
- For Netlify/Vercel at root, `base` should be `'/'`.
- Confirm the `_redirects` file (Netlify) or `vercel.json` rewrites are in place.

**Routes return 404 on refresh?**
- This is a React Router + static hosting issue. Add the `_redirects` file for Netlify or the equivalent rewrite rule for your platform.

**Node version issues?**
- This project requires Node.js v18 or higher. Check with `node -v`.

---

## License
This project is for educational and ministry purposes. All Scripture references are from the public domain (KJV) unless otherwise noted.
