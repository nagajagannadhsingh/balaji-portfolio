import React from 'react';
import {
  FileText,
  Clock,
  ExternalLink,
  Download,
  GraduationCap,
  Code2,
  Cpu,
  CheckCircle2,
  FileCheck,
  AlertCircle,
} from 'lucide-react';
import { RESUME_CONFIG, personalInfo } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const isResumeAvailable = Boolean(RESUME_CONFIG.resumeUrl && RESUME_CONFIG.resumeUrl.trim() !== '');
  const resumeHref = RESUME_CONFIG.resumeUrl || '#';
  const downloadFileName = RESUME_CONFIG.fileName || `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;

  return (
    <section
      id="resume"
      className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2
            id="resume-section-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {isResumeAvailable ? 'Resume & Credentials' : 'Resume Coming Soon'}
          </h2>

          <p
            id="resume-section-subtext"
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
          >
            {isResumeAvailable
              ? 'Access my verified resume detailing academic coursework, engineering fundamentals, and technical problem-solving competencies.'
              : "I'm currently building my academic and technical experience. My resume will be available here as I continue developing my skills and completing projects."}
          </p>

          <div className="w-12 h-1 bg-sky-500 rounded-full mt-4" />
        </div>

        {/* Resume Card Layout */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10 transition-all duration-300">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Document Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-600/20">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      PDF
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    B.Tech CSE (AI) • {personalInfo.college}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border self-start sm:self-center transition-colors">
                {isResumeAvailable ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60 px-2 py-0.5 rounded-full">
                    <FileCheck className="w-3.5 h-3.5" />
                    Verified PDF
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/60 px-2 py-0.5 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    In Preparation
                  </span>
                )}
              </div>
            </div>

            {/* Stylized Document Summary Grid */}
            <div className="py-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Academic Snapshot */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Education
                    </span>
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      2nd Year B.Tech
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                      CSE (AI)
                    </span>
                  </div>
                </div>

                {/* Core Focus */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Specialization
                    </span>
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      AI & Software Logic
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                      C • Java • DSA
                    </span>
                  </div>
                </div>

                {/* Target Role */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                  <Code2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Target Role
                    </span>
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      Software Developer
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                      Web & Core Eng.
                    </span>
                  </div>
                </div>
              </div>

              {/* Document Skeleton Silhouette Preview */}
              <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                    Structured Curriculum & Technical Timeline
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {RESUME_CONFIG.lastUpdated || 'Academic Year 2026'}
                  </span>
                </div>
                {/* Decorative skeleton preview bars */}
                <div className="w-full space-y-1.5 pt-1">
                  <div className="h-2 w-full bg-slate-200/80 dark:bg-slate-800/80 rounded-full" />
                  <div className="h-2 w-4/5 bg-slate-200/80 dark:bg-slate-800/80 rounded-full" />
                  <div className="h-2 w-3/5 bg-slate-200/60 dark:bg-slate-800/60 rounded-full" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                <span>
                  {isResumeAvailable
                    ? 'Resume is ready for viewing and downloading.'
                    : 'Resume will unlock as academic coursework and projects complete.'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                {isResumeAvailable ? (
                  <>
                    {/* View Resume in new tab */}
                    <a
                      id="view-resume-btn"
                      href={resumeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                    >
                      <span>View Resume</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Download Resume Button */}
                    <a
                      id="download-resume-btn"
                      href={resumeHref}
                      download={downloadFileName}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 shadow-xs transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </a>
                  </>
                ) : (
                  /* Disabled state while resume is coming soon */
                  <button
                    id="resume-coming-soon-btn"
                    disabled
                    aria-disabled="true"
                    title="Resume is currently in progress and will be published soon"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700/80 cursor-not-allowed select-none opacity-80"
                  >
                    <Clock className="w-4 h-4" />
                    <span>Resume Coming Soon</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
