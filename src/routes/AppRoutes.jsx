import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import FloorPlansPage from '../pages/FloorPlansPage';
import BenefitsPage from '../pages/BenefitsPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes({ onOpenBooking, onOpenBrochure }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage onOpenBooking={onOpenBooking} onOpenBrochure={onOpenBrochure} />} />
      <Route path="/projects" element={<ProjectsPage onOpenBooking={onOpenBooking} />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage onOpenBooking={onOpenBooking} onOpenBrochure={onOpenBrochure} />} />
      <Route path="/floor-plans" element={<FloorPlansPage onOpenBooking={onOpenBooking} onOpenBrochure={onOpenBrochure} />} />
      <Route path="/benefits" element={<BenefitsPage onOpenBooking={onOpenBooking} />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
