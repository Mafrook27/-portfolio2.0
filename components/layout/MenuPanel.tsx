import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Download, Phone, Sun, Moon, Terminal, PenLine, User, Wrench, Briefcase, FolderGit2, Award } from 'lucide-react';
import { socialLinks } from '../../lib/data';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

interface MenuPanelProps {
  setMenuOpen: (open: boolean) => void;
  setIsResumeOpen: (open: boolean) => void;
}

// Floating command-card menu. Anchored under the navbar, floats above the
// app content instead of replacing the whole screen.
export const MenuPanel: React.FC<MenuPanelProps> = ({ setMenuOpen, setIsResumeOpen }) => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  const close = () => setMenuOpen(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sectionItems = [
    { label: t.about, hash: '#about', icon: User },
    { label: t.skills, hash: '#skills', icon: Wrench },
    { label: t.experience, hash: '#experience', icon: Briefcase },
    { label: t.projects, hash: '#projects', icon: FolderGit2 },
    { label: t.milestones, hash: '#certifications', icon: Award },
  ];

  const pageItems = [
    { label: t.prompts, to: '/prompts', icon: Terminal, note: 'AI prompt library' },
    { label: t.blog, to: '/blog', icon: PenLine, note: 'Notes & thoughts' },
  ];

  return (
    <>
      {/* Dimmed backdrop over the app */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={close}
        className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-[3px]"
      />

      {/* Floating panel */}
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        className="fixed top-16 right-4 left-4 sm:left-auto sm:w-80 z-50 origin-top-right bg-card border border-line rounded-2xl shadow-2xl p-4 max-h-[calc(100dvh-5.5rem)] overflow-y-auto"
        role="dialog"
        aria-label={t.menu}
      >
        {/* Section links (home anchors) */}
        <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-ink-soft/50 mb-2 px-1">
          {t.menu}
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {sectionItems.map((item) => (
            <a
              key={item.hash}
              href={onHome ? item.hash : `/${item.hash}`}
              onClick={close}
              className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[12px] font-bold text-ink hover:bg-paper-2 hover:text-clay transition-colors"
            >
              <item.icon size={13} className="text-clay shrink-0" />
              {item.label}
            </a>
          ))}
        </div>

        {/* Pages */}
        <div className="mt-3 pt-3 border-t border-dashed border-line grid gap-1.5">
          {pageItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-colors ${
                pathname.startsWith(item.to) ? 'bg-paper-2 text-clay' : 'text-ink hover:bg-paper-2 hover:text-clay'
              }`}
            >
              <item.icon size={14} className="text-clay shrink-0" />
              <span className="text-[12px] font-bold">{item.label}</span>
              <span className="text-[10px] text-ink-soft/60 ml-auto">{item.note}</span>
            </Link>
          ))}
        </div>

        {/* Resume — view / download / contact */}
        <div className="mt-3 pt-3 border-t border-dashed border-line">
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-ink-soft/50 mb-2 px-1">
            {t.resume}
          </p>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              onClick={() => {
                close();
                setIsResumeOpen(true);
              }}
              className="flex flex-col items-center gap-1 py-2.5 rounded-lg bg-clay text-white text-[9px] font-bold uppercase tracking-wider active:scale-95 hover:brightness-110 transition-all cursor-pointer"
            >
              <Eye size={13} />
              View
            </button>
            <a
              href="/resume.pdf"
              download
              onClick={close}
              className="flex flex-col items-center gap-1 py-2.5 rounded-lg border border-line bg-paper-2 text-ink-soft text-[9px] font-bold uppercase tracking-wider active:scale-95 hover:text-clay transition-all"
            >
              <Download size={13} />
              PDF
            </a>
            <a
              href="https://wa.me/918925661541"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex flex-col items-center gap-1 py-2.5 rounded-lg border border-line bg-paper-2 text-ink-soft text-[9px] font-bold uppercase tracking-wider active:scale-95 hover:text-clay transition-all"
            >
              <Phone size={13} />
              Contact
            </a>
          </div>
        </div>

        {/* Theme + socials */}
        <div className="mt-3 pt-3 border-t border-dashed border-line flex items-center justify-between">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 h-8 px-3 rounded-full border border-line bg-paper-2 text-[10px] font-bold uppercase tracking-wider text-ink-soft hover:text-clay active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={12} className="text-amber-400" /> : <Moon size={12} />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <div className="flex gap-1.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-line bg-paper-2 text-ink-soft hover:text-clay active:scale-90 transition-all"
                aria-label={link.name}
              >
                <link.icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MenuPanel;
