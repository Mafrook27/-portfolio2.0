import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  pretitle: string;
  title: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ pretitle, title, dark = false }) => (
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
export default SectionHeading;
