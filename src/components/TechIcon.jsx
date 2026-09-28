import React from 'react';

export default function TechIcon({ id, className = "w-8 h-8" }) {
  switch (id?.toLowerCase()) {
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.5C12 1.5 6 7.5 6 13.5C6 17.0899 8.68629 20 12 20C15.3137 20 18 17.0899 18 13.5C18 7.5 12 1.5 12 1.5Z" fill="#13AA52" />
          <path d="M12 1.5V20C15.3137 20 18 17.0899 18 13.5C18 7.5 12 1.5 12 1.5Z" fill="#119246" />
          <path d="M12 20V22.5" stroke="#13AA52" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'express':
      return (
        <div className={`${className} bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold font-mono text-[11px] shadow-sm select-none`}>
          ex
        </div>
      );

    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" fill="#539E43" />
          <path d="M16 5L6 10.8V21.2L16 27L26 21.2V10.8L16 5Z" fill="#68A063" opacity="0.3" />
          <path d="M13 11V21M13 14L19 21V11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'javascript':
      return (
        <div className={`${className} bg-[#F7DF1E] text-black font-extrabold rounded-md flex items-end justify-end p-0.5 text-xs select-none shadow-sm`}>
          <span className="leading-none pr-0.5 pb-0.5 font-sans font-bold">JS</span>
        </div>
      );

    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2L4.8 20.2L12 22.2L19.2 20.2L21 2H3Z" fill="#E44D26"/>
          <path d="M12 3.6V20.4L17.7 18.8L19.2 3.6H12Z" fill="#F16529"/>
          <path d="M7.4 6.8H16.6L16.3 9.6H12V10.8H16.1L15.6 15.3L12 16.3V17.6L16.8 16.3L17.4 9.6L17.5 8H6.5L7.4 6.8ZM7.9 11.2L8.2 13.9H12V12.7H9.3L9 9.6H12V8.4H7.6L7.9 11.2Z" fill="white"/>
        </svg>
      );

    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2L4.8 20.2L12 22.2L19.2 20.2L21 2H3Z" fill="#1572B6"/>
          <path d="M12 3.6V20.4L17.7 18.8L19.2 3.6H12Z" fill="#33A9DC"/>
          <path d="M12 6.8H7.3L7.7 10.8H12V9.6H8.8L8.6 8H12V6.8ZM12 13.6H8.9L9.1 15.2L12 16V14.8L10.2 14.3L10.1 13.6H12V13.6ZM16.7 6.8H12V8H15.4L15.1 11H12V12.2H15L14.6 16.1L12 16.8V18L15.8 16.9L16.7 6.8Z" fill="white"/>
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7 3 5 6 5 10C5 15 8 18 12 21C16 18 19 15 19 10C19 6 17 3 12 3Z" fill="#336791"/>
          <circle cx="9.5" cy="8.5" r="1.2" fill="white"/>
          <circle cx="14.5" cy="8.5" r="1.2" fill="white"/>
          <path d="M10 13C11 14 13 14 14 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.7 10.6L13.4 2.3C12.9 1.9 12.3 1.9 11.9 2.3L10.3 3.9L12.4 6C12.8 5.9 13.3 6 13.6 6.3C14.1 6.8 14.1 7.6 13.7 8.1L15.6 10C16.1 9.6 16.9 9.6 17.4 10.1C18 10.7 18 11.5 17.4 12.1C16.9 12.6 16 12.6 15.5 12.1C15.1 11.7 15.1 11 15.4 10.5L13.6 8.7V14.5C13.8 14.7 14 15 14 15.4C14 16.2 13.3 16.9 12.5 16.9C11.7 16.9 11 16.2 11 15.4C11 14.8 11.4 14.3 11.9 14.1V8.4C11.4 8.2 11 7.7 11 7.1C11 6.8 11.1 6.5 11.3 6.3L9.2 4.2L2.3 11.1C1.9 11.5 1.9 12.2 2.3 12.6L10.6 20.9C11 21.3 11.7 21.3 12.1 20.9L21.7 11.3C22.1 11.9 22.1 11 21.7 10.6Z" fill="#F05032"/>
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.84 21.527C9.34 21.62 9.52 21.31 9.52 21.045C9.52 20.81 9.51 20.187 9.51 19.362C6.73 19.966 6.14 18.024 6.14 18.024C5.68 16.857 5.03 16.546 5.03 16.546C4.12 15.926 5.1 15.939 5.1 15.939C6.1 16.01 6.63 16.969 6.63 16.969C7.52 18.498 8.97 18.056 9.54 17.801C9.63 17.155 9.89 16.714 10.17 16.467C7.95 16.215 5.62 15.356 5.62 11.527C5.62 10.435 6.01 9.542 6.65 8.844C6.55 8.591 6.2 7.571 6.75 6.216C6.75 6.216 7.59 5.946 9.5 7.241C10.3 7.018 11.15 6.907 12 6.903C12.85 6.907 13.7 7.018 14.5 7.241C16.41 5.946 17.25 6.216 17.25 6.216C17.8 7.571 17.45 8.591 17.35 8.844C17.99 9.542 18.38 10.435 18.38 11.527C18.38 15.367 16.04 16.212 13.81 16.459C14.17 16.768 14.49 17.382 14.49 18.324C14.49 19.673 14.48 20.763 14.48 21.045C14.48 21.313 14.66 21.63 15.17 21.527C19.14 20.194 22 16.444 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
      );

    case 'postman':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill="#FF6C37"/>
          <path d="M22 11L10 16L14 18L16 22L17.5 18.5L22 11Z" fill="white" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      );

    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 2.5L7.5 10.5L3 7L1.5 8L4.5 12L1.5 16L3 17L7.5 13.5L17.5 21.5L22.5 19V5L17.5 2.5Z" fill="#007ACC"/>
          <path d="M17.5 7.5L8.5 12L17.5 16.5V7.5Z" fill="#1F9CF0"/>
        </svg>
      );

    case 'cloudinary':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="#3448C5"/>
          <path d="M12 9V15M9 12H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    case 'razorpay':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#0C2340"/>
          <path d="M7 17L12.5 6H15.5L11 13H15L9.5 18L10.5 14H7.5" fill="#3395FF"/>
        </svg>
      );

    case 'jwt':
      return (
        <div className={`${className} bg-gradient-to-tr from-pink-600 to-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-[10px] tracking-wider uppercase select-none shadow-sm`}>
          JWT
        </div>
      );

    case 'rest-apis':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      );

    case 'responsive-design':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11H6V13H4V11ZM7 11H9V13H7V11ZM10 11H12V13H10V11ZM13 11H15V13H13V11ZM7 8H9V10H7V8ZM10 8H12V10H10V8ZM13 8H15V10H13V8ZM10 5H12V7H10V5ZM13 5H15V7H13V5Z" fill="#0db7ed" />
          <path d="M22.5 13.5C21.8 12.8 20.8 12.5 20.4 12.5C19.9 11.2 18.6 10.3 17 10.3V11H16V14H2.5C2.2 14.8 2 15.6 2 16.5C2 20.1 5.4 21.5 9.5 21.5C14.7 21.5 19.3 19 20.7 15.2C21.4 15.3 22.3 14.9 22.7 14.1C22.8 13.9 22.7 13.7 22.5 13.5Z" fill="#0db7ed" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#00758F" />
          <path d="M12 4C9 4 7 6.5 7 9.5C7 13 10 15 11 16.5C12 18 12.5 20 12.5 20C12.5 20 13.5 17 15 15.5C16.5 14 18 11.5 18 8.5C18 6 15.5 4 12 4Z" fill="#F29111" />
          <circle cx="10" cy="8" r="1.2" fill="white" />
        </svg>
      );

    case 'prisma':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 19.5L11.5 2.5L20.5 18L13 22L3.5 19.5Z" stroke="#2D3748" strokeWidth="1.5" strokeLinejoin="round" fill="#2D3748" />
          <path d="M11.5 2.5L13 22M11.5 2.5L20.5 18" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      );

    case 'react-native':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.5" />
          <line x1="11" y1="18" x2="13" y2="18" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="10" r="1.5" fill="#61DAFB" />
          <ellipse cx="12" cy="10" rx="4.5" ry="2" stroke="#61DAFB" strokeWidth="0.8" />
          <ellipse cx="12" cy="10" rx="4.5" ry="2" transform="rotate(60 12 10)" stroke="#61DAFB" strokeWidth="0.8" />
        </svg>
      );

    case 'microservices':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="6" height="6" rx="1.5" />
          <rect x="16" y="3" width="6" height="6" rx="1.5" />
          <rect x="9" y="15" width="6" height="6" rx="1.5" />
          <path d="M8 6h8M5 9v3a3 3 0 0 0 3 3h1M19 9v3a3 3 0 0 1-3 3h-1" />
        </svg>
      );

    case 'monorepo':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );

    case 'knex':
    case 'knex.js':
      return (
        <div className={`${className} bg-[#D25B32] text-white font-extrabold rounded-lg flex items-center justify-center text-[10px] select-none shadow-sm`}>
          knex
        </div>
      );

    case 'socket.io':
    case 'socketio':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#010101" />
          <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM10 16.5V7.5L16 12L10 16.5Z" fill="white" />
        </svg>
      );

    case 'typescript':
      return (
        <div className={`${className} bg-[#3178C6] text-white font-extrabold rounded-md flex items-end justify-end p-0.5 text-xs select-none shadow-sm`}>
          <span className="leading-none pr-0.5 pb-0.5 font-sans font-bold">TS</span>
        </div>
      );

    case 'redux':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#764ABC" opacity="0.15"/>
          <path d="M15.5 12C15.5 13.93 13.93 15.5 12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12Z" stroke="#764ABC" strokeWidth="2"/>
          <path d="M12 6C7.5 6 4 10 4 12C4 14 7.5 18 12 18C16.5 18 20 14 20 12C20 10 16.5 6 12 6Z" stroke="#764ABC" strokeWidth="1.5" strokeDasharray="2 2"/>
        </svg>
      );

    case 'axios':
      return (
        <div className={`${className} bg-[#5A29E4] text-white font-bold rounded-lg flex items-center justify-center text-[10px] select-none shadow-sm`}>
          Ax
        </div>
      );

    case 'redis':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#DC382D" />
          <path d="M6 13L12 9L18 13L12 17L6 13Z" fill="white" />
          <path d="M6 9L12 5L18 9L12 13L6 9Z" fill="white" opacity="0.6" />
        </svg>
      );

    case 'rabbitmq':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#FF6600" />
          <circle cx="9" cy="11" r="1.5" fill="white" />
          <circle cx="15" cy="11" r="1.5" fill="white" />
          <path d="M8 15C10 17 14 17 16 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'clickup':
      return (
        <div className={`${className} bg-gradient-to-tr from-[#7B68EE] to-[#FF005F] text-white font-black rounded-lg flex items-center justify-center text-xs select-none shadow-sm`}>
          ✓
        </div>
      );

    case 'mongoose':
      return (
        <div className={`${className} bg-[#880000] text-white font-bold rounded-lg flex items-center justify-center text-[10px] select-none shadow-sm`}>
          m
        </div>
      );

    case 'rbac':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case 'nodemailer':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#22B3EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );

    case 'oauth':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      );

    default:
      return (
        <div className={`${className} bg-slate-100 text-slate-700 rounded-md flex items-center justify-center font-bold text-xs`}>
          {id?.substring(0, 2)?.toUpperCase() || '</>'}
        </div>
      );
  }
}
