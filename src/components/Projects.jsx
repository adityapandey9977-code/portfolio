import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Laptop, 
  Activity, 
  Scissors, 
  Layers,
  GraduationCap,
  Server,
  Headphones,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Pagination state: 6 cards on page 1 (with screenshots), healthcare on page 2
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleOpenDetails = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'Scissors':
        return (
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-xs">
            <Scissors className="w-5 h-5" />
          </div>
        );
      case 'GraduationCap':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-xs">
            <GraduationCap className="w-5 h-5" />
          </div>
        );
      case 'Headphones':
        return (
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shadow-xs">
            <Headphones className="w-5 h-5" />
          </div>
        );
      case 'Laptop':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
            <Laptop className="w-5 h-5" />
          </div>
        );
      case 'Briefcase':
        return (
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs">
            <Briefcase className="w-5 h-5" />
          </div>
        );
      case 'Activity':
        return (
          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shadow-xs">
            <Activity className="w-5 h-5" />
          </div>
        );
      case 'Server':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
            <Server className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shadow-xs">
            <Layers className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & View All Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Projects
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-2" />
          </div>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top color bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.themeColor} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div>
                {/* Project Screenshot thumbnail if available */}
                {project.image ? (
                  <div
                    onClick={() => handleOpenDetails(project)}
                    className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-slate-200/80 bg-slate-100 cursor-pointer group-hover:border-blue-300 transition-colors shadow-2xs"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                      <span className="text-[11px] font-semibold text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
                        Click to view details
                      </span>
                    </div>
                  </div>
                ) : null}

                {/* Header row: Project Icon + Category / Status Badges */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    {getProjectIcon(project.icon)}
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  {project.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-lg bg-slate-50 text-slate-600 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold text-blue-600 bg-blue-50 rounded-lg">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleOpenDetails(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer group/link"
                >
                  <span>{project.badge ? 'Case Study' : 'View Project'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                      title="View Source on GitHub"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-100">
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Showing <span className="font-semibold text-slate-900">{startIndex + 1}</span> to{' '}
              <span className="font-semibold text-slate-900">{Math.min(startIndex + ITEMS_PER_PAGE, projects.length)}</span> of{' '}
              <span className="font-semibold text-slate-900">{projects.length}</span> projects
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
