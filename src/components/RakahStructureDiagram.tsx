import React from 'react';
import { RakahVisualFlow, Language } from '../types';

interface RakahStructureDiagramProps {
  flows: RakahVisualFlow[];
  currentLanguage: Language;
}

export const RakahStructureDiagram: React.FC<RakahStructureDiagramProps> = ({
  flows,
  currentLanguage
}) => {
  const isRtl = currentLanguage === 'urdu';

  return (
    <div id="rakah-structure-diagram" className="my-6 bg-white rounded-2xl p-5 sm:p-6 border border-emerald-900/15 shadow-xs">
      <div className={`flex items-center gap-2 mb-4 pb-3 border-b border-stone-100 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
        <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
          📋
        </div>
        <h3 className={`text-base sm:text-lg font-bold text-emerald-950 ${isRtl ? 'font-urdu' : ''}`}>
          {currentLanguage === 'urdu'
            ? 'رکعت وار نچوڑ اور خاکہ'
            : currentLanguage === 'hindi'
            ? 'रकअत का ढांचा (Visual Sequence)'
            : "Rak'ah-by-Rak'ah Visual Structure"}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {flows.map((flow, idx) => (
          <div
            key={idx}
            id={`rakah-flow-card-${flow.rakahNumber}`}
            className="p-4 rounded-xl bg-[#FAF9F5] border border-stone-200/80 hover:border-emerald-300 transition-colors"
          >
            <div className={`flex items-center justify-between gap-2 mb-3 pb-2 border-b border-stone-200/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className={`font-bold text-sm text-emerald-950 ${isRtl ? 'font-urdu' : ''}`}>
                {flow.title[currentLanguage]}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-100/80 text-emerald-900">
                {flow.type[currentLanguage]}
              </span>
            </div>

            {/* Sequence Flow */}
            <div className={`space-y-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
              {flow.steps.map((st, sIdx) => (
                <div key={sIdx} className={`flex items-center gap-2 text-xs text-stone-700 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className="text-emerald-700 font-bold text-[10px]">
                    {isRtl ? '←' : '→'}
                  </span>
                  <span className="font-medium bg-white px-2 py-1 rounded-md border border-stone-200/70 shadow-2xs inline-block">
                    {st}
                  </span>
                </div>
              ))}
            </div>

            <p className={`mt-3 pt-2 text-xs text-stone-600 border-t border-stone-200/50 leading-relaxed ${isRtl ? 'font-urdu text-right' : ''}`}>
              {flow.summary[currentLanguage]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
