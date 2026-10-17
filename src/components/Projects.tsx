import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Play,
  Layers,
  Sparkles,
  ShoppingBag,
  Palette,
  Coins,
  Vote,
  Code2,
  Lock,
  Globe,
  Monitor,
  Smartphone,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

const categories = ['All', 'React Apps', 'Web Layouts', 'Utility Apps', 'Full Showcase'] as const;

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Mini live state for the cards to make them genuinely alive
  const [liveBgColor, setLiveBgColor] = useState('#2563eb');
  const [liveConvertAmount, setLiveConvertAmount] = useState(100);
  const [liveVoteA, setLiveVoteA] = useState(14);
  const [liveVoteB, setLiveVoteB] = useState(11);

  const totalVotes = liveVoteA + liveVoteB;
  const percentA = Math.round((liveVoteA / totalVotes) * 100);
  const percentB = 100 - percentA;

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
              <span>05</span>
              <span aria-hidden="true">·</span>
              <span>Selected Projects & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
              Crafted Interfaces & Interactive Applications.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              From full responsive storefront layouts to stateful React mini-apps with live interactive simulators.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Featured Flagship Showcase: Noor Collections (Wide Presentation) --- */}
        {(activeCategory === 'All' || activeCategory === 'Web Layouts') && (
          <div className="mb-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1122] to-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden group">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Flagship Meta & Info (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Featured Production Deployment</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight">
                  Noor Collections — Modern Apparel Storefront
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  A collection-focused e-commerce website demonstrating clean multi-device layout scaling, high-contrast apparel presentation, responsive product grids, and fluid navigation.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid', 'UI/UX'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://amnaali1234.github.io/Noor_collections_website/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>Visit Live Storefront</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com/Amnaali1234/Noor_collections_website"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => {
                      const p = projectsData.find((item) => item.id === 'noor-collections');
                      if (p) onOpenProjectModal(p);
                    }}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Read Technical Highlights
                  </button>
                </div>
              </div>

              {/* Flagship Visual: Photorealistic Browser Frame Preview (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-slate-950/90 border border-slate-700/80 shadow-2xl overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300">
                  
                  {/* Browser Chrome Header */}
                  <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Address Bar */}
                    <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2 text-[11px] font-mono text-slate-400 truncate">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">https://amnaali1234.github.io/Noor_collections_website/</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Simulated Storefront Page Viewport */}
                  <div className="p-5 sm:p-6 bg-gradient-to-b from-slate-900 via-[#0c1424] to-slate-950 space-y-4">
                    
                    {/* Storefront Mini Nav */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
                      <span className="font-heading font-bold tracking-widest text-white text-sm">
                        NOOR COLLECTIONS
                      </span>
                      <div className="hidden sm:flex items-center gap-4 text-slate-400 text-[11px]">
                        <span className="text-white">Summer Collection</span>
                        <span>Traditional</span>
                        <span>Pret</span>
                        <span>Sale</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 text-[10px] font-mono">
                        Bag (0)
                      </span>
                    </div>

                    {/* Hero Promo Banner */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/60 via-indigo-950/70 to-purple-900/60 border border-blue-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300">
                          Seasonal Edit · 2024
                        </span>
                        <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                          Luxury Pret & Handcrafted Elegance
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-xs text-xs font-semibold text-white whitespace-nowrap">
                        Explore Catalog
                      </span>
                    </div>

                    {/* Product Cards Row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                        <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-tr from-blue-950 to-indigo-900 flex items-center justify-center text-xs font-mono text-cyan-400">
                          Embroidered
                        </div>
                        <div className="text-[11px] font-semibold text-white truncate">Azure Lawn Set</div>
                        <div className="text-[10px] text-cyan-300 font-mono">PKR 5,400</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                        <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-tr from-indigo-950 to-purple-900 flex items-center justify-center text-xs font-mono text-purple-300">
                          Silk Edit
                        </div>
                        <div className="text-[11px] font-semibold text-white truncate">Floral Chiffon</div>
                        <div className="text-[10px] text-cyan-300 font-mono">PKR 6,800</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                        <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-tr from-cyan-950 to-blue-900 flex items-center justify-center text-xs font-mono text-cyan-300">
                          Formal
                        </div>
                        <div className="text-[11px] font-semibold text-white truncate">Classic Organza</div>
                        <div className="text-[10px] text-cyan-300 font-mono">PKR 8,200</div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- Grid of Other Projects with Distinct Interactive Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects
            .filter((p) => p.id !== 'noor-collections')
            .map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-500/40 relative"
              >
                <div>
                  
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500 mb-3">
                    <span>{project.category}</span>
                    {project.interactiveType && project.interactiveType !== 'none' && (
                      <span className="text-blue-600 dark:text-cyan-400 font-semibold flex items-center gap-1">
                        <Play className="w-3 h-3 fill-current" />
                        <span>Interactive App</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3
                    onClick={() => onOpenProjectModal(project)}
                    className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* --- Live Interactive Mini-Face inside the Card --- */}
                  <div className="my-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 overflow-hidden">
                    {project.id === 'bg-color-changer' && (
                      <div className="space-y-3">
                        <div
                          className="w-full h-20 rounded-xl flex items-center justify-center transition-all duration-300 shadow-inner"
                          style={{ backgroundColor: liveBgColor }}
                        >
                          <span className="text-white font-mono font-bold text-sm drop-shadow-sm">
                            {liveBgColor.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            Live Swatches:
                          </span>
                          <div className="flex gap-1.5">
                            {['#2563eb', '#059669', '#7c3aed', '#dc2626', '#0f172a'].map((c) => (
                              <button
                                key={c}
                                onClick={() => setLiveBgColor(c)}
                                className="w-5 h-5 rounded-full border border-white/40 shadow-xs cursor-pointer hover:scale-125 transition-transform"
                                style={{ backgroundColor: c }}
                                title={c}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 'currency-converter' && (
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between text-slate-500 font-mono text-[11px]">
                          <span>Live Exchange Demo</span>
                          <Coins className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                          <span className="font-mono text-slate-700 dark:text-slate-300">100 USD =</span>
                          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                            27,850.00 PKR
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 text-center font-mono">
                          USD ⇄ PKR · Real-time formula
                        </div>
                      </div>
                    )}

                    {project.id === 'voting-app' && (
                      <div className="space-y-2.5 text-xs">
                        <div className="flex justify-between text-[11px] font-mono text-slate-500">
                          <span>Ballot Interaction</span>
                          <button
                            onClick={() => {
                              setLiveVoteA(14);
                              setLiveVoteB(11);
                            }}
                            className="hover:text-blue-500 flex items-center gap-0.5 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" /> Reset
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setLiveVoteA((p) => p + 1)}
                            className="py-1.5 px-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 font-mono text-[11px] font-semibold text-center hover:bg-blue-100 transition-colors cursor-pointer"
                          >
                            A: {liveVoteA} ({percentA}%)
                          </button>
                          <button
                            onClick={() => setLiveVoteB((p) => p + 1)}
                            className="py-1.5 px-2 rounded-lg bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 font-mono text-[11px] font-semibold text-center hover:bg-violet-100 transition-colors cursor-pointer"
                          >
                            B: {liveVoteB} ({percentB}%)
                          </button>
                        </div>

                        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex">
                          <div className="bg-blue-600 transition-all duration-300" style={{ width: `${percentA}%` }} />
                          <div className="bg-violet-600 transition-all duration-300" style={{ width: `${percentB}%` }} />
                        </div>
                      </div>
                    )}

                    {project.id === 'portfolio-website' && (
                      <div className="p-3 text-center space-y-1">
                        <div className="text-xs font-heading font-bold text-slate-800 dark:text-slate-200">
                          Amna Ali Portfolio
                        </div>
                        <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                          React 19 + Tailwind CSS v4 + TypeScript
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Dark/Light Persistence & ATS Printable Resume
                        </div>
                      </div>
                    )}

                    {project.id === 'upcoming-slot' && (
                      <div className="p-4 text-center space-y-1 text-slate-400">
                        <Code2 className="w-6 h-6 mx-auto text-slate-400 mb-1" />
                        <div className="text-xs font-mono font-medium">Configurable Project Slot</div>
                        <div className="text-[11px]">Ready for upcoming React assignments</div>
                      </div>
                    )}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 italic">
                      <Lock className="w-3 h-3" />
                      <span>Configurable</span>
                    </span>
                  )}

                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Open Full Demo</span>
                  </button>
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
