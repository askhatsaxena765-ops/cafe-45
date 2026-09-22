import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, IndianRupee } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const LocationSection: React.FC = () => {
  return (
    <section id="visit" className="py-24 lg:py-32 bg-[#FAF7F2] text-[#1F1E1B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-[#8C6D45]" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#8C6D45] font-semibold">
              Location &amp; Hours
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1F1E1B] leading-[1.15] mb-4">
            Come Visit Us
          </h2>

          <p className="text-base sm:text-lg text-[#5E564D] font-light leading-relaxed">
            Conveniently situated right near the Choupla Over Bridge on City Station Road, Bareilly.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 border border-[#E3D9CC] shadow-sm flex flex-col justify-between">
            <div className="space-y-8">
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#EFE8DC] text-[#916E45] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8174] mb-1">
                    Exact Address
                  </h4>
                  <p className="font-serif text-base sm:text-lg text-[#1F1E1B] font-medium leading-snug">
                    {CAFE_INFO.fullAddress}
                  </p>
                  <p className="text-xs text-[#7A6F62] mt-1">
                    Near Choupla Over Bridge · City Station Road
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#EFE8DC] text-[#916E45] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8174] mb-1">
                    Phone &amp; Inquiries
                  </h4>
                  <a
                    id="location-phone-link"
                    href={CAFE_INFO.phoneTel}
                    className="font-serif text-xl sm:text-2xl font-semibold text-[#1F1E1B] hover:text-[#916E45] transition-colors block"
                  >
                    {CAFE_INFO.phone}
                  </a>
                  <p className="text-xs text-[#7A6F62] mt-0.5">
                    Tap to call directly from mobile
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#EFE8DC] text-[#916E45] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8174] mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm font-medium text-[#1F1E1B]">
                    Monday – Sunday: 11:00 AM – 11:00 PM
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#2E7D32] font-medium mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#388E3C]" />
                    Open for Dine-in &amp; Takeaway
                  </span>
                </div>
              </div>

              {/* Price Range */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#EFE8DC] text-[#916E45] shrink-0 mt-0.5">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8174] mb-1">
                    Typical Cost
                  </h4>
                  <p className="text-sm font-medium text-[#1F1E1B]">
                    {CAFE_INFO.typicalPrice}
                  </p>
                  <p className="text-xs text-[#7A6F62] mt-0.5">
                    Casual dining &amp; quick bites
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons as requested */}
            <div className="pt-8 mt-8 border-t border-[#EAE1D3] flex flex-col sm:flex-row gap-3">
              <a
                id="location-get-directions-btn"
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#2B2723] hover:bg-[#403A34] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-colors text-center shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#D4A373]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D4A373]" />
              </a>

              <a
                id="location-call-cafe-btn"
                href={CAFE_INFO.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#B0A393] hover:border-[#916E45] text-[#2B2723] hover:text-[#916E45] bg-[#FAF8F5] hover:bg-[#F2ECE2] text-xs font-semibold uppercase tracking-wider transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#916E45]" />
                <span>Call Cafe</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-[#EBE5DC] rounded-2xl overflow-hidden border border-[#DDD3C4] shadow-sm flex flex-col min-h-[380px] sm:min-h-[460px]">
            <div className="bg-[#FAF7F2] px-6 py-3 border-b border-[#DDD3C4] flex items-center justify-between text-xs text-[#6B6155]">
              <span className="font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#916E45]" />
                Choupla Over Bridge, Bareilly, Uttar Pradesh 243003
              </span>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#916E45] hover:underline font-medium flex items-center gap-1"
              >
                Open Full View
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full relative">
              <iframe
                title="Google Maps Location of The Cafe 45 Bareilly"
                src="https://maps.google.com/maps?q=9C35%2B792%2C+City+Station+Road%2C+Choupla+Over+Bridge%2C+Bareilly%2C+Uttar+Pradesh+243003&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
