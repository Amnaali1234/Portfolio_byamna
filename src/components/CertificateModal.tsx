import React from 'react';
import { X, Award, CheckCircle, ExternalLink, ShieldCheck, Printer } from 'lucide-react';
import { CertificateItem } from '../types/portfolio';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white dark:bg-[#0c1322] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <span className="font-heading font-bold text-slate-900 dark:text-white text-base">
              Certificate Document View
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Rendered Document Frame */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-[#080d19]">
          <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#0d1527] border-2 border-slate-300 dark:border-slate-700 shadow-sm relative text-center space-y-4">
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-blue-500" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-500" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-blue-500" />

            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified Learning Document</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white px-4">
              {certificate.title}
            </h3>

            <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
              Issued by {certificate.issuer}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              {certificate.description}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Date: {certificate.date || 'Coursework Record'}</span>
              <span>ID: {certificate.credentialId || 'VERIFIED'}</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#0c1322] border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Category: {certificate.category}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
