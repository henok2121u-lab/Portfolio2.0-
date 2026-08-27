import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="bg-ethiopian-bg-solid py-24 border-b border-stone-800/60">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16 space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tight text-ethiopian-text-bright">
            Work <span className="text-ethiopian-gold">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ethiopian-gold to-transparent rounded mt-2 mx-auto md:mx-0"></div>
        </div>

        {/* Work Experience Card */}
        <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8 backdrop-blur-md">
          {/* Header: Role & Period */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-neutral-800/80 pb-4 mb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E6B749]">
                // Client Project
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Full-Stack Developer
              </h3>
              <p className="text-sm text-neutral-400 font-medium">
                Liyu Tech Engineering Work • <span className="text-neutral-500">Addis Ababa, Ethiopia</span>
              </p>
            </div>

            {/* Live Links */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <a
                href="https://liyutech.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 text-neutral-300 hover:text-[#E6B749] hover:border-[#E6B749] transition-all"
              >
                Landing ↗
              </a>
              <a
                href="https://store.liyutech.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 text-neutral-300 hover:text-[#E6B749] hover:border-[#E6B749] transition-all"
              >
                Storefront ↗
              </a>
              <a
                href="https://t.me/liyutechcustomerbot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 text-neutral-300 hover:text-[#E6B749] hover:border-[#E6B749] transition-all"
              >
                Telegram Bot ↗
              </a>
            </div>
          </div>

          {/* Experience Bullet Points */}
          <ul className="space-y-3 text-sm text-neutral-300 leading-relaxed list-disc list-outside pl-4 marker:text-[#E6B749]">
            <li>
              Built a full-stack monorepo web platform comprising a marketing site, an e-commerce storefront with catalog browsing and order tracking, and an internal admin dashboard.
            </li>
            <li>
              Developed a shared REST API using Node.js/Express and PostgreSQL to manage products, quote requests, and order statuses.
            </li>
            <li>
              Integrated custom Telegram bots and a Telegram Mini App for real-time customer notifications and mobile interactions.
            </li>
            <li>
              Implemented end-to-end bilingual localization (English and Amharic) across all public interfaces and dashboard modules.
            </li>
          </ul>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-neutral-800/60 font-mono text-xs">
            {["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Telegram API", "Monorepo"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-neutral-950/80 border border-neutral-800 text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
