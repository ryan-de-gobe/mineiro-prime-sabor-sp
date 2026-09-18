import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site-shell";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+Carlos+282+Consola%C3%A7%C3%A3o+S%C3%A3o+Paulo";
export const Route = createFileRoute("/localizacao")({ head: () => ({ meta: [
  { title: "Localização | O Mineiro Prime" }, { name: "description", content: "Encontre o O Mineiro Prime na Rua Antônio Carlos, 282, Consolação, São Paulo - SP." },
  { property: "og:title", content: "Como chegar | O Mineiro Prime" }, { property: "og:description", content: "Rua Antônio Carlos, 282, Consolação, São Paulo - SP, CEP 01309-010." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: "/localizacao" }] }), component: Localizacao });

function Localizacao() { return <><PageIntro eyebrow="Localização" title="No coração da Consolação." text="Estamos na Rua Antônio Carlos, perto de tudo e prontos para receber você." />
  <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
    <div className="bg-primary p-8 text-primary-foreground sm:p-10"><MapPin className="size-8" /><p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] opacity-70">Endereço</p><address className="mt-3 font-display text-3xl not-italic leading-tight">Rua Antônio Carlos, 282<br />Consolação<br />São Paulo — SP</address><p className="mt-4 text-sm opacity-80">CEP 01309-010</p><Button asChild variant="light" size="xl" className="mt-8"><a href={mapUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ExternalLink /></a></Button></div>
    <div className="grid min-h-[420px] place-items-center rounded border border-dashed border-border bg-secondary p-8 text-center"><div><MapPin className="mx-auto size-10 text-primary" /><h2 className="mt-5 font-display text-3xl">Mapa do O Mineiro Prime</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">Área preparada para integração com o Google Maps. Use o botão ao lado para abrir a rota agora.</p></div></div>
  </div></section></>; }