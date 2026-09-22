import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const AboutSection: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuElem = document.querySelector('#menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAF7F2] text-[#1D1B18]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Photography Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Primary Visual */}
              <div className="overflow-hidden rounded-xl bg-[#EBE5DC] aspect-[4/5] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80"
                  alt="Cozy interior seating and ambient light at The Cafe 45 Bareilly"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Offset Detail Image - Asymmetric natural accent */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 aspect-square rounded-xl overflow-hidden border-4 border-[#FAF7F2] shadow-md bg-[#E4DDD2]">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh espresso and coffee cups at The Cafe 45"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 lg:pl-6 pt-4 lg:pt-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#A68052]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#8C6D45] font-semibold">
                About The Café
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1D1B18] leading-[1.15] mb-6">
              A relaxed local table in the heart of Bareilly
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5C554C] leading-relaxed font-light mb-8">
              <p>
                The Cafe 45 is located near the Choupla Over Bridge on City Station Road. We started with a simple thought: create a comfortable, welcoming neighborhood place where friends, students, and families can gather over good food without any rush.
              </p>
              <p>
                Our kitchen makes comforting café favorites fresh for each table—from thick cold coffees and hot pizzas to crispy honey chilli potatoes, burgers, and savory parcels.
              </p>
            </div>

            {/* Factual Information Strip */}
            <div className="pt-6 border-t border-[#E8E0D5] grid grid-cols-2 gap-6 mb-8 text-sm">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8A8073] block mb-1">
                  Location
                </span>
                <p className="font-medium text-[#1D1B18]">
                  City Station Road, Bareilly
                </p>
                <p className="text-xs text-[#70665B] mt-0.5">Near Choupla Over Bridge</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#8A8073] block mb-1">
                  Hours
                </span>
                <p className="font-medium text-[#1D1B18]">
                  11:00 AM – 11:00 PM
                </p>
                <p className="text-xs text-[#70665B] mt-0.5">Open every day of the week</p>
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="about-explore-dishes-btn"
                href="#menu"
                onClick={handleScrollToMenu}
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#1D1B18] hover:bg-[#38332E] transition-colors shadow-sm"
              >
                <span>Explore Dishes</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FAF8F5]" />
              </a>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#1D1B18] hover:text-[#8C6D45] border border-[#DDD3C6] hover:border-[#8C6D45] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#A68052]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

