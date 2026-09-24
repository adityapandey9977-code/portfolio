import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/education';

export default function Education() {
  return (
    <div className="space-y-8">
      {/* Education */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <span>Education</span>
        </h3>

        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
          {education.map((item) => (
            <div key={item.id} className="relative group">
              <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-400 border-4 border-white shadow-xs group-hover:bg-blue-600 transition-colors" />

              <div className="bg-slate-50/80 rounded-2xl p-4.5 border border-slate-200/80 hover:border-blue-200 transition-colors">
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
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-600" />
          <span>Certifications</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <p className="text-xs font-bold text-slate-900 leading-snug">
                {cert.name}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                {cert.issuer}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">
                ID: {cert.credentialId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
