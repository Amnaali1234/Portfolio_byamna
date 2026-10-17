import React from 'react';
import {
  Smartphone,
  Code2,
  Sparkles,
  LayoutTemplate,
  ArrowRight,
  Check,
  Layers,
  Wand2
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types/portfolio';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-500 dark:text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-500 dark:text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />;
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-6 h-6 text-violet-500 dark:text-violet-400" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-500" />;
    }
  };

  const handleDiscuss = (service: ServiceItem) => {
    onSelectServiceForContact(service.title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-slate-100/70 dark:bg-[#070c18]/90 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-violet-500/10 dark:from-blue-600/15 dark:via-cyan-400/15 dark:to-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Services & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            High-Fidelity Frontend Engineering.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dedicated frontend services focusing on responsive ergonomics, modern React component structures, and visual elegance.
          </p>
        </div>

        {/* 4 Distinctive Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/50 dark:hover:border-cyan-400/50 overflow-hidden"
            >
              {/* Large Watermark Number in Card Corner */}
              <div className="absolute -top-6 -right-3 text-7xl sm:text-8xl font-heading font-black text-slate-100 dark:text-slate-900/80 pointer-events-none select-none -z-0 group-hover:text-blue-50 dark:group-hover:text-slate-800/50 transition-colors">
                0{index + 1}
              </div>

              {/* Top Accent Gradient Border on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon Container with Dual-Tone Glow */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    Deliverables:
                  </div>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                      <div className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                  Have a project in mind?
                </span>
                <button
                  onClick={() => handleDiscuss(service)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50/80 dark:bg-blue-950/40 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-all cursor-pointer shadow-2xs"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
