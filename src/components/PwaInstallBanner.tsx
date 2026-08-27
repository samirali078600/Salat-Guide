import React, { useState, useEffect } from 'react';
import { Download, Share2, X, Smartphone, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { Logo } from './Logo';

interface PwaInstallBannerProps {
  currentLanguage: Language;
}

export const PwaInstallBanner: React.FC<PwaInstallBannerProps> = ({ currentLanguage }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if app is already running in standalone (installed) mode
    const isRunningStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(isRunningStandalone);

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);

    // Listen for beforeinstallprompt on Chromium / Android / Desktop
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setIsStandalone(true);
      }
    } else if (isIos) {
      setShowIosGuide(true);
    } else {
      // General prompt
      alert(
        currentLanguage === 'urdu'
          ? 'اپنے براؤزر کے مینو (3 ڈاٹس) پر کلک کر کے "Add to Home Screen" یا "Install App" منتخب کریں۔'
          : currentLanguage === 'hindi'
          ? 'अपने ब्राउज़र के मेनू (3 डॉट्स) पर क्लिक करके "Add to Home Screen" या "Install App" चुनें।'
          : 'Tap your browser menu (3 dots) and select "Install app" or "Add to Home Screen".'
      );
    }
  };

  if (isStandalone || isDismissed) {
    return null;
  }

  const isRtl = currentLanguage === 'urdu';

  return (
    <>
      {/* Floating / Top Install Callout Card */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-950 to-stone-900 text-white p-4 sm:p-5 shadow-lg border border-emerald-700/50 relative overflow-hidden animate-fadeIn">
        {/* Subtle decorative background circle */}
        <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-emerald-500/10 pointer-events-none blur-xl"></div>

        <div className="flex items-start sm:items-center justify-between gap-3">
          <div className={`flex items-center gap-3.5 flex-1 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
            <Logo size="md" className="shrink-0 shadow-md ring-2 ring-emerald-500/30" />
            <div>
              <div className={`flex items-center gap-2 flex-wrap ${isRtl ? 'flex-row-reverse' : ''}`}>
                <h3 className="font-bold text-sm sm:text-base text-emerald-100">
                  {currentLanguage === 'urdu'
                    ? 'صلٰوۃ گائیڈ ایپ انسٹال کریں'
                    : currentLanguage === 'hindi'
                    ? 'सलात गाइड ऐप इनस्टॉल करें'
                    : 'Install Salat Guide App'}
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                  Offline Ready
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                {currentLanguage === 'urdu'
                  ? 'بغیر انٹرنیٹ ۵ وقت کی نماز کا مکمل طریقہ اور دعائیں اپنے فون پر محفوظ رکھیں'
                  : currentLanguage === 'hindi'
                  ? 'बिना इंटरनेट 5 वक़्त की नमाज़ का पूरा तरीक़ा व दुआएं फोन की होम स्क्रीन पर पाएं'
                  : 'Fast offline access directly on your phone home screen — works anytime'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {currentLanguage === 'urdu'
                  ? 'انسٹال کریں'
                  : currentLanguage === 'hindi'
                  ? 'इनस्टॉल करें'
                  : 'Install'}
              </span>
            </button>

            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 text-stone-400 hover:text-stone-200 rounded-lg transition-colors cursor-pointer"
              title="Dismiss"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* iOS Installation Instruction Modal */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-emerald-900/10 text-stone-800">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-800" />
                <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                  {currentLanguage === 'urdu'
                    ? 'آئی فون پر ایپ انسٹال کرنے کا طریقہ'
                    : currentLanguage === 'hindi'
                    ? 'iPhone पर ऐप इनस्टॉल करने का तरीक़ा'
                    : 'Install on iPhone / iPad'}
                </h4>
              </div>
              <button
                onClick={() => setShowIosGuide(false)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`py-4 space-y-3 text-xs sm:text-sm ${isRtl ? 'font-urdu text-right' : ''}`}>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  1
                </span>
                <p>
                  {currentLanguage === 'urdu'
                    ? 'سفاری براؤزر کے نیچے موجود شیئر بٹن (Share Button)'
                    : currentLanguage === 'hindi'
                    ? 'सफ़ारी ब्राउज़र के नीचे मौजूद शेयर बटन (Share)'
                    : 'Tap the Share button at the bottom of Safari'}{' '}
                  <Share2 className="w-4 h-4 inline text-blue-600 mx-1" />
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  2
                </span>
                <p>
                  {currentLanguage === 'urdu'
                    ? 'نیچے سکرول کر کے "Add to Home Screen" پر کلک کریں'
                    : currentLanguage === 'hindi'
                    ? 'नीचे स्क्रॉल करके "Add to Home Screen" पर टैप करें'
                    : 'Scroll down and tap "Add to Home Screen"'}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  3
                </span>
                <p>
                  {currentLanguage === 'urdu'
                    ? 'اوپر دائیں کونے میں "Add" پر کلک کریں۔ ایپ آپ کی ہوم سکرین پر آ جائے گی!'
                    : currentLanguage === 'hindi'
                    ? 'ऊपर दाईं तरफ "Add" पर टैप करें। ऐप आपकी होम स्क्रीन पर आ जाएगी!'
                    : 'Tap "Add" in the top right corner. The app will appear on your home screen!'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full mt-2 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              {currentLanguage === 'urdu' ? 'سمجھ گیا' : currentLanguage === 'hindi' ? 'समझ आ गया' : 'Got it'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
