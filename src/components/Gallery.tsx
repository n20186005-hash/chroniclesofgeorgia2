'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

// Generate 15 photos
const photos = Array.from({ length: 15 }, (_, i) => ({
  src: `/gallery/images (${i + 1}).jpg`,
  key: i,
}));

export default function Gallery() {
  const t = useTranslations('gallery');
  const captions = t.raw('photos') as Array<{ caption: string }>;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentPhotos = photos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="gallery" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        
        {/* Updated description */}
        <p className="mb-8 text-base" style={{ color: 'var(--text-secondary)' }}>
          照片集 说明來自Google Maps，最近更新於2026年。如需查看所有图片，請點擊箭头跳转連結到{' '}
          <a
            href="https://maps.app.goo.gl/NCBMsSTGxfZUN5Rk9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Google Maps
          </a>
        </p>

        <div className="gallery-grid">
          {currentPhotos.map((photo, index) => {
            const globalIndex = currentPage * itemsPerPage + index;
            return (
              <div
                key={photo.key}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                style={{ aspectRatio: index === 0 ? '16/10' : '4/3' }}
                onClick={() => setSelectedImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={captions[globalIndex]?.caption || `Image ${globalIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {captions[globalIndex]?.caption && (
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {captions[globalIndex].caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevPage}
            className="p-2 rounded-full hover:bg-black/10 transition-colors"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Previous page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <span style={{ color: 'var(--text-secondary)' }}>
            {currentPage + 1} / {totalPages}
          </span>
          
          <button
            onClick={nextPage}
            className="p-2 rounded-full hover:bg-black/10 transition-colors"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Next page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          {/* Link arrow to all images */}
          <a
            href="https://maps.app.goo.gl/NCBMsSTGxfZUN5Rk9"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 ml-4 rounded-full hover:bg-black/10 transition-colors flex items-center gap-2"
            style={{ color: 'var(--text-primary)' }}
            title="View all on Google Maps"
          >
            <span className="text-sm font-medium">查看所有</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
