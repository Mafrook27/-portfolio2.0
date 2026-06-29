import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Check, Mail, Terminal, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from './LanguageContext';

interface AboutSectionProps {
  setIsResumeOpen: (open: boolean) => void;
  handleCopyEmail: () => void;
  copiedEmail: boolean;
  totalExp: {
    shortLabel: string;
    label: string;
    years: number;
    months: number;
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  setIsResumeOpen, 
  handleCopyEmail, 
  copiedEmail, 
  totalExp 
 }) => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading pretitle={t.aboutPretitle} title={t.aboutTitle} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 md:mt-16">
          
          {/* Profile Card Col (Left 4 cols) */}
          <div className="lg:col-span-4 w-full flex justify-center">
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
              className="p-6 sm:p-8 md:p-10 rounded-[2rem] relative flex flex-col items-center text-center w-full max-w-md lg:max-w-none group/card clay-card hover:shadow-xl hover:shadow-[#bf9d55]/5 transition-all duration-500"
            >
              {/* Decorative designer frame background elements */}
              <div className="absolute inset-4 border border-[#bf9d55]/10 rounded-3xl pointer-events-none transition-all duration-500 group-hover/card:inset-3"></div>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#bf9d55]/25 pointer-events-none animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#bf9d55]/25 pointer-events-none animate-pulse"></div>
              
              {/* Dual-ring designer profile wrapper */}
              <div className="relative mt-2 mb-6">
                {/* Outer decorative gold glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#bf9d55]/20 to-[#bf9d55]/5 rounded-full scale-110 blur-md opacity-70 group-hover/card:scale-115 transition-all duration-500"></div>
                {/* Spin-tilting design ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#bf9d55]/30 to-stone-200/10 rounded-full scale-105 border border-[#bf9d55]/20 -rotate-6 transition-all duration-500 group-hover/card:rotate-6 group-hover/card:scale-110"></div>
                {/* Main image container */}
                <div className="relative w-36 h-36 p-1.5 bg-white border border-[#bf9d55]/15 shadow-xl rounded-full overflow-hidden flex items-center justify-center z-10 transition-transform duration-500 group-hover/card:scale-105">
                  <img 
                    src="/1774159206336.jpg" 
                    alt="Mafrook Kuthpudeen" 
                    className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                </div>
              </div>
  
              <div className="z-10 flex flex-col items-center">
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#bf9d55] uppercase bg-[#bf9d55]/10 px-3.5 py-1 rounded-full mb-3.5 border border-[#bf9d55]/20 font-mono shadow-[0_2px_10px_rgba(191,157,85,0.06)]">
                  {isRtl ? 'مهندس برمجيات' : 'SOFTWARE ENGINEER'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight leading-none group-hover/card:text-[#bf9d55] transition-colors duration-300">
                  {isRtl ? 'مفروق كوتوبودين' : 'Mafrook Kuthpudeen'}
                </h3>
                <p className="text-[#bf9d55] text-xs font-semibold mt-2.5 tracking-wider uppercase font-sans">
                  {isRtl ? 'تطوير كامل المواصفات' : 'Full-Stack Development'}
                </p>
              </div>
              
              {/* Bento Grid Stats block */}
              <div className="grid grid-cols-3 gap-2.5 w-full border-t border-stone-100 pt-5 mt-6 mb-6 z-10">
                <div className="clay-bubble rounded-2xl py-3.5 px-1.5 group/stat hover:border-[#bf9d55]/30 hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center">
                  <p className="font-serif font-black text-[#bf9d55] text-sm sm:text-base leading-none">
                    {totalExp.years} {t.expYears}
                  </p>
                  <p className="text-[8px] text-stone-400 uppercase tracking-widest font-bold mt-2 text-center">
                    {isRtl ? 'الخبرة' : 'Experience'}
                  </p>
                </div>
                <div className="clay-bubble rounded-2xl py-3.5 px-1.5 group/stat hover:border-[#bf9d55]/30 hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center">
                  <p className="font-serif font-black text-[#bf9d55] text-sm sm:text-base leading-none">MERN</p>
                  <p className="text-[8px] text-stone-400 uppercase tracking-widest font-bold mt-2 text-center">
                    {isRtl ? 'التقنيات' : 'Core Stack'}
                  </p>
                </div>
                <div className="clay-bubble rounded-2xl py-3.5 px-1.5 group/stat hover:border-[#bf9d55]/30 hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center">
                  <p className="font-serif font-black text-[#bf9d55] text-sm sm:text-base leading-none">TS / JS</p>
                  <p className="text-[8px] text-stone-400 uppercase tracking-widest font-bold mt-2 text-center">
                    {isRtl ? 'اللغة' : 'Language'}
                  </p>
                </div>
              </div>
  
              {/* Professional Actions Suite */}
              <div className="w-full space-y-2.5 z-10">
                {/* Primary action row with both options balanced side-by-side */}
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setIsResumeOpen(true)}
                    className="py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-[10px] sm:text-xs rounded-xl tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 group/btn shadow-sm hover:shadow cursor-pointer"
                  >
                    <FileText size={12} className="text-[#bf9d55] group-hover/btn:scale-105 transition-transform duration-300" />
                    <span>{t.resume}</span>
                  </button>
  
                  <a 
                    href="/resume.pdf" 
                    download="Mafrook_Kuthpudeen_Resume.pdf"
                    className="py-2.5 bg-white border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-stone-900 font-sans font-semibold text-[10px] sm:text-xs rounded-xl tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 group/down hover:shadow-sm"
                  >
                    <Download size={12} className="text-[#bf9d55] group-hover/down:translate-y-0.5 transition-transform duration-300" />
                    <span>Resume (PDF)</span>
                  </a>
                </div>
  
                {/* Secondary copy action */}
                <button 
                  onClick={handleCopyEmail}
                  className="w-full py-2 bg-transparent border border-dashed border-stone-200 hover:border-[#bf9d55]/40 hover:bg-[#bf9d55]/5 text-stone-600 hover:text-[#bf9d55] font-sans font-semibold text-[10px] rounded-xl tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedEmail ? <Check size={11} className="text-green-600" /> : <Mail size={11} className="text-stone-400" />}
                  <span>{copiedEmail ? t.emailCopied : t.copyEmail}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Simplified Professional Summary Col (Right 8 cols) */}
          <div 
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="900"
            className="lg:col-span-8 flex flex-col justify-center lg:pl-8 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed">
                {t.aboutBio}
              </p>
            </div>

            {/* Highly efficient high-impact summary metric list with internal staggering */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div 
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="800"
                className="group clay-card p-5 rounded-2xl cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#bf9d55]/10 border border-[#bf9d55]/20 flex items-center justify-center text-[#bf9d55] shadow-sm mb-4 group-hover:scale-105 transition-transform">
                  <Terminal size={16} />
                </div>
                <h4 className="font-sans font-bold text-stone-900 text-sm font-semibold">{t.card1Title}</h4>
                <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                  {t.card1Desc}
                </p>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="800"
                className="group clay-card p-5 rounded-2xl cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#bf9d55]/10 border border-[#bf9d55]/20 flex items-center justify-center text-[#bf9d55] shadow-sm mb-4 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={16} />
                </div>
                <h4 className="font-sans font-bold text-stone-900 text-sm font-semibold">{t.card2Title}</h4>
                <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                  {t.card2Desc}
                </p>
              </div>

              <div 
                data-aos="fade-up"
                data-aos-delay="550"
                data-aos-duration="800"
                className="group clay-card p-5 rounded-2xl cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#bf9d55]/10 border border-[#bf9d55]/20 flex items-center justify-center text-[#bf9d55] shadow-sm mb-4 group-hover:scale-105 transition-transform">
                  <Sparkles size={16} />
                </div>
                <h4 className="font-sans font-bold text-stone-900 text-sm font-semibold">{t.card3Title}</h4>
                <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                  {t.card3Desc}
                </p>
              </div>
            </div>

            {/* Bottom elegant tag row */}
            <div 
              data-aos="fade-up"
              data-aos-delay="650"
              data-aos-duration="800"
              className="flex flex-wrap gap-2.5 pt-4 border-t border-stone-100"
            >
              <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                #React.js
              </span>
              <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                #Node.js / Express
              </span>
              <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                #MongoDB / Mongoose
              </span>
              <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                #React Query
              </span>
              <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                #Prompt Engineering
              </span>
              <span className="text-[10px] font-bold text-stone-500 tracking-wider uppercase bg-[#F9F8F4] border border-stone-200/50 px-3.5 py-1.5 rounded-full hover:border-[#bf9d55]/30 transition-colors">
                #AI Architectures
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
