import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, Info } from 'lucide-react';

export const StyleGuide = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="font-serif text-6xl md:text-8xl tracking-tight text-oxford">Style Guide</h1>
        <p className="text-xl text-oxford/60 max-w-2xl">
          A comprehensive design system for the MITS Gwalior digital redesign, focusing on elegance, clarity, and academic prestige.
        </p>
      </section>

      {/* Color Palette */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold rounded-lg" />
          <h2 className="font-serif text-4xl text-oxford">Color Palette</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Oxford Blue', hex: '#002147', class: 'bg-oxford', text: 'text-cream' },
            { name: 'Gold', hex: '#D4AF37', class: 'bg-gold', text: 'text-oxford' },
            { name: 'Cream', hex: '#FDFCF0', class: 'bg-cream', text: 'text-oxford', border: 'border border-oxford/10' },
            { name: 'Soft Peach', hex: '#F2E8E3', class: 'bg-[#f2e8e3]', text: 'text-oxford' },
          ].map((color) => (
            <div key={color.name} className="space-y-3">
              <div className={`aspect-square rounded-3xl ${color.class} ${color.border || ''} flex items-end p-4`}>
                <span className={`text-xs font-mono uppercase tracking-widest ${color.text}`}>{color.hex}</span>
              </div>
              <p className="font-medium text-oxford">{color.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-oxford rounded-lg" />
          <h2 className="font-serif text-4xl text-oxford">Typography</h2>
        </div>
        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Primary Display</p>
              <h3 className="font-serif text-5xl md:text-7xl leading-tight text-oxford">Playfair Display</h3>
              <p className="text-oxford/70 leading-relaxed">
                Used for headings, hero sections, and editorial content. It conveys tradition, authority, and elegance.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Body & UI</p>
              <h3 className="font-sans text-5xl md:text-7xl leading-tight text-oxford font-light">Inter</h3>
              <p className="text-oxford/70 leading-relaxed">
                Used for body text, navigation, and UI elements. It ensures high legibility and a modern, clean feel.
              </p>
            </div>
          </div>

          <div className="p-8 bg-white/50 rounded-[2.5rem] border border-oxford/5 space-y-6">
            <h1 className="font-serif text-5xl text-oxford">Heading 1 (5xl)</h1>
            <h2 className="font-serif text-4xl text-oxford">Heading 2 (4xl)</h2>
            <h3 className="font-serif text-3xl text-oxford">Heading 3 (3xl)</h3>
            <p className="text-lg text-oxford/80">Body Large (lg) - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-base text-oxford/80">Body Base (base) - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-sm text-oxford/60 uppercase tracking-widest font-bold">Micro Label (sm)</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          <h2 className="font-serif text-4xl text-oxford">Buttons</h2>
        </div>
        <div className="flex flex-wrap gap-6 items-center">
          <button className="px-8 py-4 bg-oxford text-cream rounded-full font-medium hover:bg-oxford/90 transition-all shadow-lg shadow-oxford/20 flex items-center gap-2 group">
            Primary Action <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-gold text-oxford rounded-full font-medium hover:bg-gold/90 transition-all shadow-lg shadow-gold/20">
            Secondary Action
          </button>
          <button className="px-8 py-4 border border-oxford text-oxford rounded-full font-medium hover:bg-oxford hover:text-cream transition-all">
            Outline Action
          </button>
          <button className="px-8 py-4 bg-[#f2e8e3] text-oxford rounded-full font-medium hover:bg-[#e8dcd5] transition-all">
            Ghost Action
          </button>
        </div>
      </section>

      {/* UI Components */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-oxford/5 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-oxford" />
          </div>
          <h2 className="font-serif text-4xl text-oxford">UI Components</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Card Example */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-oxford/40 font-bold">Standard Card</p>
            <div className="p-8 bg-white border border-oxford/10 rounded-[2rem] shadow-sm space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center">
                <Info className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-serif text-2xl text-oxford">Academic Excellence</h4>
              <p className="text-oxford/70 leading-relaxed">
                MITS Gwalior provides a world-class learning environment with state-of-the-art facilities.
              </p>
              <button className="text-sm font-bold text-oxford flex items-center gap-2 group">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Form Example */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-oxford/40 font-bold">Form Elements</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-oxford">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-6 py-4 bg-white border border-oxford/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-oxford">Department</label>
                <select className="w-full px-6 py-4 bg-white border border-oxford/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all appearance-none">
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Electronics</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing & Grid */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-oxford/5 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-oxford rounded-sm" />
          </div>
          <h2 className="font-serif text-4xl text-oxford">Spacing & Layout</h2>
        </div>
        <div className="p-8 bg-oxford text-cream rounded-[2.5rem] space-y-6">
          <p className="text-lg font-light leading-relaxed">
            We use a strict 8px grid system. Standard page padding is 24px (mobile) to 96px (desktop). 
            Section vertical spacing is typically 96px to 128px to allow the design to "breathe".
          </p>
          <div className="flex gap-4">
            <div className="h-12 w-8 bg-gold/30 rounded" />
            <div className="h-12 w-16 bg-gold/30 rounded" />
            <div className="h-12 w-24 bg-gold/30 rounded" />
            <div className="h-12 w-32 bg-gold/30 rounded" />
          </div>
        </div>
      </section>
    </div>
  );
};
