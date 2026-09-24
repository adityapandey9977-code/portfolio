import React from 'react';
import TechIcon from './TechIcon';

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none py-6">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Tech Badges Orbiting Aditya's Profile */}

      {/* 1. MongoDB badge (Top right) */}
      <div 
        className="absolute top-4 sm:top-6 right-6 sm:right-10 z-20 animate-float"
        style={{ animationDelay: '0s' }}
      >
        <div className="group relative flex items-center justify-center w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#0F172A]/90 border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-500/50 hover:shadow-emerald-500/20">
          <TechIcon id="mongodb" className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute -bottom-7 px-2 py-0.5 text-[10px] font-semibold text-slate-300 bg-slate-900/90 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            MongoDB
          </span>
        </div>
      </div>

      {/* 2. Express.js badge (Upper right-mid) */}
      <div 
        className="absolute top-28 sm:top-32 -right-1 sm:right-2 z-20 animate-float-reverse"
        style={{ animationDelay: '0.8s' }}
      >
        <div className="group relative flex items-center justify-center w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#0F172A]/90 border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-slate-400 hover:shadow-white/10">
          <TechIcon id="express" className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute -bottom-7 px-2 py-0.5 text-[10px] font-semibold text-slate-300 bg-slate-900/90 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Express.js
          </span>
        </div>
      </div>

      {/* 3. React badge (Lower right) */}
      <div 
        className="absolute bottom-12 sm:bottom-16 right-4 sm:right-8 z-20 animate-float"
        style={{ animationDelay: '1.6s' }}
      >
        <div className="group relative flex items-center justify-center w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#0F172A]/90 border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:shadow-cyan-500/25">
          <TechIcon id="react" className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute -bottom-7 px-2 py-0.5 text-[10px] font-semibold text-slate-300 bg-slate-900/90 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            React.js
          </span>
        </div>
      </div>

      {/* 4. Node.js badge (Bottom left) */}
      <div 
        className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20 animate-float-reverse"
        style={{ animationDelay: '2.4s' }}
      >
        <div className="group relative flex items-center justify-center w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#0F172A]/90 border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-green-500/50 hover:shadow-green-500/20">
          <TechIcon id="nodejs" className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute -bottom-7 px-2 py-0.5 text-[10px] font-semibold text-slate-300 bg-slate-900/90 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Node.js
          </span>
        </div>
      </div>

      {/* 5. Docker badge (Top left) */}
      <div 
        className="absolute top-10 sm:top-14 left-4 sm:left-8 z-20 animate-float"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F172A]/90 border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-sky-400/60 hover:shadow-sky-500/20">
          <TechIcon id="docker" className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute -bottom-7 px-2 py-0.5 text-[10px] font-semibold text-slate-300 bg-slate-900/90 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Docker
          </span>
        </div>
      </div>

      {/* Centerpiece: Original Professional Profile Photo (DP) */}
      <div className="relative z-10">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 shadow-2xl shadow-blue-900/40">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-700/60">
            <img
              src="/images/aditya-pandey-dp.jpg"
              alt="Aditya Pandey"
              className="w-full h-full object-cover object-center origin-center scale-[1.32] hover:scale-[1.38] transition-transform duration-500"
              loading="eager"
            />
          </div>

          {/* Status pill badge on bottom center */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[#0F172A]/95 border border-slate-700 shadow-lg backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-200">
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
