import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SITE } from "@/data/site";
import { useScrollReveal } from "@/hooks/useGsap";

export function Location() {
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]" });

  return (
    <section id="dove-siamo" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Dove siamo"
          title="In centro a Stradella, aperti tutti i giorni"
        />

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-5">
          <div data-reveal className="reveal-init card-lux space-y-5 p-7 md:col-span-2">
            <p className="flex items-start gap-3 text-sm text-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.zip} {SITE.address.city} ({SITE.address.province})
              </span>
            </p>
            <p className="flex items-center gap-3 text-sm text-foreground">
              <Clock className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {SITE.hours}
            </p>
            <p className="flex items-center gap-3 text-sm text-foreground">
              <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={SITE.phoneHref} className="hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </p>
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Indicazioni stradali
            </a>
          </div>

          <div data-reveal className="reveal-init card-lux overflow-hidden md:col-span-3">
            <iframe
              title="Mappa: Mia Nail, Piazzale Trieste 25, Stradella (PV)"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0 md:h-full md:min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
