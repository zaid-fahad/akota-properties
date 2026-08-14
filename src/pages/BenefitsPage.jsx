import React from 'react';
import SEOHead from '../components/blocks/SEOHead';
import CostCalculator from '../components/blocks/CostCalculator';
import { Coins, ShieldCheck, MapPin, CheckCircle2, XCircle, ArrowRight, Building, Sparkles } from 'lucide-react';

export default function BenefitsPage({ onOpenBooking }) {
  return (
    <>
      <SEOHead 
        title="ল্যান্ড শেয়ারিং সুবিধা ও নির্দেশিকা | একতা প্রপার্টিজ"
        description="কেন ল্যান্ড-শেয়ারিং পদ্ধতিতে ফ্ল্যাট নির্মাণ সবচেয়ে সাশ্রয়ী ও ১০০% আইনি ঝুঁকিমুক্ত? জানুন ডেভেলপার প্রফিট ছাড়া ৪০% খরচে স্বপ্নের ফ্ল্যাট গড়ার গোপন কৌশল।"
        canonicalUrl="https://akotaproperties.com/benefits"
      />

      <main className="pt-28 pb-24 bg-slate-50 min-h-screen">
        {/* Page Banner */}
        <section className="bg-slate-950 text-white py-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-600/80 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              বিনিয়োগ ও আইনি গাইড
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              ল্যান্ড শেয়ারিং <span className="text-emerald-400">কেন সেরা পদ্ধতি?</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-medium">
              আপনার কষ্টার্জিত টাকার সঠিক ব্যবহার নিশ্চিত করতে জেনে নিন ল্যান্ড শেয়ারিং এর বৈপ্লবিক সুবিধা ও আইনি সুরক্ষা ব্যবস্থা।
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 space-y-20">
          
          {/* Comparison Table: Developer vs Land Sharing */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                ডেভেলপার মডেল বনাম <span className="text-emerald-600">ল্যান্ড শেয়ারিং মডেল</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-medium">
                একটি স্পষ্ট তুলনামূলক পার্থক্য নিচে তুলে ধরা হলো:
              </p>
            </div>

            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 p-6 md:p-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs uppercase tracking-wider">
                      <th className="py-4 px-4 font-black text-slate-400">বিষয় / বৈশিষ্ট্য</th>
                      <th className="py-4 px-4 font-black text-slate-400 bg-slate-50 rounded-tl-2xl">সাধারণ ডেভেলপার কোম্পানি</th>
                      <th className="py-4 px-4 font-black text-emerald-600 bg-emerald-50 rounded-tr-2xl">একতা প্রপার্টিজ ল্যান্ড শেয়ারিং</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium">
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">ফ্ল্যাট প্রতি মোট খরচ</td>
                      <td className="py-5 px-4 text-rose-600 bg-slate-50/50">৳ ৮০ লক্ষ - ১ কোটি ২৫ লক্ষ (অতিরিক্ত প্রফিট যুক্ত)</td>
                      <td className="py-5 px-4 font-black text-emerald-700 bg-emerald-50/40">৳ ৫০ লক্ষ - ৭০ লক্ষ (সরাসরি ৪০% সাশ্রয়)</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">জমির রেজিস্ট্রি সময়সূচী</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">ভবন নির্মাণ ও ফুল পেমেন্ট শেষে (৩-৫ বছর পর)</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">কাজ শুরুর পূর্বেই সরাসরি সাফ-কাবলা রেজিস্ট্রি</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">বিনিয়োগের সুরক্ষা</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">কেবল চুক্তিপত্র (জমি ডেভেলপারের নামে থাকে)</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">১০০% আইনি সুরক্ষা ও যৌথ নামজারি (Mutation)</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">নির্মাণ সামগ্রীর মান</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">ডেভেলপারের ইচ্ছাধীন (বাজেট কাটছাট সম্ভাবনা)</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">শেয়ারহোল্ডারদের উন্মুক্ত তদারকিতে সেরা মেটেরিয়াল</td>
                    </tr>
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-900">কিস্তি পরিশোধের নিয়ম</td>
                      <td className="py-5 px-4 text-slate-600 bg-slate-50/50">এককালীন ও কঠোর ফাইনান্সিয়াল পেনাল্টি</td>
                      <td className="py-5 px-4 font-bold text-emerald-800 bg-emerald-50/40">মাসিক সহজ নির্মাণ কিস্তি (২৪-৩৬ মাস)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Coins size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">৪০% পর্যন্ত সাশ্রয়</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                ডেভেলপার কোম্পানিগুলোর ৩০%-৪০% লাভ এবং মোটা অংকের মার্কেটিং খরচ বাদ দিয়ে সরাসরি আসল নির্মাণ খরচে ফ্ল্যাট বানিয়ে দেওয়ার ফলে এত বেশি সাশ্রয় হয়।
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">সরাসরি মালিকানা</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                ভবন নির্মাণের ইট গাঁথার আগেই আপনার নামে যৌথ জমি সাফ-কাবলা সাব-রেজিস্ট্রি অফিসে রেজিস্ট্রি করা হবে। ফলে আপনার মূলধন ১০০% ঝুঁকিমুক্ত।
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">মেট্রোরেল সংযোগ</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                উত্তরা ১৫নং সেক্টর দিয়াবাড়িতে মেট্রোরেলের ১নং স্টেশন সংলগ্ন হওয়ায় মতিঝিল, ফার্মগেট ও পুরো ঢাকা সিটিতে দ্রুত যাতায়াতের অতুলনীয় সুবিধা।
              </p>
            </div>
          </div>

          {/* Interactive Calculator Section */}
          <CostCalculator onOpenBooking={onOpenBooking} />

        </div>
      </main>
    </>
  );
}
