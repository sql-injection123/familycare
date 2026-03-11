// src/components/TestimonialSlider.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data || []);
      })
      .catch((err) => console.error('Failed to fetch reviews:', err));
  }, []);

  if (reviews.length === 0) {
    return (
      <p className="text-white text-center text-lg">
        No reviews yet. Be the first to leave a review!
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <p className="text-slate-700 mb-4">"{review.message}"</p>
          <h4 className="font-bold text-slate-900">{review.name}</h4>
          {review.rating && <span className="text-yellow-500">{"★".repeat(review.rating)}</span>}
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialSlider;