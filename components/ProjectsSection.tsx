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
          title: "AccessVault - Rollenbasiertes Anmeldedaten-Verwaltungssystem",
          desc: "Ein sicheres Ökosystem für Anmeldedaten, das die Ebenen Admin, Manager und Viewer unterstützt. Bietet robuste JWT-Authentifizierung, bcrypt-Passwort-Hashing und umfassende Express-basierte REST-APIs mit datenbankintegrierten Validierungsschemata unter Verwendung von Mongoose/MongoDB.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
          icon: projects[0].icon
        },
        {
          title: "Kredit-Workflow-Plattform (Statlight)",
          desc: "Interaktive, für Administratoren konzipierte Arbeitsabläufe zur Verwaltung von Kreditantrags-Tracking und Zustandsautomaten (Ausstehend, Genehmigt, Abgelehnt, Geschlossen). Entwicklung wiederverwendbarer modularer Komponenten und optimierte Synchronisation des UI-Zustands über den React Query-Caching-Layer.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "React Query", "REST API", "Tailwind CSS", "MERN Stack"],
          icon: projects[1].icon
        },
        {
          title: "Banksystem & Gesichtsanmeldung",
          desc: "Ein sicheres Portal für Electronic Banking, entwickelt mit Python, Flask und OpenCV für Vorlagen zur Gesichtserkennung bei der Anmeldung, datenbankgesteuerten Pipelines zur Kontostandaktualisierung und einem strukturierten Transaktionsspeicherlayout unter MySQL.",
          github: "https://github.com/Mafrook27",
          technologies: ["Python", "Flask", "OpenCV", "MySQL", "HTML/CSS"],
          icon: projects[2].icon
        }
      ];
    }
    if (language === 'ar') {
      return [
        {
          title: "AccessVault - نظام إدارة الاعتمادات والصلاحيات",
          desc: "نظام آمن لإدارة بيانات الاعتماد يدعم مستويات الصلاحيات: مدير النظام (Admin)، مدير العمليات (Manager)، والمشاهد (Viewer). يتميز بمصادقة JWT قوية، وتشفير كلمات المرور عبر bcrypt، وواجهات REST APIs شاملة مبنية على Express مع مخططات تحقق مدمجة في قاعدة بيانات Mongoose/MongoDB.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
          icon: projects[0].icon
        },
        {
          title: "منصة تدفقات قروض الائتمان (Statlight)",
          desc: "واجهات عمل تفاعلية موجهة للمسؤولين لإدارة تتبع طلبات القروض وآلات الحالة (قيد الانتظار، مقبول، مرفوض، مغلق). تم بناء مكونات برمجية مخصصة قابلة لإعادة الاستخدام مع تحسين مزامنة حالة واجهة المستخدم باستخدام طبقة التخزين المؤقت في React Query.",
          github: "https://github.com/Mafrook27",
          technologies: ["React.js", "React Query", "REST API", "Tailwind CSS", "MERN Stack"],
          icon: projects[1].icon
        },
        {
          title: "النظام المصرفي والولوج بالتعرف على الوجه",
          desc: "بوابة مصرفية إلكترونية آمنة تم تطويرها باستخدام لغة Python و Flask و OpenCV لإنشاء قوالب تسجيل دخول ذكية تعتمد على التعرف على الوجه، بالإضافة إلى تدفقات تحديث الأرصدة مدفوعة بقواعد البيانات، ومخطط تخزين معاملات منظم وقوي باستخدام MySQL.",
          github: "https://github.com/Mafrook27",
          technologies: ["Python", "Flask", "OpenCV", "MySQL", "HTML/CSS"],
          icon: projects[2].icon
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
