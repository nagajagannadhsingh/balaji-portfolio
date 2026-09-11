import React from 'react';
import { User, Sparkles, BookOpen, Target, Brain, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Introduction</span>
          </div>
          <h2
            id="about-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-500/10 to-transparent rounded-bl-3xl pointer-events-none" />

              {/* Profile Photo & Identity Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-sky-500/30 shadow-md shrink-0 bg-slate-900">
                  <img
                    id="about-profile-photo"
                    src="/assets/balaji%20linkedin.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-600 dark:text-sky-400 font-semibold mt-0.5">
                    {personalInfo.headline}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {personalInfo.college} • {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalInfo.aboutText.map((paragraph, index) => (
                  <p key={index} id={`about-paragraph-${index + 1}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Philosophy Callout */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Growth Mindset
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    Focused on consistent practice, computational problem solving, and building durable software engineering habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillars & Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                  Academic Specialization
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Computer Science & Engineering with Artificial Intelligence (CSE-AI) at Sri Mittapalli College Of Engineering.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                  Technical Foundation
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Practical coursework and problem-solving in C Programming, Java, and Data Structures & Algorithms.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                  Continuous Expansion
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Actively learning modern web technologies starting with HTML & CSS to turn concepts into interactive software.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                  Aspiration
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Working diligently toward a professional career as a skilled Software Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
