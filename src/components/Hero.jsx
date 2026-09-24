import React from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import HeroIllustration from './HeroIllustration';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen bg-[#0B1329] text-white flex items-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid pattern overlay with very subtle opacity */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Intro Greeting */}
            <span className="text-slate-300 font-medium text-base sm:text-lg tracking-wide mb-1">
              Hi, I'm
            </span>

            {/* Large Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 leading-[1.1]">
              {personalInfo.firstName}{' '}
              <span className="text-blue-500">{personalInfo.lastName}</span>
            </h1>

            {/* Subtitle Role */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-4 tracking-tight">
              {personalInfo.role}
            </h2>

            {/* Short Professional Intro Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {personalInfo.bio}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Aditya_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/90 active:scale-[0.98] border border-slate-700 hover:border-slate-500 rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer"
                title={`Send a message / Contact: ${personalInfo.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
