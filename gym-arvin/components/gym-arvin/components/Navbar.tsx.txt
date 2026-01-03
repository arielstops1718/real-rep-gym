import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'AI Trainer', href: '#ai-trainer' },
    { name: 'Hours', href: '#hours' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-red-600">
          ARVIN<span className="text-zinc-100">REPS</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold hover:text-red-500 transition-colors text-zinc-300">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-all transform hover:scale-105">
            Join Our Community
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl focus:outline-none">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 absolute top-full left-0 w-full py-8 px-6 space-y-4 shadow-2xl border-t border-zinc-800 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-semibold hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-center">
            Join Our Community
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;