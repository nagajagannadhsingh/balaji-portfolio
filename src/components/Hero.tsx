import React from 'react';
import { MapPin, Mail, Linkedin, ArrowDown, ChevronRight, GraduationCap, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-8 pb-16 lg:py-24 overflow-hidden"
    >
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Badge: Year & College */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/80 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-medium shadow-2xs">
              <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>2nd Year • {personalInfo.college}</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1
                id="hero-name"
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
              >
                {personalInfo.name}
              </h1>

              {/* Headline */}
              <h2
                id="hero-headline"
                className="text-lg sm:text-2xl font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-2 flex-wrap"
              >
                <span>{personalInfo.headline}</span>
              </h2>
            </div>

            {/* Supporting text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              {personalInfo.supportingText}
            </p>

            {/* Location */}
            <div
              id="hero-location"
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium"
            >
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                id="hero-journey-btn"
                onClick={() => scrollTo('journey')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-semibold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore My Journey</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 active:scale-95 text-slate-800 dark:text-slate-100 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Active Learning Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-200 dark:border-slate-800 w-full">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500">
                Connect Directly:
              </span>
              <div className="flex items-center gap-2">
                {/* LinkedIn */}
                <a
                  id="hero-linkedin-icon"
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-slate-800 dark:hover:text-sky-400 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Email */}
                <a
                  id="hero-email-icon"
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-slate-800 dark:hover:text-sky-400 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Code className="w-3.5 h-3.5 text-sky-500" />
                <span>Focus: C • Java • DSA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo / Placeholder */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ProfileAvatar />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <button
            id="hero-scroll-indicator"
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About Section"
            className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
