import { site } from "@/lib/site";
import { ResumeViewer } from "./ResumeViewer";

export function Resume() {
  return (
    <section id="resume" className="section-surface py-14 sm:py-20">
      <div className="w-full px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="section-label">06</p>
            <h2 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
              Resume
            </h2>
            <p className="mt-2 text-sm text-muted">
              Preview below or download PDF / Word
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={site.resumePdfUrl}
              download="Ashley-Andrikanich-Resume.pdf"
              className="btn-primary"
            >
              Download PDF
            </a>
            <a
              href={site.resumeDocUrl}
              download="Ashley-Andrikanich-Resume.docx"
              className="btn-secondary"
            >
              Download Word
            </a>
          </div>
        </div>

        <ResumeViewer />
      </div>
    </section>
  );
}
