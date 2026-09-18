import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/contato")({ head: () => ({ meta: [
  { title: "Contato | O Mineiro Prime" }, { name: "description", content: "Entre em contato com o O Mineiro Prime pelo telefone (11) 3284-1570 ou Instagram @omineiroprime." },
  { property: "og:title", content: "Contato | O Mineiro Prime" }, { property: "og:description", content: "Telefone, Instagram e endereço do O Mineiro Prime na Consolação." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: "/contato" }] }), component: Contato });

function Contato() { return <><PageIntro eyebrow="Contato" title="Vamos conversar?" text="Fale com o O Mineiro Prime por telefone, acompanhe pelo Instagram ou venha nos visitar na Consolação." />
  <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
    <article className="rounded border border-border bg-card p-7"><Phone className="size-7 text-primary" /><p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Telefone</p><h2 className="mt-3 font-display text-3xl">(11) 3284-1570</h2><Button asChild variant="brand" size="xl" className="mt-7 w-full"><a href="tel:+551132841570"><Phone /> Ligar agora</a></Button></article>
    <article className="rounded border border-border bg-card p-7"><Instagram className="size-7 text-primary" /><p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Instagram</p><h2 className="mt-3 font-display text-3xl">@omineiroprime</h2><Button asChild variant="outline" size="xl" className="mt-7 w-full"><a href="https://instagram.com/omineiroprime" target="_blank" rel="noreferrer"><Instagram /> Abrir Instagram</a></Button></article>
    <article className="rounded border border-border bg-primary p-7 text-primary-foreground"><MapPin className="size-7" /><p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] opacity-70">Endereço</p><h2 className="mt-3 font-display text-3xl">Rua Antônio Carlos, 282</h2><p className="mt-2 text-sm opacity-80">Consolação, São Paulo — SP</p><Button asChild variant="light" size="xl" className="mt-7 w-full"><Link to="/localizacao"><MapPin /> Ver localização</Link></Button></article>
  </div></section></>; }