import React, { useState } from 'react';
import { Sparkles, UserCheck, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ProfileAvatarProps {
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);
  const photoSrc = '/assets/balaji%20linkedin.png';

  return (
    <div id="profile-avatar-container" className={`relative group max-w-sm mx-auto w-full ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/30 via-blue-500/20 to-indigo-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity -z-10" />

      {/* Main Card Frame */}
      <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
        {/* Photo Container (4:5 portrait ratio) */}
        <div className="relative aspect-4/5 w-full overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
          {!imgError ? (
            <img
              id="hero-profile-photo"
              src={photoSrc}
              alt={personalInfo.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Fallback Monogram */
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                NB
              </div>
              <span className="text-xs text-slate-500 font-mono">
                balaji linkedin.png
              </span>
            </div>
          )}

          {/* Academic Tag floating on top */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2nd Year • CSE (AI)</span>
          </div>
        </div>

        {/* Card Details Footer */}
        <div className="p-4 bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>{personalInfo.name}</span>
                <UserCheck className="w-3.5 h-3.5 text-sky-500" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                <GraduationCap className="w-3 h-3 text-sky-500 shrink-0" />
                <span className="truncate max-w-[220px]">Sri Mittapalli College Of Engineering</span>
              </p>
            </div>
            <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
