import React from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  MapPin, 
  Mail, 
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'User':
        return <User className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Me
            </h2>
          </div>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-2" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: About Description & Meta Badges */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {personalInfo.aboutText}
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              With a background in both Computer Science and Business Administration, I bring a unique blend of technical problem-solving and an understanding of product priorities. I specialize in building maintainable Node/Express backends and modern React web applications that deliver real business impact.
            </p>

            {/* Quick Contact & Status Chips matching reference image */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/70">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-slate-700">{personalInfo.location}</span>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 px-3.5 py-2 rounded-xl border border-slate-200/70 transition-colors cursor-pointer"
                title="Send a message in Contact section"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-slate-700">{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-2 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200/80 text-emerald-700 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Open to Work</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Info Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center justify-between">
                <span>Quick Info</span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full">
                  Profile
                </span>
              </h3>

              <div className="space-y-4">
                {personalInfo.quickInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-blue-200 transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-50 shrink-0 mt-0.5">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5 whitespace-pre-line leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
