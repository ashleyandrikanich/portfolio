import { experiences } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          number="02"
          title="Experience"
          subtitle="Internships, shipped projects, and academic work"
        />

        <ol className="mt-10 space-y-0">
          {experiences.map((item, index) => (
            <li
              key={item.id}
              className="relative grid gap-4 border-l border-brand/30 py-8 pl-6 sm:grid-cols-[140px_1fr] sm:gap-8 sm:pl-8"
            >
              <span
                className="absolute -left-1.5 top-10 h-3 w-3 rounded-full bg-brand ring-4 ring-background"
                aria-hidden
              />
              <div className="text-sm">
                <p className="font-mono text-xs text-brand">{item.period}</p>
                <p className="mt-2 font-semibold text-foreground">
                  {item.company}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.overview}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.slice(0, 4).map((point) => (
                    <li key={point} className="text-sm text-muted">
                      — {point}
                    </li>
                  ))}
                </ul>
              </div>
              {index < experiences.length - 1 ? (
                <span
                  className="absolute bottom-0 left-0 right-0 h-px bg-border/60 sm:left-8"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
