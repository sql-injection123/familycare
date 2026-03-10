import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600">
            We're here to answer any questions you may have. Give us a call, send a message, or drop by our clinic.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Column */}
          <div className="space-y-8">
            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                <p className="text-sm text-slate-500 mb-3">Call us for immediate assistance.</p>
                <a href="tel:+2609771714754" className="text-primary-600 font-bold hover:underline mt-auto">
                  +260 9771 71 47 54
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-secondary-50 text-secondary-600 flex items-center justify-center mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-sm text-slate-500 mb-3">Chat with our reception team.</p>
                <a href="#" className="flex items-center gap-1 text-secondary-600 font-bold hover:underline mt-auto">
                  <span>Chat Now</span>
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-sm text-slate-500 mb-3">Drop us a line anytime.</p>
                <a href="mailto:familycaredentalsurgery@yahoo.com" className="text-primary-600 font-medium hover:underline mt-auto word-break break-all">
                  familycaredentalsurgery@yahoo.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Hours</h3>
                <ul className="text-sm text-slate-500 w-full mt-auto">
                  <li className="flex justify-between border-b border-slate-50 pb-1 mb-1"><span>Mon-Fri:</span> <span>8am - 5pm</span></li>
                  <li className="flex justify-between border-b border-slate-50 pb-1 mb-1"><span>Sat:</span> <span>Closed</span></li>
                  <li className="flex justify-between"><span>Sun:</span> <span>8am - 1pm</span></li>
                </ul>
              </div>

            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4 px-2 pt-2">
                <MapPin className="text-primary-600 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">Visit Our Clinic</h3>
                  <p className="text-sm text-slate-600">Plot # 1724 Ngwerere Road, Off Palm Drive, Chelston, Lusaka, Zambia</p>
                </div>
              </div>
              
              <div className="aspect-[16/9] w-full bg-slate-200 rounded-xl overflow-hidden relative">
                {/* Embedded Map Placeholder */}
                <iframe 
                  title="Clinic Location"
                  className="absolute inset-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680100000000!5m2!1sen!2s" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>

        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a href="#" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:scale-110 transition-all z-50 hover:-translate-y-1">
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Contact;
