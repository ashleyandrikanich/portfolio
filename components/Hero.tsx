import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Portfolio
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
        Hi, I&apos;m {site.name.split(" ")[0]}.{" "}
        <span className="text-muted">I build web apps that are clear, useful, and
        well-structured.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {site.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="#projects"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
        >
          View projects
        </Link>
        <Link
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:bg-white"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
