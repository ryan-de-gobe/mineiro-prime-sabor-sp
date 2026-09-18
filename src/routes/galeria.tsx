import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { ContactBand, PageIntro } from "@/components/site-shell";
import heroImage from "@/assets/hero-mineiro.jpg";
import foodImage from "@/assets/porcoes-brasileiras.jpg";
import interiorImage from "@/assets/ambiente-restaurante.jpg";

export const Route = createFileRoute("/galeria")({ head: () => ({ meta: [
  { title: "Galeria | O Mineiro Prime" }, { name: "description", content: "Galeria demonstrativa de pratos, bebidas e ambiente do O Mineiro Prime." },
  { property: "og:title", content: "Galeria | O Mineiro Prime" }, { property: "og:description", content: "Veja a proposta visual de pratos e ambiente do O Mineiro Prime." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: "/galeria" }] }), component: Galeria });

function Galeria() {
  const images = [[heroImage, "Imagem demonstrativa de comida brasileira"], [foodImage, "Imagem demonstrativa de uma mesa com porções"], [interiorImage, "Imagem demonstrativa de um ambiente de restaurante e bar"]] as const;
  return <><PageIntro eyebrow="Galeria" title="Comida, encontros e bons momentos." text="Uma demonstração visual do espaço reservado para as fotografias oficiais do restaurante." />
    <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-3">{images.map(([src, alt], i) => <figure key={alt} className={`group relative overflow-hidden rounded ${i === 0 ? "md:col-span-2 lg:row-span-2" : ""}`}><img src={src} alt={alt} loading="lazy" width={i === 0 ? 1920 : 1408} height={i === 0 ? 1088 : 1056} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></figure>)}<div className="grid place-items-center rounded border border-dashed border-border bg-secondary p-8 text-center"><Camera className="size-7 text-primary" /><p className="mt-4 font-display text-2xl">Espaço para fotos oficiais</p><p className="mt-2 text-sm text-muted-foreground">Ambiente, comidas e bebidas.</p></div></div></div></section><ContactBand /></>;
}