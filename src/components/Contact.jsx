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
    "Local SEO Setup (Get found on Google)",
    "Lightning Fast Hosting Setup",
    "Custom Contact & Lead Form",
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-6 bg-[rgb(17,17,19)] flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">
          
          {/* Left Column: Direct Pricing & Value */}
          <div className="space-y-8 text-left">
            <div>
              <h2 className="text-[#00D4FF] font-bold tracking-tight mb-2 flex items-center gap-2">
                <Zap size={20} /> THE PROFESSIONAL PACKAGE
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent Pricing. <br />No Surprises.
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">$1,000</span>
                  <span className="text-[rgb(161,161,170)] text-lg">one-time build fee</span>
                </div>
                <div className="flex items-center gap-2 text-[#00D4FF] font-bold text-xl">
                  <ShieldCheck size={24} />
                  <span>$50/mo for maintenance</span>
                </div>
              </div>
            </div>

            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[rgb(218,218,218)]">
                  <CheckCircle2 className="text-[#00D4FF] shrink-0" size={22} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.2)] rounded-2xl">
              <h4 className="text-white font-bold mb-2">What does maintenance cover?</h4>
              <p className="text-[rgb(161,161,170)] text-sm leading-relaxed">
                The $50/mo covers your high-speed hosting, 24/7 security monitoring, monthly content updates, and direct technical support. I handle the tech so you can run your business.
              </p>
            </div>
          </div>

          {/* Right Column: The Form (All Vertical) */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-blue-600 rounded-3xl blur opacity-10"></div>
            
            <div className="relative p-8 bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-3xl min-h-[550px] flex flex-col justify-center">
              {isSent ? (
                <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-[rgba(0,212,255,0.1)] rounded-full flex items-center justify-center text-[#00D4FF]">
                      <PartyPopper size={40} />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-white">Message Sent!</h4>
                  <p className="text-[rgb(218,218,218)] text-lg">
                    I've received your request and will review your project details immediately.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[#00D4FF] font-medium bg-[rgba(0,212,255,0.05)] py-3 rounded-xl">
                    <Clock size={18} />
                    <span>Expect a reply in less than 24 hours</span>
                  </div>
                  <button onClick={() => setIsSent(false)} className="text-sm text-[rgb(161,161,170)] hover:text-white underline transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8 text-center lg:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Get Started</h4>
                    <p className="text-[rgb(161,161,170)]">
                      <span className="font-bold text-white">No long-term contracts</span> • Fast turnaround
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-[rgb(218,218,218)]">Full Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full h-11 px-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl text-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-[rgb(218,218,218)]">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full h-11 px-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl text-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-[rgb(218,218,218)]">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(225) 555-0123"
                        className="w-full h-11 px-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl text-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-[rgb(218,218,218)]">Tell me about your business</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="What are your goals for this website?"
                        rows={4}
                        className="w-full p-4 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] focus:border-[#00D4FF] focus:outline-none rounded-xl resize-none text-white transition-all text-sm"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#00D4FF] hover:bg-[#00B8E6] disabled:opacity-50 text-[rgb(17,17,19)] font-bold rounded-xl py-4 text-lg flex items-center justify-center group transition-all"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-6 w-6 animate-spin" />
                        ) : (
                          <>
                            Secure Your Build
                            <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </>
                        )}
                      </button>
                      <div className="flex items-center gap-2 text-xs text-[rgb(161,161,170)]">
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