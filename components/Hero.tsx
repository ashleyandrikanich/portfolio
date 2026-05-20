import Image from "next/image";
import { site } from "@/lib/site";

const highlights = [
  "CompTIA Security+",
  "Summa Cum Laude · IUP",
  "Cybersecurity",
  "AI Engineering",
];

export function Hero() {
  return (
    <section className="border-b border-border/80 py-14 sm:py-20">
      <div className="px-5 sm:px-8">
        <div className="panel p-6 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="shrink-0 self-center">
              <div className="overflow-hidden rounded-lg border-2 border-[#e8d5b7]/60 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                <Image
                  src={site.profileImage}
                  alt={site.profileImageAlt}
                  width={480}
                  height={624}
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 192px, 224px"
                  className="block h-52 w-40 object-cover object-[center_38%] sm:h-64 sm:w-48"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1 text-center lg:text-left">
              <h1 className="accent-heading text-3xl font-bold text-foreground sm:text-[2.75rem] sm:leading-tight">
                {site.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-[#e8d5b7]">
                {site.title}
              </p>
              <p className="mt-1 text-sm text-muted">{site.location}</p>

              <ul className="mt-5 grid w-fit grid-cols-2 gap-2 mx-auto lg:mx-0">
                {highlights.map((item) => (
                  <li key={item} className="chip justify-self-center lg:justify-self-start">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                {site.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
