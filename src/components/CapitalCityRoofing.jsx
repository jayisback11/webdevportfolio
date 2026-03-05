import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  ShieldCheck,
  Award,
  Hammer,
  Wrench,
  CloudLightning,
  ChevronRight,
  BadgeCheck,
  CheckCircle2,
  Star,
  MapPin,
  Clock,
  Droplets,
  AlertTriangle,
  Users,
  Building,
} from "lucide-react";

// IMPORT YOUR LOCAL IMAGES
import roofBefore from "../files/images/roofbefore.jpg";
import roofAfter from "../files/images/roofafter.jpg";

const CapitalCityRoofing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sliderPos, setSliderPos] = useState(50);

  const handleSlider = (e) => {
    setSliderPos(e.target.value);
  };

  const services = [
    {
      title: "Roof Repair",
      icon: Wrench,
      desc: "Fast response for leaks, missing shingles, and minor damage to prevent costly issues later.",
    },
    {
      title: "Roof Replacement",
      icon: Hammer,
      desc: "Complete tear-offs and new installs using premium GAF materials with lifetime warranties.",
    },
    {
      title: "Roof Inspection",
      icon: BadgeCheck,
      desc: "Detailed 21-point safety and integrity checks for homeowners and real estate transactions.",
    },
    {
      title: "Emergency Repair",
      icon: AlertTriangle,
      desc: "24/7 tarping and emergency services to protect your home during active leaks.",
    },
    {
      title: "Storm Damage",
      icon: CloudLightning,
      desc: "Expert insurance claim assistance and restoration following hail, wind, or hurricane damage.",
    },
    {
      title: "Gutter Install",
      icon: Droplets,
      desc: "Seamless gutter systems designed to divert water away from your foundation effectively.",
    },
  ];

  return (
    <div className="text-slate-900 font-sans selection:bg-orange-100 scroll-smooth bg-white">
      {/* 1. HEADER (White) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#FB8500] p-1.5 rounded shadow-lg">
              <Hammer className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-[#1B263B] uppercase">
              Capital City <span className="text-[#FB8500]">Roofing</span>
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6 font-bold text-xs uppercase tracking-widest text-[#415A77]">
            <a href="#services" className="hover:text-[#FB8500] transition">Services</a>
            <a href="#about" className="hover:text-[#FB8500] transition">About</a>
            <a href="#gallery" className="hover:text-[#FB8500] transition">Gallery</a>
            <a href="#areas" className="hover:text-[#FB8500] transition">Areas</a>
            <a href="#reviews" className="hover:text-[#FB8500] transition">Reviews</a>
            <a href="#contact" className="hover:text-[#FB8500] transition">Contact</a>
            <a
              href="tel:2255550123"
              className="bg-[#1B263B] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#FB8500] transition-all"
            >
              <Phone size={16} /> (225) 555-0123
            </a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION (#1B263B Background) */}
      <section className="relative bg-[#1B263B] py-20 lg:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB8500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FB8500]"></span>
              </span>
              <span className="text-sm font-bold tracking-wide text-white/90">24/7 Emergency Storm Response</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 uppercase tracking-tighter text-white">
              Superior Roofing <br /> in <span className="text-[#FB8500]">Baton Rouge</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-xl font-medium">
              Protect your biggest investment with the Gulf Coast's most reliable roofing specialists. Quality materials, lifetime warranties.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#FB8500] text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-[#e67a00] shadow-2xl shadow-orange-500/20 transition-all text-center uppercase tracking-widest">
                Free Estimate
              </a>
              <a href="tel:2255550123" className="bg-white text-[#1B263B] px-10 py-5 rounded-2xl text-lg font-black hover:bg-slate-100 transition-all text-center flex items-center justify-center gap-2 uppercase tracking-widest">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
          
          <div className="hidden lg:block relative">
            <img src={roofAfter} className="rounded-[3rem] shadow-2xl border-4 border-white/10 object-cover h-[600px] w-full relative z-10" alt="New Roof" />
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (White Background) */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="h-64 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-300">
                      <Users size={64} />
                   </div>
                   <div className="p-8 bg-[#FB8500] rounded-3xl text-white shadow-xl">
                      <span className="text-5xl font-black block mb-2">10+</span>
                      <span className="font-bold uppercase tracking-widest text-xs">Years Experience</span>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="p-8 bg-[#1B263B] rounded-3xl text-white">
                      <Building size={32} className="mb-4 text-[#FB8500]" />
                      <h4 className="font-bold text-lg mb-2">Family Owned</h4>
                      <p className="text-slate-400 text-sm">Dedicated to the Louisiana community.</p>
                   </div>
                   <div className="h-80 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-300">
                      <ShieldCheck size={64} />
                   </div>
                </div>
             </div>
          </div>
          
          <div>
            <h2 className="text-[#FB8500] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1B263B] uppercase tracking-tighter mb-8">Built on Trust <br /> & Integrity</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">We don't just fix roofs; we provide peace of mind. Capital City Roofing uses a 21-point inspection process to ensure every shingle is perfect.</p>
            <div className="grid grid-cols-2 gap-4">
              {["Licensed", "Insured", "GAF Certified", "Local Team"].map((check) => (
                <div key={check} className="flex items-center gap-2 font-bold text-[#1B263B]">
                  <CheckCircle2 className="text-[#FB8500]" size={20} /> {check}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (#1B263B Background) */}
      <section id="services" className="py-24 px-6 bg-[#1B263B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FB8500] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Professional Solutions</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Our Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                <div className="bg-[#FB8500] p-4 rounded-2xl mb-8 w-fit shadow-lg shadow-orange-500/20"><s.icon className="w-8 h-8 text-white" /></div>
                <h4 className="text-2xl font-bold text-white mb-4">{s.title}</h4>
                <p className="text-slate-400 mb-8">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 font-black text-sm uppercase text-[#FB8500] group-hover:gap-4 transition-all">Request Service <ChevronRight size={16} /></a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION (White Background) */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[#FB8500] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Portfolio</h2>
          <h3 className="text-4xl font-black text-[#1B263B] uppercase tracking-tighter">Proven Results</h3>
        </div>
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
          <div className="relative w-full aspect-[16/9] select-none overflow-hidden bg-slate-200">
            <img src={roofAfter} className="absolute inset-0 w-full h-full object-cover" alt="After" />
            <div className="absolute inset-0 h-full overflow-hidden z-10 border-r-4 border-[#FB8500]" style={{ width: `${sliderPos}%` }}>
              <img src={roofBefore} className="absolute inset-0 h-full object-cover" alt="Before" style={{ width: "calc(100vw)", maxWidth: "1024px" }} />
            </div>
            <input type="range" min="0" max="100" value={sliderPos} onChange={handleSlider} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
            <div className="absolute top-0 bottom-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#FB8500] rounded-full border-4 border-white flex items-center justify-center shadow-xl">
                <div className="flex gap-1 text-white"><ChevronRight size={20} className="rotate-180 -mr-2" /><ChevronRight size={20} className="-ml-2" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE AREAS (#1B263B Background) */}
      <section id="areas" className="py-24 px-6 bg-[#1B263B]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#FB8500] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Coverage</h2>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Serving the Greater <br /> Baton Rouge Area</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Baton Rouge", "Prairieville", "Denham Springs", "Gonzales", "Port Allen", "Walker", "Zachary", "Central"].map((a) => (
                <div key={a} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold">
                  <MapPin className="text-[#FB8500]" size={20} /> {a}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl">
            <h3 className="text-3xl font-black uppercase text-[#1B263B] mb-6">Request a Quote</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#FB8500]" />
              <input type="tel" placeholder="Phone" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#FB8500]" />
              <button className="w-full bg-[#FB8500] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all">Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS SECTION (White Background) */}
      <section id="reviews" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FB8500] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1B263B] uppercase tracking-tighter">Client Reviews</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Robert H.", text: "Best roofers in Baton Rouge. They handled my insurance claim perfectly.", stars: 5 },
              { name: "Sarah L.", text: "Professional team. Finished my roof repair in one day and left it spotless.", stars: 5 },
              { name: "Michael T.", text: "Honest pricing and great communication. The free inspection was helpful.", stars: 5 },
            ].map((t, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] flex flex-col hover:border-[#FB8500]/20 border border-transparent transition-all">
                <div className="flex gap-1 mb-6">{[...Array(t.stars)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#FB8500] text-[#FB8500]" />)}</div>
                <p className="text-slate-600 italic text-lg mb-8 flex-grow">"{t.text}"</p>
                <h5 className="font-black text-[#1B263B]">— {t.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (#1B263B) */}
      <footer className="bg-[#1B263B] py-16 px-6 text-center border-t border-white/10 text-white">
        <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-[#FB8500] p-1.5 rounded"><Hammer className="text-white w-5 h-5" /></div>
            <span className="text-xl font-black tracking-tighter uppercase">Capital City <span className="text-[#FB8500]">Roofing</span></span>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">© 2024 Capital City Roofing • Baton Rouge, LA</p>
        <p className="font-black tracking-tight underline decoration-[#FB8500] decoration-2 text-sm text-slate-400">Designed by Jay Crisostomo</p>
      </footer>
    </div>
  );
};

export default CapitalCityRoofing;