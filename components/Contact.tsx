import Link from "next/link";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8"
    >
      <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-accent/5 p-8 shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Open to internships, junior developer roles, and collaboration on web
          projects. The fastest way to reach me is email or LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`mailto:${site.email}`}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
          >
            Email me
          </Link>
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/40"
          >
            GitHub
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/40"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
