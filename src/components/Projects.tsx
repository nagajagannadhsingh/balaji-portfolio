import React, { useState } from 'react';
import {
  FolderGit2,
  Clock,
  Sparkles,
  Github,
  ExternalLink,
  Code2,
  Info,
  Laptop,
  Layers,
  ChevronRight,
  Terminal,
} from 'lucide-react';
import { PROJECTS, PROJECT_PLACEHOLDERS } from '../data/portfolioData';
import type { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Check if real projects exist in the centralized data
  const hasProjects = PROJECTS && PROJECTS.length > 0;

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-white/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{hasProjects ? 'Portfolio Showcase' : 'Projects In Pipeline'}</span>
          </div>

          <h2
            id="projects-section-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {hasProjects ? 'Featured Projects' : 'Projects Coming Soon'}
          </h2>

          <p
            id="projects-section-subtext"
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
          >
            {hasProjects
              ? 'Explore my real software applications, algorithms, and web projects built with modern programming languages and clean architecture.'
              : "I'm currently strengthening my programming and web development skills. Projects will be added here as I turn my learning into practical applications."}
          </p>

          <div className="w-12 h-1 bg-sky-500 rounded-full mt-4" />
        </div>

        {/* Dynamic Rendering: Real Projects OR "Coming Soon" Placeholders */}
        {hasProjects ? (
          /* Real Project Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id || `project-${idx}`}
                id={`project-card-${idx}`}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/80 dark:hover:border-sky-500/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Project Image Area */}
                <div className="relative aspect-16/10 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Clean Fallback Graphic when no image provided */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 text-slate-400 group-hover:text-sky-500 transition-colors">
                      <Code2 className="w-12 h-12 stroke-[1.5] mb-2" />
                      <span className="text-xs font-mono">Software Project</span>
                    </div>
                  )}

                  {/* Project Index Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[11px] font-mono text-white">
                    #{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-900/60 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions & Links */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* GitHub Link (Only rendered if URL provided) */}
                      {project.github && project.github.trim() !== '' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                          title="View Source Code on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      {/* Live Demo Link (Only rendered if URL provided) */}
                      {project.liveDemo && project.liveDemo.trim() !== '' && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors shadow-xs"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    {/* Optional Details Modal trigger */}
                    {project.details && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 cursor-pointer font-medium"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* "Projects Coming Soon" Empty-State Placeholder Cards */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {PROJECT_PLACEHOLDERS.map((placeholder) => (
              <div
                key={placeholder.number}
                id={`project-placeholder-${placeholder.number}`}
                className="relative group rounded-3xl bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/80 dark:hover:border-sky-400/80 transition-all duration-300 shadow-xs hover:shadow-xl"
              >
                <div>
                  {/* Top Status & Elegant Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-sky-500 group-hover:bg-sky-50 dark:group-hover:bg-sky-950/60 transition-all">
                      {placeholder.number === '01' ? (
                        <Terminal className="w-6 h-6" />
                      ) : placeholder.number === '02' ? (
                        <Laptop className="w-6 h-6" />
                      ) : (
                        <FolderGit2 className="w-6 h-6" />
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{placeholder.status}</span>
                    </span>
                  </div>

                  {/* Project Number & Title */}
                  <div className="space-y-1 mb-3">
                    <span className="text-xs font-mono text-sky-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
                      {placeholder.focusArea}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {placeholder.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {placeholder.description}
                  </p>
                </div>

                {/* Planned Tech Pills & Pipeline Indicator */}
                <div className="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {placeholder.plannedTech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    <span>Planned Application</span>
                    <span className="flex items-center gap-1 text-sky-600 dark:text-sky-400 font-medium">
                      <Sparkles className="w-3 h-3" />
                      <span>In Pipeline</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Details Modal (if a real project has rich details) */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {selectedProject.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 whitespace-pre-line">
                {selectedProject.details || selectedProject.description}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        )}

        {/* Future-Ready Architecture Explanatory Hint */}
        <div className="mt-12 max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300">
            <Info className="w-4 h-4 text-sky-500 shrink-0" />
            <span>
              Real projects added to{' '}
              <code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded font-mono text-sky-600 dark:text-sky-400">
                PROJECTS
              </code>{' '}
              in data will automatically replace these placeholders.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
