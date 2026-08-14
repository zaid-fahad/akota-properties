import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/blocks/SEOHead';
import { Building, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead title={language === 'en' ? "Page Not Found (404) | Akota Properties" : "পৃষ্ঠা পাওয়া যায়নি (404) | একতা প্রপার্টিজ"} />
      <main className="min-h-screen pt-32 pb-24 bg-slate-950 text-white flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-lg space-y-6">
          <div className="w-20 h-20 bg-emerald-600/20 text-emerald-400 rounded-3xl flex items-center justify-center mx-auto border border-emerald-500/30">
            <Building size={40} />
          </div>
          <h1 className="text-6xl font-black text-emerald-400">404</h1>
          <h2 className="text-2xl font-bold">
            {language === 'en' ? 'Page Not Found' : 'দুঃখিত! পৃষ্ঠাটি পাওয়া যায়নি'}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            {language === 'en' 
              ? 'The page you are looking for might have been removed or the URL typed is incorrect.'
              : 'আপনি যে পেজটি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা ঠিকানা ভুল লেখা হয়েছে।'}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-xl transition-all"
          >
            <ArrowLeft size={18} /> {language === 'en' ? 'Back to Home' : 'মূল পাতায় ফিরে যান'}
          </Link>
        </div>
      </main>
    </>
  );
}
