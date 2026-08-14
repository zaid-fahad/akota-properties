import React, { useState } from 'react';
import { Download, Maximize, CheckCircle2, ChevronRight, X, FileText } from 'lucide-react';
import { FLOOR_SPECS } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function FloorPlanViewer({ onOpenBrochure, onOpenBooking }) {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);
  const { language, t } = useLanguage();

  const plan = FLOOR_SPECS[activePlanIndex];

  return (
    <section className="py-24 bg-white relative" id="floor-plans">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <FileText size={14} /> {t('floorBadge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            {t('floorHeading1')} <span className="text-emerald-600">{t('floorHeading2')}</span>
          </h2>
          <p className="text-slate-700 text-base md:text-lg mt-4 font-medium leading-relaxed">
            {t('floorSubtitle')}
          </p>
          <div className="w-20 h-1.5 bg-emerald-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FLOOR_SPECS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActivePlanIndex(idx)}
              className={`px-6 py-3.5 rounded-xl text-sm font-black transition-all ${
                activePlanIndex === idx
                  ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 scale-105'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              {language === 'en' ? (item.typeEn || item.type) : item.type}
            </button>
          ))}
        </div>

        {/* Main Floor Plan Detail Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12 border border-slate-200">
          
          {/* Image Column */}
          <div className="lg:col-span-6 p-8 lg:p-12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            <div className="relative group rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
              <img 
                src={plan.image} 
                alt={plan.type} 
                className="w-full h-80 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => setZoomImage(plan.image)}
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-black text-xs shadow-2xl flex items-center gap-2">
                  <Maximize size={16} /> {t('zoomIn')}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-bold text-slate-700">
              <span>* {language === 'en' ? 'Architect blueprint dimensions' : 'সকল মাপ আর্কিটেক্ট ব্লু-প্রিন্ট ভিত্তিক'}</span>
              <button 
                onClick={() => setZoomImage(plan.image)}
                className="text-emerald-700 hover:text-emerald-800 font-extrabold hover:underline flex items-center gap-1"
              >
                <Maximize size={14} /> {t('fullscreenView')}
              </button>
            </div>
          </div>

          {/* Specs Column */}
          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full mb-3">
                {language === 'en' ? (plan.kathaEn || plan.katha) : plan.katha}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">{language === 'en' ? (plan.typeEn || plan.type) : plan.type}</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                {language === 'en' ? 'Designed to maximize natural airflow and contemporary aesthetic elegance.' : 'নাগরিক স্বাচ্ছন্দ্য ও আধুনিক রুচির সমন্বয়ে এই ইউনিটে প্রতিটি ইঞ্চি জায়গা দক্ষতার সাথে ব্যবহার করা হয়েছে।'}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>{plan.bedrooms} {t('beds')}</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>{plan.bathrooms} {t('baths')}</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>{plan.balconies} {t('balconies')}</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>{language === 'en' ? 'Living & Dining' : 'লিভিং ও ডাইনিং'}</span>
                </div>
              </div>

              {/* Room Dimensions */}
              <div className="space-y-2 border-t border-slate-200 pt-6 text-xs text-slate-700">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">{t('masterBedLabel')}</span>
                  <span className="font-bold text-slate-900">{plan.masterBed}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">{t('childBedLabel')}</span>
                  <span className="font-bold text-slate-900">{plan.childBed}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">{t('livingLabel')}</span>
                  <span className="font-bold text-slate-900">{plan.living}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-semibold text-slate-700">{t('kitchenLabel')}</span>
                  <span className="font-bold text-slate-900">{plan.kitchen}</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={onOpenBrochure}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Download size={18} className="text-emerald-400" /> {t('downloadPdf')}
              </button>
              <button
                onClick={onOpenBooking}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                {t('btnBookFloor')} <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden p-2 shadow-2xl">
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 bg-slate-900 text-white p-2 rounded-full z-10 hover:bg-emerald-600 transition-colors"
            >
              <X size={24} />
            </button>
            <img src={zoomImage} alt="Zoomed Floor Plan" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl" />
          </div>
        </div>
      )}
    </section>
  );
}
