import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mapUrl, PageIntro } from "@/components/site-shell";

const url = "https://mineiro-prime-sabor-sp.lovable.app/localizacao";
export const Route = createFileRoute("/localizacao")({ head: () => ({ meta: [
  { title: "Localização | Restaurante Rei dos Reis" }, { name: "description", content: "Encontre o Restaurante Rei dos Reis na Praça Carlos Gomes, 178, Liberdade, São Paulo - SP." },
  { property: "og:title", content: "Como chegar | Restaurante Rei dos Reis" }, { property: "og:description", content: "Praça Carlos Gomes, 178, Liberdade, São Paulo - SP, CEP 01501-040." }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: url }] }), component: Localizacao });

function Localizacao() { return <><PageIntro eyebrow="Localização" title="No coração da Liberdade." text="Encontre o Restaurante Rei dos Reis na Praça Carlos Gomes, em São Paulo." />
  <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
    <div className="bg-primary p-8 text-primary-foreground sm:p-10"><MapPin className="size-8" /><p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] opacity-70">Endereço</p><address className="mt-3 font-display text-3xl not-italic leading-tight">Praça Carlos Gomes, 178<br />Liberdade<br />São Paulo — SP</address><p className="mt-4 text-sm opacity-80">CEP 01501-040</p><Button asChild variant="light" size="xl" className="mt-8"><a href={mapUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ExternalLink /></a></Button></div>
    <div className="pattern-lattice grid min-h-[420px] place-items-center rounded border border-dashed border-border bg-secondary p-8 text-center"><div><MapPin className="mx-auto size-10 text-primary" /><h2 className="mt-5 font-display text-3xl">Mapa do Restaurante Rei dos Reis</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">Área preparada para a integração do mapa. Enquanto isso, o botão abre o endereço diretamente no Google Maps.</p></div></div>
  </div></section></>; }