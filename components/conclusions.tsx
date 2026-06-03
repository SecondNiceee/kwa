import { CheckCircle2 } from "lucide-react"

const points = [
  "Система решает практическую проблему локации — дезориентацию в узле троп и отсутствие идентичности места.",
  "Единый визуальный язык из семи пиктограмм, трёх типов носителей и пятицветной палитры образует универсальный конструктор.",
  "Все элементы подчинены принципам визуальной экологии: минимум объектов, естественная палитра, отсутствие рекламного шума.",
  "Система масштабируется: пиктограммы, тотемы и маркеры применяются по всему парку без потери цельности и характера.",
]

export function Conclusions() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <span className="text-sm font-semibold text-accent">Этап 7 · Результаты и выводы</span>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
          Результаты и применение системы
        </h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-primary-foreground/90">{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Дизайн визуальных коммуникаций · Практическое задание №4</p>
          <p>Тема: «Визуальные коммуникации в городском пространстве»</p>
        </div>
      </div>
    </footer>
  )
}
