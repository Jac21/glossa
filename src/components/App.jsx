import React, { useState } from 'react';

// Inline SVG Icons to bypass Vite/Lucide module compilation errors
const Book = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>;
const Search = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const Quote = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7V5a2 2 0 0 0-2-2z"/></svg>;
const Github = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const Linkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Instagram = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;

// This acts as our local JSON data source
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

  const filteredWords = wordsData.filter(item => 
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Book className="w-8 h-8 text-stone-700" />
            <h1 className="text-3xl font-serif font-bold tracking-tight text-stone-800">Glossa</h1>
          </div>
          
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search words..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2 bg-stone-100 border-transparent rounded-full focus:bg-white focus:border-stone-300 focus:ring-2 focus:ring-stone-200 outline-none transition-all"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {filteredWords.length > 0 ? (
            filteredWords.map((item) => (
              <article key={item.id} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-stone-100 transition-all hover:shadow-md">
                
                {/* Word & Pronunciation */}
                <div className="mb-6">
                  <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2">{item.word}</h2>
                  <div className="flex flex-wrap items-baseline gap-3 text-stone-500">
                    <span className="italic font-medium text-stone-700">{item.partOfSpeech}</span>
                    <span className="text-sm">{item.pronunciation}</span>
                  </div>
                </div>

                {/* Roots & Etymology */}
                <div className="mb-6 pb-6 border-b border-stone-100 space-y-2">
                  <p className="text-sm text-stone-500">
                    <span className="font-semibold uppercase tracking-wider text-xs mr-2">Roots:</span> 
                    {item.roots}
                  </p>
                  {item.dateCoined && (
                    <p className="text-sm text-stone-500">
                      <span className="font-semibold uppercase tracking-wider text-xs mr-2">First Known Use:</span> 
                      {item.dateCoined}
                    </p>
                  )}
                </div>

                {/* Definition */}
                <div className="prose prose-stone mb-8">
                  <p className="text-lg leading-relaxed text-stone-800">
                    {item.definition}
                  </p>
                </div>

                {/* Forms (if available) */}
                {(item.adjective || item.verb) && (
                  <div className="flex gap-4 mb-6 text-sm text-stone-600 bg-stone-50 p-4 rounded-lg">
                    {item.verb && <div><strong>Verb:</strong> {item.verb}</div>}
                    {item.adjective && <div><strong>Adjective:</strong> {item.adjective}</div>}
                  </div>
                )}

                {/* Example Quote */}
                <blockquote className="relative pl-6 text-stone-600 italic border-l-4 border-stone-300">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-stone-200 -z-10" />
                  "{item.example}"
                </blockquote>
                
              </article>
            ))
          ) : (
            <div className="text-center py-20 text-stone-500">
              <p className="text-xl">No words found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-8 mt-4 border-t border-stone-200 flex flex-col items-center gap-4">
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Jac21" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-700 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jeremycantu/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-700 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/jeremy.cantu21/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-700 transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-stone-400">
          Glossa by <a href="https://www.jeremycantu.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 underline underline-offset-2 transition-colors">Jeremy Cantu</a>
        </p>
      </footer>
    </div>
  );
}