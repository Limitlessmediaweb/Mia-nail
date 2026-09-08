import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useScrollReveal, useParallax } from "@/hooks/useGsap";
import reception from "@/assets/salon-reception.webp";
import stations from "@/assets/salon-stations.webp";
import boutique from "@/assets/salon-boutique.webp";
import nude from "@/assets/nails-nude.jpg";
import french from "@/assets/nails-french.jpg";
import pedicure from "@/assets/pedicure.jpg";
import lashes from "@/assets/lashes.jpg";

const IMAGES = [
  { src: boutique, alt: "Postazioni manicure di Mia Nail con nicchie retroilluminate e smalti a vista" },
  { src: reception, alt: "Reception del salone Mia Nail a Stradella con scritta welcome" },
  { src: nude, alt: "Manicure semipermanente nude lucida realizzata da Mia Nail" },
  { src: stations, alt: "Postazioni manicure bianche e mensole di smalti nel salone Mia Nail" },
  { src: french, alt: "French manicure con dettagli oro realizzata da Mia Nail" },
  { src: lashes, alt: "Extension ciglia effetto naturale eseguite da Mia Nail" },
  { src: pedicure, alt: "Set per pedicure spa con asciugamani e ciotola dorata" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]", stagger: 0.08 });
  const parallax = useParallax<HTMLDivElement>(30);

  return (
    <section id="galleria" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Galleria"
          title="I nostri lavori e il nostro spazio"
          subtitle="Qualche scatto dal salone e dai trattamenti più richiesti."
        />

        <div ref={parallax}>
          <div ref={ref} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {IMAGES.map((img, i) => (
              <button
                key={img.alt}
                data-reveal
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Ingrandisci immagine: ${img.alt}`}
                className={`reveal-init card-lux group overflow-hidden ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-3xl border-gold-soft bg-card p-2">
          <DialogTitle className="sr-only">Immagine ingrandita</DialogTitle>
          {openIndex !== null && (
            <img
              src={IMAGES[openIndex]!.src}
              alt={IMAGES[openIndex]!.alt}
              className="h-auto w-full rounded-xl object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
