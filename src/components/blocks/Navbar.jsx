import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Building, Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "প্রজেক্টসমূহ", path: "/projects" },
    { name: "ফ্লোর প্ল্যান", path: "/floor-plans" },
    { name: "ল্যান্ড শেয়ারিং সুবিধা", path: "/benefits" },
    { name: "যোগাযোগ", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Top Banner Notice Bar - Sticky on Desktop & Mobile */}
      <div className="bg-slate-950 text-slate-300 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800/80">
        <div className="container mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold shrink-0">
              <ShieldCheck size={14} /> <span>১০০% জমি সাফ-কাবলা রেজিস্ট্রি</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-300 truncate hidden md:inline">উত্তরা ১৫নং সেক্টর, দিয়াবাড়ি (মেট্রোরেল ১ম স্টেশন সংলগ্ন)</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <a href={`tel:${PROJECT_INFO.phonePrimary}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-bold text-white text-xs">
              <Phone size={12} className="text-emerald-400" /> {PROJECT_INFO.phonePrimary}
            </a>
            <span className="bg-emerald-600 text-white text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full hidden sm:inline-block">
              বুকিং চলছে
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent py-3.5 md:py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-emerald-600 group-hover:bg-emerald-500 p-2 rounded-xl shadow-lg shadow-emerald-600/30 transition-transform group-hover:scale-105">
              <Building className="text-white" size={22} />
            </div>
            <div>
              <div className={`text-lg sm:text-xl font-black tracking-tight leading-none ${
                !scrolled && isHomePage ? 'text-white' : 'text-slate-900'
              }`}>
                AKOTA <span className="text-emerald-600">PROPERTIES</span>
              </div>
              <div className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5 ${
                !scrolled && isHomePage ? 'text-emerald-200' : 'text-slate-500'
              }`}>
                একতা প্রপার্টিজ লিমিটেড
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-all relative py-1 ${
                    isActive 
                      ? 'text-emerald-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600 after:rounded-full'
                      : !scrolled && isHomePage
                        ? 'text-slate-100 hover:text-emerald-400'
                        : 'text-slate-700 hover:text-emerald-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${PROJECT_INFO.phonePrimary}`}
              className={`p-2 rounded-full border transition-all ${
                !scrolled && isHomePage 
                  ? 'border-white/30 text-white hover:bg-white/10' 
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="কল করুন"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-emerald-600/30 transition-all hover:shadow-emerald-600/50 active:scale-95 flex items-center gap-2"
            >
              বুকিং দিন <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              !scrolled && isHomePage ? 'text-white bg-white/10' : 'text-slate-800 bg-slate-100'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-600 p-1.5 rounded-lg">
                    <Building className="text-white" size={20} />
                  </div>
                  <span className="font-black text-slate-900 text-lg">AKOTA PROPERTIES</span>
                </div>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-bold transition-all text-left flex items-center justify-between ${
                        isActive 
                          ? 'bg-emerald-50 text-emerald-700 font-extrabold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} className="opacity-40" />
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-center shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                বুকিং কনসালটেশন <ArrowRight size={18} />
              </button>
              <a
                href={`tel:${PROJECT_INFO.phonePrimary}`}
                className="w-full bg-slate-100 text-slate-800 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 text-sm"
              >
                <Phone size={16} className="text-emerald-600" /> {PROJECT_INFO.phonePrimary}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
