import React from 'react';
import { Phone, FileText, X, Menu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage, Language } from './LanguageContext';

interface HeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setIsResumeOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, menuOpen, setMenuOpen, setIsResumeOpen }) => {
  const { language, setLanguage, t, isRtl } = useLanguage();

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
      scrolled && !menuOpen 
        ? 'top-4 px-4 sm:px-6 lg:px-8 flex justify-center' 
        : 'top-0 px-0 w-full'
    }`}>
      <div className={`w-full transition-all duration-500 flex justify-between items-center ${
        scrolled && !menuOpen 
          ? 'max-w-6xl xl:max-w-7xl bg-[#F9F8F4]/90 backdrop-blur-lg shadow-[0_12px_45px_rgba(0,0,0,0.06)] py-2.5 px-4 sm:px-8 rounded-full border border-stone-200/60' 
          : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6 bg-transparent border border-stone-200/0'
      }`}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={`font-serif font-bold text-base sm:text-lg lg:text-xl tracking-wide transition-opacity flex items-center gap-2 ${scrolled ? 'opacity-100 text-stone-900' : 'opacity-0 lg:opacity-100 text-stone-900'}`}>
            {isRtl ? 'مفروق' : 'MAFROOK'}
            <motion.span 
              className="inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-[11px] xl:text-xs font-semibold tracking-wider text-stone-600">
          {/* Main Navigation Links */}
          <div className="flex items-center gap-4 xl:gap-6">
            <a href="#about" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">{t.about}</a>
            <a href="#skills" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">{t.skills}</a>
            <a href="#experience" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">{t.experience}</a>
            <a href="#projects" className="hover:text-[#bf9d55] transition-colors uppercase px-1 py-1">{t.projects}</a>
            <a href="#certifications" className="hover:text-nobel-gold transition-colors uppercase px-1 py-1">{t.milestones}</a>
          </div>
          
          {/* Elegant Visual Splitter */}
          <span className="h-4 w-px bg-stone-200/80"></span>

          {/* Core Action & Language Panel */}
          <div className="flex items-center gap-3.5 xl:gap-5">
            {/* Quick Language Toggle Selector */}
            <div className="flex items-center bg-stone-200/40 hover:bg-stone-200/70 p-0.5 rounded-full border border-stone-300/30 transition-all">
              {(['en', 'de', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold transition-all ${language === lang ? 'bg-[#bf9d55] text-white shadow-sm' : 'text-stone-500 hover:text-stone-900'}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <a 
              href="https://wa.me/918925661541"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#bf9d55]/30 hover:border-[#bf9d55] bg-[#F9F8F4]/40 hover:bg-[#bf9d55]/5 text-[#bf9d55] font-sans font-semibold text-[9px] xl:text-[10px] tracking-widest uppercase px-3.5 xl:px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 hover:-translate-y-0.5 shadow-sm shrink-0"
            >
              <Phone size={11} className="text-[#bf9d55]" />
              <span>{t.getInTouch}</span>
            </a>

            <button 
              onClick={() => setIsResumeOpen(true)}
              className="bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-[9px] xl:text-[10px] tracking-widest uppercase px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 hover:-translate-y-0.5 border border-stone-800 shrink-0 cursor-pointer"
            >
              <FileText size={11} className="text-nobel-gold" />
              <span>{t.resume}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          {/* Mobile Space-Saving Quick Language Cycle Button */}
          <button
            onClick={() => {
              const langs: Language[] = ['en', 'de', 'ar'];
              const nextIdx = (langs.indexOf(language) + 1) % langs.length;
              setLanguage(langs[nextIdx]);
            }}
            className="h-8 px-2.5 rounded-full border border-stone-200 bg-white/90 flex items-center gap-1 text-[9px] font-bold text-stone-700 active:scale-95 hover:bg-stone-50 transition-all shrink-0 cursor-pointer shadow-sm"
            title="Cycle Language"
          >
            <Globe size={11} className="text-[#bf9d55]" />
            <span className="uppercase">{language}</span>
          </button>

          {!menuOpen && (
            <div className="flex items-center gap-1.5 shrink-0">
              <a 
                href="https://wa.me/918925661541"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-stone-200/80 text-stone-700 rounded-full shadow-sm bg-white hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Get in Touch"
                title="Get in Touch"
              >
                <Phone size={12} className="text-[#bf9d55]" />
              </a>
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="w-8 h-8 bg-stone-900 text-white rounded-full shadow-sm active:scale-95 transition-all flex items-center justify-center cursor-pointer animate-fade-in"
              >
                <FileText size={12} className="text-nobel-gold" />
              </button>
            </div>
          )}
          <button 
            className="w-8 h-8 text-stone-900 active:scale-95 flex items-center justify-center rounded-full hover:bg-stone-100/50 transition-colors shrink-0 cursor-pointer" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
