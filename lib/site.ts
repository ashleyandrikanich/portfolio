export const site = {
  name: "Ashley Andrikanich",
  title: "Full-Stack Developer",
  tagline:
    "I build thoughtful web applications with clear UX, solid engineering, and attention to detail.",
  email: "ashley.andrikanich@example.com",
  github: "https://github.com/ashleyandrikanich",
  linkedin: "https://www.linkedin.com/in/ashleyandrikanich",
  location: "United States",
} as const;

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "GlowSync",
    description:
      "A full-stack skincare routine app that helps users build AM/PM routines, explore actives, and track products with educational guidance.",
    highlights: [
      "Interactive skin quiz with personalized routine suggestions",
      "Routine tracker with usage history, journal, and product compare",
      "Secure authentication, rate limiting, and security headers",
      "Expanded product catalog, actives library, and Vitest unit tests",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Vitest"],
    repo: "https://github.com/ashleyandrikanich/glowsync",
    featured: true,
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    label: "Backend",
    items: ["Node.js", "API Routes", "Prisma", "Authentication", "REST"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vercel", "ESLint", "Vitest", "VS Code / Cursor"],
  },
] as const;
