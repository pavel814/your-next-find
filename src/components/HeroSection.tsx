import { Button } from "@/components/ui/button";
import { Users, MapPin, Heart } from "lucide-react";
import heroImage from "@/assets/hero-search-rescue.jpg";

const stats = [
  { icon: Heart, value: "50+", label: "Спасённых жизней" },
  { icon: MapPin, value: "5", label: "Активных операций" },
  { icon: Users, value: "60+", label: "Добровольцев" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Поисково-спасательный отряд в действии"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            Рядом, когда важно
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Поисково-спасательный
            <br />
            отряд СИРИУС.
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Добровольческий поисково-спасательный отряд.
            <br />
            Отряд оказывает помощь на безвозмездной основе.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Сообщить о пропаже →
            </Button>
            <Button variant="heroOutline" size="xl">
              Стать добровольцем
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-24 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">
              Статистика:
            </span>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
