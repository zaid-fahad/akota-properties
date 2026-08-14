import React from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROJECT_INFO, PROJECTS } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer({ onOpenBooking }) {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 border-t border-slate-800 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-600 p-2 rounded-xl text-white shadow-lg shadow-emerald-600/30">
                <Building size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-none">AKOTA <span className="text-emerald-500">PROPERTIES</span></h3>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">{t('companySubName')}</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              {t('footerDesc')}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck size={16} /> {t('footerRegNotice')}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.25em] text-emerald-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {t('footerNavTitle')}
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              {[
                { name: t('navHome'), path: "/" },
                { name: t('navProjects'), path: "/projects" },
                { name: t('navFloorPlans'), path: "/floor-plans" },
                { name: t('navBenefits'), path: "/benefits" },
                { name: t('navContact'), path: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-slate-300 hover:translate-x-1 duration-200 inline-flex"
                  >
                    <ArrowRight size={13} className="text-emerald-500" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Current Projects */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.25em] text-emerald-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {t('footerProjectsTitle')}
            </h4>
            <ul className="space-y-3.5 text-sm">
              {PROJECTS.map((proj) => (
                <li key={proj.id} className="group">
                  <Link to="/projects" className="block p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/60 transition-all">
                    <p className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                      {language === 'en' ? (proj.nameEn || proj.name) : proj.name}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium">
                      {language === 'en' ? (proj.landAreaEn || proj.landArea) : proj.landArea} | {proj.sizes.join(', ')}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.25em] text-emerald-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {t('footerContactTitle')}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-400 shrink-0 mt-1" size={18} />
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  {language === 'en' ? 'Level 4, Block C, Metro Rail North Plaza, Sector 15, Uttara, Dhaka-1230' : PROJECT_INFO.officeAddress}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-400 shrink-0" size={18} />
                <div>
                  <a href={`tel:${PROJECT_INFO.phonePrimary}`} className="font-bold text-white hover:text-emerald-400 text-xs block">
                    {PROJECT_INFO.phonePrimary}
                  </a>
                  <a href={`tel:${PROJECT_INFO.phoneSecondary}`} className="text-slate-300 text-xs block font-medium hover:text-emerald-400">
                    {PROJECT_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-400 shrink-0" size={18} />
                <a href={`mailto:${PROJECT_INFO.email}`} className="text-slate-300 hover:text-emerald-400 text-xs font-medium">
                  {PROJECT_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-900/50 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} /> {t('footerConsultationBtn')}
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PROJECT_INFO.nameEn}. {t('rightsReserved')}</p>
          <div className="flex items-center gap-6 font-semibold">
            <Link to="/benefits" className="hover:text-emerald-400 transition-colors">{t('termsLink')}</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">{t('privacyLink')}</Link>
            <span>•</span>
            <Link to="/projects" className="hover:text-emerald-400 transition-colors">{t('sitemapLink')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
