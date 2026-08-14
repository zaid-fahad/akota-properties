import React from 'react';
import { Link } from 'react-router-dom';
import { Maximize, CheckCircle2, ArrowRight, Sparkles, Bed, Bath, Compass } from 'lucide-react';
import { SHARES } from '../../data/projectData';

export default function ShareComparison({ onOpenBooking }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="shares">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Sparkles size={14} /> জমির শেয়ার ও স্পেসিফিকেশন
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            আপনার পরিবারের জন্য <span className="text-emerald-600">সেরা শেয়ারটি</span> বেছে নিন
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-4 font-medium">
            ৩টি ভিন্ন কাঠার শেয়ার অপশন। প্রতিটি ইউনিটে সুপরিসর বেডরুম, আধুনিক বাথরুম ও ভেন্টিলেটেড বারান্দা।
          </p>
          <div className="w-24 h-1.5 bg-emerald-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Share Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {SHARES.map((item) => (
            <div 
              key={item.id} 
              className={`group relative bg-white border rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                item.popular 
                  ? 'border-emerald-500 shadow-2xl shadow-emerald-600/15 ring-2 ring-emerald-500/20' 
                  : 'border-slate-100 shadow-xl hover:shadow-2xl hover:border-emerald-300'
              }`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-xs uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles size={13} /> সবচেয়ে জনপ্রিয় শেয়ার
                </div>
              )}

              <div>
                {/* Header Icon & Katha */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl shadow-sm">
                    <Maximize size={26} />
                  </div>
                  <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">
                    {item.share} শেয়ার
                  </span>
                </div>

                {/* Title & Size */}
                <h3 className="text-2xl font-black text-slate-900">{item.katha} প্রজেক্ট শেয়ার</h3>
                <p className="text-emerald-700 font-extrabold text-lg mt-1">{item.size} প্রিমিয়াম ফ্ল্যাট</p>
                <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">{item.recommendedFor}</p>

                {/* Specs Pill List */}
                <div className="grid grid-cols-3 gap-2 my-6 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center text-xs font-bold text-slate-700">
                  <div className="flex flex-col items-center gap-1">
                    <Bed size={16} className="text-emerald-600" />
                    <span>{item.beds} বেড</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-slate-200">
                    <Bath size={16} className="text-emerald-600" />
                    <span>{item.baths} বাথ</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Compass size={16} className="text-emerald-600" />
                    <span>{item.balconies} বারান্দা</span>
                  </div>
                </div>

                {/* Financial Breakdown */}
                <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">জমির মূল্য (শেয়ার):</span>
                    <span className="font-black text-emerald-600 text-lg">৳ {item.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">আনুমানিক নির্মাণ খরচ:</span>
                    <span className="font-bold text-slate-800">৳ {item.estimatedConstCost}</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-2.5 rounded-xl text-emerald-900 border border-emerald-100">
                    <span className="font-bold text-xs">ল্যান্ড শেয়ারিং মোট খরচ:</span>
                    <span className="font-black text-base">৳ {item.totalCost}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>ডেভেলপার বাজারমূল্য:</span>
                    <span className="line-through font-semibold text-slate-400">৳ {item.marketPrice}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  শেয়ার বুকিং দিন <ArrowRight size={16} />
                </button>
                <Link
                  to="/floor-plans"
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-2xl transition-colors block text-center text-xs"
                >
                  ফ্লোর প্ল্যান লেআউট দেখুন
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
