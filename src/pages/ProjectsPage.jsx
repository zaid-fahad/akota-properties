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
        title={language === 'en' ? "Our Projects | Akota Properties Uttara" : "আমাদের প্রজেক্টসমূহ | একতা প্রপার্টিজ উত্তরা দিয়াবাড়ি"}
        description={language === 'en' ? "Explore Ekota Metro View 01, 02 & 03 projects in Uttara Sector 15 Diabari near Metro Station." : "একতা মেট্রো ভিউ ০১, ০২ ও ০৩ প্রজেক্টসমূহ দেখুন। উত্তরা ১৫নং সেক্টর দিয়াবাড়িতে মেট্রোরেল স্টেশন ঘেঁষে নির্মিতব্য লাক্সারি ল্যান্ড-শেয়ারিং আবাসিক ভবন।"}
        canonicalUrl="https://akotaproperties.com/projects"
      />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
        {/* Page Header */}
        <section className="bg-slate-950 text-white py-16 mb-16 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-md">
              {t('projectsPageBadge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {t('projectsPageHeading1')} <span className="text-emerald-400">{t('projectsPageHeading2')}</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium leading-relaxed">
              {t('projectsPageSubtitle')}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 grid lg:grid-cols-12 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image & Status Badge */}
                <Link to={`/projects/${proj.id}`} className="lg:col-span-6 relative overflow-hidden bg-slate-900 block">
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="w-full h-full min-h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-emerald-600 text-white font-extrabold text-xs uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Sparkles size={14} /> {language === 'en' ? (proj.statusEn || proj.status) : proj.status}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/90 backdrop-blur-sm rounded-xl border border-slate-800 text-white">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-emerald-400">{t('landAreaLabel')} {language === 'en' ? (proj.landAreaEn || proj.landArea) : proj.landArea}</span>
                      <span className="text-slate-200">{t('handoverLabel')} {language === 'en' ? (proj.handoverEn || proj.handover) : proj.handover}</span>
                    </div>
                  </div>
                </Link>

                {/* Project Info & Specs */}
                <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <Link to={`/projects/${proj.id}`}>
                      <h2 className="text-3xl font-black text-slate-900 mb-2 hover:text-emerald-600 transition-colors flex items-center gap-2">
                        {language === 'en' ? (proj.nameEn || proj.name) : proj.name}
                        <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 text-emerald-600 transition-opacity" />
                      </h2>
                    </Link>
                    <p className="text-emerald-700 font-extrabold text-sm mb-4 flex items-center gap-1.5">
                      <MapPin size={16} /> {language === 'en' ? (proj.locationEn || proj.location) : proj.location}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                      {language === 'en' ? (proj.taglineEn || proj.tagline) : proj.tagline}
                    </p>

                    {/* Key Specs Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold">
                      <div>
                        <span className="text-slate-700 block text-[10px] uppercase font-black">{t('startPriceLabel')}</span>
                        <span className="text-emerald-700 font-black text-sm">
                          {language === 'en' ? `Tk ${proj.priceStartNum || 25} Lac` : `৳ ${proj.priceStart}`}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-700 block text-[10px] uppercase font-black">{t('totalFloorsLabel')}</span>
                        <span className="text-slate-900 text-sm font-extrabold">{language === 'en' ? (proj.totalFloorsEn || proj.totalFloors) : proj.totalFloors}</span>
                      </div>
                      <div>
                        <span className="text-slate-700 block text-[10px] uppercase font-black">{t('totalUnitsLabel')}</span>
                        <span className="text-slate-900 text-sm font-extrabold">{language === 'en' ? (proj.totalUnitsEn || proj.totalUnits) : proj.totalUnits}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-8">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-700">{t('highlightsLabel')}</p>
                      {proj.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                          <span>{language === 'en' ? ((proj.featuresEn && proj.featuresEn[fIdx]) || feat) : feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                    <Link
                      to={`/projects/${proj.id}`}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-black text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                    >
                      {language === 'en' ? 'View Project Details' : 'প্রজেক্টের বিস্তারিত দেখুন'} <ArrowRight size={16} />
                    </Link>
                    <button
                      onClick={() => onOpenBooking(language === 'en' ? proj.nameEn : proj.name)}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl font-extrabold text-sm transition-all"
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
