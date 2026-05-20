import {
  aboutIntro,
  certifications,
  coreFocus,
  education,
  interests,
} from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-surface py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          number="01"
          title="About"
          subtitle="Background, education, and what I care about in my work"
        />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          {aboutIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <dt className="section-label">Education</dt>
            <dd className="mt-2 text-sm text-foreground">
              <p className="font-medium">{education.degree}</p>
              <p className="text-muted">{education.minor}</p>
              <p className="mt-2">{education.school}</p>
              <p className="text-muted">
                {education.period} · {education.honors}
              </p>
            </dd>
          </div>
          <div>
            <dt className="section-label">Certifications</dt>
            <dd className="mt-2 space-y-3">
              {certifications.map((cert) => (
                <p key={cert.name} className="text-sm text-foreground">
                  {cert.name}
                  <span className="text-muted"> — {cert.date}</span>
                </p>
              ))}
            </dd>
          </div>
        </dl>

        <ul className="mt-10 space-y-4 border-t border-border pt-10">
          {coreFocus.map((item) => (
            <li key={item.title} className="text-sm">
              <span className="font-medium text-foreground">{item.title}</span>
              <span className="text-muted"> — {item.body}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted">
          {interests.join(" · ")}
        </p>
      </div>
    </section>
  );
}
