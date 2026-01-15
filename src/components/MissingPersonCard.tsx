import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User, Eye, AlertTriangle } from "lucide-react";
import missingPerson from "@/assets/missing-person-1.jpg";

interface MissingPersonData {
  status: "urgent" | "active" | "found";
  name: string;
  age: number;
  missingDate: string;
  city: string;
  region: string;
  height: string;
  build: string;
  lastSeen: string;
  lastSeenDetails: string;
  features: string[];
  searchStartDate: string;
}

const personData: MissingPersonData = {
  status: "urgent",
  name: "Калашников Павел Андреевич",
  age: 45,
  missingDate: "30 декабря 2025",
  city: "Минск",
  region: "Минск",
  height: "176 см",
  build: "худощавого",
  lastSeen: "Чёрная куртка с капюшоном, чёрные спортивные штаны, белые кроссовки",
  lastSeenDetails: "с 27 декабря 2025 года в центральном районе города Минска",
  features: ["среднего роста", "худощавое телосложение"],
  searchStartDate: "27 декабря 2025",
};

const statusConfig = {
  urgent: {
    label: "ВНИМАНИЕ! ПРОПАЛ ЧЕЛОВЕК",
    className: "bg-destructive text-destructive-foreground",
  },
  active: {
    label: "РАЗЫСКИВАЕТСЯ",
    className: "bg-warning text-warning-foreground",
  },
  found: {
    label: "НАЙДЕН ЖИВ",
    className: "bg-success text-success-foreground",
  },
};

export function MissingPersonCard() {
  const status = statusConfig[personData.status];

  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
      <div className={`px-4 py-2 ${status.className}`}>
        <span className="font-bold text-sm flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          {status.label}
        </span>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src={missingPerson}
              alt={personData.name}
              className="w-32 h-40 object-cover rounded-lg shadow-md"
            />
            <div className="mt-2 text-center">
              <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-medium">
                {personData.age} лет
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3">
            <h3 className="font-bold text-lg text-foreground">{personData.name}</h3>

            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <span className="text-muted-foreground">Дата пропажи:</span>
                  <br />
                  <span className="font-medium">{personData.missingDate}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">{personData.city}</span>
                  <br />
                  <span className="text-muted-foreground">{personData.region}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <span className="text-muted-foreground">Приметы:</span>
                  <br />
                  <span className="font-medium">рост {personData.height},</span>
                  <br />
                  <span>{personData.build} телосложения</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Eye className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <span className="text-muted-foreground">Был одет:</span>
                  <br />
                  <span>{personData.lastSeen}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Ориентировка с {personData.searchStartDate}</span>
          </div>
        </div>

        <Button className="w-full mt-4" size="lg">
          Сообщить информацию
        </Button>
      </div>
    </div>
  );
}
