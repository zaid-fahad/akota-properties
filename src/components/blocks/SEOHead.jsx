import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PROJECT_INFO } from '../../data/projectData';

export default function SEOHead({
  title = "একতা প্রপার্টিজ | উত্তরায় ডিয়াবাড়িতে নিজস্ব ফ্ল্যাট সাধ্যের মধ্যেই",
  description = "উত্তরা ১৫নং সেক্টর ডিয়াবাড়িতে মেট্রোরেল ১নং স্টেশনের কাছে ল্যান্ড-শেয়ারিং পদ্ধতিতে ডেভেলপার খরচের চেয়ে ৪০% কম মূল্যে ফ্ল্যাট নির্মাণ প্রজেক্ট। সাফ-কাবলা রেজিস্ট্রি নিশ্চয়তা।",
  keywords = "একতা প্রপার্টিজ, Akota Properties, উত্তরা দিয়াবাড়ি ফ্ল্যাট, ল্যান্ড শেয়ারিং উত্তরা, মেট্রোরেল স্টেশনের কাছে ফ্ল্যাট, Uttara Diabari Flat Sale, Land Sharing Uttara Sector 15, Cheap Apartment Uttara",
  canonicalUrl = "https://akotaproperties.com",
  ogImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  pageType = "website"
}) {
  const fullTitle = `${title} | ${PROJECT_INFO.nameEn}`;

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": PROJECT_INFO.nameEn,
    "alternateName": PROJECT_INFO.name,
    "description": description,
    "url": canonicalUrl,
    "telephone": PROJECT_INFO.phonePrimary,
    "email": PROJECT_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "উত্তরা ১৫নং সেক্টর, দিয়াবাড়ি",
      "addressLocality": "উত্তরা",
      "addressRegion": "ঢাকা",
      "postalCode": "1230",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.8762,
      "longitude": 90.3798
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://facebook.com/akotaproperties",
      "https://linkedin.com/company/akotaproperties"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Akota Properties Ltd." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={PROJECT_INFO.nameEn} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSchema)}
      </script>
    </Helmet>
  );
}
