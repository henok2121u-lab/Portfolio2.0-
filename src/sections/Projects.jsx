import React from 'react';

export default function Projects() {
  const projectList = [
    { 
      title: "Portfolio Website", 
      description: "A high-end responsive showcase combining interactive UI modules with custom traditional digital layouts.", 
      tags: ["React", "Tailwind CSS", "Vite"],
      sourceLink: "https://github.com/henok7686-svg/j-portfolio-.git", // Linked to your repo
      liveLink: "https://j-portfolio-eta.vercel.app/"                  // Linked to your live domain
    },
    { 
      title: "Expense Tracker", 
      description: "A comprehensive ledger interface providing clear asset flow tracking, categorization tools, and dynamic balances.", 
      tags: ["React", "Node.js", "MongoDB"],
      sourceLink: "https://github.com/henok2121u-lab/Expense-tracker.git", 
      liveLink: "https://expense-tracker-xi-lime.vercel.app/" 
    },
    { 
      title: "Task Management App", 
      description: "A productivity board rendering operational card layouts, progress states, and responsive actions.", 
      tags: ["React", "Node.js", "Tailwind"],
      sourceLink: "#", 
      liveLink: "#" 
    },
    { 
      title: "E-Commerce Platform", 
      description: "A structured commerce portal detailing shopping arrays, seamless product filtering modules, and neat cart tracking.", 
      tags: ["MERN Stack", "Tailwind"],
      sourceLink: "https://github.com/fuadsalah3/merkato-store-sample.git", 
      liveLink: "https://merkato-store-sample.vercel.app/" 
    }
  ];

  return (
    <section id="projects" className="ethiopian-geo-pattern py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-16 space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tight text-ethiopian-text-bright">
            Featured <span className="text-ethiopian-gold">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ethiopian-gold to-transparent rounded mt-2 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectList.map((project, idx) => (
            <div key={idx} className="relative group">
              
              {/* Underlying shadow element offset */}
              <div className="absolute inset-0 bg-stone-950/40 border border-stone-900/60 rounded-2xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 -z-10"></div>
              
              <div className="bg-ethiopian-bg-card border border-stone-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full shadow-xl transition-all duration-300 group-hover:border-ethiopian-gold/50">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-800 pb-3">
                    <span>[ PRJ_0{idx + 1} ]</span>
                    <span className="text-ethiopian-gold font-semibold">// Full Stack</span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-ethiopian-text-bright group-hover:text-ethiopian-gold transition-colors pt-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-ethiopian-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[11px] font-mono bg-ethiopian-bg-inner text-ethiopian-text-muted border border-stone-800/40 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons dynamic reference mapping */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-800 text-xs font-bold uppercase tracking-wider">
                    <a 
                      href={project.sourceLink} 
                      target={project.sourceLink !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-ethiopian-text-bright transition-colors"
                    >
                      Source Code
                    </a>
                    <a 
                      href={project.liveLink} 
                      target={project.liveLink !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 bg-ethiopian-gold text-ethiopian-bg-dark rounded-md hover:bg-ethiopian-gold-light transition-colors"
                    >
                      <span>Live App ↗</span>
                    </a>
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