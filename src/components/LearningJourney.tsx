import React from 'react';
import { Route, CheckCircle, Clock, Sparkles, Milestone } from 'lucide-react';
import { learningJourneySteps } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <Route className="w-3.5 h-3.5" />
            <span>Progression</span>
          </div>
          <h2
            id="journey-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            My Learning Journey
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4" />
        </div>

        {/* Narrative Box */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <p
              id="journey-description-text"
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic"
            >
              &ldquo;Every developer starts somewhere. I am currently strengthening my programming fundamentals, improving my problem-solving abilities, and exploring web development. My portfolio will continue to grow as I turn what I learn into real projects.&rdquo;
            </p>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-500 to-slate-300 dark:to-slate-800" />

          {/* Left line (mobile) */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-500 to-slate-300 dark:to-slate-800" />

          <div className="space-y-8 sm:space-y-12">
            {learningJourneySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isComingSoon = step.status === 'Coming Soon';
              const isCompleted = step.status === 'Completed';

              return (
                <div
                  key={step.step}
                  id={`journey-step-${step.step}`}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12 pl-12 md:pl-0`}
                >
                  {/* Step Marker Badge */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 flex items-center justify-center shadow-md z-10">
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    ) : isComingSoon ? (
                      <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                    ) : (
                      <Clock className="w-4 h-4 text-sky-500" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-6' : 'md:pr-6'}`}>
                    <div
                      className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 hover:shadow-md ${
                        isComingSoon
                          ? 'border-dashed border-indigo-300 dark:border-indigo-800/80 bg-indigo-50/20 dark:bg-indigo-950/10'
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {step.step}
                        </span>

                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            isCompleted
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                              : isComingSoon
                              ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                              : 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60'
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {step.subtitle}
                      </h4>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
