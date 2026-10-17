import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { profileData, aboutData } from '../data/profileData';
import { educationList } from '../data/educationData';
import { skillsCategories } from '../data/skillsData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0c1322] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              Amna Ali · Professional Resume (ATS-Friendly)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans print:p-0 print:m-0">
          
          {/* Resume Header */}
          <header className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-heading">
                  AMNA ALI
                </h1>
                <div className="text-base font-semibold text-blue-700 uppercase tracking-wider mt-0.5">
                  Frontend Developer
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <a href={`mailto:${profileData.email}`} className="text-blue-700 underline">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-3 pt-0.5">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    GitHub: Amnaali1234
                  </a>
                  <span>·</span>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Passionate Frontend Developer based in Karachi, Pakistan, dedicated to engineering responsive, modern, and accessible web experiences. Solid foundation in HTML5, CSS3, modern JavaScript, and React.js, developed through rigorous training at Saylani Mass IT Training (SMIT) and Governor House (GIAIC). Experienced in building component-based user interfaces with Tailwind CSS and Git version workflows. Continually expanding skills with an aspirational path toward Full-Stack web engineering.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800">
              <div>
                <span className="font-bold">Core Web & Scripting:</span> HTML5 (Semantic Structure, SEO), CSS3 (Flexbox, Grid), JavaScript (ES6+, DOM, Asynchronous logic)
              </div>
              <div>
                <span className="font-bold">Frameworks & Styling:</span> React.js (Hooks, Components, State Architecture), Tailwind CSS, Bootstrap
              </div>
              <div>
                <span className="font-bold">Tools & Deployment:</span> Git, GitHub, Firebase, VS Code, Responsive Debugging
              </div>
              <div>
                <span className="font-bold">Specialized Coursework:</span> TypeScript, Next.js Concepts, Python Programming Logic
              </div>
            </div>
          </section>

          {/* Verified Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Key Projects
            </h2>
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>Noor Collections — E-Commerce Fashion Showcase</span>
                  <span className="text-slate-500 font-normal">HTML5 · CSS3 · JavaScript</span>
                </div>
                <div className="text-slate-700 mt-1 leading-snug">
                  Designed and developed a multi-device storefront highlighting responsive layout scaling, product presentation grids, and mobile-friendly interactions.
                </div>
                <div className="text-blue-700 mt-0.5 text-[11px]">
                  Live: https://amnaali1234.github.io/Noor_collections_website/ · GitHub: https://github.com/Amnaali1234/Noor_collections_website
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>Interactive React Web Applications Suite</span>
                  <span className="text-slate-500 font-normal">React.js · Tailwind CSS</span>
                </div>
                <div className="text-slate-700 mt-1 leading-snug">
                  Engineered practical utility applications including Background Color Changer (useState/event handlers), Dynamic Currency Converter (real-time calculations/form states), and Two-Candidate Voting App (live percentage calculation and tallying).
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>Personal Portfolio Web Application</span>
                  <span className="text-slate-500 font-normal">React · Tailwind CSS · Motion</span>
                </div>
                <div className="text-slate-700 mt-1 leading-snug">
                  Developed an editorial, accessible developer portfolio featuring dark/light mode persistence, live project simulators, verified credentials, and ATS resume printing.
                </div>
              </div>
            </div>
          </section>

          {/* Education & Training */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Education & Structured IT Programs
            </h2>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900">
                    Modern Web Application Development (Frontend Completed · Ongoing)
                  </div>
                  <div className="text-slate-600">Saylani Mass IT Training (SMIT), Karachi</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Curriculum: HTML, CSS, JavaScript, Bootstrap, Firebase, Git, GitHub, React.js, Tailwind CSS
                  </div>
                </div>
                <div className="text-slate-500 whitespace-nowrap font-mono text-[11px]">
                  Current Focus
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900">
                    GIAIC Specialized IT Training
                  </div>
                  <div className="text-slate-600">Governor House, Karachi</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Coursework: TypeScript, Next.js, Python
                  </div>
                </div>
                <div className="text-slate-500 whitespace-nowrap font-mono text-[11px]">
                  Learning Journey
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900">
                    Intermediate in Commerce
                  </div>
                  <div className="text-slate-600">Government Degree College for Women, Karachi</div>
                </div>
                <div className="text-slate-500 whitespace-nowrap font-mono text-[11px]">
                  2021 – 2023
                </div>
              </div>
            </div>
          </section>

          {/* Verified Certificates & Milestones */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Certificates & Recognitions
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              <li>
                <span className="font-medium text-slate-900">Modern Web Application Development (Frontend Module)</span> — Saylani Mass IT Training (SMIT)
              </li>
              <li>
                <span className="font-medium text-slate-900">HTML Essentials & Web Fundamentals</span> — Cisco Networking Academy
              </li>
              <li>
                <span className="font-medium text-slate-900">JavaScript Programming & DOM Fundamentals</span> — Web Development Coursework
              </li>
              <li>
                <span className="font-medium text-slate-900">FemHack Hackathon Participant</span> — Collaborative UI Hackathon
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
