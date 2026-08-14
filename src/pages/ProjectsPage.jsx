import React, { useState } from 'react';
import SEOHead from '../components/blocks/SEOHead';
import { MapPin, Building, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projectData';

export default function ProjectsPage({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <>
      <SEOHead 
        title="আমাদের প্রজেক্টসমূহ | একতা প্রপার্টিজ উত্তরা দিয়াবাড়ি"
        description="একতা মেট্রো ভিউ ০১, ০২ ও ০৩ প্রজেক্টসমূহ দেখুন। উত্তরা ১৫নং সেক্টর দিয়াবাড়িতে মেট্রোরেল স্টেশন ঘেঁষে নির্মিতব্য লাক্সারি ল্যান্ড-শেয়ারিং আবাসিক ভবন।"
        canonicalUrl="https://akotaproperties.com/projects"
      />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
        {/* Page Header */}
        <section className="bg-slate-950 text-white py-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-600/80 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              প্রজেক্ট পোর্টফোলিও
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              আমাদের বর্তমান <span className="text-emerald-400">প্রকল্পসমূহ</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-medium">
              উত্তরা ডিয়াবাড়ি মেট্রোরেল স্টেশন-১ সংলগ্ন আধুনিক নাগরিক জীবনযাত্রার পূর্ণ নিশ্চয়তা নিয়ে গড়ে উঠছে আমাদের প্রকল্পগুলি।
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {PROJECTS.map((proj, idx) => (
              <div 
                key={proj.id}
                className="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 grid lg:grid-cols-12 hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image & Status Badge */}
                <div className="lg:col-span-6 relative group overflow-hidden bg-slate-900">
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="w-full h-full min-h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-emerald-600 text-white font-extrabold text-xs uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Sparkles size={14} /> {proj.status}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-emerald-400">জমির পরিমাণ: {proj.landArea}</span>
                      <span>হ্যান্ডওভার: {proj.handover}</span>
                    </div>
                  </div>
                </div>

                {/* Project Info & Specs */}
                <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2">{proj.name}</h2>
                    <p className="text-emerald-600 font-extrabold text-sm mb-4 flex items-center gap-1.5">
                      <MapPin size={16} /> {proj.location}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {proj.tagline}
                    </p>

                    {/* Key Specs Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">শুরু মূল্য</span>
                        <span className="text-emerald-600 font-black text-sm">৳ {proj.priceStart}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">ভবন</span>
                        <span className="text-slate-800 text-sm">{proj.totalFloors}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">মোট ইউনিট</span>
                        <span className="text-slate-800 text-sm">{proj.totalUnits}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-8">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-400">প্রজেক্ট হাইলাইটস:</p>
                      {proj.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                    <button
                      onClick={onOpenBooking}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-black text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                    >
                      বুকিং ও ফ্লোর প্ল্যান দেখুন <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
