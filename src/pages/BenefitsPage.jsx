import React from 'react';
import SEOHead from '../components/blocks/SEOHead';
import CostCalculator from '../components/blocks/CostCalculator';
import { Coins, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BenefitsPage({ onOpenBooking }) {
  const { language, t } = useLanguage();

  return (
    <>
      <SEOHead 
        title={language === 'en' ? "Land Sharing Benefits & Guide | Akota Properties" : "ল্যান্ড শেয়ারিং সুবিধা ও নির্দেশিকা | একতা প্রপার্টিজ"}
        description={language === 'en' ? "Discover why land sharing is the safest and most affordable model for owning a luxury flat in Uttara." : "কেন ল্যান্ড-শেয়ারিং পদ্ধতিতে ফ্ল্যাট নির্মাণ সবচেয়ে সাশ্রয়ী ও ১০০% আইনি ঝুঁকিমুক্ত? জানুন ডেভেলপার প্রফিট ছাড়া ৪০% খরচে স্বপ্নের ফ্ল্যাট গড়ার গোপন কৌশল।"}
        canonicalUrl="https://akotaproperties.com/benefits"
      />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
        {/* Page Banner */}
        <section className="bg-slate-950 text-white py-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-600/80 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              {t('benefitsPageBadge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {t('benefitsPageHeading1')} <span className="text-emerald-400">{t('benefitsPageHeading2')}</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-medium">
              {t('benefitsPageSubtitle')}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 space-y-20">
          
          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                {t('tableHeading')}
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-medium">
                {t('tableSubHeading')}
              </p>
            </div>

            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 p-6 md:p-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs uppercase tracking-wider">
                      <th className="py-4 px-4 font-black text-slate-400">{t('tableCol1')}</th>
                      <th className="py-4 px-4 font-black text-slate-400 bg-slate-50 rounded-tl-2xl">{t('tableCol2')}</th>
                      <th className="py-4 px-4 font-black text-emerald-600 bg-emerald-50 rounded-tr-2xl">{t('tableCol3')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium">
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">{t('tableRow1Name')}</td>
                      <td className="py-5 px-4 text-rose-600 bg-slate-50/50">{t('tableRow1Dev')}</td>
                      <td className="py-5 px-4 font-black text-emerald-700 bg-emerald-50/40">{t('tableRow1Akota')}</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">{t('tableRow2Name')}</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">{t('tableRow2Dev')}</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">{t('tableRow2Akota')}</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">{t('tableRow3Name')}</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">{t('tableRow3Dev')}</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">{t('tableRow3Akota')}</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">{t('tableRow4Name')}</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">{t('tableRow4Dev')}</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">{t('tableRow4Akota')}</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">{t('tableRow5Name')}</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">{t('tableRow5Dev')}</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">{t('tableRow5Akota')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Coins size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{t('pillar1Title')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {t('pillar1Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{t('pillar2Title')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {t('pillar2Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{t('pillar3Title')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {t('pillar3Desc')}
              </p>
            </div>
          </div>

          {/* Interactive Calculator Section */}
          <CostCalculator onOpenBooking={onOpenBooking} />

        </div>
      </main>
    </>
  );
}
