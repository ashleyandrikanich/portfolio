import { skills } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20">
      <div className="w-full px-5 sm:px-8">
        <SectionHeading
          number="04"
          title="Skills"
          subtitle="Security, AI, languages, and tools"
        />

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill.title} className="panel p-4">
              <h3 className="text-sm font-semibold text-[#e8d5b7]">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {skill.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
