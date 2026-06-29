import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import { HeroScene } from './QuantumScene';
import SplitText from './SplitText';
import { socialLinks } from '../data';
import { useLanguage } from './LanguageContext';

interface HeroSectionProps {
  setIsResumeOpen: (open: boolean) => void;
  currentRoleIndex: number;
  roles: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setIsResumeOpen, currentRoleIndex }) => {
  const { t, isRtl } = useLanguage();

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F9F8F4] pt-20">
      {/* Preserved 3D background */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none transition-opacity duration-1000">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F9F8F4_100%)] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            boxShadow: [
              "0 2px 10px rgba(34, 197, 94, 0.05), 0 0 0 0px rgba(34, 197, 94, 0)",
              "0 4px 20px rgba(34, 197, 94, 0.18), 0 0 0 6px rgba(34, 197, 94, 0.08)",
              "0 2px 10px rgba(34, 197, 94, 0.05), 0 0 0 0px rgba(34, 197, 94, 0)"
            ]
          }}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 0.8, ease: "easeOut" },
            boxShadow: {
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut"
            },
            y: { duration: 0.2 }
          }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#22c55e]/20 hover:border-[#22c55e]/40 bg-white/60 backdrop-blur-md rounded-full cursor-pointer select-none transition-colors duration-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-[0.15em] text-stone-600 uppercase">{t.availableForWork}</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-stone-500 font-mono text-sm sm:text-base mb-1 tracking-wider"
        >
          {t.greeting}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.5rem,8.5vw,4.5rem)] sm:text-[clamp(3.5rem,8vw,6rem)] md:text-[clamp(4.5rem,8.5vw,7rem)] lg:text-[clamp(5rem,8vw,7.5rem)] xl:text-[clamp(6rem,8.5vw,9rem)] font-medium leading-[0.95] text-stone-900 tracking-tighter"
        >
          <SplitText
            text={isRtl ? "ك. مفروق" : "Mafrook"}
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
              className="text-xs sm:text-sm md:text-base lg:text-lg font-mono uppercase tracking-[0.16em] text-stone-500 font-semibold animate-pulse"
            >
              {t.roles[currentRoleIndex] || t.roles[0]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl mx-auto mt-4 md:mt-6 text-sm sm:text-base text-stone-600 font-light leading-relaxed px-6"
        >
          {t.heroSub}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8 md:mt-10 w-full animate-fade"
        >
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="group bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold px-8 py-4 rounded-full text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1 relative overflow-hidden shrink-0"
          >
            <FileText size={16} className="text-nobel-gold group-hover:scale-110 transition-transform" />
            <span>{t.resume}</span>
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
  );
};
