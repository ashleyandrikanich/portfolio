import { experiences } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20">
      <div className="w-full px-5 sm:px-8">
        <SectionHeading
          number="02"
          title="Experience"
          subtitle="Internships, projects, and school"
        />

        <ol className="mt-8 space-y-4">
          {experiences.map((item) => (
            <li key={item.id} className="panel panel-accent p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-[130px_1fr] sm:gap-6">
                <div className="text-sm">
                  <p className="font-mono text-xs text-[#e8d5b7]">{item.period}</p>
                  <p className="mt-2 font-semibold text-foreground">
                    {item.company}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.overview}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                    {item.achievements.map((point) => (
                      <li key={point} className="text-sm text-muted">
                        <span className="text-[#e8d5b7]" aria-hidden>
                          ▸{" "}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
