import { Trees } from "lucide-react"

const nav = [
  { href: "#analysis", label: "Анализ" },
  { href: "#audience", label: "Аудитория" },
  { href: "#tasks", label: "Задачи" },
  { href: "#concept", label: "Концепция" },
  { href: "#system", label: "Система" },
  { href: "#result", label: "Внедрение" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Trees className="size-5" />
          </span>
          <span className="font-display text-base font-extrabold tracking-tight text-foreground">
            Лесной&nbsp;парк
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <span className="hidden shrink-0 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground sm:block">
          ПЗ №4
        </span>
      </div>
    </header>
  )
}
