import React, { useState } from 'react';
import { X, CheckCircle2, Building, Phone, Mail, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function BookingModal({ isOpen, onClose, prefilledUnit = null }) {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    shareType: prefilledUnit ? `Unit ${prefilledUnit}` : '8 Katha Share (1100 SFT)',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-full z-10 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-950 to-teal-900 text-white p-8 sm:p-10 relative">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <ShieldCheck size={14} /> 100% Free Consultation
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">
            {prefilledUnit ? (language === 'en' ? `Unit ${prefilledUnit} Booking Request` : `ইউনিট ${prefilledUnit} বুকিং অনুরোধ`) : t('modalConsultTitle')}
          </h3>
          <p className="text-emerald-100/90 text-xs sm:text-sm mt-2 font-medium">
            {t('modalConsultSubtitle')}
          </p>
        </div>

        {/* Form Body / Success State */}
        <div className="p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-slate-900">{t('thankYou')} {formData.fullName}!</h4>
                <p className="text-slate-700 text-sm leading-relaxed max-w-sm mx-auto font-medium">
                  {language === 'en' 
                    ? `Your booking consultation request has been received. Our senior advisor will call your mobile (${formData.phone}) shortly.`
                    : `আপনার বুকিং অনুরোধ সফলভাবে গ্রহণ করা হয়েছে। খুব শীঘ্রই আমাদের টিম আপনার প্রদত্ত নম্বরে (${formData.phone}) কল করবে।`}
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">{language === 'en' ? 'For urgent queries call:' : 'জরুরী প্রশ্নের জন্য কল করুন:'}</p>
                <p className="text-emerald-700 font-black text-sm">{PROJECT_INFO.phonePrimary}</p>
              </div>
              <button
                onClick={handleReset}
                className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors"
              >
                {language === 'en' ? 'Close Window' : 'পর্দায় ফিরে যান'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <User size={13} className="text-emerald-600" /> {t('fullName')}
                </label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={language === 'en' ? 'e.g. John Doe' : 'উদাঃ মোঃ রফিকুল ইসলাম'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>

              {/* Phone Number & Email Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <Phone size={13} className="text-emerald-600" /> {t('phoneNum')}
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01711000000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <Mail size={13} className="text-emerald-600" /> {t('emailOptional')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Select Share */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                  <Building size={13} className="text-emerald-600" /> {t('interestedShare')}
                </label>
                <select
                  value={formData.shareType}
                  onChange={(e) => setFormData({ ...formData, shareType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                >
                  <option>{language === 'en' ? '8 Katha Share (1100-1200 SFT)' : '৮ কাঠা প্রজেক্ট শেয়ার (১১০০ - ১২০০ SFT)'}</option>
                  <option>{language === 'en' ? '10 Katha Share (1400-1500 SFT)' : '১০ কাঠা প্রজেক্ট শেয়ার (১৪০০ - ১৫০০ SFT)'}</option>
                  <option>{language === 'en' ? '12 Katha Share (1700-1800 SFT)' : '১২ কাঠা প্রজেক্ট শেয়ার (১৭০০ - ১৮০০ SFT)'}</option>
                  {prefilledUnit && <option value={`Unit ${prefilledUnit}`}>{language === 'en' ? `Specific Unit ${prefilledUnit}` : `বিশেষ চিহ্নিত ইউনিট ${prefilledUnit}`}</option>}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider">{t('messageLabel')}</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('messagePlaceholder')}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                {t('submitBooking')} <ArrowRight size={18} />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
