import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function BrochureModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    const element = document.createElement("a");
    const file = new Blob([
      `====================================================\n` +
      `AKOTA PROPERTIES LTD. - OFFICIAL BROCHURE & CATALOG\n` +
      `====================================================\n\n` +
      `Project: Ekota Metro View 01, 02, 03\n` +
      `Location: Uttara Sector 15, Diabari (Adjacent to Metro Rail Station 1)\n` +
      `Contact: ${PROJECT_INFO.phonePrimary} | ${PROJECT_INFO.email}\n\n` +
      `----------------------------------------------------\n` +
      `LAND SHARING HIGHLIGHTS & SFT OPTIONS\n` +
      `----------------------------------------------------\n` +
      `1. 8 Katha Project: 1100-1200 SFT (3 Bed, 3 Bath, 2 Balcony)\n` +
      `   - Land Share: Tk 25 Lac | Construction Est: Tk 25 Lac | Total: Tk 50 Lac\n` +
      `2. 10 Katha Project: 1400-1500 SFT (3 Bed, 3 Bath, 3 Balcony)\n` +
      `   - Land Share: Tk 30 Lac | Construction Est: Tk 30 Lac | Total: Tk 60 Lac\n` +
      `3. 12 Katha Project: 1700-1800 SFT (4 Bed, 4 Bath, 3 Balcony)\n` +
      `   - Land Share: Tk 35 Lac | Construction Est: Tk 35 Lac | Total: Tk 70 Lac\n\n` +
      `Legal Guarantee: Saf-Kabla Registration before construction.\n` +
      `Handover: 2027 - 2030\n` +
      `Office: Level 4, Block C, Metro Rail North Plaza, Uttara, Dhaka.\n`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "Akota_Properties_Brochure_Catalog.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-slate-100 hover:bg-slate-200 text-slate-600 p-2.5 rounded-full z-10 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-8 relative">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <FileText size={14} /> Official Brochure PDF
          </div>
          <h3 className="text-2xl font-black">{t('brochureModalTitle')}</h3>
          <p className="text-slate-300 text-xs mt-1">
            {t('brochureModalSub')}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="w-16 h-20 bg-emerald-700 text-white rounded-xl flex items-center justify-center shadow-md shrink-0 font-black text-xs text-center p-1">
              PDF<br/>CATALOG
            </div>
            <div className="text-xs space-y-1">
              <h4 className="font-extrabold text-slate-900 text-sm">Akota_Properties_Full_Brochure.pdf</h4>
              <p className="text-slate-500">{language === 'en' ? 'File Size: 4.5 MB | Edition: 2026' : 'ফাইল সাইজ: ৪.৫ মেগাবাইট | সংস্করণ: ২০২৬'}</p>
              <p className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 size={13} /> {language === 'en' ? 'Includes High-Res Blueprints' : 'হাই-রেজুলেশন ব্লু-প্রিন্ট অন্তর্ভুক্ত'}
              </p>
            </div>
          </div>

          {downloaded ? (
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
              <CheckCircle2 size={28} className="text-emerald-600 mx-auto" />
              <p className="font-black text-emerald-900 text-sm">
                {language === 'en' ? 'Your brochure catalog has been downloaded!' : 'আপনার ব্রোশিয়ারটি ডাউনলোড হয়েছে!'}
              </p>
              <p className="text-xs text-emerald-700">
                {language === 'en' 
                  ? `For further details call us: ${PROJECT_INFO.phonePrimary}`
                  : `ফাইলটি চেক করুন। যেকোনো বিষয়ে জানতে আমাদের কল করুন: ${PROJECT_INFO.phonePrimary}`}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                onClick={handleDownload}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} /> {t('downloadDirectPdf')}
              </button>

              <div className="relative flex items-center justify-center">
                <span className="bg-white px-3 text-[11px] font-bold text-slate-400 z-10">{t('orGetWhatsapp')}</span>
                <div className="absolute inset-0 border-t border-slate-200 top-1/2"></div>
              </div>

              <div className="flex gap-2">
                <input 
                  type="tel" 
                  value={phoneInput} 
                  onChange={(e) => setPhoneInput(e.target.value)} 
                  placeholder={t('enterWhatsapp')}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={() => {
                    if (phoneInput) {
                      alert(language === 'en' ? `Thank you! Brochure link sent to ${phoneInput} on WhatsApp.` : `ধন্যবাদ! ${phoneInput} নম্বরে হোয়াটসঅ্যাপে ব্রোশিয়ার লিংক পাঠানো হচ্ছে।`);
                      onClose();
                    }
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold px-4 py-3 rounded-xl whitespace-nowrap"
                >
                  {t('sendWhatsappBtn')}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
