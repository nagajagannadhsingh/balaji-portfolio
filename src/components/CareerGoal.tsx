import React from 'react';
import { Target, BookOpen, Code2, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { personalInfo, careerStages } from '../data/portfolioData';

export const CareerGoal: React.FC = () => {
  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-sky-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      default:
        return <Target className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="career-goal" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-gradient-to-r from-sky-400/5 via-indigo-500/10 to-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Vision & Purpose</span>
          </div>
          <h2
            id="career-goal-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Career Goal
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-4" />
        </div>

        {/* Highlight Banner */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Primary Aspiration</span>
            </div>

            <h3
              id="career-goal-statement"
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Becoming a Skilled Software Developer
            </h3>

            <p
              id="career-goal-supporting-text"
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              My goal is to build strong foundations in computer science, improve my problem-solving skills, gain practical development experience, and eventually contribute to real-world software projects.
            </p>
          </div>
        </div>

        {/* Subtle Visual Flow: Learn -> Build -> Improve -> Contribute */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Development Lifecycle Progression
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {careerStages.map((stage, idx) => (
              <div
                key={stage.stage}
                id={`career-stage-${stage.label.toLowerCase()}`}
                className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getStageIcon(stage.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      Phase {stage.stage}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {stage.label}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Arrow connector on desktop */}
                {idx < careerStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 shadow-xs">
                    <ArrowRight className="w-3 h-3 text-sky-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
