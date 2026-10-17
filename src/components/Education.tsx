import React from 'react';
import {
  GraduationCap,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  BookOpen,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { educationList, allTechnologiesStudied } from '../data/educationData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-slate-100/60 dark:bg-[#070c18]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Education & Structured Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Academic Background & IT Programs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A verified timeline of formal studies and rigorous hands-on technical training programs in Karachi.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationList.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl transition-all duration-300 p-6 sm:p-9 ${
                item.isProminent
                  ? 'bg-gradient-to-br from-blue-50/90 via-white to-cyan-50/60 dark:from-[#0d172e] dark:via-[#0c1322] dark:to-[#08101e] border-2 border-blue-500/50 dark:border-cyan-400/50 shadow-xl relative overflow-hidden'
                  : 'bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-xs'
              }`}
            >
              {item.isProminent && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-blue-600 via-indigo-600 to-cyan-500 text-white text-[11px] font-mono uppercase tracking-wider py-1.5 px-5 rounded-bl-2xl font-bold shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>Current Active Pursuit</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Meta column (4 cols) */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>

                  {item.period && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.period}</span>
                      {item.statusBadge && (
                        <>
                          <span>·</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {item.statusBadge}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Details column (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Topics studied if present */}
                  {item.topics && item.topics.length > 0 && (
                    <div className="pt-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Curriculum Modules & Practical Tooling:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {item.topics.map((topic, tIdx) => (
                          <div
                            key={tIdx}
                            className="px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-mono text-[11px] shadow-2xs"
                          >
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Technologies Studied & Practiced Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white text-lg">
                Technologies Studied & Practiced Across Programs
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Applied in real-world assignments, responsive layouts, and modern frontend coursework.
              </p>
            </div>
            <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-bold whitespace-nowrap px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60">
              {allTechnologiesStudied.length} Tools & Languages
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {allTechnologiesStudied.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/70 px-3.5 py-2 rounded-xl shadow-2xs hover:border-blue-500/40 dark:hover:border-cyan-400/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
