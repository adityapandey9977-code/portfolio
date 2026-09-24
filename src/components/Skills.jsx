import React, { useState } from 'react';
import { skills, skillCategories } from '../data/skills';
import TechIcon from './TechIcon';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Skills
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-2" />
            <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-xl">
              Technologies, frameworks, and developer tools I leverage to build robust full-stack applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-slate-200/60 p-1.5 rounded-2xl w-fit">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Primary Stack Bar (Matching reference design top row) */}
        {selectedCategory === 'All' && (
          <div className="mb-10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Core MERN & Web Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
              {skills.filter(s => s.featured).map((skill) => (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-blue-300 transition-all duration-200 text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110">
                    <TechIcon id={skill.id} className="w-10 h-10" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grid of All / Filtered Skills */}
        <div>
          {selectedCategory === 'All' && (
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Comprehensive Toolkit
            </h3>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="group p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5"
              >
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-colors shrink-0">
                  <TechIcon id={skill.id} className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="inline-block text-[11px] font-medium text-slate-400 mb-1">
                    {skill.category}
                  </span>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
