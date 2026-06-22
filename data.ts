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
        title: "AccessVault - Role-Based Credential Management System",
        desc: "A secure credential ecosystem supporting Admin, Manager, and Viewer levels. Features robust JWT authentication, bcrypt password hashing, and comprehensive express-based REST APIs with database-integrated validation schemas using Mongoose/MongoDB.",
        github: "https://github.com/Mafrook27",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
        icon: ShieldCheck
    },
    {
        title: "Loan Workflow Platform (Statlight)",
        desc: "Interactive admin-facing workflows managing loan application tracking and state machines (Pending, Approved, Rejected, Closed). Built custom, reusable modular components and optimized UI state synchronization using React Query caching layer.",
        github: "https://github.com/Mafrook27",
        technologies: ["React.js", "React Query", "REST API", "Tailwind CSS", "MERN Stack"],
        icon: AppWindow
    },
    {
        title: "Banking System & Facial Login",
        desc: "A secure electronic banking portal built with Python, Flask, OpenCV for facial recognition login templates, database-driven balance updating pipelines, and a structured MySQL transactional storage layout.",
        github: "https://github.com/Mafrook27",
        technologies: ["Python", "Flask", "OpenCV", "MySQL", "HTML/CSS"],
        icon: DatabaseZap
    }
];

export const certifications = [
    {
        title: "HackerRank: JavaScript & Java (2025)",
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
        period: "July 2025 - Present",
        startDate: "2025-07-01",
        endDate: null,
        points: [
            "Built dynamic React modules for a commercial loan management and onboarding platform.",
            "Refactored legacy UI components from Angular to scalable, high-performance React layouts.",
            "Constructed secure Node/Express REST APIs backed by JWT role validation and optimized Mongoose schemes.",
            "Synchronized server states over the browser layer using React Query to eliminate redundant data cycles."
        ]
    },
    {
        role: "Technical Trainer",
        company: "Livewire Institutions",
        location: "Mayiladuthurai, India",
        period: "Oct 2024 - Feb 2025",
        startDate: "2024-10-01",
        endDate: "2025-02-28",
        points: [
            "Trained junior engineers in core full-stack constructs across JavaScript, Python, and CRUD APIs.",
            "Mentored students through building custom database-integrated web prototypes and debugging network layers."
        ]
    }
];

export const education = {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    college: "E.G.S. Pillay Engineering College, Nagapattinam",
    period: "2020 - 2024",
    cgpa: "8.1 / 10"
};
