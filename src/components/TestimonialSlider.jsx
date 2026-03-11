import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mutale Mwape",
    role: "Regular Patient",
    content: "The best dental experience I've ever had in Lusaka! The staff is incredibly friendly, and Dr. Shepherd made sure I was comfortable throughout my entire procedure. Highly recommend to anyone in Chelston.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Chanda Kapiri",
    role: "Orthodontic Patient",
    content: "Getting my braces done here was such a smooth process. They explained everything clearly and the results are already showing. The clinic is modern, clean, and right here in our neighborhood.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Kondwani Banda",
    role: "Family Care Patient",
    content: "Finding a dentist who is good with kids is tough, but Family Care Dental is wonderful. My children actually look forward to their checkups! Very professional and caring team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden relative py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-100 flex flex-col items-center text-center relative"
          >
            <Quote className="absolute top-8 left-8 text-primary-100 w-16 h-16 transform -rotate-12" />
            
            <div className="flex mb-6 z-10">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-slate-700 font-medium mb-8 leading-relaxed italic z-10 relative">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div className="flex items-center gap-4 z-10">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary-100"
              />
              <div className="text-left">
                <h4 className="font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button 
          onClick={prevTestimonial}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary-500 w-8' 
                  : 'bg-slate-300 hover:bg-primary-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={nextTestimonial}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
