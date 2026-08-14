import React, { useState } from 'react';
import { Camera, Maximize, X, ArrowRight, Eye } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "একতা মেট্রো ভিউ ফ্রন্ট এলিভেশন",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    desc: "উত্তরা ১৫নং সেক্টরে ৬০ ফিট প্রশস্ত রোডের সংলগ্ন ১০ তলা মডার্ন বিল্ডিং"
  },
  {
    id: 2,
    title: "লাক্সারি ড্রয়িং ও লিভিং স্পেস",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    desc: "প্রশস্ত ও প্রাকৃতিক আলোবাতাস পূর্ণ মডার্ন ইন্টেরিয়র ডিজাইন"
  },
  {
    id: 3,
    title: "মাস্টার বেডরুম উইথ ব্যালকনি ভিউ",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
    desc: "কিং সাইজ মাস্টার বেডরুম এবং সুদৃশ্য খোলা বারান্দা"
  },
  {
    id: 4,
    title: "গ্রিন রুফ ও ছাদবাগান জোন",
    category: "rooftop",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    desc: "ছাদে মনোরম সবুজ বাগান, বসার স্থান এবং কমিউনিটি পার্টি স্পেস"
  },
  {
    id: 5,
    title: "মেট্রোরেল উত্তর স্টেশন proximity",
    category: "location",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200",
    desc: "মেট্রোরেল স্টেশন থেকে মাত্র ২ মিনিটে যাতায়াতের সুবিধা"
  },
  {
    id: 6,
    title: "মডার্ন গ্রানাইট কাউন্টার কিচেন",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
    desc: "হাই-কোয়ালিটি গ্রানাইট ও মডেল ক্যাবিনেট যুক্ত কিচেন স্পেস"
  }
];

export default function VirtualGallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-white relative" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Camera size={14} /> ভার্চুয়াল ফটো গ্যালারি
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            এক নজর দেখে নিন <span className="text-emerald-600">আমাদের প্রজেক্টের চিত্র</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-4 font-medium">
            উচ্চমানের কনস্ট্রাকশন ও আধুনিক আর্কিটেকচারের বাস্তব প্রতিচ্ছবি।
          </p>
          <div className="w-20 h-1.5 bg-emerald-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "সব ছবি", key: "all" },
            { label: "এক্সটেরিয়র (Exterior)", key: "exterior" },
            { label: "ইন্টেরিয়র (Interior)", key: "interior" },
            { label: "ছাদবাগান (Rooftop)", key: "rooftop" },
            { label: "লোকেশন & মেট্রো", key: "location" }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                filter === tab.key
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-900 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                <p className="text-emerald-400 font-extrabold text-xs uppercase tracking-wider mb-1">{item.category}</p>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="text-slate-300 text-xs mt-2 line-clamp-2">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-emerald-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={16} /> বড় করে দেখুন
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-slate-900 p-2.5 rounded-full z-10 transition-colors"
            >
              <X size={24} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[75vh] object-contain bg-black" />
            <div className="p-6 bg-slate-900 border-t border-slate-800 text-white">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">{selectedImage.category}</span>
              <h3 className="text-2xl font-black mt-1">{selectedImage.title}</h3>
              <p className="text-slate-300 text-sm mt-2 font-medium">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
