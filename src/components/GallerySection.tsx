import React, { useState, useEffect } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/cafeData';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#F3EDE2] text-[#1F1E1B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#8C6D45]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#8C6D45] font-semibold">
                Visual Journal
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1F1E1B] leading-[1.15]">
              Food &amp; Atmosphere
            </h2>
          </div>
          <p className="text-base text-[#61574C] font-light max-w-md leading-relaxed">
            Moments from our kitchen counter, coffee bar, and dining tables in Bareilly.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              tabIndex={0}
              role="button"
              aria-label={`View larger photo of ${photo.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(photo);
                }
              }}
              onClick={() => setSelectedPhoto(photo)}
              className={`${photo.span} relative group overflow-hidden rounded-xl bg-[#EBE5DC] cursor-pointer shadow-sm min-h-[240px] md:min-h-[300px] focus:outline-none focus:ring-2 focus:ring-[#8C6D45]`}
            >
              <img
                src={photo.url}
                alt={`${photo.title} at The Cafe 45 Bareilly`}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1B]/80 via-[#1F1E1B]/20 to-transparent opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-[#FAF8F5]/20 backdrop-blur-md text-[#FAF8F5]">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#D4A373] block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#FAF8F5] font-medium">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Enlarged View Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#121110]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1C1A17] rounded-xl overflow-hidden shadow-2xl border border-[#3D372F]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 flex items-center justify-between bg-[#1C1A17] text-[#FAF8F5]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4A373] font-medium">
                  {selectedPhoto.category}
                </span>
                <h4 className="font-serif text-lg font-medium text-[#FAF8F5]">
                  {selectedPhoto.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-[#2E2923] hover:bg-[#403931] text-[#FAF8F5] transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
