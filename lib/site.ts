export const site = {
  name: "Ashley Andrikanich",
  firstName: "Ashley",
  title: "Cybersecurity / AI Engineering Intern",
  tagline:
    "CompTIA Security+ certified developer combining threat analysis with hands-on experience in secure full-stack apps, identity management, and AI-assisted engineering.",
  email: "aandrikanich25@gmail.com",
  phone: "(302) 559-6012",
  github: "https://github.com/ashleyandrikanich",
  linkedin: "https://www.linkedin.com/in/ashley-andrikanich-164470300",
  glowsyncUrl: "https://glow-sync.vercel.app",
  location: "Oxford, PA",
  profileImage: "/profile.png",
  profileImageAlt: "Ashley Andrikanich",
  resumePdfUrl: "/Ashley-Andrikanich-Resume.pdf",
  resumeViewUrl: "/print/resume",
} as const;

export const aboutInterests = [
  "Cybersecurity",
  "AI Engineering",
  "UI/UX",
  "Threat Analysis",
  "Web Development",
  "Software Engineering",
] as const;

export const aboutIntro =
  "CompTIA Security+ certified CS graduate (cybersecurity concentration, Summa Cum Laude) who likes building software that is secure, thoughtful, and easy to use.";

export const quickFacts = [
  "B.S. Computer Science (Cybersecurity), Indiana University of Pennsylvania — GPA 3.78, Summa Cum Laude",
  "CompTIA Security+ (SY0-701), earned November 2025",
  "Cybersecurity/AI Engineering Intern at End of an Era (Jan–May 2026)",
  "Full-stack experience with Next.js, React, TypeScript, Prisma, and GitHub Actions CI/CD",
] as const;

export const education = {
  degree: "B.S. Computer Science, Cybersecurity Concentration",
  minor: "Minor in Criminology",
  school: "Indiana University of Pennsylvania",
  location: "Indiana, Pennsylvania",
  period: "August 2021 – May 2025",
  honors: "GPA 3.78 · Summa Cum Laude",
} as const;

export const certifications = [
  {
    name: "CompTIA Security+ (SY0-701)",
    date: "November 2025",
  },
] as const;

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  overview: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    id: "end-of-an-era",
    company: "End of an Era",
    role: "Cybersecurity / AI Engineering Intern",
    period: "January 2026 – May 2026",
    overview:
      "Internship focused on authentication security, frontend UI work, Git and GitHub collaboration, and automated checks in the development pipeline.",
    achievements: [
      "Implemented and enforced platform-wide MFA and account lockout policies to secure sign-in and defend against brute-force attacks",
      "Developed and standardized responsive interfaces with Next.js, TypeScript, and Tailwind CSS for visual consistency and frontend performance",
      "Managed codebase updates with Git and GitHub—submitting, reviewing, and merging code through pull requests",
      "Collaborated in an automated development pipeline so changes met syntax, styling, and structure requirements before deployment",
    ],
  },
  {
    id: "glowsync",
    company: "GlowSync",
    role: "Software Engineer · Personal Project",
    period: "May 2026 – Present",
    overview:
      "Personal skincare app I built end to end—secure accounts, personalized routines, and ingredient safety checks, live on Vercel.",
    achievements: [
      "Built with Next.js, React, TypeScript, Prisma, and SQLite; deployed on Vercel",
      "Secure sign-up and sign-in with hashed passwords, login limits, and browser security headers",
      "Skin quiz and routine builder with morning/evening steps and warnings when ingredients don't mix well",
      "Actives library, routine coach, journal, product compare, and wishlist for tracking and learning",
      "Automated tests plus lint, build, and dependency checks before each release",
    ],
  },
  {
    id: "iup",
    company: "Indiana University of Pennsylvania",
    role: "B.S. Computer Science · Cybersecurity",
    period: "August 2021 – May 2025",
    overview:
      "CS degree with a cybersecurity focus—security coursework, hands-on projects, and graduated Summa Cum Laude (3.78 GPA).",
    achievements: [
      "Coursework in network security, risk management, threat analysis, and secure systems",
      "StatHub — team-built PHP/MySQL app for sports stats with real queries and input validation",
      "Automated Line Art — Python + Unix pipeline that turned images into robotic drawing paths",
      "Learned to plan, build, and ship software through group projects and tight deadlines",
      "Summa Cum Laude · Trustee's Scholarship and Provost Scholar",
      "Women's lacrosse and volunteer work at the Indiana County Humane Society",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  period?: string;
  href?: string;
  repo?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
};

export const projects: Project[] = [
  {
    name: "GlowSync",
    period: "May 2026 – Present",
    description:
      "Full-stack skincare app for personalized AM/PM routines, ingredient safety, and day-to-day tracking—with secure accounts and an education-first experience.",
    highlights: [
      "Skin quiz and routine coach that turn answers into morning/evening product ideas",
      "My Routine tracker with usage logging, product status, and ingredient conflict warnings",
      "Actives library, routine guide, education hub, journal, history, compare, and wishlist",
      "Secure accounts (hashed passwords, login limits, protected cookies, security headers)",
      "Vitest tests plus automated lint, build, and dependency checks; live on Vercel",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Vitest"],
    href: site.glowsyncUrl,
    repo: "https://github.com/ashleyandrikanich/glowsync",
    featured: true,
    image: "/glowsync-preview.png",
    imageAlt: "GlowSync skincare app home screen",
    imagePosition: "right",
  },
  {
    name: "StatHub",
    period: "January 2025 – May 2025",
    description:
      "Group project: a full-stack sports statistics platform with relational data modeling and live performance dashboards.",
    highlights: [
      "Designed and managed a MySQL database with optimized schemas for player and team records",
      "Built PHP/HTML interfaces with secure server-side logic and dynamic rendering",
      "Wrote complex SQL queries with joins and aggregations for real-time statistics updates",
      "Enforced input validation to protect data integrity during multi-user operations",
    ],
    stack: ["PHP", "MySQL", "HTML", "SQL", "phpMyAdmin"],
  },
  {
    name: "Automated Line Art",
    period: "October 2024 – December 2024",
    description:
      "Group project: converted digital images into precise multi-axis robotic drawing paths using Python and custom hardware.",
    highlights: [
      "Parsed images and converted pixel-density gradients into G-code for grayscale replication",
      "Integrated Unix shell commands with multi-axis control scripting for synchronized motion",
      "Designed a 3D-printed marker adapter in CAD for sub-millimeter drawing precision",
      "Ran calibration and error-margin testing to reduce mechanical backlash",
    ],
    stack: ["Python", "G-code", "CAD", "Unix"],
  },
];

export type SkillCard = {
  title: string;
  description: string;
};

export const skills: SkillCard[] = [
  {
    title: "Security & Networking",
    description:
      "Network security, risk management, threat analysis, incident response, MFA, lockout policies, Wireshark, and CI/CD with GitHub Actions.",
  },
  {
    title: "AI Engineering",
    description:
      "LLM integration, prompt engineering, secure data parsing, and AI-assisted development with Claude Code.",
  },
  {
    title: "Programming Languages",
    description:
      "Python, Java, PHP, SQL, HTML, JavaScript, and TypeScript for full-stack and automation work.",
  },
  {
    title: "Frameworks & Libraries",
    description:
      "Next.js, React, Tailwind CSS, and Prisma ORM for modern, type-safe web applications.",
  },
  {
    title: "Databases & Systems",
    description:
      "MySQL, PostgreSQL, phpMyAdmin, Unix/Linux, Windows, Git, VS Code, Cursor, Vitest, and ESLint.",
  },
  {
    title: "Professional Skills",
    description:
      "Communication, adaptability, time management, teamwork, problem solving, and continuous learning.",
  },
];
