import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

const AppointmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form could also happen here
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft border border-slate-100 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Thank you, {formData.name}. Your appointment request for {formData.date} has been submitted securely. Our friendly team will call you shortly to confirm your booking.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '', phone: '', email: '', service: '', date: '', time: '', message: ''
            });
          }}
          className="btn-secondary w-full sm:w-auto"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
        <p className="text-slate-500 text-sm">Fill out the form below and we'll confirm your appointment.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-700 block">Full Name *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User size={18} />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700 block">Phone Number *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white transition-colors"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>
        </div>

        {/* Email Row */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 block">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Requirements Row */}
        <div className="space-y-1">
          <label htmlFor="service" className="text-sm font-medium text-slate-700 block">Service Needed *</label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white transition-colors"
          >
            <option value="" disabled>Select a service</option>
            <option value="General Checkup">General Checkup</option>
            <option value="Teeth Cleaning">Teeth Cleaning</option>
            <option value="Whitening">Teeth Whitening</option>
            <option value="Orthodontics">Braces / Orthodontics</option>
            <option value="Dental Implants">Dental Implants</option>
            <option value="Root Canal">Root Canal</option>
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label htmlFor="date" className="text-sm font-medium text-slate-700 block">Preferred Date *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Calendar size={18} />
              </div>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="time" className="text-sm font-medium text-slate-700 block">Preferred Time *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Clock size={18} />
              </div>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white transition-colors"
              >
                <option value="" disabled>Select time</option>
                <option value="Morning">Morning (8am - 12pm)</option>
                <option value="Afternoon">Afternoon (1pm - 5pm)</option>
                <option value="Evening">Evening (5pm - 7pm)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 block">Additional Notes (Optional)</label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
              <FileText size={18} />
            </div>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white transition-colors resize-none"
              placeholder="Any specific symptoms or concerns?"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="w-full btn-primary py-4 text-lg font-semibold shadow-lg shadow-primary-500/30">
          Book Appointment Now
        </button>
        
        <p className="text-xs text-center text-slate-500 mt-4">
          By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;
