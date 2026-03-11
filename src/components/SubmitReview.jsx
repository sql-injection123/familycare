// src/components/SubmitReview.jsx
import React, { useState } from 'react';

const SubmitReview = ({ onNewReview }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, rating }),
      });

      if (res.ok) {
        const newReview = await res.json();
        onNewReview && onNewReview(newReview);
        setName('');
        setMessage('');
        setRating(5);
        alert('Thank you for your review!');
      } else {
        alert('Failed to submit review.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting review.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-3"
          />
          <textarea
            placeholder="Your Review"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-lg p-3"
            rows={4}
          />
          <input
            type="number"
            min={1}
            max={5}
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="border rounded-lg p-3 w-24"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
          >
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitReview;