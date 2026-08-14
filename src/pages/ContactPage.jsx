import React, { useState } from 'react';
import SEOHead from '../components/blocks/SEOHead';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight, Building } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    share: '৮ কাঠা প্রজেক্ট (১১০০ SFT)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead 
        title="যোগাযোগ ও অফিস ঠিকানা | একতা প্রপার্টিজ লিমিটেড"
        description="একতা প্রপার্টিজ অফিসে সরাসরি এসে প্রজেক্টের কাগজপত্র ও সিসিটিভি ফুটেজ দেখুন। উত্তরা ১৫নং সেক্টর, দিয়াবাড়ি, ঢাকা।"
        canonicalUrl="https://akotaproperties.com/contact"
      />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
        {/* Banner */}
        <section className="bg-slate-950 text-white py-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
            <span className="bg-emerald-600/80 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              কাস্টমার সাপোর্ট & অফিস
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              সরাসরি যোগাযোগ করুন <span className="text-emerald-400">আমাদের সাথে</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-medium">
              আমাদের কর্পোরেট অফিসে এসে প্রজেক্ট সম্পর্কিত যেকোনো নথি ও কাগজপত্র যাচাই করার জন্য সাদর আমন্ত্রণ।
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden grid md:grid-cols-12 border border-slate-100">
            
            {/* Left Contact Details Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-3xl font-black mb-2">অফিস সংক্রান্ত তথ্য</h2>
                  <p className="text-emerald-100/70 text-xs font-medium">সপ্তাহে ৬ দিন খোলা (সকাল ৯:০০ - সন্ধ্যা ৭:০০)</p>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-800/60 rounded-2xl text-emerald-400 shrink-0 border border-emerald-700/50">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">অফিসের ঠিকানা</h4>
                      <p className="text-emerald-100/70 text-xs mt-1 leading-relaxed">{PROJECT_INFO.officeAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-800/60 rounded-2xl text-emerald-400 shrink-0 border border-emerald-700/50">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">হটলাইন & ফোন নম্বর</h4>
                      <a href={`tel:${PROJECT_INFO.phonePrimary}`} className="text-emerald-300 font-black text-sm block mt-1 hover:underline">
                        {PROJECT_INFO.phonePrimary}
                      </a>
                      <a href={`tel:${PROJECT_INFO.phoneSecondary}`} className="text-emerald-100/70 text-xs block hover:underline">
                        {PROJECT_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-800/60 rounded-2xl text-emerald-400 shrink-0 border border-emerald-700/50">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">ইমেইল ঠিকানা</h4>
                      <a href={`mailto:${PROJECT_INFO.email}`} className="text-emerald-300 text-xs block mt-1 hover:underline">
                        {PROJECT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-emerald-800/60 relative z-10">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">সোশ্যাল মিডিয়া অনুসরণ করুন</p>
                <div className="flex gap-3">
                  {['Facebook', 'LinkedIn', 'YouTube'].map((net, i) => (
                    <span key={i} className="bg-white/10 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-xl cursor-pointer transition-colors">
                      {net}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-slate-900 mb-2">বুকিং কনসালটেশন ফরম</h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-8 font-medium">
                নিচের ফরমে তথ্য প্রদান করুন, আমাদের টিম অতি দ্রুত আপনার সাথে সরাসরি যোগাযোগ করবে।
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center space-y-4">
                  <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
                  <h4 className="text-2xl font-black text-emerald-900">ধন্যবাদ {formData.name}!</h4>
                  <p className="text-slate-600 text-sm font-medium">
                    আপনার মেসেজটি সফলভাবে গৃহীত হয়েছে। খুব শীঘ্রই আমাদের প্রতিনিধি আপনাকে ফোন করবেন।
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase text-slate-400">আপনার নাম *</label>
                      <input 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="মোঃ রফিকুল ইসলাম" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase text-slate-400">মোবাইল নম্বর *</label>
                      <input 
                        required 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01711000000" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-400">আগ্রহী প্রজেক্ট শেয়ার</label>
                    <select 
                      value={formData.share}
                      onChange={(e) => setFormData({ ...formData, share: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option>৮ কাঠা প্রজেক্ট শেয়ার (১১০০ SFT)</option>
                      <option>১০ কাঠা প্রজেক্ট শেয়ার (১৪০০ SFT)</option>
                      <option>১২ কাঠা প্রজেক্ট শেয়ার (১৭০০ SFT)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-400">মেসেজ বা প্রশ্ন</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="আপনার কোনো বিশেষ প্রশ্ন থাকলে এখানে লিখুন..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> মেসেজ পাঠান
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Location Map Placeholder / Preview */}
          <div className="mt-16 bg-white p-8 rounded-[3.5rem] shadow-xl border border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={24} className="text-emerald-600" />
              <h3 className="text-2xl font-black text-slate-900">গুগল ম্যাপ লোকেশন (মেট্রোরেল উত্তর স্টেশন-১ সংলগ্ন)</h3>
            </div>
            <div className="w-full h-80 bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner border border-slate-300">
              <iframe 
                title="Akota Properties Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.137837887754!2d90.3703964!3d23.8706362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b681c2089%3A0xe51070529d4432c6!2sUttara%20Sector%2015%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
