import React from 'react';
import {
  FileText,
  Printer,
  Download,
  Eye,
  CheckCircle2,
  MapPin,
  Mail,
  GraduationCap,
  Layers,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const handleDirectPrint = () => {
    onOpenResumeModal();
    setTimeout(() => {
      window.print();
    }, 350);
  };

  return (
    <section id="resume" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient beam */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>Resume & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Curriculum Vitae & Summary.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive, ATS-compliant summary of capabilities, education, projects, and contact credentials.
          </p>
        </div>

        {/* Featured Resume Bento Card */}
        <div className="bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Top Banner with Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-100 dark:border-slate-800 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-emerald-700 dark:text-emerald-300 font-semibold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified ATS-Friendly Format</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                Amna Ali · Frontend Developer
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2 flex-wrap font-mono">
                <span>Karachi, Pakistan</span>
                <span>·</span>
                <span>{profileData.email}</span>
                <span>·</span>
                <span className="text-blue-600 dark:text-cyan-400 font-semibold">Available for Opportunities</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleDirectPrint}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-500/20 transition-all duration-200 active:scale-95 text-xs sm:text-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download / Print Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors text-xs sm:text-sm cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Interactive View</span>
              </button>
            </div>
          </div>

          {/* Quick Resume Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            
            {/* Column 1: Core Competencies */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold">
                <Layers className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>React.js & Hooks:</strong> Component hierarchies, useState, lifecycle flows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Tailwind CSS & CSS3:</strong> Responsive grids, dark mode, modern styling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>JavaScript (ES6+):</strong> DOM scripting, functions, events, async logic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Git & GitHub:</strong> Remote collaboration, version control, deployments.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Education & Programs */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Structured Education</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Saylani (SMIT):</strong> Modern Web Application Development (Frontend completed, continuing).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Governor House (GIAIC):</strong> TypeScript, Next.js, and Python coursework.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Govt Degree College for Women:</strong> Intermediate in Commerce (2021–2023).</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Key Milestones */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Projects & Milestones</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Noor Collections:</strong> Production-ready e-commerce layout with live GitHub Pages deployment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Interactive Apps:</strong> Background Color Changer, Currency Converter, Voting App.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">·</span>
                  <span><strong>Recognitions:</strong> Cisco HTML Essentials, SMIT Frontend module, FemHack Hackathon.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
            <span>
              Formatted cleanly for high readability and automated applicant tracking systems.
            </span>
            <button
              onClick={onOpenResumeModal}
              className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Preview complete one-page document</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
