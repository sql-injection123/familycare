import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const DoctorCard = ({ image, name, specialty, experience, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 card-hover group"
    >
      <div className="aspect-w-3 aspect-h-4 relative overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Social Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{specialty}</p>
        <div className="inline-block bg-slate-50 px-3 py-1 rounded-full text-sm text-slate-600 font-medium border border-slate-100">
          {experience} Years Experience
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
