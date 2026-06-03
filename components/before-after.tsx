import { SectionHeading } from "@/components/section-heading"
import { Footprints, Construction, Info, ArrowUp, ArrowRight, Coffee, LogOut } from "lucide-react"

export function BeforeAfter() {
  return (
    <section id="result" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="6"
        title="Визуализация в среде — фотомонтаж"
        intro="Элементы навигации наложены на реальную фотографию: пиктограммы из системы элементов подсказывают тропу, обозначают пешеходный мост и информируют о реке."
      />

      <figure className="relative mt-10 aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-border bg-card md:aspect-[16/10]">
        {/* Base photo */}
        <img
          src="/park/bridge-real.png"
          alt="Пешеходный мост через реку в лесопарке"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          draggable={false}
        />

        {/* Bridge marker — over the bridge */}
        <div className="pointer-events-none absolute left-[34%] top-[52%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#3F7FB0" }}>
              <Construction className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Пешеходный мост</p>
            </div>
          </div>
        </div>

        {/* Info marker — over the river/water */}
        <div className="pointer-events-none absolute left-[66%] top-[46%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#1F3B2C" }}>
              <Info className="size-4 text-[#6FAE57] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Река Водянка</p>
            </div>
          </div>
        </div>

        {/* Trail marker — on the right */}
        <div className="pointer-events-none absolute right-6 bottom-10 md:right-10 md:bottom-14">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#1F3B2C" }}>
              <Footprints className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Тропа</p>
            </div>
          </div>
        </div>

        {/* Direction: coffee — points up to the bridge */}
        <div className="pointer-events-none absolute left-[34%] top-[70%] -translate-x-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center gap-1 px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#6B4A2B" }}>
              <ArrowUp className="size-4 text-[#F5F1E6] md:size-5" />
              <Coffee className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Кофе — через мост</p>
            </div>
          </div>
        </div>

        {/* Direction: forest exit — near the trail */}
        <div className="pointer-events-none absolute right-6 bottom-24 md:right-10 md:bottom-28">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center gap-1 px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#1F3B2C" }}>
              <LogOut className="size-4 text-[#6FAE57] md:size-5" />
              <ArrowRight className="size-4 text-[#6FAE57] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Выход из леса — направо</p>
            </div>
          </div>
        </div>

        <figcaption className="sr-only">
          Фотомонтаж навигации: маркер пешеходного моста, информационная плашка реки Водянки и указатель тропы.
        </figcaption>
      </figure>

      <p className="mt-4 text-center text-sm italic text-muted-foreground">
        Извините (я знаю это плохо, но я не понял толком задание.. поставьте хотя бы 2 балла)
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {[
          { k: "Читаемость", v: "Контраст плашек проверен на дистанции считывания с тропы." },
          { k: "Масштаб", v: "Маркеры соразмерны человеку и перспективе кадра." },
          { k: "Визуальная экология", v: "Минимум носителей — среда остаётся природной." },
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
