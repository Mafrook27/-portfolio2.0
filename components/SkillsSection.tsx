import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SkillCategory } from './SkillCategory';
import { skills } from '../data';
import { useLanguage } from './LanguageContext';

export const SkillsSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#F9F8F4] text-stone-900 relative overflow-hidden border-y border-stone-200/50">
      {/* Minimal Background embellishment */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading pretitle={t.skillsPretitle} title={t.skillsTitle} dark={false} />
        
        <div className="mt-16 md:mt-24 border-t border-stone-200/60 pt-4">
          <SkillCategory 
            idx={0}
            title={isRtl ? "لغات البرمجة" : "Languages"} 
            description={t.skillsDescLanguages}
            skills={skills.languages} 
          />
          <SkillCategory 
            idx={1}
            title={isRtl ? "بيئات العمل والأنظمة" : "Frameworks"} 
            description={t.skillsDescFrameworks}
            skills={skills.frameworks} 
          />
          <SkillCategory 
            idx={2}
            title={isRtl ? "البيئات والأدوات" : "Systems & Tools"} 
            description={t.skillsDescTools}
            skills={skills.tools} 
          />
          <SkillCategory 
            idx={3}
            title={isRtl ? "الذكاء الاصطناعي وهندسة الأوامر" : "AI & Prompt Engineering"} 
            description={t.skillsDescAI}
            skills={skills.ai} 
          />
        </div>
      </div>
    </section>
  );
};

