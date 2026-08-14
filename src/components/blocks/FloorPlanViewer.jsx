import React, { useState } from 'react';
import { Download, Maximize, CheckCircle2, Bed, Bath, Compass, ChevronRight, X, FileText } from 'lucide-react';
import { FLOOR_SPECS } from '../../data/projectData';

export default function FloorPlanViewer({ onOpenBrochure, onOpenBooking }) {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);

  const plan = FLOOR_SPECS[activePlanIndex];

  return (
    <section className="py-24 bg-white relative" id="floor-plans">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <FileText size={14} /> আর্কিটেকচারাল লেআউট
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            অভিজ্ঞ আর্কিটেক্ট দ্বারা ডিজাইনকৃত <span className="text-emerald-600">ফ্লোর প্ল্যান</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-4 font-medium">
            পর্যাপ্ত প্রাকৃতিক আলো ও বায়ুপ্রবাহ নিশ্চিত করতে দক্ষ আর্কিটেকচারাল টিম দিয়ে প্রস্তুত।
          </p>
          <div className="w-20 h-1.5 bg-emerald-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FLOOR_SPECS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActivePlanIndex(idx)}
              className={`px-6 py-3.5 rounded-2xl text-sm font-black transition-all ${
                activePlanIndex === idx
                  ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.type}
            </button>
          ))}
        </div>

        {/* Main Floor Plan Detail Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-[3.5rem] shadow-2xl overflow-hidden grid lg:grid-cols-12 border border-slate-100">
          
          {/* Image Column */}
          <div className="lg:col-span-6 p-8 lg:p-12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
            <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img 
                src={plan.image} 
                alt={plan.type} 
                className="w-full h-80 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => setZoomImage(plan.image)}
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-black text-xs shadow-2xl flex items-center gap-2">
                  <Maximize size={16} /> বড় করে দেখুন
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>* সকল মাপ আর্কিটেক্ট ব্লু-প্রিন্ট ভিত্তিক</span>
              <button 
                onClick={() => setZoomImage(plan.image)}
                className="text-emerald-600 hover:underline flex items-center gap-1"
              >
                <Maximize size={14} /> ফুলস্ক্রীন ভিউ
              </button>
            </div>
          </div>

          {/* Specs Column */}
          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full mb-3">
                {plan.katha}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">{plan.type}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                নাগরিক স্বাচ্ছন্দ্য ও আধুনিক রুচির সমন্বয়ে এই ইউনিটে প্রতিটি ইঞ্চি জায়গা দক্ষতার সাথে ব্যবহার করা হয়েছে।
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>{plan.bedrooms} বেডরুম</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>{plan.bathrooms} বাথরুম</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>{plan.balconies} বারান্দা</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-slate-800 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                  <span>লিভিং ও ডাইনিং</span>
                </div>
              </div>

              {/* Detailed Room Dimensions list */}
              <div className="space-y-2 border-t border-slate-100 pt-6 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-500">মাস্টার বেডরুম:</span>
                  <span className="font-bold text-slate-800">{plan.masterBed}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-500">চাইল্ড বেডরুম:</span>
                  <span className="font-bold text-slate-800">{plan.childBed}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-500">ড্রয়িং রুম:</span>
                  <span className="font-bold text-slate-800">{plan.living}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-slate-500">মডার্ন কিচেন:</span>
                  <span className="font-bold text-slate-800">{plan.kitchen}</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={onOpenBrochure}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <Download size={18} className="text-emerald-400" /> সম্পূর্ণ ক্যাটালগ ডাউনলোড (PDF)
              </button>
              <button
                onClick={onOpenBooking}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-2xl font-extrabold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                এই ফ্লোরের ইউনিট বুকিং দিন <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden p-2 shadow-2xl">
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 bg-slate-900 text-white p-2 rounded-full z-10 hover:bg-emerald-600 transition-colors"
            >
              <X size={24} />
            </button>
            <img src={zoomImage} alt="Zoomed Floor Plan" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl" />
          </div>
        </div>
      )}
    </section>
  );
}
