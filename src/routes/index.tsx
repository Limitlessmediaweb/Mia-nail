import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionTitle } from "@/components/SectionTitle";
import { PriceList } from "@/components/PriceList";
import { SITE } from "@/data/site";

const TITLE = "Mia Nail Stradella | Manicure, Nail Art e Ricostruzione Gel";
const DESCRIPTION =
  "Salone di manicure e nail art a Stradella (PV): semipermanente, ricostruzione gel, pedicure, ceretta, massaggi ed extension ciglia. Aperti tutti i giorni 8:30–20:30, sconto 25%.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Mia Nail",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.street,
            postalCode: SITE.address.zip,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.province,
            addressCountry: "IT",
          },
          telephone: "+39 329 223 2393",
          url: SITE.domain,
          priceRange: "€€",
          sameAs: [SITE.facebook, SITE.instagram],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:30",
              closes: "20:30",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.3",
            reviewCount: "26",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />

      <section id="servizi" className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Servizi e prezzi"
            title="Il listino, con lo sconto del 25% già applicato"
            subtitle="Prezzo pieno barrato, prezzo scontato in evidenza. Scegli la categoria che ti interessa."
          />
          <div className="mt-12">
            <PriceList />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/servizi"
              className="inline-flex rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Vedi il listino completo
            </Link>
          </div>
        </div>
      </section>

      <Gallery />
      <Reviews />
      <Location />
      <FinalCta />
      <Faq />
    </>
  );
}
