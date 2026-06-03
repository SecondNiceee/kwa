import { MapPin, Eye, Compass } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/park/enhanced.png"
          alt="Лесопарк с наложенной системой навигации: пилон-указатель, маркер моста и напольная графика"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/45 to-primary/30" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28">
        <div className="flex flex-wrap items-center gap-2 text-primary-foreground/80">
          <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            Дизайн визуальных коммуникаций
          </span>
          <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            Практическое задание №4
          </span>
        </div>

        <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
          Визуальные коммуникации в городском пространстве
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg">
          Проект целостной системы навигации для городского лесопарка. Среда рассмотрена как
          коммуникативная система: от считывания на ходу до снижения визуального шума и
          формирования образа места.
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: MapPin, k: "Локация", v: "Городской лесопарк, пешеходный мост" },
            { icon: Eye, k: "Подход", v: "Визуальная экология, минимум шума" },
            { icon: Compass, k: "Результат", v: "Единая система знаков и пиктограмм" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 backdrop-blur-sm"
            >
              <s.icon className="size-5 text-accent" />
              <dt className="mt-2 text-xs uppercase tracking-wide text-primary-foreground/60">{s.k}</dt>
              <dd className="text-sm font-medium leading-snug text-primary-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
