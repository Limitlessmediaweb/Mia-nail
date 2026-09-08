import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SITE, WHATSAPP_URL } from "@/data/site";
import { useScrollReveal } from "@/hooks/useGsap";

export function FinalCta() {
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]" });

  return (
    <section className="section-pad bg-[var(--gradient-cream)]">
      <div ref={ref} className="mx-auto max-w-3xl px-5 text-center">
        <SectionTitle
          eyebrow="Prenota"
          title="Prenota il tuo appuntamento"
          subtitle="Scrivici su WhatsApp o chiamaci: ti confermiamo l'orario in pochi minuti, tutti i giorni dalle 8:30 alle 20:30."
        />

        <div data-reveal className="reveal-init mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.04]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Scrivi su WhatsApp
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </div>

        <div data-reveal className="reveal-init mt-7 flex justify-center gap-3">
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pagina Facebook di Mia Nail"
            className="rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Facebook className="size-4" aria-hidden="true" />
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo Instagram di Mia Nail"
            className="rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Instagram className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
