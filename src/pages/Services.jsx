import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Smile, Coffee, Activity, Beaker, Heart, Scissors, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetailsCard = ({ icon: Icon, title, description, benefits, delay = 0, id = "" }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 scroll-mt-32"
    >
      <div className="w-16 h-16 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
        <Icon size={32} />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-6 flex-grow">{description}</p>
      
      <div className="mb-8">
        <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">Benefits</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-secondary-500 mt-0.5 shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link to="/book-appointment" className="text-primary-600 font-semibold hover:text-primary-700 mt-auto inline-flex items-center group">
        Book Consultation
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </Link>
    </motion.div>
  );
};

// CheckCircle icon component for internal use
const CheckCircle = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const Services = () => {
  const allServices = [
    {
      id: "general-checkups",
      icon: Smile,
      title: "General Dental Checkups",
      description: "Comprehensive oral examinations including digital X-rays, oral cancer screenings, and personalized treatment planning.",
      benefits: ["Early detection of issues", "Custom treatment plans", "Preventative focus"]
    },
    {
      id: "teeth-cleaning",
      icon: Sparkles,
      title: "Teeth Cleaning",
      description: "Professional prophylaxis to remove harmful plaque, tartar, and stains that normal brushing misses.",
      benefits: ["Fresher breath", "Reduced cavity risk", "Gum disease prevention"]
    },
    {
      id: "teeth-whitening",
      icon: Beaker,
      title: "Teeth Whitening",
      description: "Safe, effective professional whitening treatments to dramatically brighten your smile in a single visit.",
      benefits: ["Immediate results", "Safe for enamel", "Long-lasting brightness"]
    },
    {
      id: "tooth-extraction",
      icon: Scissors,
      title: "Tooth Extraction",
      description: "Gentle, pain-free extractions including wisdom teeth removal, performed with advanced anesthesia techniques.",
      benefits: ["Pain relief", "Prevents crowding", "Quick recovery protocols"]
    },
    {
      id: "root-canal",
      icon: Activity,
      title: "Root Canal Treatment",
      description: "Endodontic therapy to save severely infected or damaged teeth, relieving pain and restoring function.",
      benefits: ["Saves natural tooth", "Eliminates pain/infection", "High success rate"]
    },
    {
      id: "orthodontics",
      icon: Heart,
      title: "Braces / Orthodontics",
      description: "Traditional braces and clear aligner systems (like Invisalign) to straighten teeth and correct bite issues.",
      benefits: ["Improved aesthetics", "Easier cleaning", "Better bite function"]
    },
    {
      id: "dental-implants",
      icon: Coffee,
      title: "Dental Implants",
      description: "The gold standard for tooth replacement. Permanent titanium posts topped with natural-looking crowns.",
      benefits: ["Looks & feels natural", "Permanent solution", "Prevents bone loss"]
    },
    {
      id: "pediatric-dentistry",
      icon: ShieldCheck,
      title: "Pediatric Dentistry",
      description: "Specialized, gentle care designed specifically for children, from infants to teenagers.",
      benefits: ["Anxiety-free approach", "Early intervention", "Fun atmosphere"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* Services Header */}
      <section className="bg-primary-600 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[20px] border-white"></div>
          <div className="absolute top-1/2 right-10 w-48 h-48 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            We provide a comprehensive range of dental treatments tailored to meet the unique needs of every patient, using the latest technology in a comfortable setting.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allServices.map((service, index) => (
              <ServiceDetailsCard 
                key={index}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100 line-pattern-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Not sure what treatment you need?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Schedule a comprehensive consultation with our expert team. We'll evaluate your oral health and create a personalized treatment plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-appointment" className="btn-primary text-lg px-8 py-4 shadow-lg shadow-primary-500/20">
              <Calendar size={20} className="mr-2" />
              Book Appointment
            </Link>
            <a href="tel:+1234567890" className="btn-secondary text-lg px-8 py-4">
              <Phone size={20} className="mr-2" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
