import React, { useState } from 'react'

// ── Sample Structured Data for the 66 Books ──────────────────
// In a production app, you would import this from a JSON file or fetch it from an API database.
const BIBLE_DATA = {
  Genesis: {
    chapters: {
      1: [
        {
          verse: "1",
          text: "In the beginning God created the heavens and the earth.",
          manuscript: "בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃ (Bereshit bara Elohim...)",
          explanation: "This opening declaration establishes God as the eternal Creator of everything from nothing (ex nihilo). The Hebrew word 'Bara' is exclusively used for divine creation, emphasizing His sovereign power."
        },
        {
          verse: "2",
          text: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
          manuscript: "וְהָאָ֗רֶץ הָיְתָ֥ה תֹ֙הוּ֙ וָבֹ֔הוּ וְחֹ֖שֶׁךְ עַל־פְּנֵ֣י תְה֑וֹם וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל־פְּנֵ֥י הַמָּֽיִם׃",
          explanation: "The state of the early creation was 'tohu va-bohu' (unformed and unfilled). The image of the Holy Spirit 'hovering' uses a Hebrew term suggesting a mother bird protecting or preparing life over her nest."
        }
      ]
    }
  },
  John: {
    chapters: {
      1: [
        {
          verse: "1",
          text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
          manuscript: "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος. (En archē ēn ho logos...)",
          explanation: "John intentionally mirrors Genesis 1:1. Jesus is identified as the 'Logos' (the Word)—the ultimate communication of God's mind, essence, and creative power, existing eternally before time."
        }
      ]
    }
  }
  // All other 66 books follow this exact structural format...
}

export default function BibleStudyPage() {
  const [selectedBook, setSelectedBook] = useState('Genesis')
  const [selectedChapter, setSelectedChapter] = useState(1)

  // Grab the specific verses based on user choices
  const currentVerses = BIBLE_DATA[selectedBook]?.chapters[selectedChapter] || []

  return (
    <div className="study-container">
      <style>{`
        .study-container {
          font-family: 'Georgia', 'Times New Roman', serif;
          background: linear-gradient(180deg, #FFF4D4 0%, #F3E5AB 40%, #E5C158 80%, #D4AF37 100%);
          color: #2C1A04;
          min-height: 100vh;
          padding: 3rem 2rem;
        }

        /* ── Control Header / Book Selector ───────────────── */
        .study-header {
          max-width: 900px;
          margin: 0 auto 3rem;
          text-align: center;
          background: #2C1A04;
          padding: 2rem;
          border-radius: 12px;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }
        .study-header h1 {
          margin-top: 0;
          font-size: 2rem;
          color: #FFF4D4;
        }
        .selector-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1.5rem;
        }
        .selector-group select {
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #E5C158;
          background: #FFF4D4;
          color: #2C1A04;
          font-weight: 700;
          cursor: pointer;
        }

        /* ── The Verse Stack Loop ─────────────────────────── */
        .verse-timeline {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .verse-block {
          background: #FFFFFF;
          border-radius: 14px;
          border-left: 5px solid #7B1C2E; /* Crimson anchor line */
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(44, 26, 4, 0.06);
        }

        /* Tier 1: The Verse Text */
        .tier-verse {
          margin-bottom: 1.2rem;
        }
        .v-num {
          font-weight: 900;
          color: #7B1C2E;
          font-size: 1.2rem;
          margin-right: 0.5rem;
        }
        .v-text {
          font-size: 1.25rem;
          line-height: 1.6;
          font-weight: 700;
          color: #1A0F02;
        }

        /* Tier 2: The Practical Explanation */
        .tier-explanation {
          background: rgba(243, 229, 171, 0.15);
          border-radius: 8px;
          padding: 1.2rem;
          margin-bottom: 1.2rem;
          border: 1px dashed rgba(44, 26, 4, 0.15);
        }
        .label-exp {
          font-family: 'Arial', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #7B1C2E;
          font-weight: 800;
          display: block;
          margin-bottom: 0.4rem;
        }
        .exp-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #3D2506;
          font-weight: 600;
        }

        /* Tier 3: The Original Manuscript (Hebrew/Greek) */
        .tier-manuscript {
          background: #2C1A04;
          color: #FFF4D4;
          border-radius: 8px;
          padding: 1.2rem;
        }
        .label-ms {
          font-family: 'Arial', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #E5C158;
          font-weight: 800;
          display: block;
          margin-bottom: 0.4rem;
        }
        .ms-text {
          font-size: 1.15rem;
          line-height: 1.6;
          direction: rtl; /* Properly renders Right-To-Left text for Hebrew if needed */
          font-family: 'Courier New', Courier, monospace;
        }
      `}</style>

      {/* ── Control Header Panel ── */}
      <header className="study-header">
        <h1>📖 Deep Scripture Study Room</h1>
        <div className="selector-group">
          {/* Book Dropdown */}
          <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
            {Object.keys(BIBLE_DATA).map(book => (
              <option key={book} value={book}>{book}</option>
            ))}
          </select>

          {/* Chapter Dropdown */}
          <select value={selectedChapter} onChange={(e) => setSelectedChapter(Number(e.target.value))}>
            <option value={1}>Chapter 1</option>
          </select>
        </div>
      </header>

      {/* ── Dynamic Interlocking Verse Sequence ── */}
      <main className="verse-timeline">
        {currentVerses.length > 0 ? (
          currentVerses.map((item) => (
            <div key={item.verse} className="verse-block">
              
              {/* TIER 1: Clear Translation Verse */}
              <div className="tier-verse">
                <span className="v-num">{selectedBook} {selectedChapter}:{item.verse}</span>
                <span className="v-text">{item.text}</span>
              </div>

              {/* TIER 2: Deep Context & Explanation */}
              <div className="tier-explanation">
                <span className="label-exp">💡 Clear Commentary Explanation</span>
                <p className="exp-text">{item.explanation}</p>
              </div>

              {/* TIER 3: Original Ancient Manuscript Text */}
              <div className="tier-manuscript">
                <span className="label-ms">📜 Ancient Manuscript Text (Hebrew / Greek)</span>
                <p className="ms-text">{item.manuscript}</p>
              </div>

            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Select a fully loaded book path to begin studying.</p>
        )}
      </main>
    </div>
  )
}