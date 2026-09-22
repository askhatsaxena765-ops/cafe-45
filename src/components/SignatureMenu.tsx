import React from 'react';
import { SIGNATURE_MENU } from '../data/cafeData';

export const SignatureMenu: React.FC = () => {
  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#F3EDE2] text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-[#8C6D45]" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#8C6D45] font-semibold">
              Kitchen Selections
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1A17] leading-[1.15] mb-4">
            Known Favourites at The Cafe 45
          </h2>
          <p className="text-base sm:text-lg text-[#61584E] font-light leading-relaxed">
            Prepared to order for dine-in guests and takeaway in Bareilly.
          </p>
        </div>

        {/* Varied Editorial Layout for 5 Items */}
        {/* Top Feature: 2 Large Prominent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-10">
          {SIGNATURE_MENU.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#DDD3C4] shadow-sm flex flex-col group"
            >
              {/* Dominant Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E2D9CB]">
                <img
                  src={item.image}
                  alt={`${item.name} at The Cafe 45 Bareilly`}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Minimal Text Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-[#8C6D45] font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1A17] mb-3">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C544A] leading-relaxed font-light">
                    {item.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SIGNATURE_MENU.slice(2).map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#DDD3C4] shadow-sm flex flex-col group"
            >
              {/* Dominant Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E2D9CB]">
                <img
                  src={item.image}
                  alt={`${item.name} at The Cafe 45 Bareilly`}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-[#8C6D45] font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1A17] mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C544A] leading-relaxed font-light">
                    {item.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Note */}
        <div className="mt-16 pt-10 border-t border-[#DDD3C4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-sm text-[#665D52] font-light max-w-md">
            Full selection of pizzas, burgers, shakes, snacks, and seasonal specials available fresh daily at the counter.
          </p>
          <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-[#8C6D45] font-semibold">
            <span>Dine-In</span>
            <span className="text-[#C5B8A8]">·</span>
            <span>Takeaway</span>
            <span className="text-[#C5B8A8]">·</span>
            <span>Made Fresh to Order</span>
          </div>
        </div>
      </div>
    </section>
  );
};

