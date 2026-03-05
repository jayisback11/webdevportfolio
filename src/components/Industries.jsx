import React from "react";
import { Hammer, Scissors, Utensils, HardHat, Building2, Store } from "lucide-react";

const Industries = () => {
  const industries = [
    { name: "Roofing", icon: Hammer },
    { name: "Barbershops", icon: Scissors },
    { name: "Restaurants", icon: Utensils },
    { name: "Contractors", icon: HardHat },
    { name: "Local Biz", icon: Store },
    { name: "Real Estate", icon: Building2 },
  ];

  return (
    <section id="specialization" className="relative h-svh min-h-[650px] flex items-center justify-center py-10 px-4 md:px-6 bg-[rgb(26,28,30)] overflow-hidden">
      {/* Background Text Effect - Hidden on mobile for performance/clarity */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[20vw] font-black uppercase leading-none">Expertise</h2>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#00D4FF] text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-2">
            Specialization
          </h2>
          <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            Industries I <span className="text-[#00D4FF]">Work With</span>
          </h3>
        </div>

        {/* Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-[rgb(17,17,19)] border border-white/5 p-6 md:p-12 rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center text-center transition-all hover:border-[#00D4FF] hover:-translate-y-1 shadow-xl"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[rgb(38,40,42)] rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#00D4FF] group-hover:text-[rgb(17,17,19)] transition-all">
                {/* FIXED: Using className for responsive icon sizing */}
                <industry.icon className="w-6 h-6 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
              </div>
              <h4 className="text-white text-[11px] md:text-xl font-black uppercase tracking-tight group-hover:text-[#00D4FF] transition-colors">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;