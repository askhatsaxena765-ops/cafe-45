import React from 'react';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <footer className="bg-[#121110] text-[#D8CEBF] border-t border-[#292521] pt-16 pb-28 lg:pb-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#24201C]">
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl font-bold tracking-[0.2em] text-[#FAF8F5] mb-3">
              {CAFE_INFO.name.toUpperCase()}
            </h3>
            <p className="text-sm text-[#CDC3B5] font-light leading-relaxed max-w-sm mb-3">
              Coffee, food and good moments in Bareilly.
            </p>
            <p className="text-xs text-[#8A7F73] font-light">
              Near Choupla Over Bridge, City Station Road
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F8476] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs uppercase tracking-wider text-[#BDB2A3] hover:text-[#D4A373] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8F8476] mb-4">
              Contact &amp; Location
            </h4>
            <div className="space-y-3.5 text-xs text-[#BDB2A3] font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>{CAFE_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a
                  href={CAFE_INFO.phoneTel}
                  className="hover:text-[#FAF8F5] transition-colors font-medium"
                >
                  {CAFE_INFO.phone}
                </a>
              </div>
              <div className="pt-2">
                <span className="text-[11px] text-[#786E63] block">
                  Typical Spend: {CAFE_INFO.typicalPrice}
                </span>
                <span className="text-[11px] text-[#786E63] block">
                  Google Rating: {CAFE_INFO.googleRating} ★ ({CAFE_INFO.reviewCount} Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7165]">
          <p>© {new Date().getFullYear()} {CAFE_INFO.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#A3998C] hover:text-[#FAF8F5] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4A373]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
