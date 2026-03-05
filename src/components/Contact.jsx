import React, { useState } from "react";
import { Send, Loader2, CheckCircle2, ShieldCheck, Zap, Clock, PartyPopper } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqedazay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    "Full 5-Page Custom Website",
    "Mobile & Tablet Optimization",
    "Google Business & Maps Integration",
    "Local SEO Setup",
    "Lightning Fast Hosting",
    "Custom Contact & Lead Form",
  ];

  return (
    <section id="contact" className="min-h-screen py-16 md:py-24 px-4 md:px-6 bg-[rgb(17,17,19)] flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        {/* Changed grid-cols to stack on mobile and 2-col on lg screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Direct Pricing & Value */}
          <div className="space-y-6 md:space-y-8 text-left">
            <div>
              <h2 className="text-[#00D4FF] font-bold tracking-tight mb-2 flex items-center gap-2 text-xs md:text-sm">
                <Zap size={18} className="md:w-5 md:h-5" /> THE PROFESSIONAL PACKAGE
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                Transparent Pricing. <br className="hidden md:block" /> No Surprises.
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">$1,000</span>
                  <span className="text-[rgb(161,161,170)] text-sm md:text-lg">one-time build fee</span>
                </div>
                <div className="flex items-center gap-2 text-[#00D4FF] font-bold text-lg md:text-xl">
                  <ShieldCheck size={20} className="md:w-6 md:h-6" />
                  <span>$50/mo for maintenance</span>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[rgb(218,218,218)]">
                  <CheckCircle2 className="text-[#00D4FF] shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-5 md:p-6 bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.2)] rounded-2xl">
              <h4 className="text-white font-bold mb-2 text-sm md:text-base">What does maintenance cover?</h4>
              <p className="text-[rgb(161,161,170)] text-xs md:text-sm leading-relaxed">
                Covers high-speed hosting, 24/7 security, monthly updates, and direct support. I handle the tech so you can run your business.
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-blue-600 rounded-3xl blur opacity-10"></div>
            
            <div className="relative p-6 md:p-8 bg-[rgb(26,28,30)] border border-white/10 rounded-3xl flex flex-col justify-center">
              {isSent ? (
                <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[rgba(0,212,255,0.1)] rounded-full flex items-center justify-center text-[#00D4FF]">
                      <PartyPopper size={32} className="md:w-10 md:h-10" />
                    </div>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">Message Sent!</h4>
                  <p className="text-[rgb(218,218,218)] text-sm md:text-lg">
                    I'll review your project and reply in less than 24 hours.
                  </p>
                  <button onClick={() => setIsSent(false)} className="text-sm text-[rgb(161,161,170)] hover:text-white underline transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 md:mb-8 text-center lg:text-left">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Get Started</h4>
                    <p className="text-[rgb(161,161,170)] text-sm">
                      <span className="font-bold text-white">No long-term contracts</span> • Fast turnaround
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs md:text-sm font-medium text-[rgb(218,218,218)]">Full Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full h-11 px-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl text-white transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs md:text-sm font-medium text-[rgb(218,218,218)]">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full h-11 px-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl text-white transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs md:text-sm font-medium text-[rgb(218,218,218)]">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(225) 555-0123"
                        className="w-full h-11 px-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl text-white transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs md:text-sm font-medium text-[rgb(218,218,218)]">Your Project Goals</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your business..."
                        rows={3}
                        className="w-full p-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl resize-none text-white transition-all text-sm"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#00D4FF] hover:bg-[#00B8E6] disabled:opacity-50 text-[rgb(17,17,19)] font-bold rounded-xl py-3.5 md:py-4 text-base md:text-lg flex items-center justify-center group transition-all"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-5 w-5 md:h-6 md:w-6 animate-spin" />
                        ) : (
                          <>
                            Secure Your Build
                            <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </>
                        )}
                      </button>
                      <div className="flex items-center gap-2 text-[10px] md:text-xs text-[rgb(161,161,170)]">
                        <Clock size={14} className="text-[#00D4FF]" />
                        <span>Reply guaranteed within 24 hours</span>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;