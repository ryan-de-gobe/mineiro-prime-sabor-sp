import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beef, Beer, Heart, MapPin, UtensilsCrossed, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand } from "@/components/site-shell";
import heroImage from "@/assets/hero-mineiro.jpg";
import foodImage from "@/assets/porcoes-brasileiras.jpg";
import interiorImage from "@/assets/ambiente-restaurante.jpg";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Mineiro Prime | Restaurante mineiro na Consolação" },
      { name: "description", content: "Culinária brasileira e mineira, porções, carnes e bebidas na Rua Antônio Carlos, 282, Consolação, São Paulo." },
      { property: "og:title", content: "O Mineiro Prime | Sabor mineiro em São Paulo" },
      { property: "og:description", content: "Conheça o O Mineiro Prime, restaurante e bar de culinária brasileira e mineira na Consolação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const highlights: Array<[LucideIcon, string, string]> = [
    [UtensilsCrossed, "Culinária mineira", "Sabores brasileiros em destaque"],
    [Heart, "Ambiente descontraído", "Para compartilhar bons momentos"],
    [Beef, "Comidas e porções", "Opções para diferentes ocasiões"],
    [Beer, "Bebidas", "Para acompanhar sua experiência"],
  ];

  return (
    <>
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-section-dark pt-20 text-hero-foreground">
        <img src={heroImage} alt="Mesa com carne grelhada e acompanhamentos da culinária brasileira" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" fetchPriority="high" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow text-brand-gold">Culinária brasileira • Consolação</p>
            <h1 className="mt-5 font-display text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">Sabor mineiro no coração de São Paulo</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">Comida brasileira, boas bebidas e um ambiente descontraído para aproveitar sem pressa.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl"><Link to="/cardapio">Conheça nosso cardápio <ArrowRight /></Link></Button>
              <Button asChild variant="heroOutline" size="xl"><a href="https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+Carlos+282+Consola%C3%A7%C3%A3o+S%C3%A3o+Paulo" target="_blank" rel="noreferrer"><MapPin /> Como chegar</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="eyebrow text-primary">À mesa</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Comida que acolhe.<br />Encontro que fica.</h2>
            <p className="mt-6 max-w-lg leading-7 text-muted-foreground">O O Mineiro Prime reúne a culinária brasileira e mineira, opções de comidas e bebidas e um ambiente descontraído na Consolação.</p>
            <Button asChild variant="outline" size="xl" className="mt-8"><Link to="/sobre">Conheça o restaurante <ArrowRight /></Link></Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={foodImage} alt="Porções e carnes servidas à mesa" loading="lazy" width={1408} height={1056} className="mt-10 aspect-[4/5] w-full rounded object-cover" />
            <img src={interiorImage} alt="Ambiente acolhedor de restaurante e bar" loading="lazy" width={1408} height={1056} className="aspect-[4/5] w-full rounded object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(([Icon, title, text]) => (
            <div key={title} className="bg-background p-7">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="eyebrow text-primary">Avaliações</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">A experiência de quem nos visita</h2>
          <div className="mx-auto mt-10 max-w-2xl rounded border border-dashed border-border bg-secondary px-6 py-12">
            <p className="font-display text-2xl">Espaço reservado para avaliações reais</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Os depoimentos de clientes poderão ser adicionados aqui após a aprovação do proprietário.</p>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
