import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, CheckCircle } from 'lucide-react';
import DoctorCard from '../components/DoctorCard';

const About = () => {
  return (
    <div className="bg-white pt-20">
      
      {/* Hero Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Clinic interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Family Care Dental Surgery</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Committed to providing exceptional dental care for the whole family in a modern, comfortable, and compassionate environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story & Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2010, Family Care Dental Surgery was established with a simple yet powerful mission: to make high-quality dentistry accessible, comfortable, and stress-free for families in our community.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand that many people experience anxiety when visiting the dentist. That's why we have carefully designed every aspect of our practice—from our welcoming reception area to our gentle treatment techniques—to ensure your comfort and peace of mind.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                  <h3 className="text-4xl font-bold text-primary-600 mb-2">15k+</h3>
                  <p className="text-slate-700 font-medium">Happy Patients</p>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100">
                  <h3 className="text-4xl font-bold text-secondary-600 mb-2">15+</h3>
                  <p className="text-slate-700 font-medium">Years Experience</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Dental equipment" 
                className="w-full h-64 object-cover rounded-2xl shadow-md mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Happy patient" 
                className="w-full h-64 object-cover rounded-2xl shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-slate-600">
              We stand out by combining clinical excellence with a patient-first approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Professionals",
                desc: "Our team consists of highly trained and continuously educated specialists."
              },
              {
                icon: ShieldCheck,
                title: "Modern Technology",
                desc: "We utilize 3D imaging, laser dentistry, and the latest tools for precise care."
              },
              {
                icon: Users,
                title: "Friendly Environment",
                desc: "A warm, welcoming atmosphere designed to keep you relaxed and comfortable."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Dental Team</h2>
            <p className="text-lg text-slate-600">
              Passionate professionals dedicated to bringing health and beauty to your smile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DoctorCard 
              name="Dr. Sarah Jenkins"
              specialty="Lead Dentist"
              experience="12"
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
            <DoctorCard 
              name="Dr. James Wilson"
              specialty="Orthodontist"
              experience="15"
              image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Clinic Gallery</h2>
            <p className="text-lg text-slate-600">Take a look inside our modern, comfortable facilities.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinic reception" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Treatment room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
              <img src="https://images.unsplash.com/photo-1600170014792-7102e86bb5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dental tools" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
              <img src="https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Smiling patient" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Consultation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
