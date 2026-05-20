import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/60 bg-background/95">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="#" className="text-sm font-semibold text-foreground">
          {site.firstName}
          <span className="text-muted">.dev</span>
        </Link>
        <nav
          className="hidden gap-4 text-sm text-muted sm:flex"
          aria-label="Primary"
        >
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              {i > 0 ? <span className="text-border" aria-hidden>/</span> : null}
              <Link href={link.href} className="hover:text-brand">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <Link
          href="#contact"
          className="text-sm font-medium text-brand hover:underline"
        >
          Email
        </Link>
      </div>
    </header>
  );
}
