import { useState, useEffect, useRef } from 'react';
import { Language, PrayerId } from './types';
import { PRAYERS_DATA } from './data/prayers';
import { Header } from './components/Header';
import { PrayerCard } from './components/PrayerCard';
import { PrayerDetailView } from './components/PrayerDetailView';
import { Disclaimer } from './components/Disclaimer';
import { Logo } from './components/Logo';
import { PwaInstallBanner } from './components/PwaInstallBanner';
import { BottomNavBar } from './components/BottomNavBar';
import { AppSettingsModal } from './components/AppSettingsModal';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('hinglish');
  const [selectedPrayerId, setSelectedPrayerId] = useState<PrayerId | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [keepScreenOn, setKeepScreenOn] = useState(false);
  const wakeLockRef = useRef<any>(null);

  // Check URL params for PWA shortcut deep links (e.g. ?prayer=fajr)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const prayerParam = params.get('prayer');
      if (prayerParam && ['fajr', 'zuhr', 'asr', 'maghrib', 'isha'].includes(prayerParam)) {
        setSelectedPrayerId(prayerParam as PrayerId);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Screen Wake Lock API implementation
  const handleToggleKeepScreenOn = async (active: boolean) => {
    setKeepScreenOn(active);
    if ('wakeLock' in navigator) {
      if (active) {
        try {
          wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
          wakeLockRef.current.addEventListener('release', () => {
            setKeepScreenOn(false);
          });
        } catch (err) {
          console.log('Wake Lock error:', err);
        }
      } else {
        if (wakeLockRef.current) {
          try {
            await wakeLockRef.current.release();
          } catch (e) {}
          wakeLockRef.current = null;
        }
      }
    }
  };

  // Re-acquire wake lock if tab becomes visible again
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible' && keepScreenOn && 'wakeLock' in navigator) {
        try {
          wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
        } catch (err) {}
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [keepScreenOn]);

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

  const handleSelectPrayer = (id: PrayerId | null) => {
    setSelectedPrayerId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedPrayerId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isRtl = currentLanguage === 'urdu';

  const fontSizeScaleClass =
    fontSize === 'large' ? 'text-[108%]' : fontSize === 'xlarge' ? 'text-[118%]' : 'text-[100%]';

  return (
    <div className={`min-h-screen bg-[#FAF9F5] text-stone-800 flex flex-col justify-between pb-20 sm:pb-0 ${fontSizeScaleClass}`}>
      <div>
        {/* Header with tools trigger */}
        <Header
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
          onHomeClick={handleBackToHome}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-7">
          {/* PWA Install Promo Banner */}
          {!selectedPrayer && <PwaInstallBanner currentLanguage={currentLanguage} />}

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
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 pt-1 sm:pt-4">
                <div className="flex justify-center mb-3">
                  <Logo size="lg" className="shadow-lg ring-4 ring-emerald-100/80" />
                </div>

                <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 px-3.5 py-1 rounded-full mb-2.5 shadow-2xs">
                  {currentLanguage === 'urdu'
                    ? 'نماز سیکھنے کی مکمل گائیڈ'
                    : currentLanguage === 'hindi'
                    ? 'नमाज़ सीखने की सम्पूर्ण गाइड'
                    : 'Islamic Prayer Learning Guide'}
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight mb-2.5">
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

                <p className="text-xs sm:text-sm text-stone-500 mt-1.5">
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

      {/* Mobile Bottom Navigation Bar */}
      <BottomNavBar
        currentLanguage={currentLanguage}
        prayers={PRAYERS_DATA}
        selectedPrayerId={selectedPrayerId}
        onSelectPrayer={handleSelectPrayer}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* App Tools, Text Size & Wake Lock Modal */}
      <AppSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentLanguage={currentLanguage}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        keepScreenOn={keepScreenOn}
        onToggleKeepScreenOn={handleToggleKeepScreenOn}
      />

      {/* Clean respectful Footer */}
      <footer id="app-footer" className="bg-[#FAF9F5] border-t border-stone-200/80 py-6 text-center text-xs text-stone-500 hidden sm:block">
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

