import React from 'react';
import aastuLogo from '../assets/images.jpg';
import qiyasLogo from '../assets/qiyas.png';
import satcomLogo from '../assets/Satcom-icon.webp';

export default function Education() {
  return (
    <section id="education" className="bg-ethiopian-bg-solid py-24 border-b border-stone-800/60">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tight text-ethiopian-text-bright">
            Education & <span className="text-ethiopian-gold">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ethiopian-gold to-transparent rounded mt-2 mx-auto md:mx-0"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-stone-800 ml-4 md:ml-6 space-y-12">
          
          {/* 1. AASTU */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-ethiopian-bg-dark border-4 border-ethiopian-gold group-hover:border-ethiopian-text-bright transition-colors duration-300"></div>
            
            <div className="bg-ethiopian-bg-card border border-stone-800/80 rounded-2xl p-6 md:p-8 shadow-xl hover:border-ethiopian-gold/50 transition-all duration-300">
              <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-ethiopian-gold">
                    University Degree
                  </span>
                  <h3 className="text-xl font-extrabold text-ethiopian-text-bright">
                    Addis Ababa Science and Technology University (AASTU)
                  </h3>
                  <p className="text-base font-medium text-ethiopian-text-muted">
                    Electromechanical Engineering
                  </p>
                </div>
                
                {/* Bigger Logo container using images.jpg */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-stone-800 flex items-center justify-center overflow-hidden p-2 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={aastuLogo} 
                    alt="AASTU Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Qiyas */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-ethiopian-bg-dark border-4 border-ethiopian-gold group-hover:border-ethiopian-text-bright transition-colors duration-300"></div>
            
            <div className="bg-ethiopian-bg-card border border-stone-800/80 rounded-2xl p-6 md:p-8 shadow-xl hover:border-ethiopian-gold/50 transition-all duration-300">
              <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-ethiopian-gold">
                    Advanced Boot Camp
                  </span>
                  <h3 className="text-xl font-extrabold text-ethiopian-text-bright">
                    Qiyas
                  </h3>
                  <p className="text-base font-medium text-ethiopian-text-muted">
                    Fullstack Development
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {["HTML", "CSS", "JS", "React", "Tailwind", "Next.js", "MongoDB"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono bg-ethiopian-bg-inner border border-stone-800/60 rounded text-ethiopian-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Bigger Logo container using qiyas.png */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-stone-800 flex items-center justify-center overflow-hidden p-2 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={qiyasLogo} 
                    alt="Qiyas Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Satcom College */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-ethiopian-bg-dark border-4 border-ethiopian-gold group-hover:border-ethiopian-text-bright transition-colors duration-300"></div>
            
            <div className="bg-ethiopian-bg-card border border-stone-800/80 rounded-2xl p-6 md:p-8 shadow-xl hover:border-ethiopian-gold/50 transition-all duration-300">
              <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-ethiopian-gold">
                    Specialized Training
                  </span>
                  <h3 className="text-xl font-extrabold text-ethiopian-text-bright">
                    Satcom College
                  </h3>
                  <p className="text-base font-medium text-ethiopian-text-muted">
                    Frontend Development
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {["HTML", "CSS", "JavaScript"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono bg-ethiopian-bg-inner border border-stone-800/60 rounded text-ethiopian-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Bigger Logo container using Satcom-icon.webp */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-stone-800 flex items-center justify-center overflow-hidden p-2 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={satcomLogo} 
                    alt="Satcom College Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}