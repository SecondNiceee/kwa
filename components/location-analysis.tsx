import { SectionHeading } from "@/components/section-heading"
import { TriangleAlert, Footprints, Layers, ScanEye, Compass } from "lucide-react"

const problems = [
  {
    icon: Compass,
    title: "Дезориентация в узле",
    text: "На развилке дорожек нет ни одного указателя. Пользователь не понимает, какая тропа куда ведёт, где находятся ключевые объекты парка.",
  },
  {
    icon: ScanEye,
    title: "Отсутствие идентичности",
    text: "Территория не читается как единое место. Нет имени парка, узнаваемого визуального языка, чёткого образа в сознании посетителя.",
  },
  {
    icon: Layers,
    title: "Слабая иерархия информации",
    text: "Функциональные зоны (центральная площадь, зона отдыха, лесная зона, кафе) не обозначены. Приоритет объектов не ясен, что затрудняет планирование маршрута.",
  },
  {
    icon: Footprints,
    title: "Неподдержанные точки решения",
    text: "Развилки дорожек — естественные узлы принятия решения о маршруте, но визуально они никак не сопровождаются, что усиливает неопределённость.",
  },
]

export function LocationAnalysis() {
  return (
    <section id="analysis" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="1"
        title="Анализ локации и выявление проблем"
        intro="Объект исследования — благоустроенный городской парк с разветвлённой сетью мощёных дорожек и зонами отдыха. Среда зелёная и комфортная, но навигационно не организована. На развилках дорожек нет ни одного указателя, что создаёт дезориентацию и снижает комфорт пребывания."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src="/images/park-background.jpg"
            alt="Исходное фото городского парка: дорожки из плитки расходятся в разные стороны, зоны отдыха со скамейками"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
            Фотофиксация. Развилка мощёных дорожек — ключевая точка принятия решения о маршруте.
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
          <strong className="font-semibold">Вывод анализа:</strong> среда физически благоустроена, но коммуникативно неорганизована. Задача проектирования — создать мягкую, природосообразную систему навигации, которая помогает ориентироваться, не нарушая спокойный характер места.
        </p>
      </div>
    </section>
  )
}
