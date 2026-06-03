"use client"

import { useRef, useState, useCallback } from "react"
import { SectionHeading } from "@/components/section-heading"
import { MoveHorizontal } from "lucide-react"

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
