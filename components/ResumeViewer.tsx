"use client";

import { useState } from "react";
import { ResumeDocument } from "./ResumeDocument";

export function ResumeViewer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="mt-8 rounded-lg border border-border bg-[#fafaf9] text-stone-800 shadow-lg">
      <div className="relative">
        <div
          className={`p-6 sm:p-8 ${expanded ? "" : "max-h-72 overflow-hidden"}`}
          id="resume-content"
        >
          <ResumeDocument />
        </div>

        {!expanded ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fafaf9] to-transparent"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="border-t border-stone-200 px-6 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          aria-controls="resume-content"
          className="w-full rounded-md border border-[#7a3540] bg-[#f5f5f4] px-4 py-2.5 text-sm font-semibold text-[#4a1520] transition hover:bg-white sm:w-auto"
        >
          {expanded ? "Show less" : "View full resume"}
        </button>
      </div>
    </article>
  );
}
