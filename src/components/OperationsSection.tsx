import { ArrowRight } from "lucide-react";
import operation1 from "@/assets/operation-success-1.jpg";
import operation2 from "@/assets/operation-2.jpg";
import operation3 from "@/assets/operation-3.jpg";

interface Operation {
  id: number;
  image: string;
  status: "found" | "active" | "completed";
  title: string;
  description: string;
  date: string;
  badge?: string;
}

const operations: Operation[] = [
  {
    id: 1,
    image: operation1,
    status: "found",
    badge: "НАЙДЕН ЖИВ",
    title: "Завершён поиск Максима Земляникина",
    description:
      "16 ноября завершились поиски 14-летнего Максима Земляникина, пропавшего 6 ноября в Берёзовском районе. К счастью его нашли живым.",
    date: "25 ноября 2025",
  },
  {
    id: 2,
    image: operation2,
    status: "completed",
    title: "Завершён поиск Максима Земляникина",
    description:
      "16 ноября завершились поиски 14-летнего Максима Земляникина, пропавшего 6 ноября в Берёзовском районе. К счастью, команда нашла подростка живым.",
    date: "Оперативный вызов • 25 ноября 2025",
  },
  {
    id: 3,
    image: operation3,
    status: "completed",
    title: "Завершён поиск Максима Земляникина",
    description:
      "16 ноября завершились поиски 14-летнего Максима Земляникина, пропавшего 6 ноября в Берёзовском районе. Поиски прошли успешно.",
    date: "25 ноября 2025",
  },
];

const statusColors = {
  found: "bg-success text-success-foreground",
  active: "bg-primary text-primary-foreground",
  completed: "bg-muted text-muted-foreground",
};

export function OperationsSection() {
  return (
    <section id="operations" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Последние операции
            </h2>
            <p className="text-muted-foreground">
              Результаты наших поисковых операций
            </p>
          </div>
          <a
            href="#all-operations"
            className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Все операции
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operations.map((op) => (
            <article
              key={op.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={op.image}
                  alt={op.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {op.badge && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${statusColors[op.status]}`}
                  >
                    {op.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {op.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {op.description}
                </p>
                <p className="text-xs text-muted-foreground">{op.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
