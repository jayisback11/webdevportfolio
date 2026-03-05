import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';
import RoofingWebsite from '@/components/RoofingWebsite';

const Home = () => {
  return (
    <div className="min-h-screen bg-[rgb(17,17,19)]">
      <Hero />
      <Contact />
      <Projects />
      <Header />
      <About />
      <Skills />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;