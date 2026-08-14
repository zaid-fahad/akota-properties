import React, { useState } from 'react';
import SEOHead from '../components/blocks/SEOHead';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    share: '8 Katha Share (1100 SFT)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead 
        title={language === 'en' ? "Contact Us | Akota Properties Ltd." : "যোগাযোগ ও অফিস ঠিকানা | একতা প্রপার্টিজ লিমিটেড"}
        description={language === 'en' ? "Visit our corporate office or call us to inspect land deeds and project plans." : "একতা প্রপার্টিজ অফিসে সরাসরি এসে প্রজেক্টের কাগজপত্র ও সিসিটিভি ফুটেজ দেখুন। উত্তরা ১৫নং সেক্টর, দিয়াবাড়ি, ঢাকা।"}
        canonicalUrl="https://akotaproperties.com/contact"
      />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
        {/* Banner */}
        <section className="bg-slate-950 text-white py-16 mb-16 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-md">
              {t('contactPageBadge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {t('contactPageHeading1')} <span className="text-emerald-400">{t('contactPageHeading2')}</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium leading-relaxed">
              {t('contactPageSubtitle')}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-12 border border-slate-200">
            
            {/* Left Contact Details Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-3xl font-black mb-2">{t('officeInfoTitle')}</h2>
                  <p className="text-emerald-200 text-xs font-medium">{t('officeHours')}</p>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-800/80 rounded-xl text-emerald-300 shrink-0 border border-emerald-700/60">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">{t('officeAddressLabel')}</h4>
                      <p className="text-emerald-100/90 text-xs mt-1 leading-relaxed font-medium">
                        {language === 'en' ? 'Level 4, Block C, Metro Rail North Plaza, Sector 15, Uttara, Dhaka-1230' : PROJECT_INFO.officeAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-800/80 rounded-xl text-emerald-300 shrink-0 border border-emerald-700/60">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">{t('hotlineLabel')}</h4>
                      <a href={`tel:${PROJECT_INFO.phonePrimary}`} className="text-emerald-300 font-black text-sm block mt-1 hover:underline">
                        {PROJECT_INFO.phonePrimary}
                      </a>
                      <a href={`tel:${PROJECT_INFO.phoneSecondary}`} className="text-emerald-100/90 text-xs block hover:underline font-medium">
                        {PROJECT_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-800/80 rounded-xl text-emerald-300 shrink-0 border border-emerald-700/60">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">{t('emailLabel')}</h4>
                      <a href={`mailto:${PROJECT_INFO.email}`} className="text-emerald-300 text-xs block mt-1 hover:underline font-semibold">
                        {PROJECT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-emerald-800/80 relative z-10">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">{t('followUs')}</p>
                <div className="flex gap-3">
                  {['Facebook', 'LinkedIn', 'YouTube'].map((net, i) => (
                    <span key={i} className="bg-white/10 hover:bg-emerald-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer transition-colors">
                      {net}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-slate-900 mb-2">{t('formTitle')}</h3>
              <p className="text-slate-700 text-xs sm:text-sm mb-8 font-medium leading-relaxed">
                {t('formSubtitle')}
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                  <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
                  <h4 className="text-2xl font-black text-emerald-950">{t('thankYou')} {formData.name}!</h4>
                  <p className="text-slate-700 text-sm font-medium">
                    {t('msgSuccess')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase text-slate-700">{t('yourName')}</label>
                      <input 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'en' ? 'John Doe' : 'মোঃ রফিকুল ইসলাম'} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase text-slate-700">{t('mobileNum')}</label>
                      <input 
                        required 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01711000000" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-700">{t('interestedProjectShare')}</label>
                    <select 
                      value={formData.share}
                      onChange={(e) => setFormData({ ...formData, share: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option>{language === 'en' ? '8 Katha Share (1100 SFT)' : '৮ কাঠা প্রজেক্ট শেয়ার (১১০০ SFT)'}</option>
                      <option>{language === 'en' ? '10 Katha Share (1400 SFT)' : '১০ কাঠা প্রজেক্ট শেয়ার (১৪০০ SFT)'}</option>
                      <option>{language === 'en' ? '12 Katha Share (1700 SFT)' : '১২ কাঠা প্রজেক্ট শেয়ার (১৭০০ SFT)'}</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-700">{t('messageLabel')}</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('messagePlaceholder')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> {t('sendMsgBtn')}
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Location Map */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={24} className="text-emerald-600" />
              <h3 className="text-2xl font-black text-slate-900">{t('mapHeader')}</h3>
            </div>
            <div className="w-full h-80 bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner border border-slate-300">
              <iframe 
                title="Akota Properties Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.137837887754!2d90.3703964!3d23.8706362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b681c2089%3A0xe51070529d4432c6!2sUttara%20Sector%2015%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
