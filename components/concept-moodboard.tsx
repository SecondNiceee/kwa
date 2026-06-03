import { SectionHeading } from "@/components/section-heading"
import { TreePine, Signpost, Footprints, Bike, Eye, Droplets, Construction, Info } from "lucide-react"

const palette = [
  { name: "Лесной", hex: "#1F3B2C", note: "Корпус знаков" },
  { name: "Лист", hex: "#6FAE57", note: "Акцент, стрелки" },
  { name: "Песок", hex: "#E8DCC4", note: "Напольная графика" },
  { name: "Бумага", hex: "#F5F1E6", note: "Плашки текста" },
  { name: "Река", hex: "#3F7FB0", note: "Объекты у воды" },
]

const mood = [
  { src: "/park/mood-path.png", alt: "Солнечная лесная тропа — характер среды", Icon: TreePine },
  { src: "/park/mood-materials.png", alt: "Указатель из тёмно-зелёной стали с деревянной вставкой", Icon: Signpost },
  { alt: "Набор минималистичных пиктограмм парка", icons: [Footprints, Bike, Eye, TreePine, Droplets, Construction, Info] },
]

export function ConceptMoodboard() {
  return (
    <section id="concept" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          step="4"
          title="Концепция визуального образа и образец реализации"
          intro="Образная платформа проекта основана на трёх элементах: характер среды (светлая лесная тропа), материальность объектов (тёмно-зелёная сталь и дерево) и система пиктограмм. Цветовая палитра включает пять цветов: доминирующий лесной оттенок, живой акцент и три природных нейтрали."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {mood.map((m) => (
            <figure key={m.alt} className="overflow-hidden rounded-2xl border border-border bg-card">
              {"src" in m ? (
                <>
                  <div className="relative">
                    <img src={m.src} alt={m.alt} className="aspect-[4/3] w-full object-cover" />
                    <div className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-[#1F3B2C]/90 shadow-lg backdrop-blur">
                      <m.Icon className="size-5 text-[#6FAE57]" />
                    </div>
                  </div>
                  <figcaption className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
                    <m.Icon className="size-4 shrink-0 text-primary" />
                    {m.alt}
                  </figcaption>
                </>
              ) : (
                <>
                  <div className="flex min-h-64 flex-wrap items-center justify-center gap-4 bg-card p-6">
                    {m.icons.map((Icon, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <span className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          <Icon className="size-7" />
                        </span>
                      </div>
                    ))}
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                    {m.alt}
                  </figcaption>
                </>
              )}
            </figure>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">Цветовая система</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Пять цветов: один доминирующий, акцент и три природных нейтрали.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {palette.map((c) => (
                <div key={c.hex}>
                  <div
                    className="h-20 w-full rounded-xl border border-border"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-2 text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="font-mono text-xs uppercase text-muted-foreground">{c.hex}</p>
                  <p className="text-xs text-muted-foreground">{c.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">Типографика и характер</h3>
            <p className="mt-4 font-display text-3xl font-extrabold text-foreground">Manrope</p>
            <p className="text-sm text-muted-foreground">Заголовки и индексы — геометричный гротеск, хорошо читается с дистанции.</p>
            <p className="mt-4 text-2xl font-medium text-foreground">Inter</p>
            <p className="text-sm text-muted-foreground">Основной текст и подписи — нейтральный, спокойный ритм.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Спокойная", "Природная", "Дружелюбная", "Лаконичная"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
