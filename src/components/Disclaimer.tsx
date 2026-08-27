import React from 'react';
import { Language } from '../types';
import { DISCLAIMER_TEXT } from '../data/prayers';

interface DisclaimerProps {
  currentLanguage: Language;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ currentLanguage }) => {
  const isRtl = currentLanguage === 'urdu';

  return (
    <div
      id="scholarly-disclaimer"
      className="my-10 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs sm:text-sm text-stone-700 leading-relaxed shadow-2xs"
    >
      <div className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
        <span className="text-amber-800 text-lg shrink-0">ℹ️</span>
        <div>
          <h5 className={`font-bold text-amber-950 mb-1 ${isRtl ? 'font-urdu' : ''}`}>
            {currentLanguage === 'urdu'
              ? 'اہم شرعی وضاحتی نوٹ (Disclaimer):'
              : currentLanguage === 'hindi'
              ? 'महत्वपूर्ण सूचना (Disclaimer):'
              : 'Important Note (Disclaimer):'}
          </h5>
          <p className={`${isRtl ? 'font-urdu leading-loose' : ''}`}>
            {DISCLAIMER_TEXT[currentLanguage]}
          </p>
        </div>
      </div>
    </div>
  );
};
