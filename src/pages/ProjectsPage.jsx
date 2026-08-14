import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/blocks/SEOHead';
import { MapPin, ArrowRight, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projectData';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsPage({ onOpenBooking }) {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead 
        title={language === 'en' ? "Our Projects | Akota Properties Uttara & Ashulia" : "আমাদের প্রজেক্টসমূহ | একতা প্রপার্টিজ উত্তরা ও আশুলিয়া"}
        description={language === 'en' ? "Explore Ekota Metro View 01, 02, 03 and Akota Nibash projects." : "একতা প্রপার্টিজ এর বর্তমান আবাসন প্রজেক্টসমূহ দেখুন। উত্তরা ও সাভার আশুলিয়ায় সাশ্রয়ী ল্যান্ড-শেয়ারিং আবাসিক ফ্ল্যাট প্রকল্প।"}
        canonicalUrl="https://akotaproperties.com/projects"
      />

      <main className="pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-24 bg-slate-50 min-h-screen">
        {/* Page Header */}
        <section className="bg-slate-950 text-white py-12 sm:py-16 mb-10 sm:mb-16 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-700 text-white text-[11px] sm:text-xs font-black px-3.5 sm:px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block shadow-md">
              {t('projectsPageBadge')}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 break-words">
              {t('projectsPageHeading1')} <span className="text-emerald-400">{t('projectsPageHeading2')}</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              {t('projectsPageSubtitle')}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-10 sm:space-y-16">
            {PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 grid lg:grid-cols-12 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image & Status Badge */}
                <Link to={`/projects/${proj.id}`} className="lg:col-span-6 relative overflow-hidden bg-slate-900 block">
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="w-full h-56 sm:h-72 md:h-full min-h-[220px] sm:min-h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-[85%]">
                    <span className="bg-emerald-700 text-white font-extrabold text-[10px] sm:text-xs uppercase px-3 sm:px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 truncate">
                      <Sparkles size={13} className="shrink-0" /> <span className="truncate">{language === 'en' ? (proj.statusEn || proj.status) : proj.status}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-slate-950/90 backdrop-blur-sm rounded-xl border border-slate-800 text-white">
                    <div className="flex justify-between items-center text-[11px] sm:text-xs font-bold gap-2">
                      <span className="text-emerald-400 truncate">{t('landAreaLabel')} {language === 'en' ? (proj.landAreaEn || proj.landArea) : proj.landArea}</span>
                      <span className="text-slate-200 shrink-0">{t('handoverLabel')} {language === 'en' ? (proj.handoverEn || proj.handover) : proj.handover}</span>
                    </div>
                  </div>
                </Link>

                {/* Project Info & Specs */}
                <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <Link to={`/projects/${proj.id}`}>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 hover:text-emerald-700 transition-colors flex items-center gap-2">
                        {language === 'en' ? (proj.nameEn || proj.name) : proj.name}
                        <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 text-emerald-700 transition-opacity shrink-0" />
                      </h2>
                    </Link>
                    <p className="text-emerald-800 font-extrabold text-xs sm:text-sm mb-3 flex items-start gap-1.5">
                      <MapPin size={16} className="shrink-0 mt-0.5" /> 
                      <span className="leading-snug">{language === 'en' ? (proj.locationEn || proj.location) : proj.location}</span>
                    </p>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
                      {language === 'en' ? (proj.taglineEn || proj.tagline) : proj.tagline}
                    </p>

                    {/* Key Specs Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-5 p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold">
                      <div>
                        <span className="text-slate-600 block text-[10px] uppercase font-black">{t('startPriceLabel')}</span>
                        <span className="text-emerald-800 font-black text-xs sm:text-sm">
                          {language === 'en' ? `Tk ${proj.priceStartNum || 25} Lac` : `৳ ${proj.priceStart}`}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-600 block text-[10px] uppercase font-black">{t('totalFloorsLabel')}</span>
                        <span className="text-slate-900 text-xs sm:text-sm font-extrabold">{language === 'en' ? (proj.totalFloorsEn || proj.totalFloors) : proj.totalFloors}</span>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-slate-600 block text-[10px] uppercase font-black">{t('totalUnitsLabel')}</span>
                        <span className="text-slate-900 text-xs sm:text-sm font-extrabold">{language === 'en' ? (proj.totalUnitsEn || proj.totalUnits) : proj.totalUnits}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-black uppercase tracking-wider text-slate-700">{t('highlightsLabel')}</p>
                      {proj.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                          <CheckCircle2 size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                          <span className="leading-tight">{language === 'en' ? ((proj.featuresEn && proj.featuresEn[fIdx]) || feat) : feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                    <Link
                      to={`/projects/${proj.id}`}
                      className="w-full sm:flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3.5 rounded-xl font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all text-center"
                    >
                      {language === 'en' ? 'View Details' : 'প্রজেক্টের বিস্তারিত দেখুন'} <ArrowRight size={16} />
                    </Link>
                    <button
                      onClick={() => onOpenBooking(language === 'en' ? proj.nameEn : proj.name)}
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all text-center"
                    >
                      {t('bookNow')}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
