import { createFileRoute } from "@tanstack/react-router";
import { Beef, Beer, MapPin, Users } from "lucide-react";
import { ContactBand, PageIntro } from "@/components/site-shell";
import interiorImage from "@/assets/ambiente-restaurante.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "Sobre | O Mineiro Prime" }, { name: "description", content: "Conheça o O Mineiro Prime, restaurante e bar de culinária brasileira e mineira na Consolação." },
    { property: "og:title", content: "Sobre o O Mineiro Prime" }, { property: "og:description", content: "Culinária brasileira e mineira em um ambiente descontraído na Consolação." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/sobre" }] }),
  component: Sobre,
});

function Sobre() {
  const points = [[Beef, "Culinária brasileira e mineira"], [Users, "Ambiente descontraído"], [Beer, "Comidas e bebidas"], [MapPin, "No coração da Consolação"]] as const;
  return <><PageIntro eyebrow="Sobre nós" title="Mineiridade à mesa, com alma paulistana." text="Um restaurante e bar dedicado aos sabores brasileiros e mineiros, feito para reunir pessoas em torno de boa comida e boas conversas." />
    <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
      <img src={interiorImage} alt="Ambiente acolhedor do restaurante" loading="lazy" width={1408} height={1056} className="aspect-[4/3] w-full rounded object-cover" />
      <div><p className="eyebrow text-primary">O Mineiro Prime</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Uma experiência feita para ser compartilhada.</h2><p className="mt-6 leading-7 text-muted-foreground">Na Rua Antônio Carlos, 282, o O Mineiro Prime oferece culinária brasileira e mineira em um espaço descontraído. A proposta reúne comidas, bebidas e a experiência de estar à mesa em plena Consolação.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">{points.map(([Icon, text]) => <div key={text} className="flex items-center gap-3 border-b border-border py-4"><Icon className="size-5 shrink-0 text-primary" /><span className="text-sm font-semibold">{text}</span></div>)}</div>
      </div>
    </div></section><ContactBand /></>;
}