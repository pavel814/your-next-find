import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  User,
  Eye,
  Phone,
  Share2,
  Printer,
  ArrowLeft,
  AlertTriangle,
  Clock,
  Ruler,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import missingPerson from "@/assets/missing-person-1.jpg";

interface MissingPersonData {
  status: "urgent" | "active" | "found";
  name: string;
  age: number;
  birthYear: number;
  missingDate: string;
  missingTime: string;
  city: string;
  region: string;
  lastSeenPlace: string;
  height: string;
  build: string;
  hairColor: string;
  eyeColor: string;
  clothing: string[];
  specialFeatures: string[];
  circumstances: string;
  searchStartDate: string;
  caseNumber: string;
  contactPhone: string;
}

const personData: MissingPersonData = {
  status: "urgent",
  name: "Калашников Павел Андреевич",
  age: 45,
  birthYear: 1980,
  missingDate: "30 декабря 2025",
  missingTime: "около 14:00",
  city: "Минск",
  region: "Центральный район",
  lastSeenPlace: "ул. Немига, возле торгового центра",
  height: "176 см",
  build: "худощавое",
  hairColor: "седые, короткие",
  eyeColor: "карие",
  clothing: [
    "Чёрная зимняя куртка с капюшоном",
    "Чёрные спортивные штаны",
    "Белые кроссовки",
    "Серая вязаная шапка",
  ],
  specialFeatures: [
    "Борода седая, средней длины",
    "Шрам на левой брови",
    "Татуировка на правом предплечье",
  ],
  circumstances:
    "Вышел из дома утром 30 декабря, сказал, что идёт в магазин. На связь не выходит, телефон недоступен. Возможно, дезориентирован.",
  searchStartDate: "30 декабря 2025",
  caseNumber: "ПСО-2025-0847",
  contactPhone: "8-915-633-18-03",
};

const statusConfig = {
  urgent: {
    label: "ВНИМАНИЕ! ПРОПАЛ ЧЕЛОВЕК",
    className: "bg-destructive text-destructive-foreground",
    icon: AlertTriangle,
  },
  active: {
    label: "РАЗЫСКИВАЕТСЯ",
    className: "bg-warning text-warning-foreground",
    icon: AlertTriangle,
  },
  found: {
    label: "НАЙДЕН ЖИВ",
    className: "bg-success text-success-foreground",
    icon: Info,
  },
};

const Orientировka = () => {
  const status = statusConfig[personData.status];
  const StatusIcon = status.icon;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `Пропал человек: ${personData.name}`,
        text: `Помогите найти: ${personData.name}, ${personData.age} лет. Пропал ${personData.missingDate}`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background print:bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <main className="pt-24 pb-16 print:pt-4 print:pb-4">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 print:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>

          {/* Status Banner */}
          <div
            className={`${status.className} rounded-xl p-4 mb-6 flex items-center gap-3`}
          >
            <StatusIcon className="w-6 h-6" />
            <span className="font-bold text-lg">{status.label}</span>
            <span className="ml-auto text-sm opacity-80">
              Дело №{personData.caseNumber}
            </span>
          </div>

          {/* Main Card */}
          <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden print:shadow-none print:border-2 print:border-foreground">
            {/* Header with Photo */}
            <div className="bg-secondary p-6 print:bg-muted">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Photo */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative">
                    <img
                      src={missingPerson}
                      alt={personData.name}
                      className="w-48 h-60 object-cover rounded-xl shadow-md border-4 border-primary"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      {personData.age} лет
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {personData.name}
                  </h1>

                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Дата пропажи
                        </p>
                        <p className="font-semibold">
                          {personData.missingDate}, {personData.missingTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Место пропажи
                        </p>
                        <p className="font-semibold">
                          г. {personData.city}, {personData.region}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {personData.lastSeenPlace}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-6">
              {/* Physical Description */}
              <section>
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Приметы
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Ruler className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Рост</p>
                      <p className="font-medium">{personData.height}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Телосложение
                      </p>
                      <p className="font-medium">{personData.build}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Волосы</p>
                      <p className="font-medium">{personData.hairColor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Eye className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Глаза</p>
                      <p className="font-medium">{personData.eyeColor}</p>
                    </div>
                  </div>
                </div>

                {personData.specialFeatures.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Особые приметы:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {personData.specialFeatures.map((feature, index) => (
                        <li key={index} className="text-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Clothing */}
              <section>
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Был одет
                </h2>
                <ul className="space-y-2">
                  {personData.clothing.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Circumstances */}
              <section>
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Обстоятельства пропажи
                </h2>
                <p className="text-foreground bg-secondary p-4 rounded-lg">
                  {personData.circumstances}
                </p>
              </section>

              {/* Contact */}
              <section className="bg-primary/10 rounded-xl p-6 text-center">
                <h2 className="font-bold text-xl mb-2">
                  Если вы видели этого человека
                </h2>
                <p className="text-muted-foreground mb-4">
                  Пожалуйста, свяжитесь с поисково-спасательным отрядом
                </p>
                <a
                  href={`tel:${personData.contactPhone}`}
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-xl hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  {personData.contactPhone}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Горячая линия работает круглосуточно
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="border-t border-border p-4 bg-secondary/50 flex items-center justify-between text-sm text-muted-foreground print:hidden">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Ориентировка от {personData.searchStartDate}
              </div>
              <div className="text-primary font-semibold">ПСО СИРИУС</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 print:hidden">
            <Button size="lg" className="flex-1 min-w-[200px]">
              <Phone className="w-5 h-5 mr-2" />
              Сообщить информацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrint}
            >
              <Printer className="w-5 h-5 mr-2" />
              Распечатать
            </Button>
            <Button variant="outline" size="lg" onClick={handleShare}>
              <Share2 className="w-5 h-5 mr-2" />
              Поделиться
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-muted rounded-xl print:hidden">
            <h3 className="font-bold mb-3">Как вы можете помочь:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                Распечатайте ориентировку и разместите в людных местах
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                Поделитесь в социальных сетях
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                Если видели человека — позвоните на горячую линию
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                Присоединитесь к поискам как волонтёр
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Orientировka;