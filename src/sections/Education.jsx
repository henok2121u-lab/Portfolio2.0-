import React from 'react';
import aastuLogo from '../assets/images.jpg';
import qiyasLogo from '../assets/qiyas.png';
import satcomLogo from '../assets/Satcom-icon.webp';

export default function Education() {
  // 1. Core Data Matrix (Decoupled Content)
  const educationList = [
    {
      category: "University Degree",
      institution: "Addis Ababa Science and Technology University (AASTU)",
      program: "Electromechanical Engineering",
      logo: aastuLogo,
      logoAlt: "AASTU Logo",
      techTags: [] // Empty array won't render any badge rows
    },
    {
      category: "Advanced Boot Camp",
      institution: "Qiyas",
      program: "Fullstack Development",
      logo: qiyasLogo,
      logoAlt: "Qiyas Logo",
      techTags: ["HTML", "CSS", "JS", "React", "Tailwind", "Next.js", "MongoDB"]
    },
    {
      category: "Specialized Training",
      institution: "Satcom College",
      program: "Frontend Development",
      logo: satcomLogo,
      logoAlt: "Satcom College Logo",
      techTags: ["HTML", "CSS", "JavaScript"]
    }
  ];

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

        {/* Timeline Line Container */}
        <div className="relative border-l border-stone-800 ml-4 md:ml-6 space-y-12">
          
          {/* 2. Dynamic Component Iteration */}
          {educationList.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              
              {/* Floating Node Point on Timeline Line */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-ethiopian-bg-dark border-4 border-ethiopian-gold group-hover:border-ethiopian-text-bright transition-colors duration-300"></div>
              
              {/* Content Card Wrapper */}
              <div className="bg-ethiopian-bg-card border border-stone-800/80 rounded-2xl p-6 md:p-8 shadow-xl hover:border-ethiopian-gold/50 transition-all duration-300">
                <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6">
                  
                  {/* Left Side text configurations */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-ethiopian-gold">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-ethiopian-text-bright">
                      {item.institution}
                    </h3>
                    <p className="text-base font-medium text-ethiopian-text-muted">
                      {item.program}
                    </p>
                    
                    {/* Conditional Tech Badge rendering block */}
                    {item.techTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3">
                        {item.techTags.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-0.5 text-[10px] font-mono bg-ethiopian-bg-inner border border-stone-800/60 rounded text-ethiopian-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Right Side Adaptive Logo Housing Container */}
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-stone-800 flex items-center justify-center overflow-hidden p-2 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={item.logo} 
                      alt={item.logoAlt} 
                      className="w-full h-full object-contain"
                    />
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}