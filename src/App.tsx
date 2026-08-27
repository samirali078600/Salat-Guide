import { useState, useEffect } from 'react';
import { Language, PrayerId } from './types';
import { PRAYERS_DATA } from './data/prayers';
import { Header } from './components/Header';
import { PrayerCard } from './components/PrayerCard';
import { PrayerDetailView } from './components/PrayerDetailView';
import { Disclaimer } from './components/Disclaimer';
import { Logo } from './components/Logo';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('hinglish');
  const [selectedPrayerId, setSelectedPrayerId] = useState<PrayerId | null>(null);

  // Sync title and html dir attribute based on language
  useEffect(() => {
    if (currentLanguage === 'urdu') {
      document.documentElement.setAttribute('lang', 'ur');
    } else if (currentLanguage === 'hindi') {
      document.documentElement.setAttribute('lang', 'hi');
    } else {
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [currentLanguage]);

  const selectedPrayer = selectedPrayerId
    ? PRAYERS_DATA.find((p) => p.id === selectedPrayerId) || null
    : null;

  const handleSelectPrayer = (id: PrayerId) => {
    setSelectedPrayerId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedPrayerId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isRtl = currentLanguage === 'urdu';

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 flex flex-col justify-between">
      <div>
        {/* Header */}
        <Header
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
          onHomeClick={handleBackToHome}
        />

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {selectedPrayer ? (
            /* Individual Prayer Step-by-Step Guide View */
            <PrayerDetailView
              prayer={selectedPrayer}
              currentLanguage={currentLanguage}
              onBack={handleBackToHome}
              onSelectPrayer={handleSelectPrayer}
            />
          ) : (
            /* Homepage View: Title, Subtitle, 5 Prayer Cards */
            <div id="homepage-container" className="animate-fadeIn">
              {/* Hero Greeting / Title Section */}
              <div className="text-center max-w-2xl mx-auto mb-10 pt-2 sm:pt-6">
                <div className="flex justify-center mb-4">
                  <Logo size="lg" className="shadow-lg ring-4 ring-emerald-100/80" />
                </div>

                <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
                  {currentLanguage === 'urdu'
                    ? 'نماز سیکھنے کی مکمل گائیڈ'
                    : currentLanguage === 'hindi'
                    ? 'नमाज़ सीखने की सम्पूर्ण गाइड'
                    : 'Islamic Prayer Learning Guide'}
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight mb-3">
                  {currentLanguage === 'urdu'
                    ? 'صلٰوۃ گائیڈ — مکمل نماز گائیڈ'
                    : currentLanguage === 'hindi'
                    ? 'सलात गाइड — नमाज़ स्टेप बाय स्टेप'
                    : 'Salat Guide — Step by Step'}
                </h1>

                <p className={`text-base sm:text-lg text-stone-600 font-medium ${isRtl ? 'font-urdu leading-loose' : ''}`}>
                  {currentLanguage === 'urdu'
                    ? '۵ وقت کی نماز میں کیا اور کیسے پڑھا جاتا ہے'
                    : currentLanguage === 'hindi'
                    ? '5 वक़्त की नमाज़ में क्या और कैसे पढ़ा जाता है'
                    : '5 Waqt ki Namaz mein kya aur kaise padha jata hai'}
                </p>

                <p className="text-xs sm:text-sm text-stone-500 mt-2">
                  {currentLanguage === 'urdu'
                    ? 'کسی بھی نماز پر کلک کر کے اس کی رکعتیں، ترتیب اور پڑھی جانے والی تمام دعائیں دیکھیں'
                    : currentLanguage === 'hindi'
                    ? 'नीचे दी गई किसी भी नमाज़ पर क्लिक करके उसकी रकअतें, क्रम और पढ़ी जाने वाली दुआएं देखें'
                    : 'Select any prayer below to see its Rak\'ahs, step-by-step sequence, and Arabic recitations'}
                </p>
              </div>

              {/* 5 Daily Prayers Grid */}
              <div id="prayers-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {PRAYERS_DATA.map((prayer) => (
                  <PrayerCard
                    key={prayer.id}
                    prayer={prayer}
                    currentLanguage={currentLanguage}
                    onSelect={handleSelectPrayer}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Scholarly Disclaimer */}
          <Disclaimer currentLanguage={currentLanguage} />
        </main>
      </div>

      {/* Clean respectful Footer */}
      <footer id="app-footer" className="bg-[#FAF9F5] border-t border-stone-200/80 py-6 text-center text-xs text-stone-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="font-bold text-emerald-950 text-sm">
              Salat Guide
            </span>
          </div>
          <p className="text-stone-500">
            5 Waqt ki Namaz Step by Step — Authentic Arabic text with Hinglish, Hindi, and Urdu recitations
          </p>
        </div>
      </footer>
    </div>
  );
}
