import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySlideshow = () => {
  const photos = [
    '/assets/photos/542752184_1109230364672600_7220618540929197148_n.jpg',
    '/assets/photos/542758483_1107762348152735_6341972006120656103_n.jpg',
    '/assets/photos/544906091_1110957494499887_116614962060669844_n.jpg',
    '/assets/photos/546539357_1118378737091096_8214183341256324701_n.jpg',
    '/assets/photos/547497702_1118378750424428_6616104366162710653_n.jpg',
    '/assets/photos/568122350_1147463520849284_4825203897297683304_n.jpg',
    '/assets/photos/590780918_1179826917612944_3268785044296802858_n.jpg',
    '/assets/photos/592211415_1179827347612901_2533355089150392605_n.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, photos.length]);

  const goTo = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setAutoPlay(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Clinic</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Photo Gallery</h2>
          <p className="text-lg text-slate-600">
            Take a glimpse of our modern clinic, state-of-the-art equipment, and welcoming environment.
          </p>
        </div>

        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Slideshow */}
          <div className="relative aspect-video w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={photos[currentIndex]}
                alt={`Clinic gallery ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="bg-slate-800 p-4 overflow-x-auto">
            <div className="flex gap-3 justify-center md:justify-start">
              {photos.map((photo, index) => (
                <motion.button
                  key={index}
                  onClick={() => goTo(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ring-2 transition-all duration-300 ${
                    currentIndex === index
                      ? 'ring-primary-500 ring-offset-2 ring-offset-slate-800'
                      : 'ring-slate-600 hover:ring-primary-300'
                  }`}
                >
                  <img src={photo} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlideshow;
