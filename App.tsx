import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowDown, ArrowUp, ExternalLink, Github, Code2, Layout, Terminal, 
  ArrowUpRight, Sparkles, FileText, Mail, Phone, MapPin, Linkedin, 
  Briefcase, GraduationCap, Award, Check, Copy, Printer, Calendar, Download, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HeroScene } from './components/QuantumScene';
import SplitText from './components/SplitText';
import { socialLinks, skills, projects, certifications, experience, education } from './data';

const Header = ({ scrolled, menuOpen, setMenuOpen, setIsResumeOpen }: any) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-5 lg:py-6'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className={`font-serif font-bold text-xl tracking-wide transition-opacity flex items-center gap-3 ${scrolled ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
          MAFROOK
          <motion.span 
            className="inline-block origin-[70%_70%]"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
          >
            👋
          </motion.span>
        </span>
      </div>
      
      <div className="hidden lg:flex items-center gap-2.5 xl:gap-5 text-[10.5px] xl:text-xs font-semibold tracking-wider text-stone-600">
        <a href="#about" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">About</a>
        <a href="#skills" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">Skills</a>
        <a href="#experience" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">Experience</a>
        <a href="#projects" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">Projects</a>
        <a href="#certifications" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">Milestones</a>
        
        <a 
          href="https://wa.me/918925661541"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#bf9d55]/30 hover:border-[#bf9d55] bg-[#F9F8F4]/40 hover:bg-[#bf9d55]/5 text-[#bf9d55] font-sans font-semibold text-[9px] xl:text-[10px] tracking-widest uppercase px-3 xl:px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 hover:-translate-y-0.5 shadow-sm ml-1.5 xl:ml-3 shrink-0"
        >
          <Phone size={11} className="text-[#bf9d55]" />
          <span>Get in Touch</span>
        </a>

        <button 
          onClick={() => setIsResumeOpen(true)}
          className="bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-[9px] xl:text-[10px] tracking-widest uppercase px-3.5 xl:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 hover:-translate-y-0.5 border border-stone-800 shrink-0"
        >
          <FileText size={11} className="text-nobel-gold" />
          <span>Resume</span>
        </button>
      </div>

      <div className="flex items-center gap-2.5 lg:hidden">
        <a 
          href="https://wa.me/918925661541"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-stone-200 text-stone-700 p-2 rounded-full shadow-sm bg-white hover:-translate-y-0.5 transition-all"
          aria-label="Get in Touch"
          title="Get in Touch"
        >
          <Phone size={14} className="text-[#bf9d55]" />
        </a>
        <button 
          onClick={() => setIsResumeOpen(true)}
          className="bg-stone-900 text-white p-2 rounded-full shadow-md hover:-translate-y-0.5 transition-all"
        >
          <FileText size={14} className="text-nobel-gold" />
        </button>
        <button className="text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </div>
  </nav>
);

const MobileMenu = ({ menuOpen, setMenuOpen, setIsResumeOpen }: any) => {
  if (!menuOpen) return null;
  return (
    <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
        <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-nobel-gold transition-colors uppercase">About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-nobel-gold transition-colors uppercase">Skills</a>
        <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-nobel-gold transition-colors uppercase">Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-nobel-gold transition-colors uppercase">Projects</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)} className="hover:text-nobel-gold transition-colors uppercase">Milestones</a>
        
        <div className="flex flex-col gap-3 w-48">
          <a 
            href="https://wa.me/918925661541"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="border border-stone-200 text-stone-700 bg-white hover:bg-stone-50 font-sans font-semibold text-xs tracking-widest uppercase py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Phone size={14} className="text-[#bf9d55]" />
            <span>Get in Touch</span>
          </a>

          <button 
            onClick={() => {
              setMenuOpen(false);
              setIsResumeOpen(true);
            }}
            className="bg-stone-900 text-white font-sans font-semibold text-xs tracking-widest uppercase py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
          >
            <FileText size={14} className="text-nobel-gold" />
            <span>View Resume</span>
          </button>
        </div>

        <div className="flex gap-4 mt-8">
            {socialLinks.map((link) => (
                <a key={link.name} href={link.link} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-nobel-gold transition-colors">
                    <link.icon size={24} />
                </a>
            ))}
        </div>
    </div>
  )
};

const SectionHeading = ({ pretitle, title, dark = false }: { pretitle: string, title: string, dark?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
  >
    <div>
        <div className="flex items-center gap-3 mb-4">
            <Sparkles size={14} className="text-nobel-gold" />
            <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">{pretitle}</span>
        </div>
        <h2 className={`font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight ${dark ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
    </div>
    <div className={`hidden md:block w-32 h-[1px] md:mb-5 ${dark ? 'bg-stone-800' : 'bg-stone-300'}`}></div>
  </motion.div>
);

const SkillTag = ({ skill, idx, parentIdx }: { skill: any; idx: number; parentIdx: number }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div 
            data-aos="fade-up"
            data-aos-delay={(parentIdx * 100) + (idx * 50)}
            className="group/tag flex items-center gap-2.5 md:gap-3 px-3 py-2.5 md:px-5 md:py-3 border border-transparent bg-white hover:border-stone-200/80 rounded-xl md:rounded-2xl transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ 
                borderColor: hovered ? `${skill.color}50` : 'transparent',
                backgroundColor: hovered ? `${skill.color}05` : '#ffffff'
            }}
        >
            <div 
                className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: `${skill.color}15` }}
            >
                <skill.icon 
                    color={skill.color} 
                    className="transition-transform duration-300 group-hover/tag:scale-110 w-4 h-4 md:w-5 md:h-5" 
                />
            </div>
            <span className="text-xs md:text-sm font-semibold text-stone-700 tracking-wide truncate">{skill.label}</span>
        </div>
    );
};

const SkillCategory = ({ title, description, skills, idx }: any) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={idx * 100}
    className="py-10 lg:py-16 border-t border-stone-200/60 first:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group"
  >
    <div className="md:col-span-4 lg:col-span-3">
      <div className="flex items-center gap-4 mb-3 md:mb-4">
          <span className="text-stone-300 font-mono text-xs md:text-sm tracking-widest group-hover:text-nobel-gold transition-colors duration-500">0{idx + 1}</span>
          <div className="w-8 h-[1px] bg-stone-200 group-hover:bg-nobel-gold group-hover:w-12 transition-all duration-500"></div>
      </div>
      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-stone-900 mb-2 md:mb-3">{title}</h3>
    </div>
    <div className="md:col-span-8 lg:col-span-9 flex items-center w-full">
        <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 w-full">
            {skills.map((skill: any, skillIdx: number) => (
                <SkillTag key={skill.label} skill={skill} idx={skillIdx} parentIdx={idx} />
            ))}
        </div>
    </div>
  </div>
);

// Interactive Modal for Full Resume Preview
const ResumeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative border border-stone-100"
      >
        {/* Modal Top Action Bar */}
        <div className="bg-stone-50 border-b border-stone-100 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>
            <h3 className="font-sans font-semibold text-stone-800 text-sm ml-2 flex items-center gap-1.5">
              <FileText size={14} className="text-stone-500" />
              mafrook-resume.pdf
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-400 bg-white rounded-lg transition-all flex items-center gap-1.5 font-medium"
              title="Copy details as plain-text"
            >
              {copied ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
              <span>{copied ? "Copied!" : "Copy Text"}</span>
            </button>
            <button 
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-400 bg-white rounded-lg transition-all flex items-center gap-1.5 font-medium"
            >
              <Printer size={12} />
              <span>Print / Save PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1 px-2.5 text-stone-400 hover:text-stone-900 transition-colors hover:bg-stone-100 rounded-lg text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Document Wrapper */}
        <div className="overflow-y-auto p-6 md:p-12 bg-stone-50/50 flex-1 scrollbar-thin">
          <div className="bg-white p-6 md:p-12 border border-stone-200 shadow-[0_5px_15px_rgba(0,0,0,0.01)] rounded-xl max-w-3xl mx-auto text-stone-800 font-sans print:p-0 print:border-0 print:shadow-none">
            
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

const roles = [
  "UI Engineer",
  "Fullstack Engineer",
  "Backend Developer",
  "Frontend Developer"
];

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'summary'>('experience');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
      offset: 50,
    });
    
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Mafrooktkc@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const calculateTotalExperience = () => {
    let totalMonths = 0;
    experience.forEach((exp: any) => {
      const start = new Date(exp.startDate);
      const end = exp.endDate ? new Date(exp.endDate) : new Date();
      
      const startYear = start.getFullYear();
      const startMonth = start.getMonth();
      const endYear = end.getFullYear();
      const endMonth = end.getMonth();
      
      const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
      totalMonths += months;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let label = "";
    if (years > 0) {
      label += `${years} ${years === 1 ? "Year" : "Years"}`;
    }
    if (months > 0) {
      if (label) label += " & ";
      label += `${months} ${months === 1 ? "Month" : "Months"}`;
    }
    
    return {
      label: label || "0 Months",
      years,
      months,
      shortLabel: years > 0 ? `${years}Y ${months}M` : `${months}M`
    };
  };

  const totalExp = calculateTotalExperience();

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setIsResumeOpen={setIsResumeOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setIsResumeOpen={setIsResumeOpen} />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F9F8F4] pt-20">
        {/* Preserved 3D background */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none transition-opacity duration-1000">
            <HeroScene />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F9F8F4_100%)] pointer-events-none"></div>
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-stone-200/50 bg-white/40 backdrop-blur-md rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium tracking-[0.15em] text-stone-600 uppercase">Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,8.5vw,4.5rem)] sm:text-[clamp(3.5rem,8vw,6rem)] md:text-[clamp(4.5rem,8.5vw,7rem)] lg:text-[clamp(5rem,8vw,7.5rem)] xl:text-[clamp(6rem,8.5vw,9rem)] font-medium leading-[0.95] text-stone-900 tracking-tighter"
          >
            <SplitText
              text="Mafrook"
              className="font-serif block"
              delay={100}
              duration={1.5}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 60, rotationX: 90, transformOrigin: "0% 50% -50" }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.1}
            />
          </motion.h1>

          <div className="h-7 sm:h-8 md:h-10 mt-4 md:mt-5 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base lg:text-lg font-mono uppercase tracking-[0.16em] text-stone-500 font-semibold"
              >
                {roles[currentRoleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="max-w-xl mx-auto mt-4 md:mt-6 text-sm sm:text-base text-stone-600 font-light leading-relaxed px-6"
          >
            Designing and building high-performance web applications with intuitive user experiences, modern full-stack architectures, and clean, scalable code.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8 md:mt-10 w-full"
          >
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="group bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold px-8 py-4 rounded-full text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1 relative overflow-hidden shrink-0"
            >
              <FileText size={16} className="text-nobel-gold group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <span className="absolute inset-x-0 bottom-0 h-[2.5px] bg-nobel-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                  <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-14 h-14 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-full text-stone-600 hover:text-white hover:bg-stone-900 hover:border-stone-900 transition-all duration-300">
                      <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Improved About / Interactive Resume section based exactly on User’s Resume */}
        <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <SectionHeading pretitle="About My Engineering Journey" title="Summary" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 md:mt-16">
              
              {/* Profile Card Col (Left 4 cols) */}
              <div 
                data-aos="fade-up"
                className="lg:col-span-4 bg-white border border-stone-200/60 p-6 md:p-8 rounded-[2rem] relative shadow-lg shadow-stone-100/40 flex flex-col items-center text-center w-full group/card hover:border-stone-300 transition-all duration-500 hover:shadow-xl hover:shadow-stone-100/60"
              >
                {/* Decorative designer frame background elements */}
                <div className="absolute inset-4 border border-stone-100 rounded-3xl pointer-events-none transition-all duration-500 group-hover/card:inset-3"></div>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-stone-200 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-stone-200 pointer-events-none"></div>
                
                {/* Dual-ring designer profile wrapper */}
                <div className="relative mt-2 mb-6">
                  <div className="absolute inset-0 bg-stone-100 rounded-full scale-105 border border-stone-200/50 -rotate-6 transition-all duration-500 group-hover/card:rotate-6 group-hover/card:scale-110"></div>
                  <div className="relative w-36 h-36 p-1.5 bg-white border border-stone-200 shadow-xl rounded-full overflow-hidden flex items-center justify-center z-10 transition-transform duration-500 group-hover/card:scale-105">
                    <img 
                      src="/1774159206336.jpg" 
                      alt="Mafrook Kuthpudeen" 
                      className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  </div>
                </div>

                <div className="z-10 flex flex-col items-center">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-stone-500 uppercase bg-stone-100 px-3 px-1 rounded-full mb-3 border border-stone-200/40">
                    MERN Specialist
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight leading-none">Mafrook Kuthpudeen</h3>
                  <p className="text-[#bf9d55] text-xs font-semibold mt-2.5 tracking-wider uppercase font-sans">Junior Software Engineer</p>
                </div>
                
                {/* Bento Grid Stats block */}
                <div className="grid grid-cols-3 gap-2 w-full border-t border-stone-100 pt-5 mt-6 mb-6 z-10">
                  <div className="bg-stone-50/50 border border-stone-100 rounded-xl py-3 px-1 group/stat hover:bg-[#F9F8F4]/60 transition-colors duration-300">
                    <p className="font-serif font-black text-stone-900 text-base leading-none group-hover/stat:text-[#bf9d55] transition-colors">{totalExp.shortLabel}</p>
                    <p className="text-[8px] text-stone-400 uppercase tracking-widest font-black mt-2">Experience</p>
                  </div>
                  <div className="bg-stone-50/50 border border-stone-100 rounded-xl py-3 px-1 group/stat hover:bg-[#F9F8F4]/60 transition-colors duration-300">
                    <p className="font-serif font-black text-stone-900 text-base leading-none group-hover/stat:text-[#bf9d55] transition-colors">8.1</p>
                    <p className="text-[8px] text-stone-400 uppercase tracking-widest font-black mt-2">BE CGPA</p>
                  </div>
                  <div className="bg-stone-50/50 border border-stone-100 rounded-xl py-3 px-1 group/stat hover:bg-[#F9F8F4]/60 transition-colors duration-300">
                    <p className="font-serif font-black text-stone-900 text-base leading-none group-hover/stat:text-[#bf9d55] transition-colors">MERN</p>
                    <p className="text-[8px] text-stone-400 uppercase tracking-widest font-black mt-2">Stack</p>
                  </div>
                </div>

                {/* Professional Actions Suite */}
                <div className="w-full space-y-2 z-10">
                  {/* Primary view button */}
                  <button 
                    onClick={() => setIsResumeOpen(true)}
                    className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-xs rounded-xl tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
                  >
                    <FileText size={14} className="text-[#bf9d55] group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>View  Resume</span>
                  </button>

                  {/* Brand new explicit Download Resume Button exactly referencing the public resume.pdf */}
                  <a 
                    href="/resume.pdf" 
                    download="Mafrook_Kuthpudeen_Resume.pdf"
                    className="w-full py-3 bg-white border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-stone-900 font-sans font-semibold text-xs rounded-xl tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group/down hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <Download size={14} className="text-[#bf9d55] group-hover/down:translate-y-0.5 transition-transform duration-300" />
                    <span> Resume (PDF)</span>
                  </a>

                  {/* Secondary copy action */}
                  <button 
                    onClick={handleCopyEmail}
                    className="w-full py-2.5 border border-dashed border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50/55 text-stone-600 hover:text-stone-800 font-sans font-semibold text-[10px] rounded-xl tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {copiedEmail ? <Check size={12} className="text-green-600" /> : <Mail size={12} className="text-stone-400" />}
                    <span>{copiedEmail ? "Email Copied!" : "Copy Contact Email"}</span>
                  </button>
                </div>
              </div>

              {/* Simplified Professional Summary Col (Right 8 cols) */}
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
                className="lg:col-span-8 flex flex-col justify-center lg:pl-8 space-y-8"
              >
                <div className="space-y-6">
                  <p className="text-stone-600 text-base md:text-lg  font-light leading-relaxed">
                    I am a Junior Software Engineer with 1 year of development experience specializing in the modern <strong className="text-stone-900 font-semibold">MERN stack</strong>. I build highly responsive interfaces, fast rest endpoints, secure authentication systems, and optimize database queries for commercial platforms.
                  </p>
                </div>

                {/* Highly efficient high-impact summary metric list */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="group border border-stone-100 hover:border-stone-200 bg-stone-50/40 hover:bg-white p-5 rounded-2xl transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-700 shadow-sm mb-4 group-hover:scale-105 transition-transform">
                      <Terminal size={16} className="text-[#bf9d55]" />
                    </div>
                    <h4 className="font-sans font-bold text-stone-900 text-sm font-semibold">Full-Stack Modules</h4>
                    <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                      Constructing reusable frontend workflows with React, integrated with secure token-authorizing Express API endpoints.
                    </p>
                  </div>
                  
                  <div className="group border border-stone-100 hover:border-stone-200 bg-stone-50/40 hover:bg-white p-5 rounded-2xl transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-700 shadow-sm mb-4 group-hover:scale-105 transition-transform">
                      <ShieldCheck size={16} className="text-[#bf9d55]" />
                    </div>
                    <h4 className="font-sans font-bold text-stone-900 text-sm font-semibold">Query & Security</h4>
                    <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                      Utilizing React Query for lag-free data sync, paired with robust JWT role-based access schemes and Mongoose validation rules.
                    </p>
                  </div>

                  <div className="group border border-stone-100 hover:border-stone-200 bg-stone-50/40 hover:bg-white p-5 rounded-2xl transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-700 shadow-sm mb-4 group-hover:scale-105 transition-transform">
                      <Sparkles size={16} className="text-[#bf9d55]" />
                    </div>
                    <h4 className="font-sans font-bold text-stone-900 text-sm font-semibold">AI Workflow & Specs</h4>
                    <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                      Leveraging prompt engineering and precise spec blueprints to accelerate development cycles and optimize solution architectures.
                    </p>
                  </div>
                </div>

                {/* Bottom elegant tag row */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-stone-100">
                  <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                    #React.js
                  </span>
                  <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                    #Node.js / Express
                  </span>
                  <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                    #MongoDB / Mongoose
                  </span>
                  <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                    #React Query
                  </span>
                  <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                    #Prompt Engineering
                  </span>
                  <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                    #AI Architectures
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 md:py-32 bg-[#F9F8F4] text-stone-900 relative overflow-hidden border-y border-stone-200/50">
            {/* Minimal Background embellishment */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeading pretitle="Expertise" title="Skills" dark={false} />
                
                <div className="mt-16 md:mt-24 border-t border-stone-200/60 pt-4">
                    <SkillCategory 
                        idx={0}
                        title="Languages" 
                        description="The foundational syntax models and scripts I use to instruct browsers and backend systems."
                        skills={skills.languages} 
                    />
                    <SkillCategory 
                        idx={1}
                        title="Frameworks" 
                        description="Robust architectures and libraries accelerating development of dynamic interfaces and services."
                        skills={skills.frameworks} 
                    />
                    <SkillCategory 
                        idx={2}
                        title="Systems & Tools" 
                        description="The ecosystem of utilities, version control, and environments required for robust modern workflows."
                        skills={skills.tools} 
                    />
                    <SkillCategory 
                        idx={3}
                        title="AI & Prompt Engineering" 
                        description="Harnessing state-of-the-art Large Language Models, specification files, layout assembly mechanisms, and prompt structures to build high-grade software products rapidly."
                        skills={skills.ai} 
                    />
                </div>
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-28 bg-[#FDFDFD] relative overflow-hidden border-b border-stone-200/40">
            {/* Elegant decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F9F8F4] blur-[100px] rounded-full pointer-events-none opacity-60"></div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 pb-6 mb-12 md:mb-16">
                  <div className="text-center md:text-left">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#bf9d55] uppercase font-mono">Professional Milestones</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mt-2">Work Experience</h2>
                  </div>
                  <div className="flex justify-center md:justify-end shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#bf9d55]/10 text-[#bf9d55] font-sans font-semibold text-xs tracking-wider uppercase rounded-full border border-[#bf9d55]/20 shadow-sm">
                      <Briefcase size={12} className="text-[#bf9d55]" />
                      {totalExp.label} Cumulative
                    </span>
                  </div>
                </div>
                
                <div className="relative pl-6 sm:pl-8 border-l border-stone-200/75 ml-2 sm:ml-4 space-y-12">
                    {experience.map((exp, idx) => (
                        <div 
                            key={idx}
                            data-aos="fade-up"
                            className="relative group"
                        >
                            {/* Decorative Timeline Circular Pulse Badge */}
                            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white bg-stone-300 group-hover:bg-[#bf9d55] group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>
                            
                            {/* Compact Flex Grid Structure */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                {/* Left Metadata Column */}
                                <div className="space-y-1 md:w-1/3">
                                    <span className="inline-block text-[10px] font-bold text-[#bf9d55] tracking-widest uppercase bg-stone-50 border border-stone-100 px-2.5 py-0.5 rounded-full font-mono">
                                        {exp.period}
                                    </span>
                                    <p className="text-stone-400 text-[11px] font-mono tracking-wider font-medium uppercase mt-1">
                                        {exp.location}
                                    </p>
                                </div>
                                
                                {/* Right Main Content Column */}
                                <div className="md:w-2/3 space-y-3">
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-bold text-stone-900 leading-tight group-hover:text-[#bf9d55] transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-stone-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#bf9d55]"></span>
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Styled Bullet Points */}
                                    <ul className="space-y-2 text-xs text-stone-500 font-light leading-relaxed list-none pl-0">
                                        {exp.points.map((point, ptIdx) => (
                                            <li key={ptIdx} className="relative pl-4 hover:text-stone-800 transition-colors duration-150">
                                                <span className="absolute left-0 top-[6px] w-[5px] h-[5px] bg-stone-300 rounded-full group-hover:bg-[#bf9d55]/70 transition-colors"></span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {/* Tag highlighters */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {idx === 0 ? (
                                            <>
                                                <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-colors hover:border-[#bf9d55]/30">
                                                    #MERN Stack
                                                </span>
                                                <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-colors hover:border-[#bf9d55]/30">
                                                    #React Query
                                                </span>
                                                <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-colors hover:border-[#bf9d55]/30">
                                                    #REST APIs
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-colors hover:border-[#bf9d55]/30">
                                                    #JS & Python
                                                </span>
                                                <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-colors hover:border-[#bf9d55]/30">
                                                    #Mentorship
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-32 bg-stone-50 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-white/50 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeading pretitle="Portfolio" title="Featured Projects" />
                
                <div className="space-y-8 lg:space-y-12">
                    {projects.map((project, idx) => (
                        <div 
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            key={idx} 
                            className="group flex flex-col lg:flex-row bg-white border border-stone-200/80 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] focus-within:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
                        >
                            <div className="lg:w-2/5 p-8 md:p-10 lg:p-14 bg-[#F9F8F4] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-nobel-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <project.icon size={48} className="text-stone-300 group-hover:text-nobel-gold transition-colors duration-500 relative z-10 mb-8" strokeWidth={1} />
                                <div className="relative z-10 mt-auto">
                                    <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 mb-4 pr-10">{project.title}</h3>
                                    <div className="w-12 h-[2px] bg-stone-200 group-hover:bg-nobel-gold group-hover:w-24 transition-all duration-500"></div>
                                </div>
                            </div>
                            <div className="lg:w-3/5 p-8 md:p-10 lg:p-14 flex flex-col justify-between bg-white relative">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8 md:top-10 md:right-10 lg:top-14 lg:right-14 w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-all z-20 group-hover:rotate-45 shrink-0">
                                    <ArrowUpRight size={20} />
                                </a>
                                <p className="text-base md:text-lg lg:text-xl text-stone-500 font-light leading-relaxed max-w-xl pr-14 md:pr-16 lg:pr-20 mb-10 md:mb-12 relative z-10">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto relative z-10">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 md:px-4 md:py-2 bg-stone-50 border border-stone-100 text-stone-600 text-[10px] md:text-xs font-semibold uppercase tracking-widest rounded-xl md:rounded-2xl group-hover:border-stone-200 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Certifications / Milestones */}
        <section id="certifications" className="py-32 bg-stone-950 text-stone-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nobel-gold/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div 
                    data-aos="fade-up"
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles size={14} className="text-nobel-gold" />
                        <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Verification Achievements</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tight">Milestones</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <a 
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            key={idx} 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex flex-col p-8 md:p-10 rounded-[2rem] bg-stone-900/50 border border-stone-800 hover:bg-stone-800/80 hover:border-nobel-gold/50 transition-all duration-500 relative overflow-hidden h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-nobel-gold/0 via-nobel-gold/5 to-transparent -translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 shrink-0 bg-stone-950/80 backdrop-blur-sm border border-stone-700/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-nobel-gold/50 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] transition-all duration-500 text-stone-300 group-hover:text-nobel-gold">
                                        <cert.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="w-12 h-12 shrink-0 rounded-full border border-stone-700/80 flex items-center justify-center text-stone-500 group-hover:bg-nobel-gold group-hover:border-nobel-gold group-hover:text-stone-950 transition-all duration-500 -rotate-45 group-hover:rotate-0">
                                        <ArrowUpRight size={20} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-nobel-gold transition-colors duration-500">{cert.title}</h3>
                                <p className="text-stone-400 text-sm font-light leading-relaxed mt-auto">{cert.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-stone-950 text-stone-500 py-12 text-center text-sm border-t border-stone-900">
        <div className="container mx-auto px-6">
            <div className="flex justify-center items-center gap-6 mb-8">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.link} target="_blank" rel="noopener noreferrer" className="hover:text-nobel-gold transition-colors">
                        <link.icon size={20} />
                    </a>
                ))}
            </div>
            <p className="tracking-widest font-serif text-[10px] uppercase">© 2026 MAFROOK KUTHPUDEEN. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* Persistent floating action button to scroll back to top of the page */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 bg-stone-900 border border-stone-800 text-nobel-gold rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.25)] p-4 flex items-center justify-center backdrop-blur-md hover:bg-stone-800 transition-all duration-300 group"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-Screen Interactive Digital Resume Sheet */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
