import React from 'react';

export default function AboutSkills() {
  const skillCategories = [
    { title: "Frontend Development", skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
    { title: "Backend & Database", skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Telegram Bot API"] },
    { title: "DevOps & Deployment", skills: ["Docker", "Dokploy", "Hostinger VPS", "Linux", "Nginx", "Cloudflare", "Vercel"] },
    { title: "Tools & Ecosystem", skills: ["Git", "GitHub", "Vite", "VS Code", "Postman"] }
  ];

  return (
    /* CHANGED: Removed ethiopian-geo-pattern, added bg-ethiopian-bg-solid */
    <section id="skills" className="bg-ethiopian-bg-solid py-24 text-ethiopian-text-dark border-b border-stone-300/40">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-16 space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tight text-ethiopian-text-bright">
            Skills & <span className="text-ethiopian-gold-dark">Toolbox</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ethiopian-gold to-transparent rounded mt-2 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="relative bg-ethiopian-bg-card border border-stone-800/80 rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_-10px_rgba(179,143,77,0.12)] hover:border-ethiopian-gold/50 transition-all duration-300 pt-10"
            >
              <div className="absolute top-0 left-6 w-12 h-1 bg-ethiopian-gold"></div>
              
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-ethiopian-gold-dark mb-6">
                // {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-xs font-semibold bg-ethiopian-bg-inner text-ethiopian-text-muted border border-stone-800/60 rounded-lg hover:border-ethiopian-gold/60 hover:text-ethiopian-text-bright transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}