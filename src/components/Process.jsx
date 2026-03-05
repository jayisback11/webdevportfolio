import React from "react";
import { MessageCircle, Layout, Code, Rocket, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description: "We discuss your business goals and how a website can get you more customers.",
      icon: MessageCircle,
      color: "from-[#00D4FF] to-[#008FB3]"
    },
    {
      number: "2",
      title: "Design Mockup",
      description: "I create a visual blueprint so you see exactly how it looks before the build starts.",
      icon: Layout,
      color: "from-[#00B8E6] to-[#007A99]"
    },
    {
      number: "3",
      title: "Development",
      description: "I build your high-performance site with revisions until it's exactly what you need.",
      icon: Code,
      color: "from-[#0099CC] to-[#005C7A]"
    },
    {
      number: "4",
      title: "Launch",
      description: "We take your site live and start showing your business to local customers on Google.",
      icon: Rocket,
      color: "from-[#00D4FF] to-[#00B8E6]"
    }
  ];

  return (
    <section id="process" className="relative min-h-screen lg:h-svh flex items-center justify-center py-12 px-4 md:px-6 bg-[rgb(17,17,19)] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00D4FF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#00D4FF] text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-2 md:mb-4">
            The Workflow
          </h2>
          <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            How We Get <span className="text-[#00D4FF]">Results</span>
          </h3>
        </div>

        {/* Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-[#00D4FF]/20 to-transparent z-0 translate-x-4" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Number Badge - Scaled for Mobile */}
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.color} p-[1px] mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,212,255,0.1)]`}>
                  <div className="w-full h-full bg-[rgb(17,17,19)] rounded-[15px] md:rounded-[22px] flex items-center justify-center relative overflow-hidden">
                    <step.icon className="text-[#00D4FF] w-6 h-6 md:w-8 md:h-8" />
                    <span className="absolute top-0 right-1 text-[#00D4FF]/10 font-black text-lg md:text-2xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h4 className="text-sm md:text-xl font-black text-white mb-2 md:mb-4 uppercase tracking-tight">
                  {step.title}
                </h4>
                
                <p className="text-[rgb(161,161,170)] text-[10px] md:text-sm leading-relaxed px-1 md:px-4 line-clamp-3 md:line-clamp-none">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button: Mobile Friendly Layout */}
        <div className="mt-12 md:mt-20 flex justify-center">
          <a href="#contact" className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-[rgb(26,28,30)] border border-white/5 px-6 py-4 rounded-2xl hover:border-[#00D4FF] transition-all active:scale-95 shadow-xl">
            <span className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Ready for step one?</span>
            <div className="flex items-center gap-2 text-[#00D4FF] font-black uppercase tracking-widest text-xs md:text-sm">
              Book your consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;