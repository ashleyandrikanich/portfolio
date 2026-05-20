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
      className={`scroll-mt-24 border-b border-border pb-5 ${className}`}
    >
      <div className="flex items-start gap-4">
        <span className="section-label shrink-0">{number}</span>
        <div>
          <h2 className="accent-heading text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
