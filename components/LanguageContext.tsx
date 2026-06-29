import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de' | 'ar';

export interface TranslationDictionary {
  // Navigation
  about: string;
  skills: string;
  experience: string;
  projects: string;
  milestones: string;
  getInTouch: string;
  resume: string;
  
  // Hero
  greeting: string;
  availableForWork: string;
  heroSub: string;
  viewProjects: string;
  downloadCV: string;
  roles: string[];

  // About
  aboutPretitle: string;
  aboutTitle: string;
  aboutBio: string;
  locationLabel: string;
  locationValue: string;
  educationLabel: string;
  educationValue: string;
  emailCopied: string;
  copyEmail: string;
  expYears: string;
  expLabel: string;

  // About Cards
  card1Title: string;
  card1Desc: string;
  card2Title: string;
  card2Desc: string;
  card3Title: string;
  card3Desc: string;

  // Skills
  skillsPretitle: string;
  skillsTitle: string;
  skillsDescLanguages: string;
  skillsDescFrameworks: string;
  skillsDescTools: string;
  skillsDescAI: string;

  // Experience
  expPretitle: string;
  expTitle: string;
  expPresent: string;

  // Projects
  projectsPretitle: string;
  projectsTitle: string;
  viewCode: string;

  // Milestones
  milestonesPretitle: string;
  milestonesTitle: string;
  verifyLabel: string;

  // Footer
  footerHeading: string;
  footerSub: string;
  rightsReserved: string;
  backToTop: string;
}

const translations: Record<Language, TranslationDictionary> = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    milestones: "Milestones",
    getInTouch: "Get in Touch",
    resume: "Resume",
    
    greeting: "Hi, I am",
    availableForWork: "Available for fullstack opportunities",
    heroSub: "Crafting highly-polished fullstack web apps, balancing backend performance with pixel-perfect responsive frontends.",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
    roles: ["UI Engineer", "Fullstack Engineer", "Backend Developer", "Frontend Developer"],

    aboutPretitle: "Introduction",
    aboutTitle: "About Me",
    aboutBio: "I am K. Mafrook, a performance-driven Software Engineer based in India. I specialize in designing and building scalable fullstack systems with TypeScript/React and Express/Node.js, ensuring clean architectures and smooth responsive user experiences.",
    locationLabel: "Location",
    locationValue: "Bengaluru, India | Hybrid",
    educationLabel: "Education",
    educationValue: "B.E. in Computer Science & Engineering",
    emailCopied: "Email Copied!",
    copyEmail: "Copy Contact Email",
    expYears: "Years",
    expLabel: "Practical Industry Experience",

    card1Title: "Fullstack Architectures",
    card1Desc: "Constructing reusable frontend workflows with React, integrated with secure token-authorizing Express API endpoints.",
    card2Title: "Safe Data Pipelines",
    card2Desc: "Utilizing React Query for lag-free data sync, paired with robust JWT role-based access schemes and Mongoose validation rules.",
    card3Title: "AI-Powered Velocity",
    card3Desc: "Leveraging prompt engineering and precise spec blueprints to accelerate development cycles and optimize solution architectures.",

    skillsPretitle: "Expertise",
    skillsTitle: "Skills",
    skillsDescLanguages: "Advanced computer languages that serve as the foundation of secure web structures and performant computations.",
    skillsDescFrameworks: "Modern environments and systems for high-grade responsive single-page visual flow and server-side logic.",
    skillsDescTools: "Automated workflow platforms, API interaction workspaces, version controllers, and hosting servers.",
    skillsDescAI: "Harnessing state-of-the-art Large Language Models, specification files, layout assembly mechanisms, and prompt structures to build high-grade software products rapidly.",

    expPretitle: "History",
    expTitle: "Experience",
    expPresent: "Present",

    projectsPretitle: "Portfolio",
    projectsTitle: "Projects",
    viewCode: "View Code",

    milestonesPretitle: "Verifications",
    milestonesTitle: "Certifications",
    verifyLabel: "Verify Certificate",

    footerHeading: "Let's construct something outstanding.",
    footerSub: "Open for innovative fullstack roles and advanced React or Node systems architecture.",
    rightsReserved: "All rights reserved.",
    backToTop: "Back to top",
  },
  de: {
    about: "Über mich",
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    projects: "Projekte",
    milestones: "Zertifikate",
    getInTouch: "Kontaktieren",
    resume: "Lebenslauf",
    
    greeting: "Hallo, ich bin",
    availableForWork: "Verfügbar für Fullstack-Positionen",
    heroSub: "Entwicklung hochgradig optimierter Fullstack-Webanwendungen, die Backend-Performance mit pixelgenauen, responsiven Frontends verbinden.",
    viewProjects: "Projekte ansehen",
    downloadCV: "Lebenslauf laden",
    roles: ["UI-Ingenieur", "Fullstack-Ingenieur", "Backend-Entwickler", "Frontend-Entwickler"],

    aboutPretitle: "Einführung",
    aboutTitle: "Über mich",
    aboutBio: "Ich bin K. Mafrook, ein leistungsorientierter Softwareentwickler aus Indien. Ich bin spezialisiert auf das Designen und Entwickeln skalierbarer Fullstack-Systeme mit TypeScript/React und Express/Node.js mit sauberer Architektur und reibungsloser Benutzererfahrung.",
    locationLabel: "Standort",
    locationValue: "Bengaluru, Indien | Hybrid",
    educationLabel: "Ausbildung",
    educationValue: "B.E. in Informatik & Softwaretechnik",
    emailCopied: "E-Mail kopiert!",
    copyEmail: "E-Mail kopieren",
    expYears: "Jahre",
    expLabel: "Praktische Industrieerfahrung",

    card1Title: "Fullstack-Architekturen",
    card1Desc: "Erstellung wiederverwendbarer Frontend-Workflows mit React, integriert in sichere Express-API-Endpunkte mit Token-Autorisierung.",
    card2Title: "Sichere Daten-Pipelines",
    card2Desc: "Nutzung von React Query für verzögerungsfreie Datensynchronisierung, gepaart mit robusten JWT-Rollenberechtigungen und Mongoose-Validierungsregeln.",
    card3Title: "KI-gestützte Effizienz",
    card3Desc: "Nutzung von Prompt-Engineering und präzisen Spezifikationen zur Beschleunigung von Entwicklungszyklen und Optimierung von Lösungsarchitekturen.",

    skillsPretitle: "Expertise",
    skillsTitle: "Fähigkeiten",
    skillsDescLanguages: "Fortgeschrittene Programmiersprachen, die als Grundlage für sichere Webstrukturen und performante Berechnungen dienen.",
    skillsDescFrameworks: "Moderne Umgebungen und Systeme für hochwertigen, responsiven visuellen Ablauf und serverseitige Logik.",
    skillsDescTools: "Automatisierte Workflow-Plattformen, API-Arbeitsbereiche, Versionskontrollen und Hosting-Server.",
    skillsDescAI: "Nutzung modernster Large Language Models, Spezifikationsdateien, Layout-Baugruppen und Prompt-Strukturen für eine schnelle Softwareerstellung.",

    expPretitle: "Verlauf",
    expTitle: "Erfahrung",
    expPresent: "Heute",

    projectsPretitle: "Portfolio",
    projectsTitle: "Projekte",
    viewCode: "Code anzeigen",

    milestonesPretitle: "Nachweise",
    milestonesTitle: "Zertifizierungen",
    verifyLabel: "Zertifikat prüfen",

    footerHeading: "Lassen Sie uns etwas Herausragendes bauen.",
    footerSub: "Offen für innovative Fullstack-Rollen und fortschrittliche React- oder Node-Systemarchitektur.",
    rightsReserved: "Alle Rechte vorbehalten.",
    backToTop: "Nach oben",
  },
  ar: {
    about: "حول",
    skills: "المهارات",
    experience: "الخبرة",
    projects: "المشاريع",
    milestones: "الشهادات",
    getInTouch: "تواصل معي",
    resume: "السيرة الذاتية",
    
    greeting: "مرحباً، أنا",
    availableForWork: "متاح لفرص تطوير فول ستاك",
    heroSub: "أقوم ببناء تطبيقات ويب متكاملة (Fullstack) مصقولة للغاية، مع الموازنة بين أداء الواجهة الخلفية وجمال الواجهة الأمامية المتجاوبة.",
    viewProjects: "عرض المشاريع",
    downloadCV: "تحميل السيرة الذاتية",
    roles: ["مهندس واجهات", "مهندس فول ستاك", "مطور باك إند", "مطور فرونت إند"],

    aboutPretitle: "مقدمة",
    aboutTitle: "من أنا",
    aboutBio: "أنا ك. مفروق، مهندس برمجيات متميز أركز على الأداء العالي ومقيم في الهند. أتخصص في تصميم وبناء أنظمة متكاملة قابلة للتوسع باستخدام TypeScript/React و Express/Node.js مع ضمان معايير برمجية نظيفة وتجربة مستخدم سلسة ومتجاوبة.",
    locationLabel: "الموقع",
    locationValue: "بنغالور، الهند | عمل هجين",
    educationLabel: "التعليم",
    educationValue: "بكالوريوس في هندسة علوم الحاسوب",
    emailCopied: "تم نسخ البريد الإلكتروني!",
    copyEmail: "نسخ البريد الإلكتروني",
    expYears: "سنوات",
    expLabel: "الخبرة العملية في الصناعة",

    card1Title: "بنيات ويب متكاملة",
    card1Desc: "بناء تدفقات عمل واجهة أمامية قابلة لإعادة الاستخدام باستخدام React مدمجة مع واجهات Express البرمجية المؤمنة.",
    card2Title: "تدفقات بيانات آمنة",
    card2Desc: "استخدام React Query لمزامنة البيانات بدون تأخير، مقترنة بنظام صلاحيات JWT قوي وقواعد التحقق من Mongoose.",
    card3Title: "كفاءة مدعومة بالذكاء الاصطناعي",
    card3Desc: "تسخير هندسة الأوامر والمواصفات الدقيقة لتسريع دورات التطوير وتحسين بنيات الحلول البرمجية.",

    skillsPretitle: "الخبرة الكلية",
    skillsTitle: "المهارات المهنية",
    skillsDescLanguages: "لغات البرمجة المتقدمة التي تشكل الأساس لبناء هياكل ويب آمنة وحسابات عالية الأداء.",
    skillsDescFrameworks: "البيئات والأنظمة الحديثة لتقديم واجهات مستخدم متجاوبة ممتازة ومنطق معالجة متقدم من جانب السيرفر.",
    skillsDescTools: "منصات العمل الآلية، بيئات اختبار الـ APIs، أنظمة التحكم في النسخ، وسيرفرات الاستضافة.",
    skillsDescAI: "تسخير أحدث النماذج اللغوية الكبيرة (LLMs)، ملفات المواصفات، آليات بناء المخططات، وهياكل التوجيه لإنشاء برمجيات متقدمة بسرعة فائقة.",

    expPretitle: "السيرة المهنية",
    expTitle: "الخبرة العملية",
    expPresent: "حتى الآن",

    projectsPretitle: "معرض الأعمال",
    projectsTitle: "المشاريع",
    viewCode: "عرض الكود",

    milestonesPretitle: "الإنجازات",
    milestonesTitle: "الشهادات المعتمدة",
    verifyLabel: "التحقق من الشهادة",

    footerHeading: "دعنا نصنع شيئاً استثنائياً معاً.",
    footerSub: "متاح للعمل في أدوار فول ستاك مبتكرة وبناء بنية أنظمة React أو Node متقدمة.",
    rightsReserved: "جميع الحقوق محفوظة.",
    backToTop: "الرجوع للأعلى",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' || saved === 'de' || saved === 'ar') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  useEffect(() => {
    // Dynamically update page dir and lang attributes for optimal SEO and RTL rendering
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = translations[language];
  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
