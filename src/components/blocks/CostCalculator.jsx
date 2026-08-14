import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, PieChart } from 'lucide-react';
import { SHARES } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function CostCalculator({ onOpenBooking }) {
  const [selectedShareIndex, setSelectedShareIndex] = useState(0);
  const [months, setMonths] = useState(30);
  const [finishGrade, setFinishGrade] = useState('standard');
  const { language, t } = useLanguage();

  const currentShare = SHARES[selectedShareIndex];
  
  const constMultiplier = finishGrade === 'luxury' ? 1.15 : 1.0;
  const estimatedConst = currentShare.estimatedConstNumeric * constMultiplier;
  const totalCost = currentShare.priceNumeric + estimatedConst;
  const developerPrice = currentShare.priceNumeric * 2.1 + estimatedConst * 1.3;
  const monthlyInstallment = estimatedConst / months;

  const formatTk = (amount) => {
    if (language === 'en') {
      if (amount >= 10000000) {
        return `Tk ${(amount / 10000000).toFixed(2)} Crore`;
      } else {
        return `Tk ${(amount / 100000).toFixed(2)} Lac`;
      }
    } else {
      if (amount >= 10000000) {
        return `৳ ${(amount / 10000000).toFixed(2)} কোটি`;
      } else {
        return `৳ ${(amount / 100000).toFixed(2)} লক্ষ`;
      }
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800" id="calculator">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-800 border border-emerald-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Calculator size={14} /> {t('calcBadge')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            {t('calcHeading1')} <span className="text-emerald-400">{t('calcHeading2')}</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2 sm:mt-3 font-medium">
            {t('calcSubtitle')}
          </p>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Interactive Calculator Card */}
        <div className="w-full max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              
              {/* Step 1 */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px]">1</span> 
                  {t('step1Label')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {SHARES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedShareIndex(idx)}
                      className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all ${
                        selectedShareIndex === idx 
                          ? 'bg-emerald-800 border-emerald-500 text-white font-bold shadow-md' 
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-black">{language === 'en' ? (s.kathaEn || s.katha) : s.katha}</p>
                      <p className="text-[11px] sm:text-xs opacity-90 mt-0.5 font-semibold">{s.size}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px]">2</span> 
                  {t('step2Label')}
                </label>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setFinishGrade('standard')}
                    className={`p-3 sm:p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                      finishGrade === 'standard' 
                        ? 'bg-emerald-800 border-emerald-500 text-white shadow-md' 
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {t('finishStandard')}
                  </button>
                  <button
                    onClick={() => setFinishGrade('luxury')}
                    className={`p-3 sm:p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                      finishGrade === 'luxury' 
                        ? 'bg-emerald-800 border-emerald-500 text-white shadow-md' 
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {t('finishLuxury')}
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px]">3</span> 
                    {t('step3Label')}
                  </label>
                  <span className="text-white text-xs font-black bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">
                    {months} {t('months')}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="18" 
                  max="36" 
                  step="6"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-slate-800"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-400">
                  <span>18 {t('months')}</span>
                  <span>24 {t('months')}</span>
                  <span>30 {t('months')}</span>
                  <span>36 {t('months')}</span>
                </div>
              </div>

            </div>

            {/* Live Calculation Output */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <PieChart size={16} /> {t('totalSummary')}
                </span>
                <span className="bg-emerald-900/80 text-emerald-300 text-[11px] font-black px-2.5 py-1 rounded-md border border-emerald-700">
                  {t('savings')} {currentShare.savingsPercent}
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-semibold">{t('landPriceShare')}</span>
                  <span className="font-bold text-white">{formatTk(currentShare.priceNumeric)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-semibold">{t('estConstCost')}</span>
                  <span className="font-bold text-white">{formatTk(estimatedConst)}</span>
                </div>
                <div className="flex justify-between items-center pt-2.5 border-t border-slate-800">
                  <span className="font-black text-white text-sm sm:text-base">{t('myTotalCost')}</span>
                  <span className="font-black text-emerald-400 text-lg sm:text-xl">{formatTk(totalCost)}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>{t('developerMarketPrice')}</span>
                  <span className="line-through font-semibold">{formatTk(developerPrice)}</span>
                </div>
              </div>

              {/* Monthly Installment Box */}
              <div className="bg-emerald-950/80 border border-emerald-800 p-3.5 rounded-xl text-center">
                <p className="text-[10px] sm:text-[11px] font-black text-emerald-300 uppercase tracking-wider">{t('estMonthlyEmi')}</p>
                <p className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {language === 'en' ? `Tk ${Math.round(monthlyInstallment).toLocaleString()}` : `৳ ${Math.round(monthlyInstallment).toLocaleString('bn-BD')}`} {t('perMonth')}
                </p>
                <p className="text-[10px] text-slate-300 mt-0.5 font-semibold">{t('emiSub')}</p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBooking}
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-black py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-95"
              >
                {t('btnBookBudget')} <ArrowRight size={16} />
              </button>

              <p className="text-[10px] sm:text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 font-semibold">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" /> {t('safKablaGuarantee')}
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
