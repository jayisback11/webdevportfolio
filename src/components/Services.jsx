import React from "react";
import { Monitor, Search, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Website Design",
      description: "Modern, mobile-friendly websites built for local businesses. I make sure your business looks professional on every screen.",
      icon: Monitor,
      benefits: ["Mobile Ready", "Fast Loading", "Easy to Navigate"]
    },
    {
      title: "SEO Optimization",
      description: "Help your business appear on Google searches. When local customers search for your services, I make sure they find you.",
      icon: Search,
      benefits: ["Google Rankings", "Local Search", "More Traffic"]
    },
    {
      title: "Website Redesign",
      description: "Upgrade outdated websites into modern lead machines. I turn your old site into a tool that actually brings in new customers.",
      icon: RefreshCw,
      benefits: ["Modern Look", "Better Conversion", "Lead Generation"]
    }
  ];

  return (
    <section id="services" className="relative min-h-screen lg:h-svh flex items-center justify-center py-12 md:py-20 px-4 md:px-6 bg-[rgb(17,17,19)] overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00D4FF]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[#00D4FF] text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-2">
            How I Help
          </h2>
          <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight md:leading-[0.9]">
            Simple Solutions For <br />
            <span className="text-[#00D4FF]">Growing Your Business</span>
          </h3>
        </div>

        {/* Grid Section - Changed items-center to items-stretch for uniform card height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[rgb(26,28,30)] border border-white/5 p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] hover:border-[#00D4FF]/50 transition-all group shadow-2xl flex flex-col"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#00D4FF]/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:scale-110 transition-transform shrink-0">
                <service.icon className="text-[#00D4FF] w-5 h-5 md:w-8 md:h-8" />
              </div>

              <h4 className="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 uppercase tracking-tight">
                {service.title}
              </h4>
              
              <p className="text-[rgb(161,161,170)] text-xs md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                {service.description}
              </p>

              <ul className="grid grid-cols-1 gap-2 mt-auto">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 font-bold text-[10px] md:text-sm">
                    <CheckCircle2 size={14} className="text-[#00D4FF] shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] md:text-sm hover:text-[#00D4FF] transition-colors group"
          >
            Ready to get started? 
            <span className="flex items-center gap-1 underline decoration-[#00D4FF] decoration-2 underline-offset-4">
              Get a Free Quote 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;