import React from 'react';
import { FileCode2, Palette, Clock, Check, ArrowRight } from 'lucide-react';
import { currentlyLearning } from '../data/portfolioData';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Active Study</span>
          </div>
          <h2
            id="currently-learning-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Currently Learning
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Expanding into frontend development to build interactive, responsive user experiences.
          </p>
          <div className="w-12 h-1 bg-amber-500 rounded-full mt-4" />
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {currentlyLearning.map((item) => (
            <div
              key={item.id}
              id={`learning-card-${item.id}`}
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200/60 dark:border-amber-900/60 group-hover:scale-105 transition-transform">
                  {item.id === 'html' ? (
                    <FileCode2 className="w-6 h-6" />
                  ) : (
                    <Palette className="w-6 h-6" />
                  )}
                </div>

                {/* Subtle "In Progress" Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  {item.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {item.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Topics list */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  Learning Objectives:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800"
                    >
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Forward momentum banner */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-indigo-500/10 border border-amber-200/40 dark:border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              Next Frontend Steps
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Once HTML & CSS fundamentals are solidified, transitioning into interactive JavaScript applications and projects.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-200 shrink-0">
            <span>Upcoming Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
          </span>
        </div>
      </div>
    </section>
  );
};
