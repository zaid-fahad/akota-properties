import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Quote, Star, UserCheck, ShieldCheck } from 'lucide-react';
import { FAQS, TESTIMONIALS } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function TestimonialsFAQ({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const { language, t } = useLanguage();

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* --- Testimonials Section --- */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
              <UserCheck size={14} /> {t('reviewsBadge')}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              {t('reviewsHeading1')} <span className="text-emerald-600">{t('reviewsHeading2')}</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg mt-4 font-medium">
              {t('reviewsSubtitle')}
            </p>
            <div className="w-20 h-1.5 bg-emerald-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between relative hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
              >
                <Quote className="text-emerald-200 absolute top-6 right-6" size={48} />
                
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium italic relative z-10">
                    "{language === 'en' ? (item.quoteEn || item.quote) : item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="font-black text-slate-900 text-base">
                    {language === 'en' ? (item.nameEn || item.name) : item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold">
                    {language === 'en' ? (item.roleEn || item.role) : item.role}
                  </p>
                  <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-0.5 rounded-md mt-2">
                    {language === 'en' ? (item.projectEn || item.project) : item.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- FAQ Accordion Section --- */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
              <HelpCircle size={14} /> {t('faqBadge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              {t('faqHeading1')} <span className="text-emerald-600">{t('faqHeading2')}</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2 font-medium">
              {t('faqSubtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base md:text-lg font-black leading-snug">
                    {language === 'en' ? (faq.questionEn || faq.question) : faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${
                    openFaqIndex === idx ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200">
                    <p className="font-medium">
                      {language === 'en' ? (faq.answerEn || faq.answer) : faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Need More Assistance Banner */}
          <div className="mt-12 p-8 bg-white rounded-3xl border border-emerald-100 shadow-xl text-center space-y-4">
            <h3 className="text-xl font-black text-slate-900">{t('moreQuestionsTitle')}</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto font-medium">
              {t('moreQuestionsDesc')}
            </p>
            <button
              onClick={onOpenBooking}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all inline-flex items-center gap-2"
            >
              <ShieldCheck size={16} /> {t('scheduleConsultation')}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
