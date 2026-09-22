/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SignatureMenu } from './components/SignatureMenu';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CAFE_INFO } from './data/cafeData';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile quick action bar only after scrolling past hero section
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1F1E1B] font-sans antialiased selection:bg-[#D4A373] selection:text-[#181614]">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <SignatureMenu />
        <ExperienceSection />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick-Action Bar for Mobile Screens */}
      {showStickyBar && (
        <div
          id="mobile-sticky-actions"
          className="lg:hidden fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] left-4 right-4 z-40 bg-[#1A1815]/95 backdrop-blur-md border border-[#38322B] p-2 rounded-xl shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <a
            id="sticky-mobile-call-btn"
            href={CAFE_INFO.phoneTel}
            className="flex-1 min-h-[44px] flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#2B2723] hover:bg-[#3B3530] active:scale-[0.98] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Call Cafe</span>
          </a>

          <a
            id="sticky-mobile-directions-btn"
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[44px] flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#D4A373] hover:bg-[#E0B589] active:scale-[0.98] text-[#181614] text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Directions</span>
          </a>
        </div>
      )}
    </div>
  );
}

