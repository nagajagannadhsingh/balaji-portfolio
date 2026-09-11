import React from 'react';
import { GraduationCap, MapPin, Building2, Calendar, BookCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2
            id="education-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Education
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-3" />
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-3xl mx-auto">
          <div
            id="education-card"
            className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Ambient accent border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-t-2xl" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-medium mb-1">
                  <Calendar className="w-3 h-3" />
                  <span>Current: 2nd Year (Ongoing)</span>
                </div>
                <h3
                  id="education-degree"
                  className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
                >
                  B.Tech – Computer Science and Engineering (Artificial Intelligence)
                </h3>
              </div>

              <span className="shrink-0 self-start px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                2nd Year
              </span>
            </div>

            {/* College & Location details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                  <Building2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    Institution
                  </span>
                  <p
                    id="education-college"
                    className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 mt-0.5"
                  >
                    {personalInfo.college}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                  <MapPin className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    Location
                  </span>
                  <p
                    id="education-location"
                    className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 mt-0.5"
                  >
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Focus Context note */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <BookCheck className="w-4 h-4 text-sky-500 shrink-0" />
              <span>
                Undergraduate coursework covering Core Computing Fundamentals, Data Structures, Object-Oriented Paradigms, and AI principles.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
