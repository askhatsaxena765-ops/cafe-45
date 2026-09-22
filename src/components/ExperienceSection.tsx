import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-28 lg:py-36 bg-[#161412] text-[#FAF8F5] overflow-hidden"
    >
      {/* Large Atmospheric Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85"
          alt="Atmospheric evening gathering at The Cafe 45 Bareilly"
          className="w-full h-full object-cover object-center opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-[#161412]/60 to-[#161412]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          {/* Subtle Accent Line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#D4A373]/80" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4A373] font-medium">
              The Atmosphere
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] text-[#FAF8F5] mb-6">
            An unhurried table for quiet mornings and lively evenings
          </h2>

          <p className="text-base sm:text-lg text-[#C7BDB1] font-light leading-relaxed mb-10 max-w-2xl">
            Soft lighting, comfortable seating, and the aroma of fresh coffee and oven-baked dough. A welcoming neighborhood space on City Station Road built for relaxed dining with friends and family.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs tracking-wider uppercase text-[#D8CEBF] font-medium">
            <span>Dine-In</span>
            <span className="text-[#595045]">/</span>
            <span>Takeaway</span>
            <span className="text-[#595045]">/</span>
            <span>Family &amp; Student Friendly</span>
            <span className="text-[#595045]">/</span>
            <span>Bareilly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

