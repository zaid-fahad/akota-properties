import React from 'react';
import { Power, ShieldCheck, Building2, Trees, Lock, Car, ArrowRight, Award } from 'lucide-react';
import { AMENITIES } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

const iconMap = {
  Power: <Power size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Building2: <Building2 size={24} />,
  Trees: <Trees size={24} />,
  Lock: <Lock size={24} />,
  Car: <Car size={24} />
};

export default function AmenitiesGrid({ onOpenBooking }) {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 bg-white" id="amenities">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Award size={14} /> {t('amenitiesBadge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {t('amenitiesHeading1')} <span className="text-emerald-700">{t('amenitiesHeading2')}</span>
          </h2>
          <p className="text-slate-700 text-base mt-3 font-medium">
            {t('amenitiesSubtitle')}
          </p>
          <div className="w-16 h-1 bg-emerald-700 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-emerald-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                {iconMap[item.icon] || <Building2 size={24} />}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                {language === 'en' ? (item.titleEn || item.title) : item.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {language === 'en' ? (item.descEn || item.desc) : item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 bg-slate-950 rounded-2xl p-8 md:p-10 shadow-xl text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-900 text-emerald-300 text-xs font-black px-3.5 py-1 rounded-md border border-emerald-700">
              <ShieldCheck size={16} /> 100% Risk Free Investment
            </div>
            <h3 className="text-2xl md:text-3xl font-black">{t('guaranteeTitle')}</h3>
            <p className="text-slate-300 text-sm max-w-2xl font-medium leading-relaxed">
              {t('guaranteeDesc')}
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-md shrink-0 transition-all active:scale-95 flex items-center gap-2"
          >
            {t('btnConsultationFree')} <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
