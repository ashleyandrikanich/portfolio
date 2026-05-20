import {
  aboutIntro,
  aboutInterests,
  certifications,
  education,
} from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-surface py-14 sm:py-20">
      <div className="w-full px-5 sm:px-8">
        <SectionHeading
          number="01"
          title="About"
          subtitle="Interests, background, and credentials"
        />

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#e8d5b7]">
            Interests
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {aboutInterests.map((interest) => (
              <li key={interest} className="chip">
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          {aboutIntro}
        </p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="panel p-5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[#e8d5b7]">
              Education
            </dt>
            <dd className="mt-3 text-sm text-foreground">
              <p className="font-medium">{education.degree}</p>
              <p className="text-muted">{education.minor}</p>
              <p className="mt-2">{education.school}</p>
              <p className="text-muted">
                {education.period} · {education.honors}
              </p>
            </dd>
          </div>
          <div className="panel p-5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[#e8d5b7]">
              Certifications
            </dt>
            <dd className="mt-3 space-y-3">
              {certifications.map((cert) => (
                <p key={cert.name} className="text-sm text-foreground">
                  {cert.name}
                  <span className="text-muted"> — {cert.date}</span>
                </p>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
