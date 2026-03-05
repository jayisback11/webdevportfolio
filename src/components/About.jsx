import React from 'react';
import { Award, Briefcase, GraduationCap, Globe, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Professional Dev',
      description: 'Enterprise Experience'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Computer Engineer',
      description: 'LSU Graduate'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Focused',
      description: 'Built to Last'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[rgb(17,17,19)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Modern Coding Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,17,19)] via-transparent to-transparent" />
              
              {/* Overlay Badge for local business focus */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[rgba(26,28,30,0.9)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[rgba(0,212,255,0.1)] rounded-lg text-[#00D4FF]">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Local Business Specialist</p>
                    <p className="text-sm text-[rgb(161,161,170)]">Helping Louisiana brands go digital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider">About Your Developer</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Engineered for Performance. <br />
                Designed for Growth.
              </h3>
              <div className="space-y-4 text-[rgb(218,218,218)] text-lg">
                <p>
                  I don't just "make websites." As a <span className="font-bold text-white">Computer Engineering graduate from LSU</span>, I build high-performance digital tools designed to solve business problems. 
                </p>
                <p>
                  My experience as a Software Developer at <span className="font-bold text-white">Louisiana Farm Bureau</span> means I understand how to build systems that are secure, reliable, and scalable. I take that enterprise-level precision and apply it to local business websites.
                </p>
                <p>
                  Whether you need a high-converting landing page or a full-scale booking system, I bridge the gap between complex engineering and beautiful, user-friendly design.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:border-[#00D4FF] transition-all group text-center md:text-left"
                >
                  <div className="text-[#00D4FF] mb-2 flex justify-center md:justify-start group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold mb-1 text-white">{item.title}</h4>
                  <p className="text-xs text-[rgb(161,161,170)]">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Call to Action Link */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-[#00D4FF] font-semibold hover:underline group"
              >
                Let's build your project
                <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;