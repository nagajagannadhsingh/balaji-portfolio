import React, { useState } from 'react';
import { Terminal, Coffee, Cpu, CheckCircle2, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-sky-500" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-500" />;
      default:
        return <Layers className="w-6 h-6 text-sky-500" />;
    }
  };

  const toggleSkill = (id: string) => {
    setExpandedSkill((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2
            id="skills-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Technical Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Building strong foundations in core computer science, procedural logic, object-oriented systems, and algorithmic reasoning.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {technicalSkills.map((skill) => {
            const isExpanded = expandedSkill === skill.id;
            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                onClick={() => toggleSkill(skill.id)}
                className={`group relative bg-white dark:bg-slate-900 border transition-all duration-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:shadow-lg ${
                  isExpanded
                    ? 'border-sky-500 dark:border-sky-500 ring-2 ring-sky-500/20 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      Core Academic
                    </span>
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Interactive Key Concepts Section */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    <span>Key Concepts & Topics</span>
                    <span className="flex items-center gap-1 text-sky-600 dark:text-sky-400">
                      {isExpanded ? (
                        <>
                          <span>Less</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>More</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {skill.keyConcepts.slice(0, isExpanded ? skill.keyConcepts.length : 2).map((concept, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 mt-0.5 shrink-0" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>

                  {isExpanded && (
                    <div className="mt-4 p-3 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/50 text-xs text-sky-900 dark:text-sky-200">
                      <div className="flex items-center gap-1 font-semibold mb-1">
                        <Sparkles className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                        <span>Focus Approach:</span>
                      </div>
                      <p>{skill.learningFocus}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Academic Standards */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-4 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
          <span>
            💡 Skills are presented genuinely reflecting undergraduate computer science coursework and active learning, without arbitrary percentage ratings.
          </span>
        </div>
      </div>
    </section>
  );
};
