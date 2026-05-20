import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {site.name}
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href={site.linkedin} className="hover:text-brand">
            LinkedIn
          </Link>
          <Link href={site.github} className="hover:text-brand">
            GitHub
          </Link>
          <Link
            href="https://glowsync-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            GlowSync
          </Link>
        </p>
      </div>
    </footer>
  );
}
