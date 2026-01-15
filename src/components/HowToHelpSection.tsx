import { Users, Printer, Car, Share2 } from "lucide-react";

const helpOptions = [
  {
    icon: Users,
    title: "Присоединиться к поискам",
    description:
      "Станьте волонтёром и участвуйте в поисковых экспедициях",
  },
  {
    icon: Printer,
    title: "Распечатать ориентировку",
    description:
      "Скачайте и распечатайте плакаты для распространения",
  },
  {
    icon: Car,
    title: "Помочь снаряжением",
    description:
      "Мы всегда нуждаемся в рациях, GPS-навигаторах, дронах для обследований",
  },
  {
    icon: Share2,
    title: "Поделиться в соцсетях",
    description:
      "Репост ориентировки помогает расширить круг поиска",
  },
];

export function HowToHelpSection() {
  return (
    <section className="py-16 md:py-24 gradient-help">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Как помочь
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Вы можете помочь нашему отряду различными способами. Ваша поддержка
            помогает нам продолжать спасать жизни.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center hover:bg-primary-foreground/10 transition-colors cursor-pointer group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <option.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-primary-foreground/60">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
