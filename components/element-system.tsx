import { SectionHeading } from "@/components/section-heading"
import {
  WalkIcon,
  BikeIcon,
  ViewIcon,
  PicnicIcon,
  WaterIcon,
  InfoIcon,
  BridgeIcon,
} from "@/components/pictograms"

const pictos = [
  { Icon: WalkIcon, label: "Прогулка" },
  { Icon: BikeIcon, label: "Велодорожка" },
  { Icon: ViewIcon, label: "Смотровая" },
  { Icon: PicnicIcon, label: "Зона отдыха" },
  { Icon: WaterIcon, label: "Родник" },
  { Icon: BridgeIcon, label: "Мост" },
  { Icon: InfoIcon, label: "Информация" },
]

export function ElementSystem() {
  return (
    <section id="system" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="5"
        title="Система элементов"
        intro="Отдельные знаки спроектированы как единая система: общая сетка пиктограмм, типографика и палитра. Все носители — модули одного конструктора."
      />

      {/* Pictogram set */}
      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-lg font-bold text-foreground">Пиктограммы</h3>
          <span className="text-xs text-muted-foreground">сетка 24×24, штрих 1.7</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {pictos.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4">
              <span className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-7" />
              </span>
              <span className="text-center text-xs font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sign types */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {/* Totem */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold text-foreground">Указатель-тотем</h3>
          <p className="mt-1 text-sm text-muted-foreground">Вертикальный пилон в узловых точках.</p>
          <div className="mt-4 flex justify-center rounded-xl bg-secondary/60 py-5">
            <div className="w-40 overflow-hidden rounded-lg shadow-lg" style={{ background: "#1F3B2C" }}>
              <div className="px-3 py-3" style={{ background: "#2C4A39" }}>
                <p className="font-display text-base font-extrabold leading-none text-[#F5F1E6]">ЛЕСНОЙ</p>
                <p className="font-display text-base font-extrabold leading-tight text-[#6FAE57]">ПАРК</p>
              </div>
              <ul className="divide-y divide-white/10">
                {[
                  { Icon: WalkIcon, t: "Тропа", d: "→" },
                  { Icon: ViewIcon, t: "Смотровая", d: "→" },
                  { Icon: WaterIcon, t: "Родник", d: "↘" },
                ].map(({ Icon, t, d }) => (
                  <li key={t} className="flex items-center gap-2 px-3 py-2.5">
                    <Icon className="size-5 text-[#F5F1E6]" />
                    <span className="flex-1 text-xs font-medium text-[#F5F1E6]">{t}</span>
                    <span className="text-base font-bold text-[#6FAE57]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Object marker */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold text-foreground">Маркер объекта</h3>
          <p className="mt-1 text-sm text-muted-foreground">Горизонтальная плашка у точки интереса.</p>
          <div className="mt-4 flex items-center justify-center rounded-xl bg-secondary/60 py-10">
            <div className="flex w-56 overflow-hidden rounded-lg shadow-lg">
              <div className="flex items-center justify-center px-3" style={{ background: "#3F7FB0" }}>
                <BridgeIcon className="size-6 text-[#F5F1E6]" />
              </div>
              <div className="bg-[#F5F1E6] px-3 py-2.5">
                <p className="text-sm font-bold text-[#1F3B2C]">Пешеходный мост</p>
                <p className="text-xs text-[#2C4A39]">р. Тихая · к роднику</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ground graphic + locator */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold text-foreground">Напольная графика</h3>
          <p className="mt-1 text-sm text-muted-foreground">Направляющая стрелка и метка «Вы здесь».</p>
          <div className="mt-4 flex flex-col items-center gap-4 rounded-xl bg-secondary/60 py-8">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 shadow" style={{ background: "#6FAE57" }}>
              <span className="size-3 rounded-full border-2 border-[#F5F1E6]" />
              <span className="text-sm font-bold text-[#F5F1E6]">Вы здесь</span>
            </span>
            <svg width="120" height="60" viewBox="0 0 360 200" aria-hidden="true">
              <polygon points="40,180 150,40 210,40 120,180" fill="#6FAE57" />
              <polygon points="150,40 230,40 320,180 220,180 300,70 200,70" fill="#E8DCC4" />
              <polygon points="170,52 250,52 250,30 300,75 250,120 250,98 200,98" fill="#1F3B2C" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
