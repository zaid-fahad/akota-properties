import React, { useState } from 'react';
import { Calculator, Coins, ArrowRight, ShieldCheck, PieChart } from 'lucide-react';
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
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="calculator">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Calculator size={14} /> {t('calcBadge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {t('calcHeading1')} <span className="text-emerald-400">{t('calcHeading2')}</span>
          </h2>
          <p className="text-emerald-100/70 text-base md:text-lg mt-4 font-medium">
            {t('calcSubtitle')}
          </p>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-6 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1 */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">1</span> 
                  {t('step1Label')}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {SHARES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedShareIndex(idx)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        selectedShareIndex === idx 
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/40 font-bold scale-[1.02]' 
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <p className="text-sm font-black">{language === 'en' ? (s.kathaEn || s.katha) : s.katha}</p>
                      <p className="text-xs opacity-80 mt-1">{s.size}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">2</span> 
                  {t('step2Label')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFinishGrade('standard')}
                    className={`p-3.5 rounded-2xl border text-xs font-bold text-center transition-all ${
                      finishGrade === 'standard' 
                        ? 'bg-emerald-600 border-emerald-400 text-white shadow-md' 
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {t('finishStandard')}
                  </button>
                  <button
                    onClick={() => setFinishGrade('luxury')}
                    className={`p-3.5 rounded-2xl border text-xs font-bold text-center transition-all ${
                      finishGrade === 'luxury' 
                        ? 'bg-emerald-600 border-emerald-400 text-white shadow-md' 
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
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
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">3</span> 
                    {t('step3Label')}
                  </label>
                  <span className="text-white text-sm font-black bg-emerald-950 border border-emerald-700/50 px-3 py-1 rounded-xl">
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
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>18 {t('months')}</span>
                  <span>24 {t('months')}</span>
                  <span>30 {t('months')}</span>
                  <span>36 {t('months')}</span>
                </div>
              </div>

            </div>

            {/* Live Calculation Output */}
            <div className="lg:col-span-5 bg-emerald-950/80 border border-emerald-700/40 rounded-[2.5rem] p-6 md:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/60">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <PieChart size={16} /> {t('totalSummary')}
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {t('savings')} {currentShare.savingsPercent}
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">{t('landPriceShare')}</span>
                  <span className="font-bold text-white">{formatTk(currentShare.priceNumeric)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">{t('estConstCost')}</span>
                  <span className="font-bold text-white">{formatTk(estimatedConst)}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-emerald-800/60">
                  <span className="font-extrabold text-white text-base">{t('myTotalCost')}</span>
                  <span className="font-black text-emerald-400 text-xl">{formatTk(totalCost)}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>{t('developerMarketPrice')}</span>
                  <span className="line-through">{formatTk(developerPrice)}</span>
                </div>
              </div>

              {/* Monthly Installment Box */}
              <div className="bg-emerald-600/30 border border-emerald-500/40 p-4 rounded-2xl text-center">
                <p className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">{t('estMonthlyEmi')}</p>
                <p className="text-2xl font-black text-white mt-1">
                  {language === 'en' ? `Tk ${Math.round(monthlyInstallment).toLocaleString()}` : `৳ ${Math.round(monthlyInstallment).toLocaleString('bn-BD')}`} {t('perMonth')}
                </p>
                <p className="text-[10px] text-emerald-300 mt-1">{t('emiSub')}</p>
              </div>

              {/* Direct Booking Action */}
              <button
                onClick={onOpenBooking}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-2xl shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-base active:scale-95"
              >
                {t('btnBookBudget')} <ArrowRight size={18} />
              </button>

              <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck size={12} className="text-emerald-400" /> {t('safKablaGuarantee')}
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
