import React from 'react';
import { ShieldCheck, ArrowRight, MapPin, Coins, Building2, Clock, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero({ onOpenBooking, onOpenBrochure }) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 sm:pt-36 md:pt-40 pb-36 sm:pb-32 lg:pb-36 overflow-hidden bg-slate-950 text-white">
      {/* Background Architectural Render with Dark Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover object-center brightness-[0.45] scale-100" 
          alt="Luxury Apartment Building in Uttara Diabari" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 my-auto">
        <div className="max-w-3xl space-y-5 sm:space-y-7">
          
          {/* Executive Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-white px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-md border border-emerald-600/50 max-w-full truncate">
            <ShieldCheck size={14} className="text-emerald-300 shrink-0" /> 
            <span className="truncate">{t('heroBadge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.15] tracking-tight break-words">
            {t('heroHeading1')} <br/>
            <span className="text-emerald-400 font-extrabold underline decoration-emerald-500 decoration-4 underline-offset-8">
              {t('heroHeading2')}
            </span>
          </h1>

          {/* Subtitle with High Contrast */}
          <p className="text-slate-100 text-sm sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            {t('heroSubtitle')}
          </p>

          {/* Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 max-w-2xl text-xs sm:text-sm font-bold text-slate-100">
            <div className="flex items-center gap-2.5 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-800">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <span>{t('bulletSafKabla')}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-800">
              <Zap size={18} className="text-emerald-400 shrink-0" />
              <span>{t('bulletMetro')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
            <button 
              onClick={onOpenBooking} 
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base shadow-xl flex items-center justify-center gap-2.5 transition-all active:scale-95 border border-emerald-500/30"
            >
              {t('btnConsultation')} <ArrowRight size={18} />
            </button>
            <button 
              onClick={onOpenBrochure}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all text-center"
            >
              {t('btnBrochure')}
            </button>
          </div>

        </div>
      </div>

      {/* Stats Summary Strip */}
      <div className="absolute bottom-0 inset-x-0 bg-slate-900 border-t border-slate-800 py-3.5 sm:py-5 z-20 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            <div className="flex items-center gap-2.5 sm:gap-4 px-1 sm:px-4">
              <div className="p-2 sm:p-3 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-xl shrink-0">
                <MapPin size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">{t('statLocation')}</p>
                <p className="font-extrabold text-white text-xs sm:text-sm truncate">{t('statLocationVal')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4 px-1 sm:px-4 pt-2 sm:pt-0">
              <div className="p-2 sm:p-3 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-xl shrink-0">
                <Coins size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">{t('statPrice')}</p>
                <p className="font-extrabold text-emerald-400 text-xs sm:text-base truncate">{t('statPriceVal')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4 px-1 sm:px-4 pt-2 sm:pt-0">
              <div className="p-2 sm:p-3 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-xl shrink-0">
                <Building2 size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">{t('statFloors')}</p>
                <p className="font-extrabold text-white text-xs sm:text-sm truncate">{t('statFloorsVal')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4 px-1 sm:px-4 pt-2 sm:pt-0">
              <div className="p-2 sm:p-3 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-xl shrink-0">
                <Clock size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">{t('statHandover')}</p>
                <p className="font-extrabold text-white text-xs sm:text-sm truncate">{t('statHandoverVal')}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
