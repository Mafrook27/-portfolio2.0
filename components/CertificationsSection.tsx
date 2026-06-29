import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { certifications } from '../data';
import { useLanguage } from './LanguageContext';

export const CertificationsSection: React.FC = () => {
  const { language, t } = useLanguage();

  const getLocalizedCertifications = () => {
    if (language === 'de') {
      return [
        {
          title: "HackerRank: JavaScript & Java (2025)",
          description: "Verifizierte Gold-Abzeichen-Kompetenz, die fortgeschrittene prozedurale Logik, Typisierungssicherheit, objektorientierte Konzepte und Rechenalgorithmen demonstriert.",
          url: "https://www.hackerrank.com/profile/mafrooktkc",
          icon: certifications[0].icon
        },
        {
          title: "AWS Academy: Cloud Foundations",
          description: "AWS-Akkreditierung, die virtualisierte Cloud-Architekturen, verwaltete Datenbanken, Sicherheitszugriffsrollen (IAM) und hochskalierbare Hosting-Umgebungen umfasst.",
          url: "https://www.linkedin.com/in/k-mafrook/",
          icon: certifications[1].icon
        },
        {
          title: "freeCodeCamp: Responsive Web Design",
          description: "Umfassender Lehrplan mit detaillierten Anweisungen zu benutzerdefinierten Viewport-Medien, flüssigen Layout-Ausrichtungsalgorithmen, Flexbox-Gittern und Designstandards.",
          url: "https://www.linkedin.com/in/k-mafrook/",
          icon: certifications[2].icon
        }
      ];
    }
    if (language === 'ar') {
      return [
        {
          title: "HackerRank: JavaScript & Java (2025)",
          description: "إثبات كفاءة الشارة الذهبية المعتمدة في إظهار المنطق الإجرائي المتقدم، سلامة كتابة الأكواد، مفاهيم البرمجة كائنية التوجه (OOP)، والخوارزميات الحسابية المعقدة.",
          url: "https://www.hackerrank.com/profile/mafrooktkc",
          icon: certifications[0].icon
        },
        {
          title: "AWS Academy: Cloud Foundations",
          description: "اعتماد من أكاديمية AWS يغطي بنيات السحابة الافتراضية، وقواعد البيانات المدارة، وأدوار الوصول الأمني (IAM)، وبيئات الاستضافة عالية التدرج والقابلية للتوسع.",
          url: "https://www.linkedin.com/in/k-mafrook/",
          icon: certifications[1].icon
        },
        {
          title: "freeCodeCamp: Responsive Web Design",
          description: "منهج هندسي شامل يشرح بالتفصيل توجيهات وسائط العرض المخصصة (Media Queries)، وخوارزميات محاذاة التخطيط المرن (Flexbox)، وشبكات التصميم المتجاوبة.",
          url: "https://www.linkedin.com/in/k-mafrook/",
          icon: certifications[2].icon
        }
      ];
    }
    return certifications;
  };

  const localizedCerts = getLocalizedCertifications();

  return (
    <section id="certifications" className="py-32 bg-stone-950 text-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nobel-gold/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div 
          data-aos="fade-up"
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={14} className="text-nobel-gold" />
            <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">{t.milestonesPretitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tight">{t.milestonesTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedCerts.map((cert, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-duration="1000"
              className="h-full"
            >
              <motion.a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col p-6 sm:p-8 md:p-10 rounded-[2rem] clay-card-dark relative overflow-hidden h-full cursor-pointer select-none"
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-nobel-gold/0 via-nobel-gold/5 to-transparent -translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-stone-950/80 backdrop-blur-sm border border-stone-700/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-nobel-gold/50 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] transition-all duration-500 text-stone-300 group-hover:text-nobel-gold">
                      <cert.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border border-stone-700/80 flex items-center justify-center text-stone-500 group-hover:bg-nobel-gold group-hover:border-nobel-gold group-hover:text-stone-950 transition-all duration-500 -rotate-45 group-hover:rotate-0">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 group-hover:text-nobel-gold transition-colors duration-500 leading-snug">{cert.title}</h3>
                  <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mt-auto">{cert.description}</p>
                </div>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CertificationsSection;
