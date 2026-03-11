import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Intro */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-500/20 p-2 rounded-lg text-primary-400">
                <HeartPulse size={24} />
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight block">Family Care</span>
                <span className="text-xs text-primary-400 font-medium tracking-widest uppercase block">Dental Surgery</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing exceptional, comprehensive dental care for patients of all ages in a modern and relaxing environment. Your smile is our top priority.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-primary-400 transition-colors">About Our Clinic</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary-400 transition-colors">Patient Reviews</Link></li>
              <li><Link to="/book-appointment" className="text-sm hover:text-primary-400 transition-colors">Book an Appointment</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="/services#general-checkups" className="text-sm hover:text-primary-400 transition-colors">General Dentistry</a></li>
              <li><a href="/services#teeth-whitening" className="text-sm hover:text-primary-400 transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="/services#orthodontics" className="text-sm hover:text-primary-400 transition-colors">Orthodontics & Braces</a></li>
              <li><a href="/services#dental-implants" className="text-sm hover:text-primary-400 transition-colors">Dental Implants</a></li>
              <li><a href="/services#pediatric-dentistry" className="text-sm hover:text-primary-400 transition-colors">Pediatric Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-1" size={18} />
                <span className="text-sm text-slate-400">Plot # 1724 Ngwerere Road,<br />Off Palm Drive, Chelston, Lusaka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={18} />
                <span className="text-sm text-slate-400">+260 9771 71 47 54</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={18} />
                <span className="text-sm text-slate-400">familycaredentalsurgery@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Family Care Dental Surgery. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
