import { SectionHeading } from "@/components/section-heading"
import {
  Footprints,
  Eye,
  Droplets,
  TreePine,
  Construction,
  Map,
  Compass,
  Camera,
} from "lucide-react"
import { WalkIcon, BikeIcon, ViewIcon } from "@/components/pictograms"
import type { SVGProps } from "react"

type PictoEntry = { Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element; label: string }

const pictos: PictoEntry[] = [
  { Icon: WalkIcon, label: "Пешеход" },
  { Icon: BikeIcon, label: "Велосипед" },
  { Icon: ViewIcon, label: "Обзор" },
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
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-3">
          {pictos.map((picto) => (
            <div key={picto.label} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4">
              <span className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <picto.Icon width={28} height={28} />
              </span>
              <span className="text-center text-xs font-medium text-muted-foreground">{picto.label}</span>
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
                  { Icon: Footprints, t: "Тропа", d: "→" },
                  { Icon: Eye, t: "Смотровая", d: "→" },
                  { Icon: Droplets, t: "Родник", d: "↘" },
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
                <Construction className="size-6 text-[#F5F1E6]" />
              </div>
              <div className="bg-[#F5F1E6] px-3 py-2.5">
                <p className="text-sm font-bold text-[#1F3B2C]">Пешеходный мост</p>
                <p className="text-xs text-[#2C4A39]">р. Тихая · к роднику</p>
              </div>
            </div>
          </div>
        </div>

        {/* Information stand */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold text-foreground">Информационный стенд</h3>
          <p className="mt-1 text-sm text-muted-foreground">Карта маршрутов и правила парка.</p>
          <div className="mt-4 flex items-center justify-center rounded-xl bg-secondary/60 py-6">
            <div className="w-48 overflow-hidden rounded-lg shadow-lg" style={{ background: "#1F3B2C" }}>
              <div className="flex items-center justify-between px-3 py-2" style={{ background: "#2C4A39" }}>
                <div className="flex items-center gap-2">
                  <Map className="size-4 text-[#6FAE57]" />
                  <span className="text-xs font-bold text-[#F5F1E6]">Карта парка</span>
                </div>
                <Compass className="size-4 text-[#F5F1E6]/60" />
              </div>
              <div className="px-3 py-3">
                <div className="mb-2 grid grid-cols-3 gap-1">
                  {[Footprints, Eye, Droplets, TreePine, Camera, Construction].map((Icon, i) => (
                    <div key={i} className="flex items-center justify-center rounded bg-[#2C4A39]/60 p-1.5">
                      <Icon className="size-3.5 text-[#6FAE57]" />
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 rounded-full bg-[#6FAE57]" />
                  <div className="h-1.5 w-3/4 rounded-full bg-[#3F7FB0]" />
                  <div className="h-1.5 w-1/2 rounded-full bg-[#E8DCC4]/40" />
                </div>
              </div>
              <div className="border-t border-white/10 px-3 py-2">
                <p className="text-center text-[10px] text-[#F5F1E6]/70">Время работы: 6:00–22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
