import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock3, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site-shell";

const url = "https://mineiro-prime-sabor-sp.lovable.app/contato";
export const Route = createFileRoute("/contato")({ head: () => ({ meta: [
  { title: "Contato | Restaurante Rei dos Reis" }, { name: "description", content: "Entre em contato com o Restaurante Rei dos Reis pelo telefone (11) 3115-4676 ou Instagram @restaurantereidosreis." },
  { property: "og:title", content: "Contato | Restaurante Rei dos Reis" }, { property: "og:description", content: "Telefone, Instagram e endereço do Restaurante Rei dos Reis na Liberdade." }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: url }] }), component: Contato });

function Contato() { return <><PageIntro eyebrow="Contato" title="Entre em contato com o Rei dos Reis." text="Ligue para o restaurante, acompanhe o Instagram ou consulte a localização na Liberdade." />
  <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-4 md:grid-cols-3">
    <article className="rounded border border-border bg-card p-7"><Phone className="size-7 text-primary" /><p className="mt-10 eyebrow text-muted-foreground">Telefone</p><h2 className="mt-3 font-display text-3xl">(11) 3115-4676</h2><Button asChild variant="brand" size="xl" className="mt-7 w-full"><a href="tel:+551131154676"><Phone /> Ligar agora</a></Button></article>
    <article className="rounded border border-border bg-card p-7"><Instagram className="size-7 text-primary" /><p className="mt-10 eyebrow text-muted-foreground">Instagram</p><h2 className="mt-3 break-words font-display text-2xl">@restaurantereidosreis</h2><Button asChild variant="outline" size="xl" className="mt-7 w-full"><a href="https://instagram.com/restaurantereidosreis" target="_blank" rel="noreferrer"><Instagram /> Abrir Instagram</a></Button></article>
    <article className="rounded border border-border bg-primary p-7 text-primary-foreground"><MapPin className="size-7" /><p className="mt-10 eyebrow opacity-70">Endereço</p><h2 className="mt-3 font-display text-3xl">Praça Carlos Gomes, 178</h2><p className="mt-2 text-sm opacity-80">Liberdade, São Paulo — SP</p><Button asChild variant="light" size="xl" className="mt-7 w-full"><Link to="/localizacao"><MapPin /> Ver localização</Link></Button></article>
  </div><div className="mt-8 flex items-start gap-4 border-l-2 border-brand-gold bg-secondary p-6"><Clock3 className="mt-1 size-6 shrink-0 text-primary" /><div><h2 className="font-display text-2xl">Horários oficiais a confirmar</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Consulte o restaurante por telefone antes da visita. Os horários serão publicados aqui após confirmação.</p></div></div></div></section></>; }