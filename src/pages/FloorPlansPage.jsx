import React from 'react';
import SEOHead from '../components/blocks/SEOHead';
import FloorPlanViewer from '../components/blocks/FloorPlanViewer';
import UnitAvailability from '../components/blocks/UnitAvailability';
import { useLanguage } from '../context/LanguageContext';

export default function FloorPlansPage({ onOpenBooking, onOpenBrochure }) {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead 
        title={language === 'en' ? "Floor Plans & Layout Catalog | Akota Properties" : "ফ্লোর প্ল্যান ও লেআউট ক্যাটালগ | একতা প্রপার্টিজ উত্তরা"}
        description={language === 'en' ? "Architectural layout designs for 8 Katha (1100 SFT), 10 Katha (1400 SFT), and 12 Katha (1700 SFT) land sharing projects." : "৮ কাঠা (১১০০ SFT), ১০ কাঠা (১৪০০ SFT) ও ১২ কাঠা (১৭০০ SFT) প্রজেক্টের আর্কিটেকচারাল ফ্লোর প্ল্যান, রুমের মাপ এবং লাইভ ইউনিট এভেইলিবিলিটি দেখুন।"}
        canonicalUrl="https://akotaproperties.com/floor-plans"
      />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
        {/* Page Banner */}
        <section className="bg-slate-950 text-white py-16 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-600/80 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              {t('floorBadge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {t('floorHeading1')} <span className="text-emerald-400">{t('floorHeading2')}</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-medium">
              {t('floorSubtitle')}
            </p>
          </div>
        </section>

        {/* Components */}
        <FloorPlanViewer onOpenBrochure={onOpenBrochure} onOpenBooking={onOpenBooking} />
        <UnitAvailability onOpenBooking={onOpenBooking} />
      </main>
    </>
  );
}
