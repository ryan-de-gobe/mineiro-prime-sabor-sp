import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Soup, UtensilsCrossed, Users } from "lucide-react";
import { ContactBand, PageIntro } from "@/components/site-shell";
import interiorImage from "@/assets/ambiente-rei-dos-reis.jpg";

const url = "https://mineiro-prime-sabor-sp.lovable.app/sobre";
export const Route = createFileRoute("/sobre")({ head: () => ({ meta: [
  { title: "Sobre | Restaurante Rei dos Reis" }, { name: "description", content: "Conheça a proposta gastronômica do Restaurante Rei dos Reis, restaurante chinês e asiático na Liberdade, em São Paulo." },
  { property: "og:title", content: "Sobre | Restaurante Rei dos Reis" }, { property: "og:description", content: "Uma proposta dedicada à culinária chinesa e asiática na Liberdade." }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: url }] }), component: Sobre });

function Sobre() {
  const points = [[Soup, "Culinária chinesa e asiática"], [Users, "Experiência presencial"], [UtensilsCrossed, "Opções para compartilhar"], [MapPin, "No bairro da Liberdade"]] as const;
  return <><PageIntro eyebrow="Sobre nós" title="Culinária chinesa em uma localização especial de São Paulo." text="O Restaurante Rei dos Reis recebe quem deseja conhecer sabores da culinária chinesa e asiática no bairro da Liberdade." />
    <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
      <figure><img src={interiorImage} alt="Imagem demonstrativa de ambiente inspirado em restaurante chinês" loading="lazy" width={1408} height={1056} className="aspect-[4/3] w-full rounded object-cover" /><figcaption className="mt-2 text-xs text-muted-foreground">Imagem demonstrativa para substituição por fotografia oficial.</figcaption></figure>
      <div><p className="eyebrow text-primary">Restaurante Rei dos Reis</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Uma proposta gastronômica para conhecer e compartilhar.</h2><p className="mt-6 leading-7 text-muted-foreground">Localizado na Praça Carlos Gomes, 178, o restaurante apresenta uma proposta voltada à culinária chinesa e asiática. Informações sobre história, equipe e especialidades serão incluídas somente após confirmação oficial.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{points.map(([Icon, text]) => <div key={text} className="flex items-center gap-3 border-b border-border py-4"><Icon className="size-5 shrink-0 text-primary" /><span className="text-sm font-semibold">{text}</span></div>)}</div></div>
    </div></section><ContactBand /></>;
}