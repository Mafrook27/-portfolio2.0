import React from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText } from 'lucide-react';
import { socialLinks } from '../data';
import { useLanguage } from './LanguageContext';

interface MobileMenuProps {
  setMenuOpen: (open: boolean) => void;
  setIsResumeOpen: (open: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ setMenuOpen, setIsResumeOpen }) => {
  const { language, setLanguage, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const menuItems = [
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.experience, href: "#experience" },
    { label: t.projects, href: "#projects" },
    { label: t.milestones, href: "#certifications" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-6 px-6"
    >
      <div className="flex flex-col items-center justify-center gap-6 text-2xl font-serif mt-12">
        {menuItems.map((item) => (
          <motion.a
            key={item.label}
            variants={itemVariants}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-nobel-gold text-stone-800 transition-colors uppercase tracking-wider font-semibold active:scale-95 transition-transform duration-200"
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      <motion.div variants={itemVariants} className="flex flex-col gap-3 w-64 mt-6">
        <a 
          href="https://wa.me/918925661541"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="border border-stone-200 text-stone-700 bg-white hover:bg-stone-50 active:scale-[0.97] active:bg-stone-100 font-sans font-semibold text-xs tracking-widest uppercase py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
        >
          <Phone size={14} className="text-[#bf9d55]" />
          <span>{t.getInTouch}</span>
        </a>

        <button 
          onClick={() => {
            setMenuOpen(false);
            setIsResumeOpen(true);
          }}
          className="bg-stone-900 text-white font-sans font-semibold text-xs tracking-widest uppercase py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.97] active:bg-stone-800 shadow-md cursor-pointer"
        >
          <FileText size={14} className="text-nobel-gold" />
          <span>{t.resume}</span>
        </button>
      </motion.div>

      {/* Explicit Language Selector in Mobile Drawer */}
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 mt-4">
        <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase font-mono">
          {language === 'ar' ? 'اختر اللغة' : language === 'de' ? 'Sprache auswählen' : 'Select Language'}
        </span>
        <div className="flex items-center bg-stone-200/40 p-0.5 rounded-full border border-stone-300/30">
          {(['en', 'de', 'ar'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                language === lang 
                  ? 'bg-[#bf9d55] text-white shadow-sm' 
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex gap-4 mt-6">
        {socialLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-stone-600 hover:text-nobel-gold active:scale-90 active:bg-stone-100 transition-all p-2 bg-white/50 rounded-full border border-stone-200/50"
          >
            <link.icon size={22} />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};
