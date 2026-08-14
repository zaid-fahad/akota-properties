import React, { useState } from 'react';
import { Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import { UNIT_AVAILABILITY_MATRIX } from '../../data/projectData';
import { useLanguage } from '../../context/LanguageContext';

export default function UnitAvailability({ onOpenBooking }) {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const { language, t } = useLanguage();

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return <span className="bg-emerald-700 text-white font-extrabold text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md shrink-0">{language === 'en' ? 'Open' : 'খালি'}</span>;
      case 'booked':
        return <span className="bg-slate-500 text-white font-bold text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md shrink-0">{language === 'en' ? 'Booked' : 'বুকড'}</span>;
      case 'reserved':
        return <span className="bg-amber-600 text-white font-bold text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md shrink-0">{language === 'en' ? 'Pending' : 'প্রসেসিং'}</span>;
      default:
        return <span className="bg-slate-800 text-slate-200 font-bold text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md shrink-0">{language === 'en' ? 'Common' : 'কমন'}</span>;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-100 relative overflow-hidden" id="availability">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Building2 size={14} /> {t('availBadge')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {t('availHeading1')} <span className="text-emerald-700">{t('availHeading2')}</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base mt-3 font-medium">
            {t('availSubtitle')}
          </p>
          <div className="w-16 h-1 bg-emerald-700 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Legend Indicator Bar */}
        <div className="max-w-4xl mx-auto bg-white p-3.5 sm:p-4 rounded-xl shadow-sm border border-slate-200 mb-6 sm:mb-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs font-bold text-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-700 inline-block"></span>
            <span>{t('legendAvailable')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-500 inline-block"></span>
            <span>{t('legendBooked')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-600 inline-block"></span>
            <span>{t('legendReserved')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-800 inline-block"></span>
            <span>{t('legendFacility')}</span>
          </div>
        </div>

        {/* Floor Matrix Building */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-8 shadow-xl border border-slate-200">
          <div className="space-y-3 sm:space-y-4">
            {UNIT_AVAILABILITY_MATRIX.map((row, idx) => (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 gap-3"
              >
                <div className="sm:w-1/3">
                  <p className="font-black text-slate-900 text-xs sm:text-sm">
                    {language === 'en' ? (row.floorEn || row.floor) : row.floor}
                  </p>
                </div>
                <div className="sm:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {row.units.map((u, uIdx) => (
                    <button
                      key={uIdx}
                      disabled={u.status !== 'available'}
                      onClick={() => {
                        setSelectedUnit(u);
                        onOpenBooking(u.num);
                      }}
                      className={`p-2.5 sm:p-3 rounded-lg border text-left transition-all flex flex-col justify-between ${
                        u.status === 'available'
                          ? 'bg-emerald-50 border-emerald-300 hover:bg-emerald-700 hover:text-white group cursor-pointer shadow-sm'
                          : u.status === 'booked'
                            ? 'bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed opacity-80'
                            : u.status === 'reserved'
                              ? 'bg-amber-50 border-amber-300 text-amber-950 cursor-not-allowed'
                              : 'bg-slate-800 text-slate-200 border-slate-700 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full gap-1 mb-1">
                        <span className="font-black text-xs">{u.num}</span>
                        {getStatusBadge(u.status)}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold opacity-90">{u.size}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Footer */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 text-center sm:text-left">
              <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
              <span>{t('clickUnitInstruction')}</span>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-6 py-3 rounded-xl text-xs shadow-md flex items-center justify-center gap-2"
            >
              {t('directContact')} <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
