import React from "react";
import { Github, Linkedin, Youtube, ArrowRight, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    // Used h-svh for mobile browser compatibility and kept pt-24 to balance the header space
    <section id="home" className="relative h-svh min-h-[650px] flex items-center justify-center px-4 md:px-6 pt-20 pb-10 overflow-hidden bg-[rgb(17,17,19)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,212,255,0.08)] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Content Area */}
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] rounded-full">
              <span className="text-[#00D4FF] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Custom Local Business Solutions
              </span>
            </div>
            
            {/* Scaled down text: 4xl on mobile, 7xl on desktop (instead of 8xl) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white tracking-tighter">
              Websites That Bring More <br className="hidden md:block" />
              <span className="text-[#00D4FF]">Customers to Local Businesses</span>
            </h1>
            
            {/* Medium text size for better fit */}
            <p className="text-base md:text-xl text-[rgb(218,218,218)] max-w-2xl mx-auto font-medium leading-relaxed px-2">
              Custom websites for <span className="text-white font-bold">barbershops, roofing companies, restaurants,</span> and local businesses. 
            </p>
          </div>

          {/* Action Buttons - More compact padding */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-8 md:pt-10 w-full sm:w-auto px-4 sm:px-0">
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="w-full bg-[#00D4FF] hover:bg-[#00B8E6] text-[rgb(17,17,19)] font-black rounded-xl px-8 py-6 md:text-lg group shadow-[0_0_25px_rgba(0,212,255,0.2)] transition-all">
                Get a Free Quote
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </a>

            <a href="#portfolio" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full border-2 border-[rgb(63,63,63)] hover:border-[#00D4FF] hover:bg-[rgba(0,212,255,0.1)] text-white rounded-xl px-8 py-6 md:text-lg font-bold"
              >
                <MessageSquare className="mr-2" size={20} />
                View My Work
              </Button>
            </a>
          </div>

          {/* Bottom Proof Section - Reduced mt-12 and text sizes to ensure it stays on screen */}
          <div className="flex flex-col items-center gap-6 pt-8 mt-10 border-t border-[rgb(38,40,42)] w-full max-w-2xl">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[rgb(161,161,170)] text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#00D4FF]" /> Fast Loading</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#00D4FF]" /> Mobile Ready</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#00D4FF]" /> SEO Optimized</span>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: Github, url: "https://github.com/jayisback11" },
                { icon: Linkedin, url: "https://www.linkedin.com/in/jay-crisostomo-5562251a8/" },
                { icon: Youtube, url: "https://www.youtube.com/@notahacker30" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[#00D4FF] hover:text-[rgb(17,17,19)] transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;