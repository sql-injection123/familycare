import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Regular Patient",
    content: "The best dental experience I've ever had! The staff is incredibly friendly, and Dr. Smith made sure I was comfortable throughout my entire procedure. Highly recommend to anyone with dental anxiety.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Orthodontic Patient",
    content: "Getting braces here was a breeze. They explained every step of the process clearly and the results are amazing. The clinic is modern, clean, and uses the latest technology.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mother of Two",
    content: "Finding a good pediatric dentist is tough, but Family Care Dental is wonderful with kids. They have a gentle approach that makes my children actually look forward to their checkups!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
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
