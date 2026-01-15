import { useState } from "react";
import { Button } from "@/components/ui/button";

type MapFilter = "active" | "completed";

export function MapSection() {
  const [filter, setFilter] = useState<MapFilter>("active");

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Где были поиски
          </h2>
          <p className="text-muted-foreground">
            Интерактивная карта наших поисковых операций
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={filter === "active" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("active")}
          >
            Активные поиски
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("completed")}
          >
            Поиски завершены
          </Button>
        </div>

        {/* Map Placeholder */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-lg bg-muted">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=27.3%2C53.8%2C27.7%2C54.0&layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
            title="Карта поисков"
          />
          <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-muted-foreground">
            © OpenStreetMap
          </div>
        </div>
      </div>
    </section>
  );
}
