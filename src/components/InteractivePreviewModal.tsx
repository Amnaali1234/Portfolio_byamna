import React, { useState } from 'react';
import { X, ExternalLink, Github, RotateCcw, Check, Sparkles, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface InteractivePreviewModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const InteractivePreviewModal: React.FC<InteractivePreviewModalProps> = ({
  project,
  onClose
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0c1322] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Interactive Project Preview
            </div>
            <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close interactive preview"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* If the project has an embedded interactive simulator, render it! */}
          {project.interactiveType === 'color-changer' && <ColorChangerSimulator />}
          {project.interactiveType === 'currency-converter' && <CurrencyConverterSimulator />}
          {project.interactiveType === 'voting-app' && <VotingAppSimulator />}

          {/* Project Details & Overview */}
          <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Project Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Key Highlights
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {project.details.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-cyan-400 font-bold">·</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-slate-400">Tech Stack:</span>
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-[#080d1a] border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Role: {project.details.role}
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="text-slate-400 dark:text-slate-500 italic">
                GitHub: Configurable
              </span>
            )}

            {project.liveUrl && project.liveUrl !== '#home' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-slate-400 dark:text-slate-500 italic">
                Deployment: Configurable
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- Simulator 1: Background Color Changer Simulator --- */
function ColorChangerSimulator() {
  const [color, setColor] = useState('#2563eb');
  const presets = [
    { name: 'Royal Blue', hex: '#2563eb' },
    { name: 'Emerald', hex: '#059669' },
    { name: 'Violet', hex: '#7c3aed' },
    { name: 'Crimson', hex: '#dc2626' },
    { name: 'Midnight', hex: '#0f172a' },
    { name: 'Teal', hex: '#0d9488' }
  ];

  return (
    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
          Live Interactive Simulator (React useState + Style Bindings)
        </span>
        <button
          onClick={() => setColor('#2563eb')}
          className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Reactive Preview Box */}
      <div
        className="w-full h-36 rounded-xl flex flex-col items-center justify-center p-4 transition-all duration-300 shadow-inner"
        style={{ backgroundColor: color }}
      >
        <span className="text-white font-mono font-bold text-lg drop-shadow-md">
          {color.toUpperCase()}
        </span>
        <span className="text-white/80 text-xs drop-shadow-xs mt-1">
          Dynamically bound via React state
        </span>
      </div>

      {/* Preset Pickers */}
      <div className="space-y-2">
        <span className="text-xs text-slate-500 dark:text-slate-400">Quick Palette:</span>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.hex}
              onClick={() => setColor(p.hex)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.hex }} />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- Simulator 2: Dynamic Currency Converter Simulator --- */
function CurrencyConverterSimulator() {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');

  // Approximate baseline exchange rates relative to 1 USD
  const rates: Record<string, number> = {
    USD: 1,
    PKR: 278.5,
    EUR: 0.92,
    GBP: 0.78,
    AED: 3.67,
    SAR: 3.75
  };

  const calculateResult = () => {
    const fromRate = rates[fromCurrency] || 1;
    const toRate = rates[toCurrency] || 1;
    const inUSD = amount / fromRate;
    return (inUSD * toRate).toFixed(2);
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-4">
      <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
        Live Interactive Converter (State Management & Form Controls)
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 items-center">
        {/* Amount Input */}
        <div className="sm:col-span-2 space-y-1">
          <label className="text-[11px] font-mono text-slate-500">Amount</label>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono"
          />
        </div>

        {/* From Currency */}
        <div className="sm:col-span-2 space-y-1">
          <label className="text-[11px] font-mono text-slate-500">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
          >
            {Object.keys(rates).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="sm:col-span-1 flex justify-center pt-4">
          <button
            onClick={handleSwap}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            title="Swap Currencies"
          >
            ⇄
          </button>
        </div>

        {/* To Currency */}
        <div className="sm:col-span-2 space-y-1">
          <label className="text-[11px] font-mono text-slate-500">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
          >
            {Object.keys(rates).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Calculated Result Card */}
      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 dark:text-slate-400">Converted Value:</span>
          <div className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">
            {calculateResult()} {toCurrency}
          </div>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          1 {fromCurrency} ≈ {(rates[toCurrency] / rates[fromCurrency]).toFixed(3)} {toCurrency}
        </span>
      </div>
    </div>
  );
}

/* --- Simulator 3: Two-Candidate Voting App Simulator --- */
function VotingAppSimulator() {
  const [candidateAVotes, setCandidateAVotes] = useState(12);
  const [candidateBVotes, setCandidateBVotes] = useState(9);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = candidateAVotes + candidateBVotes;
  const percentA = totalVotes > 0 ? Math.round((candidateAVotes / totalVotes) * 100) : 50;
  const percentB = 100 - percentA;

  const handleVote = (candidate: 'A' | 'B') => {
    if (candidate === 'A') setCandidateAVotes((p) => p + 1);
    if (candidate === 'B') setCandidateBVotes((p) => p + 1);
    setHasVoted(true);
  };

  const handleReset = () => {
    setCandidateAVotes(12);
    setCandidateBVotes(9);
    setHasVoted(false);
  };

  return (
    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
          Live Voting Interface (Dynamic Tally & Proportions)
        </span>
        <button
          onClick={handleReset}
          className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> Reset Poll
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Candidate A Card */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-cyan-400 font-bold mx-auto flex items-center justify-center font-mono text-sm">
            01
          </div>
          <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
            Frontend Innovation
          </h5>
          <div className="text-xl font-mono font-bold text-blue-600 dark:text-cyan-400">
            {candidateAVotes} <span className="text-xs font-normal text-slate-500">votes</span>
          </div>
          <button
            onClick={() => handleVote('A')}
            className="w-full py-2 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Vote for #01
          </button>
        </div>

        {/* Candidate B Card */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/60 text-violet-600 dark:text-violet-400 font-bold mx-auto flex items-center justify-center font-mono text-sm">
            02
          </div>
          <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
            UI Architecture
          </h5>
          <div className="text-xl font-mono font-bold text-violet-600 dark:text-violet-400">
            {candidateBVotes} <span className="text-xs font-normal text-slate-500">votes</span>
          </div>
          <button
            onClick={() => handleVote('B')}
            className="w-full py-2 rounded-lg text-xs font-medium text-white bg-violet-600 hover:bg-violet-700 transition-colors cursor-pointer"
          >
            Vote for #02
          </button>
        </div>
      </div>

      {/* Results Bar */}
      <div className="space-y-1.5 pt-2">
        <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
          <span>#01 ({percentA}%)</span>
          <span>Total: {totalVotes}</span>
          <span>#02 ({percentB}%)</span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex">
          <div
            className="bg-blue-600 dark:bg-cyan-500 transition-all duration-300"
            style={{ width: `${percentA}%` }}
          />
          <div
            className="bg-violet-600 dark:bg-violet-400 transition-all duration-300"
            style={{ width: `${percentB}%` }}
          />
        </div>
      </div>
    </div>
  );
}
