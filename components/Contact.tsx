import Link from "next/link";
import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-surface py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          number="05"
          title="Contact"
          subtitle="Open to cybersecurity, AI engineering, and full-stack roles"
        />

        <ul className="mt-10 space-y-3 text-sm">
          <li>
            <span className="text-muted">Email </span>
            <Link
              href={`mailto:${site.email}`}
              className="text-foreground hover:text-brand"
            >
              {site.email}
            </Link>
          </li>
          <li>
            <span className="text-muted">Phone </span>
            <Link
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="text-foreground hover:text-brand"
            >
              {site.phone}
            </Link>
          </li>
          <li>
            <span className="text-muted">Location </span>
            <span className="text-foreground">{site.location}</span>
          </li>
          <li>
            <span className="text-muted">GitHub </span>
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-brand"
            >
              github.com/ashleyandrikanich
            </Link>
          </li>
          <li>
            <span className="text-muted">LinkedIn </span>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-brand"
            >
              Profile
            </Link>
          </li>
        </ul>

        <p className="mt-8 text-sm text-muted">
          Prefer email or phone. I usually reply within a day or two.
        </p>
      </div>
    </section>
  );
}
