import { SectionTitle } from "@/components/SectionTitle";
import { useScrollReveal } from "@/hooks/useGsap";
import reception from "@/assets/salon-reception.jpg";
import stations from "@/assets/salon-stations.jpg";
import lounge from "@/assets/salon-lounge.jpg";

const PHOTOS = [
  { src: reception, alt: "Reception bianca di Mia Nail con gatto della fortuna dorato e fiori freschi" },
  { src: stations, alt: "Postazioni manicure bianche con centinaia di smalti sulle mensole" },
  { src: lounge, alt: "Zona boutique di Mia Nail con nicchie retroilluminate e sedute in velluto" },
];

export function About() {
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]" });

  return (
    <section id="chi-siamo" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Il salone"
          title="Un angolo di cura nel cuore di Stradella"
          subtitle="Luce naturale, tanto bianco e dettagli dorati: da Mia Nail ogni cliente ha il suo tempo. Dal cambio smalto veloce alla ricostruzione più elaborata, lavoriamo con precisione e prodotti professionali."
        />

        <div ref={ref} className="mt-14 grid gap-5 md:grid-cols-3">
          {PHOTOS.map((p) => (
            <figure key={p.alt} data-reveal className="reveal-init card-lux overflow-hidden">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
