import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, UserCheck, ShieldCheck, UploadCloud } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileAvatarProps {
  size?: 'normal' | 'large';
}

const STORAGE_KEY = 'naga_balaji_profile_photo';

export const ProfileAvatar: React.FC<ProfileAvatarProps> = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 1. Check browser local storage for user's selected exact photo
    const storedPhoto = localStorage.getItem(STORAGE_KEY);
    if (storedPhoto) {
      setImgSrc(storedPhoto);
      return;
    }

    // 2. Otherwise check configured photo path
    if (PERSONAL_INFO.profilePhotoUrl && PERSONAL_INFO.profilePhotoUrl.trim() !== '') {
      const testImg = new Image();
      testImg.src = PERSONAL_INFO.profilePhotoUrl;
      testImg.onload = () => {
        setImgSrc(PERSONAL_INFO.profilePhotoUrl || null);
      };
      testImg.onerror = () => {
        // Try fallback default filenames like '/balaji linkedin.png' or '/profile.png'
        const fallbackNames = ['/balaji linkedin.png', '/balaji_linkedin.png', '/profile.png', '/profile.jpg'];
        let tried = 0;
        const tryNext = () => {
          if (tried >= fallbackNames.length) return;
          const nextSrc = fallbackNames[tried++];
          const img = new Image();
          img.src = nextSrc;
          img.onload = () => setImgSrc(nextSrc);
          img.onerror = tryNext;
        };
        tryNext();
      };
    }
  }, []);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setImgSrc(result);
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch {
            // Storage quota exceeded or private mode, state will still display
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="profile-avatar-container"
      className="relative group max-w-sm mx-auto w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden file input to allow selecting the exact uploaded photo */}
      <input
        ref={fileInputRef}
        type="file"
        id="profile-photo-input"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Ambient gradient glow behind the photo card */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500 via-indigo-500 to-blue-600 rounded-3xl blur-md opacity-35 group-hover:opacity-65 transition duration-500 -z-10" />

      {/* Main Card */}
      <div
        onClick={() => fileInputRef.current?.click()}
        title="Click to apply your exact photo file"
        className={`relative bg-white dark:bg-slate-900 border ${
          isDragging
            ? 'border-sky-500 ring-4 ring-sky-500/20'
            : 'border-slate-200/90 dark:border-slate-800'
        } rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 cursor-pointer`}
      >
        <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center border border-slate-200/60 dark:border-slate-800/80">
          {imgSrc ? (
            <>
              {/* Exact unedited user image */}
              <img
                src={imgSrc}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Discreet click-to-change overlay hint on hover */}
              {isHovered && (
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center text-white transition-opacity">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/20 text-xs flex items-center gap-1.5 shadow-lg">
                    <Camera className="w-3.5 h-3.5 text-sky-400" />
                    <span>Change Photo</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Professional Monogram & Student Card */
            <div className="w-full h-full flex flex-col items-center justify-between p-6 text-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-950">
              {/* Top status indicator */}
              <div className="w-full flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Student
                </span>
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  CSE-AI
                </span>
              </div>

              {/* Center Initials */}
              <div className="flex flex-col items-center gap-3 my-auto">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-black tracking-tight shadow-lg shadow-sky-500/20 ring-4 ring-white dark:ring-slate-900">
                    NB
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sky-600 dark:text-sky-400 shadow-xs">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    {PERSONAL_INFO.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    2nd Year • B.Tech
                  </p>
                </div>
              </div>

              {/* Interactive upload indicator */}
              <div className="w-full p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-dashed border-sky-300 dark:border-sky-800 text-[11px] text-sky-700 dark:text-sky-300 flex items-center justify-center gap-1.5 font-medium hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors">
                <UploadCloud className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                <span>Click or drop your exact photo here</span>
              </div>
            </div>
          )}

          {/* Floating Verified Student Pill on top of photo */}
          <div className="absolute top-3 left-3 bg-slate-900/80 dark:bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1.5 border border-white/10 shadow-sm pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>2nd Year • CSE (AI)</span>
          </div>
        </div>

        {/* Card Footer Details */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{PERSONAL_INFO.college}</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
            Guntur, AP
          </span>
        </div>
      </div>
    </div>
  );
};
