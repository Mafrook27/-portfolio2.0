import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillTagProps {
  skill: {
    label: string;
    percentage: number;
    icon: any;
    color: string;
  };
  idx: number;
  parentIdx: number;
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill, idx, parentIdx }) => {
  // Dynamic progressive stagger delay
  const tagDelay = (idx * 40);

  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={tagDelay}
      data-aos-duration="600"
      className="w-full h-full"
    >
      <motion.div 
        className="group/tag flex items-center gap-2.5 md:gap-3 px-3 py-2.5 md:px-5 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 w-full h-full cursor-pointer select-none clay-bubble hover:clay-card"
        whileHover={{ 
          scale: 1.02,
          borderColor: `${skill.color}50`,
          backgroundColor: `${skill.color}05`
        }}
        whileTap={{ scale: 0.96 }}
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
      </motion.div>
    </div>
  );
};
