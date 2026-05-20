import Link from "next/link";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Projects
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Selected work that reflects how I approach product thinking, UI, and
        full-stack implementation.
      </p>
      <ul className="mt-10 space-y-6">
        {projects.map((project) => (
          <li
            key={project.name}
            className={`rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md ${
              project.featured
                ? "border-accent/30 ring-1 ring-accent/15"
                : "border-border"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                {project.featured ? (
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent-dark">
                    Featured
                  </span>
                ) : null}
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-accent/40"
                  >
                    Live
                  </Link>
                ) : null}
                {project.repo ? (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-accent/40"
                  >
                    Code
                  </Link>
                ) : null}
              </div>
            </div>
            <p className="mt-4 text-muted">{project.description}</p>
            <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-muted">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-background px-2.5 py-1 text-xs font-medium text-foreground ring-1 ring-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
