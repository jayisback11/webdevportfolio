import React, { useState, useEffect } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import CapitalCityRoofing from "./CapitalCityRoofing"; // Ensure this file exists in the same folder

const Projects = () => {
  const [showRoofingDemo, setShowRoofingDemo] = useState(false);

  // Scroll to top when demo opens
  useEffect(() => {
    if (showRoofingDemo) window.scrollTo(0, 0);
  }, [showRoofingDemo]);

  const projects = [
    {
      title: "Restaurant Website",
      category: "Food & Dining",
      description:
        "A high-end design featuring online reservations, digital menus, and local SEO to bring more customers through the door.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      tech: ["Online Menu", "Reservations", "Google Maps"],
      demo: "https://restaurantconcept.vercel.app/",
      isInternal: false,
    },
    {
      title: "Capital City Roofing",
      category: "Roofing & Construction",
      description:
        "A professional high-converting landing page built for a Baton Rouge contractor to capture leads and showcase services.",
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
      tech: ["React.js", "Lead Gen", "Framer Motion"],
      demo: "/capital-city-roofing", // This path is used in the <a> tag
    },
    {
      title: "Barbershop Website",
      category: "Local Business",
      description:
        "Clean, modern design with an integrated booking system and service menu. Perfect for service-based businesses.",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      tech: ["Booking System", "Mobile Ready", "Gallery"],
      demo: "#",
      isInternal: false,
    },
  ];

  // RENDER THE ROOFING DEMO IF ACTIVE
  if (showRoofingDemo) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowRoofingDemo(false)}
          className="fixed bottom-8 right-8 z-[100] bg-[#00D4FF] text-[rgb(17,17,19)] px-6 py-4 rounded-full font-black shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </button>
        <CapitalCityRoofing />
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 bg-[rgb(26,28,30)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            Recent Results
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h3>
          <p className="text-[rgb(218,218,218)] text-lg max-w-2xl mx-auto">
            High-performance websites designed to help local businesses grow
            their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[rgb(17,17,19)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden hover:border-[#00D4FF] transition-all group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[rgb(17,17,19)] text-[#00D4FF] border border-[#00D4FF] text-xs px-2 py-1 rounded-md font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">
                  {project.title}
                </h4>
                <p className="text-[rgb(161,161,170)] text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest"
                    >
                      • {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 mt-auto">
                  {project.isInternal ? (
                    <button
                      onClick={() => setShowRoofingDemo(true)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all bg-[#00D4FF] text-[rgb(17,17,19)] hover:bg-[#00B8E6] shadow-lg shadow-[#00D4FF]/10"
                    >
                      <span>See Live Site</span>
                      <ExternalLink size={18} />
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) =>
                        project.demo === "#" && e.preventDefault()
                      }
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                        project.demo === "#"
                          ? "bg-[rgb(38,40,42)] text-[rgb(100,100,100)] cursor-not-allowed"
                          : "bg-[#00D4FF] text-[rgb(17,17,19)] hover:bg-[#00B8E6] shadow-lg shadow-[#00D4FF]/10"
                      }`}
                    >
                      <span>
                        {project.demo === "#" ? "Coming Soon" : "See Live Site"}
                      </span>
                      <ExternalLink size={18} />
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
