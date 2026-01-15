import { Phone, Mail, MapPin, Youtube, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "#about" },
  { label: "Операции", href: "#operations" },
  { label: "Новости", href: "#news" },
];

const siteLinks = [
  { label: "Стать добровольцем", href: "#volunteer" },
  { label: "Контакты", href: "#contacts" },
];

export function Footer() {
  return (
    <footer id="contacts" className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ПСО</span>
              </div>
              <div>
                <span className="font-bold text-lg">ПСО СИРИУС</span>
                <p className="text-xs text-primary-foreground/60">
                  Поисково-спасательный отряд
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Добровольческий поисково-спасательный отряд, действующий на безвозмездной основе.
            </p>
            <p className="text-xs text-primary-foreground/50">
              © 2025 ПСО СИРИУС. Все права защищены.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-primary mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h4 className="font-bold text-primary mb-4">Сайт</h4>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-primary mb-4">Связаться</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79156331803"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  8-915-633-18-03
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pso-sirius.by"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@pso-sirius.by
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Беларусь, Минск</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
