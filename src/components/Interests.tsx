import React from 'react';
import { Heart, Compass, Sparkles } from 'lucide-react';
import { personalInterests } from '../data/portfolioData';

export const Interests: React.FC = () => {
  return (
    <section
      id="interests"
      className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent dark:via-slate-900/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Personal Life</span>
          </div>
          <h2
            id="interests-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Beyond Coding
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Activities and stories that keep me energized, inspired, and balanced outside academic studies.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Interests Cards - Visually distinct from tech sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {personalInterests.map((interest) => (
            <div
              key={interest.id}
              id={`interest-card-${interest.id}`}
              className="relative group rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top color splash */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 via-sky-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Emoji Avatar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span role="img" aria-label={interest.title}>
                      {interest.emoji}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {interest.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {interest.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {interest.description}
                </p>
              </div>

              {/* Extra perspective */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Why I love it:</span>
                </div>
                <p>{interest.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
