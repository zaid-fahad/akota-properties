import React from 'react';
import SEOHead from '../components/blocks/SEOHead';
import Hero from '../components/blocks/Hero';
import ShareComparison from '../components/blocks/ShareComparison';
import CostCalculator from '../components/blocks/CostCalculator';
import AmenitiesGrid from '../components/blocks/AmenitiesGrid';
import FloorPlanViewer from '../components/blocks/FloorPlanViewer';
import UnitAvailability from '../components/blocks/UnitAvailability';
import VirtualGallery from '../components/blocks/VirtualGallery';
import TestimonialsFAQ from '../components/blocks/TestimonialsFAQ';

export default function HomePage({ onOpenBooking, onOpenBrochure }) {
  return (
    <>
      <SEOHead 
        title="একতা প্রপার্টিজ | উত্তরায় ডিয়াবাড়িতে ল্যান্ড শেয়ারিং সাশ্রয়ী ফ্ল্যাট প্রকল্প"
        description="ল্যান্ড-শেয়ারিং পদ্ধতিতে ডেভেলপার প্রাইসের চেয়ে ৪০% কম খরচে উত্তরা ডিয়াবাড়িতে মেট্রোরেল ১নং স্টেশনের কাছে গড়ে তুলুন আপনার স্থায়ী ঠিকানা।"
        canonicalUrl="https://akotaproperties.com/"
      />

      <main>
        <Hero onOpenBooking={onOpenBooking} onOpenBrochure={onOpenBrochure} />
        <ShareComparison onOpenBooking={onOpenBooking} />
        <CostCalculator onOpenBooking={onOpenBooking} />
        <AmenitiesGrid onOpenBooking={onOpenBooking} />
        <FloorPlanViewer onOpenBrochure={onOpenBrochure} onOpenBooking={onOpenBooking} />
        <UnitAvailability onOpenBooking={onOpenBooking} />
        <VirtualGallery />
        <TestimonialsFAQ onOpenBooking={onOpenBooking} />
      </main>
    </>
  );
}
