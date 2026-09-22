import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuElem = document.querySelector('#menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 pt-32 overflow-hidden bg-[#141210]"
    >
      {/* Editorial Atmospheric Background */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=85"
          alt="Atmospheric warm café seating at The Cafe 45 Bareilly"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Subtle cinematic gradient: protects text while preserving authentic photographic texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/65 to-[#141210]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141210]/80 via-transparent to-transparent hidden md:block" />
      </div>

      {/* Content Container with Editorial Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          {/* Subdued Editorial Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#D4A373]/80" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#D8CEBF] font-medium">
              Bareilly, Uttar Pradesh
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF8F5] leading-[1.1] mb-6">
            Good Food. <br className="hidden sm:inline" />
            <span className="italic text-[#E8DCCF] font-light">Good Mood.</span>
          </h1>

          {/* Natural, honest café narrative */}
          <p className="text-base sm:text-lg md:text-xl text-[#CBC1B3] font-light leading-relaxed mb-10 max-w-xl">
            A cozy neighborhood table near Choupla Over Bridge on City Station Road. Freshly brewed coffee, hot pizzas, crispy burgers, and relaxed conversations.
          </p>

          {/* Practical, understated CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              id="hero-explore-menu-btn"
              href="#menu"
              onClick={handleScrollToMenu}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#FAF8F5] hover:bg-[#EBE4D8] text-[#161412] font-semibold text-xs uppercase tracking-wider transition-colors text-center shadow-sm"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#161412]" />
            </a>

            <a
              id="hero-get-directions-btn"
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-[#63594D] hover:border-[#FAF8F5] text-[#FAF8F5] hover:bg-[#FAF8F5]/10 text-xs font-semibold uppercase tracking-wider transition-colors backdrop-blur-sm text-center"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Bottom Utility Metadata Bar */}
        <div className="mt-16 pt-6 border-t border-[#38322B] flex flex-wrap items-center justify-between gap-y-3 gap-x-8 text-xs text-[#A89E91] font-light">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#528C53]" />
            <span>Open Daily: 11:00 AM – 11:00 PM</span>
          </div>

          <div>
            <span>City Station Road, Choupla Over Bridge, Bareilly</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Dine-In &amp; Takeaway</span>
            <span className="text-[#595045]">·</span>
            <span>4.0 ★ (261 Google Reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

