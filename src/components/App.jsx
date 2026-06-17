import React, { useState, useEffect } from 'react';

// Inline SVG Icons
const Book = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>;
const Search = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const Quote = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7V5a2 2 0 0 0-2-2z"/></svg>;
const Github = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const Linkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Instagram = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Sun = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const Moon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;

// Local JSON data source
const wordsData = [
  {
    id: "latentia",
    word: "latentia",
    partOfSpeech: "noun",
    pronunciation: "\\ lə-ˈten-shə \\",
    roots: "Latin 'latere' (to lie hidden) + English 'latch'",
    dateCoined: "June 2026",
    definition: "The quiet grace of manipulating a physical object to erase your own presence; specifically, fully depressing a door handle before closing it to suppress the latch-click, ensuring the peace of those inside remains unbroken.",
    adjective: "latentious",
    verb: "to latent",
    example: "He stepped into the hallway, engaging in a brief moment of latentia as he held the brass handle down, riding it slowly back into place so the midnight quiet wouldn't shatter."
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage and system preference on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const filteredWords = wordsData.filter(item => 
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // We drive the theme entirely via this wrapper class now to bypass Tailwind v4 defaults
    <div className={`theme-wrapper ${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen text-[var(--b-fg)] font-sans selection:bg-[var(--b-selection)] lofi-wave-bg transition-colors duration-300">
        
        {/* Centralized Brutalist CSS Variables */}
        <style>
          {`
            @keyframes wave-drift {
              0% { background-position: 0px 0px; }
              100% { background-position: -60px 30px; }
            }
            .theme-wrapper {
              --b-bg: #fffdfa;
              --b-fg: #1c1917;
              --b-surface: #f5f5f4;
              --b-accent: #e7e5e4;
              --b-text-muted: #57534e;
              --b-text-dim: #78716c;
              --b-text-quote: #292524;
              --b-tag-label: #a8a29e;
              --b-shadow-inset: rgba(0,0,0,0.05);
              --b-drop-shadow: rgba(28,25,23,0.2);
              --b-selection: #d6d3d1;
            }
            .theme-wrapper.dark {
              --b-bg: #1c1917;
              --b-fg: #fffdfa;
              --b-surface: #292524;
              --b-accent: #292524;
              --b-text-muted: #d6d3d1;
              --b-text-dim: #a8a29e;
              --b-text-quote: #fffdfa;
              --b-tag-label: #78716c;
              --b-shadow-inset: rgba(255,255,255,0.05);
              --b-drop-shadow: rgba(255,255,255,0.2);
              --b-selection: #57534e;
            }
            .lofi-wave-bg {
              background-color: var(--b-bg);
              background-image: url("data:image/svg+xml,%3Csvg width='60' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q 15 5 30 15 T 60 15' fill='none' stroke='%23e7e5e4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
              animation: wave-drift 8s linear infinite;
            }
            .theme-wrapper.dark .lofi-wave-bg {
              background-image: url("data:image/svg+xml,%3Csvg width='60' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q 15 5 30 15 T 60 15' fill='none' stroke='%23292524' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            }
          `}
        </style>

        {/* Header */}
        <header className="bg-[var(--b-bg)] border-b-4 border-[var(--b-fg)] sticky top-0 z-10 shadow-[0_4px_0_0_var(--b-fg)] transition-colors duration-300">
          <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Book className="w-8 h-8 text-[var(--b-fg)]" />
              <h1 className="text-3xl font-serif font-black uppercase tracking-tight text-[var(--b-fg)] mt-1">Glossa.</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 text-[var(--b-fg)] absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="SEARCH ARCHIVE..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 bg-[var(--b-bg)] border-2 border-[var(--b-fg)] rounded-none shadow-[4px_4px_0_0_var(--b-fg)] focus:translate-y-[2px] focus:translate-x-[2px] focus:shadow-[2px_2px_0_0_var(--b-fg)] outline-none transition-all font-mono text-sm placeholder:text-[var(--b-text-dim)] font-bold uppercase text-[var(--b-fg)]"
                />
              </div>

              {/* Dark Mode Toggle Button */}
              <button 
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
                className="p-2 border-2 border-[var(--b-fg)] bg-[var(--b-bg)] shadow-[4px_4px_0_0_var(--b-fg)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0_0_var(--b-fg)] hover:bg-[var(--b-fg)] hover:text-[var(--b-bg)] transition-all group"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-6 py-12">
          <div className="space-y-12">
            {filteredWords.length > 0 ? (
              filteredWords.map((item) => (
                <article key={item.id} className="bg-[var(--b-bg)] p-8 md:p-10 border-4 border-[var(--b-fg)] shadow-[8px_8px_0_0_var(--b-fg)] transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_0_var(--b-fg)] relative duration-300">
                  
                  {/* Decorative Pin/Tape detail */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-4 bg-[var(--b-accent)] border-2 border-[var(--b-fg)] rotate-2 opacity-80 shadow-sm transition-colors duration-300"></div>

                  {/* Word & Pronunciation */}
                  <div className="mb-8 border-b-2 border-[var(--b-fg)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 transition-colors duration-300">
                    <div>
                      <h2 className="text-5xl font-serif font-black text-[var(--b-fg)] tracking-tight">{item.word}</h2>
                    </div>
                    <div className="flex items-center gap-3 font-mono bg-[var(--b-surface)] border-2 border-[var(--b-fg)] px-3 py-1 shadow-[2px_2px_0_0_var(--b-fg)] transition-all duration-300">
                      <span className="font-bold text-[var(--b-fg)] uppercase text-xs">{item.partOfSpeech}</span>
                      <span className="text-xs text-[var(--b-text-muted)]">[{item.pronunciation}]</span>
                    </div>
                  </div>

                  {/* Roots & Etymology */}
                  <div className="mb-8 space-y-3 bg-[var(--b-surface)] border-2 border-[var(--b-fg)] p-4 font-mono text-sm shadow-[inset_2px_2px_0_0_var(--b-shadow-inset)] transition-all duration-300">
                    <div className="flex gap-4">
                      <span className="font-bold uppercase tracking-wider text-[var(--b-fg)] min-w-[120px]">ORIGIN:</span> 
                      <span className="text-[var(--b-text-muted)]">{item.roots}</span>
                    </div>
                    {item.dateCoined && (
                      <div className="flex gap-4">
                        <span className="font-bold uppercase tracking-wider text-[var(--b-fg)] min-w-[120px]">ESTABLISHED:</span> 
                        <span className="text-[var(--b-text-muted)]">{item.dateCoined}</span>
                      </div>
                    )}
                  </div>

                  {/* Definition */}
                  <div className="prose prose-stone max-w-none mb-10">
                    <p className="text-xl leading-relaxed text-[var(--b-fg)] font-serif font-medium">
                      {item.definition}
                    </p>
                  </div>

                  {/* Forms (if available) */}
                  {(item.adjective || item.verb) && (
                    <div className="flex flex-wrap gap-4 mb-10 font-mono text-sm border-t-2 border-[var(--b-fg)] pt-6 transition-colors duration-300">
                      {item.verb && (
                        <div className="bg-[var(--b-fg)] text-[var(--b-bg)] px-3 py-1 rounded-sm font-bold transition-colors duration-300">
                          <span className="text-[var(--b-tag-label)] mr-2 font-normal">VERB:</span>{item.verb}
                        </div>
                      )}
                      {item.adjective && (
                        <div className="bg-[var(--b-fg)] text-[var(--b-bg)] px-3 py-1 rounded-sm font-bold transition-colors duration-300">
                          <span className="text-[var(--b-tag-label)] mr-2 font-normal">ADJ:</span>{item.adjective}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Example Quote */}
                  <blockquote className="relative p-6 bg-[var(--b-surface)] border-2 border-[var(--b-fg)] text-[var(--b-text-quote)] font-serif italic text-lg shadow-[4px_4px_0_0_var(--b-fg)] transition-all duration-300">
                    <Quote className="absolute -left-3 -top-4 w-8 h-8 text-[var(--b-fg)] bg-[var(--b-bg)] border-2 border-[var(--b-fg)] p-1 rounded-full transition-colors duration-300" />
                    "{item.example}"
                  </blockquote>
                  
                </article>
              ))
            ) : (
              <div className="text-center py-20 bg-[var(--b-bg)] border-4 border-[var(--b-fg)] shadow-[8px_8px_0_0_var(--b-fg)] transition-all duration-300">
                <p className="text-xl font-mono uppercase font-bold text-[var(--b-text-dim)]">No signals found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="max-w-3xl mx-auto px-6 py-12 mt-12 border-t-4 border-[var(--b-fg)] flex flex-col items-center gap-6 bg-[var(--b-bg)] shadow-[0_-4px_0_0_var(--b-fg)] transition-colors duration-300">
          <div className="flex justify-center gap-8">
            <a href="https://github.com/Jac21" target="_blank" rel="noopener noreferrer" className="text-[var(--b-fg)] hover:-translate-y-1 hover:text-[var(--b-text-muted)] transition-all drop-shadow-[2px_2px_0_var(--b-drop-shadow)]" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jeremycantu/" target="_blank" rel="noopener noreferrer" className="text-[var(--b-fg)] hover:-translate-y-1 hover:text-[var(--b-text-muted)] transition-all drop-shadow-[2px_2px_0_var(--b-drop-shadow)]" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/jeremy.cantu21/" target="_blank" rel="noopener noreferrer" className="text-[var(--b-fg)] hover:-translate-y-1 hover:text-[var(--b-text-muted)] transition-all drop-shadow-[2px_2px_0_var(--b-drop-shadow)]" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--b-fg)]">
            ARCHIVE MAINTAINED BY <a href="https://www.jeremycantu.com" target="_blank" rel="noopener noreferrer" className="relative inline-block border-b-2 border-[var(--b-fg)] hover:bg-[var(--b-fg)] hover:text-[var(--b-bg)] transition-colors px-1">JEREMY CANTU</a>
          </p>
        </footer>
      </div>
    </div>
  );
}