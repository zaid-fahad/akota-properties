import React from 'react';
import { Link } from 'react-router-dom';
import { Maximize, ArrowRight, ShieldCheck, Bed, Bath, Compass } from 'lucide-react';
import { SHARES } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function ShareComparison({ onOpenBooking }) {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200" id="shares">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <ShieldCheck size={14} /> {t('sharesBadge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {t('sharesHeading1')} <span className="text-emerald-700">{t('sharesHeading2')}</span>
          </h2>
          <p className="text-slate-700 text-base mt-3 font-medium">
            {t('sharesSubtitle')}
          </p>
          <div className="w-16 h-1 bg-emerald-700 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Share Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {SHARES.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white border rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 ${
                item.popular 
                  ? 'border-emerald-600 shadow-xl ring-2 ring-emerald-600/30' 
                  : 'border-slate-300 shadow-md hover:shadow-lg hover:border-slate-400'
              }`}
            >
              <div>
                {/* Popular Badge */}
                {item.popular && (
                  <div className="inline-block bg-emerald-700 text-white font-extrabold text-[11px] uppercase px-3 py-1 rounded-md mb-4">
                    {t('popularShare')}
                  </div>
                )}

                {/* Header Icon & Katha */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-black text-lg">
                    <Maximize size={22} />
                  </div>
                  <span className="bg-slate-100 text-slate-800 text-xs font-black px-3 py-1 rounded-md border border-slate-200">
                    {language === 'en' ? '36 Shares' : `${item.share}`}
                  </span>
                </div>

                {/* Title & Size */}
                <h3 className="text-2xl font-black text-slate-900">
                  {language === 'en' ? `${item.kathaEn || item.katha} Land Share` : `${item.katha} প্রজেক্ট শেয়ার`}
                </h3>
                <p className="text-emerald-800 font-extrabold text-base mt-1">{item.size} {t('premiumFlat')}</p>
                <p className="text-xs text-slate-600 mt-2 font-medium leading-relaxed">
                  {language === 'en' ? (item.recommendedForEn || item.recommendedFor) : item.recommendedFor}
                </p>

                {/* Specs List */}
                <div className="grid grid-cols-3 gap-2 my-5 p-3 bg-slate-100 rounded-xl border border-slate-200 text-center text-xs font-bold text-slate-800">
                  <div className="flex flex-col items-center gap-1">
                    <Bed size={16} className="text-emerald-700" />
                    <span>{item.beds} {t('beds')}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-slate-300">
                    <Bath size={16} className="text-emerald-700" />
                    <span>{item.baths} {t('baths')}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Compass size={16} className="text-emerald-700" />
                    <span>{item.balconies} {t('balconies')}</span>
                  </div>
                </div>

                {/* Financial Breakdown */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-semibold">{t('landPriceShare')}</span>
                    <span className="font-black text-emerald-800 text-base">
                      {language === 'en' ? `Tk ${(item.priceNumeric/100000).toFixed(0)} Lac` : `৳ ${item.price}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-semibold">{t('estConstCost')}</span>
                    <span className="font-bold text-slate-900">
                      {language === 'en' ? `Tk ${(item.estimatedConstNumeric/100000).toFixed(0)} Lac` : `৳ ${item.estimatedConstCost}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-2.5 rounded-xl text-emerald-950 border border-emerald-200">
                    <span className="font-bold text-xs">{t('totalLandShareCost')}</span>
                    <span className="font-black text-base">
                      {language === 'en' ? `Tk ${(item.totalCostNumeric/100000).toFixed(0)} Lac` : `৳ ${item.totalCost}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>{t('developerMarketPrice')}</span>
                    <span className="line-through font-semibold text-slate-500">
                      {language === 'en' ? `Tk ${((item.priceNumeric * 2.1 + item.estimatedConstNumeric * 1.3)/100000).toFixed(0)} Lac` : `৳ ${item.marketPrice}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 space-y-2.5">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  {t('btnBookShare')} <ArrowRight size={16} />
                </button>
                <Link
                  to="/floor-plans"
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-2.5 rounded-xl transition-colors block text-center text-xs border border-slate-200"
                >
                  {t('btnViewLayout')}
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
