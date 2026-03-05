import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, ShieldCheck, Award, Hammer, Wrench, 
  CloudLightning, ChevronRight, BadgeCheck, 
  Zap, CheckCircle2, Star, MapPin, Clock, 
  Mail, MessageSquare, Home, Building2
} from 'lucide-react';

// IMPORT YOUR LOCAL IMAGES
import roofBefore from '../files/images/roofbefore.jpg';
import roofAfter from '../files/images/roofafter.jpg';

const CapitalCityRoofing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sliderPos, setSliderPos] = useState(50);

  const handleSlider = (e) => {
    setSliderPos(e.target.value);
  };

  const services = [
    { title: "Roof Repair", icon: Wrench, desc: "Fast response for leaks and shingle damage." },
    { title: "Roof Replacement", icon: Hammer, desc: "Complete tear-offs with premium GAF materials." },
    { title: "Roof Inspections", icon: BadgeCheck, desc: "Detailed 21-point safety and integrity checks." },
    { title: "Storm Damage", icon: CloudLightning, desc: "Expert insurance claim assistance after storms." },
    { title: "Shingle Roofing", icon: CheckCircle2, desc: "Versatile styles to match any Baton Rouge home." },
    { title: "Metal Roofing", icon: Zap, desc: "Maximum durability and energy-efficient protection." }
  ];

  return (
    <div className="text-slate-900 font-sans selection:bg-orange-100 scroll-smooth">
      
      {/* 1. HEADER (Light Gray) */}
      <header className="sticky top-0 z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#FB8500] p-1.5 rounded shadow-lg shadow-orange-500/20">
              <Hammer className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#1B263B] uppercase">
              Capital City <span className="text-[#FB8500]">Roofing</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wide text-[#415A77]">
            <a href="#services" className="hover:text-[#FB8500] transition">Services</a>
            <a href="#about" className="hover:text-[#FB8500] transition">Why Us</a>
            <a href="#contact" className="hover:text-[#FB8500] transition">Contact</a>
            <a href="tel:2255550123" className="bg-[#1B263B] text-white px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#FB8500] transition-all">
              <Phone size={18} /> (225) 555-0123
            </a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION (Deep Navy) */}
      <section className="relative bg-[#1B263B] text-white py-20 lg:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Trusted Roofing Services in <span className="text-[#FB8500]">Baton Rouge</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-xl">
              Residential and commercial roofing services including repairs, replacements, and storm damage restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="bg-[#FB8500] text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-[#e67a00] shadow-2xl transition-all text-center">Get Free Estimate</a>
              <a href="tel:2255550123" className="bg-slate-100 text-[#1B263B] px-10 py-5 rounded-2xl text-lg font-black hover:bg-white transition-all text-center flex items-center justify-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>
            <div className="flex flex-wrap gap-8 opacity-80 border-t border-slate-700/50 pt-8">
              <div className="flex items-center gap-2 font-bold text-sm text-white"><ShieldCheck className="text-[#FB8500]" /> Licensed & Insured</div>
              <div className="flex items-center gap-2 font-bold text-sm text-white"><BadgeCheck className="text-[#FB8500]" /> Free Estimates</div>
              <div className="flex items-center gap-2 font-bold text-sm text-white"><Award className="text-[#FB8500]" /> 10+ Years Experience</div>
            </div>
          </motion.div>
          <div className="hidden lg:block relative">
             <div className="absolute -inset-4 bg-[#FB8500]/10 rounded-[2.5rem] blur-2xl" />
             <img 
                src={roofAfter} 
                className="rounded-[2.5rem] shadow-2xl border-4 border-[#415A77] object-cover h-[500px] w-full relative z-10" 
                alt="Roofing Project" 
             />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Light Gray) */}
      <section id="services" className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FB8500] font-bold uppercase tracking-widest mb-4 text-sm">Professional Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1B263B] uppercase tracking-tighter">Our Services</h3>
            <div className="h-1.5 w-20 bg-[#FB8500] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <s.icon className="w-12 h-12 text-[#FB8500] mb-6" />
                <h4 className="text-2xl font-bold text-[#1B263B] mb-3">{s.title}</h4>
                <p className="text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Deep Navy) */}
      <section id="about" className="py-24 px-6 bg-[#1B263B] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#FB8500] font-bold uppercase tracking-widest mb-4 text-sm">Why Choose Us</h2>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Baton Rouge's Premier <br/>Roofing Contractors</h3>
            <div className="space-y-4">
              {["Licensed and insured professionals", "Local Baton Rouge roofing experts", "High-quality materials", "Honest pricing and free inspections", "Fast response times"].map((b, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <CheckCircle2 className="text-[#FB8500] w-6 h-6 shrink-0" />
                  <span className="font-bold text-slate-200">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 p-12 rounded-[3rem] text-[#1B263B] shadow-2xl">
            <Clock className="w-16 h-16 text-[#FB8500] mb-6" />
            <h4 className="text-3xl font-black mb-4 uppercase">Fast Response Times</h4>
            <p className="text-slate-600 text-lg leading-relaxed">We understand that a leaking roof is an emergency. Our local team is strategically located to provide the fastest service in the Capital City area.</p>
          </div>
        </div>
      </section>

      {/* 5. BEFORE & AFTER GALLERY (Light Gray) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16 text-[#1B263B]">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Project Gallery</h2>
          <p className="text-slate-600 mt-4">Real results for Baton Rouge homeowners. Slide to see the transformation.</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1B263B] bg-slate-200">
          <div className="relative w-full aspect-video select-none overflow-hidden">
            {/* After Image (Always stays in background) */}
            <img 
              src={roofAfter} 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="After Restoration" 
            />
            
            {/* Before Image Container (This shrinks/expands) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden z-10 border-r-2 border-[#FB8500]" 
              style={{ width: `${sliderPos}%` }}
            >
              {/* Before Image (Matches container size to prevent zooming) */}
              <img 
                src={roofBefore} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Before Restoration" 
                style={{ width: '100vw', maxWidth: 'none' }} // Matches the parent scale
              />
            </div>

            {/* Hidden Input for Slider Logic */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={handleSlider} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" 
            />

            {/* Visual Handle */}
            <div 
              className="absolute top-0 bottom-0 z-20 pointer-events-none" 
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FB8500] rounded-full border-4 border-[#1B263B] flex items-center justify-center shadow-2xl">
                <div className="flex gap-1">
                   <div className="w-1 h-4 bg-white/40 rounded-full" />
                   <div className="w-1 h-4 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-[#1B263B]/80 text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest z-20">Before</div>
            <div className="absolute top-6 right-6 bg-[#FB8500]/90 text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest z-20">After</div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (Deep Navy) */}
      <section className="py-24 px-6 bg-[#1B263B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Customer Reviews</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Robert H.", text: "Best roofers in Baton Rouge. They handled my insurance claim perfectly.", stars: 5 },
              { name: "Sarah L.", text: "Very professional team. They finished my roof repair in one day.", stars: 5 },
              { name: "Michael T.", text: "Honest pricing and great communication. Highly recommend.", stars: 5 }
            ].map((t, i) => (
              <div key={i} className="p-8 bg-slate-800/40 rounded-3xl border border-slate-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#FB8500] text-[#FB8500]" />)}
                </div>
                <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                <h5 className="font-black text-[#FB8500]">— {t.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SERVICE AREAS & CTA (Light Gray) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-black text-[#1B263B] uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-[#FB8500]" /> Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {["Baton Rouge", "Port Allen", "Denham Springs", "Prairieville", "Gonzales", "Livingston"].map(a => (
                <li key={a} className="flex items-center gap-2 font-bold text-[#1B263B] underline decoration-[#FB8500] decoration-2 underline-offset-4">{a}</li>
              ))}
            </ul>
            <div className="h-48 bg-slate-200 rounded-3xl overflow-hidden grayscale border-2 border-slate-300">
               <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50" alt="Map" />
            </div>
          </div>
          <div className="bg-[#FB8500] p-12 rounded-[3rem] shadow-2xl text-white text-center">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">Need Roof Repairs?</h3>
            <p className="text-orange-100 text-lg mb-10">Get a Free Estimate Today. Our local experts are ready to help.</p>
            <div className="flex flex-col gap-4">
              <a href="#contact" className="bg-[#1B263B] py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all">Request Quote</a>
              <a href="tel:2255550123" className="bg-slate-100 text-[#FB8500] py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION (Deep Navy) */}
      <section id="contact" className="py-24 px-6 bg-[#1B263B] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-white">Get Your Free <span className="text-[#FB8500]">Inspection</span></h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-4 rounded-full border border-slate-700"><Phone className="text-[#FB8500]" /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Call Us Directly</p>
                  <p className="text-xl font-black text-white">(225) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-4 rounded-full border border-slate-700"><Clock className="text-[#FB8500]" /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Business Hours</p>
                  <p className="text-xl font-black text-white">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
          <form className="bg-slate-100 p-10 rounded-[2.5rem] shadow-xl border border-slate-200 space-y-4 text-[#1B263B]">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#FB8500]" />
              <input type="tel" placeholder="Phone" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#FB8500]" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#FB8500]" />
            <input type="text" placeholder="Property Address" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#FB8500]" />
            <select className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#FB8500] appearance-none">
              <option>Service Needed...</option>
              <option>Roof Replacement</option>
              <option>Repair</option>
              <option>Inspection</option>
            </select>
            <textarea placeholder="Message" className="w-full p-4 bg-white border border-slate-200 rounded-xl h-32 outline-none focus:ring-2 focus:ring-[#FB8500]"></textarea>
            <button className="w-full bg-[#FB8500] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all">Send Request</button>
          </form>
        </div>
      </section>

      {/* FOOTER (Light Gray) */}
      <footer className="bg-slate-100 py-12 px-6 text-center border-t border-slate-200 text-[#1B263B]">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Capital City Roofing Demo</p>
        <p className="font-black tracking-tight underline decoration-[#FB8500] decoration-2 text-lg">Website concept designed by Jay Crisostomo</p>
      </footer>
    </div>
  );
};

export default CapitalCityRoofing;