import React from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { projects } from '../data';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();

  const getLocalizedProjects = () => {
    if (language === 'de') {
      return [
        {
          title: "html-formeditor [opensrc]",
          desc: "Ein benutzerdefinierter, visueller Editor im Canvas-Stil, der von Grund auf neu entwickelt wurde, um offizielle Unternehmensdokumente und E-Mail-Vorlagen zu erstellen und zu verwalten. Bietet eine intuitive Drag-and-Drop-Schnittstelle unter Verwendung von shadcn/ui und Tailwind CSS, ohne Abhängigkeiten von Drittanbieter-Buildern, und gewährleistet strikte Typsicherheit durch TypeScript.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "shadcn", "tailwind", "typescript"],
          icon: projects[0]?.icon || Code2
        },
        {
          title: "AccessVault - Rollenbasiertes Anmeldedaten-Verwaltungssystem",
          desc: "Eine sichere Anwendung zur Verwaltung von Anmeldedaten mit rollenbasiertem Zugriff für Admin-, Manager- und Viewer-Benutzer. Implementierung von JWT-Authentifizierung und bcrypt-Passwort-Hashing, Entwurf von MongoDB-Schemata mit Validierungsregeln und Erstellung von REST-APIs mit Audit-Protokollierungsfunktionen.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
          icon: projects[1]?.icon || Code2
        }
      ];
    }
    if (language === 'ar') {
      return [
        {
          title: "html-formeditor [opensrc]",
          desc: "محرر مرئي مخصص بأسلوب الكانفاس تم بناؤه من الصفر لإنشاء وإدارة مستندات الشركة الرسمية وقوالب البريد الإلكتروني. يتميز بواجهة سحب وإفلات بديهية تعتمد على shadcn/ui و Tailwind CSS، مما يلغي الاعتماد على حزم البناء الخارجية، مع ضمان أمان كامل للأنواع باستخدام TypeScript.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "shadcn", "tailwind", "typescript"],
          icon: projects[0]?.icon || Code2
        },
        {
          title: "AccessVault - نظام إدارة الاعتمادات والصلاحيات",
          desc: "تطبيق آمن لإدارة بيانات الاعتماد مع وصول قائم على الأدوار للمستخدمين من فئات المسؤول والمدير والمشاهد. تم تنفيذ مصادقة JWT وتشفير كلمات المرور عبر bcrypt، وتصميم مخططات MongoDB مع قواعد التحقق، وبناء واجهات REST APIs مع ميزات تسجيل تدقيق الحسابات.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
          icon: projects[1]?.icon || Code2
        }
      ];
    }
    return projects;
  };

  const localizedList = getLocalizedProjects();

  return (
    <section id="projects" className="py-24 sm:py-32 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-white/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading pretitle={t.projectsPretitle} title={t.projectsTitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {localizedList.map((project, idx) => (
            <div 
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              key={idx} 
              className="h-full"
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 sm:p-8 rounded-[2rem] bg-white/80 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 h-full relative overflow-hidden cursor-pointer select-none"
                whileTap={{ scale: 0.98 }}
              >
                {/* Subtle top gold gradient overlay on hover */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-stone-200 via-[#bf9d55]/30 to-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#bf9d55]/0 via-[#bf9d55]/2 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top action block */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 shrink-0 bg-[#bf9d55]/10 border border-[#bf9d55]/20 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:border-[#bf9d55]/40 transition-all duration-500 text-[#bf9d55]">
                      <project.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="w-9 h-9 shrink-0 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-[#bf9d55] group-hover:border-[#bf9d55] group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-3 group-hover:text-[#bf9d55] transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Technologies tags container at bottom */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-stone-100/80">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 bg-stone-100/75 border border-stone-200/50 text-stone-600 text-[9px] font-bold uppercase tracking-wider rounded-lg hover:border-[#bf9d55]/30 hover:bg-white transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
