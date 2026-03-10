import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50 rounded-bl-[100px] -z-10 transform translate-x-1/4"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
              <ShieldCheck size={18} />
              <span>Caring for your smile</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Quality Dental Care <br/>
              <span className="text-primary-600 relative">
                for the Whole Family
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary-300 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00034 6.88334C68.9507 -1.21651 136.877 -1.82285 203.951 6.88334" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Experience modern, pain-free dentistry with our expert team. We are dedicated to providing comprehensive care in a welcoming and comfortable environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/book-appointment" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-lg shadow-primary-500/30">
                <Calendar size={20} className="mr-2" />
                Book Appointment
              </Link>
              <a href="tel:+1234567890" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                <PhoneCall size={20} className="mr-2" />
                Call Now
              </a>
            </div>

            {/* Quick Stats/Features */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Expert Team</h4>
                  <p className="text-sm text-slate-500">Board certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center text-secondary-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Flexible Hours</h4>
                  <p className="text-sm text-slate-500">Weekend available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image/Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl z-10">
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Element 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-12 -left-8 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Rated</p>
                <p className="text-sm font-bold text-slate-900">5.0 / 5.0 Stars</p>
              </div>
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-16 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Next Available</p>
                <p className="text-sm font-bold text-slate-900">Today at 2:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
