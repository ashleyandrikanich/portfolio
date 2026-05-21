import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3d1219] py-8 text-sm text-muted">
      <div className="flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {site.name}
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href={site.linkedin} className="transition hover:text-[#e8d5b7]">
            LinkedIn
          </Link>
          <Link href={site.github} className="transition hover:text-[#e8d5b7]">
            GitHub
          </Link>
          <Link href="#resume" className="transition hover:text-[#e8d5b7]">
            Resume
          </Link>
          <Link
            href={site.glowsyncUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#e8d5b7]"
          >
            GlowSync
          </Link>
        </p>
      </div>
    </footer>
  );
}
