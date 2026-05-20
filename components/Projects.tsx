import Link from "next/link";
import { projects } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-surface py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          number="03"
          title="Projects"
          subtitle="Apps and coursework I have built"
        />

        <ul className="mt-10 divide-y divide-border">
          {projects.map((project) => (
            <li
              key={project.name}
              className="grid gap-4 py-8 first:pt-0 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  {project.period ? (
                    <span className="font-mono text-xs text-muted">
                      {project.period}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-muted">
                  {project.stack.join(" · ")}
                </p>
              </div>
              <div className="flex flex-wrap items-start gap-2 sm:flex-col sm:items-end">
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand hover:underline"
                  >
                    {project.name === "GlowSync"
                      ? "glowsync-nine.vercel.app →"
                      : "Live →"}
                  </Link>
                ) : null}
                {project.repo ? (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground"
                  >
                    GitHub
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
