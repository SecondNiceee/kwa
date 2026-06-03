import { SectionHeading } from "@/components/section-heading"
import { LogIn, Search, MoveRight, TreePine, LogOut } from "lucide-react"

const profile = [
  { k: "Основная аудитория", v: "Жители микрорайона: от студентов до пожилых люде с разным опытом навигации" },
  { k: "Типичные занятия", v: "Прогулки, утренние пробежки, велопрогулки, семейный отдых, пикники" },
  { k: "Скорость передвижения", v: "Низкая, спокойная — пешком 1,2–1,5 м/с, велосипед 3–5 м/с" },
  { k: "Распределение внимания", v: "Рассеяно между природой, компанией, мобильным телефоном" },
  { k: "Глубина переработки информации", v: "Низкая — люди не читают длинные тексты, замечают только яркие символы и контрасты" },
  { k: "Психологическое состояние", v: "Расслабленность, отдых, поиск спокойствия вдали от городской суеты" },
]

const scenario = [
  {
    icon: LogIn,
    step: "Вход в парк",
    action: "Входит со стороны улицы, ищет первую ориентировку",
    need: "Быстро понять структуру, где главные зоны парка",
    solution: "Входной пилон с именем парка, кратка карта и основные пиктограммы",
  },
  {
    icon: Search,
    step: "Узел ориентации",
    action: "Останавливается на развилке у моста, выбирает направление",
    need: "Мгновенно считать названия и расстояния до 3–4 зон",
    solution: "Указатель-тотем с пиктограммами, стрелками и расстояниями в минутах",
  },
  {
    icon: MoveRight,
    step: "Следование маршруту",
    action: "Идёт по выбранной тропе к целевой зоне",
    need: "Не потеряться, периодически подтверждать правильность пути",
    solution: "Напольная графика, подтверждающие маркеры и стрелки на ключевых точках",
  },
  {
    icon: TreePine,
    step: "Прибытие в зону",
    action: "Прибывает к роднику, смотровой или зоне отдыха, останавливается",
    need: "Узнать название объекта, изучить его, понять рекомендации",
    solution: "Информационный маркер с иконкой, названием и кратким описанием",
  },
  {
    icon: LogOut,
    step: "Возвращение к выходу",
    action: "Заканчивает прогулку, возвращается к входу парка",
    need: "Быстро найти дорогу к выходу, не петлять по паркам",
    solution: "Контрастные указатели «Выход», маршрутные стрелки на развилках",
  },
]

export function AudienceScenarios() {
  return (
    <section id="audience" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          step="2"
          title="Аудитория, сценарии использования и потребности"
          intro="Целевая аудитория — жители района разных возрастов, движущиеся пешком или на велосипеде в спокойном темпе. Внимание рассеяно между природой и окружением. Задача системы — помочь без навязчивости на каждом этапе пути от входа до выхода."
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
