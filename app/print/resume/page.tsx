import { ResumeDocument } from "@/components/ResumeDocument";

export default function PrintResumePage() {
  return (
    <main className="resume-print-page mx-auto max-w-[8.5in] bg-[#fafaf9] px-10 py-10 text-stone-800">
      <ResumeDocument />
    </main>
  );
}
