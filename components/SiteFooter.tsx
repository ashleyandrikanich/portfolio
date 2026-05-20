import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {year} {site.name}
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
