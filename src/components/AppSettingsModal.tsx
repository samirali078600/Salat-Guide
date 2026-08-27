import React, { useState, useEffect } from 'react';
import { X, Moon, Sun, Eye, Volume2, ShieldCheck, Share2, Download, Smartphone, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { Logo } from './Logo';

interface AppSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  fontSize: 'normal' | 'large' | 'xlarge';
  onFontSizeChange: (size: 'normal' | 'large' | 'xlarge') => void;
  keepScreenOn: boolean;
  onToggleKeepScreenOn: (active: boolean) => void;
}

export const AppSettingsModal: React.FC<AppSettingsModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  fontSize,
  onFontSizeChange,
  keepScreenOn,
  onToggleKeepScreenOn,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const handlePrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handlePrompt);
    return () => window.removeEventListener('beforeinstallprompt', handlePrompt);
  }, []);

  if (!isOpen) return null;

  const isRtl = currentLanguage === 'urdu';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Salat Guide — Step by Step',
          text: '5 Waqt ki Namaz Step by Step — Authentic Arabic recitations, Hinglish, Hindi, and Urdu guides',
          url: window.location.href,
        });
      } catch (err) {
        // Ignored or cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      alert(
        currentLanguage === 'urdu'
          ? 'ایپ کو انسٹال کرنے کے لیے اپنے براؤزر کے مینو میں جا کر "Add to Home screen" منتخب کریں۔'
          : currentLanguage === 'hindi'
          ? 'ऐप इनस्टॉल करने के लिए ब्राउज़र के मेनू से "Add to Home screen" चुनें।'
          : 'To install, open your browser menu and choose "Add to Home Screen" or "Install App".'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-emerald-900/10 text-stone-800 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <Logo size="sm" />
            <div>
              <h3 className="font-bold text-base sm:text-lg text-emerald-950">
                {currentLanguage === 'urdu'
                  ? 'ایپ سیٹنگز اور سہولیات'
                  : currentLanguage === 'hindi'
                  ? 'ऐप सेटिंग्स और सुविधाएं'
                  : 'App Settings & Tools'}
              </h3>
              <p className="text-xs text-stone-500">Salat Guide v1.0 • Offline Ready</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className={`py-4 space-y-4 ${isRtl ? 'font-urdu text-right' : ''}`}>
          {/* Keep Screen Awake Toggle (Wake Lock API) */}
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-900 shrink-0 mt-0.5">
                <Sun className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-emerald-950">
                  {currentLanguage === 'urdu'
                    ? 'اسکرین آن رکھیں (Keep Screen Awake)'
                    : currentLanguage === 'hindi'
                    ? 'स्क्रीन ऑन रखें (Keep Screen On)'
                    : 'Keep Screen Awake during Namaz'}
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                  {currentLanguage === 'urdu'
                    ? 'نماز پڑھتے یا دعائیں سیکھتے وقت فون کی اسکرین بند نہیں ہوگی'
                    : currentLanguage === 'hindi'
                    ? 'नमाज़ या दुआएं पढ़ते वक्त फोन की स्क्रीन लॉक/बंद नहीं होगी'
                    : 'Prevents display from dimming while reading prayer steps'}
                </p>
              </div>
            </div>

            <button
              onClick={() => onToggleKeepScreenOn(!keepScreenOn)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                keepScreenOn ? 'bg-emerald-700' : 'bg-stone-300'
              }`}
              role="switch"
              aria-checked={keepScreenOn}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  keepScreenOn ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Font Size Adjuster */}
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-800" />
              <span>
                {currentLanguage === 'urdu'
                  ? 'عربی اور ترجمے کا فونٹ سائز'
                  : currentLanguage === 'hindi'
                  ? 'अरबी और अनुवाद का फ़ॉन्ट साइज़'
                  : 'Text Size (Arabic & Recitations)'}
              </span>
            </h4>

            <div className="grid grid-cols-3 gap-2">
              {(['normal', 'large', 'xlarge'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => onFontSizeChange(size)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    fontSize === size
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {size === 'normal'
                    ? currentLanguage === 'urdu'
                      ? 'درمیانہ (100%)'
                      : 'Normal (100%)'
                    : size === 'large'
                    ? currentLanguage === 'urdu'
                      ? 'بڑا (115%)'
                      : 'Large (115%)'
                    : currentLanguage === 'urdu'
                    ? 'بہت بڑا (130%)'
                    : 'Extra Large (130%)'}
                </button>
              ))}
            </div>
          </div>

          {/* App Actions: Install & Share */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <button
              onClick={handleInstallApp}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {currentLanguage === 'urdu'
                  ? 'ایپ ڈاؤنلوڈ / انسٹال'
                  : currentLanguage === 'hindi'
                  ? 'ऐप इनस्टॉल करें'
                  : 'Install / Add to Home'}
              </span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm rounded-xl border border-stone-300/80 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-emerald-800" />
              <span>
                {isCopied
                  ? currentLanguage === 'urdu'
                    ? 'لنک کاپی ہو گیا!'
                    : 'Link Copied!'
                  : currentLanguage === 'urdu'
                  ? 'شیئر کریں'
                  : currentLanguage === 'hindi'
                  ? 'ऐप शेयर करें'
                  : 'Share App'}
              </span>
            </button>
          </div>

          {/* Offline Badge note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>100% Free & Offline Capable • No Ads</span>
          </div>
        </div>
      </div>
    </div>
  );
};
