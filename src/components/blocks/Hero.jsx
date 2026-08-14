import React from 'react';
import { Star, ArrowRight, MapPin, Coins, Building, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenBrochure }) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-36 md:pt-40 pb-28 lg:pb-36 overflow-hidden bg-slate-950 text-white">
      {/* Visual Background Image with Smooth Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover object-center brightness-75 scale-105 animate-pulse duration-[10000ms]" 
          alt="Luxury Apartment Building in Uttara Diabari" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      {/* Decorative Floating Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 my-auto">
        <div className="max-w-4xl space-y-6 sm:space-y-7">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-xl border border-emerald-400/30">
            <Star size={14} className="fill-emerald-300 text-emerald-300" /> ল্যান্ড শেয়ারিং আবাসন প্রকল্প
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            উত্তরায় নিজের ফ্ল্যাট <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              সাধ্যের মধ্যেই।
            </span>
          </h1>

          {/* Descriptive Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed drop-shadow-sm">
            ল্যান্ড-শেয়ারিং পদ্ধতিতে ডেভেলপার প্রফিট ছাড়াই মেট্রোরেল ১ম স্টেশন সংলগ্ন উত্তরা ১৫নং সেক্টরে গড়ে তুলুন আপনার স্থায়ী ঠিকানা। বাজারমূল্যের চেয়ে <span className="text-emerald-400 font-extrabold underline decoration-emerald-500 decoration-2">৪০% কম খরচে</span> ফ্ল্যাট তৈরির বিশেষ সুযোগ!
          </p>

          {/* Key Feature Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl text-xs sm:text-sm font-bold text-emerald-100">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <span>নির্মাণের পূর্বেই জমি সাফ-কাবলা রেজিস্ট্রি</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
              <Zap size={18} className="text-emerald-400 shrink-0" />
              <span>মেট্রোরেল স্টেশন থেকে মাত্র ২ মিনিটে গমনাগমন</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <button 
              onClick={onOpenBooking} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-black text-sm sm:text-base md:text-lg shadow-2xl shadow-emerald-900/60 flex items-center gap-3 transition-all hover:-translate-y-1 active:scale-95 border border-emerald-400/40"
            >
              বুকিং কনসালটেশন নিন <ArrowRight size={20} />
            </button>
            <button 
              onClick={onOpenBrochure}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-extrabold text-sm sm:text-base md:text-lg transition-all hover:-translate-y-0.5 active:scale-95"
            >
              ব্রোশিয়ার ও ক্যাটালগ
            </button>
          </div>

        </div>
      </div>

      {/* Stats Summary Strip at Bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md shadow-2xl py-4 sm:py-6 border-t border-emerald-100/50 z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            
            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4">
              <div className="p-2.5 sm:p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0">
                <MapPin size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">লোকেশন</p>
                <p className="font-extrabold text-slate-900 text-xs sm:text-sm">উত্তরা ১৫নং সেক্টর, দিয়াবাড়ি</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 pt-2 sm:pt-0">
              <div className="p-2.5 sm:p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0">
                <Coins size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">শেয়ার মূল্য শুরু</p>
                <p className="font-extrabold text-emerald-600 text-xs sm:text-base">৳ ২৫ লক্ষ থেকে</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 pt-2 sm:pt-0">
              <div className="p-2.5 sm:p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0">
                <Building size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">ভবনের উচ্চতা</p>
                <p className="font-extrabold text-slate-900 text-xs sm:text-sm">১০ তলা (B+G+9)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 pt-2 sm:pt-0">
              <div className="p-2.5 sm:p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0">
                <Clock size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">হ্যান্ডওভার সময়সূচী</p>
                <p className="font-extrabold text-slate-900 text-xs sm:text-sm">২০২৭ - ২০৩০</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
