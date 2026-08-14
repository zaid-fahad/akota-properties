import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/blocks/SEOHead';
import FloorPlanViewer from '../components/blocks/FloorPlanViewer';
import UnitAvailability from '../components/blocks/UnitAvailability';
import { PROJECTS } from '../data/projectData';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, Building2, CheckCircle2, ArrowRight, 
  Sparkles, Maximize, X, ShieldCheck, ArrowLeft, Eye 
} from 'lucide-react';

export default function ProjectDetailPage({ onOpenBooking, onOpenBrochure }) {
  const { projectId } = useParams();
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-black">{language === 'en' ? 'Project Not Found' : 'প্রজেক্টটি পাওয়া যায়নি'}</h2>
        <Link to="/projects" className="mt-4 text-emerald-700 font-bold inline-block">
          {language === 'en' ? 'Back to Projects' : 'সকল প্রজেক্ট দেখুন'}
        </Link>
      </div>
    );
  }

  const projName = language === 'en' ? (project.nameEn || project.name) : project.name;
  const projTagline = language === 'en' ? (project.taglineEn || project.tagline) : project.tagline;
  const projLocation = language === 'en' ? (project.locationEn || project.location) : project.location;
  const projLand = language === 'en' ? (project.landAreaEn || project.landArea) : project.landArea;
  const projStatus = language === 'en' ? (project.statusEn || project.status) : project.status;
  const projHandover = language === 'en' ? (project.handoverEn || project.handover) : project.handover;

  return (
    <>
      <SEOHead 
        title={`${projName} | ${language === 'en' ? 'Akota Properties' : 'একতা প্রপার্টিজ'}`}
        description={`${projTagline}. ${projLocation}.`}
        canonicalUrl={`https://akotaproperties.com/projects/${project.id}`}
        ogImage={project.image}
      />

      <main className="pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-24 bg-slate-50 min-h-screen">
        {/* Project Hero Header */}
        <section className="bg-slate-950 text-white py-12 sm:py-16 mb-10 sm:mb-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={project.image} alt={projName} className="w-full h-full object-cover brightness-[0.35]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs mb-4 hover:underline">
              <ArrowLeft size={16} /> {language === 'en' ? 'Back to Projects' : 'সকল প্রজেক্টে ফিরে যান'}
            </Link>

            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-emerald-700 text-white text-[11px] sm:text-xs font-black px-3.5 sm:px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Sparkles size={13} className="shrink-0" /> {projStatus}
                </span>
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-[11px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full">
                  {projLand} {language === 'en' ? 'Project' : 'শেয়ার প্রজেক্ট'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight break-words">{projName}</h1>
              <p className="text-emerald-400 font-extrabold text-xs sm:text-base flex items-start gap-1.5 leading-snug">
                <MapPin size={18} className="shrink-0 mt-0.5" /> {projLocation}
              </p>
              <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                {projTagline}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-3">
                <button
                  onClick={() => onOpenBooking(projName)}
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-7 sm:px-8 py-3.5 rounded-xl font-black text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  {t('bookNow')} <ArrowRight size={18} />
                </button>
                <button
                  onClick={onOpenBrochure}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 sm:px-8 py-3.5 rounded-xl font-extrabold text-sm text-center"
                >
                  {t('btnBrochure')}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 space-y-10 sm:space-y-16">
          
          {/* Key Specifications Grid */}
          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 flex items-center gap-2.5">
              <Building2 className="text-emerald-700 shrink-0" size={28} />
              <span>{language === 'en' ? 'Project Overview & Specs' : 'প্রজেক্ট স্পেসিফিকেশন ও ওভারভিউ'}</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statLocation')}</span>
                <span className="text-slate-900 font-black text-xs sm:text-sm mt-1 block truncate">{projLocation}</span>
              </div>
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statPrice')}</span>
                <span className="text-emerald-800 font-black text-xs sm:text-base mt-1 block">৳ {project.priceStart}</span>
              </div>
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statFloors')}</span>
                <span className="text-slate-900 font-black text-xs sm:text-sm mt-1 block truncate">{project.totalFloors}</span>
              </div>
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statHandover')}</span>
                <span className="text-slate-900 font-black text-xs sm:text-sm mt-1 block truncate">{projHandover}</span>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-4">{t('highlightsLabel')}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-emerald-50/80 p-3 sm:p-3.5 rounded-xl border border-emerald-200 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                    <span className="leading-snug">{language === 'en' ? ((project.featuresEn && project.featuresEn[idx]) || feat) : feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 flex items-center gap-2.5">
              <Maximize className="text-emerald-700 shrink-0" size={26} />
              <span>{language === 'en' ? 'Project Gallery & Renders' : 'প্রজেক্ট ফটো ক্যাটালগ'}</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {project.gallery.map((imgUrl, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className="group relative rounded-xl overflow-hidden shadow-sm cursor-pointer h-44 sm:h-56 bg-slate-900 hover:shadow-md transition-all"
                >
                  <img src={imgUrl} alt={`${projName} ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-3 py-1.5 rounded-full font-black text-[11px] shadow-md flex items-center gap-1">
                      <Eye size={13} /> {t('zoomIn')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrated Floor Plans & Unit Availability */}
          <FloorPlanViewer onOpenBrochure={onOpenBrochure} onOpenBooking={onOpenBooking} />
          <UnitAvailability onOpenBooking={onOpenBooking} />

          {/* Consultation Banner */}
          <div className="bg-slate-950 rounded-2xl p-6 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-900 text-emerald-300 text-xs font-black px-3 py-1 rounded-md border border-emerald-700">
                <ShieldCheck size={15} /> 100% Risk Free Investment
              </div>
              <h3 className="text-xl sm:text-3xl font-black">{projName} {language === 'en' ? 'Booking Open' : 'বুকিং চলছে'}</h3>
              <p className="text-slate-300 text-xs sm:text-sm font-medium">
                {language === 'en' ? 'Contact our corporate office to schedule a site visit.' : 'প্রজেক্ট ভিডিও ও পেপারস দেখতে অফিসে আসুন।'}
              </p>
            </div>
            <button
              onClick={() => onOpenBooking(projName)}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3.5 rounded-xl font-black text-sm shadow-md shrink-0 transition-all text-center"
            >
              {t('btnConsultation')}
            </button>
          </div>

        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3">
            <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-slate-900 text-white p-2 rounded-full z-10 hover:bg-emerald-700 transition-colors"
              >
                <X size={18} />
              </button>
              <img src={selectedImage} alt="Project Gallery Preview" className="w-full h-auto max-h-[80vh] object-contain rounded-xl" />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
