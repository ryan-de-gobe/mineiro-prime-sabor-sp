import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, Soup, UtensilsCrossed, Wheat, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, mapUrl } from "@/components/site-shell";
import heroImage from "@/assets/hero-rei-dos-reis.jpg";
import foodImage from "@/assets/mesa-chinesa.jpg";
import interiorImage from "@/assets/ambiente-rei-dos-reis.jpg";

const siteUrl = "https://mineiro-prime-sabor-sp.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurante Rei dos Reis | Culinária chinesa na Liberdade" },
      { name: "description", content: "Conheça o Restaurante Rei dos Reis, com culinária chinesa e asiática na Praça Carlos Gomes, no bairro da Liberdade, em São Paulo." },
      { property: "og:title", content: "Restaurante Rei dos Reis | Culinária chinesa na Liberdade" },
      { property: "og:description", content: "Culinária chinesa e asiática no coração da Liberdade, em São Paulo." },
      { property: "og:type", content: "website" }, { property: "og:url", content: siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ], links: [{ rel: "canonical", href: siteUrl }],
  }), component: Index,
});

function Index() {
  const highlights: Array<[LucideIcon, string, string]> = [
    [Soup, "Entradas", "Espaço reservado para as opções oficiais"],
    [UtensilsCrossed, "Pratos principais", "Categorias para diferentes momentos"],
    [Wheat, "Massas", "Conteúdo a confirmar com o restaurante"],
  ];
  return <>
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-section-dark pt-20 text-hero-foreground">
      <img src={heroImage} alt="Mesa demonstrativa com variedade de pratos da culinária chinesa" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" fetchPriority="high" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 lg:px-8 lg:pb-20"><div className="max-w-3xl animate-rise">
        <p className="eyebrow text-brand-gold">Restaurante chinês • Liberdade</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Sabores da culinária chinesa no coração da Liberdade</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">Conheça uma proposta dedicada à culinária chinesa e asiática em um dos bairros mais tradicionais de São Paulo.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="brand" size="xl"><Link to="/cardapio">Ver cardápio <ArrowRight /></Link></Button><Button asChild variant="heroOutline" size="xl"><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin /> Como chegar</a></Button></div>
      </div></div>
    </section>

    <section className="bg-background px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div><p className="eyebrow text-primary">À mesa</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Tradição à mesa.<br />Encontros na Liberdade.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">O Restaurante Rei dos Reis apresenta uma proposta gastronômica voltada à culinária chinesa e asiática, com opções para conhecer e compartilhar.</p><Button asChild variant="outline" size="xl" className="mt-8"><Link to="/sobre">Conheça o restaurante <ArrowRight /></Link></Button></div>
      <div className="grid grid-cols-2 gap-3"><figure><img src={foodImage} alt="Composição demonstrativa de pratos da culinária chinesa" loading="lazy" width={1408} height={1056} className="mt-10 aspect-[4/5] w-full rounded object-cover" /><figcaption className="mt-2 text-xs text-muted-foreground">Imagem demonstrativa</figcaption></figure><figure><img src={interiorImage} alt="Ambiente demonstrativo inspirado em restaurante chinês contemporâneo" loading="lazy" width={1408} height={1056} className="aspect-[4/5] w-full rounded object-cover" /><figcaption className="mt-2 text-xs text-muted-foreground">Imagem demonstrativa</figcaption></figure></div>
    </div></section>

    <section className="border-y border-border bg-secondary px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow text-primary">Cardápio</p><h2 className="mt-3 font-display text-4xl">Uma apresentação por categorias.</h2></div><Button asChild variant="outline"><Link to="/cardapio">Ver todas as categorias <ArrowRight /></Link></Button></div><div className="grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-3">{highlights.map(([Icon, title, text]) => <article key={title} className="bg-background p-7"><Icon className="size-6 text-primary" /><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section className="px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-8 border-y border-border py-10 md:grid-cols-[auto_1fr_auto] md:items-center"><Clock3 className="size-8 text-primary" /><div><p className="eyebrow text-primary">Horário de funcionamento</p><h2 className="mt-2 font-display text-3xl">Horários oficiais a confirmar</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Este espaço está preparado para receber os dias e horários informados pelo restaurante.</p></div><Button asChild variant="outline"><a href="tel:+551131154676">Confirmar por telefone</a></Button></div></section>
    <ContactBand />
  </>;
}