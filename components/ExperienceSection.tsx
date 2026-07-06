import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../data';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

interface ExperienceSectionProps {
  totalExp: {
    label: string;
    shortLabel: string;
    years: number;
    months: number;
  };
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ totalExp }) => {
  const { language, t } = useLanguage();

  const getLocalizedExperience = () => {
    if (language === 'de') {
      return [
        {
          role: "Junior-Softwareentwickler",
          company: "Statlight Software Solutions",
          location: "Bengaluru, Indien | Hybrid",
          period: "Juli 2025 - Heute",
          points: [
            "Entwicklung dynamischer React-Module für eine kommerzielle Kreditverwaltungs- und Onboarding-Plattform.",
            "Refactoring von Legacy-UI-Komponenten von Angular in skalierbare, hochperformante React-Layouts.",
            "Erstellung sicherer REST-APIs mit Node/Express, geschützt durch JWT-Rollenvalidierung und optimierte Mongoose-Schemata.",
            "Synchronisierung von Server-Zuständen über die Browser-Ebene mit React Query zur Vermeidung redundanter Datenzyklen."
          ]
        },
        {
          role: "Technischer Trainer",
          company: "Livewire Institutions",
          location: "Mayiladuthurai, Indien",
          period: "Okt. 2024 - Feb. 2025",
          points: [
            "Ausbildung von Nachwuchsingenieuren in grundlegenden Full-Stack-Konzepten für JavaScript, Python und CRUD-APIs.",
            "Mentoring von Studenten beim Aufbau von datenbankintegrierten Web-Prototypen und beim Debuggen von Netzwerkschichten."
          ]
        }
      ];
    }
    if (language === 'ar') {
      return [
        {
          role: "مهندس برمجيات جونيور",
          company: "Statlight Software Solutions",
          location: "بنغالور، الهند | عمل هجين",
          period: "يوليو 2025 - حتى الآن",
          points: [
            "بناء وحدات React تفاعلية لمنصة تجارية لإدارة القروض والتهيئة.",
            "إعادة هيكلة مكونات واجهة المستخدم القديمة من Angular إلى تخطيطات React عالية الأداء وقابلة للتطوير.",
            "بناء واجهات برمجية REST آمنة بـ Node/Express مدعومة بالتحقق من صلاحية JWT ونماذج Mongoose المحسنة.",
            "مزامنة حالات السيرفر مع المتصفح باستخدام React Query لإلغاء دورات البيانات الزائدة والطلب غير الضروري."
          ]
        },
        {
          role: "مدرب تقني",
          company: "Livewire Institutions",
          location: "مايلادوثوراي، الهند",
          period: "أكتوبر 2024 - فبراير 2025",
          points: [
            "تدريب المهندسين المبتدئين على مفاهيم الـ Full-Stack الأساسية عبر JavaScript و Python و CRUD APIs.",
            "توجيه ومساعدة الطلاب في بناء نماذج ويب متكاملة مع قواعد البيانات وتصحيح أخطاء شبكة الاتصال."
          ]
        }
      ];
    }
    return experience;
  };

  const localizedList = getLocalizedExperience();

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FDFDFD] relative overflow-hidden border-b border-stone-200/40">
      {/* Elegant decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F9F8F4] blur-[100px] rounded-full pointer-events-none opacity-60"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 pb-6 mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#bf9d55] uppercase font-mono">{t.expPretitle}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mt-2">{t.expTitle}</h2>
          </div>
          <div className="flex justify-center md:justify-end shrink-0">
            <span className="inline-flex items-center justify-center text-center gap-1.5 px-4 py-1.5 bg-[#bf9d55]/10 text-[#bf9d55] font-sans font-semibold text-xs tracking-wider uppercase rounded-full border border-[#bf9d55]/20 shadow-sm">
              <Briefcase size={12} className="text-[#bf9d55]" />
              {totalExp.years} {t.expYears} {t.expLabel}
            </span>
          </div>
        </div>
        
        <div className="relative pl-6 sm:pl-8 border-l border-stone-200/75 ml-2 sm:ml-4 space-y-12">
          {localizedList.map((exp, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="1000"
              className="relative group"
            >
              {/* Decorative Timeline Circular Pulse Badge */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-8 w-4 h-4 rounded-full border-2 border-white bg-stone-300 group-hover:bg-[#bf9d55] group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10"></div>
                            {/* Compact Flex Grid Structure styled with Claymorphism */}
              <motion.div 
                className="clay-card p-5 sm:p-6 md:p-8 rounded-[1.75rem] flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 cursor-pointer select-none"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Left Metadata Column */}
                <div className="space-y-1 sm:space-y-1.5 md:w-1/3 shrink-0">
                  <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#bf9d55] tracking-widest uppercase bg-[#bf9d55]/10 border border-[#bf9d55]/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono">
                    {exp.period}
                  </span>
                  <p className="text-stone-400 text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold uppercase mt-0.5 sm:mt-1">
                    {exp.location}
                  </p>
                </div>
                
                {/* Right Main Content Column */}
                <div className="md:w-2/3 space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-stone-900 leading-tight group-hover:text-[#bf9d55] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 sm:mt-1.5 text-xs sm:text-sm font-semibold text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9d55]"></span>
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  {/* Styled Bullet Points */}
                  <ul className="space-y-2.5 text-xs text-stone-500 font-light leading-relaxed list-none pl-0">
                    {exp.points.map((point, ptIdx) => (
                      <li key={ptIdx} className="relative pl-4 hover:text-stone-800 transition-colors duration-150">
                        <span className="absolute left-0 top-[6px] w-[5px] h-[5px] bg-[#bf9d55]/40 rounded-full group-hover:bg-[#bf9d55] transition-colors"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tag highlighters */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {idx === 0 ? (
                      <>
                        <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-all hover:border-[#bf9d55]/30 active:scale-95 cursor-pointer">
                          #MERN Stack
                        </span>
                        <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-all hover:border-[#bf9d55]/30 active:scale-95 cursor-pointer">
                          #React Query
                        </span>
                        <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-all hover:border-[#bf9d55]/30 active:scale-95 cursor-pointer">
                          #REST APIs
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-all hover:border-[#bf9d55]/30 active:scale-95 cursor-pointer">
                          #JS & Python
                        </span>
                        <span className="text-[9px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/30 px-2.5 py-1 rounded-full transition-all hover:border-[#bf9d55]/30 active:scale-95 cursor-pointer">
                          #Mentorship
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
