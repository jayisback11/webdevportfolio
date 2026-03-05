import React, { useState } from 'react';
import { Phone, ShieldCheck, Banknote, Award, Hammer, Wrench, CloudLightning, MapPin, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Reusable Components ---

const NavItem = ({ href, children }) => (
  <a href={href} className="text-navy font-semibold hover:text-orange-500 transition-colors">
    {children}
  </a>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-orange-500 transition-all cursor-default"
  >
    <Icon className="w-12 h-12 text-slate-800 mb-6" />
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

// --- Main Page Component ---

const RoofingWebsite = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Roof Repair' });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-1 rounded">
              <Hammer className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Capital City <span className="text-orange-500">Roofing</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#why-us">Why Us</NavItem>
            <NavItem href="#contact">Estimate</NavItem>
            <a href="tel:2255550123" className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-orange-500 transition-all">
              <Phone size={18} /> (225) 555-0123
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
              Trusted Roofing Services in <span className="text-orange-500">Baton Rouge</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-lg">
              Residential and commercial roofing experts specializing in replacements, leak repairs, and hurricane restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-extrabold hover:bg-orange-600 shadow-xl shadow-orange-500/20 transition-all">
                Get Free Estimate
              </button>
              <button className="border-2 border-slate-700 px-10 py-4 rounded-lg text-lg font-extrabold hover:bg-white hover:text-slate-900 transition-all">
                Recent Projects
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-8 opacity-70">
              <div className="flex items-center gap-2"><ShieldCheck className="text-orange-500" /> Licensed & Insured</div>
              <div className="flex items-center gap-2"><Award className="text-orange-500" /> 10+ Years Exp.</div>
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-orange-500/20 rounded-2xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1628533481163-97af559e7283?q=80&w=1000" 
              alt="Roofing Project" 
              className="relative rounded-2xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">What We Do</h2>
            <p className="text-slate-600 mt-4 text-lg">We provide full-service roofing solutions tailored to the Louisiana climate.</p>
          </div>
          <div className="h-1 flex-grow bg-slate-200 mb-4 ml-8 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Wrench} 
            title="Roof Repair" 
            description="Leaky roofs and missing shingles handled quickly before they cause interior damage." 
          />
          <ServiceCard 
            icon={Hammer} 
            title="Roof Replacement" 
            description="Complete tear-offs and new installs using premium architectural shingles or metal." 
          />
          <ServiceCard 
            icon={CloudLightning} 
            title="Storm Damage" 
            description="Expert inspections and claim assistance following heavy Louisiana storms and winds." 
          />
        </div>
      </section>

      {/* CALL TO ACTION / FORM */}
      <section id="contact" className="py-20 bg-slate-100 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
          <div className="bg-slate-900 p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black mb-6">Need a Quote?</h2>
              <p className="text-slate-400 text-lg">Schedule your free 21-point roof inspection today. We serve Baton Rouge and surrounding parishes.</p>
            </div>
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 text-orange-500 font-bold">
                <MapPin /> <span>Baton Rouge, LA</span>
              </div>
              <div className="flex items-center gap-4 text-white font-bold text-2xl">
                <Phone /> <span>(225) 555-0123</span>
              </div>
            </div>
          </div>

          <form className="p-12 md:w-3/5 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
            <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
              <option>Roof Replacement</option>
              <option>Minor Repair</option>
              <option>Storm Damage Inspection</option>
              <option>Commercial Roofing</option>
            </select>
            <textarea placeholder="Tell us about your project..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl h-32 focus:ring-2 focus:ring-orange-500 outline-none"></textarea>
            <button className="w-full bg-orange-500 text-white font-black py-5 rounded-xl text-xl hover:scale-[1.02] transition-transform shadow-lg shadow-orange-500/30 uppercase">
              Send My Free Quote
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-6 text-center border-t border-slate-200">
        <p className="text-slate-500">&copy; 2026 Capital City Roofing. Professional Contractor Aesthetic.</p>
        <p className="mt-2 font-bold text-slate-900 uppercase tracking-widest text-xs">
          Website concept designed by <span className="text-orange-500">Jay Crisostomo</span>
        </p>
      </footer>
    </div>
  );
};

export default RoofingWebsite;