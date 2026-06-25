import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mykqepkq');

  return (
    <section id="contact" className="bg-ethiopian-bg-solid py-24 border-t border-stone-800/60">
      <div className="max-w-xl mx-auto px-6 text-center">
        
        {/* Header Block */}
        <div className="mb-10 space-y-2">
          <h2 className="text-3xl font-black tracking-tight text-ethiopian-text-bright">
            Let's Build <span className="text-ethiopian-gold">Together</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ethiopian-gold to-transparent rounded mt-2 mx-auto"></div>
          <p className="text-ethiopian-text-muted text-sm max-w-sm mx-auto pt-2">
            Open for internships, collaborative engineering projects, or full-stack web development discussions.
          </p>
        </div>

        {/* Form Panel Container */}
        <div className="bg-ethiopian-bg-card border border-stone-800 shadow-2xl rounded-2xl p-8 text-left">
          
          {state.succeeded ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-extrabold text-ethiopian-text-bright font-mono">
                Message Sent!
              </h3>
              <p className="text-ethiopian-text-muted text-sm font-medium max-w-xs mx-auto">
                Thank you for reaching out. I'll review your transmission and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-ethiopian-gold mb-1">
                  .name()
                </label>
                <input 
                  id="name"
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-2.5 bg-ethiopian-bg-inner border border-stone-800/80 rounded-xl text-sm text-ethiopian-text-bright focus:outline-none focus:border-ethiopian-gold transition-colors" 
                  placeholder="Your Name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 font-mono mt-1 block" />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-ethiopian-gold mb-1">
                  .email()
                </label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-2.5 bg-ethiopian-bg-inner border border-stone-800/80 rounded-xl text-sm text-ethiopian-text-bright focus:outline-none focus:border-ethiopian-gold transition-colors" 
                  placeholder="your.email@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 font-mono mt-1 block" />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-ethiopian-gold mb-1">
                  .message()
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4" 
                  required
                  className="w-full px-4 py-2.5 bg-ethiopian-bg-inner border border-stone-800/80 rounded-xl text-sm text-ethiopian-text-bright focus:outline-none focus:border-ethiopian-gold transition-colors resize-none" 
                  placeholder="Let's connect..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 font-mono mt-1 block" />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full py-3 bg-ethiopian-gold text-ethiopian-bg-dark font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-ethiopian-gold-light disabled:bg-stone-800 disabled:text-stone-600 transition-colors shadow-md cursor-pointer disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending_Transmission..." : "Send_Message_"}
              </button>
              
            </form>
          )}

        </div>

      </div>
    </section>
  );
}