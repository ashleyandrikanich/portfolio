import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} · ${site.title}`,
  description: site.tagline,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ashley.vercel.app"
  ),
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#4a1520] antialiased">
      <body className="flex min-h-dvh flex-col bg-[#4a1520] text-[#f5f5f4]">
        <div className="flex min-h-dvh flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
