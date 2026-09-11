import React, { useState } from 'react';
import { Terminal, Code2, GraduationCap, Sparkles, CheckCircle2, Laptop } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, LEARNING } from '../data/portfolioData';

export const DeveloperProfileCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'overview'>('code');

  return (
    <div id="developer-card-container" className="relative max-w-lg w-full mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/30 via-blue-500/20 to-indigo-500/30 rounded-3xl blur-xl opacity-50 -z-10" />

      {/* Terminal / Developer Window Card */}
      <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
        {/* Terminal Window Header Bar */}
        <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>developer.json</span>
            </span>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-0.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              JSON
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-2.5 py-0.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Summary
            </button>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[300px]">
          {activeTab === 'code' ? (
            /* Syntax-Highlighted Code View */
            <div className="space-y-1">
              <p className="text-slate-500">{'// Student & Developer Identity'}</p>
              <p>
                <span className="text-sky-400">{'{'}</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"name"</span>
                <span className="text-slate-500">: </span>
                <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"academicStatus"</span>
                <span className="text-slate-500">: </span>
                <span className="text-sky-300">"{PERSONAL_INFO.year} B.Tech"</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"specialization"</span>
                <span className="text-slate-500">: </span>
                <span className="text-amber-300">"CSE – Artificial Intelligence"</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"institution"</span>
                <span className="text-slate-500">: </span>
                <span className="text-emerald-400">"{PERSONAL_INFO.college}"</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"careerGoal"</span>
                <span className="text-slate-500">: </span>
                <span className="text-sky-400">"{PERSONAL_INFO.careerGoal}"</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"technicalSkills"</span>
                <span className="text-slate-500">: [</span>
                <span className="text-amber-300">
                  {SKILLS.map((s) => `"${s.name}"`).join(', ')}
                </span>
                <span className="text-slate-500">],</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"currentlyLearning"</span>
                <span className="text-slate-500">: [</span>
                <span className="text-sky-300">
                  {LEARNING.map((l) => `"${l.name}"`).join(', ')}
                </span>
                <span className="text-slate-500">],</span>
              </p>
              <p className="pl-4">
                <span className="text-indigo-400">"status"</span>
                <span className="text-slate-500">: </span>
                <span className="text-emerald-400">"Active & Dedicated Student"</span>
              </p>
              <p>
                <span className="text-sky-400">{'}'}</span>
              </p>
            </div>
          ) : (
            /* Summary Overview View */
            <div className="space-y-4 py-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{PERSONAL_INFO.college}</h4>
                  <p className="text-slate-400 text-xs font-sans">
                    {PERSONAL_INFO.year} • {PERSONAL_INFO.branch}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Core Foundations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-sky-300 text-xs flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Actively Learning
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {LEARNING.map((item) => (
                    <span
                      key={item.id}
                      className="px-2.5 py-1 rounded-lg bg-sky-950/50 border border-sky-800/60 text-sky-300 text-xs flex items-center gap-1.5"
                    >
                      <Laptop className="w-3 h-3 text-sky-400" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Terminal Bottom Status Bar */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Ready to build</span>
          </div>
          <span className="text-sky-400">Guntur, AP • India</span>
        </div>
      </div>
    </div>
  );
};
