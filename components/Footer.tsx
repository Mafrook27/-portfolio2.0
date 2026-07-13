import React from 'react';
import { socialLinks } from '../data';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="bg-paper text-ink-soft py-14 text-center border-t border-line transition-all">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Handwritten personal caption */}
        <p className="marker text-lg sm:text-xl text-clay tracking-wide">
          {isRtl 
            ? "شكراً لزيارتك مكتبي الرقمي! أتمنى لك يوماً سعيداً." 
            : "Thanks for dropping by! Put things back when you're done."}
        </p>
        
        {/* Simple plaintext navigation/social links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-bold uppercase tracking-widest text-ink-soft">
          {socialLinks.map(link => (
            <a 
              key={link.name} 
              href={link.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-clay transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Small copyright micro-label at bottom */}
      <div className="mt-8 text-center border-t border-dashed border-line pt-6 max-w-4xl mx-auto px-6">
        <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-ink-soft/60">
          {isRtl 
            ? `© ٢٠٢٦ مفروق كوتوبودين. جميع الحقوق محفوظة.` 
            : `© 2026 MAFROOK KUTHPUDEEN. ${t.rightsReserved.toUpperCase()}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
