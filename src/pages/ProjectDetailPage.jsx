import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/blocks/SEOHead';
import FloorPlanViewer from '../components/blocks/FloorPlanViewer';
import UnitAvailability from '../components/blocks/UnitAvailability';
import { PROJECTS } from '../data/projectData';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, Building, Calendar, CheckCircle2, ArrowRight, 
  Sparkles, Maximize, X, ShieldCheck, ArrowLeft, Eye 
} from 'lucide-react';

export default function ProjectDetailPage({ onOpenBooking, onOpenBrochure }) {
  const { projectId } = useParams();
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-3xl font-black">{language === 'en' ? 'Project Not Found' : 'প্রজেক্টটি পাওয়া যায়নি'}</h2>
        <Link to="/projects" className="mt-4 text-emerald-600 font-bold inline-block">
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
        title={`${projName} | ${language === 'en' ? 'Akota Properties Uttara' : 'একতা প্রপার্টিজ উত্তরা'}`}
        description={`${projTagline}. ${projLocation}.`}
        canonicalUrl={`https://akotaproperties.com/projects/${project.id}`}
        ogImage={project.image}
      />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
        {/* Project Hero Header */}
        <section className="bg-slate-950 text-white py-16 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={project.image} alt={projName} className="w-full h-full object-cover brightness-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs mb-6 hover:underline">
              <ArrowLeft size={16} /> {language === 'en' ? 'Back to Projects' : 'সকল প্রজেক্টে ফিরে যান'}
            </Link>

            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-emerald-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={14} /> {projStatus}
                </span>
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full">
                  {projLand} {language === 'en' ? 'Project' : 'শেয়ার প্রজেক্ট'}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">{projName}</h1>
              <p className="text-emerald-400 font-extrabold text-lg flex items-center gap-2">
                <MapPin size={20} /> {projLocation}
              </p>
              <p className="text-slate-300 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                {projTagline}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onOpenBooking(projName)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-base shadow-xl flex items-center gap-2"
                >
                  {t('bookNow')} <ArrowRight size={18} />
                </button>
                <button
                  onClick={onOpenBrochure}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-extrabold text-base"
                >
                  {t('btnBrochure')}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 space-y-16">
          
          {/* Key Specifications Grid */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-200">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Building className="text-emerald-600" size={32} />
              {language === 'en' ? 'Project Overview & Specifications' : 'প্রজেক্ট স্পেসিফিকেশন ও ওভারভিউ'}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statLocation')}</span>
                <span className="text-slate-900 font-black text-base mt-1 block">উত্তরা ১৫নং সেক্টর, দিয়াবাড়ি</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statPrice')}</span>
                <span className="text-emerald-700 font-black text-lg mt-1 block">৳ {project.priceStart}</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statFloors')}</span>
                <span className="text-slate-900 font-black text-base mt-1 block">{project.totalFloors}</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">{t('statHandover')}</span>
                <span className="text-slate-900 font-black text-base mt-1 block">{projHandover}</span>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-6">{t('highlightsLabel')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 font-bold text-slate-900 text-sm">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                    <span>{language === 'en' ? ((project.featuresEn && project.featuresEn[idx]) || feat) : feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-200">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Maximize className="text-emerald-600" size={28} />
              {language === 'en' ? 'Project Gallery & Renders' : 'প্রজেক্ট ফটো ক্যাটালগ'}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer h-60 bg-slate-900 hover:shadow-xl transition-all"
                >
                  <img src={imgUrl} alt={`${projName} ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-black text-xs shadow-lg flex items-center gap-1.5">
                      <Eye size={14} /> {t('zoomIn')}
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
          <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 rounded-2xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-emerald-800/60">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-black px-3.5 py-1 rounded-full border border-emerald-400/30">
                <ShieldCheck size={16} /> 100% Risk Free Investment
              </div>
              <h3 className="text-2xl md:text-4xl font-black">{projName} {language === 'en' ? 'Booking Open' : 'বুকিং চলছে'}</h3>
              <p className="text-emerald-100/90 text-sm font-medium">
                {language === 'en' ? 'Contact our corporate office to schedule a site visit.' : 'প্রজেক্ট ভিডিও ও পেপারস দেখতে অফিসে আসুন।'}
              </p>
            </div>
            <button
              onClick={() => onOpenBooking(projName)}
              className="bg-white text-emerald-950 hover:bg-emerald-50 px-8 py-4 rounded-xl font-black text-base shadow-xl shrink-0 transition-all hover:scale-105"
            >
              {t('btnConsultation')}
            </button>
          </div>

        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden p-2 shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-slate-900 text-white p-2.5 rounded-full z-10 hover:bg-emerald-600 transition-colors"
              >
                <X size={20} />
              </button>
              <img src={selectedImage} alt="Project Gallery Preview" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl" />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
