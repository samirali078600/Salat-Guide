import React from 'react';
import { Home, Sun, Sunrise, Sunset, Moon, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Language, PrayerData } from '../types';

interface BottomNavBarProps {
  currentLanguage: Language;
  prayers: PrayerData[];
  selectedPrayerId: string | null;
  onSelectPrayer: (prayerId: string | null) => void;
  onOpenSettings: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentLanguage,
  prayers,
  selectedPrayerId,
  onSelectPrayer,
  onOpenSettings,
}) => {
  const getPrayerIcon = (id: string, isSelected: boolean) => {
    const iconClass = `w-5 h-5 ${isSelected ? 'text-amber-300' : 'text-stone-400 group-hover:text-emerald-300'}`;
    switch (id) {
      case 'fajr':
        return <Sunrise className={iconClass} />;
      case 'zuhr':
        return <Sun className={iconClass} />;
      case 'asr':
        return <Sun className={`${iconClass} opacity-80`} />;
      case 'maghrib':
        return <Sunset className={iconClass} />;
      case 'isha':
        return <Moon className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const getPrayerShortName = (prayer: PrayerData) => {
    if (currentLanguage === 'urdu') {
      switch (prayer.id) {
        case 'fajr': return 'فجر';
        case 'zuhr': return 'ظہر';
        case 'asr': return 'عصر';
        case 'maghrib': return 'مغرب';
        case 'isha': return 'عشاء';
      }
    }
    if (currentLanguage === 'hindi') {
      switch (prayer.id) {
        case 'fajr': return 'फज्र';
        case 'zuhr': return 'ज़ुहर';
        case 'asr': return 'अस्र';
        case 'maghrib': return 'मग़रिब';
        case 'isha': return 'इशा';
      }
    }
    return prayer.name.hinglish.split(' ')[0] || prayer.id;
  };

  return (
    <nav
      id="bottom-app-nav"
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-emerald-950 via-emerald-900 to-emerald-950 text-white border-t border-emerald-800/80 shadow-2xl backdrop-blur-lg px-2 pt-2 pb-safe"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {/* All Prayers / Home Tab */}
        <button
          onClick={() => onSelectPrayer(null)}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all group cursor-pointer ${
            selectedPrayerId === null
              ? 'bg-emerald-800/90 text-amber-300 shadow-inner'
              : 'text-stone-300 hover:text-white'
          }`}
          aria-label="All Prayers"
        >
          <Home className={`w-5 h-5 ${selectedPrayerId === null ? 'text-amber-300' : 'text-stone-400'}`} />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">
            {currentLanguage === 'urdu' ? 'تمام' : currentLanguage === 'hindi' ? 'सभी' : 'All'}
          </span>
        </button>

        {/* 5 Prayers Quick Switch Tabs */}
        {prayers.map((prayer) => {
          const isSelected = selectedPrayerId === prayer.id;
          return (
            <button
              key={prayer.id}
              onClick={() => onSelectPrayer(prayer.id)}
              className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all group cursor-pointer ${
                isSelected
                  ? 'bg-emerald-800/90 text-amber-300 shadow-inner scale-105'
                  : 'text-stone-300 hover:text-white'
              }`}
              aria-label={prayer.name.english}
            >
              {getPrayerIcon(prayer.id, isSelected)}
              <span className="text-[10px] font-bold mt-0.5 tracking-tight">
                {getPrayerShortName(prayer)}
              </span>
            </button>
          );
        })}

        {/* Settings / Tools Tab */}
        <button
          onClick={onOpenSettings}
          className="flex flex-col items-center py-1 px-2 rounded-xl transition-all text-stone-300 hover:text-amber-300 group cursor-pointer"
          aria-label="App Tools & Settings"
        >
          <SlidersHorizontal className="w-5 h-5 text-stone-400 group-hover:text-amber-300" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">
            {currentLanguage === 'urdu' ? 'ٹولز' : currentLanguage === 'hindi' ? 'टूल्स' : 'Tools'}
          </span>
        </button>
      </div>
    </nav>
  );
};
