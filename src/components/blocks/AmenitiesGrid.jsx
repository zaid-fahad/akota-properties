import React from 'react';
import { Zap, ShieldCheck, Star, Layout, Lock, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import { AMENITIES } from '../../data/projectData';

const iconMap = {
  Zap: <Zap size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  Star: <Star size={28} />,
  Layout: <Layout size={28} />,
  Lock: <Lock size={28} />,
  Car: <Car size={28} />
};

export default function AmenitiesGrid({ onOpenBooking }) {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="amenities">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Star size={14} /> আধুনিক নাগরিক সুবিধা
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            প্রজেক্টের আন্তর্জাতিক মানের <span className="text-emerald-600">বিশেষ বৈশিষ্ট্যসমূহ</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-4 font-medium">
            উত্তরা ডিয়াবাড়ির প্রাণকেন্দ্রে নিরাপদ, আধুনিক ও আধুনিক জীবনযাত্রার নিশ্চয়তা।
          </p>
          <div className="w-20 h-1.5 bg-emerald-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-emerald-200 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                {iconMap[item.icon] || <Star size={28} />}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 100% Guarantee Highlight Box */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-[3rem] p-8 md:p-12 shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-emerald-700/40">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-black px-3.5 py-1 rounded-full border border-emerald-400/30">
              <ShieldCheck size={16} /> ১০০% ঝুঁকিমুক্ত বিনিয়োগ
            </div>
            <h3 className="text-2xl md:text-4xl font-black">জমির সাফ-কাবলা রেজিস্ট্রি আগে, ভবন নির্মাণ পরে!</h3>
            <p className="text-emerald-100/80 text-sm md:text-base max-w-2xl font-medium">
              আপনার কষ্টার্জিত প্রতিটি টাকার পূর্ণ আইনি সুরক্ষা নিশ্চিত করতে আমরা কাজ শুরুর পূর্বেই আপনার নামে যৌথ জমি সাব-রেজিস্ট্রি অফিসে সাফ-কাবলা ও নামজারি করে দিই।
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-white text-emerald-950 hover:bg-emerald-50 px-8 py-4 rounded-2xl font-black text-base md:text-lg shadow-xl shrink-0 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            ফ্রি কনসালটেশন বুক করুন <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
