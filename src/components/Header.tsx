import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Отчёты о поисках", href: "#operations" },
  { label: "Новости", href: "#news" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">ПСО</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg">ПСО СИРИУС</span>
            <p className="text-xs text-muted-foreground">Поисково-спасательный отряд</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href="tel:+79156331803" className="hidden lg:flex items-center gap-2 text-sm font-medium">
            <Phone className="w-4 h-4 text-primary" />
            <span>8-915-633-18-03</span>
          </a>
          <Button size="sm" className="hidden sm:flex">
            Сообщить о пропаже
          </Button>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-full mt-2">
              Сообщить о пропаже
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
