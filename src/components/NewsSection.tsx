import { ArrowRight, Calendar, MapPin } from "lucide-react";
import operation2 from "@/assets/operation-2.jpg";

interface NewsItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  date: string;
  location?: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    image: operation2,
    tag: "Тест",
    title: "тест",
    date: "26 декабря 2025",
    location: "Минск",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Новости отряда
            </h2>
          </div>
          <a
            href="#all-news"
            className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Все новости
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-card text-foreground shadow">
                  {item.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
