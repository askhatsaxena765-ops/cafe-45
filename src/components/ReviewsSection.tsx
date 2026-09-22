import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS, CAFE_INFO } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#FAF7F2] text-[#1F1E1B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header with Simple Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#8C6D45]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#8C6D45] font-semibold">
                Guest Reflections
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1F1E1B] leading-[1.15]">
              Patron Notes
            </h2>
          </div>

          {/* Genuine Score Counter */}
          <div className="flex items-baseline gap-3 pb-1 border-b border-[#DDD3C4]">
            <span className="font-serif text-3xl font-medium text-[#1F1E1B]">
              {CAFE_INFO.googleRating}
            </span>
            <div className="flex text-[#C89B38]">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <Star className="w-4 h-4 fill-transparent text-[#C89B38]" />
            </div>
            <span className="text-xs text-[#786E63] font-light">
              from {CAFE_INFO.reviewCount} Google reviews
            </span>
          </div>
        </div>

        {/* 3 Real Patron Reviews with Clean Editorial Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F4EFE6] rounded-xl p-8 border border-[#E0D7C9] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C89B38] mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  {[...Array(5 - rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#D1C6B4]" />
                  ))}
                </div>

                <p className="font-serif italic text-lg sm:text-xl text-[#24211D] leading-relaxed mb-8">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3DACA] flex items-center justify-between text-xs">
                <span className="font-medium text-[#1F1E1B]">{rev.author}</span>
                <span className="text-[#857B6E] font-light">Verified Visitor</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More on Google */}
        <div className="mt-14 text-center">
          <a
            id="reviews-read-more-btn"
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6D45] hover:text-[#1F1E1B] transition-colors py-2 border-b border-[#8C6D45]/40 hover:border-[#1F1E1B]"
          >
            <span>Read all 261 reviews on Google</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
