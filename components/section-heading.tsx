export function SectionHeading({
  step,
  title,
  intro,
}: {
  step: string
  title: string
  intro?: string
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground">
        <span className="flex size-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-accent-foreground">
          {step}
        </span>
        Этап {step}
      </span>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  )
}
