import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181614]/95 backdrop-blur-md py-3 shadow-md border-b border-[#332E29]'
          : 'bg-gradient-to-b from-[#121110]/80 via-[#121110]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex flex-col tracking-wider focus:outline-none"
          id="navbar-brand-link"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#FAF8F5] transition-colors group-hover:text-[#D4A373]">
            THE CAFE 45
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C4B9A8] font-medium -mt-0.5">
            Bareilly · Café &amp; Dining
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs uppercase tracking-[0.16em] text-[#E8E2D8] hover:text-[#D4A373] transition-colors py-1 relative font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4A373] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            id="navbar-directions-btn"
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#181614] bg-[#D4A373] hover:bg-[#E0B589] rounded transition-all duration-200 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#FAF8F5] hover:text-[#D4A373] focus:outline-none transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-panel"
          className="lg:hidden bg-[#181614] border-b border-[#332E29] px-6 py-6 transition-all duration-200"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wider text-[#E8E2D8] hover:text-[#D4A373] py-1 border-b border-[#26221E]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#332E29] flex flex-col gap-3">
            <a
              id="mobile-directions-cta"
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#181614] bg-[#D4A373] hover:bg-[#E0B589] rounded text-center transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              id="mobile-call-cta"
              href={CAFE_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] border border-[#524A42] hover:bg-[#2B2723] rounded text-center transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4A373]" />
              <span>Call: {CAFE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
