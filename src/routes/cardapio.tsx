import { createFileRoute } from "@tanstack/react-router";
import { Beef, Beer, CookingPot, Soup, Utensils, Wheat } from "lucide-react";
import { ContactBand, PageIntro } from "@/components/site-shell";

const url = "https://mineiro-prime-sabor-sp.lovable.app/cardapio";
export const Route = createFileRoute("/cardapio")({ head: () => ({ meta: [
  { title: "Cardápio | Restaurante Rei dos Reis" }, { name: "description", content: "Veja as categorias do cardápio demonstrativo do Restaurante Rei dos Reis: entradas, pratos principais, massas, carnes, acompanhamentos e bebidas." },
  { property: "og:title", content: "Cardápio | Restaurante Rei dos Reis" }, { property: "og:description", content: "Categorias preparadas para receber o cardápio oficial do Restaurante Rei dos Reis." }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: url }] }), component: Cardapio });

function Cardapio() {
  const categories = [[Soup, "Entradas"], [CookingPot, "Pratos principais"], [Wheat, "Massas"], [Beef, "Carnes"], [Utensils, "Acompanhamentos"], [Beer, "Bebidas"]] as const;
  return <><PageIntro eyebrow="Cardápio" title="Categorias para diferentes momentos à mesa." text="Uma estrutura visual preparada para receber os itens oficiais do restaurante." />
    <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl">
      <div className="mb-10 rounded border border-brand-gold bg-secondary p-5 text-sm leading-6"><strong>Cardápio demonstrativo.</strong> As categorias abaixo são exemplos de organização. Nenhum prato, ingrediente ou preço foi atribuído ao restaurante.</div>
      <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([Icon, title], index) => <article key={title} className={`min-w-0 min-h-56 rounded border border-border p-7 ${index === 0 ? "bg-primary text-primary-foreground" : "bg-card"}`}><Icon className="size-7" /><p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] opacity-70">Categoria {String(index + 1).padStart(2, "0")}</p><h2 className="mt-2 break-words font-display text-3xl sm:text-4xl">{title}</h2><p className="mt-3 text-sm opacity-75">Espaço reservado para o conteúdo oficial desta categoria.</p></article>)}</div>
    </div></section><ContactBand /></>;
}