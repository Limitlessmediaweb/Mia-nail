import { createFileRoute } from "@tanstack/react-router";
import { PriceList } from "@/components/PriceList";
import { SectionTitle } from "@/components/SectionTitle";
import { FinalCta } from "@/components/sections/FinalCta";

const TITLE = "Listino servizi e prezzi | Mia Nail Stradella";
const DESCRIPTION =
  "Listino completo Mia Nail a Stradella (PV): manicure, ricostruzione gel, pedicure, ceretta, massaggi, extension ciglia e trucco permanente. Sconto 25% su tutti i servizi.";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servizi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servizi" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--gradient-cream)] px-5 pt-36 pb-16 md:pt-44">
        <SectionTitle
          as="h1"
          eyebrow="Listino"
          title="Tutti i servizi Mia Nail"
          subtitle="Sconto del 25% attivo su tutto il listino: trovi il prezzo pieno barrato e il prezzo scontato in evidenza."
        />
      </section>
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-5">
          <PriceList />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
