import React from 'react';
import { PrayerData, Language } from '../types';

interface PrayerCardProps {
  prayer: PrayerData;
  currentLanguage: Language;
  onSelect: (prayerId: PrayerData['id']) => void;
}

export const PrayerCard: React.FC<PrayerCardProps> = ({
  prayer,
  currentLanguage,
  onSelect
}) => {
  const isRtl = currentLanguage === 'urdu';

  return (
    <div
      id={`prayer-card-${prayer.id}`}
      onClick={() => onSelect(prayer.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(prayer.id);
        }
      }}
      className="group relative bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-emerald-500/60 transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      {/* Top Banner with Arabic Calligraphy & Name */}
      <div>
        <div className={`flex items-start justify-between gap-3 mb-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div>
            <h3 className={`text-2xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors ${isRtl ? 'font-urdu' : ''}`}>
              {prayer.name[currentLanguage]}
            </h3>
            <span className="text-xs text-stone-500 font-medium mt-0.5 block">
              {prayer.timingDesc[currentLanguage]}
            </span>
          </div>

          <div
            dir="rtl"
            className="font-arabic text-xl sm:text-2xl text-emerald-800/80 bg-emerald-50/70 px-3 py-1 rounded-xl border border-emerald-100/80 shrink-0"
          >
            {prayer.arabicName}
          </div>
        </div>

        {/* Total Rak'ahs Pill */}
        <div className={`flex items-center gap-2 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <span className="px-3 py-1 rounded-full bg-emerald-900 text-white font-bold text-xs tracking-wide">
            {prayer.totalRakahs}{' '}
            {currentLanguage === 'urdu'
              ? 'رکعات'
              : currentLanguage === 'hindi'
              ? 'कुल रकअत'
              : "Rak'ahs Total"}
          </span>
        </div>

        {/* Rak'ahs Composition list */}
        <div className="space-y-1.5 pt-3 border-t border-stone-100">
          {prayer.rakahsBreakdown.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between text-xs py-0.5 ${isRtl ? 'flex-row-reverse text-right' : ''}`}
            >
              <span className={`font-semibold text-stone-800 ${isRtl ? 'font-urdu' : ''}`}>
                {item.name[currentLanguage]}
              </span>
              <span className="text-[11px] text-stone-500 font-medium">
                {item.status[currentLanguage]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className={`mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-950 transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}>
        <span>
          {currentLanguage === 'urdu'
            ? 'مکمل طریقہ اور دعائیں دیکھیں'
            : currentLanguage === 'hindi'
            ? 'नमाज़ का पूरा तरीक़ा देखें'
            : "View Step-by-Step Guide"}
        </span>
        <span className="text-base group-hover:translate-x-1 transition-transform">
          {isRtl ? '←' : '→'}
        </span>
      </div>
    </div>
  );
};
