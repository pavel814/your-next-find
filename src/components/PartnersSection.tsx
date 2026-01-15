const partners = [
  { name: "Лукойл", logo: "Л" },
  { name: "А100", logo: "А" },
  { name: "МЧС", logo: "М" },
  { name: "Партнёр", logo: "П" },
];

export function PartnersSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
          Наши партнёры
        </h2>

        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-muted rounded-xl px-8 py-6 min-w-[160px] hover:bg-muted/80 transition-colors"
            >
              <div className="text-2xl font-bold text-muted-foreground">
                {partner.logo}
              </div>
              <span className="ml-2 font-semibold text-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
