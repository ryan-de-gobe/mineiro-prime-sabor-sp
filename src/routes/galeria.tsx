import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { ContactBand, PageIntro } from "@/components/site-shell";
import heroImage from "@/assets/hero-rei-dos-reis.jpg";
import foodImage from "@/assets/mesa-chinesa.jpg";
import interiorImage from "@/assets/ambiente-rei-dos-reis.jpg";

const url = "https://mineiro-prime-sabor-sp.lovable.app/galeria";
export const Route = createFileRoute("/galeria")({ head: () => ({ meta: [
  { title: "Galeria | Restaurante Rei dos Reis" }, { name: "description", content: "Galeria demonstrativa preparada para fotos oficiais dos pratos e do ambiente do Restaurante Rei dos Reis." },
  { property: "og:title", content: "Galeria | Restaurante Rei dos Reis" }, { property: "og:description", content: "Espaço visual para conhecer pratos e ambiente do restaurante." }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: url }] }), component: Galeria });

function Galeria() {
  const images = [[heroImage, "Composição demonstrativa de uma mesa com pratos chineses"], [foodImage, "Composição demonstrativa de pratos da culinária chinesa"], [interiorImage, "Ambiente demonstrativo inspirado em restaurante chinês contemporâneo"]] as const;
  return <><PageIntro eyebrow="Galeria" title="Sabores, detalhes e momentos à mesa." text="Uma prévia visual do espaço reservado para fotografias oficiais do restaurante e de seus pratos." />
    <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><p className="mb-8 rounded border border-brand-gold bg-secondary p-4 text-sm text-muted-foreground"><strong className="text-foreground">Imagens demonstrativas:</strong> serão substituídas por fotografias oficiais do Restaurante Rei dos Reis.</p><div className="grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-3">{images.map(([src, alt], i) => <figure key={alt} className={`group relative overflow-hidden rounded ${i === 0 ? "md:col-span-2 lg:row-span-2" : ""}`}><img src={src} alt={alt} loading="lazy" width={i === 0 ? 1920 : 1408} height={i === 0 ? 1088 : 1056} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></figure>)}<div className="grid place-items-center rounded border border-dashed border-border bg-secondary p-8 text-center"><Camera className="size-7 text-primary" /><p className="mt-4 font-display text-2xl">Espaço para fotos oficiais</p><p className="mt-2 text-sm text-muted-foreground">Pratos, ambiente e experiência.</p></div></div></div></section><ContactBand /></>;
}