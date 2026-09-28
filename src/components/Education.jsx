import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/education';

export default function Education() {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Education Block */}
      <div>
        {/* Header aligned in height and baseline with Experience */}
        <div className="flex items-center justify-between mb-6 h-8">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span>Education</span>
          </h3>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            Academic Background
          </span>
        </div>

        <div className="space-y-3.5">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/80 rounded-2xl p-4.5 border border-slate-200/80 hover:border-blue-200 hover:shadow-xs transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.degree}
                </h4>
              </div>

              <p className="text-xs font-semibold text-blue-600 mt-1">
                {item.institution}
              </p>

              {item.description && (
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Block */}
      <div className="mt-6 pt-5 border-t border-slate-200/70">
        <div className="flex items-center justify-between mb-3.5">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Certifications</span>
          </h4>
          <span className="text-[11px] font-semibold text-slate-400">
            {certifications.length} verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <p className="text-xs font-bold text-slate-900 leading-snug">
                {cert.name}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                {cert.issuer}
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
                ID: {cert.credentialId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
