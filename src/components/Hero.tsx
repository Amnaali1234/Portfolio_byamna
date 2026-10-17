import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Send,
  Code2,
  Atom,
  Wind,
  GitBranch,
  Camera,
  MapPin,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { heroDetails, profileData } from '../data/profileData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typing animation state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Live Karachi time
  const [karachiTime, setKarachiTime] = useState('');

  // Optional local photo preview (if user uploads a photo)
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).format(new Date());
        setKarachiTime(timeStr);
      } catch (e) {
        setKarachiTime('PKT (UTC+5)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentFullText = heroDetails.typingRoles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(45);
      }, 2400);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % heroDetails.typingRoles.length);
      setTypingSpeed(100);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Dynamic Ambient Background Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.18),rgba(6,182,212,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.22),rgba(99,102,241,0.15),transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-500/10 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* Status Beacon & Eyebrow */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/60 backdrop-blur-xs text-xs font-medium text-blue-700 dark:text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Opportunities</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Karachi, PK</span>
                {karachiTime && (
                  <>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{karachiTime}</span>
                  </>
                )}
              </div>
            </div>

            {/* Main Headline with High-Impact Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-heading font-bold text-slate-900 dark:text-white tracking-tight leading-[1.06] text-balance">
              Crafting Modern{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Digital Experiences.
              </span>
            </h1>

            {/* Dynamic Typing Role Box */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 min-h-[40px]">
              <span className="text-slate-500 dark:text-slate-400 font-normal">I build as a</span>
              <span className="text-blue-600 dark:text-cyan-400 border-r-2 border-blue-600 dark:border-cyan-400 pr-1 animate-pulse font-heading">
                {displayText || '\u00A0'}
              </span>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {heroDetails.description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md hover:shadow-cyan-500/20 transition-all duration-200 active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 shadow-xs transition-all duration-200 active:scale-95 text-sm sm:text-base cursor-pointer backdrop-blur-xs"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Third CTA: Let's Connect */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm sm:text-base cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links Ribbon with Subtle Hover Pill */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700/90 transition-all shadow-2xs"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 bg-slate-100/80 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700/90 transition-all shadow-2xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 bg-slate-100/80 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700/90 transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Contact"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-emerald-500 bg-slate-100/80 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700/90 transition-all shadow-2xs"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>

            {/* Core Technology Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
              <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px] uppercase tracking-wider mr-1">
                Core Stack:
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 font-medium shadow-2xs">
                <Atom className="w-3.5 h-3.5 text-cyan-500" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 font-medium shadow-2xs">
                <Code2 className="w-3.5 h-3.5 text-amber-500" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 font-medium shadow-2xs">
                <Wind className="w-3.5 h-3.5 text-sky-500" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 font-medium shadow-2xs">
                <GitBranch className="w-3.5 h-3.5 text-orange-500" />
                <span>Git</span>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Layered Visual Console Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Background Aura behind photo frame */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600/25 via-cyan-400/25 to-violet-600/25 blur-3xl -z-10" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Main Center Console Card */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/40 via-cyan-400/25 to-violet-600/35 dark:from-cyan-400/30 dark:via-blue-500/20 dark:to-violet-500/30 shadow-2xl backdrop-blur-xl">
                <div className="w-full rounded-[22px] bg-white/90 dark:bg-[#0c1322]/90 border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-7 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                  
                  {/* Subtle Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                  {customPhotoUrl ? (
                    <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md mb-4 border border-slate-200 dark:border-slate-700">
                      <img
                        src={customPhotoUrl}
                        alt="Amna Ali - Frontend Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      {/* Monogram Seal with Concentric Orbit Rings */}
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-5 flex items-center justify-center">
                        {/* Outer rotating ring */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/40 dark:border-cyan-400/40 animate-[spin_24s_linear_infinite]" />
                        
                        {/* Inner glowing pill badge */}
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full rounded-[14px] bg-slate-50 dark:bg-[#070b14] flex flex-col items-center justify-center relative overflow-hidden">
                            <span className="font-heading font-bold text-4xl sm:text-5xl bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-400 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                              AA
                            </span>
                            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
                              AMNA ALI
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Name & Credentials */}
                      <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                        Amna Ali
                      </h3>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mt-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Frontend Developer</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-[220px]">
                        Karachi, Pakistan · React.js & Modern Web Architecture
                      </p>

                      {/* Photo Replacement Action */}
                      <label className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700 shadow-2xs">
                        <Camera className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
                        <span>Upload / Replace Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                          aria-label="Upload Amna Ali photo"
                        />
                      </label>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                        (Client-side preview placeholder)
                      </span>
                    </>
                  )}

                  {/* Corner Accent Decorators */}
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-blue-500/70" />
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-500/70" />
                  <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-indigo-500/70" />
                  <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-violet-500/70" />
                </div>
              </div>

              {/* Satellite Floating Badge 1 (Top Left) */}
              <div className="hidden sm:flex absolute -top-4 -left-6 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-700/80 shadow-lg backdrop-blur-md items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200 animate-bounce duration-[4000ms]">
                <Atom className="w-4 h-4 text-cyan-500 animate-spin duration-[12000ms]" />
                <span className="font-mono">React 19 Ready</span>
              </div>

              {/* Satellite Floating Badge 2 (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-5 -right-6 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-700/80 shadow-lg backdrop-blur-md items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Responsive & Clean UI</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 lg:mt-20 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-xs">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 group hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="font-mono uppercase tracking-widest text-[11px]">
              Explore
            </span>
            <div className="w-6 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-start justify-center p-1">
              <div className="w-1.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-bounce mt-1" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
