import React from 'react';
import { SkillTag } from './SkillTag';

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Array<{
    label: string;
    percentage: number;
    icon: any;
    color: string;
  }>;
  idx: number;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, description, skills, idx }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={idx * 150}
      data-aos-duration="1000"
      className="py-10 lg:py-16 border-t border-stone-200/60 first:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group"
    >
      <div className="md:col-span-4 lg:col-span-3">
        <div className="flex items-center gap-4 mb-3 md:mb-4">
          <span className="text-stone-300 font-mono text-xs md:text-sm tracking-widest group-hover:text-[#bf9d55] transition-colors duration-500">0{idx + 1}</span>
          <div className="w-8 h-[1px] bg-stone-200 group-hover:bg-[#bf9d55] group-hover:w-12 transition-all duration-500"></div>
        </div>
        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-stone-900 mb-2 md:mb-3">{title}</h3>
        <p className="text-stone-500 text-xs leading-relaxed max-w-sm font-light">{description}</p>
      </div>
      <div className="md:col-span-8 lg:col-span-9 flex items-center w-full">
        <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 w-full">
          {skills.map((skill, skillIdx) => (
            <SkillTag key={skill.label} skill={skill} idx={skillIdx} parentIdx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
