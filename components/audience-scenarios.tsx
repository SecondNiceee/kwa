import { SectionHeading } from "@/components/section-heading"
import { LogIn, Search, MoveRight, TreePine, LogOut } from "lucide-react"

const profile = [
  { k: "Основная аудитория", v: "Жители района: прогулки, спорт, семьи с детьми" },
  { k: "Возрастные группы", v: "Студенты, взрослые, пожилые, родители с детьми" },
  { k: "Цели пребывания", v: "Отдых, прогулка, пробежка, транзит между районами" },
  { k: "Скорость движения", v: "Средняя — пешком и на велосипеде" },
  { k: "Уровень внимания", v: "Низкий: внимание занято природой и собеседником" },
  { k: "Эмоциональное состояние", v: "Спокойствие, расслабленность, отдых" },
]

const scenario = [
  {
    icon: LogIn,
    step: "Вход",
    action: "Заходит в парк со стороны улицы",
    need: "Понять структуру места",
    solution: "Входной пилон с именем парка и картой зон",
  },
  {
    icon: Search,
    step: "Ориентация",
    action: "Останавливается на развилке у моста",
    need: "Быстро считать направления",
    solution: "Указатель-тотем с пиктограммами и расстояниями",
  },
  {
    icon: MoveRight,
    step: "Движение",
    action: "Идёт по тропе к выбранной зоне",
    need: "Не терять маршрут",
    solution: "Напольная графика и подтверждающие пиктограммы",
  },
  {
    icon: TreePine,
    step: "Пребывание",
    action: "Отдыхает у родника / на смотровой",
    need: "Комфорт и информирование",
    solution: "Инфопанель с правилами и маркеры объектов",
  },
  {
    icon: LogOut,
    step: "Выход",
    action: "Возвращается к выходу",
    need: "Найти выход быстро",
    solution: "Контрастные указатели «к выходу»",
  },
]

export function AudienceScenarios() {
  return (
    <section id="audience" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          step="2"
          title="Аудитория и сценарии использования"
          intro="Портрет пользователя определяет режим восприятия: люди движутся неспешно, внимание рассеяно, информация должна считываться мгновенно и без усилия."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">Портрет пользователя</h3>
            <dl className="mt-4 divide-y divide-border">
              {profile.map((p) => (
                <div key={p.k} className="grid grid-cols-1 gap-0.5 py-3 sm:grid-cols-[150px_1fr] sm:gap-3">
                  <dt className="text-sm font-medium text-muted-foreground">{p.k}</dt>
                  <dd className="text-sm text-foreground">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">
              Сценарий: вход → ориентация → движение → пребывание → выход
            </h3>
            <ol className="mt-4 space-y-3">
              {scenario.map((s) => (
                <li key={s.step} className="flex gap-4 rounded-xl border border-border bg-background p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-foreground">{s.step}</p>
                    <p className="text-sm text-muted-foreground">{s.action}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                        Потребность: {s.need}
                      </span>
                      <span className="rounded-md bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-foreground">
                        Решение: {s.solution}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
