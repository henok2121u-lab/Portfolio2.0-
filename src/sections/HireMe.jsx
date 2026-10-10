import React from 'react';
import { UPWORK_PROFILE_URL } from '../constants';

export default function HireMe() {
  return (
    <section id="hire" className="ethiopian-geo-pattern py-24 border-t border-stone-800/60">
      <div className="max-w-xl mx-auto px-6 text-center">

        {/* Header Block */}
        <div className="mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-ethiopian-gold">
            // open_for_work
          </span>
          <h2 className="text-3xl font-black tracking-tight text-ethiopian-text-bright">
            Let's Build <span className="text-ethiopian-gold">Together</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ethiopian-gold to-transparent rounded mt-2 mx-auto"></div>
          <p className="text-ethiopian-text-muted text-sm max-w-sm mx-auto pt-2 leading-relaxed">
            Available for freelance projects. Hire me on Upwork for secure contracts and payments.
          </p>
        </div>

        {/* Call-to-action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <a
            href={UPWORK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-ethiopian-gold text-ethiopian-bg-dark font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-ethiopian-gold-light transition-colors shadow-md"
          >
            Hire Me on Upwork ↗
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-ethiopian-bg-card border border-stone-800 text-ethiopian-text-bright font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:border-ethiopian-gold/40 transition-colors"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  );
}
