# ScriptureGuide — Full Site Plan

## Project Overview
**Site Name:** ScriptureGuide  
**Purpose:** An interactive Christian platform featuring structured Bible study, AI-powered Q&A, faith-based games, daily devotionals on the nature of God, prayer guilds, spiritual growth tools, user engagement systems, search/navigation, a learning dashboard, and a feedback system.  
**Audience:** New believers, mature Christians, small group and prayer leaders, young adults, and all denominations seeking structured and engaging faith growth resources.

---

## Pages

### 1. `HomePage` — `/`
- **Purpose:** The welcoming landing page for ScriptureGuide. Introduces the platform's core features, displays a Daily Verse Widget, highlights featured devotionals and lessons, and provides clear navigation cards to each major section.
- **Key Sections:** Hero banner with tagline, DailyVerseWidget, FeatureCards for each section (Bible Study, AI Q&A, Games, Prayer, Devotionals), SuggestedNext content, StreakTracker summary.

### 2. `BibleStudyPage` — `/bible-study`
- **Purpose:** A structured library of Bible study tracks organized by topic, book of the Bible, or difficulty level. Helps users find and begin a guided study journey.
- **Key Sections:** SectionHeader, TopicTagCloud for filtering, StudyTrackList showing available tracks, LessonCards for individual lessons, ProgressIndicator per track.

### 3. `LessonDetailPage` — `/bible-study/:lessonId`
- **Purpose:** Displays the full content of a single Bible study lesson including Scripture passages, explanations, reflection questions, and a progress-tracking quiz.
- **Key Sections:** VerseBlock for Scripture display, lesson body content, ReflectionBox for personal notes, QuizGame for comprehension check, Badge awarded on completion, SuggestedNext lesson.

### 4. `AIQAPage` — `/ai-qa`
- **Purpose:** An AI-powered question and answer interface where users can type faith and Bible-related questions and receive structured, Scripture-backed answers (simulated with static response logic — no external API).
- **Key Sections:** SectionHeader, QAInterface (input + response display), example question prompts, VerseBlock for referenced Scriptures, TopicTagCloud for common question categories.

### 5. `GamesPage` — `/games`
- **Purpose:** A hub for all faith-based interactive games designed to reinforce Scripture memory and Bible knowledge in a fun, engaging way.
- **Key Sections:** SectionHeader, GameCards listing available games (Scripture Quiz, Verse Match, Bible Character Match), difficulty filters, Badge showcase for completed games.

### 6. `GameDetailPage` — `/games/:gameId`
- **Purpose:** Loads and runs a specific faith game. Each game is self-contained with instructions, gameplay, scoring, and a completion badge.
- **Key Sections:** Game instructions, QuizGame or MatchGame component (depending on game type), score display, Badge on completion, SuggestedNext game.

### 7. `DevotionalPage` — `/devotionals`
- **Purpose:** A library of daily devotionals focused specifically on the nature and character of God — His love, holiness, sovereignty, mercy, and more.
- **Key Sections:** SectionHeader, featured DevotionalCard for today's devotional, archive of past devotionals organized by theme/attribute of God, TopicTagCloud.

### 8. `DevotionalDetailPage` — `/devotionals/:devotionalId`
- **Purpose:** Displays the full text of a single devotional including the Scripture focus, reflection, prayer prompt, and related study links.
- **Key Sections:** VerseBlock, devotional body text, ReflectionBox, PrayerForm for personal prayer response, SuggestedNext devotional.

### 9. `PrayerPage` — `/prayer`
- **Purpose:** A community prayer hub featuring prayer guilds (topical groups), a prayer request submission form, public prayer feed, and tools for prayer leaders to organize group intercession.
- **Key Sections:** SectionHeader, PrayerForm for submitting requests, prayer request feed with PrayerCards, guild listings with GuildMemberBadge, DailyVerseWidget with a prayer-focused verse.

### 10. `DashboardPage` — `/dashboard`
- **Purpose:** A personal learning and engagement dashboard showing the user's study progress, streak data, earned badges, completed lessons, and suggested next steps — all stored in localStorage (no database).
- **Key Sections:** StreakTracker, ProgressIndicator per study track, Badge collection display, SuggestedNext content, summary stats (lessons completed, games played, devotionals read).

### 11. `SearchPage` — `/search`
- **Purpose:** A site-wide search interface allowing users to find lessons, devotionals, games, prayer topics, and Q&A content by keyword or topic tag.
- **Key Sections:** SearchBar, TopicTagCloud for quick filtering, SearchResults listing matched content with category labels and links.

### 12. `FeedbackPage` — `/feedback`
- **Purpose:** A structured feedback and suggestion form where users can share what's helping them grow, report issues, or suggest new content — stored in localStorage for session review.
- **Key Sections:** SectionHeader, FeedbackForm, FeedbackList showing previously submitted feedback (from localStorage), encouraging Scripture quote.

### 13. `AboutPage` — `/about`
- **Purpose:** Explains the mission and heart behind ScriptureGuide, the theological approach (non-denominational, Scripture-first), how to use the platform, and a contact/feedback call to action.
- **Key Sections:** Mission statement, platform values, how-to-use guide, team/creator acknowledgment, link to FeedbackPage.

---

## Reusable Components

### Layout & Navigation
- **`Navbar`** — Top navigation bar with logo, links to all major sections, and a search icon. Responsive with a mobile menu.
- **`Footer`** — Site footer with links, copyright, and a short faith-affirming tagline.
- **`PageWrapper`** — Wraps every page with consistent padding, max-width, and optional page title header.

### Content Display
- **`FeatureCard`** — A visual card linking to a major site section (used on HomePage). Includes icon, title, and short description.
- **`LessonCard`** — Card displaying a Bible study lesson title, Scripture reference, difficulty level, and completion status.
- **`DevotionalCard`** — Card for a devotional entry showing title, date, attribute of God focus, and excerpt.
- **`GameCard`** — Card for a faith game showing title, game type, difficulty, and play button.
- **`PrayerCard`** — Displays a single prayer request with topic tag, short text, and a "Praying for this" count.
- **`VerseBlock`** — Styled Scripture display block with verse text, reference, and optional translation label.
- **`ReflectionBox`** — A textarea input component for personal reflection notes, saved to localStorage.
- **`SectionHeader`** — Reusable page/section title with optional subtitle and decorative divider.
- **`Button`** — Styled button component with variants (primary, secondary, ghost) and optional icon.

### Engagement & Progress
- **`Badge`** — Visual achievement badge displayed on lesson/game completion. Shows icon, title, and earned date.
- **`StreakTracker`** — Shows the user's current daily engagement streak with a visual flame/counter indicator.
- **`ProgressIndicator`** — A progress bar or step tracker showing completion percentage for a study track.
- **`SuggestedNext`** — Recommends the next lesson, devotional, or game based on recent activity (logic driven by static data).
- **`GuildMemberBadge`** — Small badge showing a user's prayer guild membership and role.

### Interactive Tools
- **`QAInterface`** — The main AI Q&A component with a text input, submit button, and structured answer display area.
- **`PrayerForm`** — Form for submitting a prayer request with fields for name, topic, and prayer text.
- **`FeedbackForm`** — Form for submitting site feedback with category selector, message field, and submit confirmation.
- **`QuizGame`** — Multiple-choice quiz component used in LessonDetailPage and GameDetailPage. Tracks score and shows results.
- **`MatchGame`** — A verse-matching card game component where users pair Scripture references with their text.
- **`StudyTrackList`** — Lists all available Bible study tracks with filtering and sorting controls.

### Discovery & Navigation
- **`SearchBar`** — Controlled input component for keyword search with real-time filtering against static content data.
- **`SearchResults`** — Renders a list of matched content items from search with category labels and navigation links.
- **`TopicTagCloud`** — A collection of clickable topic/tag chips for filtering content by theme or category.
- **`DailyVerseWidget`** — Displays today's featured Scripture verse, rotated daily using the date as a seed index.
- **`FeedbackList`** — Renders previously submitted feedback items from localStorage in a styled list view.

---

## Planned React Router DOM Routes

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/bible-study" element={<BibleStudyPage />} />
    <Route path="/bible-study/:lessonId" element={<LessonDetailPage />} />
    <Route path="/ai-qa" element={<AIQAPage />} />
    <Route path="/games" element={<GamesPage />} />
    <Route path="/games/:gameId" element={<GameDetailPage />} />
    <Route path="/devotionals" element={<DevotionalPage />} />
    <Route path="/devotionals/:devotionalId" element={<DevotionalDetailPage />} />
    <Route path="/prayer" element={<PrayerPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/feedback" element={<FeedbackPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
</BrowserRouter>
```

---

## Data Strategy
- All content (lessons, devotionals, games, prayers) is stored as **static JavaScript data arrays** in `src/data/`
- User progress, streaks, badges, and feedback are stored in **localStorage** — no database required
- AI Q&A responses are **simulated** using a static keyword-matching function — no external API calls
- The Daily Verse Widget rotates verses using `new Date().getDay()` or `getDayOfYear()` as an index into a static verse array

---

## File Structure Overview

```
src/
  App.jsx
  main.jsx
  index.css
  PLAN.md
  pages/
    HomePage.jsx
    BibleStudyPage.jsx
    LessonDetailPage.jsx
    AIQAPage.jsx
    GamesPage.jsx
    GameDetailPage.jsx
    DevotionalPage.jsx
    DevotionalDetailPage.jsx
    PrayerPage.jsx
    DashboardPage.jsx
    SearchPage.jsx
    FeedbackPage.jsx
    AboutPage.jsx
  components/
    Navbar.jsx
    Footer.jsx
    PageWrapper.jsx
    FeatureCard.jsx
    LessonCard.jsx
    DevotionalCard.jsx
    GameCard.jsx
    PrayerCard.jsx
    VerseBlock.jsx
    ReflectionBox.jsx
    SectionHeader.jsx
    Button.jsx
    Badge.jsx
    StreakTracker.jsx
    ProgressIndicator.jsx
    SuggestedNext.jsx
    GuildMemberBadge.jsx
    QAInterface.jsx
    PrayerForm.jsx
    FeedbackForm.jsx
    QuizGame.jsx
    MatchGame.jsx
    StudyTrackList.jsx
    SearchBar.jsx
    SearchResults.jsx
    TopicTagCloud.jsx
    DailyVerseWidget.jsx
    FeedbackList.jsx
  data/
    lessons.js
    devotionals.js
    games.js
    prayers.js
    verses.js
    qaResponses.js
```
