import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface ContactProps {
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(prefilledSubject || '');
  const [message, setMessage] = useState('');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setSubject(`Discussing: ${prefilledSubject}`);
    }
  }, [prefilledSubject]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name.';
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!subject.trim()) newErrors.subject = 'Please enter a message subject.';
    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = 'Please write a message of at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Prepare mailto fallback URL
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Hi Amna,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open user's email client
    window.location.href = mailtoUrl;

    // Set submitted state
    setSubmittedSuccess(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-100/60 dark:bg-[#070c18]/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-violet-500/10 dark:from-blue-600/15 dark:via-cyan-400/15 dark:to-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
            <span>08</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Have an Idea? Let's Build Something Great.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            I'm always interested in learning, collaborating, and discussing meaningful web projects. Let's connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-3 relative group">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>Direct Email Contact</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 truncate transition-colors"
                >
                  {profileData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0 cursor-pointer shadow-2xs"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium animate-in fade-in">
                  Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Location & Status Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Base Location</span>
              </div>
              <div className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                {profileData.location}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {profileData.availability}
              </p>
            </div>

            {/* Social Profiles Grid */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Verified Social & Coding Profiles
              </div>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group border border-slate-200/60 dark:border-slate-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-2xs">
                      <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">
                        github.com/Amnaali1234
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group border border-slate-200/60 dark:border-slate-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center shadow-2xs">
                      <Linkedin className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">
                        linkedin.com/in/amna-ali
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>

                {/* WhatsApp */}
                <a
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group border border-slate-200/60 dark:border-slate-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center shadow-2xs">
                      <Send className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        WhatsApp (Direct Messaging)
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">
                        Configurable in profileData.ts
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 sm:p-9 shadow-xl relative">
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Fill out the form below. On submission, it prepares a pre-filled direct email message to Amna Ali via your preferred email client.
            </p>

            {submittedSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-xs">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-emerald-900 dark:text-emerald-200">
                  Ready to Dispatch!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed max-w-md mx-auto">
                  Your email client has been opened with your pre-filled message. You can also write directly to{' '}
                  <span className="font-mono font-bold">{profileData.email}</span>.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="mt-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/40 hover:bg-emerald-200 transition-colors cursor-pointer"
                >
                  Compose another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Khan"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Frontend Project Inquiry / Collaboration"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border ${
                      errors.subject
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, or idea..."
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md hover:shadow-cyan-500/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-1 font-mono">
                  Reliable mailto fallback ensures no missed messages.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
