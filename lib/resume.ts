export const resume = {
  contact: {
    address: "205 Victoria Lane, Oxford, PA 19363",
    phone: "(302) 559-6012",
    email: "aandrikanich25@gmail.com",
    linkedin: "linkedin.com/in/ashley-andrikanich-164470300",
  },
  summary:
    "CompTIA Security+ certified cybersecurity graduate and AI engineering intern with hands-on experience building secure, data-driven applications. Skilled in identity management, application security, CI/CD, and full-stack development with Next.js, React, TypeScript, and AI-assisted workflows.",
  certifications: [
    { name: "CompTIA Security+ (SY0-701)", date: "November 2025" },
  ],
  skillGroups: [
    {
      label: "Security & networking",
      items:
        "Network security, risk management, threat analysis, incident response, Wireshark, social engineering tactics, multi-factor authentication, password lockout logic, CI/CD pipelines, GitHub Actions",
    },
    {
      label: "AI engineering",
      items:
        "LLM integration, prompt engineering, AI data parsing, Claude Code",
    },
    {
      label: "Programming languages",
      items: "Python, Java, PHP, SQL, HTML, JavaScript, TypeScript",
    },
    {
      label: "Libraries & frameworks",
      items: "Next.js, React, Tailwind CSS, Prisma ORM",
    },
    {
      label: "Database management",
      items: "MySQL, phpMyAdmin, PostgreSQL",
    },
    {
      label: "Systems & tools",
      items:
        "Unix/Linux, Windows, Git, GitHub, VS Code, Cursor, Vitest, ESLint, NanoClaw",
    },
    {
      label: "Soft skills",
      items:
        "Communication, adaptability, time management, continuous learning, teamwork, problem solving",
    },
  ],
  education: {
    degree: "B.S. Computer Science, Cybersecurity Concentration",
    minor: "Minor in Criminology",
    school: "Indiana University of Pennsylvania, Indiana, PA",
    period: "August 2021 – May 2025",
    honors: "GPA 3.78 · Summa Cum Laude",
  },
  experience: [
    {
      title: "Cybersecurity / AI Engineer Intern",
      company: "End of an Era",
      period: "January 2026 – May 2026",
      sections: [
        {
          heading: "Responsibilities",
          bullets: [
            "Security infrastructure enforcement: Implemented and enforced platform-wide Multi-Factor Authentication (MFA) requirements and account lockout policies to secure user authentication and defend against brute-force attacks",
            "Frontend UI engineering: Developed and standardized responsive, modern user interfaces utilizing Next.js, TypeScript, and Tailwind CSS, improving visual consistency and frontend performance",
            "Version control & code review: Managed codebase updates using Git and GitHub, actively participating in engineering workflows by submitting, reviewing, and merging code via pull requests",
            "Automated workflow integration: Collaborated within the development pipeline using automated tools, ensuring code changes met core syntax, styling, and structural requirements before deployment",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "GlowSync",
      period: "May 2026 – Present",
      type: "Personal project",
      bullets: [
        "Full-stack skincare web app (Next.js, React, TypeScript, Tailwind, Prisma, SQLite) deployed on Vercel",
        "User accounts with bcrypt-hashed passwords, password policy, JWT sessions, and httpOnly cookies",
        "Login rate limiting, same-origin checks, request size limits, and CSP/security headers site-wide",
        "Skin quiz and routine coach that recommend AM/PM steps from skin profile and concerns",
        "My Routine: product logging, usage frequency, status tags, routine rating, and ingredient pairing alerts",
        "Actives library, routine guide, education hub, skin journal, routine history, product compare, wishlist",
        "Vitest coverage for quiz logic, routine analysis, and auth/security utilities; GitHub Actions quality gate",
      ],
    },
    {
      name: "StatHub",
      period: "January 2025 – May 2025",
      type: "Group project",
      bullets: [
        "MySQL database design for player and team performance records",
        "PHP/HTML full-stack app with secure server-side logic",
        "Complex SQL queries with joins and aggregations for live statistics",
      ],
    },
    {
      name: "Automated Line Art",
      period: "October 2024 – December 2024",
      type: "Group project",
      bullets: [
        "Python scripts converting images to G-code for robotic drawing",
        "Unix shell integration for multi-axis motion control",
        "3D-printed marker adapter for sub-millimeter precision",
      ],
    },
  ],
  awards: [
    "Trustee's Scholarship Recipient (2021–2025)",
    "Provost Scholar (2024, 2025)",
    "PSAC Scholar Athlete (2022, 2023)",
  ],
  activities: [
    "Volunteer, Indiana County Humane Society (Sep 2024 – May 2025)",
    "IUP Women's Lacrosse Team (Aug 2021 – Jun 2023)",
    "American Sign Language Club (Aug 2021 – Dec 2021)",
  ],
} as const;
