import { skillGroups } from "@/lib/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Skills
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <h3 className="font-semibold text-foreground">{group.label}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
