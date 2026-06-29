import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Check, Copy, Printer, Mail, Phone, MapPin, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCopyText = () => {
    const resumeText = `
MAFROOK KUTHPUDEEN
Junior Software Engineer | MERN Stack Developer
Email: Mafrooktkc@gmail.com
Phone: +91 8925661541
Location: Tamil Nadu, India

SUMMARY:
Junior Software Engineer with 1 year of experience developing and maintaining MERN stack web applications. Experienced in React.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, authentication systems, role-based access control, and workflow management.

EXPERIENCE:
1. Junior Software Engineer - Statlight Software Solutions (July 2025 - Present)
2. Technical Trainer - Apprenticeship - A1 Technoskill (October 2024 - February 2025)

EDUCATION:
- Bachelor of Engineering in Computer Science and Engineering (CGPA: 8.1/10) - E.G.S. Pillay Engineering College (2020 - 2024)

TECHNICAL SKILLS:
- Frontend: React.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Responsive Design, React Query
- Backend: Node.js, Express.js, REST API, JWT Authentication, Role-Based Access Control
- Database: MongoDB, Mongoose, MySQL Basics
- Tools: Git, GitHub, Postman, VS Code, Chrome DevTools, Firebase hosting, Vercel, GitHub Actions
- AI & Prompting: Claude/Codex, Google AI Studio, Stitch UI Frameworks, Markdown Blueprints & Specifications
    `;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col relative border border-stone-100"
      >
        {/* Modal Top Action Bar */}
        <div className="bg-stone-50 border-b border-stone-100 px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>
            <h3 className="font-sans font-semibold text-stone-800 text-sm ml-2 flex items-center gap-1.5">
              <FileText size={14} className="text-stone-500" />
              mafrook-resume.pdf
            </h3>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1.5">
              <button 
                onClick={handleCopyText}
                className="px-2.5 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-400 bg-white rounded-lg transition-all flex items-center gap-1.5 font-medium active:scale-95"
                title="Copy details as plain-text"
              >
                {copied ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                <span>{copied ? "Copied!" : "Copy Text"}</span>
              </button>
              <button 
                onClick={() => window.print()}
                className="px-2.5 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-400 bg-white rounded-lg transition-all flex items-center gap-1.5 font-medium active:scale-95"
              >
                <Printer size={12} />
                <span>Print / Save PDF</span>
              </button>
            </div>
            <button 
              onClick={onClose}
              className="p-1 px-2.5 text-stone-400 hover:text-stone-900 transition-colors hover:bg-stone-100 rounded-lg text-sm font-bold active:scale-95"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Document Wrapper */}
        <div className="overflow-y-auto p-3 sm:p-6 md:p-12 bg-stone-50/50 flex-1 scrollbar-thin">
          <div className="bg-white p-4 sm:p-8 md:p-12 border border-stone-200 shadow-[0_5px_15px_rgba(0,0,0,0.01)] rounded-xl max-w-3xl mx-auto text-stone-800 font-sans print:p-0 print:border-0 print:shadow-none">
            
            {/* Document Header */}
            <div className="border-b border-stone-200 pb-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900">Mafrook Kuthpudeen</h1>
                  <p className="text-nobel-gold font-medium tracking-widest text-xs uppercase mt-2">Junior Software Engineer | MERN Stack Developer</p>
                </div>
                <div className="text-xs text-stone-500 space-y-1 font-mono text-center md:text-right">
                  <p className="flex items-center justify-center md:justify-end gap-1.5">
                    <Mail size={12} /> <a href="mailto:Mafrooktkc@gmail.com" className="hover:underline">Mafrooktkc@gmail.com</a>
                  </p>
                  <p className="flex items-center justify-center md:justify-end gap-1.5">
                    <Phone size={12} /> <a href="tel:+918925661541" className="hover:underline">+91 8925661541</a>
                  </p>
                  <p className="flex items-center justify-center md:justify-end gap-1.5">
                    <MapPin size={12} /> Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Document Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
              
              {/* Left Column (35%) */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 border-b pb-1 border-stone-100">Technical Skills</h4>
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="font-semibold text-stone-900">Frontend:</span>
                      <p className="text-stone-600 mt-0.5">React.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Responsive Design, React Query</p>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-900">Backend:</span>
                      <p className="text-stone-600 mt-0.5">Node.js, Express.js, REST API Development, JWT Auth, Role-Based Access Control</p>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-900">Database:</span>
                      <p className="text-stone-600 mt-0.5">MongoDB, Mongoose, MySQL Basics</p>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-900">Tools:</span>
                      <p className="text-stone-600 mt-0.5">Git, GitHub, Postman, VS Code, Chrome DevTools, Firebase, Vercel, GitHub Actions</p>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-900">AI & Prompting:</span>
                      <p className="text-stone-600 mt-0.5">Claude / Codex, Google AI Studio, Stitch UI, Markdown specs & blueprints</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 border-b pb-1 border-stone-100">Education</h4>
                  <div className="text-xs space-y-2">
                    <p className="font-bold text-stone-900">B.E. Computer Science & Engineering</p>
                    <p className="text-stone-500 font-medium">CGPA: 8.1 / 10</p>
                    <p className="text-stone-600 leading-relaxed">E.G.S. Pillay Engineering College, Nagapattinam</p>
                    <p className="text-stone-400 font-mono">2020 - 2024</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 border-b pb-1 border-stone-100">Certifications</h4>
                  <ul className="text-xs space-y-2 text-stone-600 list-disc list-inside">
                    <li>HackerRank Java (2025)</li>
                    <li>HackerRank JavaScript (2025)</li>
                    <li>AWS Academy Cloud (2024)</li>
                    <li>freeCodeCamp Responsive (2024)</li>
                  </ul>
                </div>
              </div>

              {/* Right Column (65%) */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 border-b pb-1 border-stone-100">Professional Summary</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Junior Software Engineer with 1 year of experience developing and maintaining MERN stack web applications for internal business operations. Experienced in React.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, authentication systems, role-based access control, and admin-facing workflow management modules. Familiar with debugging production issues, API integration, and Agile-based development workflows.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 border-b pb-1 border-stone-100">Professional Experience</h4>
                  <div className="space-y-4">
                    <div className="text-xs">
                      <div className="flex justify-between items-start font-semibold text-stone-900">
                        <span>Junior Software Engineer</span>
                        <span className="font-mono text-[10px] text-stone-500 whitespace-nowrap">July 2025 – Present</span>
                      </div>
                      <p className="text-nobel-gold font-medium">Statlight Software Solutions | Hybrid</p>
                      <ul className="list-disc list-outside pl-4 space-y-1.5 mt-2 text-stone-600 leading-relaxed text-[11px]">
                        <li>Developed and maintained modules for a loan management platform supporting customer onboarding, approval workflows, and administrative operations.</li>
                        <li>Contributed to Angular-to-React migration by refactoring legacy UI modules into reusable React components.</li>
                        <li>Implemented admin-facing interfaces for loan lifecycle workflows including Pending, Approved, Rejected, and Closed application states.</li>
                        <li>Integrated frontend applications with REST APIs for handling authentication, loan records, workflow updates, and user-specific data access.</li>
                        <li>Managed API state handling and caching using React Query to reduce redundant API requests and improve frontend data synchronization.</li>
                        <li>Built RESTful APIs using Node.js and Express with JWT authentication and role-based access control.</li>
                      </ul>
                    </div>

                    <div className="text-xs border-t border-dashed border-stone-100 pt-3">
                      <div className="flex justify-between items-start font-semibold text-stone-900">
                        <span>Technical Trainer - Apprenticeship</span>
                        <span className="font-mono text-[10px] text-stone-500 whitespace-nowrap">Oct 2024 – Feb 2025</span>
                      </div>
                      <p className="text-stone-500">A1 Technoskill / Livewire Institutions | India</p>
                      <ul className="list-disc list-outside pl-4 space-y-1.5 mt-2 text-stone-600 leading-relaxed text-[11px]">
                        <li>Conducted practical training sessions on JavaScript, Java, Python, and full-stack web development fundamentals.</li>
                        <li>Guided students in developing CRUD applications, authentication systems, and database integrated projects.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 border-b pb-1 border-stone-100">Featured Projects</h4>
                  <div className="text-xs">
                    <p className="font-bold text-stone-900">AccessVault - Role-Based Credential Management System</p>
                    <p className="text-[10px] text-stone-400 mt-0.5">React.js, Node.js, Express.js, MongoDB, JWT, bcrypt</p>
                    <p className="text-stone-600 leading-relaxed mt-1 text-[11px]">
                      Developed a credentials core supporting Admin, Manager, and Viewer authentication schemes. Built REST APIs for managing assets, secure logs, and user schemas via Mongoose rules and MongoDB indexes.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
