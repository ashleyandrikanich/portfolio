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
  location: "Oxford, PA",
  profileImage: "/profile.png",
  profileImageAlt: "Ashley Andrikanich",
  resumeUrl: undefined as string | undefined,
} as const;

export const aboutIntro = [
  "I am a CompTIA Security+ certified Computer Science graduate (Cybersecurity concentration, Summa Cum Laude) with practical experience building secure, data-driven web applications.",
  "As a Cybersecurity/AI Engineering Intern at End of an Era, I work on identity management, automated CI/CD, and full-stack features using React, Next.js, and TypeScript. I also ship GlowSync, a personal skincare routine platform with security hardening and automated testing.",
];

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

export const coreFocus = [
  {
    title: "Application security",
    body: "Multi-factor authentication, password lockout policies, rate limiting, secure sessions, and defensive coding aligned with real-world threat models.",
  },
  {
    title: "AI-assisted engineering",
    body: "LLM integration, prompt engineering, secure data parsing, and containerized agent workflows with NanoClaw and Docker.",
  },
  {
    title: "Full-stack development",
    body: "Next.js, React, TypeScript, Tailwind CSS, Prisma, and relational databases—from UI polish through API and data modeling.",
  },
  {
    title: "Quality & automation",
    body: "Vitest unit tests, ESLint, GitHub Actions pipelines, and dependency auditing before deployment.",
  },
] as const;

export const interests = [
  "Cybersecurity",
  "AI Engineering",
  "Web Development",
  "Threat Analysis",
  "Identity Management",
  "CI/CD",
  "Health Tech",
  "UI/UX",
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
    role: "Cybersecurity / AI Engineer Intern",
    period: "January 2026 – May 2026",
    overview:
      "Internship focused on security infrastructure, AI automation, and full-stack feature development for estate-planning workflows.",
    achievements: [
      "Enforced multi-factor authentication for administrative accounts to strengthen access control",
      "Developed and deployed a password lockout policy with a secure forgot-password bypass",
      "Built a manual account unlock feature in the admin dashboard for granular access control",
      "Engineered containerized AI agent workflows with NanoClaw and Docker for isolated execution",
      "Architected the Plan For Your Pets and Dependents module with multi-page workflows",
      "Standardized global UI with React and Tailwind CSS and improved navigation flow redirects",
    ],
  },
  {
    id: "glowsync",
    company: "GlowSync",
    role: "Full-Stack Developer",
    period: "May 2026 – Present",
    overview:
      "Personal project: a responsive skincare routine app with quiz-driven recommendations, routine tracking, and security-first infrastructure.",
    achievements: [
      "Built an interactive skin assessment quiz that generates tailored AM/PM routine recommendations",
      "Developed routine tracking with active-ingredient ordering, usage logging, and local persistence",
      "Programmed conflict detection to flag risky active ingredient pairings automatically",
      "Implemented encrypted sessions, rate limiting, same-origin checks, and security headers",
      "Added Vitest suites and a GitHub Actions CI/CD pipeline with lint, build, and audit steps",
    ],
  },
  {
    id: "iup",
    company: "Indiana University of Pennsylvania",
    role: "Computer Science Student",
    period: "August 2021 – May 2025",
    overview:
      "Bachelor's in Computer Science with a Cybersecurity concentration and Criminology minor. Graduated Summa Cum Laude with a 3.78 GPA.",
    achievements: [
      "Trustee's Scholarship Recipient (2021–2025) and Provost Scholar (2024, 2025)",
      "PSAC Scholar Athlete (2022, 2023) — IUP Women's Lacrosse",
      "Led and contributed to full-stack group projects including StatHub and Automated Line Art",
      "Volunteer, Indiana County Humane Society (September 2024 – May 2025)",
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
};

export const projects: Project[] = [
  {
    name: "GlowSync",
    period: "May 2026 – Present",
    description:
      "A full-stack skincare routine app that helps users build personalized AM/PM regimens, track products, and avoid active-ingredient conflicts.",
    highlights: [
      "Interactive skin quiz with dynamic routine recommendations",
      "Routine tracker with usage logging and conflict detection",
      "Secure auth, rate limiting, same-origin verification, and security headers",
      "Vitest unit tests and GitHub Actions CI with lint, build, and npm audit",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Vitest"],
    href: "https://glowsync-nine.vercel.app/",
    repo: "https://github.com/ashleyandrikanich/glowsync",
    featured: true,
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
      "LLM integration, prompt engineering, secure data parsing, Claude Code, and containerized agent workflows with NanoClaw and Docker.",
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
