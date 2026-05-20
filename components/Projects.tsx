import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-surface py-14 sm:py-20">
      <div className="w-full px-5 sm:px-8">
        <SectionHeading
          number="03"
          title="Projects"
          subtitle="Apps and coursework I have built"
        />

        <ul className="mt-8 space-y-4">
          {projects.map((project) => (
            <li
              key={project.name}
              className={`panel overflow-hidden p-0 sm:p-0 ${project.featured ? "panel-accent ring-1 ring-[#e8d5b7]/20" : ""}`}
            >
              <div className="flex flex-col lg:flex-row">
                {project.image ? (
                  <div className="relative aspect-[16/10] w-full shrink-0 border-b border-border/60 bg-[#3d1219] lg:aspect-auto lg:w-72 lg:border-b-0 lg:border-r">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? `${project.name} preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 288px"
                    />
                  </div>
                ) : null}
                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.name}
                        </h3>
                        {project.featured ? (
                          <span className="chip text-[0.65rem]">Featured</span>
                        ) : null}
                      </div>
                      {project.period ? (
                        <p className="mt-1 font-mono text-xs text-muted">
                          {project.period}
                        </p>
                      ) : null}
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                      <p className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-border/80 bg-[#3d1219] px-2 py-0.5 text-xs text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2">
                      {project.href ? (
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-center text-xs"
                        >
                          {project.name === "GlowSync" ? "Live site" : "Live"}
                        </Link>
                      ) : null}
                      {project.repo ? (
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-center text-xs"
                        >
                          GitHub
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
