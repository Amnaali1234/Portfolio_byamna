import React from 'react';
import {
  FileCode,
  Palette,
  FileJson,
  Atom,
  Wind,
  LayoutGrid,
  GitBranch,
  Github,
  Flame,
  Code,
  Globe,
  Terminal,
  CheckCircle2,
  Cpu,
  Sparkles
} from 'lucide-react';
import { skillsCategories, skillsStatement } from '../data/skillsData';

export const Specialization: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-orange-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-500" />;
      case 'FileJson':
        return <FileJson className="w-5 h-5 text-amber-500" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-cyan-500" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-teal-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-purple-500" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-orange-600" />;
      case 'Github':
        return <Github className="w-5 h-5 text-slate-800 dark:text-slate-200" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="specialization" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Specialization & Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Frontend Development Discipline.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive overview of competencies organized by domain, without artificial progress bars or inflated metrics.
          </p>
        </div>

        {/* Developer Philosophy Callout */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-cyan-50/40 dark:from-[#0d1629] dark:via-[#0c1322] dark:to-[#081220] border border-blue-500/30 dark:border-cyan-500/30 shadow-md relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold mb-1">
                Engineering Statement
              </div>
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                "{skillsStatement}"
              </p>
            </div>
          </div>
        </div>

        {/* 4 Skill Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-blue-500/40 dark:hover:border-cyan-500/40 hover:shadow-lg transition-all"
            >
              <div>
                {/* Category Header */}
                <div className="pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
                    Category 0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Cards within Category */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-2xs group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 font-semibold">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {skill.levelDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                {cat.skills.length} competencies listed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
