import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

const TITLE = "Termini e Condizioni | Mia Nail Stradella";
const DESCRIPTION =
  "Termini e condizioni d'uso del sito e condizioni di prenotazione dei servizi di Mia Nail, salone di manicure a Stradella (PV).";

export const Route = createFileRoute("/termini-e-condizioni")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termini-e-condizioni" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termini-e-condizioni" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-24 md:pt-44">
      <h1 className="text-4xl font-semibold text-foreground">Termini e Condizioni</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Ultimo aggiornamento: settembre 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Oggetto</h2>
          <p className="mt-2">
            Questo sito è di proprietà di Mia Nail, {SITE.address.street}, {SITE.address.zip}{" "}
            {SITE.address.city} ({SITE.address.province}), e ha finalità informative e
            promozionali sui servizi del salone. La consultazione del sito implica
            l'accettazione dei presenti termini.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Prezzi e listino</h2>
          <p className="mt-2">
            I prezzi pubblicati sono indicativi e comprensivi dello sconto promozionale del 25%
            attualmente attivo. Il costo finale può variare in base alla durata effettiva del
            trattamento, alla lunghezza delle unghie e ai materiali utilizzati. Le promozioni
            possono essere modificate o sospese senza preavviso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Prenotazioni e disdette</h2>
          <p className="mt-2">
            Le prenotazioni si effettuano telefonicamente o via WhatsApp al{" "}
            {SITE.phoneDisplay}. Ti chiediamo di comunicare eventuali disdette con almeno 24 ore
            di anticipo, per consentire di riassegnare l'orario ad altre clienti. Un ritardo
            superiore a 15 minuti può comportare la riduzione o il rinvio del trattamento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Trattamenti e responsabilità</h2>
          <p className="mt-2">
            I trattamenti sono di natura estetica e non sostituiscono consulenze o cure
            mediche. È necessario segnalare prima del trattamento eventuali allergie, patologie
            della pelle o delle unghie, gravidanza o terapie in corso. Mia Nail non risponde di
            reazioni derivanti da informazioni non comunicate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Proprietà intellettuale</h2>
          <p className="mt-2">
            Testi, immagini e marchi presenti sul sito appartengono a Mia Nail o ai rispettivi
            titolari e non possono essere riprodotti senza autorizzazione scritta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Legge applicabile</h2>
          <p className="mt-2">
            I presenti termini sono regolati dalla legge italiana. Per ogni controversia è
            competente il foro del luogo di residenza o domicilio del consumatore, se situato in
            Italia.
          </p>
        </section>
      </div>
    </article>
  );
}
