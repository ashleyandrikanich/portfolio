import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="#" className="font-semibold tracking-tight text-foreground">
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
