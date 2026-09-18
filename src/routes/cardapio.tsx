import { createFileRoute } from "@tanstack/react-router";
import { Beef, Beer, CakeSlice, CookingPot, Utensils } from "lucide-react";
import { ContactBand, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/cardapio")({
  head: () => ({ meta: [
    { title: "Cardápio | O Mineiro Prime" }, { name: "description", content: "Veja as categorias do cardápio demonstrativo do O Mineiro Prime: pratos, porções, carnes, bebidas e sobremesas." },
    { property: "og:title", content: "Cardápio | O Mineiro Prime" }, { property: "og:description", content: "Categorias do cardápio do restaurante O Mineiro Prime na Consolação." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/cardapio" }] }), component: Cardapio,
});

function Cardapio() {
  const categories = [[CookingPot, "Pratos"], [Utensils, "Porções"], [Beef, "Carnes"], [Beer, "Bebidas"], [CakeSlice, "Sobremesas"]] as const;
  return <><PageIntro eyebrow="Cardápio" title="Sabores para todos os momentos." text="Uma demonstração visual de como as categorias do cardápio podem ser apresentadas." />
    <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl">
      <div className="mb-10 rounded border border-brand-gold bg-secondary p-5 text-sm leading-6"><strong>Cardápio demonstrativo.</strong> Esta apresentação utiliza apenas categorias gerais e não informa pratos, ingredientes ou preços.</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([Icon, title], index) => <article key={title} className={`min-h-56 rounded border border-border p-7 ${index === 0 ? "bg-primary text-primary-foreground" : "bg-card"}`}><Icon className="size-7" /><p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] opacity-70">Categoria {String(index + 1).padStart(2, "0")}</p><h2 className="mt-2 font-display text-4xl">{title}</h2><p className="mt-3 text-sm opacity-75">Exemplo de espaço para o conteúdo oficial desta categoria.</p></article>)}</div>
    </div></section><ContactBand /></>;
}