import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Building2, Phone, Menu, X, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t('navHome'), path: "/" },
    { name: t('navProjects'), path: "/projects" },
    { name: t('navFloorPlans'), path: "/floor-plans" },
    { name: t('navBenefits'), path: "/benefits" },
    { name: t('navContact'), path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Top Banner Notice Bar */}
      <div className="bg-slate-950 text-slate-100 text-xs py-2 px-4 border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-3 truncate">
            <span className="flex items-center gap-1.5 text-emerald-400 font-extrabold shrink-0">
              <ShieldCheck size={14} /> <span>{t('safKablaNotice')}</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-200 font-medium truncate hidden md:inline">{t('locationNotice')}</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a href={`tel:${PROJECT_INFO.phonePrimary}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-bold text-white text-xs">
              <Phone size={13} className="text-emerald-400" /> {PROJECT_INFO.phonePrimary}
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="bg-slate-800 hover:bg-emerald-700 border border-slate-700 text-white text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors"
            >
              <Globe size={12} className="text-emerald-400" />
              <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            <span className="bg-emerald-700 text-white text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full hidden sm:inline-block">
              {t('bookingNotice')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled || !isHomePage
            ? 'bg-white shadow-lg py-3 border-b border-slate-200' 
            : 'bg-slate-950/95 backdrop-blur-md py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-emerald-700 group-hover:bg-emerald-600 p-2.5 rounded-xl shadow-md transition-colors">
              <Building2 className="text-white" size={22} />
            </div>
            <div>
              <div className={`text-lg sm:text-xl font-black tracking-tight leading-none ${
                !scrolled && isHomePage ? 'text-white' : 'text-slate-900'
              }`}>
                AKOTA <span className="text-emerald-700">PROPERTIES</span>
              </div>
              <div className={`text-[10px] font-bold tracking-widest uppercase mt-1 ${
                !scrolled && isHomePage ? 'text-emerald-300' : 'text-slate-600'
              }`}>
                {t('companySubName')}
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
                      ? 'text-emerald-700 font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-700 after:rounded-full'
                      : !scrolled && isHomePage
                        ? 'text-slate-100 hover:text-emerald-400'
                        : 'text-slate-700 hover:text-emerald-700'
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
              className={`p-2.5 rounded-xl border transition-all ${
                !scrolled && isHomePage 
                  ? 'border-slate-700 text-white hover:bg-slate-800' 
                  : 'border-slate-300 text-slate-800 hover:bg-slate-100'
              }`}
              title="Call Us"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              {t('bookNow')} <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="bg-emerald-100 text-emerald-900 text-xs font-black px-3 py-1.5 rounded-lg border border-emerald-300"
            >
              {language === 'bn' ? 'EN' : 'বাংলা'}
            </button>
            <button 
              className={`p-2.5 rounded-xl transition-colors ${
                !scrolled && isHomePage ? 'text-white bg-slate-800' : 'text-slate-900 bg-slate-100'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="bg-emerald-700 p-2 rounded-lg">
                    <Building2 className="text-white" size={20} />
                  </div>
                  <span className="font-black text-slate-900 text-base">AKOTA PROPERTIES</span>
                </div>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 rounded-lg"
                >
                  <X size={22} />
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
                          ? 'bg-emerald-50 text-emerald-800 font-black border border-emerald-200'
                          : 'text-slate-800 hover:bg-slate-100'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} className="text-slate-400" />
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                onClick={toggleLanguage}
                className="w-full bg-slate-100 text-slate-900 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 text-sm border border-slate-200"
              >
                <Globe size={16} className="text-emerald-700" />
                <span>{language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}</span>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-emerald-700 text-white py-3.5 rounded-xl font-extrabold text-center shadow-md flex items-center justify-center gap-2"
              >
                {t('consultationBtn')} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
