import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Memberships from './components/Memberships';
import Hours from './components/Hours';
import Contact from './components/Contact';
import AITrainer from './components/AITrainer';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-24 bg-zinc-900/50">
          <Services />
        </section>

        <section id="memberships" className="py-24 bg-zinc-950">
          <Memberships />
        </section>

        <section id="ai-trainer" className="py-24 bg-zinc-900/50">
          <AITrainer />
        </section>

        <section id="hours" className="py-24 bg-zinc-950">
          <Hours />
        </section>

        <section id="contact" className="py-24 bg-zinc-900/50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
