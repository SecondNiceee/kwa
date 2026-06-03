"use client"

import { useRef, useState, useCallback } from "react"
import { SectionHeading } from "@/components/section-heading"
import { MoveHorizontal, Footprints, Eye, Droplets, Construction, Map, Compass, TreePine, Camera } from "lucide-react"

export function BeforeAfter() {
  const [pos, setPos] = useState(52)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <section id="result" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="6"
        title="Визуализация в среде — фотомонтаж"
        intro="Элементы наложены на реальную фотографию программно (Node.js + Sharp): композитинг SVG-знаков с учётом масштаба, контраста и дистанции восприятия. Потяните ползунок, чтобы сравнить «до» и «после»."
      />

      <div
        ref={ref}
        className="relative mt-10 aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border bg-card md:aspect-[16/10]"
        onPointerDown={(e) => {
          dragging.current = true
          ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
          setFromClientX(e.clientX)
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        {/* After (enhanced) base layer */}
        <img
          src="/park/enhanced.png"
          alt="Лесопарк с системой навигации"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          draggable={false}
        />
        {/* Before (original) clipped via clip-path so it stays full-size */}
        <img
          src="/park/original.png"
          alt="Исходное фото лесопарка без навигации"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />

        {/* Elements visible on the "После" side (right side) */}
        {pos > 40 && (
          <>
            {/* Totem on the left side of the path */}
            <div className="pointer-events-none absolute bottom-12 left-8 sm:left-12 md:left-16">
              <div className="w-24 overflow-hidden rounded-lg shadow-lg md:w-32" style={{ background: "#1F3B2C" }}>
                <div className="px-2 py-2 md:px-3 md:py-3" style={{ background: "#2C4A39" }}>
                  <p className="font-display text-xs font-extrabold leading-none text-[#F5F1E6] md:text-sm">ЛЕСНОЙ</p>
                  <p className="font-display text-xs font-extrabold leading-tight text-[#6FAE57] md:text-sm">ПАРК</p>
                </div>
                <ul className="divide-y divide-white/10">
                  {[
                    { Icon: Footprints, t: "Тропа", d: "→" },
                    { Icon: Eye, t: "Вид", d: "→" },
                    { Icon: Droplets, t: "Родник", d: "↘" },
                  ].map(({ Icon, t, d }) => (
                    <li key={t} className="flex items-center gap-1 px-2 py-1.5 md:gap-2 md:px-3 md:py-2">
                      <Icon className="size-3.5 text-[#F5F1E6] md:size-4" />
                      <span className="flex-1 text-[10px] font-medium text-[#F5F1E6] md:text-xs">{t}</span>
                      <span className="text-xs font-bold text-[#6FAE57] md:text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bridge marker in the center */}
            <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2">
              <div className="flex w-40 overflow-hidden rounded-lg shadow-lg md:w-56">
                <div className="flex items-center justify-center px-2 py-2 md:px-3 md:py-2.5" style={{ background: "#3F7FB0" }}>
                  <Construction className="size-5 text-[#F5F1E6] md:size-6" />
                </div>
                <div className="bg-[#F5F1E6] px-2 py-2 md:px-3 md:py-2.5">
                  <p className="text-xs font-bold text-[#1F3B2C] md:text-sm">Пешеходный мост</p>
                  <p className="text-[10px] text-[#2C4A39] md:text-xs">р. Тихая · к роднику</p>
                </div>
              </div>
            </div>

            {/* Information stand on the right */}
            <div className="pointer-events-none absolute bottom-16 right-8 sm:right-12 md:right-16">
              <div className="w-40 overflow-hidden rounded-lg shadow-lg md:w-48" style={{ background: "#1F3B2C" }}>
                <div className="flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2" style={{ background: "#2C4A39" }}>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Map className="size-3 text-[#6FAE57] md:size-4" />
                    <span className="text-[10px] font-bold text-[#F5F1E6] md:text-xs">Карта парка</span>
                  </div>
                  <Compass className="size-3 text-[#F5F1E6]/60 md:size-4" />
                </div>
                <div className="px-2 py-2 md:px-3 md:py-3">
                  <div className="mb-1.5 grid grid-cols-3 gap-1">
                    {[Footprints, Eye, Droplets, TreePine, Camera, Construction].map((Icon, i) => (
                      <div key={i} className="flex items-center justify-center rounded bg-[#2C4A39]/60 p-1">
                        <Icon className="size-2.5 text-[#6FAE57] md:size-3.5" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 rounded-full bg-[#6FAE57]" />
                    <div className="h-1 w-3/4 rounded-full bg-[#3F7FB0]" />
                    <div className="h-1 w-1/2 rounded-full bg-[#E8DCC4]/40" />
                  </div>
                </div>
                <div className="border-t border-white/10 px-2 py-1.5 md:px-3 md:py-2">
                  <p className="text-center text-[9px] text-[#F5F1E6]/70 md:text-[10px]">Время работы: 6:00–22:00</p>
                </div>
              </div>
            </div>

            {/* Directional arrows on the path */}
            <div className="pointer-events-none absolute top-1/4 right-1/4 text-[#6FAE57]/80">
              <Footprints className="size-6 md:size-8" />
            </div>
            <div className="pointer-events-none absolute top-2/3 left-1/4 text-[#3F7FB0]/80">
              <Eye className="size-5 md:size-7" />
            </div>
          </>
        )}

        <span className="absolute left-4 top-4 rounded-md bg-background/85 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
          До
        </span>
        <span className="absolute right-4 top-4 rounded-md bg-primary/85 px-2.5 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
          После
        </span>

        {/* Handle */}
        <div className="absolute inset-y-0 z-10" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="h-full w-0.5 bg-primary-foreground/90 shadow" />
          <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <MoveHorizontal className="size-5" />
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {[
          { k: "Читаемость", v: "Контраст плашек проверен на дистанции считывания с тропы." },
          { k: "Масштаб", v: "Тотем и маркеры соразмерны человеку и перспективе кадра." },
          { k: "Визуальная экология", v: "5 носителей вместо рекламного шума — среда остаётся природной." },
        ].map((c) => (
          <div key={c.k} className="rounded-xl border border-border bg-card p-5">
            <p className="font-display text-sm font-bold text-foreground">{c.k}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
