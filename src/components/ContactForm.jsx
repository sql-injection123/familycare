import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to send message:", err);
      setError("Failed to send message. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return (
      <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600 mb-6">
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm flex items-center gap-3 mb-6">
          <AlertCircle size={18} />
          <p>{error}</p>
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
            placeholder="How can we help?"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 transition-colors resize-none"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          {!isSubmitting && <Send size={18} />}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
