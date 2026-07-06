import { Github, Linkedin, Phone, FileText, AppWindow, DatabaseZap, Layout, ShieldCheck, Terminal, Award, BookOpen, GraduationCap, Sparkles, Code2, Cpu } from 'lucide-react';
import { FaJava, FaHtml5, FaCss3Alt, FaPython, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiTypescript, SiReactquery } from 'react-icons/si';

export const socialLinks = [
    { name: "GitHub", icon: Github, link: "https://github.com/Mafrook27" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/k-mafrook/" },
    { name: "WhatsApp", icon: Phone, link: "https://wa.me/918925661541" }
];

export const skills = {
    languages: [
        { label: "TypeScript", percentage: 80, icon: SiTypescript, color: "#3178c6" },
        { label: "JavaScript", percentage: 85, icon: SiJavascript, color: "#f7df1e" },
        { label: "Java", percentage: 80, icon: FaJava, color: "#e32c2e" },
        { label: "Python", percentage: 65, icon: FaPython, color: "#3776ab" },
        { label: "HTML5", percentage: 90, icon: FaHtml5, color: "#e34f26" },
        { label: "CSS3", percentage: 85, icon: FaCss3Alt, color: "#1572b6" },
        { label: "SQL", percentage: 70, icon: SiMysql, color: "#4479a1" }
    ],
    frameworks: [
        { label: "React.js", percentage: 85, icon: FaReact, color: "#61dafb" },
        { label: "Node.js", percentage: 80, icon: Terminal, color: "#339933" },
        { label: "Express.js", percentage: 80, icon: SiExpress, color: "#000000" },
        { label: "React Query", percentage: 75, icon: SiReactquery, color: "#ff4154" },
        { label: "Tailwind CSS", percentage: 90, icon: SiTailwindcss, color: "#38bdf8" },
        { label: "MongoDB", percentage: 78, icon: SiMongodb, color: "#47a248" }
    ],
    tools: [
        { label: "Git & GitHub", percentage: 85, icon: FaGitAlt, color: "#f05032" },
        { label: "Postman", percentage: 80, icon: SiPostman, color: "#ff6c37" },
        { label: "GitHub Actions", percentage: 70, icon: ShieldCheck, color: "#2088ff" },
        { label: "Vercel & Firebase", percentage: 80, icon: Award, color: "#000000" }
    ],
    ai: [
        { label: "Claude / Codex", percentage: 90, icon: Sparkles, color: "#D97706" },
        { label: "Google AI Studio", percentage: 85, icon: Cpu, color: "#1E3A8A" },
        { label: "Stitch for UI", percentage: 85, icon: Layout, color: "#4F46E5" },
        { label: "Markdown Specs", percentage: 95, icon: FileText, color: "#059669" }
    ]
};

export const projects = [
    {
        title: "html-formeditor [opensrc]",
        desc: "Built a custom, canvas-style visual editor from scratch to create and manage official company documents and email templates. Designed an intuitive drag-and-drop canvas interface leveraging shadcn/ui and Tailwind CSS, eliminating third-party builder packages, and ensuring strict type-safety via TypeScript.",
        github: "https://github.com/Mafrook27",
        technologies: ["React.js", "shadcn", "tailwind", "typescript"],
        icon: Code2
    },
    {
        title: "AccessVault - Role-Based Credential Management System",
        desc: "A secure credential management application with role-based access for Admin, Manager, and Viewer users. Implemented JWT authentication and bcrypt password hashing, designed MongoDB schemas with validation rules, and built REST APIs with audit logging capabilities.",
        github: "https://github.com/Mafrook27",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
        icon: ShieldCheck
    }
];

export const certifications = [
    {
        title: "HackerRank: JavaScript & Java Verified",
        description: "Verified gold-badge proficiency demonstrating advanced procedural logic, typing safety, object-oriented concepts, and computational algorithms.",
        url: "https://www.hackerrank.com/profile/mafrooktkc",
        icon: BookOpen
    },
    {
        title: "AWS Academy: Cloud Foundations",
        description: "AWS accreditation covering virtualized cloud architectures, managed databases, security access roles (IAM), and highly-scalable hosting environments.",
        url: "https://www.linkedin.com/in/k-mafrook/",
        icon: ShieldCheck
    },
    {
        title: "freeCodeCamp: Responsive Web Design",
        description: "Comprehensive engineering curriculum detailing custom viewport media directives, fluid layout alignment algorithms, flexbox grids, and design standards.",
        url: "https://www.linkedin.com/in/k-mafrook/",
        icon: Layout
    }
];

export const experience = [
    {
        role: "Junior Software Engineer",
        company: "Statlight Software Solutions",
        location: "Bengaluru, India | Hybrid",
        period: "Jun 2025 - Present",
        startDate: "2025-06-01",
        endDate: null,
        points: [
            "Develop and maintain frontend and full-stack modules for business web applications, including loan management screens, LMS frontend work, and internal chat module features.",
            "Build React.js and TypeScript UI components for dashboards, forms, workflow screens, and user-facing business modules.",
            "Work on multi-tenant chat module features involving session handling, UI flows, and frontend-backend integration.",
            "Integrate REST APIs using React Query for data fetching, loading states, error states, and form submission workflows.",
            "Build and update Node.js, Express.js APIs and MongoDB/Mongoose schemas for authentication, role-based access, workflow records, logs, and application data.",
            "Debug issues related to API responses, form validation, data rendering, authentication, and role-based user flows."
        ]
    },
    {
        role: "Apprenticeship",
        company: "a1ideaz",
        location: "Mayiladuthurai, India",
        period: "Oct 2025 - Feb 2026",
        startDate: "2025-10-01",
        endDate: "2026-02-28",
        points: [
            "Trained students in JavaScript, Java, Python, and full-stack development fundamentals with a focus on practical coding sessions.",
            "Guided learners in building CRUD applications, authentication flows, REST API basics, and database-connected projects."
        ]
    }
];

export const education = {
    degree: "Bachelor of Engineering - Computer Science and Engineering",
    college: "E.G.S. Pillay Engineering College, Nagapattinam",
    period: "Oct 2020 - Jun 2024",
    cgpa: "8.0 / 10"
};
