import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Marcus Thorne",
      type: "Roofer",
      text: "The new landing page doubled our monthly leads within 30 days. It's the best investment we've made this year.",
      stars: 5,
    },
    {
      name: "Elena Rodriguez",
      type: "Barber",
      text: "Finally, a website that handles booking without crashing. It looks sharp on mobile, where 90% of our clients book.",
      stars: 5,
    },
    {
      name: "David Chen",
      type: "Restaurant Owner",
      text: "Our reservation system is seamless. Jay really understood our brand and local vibe.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative min-h-screen lg:h-svh flex items-center justify-center py-12 px-4 md:px-6 bg-[rgb(26,28,30)] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        
        {/* Header - Reduced margin on mobile */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[#00D4FF] text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-2">
            Client Feedback
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
            Trusted by <span className="text-[#00D4FF]">Local Experts</span>
          </h3>
        </div>

        {/* Grid: Stacks on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-[rgb(17,17,19)] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 relative group hover:border-[#00D4FF]/30 transition-all flex flex-col shadow-2xl"
            >
              {/* Responsive Quote Icon */}
              <Quote className="absolute top-4 right-6 md:top-6 md:right-8 text-[#00D4FF]/5 group-hover:text-[#00D4FF]/10 transition-colors w-10 h-10 md:w-16 md:h-16" />
              
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="fill-[#00D4FF] text-[#00D4FF] w-3 h-3 md:w-3.5 md:h-3.5" />
                ))}
              </div>

              <p className="text-sm md:text-lg text-white/90 font-medium leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4 md:pt-6">
                <div className="bg-[#00D4FF]/10 p-1 md:p-1.5 rounded-full">
                  <CheckCircle className="text-[#00D4FF] w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
                <div>
                  <h4 className="text-white text-[11px] md:text-sm font-black uppercase tracking-tight">
                    {review.name}
                  </h4>
                  <p className="text-[#00D4FF] text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                    {review.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - More compact on mobile */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-block bg-[rgb(38,40,42)]/30 py-3 px-6 md:py-4 md:px-8 rounded-full border border-white/5">
            <p className="text-[rgb(161,161,170)] text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Ready to be next? <a href="#contact" className="text-[#00D4FF] ml-1 hover:underline">Get started</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;