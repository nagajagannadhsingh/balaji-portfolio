import React from 'react';
import {
  Award,
  Briefcase,
  Trophy,
  ExternalLink,
  Calendar,
  Sparkles,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  ACHIEVEMENTS,
  INTERNSHIPS,
  EXPERIENCES,
} from '../data/portfolioData';

export const FutureSections: React.FC = () => {
  const hasCertifications = CERTIFICATIONS && CERTIFICATIONS.length > 0;
  const hasAchievements = ACHIEVEMENTS && ACHIEVEMENTS.length > 0;
  const hasInternships = INTERNSHIPS && INTERNSHIPS.length > 0;
  const hasExperiences = EXPERIENCES && EXPERIENCES.length > 0;

  const hasAnyContent = hasCertifications || hasAchievements || hasInternships || hasExperiences;

  // If no content exists yet, we keep it clean without fake data as mandated
  if (!hasAnyContent) {
    return null;
  }

  return (
    <section id="credentials" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestones & Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Certifications & Experience
          </h2>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Internships & Experience */}
          {(hasInternships || hasExperiences) && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Experience & Internships</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...INTERNSHIPS, ...EXPERIENCES].map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-3">
                      {exp.company} {exp.location ? `• ${exp.location}` : ''}
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {hasCertifications && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Certifications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        {cert.issuer} • {cert.date}
                      </span>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1">
                        {cert.title}
                      </h4>
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {cert.skills.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-xs font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1 hover:underline"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {hasAchievements && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Key Achievements</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {ach.title}
                      </h4>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                        {ach.date}
                      </span>
                    </div>
                    <p className="text-xs text-sky-600 dark:text-sky-400 mt-0.5">{ach.event}</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
