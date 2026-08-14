import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/blocks/Navbar';
import Footer from './components/blocks/Footer';
import AppRoutes from './routes/AppRoutes';
import BookingModal from './components/blocks/BookingModal';
import BrochureModal from './components/blocks/BrochureModal';
import FloatingQuickContact from './components/blocks/FloatingQuickContact';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [prefilledUnit, setPrefilledUnit] = useState(null);

  const handleOpenBooking = (unitNum = null) => {
    setPrefilledUnit(unitNum);
    setBookingOpen(true);
  };

  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-200">
            {/* Header Navigation */}
            <Navbar onOpenBooking={() => handleOpenBooking()} />

            {/* Main Route Viewports */}
            <div className="flex-grow">
              <AppRoutes 
                onOpenBooking={handleOpenBooking} 
                onOpenBrochure={() => setBrochureOpen(true)} 
              />
            </div>

            {/* Global Footer */}
            <Footer onOpenBooking={() => handleOpenBooking()} />

            {/* Floating Actions */}
            <FloatingQuickContact onOpenBooking={() => handleOpenBooking()} />

            {/* Modals */}
            <BookingModal 
              isOpen={bookingOpen} 
              onClose={() => setBookingOpen(false)} 
              prefilledUnit={prefilledUnit}
            />
            <BrochureModal 
              isOpen={brochureOpen} 
              onClose={() => setBrochureOpen(false)} 
            />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}
