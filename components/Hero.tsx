import Image from "next/image";
import Link from "next/link";
import { projects, site } from "@/lib/site";

const glowsync = projects.find((p) => p.featured);

export function Hero() {
  return (
    <section className="border-b border-border/80 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-center gap-4 sm:gap-5">
          <Image
            src={site.profileImage}
            alt={site.profileImageAlt}
            width={96}
            height={96}
            priority
            className="h-16 w-16 shrink-0 rounded-full border-2 border-brand/40 object-cover object-top shadow-md sm:h-20 sm:w-20"
          />
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              {site.name}
            </h1>
            <p className="mt-0.5 text-sm font-medium text-brand sm:text-lg">
              {site.title}
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{site.location}</p>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href="#contact"
            className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-background hover:bg-brand-dark"
          >
            Contact
          </Link>
          <Link
            href="#experience"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-brand/50"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-brand/50"
          >
            Projects
          </Link>
        </div>

        {glowsync ? (
          <aside className="mt-10 flex flex-col gap-4 rounded-lg border border-brand/30 bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="section-label">Featured build</p>
              <p className="mt-1 font-semibold text-foreground">{glowsync.name}</p>
              <p className="mt-1 max-w-lg text-sm text-muted">
                {glowsync.description}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              {glowsync.href ? (
                <Link
                  href={glowsync.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-background hover:bg-brand-dark"
                >
                  Open GlowSync →
                </Link>
              ) : null}
              {glowsync.repo ? (
                <Link
                  href={glowsync.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted hover:text-foreground"
                >
                  Source
                </Link>
              ) : null}
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
