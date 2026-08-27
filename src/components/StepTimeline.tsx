import React from 'react';
import { NamazStep, Language } from '../types';
import { RecitationDisplay } from './RecitationDisplay';

interface StepTimelineProps {
  steps: NamazStep[];
  currentLanguage: Language;
}

export const StepTimeline: React.FC<StepTimelineProps> = ({
  steps,
  currentLanguage
}) => {
  const isRtl = currentLanguage === 'urdu';

  return (
    <div id="namaz-step-timeline" className="my-8 relative">
      {/* Vertical decorative connecting line */}
      <div className={`absolute top-6 bottom-6 ${isRtl ? 'right-4 sm:right-6' : 'left-4 sm:left-6'} w-0.5 bg-emerald-200/60 hidden sm:block`}></div>

      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.id}
            id={`step-card-${step.stepNumber}`}
            className="relative bg-white rounded-2xl p-5 sm:p-7 border border-stone-200/90 shadow-xs hover:border-emerald-300 transition-colors"
          >
            {/* Step Header */}
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-stone-100 ${isRtl ? 'sm:flex-row-reverse text-right' : ''}`}>
              <div className={`flex items-start sm:items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-800 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                  {step.stepNumber}
                </div>
                <div>
                  <h3 className={`text-base sm:text-lg font-bold text-stone-900 ${isRtl ? 'font-urdu' : ''}`}>
                    {step.title[currentLanguage]}
                  </h3>
                  <div className={`flex items-center gap-2 mt-0.5 ${isRtl ? 'justify-end' : ''}`}>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      {step.posture.name[currentLanguage]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Posture Description / How to perform */}
            <div className={`mt-3.5 p-3 rounded-xl bg-[#FAF9F5] border border-stone-200/60 text-xs sm:text-sm text-stone-700 leading-relaxed ${isRtl ? 'font-urdu text-right' : ''}`}>
              <p className="font-semibold text-stone-800 mb-1">
                {currentLanguage === 'urdu' ? 'طریقہ و کیفیت:' : currentLanguage === 'hindi' ? 'तरीक़ा एवं मुद्रा:' : 'How to do:'}
              </p>
              <p>{step.posture.desc[currentLanguage]}</p>
            </div>

            {/* Primary Recitation (if any) */}
            {step.recitation && (
              <div className="mt-4">
                <RecitationDisplay
                  recitation={step.recitation}
                  currentLanguage={currentLanguage}
                />
              </div>
            )}

            {/* Additional Recitations (e.g. Ta'awwudh / Tasmiyah / Tahmeed) */}
            {step.additionalRecitations && step.additionalRecitations.length > 0 && (
              <div className="mt-3 space-y-3">
                {step.additionalRecitations.map((addRec) => (
                  <RecitationDisplay
                    key={addRec.id}
                    recitation={addRec}
                    currentLanguage={currentLanguage}
                  />
                ))}
              </div>
            )}

            {/* Step Instruction */}
            <div className={`mt-4 pt-3 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed ${isRtl ? 'font-urdu text-right' : ''}`}>
              <span className="font-semibold text-emerald-950">
                {currentLanguage === 'urdu' ? 'رہنمائی: ' : currentLanguage === 'hindi' ? 'निर्देश: ' : 'Instruction: '}
              </span>
              {step.instruction[currentLanguage]}
            </div>

            {/* In-Depth Practical Breakdown / Real-Life Mechanics (Niyyah & Haath Baandhna Guide) */}
            {step.practicalDetails && step.practicalDetails.length > 0 && (
              <div className="mt-4 space-y-3 pt-2">
                {step.practicalDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/70"
                  >
                    <h4 className={`text-xs sm:text-sm font-bold text-emerald-950 mb-2 flex items-center gap-2 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span>{detail.heading[currentLanguage]}</span>
                    </h4>

                    {/* Step-by-step practical bullet points */}
                    <ul className={`space-y-1.5 text-xs sm:text-sm text-stone-700 ${isRtl ? 'font-urdu text-right' : ''}`}>
                      {detail.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-emerald-700 font-bold mt-0.5">•</span>
                          <span className="flex-1">{pt[currentLanguage]}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Exact spoken words format / template */}
                    {detail.sampleWords && (
                      <div className="mt-3 p-3 rounded-lg bg-white border border-emerald-200/90 shadow-2xs">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                          {currentLanguage === 'urdu'
                            ? 'زبان سے بولنے کے اصل الفاظ:'
                            : currentLanguage === 'hindi'
                            ? 'ज़ुबान से बोलने के असल शब्द:'
                            : 'Exact Spoken Words (Zuban se bolne ke alfaz):'}
                        </span>

                        {detail.sampleWords.arabic && (
                          <p className="text-right text-base sm:text-lg font-amiri font-semibold text-emerald-950 mb-1.5 leading-relaxed" dir="rtl">
                            {detail.sampleWords.arabic}
                          </p>
                        )}

                        <p className={`text-xs sm:text-sm font-semibold text-stone-900 ${currentLanguage === 'urdu' ? 'font-urdu text-right text-base' : ''}`}>
                          {detail.sampleWords[currentLanguage]}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Special Note (if any) */}
            {step.specialNote && (
              <div className={`mt-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 leading-relaxed ${isRtl ? 'font-urdu text-right' : ''}`}>
                <span className="font-bold">⚠️ {currentLanguage === 'urdu' ? 'اہم نکتہ: ' : currentLanguage === 'hindi' ? 'महत्वपूर्ण बिंदु: ' : 'Important Note: '}</span>
                {step.specialNote[currentLanguage]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
