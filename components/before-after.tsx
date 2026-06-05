import { SectionHeading } from "@/components/section-heading"
import { Footprints, Info, ArrowUp, ArrowRight, ArrowLeft, Coffee, Trees, Users, MapPin } from "lucide-react"

export function BeforeAfter() {
  return (
    <section id="result" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        step="6"
        title="Визуализация в среде — фотомонтаж"
        intro="Элементы навигации наложены на реальную фотографию парка: пиктограммы из системы элементов указывают направления прогулочных троп, зоны отдыха и ключевые объекты."
      />

      <figure className="relative mt-10 aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-border bg-card md:aspect-[16/10]">
        {/* Base photo — park scene with curved path */}
        <img
          src="/images/park-background.jpg"
          alt="Летний парк с изогнутой прогулочной дорожкой и зонами отдыха"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          draggable={false}
        />

        {/* Main path marker — on the curved brick path (center-left) */}
        <div className="pointer-events-none absolute left-[22%] top-[68%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#1F3B2C" }}>
              <Footprints className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Прогулочная тропа</p>
            </div>
          </div>
        </div>

        {/* Rest zone marker — near the white bench on the right */}
        <div className="pointer-events-none absolute right-[12%] top-[52%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#6B4A2B" }}>
              <Users className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Зона отдыха</p>
            </div>
          </div>
        </div>

        {/* Park info marker — center area near people */}
        <div className="pointer-events-none absolute left-[48%] top-[42%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#3F7FB0" }}>
              <Info className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Центральная площадь</p>
            </div>
          </div>
        </div>

        {/* Direction to cafe — pointing forward along path */}
        <div className="pointer-events-none absolute left-[38%] top-[58%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center gap-1 px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#6B4A2B" }}>
              <ArrowUp className="size-4 text-[#F5F1E6] md:size-5" />
              <Coffee className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Кафе — 150м</p>
            </div>
          </div>
        </div>

        {/* Direction to forest zone — pointing left */}
        <div className="pointer-events-none absolute left-[8%] top-[45%] -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center gap-1 px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#1F3B2C" }}>
              <ArrowLeft className="size-4 text-[#6FAE57] md:size-5" />
              <Trees className="size-4 text-[#6FAE57] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Лесная зона</p>
            </div>
          </div>
        </div>

        {/* Direction to exit — pointing right near the grass */}
        <div className="pointer-events-none absolute right-[5%] top-[72%] -translate-y-1/2">
          <div className="flex items-center overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <div className="flex items-center justify-center gap-1 px-2 py-1.5 md:px-2.5 md:py-2" style={{ background: "#1F3B2C" }}>
              <MapPin className="size-4 text-[#F5F1E6] md:size-5" />
              <ArrowRight className="size-4 text-[#F5F1E6] md:size-5" />
            </div>
            <div className="bg-[#F5F1E6] px-2 py-1.5 md:px-2.5 md:py-2">
              <p className="text-[11px] font-bold leading-none text-[#1F3B2C] md:text-sm">Выход — 200м</p>
            </div>
          </div>
        </div>

        <figcaption className="sr-only">
          Фотомонтаж навигации в парке: маркеры прогулочной тропы, зоны отдыха, центральной площади и указатели направлений к кафе, лесной зоне и выходу.
        </figcaption>
      </figure>

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
