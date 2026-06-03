import { SectionHeading } from "@/components/section-heading"
import { TriangleAlert, Footprints, Layers, ScanEye, Compass } from "lucide-react"

const problems = [
  {
    icon: Compass,
    title: "Дезориентация",
    text: "На развилке у моста нет ни одного указателя — пользователь не понимает, куда ведут тропы и где он находится.",
  },
  {
    icon: ScanEye,
    title: "Отсутствие идентичности",
    text: "Благоустроенная территория не читается как единое «место»: нет имени, образа, узнаваемого визуального языка.",
  },
  {
    icon: Layers,
    title: "Нет иерархии информации",
    text: "Функциональные зоны (родник, смотровая, отдых) ничем не обозначены и не приоритизированы.",
  },
  {
    icon: Footprints,
    title: "Точки внимания не поддержаны",
    text: "Мост и брод — естественные точки решения маршрута, но визуально они никак не сопровождаются.",
  },
]

export function LocationAnalysis() {
  return (
    <section id="analysis" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="1"
        title="Выбор и анализ пространства"
        intro="Локация — благоустроенный городской лесопарк с пешеходным мостом через ручей. Среда спокойная, природная, с естественными потоками людей вдоль троп и узловой точкой у переправы."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src="/park/original.png"
            alt="Исходное фото лесопарка: пешеходный мост через ручей, тропы расходятся в разные стороны"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
            Фотофиксация. Узел троп у моста — ключевая точка принятия решения о маршруте.
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/15 p-5">
        <TriangleAlert className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
        <p className="text-sm leading-relaxed text-foreground">
          <strong className="font-semibold">Вывод анализа:</strong> среда не агрессивна, но «немая».
          Главная проблема — не визуальный шум, а его отсутствие в нужных точках. Задача системы —
          мягко направлять, не разрушая природный характер места.
        </p>
      </div>
    </section>
  )
}
