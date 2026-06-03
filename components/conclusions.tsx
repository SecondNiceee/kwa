import { CheckCircle2 } from "lucide-react"

const points = [
  "Система решает главную проблему локации — дезориентацию в узле троп у моста.",
  "Единый визуальный язык формирует идентичность места без агрессивной рекламы.",
  "Носители подчинены принципам визуальной экологии: минимум объектов, природная палитра.",
  "Элементы спроектированы как конструктор: пиктограммы, тотемы и маркеры масштабируются на весь парк.",
]

export function Conclusions() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <span className="text-sm font-semibold text-accent">Этап 7 · Выводы</span>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
          Влияние на восприятие и культуру пространства
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
