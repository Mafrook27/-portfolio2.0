import React from 'react';
import { Phone, FileText, Menu, Globe, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage, Language } from './LanguageContext';
import { useTheme } from './ThemeContext';

interface HeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setIsResumeOpen: (open: boolean) => void;
  hideNavbar?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, menuOpen, setMenuOpen, setIsResumeOpen, hideNavbar }) => {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
      scrolled && !menuOpen 
        ? 'top-3 px-4 sm:px-6 lg:px-8 flex justify-center' 
        : 'top-0 px-0 w-full'
    } ${hideNavbar ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
      <div className={`w-full transition-all duration-300 flex justify-between items-center ${
        scrolled && !menuOpen 
          ? 'max-w-4xl bg-card border border-line shadow-md py-2 px-5 sm:px-6 rounded-full' 
          : 'max-w-5xl mx-auto px-6 sm:px-8 py-3.5 lg:py-4 bg-transparent border-b border-transparent'
      }`}>
        
        {/* Name brand / logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-sans font-black text-base sm:text-lg tracking-tight text-ink flex items-center gap-1">
            {isRtl ? 'مفروق' : 'mafrook'}
            {!isRtl && <span className="text-clay font-black">.</span>}
            <motion.span 
              className="inline-block origin-[70%_70%] ml-0.5"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-ink-soft">
          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-clay transition-colors">{t.about}</a>
            <a href="#skills" className="hover:text-clay transition-colors">{t.skills}</a>
            <a href="#experience" className="hover:text-clay transition-colors">{t.experience}</a>
            <a href="#projects" className="hover:text-clay transition-colors">{t.projects}</a>
            <a href="#certifications" className="hover:text-clay transition-colors">{t.milestones}</a>
          </div>
          
          <span className="h-4 w-px bg-line"></span>

          <div className="flex items-center gap-3.5">
            {/* Elegant Language Pill Selection */}
            <div className="flex items-center bg-paper-2 p-0.5 rounded-full border border-line">
              {(['en', 'de', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-extrabold transition-all ${
                    language === lang 
                      ? 'bg-clay text-white shadow-sm' 
                      : 'text-ink-soft hover:text-ink hover:bg-card'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Toggle - Elegant Compact Icon Button */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-paper-2 border border-line text-ink flex items-center justify-center cursor-pointer shadow-sm hover:translate-y-[-1px] active:scale-95 transition-all select-none hover:bg-card"
              aria-label="Toggle dark mode"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={12} className="text-amber-400" />
              ) : (
                <Moon size={12} className="text-stone-600" />
              )}
            </button>

            <button 
              onClick={() => setIsResumeOpen(true)}
              className="bg-clay hover:brightness-110 text-white font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm hover:translate-y-[-1px] transition-all flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <FileText size={11} />
              <span>{t.resume}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick cycle language */}
          <button
            onClick={() => {
              const langs: Language[] = ['en', 'de', 'ar'];
              const nextIdx = (langs.indexOf(language) + 1) % langs.length;
              setLanguage(langs[nextIdx]);
            }}
            className="h-8 px-2.5 rounded-full border border-line bg-card flex items-center gap-1 text-[9px] font-extrabold text-ink-soft active:scale-95 hover:bg-paper-2 transition-all cursor-pointer shadow-sm"
            title="Cycle Language"
          >
            <Globe size={11} className="text-clay" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Quick theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-line bg-card flex items-center justify-center text-ink active:scale-95 hover:bg-paper-2 transition-all cursor-pointer shadow-sm"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={12} className="text-amber-400" /> : <Moon size={12} className="text-stone-600" />}
          </button>

          {/* Resume and Hamburger toggle */}
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="w-8 h-8 bg-clay text-white rounded-full shadow-sm active:scale-95 hover:brightness-110 transition-all flex items-center justify-center cursor-pointer"
            title="Open Resume"
          >
            <FileText size={11} />
          </button>

          <button 
            className="w-8 h-8 text-ink active:scale-95 flex items-center justify-center rounded-full hover:bg-paper-2 transition-colors cursor-pointer" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
