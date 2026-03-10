import React from 'react';
import { Shield, Clock, Phone, MapPin } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

const BookAppointment = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Schedule Your Visit</h1>
          <p className="text-lg text-slate-600">
            Take the first step towards a healthier smile. Fill out the form below, and our team will get back to you promptly to confirm your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-8">
            <AppointmentForm />
          </div>

          {/* Info Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Illustration Card */}
            <div className="bg-primary-600 rounded-2xl p-8 text-white text-center shadow-soft relative overflow-hidden">
               {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white opacity-10 rounded-full"></div>
              
              <div className="relative z-10">
                <Shield size={48} className="mx-auto mb-4 text-primary-200" />
                <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
                <p className="text-primary-100 text-sm leading-relaxed">
                  Your privacy is important to us. All information submitted is encrypted and kept strictly confidential according to HIPAA guidelines.
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Need Immediate Help?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Emergency Dental Care</h4>
                    <p className="text-sm text-slate-500 mb-2">Available 24/7 for severe pain or trauma.</p>
                    <a href="tel:+1234567890" className="text-red-500 font-bold hover:underline">
                      Call (555) 999-EMERG
                    </a>
                  </div>
                </div>

                <hr className="border-slate-100" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Working Hours</h4>
                    <ul className="text-sm text-slate-500 space-y-1 mt-2">
                      <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 7:00 PM</span></li>
                      <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
                      <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>

                <hr className="border-slate-100" />
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Location</h4>
                    <p className="text-sm text-slate-500 mt-1">123 Health Avenue, Medical District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
