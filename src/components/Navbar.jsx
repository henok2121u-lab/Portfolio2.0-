import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-ethiopian-bg-dark/80 backdrop-blur-md border-b border-stone-800/60 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Name Branding */}
        <a href="#hero" className="flex flex-col group" onClick={() => setIsOpen(false)}>
          <span className="text-base font-black tracking-wide text-ethiopian-text-bright group-hover:text-ethiopian-gold transition-colors">
            ሄኖክ ብርሃኑ
          </span>
          <span className="text-[10px] font-mono tracking-widest text-ethiopian-gold uppercase">
            // HB_PORTFOLIO
          </span>
        </a>

        {/* Desktop Navigation Anchors (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase">
          <a 
            href="#skills" 
            className="text-ethiopian-text-muted hover:text-ethiopian-text-bright transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ethiopian-gold hover:after:w-full after:transition-all"
          >
            .skills()
          </a>
          <a 
            href="#education" 
            className="text-ethiopian-text-muted hover:text-ethiopian-text-bright transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ethiopian-gold hover:after:w-full after:transition-all"
          >
            .education()
          </a>
          <a 
            href="#projects" 
            className="text-ethiopian-text-muted hover:text-ethiopian-text-bright transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ethiopian-gold hover:after:w-full after:transition-all"
          >
            .projects()
          </a>
          
          {/* Desktop Contact Action Button */}
          <a 
            href="#contact" 
            className="ml-2 px-3.5 py-1.5 bg-ethiopian-gold text-ethiopian-bg-dark font-bold rounded-md hover:bg-ethiopian-gold-light transition-colors shadow-xs"
          >
            .contact()
          </a>
        </div>

        {/* Hamburger Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 text-ethiopian-text-bright hover:text-ethiopian-gold transition-colors"
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>

      </div>

      {/* Mobile Dropdown Menu Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-ethiopian-bg-dark/95 backdrop-blur-lg border-b border-stone-800/80 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-4 px-6 py-6 text-sm font-mono tracking-wider uppercase">
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="text-ethiopian-text-muted hover:text-ethiopian-gold transition-colors py-1 border-b border-stone-900/40"
          >
            .skills()
          </a>
          <a 
            href="#education" 
            onClick={() => setIsOpen(false)}
            className="text-ethiopian-text-muted hover:text-ethiopian-gold transition-colors py-1 border-b border-stone-900/40"
          >
            .education()
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="text-ethiopian-text-muted hover:text-ethiopian-gold transition-colors py-1 border-b border-stone-900/40"
          >
            .projects()
          </a>
          
          {/* Mobile Contact Button */}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-4 py-2 bg-ethiopian-gold text-ethiopian-bg-dark font-bold rounded-lg hover:bg-ethiopian-gold-light transition-colors shadow-md mt-2"
          >
            .contact()
          </a>
        </div>
      </div>
    </nav>
  );
}