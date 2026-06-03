import { SectionHeading } from "@/components/section-heading"
import { Navigation, Info, Fingerprint, Sparkles, Volume2, Heart } from "lucide-react"

const tasks = [
  { icon: Navigation, title: "Навигация", text: "Направить по маршруту через узловые точки парка: от входа к мосту, от моста к целевой зоне. Указание расстояний и времени в пути." },
  { icon: Info, title: "Информирование", text: "Назвать ключевые объекты (мост, река, родник, смотровая), сообщить правила поведения и режим работы парка." },
  { icon: Fingerprint, title: "Идентификация", text: "Создать узнаваемый визуальный язык, который ассоциируется с этим местом и формирует его образ в памяти посетителя." },
  { icon: Sparkles, title: "Согласованность со средой", text: "Поддержать спокойный, природный характер места. Система должна органично вписываться в ландшафт, а не контрастировать с ним." },
  { icon: Volume2, title: "Минимум визуального шума", text: "Строго отобранное количество носителей, естественная палитра, отсутствие рекламной информации или избыточного украшательства." },
  { icon: Heart, title: "Комфорт пребывания", text: "Система элементов должна улучшить ощущение безопасности, ориентированности и общего комфорта во время прогулки." },
]

export function CommunicationTasks() {
  return (
    <section id="tasks" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="3"
        title="Коммуникативные задачи и принципы проектирования"
        intro="Система должна решать шесть взаимосвязанных задач. Главный принцип — ничего лишнего: информация считывается мгновенно, визуальная экология сохраняется, характер места не нарушается."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((t) => (
          <div key={t.title} className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <t.icon className="size-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">{t.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
