import React, { useState } from 'react';
import { Building2, CheckCircle2, Lock, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { UNIT_AVAILABILITY_MATRIX } from '../../data/projectData';

export default function UnitAvailability({ onOpenBooking }) {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return <span className="bg-emerald-500 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md">খালি আছে</span>;
      case 'booked':
        return <span className="bg-slate-400 text-white font-bold text-[10px] px-2 py-0.5 rounded-md">বুকড</span>;
      case 'reserved':
        return <span className="bg-amber-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-md">প্রসেসিং</span>;
      default:
        return <span className="bg-slate-700 text-slate-300 font-bold text-[10px] px-2 py-0.5 rounded-md">কমন স্পেস</span>;
    }
  };

  return (
    <section className="py-24 bg-slate-100 relative" id="availability">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Building2 size={14} /> লাইভ ইউনিট স্ট্যাটাস
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            ভবনের ফ্লোর অনুযায়ী <span className="text-emerald-600">ইউনিট এভেইলিবিলিটি</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-4 font-medium">
            ১০ তলা ভবনের (B+G+9) পছন্দের ফ্লোর ও দিক অনুযায়ী আপনার পছন্দের ইউনিটটি বাছাই করুন।
          </p>
          <div className="w-20 h-1.5 bg-emerald-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Legend Indicator Bar */}
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-wrap justify-center items-center gap-6 text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 inline-block"></span>
            <span>খালি আছে (বুকিং উন্মুক্ত)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-slate-400 inline-block"></span>
            <span>বুকিং সম্পন্ন</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500 inline-block"></span>
            <span>বুকিং প্রসেসিং চলছে</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800 inline-block"></span>
            <span>কমিউনিটি/পার্কিং</span>
          </div>
        </div>

        {/* Floor Matrix Building Representation */}
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-6 md:p-10 shadow-2xl border border-slate-200/80">
          <div className="space-y-4">
            {UNIT_AVAILABILITY_MATRIX.map((row, idx) => (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all gap-4"
              >
                <div className="sm:w-1/3">
                  <p className="font-black text-slate-900 text-sm">{row.floor}</p>
                </div>
                <div className="sm:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {row.units.map((u, uIdx) => (
                    <button
                      key={uIdx}
                      disabled={u.status !== 'available'}
                      onClick={() => {
                        setSelectedUnit(u);
                        onOpenBooking(u.num);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                        u.status === 'available'
                          ? 'bg-emerald-50 border-emerald-300 hover:bg-emerald-600 hover:text-white group cursor-pointer shadow-sm'
                          : u.status === 'booked'
                            ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-75'
                            : u.status === 'reserved'
                              ? 'bg-amber-50 border-amber-200 text-amber-900 cursor-not-allowed'
                              : 'bg-slate-800 text-slate-300 border-slate-700 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full mb-1">
                        <span className="font-black text-xs">{u.num}</span>
                        {getStatusBadge(u.status)}
                      </div>
                      <span className="text-[11px] font-semibold opacity-80">{u.size}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>পছন্দের ইউনিট বুক করতে উপরে খালি ইউনিটে ক্লিক করুন</span>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3 rounded-xl text-xs shadow-lg shadow-emerald-600/30 flex items-center gap-2"
            >
              সরাসরি যোগাযোগ করুন <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
