import { Star } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { REVIEWS, SITE } from "@/data/site";
import { useCountUp, useScrollReveal } from "@/hooks/useGsap";

export function Reviews() {
  const ratingRef = useCountUp<HTMLSpanElement>(SITE.rating, 1);
  const countRef = useCountUp<HTMLSpanElement>(SITE.reviewCount, 0);
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]" });

  return (
    <section id="recensioni" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Recensioni"
          title="Cosa dicono le nostre clienti"
          subtitle="Valutazioni reali raccolte su Google."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-5 rounded-2xl border border-gold-soft bg-card px-7 py-5 shadow-[var(--shadow-soft)]">
            <div className="text-center">
              <p className="font-display text-4xl font-semibold text-primary">
                <span ref={ratingRef}>0,0</span>
                <span className="text-lg text-muted-foreground">/5</span>
              </p>
              <div className="mt-1 flex justify-center gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`size-3.5 ${i <= 4 ? "fill-primary text-primary" : "text-border"}`}
                  />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" aria-hidden="true" />
            <div className="text-sm text-muted-foreground">
              <p>
                <span ref={countRef} className="text-xl font-semibold text-foreground">
                  0
                </span>{" "}
                recensioni Google
              </p>
              <a
                href={SITE.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-primary underline"
              >
                Vedi tutte le recensioni
              </a>
            </div>
          </div>
        </div>

        <div ref={ref} className="mt-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4500, stopOnMouseEnter: true, stopOnInteraction: false })]}
            className="mx-auto max-w-4xl"
          >
            <CarouselContent>
              {REVIEWS.map((r) => (
                <CarouselItem key={r.name} className="md:basis-1/2">
                  <figure data-reveal className="reveal-init card-lux h-full p-6">
                    <div className="flex gap-0.5" aria-label={`${r.stars} stelle su 5`}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          aria-hidden="true"
                          className={`size-4 ${
                            i <= r.stars ? "fill-primary text-primary" : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-4 text-xs text-muted-foreground">
                      {r.name} · {r.when}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Recensione precedente" className="hidden md:flex" />
            <CarouselNext aria-label="Recensione successiva" className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
