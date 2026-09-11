import React from 'react';
import { ArrowUp, Linkedin, Mail, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="main-footer"
      className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800">
          {/* Info with Profile Photo */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs shrink-0 bg-slate-900 flex items-center justify-center">
              <img
                id="footer-profile-photo"
                src="/assets/balaji%20linkedin.png"
                alt={personalInfo.name}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="hidden w-full h-full bg-gradient-to-tr from-sky-600 to-indigo-600 items-center justify-center text-white font-bold text-xs">
                NB
              </div>
            </div>
            <div className="space-y-1">
              <h3
                id="footer-name"
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
              >
                {personalInfo.name}
              </h3>
              <p
                id="footer-headline"
                className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400"
              >
                B.Tech CSE (AI) | Aspiring Software Developer
              </p>
              <p
                id="footer-location"
                className="flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-500 dark:text-slate-400"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personalInfo.location}</span>
              </p>
            </div>
          </div>

          {/* Social Icons & Back to top button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                id="footer-linkedin-icon"
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                id="footer-email-icon"
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              title="Back to top"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-sky-600 dark:hover:bg-sky-500 text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 text-center sm:text-left">
          <p id="footer-copyright">
            &copy; 2026 Naga Balaji Singh Bondili. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted for Student & Internship Opportunities</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
