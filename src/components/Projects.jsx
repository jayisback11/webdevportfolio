import React from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import CapitalCityRoofing from "./CapitalCityRoofing"; 
import BarbershopWebsite from "./BarbershopWebsite"; // 1. Import the new component

const Projects = ({ isDemoMode }) => {
  
  const projects = [
    {
      id: "roofing", // Added ID for routing logic
      title: "Capital City Roofing",
      category: "Roofing & Construction",
      description: "A professional high-converting landing page built for a Baton Rouge contractor to capture leads and showcase services.",
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
      tech: ["React.js", "Lead Gen", "Framer Motion"],
      isInternal: true, 
    },
    {
      title: "Restaurant Website",
      category: "Food & Dining",
      description: "A high-end design featuring online reservations, digital menus, and local SEO to bring more customers through the door.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      tech: ["Online Menu", "Reservations", "Google Maps"],
      demo: "https://restaurantconcept.vercel.app/",
      isInternal: false,
    },
    {
      id: "barber", // Added ID for routing logic
      title: "Barbershop Website",
      category: "Local Business",
      description: "Clean, modern design with an integrated booking system and service menu. Perfect for service-based businesses.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      tech: ["Booking System", "Mobile Ready", "Gallery"],
      demo: "#",
      isInternal: true,
    }
  ];

  // 2. Updated click handler to accept the specific project ID
  const handleInternalClick = (projectId) => {
    const demoUrl = window.location.origin + window.location.pathname + `?demo=${projectId}`;
    window.open(demoUrl, '_blank');
  };

  // 3. Logic to determine which demo to show
  if (isDemoMode) {
    const params = new URLSearchParams(window.location.search);
    const activeDemo = params.get('demo');

    return (
      <div className="relative min-h-screen bg-white">
        <button
          onClick={() => window.close()}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#00D4FF] text-[rgb(17,17,19)] px-5 py-3 md:px-6 md:py-4 rounded-full font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group text-sm md:text-base"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Close Demo
        </button>
        <div className="w-full h-full overflow-x-hidden">
          {activeDemo === 'barber' ? <BarbershopWebsite /> : <CapitalCityRoofing />}
        </div>
      </div>
    );
  }

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 bg-[rgb(26,28,30)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-black text-[#00D4FF] uppercase tracking-[0.2em] mb-3">
            Recent Results
          </h2>
          <h3 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tighter uppercase">
            Featured Projects
          </h3>
          <p className="text-[rgb(161,161,170)] text-sm md:text-base max-w-xl mx-auto">
            Battle-tested designs built to turn local search traffic into paying customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[rgb(17,17,19)] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00D4FF]/50 transition-all group flex flex-col h-full shadow-xl"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,17,19)]/60 to-transparent" />
              </div>

              <div className="p-5 md:p-6 space-y-4 flex flex-col flex-grow">
                <div className="space-y-2">
                   <span className="text-[10px] font-black text-[#00D4FF] uppercase tracking-widest bg-[#00D4FF]/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                    {project.title}
                  </h4>
                </div>
                
                <p className="text-[rgb(161,161,170)] text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[9px] font-bold text-white/40 uppercase border border-white/10 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 mt-auto">
                  {project.isInternal ? (
                    <button
                      onClick={() => handleInternalClick(project.id)} // Pass the ID here
                      className="w-full flex items-center justify-center gap-2 py-3.5 md:py-3 rounded-xl font-bold transition-all bg-[#00D4FF] text-[rgb(17,17,19)] hover:bg-[#00B8E6] active:scale-[0.98] shadow-lg shadow-[#00D4FF]/5"
                    >
                      <span className="text-sm md:text-base">See Live Site</span>
                      <ExternalLink size={16} />
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 md:py-3 rounded-xl font-bold transition-all ${
                        project.demo === "#" 
                          ? "bg-[rgb(38,40,42)] text-[rgb(100,100,100)] cursor-not-allowed" 
                          : "bg-[#00D4FF] text-[rgb(17,17,19)] hover:bg-[#00B8E6] active:scale-[0.98]"
                      }`}
                      onClick={(e) => project.demo === "#" && e.preventDefault()}
                    >
                      <span className="text-sm md:text-base">
                        {project.demo === "#" ? "Coming Soon" : "See Live Site"}
                      </span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;