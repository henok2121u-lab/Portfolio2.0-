import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutSkills from './sections/AboutSkills';
import Education from './sections/Education'; 
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ethiopian-bg-dark text-ethiopian-text-muted selection:bg-ethiopian-gold/30 selection:text-ethiopian-text-bright antialiased">
      <Navbar />
      <Hero />
      <AboutSkills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}