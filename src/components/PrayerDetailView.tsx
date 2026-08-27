import React from 'react';
import { PrayerData, Language, PrayerId } from '../types';
import { StepTimeline } from './StepTimeline';
import { RakahStructureDiagram } from './RakahStructureDiagram';
import { PRAYERS_DATA } from '../data/prayers';

interface PrayerDetailViewProps {
  prayer: PrayerData;
  currentLanguage: Language;
  onBack: () => void;
  onSelectPrayer: (id: PrayerId) => void;
}

export const PrayerDetailView: React.FC<PrayerDetailViewProps> = ({
  prayer,
  currentLanguage,
  onBack,
  onSelectPrayer
}) => {
  const isRtl = currentLanguage === 'urdu';

  // Find next and previous prayers
  const currentIndex = PRAYERS_DATA.findIndex((p) => p.id === prayer.id);
  const prevPrayer = currentIndex > 0 ? PRAYERS_DATA[currentIndex - 1] : null;
  const nextPrayer = currentIndex < PRAYERS_DATA.length - 1 ? PRAYERS_DATA[currentIndex + 1] : null;

  return (
    <div id="prayer-detail-view" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 animate-fadeIn">
      {/* Back button & quick navigation */}
      <div className={`flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200/80 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <button
          id="back-to-home-btn"
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-emerald-900 hover:border-emerald-300 font-semibold text-xs sm:text-sm shadow-2xs transition-all"
        >
          <span>{isRtl ? '→' : '←'}</span>
          <span>
            {currentLanguage === 'urdu'
              ? 'تمام نمازوں کی فہرست'
              : currentLanguage === 'hindi'
              ? 'सभी नमाज़ें (होम)'
              : 'All 5 Prayers'}
          </span>
        </button>

        {/* Quick Prayer Switcher Pills */}
        <div className="flex items-center gap-1 overflow-x-auto py-1">
          {PRAYERS_DATA.map((p) => (
            <button
              key={p.id}
              id={`switch-prayer-${p.id}`}
              type="button"
              onClick={() => onSelectPrayer(p.id)}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                p.id === prayer.id
                  ? 'bg-emerald-800 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              } ${isRtl ? 'font-urdu' : ''}`}
            >
              {p.name[currentLanguage]}
            </button>
          ))}
        </div>
      </div>

      {/* Prayer Header Banner */}
      <div id="prayer-header-card" className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-900/15 shadow-xs mb-8">
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100 ${isRtl ? 'sm:flex-row-reverse text-right' : ''}`}>
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <h2 className={`text-3xl sm:text-4xl font-extrabold text-emerald-950 ${isRtl ? 'font-urdu' : ''}`}>
                {prayer.name[currentLanguage]}
              </h2>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs">
                {prayer.totalRakahs}{' '}
                {currentLanguage === 'urdu'
                  ? 'رکعات'
                  : currentLanguage === 'hindi'
                  ? 'कुल रकअत'
                  : "Rak'ahs"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              {prayer.timingDesc[currentLanguage]}
            </p>
          </div>

          <div
            dir="rtl"
            className="font-arabic text-3xl sm:text-4xl text-emerald-850 bg-emerald-50/80 px-5 py-2 rounded-2xl border border-emerald-200/70 self-start sm:self-center"
          >
            {prayer.arabicName}
          </div>
        </div>

        {/* Short Introduction */}
        <p className={`mt-5 text-sm sm:text-base text-stone-700 leading-relaxed ${isRtl ? 'font-urdu text-right leading-loose' : ''}`}>
          {prayer.intro[currentLanguage]}
        </p>

        {/* Rak'ahs Breakdown Grid */}
        <div className="mt-6 pt-5 border-t border-stone-100">
          <h4 className={`text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 ${isRtl ? 'text-right font-urdu' : ''}`}>
            {currentLanguage === 'urdu'
              ? 'رکعتوں کی تفصیل:'
              : currentLanguage === 'hindi'
              ? 'रकअतों का विवरण:'
              : "Rak'ahs Breakdown:"}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {prayer.rakahsBreakdown.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl bg-[#FAF9F5] border border-stone-200/80 ${isRtl ? 'text-right' : ''}`}
              >
                <div className={`font-bold text-stone-900 text-sm ${isRtl ? 'font-urdu' : ''}`}>
                  {item.name[currentLanguage]}
                </div>
                <div className={`text-[11px] text-emerald-800 font-medium mt-0.5 ${isRtl ? 'font-urdu' : ''}`}>
                  {item.status[currentLanguage]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Rak'ah Structure Flow */}
      <RakahStructureDiagram
        flows={prayer.rakahStructure}
        currentLanguage={currentLanguage}
      />

      {/* Step-by-Step Recitation Sequence Timeline */}
      <div className="my-8">
        <div className={`flex items-center justify-between gap-4 mb-4 pb-2 border-b border-stone-200/70 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
          <div>
            <h3 className={`text-xl sm:text-2xl font-bold text-emerald-950 ${isRtl ? 'font-urdu' : ''}`}>
              {currentLanguage === 'urdu'
                ? 'نماز میں کس مرحلے پر کیا پڑھنا ہے (مرحلہ وار رہنمائی)'
                : currentLanguage === 'hindi'
                ? 'नमाज़ में किस स्टेप पर क्या पढ़ना है (स्टेप-बाय-स्टेप)'
                : "Step-by-Step Recitations & Sequence"}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {currentLanguage === 'urdu'
                ? 'عربی متن، ہنگلش، ہندی اور اردو ترجمہ کے ساتھ'
                : currentLanguage === 'hindi'
                ? 'अरबी, हिंग्लिश, हिन्दी और उर्दू उच्चारण व अर्थ सहित'
                : 'Arabic recitation, Hinglish, Hindi, and Urdu transliterations & meanings'}
            </p>
          </div>
        </div>

        <StepTimeline
          steps={prayer.steps}
          currentLanguage={currentLanguage}
        />
      </div>

      {/* Bottom Prev / Next Prayer Navigation */}
      <div className={`mt-10 pt-6 border-t border-stone-200/80 flex items-center justify-between gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
        {prevPrayer ? (
          <button
            id="prev-prayer-btn"
            type="button"
            onClick={() => onSelectPrayer(prevPrayer.id)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-800 hover:border-emerald-400 font-semibold text-xs sm:text-sm shadow-2xs transition-all"
          >
            <span>{isRtl ? '→' : '←'}</span>
            <span>
              {currentLanguage === 'urdu'
                ? `پچھلی نماز (${prevPrayer.name[currentLanguage]})`
                : currentLanguage === 'hindi'
                ? `पिछली: ${prevPrayer.name[currentLanguage]}`
                : `Previous: ${prevPrayer.name[currentLanguage]}`}
            </span>
          </button>
        ) : (
          <div></div>
        )}

        {nextPrayer ? (
          <button
            id="next-prayer-btn"
            type="button"
            onClick={() => onSelectPrayer(nextPrayer.id)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 font-semibold text-xs sm:text-sm shadow-xs transition-all"
          >
            <span>
              {currentLanguage === 'urdu'
                ? `اگلی نماز (${nextPrayer.name[currentLanguage]})`
                : currentLanguage === 'hindi'
                ? `अगली: ${nextPrayer.name[currentLanguage]}`
                : `Next: ${nextPrayer.name[currentLanguage]}`}
            </span>
            <span>{isRtl ? '←' : '→'}</span>
          </button>
        ) : (
          <button
            id="finish-to-home-btn"
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 font-semibold text-xs sm:text-sm shadow-xs transition-all"
          >
            <span>
              {currentLanguage === 'urdu'
                ? 'تمام نمازوں کی فہرست پر واپس جائیں'
                : currentLanguage === 'hindi'
                ? 'सभी 5 नमाज़ों की सूची'
                : 'Back to All Prayers'}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
