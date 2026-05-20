import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="page-shell">
      <aside className="page-gutter page-gutter-left" aria-hidden="true" />
      <div className="page-center">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
        <SiteFooter />
      </div>
      <aside className="page-gutter page-gutter-right" aria-hidden="true" />
    </div>
  );
}
