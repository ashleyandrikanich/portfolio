type SectionHeadingProps = {
  id?: string;
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  id,
  number,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <header
      id={id}
      className={`scroll-mt-24 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4 ${className}`}
    >
      <div>
        <p className="section-label">{number}</p>
        <h2 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
