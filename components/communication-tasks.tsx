import { SectionHeading } from "@/components/section-heading"
import { Navigation, Info, Fingerprint, Sparkles, Volume2, Heart } from "lucide-react"

const tasks = [
  { icon: Navigation, title: "Навигация", text: "Указать направления и расстояния до зон в узловых точках маршрута." },
  { icon: Info, title: "Информирование", text: "Сообщить правила, названия объектов и статус территории." },
  { icon: Fingerprint, title: "Идентификация места", text: "Дать парку имя и узнаваемый визуальный язык." },
  { icon: Sparkles, title: "Атмосфера", text: "Поддержать спокойный природный характер среды." },
  { icon: Volume2, title: "Снижение визуальной агрессии", text: "Минимум носителей, мягкие цвета, отсутствие рекламного шума." },
  { icon: Heart, title: "Эмоциональный образ", text: "Сформировать ощущение ухоженного и дружелюбного места." },
]

export function CommunicationTasks() {
  return (
    <section id="tasks" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="3"
        title="Коммуникативные задачи пространства"
        intro="Что именно должна решать визуальная система. Приоритет — навигация и идентичность при бережном отношении к природной среде."
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
