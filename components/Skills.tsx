import { skills } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          number="04"
          title="Skills"
          subtitle="Security, AI, languages, and tools"
        />

        <dl className="mt-10 space-y-6">
          {skills.map((skill) => (
            <div key={skill.title} className="grid gap-1 sm:grid-cols-[200px_1fr]">
              <dt className="text-sm font-medium text-brand">{skill.title}</dt>
              <dd className="text-sm text-muted">{skill.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
