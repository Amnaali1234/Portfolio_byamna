import React from 'react';
import {
  Code2,
  Layers,
  GraduationCap,
  Compass,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Target,
  Quote
} from 'lucide-react';
import { aboutData, profileData } from '../data/profileData';

export const About: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getPhaseIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-blue-500" />;
      case 1:
        return <Layers className="w-4 h-4 text-cyan-500" />;
      case 2:
        return <GraduationCap className="w-4 h-4 text-indigo-500" />;
      case 3:
        return <Compass className="w-4 h-4 text-violet-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Curious Learner, Dedicated to Frontend Craftsmanship.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A developer who values clarity, responsive fidelity, and clean code fundamentals.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Pull-Quote (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pull Quote Box */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-cyan-50/40 dark:from-[#0d1629] dark:via-[#0c1322] dark:to-[#081220] border-l-4 border-blue-600 dark:border-cyan-400 border border-slate-200 dark:border-slate-800 shadow-xs">
              <Quote className="w-6 h-6 text-blue-500 dark:text-cyan-400 mb-2 opacity-60" />
              <p className="font-heading font-semibold text-slate-800 dark:text-slate-100 text-base sm:text-lg leading-relaxed italic">
                "{aboutData.bioParagraphs[3]}"
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="text-slate-900 dark:text-slate-100 font-normal">
                {aboutData.bioParagraphs[0]}
              </p>
              <p>
                {aboutData.bioParagraphs[1]}
              </p>
              <p>
                {aboutData.bioParagraphs[2]}
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 dark:border-slate-800">
              {aboutData.personalPillars.map((pillar, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {pillar.label}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {pillar.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors cursor-pointer shadow-sm"
              >
                <span>View Selected Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <span>Start a Conversation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Journey Timeline & Aspirations Card (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base">
                  Development Journey
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Karachi, PK
              </span>
            </div>

            {/* Timeline */}
            <div className="mt-6 space-y-7 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-cyan-400 before:to-violet-600">
              {aboutData.learningPhases.map((phase, idx) => (
                <div key={idx} className="relative flex items-start gap-4 group">
                  <div className="relative z-10 w-7 h-7 rounded-full bg-white dark:bg-[#0b101c] border-2 border-blue-500 dark:border-cyan-400 flex items-center justify-center shrink-0 shadow-xs">
                    {getPhaseIcon(idx)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {phase.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Future Horizon Callout */}
            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5 bg-blue-50/50 dark:bg-slate-900/50 p-3.5 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Next Goal:</strong> Growing into a Full-Stack Developer by strengthening backend, API, and database architecture.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
