import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export const FlyingPaperRocket: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const { theme } = useTheme();
  const [isLaunching, setIsLaunching] = useState(false);
  const [bgRocketCount, setBgRocketCount] = useState(0);

  // Auto-launch a subtle background rocket every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgRocketCount(prev => prev + 1);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const triggerLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
    }, 4500); // Animation duration
  };

  const getButtonText = () => {
    if (language === 'de') return "Papierflieger starten! ✈️";
    if (language === 'ar') return "أطلق صاروخاً ورقياً! 🚀";
    return "Launch paper rocket! 🚀";
  };

  return (
    <>
      {/* 1. Global Floating Tactile Widget to manual trigger paper rocket */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block select-none pointer-events-auto">
        <div className="relative">
          {/* A small tape holding the launch note */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-tape/80 dark:bg-tape/50 rotate-[-4deg] z-10 shadow-sm clip-jagged"
               style={{
                 clipPath: 'polygon(3% 0%, 97% 2%, 100% 20%, 98% 80%, 100% 100%, 93% 96%, 7% 100%, 0% 95%, 4% 80%, 0% 20%)'
               }}
          />
          <motion.button
            onClick={triggerLaunch}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 bg-card border border-line rounded-sm shadow-md flex items-center gap-2 text-ink-soft hover:text-clay text-xs font-bold cursor-pointer transition-colors duration-200"
            style={{ rotate: '2deg' }}
          >
            {/* Hand-drawn pencil outline of a paper rocket/plane */}
            <svg className="w-4 h-4 text-clay shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 22 L22 2 L13 18 L10 14 L6 13 Z" />
              <path d="M22 2 L10 14" />
            </svg>
            <span className="font-handwriting text-sm font-semibold tracking-wide">
              {getButtonText()}
            </span>
          </motion.button>
        </div>
      </div>

      {/* 2. Interactive Manual Launched Rocket Animation */}
      <AnimatePresence>
        {isLaunching && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {/* The SVG Flight Trail path */}
            <svg className="absolute inset-0 w-full h-full text-clay/15 dark:text-clay/8" fill="none">
              <motion.path
                d="M 50 850 Q 150 400 450 600 T 800 300 Q 1100 100 1400 450 T 1950 100"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
            </svg>

            {/* The flying Paper Rocket model */}
            <motion.div
              style={{ x: 50, y: 850, position: 'absolute' }}
              animate={{
                x: [50, 200, 450, 600, 800, 1100, 1400, 1700, 2000],
                y: [850, 500, 600, 480, 300, 150, 450, 300, -100],
                rotate: [45, -20, 45, 10, -35, -45, 60, -15, -45],
                scale: [0.6, 0.9, 1.1, 1.0, 0.9, 1.1, 0.8, 1.0, 0.6]
              }}
              transition={{
                duration: 4.2,
                ease: "easeInOut",
              }}
              className="text-clay drop-shadow-[4px_12px_8px_rgba(0,0,0,0.15)]"
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-[45deg]">
                {/* Hand-sketched folded paper airplane */}
                <path d="M 22 2 L 2 9 L 11 13 L 13 11 L 11 13 L 15 22 Z" />
                <path d="M 22 2 L 11 13" />
                {/* Additional sketch fold lines to look more "handdrawn papercraft" */}
                <path d="M 13 11 L 15 22 L 22 2" opacity="0.7" strokeWidth="1.2" />
                <path d="M 2 9 L 11 13 L 22 2" opacity="0.7" strokeWidth="1.2" />
              </svg>
              {/* Swoosh wind sparkles */}
              <span className="font-handwriting text-xs absolute -bottom-4 -left-6 text-clay/70 whitespace-nowrap rotate-[-15deg]">swoooosh!</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Automated Background Periodic Paper Rocket */}
      <AnimatePresence>
        {bgRocketCount > 0 && (
          <div key={bgRocketCount} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Subtle path across background */}
            <svg className="absolute inset-0 w-full h-full text-ink/[0.04] dark:text-ink/[0.02]" fill="none">
              <motion.path
                d="M -100 200 Q 300 400 600 150 T 1200 350 Q 1500 500 2000 100"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 8, ease: "linear" }}
              />
            </svg>

            {/* Flying background rocket */}
            <motion.div
              style={{ x: -100, y: 200, position: 'absolute' }}
              animate={{
                x: [-100, 300, 600, 900, 1200, 1500, 2050],
                y: [200, 400, 150, 250, 350, 500, 100],
                rotate: [30, 15, -45, 15, 30, -20, -35],
              }}
              transition={{
                duration: 8,
                ease: "linear",
              }}
              className="text-ink/[0.07] dark:text-ink/[0.03]"
            >
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-[45deg]">
                <path d="M 22 2 L 2 9 L 11 13 L 13 11 L 11 13 L 15 22 Z" />
                <path d="M 22 2 L 11 13" />
              </svg>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
