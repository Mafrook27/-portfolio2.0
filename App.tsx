import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Reusable Layout & Page Section Components
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { ResumeModal } from './components/ResumeModal';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { Footer } from './components/Footer';

// Localization Provider
import { LanguageProvider } from './components/LanguageContext';

// Performance Provider
import { PerformanceProvider, usePerformance } from './components/PerformanceContext';

// Dynamic Data Resource
import { experience } from './data';

const roles = [
  "UI Engineer",
  "Fullstack Engineer",
  "Backend Developer",
  "Frontend Developer"
];

const AppContent = () => {
  const { ecoMode } = usePerformance();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Dynamic role ticker
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(roleInterval);
  }, []);

  // Scroll triggers and Animation initialization
  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;
    if (ecoMode) {
      AOS.init({
        disable: true
      });
    } else {
      AOS.init({
        duration: isMobileDevice ? 800 : 1100,
        once: false, // Animates on scroll down AND scroll up
        mirror: false, // Prevents chaotic double-triggers when scrolling past
        easing: 'ease-out-quint', // Highly premium custom deceleration curve
        offset: isMobileDevice ? 20 : 80, // Snappy on mobile, elegant on desktop
        disable: false
      });
      AOS.refresh();
    }
    
    // Explicit AOS refresh to compute initial heights and positions accurately
    const timer = setTimeout(() => {
      if (!ecoMode) {
        AOS.refresh();
      }
    }, 150);
    
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [ecoMode]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Mafrooktkc@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const calculateTotalExperience = () => {
    let totalMonths = 0;
    experience.forEach((exp: any) => {
      const start = new Date(exp.startDate);
      const end = exp.endDate ? new Date(exp.endDate) : new Date();
      
      const startYear = start.getFullYear();
      const startMonth = start.getMonth();
      const endYear = end.getFullYear();
      const endMonth = end.getMonth();
      
      const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
      totalMonths += months;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let label = "";
    if (years > 0) {
      label += `${years} ${years === 1 ? "Year" : "Years"}`;
    }
    if (months > 0) {
      if (label) label += " & ";
      label += `${months} ${months === 1 ? "Month" : "Months"}`;
    }
    
    return {
      label: label || "0 Months",
      years,
      months,
      shortLabel: years > 0 ? `${years}Y ${months}M` : `${months}M`
    };
  };

  const totalExp = calculateTotalExperience();

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white transition-colors duration-500">
      {/* Navigation Header */}
      <Header 
        scrolled={scrolled} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        setIsResumeOpen={setIsResumeOpen} 
      />
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu 
            setMenuOpen={setMenuOpen} 
            setIsResumeOpen={setIsResumeOpen} 
          />
        )}
      </AnimatePresence>

      {/* Main Page Layout Sections */}
      <HeroSection 
        setIsResumeOpen={setIsResumeOpen} 
        currentRoleIndex={currentRoleIndex} 
        roles={roles} 
      />

      <main>
        <AboutSection 
          setIsResumeOpen={setIsResumeOpen} 
          handleCopyEmail={handleCopyEmail} 
          copiedEmail={copiedEmail} 
          totalExp={totalExp} 
        />

        <SkillsSection />

        <ExperienceSection totalExp={totalExp} />

        <ProjectsSection />

        <CertificationsSection />
      </main>

      {/* Footer Branding and Social links */}
      <Footer />

      {/* Floating Action Button to Scroll to Top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 bg-stone-900 border border-stone-800 text-nobel-gold rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.25)] p-4 flex items-center justify-center backdrop-blur-md hover:bg-stone-800 transition-all duration-300 group cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-Screen Interactive Printable Digital Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <PerformanceProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </PerformanceProvider>
  );
};

export default App;
