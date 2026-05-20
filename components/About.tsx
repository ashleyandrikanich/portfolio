import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        About
      </h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <p className="text-base leading-relaxed text-muted">
          I&apos;m a developer focused on building full-stack web applications with
          modern tools. I care about readable code, thoughtful UI, and features that
          feel practical for real users—not just demos.
        </p>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-foreground">Role</dt>
              <dd className="mt-1 text-muted">{site.title}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Location</dt>
              <dd className="mt-1 text-muted">{site.location}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Currently</dt>
              <dd className="mt-1 text-muted">
                Building GlowSync and expanding my portfolio of shipped projects.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
