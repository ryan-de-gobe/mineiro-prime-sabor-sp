import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Menu, Phone, UtensilsCrossed } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  ["Início", "/"],
  ["Sobre", "/sobre"],
  ["Cardápio", "/cardapio"],
  ["Galeria", "/galeria"],
  ["Localização", "/localizacao"],
  ["Contato", "/contato"],
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-header-border bg-header/95 text-header-foreground backdrop-blur-md">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="O Mineiro Prime — Início">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-gold text-brand-gold">
            <UtensilsCrossed className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <strong className="block truncate font-display text-xl leading-none">O Mineiro</strong>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold">Prime</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="rounded px-3 py-2 text-sm text-header-muted transition-colors hover:text-header-foreground"
              activeProps={{ className: "text-brand-gold" }}
              activeOptions={{ exact: to === "/" }}
            >
              {label}
            </Link>
          ))}
          <Button asChild variant="brand" size="lg" className="ml-3">
            <a href="tel:+551132841570"><Phone aria-hidden="true" /> Entrar em contato</a>
          </Button>
        </nav>

        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded border border-header-border text-header-foreground transition-colors hover:bg-header-soft" aria-label="Abrir menu">
            <Menu aria-hidden="true" />
          </summary>
          <nav className="absolute right-0 top-14 w-64 overflow-hidden rounded border border-header-border bg-header p-3 shadow-2xl" aria-label="Navegação para celular">
            {navItems.map(([label, to]) => (
              <Link key={to} to={to} className="block rounded px-4 py-3 text-sm text-header-muted hover:bg-header-soft hover:text-header-foreground">
                {label}
              </Link>
            ))}
            <Button asChild variant="brand" className="mt-2 w-full">
              <a href="tel:+551132841570"><Phone aria-hidden="true" /> Entrar em contato</a>
            </Button>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl">O Mineiro Prime</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-footer-muted">Culinária brasileira e mineira em um ambiente descontraído, no coração da Consolação.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Visite</p>
          <address className="mt-4 not-italic text-sm leading-6 text-footer-muted">
            Rua Antônio Carlos, 282<br />Consolação, São Paulo — SP<br />CEP 01309-010
          </address>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Fale conosco</p>
          <div className="mt-4 space-y-3 text-sm text-footer-muted">
            <a className="flex items-center gap-2 hover:text-brand-gold" href="tel:+551132841570"><Phone className="size-4" /> (11) 3284-1570</a>
            <a className="flex items-center gap-2 hover:text-brand-gold" href="https://instagram.com/omineiroprime" target="_blank" rel="noreferrer"><Instagram className="size-4" /> @omineiroprime</a>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-border px-5 py-5 text-center text-xs text-footer-muted">© 2026 O Mineiro Prime. Todos os direitos reservados.</div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-section-dark px-5 pb-16 pt-36 text-section-dark-foreground lg:px-8 lg:pb-20 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-brand-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-section-dark-muted sm:text-lg">{text}</p>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="bg-primary px-5 py-12 text-primary-foreground lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-7 md:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow text-primary-foreground/70">Venha nos visitar</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Um pedacinho de Minas na Consolação.</h2>
        </div>
        <Button asChild variant="light" size="xl">
          <a href="https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+Carlos+282+Consola%C3%A7%C3%A3o+S%C3%A3o+Paulo" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Como chegar</a>
        </Button>
      </div>
    </section>
  );
}