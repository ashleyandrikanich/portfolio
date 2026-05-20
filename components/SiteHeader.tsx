import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#3d1219]/95 backdrop-blur-sm">
      <div className="flex w-full items-center justify-center px-5 py-3.5 sm:px-8">
        <SiteNav />
      </div>
    </header>
  );
}
