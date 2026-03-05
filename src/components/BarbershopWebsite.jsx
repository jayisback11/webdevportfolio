import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Calendar,
  MapPin,
  Clock,
  Phone,
  Instagram,
  ChevronRight,
  Star,
  CheckCircle2,
  ExternalLink,
  Menu,
  X
} from "lucide-react";

const BarbershopWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: "Signature Haircut", price: "$35", desc: "Precision cut, hot towel finish, and professional style.", time: "45 min" },
    { title: "Skin Fade", price: "$45", desc: "Expert taper or bald fade with straight razor outline.", time: "60 min" },
    { title: "Beard Trim & Shape", price: "$25", desc: "Sculpting, sharp lineup, and premium beard oil treatment.", time: "30 min" },
    { title: "The Royal Combo", price: "$65", desc: "Signature haircut + Full beard grooming & facial steam.", time: "90 min" },
    { title: "Straight Razor Shave", price: "$40", desc: "Traditional hot lather shave with aromatic essential oils.", time: "45 min" },
    { title: "Kids Haircut", price: "$25", desc: "Ages 12 and under. Patient, quick, and stylish.", time: "30 min" },
  ];

  const barbers = [
    { name: "Marcus 'The Blade'", bio: "15 years experience. Master of classic pompadours and skin fades.", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=500" },
    { name: "Leo Vance", bio: "Specializes in modern creative cuts and intricate beard designs.", img: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&q=80&w=500" },
    { name: "Julian Reyes", bio: "The king of the straight razor. Traditional techniques with a modern vibe.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500" },
  ];

  return (
    <div className="font-sans text-slate-900 selection:bg-blue-100 scroll-smooth bg-white">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scissors className="text-[#1B263B] w-6 h-6 rotate-90" />
            <span className="text-2xl font-black tracking-tighter text-[#1B263B] uppercase">
              Cut <span className="text-blue-600">&</span> Crown
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 font-bold text-xs uppercase tracking-widest text-slate-500">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#team" className="hover:text-blue-600 transition">Barbers</a>
            <a href="#gallery" className="hover:text-blue-600 transition">Gallery</a>
            <a href="#location" className="hover:text-blue-600 transition">Location</a>
            <a href="#booking" className="bg-[#1B263B] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20">
              <Calendar size={14} /> Book Appointment
            </a>
          </nav>

          <button className="lg:hidden text-[#1B263B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative bg-[#1B263B] min-h-[90vh] flex items-center pt-10 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-30" 
            alt="Barbershop Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B263B] via-[#1B263B]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Premium Grooming Parlor</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white">
              The Finest <br /> <span className="text-blue-500">Craftsmanship</span> <br /> In Baton Rouge
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-lg font-medium leading-relaxed">
              Step into a realm of precision and style. We combine traditional barbering techniques with modern aesthetics for the ultimate gentleman's experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#booking" className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-blue-500 shadow-2xl shadow-blue-500/40 transition-all text-center uppercase tracking-widest">
                Book My Chair
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-white hover:text-[#1B263B] transition-all text-center uppercase tracking-widest">
                Our Services
              </a>
            </div>

            <div className="flex flex-wrap gap-10 py-8 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-blue-500 font-black text-2xl tracking-tighter uppercase">Mon-Sat</span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">9:00am — 8:00pm</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blue-500 font-black text-2xl tracking-tighter uppercase">Location</span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Downtown Baton Rouge</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm">Service Menu</h2>
              <h3 className="text-4xl md:text-6xl font-black text-[#1B263B] uppercase tracking-tighter leading-none">Sharpen Your <br /> Appearance</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium border-l-4 border-blue-600 pl-6">
              Every service includes a consultation, premium products, and our signature hot towel finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-black text-[#1B263B] group-hover:text-blue-600 transition-colors uppercase tracking-tighter">{s.title}</h4>
                    <span className="text-2xl font-black text-blue-600">{s.price}</span>
                  </div>
                  <p className="text-slate-600 mb-8 font-medium">{s.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <Clock size={14} className="text-blue-600" /> {s.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM */}
      <section id="team" className="py-24 px-6 bg-[#1B263B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] mb-4 text-sm">The Artisans</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Choose Your Professional</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {barbers.map((b, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border-4 border-white/5 group-hover:border-blue-500 transition-all duration-500">
                  <img src={b.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={b.name} />
                </div>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{b.name}</h4>
                <p className="text-slate-400 mb-6 font-medium leading-relaxed">{b.bio}</p>
                <a href="#booking" className="inline-flex items-center gap-3 text-blue-500 font-black uppercase tracking-widest text-sm group-hover:text-white transition-all">
                  Book with {b.name.split(' ')[0]} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm">The Lookbook</h2>
            <h3 className="text-4xl font-black text-[#1B263B] uppercase tracking-tighter mb-4">Masterpiece Collection</h3>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-500 hover:text-blue-600 transition text-sm uppercase tracking-widest">
              <Instagram size={18} /> follow our journey
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1590540179852-2110a54f813a?auto=format&fit=crop&q=80&w=600",
               "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600",
               "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600"
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-[2rem] overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-500">
                <img src={img} className="w-full h-full object-cover" alt="Fresh Cut" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOOKING SECTION */}
      <section id="booking" className="py-24 px-6 bg-[#1B263B]">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:row-reverse md:flex-row">
          <div className="p-16 md:w-1/2 bg-blue-600 text-white flex flex-col justify-center">
            <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Elevate Your Style</h3>
            <p className="text-blue-100 mb-8 font-medium text-lg leading-relaxed">
              Skip the wait. Our real-time booking system ensures your spot is secured with your favorite artisan.
            </p>
            <div className="space-y-4">
              {["Instant Approval", "SMS Reminders", "Secure Booking"].map((text) => (
                <div key={text} className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl border border-white/10">
                  <CheckCircle2 className="text-white" size={20} />
                  <span className="font-bold uppercase tracking-widest text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-16 md:w-1/2 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8">
               <Calendar size={40} className="text-blue-600" />
            </div>
            <h4 className="text-3xl font-black text-[#1B263B] uppercase mb-4 tracking-tighter">Ready For a Change?</h4>
            <p className="text-slate-500 mb-10 font-medium">Click below to open our secure booking portal via Square.</p>
            <button className="w-full bg-[#1B263B] text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl">
              Book on Square <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / LOCATION */}
      <section id="location" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm">Find The Shop</h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#1B263B] uppercase tracking-tighter mb-10 leading-none">In The Heart <br /> of The City</h3>
            
            <div className="grid gap-10">
              <div className="flex gap-6">
                <div className="bg-slate-100 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"><MapPin className="text-blue-600" /></div>
                <div>
                  <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Our Studio</h5>
                  <p className="text-xl font-bold text-[#1B263B]">123 North Blvd, Suite 101<br />Baton Rouge, LA 70802</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-slate-100 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"><Phone className="text-blue-600" /></div>
                <div>
                  <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</h5>
                  <p className="text-xl font-bold text-[#1B263B]">(225) 555-CUTS</p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h5 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">Operating Hours</h5>
                <div className="space-y-2 font-bold text-[#1B263B]">
                  <div className="flex justify-between"><span>Monday - Friday</span> <span>9:00 - 8:00</span></div>
                  <div className="flex justify-between"><span>Saturday</span> <span>8:00 - 6:00</span></div>
                  <div className="flex justify-between text-red-500 uppercase"><span>Sunday</span> <span>Closed</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] group-hover:bg-blue-600/10 transition-colors" />
            <div className="h-[600px] relative bg-slate-200 rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110037.117469792!2d-91.1966141!3d30.4514677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8624419996d9290f%3A0xc3f8e58f00518776!2sBaton%20Rouge%2C%20LA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                className="w-full h-full grayscale border-none"
                allowFullScreen="" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B263B] py-20 px-6 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10">
            <Scissors className="text-blue-500 w-8 h-8 rotate-90" />
            <span className="text-3xl font-black tracking-tighter uppercase">
              Cut <span className="text-blue-500">&</span> Crown
            </span>
          </div>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"><Instagram size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"><Phone size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"><MapPin size={20} /></a>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 mb-4 italic">The Gold Standard of Baton Rouge Grooming</p>
          <p className="text-xs text-slate-400">© 2024 THE CUT & CROWN • DESIGNED BY JAY CRISOSTOMO</p>
        </div>
      </footer>
    </div>
  );
};

export default BarbershopWebsite;