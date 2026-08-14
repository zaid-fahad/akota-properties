import React from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROJECT_INFO, PROJECTS } from '../../data/projectData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-600 p-2 rounded-xl text-white shadow-lg shadow-emerald-600/30">
                <Building size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-none">AKOTA <span className="text-emerald-500">PROPERTIES</span></h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">একতা প্রপার্টিজ লিমিটেড</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              "ন্যায্য খরচে মানসম্মত আবাসন" — ল্যান্ড শেয়ারিং পদ্ধতিতে ডেভেলপার মুনফা বাদ দিয়ে উত্তরায় নিজস্ব আধুনিক ফ্ল্যাট গড়ার বিশ্বস্ত প্রতিষ্ঠান।
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck size={16} /> রাজউক প্ল্যান ও সাফ-কাবলা রেজিস্ট্রি নিশ্চিত
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.25em] text-emerald-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> ন্যাভিগেশন
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              {[
                { name: "হোম পেজ", path: "/" },
                { name: "আমাদের সকল প্রজেক্ট", path: "/projects" },
                { name: "ফ্লোর প্ল্যান ও লেআউট", path: "/floor-plans" },
                { name: "ল্যান্ড শেয়ারিং এর সুবিধা", path: "/benefits" },
                { name: "যোগাযোগ ও বুকিং", path: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-slate-400 hover:translate-x-1 duration-200 inline-flex"
                  >
                    <ArrowRight size={13} className="text-emerald-600" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Current Projects */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.25em] text-emerald-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> চলমান প্রজেক্টসমূহ
            </h4>
            <ul className="space-y-3.5 text-sm">
              {PROJECTS.map((proj) => (
                <li key={proj.id} className="group">
                  <Link to="/projects" className="block p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 transition-all">
                    <p className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{proj.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{proj.landArea} শেয়ার | {proj.sizes.join(', ')}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.25em] text-emerald-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> সরাসরি যোগাযোগ
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0 mt-1" size={18} />
                <p className="text-slate-400 text-xs leading-relaxed">{PROJECT_INFO.officeAddress}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-500 shrink-0" size={18} />
                <div>
                  <a href={`tel:${PROJECT_INFO.phonePrimary}`} className="font-bold text-white hover:text-emerald-400 text-xs block">
                    {PROJECT_INFO.phonePrimary}
                  </a>
                  <a href={`tel:${PROJECT_INFO.phoneSecondary}`} className="text-slate-400 text-xs block">
                    {PROJECT_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0" size={18} />
                <a href={`mailto:${PROJECT_INFO.email}`} className="text-slate-400 hover:text-emerald-400 text-xs">
                  {PROJECT_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-900/50 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} /> ফ্রী বুকিং কনসালটেশন নিন
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {PROJECT_INFO.nameEn}. All Rights Reserved.</p>
          <div className="flex items-center gap-6 font-semibold">
            <Link to="/benefits" className="hover:text-emerald-400 transition-colors">শর্তাবলী ও ল্যান্ড গ্যারান্টি</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">প্রাইভেসি পলিসি</Link>
            <span>•</span>
            <Link to="/projects" className="hover:text-emerald-400 transition-colors">সাইট ম্যাপ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
