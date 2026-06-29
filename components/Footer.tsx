import React from 'react';
import { socialLinks } from '../data';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="bg-stone-950 text-stone-500 py-12 text-center text-sm border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center gap-6 mb-8">
          {socialLinks.map(link => (
            <a key={link.name} href={link.link} target="_blank" rel="noopener noreferrer" className="hover:text-nobel-gold transition-colors">
              <link.icon size={20} />
            </a>
          ))}
        </div>
        <p className="tracking-widest font-serif text-[10px] uppercase">
          {isRtl 
            ? `© 2026 مفروق كوتوبودين. ${t.rightsReserved}` 
            : `© 2026 MAFROOK KUTHPUDEEN. ${t.rightsReserved.toUpperCase()}`}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
