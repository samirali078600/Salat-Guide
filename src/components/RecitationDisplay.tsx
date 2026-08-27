import React from 'react';
import { RecitationItem, Language } from '../types';

interface RecitationDisplayProps {
  recitation: RecitationItem;
  currentLanguage: Language;
}

export const RecitationDisplay: React.FC<RecitationDisplayProps> = ({
  recitation,
  currentLanguage
}) => {
  return (
    <div id={`recitation-${recitation.id}`} className="my-4 bg-stone-50/80 rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
      {/* Recitation Title Bar */}
      <div className="bg-emerald-900/5 px-4 py-2.5 border-b border-stone-200/70 flex items-center justify-between flex-wrap gap-2">
        <h4 className="text-sm font-semibold text-emerald-950 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          {recitation.name[currentLanguage]}
        </h4>
        {recitation.repeatCount && (
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/60">
            {currentLanguage === 'urdu'
              ? `${recitation.repeatCount} مرتبہ پڑھیں`
              : currentLanguage === 'hindi'
              ? `${recitation.repeatCount} बार पढ़ें`
              : `Recite ${recitation.repeatCount} times`}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* 1. ARABIC (Large, highly readable) */}
        <div id={`recitation-arabic-${recitation.id}`} className="bg-white p-4 sm:p-5 rounded-xl border border-emerald-900/10 text-center">
          <div className="text-[11px] font-bold tracking-wider uppercase text-emerald-800/80 mb-2">
            Arabic (عربي)
          </div>
          <div
            dir="rtl"
            className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-emerald-950 font-medium leading-loose sm:leading-loose tracking-normal select-text"
          >
            {recitation.arabic}
          </div>
        </div>

        {/* 2. HINGLISH */}
        <div id={`recitation-hinglish-${recitation.id}`} className="p-3.5 rounded-xl bg-stone-100/70 border border-stone-200/80">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 bg-stone-200 px-2 py-0.5 rounded-md">
              Hinglish
            </span>
            <span className="text-xs text-stone-500 font-medium">Pronunciation & Meaning</span>
          </div>
          <p className="text-stone-900 font-medium text-sm sm:text-base leading-relaxed">
            "{recitation.hinglish}"
          </p>
          {recitation.hinglishMeaning && (
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
              <span className="font-semibold text-stone-700">Tarjuma (Meaning): </span>
              {recitation.hinglishMeaning}
            </p>
          )}
        </div>

        {/* 3. HINDI */}
        <div id={`recitation-hindi-${recitation.id}`} className="p-3.5 rounded-xl bg-emerald-50/40 border border-emerald-100">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md font-hindi">
              हिन्दी (Hindi)
            </span>
            <span className="text-xs text-stone-500 font-hindi">उच्चारण एवं अर्थ</span>
          </div>
          <p className="text-stone-900 font-medium text-sm sm:text-base font-hindi leading-relaxed">
            "{recitation.hindi}"
          </p>
          {recitation.hindiMeaning && (
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 font-hindi leading-relaxed">
              <span className="font-semibold text-stone-800">तर्जुमा (अर्थ): </span>
              {recitation.hindiMeaning}
            </p>
          )}
        </div>

        {/* 4. URDU */}
        <div id={`recitation-urdu-${recitation.id}`} dir="rtl" className="p-3.5 rounded-xl bg-amber-50/40 border border-amber-100/80 text-right">
          <div className="flex items-center justify-end gap-2 mb-1.5">
            <span className="text-xs text-stone-500 font-urdu">تلفظ و مفہوم</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md font-urdu">
              اردو (Urdu)
            </span>
          </div>
          <p className="text-stone-900 font-medium text-sm sm:text-base font-urdu leading-loose">
            "{recitation.urdu}"
          </p>
          {recitation.urduMeaning && (
            <p className="text-xs sm:text-sm text-stone-700 mt-1.5 font-urdu leading-loose">
              <span className="font-bold text-stone-900">ترجمہ: </span>
              {recitation.urduMeaning}
            </p>
          )}
        </div>

        {/* Optional Note */}
        {recitation.note && (
          <div className="bg-stone-200/50 p-2.5 rounded-lg text-xs text-stone-600 border border-stone-300/40">
            <span className="font-semibold text-stone-800">Note: </span>
            {recitation.note[currentLanguage]}
          </div>
        )}
      </div>
    </div>
  );
};
