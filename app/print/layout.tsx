export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="resume-print-shell w-full bg-[#fafaf9] text-stone-800">
      {children}
    </div>
  );
}
