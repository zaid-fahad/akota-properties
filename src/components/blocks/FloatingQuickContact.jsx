import React from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export default function FloatingQuickContact({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg backdrop-blur-md flex items-center justify-center transition-all hover:scale-110"
        title="উপরে যান"
      >
        <ArrowUp size={18} />
      </button>

      {/* Direct Phone Dial Button */}
      <a
        href={`tel:${PROJECT_INFO.phonePrimary}`}
        className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce transition-all hover:scale-110 border-2 border-white/40"
        title="সরাসরি কল করুন"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
