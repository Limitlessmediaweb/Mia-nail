import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "@/components/SectionTitle";
import { FAQS } from "@/data/site";
import { useScrollReveal } from "@/hooks/useGsap";

export function Faq() {
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]", stagger: 0.07 });

  return (
    <section id="faq" className="section-pad bg-background">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle
          eyebrow="FAQ"
          title="Domande frequenti"
          subtitle="Le risposte alle domande che ci fanno più spesso."
        />

        <div ref={ref} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                data-reveal
                className="reveal-init rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)] transition-colors hover:border-gold-soft"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
