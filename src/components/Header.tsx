import React from 'react';
import { Language } from '../types';
import { Logo } from './Logo';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onHomeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onHomeClick
}) => {
  const titles: Record<Language, string> = {
    hinglish: "Salat Guide",
    hindi: "सलात गाइड (Salat Guide)",
    urdu: "صلٰوۃ گائیڈ (Salat Guide)"
  };

  const subtitles: Record<Language, string> = {
    hinglish: "5 Waqt ki Namaz Step by Step — Recitations & Method",
    hindi: "5 वक़्त की नमाज़ का मुकम्मल तरीक़ा और दुआएं",
    urdu: "۵ وقت کی نماز کا مکمل طریقہ اور مسنون دعائیں"
  };

  const isRtl = currentLanguage === 'urdu';

  return (
    <header id="main-header" className="bg-[#FAF9F5] border-b border-emerald-900/10 sticky top-0 z-30 backdrop-blur-md bg-opacity-95">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5">
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
          {/* Brand / Title with Custom Vector Logo */}
          <div 
            id="brand-section"
            onClick={onHomeClick}
            className={`text-center sm:text-left cursor-pointer group ${isRtl ? 'sm:text-right' : ''}`}
          >
            <div className={`flex items-center justify-center sm:justify-start gap-3 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
              <Logo size="md" />
              <div>
                <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {titles[currentLanguage]}
                  </h1>
                  <span className="hidden xs:inline-block text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md border border-emerald-300/60">
                    Step by Step
                  </span>
                </div>
                <p className={`text-xs sm:text-sm text-stone-600 mt-0.5 font-medium ${isRtl ? 'font-urdu text-sm' : ''}`}>
                  {subtitles[currentLanguage]}
                </p>
              </div>
            </div>
          </div>

          {/* Language Selector */}
          <div id="language-selector-wrapper" className="flex items-center gap-1.5 bg-stone-200/70 p-1 rounded-xl border border-stone-300/60">
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider px-2 hidden md:inline">
              Language:
            </span>
            <button
              id="lang-btn-hinglish"
              type="button"
              onClick={() => onLanguageChange('hinglish')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                currentLanguage === 'hinglish'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-emerald-900 hover:bg-stone-300/50'
              }`}
            >
              Hinglish
            </button>
            <button
              id="lang-btn-hindi"
              type="button"
              onClick={() => onLanguageChange('hindi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-hindi transition-all duration-150 ${
                currentLanguage === 'hindi'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-emerald-900 hover:bg-stone-300/50'
              }`}
            >
              हिन्दी (Hindi)
            </button>
            <button
              id="lang-btn-urdu"
              type="button"
              onClick={() => onLanguageChange('urdu')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-urdu transition-all duration-150 ${
                currentLanguage === 'urdu'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-emerald-900 hover:bg-stone-300/50'
              }`}
            >
              اردو (Urdu)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
