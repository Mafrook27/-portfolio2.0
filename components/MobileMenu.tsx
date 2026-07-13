import React from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText } from 'lucide-react';
import { socialLinks } from '../data';
import { useLanguage, Language } from './LanguageContext';

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
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeIn",
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -15, 
      transition: { duration: 0.2, ease: "easeIn" } 
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
      className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-6 px-6"
    >
      {/* Mobile Nav Links */}
      <div className="flex flex-col items-center justify-center gap-5 text-lg font-sans font-extrabold mt-12">
        {menuItems.map((item) => (
          <motion.a
            key={item.label}
            variants={itemVariants}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-clay text-ink transition-colors uppercase tracking-widest"
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      {/* Primary Mobile CTA buttons */}
      <motion.div variants={itemVariants} className="flex flex-col gap-2.5 w-60 mt-4">
        <a 
          href="https://wa.me/918925661541"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="border border-line text-ink-soft bg-card hover:bg-paper-2 active:scale-95 font-sans font-semibold text-[10px] tracking-widest uppercase py-3 rounded-md flex items-center justify-center gap-1.5 transition-all shadow-sm"
        >
          <Phone size={11} className="text-clay" />
          <span>{t.getInTouch}</span>
        </a>

        <button 
          onClick={() => {
            setMenuOpen(false);
            setIsResumeOpen(true);
          }}
          className="bg-clay hover:brightness-110 text-white font-sans font-semibold text-[10px] tracking-widest uppercase py-3 rounded-md flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          <FileText size={11} />
          <span>{t.resume}</span>
        </button>
      </motion.div>

      {/* Language selections */}
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 mt-4">
        <span className="text-[9px] font-bold tracking-widest text-ink-soft/50 uppercase font-mono">
          Select Language
        </span>
        <div className="flex items-center bg-paper-2 p-0.5 rounded-full border border-line">
          {(['en', 'de', 'ar'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded-full text-[10px] font-extrabold transition-all cursor-pointer ${
                language === lang 
                  ? 'bg-clay text-white shadow-sm' 
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div variants={itemVariants} className="flex gap-3.5 mt-4">
        {socialLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-ink-soft hover:text-clay active:scale-90 transition-all p-2 bg-card rounded-md border border-line"
          >
            <link.icon size={16} />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
