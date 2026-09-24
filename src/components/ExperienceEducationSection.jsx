import React from 'react';
import Experience from './Experience';
import Education from './Education';

export default function ExperienceEducationSection() {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/70">
      <div id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience & Education
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-2" />
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-xl">
            My professional journey, internships, and educational qualifications.
          </p>
        </div>

        {/* 2-Column Responsive Layout for Desktop / Tablet; Stacked for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
            <Experience />
          </div>

          <div className="lg:col-span-5">
            <Education />
          </div>
        </div>

      </div>
    </section>
  );
}
