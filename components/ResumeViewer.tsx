"use client";

import { useState } from "react";
import { resume } from "@/lib/resume";
import { site } from "@/lib/site";

function ResumeBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6 last:mb-0">
      <h3 className="border-b border-stone-300 pb-1 text-xs font-bold uppercase tracking-wide text-[#5c1010]">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function ResumeViewer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="mt-8 rounded-lg border border-border bg-[#fafaf9] text-stone-800 shadow-lg">
      <header className="border-b border-stone-300 p-6 text-center sm:p-8 sm:text-left">
        <h2 className="text-2xl font-bold text-[#4a1520]">{site.name}</h2>
        <p className="mt-1 text-sm font-medium text-stone-600">{site.title}</p>
        <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">
          {resume.contact.address} · {resume.contact.phone} ·{" "}
          {resume.contact.email} · {resume.contact.linkedin}
        </p>
      </header>

      <div className="relative">
        <div
          className={`p-6 sm:p-8 sm:pt-6 ${expanded ? "" : "max-h-72 overflow-hidden"}`}
          id="resume-content"
        >
          <ResumeBlock title="Professional summary">
            <p className="text-sm leading-relaxed">{resume.summary}</p>
          </ResumeBlock>

          <ResumeBlock title="Certifications">
            <ul className="space-y-1 text-sm">
              {resume.certifications.map((cert) => (
                <li key={cert.name}>
                  <strong>{cert.name}</strong>
                  <span className="text-stone-600"> — {cert.date}</span>
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Skills">
            <ul className="space-y-3 text-sm">
              {resume.skillGroups.map((group) => (
                <li key={group.label}>
                  <span className="font-semibold text-[#5c1010]">
                    {group.label}:{" "}
                  </span>
                  {group.items}
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Education">
            <p className="text-sm font-semibold">{resume.education.degree}</p>
            <p className="text-sm">{resume.education.minor}</p>
            <p className="text-sm text-stone-600">{resume.education.school}</p>
            <p className="text-sm text-stone-600">
              {resume.education.period} · {resume.education.honors}
            </p>
          </ResumeBlock>

          <ResumeBlock title="Experience">
            {resume.experience.map((job) => (
              <div key={job.company} className="mb-5 last:mb-0">
                <p className="text-sm font-bold text-[#4a1520]">{job.title}</p>
                <p className="text-sm text-stone-600">
                  {job.company} · {job.period}
                </p>
                {job.sections.map((section) => (
                  <div key={section.heading} className="mt-3">
                    <p className="text-xs font-semibold uppercase text-stone-500">
                      {section.heading}
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </ResumeBlock>

          <ResumeBlock title="Projects">
            {resume.projects.map((project) => (
              <div key={project.name} className="mb-4 last:mb-0">
                <p className="text-sm font-bold text-[#4a1520]">
                  {project.name}
                  <span className="font-normal text-stone-600">
                    {" "}
                    · {project.period} · {project.type}
                  </span>
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeBlock>

          <ResumeBlock title="Awards & honors">
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {resume.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Extracurricular">
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {resume.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ResumeBlock>
        </div>

        {!expanded ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fafaf9] to-transparent"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="border-t border-stone-200 px-6 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          aria-controls="resume-content"
          className="w-full rounded-md border border-[#7a3540] bg-[#f5f5f4] px-4 py-2.5 text-sm font-semibold text-[#4a1520] transition hover:bg-white sm:w-auto"
        >
          {expanded ? "Show less" : "View full resume"}
        </button>
      </div>
    </article>
  );
}
