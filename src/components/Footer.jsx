import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1329] text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Logo / Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-xl font-bold tracking-tight text-white inline-block mb-1"
            >
              <span>{personalInfo.firstName}</span>{' '}
              <span className="text-blue-500">{personalInfo.lastName}</span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              {personalInfo.role}
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.socialLinks.phone}
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title={`Call: ${personalInfo.phoneDisplay || personalInfo.phone}`}
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title={`Send a message / Contact: ${personalInfo.email}`}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-2 border border-slate-800"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Aditya Pandey. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-blue-500 font-semibold">React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
