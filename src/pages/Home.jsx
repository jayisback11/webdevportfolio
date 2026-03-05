import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  // 1. State to track if any demo is active
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // 2. Effect to check if this tab was opened as a demo (Roofing or Barber)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const demoType = params.get("demo");
    
    // If there is any demo parameter in the URL, enable demo mode
    if (demoType === "roofing" || demoType === "barber") {
      setIsDemoOpen(true);
    }
  }, []);

  // 3. Conditional Render: If demo is open, show ONLY the Projects component
  // Projects.jsx will handle the internal logic of which specific site to show
  if (isDemoOpen) {
    return (
      <div className="min-h-screen bg-white">
        <Projects isDemoMode={true} setExternalDemoState={setIsDemoOpen} />
      </div>
    );
  }

  // 4. Standard Portfolio Render
  return (
    <div className="min-h-screen bg-[rgb(17,17,19)]">
      <Header />
      <Hero />
      <Projects isDemoMode={false} setExternalDemoState={setIsDemoOpen} />
      <Services />
      <Industries />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;