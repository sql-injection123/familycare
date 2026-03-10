import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Smile, Coffee, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import TestimonialSlider from '../components/TestimonialSlider';
import GallerySlideshow from '../components/GallerySlideshow';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      {/* Services Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Services</h2>
            <p className="text-lg text-slate-600">
              From routine cleanings to advanced procedures, we offer a full range of dental treatments designed to keep your smile healthy and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Smile} 
              title="General Dentistry" 
              description="Routine checkups, cleanings, and preventative care to maintain optimal oral health."
              delay={0}
            />
            <ServiceCard 
              icon={Sparkles} 
              title="Teeth Whitening" 
              description="Professional whitening treatments for a brighter, more confident smile."
              delay={0.1}
            />
            <ServiceCard 
              icon={ShieldCheck} 
              title="Orthodontics" 
              description="Traditional braces and clear aligners to straighten teeth and fix misalignments."
              delay={0.2}
            />
            <ServiceCard 
              icon={Coffee} 
              title="Dental Implants" 
              description="Permanent, natural-looking tooth replacements to restore function and aesthetics."
              delay={0.3}
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img 
                  src="/assets/photos/547497702_1118378750424428_6616104366162710653_n.jpg" 
                  alt="Dentist with patient" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-100 rounded-full mix-blend-multiply opacity-50 blur-2xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary-100 rounded-full mix-blend-multiply opacity-50 blur-2xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary-600 font-bold tracking-wider uppercase text-sm mb-4 block">About Our Clinic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Changing the Way You Experience Dentistry</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Family Care Dental Surgery, we believe that a visit to the dentist shouldn't be stressful. That's why we've created a soothing environment combined with state-of-the-art technology to provide pain-free, exceptional care.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Over 15 years of dental excellence',
                  'State-of-the-art modern equipment',
                  'Comfortable, anxiety-free environment',
                  'Affordable care for the whole family'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Dentists */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Experts</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Dental Team</h2>
            <p className="text-lg text-slate-600">
              Our highly qualified and experienced dental professionals are dedicated to your oral health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DoctorCard 
              name="Dr. Shepherd Mweemba"
              specialty="Senior Dentist"
              experience="15"
              image="/assets/photos/438174651_1119426715774929_5254569140451795555_n.jpg"
              delay={0}
            />
            <DoctorCard 
              name="Dr. Michael Chen"
              specialty="Cosmetic Dentistry"
              experience="8"
              image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              delay={0.1}
            />
            <DoctorCard 
              name="Dr. Emily Rodriguez"
              specialty="Pediatric Dentistry"
              experience="10"
              image="https://images.unsplash.com/photo-1594824436998-d15f013d2a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600 -z-20"></div>
        {/* Decorative background shape */}
        <svg className="absolute top-0 left-0 w-full h-full text-primary-700/50 -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor" />
          <path d="M0,50 Q50,0 100,50 Q50,100 0,50" fill="white" opacity="0.1" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Patients Say</h2>
            <p className="text-lg text-primary-100">
              Don't just take our word for it. Read honest reviews from our valued patients.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySlideshow />

      {/* CTA / Location Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 shadow-soft">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to perfect your smile?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Book your appointment today and take the first step towards a healthier, brighter smile. New patients welcome!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-primary px-8">
                  Book Appointment Now
                </Link>
                <div className="flex items-center gap-3 text-slate-700 font-medium px-4">
                  <Phone className="text-primary-600" size={20} />
                  <span>+260 9771 71 47 54</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-sm text-slate-500">Plot # 1724 Ngwerere Road, Chelston, Lusaka</p>
                </div>
              </div>
              
              <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden relative group cursor-pointer">
                {/* Placeholder for actual map */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  Map Preview
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              
              <Link to="/contact" className="block text-center text-sm text-primary-600 font-medium mt-4 hover:text-primary-700 transition-colors">
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
