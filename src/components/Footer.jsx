import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-ethiopian-bg-dark border-t border-stone-800/80 px-6 py-12 text-ethiopian-text-muted">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-black tracking-wide text-ethiopian-text-bright">
              ሄኖክ ብርሃኑ
            </span>
            <span className="text-xs text-stone-700 font-mono">|</span>
            <span className="text-xs font-mono text-ethiopian-gold">[ Henok Birhanu ]</span>
          </div>
          <p className="text-[11px] font-mono text-stone-500 tracking-wider">
            © {currentYear} // ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex items-center space-x-6 text-xs font-mono tracking-wider">
          <a 
            href="https://github.com/henok2121u-lab/henok2121u-lab.git" 
            target="_blank" 
            rel="noreferrer" 
            className="text-stone-500 hover:text-ethiopian-text-bright transition-colors"
          >
            GitHub
          </a>
          <a 
            href="#hero" 
            className="inline-flex items-center space-x-1 text-ethiopian-gold hover:text-ethiopian-text-bright transition-colors"
          >
            <span>Back to Top</span>
            <span className="text-[10px]">↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}