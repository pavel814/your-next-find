import { MissingPersonCard } from "./MissingPersonCard";
import { ArrowRight } from "lucide-react";

export function HelpFindSection() {
  return (
    <section id="missing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Помогите найти
            </h2>
            <p className="text-muted-foreground">
              Люди, которых мы ищем прямо сейчас
            </p>
          </div>
          <a
            href="#all-missing"
            className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Все заявки
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="max-w-2xl">
          <MissingPersonCard />
        </div>
      </div>
    </section>
  );
}
