import Link from "next/link";
import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const rows = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\D/g, "")}`,
  },
  { label: "Location", value: site.location },
  {
    label: "GitHub",
    value: "github.com/ashleyandrikanich",
    href: site.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "View profile",
    href: site.linkedin,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-surface py-14 sm:py-20">
      <div className="w-full px-5 sm:px-8">
        <SectionHeading
          number="07"
          title="Contact"
          subtitle="Open to cybersecurity, AI engineering, and full-stack roles"
        />

        <div className="panel mt-8 p-6 sm:p-8">
          <ul className="space-y-4">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex flex-col gap-1 border-b border-border/50 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-wide text-[#e8d5b7]">
                  {row.label}
                </span>
                {"href" in row && row.href ? (
                  <Link
                    href={row.href}
                    target={"external" in row ? "_blank" : undefined}
                    rel={"external" in row ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground hover:text-[#e8d5b7]"
                  >
                    {row.value}
                  </Link>
                ) : (
                  <span className="text-sm text-foreground">{row.value}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Prefer email or phone — I usually reply within a day or two.
          </p>
        </div>
      </div>
    </section>
  );
}
