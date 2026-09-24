import React from 'react';
import { Briefcase, MapPin, Building2 } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
        <Briefcase className="w-5 h-5 text-blue-600" />
        <span>Experience</span>
      </h3>

      <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline bullet dot */}
            <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-200 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h4 className="text-base font-bold text-slate-900">
                  {exp.role}
                </h4>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-medium text-slate-600 mb-4">
                <span className="flex items-center gap-1 font-semibold text-slate-800">
                  <Building2 className="w-3.5 h-3.5 text-blue-500" />
                  {exp.company}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
