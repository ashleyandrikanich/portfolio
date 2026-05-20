"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#resume", label: "Resume", id: "resume" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export function SiteNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="hidden flex-wrap justify-center gap-2 text-sm sm:flex"
      aria-label="Primary"
    >
      {links.map((link) => {
        const isActive = activeId === link.id;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "nav-tab nav-tab-active" : "nav-tab"}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
