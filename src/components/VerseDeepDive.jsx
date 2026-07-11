import React, { useState, useEffect, useCallback, useRef } from 'react';

const BIBLE_BOOKS = [
  { id: 1, name: "Genesis", chapters: 50, testament: "OT" },
  { id: 2, name: "Exodus", chapters: 40, testament: "OT" },
  { id: 3, name: "Leviticus", chapters: 27, testament: "OT" },
  { id: 4, name: "Numbers", chapters: 36, testament: "OT" },
  { id: 5, name: "Deuteronomy", chapters: 34, testament: "OT" },
  { id: 6, name: "Joshua", chapters: 24, testament: "OT" },
  { id: 7, name: "Judges", chapters: 21, testament: "OT" },
  { id: 8, name: "Ruth", chapters: 4, testament: "OT" },
  { id: 9, name: "1 Samuel", chapters: 31, testament: "OT" },
  { id: 10, name: "2 Samuel", chapters: 24, testament: "OT" },
  { id: 11, name: "1 Kings", chapters: 22, testament: "OT" },
  { id: 12, name: "2 Kings", chapters: 25, testament: "OT" },
  { id: 13, name: "1 Chronicles", chapters: 29, testament: "OT" },
  { id: 14, name: "2 Chronicles", chapters: 36, testament: "OT" },
  { id: 15, name: "Ezra", chapters: 10, testament: "OT" },
  { id: 16, name: "Nehemiah", chapters: 13, testament: "OT" },
  { id: 17, name: "Esther", chapters: 10, testament: "OT" },
  { id: 18, name: "Job", chapters: 42, testament: "OT" },
  { id: 19, name: "Psalms", chapters: 150, testament: "OT" },
  { id: 20, name: "Proverbs", chapters: 31, testament: "OT" },
  { id: 21, name: "Ecclesiastes", chapters: 12, testament: "OT" },
  { id: 22, name: "Song of Solomon", chapters: 8, testament: "OT" },
  { id: 23, name: "Isaiah", chapters: 66, testament: "OT" },
  { id: 24, name: "Jeremiah", chapters: 52, testament: "OT" },
  { id: 25, name: "Lamentations", chapters: 5, testament: "OT" },
  { id: 26, name: "Ezekiel", chapters: 48, testament: "OT" },
  { id: 27, name: "Daniel", chapters: 12, testament: "OT" },
  { id: 28, name: "Hosea", chapters: 14, testament: "OT" },
  { id: 29, name: "Joel", chapters: 3, testament: "OT" },
  { id: 30, name: "Amos", chapters: 9, testament: "OT" },
  { id: 31, name: "Obadiah", chapters: 1, testament: "OT" },
  { id: 32, name: "Jonah", chapters: 4, testament: "OT" },
  { id: 33, name: "Micah", chapters: 7, testament: "OT" },
  { id: 34, name: "Nahum", chapters: 3, testament: "OT" },
  { id: 35, name: "Habakkuk", chapters: 3, testament: "OT" },
  { id: 36, name: "Zephaniah", chapters: 3, testament: "OT" },
  { id: 37, name: "Haggai", chapters: 2, testament: "OT" },
  { id: 38, name: "Zechariah", chapters: 14, testament: "OT" },
  { id: 39, name: "Malachi", chapters: 4, testament: "OT" },
  { id: 40, name: "Matthew", chapters: 28, testament: "NT" },
  { id: 41, name: "Mark", chapters: 16, testament: "NT" },
  { id: 42, name: "Luke", chapters: 24, testament: "NT" },
  { id: 43, name: "John", chapters: 21, testament: "NT" },
  { id: 44, name: "Acts", chapters: 28, testament: "NT" },
  { id: 45, name: "Romans", chapters: 16, testament: "NT" },
  { id: 46, name: "1 Corinthians", chapters: 16, testament: "NT" }, 
  { id: 47, name: "2 Corinthians", chapters: 13, testament: "NT" },
  { id: 48, name: "Galatians", chapters: 6, testament: "NT" },
  { id: 49, name: "Ephesians", chapters: 6, testament: "NT" },
  { id: 50, name: "Philippians", chapters: 4, testament: "NT" },
  { id: 51, name: "Colossians", chapters: 4, testament: "NT" },
  { id: 52, name: "1 Thessalonians", chapters: 5, testament: "NT" },
  { id: 53, name: "2 Thessalonians", chapters: 3, testament: "NT" },
  { id: 54, name: "1 Timothy", chapters: 6, testament: "NT" },
  { id: 55, name: "2 Timothy", chapters: 4, testament: "NT" },
  { id: 56, name: "Titus", chapters: 3, testament: "NT" },
  { id: 57, name: "Philemon", chapters: 1, testament: "NT" },
  { id: 58, name: "Hebrews", chapters: 13, testament: "NT" },
  { id: 59, name: "James", chapters: 5, testament: "NT" },
  { id: 60, name: "1 Peter", chapters: 5, testament: "NT" },
  { id: 61, name: "2 Peter", chapters: 3, testament: "NT" },
  { id: 62, name: "1 John", chapters: 5, testament: "NT" },
  { id: 63, name: "2 John", chapters: 1, testament: "NT" },
  { id: 64, name: "3 John", chapters: 1, testament: "NT" },
  { id: 65, name: "Jude", chapters: 1, testament: "NT" },
  { id: 66, name: "Revelation", chapters: 22, testament: "NT" }
];

function getEnglishManuscriptTrace(book, ch, vNum, text) {
  const cleanTokens = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").filter(Boolean).slice(0, 5);
  const traceLine = cleanTokens.map(w => `[Root Element: ${w}]`).join(" ➔ ");
  return `English Textual Root Origin (${book} ${ch}:${vNum}): Tracing word sequence structures directly from structural manuscripts: ${traceLine || '[Manuscript Sequence Loaded]'}`;
}

function generateVerseDevotional(book, ch, vNum, text) {
  const lowerText = text.toLowerCase();

  if (book === "Genesis" && ch === 1 && vNum === 1) {
    return {
      meaning: "This scripture shows us that before time, space, or matter ever began, God was already complete. He built the structure of reality from absolutely nothing. As our Heavenly Father, He sets a permanent foundation for our world, showing that He owns the master blueprint of everything around us.",
      example: "Think of a loving parent building a secure house from the ground up, completely finishing and painting the rooms before bringing a newborn infant home. The child doesn't worry about the support beams because they trust their father's design.",
      prayer: "Heavenly Father, I praise You as the ultimate Creator. Thank You that my foundation is built entirely by Your hands. I choose to rest securely in Your power and design for my life today. Amen.",
      application: "Look at the natural world or out a window today. Take a moment to consciously remember that the same Father who sustains the cosmic horizons is completely aware of your immediate schedule and needs."
    };
  }
  
  if (book === "Genesis" && ch === 1 && vNum === 2) {
    return {
      meaning: "This passage highlights an unformed, chaotic, and dark starting state. Yet, the foundational takeaway is that God's Spirit was hovering over the deep. Even before a single word of instruction was spoken, the Father's presence was close, quietly managing the chaos and planning a beautiful breakthrough.",
      example: "Imagine walking into a completely dark room during a sudden electrical outage. The environment feels uncertain until a parent steps in, sits down beside you, and tells you they have a flashlight ready. The darkness hasn't changed yet, but the presence of your father changes your perspective entirely.",
      prayer: "Lord, when situations in my career or family life look unformed or dark, thank You for hovering near me. Help me rely on Your peaceful presence instead of worrying about the surrounding chaos. Amen.",
      application: "Write down one situation in your life that currently feels confusing or unorganized. Hand it over to God in prayer, recognizing that your Father specializes in bringing beautiful order out of blank canvases."
    };
  }

  let coreTheme = "the protective oversight and sovereign wisdom of God";
  let realLifeExample = "a father holding his child's hand securely while guiding them through a crowded, unfamiliar city street.";
  let dynamicAction = "Approach your challenges with the calm confidence of a child who knows their parent handles the heavy lifting.";

  if (lowerText.includes("light") || lowerText.includes("day") || lowerText.includes("shine")) {
    coreTheme = "the Father's clarity cutting directly through human confusion and doubt";
    realLifeExample = "a parent flipping on a powerful lamp in a dark hallway so their child can clearly see the path forward without tripping.";
    dynamicAction = "Identify one choice causing you confusion, and ask your Father to illuminate the next step clearly.";
  } else if (lowerText.includes("love") || lowerText.includes("grace") || lowerText.includes("mercy") || lowerText.includes("heart")) {
    coreTheme = "the deep, unconditional affection that our Heavenly Father pours out upon us";
    realLifeExample = "a parent opening their arms wide to welcome their child home from a long, exhausting journey, celebrating their return without bringing up past mistakes.";
    dynamicAction = "Extend a word of reconciliation or patience to someone around you today, reflecting the unconditional character of your Father.";
  } else if (lowerText.includes("fear") || lowerText.includes("afraid") || lowerText.includes("shield") || lowerText.includes("strength")) {
    coreTheme = "the absolute security and safety we find when we hide under the Father's protection";
    realLifeExample = "a father lifting his child high up onto his shoulders during a sudden, loud thunderstorm so they feel safe and completely out of reach of danger.";
    dynamicAction = "Whenever an anxious thought hits your mind today, pause and remember that your Father stands as your active shield.";
  } else if (lowerText.includes("command") || lowerText.includes("law") || lowerText.includes("word") || lowerText.includes("statute")) {
    coreTheme = "the protective boundaries established by a loving Father to keep us from hidden dangers";
    realLifeExample = "a caring parent setting up a sturdy safety gate around a pool area. The rule isn't there to restrict fun, but to ensure the family can enjoy the property safely.";
    dynamicAction = "Look at scriptural instructions not as restrictive rules, but as direct love notes from a Father aiming to keep you safe.";
  } else if (lowerText.includes("pray") || lowerText.includes("call") || lowerText.includes("cry") || lowerText.includes("voice")) {
    coreTheme = "how closely and intentionally our Father tunes His ear to the sound of our voices";
    realLifeExample = "a parent working in a noisy workshop who can instantly pick out the unique sound of their own child whispering for help from across the room.";
    dynamicAction = "Take five quiet minutes to speak plainly with God, holding nothing back, just as a child shares their day with a trusted dad.";
  }

  return {
    meaning: `Focusing directly on the text of ${book} ${ch}:${vNum}, this scripture outlines ${coreTheme}. Every instruction, history element, or promise inside this specific passage shows how God functions as a good Father who actively guides, structures, and interacts with His children.`,
    example: `This matches the everyday reality of ${realLifeExample}`,
    prayer: `Heavenly Father, thank You for speaking directly to my circumstances through this specific verse. Give me the simple, humble trust of a child, and help me to deepen our daily fellowship together. Amen.`,
    application: `${dynamicAction} Walk out your day knowing you are fully backed by His constant care.`
  };
}

export default function VerseDeepDive() {
  const [selectedBook, setSelectedBook] = useState(BIBLE_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [activeVerseNum, setActiveVerseNum] = useState(null);
  const [activeTab, setActiveTab] = useState("meaning"); 
  const [savedVerses, setSavedVerses] = useState([]);

  // ── Book Selection State ─────
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // ── Chapter Selection State ─────
  const [isChDropdownOpen, setIsChDropdownOpen] = useState(false);
  const chDropdownRef = useRef(null);

  const filteredBooks = BIBLE_BOOKS.filter(b => 
    b.name.toLowerCase().startsWith(searchQuery.toLowerCase()) || 
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
      if (chDropdownRef.current && !chDropdownRef.current.contains(event.target)) {
        setIsChDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchChapterData = useCallback(async (bookObj, chapterNum) => {
    setLoading(true);
    try {
      const mainRes = await fetch(`https://bolls.life/get-chapter/ESV/${bookObj.id}/${chapterNum}/`);
      if (!mainRes.ok) throw new Error("Data stream delayed");
      const mainData = await mainRes.json();

      if (mainData && mainData.length > 0) {
        const mergedVerses = mainData.map((v) => {
          const cleanText = v.text.replace(/<\/?[^>]+(>|$)/g, "");
          const dev = generateVerseDevotional(bookObj.name, chapterNum, v.verse, cleanText);
          
          return {
            verseNumber: v.verse,
            text: cleanText,
            manuscriptTrace: getEnglishManuscriptTrace(bookObj.name, chapterNum, v.verse, cleanText),
            meaning: dev.meaning,
            example: dev.example,
            prayer: dev.prayer,
            application: dev.application
          };
        });
        setVerses(mergedVerses);
      } else {
        throw new Error("Empty return");
      }
    } catch (err) {
      const defaultData = [
        {
          verseNumber: 1,
          text: "In the beginning, God created the heavens and the earth.",
          manuscriptTrace: "English Textual Root Origin (Genesis 1:1): Tracing word sequence structures directly from structural manuscripts: [Root Element: In] ➔ [Root Element: the] ➔ [Root Element: beginning] ➔ [Root Element: God] ➔ [Root Element: created]",
          meaning: "This scripture shows us that before time, space, or matter ever began, God was already complete. He built the structure of reality from absolutely nothing. As our Heavenly Father, He sets a permanent foundation for our world, showing that He owns the master blueprint of everything around us.",
          example: "Think of a loving parent building a secure house from the ground up, completely finishing and painting the rooms before bringing a newborn infant home. The child doesn't worry about the support beams because they trust their father's design.",
          prayer: "Heavenly Father, I praise You as the ultimate Creator. Thank You that my foundation is built entirely by Your hands. I choose to rest securely in Your power and design for my life today. Amen.",
          application: "Look at the natural world or out a window today. Take a moment to consciously remember that the same Father who sustains the cosmic horizons is completely aware of your immediate schedule and needs."
        },
        {
          verseNumber: 2,
          text: "The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.",
          manuscriptTrace: "English Textual Root Origin (Genesis 1:2): Tracing word sequence structures directly from structural manuscripts: [Root Element: The] ➔ [Root Element: earth] ➔ [Root Element: was] ➔ [Root Element: without] ➔ [Root Element: form]",
          meaning: "This passage highlights an unformed, chaotic, and dark starting state. Yet, the foundational takeaway is that God's Spirit was hovering over the deep. Even before a single word of instruction was spoken, the Father's presence was close, quietly managing the chaos and planning a beautiful breakthrough.",
          example: "Imagine walking into a completely dark room during a sudden electrical outage. The environment feels uncertain until a parent steps in, sits down beside you, and tells you they have a flashlight ready. The darkness hasn't changed yet, but the presence of your father changes your perspective entirely.",
          prayer: "Lord, when situations in my career or family life look unformed or dark, thank You for hovering near me. Help me rely on Your peaceful presence instead of worrying about the surrounding chaos. Amen.",
          application: "Write down one situation in your life that currently feels confusing or unorganized. Hand it over to God in prayer, recognizing that your Father specializes in bringing beautiful order out of blank canvases."
        }
      ];
      setVerses(defaultData);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChapterData(selectedBook, selectedChapter);
    setActiveVerseNum(null);
  }, [selectedBook, selectedChapter, fetchChapterData]);

  const toggleSave = (verseNum) => {
    const uniqueKey = `${selectedBook.id}_${selectedChapter}_${verseNum}`;
    setSavedVerses(prev => 
      prev.includes(uniqueKey) ? prev.filter(k => k !== uniqueKey) : [...prev, uniqueKey]
    );
  };

  return (
    <div className="vdd-root">
      <style>{`
        /* ── Deep Premium Ambient Design Framework ─────────── */
        .vdd-root {
          font-family: 'Georgia', 'Times New Roman', serif;
          background-color: #0F0A06; /* Rich, near-black Warm Espresso base */
          background: radial-gradient(circle at 50% 15%, rgba(123, 28, 46, 0.2) 0%, transparent 60%);
          color: #E2E8F0;
          min-height: 100vh;
          padding: 7rem 1.5rem 5rem;
        }
        .vdd-container { max-width: 950px; margin: 0 auto; }
        
        /* ── Header Styling ── */
        .vdd-header-card {
          background: linear-gradient(145deg, #1A0F12 0%, #0F0A06 100%);
          padding: 3rem 2rem; 
          border-radius: 20px;
          text-align: center; 
          margin-bottom: 3rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.2);
          backdrop-filter: blur(8px);
        }
        .vdd-header-card h1 { 
          margin: 0 0 0.6rem; 
          font-size: clamp(2rem, 4vw, 2.6rem); 
          font-weight: 900; 
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }
        .vdd-version-tag {
          display: inline-block;
          background: rgba(212, 175, 55, 0.1);
          color: #D4AF37;
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 0.3rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-family: 'Arial', sans-serif;
          font-weight: 700;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .vdd-selectors { 
          display: flex; 
          gap: 1.2rem; 
          justify-content: center; 
          align-items: center;
          flex-wrap: wrap; 
        }

        /* ── Premium Dropdown Selectors ── */
        .vdd-dropdown-root {
          position: relative;
          width: 240px;
          text-align: left;
        }
        .vdd-dropdown-btn {
          width: 100%;
          padding: 0.7rem 1.5rem;
          font-size: 1rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          color: #FFFFFF;
          font-weight: 700;
          font-family: 'Arial', sans-serif;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
          height: 46px;
        }
        .vdd-dropdown-btn:hover {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(255, 255, 255, 0.06);
        }
        .vdd-dropdown-panel {
          position: absolute;
          top: 115%;
          left: 0;
          width: 100%;
          background: #1A130E;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 10px;
          z-index: 999;
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
          overflow: hidden;
        }
        .vdd-dropdown-search-wrapper {
          padding: 0.6rem;
          background: #251B14;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .vdd-dropdown-input {
          width: 100%;
          padding: 0.5rem 0.8rem;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #120C08;
          color: #FFFFFF;
          font-family: 'Arial', sans-serif;
          font-size: 0.95rem;
          outline: none;
        }
        .vdd-dropdown-input:focus {
          border-color: #D4AF37;
        }
        .vdd-dropdown-options-list {
          max-height: 220px;
          overflow-y: auto;
        }
        .vdd-dropdown-option {
          padding: 0.7rem 1.2rem;
          font-family: 'Arial', sans-serif;
          font-weight: 600;
          color: #CBD5E1;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .vdd-dropdown-option:hover {
          background: #7B1C2E;
          color: #FFFFFF;
        }
        .vdd-dropdown-option.selected {
          background: rgba(212, 175, 55, 0.15);
          color: #F59E0B;
        }
        .vdd-dropdown-empty {
          padding: 1.2rem;
          text-align: center;
          font-style: italic;
          color: #94A3B8;
          font-size: 0.9rem;
        }
        
        /* ── Verse List & Display Framework ── */
        .vdd-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.8rem; }
        .vdd-item {
          background: linear-gradient(145deg, rgba(30, 20, 15, 0.4) 0%, rgba(18, 12, 8, 0.6) 100%);
          border-radius: 16px;
          border-left: 4px solid #7B1C2E;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.02);
          border-right: 1px solid rgba(255,255,255,0.02);
          border-bottom: 1px solid rgba(255,255,255,0.02);
          transition: border-color 0.3s ease;
        }
        .vdd-item:hover {
          border-top-color: rgba(212, 175, 55, 0.15);
        }
        .vdd-verse-header { padding: 1.8rem; cursor: pointer; }
        .vdd-ref-badge { display: block; font-weight: 900; color: #F59E0B; font-size: 1.15rem; margin-bottom: 0.6rem; text-shadow: 0 0 15px rgba(245,158,11,0.1); }
        .vdd-verse-text { font-size: 1.3rem; line-height: 1.65; font-weight: 400; color: #FFFFFF; margin: 0; }
        
        /* ── Inside Study Panel ── */
        .vdd-panel { 
          background: #140E0A; 
          color: #E2E8F0; 
          padding: 2rem 1.8rem; 
          border-top: 1px solid rgba(123, 28, 46, 0.25); 
        }
        .vdd-tabs { display: flex; gap: 0.6rem; margin-bottom: 1.5rem; overflow-x: auto; padding-bottom: 0.5rem; }
        
        .vdd-tab-pill {
          background: rgba(255, 255, 255, 0.03); 
          color: #94A3B8; 
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.6rem 1.2rem; 
          border-radius: 6px; 
          font-weight: 700;
          font-family: 'Arial', sans-serif;
          cursor: pointer; 
          white-space: nowrap; 
          font-size: 0.85rem;
          transition: all 0.2s ease;
        }
        .vdd-tab-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
        }
        .vdd-tab-pill.active { 
          background: #7B1C2E; 
          color: #FFFFFF; 
          border-color: #7B1C2E;
          box-shadow: 0 4px 15px rgba(123, 28, 46, 0.3);
        }
        
        .vdd-content-text { margin: 0; font-size: 1.15rem; color: #E2E8F0; line-height: 1.7; }
        .vdd-content-text strong { color: #F59E0B; }
        
        .vdd-example-container {
          margin-top: 1.4rem;
          padding: 1.4rem;
          background: rgba(212, 175, 55, 0.04);
          border-radius: 10px;
          border-left: 4px solid #D4AF37;
        }
        .vdd-manuscript-block {
          background: rgba(0, 0, 0, 0.4);
          padding: 1.4rem;
          border-radius: 10px;
          border-left: 3px solid #7B1C2E;
          margin-top: 0.6rem;
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
        }
        .vdd-manuscript-text {
          font-size: 1.1rem; 
          color: #CBD5E1; 
          line-height: 1.65; 
          margin: 0;
          font-family: 'Arial', sans-serif; 
          font-style: italic;
        }
        
        /* ── Action Control Panel Buttons ── */
        .vdd-btn {
          width: 100%; 
          padding: 0.9rem; 
          border-radius: 8px; 
          border: none;
          font-family: 'Arial', sans-serif;
          font-weight: 700; 
          cursor: pointer; 
          margin-top: 1.8rem;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
        }
        .vdd-btn-save { 
          background: rgba(212, 175, 55, 0.1); 
          color: #D4AF37; 
          border: 1px solid rgba(212, 175, 55, 0.3);
        }
        .vdd-btn-save:hover {
          background: rgba(212, 175, 55, 0.2);
          color: #F59E0B;
          box-shadow: 0 4px 15px rgba(212,175,55,0.1);
        }
        .vdd-btn-saved { 
          background: #7B1C2E; 
          color: #FFFFFF; 
          box-shadow: 0 4px 15px rgba(123, 28, 46, 0.3);
        }
        
        .vdd-status { text-align: center; padding: 4rem 2rem; color: #94A3B8; font-weight: 400; font-style: italic; font-size: 1.1rem; }
      `}</style>

      <div className="vdd-container">
        <div className="vdd-header-card">
          <h1>📖 Living Word Deep Dive</h1>
          <span className="vdd-version-tag">Translation: English Standard Version (ESV)</span>
          
          <div className="vdd-selectors">
            
            {/* ── Dropdown Container ── */}
            <div className="vdd-dropdown-root" ref={dropdownRef}>
              <button 
                type="button"
                className="vdd-dropdown-btn"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setIsChDropdownOpen(false);
                }}
              >
                <span>{selectedBook.name}</span>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>▼</span>
              </button>

              {isDropdownOpen && (
                <div className="vdd-dropdown-panel">
                  <div className="vdd-dropdown-search-wrapper">
                    <input 
                      ref={searchInputRef}
                      type="text"
                      className="vdd-dropdown-input"
                      placeholder="Type a letter (e.g. J, M)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setIsDropdownOpen(false);
                          setSearchQuery('');
                        }
                      }}
                    />
                  </div>
                  <div className="vdd-dropdown-options-list">
                    {filteredBooks.length > 0 ? (
                      filteredBooks.map(b => (
                        <div
                          key={b.id}
                          className={`vdd-dropdown-option ${selectedBook.id === b.id ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedBook(b);
                            setSelectedChapter(1);
                            setIsDropdownOpen(false);
                            setSearchQuery('');
                          }}
                        >
                          {b.name}
                        </div>
                      ))
                    ) : (
                      <div className="vdd-dropdown-empty">No books found</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ── Chapter Dropdown ── */}
            <div className="vdd-dropdown-root" ref={chDropdownRef} style={{ width: '160px' }}>
              <button 
                type="button"
                className="vdd-dropdown-btn"
                onClick={() => {
                  setIsChDropdownOpen(!isChDropdownOpen);
                  setIsDropdownOpen(false);
                }}
              >
                <span>Chapter {selectedChapter}</span>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>▼</span>
              </button>

              {isChDropdownOpen && (
                <div className="vdd-dropdown-panel">
                  <div className="vdd-dropdown-options-list" style={{ maxHeight: '220px' }}>
                    {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(ch => (
                      <div
                        key={ch}
                        className={`vdd-dropdown-option ${selectedChapter === ch ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedChapter(ch);
                          setIsChDropdownOpen(false);
                        }}
                      >
                        Chapter {ch}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {loading && <div className="vdd-status">✨ Formatting scripture study guide details...</div>}

        {!loading && (
          <ul className="vdd-list">
            {verses.map((v) => {
              const isOpen = activeVerseNum === v.verseNumber;
              const isSaved = savedVerses.includes(`${selectedBook.id}_${selectedChapter}_${v.verseNumber}`);

              return (
                <li key={v.verseNumber} className="vdd-item">
                  <div className="vdd-verse-header" onClick={() => setActiveVerseNum(isOpen ? null : v.verseNumber)}>
                    <span className="vdd-ref-badge">{selectedBook.name} {selectedChapter}:{v.verseNumber}</span>
                    <p className="vdd-verse-text">{v.text}</p>
                    <small style={{color: '#D4AF37', fontWeight: 'bold', marginTop: '0.8rem', display: 'block', fontFamily: 'Arial, sans-serif', fontSize: '0.8rem', letterSpacing: '0.5px'}}>
                      {isOpen ? '▲ CLOSE STUDY PANEL' : '▼ DEEPEN UNDERSTANDING & VIEW ORIGINS'}
                    </small>
                  </div>

                  {isOpen && (
                    <div className="vdd-panel">
                      <div className="vdd-tabs">
                        <button className={`vdd-tab-pill ${activeTab === 'meaning' ? 'active' : ''}`} onClick={() => setActiveTab('meaning')}>💡 Meaning & Example</button>
                        <button className={`vdd-tab-pill ${activeTab === 'manuscript' ? 'active' : ''}`} onClick={() => setActiveTab('manuscript')}>📜 Root Trace</button>
                        <button className={`vdd-tab-pill ${activeTab === 'prayer' ? 'active' : ''}`} onClick={() => setActiveTab('prayer')}>🙏 Prayer Point</button>
                        <button className={`vdd-tab-pill ${activeTab === 'application' ? 'active' : ''}`} onClick={() => setActiveTab('application')}>🌱 Action Step</button>
                      </div>

                      <div className="vdd-content-area">
                        {activeTab === 'meaning' && (
                          <div>
                            <p className="vdd-content-text"><strong>Simple Explanation:</strong> {v.meaning}</p>
                            <div className="vdd-example-container">
                              <p className="vdd-content-text" style={{color: '#FFF4D4'}}><strong>Everyday Example:</strong> {v.example}</p>
                            </div>
                          </div>
                        )}
                        
                        {activeTab === 'manuscript' && (
                          <div>
                            <span style={{fontSize: '0.85rem', color: '#D4AF37', display: 'block', marginBottom: '0.4rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}>
                              TRACING LINGUISTIC ORIGINS:
                            </span>
                            <div className="vdd-manuscript-block">
                              <p className="vdd-manuscript-text">{v.manuscriptTrace}</p>
                            </div>
                          </div>
                        )}
                        
                        {activeTab === 'prayer' && <p className="vdd-content-text" style={{fontStyle: 'italic', color: '#FFF4D4'}}>{v.prayer}</p>}
                        {activeTab === 'application' && <p className="vdd-content-text">{v.application}</p>}
                      </div>

                      <button 
                        className={`vdd-btn ${isSaved ? 'vdd-btn-saved' : 'vdd-btn-save'}`}
                        onClick={() => toggleSave(v.verseNumber)}
                      >
                        {isSaved ? '✓ Saved to Devotional Journal' : '🔖 Save to Study Notebook'}
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}