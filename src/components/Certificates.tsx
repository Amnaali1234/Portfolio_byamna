import React from 'react';
import {
  Award,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ShieldCheck,
  FileBadge2,
  PlusCircle,
  Eye,
  FileText
} from 'lucide-react';
import { certificatesList } from '../data/certificatesData';
import { CertificateItem } from '../types/portfolio';

interface CertificatesProps {
  onOpenCertificateModal: (certificate: CertificateItem) => void;
}

export const Certificates: React.FC<CertificatesProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="certificates" className="py-24 md:py-32 bg-slate-100/60 dark:bg-[#070c18]/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Certificates & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Verified Learning Documents.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Official coursework achievements, workshop recognitions, and structured training milestones.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificatesList.map((cert) => {
            const isPlaceholder = !cert.verified;

            return (
              <div
                key={cert.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  isPlaceholder
                    ? 'border-2 border-dashed border-slate-300 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30'
                    : 'bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-cyan-400/50 group'
                }`}
              >
                {/* Subtle Guilloche Stamp in background */}
                {!isPlaceholder && (
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-blue-500/10 dark:border-cyan-400/10 pointer-events-none flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-dashed border-blue-500/15 dark:border-cyan-400/15" />
                  </div>
                )}

                <div>
                  {/* Card Header with Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isPlaceholder
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                          : 'bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-blue-950/60 dark:to-cyan-950/60 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-800/60 shadow-2xs'
                      }`}
                    >
                      {isPlaceholder ? (
                        <PlusCircle className="w-5 h-5" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      {isPlaceholder ? (
                        <span className="text-slate-400 dark:text-slate-500">
                          Pending Slot
                        </span>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                    {cert.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="mt-2 text-xs font-semibold text-blue-600 dark:text-cyan-400">
                    Issued by {cert.issuer}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.date || 'Verified'}</span>
                    </div>
                    {cert.credentialId && (
                      <span className="text-[10px] text-slate-400">
                        {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  {isPlaceholder ? (
                    <div className="text-xs text-slate-400 dark:text-slate-500 italic text-center py-1">
                      Configurable in src/data/certificatesData.ts
                    </div>
                  ) : (
                    <button
                      onClick={() => onOpenCertificateModal(cert)}
                      className="w-full py-3 rounded-2xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Official Credential</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
